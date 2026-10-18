"""Motor físico relativista de UNA partícula cargada (unidades SI).

Ecuaciones resueltas (nada de órbitas impuestas):

    dp/dt = q (E + v x B)
    dx/dt = p c² / sqrt(m² c⁴ + |p|² c²)

Integrador: "drift-kick-drift" con rotación de Boris relativista.
  * medio paso de deriva con la velocidad v(p_n)
  * patada: medio impulso eléctrico, rotación magnética exacta en módulo, medio impulso eléctrico
  * medio paso de deriva con v(p_{n+1})
Es de segundo orden en dt y la rotación de Boris conserva |p| (el campo magnético
no realiza trabajo) hasta el error de redondeo.

Modelo de campos (ver SynchrotronFields):
  * Imanes de curvatura: B_z uniforme dentro de la cámara de vacío, en todo el azimut
    (dipolos contiguos, curvatura distribuida). Fuera de la cámara B = 0.
  * Cavidad RF: campo eléctrico tangencial E(s,t) = V0/L · w(s) · sin(ωt + φ) en un
    hueco corto de longitud L en el azimut de la cavidad, con perfil suave w (ventana de Hann).
"""
from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Callable, Tuple

import numpy as np

from .constants import C, E_CHARGE, EPS0, M_ELECTRON, M_PROTON

Vec = np.ndarray
FieldFn = Callable[[Vec, float], Tuple[Vec, Vec]]  # (x, t) -> (E, B)


@dataclass(frozen=True)
class Species:
    name: str
    charge: float  # [C], con signo
    mass: float    # [kg]


SPECIES = {
    "electron": Species("electron", -E_CHARGE, M_ELECTRON),
    "positron": Species("positron", +E_CHARGE, M_ELECTRON),
    "proton": Species("proton", +E_CHARGE, M_PROTON),
}


# ----------------------------------------------------------------------------
# Cinemática relativista
# ----------------------------------------------------------------------------
def cross(a: Vec, b: Vec) -> Vec:
    return np.array([a[1] * b[2] - a[2] * b[1],
                     a[2] * b[0] - a[0] * b[2],
                     a[0] * b[1] - a[1] * b[0]])


def total_energy(p: Vec, m: float) -> float:
    """E = sqrt(m²c⁴ + |p|²c²) [J]."""
    return math.sqrt((m * C * C) ** 2 + float(np.dot(p, p)) * C * C)


def kinetic_energy(p: Vec, m: float) -> float:
    """T = E - mc² = p²c²/(E + mc²) [J] (forma estable para bajas energías)."""
    pc2 = float(np.dot(p, p)) * C * C
    return pc2 / (math.sqrt((m * C * C) ** 2 + pc2) + m * C * C)


def gamma_of(p: Vec, m: float) -> float:
    return math.sqrt(1.0 + float(np.dot(p, p)) / (m * C) ** 2)


def velocity(p: Vec, m: float) -> Vec:
    """dx/dt = p c² / sqrt(m²c⁴ + |p|²c²)."""
    return p * (C * C / total_energy(p, m))


def momentum_from_kinetic(T: float, m: float) -> float:
    """|p| [kg m/s] a partir de la energía cinética T [J]."""
    return math.sqrt(T * (T + 2.0 * m * C * C)) / C


def lorentz_acceleration(p: Vec, E: Vec, B: Vec, q: float, m: float) -> Vec:
    """a = dv/dt = [F - (v·F) v/c²] / (γ m),  F = q (E + v x B)."""
    v = velocity(p, m)
    F = q * (E + cross(v, B))
    return (F - float(np.dot(v, F)) * v / (C * C)) / (gamma_of(p, m) * m)


# ----------------------------------------------------------------------------
# Radiación (fórmula de Liénard, régimen clásico)
# ----------------------------------------------------------------------------
def lienard_power(p: Vec, a: Vec, q: float, m: float) -> float:
    """P = q² γ⁶ / (6π ε0 c³) · [a² - |v x a|²/c²]  [W]  (potencia emitida)."""
    v = velocity(p, m)
    g = gamma_of(p, m)
    va = cross(v, a)
    bracket = float(np.dot(a, a)) - float(np.dot(va, va)) / (C * C)
    return q * q * g ** 6 / (6.0 * math.pi * EPS0 * C ** 3) * max(bracket, 0.0)


def circular_power(q: float, m: float, p: float, rho: float) -> float:
    """Potencia de sincrotrón en órbita circular: q² c β⁴ γ⁴ / (6π ε0 ρ²)."""
    g = math.sqrt(1.0 + (p / (m * C)) ** 2)
    beta = math.sqrt(1.0 - 1.0 / g ** 2)
    return q * q * C * beta ** 4 * g ** 4 / (6.0 * math.pi * EPS0 * rho ** 2)


