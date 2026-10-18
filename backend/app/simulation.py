"""Sesión de simulación de UNA partícula en el sincrotrón (Fase 1).

Cada punto de la trayectoria lo calcula el motor físico (physics.boris_step) y se guarda
en `rows` con todos sus diagnósticos, de modo que cualquier punto puede inspeccionarse.
El tiempo físico es t = i·dt; la velocidad de animación del frontend es independiente.
"""
from __future__ import annotations

import math
from typing import Literal, Optional

import numpy as np
from pydantic import BaseModel, Field

from .constants import C, E_CHARGE, EPS0, HBAR
from .physics import (SPECIES, SynchrotronFields, boris_step, circular_power, energy_loss_per_turn,
                      gamma_of, kinetic_energy, lienard_power, lorentz_acceleration,
                      momentum_from_kinetic, transit_time_factor, velocity, cross)

FIELDS = ["i", "t", "x", "y", "z", "px", "py", "pz", "vx", "vy", "vz",
          "Bx", "By", "Bz", "Ex", "Ey", "Ez", "gamma", "ekin_MeV", "r", "dr", "turns",
          "power_W", "ecrit_eV", "radiated_J", "work_E_J", "energy_residual", "inside"]


class SimParams(BaseModel):
    species: Literal["electron", "positron", "proton"] = "electron"
    kinetic_energy_MeV: float = Field(50.0, gt=0, le=1e6)
    ring_radius_m: float = Field(1.0, gt=0)
    b_field_T: Optional[float] = Field(None, gt=0)          # None => campo de referencia
    dp_rel: float = Field(0.0, gt=-0.9, lt=10)              # δp/p inicial
    dr_m: float = 0.0                                        # desplazamiento radial inicial
    start_angle_deg: float = -90.0
    n_magnets: int = Field(8, ge=1, le=64)                   # sólo visual
    aperture_r_m: Optional[float] = Field(None, gt=0)        # None => 0.10 R
    aperture_z_m: Optional[float] = Field(None, gt=0)        # None => 0.05 R
    rf_voltage_V: float = Field(5e3, ge=0)
    rf_phase_deg: float = 180.0                              # fase vista por la partícula de referencia
    rf_harmonic: int = Field(1, ge=1, le=64)
    rf_gap_m: Optional[float] = Field(None, gt=0)            # None => 0.08 R
    cavity_angle_deg: float = 0.0
    dt_s: Optional[float] = Field(None, gt=0)                # None => T_rev / steps_per_turn
    steps_per_turn: int = Field(1000, ge=20, le=100_000)
    n_steps: int = Field(6000, ge=1, le=500_000)


def _wrap(a: float) -> float:
    return (a + math.pi) % (2.0 * math.pi) - math.pi


