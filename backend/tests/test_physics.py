"""Pruebas del motor físico: movimiento rectilíneo, curvatura magnética, energía, convergencia,
órbita de referencia, pérdida de confinamiento, radiación y API."""
import math

import numpy as np
from fastapi.testclient import TestClient

from app.constants import C, E_CHARGE, EPS0, HBAR
from app.main import app
from app.physics import SPECIES, boris_step, kinetic_energy, momentum_from_kinetic, velocity
from app.simulation import SimParams, Simulation

Q, M = SPECIES["electron"].charge, SPECIES["electron"].mass
MEV = 1e6 * E_CHARGE
ZERO = np.zeros(3)


def integrate(x0, p0, dt, n, field):
    x, p, t = x0.copy(), p0.copy(), 0.0
    for _ in range(n):
        x, p, _ = boris_step(x, p, t, dt, Q, M, field)
        t += dt
    return x, p, t


def ring_setup(T_MeV=50.0, R=1.0):
    p = momentum_from_kinetic(T_MeV * MEV, M)
    B = p / (abs(Q) * R)
    v = float(np.linalg.norm(velocity(np.array([0, p, 0.0]), M)))
    return p, B, 2 * math.pi * R / v


# --------------------------------------------------------------- movimiento rectilíneo
def test_rectilinear_motion_without_fields():
    p0 = momentum_from_kinetic(10 * MEV, M) * np.array([1.0, 2.0, 2.0]) / 3.0
    x0 = np.array([0.1, -0.2, 0.3])
    dt, n = 1e-11, 1000
    x, p, t = integrate(x0, p0, dt, n, lambda x, t: (ZERO, ZERO))
    v = velocity(p0, M)
    assert np.allclose(p, p0, rtol=1e-14, atol=0)
    assert np.allclose(x, x0 + v * t, rtol=0, atol=1e-9 * np.linalg.norm(v * t))
    assert np.linalg.norm(v) < C


def test_constant_electric_field_momentum_and_work():
    E = np.array([1e6, 0.0, 0.0])
    dt, n = 5e-12, 2000
    x, p, t = integrate(np.zeros(3), np.zeros(3), dt, n, lambda x, t: (E, ZERO))
    assert np.allclose(p, Q * E * t, rtol=1e-12)                       # dp/dt = qE exacto
    dT = kinetic_energy(p, M)
    assert abs(dT - Q * float(np.dot(E, x))) / dT < 1e-4              # ΔT = ∫ q E·v dt


# --------------------------------------------------------------- curvatura magnética
def test_magnetic_curvature_radius_and_period():
    p, B, period = ring_setup()
    n = 2000
    field = lambda x, t: (ZERO, np.array([0, 0, B]))
    x, pp, t = np.array([1.0, 0, 0]), np.array([0, p, 0.0]), 0.0
    dt, max_dev = period / n, 0.0
    for _ in range(n):
        x, pp, _ = boris_step(x, pp, t, dt, Q, M, field)
        t += dt
        max_dev = max(max_dev, abs(math.hypot(x[0], x[1]) - 1.0))
    assert max_dev < 1e-9                                  # radio = p/(|q|B) a precisión de máquina
    assert np.linalg.norm(x - np.array([1.0, 0, 0])) < 2e-5   # vuelve al origen tras un periodo
    assert x[1] < 1e-3 and np.sign(velocity(pp, M)[1]) > 0  # sentido antihorario (q<0, B_z>0)


def test_magnetic_field_does_no_work():
    p, B, period = ring_setup()
    T0 = kinetic_energy(np.array([0, p, 0.0]), M)
    x, pp, _ = integrate(np.array([1.0, 0, 0]), np.array([0, p, 0.0]), period / 1000, 20000,
                         lambda x, t: (ZERO, np.array([0, 0, B])))
    assert abs(kinetic_energy(pp, M) - T0) / T0 < 1e-11


# --------------------------------------------------------------- convergencia
def test_convergence_second_order_in_dt():
    p, B, period = ring_setup()
    field = lambda x, t: (ZERO, np.array([0, 0, B]))
    x0, p0 = np.array([1.0, 0, 0]), np.array([0, p, 0.0])
    errs = []
    for n in (250, 500, 1000, 2000):
        x, _, _ = integrate(x0, p0, period / n, n, field)
        errs.append(np.linalg.norm(x - x0))
    for a, b in zip(errs, errs[1:]):
        assert 3.8 < a / b < 4.2                           # al reducir dt a la mitad, el error cae ×4


