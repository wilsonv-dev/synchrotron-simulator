"""Motor físico relativista de partículas cargadas (unidades SI).

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

Varias partículas: las funciones *_batch aplican exactamente las mismas ecuaciones a N
partículas a la vez (arrays de forma (N, 3)), cada una con su propia carga y masa. Por defecto
las partículas sólo ven los campos externos.

Interacciones (opcionales): fuerza electrostática de Coulomb instantánea entre pares,
    F_i = Σ_{j≠i} k q_i q_j (x_i - x_j) / |x_i - x_j|³,   k = 1/(4π ε0),
que se suma a q(E + v×B) en la patada del integrador. Es una APROXIMACIÓN: no incluye el campo
magnético de las propias partículas, el retardo ni la radiación entre ellas (no es una solución de
Liénard-Wiechert). Para cargas que viajan juntas con factor γ, la fuerza neta real en el laboratorio
es ~1/γ² de la de Coulomb, de modo que este modelo la sobreestima para haces relativistas.
"""
from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Callable, Tuple

import numpy as np

from .constants import AMU, C, E_CHARGE, EPS0, K_COULOMB, M_ELECTRON, M_PROTON

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


def ion_species(charge_state: int, mass_u: float) -> Species:
    """Ion configurable: carga Z·e y masa en unidades de masa atómica."""
    return Species(f"ion({charge_state:+d}, {mass_u:g} u)", charge_state * E_CHARGE, mass_u * AMU)


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
# Versiones para N partículas (mismas ecuaciones; q y m son arrays de forma (N,))
# ----------------------------------------------------------------------------
def _dot_rows(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    return a[:, 0] * b[:, 0] + a[:, 1] * b[:, 1] + a[:, 2] * b[:, 2]


def total_energy_batch(P: np.ndarray, m: np.ndarray) -> np.ndarray:
    return np.sqrt((m * C * C) ** 2 + _dot_rows(P, P) * C * C)


def kinetic_energy_batch(P: np.ndarray, m: np.ndarray) -> np.ndarray:
    pc2 = _dot_rows(P, P) * C * C
    return pc2 / (np.sqrt((m * C * C) ** 2 + pc2) + m * C * C)


def gamma_batch(P: np.ndarray, m: np.ndarray) -> np.ndarray:
    return np.sqrt(1.0 + _dot_rows(P, P) / (m * C) ** 2)


def velocity_batch(P: np.ndarray, m: np.ndarray) -> np.ndarray:
    return P * (C * C / total_energy_batch(P, m))[:, None]


def lorentz_acceleration_batch(P, E, B, q, m) -> np.ndarray:
    v = velocity_batch(P, m)
    F = q[:, None] * (E + np.cross(v, B))
    return (F - _dot_rows(v, F)[:, None] * v / (C * C)) / (gamma_batch(P, m) * m)[:, None]


def lienard_power_batch(P, A, q, m) -> np.ndarray:
    v = velocity_batch(P, m)
    g = gamma_batch(P, m)
    va = np.cross(v, A)
    bracket = _dot_rows(A, A) - _dot_rows(va, va) / (C * C)
    return q * q * g ** 6 / (6.0 * math.pi * EPS0 * C ** 3) * np.maximum(bracket, 0.0)


def boris_step_batch(X: np.ndarray, P: np.ndarray, t: float, dt: float, q: np.ndarray, m: np.ndarray,
                     field_batch) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    """boris_step aplicado a N partículas con el mismo reloj (t, dt). Cada fila es independiente."""
    X_new, P_new, E, _ = boris_step_batch_force(X, P, t, dt, q, m, field_batch, None)
    return X_new, P_new, E


def boris_step_batch_force(X, P, t, dt, q, m, field_batch, force_fn):
    """Como boris_step_batch, con una fuerza adicional F(X_mitad) (p. ej. Coulomb entre partículas)
    evaluada en el mismo punto medio que los campos externos y aplicada en las dos medias patadas.
    Devuelve (X_nuevo, P_nuevo, E_externo_en_el_punto_medio, F_adicional) (F = None si force_fn es None)."""
    X_half = X + 0.5 * dt * velocity_batch(P, m)
    E, B = field_batch(X_half, t + 0.5 * dt)
    F = None
    if force_fn is None:
        kick = q[:, None] * E * (0.5 * dt)
    else:
        F = force_fn(X_half)
        kick = (q[:, None] * E + F) * (0.5 * dt)
    P_minus = P + kick
    gm = np.sqrt(m * m + _dot_rows(P_minus, P_minus) / (C * C))
    tv = q[:, None] * B * dt / (2.0 * gm)[:, None]
    s = 2.0 * tv / (1.0 + _dot_rows(tv, tv))[:, None]
    P_prime = P_minus + np.cross(P_minus, tv)
    P_plus = P_minus + np.cross(P_prime, s)
    P_new = P_plus + kick
    X_new = X_half + 0.5 * dt * velocity_batch(P_new, m)
    return X_new, P_new, E, F


# ----------------------------------------------------------------------------
# Interacción de Coulomb entre pares (cada par i<j se evalúa UNA sola vez)
# ----------------------------------------------------------------------------
_PAIRS: dict = {}


def pair_indices(n: int) -> Tuple[np.ndarray, np.ndarray]:
    """Índices (i, j) con i < j: n(n-1)/2 pares, sin la autointeracción i = j."""
    if n not in _PAIRS:
        _PAIRS[n] = np.triu_indices(n, k=1)
    return _PAIRS[n]


def coulomb_pairs(X: np.ndarray, q: np.ndarray):
    """Separaciones de todos los pares: (i, j, d = x_i - x_j, r = |d|)."""
    i, j = pair_indices(len(X))
    d = X[i] - X[j]
    return i, j, d, np.sqrt(_dot_rows(d, d))


def coulomb_forces_rmin(X: np.ndarray, q: np.ndarray) -> Tuple[np.ndarray, float]:
    """Fuerza de Coulomb total sobre cada partícula [N] y distancia mínima entre pares [m].
    La fuerza del par, F_ij = k q_i q_j d / r³, se calcula UNA vez y se suma a i y se resta a j
    (tercera ley de Newton exacta en cada par). r = 0 daría una fuerza infinita: las configuraciones
    con partículas coincidentes se rechazan antes y los encuentros cercanos se resuelven con subpasos."""
    n = len(X)
    i, j, d, r = coulomb_pairs(X, q)
    Fp = d * (K_COULOMB * q[i] * q[j] / (r * r * r))[:, None]
    F = np.empty((n, 3))
    for c in range(3):
        F[:, c] = np.bincount(i, Fp[:, c], n) - np.bincount(j, Fp[:, c], n)
    return F, float(r.min())


def coulomb_forces(X: np.ndarray, q: np.ndarray) -> np.ndarray:
    return coulomb_forces_rmin(X, q)[0]


def coulomb_energy(X: np.ndarray, q: np.ndarray) -> float:
    """Energía potencial electrostática del sistema U = Σ_{i<j} k q_i q_j / r_ij [J]."""
    if len(X) < 2:
        return 0.0
    i, j, _, r = coulomb_pairs(X, q)
    return float(np.sum(K_COULOMB * q[i] * q[j] / r))


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

    def batch(self, X: np.ndarray, t: float) -> Tuple[np.ndarray, np.ndarray]:
        """Mismo campo que __call__ evaluado en N posiciones X (N, 3) al mismo instante t."""
        r = np.hypot(X[:, 0], X[:, 1])
        inside = (np.abs(r - self.R) <= self.a_r) & (np.abs(X[:, 2]) <= self.a_z)
        B = np.zeros_like(X)
        B[inside, 2] = self.bz
        E = np.zeros_like(X)
        if self.V != 0.0:
            dth = (np.arctan2(X[:, 1], X[:, 0]) - self.theta_c + math.pi) % (2.0 * math.pi) - math.pi
            s = r * dth
            m = inside & (np.abs(s) < 0.5 * self.gap)
            if m.any():
                w = (1.0 + np.cos(2.0 * math.pi * s[m] / self.gap)) / self.gap
                amp = math.copysign(1.0, self.q) * self.V * w * math.sin(self.omega * t + self.phi0)
                rm = r[m]
                E[m, 0] = amp * (-X[m, 1] / rm)
                E[m, 1] = amp * (X[m, 0] / rm)
        return E, B

    def inside_batch(self, X: np.ndarray) -> np.ndarray:
        return (np.abs(np.hypot(X[:, 0], X[:, 1]) - self.R) <= self.a_r) & (np.abs(X[:, 2]) <= self.a_z)

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
