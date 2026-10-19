"""Pruebas de la Fase 2: varias partículas independientes y bunches.

Equivalencia con el modo single, curvatura según p/q, cargas opuestas, momentos distintos,
independencia de estados, reproducibilidad del bunch, ausencia de trabajo magnético,
validación de parámetros y API."""
import math

import numpy as np
import pytest
from fastapi.testclient import TestClient

from app.constants import AMU, C, E_CHARGE, M_ELECTRON, M_PROTON
from app.main import app
from app.physics import SPECIES, boris_step, boris_step_batch
from app.simulation import (FIELDS, BunchParams, MultiSimulation, ParticleParams, SimParams, Simulation,
                            generate_bunch)

MEV = 1e6 * E_CHARGE
COL = {n: j for j, n in enumerate(FIELDS)}


def multi(particles, **machine):
    return MultiSimulation(SimParams(mode="multi", particles=particles, **machine))


def measured_radius(sim, k, n=40):
    """Radio de curvatura medido sobre la trayectoria calculada: cuerda / ángulo girado por p."""
    rows = np.array(sim.rows(k))[:n]
    x = rows[:, [COL["x"], COL["y"]]]
    phi = np.unwrap(np.arctan2(rows[:, COL["py"]], rows[:, COL["px"]]))
    chord = np.linalg.norm(np.diff(x, axis=0), axis=1)
    return float(np.sum(chord) / abs(phi[-1] - phi[0])), float(np.sign(phi[-1] - phi[0]))


# --------------------------------------------------------------- integrador por lotes
def test_batch_step_matches_scalar_engine():
    rng = np.random.default_rng(1)
    base = Simulation(SimParams(rf_phase_deg=90.0))
    fields = base.fields
    n = 7
    th = rng.uniform(-0.05, 0.05, n)                      # cerca de la cavidad (θ_c = 0): E y B no nulos
    X = np.stack([np.cos(th), np.sin(th), rng.uniform(-0.01, 0.01, n)], axis=1)
    P = rng.normal(0, 1, (n, 3)) * 1e-20 + np.array([0, base.p_ref, 0])
    q = np.array([s.charge for s in SPECIES.values()] * 3)[:n]
    m = np.array([s.mass for s in SPECIES.values()] * 3)[:n]
    t, dt = 1.234e-9, base.dt
    Xb, Pb, Eb = boris_step_batch(X, P, t, dt, q, m, fields.batch)
    for k in range(n):
        xs, ps, es = boris_step(X[k], P[k], t, dt, q[k], m[k], fields)
        assert np.allclose(Xb[k], xs, rtol=1e-14, atol=0)
        assert np.allclose(Pb[k], ps, rtol=1e-13, atol=1e-35)
        assert np.allclose(Eb[k], es, rtol=1e-13, atol=1e-9)
    assert np.any(Eb != 0)                                # la prueba recorre también el campo de la RF


# --------------------------------------------------------------- equivalencia single / multi
@pytest.mark.parametrize("single_kw, particle_kw", [
    (dict(), dict(species="electron", kinetic_energy_MeV=50.0)),                       # con RF (180°)
    (dict(species="proton", kinetic_energy_MeV=800.0, dr_m=0.02, rf_phase_deg=90.0, n_steps=1200),
     dict(species="proton", kinetic_energy_MeV=800.0, dr_m=0.02)),
])
def test_single_mode_equals_one_particle_in_multi_mode(single_kw, particle_kw):
    single = Simulation(SimParams(**single_kw))
    single.advance(1200)
    machine = {k: v for k, v in single_kw.items() if k != "dr_m"}
    sim = multi([ParticleParams(id="u", **particle_kw)], **machine)
    sim.advance(1200)
    a, b = np.array(single.rows), np.array(sim.rows(0))
    assert a.shape == b.shape
    res = COL["energy_residual"]
    scale = np.max(np.abs(a), axis=0)
    scale[res] = 1.0                                       # el residuo ya es relativo a T0 (~1e-15)
    assert np.all(np.abs(a - b) <= 1e-11 * scale)          # mismas ecuaciones: sólo redondeo
    assert sim.status()[0]["lost"] == single.lost


