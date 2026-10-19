"""Pruebas de la Fase 3: fuerzas de Coulomb entre partículas.

Repulsión/atracción, simetría por pares, conservación de momento (sistema aislado) y de energía
(sin campos variables ni radiación), resolución de encuentros cercanos, comparación con las
interacciones desactivadas, reproducibilidad del bunch, validación y API."""
import math

import numpy as np
import pytest
from fastapi.testclient import TestClient

from app.constants import C, E_CHARGE, K_COULOMB, M_ELECTRON, M_PROTON
from app.main import app
from app.physics import (boris_step_batch_force, coulomb_energy, coulomb_forces, kinetic_energy_batch,
                         pair_indices)
from app.simulation import (FIELDS, FIELDS_INTERACTING, BunchParams, MultiSimulation, ParticleParams, SimParams,
                            Simulation)

COL = {n: j for j, n in enumerate(FIELDS_INTERACTING)}
NO_FIELD = lambda X, t: (np.zeros_like(X), np.zeros_like(X))   # sistema aislado: sin campos externos


def isolated_run(X, P, q, m, dt, n):
    force = lambda Xh: coulomb_forces(Xh, q)
    traj = [(X.copy(), P.copy())]
    for s in range(n):
        X, P, _, _ = boris_step_batch_force(X, P, s * dt, dt, q, m, NO_FIELD, force)
        traj.append((X.copy(), P.copy()))
    return traj


def total_energy(X, P, q, m):
    return float(np.sum(kinetic_energy_batch(P, m))) + coulomb_energy(X, q)


# --------------------------------------------------------------- ley de fuerza
def test_like_charges_repel_and_opposite_charges_attract():
    X = np.array([[0.0, 0.0, 0.0], [1e-6, 0.0, 0.0]])
    F_same = coulomb_forces(X, np.array([E_CHARGE, E_CHARGE]))
    F_opp = coulomb_forces(X, np.array([E_CHARGE, -E_CHARGE]))
    expected = K_COULOMB * E_CHARGE ** 2 / 1e-12
    assert F_same[0, 0] < 0 < F_same[1, 0]                 # se separan
    assert F_opp[0, 0] > 0 > F_opp[1, 0]                   # se atraen
    assert abs(abs(F_same[0, 0]) - expected) / expected < 1e-14
    assert np.all(F_same[:, 1:] == 0)


def test_pair_forces_are_symmetric_and_match_direct_sum():
    rng = np.random.default_rng(5)
    n = 9
    X = rng.normal(0, 1e-3, (n, 3))
    q = rng.choice([-1, 1, 2, -3], n) * E_CHARGE
    F = coulomb_forces(X, q)
    # suma directa O(N²) con j ≠ i (sin autointeracción) como referencia
    ref = np.zeros((n, 3))
    for a in range(n):
        for b in range(n):
            if a != b:
                d = X[a] - X[b]
                ref[a] += K_COULOMB * q[a] * q[b] * d / np.linalg.norm(d) ** 3
    assert np.allclose(F, ref, rtol=1e-12, atol=0)
    assert np.max(np.abs(F.sum(axis=0))) < 1e-13 * np.max(np.abs(F))   # Σ F = 0 (tercera ley)
    F2 = coulomb_forces(X[:2], q[:2])
    assert np.array_equal(F2[0], -F2[1])                   # par aislado: exactamente opuestas
    assert len(pair_indices(n)[0]) == n * (n - 1) // 2     # cada par una sola vez


# --------------------------------------------------------------- conservación (sistema aislado)
def test_two_body_momentum_conservation_isolated():
    q = np.array([E_CHARGE, -E_CHARGE])
    m = np.array([M_PROTON, M_ELECTRON])
    X = np.array([[0.0, 0.0, 0.0], [2e-6, 1e-6, 0.0]])
    # órbita ligada elíptica (0.8 × velocidad circular) más un momento común de arrastre
    r0 = np.linalg.norm(X[1] - X[0])
    p_circ = M_ELECTRON * math.sqrt(K_COULOMB * E_CHARGE ** 2 / (M_ELECTRON * r0))
    u = np.array([-1.0, 2.0, 0.0]) / math.sqrt(5.0)        # perpendicular a la separación
    P = np.array([-0.8 * p_circ * u, 0.8 * p_circ * u]) + np.array([2e-27, 0.0, 0.0])
    traj = isolated_run(X, P, q, m, 1e-11, 3000)          # ~20 órbitas
    P0 = traj[0][1].sum(axis=0)
    scale = np.max(np.abs([p for _, p in traj]))           # momento individual máximo alcanzado
    for _, Pk in traj:
        assert np.max(np.abs(Pk.sum(axis=0) - P0)) < 1e-12 * scale   # sólo error de redondeo acumulado
    # el par se ha atraído: su separación ha cambiado por la fuerza (no es movimiento libre)
    r = [np.linalg.norm(x[0] - x[1]) for x, _ in traj]
    assert min(r) < 0.9 * r[0]


def test_two_body_energy_conservation_second_order():
    """Repulsión de dos protones inicialmente en reposo: E_cin + U se conserva y el error cae ~×4 al
    dividir dt entre 2 (integrador de segundo orden). Al final U se ha convertido en energía cinética."""
    q = np.array([E_CHARGE, E_CHARGE])
    m = np.array([M_PROTON, M_PROTON])
    X = np.array([[0.0, 0.0, 0.0], [1e-6, 0.0, 0.0]])
    P = np.zeros((2, 3))
    U0 = coulomb_energy(X, q)
    errs = []
    for dt in (4e-10, 2e-10):
        n = int(round(4e-7 / dt))
        traj = isolated_run(X, P, q, m, dt, n)
        E = np.array([total_energy(x, p, q, m) for x, p in traj])
        errs.append(np.max(np.abs(E - E[0])) / U0)
        Xf, Pf = traj[-1]
        assert float(np.sum(kinetic_energy_batch(Pf, m))) > 0.5 * U0      # repulsión → energía cinética
    assert errs[1] < 1e-3
    assert 3.0 < errs[0] / errs[1] < 5.0


