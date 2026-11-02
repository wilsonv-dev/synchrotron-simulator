"""Puerta de entrada del motor cuando se ejecuta en el navegador (Pyodide, versión de GitHub Pages).

El frontend envía una operación y sus argumentos en JSON; se devuelve JSON con el mismo contenido que
respondería la API HTTP (app.main), incluidos los errores con su código (404, 422) y el mismo formato de
detalle de validación que FastAPI, para que la interfaz los muestre igual.
"""
from __future__ import annotations

import json

from pydantic import ValidationError

from . import service
from .service import ServiceError
from .simulation import SimParams


def _validation_detail(e: ValidationError, prefix: str) -> list[dict]:
    return [dict(loc=[prefix, *err["loc"]], msg=err["msg"], type=err["type"])
            for err in e.errors(include_url=False, include_context=False, include_input=False)]


def _query_int(args: dict, name: str, default: int, lo: int, hi: int | None = None) -> int:
    v = args.get(name)
    v = default if v is None else int(v)
    if v < lo or (hi is not None and v > hi):
        limit = f"greater than or equal to {lo}" if v < lo else f"less than or equal to {hi}"
        raise ServiceError(422, [dict(loc=["query", name], msg=f"Input should be {limit}", type="value_error")])
    return v


def _dispatch(op: str, a: dict) -> dict:
    if op == "defaults":
        return service.defaults()
    if op == "create":
        return service.create(SimParams.model_validate(a.get("params") or {}))
    if op == "info":
        return service.info(a["id"])
    if op == "step":
        return service.step(a["id"], _query_int(a, "n", 200, 1, 5000), a.get("detail"))
    if op == "reset":
        return service.reset(a["id"], a.get("detail"))
    if op == "point":
        return service.point(a["id"], int(a["index"]), a.get("pid"))
    if op == "history":
        stop = a.get("stop")
        return service.history(a["id"], int(a.get("start") or 0), None if stop is None else int(stop),
                               _query_int(a, "stride", 1, 1), a.get("pid"))
    if op == "delete":
        return service.delete(a["id"])
    raise ServiceError(404, f"Operación desconocida: {op}")


def handle(op: str, args_json: str) -> str:
    """Ejecuta una operación y devuelve {"ok": true, "data": …} o {"ok": false, "status": …, "body": {"detail": …}}."""
    try:
        data = _dispatch(op, json.loads(args_json or "{}"))
        return json.dumps({"ok": True, "data": data}, allow_nan=False)
    except ValidationError as e:
        return json.dumps({"ok": False, "status": 422, "body": {"detail": _validation_detail(e, "body")}})
    except ServiceError as e:
        return json.dumps({"ok": False, "status": e.status, "body": {"detail": e.detail}})
    except Exception as e:  # error inesperado del motor: se informa como 500, igual que el servidor
        return json.dumps({"ok": False, "status": 500, "body": {"detail": f"{type(e).__name__}: {e}"}})