def test_single_mode_api_unchanged():
    c = TestClient(app)
    d = c.get("/api/defaults").json()
    assert d["mode"] == "single" and d["species"] == "electron" and d["kinetic_energy_MeV"] == 50.0
    r = c.post("/api/simulations", json={"n_steps": 50}).json()
    assert r["mode"] == "single" and len(r["rows"]) == 1 and r["fields"] == FIELDS
    s = c.post(f"/api/simulations/{r['id']}/step?n=50").json()
    assert set(s) == {"id", "fields", "first_index", "rows", "n_points", "lost", "lost_reason", "finished"}
    assert s["finished"] and len(s["rows"]) == 50


# --------------------------------------------------------------- curvatura y signo de carga
def test_opposite_charges_curve_in_opposite_directions():
    sim = multi([ParticleParams(id="em", species="electron"), ParticleParams(id="ep", species="positron")],
                rf_voltage_V=0.0, aperture_r_m=0.5, n_steps=40)
    sim.advance(40)
    p0 = sim.p_init
    assert np.allclose(p0[0], p0[1], rtol=0, atol=0)      # mismo momento inicial
    rho_e, sense_e = measured_radius(sim, 0)
    rho_p, sense_p = measured_radius(sim, 1)
    assert sense_e == -sense_p                             # sentidos de giro opuestos
    assert abs(rho_e - rho_p) / rho_e < 1e-9               # misma |q| y |p| => mismo radio
    rot = {p["pid"]: p["rotation"] for p in sim.derived()["particles"]}
    assert rot == {"em": "antihorario", "ep": "horario"}
    # electrón hacia el centro (sigue el anillo), positrón hacia fuera
    assert sim.rows(0)[-1][COL["dr"]] < 1e-3 and sim.rows(1)[-1][COL["dr"]] > 1e-2


def test_same_momentum_to_charge_ratio_gives_same_curvature():
    p_mev = 60.0                                            # p/|q| común: 60 MeV/c por carga elemental
    parts = [
        ParticleParams(id="pos", species="positron", energy_input="momentum", momentum_MeV_c=p_mev),
        ParticleParams(id="pro", species="proton", energy_input="momentum", momentum_MeV_c=p_mev),
        ParticleParams(id="alpha", species="ion", ion_charge_state=2, ion_mass_u=4.001506179,
                       energy_input="momentum", momentum_MeV_c=2 * p_mev),
    ]
    sim = multi(parts, rf_voltage_V=0.0, aperture_r_m=0.5, n_steps=40, dt_s=2e-11)
    sim.advance(40)
    B = abs(sim.fields.bz)
    expected = p_mev * MEV / C / (E_CHARGE * B)
    radii = [measured_radius(sim, k)[0] for k in range(3)]
    for rho in radii:
        assert abs(rho - expected) / expected < 1e-5
    # y sus velocidades (masas) son muy distintas: la curvatura depende sólo de p/q
    v = [np.linalg.norm(np.array(sim.rows(k)[0])[[COL["vx"], COL["vy"], COL["vz"]]]) for k in range(3)]
    assert v[0] > 2 * v[1]


def test_different_momenta_give_different_trajectories():
    sim = multi([ParticleParams(id="a", kinetic_energy_MeV=50.0), ParticleParams(id="b", kinetic_energy_MeV=51.0),
                 ParticleParams(id="c", kinetic_energy_MeV=50.0, dr_m=-0.03)], rf_voltage_V=0.0, n_steps=1000)
    sim.advance(1000)                                       # una vuelta
    r = [np.array(sim.rows(k))[:, COL["r"]] for k in range(3)]
    d = sim.derived()["particles"]
    assert np.max(np.abs(r[0] - 1.0)) < 1e-4               # referencia: sigue R
    for k in (1, 2):
        assert abs(r[k].max() - d[k]["r_max_pred_m"]) < 1e-3 and abs(r[k].min() - d[k]["r_min_pred_m"]) < 1e-3
    assert np.max(np.abs(r[1] - r[0])) > 0.03 and np.max(np.abs(r[2] - r[0])) > 0.03