class Simulation:
    def __init__(self, params: SimParams, sim_id: str = ""):
        self.id = sim_id
        self.params = params
        sp = SPECIES[params.species]
        self.sp = sp
        R = self.R = params.ring_radius_m
        self.a_r = params.aperture_r_m or 0.10 * R
        self.a_z = params.aperture_z_m or 0.05 * R
        self.gap = params.rf_gap_m or 0.08 * R

        # --- órbita de referencia: B tal que ρ = p/(|q| B) = R para la energía elegida
        self.p_ref = momentum_from_kinetic(params.kinetic_energy_MeV * 1e6 * E_CHARGE, sp.mass)
        pref_vec = np.array([0.0, self.p_ref, 0.0])
        self.v_ref = float(np.linalg.norm(velocity(pref_vec, sp.mass)))
        self.gamma_ref = gamma_of(pref_vec, sp.mass)
        self.b_ref = self.p_ref / (abs(sp.charge) * R)
        self.b_used = params.b_field_T or self.b_ref
        self.t_rev = 2.0 * math.pi * R / self.v_ref
        self.dt = params.dt_s or self.t_rev / params.steps_per_turn

        # --- RF: ω = h ω_rev; la fase se define en el cruce de la partícula de referencia
        self.theta0 = math.radians(params.start_angle_deg)
        self.theta_c = math.radians(params.cavity_angle_deg)
        self.omega_rf = params.rf_harmonic * self.v_ref / R
        arc = (self.theta_c - self.theta0) % (2.0 * math.pi)
        t_cross = R * arc / self.v_ref
        self.phase_offset = math.radians(params.rf_phase_deg) - self.omega_rf * t_cross

        self.fields = SynchrotronFields(sp.charge, R, self.b_used, self.a_r, self.a_z,
                                        params.rf_voltage_V, self.omega_rf, self.phase_offset,
                                        self.gap, self.theta_c)
        self.reset()

    # ------------------------------------------------------------------ estado
    def reset(self) -> None:
        p = self.params
        r0 = self.R + p.dr_m
        x0 = np.array([r0 * math.cos(self.theta0), r0 * math.sin(self.theta0), 0.0])
        p0 = self.p_ref * (1.0 + p.dp_rel) * np.array([-math.sin(self.theta0), math.cos(self.theta0), 0.0])
        self.x, self.p = x0, p0
        self.t = 0.0
        self.step_index = 0
        self.theta_prev = math.atan2(x0[1], x0[0])
        self.theta_cum = 0.0
        self.radiated = 0.0
        self.work = 0.0
        self.T0 = kinetic_energy(p0, self.sp.mass)
        self.lost = False
        self.lost_reason: Optional[str] = None
        self.rows: list[list[float]] = []
        diag = self._diagnose(x0, p0, 0.0)
        self._power_prev = diag["power"]
        self.rows.append(self._row(0, diag))
        if not self.fields.inside(x0):
            self._flag_lost()

    @property
    def finished(self) -> bool:
        return self.step_index >= self.params.n_steps

    def _flag_lost(self) -> None:
        self.lost = True
        r = math.hypot(self.x[0], self.x[1])
        self.lost_reason = "radial" if abs(r - self.R) > self.a_r else "vertical"

    # ------------------------------------------------------------- diagnósticos
    def _diagnose(self, x, p, t) -> dict:
        sp = self.sp
        E, B = self.fields(x, t)
        v = velocity(p, sp.mass)
        a = lorentz_acceleration(p, E, B, sp.charge, sp.mass)
        g = gamma_of(p, sp.mass)
        power = lienard_power(p, a, sp.charge, sp.mass)
        vmag = float(np.linalg.norm(v))
        a_perp = float(np.linalg.norm(cross(v, a))) / vmag if vmag > 0 else 0.0
        ecrit = 0.0
        if a_perp > 1e-9:                      # radio de curvatura instantáneo ρ = v²/a⊥
            rho = vmag ** 2 / a_perp
            ecrit = 1.5 * HBAR * C * g ** 3 / rho / E_CHARGE
        return dict(E=E, B=B, v=v, gamma=g, ekin=kinetic_energy(p, sp.mass),
                    power=power, ecrit=ecrit)

    def _row(self, i: int, d: dict) -> list[float]:
        x, p = self.x, self.p
        r = math.hypot(x[0], x[1])
        resid = (d["ekin"] - self.T0 - self.work) / self.T0
        vals = [i, self.t, *x, *p, *d["v"], *d["B"], *d["E"], d["gamma"], d["ekin"] / (1e6 * E_CHARGE),
                r, r - self.R, self.theta_cum / (2.0 * math.pi), d["power"], d["ecrit"],
                self.radiated, self.work, resid, 1.0 if self.fields.inside(x) else 0.0]
        return [float(v) for v in vals]

    def point(self, i: int) -> dict:
        return dict(zip(FIELDS, self.rows[i]))

    # ------------------------------------------------------------------ avance
    def _one_step(self) -> None:
        sp = self.sp
        x_new, p_new, E_half = boris_step(self.x, self.p, self.t, self.dt, sp.charge, sp.mass, self.fields)
        self.work += sp.charge * float(np.dot(E_half, x_new - self.x))   # trabajo del campo E (B no aporta)
        self.x, self.p = x_new, p_new
        self.step_index += 1
        self.t = self.step_index * self.dt
        th = math.atan2(x_new[1], x_new[0])
        self.theta_cum += _wrap(th - self.theta_prev)
        self.theta_prev = th
        diag = self._diagnose(x_new, p_new, self.t)
        # Energía que se habría radiado (integral de P dt). NO se resta de la partícula en la Fase 1.
        self.radiated += 0.5 * (self._power_prev + diag["power"]) * self.dt
        self._power_prev = diag["power"]
        self.rows.append(self._row(self.step_index, diag))
        if not self.fields.inside(x_new):
            self._flag_lost()

    def advance(self, n: int) -> list[list[float]]:
        start = len(self.rows)
        for _ in range(n):
            if self.lost or self.finished:
                break
            self._one_step()
        return self.rows[start:]

    # --------------------------------------------------------- datos derivados
    def derived(self) -> dict:
        sp, R, prm = self.sp, self.R, self.params
        q = abs(sp.charge)
        p0 = self.p_ref * (1.0 + prm.dp_rel)
        rho = p0 / (q * self.b_used)                      # radio de curvatura real
        r0 = R + prm.dr_m
        d = abs(r0 - rho)                                  # distancia centro-origen
        r_max, r_min = rho + d, abs(rho - d)
        confined = (abs(r0 - R) <= self.a_r and r_max <= R + self.a_r and r_min >= R - self.a_r)

        ttf = transit_time_factor(0.5 * (self.omega_rf / self.v_ref) * self.gap)
        gain_eV = prm.rf_voltage_V * math.sin(math.radians(prm.rf_phase_deg)) * ttf
        u0_J = energy_loss_per_turn(sp.charge, sp.mass, self.p_ref, R)
        p_rad = circular_power(sp.charge, sp.mass, self.p_ref, R)
        g = self.gamma_ref
        ecrit = 1.5 * HBAR * C * g ** 3 / R / E_CHARGE

        warnings: list[str] = []
        if not confined:
            warnings.append(
                f"Parámetros incompatibles con la órbita: con B = {self.b_used:.4g} T (referencia {self.b_ref:.4g} T) "
                f"el radio de curvatura es ρ = {rho:.4f} m y r oscilará en [{r_min:.3f}, {r_max:.3f}] m; "
                f"la apertura es [{R - self.a_r:.3f}, {R + self.a_r:.3f}] m → se prevé pérdida de confinamiento.")
        elif abs(rho - R) > 1e-6 * R or abs(prm.dr_m) > 0 or prm.dp_rel != 0:
            warnings.append(
                f"La órbita no coincide con la de referencia: ρ = {rho:.4f} m, r ∈ [{r_min:.4f}, {r_max:.4f}] m "
                "(desviación calculada, dentro de la apertura).")
        if abs(gain_eV) > 1e-3:
            drho = gain_eV * E_CHARGE / (self.v_ref * q * self.b_used)
            warnings.append(
                f"La RF cambia la energía {gain_eV:+.4g} eV/vuelta con B constante (sin rampa en la Fase 1): "
                f"el radio de curvatura derivará ≈ {drho * 1e3:+.4g} mm/vuelta y acabará saliendo de la apertura.")
        return dict(
            p_ref=self.p_ref, gamma_ref=g, beta_ref=self.v_ref / C, b_ref_T=self.b_ref, b_used_T=self.b_used,
            bz_T=self.fields.bz, t_rev_s=self.t_rev, f_rev_Hz=1.0 / self.t_rev, f_rf_Hz=self.omega_rf / (2 * math.pi),
            dt_s=self.dt, total_time_s=self.dt * prm.n_steps, steps_per_turn=self.t_rev / self.dt,
            rho_m=rho, r_min_pred_m=r_min, r_max_pred_m=r_max, confined_predicted=confined,
            aperture_r_m=self.a_r, aperture_z_m=self.a_z, rf_gap_m=self.gap, cavity_angle_rad=self.theta_c,
            transit_time_factor=ttf, rf_gain_per_turn_eV=gain_eV,
            rad_loss_per_turn_eV=u0_J / E_CHARGE, rad_power_ref_W=p_rad, ecrit_ref_eV=ecrit,
            cone_half_angle_rad=1.0 / g, warnings=warnings,
            notes=["Radiación: se calcula (Liénard) pero NO se resta a la partícula; Fase 1 sin reacción de radiación.",
                   "Modelo de campos: B_z uniforme en toda la cámara (dipolos contiguos); E tangencial sólo en el hueco RF."],
        )

    def snapshot(self) -> dict:
        return dict(id=self.id, params=self.params.model_dump(), derived=self.derived(), fields=FIELDS,
                    n_points=len(self.rows), lost=self.lost, lost_reason=self.lost_reason, finished=self.finished)