def energy_loss_per_turn(q: float, m: float, p: float, rho: float) -> float:
    """U0 = q² β³ γ⁴ / (3 ε0 ρ)  [J/vuelta] (órbita circular de radio ρ)."""
    g = math.sqrt(1.0 + (p / (m * C)) ** 2)
    beta = math.sqrt(1.0 - 1.0 / g ** 2)
    return q * q * beta ** 3 * g ** 4 / (3.0 * EPS0 * rho)


# ----------------------------------------------------------------------------
# Integrador
# ----------------------------------------------------------------------------
def boris_step(x: Vec, p: Vec, t: float, dt: float, q: float, m: float,
               field: FieldFn) -> Tuple[Vec, Vec, Vec]:
    """Avanza (x, p) un paso dt. Devuelve (x_nuevo, p_nuevo, E_en_el_punto_medio)."""
    x_half = x + 0.5 * dt * velocity(p, m)
    E, B = field(x_half, t + 0.5 * dt)
    kick = q * E * (0.5 * dt)
    p_minus = p + kick
    gm = math.sqrt(m * m + float(np.dot(p_minus, p_minus)) / (C * C))   # γ m
    tv = q * B * dt / (2.0 * gm)
    s = 2.0 * tv / (1.0 + float(np.dot(tv, tv)))
    p_prime = p_minus + cross(p_minus, tv)
    p_plus = p_minus + cross(p_prime, s)
    p_new = p_plus + kick
    x_new = x_half + 0.5 * dt * velocity(p_new, m)
    return x_new, p_new, E


# ----------------------------------------------------------------------------
# Campos del sincrotrón
# ----------------------------------------------------------------------------
def transit_time_factor(u: float) -> float:
    """Factor de tiempo de tránsito de un hueco con perfil de Hann, u = ω L / (2 v).

    ΔE = |q| V0 sin(φ_c) · TTF, con TTF = sinc(u) / (1 - (u/π)²).
    """
    sinc = 1.0 if abs(u) < 1e-12 else math.sin(u) / u
    den = 1.0 - (u / math.pi) ** 2
    return 0.5 if abs(den) < 1e-9 else sinc / den


class SynchrotronFields:
    """Campos E y B del anillo (ejes: z vertical, plano de la órbita = xy).

    B: uniforme, B_z = -sgn(q)|B|, dentro de la cámara |r-R| <= a_r, |z| <= a_z
       (el signo hace que la partícula gire en sentido antihorario visto desde +z).
    E: sólo en la cavidad (azimut theta_c, longitud L a lo largo del arco), tangencial:
       E_θ = sgn(q) · V0 · w(s) · sin(ω t + φ0),   w(s) = (1 + cos(2π s/L)) / L,  |s| < L/2
       de modo que V0 es el voltaje acelerador visto por la partícula (∫w ds = 1).
    """

    def __init__(self, charge: float, radius: float, b_mag: float, aperture_r: float,
                 aperture_z: float, rf_voltage: float, rf_omega: float,
                 rf_phase_offset: float, gap_length: float, cavity_angle: float):
        self.q = charge
        self.R = radius
        self.a_r = aperture_r
        self.a_z = aperture_z
        self.V = rf_voltage
        self.omega = rf_omega
        self.phi0 = rf_phase_offset
        self.gap = gap_length
        self.theta_c = cavity_angle
        self.bz = -math.copysign(b_mag, charge)
        self._B = np.array([0.0, 0.0, self.bz])
        self._zero = np.zeros(3)

    def inside(self, x: Vec) -> bool:
        return abs(math.hypot(x[0], x[1]) - self.R) <= self.a_r and abs(x[2]) <= self.a_z

    def __call__(self, x: Vec, t: float) -> Tuple[Vec, Vec]:
        if not self.inside(x):
            return self._zero, self._zero
        E = self._zero
        if self.V != 0.0:
            r = math.hypot(x[0], x[1])
            dth = (math.atan2(x[1], x[0]) - self.theta_c + math.pi) % (2.0 * math.pi) - math.pi
            s = r * dth
            if abs(s) < 0.5 * self.gap:
                w = (1.0 + math.cos(2.0 * math.pi * s / self.gap)) / self.gap
                amp = math.copysign(1.0, self.q) * self.V * w * math.sin(self.omega * t + self.phi0)
                E = amp * np.array([-x[1] / r, x[0] / r, 0.0])
        return E, self._B
