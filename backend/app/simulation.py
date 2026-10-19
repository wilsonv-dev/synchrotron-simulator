"""Sesiones de simulación del sincrotrón.

Modo "single" (Fase 1): UNA partícula. Cada punto de la trayectoria lo calcula el motor físico
(physics.boris_step) y se guarda en `rows` con todos sus diagnósticos.

Modos "multi" y "bunch" (Fase 2): de 1 a 100 partículas independientes, cada una con su carga,
masa, posición, momento y trayectoria propias. Todas avanzan con el MISMO reloj físico
(t = i·dt) bajo los MISMOS campos externos del anillo (imanes + cavidad RF), que están
sintonizados para la partícula de referencia (`species`, `kinetic_energy_MeV`).
Por defecto las partículas interactúan ÚNICAMENTE con esos campos externos. Con `interactions=True`
(Fase 3) se añade la fuerza electrostática de Coulomb instantánea entre cada par de partículas
confinadas. Es una aproximación (ver physics.py y INTERACTION_LIMITS): no es una simulación
electromagnética relativista completa del haz ni representa todos los efectos colectivos de un bunch.
No se añaden pérdidas de energía.

El tiempo físico es t = i·dt; la velocidad de animación del frontend es independiente.
"""
from __future__ import annotations

import math
import re
from typing import Literal, Optional

import numpy as np
from pydantic import BaseModel, Field, field_validator, model_validator

from .constants import C, E_CHARGE, HBAR, K_COULOMB
from .physics import (SPECIES, Species, SynchrotronFields, boris_step, boris_step_batch, boris_step_batch_force,
                      circular_power, coulomb_energy, coulomb_forces_rmin, coulomb_pairs, cross, pair_indices,
                      energy_loss_per_turn, gamma_batch, gamma_of, ion_species, kinetic_energy, kinetic_energy_batch,
                      lienard_power, lienard_power_batch, lorentz_acceleration, lorentz_acceleration_batch,
                      momentum_from_kinetic, transit_time_factor, velocity, velocity_batch)

FIELDS = ["i", "t", "x", "y", "z", "px", "py", "pz", "vx", "vy", "vz",
          "Bx", "By", "Bz", "Ex", "Ey", "Ez", "gamma", "ekin_MeV", "r", "dr", "turns",
          "power_W", "ecrit_eV", "radiated_J", "work_E_J", "energy_residual", "inside"]

MAX_PARTICLES = 100
MAX_PARTICLE_STEPS = 1_000_000          # límite de memoria del historial en modo multi/bunch
MEV = 1e6 * E_CHARGE
INTERACTION_NOTE = ("Las partículas interactúan únicamente con los campos externos del acelerador "
                    "(imanes y cavidad RF). No hay fuerzas entre partículas en esta fase.")
_HEX = re.compile(r"^#[0-9a-fA-F]{6}$")
FIELDS_INTERACTING = FIELDS + ["work_int_J"]   # + trabajo acumulado de la fuerza de Coulomb entre partículas

# --- Interacciones (Fase 3): resolución de encuentros cercanos
# No se suaviza el potencial (sería cambiar la física). En su lugar, en cada paso dt del reloj común se
# eligen n subpasos h = dt/n para TODO el sistema de modo que h ≤ η·τ_min, con τ el menor de los tiempos
# característicos de cada par: r/|v_rel| (sobrevuelo) y sqrt(r/a), a = k|q_i q_j|/(γ m r²) (caída libre).
# El tiempo de sobrevuelo sólo se exige si el encuentro es apreciable: su ángulo de desviación estimado
# (Rutherford, ángulo pequeño) χ = 2k|q_i q_j|/(γ m r v_rel²) ≥ CHI_MIN. Un sobrevuelo con χ < CHI_MIN cambia
# la velocidad relativa menos que CHI_MIN·v_rel, así que muestrearlo con el paso normal introduce un error
# del impulso de ese orden como máximo (cota explícita, no un suavizado de la fuerza).
# Los resultados se guardan sólo en múltiplos de dt, así que el reloj común no cambia.
SUBSTEP_ETA = 0.05
CHI_MIN = 1e-6
MAX_SUBSTEPS = 256                      # si hiciera falta más, el paso se cuenta como NO resuelto (se avisa)
BOHR_RADIUS = 5.29177210903e-11         # m; por debajo, dos cargas puntuales clásicas dejan de ser un modelo válido
INTERACTION_LIMITS = [
    "Interacciones: fuerza de Coulomb electrostática instantánea entre pares de partículas confinadas, sumada a "
    "la fuerza de Lorentz de los campos externos. Es una aproximación: no incluye el campo magnético creado por "
    "las propias partículas, ni el retardo, ni la radiación entre ellas; no es una simulación electromagnética "
    "relativista completa del haz.",
    "Para cargas que viajan juntas con factor γ, la fuerza neta real en el laboratorio es ~1/γ² de la de Coulomb "
    "(la atracción magnética compensa casi toda la repulsión eléctrica): este modelo la sobreestima en haces relativistas.",
    "Cada partícula simulada es una única carga real (no una macropartícula): el modelo no representa la carga "
    "espacial de un bunch real (~10⁹–10¹¹ partículas) ni otros efectos colectivos.",
    "Encuentros cercanos: sin suavizado del potencial; subpasos adaptativos de todo el sistema dentro de cada dt. "
    "Por debajo del radio de Bohr el modelo clásico de cargas puntuales no es válido y se avisa.",
    "Las partículas que salen de la cámara de vacío dejan de interactuar. Las predicciones analíticas de "
    "confinamiento ignoran las interacciones.",
]


