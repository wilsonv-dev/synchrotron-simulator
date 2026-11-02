"""El motor en el navegador (app.browser, usado con Pyodide en GitHub Pages) debe responder exactamente igual
que la API HTTP (app.main): mismos datos, mismos códigos de error y mismo formato de mensajes de validación."""
import json

import pytest
from fastapi.testclient import TestClient

from app.browser import handle
from app.main import app

HTTP = TestClient(app)


def call(op, **args):
    out = json.loads(handle(op, json.dumps(args)))
    return out


def strip_id(d):
    return {k: v for k, v in d.items() if k != "id"}


def test_defaults_match():
    out = call("defaults")
    assert out["ok"] and out["data"] == HTTP.get("/api/defaults").json()


@pytest.mark.parametrize("params", [
    {"n_steps": 60},
    {"mode": "multi", "n_steps": 60, "rf_voltage_V": 0.0},
    {"mode": "bunch", "n_steps": 40, "interactions": True, "bunch": {"n_particles": 8, "seed": 3}},
])
def test_create_step_reset_history_match(params):
    b = call("create", params=params)
    assert b["ok"]
    h = HTTP.post("/api/simulations", json=params).json()
    assert strip_id(b["data"]) == strip_id(h)                    # mismo resultado (el bunch usa la misma semilla)
    bid, hid = b["data"]["id"], h["id"]
    detail = None if params.get("mode", "single") == "single" else h["particles"][0]["pid"]
    bs = call("step", id=bid, n=25, detail=detail)["data"]
    hs = HTTP.post(f"/api/simulations/{hid}/step?n=25" + (f"&detail={detail}" if detail else "")).json()
    assert strip_id(bs) == strip_id(hs)
    bp = call("point", id=bid, index=10)["data"]
    hp = HTTP.get(f"/api/simulations/{hid}/points/10").json()
    assert bp == hp
    q = {"start": 5, "stride": 2} | ({"pid": detail} if detail else {})
    bh = call("history", id=bid, **q)["data"]
    hh = HTTP.get(f"/api/simulations/{hid}/history", params=q).json()
    assert strip_id(bh) == strip_id(hh)
    br = call("reset", id=bid, detail=detail)["data"]
    hr = HTTP.post(f"/api/simulations/{hid}/reset" + (f"?detail={detail}" if detail else "")).json()
    assert strip_id(br) == strip_id(hr)


@pytest.mark.parametrize("params", [
    {"mode": "multi", "particles": [{"species": "ion", "ion_charge_state": 0}]},
    {"mode": "multi", "particles": [{"kinetic_energy_MeV": -1}]},
    {"mode": "bunch", "bunch": {"sigma_x_m": 0.05}},
    {"mode": "multi", "particles": [{"id": "a"}, {"id": "a"}], "interactions": True},
])
def test_validation_errors_match(params):
    b = call("create", params=params)
    h = HTTP.post("/api/simulations", json=params)
    assert not b["ok"] and b["status"] == h.status_code == 422
    simplify = lambda det: [(tuple(d["loc"]), d["msg"]) for d in det]
    assert simplify(b["body"]["detail"]) == simplify(h.json()["detail"])


def test_not_found_and_query_limits_match():
    assert call("step", id="nope", n=5)["status"] == HTTP.post("/api/simulations/nope/step?n=5").status_code == 404
    sid = call("create", params={"n_steps": 10})["data"]["id"]
    assert call("step", id=sid, n=0)["status"] == 422
    assert call("point", id=sid, index=999)["status"] == 404
