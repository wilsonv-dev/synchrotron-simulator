# Simulador 3D de sincrotrón

## Backend (Python)
    cd backend
    python3 -m venv .venv && source .venv/bin/activate      # opcional
    pip install -r requirements.txt
    pytest                                                  # 47 pruebas
    python bench_interactions.py                            # coste por paso con 10/50/100 partículas
    uvicorn app.main:app --reload --port 8000

## Frontend (Node 18+)
    cd frontend
    npm install
    npm run dev                                             # http://localhost:5173 (proxy /api -> :8000)

Controles: Espacio = reproducir/pausa, flecha derecha = un paso, R = reiniciar, ratón = órbita/zoom.

## Modos
- **Partícula individual**: comportamiento de la Fase 1, sin cambios.
- **Múltiples partículas** (2–100): cada partícula tiene especie (electrón, positrón, protón o ion con Z y masa en u),
  energía cinética o momento, desplazamientos Δr/Δz/Δs, sentido y ángulos iniciales, color y visibilidad propios.
- **Bunch de partículas**: paquete generado con semilla reproducible, distribución gaussiana (±3σ) o uniforme (±√3σ),
  tamaños RMS longitudinal/radial/vertical y dispersión de momento σ_δ. Se puede ver cada partícula, una envolvente
  translúcida (±2σ, sólo representación de la distribución calculada) o ambas.

Todas las partículas avanzan con el mismo reloj (t = i·dt) y los mismos campos externos, sintonizados para la partícula
de referencia. Por defecto interactúan únicamente con esos campos; las fuerzas entre partículas se activan aparte
(ver abajo). No se añaden pérdidas de energía.

## Interacciones entre partículas (opcional, modos múltiple y bunch)
Casilla «Interacciones de Coulomb entre partículas». Cada par i<j se evalúa una sola vez,
F_ij = q_i q_j (x_i − x_j) / (4π ε0 |x_i − x_j|³), y se suma a q(E + v×B) en la patada del integrador de Boris.
- Encuentros cercanos: sin suavizado del potencial. Cada dt del reloj común se divide en subpasos para todo el
  sistema cuando el encuentro más rápido lo exige (máx. 256; si no basta, se cuenta y se avisa). Se rechazan
  condiciones iniciales con partículas a menos de un radio de Bohr y se avisa si se alcanza esa distancia.
- Diagnósticos: energía de Coulomb U, E_cin + U (se conserva con B estático y RF apagada), momento total,
  distancia mínima entre pares y subpasos usados; el balance por partícula incluye el trabajo de Coulomb (work_int_J).
- Limitaciones: es Coulomb electrostático instantáneo, no una simulación electromagnética relativista completa
  (sin campo magnético propio, retardo ni radiación mutua). Para cargas co-móviles con factor γ la fuerza neta real
  es ~1/γ² de la calculada, así que en haces relativistas se sobreestima. Cada partícula es una carga real, no una
  macropartícula: no representa la carga espacial de un bunch real ni otros efectos colectivos.
