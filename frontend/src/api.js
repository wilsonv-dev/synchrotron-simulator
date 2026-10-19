// Convierte los errores de validación de FastAPI/pydantic en un texto legible.
function readableError(status, text) {
  try {
    const body = JSON.parse(text);
    if (Array.isArray(body.detail)) {
      return body.detail.map((d) => {
        const loc = (d.loc || []).filter((p) => p !== 'body').join('.');
        const msg = String(d.msg || '').replace(/^Value error, /, '');
        return loc ? `${loc}: ${msg}` : msg;
      }).join(' · ');
    }
    if (body.detail) return String(body.detail);
  } catch { /* respuesta no JSON */ }
  return `${status} ${text}`;
}

async function j(url, opts = {}) {
  const r = await fetch(url, { headers: { 'Content-Type': 'application/json' }, ...opts });
  if (!r.ok) throw new Error(readableError(r.status, await r.text()));
  return r.json();
}

const q = (detail) => (detail ? `detail=${encodeURIComponent(detail)}` : '');

export const getDefaults = () => j('/api/defaults');
export const createSim = (params) => j('/api/simulations', { method: 'POST', body: JSON.stringify(params) });
export const stepSim = (id, n, detail) => j(`/api/simulations/${id}/step?n=${n}&${q(detail)}`, { method: 'POST' });
export const resetSim = (id, detail) => j(`/api/simulations/${id}/reset?${q(detail)}`, { method: 'POST' });
export const getPoint = (id, i) => j(`/api/simulations/${id}/points/${i}`);
export const getParticleHistory = (id, pid, start = 0) =>
  j(`/api/simulations/${id}/history?pid=${encodeURIComponent(pid)}&start=${start}`);
