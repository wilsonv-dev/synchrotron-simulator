"""API REST del simulador. Cada punto de la trayectoria lo calcula el motor físico en Python."""
from __future__ import annotations

import uuid
from collections import OrderedDict

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .simulation import FIELDS, SimParams, Simulation

app = FastAPI(title="Simulador de sincrotrón — Fase 1 (una partícula)")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
                   allow_methods=["*"], allow_headers=["*"])

SESSIONS: "OrderedDict[str, Simulation]" = OrderedDict()
MAX_SESSIONS = 16


def _get(sim_id: str) -> Simulation:
    sim = SESSIONS.get(sim_id)
    if sim is None:
        raise HTTPException(404, "Simulación no encontrada")
    return sim


def _payload(sim: Simulation, rows: list, first_index: int) -> dict:
    return dict(id=sim.id, fields=FIELDS, first_index=first_index, rows=rows, n_points=len(sim.rows),
                lost=sim.lost, lost_reason=sim.lost_reason, finished=sim.finished)


@app.get("/api/defaults")
def defaults() -> dict:
    return SimParams().model_dump()


@app.post("/api/simulations")
def create(params: SimParams) -> dict:
    sim = Simulation(params, uuid.uuid4().hex[:12])
    SESSIONS[sim.id] = sim
    while len(SESSIONS) > MAX_SESSIONS:
        SESSIONS.popitem(last=False)
    return {**sim.snapshot(), "first_index": 0, "rows": list(sim.rows)}


@app.get("/api/simulations/{sim_id}")
def info(sim_id: str) -> dict:
    return _get(sim_id).snapshot()


@app.post("/api/simulations/{sim_id}/step")
def step(sim_id: str, n: int = Query(200, ge=1, le=5000)) -> dict:
    sim = _get(sim_id)
    first = len(sim.rows)
    return _payload(sim, sim.advance(n), first)


@app.post("/api/simulations/{sim_id}/reset")
def reset(sim_id: str) -> dict:
    sim = _get(sim_id)
    sim.reset()
    return {**sim.snapshot(), "first_index": 0, "rows": list(sim.rows)}


@app.get("/api/simulations/{sim_id}/points/{index}")
def point(sim_id: str, index: int) -> dict:
    sim = _get(sim_id)
    if not 0 <= index < len(sim.rows):
        raise HTTPException(404, "Punto fuera del historial")
    return sim.point(index)


@app.get("/api/simulations/{sim_id}/history")
def history(sim_id: str, start: int = 0, stop: int | None = None, stride: int = Query(1, ge=1)) -> dict:
    sim = _get(sim_id)
    return _payload(sim, sim.rows[start:stop:stride], start)


@app.delete("/api/simulations/{sim_id}")
def delete(sim_id: str) -> dict:
    SESSIONS.pop(sim_id, None)
    return {"deleted": sim_id}
