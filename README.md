# Simulador 3D de sincrotrón — Fase 1 (una partícula)

## Backend (Python)
    cd backend
    python3 -m venv .venv && source .venv/bin/activate      # opcional
    pip install -r requirements.txt
    pytest                                                  # 11 pruebas
    uvicorn app.main:app --reload --port 8000

## Frontend (Node 18+)
    cd frontend
    npm install
    npm run dev                                             # http://localhost:5173 (proxy /api -> :8000)

Controles: Espacio = reproducir/pausa, flecha derecha = un paso, R = reiniciar, ratón = órbita/zoom.
