"""API REST del simulador. Cada punto de la trayectoria lo calcula el motor físico en Python.

Modo single: respuestas idénticas a la Fase 1 (filas completas de diagnóstico).
Modos multi/bunch: en cada lote se envían las posiciones calculadas de todas las partículas
(y, con interacciones, la energía cinética, la de Coulomb y el momento total del sistema por paso)
(para el trazado 3D) y las filas de diagnóstico completas sólo de la partícula indicada en
`detail` (la que se inspecciona en el HUD). El resto se consulta con /points y /history.
"""
from __future__ import annotations

import uuid
from collections import OrderedDict
from typing import Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .simulation import FIELDS, MultiSimulation, SimParams, Simulation, create_simulation

app = FastAPI(title="Simulador de sincrotrón — una o varias partículas")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
                   allow_methods=["*"], allow_headers=["*"])

SESSIONS: "OrderedDict[str, Simulation | MultiSimulation]" = OrderedDict()
MAX_SESSIONS = 16


def _get(sim_id: str):
    sim = SESSIONS.get(sim_id)
    if sim is None:
        raise HTTPException(404, "Simulación no encontrada")
    return sim


def _pid(sim: MultiSimulation, pid: Optional[str]) -> Optional[str]:
    if pid is not None and pid not in sim.pid_index:
        raise HTTPException(404, f"Partícula desconocida: {pid}")
    return pid


def _payload(sim: Simulation, rows: list, first_index: int) -> dict:
    return dict(id=sim.id, fields=FIELDS, first_index=first_index, rows=rows, n_points=len(sim.rows),
                lost=sim.lost, lost_reason=sim.lost_reason, finished=sim.finished)


def _detail(sim: MultiSimulation, pid: Optional[str], start: int) -> Optional[dict]:
    if pid is None:
        return None
    return dict(pid=pid, first_index=start, rows=sim.rows(sim.pid_index[pid], start))


def _full(sim, detail: Optional[str] = None) -> dict:
    if isinstance(sim, Simulation):
        return {**sim.snapshot(), "first_index": 0, "rows": list(sim.rows)}
    pid = _pid(sim, detail) or sim.meta[0]["pid"]
    return {**sim.snapshot(), "detail": _detail(sim, pid, 0)}


@app.get("/api/defaults")
def defaults() -> dict:
    return SimParams().model_dump()


@app.post("/api/simulations")
def create(params: SimParams) -> dict:
    try:
        sim = create_simulation(params, uuid.uuid4().hex[:12])
    except ValueError as e:              # p. ej. bunch generado con partículas coincidentes y interacciones
        raise HTTPException(422, str(e))
    SESSIONS[sim.id] = sim
    while len(SESSIONS) > MAX_SESSIONS:
        SESSIONS.popitem(last=False)
    return _full(sim)


@app.get("/api/simulations/{sim_id}")
def info(sim_id: str) -> dict:
    return _get(sim_id).snapshot()


@app.post("/api/simulations/{sim_id}/step")
def step(sim_id: str, n: int = Query(200, ge=1, le=5000), detail: Optional[str] = None) -> dict:
    sim = _get(sim_id)
    if isinstance(sim, Simulation):
        first = len(sim.rows)
        return _payload(sim, sim.advance(n), first)
    pid = _pid(sim, detail)
    first = sim.n_points
    sim.advance(n)
    return dict(id=sim.id, mode=sim.mode, first_index=first, n_points=sim.n_points,
                positions=sim.positions(first), status=sim.status(), detail=_detail(sim, pid, first),
                system=sim.system_series(first), interaction=sim.interaction_info(),
                lost=sim.lost, lost_reason=sim.lost_reason, finished=sim.finished)


@app.post("/api/simulations/{sim_id}/reset")
def reset(sim_id: str, detail: Optional[str] = None) -> dict:
    sim = _get(sim_id)
    sim.reset()
    return _full(sim, detail)


@app.get("/api/simulations/{sim_id}/points/{index}")
def point(sim_id: str, index: int, pid: Optional[str] = None) -> dict:
    sim = _get(sim_id)
    n = len(sim.rows) if isinstance(sim, Simulation) else sim.n_points
    if not 0 <= index < n:
        raise HTTPException(404, "Punto fuera del historial")
    if isinstance(sim, Simulation):
        return sim.point(index)
    return sim.point(index, _pid(sim, pid))


@app.get("/api/simulations/{sim_id}/history")
def history(sim_id: str, start: int = 0, stop: int | None = None, stride: int = Query(1, ge=1),
            pid: Optional[str] = None) -> dict:
    sim = _get(sim_id)
    if isinstance(sim, Simulation):
        return _payload(sim, sim.rows[start:stop:stride], start)
    base = dict(id=sim.id, mode=sim.mode, fields=sim.field_names, first_index=start, stride=stride,
                n_points=sim.n_points, status=sim.status(), lost=sim.lost, finished=sim.finished)
    if pid is not None:
        return {**base, "pid": pid, "rows": sim.rows(sim.pid_index[_pid(sim, pid)], start, stop, stride)}
    return {**base, "positions": sim.positions(start, stop, stride)}


@app.delete("/api/simulations/{sim_id}")
def delete(sim_id: str) -> dict:
    SESSIONS.pop(sim_id, None)
    return {"deleted": sim_id}