# ----------------------------------------------------------------------------
# Parámetros
# ----------------------------------------------------------------------------
class SpeciesSpec(BaseModel):
    """Especie: las conocidas usan sus constantes CODATA; el ion es configurable (Z, masa en u)."""
    species: Literal["electron", "positron", "proton", "ion"] = "electron"
    ion_charge_state: int = Field(2, ge=-100, le=100)        # Z (carga = Z·e); sólo para ion
    ion_mass_u: float = Field(4.001506179, gt=0, le=300)    # masa [u]; por defecto, partícula alfa

    @model_validator(mode="after")
    def _check_ion(self):
        if self.species == "ion":
            if self.ion_charge_state == 0:
                raise ValueError("Un ion debe tener carga distinta de cero (Z ≠ 0): una partícula neutra no se curva.")
            if self.ion_mass_u < 0.99 * abs(self.ion_charge_state):
                raise ValueError(f"Ion físicamente inconsistente: con |Z| = {abs(self.ion_charge_state)} "
                                 f"la masa debe ser ≥ {abs(self.ion_charge_state)} u aprox. (cada carga elemental "
                                 f"de un núcleo aporta al menos un protón); se recibió {self.ion_mass_u} u.")
        return self

    def resolve(self) -> Species:
        if self.species == "ion":
            return ion_species(self.ion_charge_state, self.ion_mass_u)
        return SPECIES[self.species]


class ParticleParams(SpeciesSpec):
    """Una partícula del modo multi. Posición y dirección relativas a la órbita de referencia
    en el ángulo inicial (start_angle_deg)."""
    id: Optional[str] = Field(None, pattern=r"^[A-Za-z0-9_\-]{1,16}$")
    energy_input: Literal["kinetic", "momentum"] = "kinetic"
    kinetic_energy_MeV: float = Field(50.0, gt=0, le=1e6)
    momentum_MeV_c: float = Field(50.5, gt=0, le=1e6)
    dr_m: float = 0.0                                       # desplazamiento radial
    dz_m: float = 0.0                                       # desplazamiento vertical
    ds_m: float = 0.0                                       # desplazamiento a lo largo del arco
    direction: Literal["forward", "backward"] = "forward"   # sentido respecto a la órbita de referencia
    yaw_mrad: float = Field(0.0, ge=-500, le=500)           # ángulo horizontal (hacia fuera > 0)
    pitch_mrad: float = Field(0.0, ge=-500, le=500)         # ángulo vertical (hacia +z > 0)
    color: str = "#7cf5ff"
    visible: bool = True
    trail_visible: bool = True
    trail_opacity: float = Field(0.9, ge=0.05, le=1.0)

    @field_validator("color")
    @classmethod
    def _color(cls, v: str) -> str:
        if not _HEX.match(v):
            raise ValueError("El color debe tener formato #rrggbb")
        return v.lower()


class BunchParams(SpeciesSpec):
    """Paquete de partículas alrededor de la posición de referencia. Los tamaños son RMS (σ):
    gaussiana truncada a ±3σ o uniforme en ±√3σ (misma σ). Reproducible con `seed`."""
    n_particles: int = Field(50, ge=2, le=MAX_PARTICLES)
    central_energy_MeV: Optional[float] = Field(None, gt=0, le=1e6)   # None => energía de referencia
    sigma_s_m: float = Field(0.03, ge=0, le=10)       # longitud (a lo largo del arco)
    sigma_x_m: float = Field(0.004, ge=0, le=10)      # anchura (radial)
    sigma_z_m: float = Field(0.002, ge=0, le=10)      # altura (vertical)
    sigma_delta: float = Field(0.003, ge=0, le=0.1)   # dispersión relativa de momento Δp/p
    distribution: Literal["gaussian", "uniform"] = "gaussian"
    seed: int = Field(42, ge=0, le=2**32 - 1)
    display: Literal["particles", "envelope", "both"] = "both"
    color: str = "#ffb84d"
    trail_visible: bool = True
    trail_opacity: float = Field(0.25, ge=0.05, le=1.0)

    @field_validator("color")
    @classmethod
    def _color(cls, v: str) -> str:
        if not _HEX.match(v):
            raise ValueError("El color debe tener formato #rrggbb")
        return v.lower()

    @property
    def max_abs_u(self) -> float:
        """Máximo |desviación|/σ que puede generar la distribución."""
        return 3.0 if self.distribution == "gaussian" else math.sqrt(3.0)


def default_particles() -> list[ParticleParams]:
    return [
        ParticleParams(id="p1", species="electron", kinetic_energy_MeV=50.0, color="#7cf5ff"),
        ParticleParams(id="p2", species="electron", kinetic_energy_MeV=51.0, ds_m=-0.05, color="#ff4fd8"),
        ParticleParams(id="p3", species="electron", kinetic_energy_MeV=50.0, dr_m=-0.03, color="#8fe66f"),
    ]


