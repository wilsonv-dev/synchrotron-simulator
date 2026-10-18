async function j(url, opts = {}) {
  const r = await fetch(url, { headers: { 'Content-Type': 'application/json' }, ...opts });
  if (!r.ok) throw new Error(`${r.status} ${await r.text()}`);
  return r.json();
}

export const getDefaults = () => j('/api/defaults');
export const createSim = (params) => j('/api/simulations', { method: 'POST', body: JSON.stringify(params) });
export const stepSim = (id, n) => j(`/api/simulations/${id}/step?n=${n}`, { method: 'POST' });
export const resetSim = (id) => j(`/api/simulations/${id}/reset`, { method: 'POST' });
export const getPoint = (id, i) => j(`/api/simulations/${id}/points/${i}`);
