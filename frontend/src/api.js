// Acceso al motor de simulación. Hay dos "transportes" con las mismas funciones y las mismas respuestas:
//  * 'http'    — la API FastAPI del backend (desarrollo local: `uvicorn app.main:app` + proxy de Vite).
//  * 'pyodide' — el mismo motor Python ejecutándose en el navegador (web worker); es la versión publicada
//                en GitHub Pages y no necesita servidor. Se activa con VITE_ENGINE=pyodide en el build o,
//                para probarla en local, añadiendo ?engine=pyodide a la URL.
const urlEngine = new URLSearchParams(window.location.search).get('engine');
export const ENGINE = urlEngine === 'pyodide' || urlEngine === 'http' ? urlEngine : (import.meta.env.VITE_ENGINE || 'http');

// Convierte los errores de validación de FastAPI/pydantic en un texto legible.
function readableError(status, text) {
  try {
    const body = JSON.parse(text);
    if (Array.isArray(body.detail)) {
      return body.detail.map((d) => {
        const loc = (d.loc || []).filter((p) => p !== 'body' && p !== 'query').join('.');
        const msg = String(d.msg || '').replace(/^Value error, /, '');
        return loc ? `${loc}: ${msg}` : msg;
      }).join(' · ');
    }
    if (body.detail) return String(body.detail);
  } catch { /* respuesta no JSON */ }
  return `${status} ${text}`;
}

// ------------------------------------------------------------------ transporte HTTP (FastAPI)
async function j(url, opts = {}) {
  const r = await fetch(url, { headers: { 'Content-Type': 'application/json' }, ...opts });
  if (!r.ok) throw new Error(readableError(r.status, await r.text()));
  return r.json();
}
const q = (detail) => (detail ? `detail=${encodeURIComponent(detail)}` : '');
const http = {
  defaults: () => j('/api/defaults'),
  create: ({ params }) => j('/api/simulations', { method: 'POST', body: JSON.stringify(params) }),
  step: ({ id, n, detail }) => j(`/api/simulations/${id}/step?n=${n}&${q(detail)}`, { method: 'POST' }),
  reset: ({ id, detail }) => j(`/api/simulations/${id}/reset?${q(detail)}`, { method: 'POST' }),
  point: ({ id, index }) => j(`/api/simulations/${id}/points/${index}`),
  history: ({ id, pid, start }) => j(`/api/simulations/${id}/history?pid=${encodeURIComponent(pid)}&start=${start}`),
};

// ------------------------------------------------------------------ transporte Pyodide (navegador)
let worker = null, seq = 0;
const pending = new Map();
const progressListeners = new Set();
let engineInfo = null;

function getWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('./engine.worker.js', import.meta.url), { type: 'module' });
  worker.onmessage = (e) => {
    const m = e.data;
    if (m.type === 'progress') { for (const cb of progressListeners) cb(m.text); return; }
    if (m.type === 'ready') { engineInfo = m; for (const cb of progressListeners) cb(null); return; }
    const p = pending.get(m.id);
    if (!p) return;
    pending.delete(m.id);
    if (m.fatal) { p.reject(new Error(m.fatal)); return; }
    const out = JSON.parse(m.out);
    if (out.ok) p.resolve(out.data);
    else p.reject(new Error(readableError(out.status, JSON.stringify(out.body))));
  };
  worker.onerror = (e) => {
    const err = new Error(`El motor del navegador falló: ${e.message || 'error desconocido'}`);
    for (const p of pending.values()) p.reject(err);
    pending.clear();
  };
  return worker;
}
function callEngine(op, args) {
  return new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, { resolve, reject });
    getWorker().postMessage({ id, op, args });
  });
}
const pyodide = Object.fromEntries(['defaults', 'create', 'step', 'reset', 'point', 'history']
  .map((op) => [op, (args) => callEngine(op, args)]));

// Avisos de carga del motor del navegador: cb(texto) mientras carga y cb(null) cuando está listo
export function onEngineProgress(cb) { progressListeners.add(cb); return () => progressListeners.delete(cb); }
export const getEngineInfo = () => engineInfo;

// ------------------------------------------------------------------ funciones públicas (iguales en ambos modos)
const T = ENGINE === 'pyodide' ? pyodide : http;
export const getDefaults = () => T.defaults({});
export const createSim = (params) => T.create({ params });
export const stepSim = (id, n, detail) => T.step({ id, n, detail: detail || null });
export const resetSim = (id, detail) => T.reset({ id, detail: detail || null });
export const getPoint = (id, i) => T.point({ id, index: i });
export const getParticleHistory = (id, pid, start = 0) => T.history({ id, pid, start });