class SimParams(BaseModel):
    mode: Literal["single", "multi", "bunch"] = "single"
    # --- partícula de referencia (modo single: la partícula simulada; multi/bunch: sintoniza B y RF)
    species: Literal["electron", "positron", "proton"] = "electron"
    kinetic_energy_MeV: float = Field(50.0, gt=0, le=1e6)
    ring_radius_m: float = Field(1.0, gt=0)
    b_field_T: Optional[float] = Field(None, gt=0)          # None => campo de referencia
    dp_rel: float = Field(0.0, gt=-0.9, lt=10)              # δp/p inicial (sólo modo single)
    dr_m: float = 0.0                                        # desplazamiento radial inicial (sólo modo single)
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
    # --- Fase 2
    particles: list[ParticleParams] = Field(default_factory=default_particles, max_length=MAX_PARTICLES)
    bunch: BunchParams = Field(default_factory=BunchParams)
    # --- Fase 3: fuerzas de Coulomb entre partículas (sólo modos multi y bunch; el modo single lo ignora)
    interactions: bool = False

    @model_validator(mode="after")
    def _check_multi(self):
        if self.mode == "single":
            return self
        R = self.ring_radius_m
        a_r = self.aperture_r_m or 0.10 * R
        a_z = self.aperture_z_m or 0.05 * R
        if self.mode == "multi":
            n = len(self.particles)
            if not 1 <= n <= MAX_PARTICLES:
                raise ValueError(f"El modo múltiple admite entre 1 y {MAX_PARTICLES} partículas (recibidas {n}).")
            seen = set()
            for k, p in enumerate(self.particles):
                if p.id is None:
                    p.id = f"p{k + 1}"
                if p.id in seen:
                    raise ValueError(f"Identificador de partícula repetido: {p.id}")
                seen.add(p.id)
                if abs(p.dr_m) > a_r or abs(p.dz_m) > a_z:
                    raise ValueError(f"Partícula {p.id}: la posición inicial (dr = {p.dr_m} m, dz = {p.dz_m} m) "
                                     f"está fuera de la cámara de vacío (|dr| ≤ {a_r:g} m, |dz| ≤ {a_z:g} m).")
                if abs(p.ds_m) > math.pi * R:
                    raise ValueError(f"Partícula {p.id}: |ds| debe ser ≤ πR = {math.pi * R:g} m.")
            if self.interactions:
                theta0 = math.radians(self.start_angle_deg)
                xs = np.array([particle_initial_state(p, p.resolve(), R, theta0)[0] for p in self.particles])
                check_min_separation(xs, [p.id for p in self.particles])
        else:
            b = self.bunch
            n = b.n_particles
            u = b.max_abs_u
            if u * b.sigma_x_m >= a_r or u * b.sigma_z_m >= a_z:
                raise ValueError(f"El bunch no cabe en la cámara de vacío: con distribución {b.distribution} "
                                 f"se necesita {u:.3g}·σ_x < {a_r:g} m y {u:.3g}·σ_z < {a_z:g} m.")
            if u * b.sigma_s_m >= math.pi * R:
                raise ValueError(f"El bunch es más largo que medio anillo: se necesita {u:.3g}·σ_s < πR = {math.pi * R:g} m.")
            if u * b.sigma_delta >= 0.9:
                raise ValueError("Dispersión de momento demasiado grande: algunas partículas tendrían p ≤ 0.")
        if n * self.n_steps > MAX_PARTICLE_STEPS:
            raise ValueError(f"Demasiado historial: partículas × pasos = {n * self.n_steps} > {MAX_PARTICLE_STEPS}. "
                             "Reduce el número de pasos o de partículas.")
        return self


def check_min_separation(X: np.ndarray, ids: list[str]) -> None:
    """Con interacciones, dos cargas puntuales en el mismo punto tendrían energía infinita, y por debajo del
    radio de Bohr el modelo clásico no es aplicable: esas condiciones iniciales se rechazan."""
    if len(X) < 2:
        return
    i, j, _, r = coulomb_pairs(X, np.zeros(len(X)))
    k = int(np.argmin(r))
    if r[k] < BOHR_RADIUS:
        raise ValueError(f"Con interacciones activadas, las partículas {ids[i[k]]} y {ids[j[k]]} empiezan a "
                         f"{r[k]:.3g} m (< radio de Bohr {BOHR_RADIUS:.3g} m): la fuerza de Coulomb entre cargas "
                         "puntuales diverge y el modelo clásico no es válido. Sepáralas (Δr, Δz o Δs).")


def _wrap(a: float) -> float:
    return (a + math.pi) % (2.0 * math.pi) - math.pi


# ----------------------------------------------------------------------------
# Elementos compartidos por los dos tipos de sesión
# ----------------------------------------------------------------------------
def setup_machine(obj, params: SimParams) -> None:
    """Anillo sintonizado para la partícula de referencia (params.species, params.kinetic_energy_MeV)."""
    sp = SPECIES[params.species]
    obj.sp = sp
    R = obj.R = params.ring_radius_m
    obj.a_r = params.aperture_r_m or 0.10 * R
    obj.a_z = params.aperture_z_m or 0.05 * R
    obj.gap = params.rf_gap_m or 0.08 * R

    # --- órbita de referencia: B tal que ρ = p/(|q| B) = R para la energía elegida
    obj.p_ref = momentum_from_kinetic(params.kinetic_energy_MeV * MEV, sp.mass)
    pref_vec = np.array([0.0, obj.p_ref, 0.0])
    obj.v_ref = float(np.linalg.norm(velocity(pref_vec, sp.mass)))
    obj.gamma_ref = gamma_of(pref_vec, sp.mass)
    obj.b_ref = obj.p_ref / (abs(sp.charge) * R)
    obj.b_used = params.b_field_T or obj.b_ref
    obj.t_rev = 2.0 * math.pi * R / obj.v_ref
    obj.dt = params.dt_s or obj.t_rev / params.steps_per_turn

    # --- RF: ω = h ω_rev; la fase se define en el cruce de la partícula de referencia
    obj.theta0 = math.radians(params.start_angle_deg)
    obj.theta_c = math.radians(params.cavity_angle_deg)
    obj.omega_rf = params.rf_harmonic * obj.v_ref / R
    arc = (obj.theta_c - obj.theta0) % (2.0 * math.pi)
    t_cross = R * arc / obj.v_ref
    obj.phase_offset = math.radians(params.rf_phase_deg) - obj.omega_rf * t_cross

    # Campos externos fijos en el espacio: los MISMOS para todas las partículas.
    obj.fields = SynchrotronFields(sp.charge, R, obj.b_used, obj.a_r, obj.a_z,
                                   params.rf_voltage_V, obj.omega_rf, obj.phase_offset,
                                   obj.gap, obj.theta_c)