# --------------------------------------------------------------- independencia
def test_particle_states_are_independent():
    a = ParticleParams(id="a", species="proton", kinetic_energy_MeV=800.0, dr_m=0.01)
    b = ParticleParams(id="b", species="proton", kinetic_energy_MeV=800.0, direction="backward")  # se pierde
    together = multi([a, b], species="proton", kinetic_energy_MeV=800.0, n_steps=800)
    alone = multi([a], species="proton", kinetic_energy_MeV=800.0, n_steps=800)
    together.advance(800)
    alone.advance(800)
    st = together.status()
    assert st[1]["lost"] and not st[0]["lost"]            # b sale de la cámara; a sigue
    assert np.array_equal(np.array(together.rows(0)), np.array(alone.rows(0)))
    assert len(together.rows(1)) == st[1]["lost_step"] + 1
    assert together.n_points == 801                        # reloj común: todas comparten t = i·dt
    t_col = np.array(together.rows(0))[:, COL["t"]]
    assert np.allclose(t_col, np.arange(801) * together.dt, rtol=1e-15, atol=0)


# --------------------------------------------------------------- bunch
def _bunch(**kw):
    return MultiSimulation(SimParams(mode="bunch", n_steps=200, bunch=BunchParams(**kw)))


@pytest.mark.parametrize("dist", ["gaussian", "uniform"])
def test_bunch_reproducible_with_seed(dist):
    a, b, c = _bunch(seed=7, distribution=dist), _bunch(seed=7, distribution=dist), _bunch(seed=8, distribution=dist)
    assert np.array_equal(a.x_init, b.x_init) and np.array_equal(a.p_init, b.p_init)
    assert not np.array_equal(a.x_init, c.x_init)
    a.advance(200), b.advance(200)
    assert a.positions(0) == b.positions(0)                # mismas trayectorias calculadas


def test_bunch_distribution_statistics():
    b = BunchParams(n_particles=100, seed=3, sigma_s_m=0.05, sigma_x_m=0.004, sigma_z_m=0.002, sigma_delta=0.002)
    _, _, u = generate_bunch(b, 50.0, 1.0, 0.0)
    assert np.all(np.abs(u) <= 3.0)
    assert np.all(np.abs(u.mean(axis=0)) < 0.35) and np.all(np.abs(u.std(axis=0) - 1) < 0.2)
    bu = b.model_copy(update=dict(distribution="uniform"))
    _, _, uu = generate_bunch(bu, 50.0, 1.0, 0.0)
    assert np.all(np.abs(uu) <= math.sqrt(3.0)) and np.all(np.abs(uu.std(axis=0) - 1) < 0.2)
    sim = _bunch(n_particles=100, seed=3, sigma_delta=0.002)
    p = np.linalg.norm(sim.p_init, axis=1)
    p_c = sim.p_ref
    assert abs(np.std(p / p_c - 1) - 0.002) < 0.0005      # dispersión de momento aplicada


# --------------------------------------------------------------- energía
def test_magnetic_field_does_no_work_on_any_particle():
    parts = [ParticleParams(id="e", species="electron"),
             ParticleParams(id="e2", species="electron", kinetic_energy_MeV=50.5, yaw_mrad=5.0),
             ParticleParams(id="p", species="proton", energy_input="momentum", momentum_MeV_c=50.5),
             ParticleParams(id="ion", species="ion", ion_charge_state=6, ion_mass_u=12.0, energy_input="momentum",
                            momentum_MeV_c=303.0, direction="backward")]
    sim = multi(parts, rf_voltage_V=0.0, aperture_r_m=0.5, n_steps=3000)
    sim.advance(3000)
    for k in range(len(parts)):
        rows = np.array(sim.rows(k))
        T = rows[:, COL["ekin_MeV"]]
        assert np.max(np.abs(T - T[0])) / T[0] < 1e-11
        assert np.all(rows[:, COL["work_E_J"]] == 0.0)


def test_known_species_use_physical_constants():
    sim = multi([ParticleParams(id="e", species="electron"), ParticleParams(id="p", species="positron"),
                 ParticleParams(id="h", species="proton", kinetic_energy_MeV=500.0),
                 ParticleParams(id="a", species="ion", ion_charge_state=2, ion_mass_u=4.001506179)])
    assert list(sim.q) == [-E_CHARGE, E_CHARGE, E_CHARGE, 2 * E_CHARGE]
    assert list(sim.m) == [M_ELECTRON, M_ELECTRON, M_PROTON, 4.001506179 * AMU]