# --------------------------------------------------------------- simulación completa
def test_reference_orbit_emerges_from_equations():
    sim = Simulation(SimParams())                          # 6 vueltas, fase RF síncrona (180°)
    sim.advance(6000)
    assert not sim.lost and sim.finished
    dr = [row[20] for row in sim.rows]                    # columna "dr"
    assert max(abs(d) for d in dr) < 1e-4                  # |r - R| ≪ apertura (0.1 m)
    assert abs(sim.rows[-1][21] - 6.0) < 1e-3              # 6 vueltas
    assert abs(sim.rows[-1][18] - sim.rows[0][18]) / sim.rows[0][18] < 1e-6


def test_off_reference_field_gives_computed_deviation():
    base = Simulation(SimParams())
    sim = Simulation(SimParams(b_field_T=1.05 * base.b_ref, rf_voltage_V=0, aperture_r_m=0.5, n_steps=1500))
    sim.advance(1500)
    r = [row[19] for row in sim.rows]
    d = sim.derived()
    assert abs(max(r) - d["r_max_pred_m"]) < 1e-3 and abs(min(r) - d["r_min_pred_m"]) < 1e-3
    assert d["r_min_pred_m"] < 0.91


def test_incompatible_field_loses_confinement():
    base = Simulation(SimParams())
    sim = Simulation(SimParams(b_field_T=1.3 * base.b_ref))
    assert sim.derived()["confined_predicted"] is False and sim.derived()["warnings"]
    sim.advance(6000)
    assert sim.lost and sim.lost_reason == "radial" and len(sim.rows) < 6000


def test_rf_energy_gain_single_pass():
    sim = Simulation(SimParams(rf_phase_deg=90.0, rf_voltage_V=5e3))
    sim.advance(500)                                       # de -90° a +90°: cruza la cavidad una vez
    gain_eV = (sim.rows[-1][18] - sim.rows[0][18]) * 1e6
    expected = 5e3 * sim.derived()["transit_time_factor"]
    assert abs(gain_eV - expected) / expected < 0.01
    assert abs(sim.rows[-1][26]) < 1e-3                    # balance energía-trabajo cerrado


# --------------------------------------------------------------- radiación
def test_synchrotron_radiation_power_and_loss_per_turn():
    sim = Simulation(SimParams(rf_voltage_V=0))
    g, b = sim.gamma_ref, sim.v_ref / C
    p_an = Q ** 2 * C * b ** 4 * g ** 4 / (6 * math.pi * EPS0 * 1.0 ** 2)
    assert abs(sim.rows[0][22] - p_an) / p_an < 1e-6       # Liénard numérico == fórmula circular
    ec = 1.5 * HBAR * C * g ** 3 / 1.0 / E_CHARGE
    assert abs(sim.rows[0][23] - ec) / ec < 1e-6
    sim.advance(1000)                                      # una vuelta
    u0 = sim.derived()["rad_loss_per_turn_eV"] * E_CHARGE
    assert abs(sim.radiated - u0) / u0 < 1e-3


# --------------------------------------------------------------- API
def test_api_roundtrip():
    c = TestClient(app)
    r = c.post("/api/simulations", json={"n_steps": 300}).json()
    sid = r["id"]
    assert len(r["rows"]) == 1 and r["derived"]["confined_predicted"]
    s = c.post(f"/api/simulations/{sid}/step?n=100").json()
    assert s["first_index"] == 1 and len(s["rows"]) == 100 and not s["lost"]
    p = c.get(f"/api/simulations/{sid}/points/100").json()
    assert p["i"] == 100 and abs(p["t"] - 100 * r["derived"]["dt_s"]) < 1e-18
    assert c.get(f"/api/simulations/{sid}/points/9999").status_code == 404
    assert len(c.get(f"/api/simulations/{sid}/history?stride=10").json()["rows"]) == 11
    z = c.post(f"/api/simulations/{sid}/reset").json()
    assert len(z["rows"]) == 1 and z["n_points"] == 1