def machine_info(obj, params: SimParams) -> dict:
    """Datos derivados del anillo y de la partícula de referencia."""
    ttf = transit_time_factor(0.5 * (obj.omega_rf / obj.v_ref) * obj.gap)
    gain_eV = params.rf_voltage_V * math.sin(math.radians(params.rf_phase_deg)) * ttf
    sp = obj.sp
    return dict(
        p_ref=obj.p_ref, gamma_ref=obj.gamma_ref, beta_ref=obj.v_ref / C, b_ref_T=obj.b_ref, b_used_T=obj.b_used,
        bz_T=obj.fields.bz, t_rev_s=obj.t_rev, f_rev_Hz=1.0 / obj.t_rev, f_rf_Hz=obj.omega_rf / (2 * math.pi),
        dt_s=obj.dt, total_time_s=obj.dt * params.n_steps, steps_per_turn=obj.t_rev / obj.dt,
        aperture_r_m=obj.a_r, aperture_z_m=obj.a_z, rf_gap_m=obj.gap, cavity_angle_rad=obj.theta_c,
        transit_time_factor=ttf, rf_gain_per_turn_eV=gain_eV,
        rad_loss_per_turn_eV=energy_loss_per_turn(sp.charge, sp.mass, obj.p_ref, obj.R) / E_CHARGE,
        rad_power_ref_W=circular_power(sp.charge, sp.mass, obj.p_ref, obj.R),
        ecrit_ref_eV=1.5 * HBAR * C * obj.gamma_ref ** 3 / obj.R / E_CHARGE,
        cone_half_angle_rad=1.0 / obj.gamma_ref,
    )


def diagnose(fields, x, p, t, q: float, m: float) -> dict:
    E, B = fields(x, t)
    v = velocity(p, m)
    a = lorentz_acceleration(p, E, B, q, m)
    g = gamma_of(p, m)
    power = lienard_power(p, a, q, m)
    vmag = float(np.linalg.norm(v))
    a_perp = float(np.linalg.norm(cross(v, a))) / vmag if vmag > 0 else 0.0
    ecrit = 0.0
    if a_perp > 1e-9:                      # radio de curvatura instantáneo ρ = v²/a⊥
        rho = vmag ** 2 / a_perp
        ecrit = 1.5 * HBAR * C * g ** 3 / rho / E_CHARGE
    return dict(E=E, B=B, v=v, gamma=g, ekin=kinetic_energy(p, m), power=power, ecrit=ecrit)


def make_row(i, t, x, p, d, R, T0, work, theta_cum, radiated, inside: bool) -> list[float]:
    r = math.hypot(x[0], x[1])
    resid = (d["ekin"] - T0 - work) / T0
    vals = [i, t, *x, *p, *d["v"], *d["B"], *d["E"], d["gamma"], d["ekin"] / MEV,
            r, r - R, theta_cum / (2.0 * math.pi), d["power"], d["ecrit"],
            radiated, work, resid, 1.0 if inside else 0.0]
    return [float(v) for v in vals]


# ----------------------------------------------------------------------------
# Modo single (Fase 1): sin cambios de comportamiento
# ----------------------------------------------------------------------------
class Simulation:
    mode = "single"

    def __init__(self, params: SimParams, sim_id: str = ""):
        self.id = sim_id
        self.params = params
        setup_machine(self, params)
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
        return diagnose(self.fields, x, p, t, self.sp.charge, self.sp.mass)

    def _row(self, i: int, d: dict) -> list[float]:
        return make_row(i, self.t, self.x, self.p, d, self.R, self.T0, self.work, self.theta_cum,
                        self.radiated, self.fields.inside(self.x))

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
        # Energía que se habría radiado (integral de P dt). NO se resta de la partícula.
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
        info = machine_info(self, prm)
        gain_eV = info["rf_gain_per_turn_eV"]

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
            **info, mode="single",
            rho_m=rho, r_min_pred_m=r_min, r_max_pred_m=r_max, confined_predicted=confined, warnings=warnings,
            notes=["Radiación: se calcula (Liénard) pero NO se resta a la partícula; Fase 1 sin reacción de radiación.",
                   "Modelo de campos: B_z uniforme en toda la cámara (dipolos contiguos); E tangencial sólo en el hueco RF."],
        )

    def snapshot(self) -> dict:
        return dict(id=self.id, mode="single", params=self.params.model_dump(), derived=self.derived(),
                    fields=FIELDS, n_points=len(self.rows), lost=self.lost, lost_reason=self.lost_reason,
                    finished=self.finished)


# ----------------------------------------------------------------------------
# Condiciones iniciales de las partículas (modo multi y bunch)
# ----------------------------------------------------------------------------
def _local_frame(theta: float):
    tangent = np.array([-math.sin(theta), math.cos(theta), 0.0])
    radial = np.array([math.cos(theta), math.sin(theta), 0.0])
    return tangent, radial, np.array([0.0, 0.0, 1.0])