# --------------------------------------------------------------- simulación completa
def _pair(interactions, n_steps=2000, rf=0.0, dr=1e-6):
    pp = [ParticleParams(id="a", species="proton", kinetic_energy_MeV=1.0),
          ParticleParams(id="b", species="proton", kinetic_energy_MeV=1.0, dr_m=dr)]
    return MultiSimulation(SimParams(mode="multi", species="proton", kinetic_energy_MeV=1.0, rf_voltage_V=rf,
                                     n_steps=n_steps, particles=pp, interactions=interactions))


def test_system_energy_conserved_with_static_B_and_rf_off():
    sim = _pair(True)
    sim.advance(2000)
    s = sim.system_series()
    E, U = np.array(s["total_J"]), np.array(s["potential_J"])
    assert U[-1] < 0.5 * U[0]                               # los protones se han separado
    assert np.max(np.abs(E - E[0])) < 2e-3 * U[0]           # E_cin + U constante (B estático no trabaja)
    for k in range(2):                                      # balance por partícula ΔT = W_E + W_Coulomb
        rows = np.array(sim.rows(k))
        assert np.max(np.abs(rows[:, COL["energy_residual"]])) < 1e-12
        assert np.all(rows[:, COL["work_E_J"]] == 0.0)
    info = sim.interaction_info()
    assert 1 < info["max_substeps"] <= 256 and info["unresolved_steps"] == 0   # encuentro cercano subdividido


def test_interactions_on_vs_off():
    off, on = _pair(False, 500), _pair(True, 500)
    base = MultiSimulation(SimParams(mode="multi", species="proton", kinetic_energy_MeV=1.0, rf_voltage_V=0.0,
                                     n_steps=500, particles=off.params.particles))
    for s in (off, on, base):
        s.advance(500)
    assert off.field_names == FIELDS and on.field_names == FIELDS_INTERACTING
    assert np.array_equal(np.array(off.rows(0)), np.array(base.rows(0)))   # desactivadas = Fase 2 exacta
    sep = lambda s: [np.linalg.norm(s._hx[i][0] - s._hx[i][1]) for i in range(501)]
    d_off, d_on = sep(off), sep(on)
    assert d_on[-1] > 1.5 * d_off[-1]                       # la repulsión separa más a los protones
    T_off = np.array(off.rows(1))[:, COL["ekin_MeV"]]
    T_on = np.array(on.rows(1))[:, COL["ekin_MeV"]]
    assert np.max(np.abs(T_off - T_off[0])) < 1e-13 and np.max(np.abs(T_on - T_on[0])) > 1e-10


def test_single_mode_ignores_interactions_flag():
    a, b = Simulation(SimParams(n_steps=300)), Simulation(SimParams(n_steps=300, interactions=True))
    a.advance(300), b.advance(300)
    assert a.rows == b.rows


def test_bunch_with_interactions_is_reproducible_and_differs_from_off():
    mk = lambda inter, seed=11: MultiSimulation(SimParams(mode="bunch", n_steps=300, interactions=inter,
                                                          bunch=BunchParams(n_particles=30, seed=seed)))
    a, b, off = mk(True), mk(True), mk(False)
    for s in (a, b, off):
        s.advance(300)
    assert a.positions(0) == b.positions(0)                 # misma semilla y condiciones → mismo resultado
    assert np.array_equal(a.x_init, off.x_init)             # la distribución inicial no depende del interruptor
    assert not np.array_equal(np.stack(a._hp), np.stack(off._hp))
    assert a.n_points == off.n_points == 301                # reloj común conservado


# --------------------------------------------------------------- validación y API
def test_coincident_particles_rejected_only_with_interactions():
    c = TestClient(app)
    parts = [{"id": "a"}, {"id": "b"}]
    assert c.post("/api/simulations", json={"mode": "multi", "particles": parts}).status_code == 200
    r = c.post("/api/simulations", json={"mode": "multi", "particles": parts, "interactions": True})
    assert r.status_code == 422 and "radio de Bohr" in r.text


def test_api_interactions_roundtrip():
    c = TestClient(app)
    r = c.post("/api/simulations", json={"mode": "bunch", "interactions": True, "n_steps": 100,
                                         "bunch": {"n_particles": 10}}).json()
    assert r["fields"] == FIELDS_INTERACTING and r["derived"]["interactions"] is True
    assert any("aproximación" in n for n in r["derived"]["notes"])
    assert any("1/γ²" in w for w in r["derived"]["warnings"])
    assert len(r["system"]["total_J"]) == 1
    s = c.post(f"/api/simulations/{r['id']}/step?n=50&detail=b3").json()
    assert s["system"]["first_index"] == 1 and len(s["system"]["potential_J"]) == 50
    assert len(s["detail"]["rows"][0]) == len(FIELDS_INTERACTING)
    assert s["interaction"]["max_substeps"] >= 1
    off = c.post("/api/simulations", json={"mode": "bunch", "n_steps": 10, "bunch": {"n_particles": 10}}).json()
    assert off["fields"] == FIELDS and off["system"] is None
