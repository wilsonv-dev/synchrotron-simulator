# Simulador 3D de sincrotrón

**Versión en línea (gratis, sin instalar nada):** https://wilsonv-dev.github.io/synchrotron-simulator/

La versión publicada no usa servidor: el mismo motor Python de `backend/app` se ejecuta en el navegador con
[Pyodide](https://github.com/pyodide/pyodide) (Python + numpy en WebAssembly), dentro de un web worker. La primera
visita descarga unos 15 MB (después quedan en caché). GitHub Actions (`.github/workflows/pages.yml`) ejecuta las
pruebas y publica automáticamente en cada push a `main`.

## Backend (Python)
    cd backend
    python3 -m venv .venv && source .venv/bin/activate      # opcional
    pip install -r requirements.txt
    pytest                                                  # 61 pruebas
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

## Radiación sincrotrón
- Potencia instantánea de Liénard, P = q²γ⁶/(6π ε0 c³)·[a² − |v×a|²/c²], con la aceleración de los campos externos;
  en órbita circular coincide con q² c β⁴ γ⁴/(6π ε0 ρ²). Energía radiada = ∫P dt (se calcula, NO se resta).
- HUD «Radiación»: potencia, energía radiada acumulada, fracción de T, pérdida prevista por vuelta, energía crítica
  εc = (3/2) ħ c γ³/ρ y su longitud de onda λc = hc/εc (banda de luz), semiángulo 1/γ. En modos múltiple y bunch,
  además, la potencia y energía radiada TOTAL de todas las partículas (suma incoherente).
- Gráficas: potencia y energía radiada acumulada de la partícula inspeccionada y del total.
- Cono 3D: vértice en la partícula, semiángulo 1/γ (× factor visual indicado, «Capas visibles»), largo y brillo según la
  potencia en una escala logarítmica fija de 10⁻²⁴ W a 10⁻⁸ W: al bajar la energía el cono se abre (1/γ crece) pero se
  acorta y se atenúa (P ∝ γ⁴). Sólo desaparece si la partícula no emite (fuera del campo o perdida).

## Análisis e informe
Botón «📄 Análisis e informe» (se resalta al terminar la simulación): vista a pantalla completa con un resumen de cifras
y 6 gráficas (energía, potencia radiada, energía radiada acumulada, desviación r − R, trayectoria X–Y y energía de
Coulomb), con selector de partícula en los modos múltiple y bunch. Descargas:
- **Ver informe (PDF)**: genera en el navegador un PDF A4 (jsPDF, texto vectorial con fuente DejaVu para γ, σ, λ…)
  con configuración, parámetros derivados, resultados, tabla final por partícula, gráficas, avisos y limitaciones, y lo
  muestra en un visor dentro de la app. Desde el visor se puede descargar o abrir en otra pestaña; si no, no se guarda.
- **Datos (CSV)**: una fila por paso con todas las magnitudes de la partícula analizada y, si aplica, los totales de
  radiación y la energía de Coulomb del sistema (separador coma, punto decimal).

## Versión de GitHub Pages en local
    cd frontend
    VITE_ENGINE=pyodide BASE_PATH=/synchrotron-simulator/ npm run build
    npm run preview -- --base /synchrotron-simulator/     # http://localhost:4173/synchrotron-simulator/
En el servidor de desarrollo también se puede probar el motor en el navegador añadiendo `?engine=pyodide` a la URL.
`backend/app/service.py` contiene la lógica de la API; `main.py` (FastAPI) y `browser.py` (Pyodide) sólo la exponen,
y `tests/test_browser.py` comprueba que ambos responden exactamente igual.