def particle_initial_state(pp: ParticleParams, sp: Species, R: float, theta0: float):
    """(x0, p0) en SI a partir de los desplazamientos y ángulos respecto a la órbita de referencia."""
    theta = theta0 + pp.ds_m / R
    r0 = R + pp.dr_m
    x0 = np.array([r0 * math.cos(theta), r0 * math.sin(theta), pp.dz_m])
    if pp.energy_input == "kinetic":
        p_mag = momentum_from_kinetic(pp.kinetic_energy_MeV * MEV, sp.mass)
    else:
        p_mag = pp.momentum_MeV_c * MEV / C
    yaw, pitch = pp.yaw_mrad * 1e-3, pp.pitch_mrad * 1e-3
    sgn = 1.0 if pp.direction == "forward" else -1.0
    tangent, radial, up = _local_frame(theta)
    d = (sgn * math.cos(yaw) * math.cos(pitch)) * tangent + (math.sin(yaw) * math.cos(pitch)) * radial \
        + math.sin(pitch) * up
    return x0, p_mag * d


def generate_bunch(b: BunchParams, ref_kinetic_MeV: float, R: float, theta0: float):
    """Genera el bunch (determinista con la semilla). Devuelve (x0 (N,3), p0 (N,3), u (N,4)), donde
    u son las desviaciones normalizadas (s, x, z, δ) en unidades de σ."""
    sp = b.resolve()
    rng = np.random.default_rng(b.seed)
    n = b.n_particles
    if b.distribution == "gaussian":
        u = rng.standard_normal((n, 4))
        bad = np.any(np.abs(u) > 3.0, axis=1)
        while bad.any():                                   # gaussiana truncada a ±3σ (reproducible)
            u[bad] = rng.standard_normal((int(bad.sum()), 4))
            bad = np.any(np.abs(u) > 3.0, axis=1)
    else:
        u = rng.uniform(-math.sqrt(3.0), math.sqrt(3.0), (n, 4))   # misma σ que la gaussiana
    T_c = b.central_energy_MeV or ref_kinetic_MeV
    p_c = momentum_from_kinetic(T_c * MEV, sp.mass)
    x0 = np.empty((n, 3))
    p0 = np.empty((n, 3))
    for k in range(n):
        s, dx, dz, delta = u[k, 0] * b.sigma_s_m, u[k, 1] * b.sigma_x_m, u[k, 2] * b.sigma_z_m, u[k, 3] * b.sigma_delta
        theta = theta0 + s / R
        r0 = R + dx
        x0[k] = [r0 * math.cos(theta), r0 * math.sin(theta), dz]
        p0[k] = p_c * (1.0 + delta) * _local_frame(theta)[0]
    return x0, p0, u