# --------------------------------------------------------------- validación
@pytest.mark.parametrize("payload, fragment", [
    ({"mode": "multi", "particles": [{"species": "ion", "ion_charge_state": 0}]}, "carga distinta de cero"),
    ({"mode": "multi", "particles": [{"species": "ion", "ion_charge_state": 8, "ion_mass_u": 4.0}]}, "inconsistente"),
    ({"mode": "multi", "particles": [{"dr_m": 0.2}]}, "fuera de la cámara"),
    ({"mode": "multi", "particles": [{"id": "a"}, {"id": "a"}]}, "repetido"),
    ({"mode": "multi", "particles": [{}] * 101}, "100"),
    ({"mode": "multi", "particles": []}, "entre 1 y 100"),
    ({"mode": "multi", "particles": [{"color": "red"}]}, "#rrggbb"),
    ({"mode": "multi", "particles": [{"kinetic_energy_MeV": -1}]}, "greater than 0"),
    ({"mode": "bunch", "bunch": {"sigma_x_m": 0.05}}, "no cabe"),
    ({"mode": "bunch", "bunch": {"n_particles": 1}}, "greater than or equal to 2"),
    ({"mode": "bunch", "n_steps": 100_000, "bunch": {"n_particles": 100}}, "Demasiado historial"),
])
def test_invalid_parameters_are_rejected(payload, fragment):
    r = TestClient(app).post("/api/simulations", json=payload)
    assert r.status_code == 422
    assert fragment in r.text


# --------------------------------------------------------------- API
def test_api_multi_roundtrip():
    c = TestClient(app)
    payload = {"mode": "multi", "n_steps": 300, "rf_voltage_V": 0.0, "particles": [
        {"id": "a", "species": "electron"}, {"id": "b", "species": "positron", "color": "#FF0000"}]}
    r = c.post("/api/simulations", json=payload).json()
    sid = r["id"]
    assert r["mode"] == "multi" and [p["pid"] for p in r["particles"]] == ["a", "b"]
    assert r["particles"][1]["color"] == "#ff0000" and r["particles"][1]["charge_C"] == E_CHARGE
    assert r["n_points"] == 1 and len(r["positions"]) == 2 and len(r["positions"][0]) == 3
    assert r["detail"]["pid"] == "a" and len(r["detail"]["rows"]) == 1
    assert any("únicamente con los campos externos" in n for n in r["derived"]["notes"])

    s = c.post(f"/api/simulations/{sid}/step?n=100&detail=b").json()
    assert s["first_index"] == 1 and s["n_points"] == 101
    assert len(s["positions"][0]) == 300                   # 100 puntos × (x, y, z)
    assert s["detail"]["pid"] == "b"
    nb = len(s["detail"]["rows"])
    assert s["status"][1]["lost"] and nb == s["status"][1]["lost_step"]   # positrón: sale de la cámara

    p = c.get(f"/api/simulations/{sid}/points/50?pid=a").json()
    assert p["i"] == 50 and p["pid"] == "a"
    allp = c.get(f"/api/simulations/{sid}/points/50").json()
    assert len(allp["particles"]) == 2
    assert c.get(f"/api/simulations/{sid}/points/9999").status_code == 404
    assert c.get(f"/api/simulations/{sid}/points/5?pid=zz").status_code == 404
    assert c.post(f"/api/simulations/{sid}/step?n=5&detail=zz").status_code == 404

    h = c.get(f"/api/simulations/{sid}/history?pid=a&stride=10").json()
    assert len(h["rows"]) == 11 and h["rows"][-1][0] == 100
    hp = c.get(f"/api/simulations/{sid}/history?stride=10").json()
    assert len(hp["positions"][0]) == 33

    z = c.post(f"/api/simulations/{sid}/reset?detail=b").json()
    assert z["n_points"] == 1 and z["detail"]["pid"] == "b" and not z["status"][1]["lost"]


def test_api_bunch_reproducible():
    c = TestClient(app)
    payload = {"mode": "bunch", "n_steps": 100, "bunch": {"n_particles": 30, "seed": 123, "distribution": "uniform"}}
    r1 = c.post("/api/simulations", json=payload).json()
    r2 = c.post("/api/simulations", json=payload).json()
    assert r1["mode"] == "bunch" and len(r1["particles"]) == 30
    assert r1["positions"] == r2["positions"]
    s1 = c.post(f"/api/simulations/{r1['id']}/step?n=100").json()
    s2 = c.post(f"/api/simulations/{r2['id']}/step?n=100").json()
    assert s1["positions"] == s2["positions"] and s1["finished"]
    assert "no un objeto físico" in r1["derived"]["bunch"]["note"]
