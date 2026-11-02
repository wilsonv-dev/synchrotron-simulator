"""API REST del simulador (FastAPI). Cada punto de la trayectoria lo calcula el motor físico en Python.

Sólo traduce HTTP ↔ app.service, donde está toda la lógica; la versión web publicada usa esa misma
lógica en el navegador (app.browser con Pyodide), así que ambas responden igual.
"""
from __future__ import annotations

from typing import Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from . import service
from .service import SESSIONS, ServiceError  # noqa: F401  (SESSIONS se reexporta para quien lo use)
from .simulation import SimParams

app = FastAPI(title="Simulador de sincrotrón — una o varias partículas")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
                   allow_methods=["*"], allow_headers=["*"])


def _call(fn, *args, **kwargs) -> dict:
    try:
        return fn(*args, **kwargs)
    except ServiceError as e:
        raise HTTPException(e.status, e.detail)


@app.get("/api/defaults")
def defaults() -> dict:
    return service.defaults()


@app.post("/api/simulations")
def create(params: SimParams) -> dict:
    return _call(service.create, params)


@app.get("/api/simulations/{sim_id}")
def info(sim_id: str) -> dict:
    return _call(service.info, sim_id)


@app.post("/api/simulations/{sim_id}/step")
def step(sim_id: str, n: int = Query(200, ge=1, le=5000), detail: Optional[str] = None) -> dict:
    return _call(service.step, sim_id, n, detail)


@app.post("/api/simulations/{sim_id}/reset")
def reset(sim_id: str, detail: Optional[str] = None) -> dict:
    return _call(service.reset, sim_id, detail)


@app.get("/api/simulations/{sim_id}/points/{index}")
def point(sim_id: str, index: int, pid: Optional[str] = None) -> dict:
    return _call(service.point, sim_id, index, pid)


@app.get("/api/simulations/{sim_id}/history")
def history(sim_id: str, start: int = 0, stop: int | None = None, stride: int = Query(1, ge=1),
            pid: Optional[str] = None) -> dict:
    return _call(service.history, sim_id, start, stop, stride, pid)


@app.delete("/api/simulations/{sim_id}")
def delete(sim_id: str) -> dict:
    return service.delete(sim_id)