# ----------------------------------------------------------------------------
# Modos multi y bunch (Fase 2)
# ----------------------------------------------------------------------------
class MultiSimulation:
    """N partículas independientes con reloj común y campos externos comunes.

    El historial guarda, en cada paso y para cada partícula, el estado (x, p) y los acumulados
    (vueltas, energía radiada calculada, trabajo de E). Las filas de diagnóstico completas se
    reconstruyen a partir de ese estado con las mismas funciones que el modo single.
    """

    def __init__(self, params: SimParams, sim_id: str = ""):
        self.id = sim_id
        self.params = params
        self.mode = params.mode
        setup_machine(self, params)
        self.meta: list[dict] = []
        if self.mode == "bunch":
            b = params.bunch
            sp = b.resolve()
            self.x_init, self.p_init, self.bunch_u = generate_bunch(b, params.kinetic_energy_MeV, self.R, self.theta0)
            for k in range(b.n_particles):
                self.meta.append(dict(pid=f"b{k + 1}", species=b.species, label=sp.name, charge_C=sp.charge,
                                      mass_kg=sp.mass, color=b.color, visible=True, trail_visible=b.trail_visible,
                                      trail_opacity=b.trail_opacity))
            self.q = np.full(b.n_particles, sp.charge)
            self.m = np.full(b.n_particles, sp.mass)
        else:
            xs, ps, qs, ms = [], [], [], []
            for pp in params.particles:
                sp = pp.resolve()
                x0, p0 = particle_initial_state(pp, sp, self.R, self.theta0)
                xs.append(x0); ps.append(p0); qs.append(sp.charge); ms.append(sp.mass)
                self.meta.append(dict(pid=pp.id, species=pp.species, label=sp.name, charge_C=sp.charge,
                                      mass_kg=sp.mass, color=pp.color, visible=pp.visible,
                                      trail_visible=pp.trail_visible, trail_opacity=pp.trail_opacity))
            self.x_init, self.p_init = np.array(xs), np.array(ps)
            self.q, self.m = np.array(qs), np.array(ms)
            self.bunch_u = None
        self.n = len(self.meta)
        self.pid_index = {m["pid"]: k for k, m in enumerate(self.meta)}
        self.T0 = kinetic_energy_batch(self.p_init, self.m)
        self.interactions = bool(params.interactions)
        self.field_names = FIELDS_INTERACTING if self.interactions else FIELDS
        if self.interactions and self.mode == "bunch":
            check_min_separation(self.x_init, [m["pid"] for m in self.meta])
        self.reset()

    # ------------------------------------------------------------------ estado
    def reset(self) -> None:
        self.X = self.x_init.copy()
        self.P = self.p_init.copy()
        self.step_index = 0
        self.t = 0.0
        self.theta_prev = np.arctan2(self.X[:, 1], self.X[:, 0])
        self.theta_cum = np.zeros(self.n)
        self.radiated = np.zeros(self.n)
        self.work = np.zeros(self.n)
        self.work_int = np.zeros(self.n)
        inside = self.fields.inside_batch(self.X)
        self.alive = inside.copy()
        self.lost_step = np.where(inside, -1, 0)
        self._power_prev = self._power(self.X, self.P, 0.0, np.arange(self.n))
        self._hx = [self.X.copy()]
        self._hp = [self.P.copy()]
        self._hacc = [self._acc()]
        # diagnósticos de la interacción
        self.min_pair_distance = math.inf
        self.max_substeps = 1
        self.unresolved_steps = 0
        self._pair_cache = None
        self._hU = [self._potential()] if self.interactions else []

    def _acc(self) -> np.ndarray:
        return np.stack([self.theta_cum, self.radiated, self.work, self.work_int], axis=1)

    def _potential(self) -> float:
        """Energía de Coulomb de las partículas confinadas en el estado actual."""
        a = self.alive
        if a.sum() < 2:
            return 0.0
        X, q = self.X[a], self.q[a]
        i, j, _, r = coulomb_pairs(X, q)
        self.min_pair_distance = min(self.min_pair_distance, float(r.min()))
        self._pair_cache = (self.step_index, r)          # se reutiliza en _substeps del paso siguiente
        return float(np.sum(K_COULOMB * q[i] * q[j] / r))

    def _power(self, X, P, t, idx) -> np.ndarray:
        E, B = self.fields.batch(X, t)
        A = lorentz_acceleration_batch(P, E, B, self.q[idx], self.m[idx])
        return lienard_power_batch(P, A, self.q[idx], self.m[idx])

    @property
    def n_points(self) -> int:
        return len(self._hx)

    @property
    def lost(self) -> bool:
        return not self.alive.any()

    @property
    def lost_reason(self) -> Optional[str]:
        return "all" if self.lost else None

    @property
    def finished(self) -> bool:
        return self.step_index >= self.params.n_steps or self.lost

    # ------------------------------------------------------------------ avance
    def _substeps(self, X, P, q, m) -> int:
        """Número de subpasos para resolver el encuentro más cercano (ver SUBSTEP_ETA)."""
        cache = getattr(self, "_pair_cache", None)
        if cache is not None and cache[0] == self.step_index and len(cache[1]) == len(X) * (len(X) - 1) // 2:
            i, j = pair_indices(len(X))
            r = cache[1]                                  # mismas posiciones: no se recalculan las distancias
        else:
            i, j, _, r = coulomb_pairs(X, q)
        v = velocity_batch(P, m)
        dv = v[i] - v[j]
        vrel = np.sqrt(np.einsum("ij,ij->i", dv, dv))
        gm = gamma_batch(P, m) * m                       # inercia transversal γm (la menor: criterio conservador)
        acc = K_COULOMB * np.abs(q[i] * q[j]) / (np.minimum(gm[i], gm[j]) * r * r)
        vsafe = np.where(vrel > 0, vrel, 1.0)
        chi = 2.0 * acc * r / (vsafe * vsafe)                       # = 2k|qq|/(γ m r v_rel²)
        t_fly = np.where((vrel > 0) & (chi >= CHI_MIN), r / vsafe, np.inf)
        tau = np.minimum(t_fly, np.sqrt(r / acc))
        need = math.ceil(self.dt / (SUBSTEP_ETA * float(tau.min())))
        if need > MAX_SUBSTEPS:
            self.unresolved_steps += 1
        n = max(1, min(need, MAX_SUBSTEPS))
        self.max_substeps = max(self.max_substeps, n)
        return n

    def _advance_interacting(self, idx):
        """Un paso dt con Coulomb entre las partículas confinadas, dividido en subpasos si hace falta."""
        X, P = self.X[idx], self.P[idx]
        q, m = self.q[idx], self.m[idx]
        n_sub = self._substeps(X, P, q, m)
        h = self.dt / n_sub
        rmin = [math.inf]

        def force(Xh):
            F, r = coulomb_forces_rmin(Xh, q)
            rmin[0] = min(rmin[0], r)
            return F

        for s in range(n_sub):
            X_new, P_new, E_half, F = boris_step_batch_force(X, P, self.t + s * h, h, q, m, self.fields.batch, force)
            dX = X_new - X
            self.work[idx] += q * np.einsum("ij,ij->i", E_half, dX)       # trabajo de E externo
            self.work_int[idx] += np.einsum("ij,ij->i", F, dX)            # trabajo de Coulomb entre partículas
            X, P = X_new, P_new
        self.min_pair_distance = min(self.min_pair_distance, rmin[0])
        return X, P

    def _one_step(self) -> None:
        dt = self.dt
        idx = np.flatnonzero(self.alive)
        if self.interactions and len(idx) >= 2:
            X_new, P_new = self._advance_interacting(idx)
        else:
            X, P = self.X[idx], self.P[idx]
            q, m = self.q[idx], self.m[idx]
            X_new, P_new, E_half = boris_step_batch(X, P, self.t, dt, q, m, self.fields.batch)
            self.work[idx] += q * np.einsum("ij,ij->i", E_half, X_new - X)   # trabajo de E (B no aporta)
        self.step_index += 1
        self.t = self.step_index * dt
        th = np.arctan2(X_new[:, 1], X_new[:, 0])
        self.theta_cum[idx] += (th - self.theta_prev[idx] + math.pi) % (2.0 * math.pi) - math.pi
        self.theta_prev[idx] = th
        power = self._power(X_new, P_new, self.t, idx)
        self.radiated[idx] += 0.5 * (self._power_prev[idx] + power) * dt   # calculada, NO se resta
        self._power_prev[idx] = power
        self.X[idx], self.P[idx] = X_new, P_new
        out = ~self.fields.inside_batch(X_new)
        if out.any():
            gone = idx[out]
            self.alive[gone] = False
            self.lost_step[gone] = self.step_index
        self._hx.append(self.X.copy())
        self._hp.append(self.P.copy())
        self._hacc.append(self._acc())
        if self.interactions:
            self._hU.append(self._potential())

    def advance(self, n: int) -> None:
        for _ in range(n):
            if self.finished:
                break
            self._one_step()

    # ------------------------------------------------------------- consultas
    def last_valid(self, k: int) -> int:
        """Último índice de la trayectoria de la partícula k (incluye el punto en que sale de la cámara)."""
        ls = int(self.lost_step[k])
        return self.n_points - 1 if ls < 0 else ls

    def row(self, k: int, i: int) -> list[float]:
        x, p = self._hx[i][k], self._hp[i][k]
        theta_cum, radiated, work, work_int = self._hacc[i][k]
        t = i * self.dt
        d = diagnose(self.fields, x, p, t, float(self.q[k]), float(self.m[k]))
        r = make_row(i, t, x, p, d, self.R, float(self.T0[k]), float(work), float(theta_cum),
                     float(radiated), self.fields.inside(x))
        if self.interactions:     # el balance ΔT − W incluye también el trabajo de Coulomb
            r[26] = (d["ekin"] - float(self.T0[k]) - float(work) - float(work_int)) / float(self.T0[k])
            r.append(float(work_int))
        return r

    def _active(self, i: int) -> np.ndarray:
        """Partículas que siguen en la cámara (e interactúan) en el índice i."""
        return (self.lost_step < 0) | (self.lost_step > i)

    def system_series(self, start: int = 0, stop: Optional[int] = None) -> Optional[dict]:
        """Energía cinética total, energía de Coulomb y momento total de las partículas confinadas en cada
        índice. Sin campos variables (RF apagada) ni pérdidas, E_cin + U debe conservarse."""
        if not self.interactions:
            return None
        idxs = list(range(self.n_points))[start:stop]
        kin, mom = [], []
        for i in idxs:
            a = self._active(i)
            P = self._hp[i][a]
            kin.append(float(np.sum(kinetic_energy_batch(P, self.m[a]))))
            mom.append(P.sum(axis=0).tolist())
        U = [self._hU[i] for i in idxs]
        return dict(first_index=start, kinetic_J=kin, potential_J=U,
                    total_J=[k + u for k, u in zip(kin, U)], momentum=mom)

    def interaction_info(self) -> Optional[dict]:
        if not self.interactions:
            return None
        s0 = self.system_series(0, 1)
        sn = self.system_series(self.n_points - 1)
        return dict(min_pair_distance_m=None if math.isinf(self.min_pair_distance) else self.min_pair_distance,
                    max_substeps=self.max_substeps, unresolved_steps=self.unresolved_steps,
                    below_bohr_radius=self.min_pair_distance < BOHR_RADIUS,
                    initial_total_J=s0["total_J"][0], current_total_J=sn["total_J"][0],
                    initial_potential_J=s0["potential_J"][0], current_potential_J=sn["potential_J"][0])

    def rows(self, k: int, start: int = 0, stop: Optional[int] = None, stride: int = 1) -> list[list[float]]:
        end = self.last_valid(k) + 1
        return [self.row(k, i) for i in range(end)[start:stop:stride]]

    def positions(self, start: int, stop: Optional[int] = None, stride: int = 1) -> list[list[float]]:
        """Posiciones calculadas [x0,y0,z0,x1,...] por partícula (m), para el trazado 3D."""
        sel = self._hx[start:stop:stride]
        if not sel:
            return [[] for _ in range(self.n)]
        arr = np.round(np.stack(sel).transpose(1, 0, 2), 9)          # (N, pasos, 3)
        return arr.reshape(self.n, -1).tolist()

    def status(self) -> list[dict]:
        out = []
        for k in range(self.n):
            ls = int(self.lost_step[k])
            reason = None
            if ls >= 0:
                x = self._hx[ls][k]
                reason = "radial" if abs(math.hypot(x[0], x[1]) - self.R) > self.a_r else "vertical"
            out.append(dict(pid=self.meta[k]["pid"], lost=ls >= 0, lost_step=ls if ls >= 0 else None,
                            lost_reason=reason))
        return out

    def point(self, i: int, pid: Optional[str] = None) -> dict:
        if pid is not None:
            k = self.pid_index[pid]
            return dict(zip(self.field_names, self.row(k, min(i, self.last_valid(k)))), pid=pid)
        return dict(i=i, t=i * self.dt, particles=[
            dict(zip(self.field_names, self.row(k, min(i, self.last_valid(k)))), pid=self.meta[k]["pid"])
            for k in range(self.n)])

    # --------------------------------------------------------- datos derivados
    def _particle_prediction(self, k: int) -> dict:
        """Predicción analítica en B_z uniforme (sin RF): círculo de radio ρ = p⊥/(|q| B) y deriva vertical."""
        q, m = float(self.q[k]), float(self.m[k])
        x0, p0 = self.x_init[k], self.p_init[k]
        bz = self.fields.bz
        p_perp = math.hypot(p0[0], p0[1])
        p_abs = float(np.linalg.norm(p0))
        rho = p_perp / (abs(q) * abs(bz))
        # centro del círculo: x0 + ρ · û, con û ∥ q v × B (fuerza centrípeta)
        f = np.array([p0[1] * bz, -p0[0] * bz]) * math.copysign(1.0, q)
        c = x0[:2] + rho * f / np.linalg.norm(f)
        dc = float(np.linalg.norm(c))
        r_max, r_min = dc + rho, abs(dc - rho)
        omega_z = -q * bz                                   # signo de dθ/dt alrededor del centro
        vertical_ok = abs(p0[2]) < 1e-12 * p_abs
        confined = (r_max <= self.R + self.a_r and r_min >= self.R - self.a_r and vertical_ok
                    and abs(x0[2]) <= self.a_z)
        g = gamma_of(p0, m)
        return dict(p_MeV_c=p_abs * C / MEV, ekin_MeV=float(self.T0[k]) / MEV, gamma=g,
                    beta=math.sqrt(1.0 - 1.0 / g ** 2), rigidity_Tm=p_abs / abs(q), rho_m=rho,
                    r_min_pred_m=r_min, r_max_pred_m=r_max,
                    rotation="antihorario" if omega_z > 0 else "horario",
                    confined_predicted=bool(confined))

    def derived(self) -> dict:
        prm = self.params
        info = machine_info(self, prm)
        per = []
        for k, meta in enumerate(self.meta):
            per.append(dict(**meta, **self._particle_prediction(k)))
        n_conf = sum(1 for p in per if p["confined_predicted"])
        warnings: list[str] = []
        if n_conf < self.n:
            lost_ids = [p["pid"] for p in per if not p["confined_predicted"]]
            shown = ", ".join(lost_ids[:12]) + ("…" if len(lost_ids) > 12 else "")
            warnings.append(f"{self.n - n_conf} de {self.n} partículas no quedan confinadas según la predicción "
                            f"analítica en B uniforme ({shown}).")
        if any(abs(self.p_init[k][2]) > 0 for k in range(self.n)):
            warnings.append("Hay partículas con ángulo vertical: el modelo de campos (B_z uniforme) no tiene enfoque "
                            "vertical, así que z deriva linealmente hasta salir de la cámara.")
        if abs(info["rf_gain_per_turn_eV"]) > 1e-3:
            warnings.append(f"La RF está sintonizada para la partícula de referencia ({prm.species}, "
                            f"{prm.kinetic_energy_MeV:g} MeV): ganancia {info['rf_gain_per_turn_eV']:+.4g} eV/vuelta "
                            "con B constante; las demás partículas cruzan la cavidad con otra fase.")
        out = dict(**info, mode=self.mode, n_particles=self.n, n_confined_predicted=n_conf,
                   rho_m=self.p_ref / (abs(self.sp.charge) * self.b_used),
                   particles=per, warnings=warnings, interactions=self.interactions,
                   notes=([*INTERACTION_LIMITS] if self.interactions else [INTERACTION_NOTE]) + [
                          "Radiación: se calcula por partícula (Liénard, sólo con la aceleración debida a los campos "
                          "externos) pero NO se resta a su energía.",
                          "B y la RF están fijados por la partícula de referencia; cada partícula usa su propia "
                          "carga y masa en la ecuación de Lorentz."])
        if self.interactions:
            info_i = self.interaction_info()
            out["interaction"] = info_i
            g = self.gamma_ref
            if g > 1.5:
                warnings.append(f"Interacciones de Coulomb instantáneas con γ ≈ {g:.4g}: para cargas co-móviles la "
                                f"fuerza neta real sería ~1/γ² ≈ {1 / g ** 2:.2g} veces la calculada (aproximación).")
            if info_i["unresolved_steps"]:
                warnings.append(f"{info_i['unresolved_steps']} pasos con encuentros cercanos no resueltos ni con "
                                f"{MAX_SUBSTEPS} subpasos: la precisión de esos encuentros es limitada.")
            if info_i["below_bohr_radius"]:
                warnings.append("Dos partículas se han acercado a menos del radio de Bohr: fuera de la validez del "
                                "modelo clásico de cargas puntuales.")
        if self.mode == "bunch":
            u = self.bunch_u
            b = prm.bunch
            out["bunch"] = dict(
                sigma_s_m_sample=float(np.std(u[:, 0]) * b.sigma_s_m),
                sigma_x_m_sample=float(np.std(u[:, 1]) * b.sigma_x_m),
                sigma_z_m_sample=float(np.std(u[:, 2]) * b.sigma_z_m),
                sigma_delta_sample=float(np.std(u[:, 3]) * b.sigma_delta),
                note="La envolvente es una representación visual de la distribución calculada (±2σ), "
                     "no un objeto físico.")
        return out

    def snapshot(self) -> dict:
        return dict(id=self.id, mode=self.mode, params=self.params.model_dump(), derived=self.derived(),
                    fields=self.field_names, n_points=self.n_points, lost=self.lost, lost_reason=self.lost_reason,
                    finished=self.finished, particles=self.meta, status=self.status(),
                    first_index=0, positions=self.positions(0), system=self.system_series(0))


def create_simulation(params: SimParams, sim_id: str = ""):
    return Simulation(params, sim_id) if params.mode == "single" else MultiSimulation(params, sim_id)
