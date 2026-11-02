"""Pruebas de la radiación sincrotrón total emitida (una o varias partículas).

La potencia instantánea es la de Liénard; para una órbita circular debe coincidir con
P = q² c β⁴ γ⁴ / (6π ε0 ρ²). La energía radiada se acumula (∫P dt) pero no se resta a la partícula."""
import numpy as np
from fastapi.testclient import TestClient

from app.constants import C, E_CHARGE
from app.main import app
from app.simulation import FIELDS, MultiSimulation, ParticleParams, SimParams, Simulation

COL = {n: j for j, n in enumerate(FIELDS)}


def test_total_radiation_is_sum_of_particles():
    sim = MultiSimulation(SimParams(mode="multi", n_steps=400))      # 3 electrones por defecto, RF activa
    sim.advance(400)
    rad = sim.radiation_series()
    assert len(rad["power_W"]) == len(rad["radiated_J"]) == sim.n_points
    for i in (0, 137, 400):
        rows = [sim.row(k, i) for k in range(sim.n)]
        assert abs(rad["power_W"][i] - sum(r[COL["power_W"]] for r in rows)) <= 1e-12 * rad["power_W"][i]
        assert abs(rad["radiated_J"][i] - sum(r[COL["radiated_J"]] for r in rows)) <= 1e-12 * rad["radiated_J"][i] + 1e-40


def test_total_radiated_energy_matches_circular_orbit_formula():
    """Sin RF cada partícula describe un círculo: P constante, y la energía radiada total es Σ P_k · t."""
    sim = MultiSimulation(SimParams(mode="multi", rf_voltage_V=0.0, n_steps=2000))
    sim.advance(2000)
    d = sim.derived()
    rad = sim.radiation_series()
    t = 2000 * sim.dt
    expected = sum(p["rad_power_W"] for p in d["particles"]) * t
    assert abs(rad["radiated_J"][-1] - expected) / expected < 1e-4
    P = np.array(rad["power_W"])
    assert np.max(np.abs(P - P[0])) / P[0] < 1e-6                      # potencia constante en el círculo
    assert abs(P[0] - d["rad_power_total_pred_W"]) / P[0] < 1e-6


def test_radiation_scales_with_gamma_and_mass():
    """A radio fijo P ∝ β⁴γ⁴: con la mitad de energía (electrón) la potencia cae ~16 veces y el cono 1/γ se
    abre al doble; un protón con el mismo momento (mismo ρ) radia ~(m_e/m_p)⁴ veces menos."""
    hi, lo = Simulation(SimParams(kinetic_energy_MeV=50.0)), Simulation(SimParams(kinetic_energy_MeV=25.0))
    g_hi, g_lo = hi.gamma_ref, lo.gamma_ref
    b_hi, b_lo = hi.v_ref / C, lo.v_ref / C
    ratio = hi.rows[0][COL["power_W"]] / lo.rows[0][COL["power_W"]]
    assert abs(ratio - (b_hi * g_hi / (b_lo * g_lo)) ** 4) / ratio < 1e-9
    assert 14 < ratio < 18
    assert abs(lo.derived()["cone_half_angle_rad"] / hi.derived()["cone_half_angle_rad"] - g_hi / g_lo) < 1e-12

    sim = MultiSimulation(SimParams(mode="multi", rf_voltage_V=0.0, aperture_r_m=0.5, particles=[
        ParticleParams(id="pos", species="positron", energy_input="momentum", momentum_MeV_c=50.5),
        ParticleParams(id="pro", species="proton", energy_input="momentum", momentum_MeV_c=50.5)]))
    pe, pp = (p["rad_power_W"] for p in sim.derived()["particles"])
    assert 1e-15 < pp / pe < 1e-11                                      # protón: radiación despreciable


def test_radiated_energy_is_kept_after_particle_is_lost():
    sim = MultiSimulation(SimParams(mode="multi", rf_voltage_V=0.0, n_steps=600, particles=[
        ParticleParams(id="e", species="electron"), ParticleParams(id="p", species="positron")]))
    sim.advance(600)
    assert sim.status()[1]["lost"]
    E = np.array(sim.radiation_series()["radiated_J"])
    assert np.all(np.diff(E) >= 0)                                      # la energía emitida no desaparece


def test_api_radiation_series():
    c = TestClient(app)
    r = c.post("/api/simulations", json={"mode": "bunch", "n_steps": 100, "bunch": {"n_particles": 10}}).json()
    assert r["radiation"]["first_index"] == 0 and len(r["radiation"]["power_W"]) == 1
    assert r["derived"]["rad_power_total_pred_W"] > 0
    assert all("rad_loss_per_turn_eV" in p for p in r["derived"]["particles"])
    s = c.post(f"/api/simulations/{r['id']}/step?n=40").json()
    assert s["radiation"]["first_index"] == 1 and len(s["radiation"]["radiated_J"]) == 40
    assert s["radiation"]["radiated_J"][-1] > 0
    # el modo individual no cambia: sigue sin campo «radiation» (sus filas ya traen la radiación)
    single = c.post("/api/simulations", json={"n_steps": 10}).json()
    assert "radiation" not in single
