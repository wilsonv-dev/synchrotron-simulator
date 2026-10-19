import './style.css';
import { SynchrotronScene } from './scene.js';
import * as api from './api.js';

const $ = (s) => document.querySelector(s);
const CHUNK = 250;                                   // pasos que se piden al motor de Python por lote
const E_CHARGE = 1.602176634e-19;

const PARAMS_UI = [
  ['species', 'Partícula', ['electron', 'positron', 'proton']],
  ['kinetic_energy_MeV', 'Energía cinética (MeV)'],
  ['ring_radius_m', 'Radio de referencia R (m)'],
  ['b_field_T', 'Campo B (T), vacío = referencia', 'opt'],
  ['dp_rel', 'Desviación inicial δp/p'],
  ['dr_m', 'Desplazamiento radial (m)'],
  ['rf_voltage_V', 'Amplitud RF V₀ (V)'],
  ['rf_phase_deg', 'Fase RF en el cruce (°)'],
  ['rf_harmonic', 'Armónico h'],
  ['dt_s', 'Paso dt (s), vacío = auto', 'opt'],
  ['steps_per_turn', 'Pasos por vuelta (dt auto)'],
  ['n_steps', 'Número de pasos'],
  ['n_magnets', 'Imanes dibujados'],
  ['start_angle_deg', 'Ángulo inicial (°)'],
];
// En los modos de varias partículas, la "partícula" del formulario es la referencia que sintoniza B y RF
const MULTI_LABELS = { species: 'Partícula de referencia (sintoniza B y RF)', kinetic_energy_MeV: 'Energía de referencia (MeV)' };
const SINGLE_ONLY = new Set(['dp_rel', 'dr_m']);
const TOGGLES = [
  ['trail', 'Trayectoria (estela visual)', '#7cf5ff'], ['v', 'Velocidad v', '#8fe66f'], ['p', 'Momento p', '#ffb84d'],
  ['B', 'Campo magnético B', '#b678ff'], ['E', 'Campo eléctrico E (RF)', '#39e6d0'],
  ['rad', 'Emisión de radiación (cono 1/γ)', '#ff4fd8'], ['magnets', 'Imanes de curvatura', '#9b4dff'],
  ['cavity', 'Cavidad RF', '#22d3a6'], ['ref', 'Órbita de referencia (guía)', '#c060ff'],
  ['axes', 'Ejes', '#ff6b6b'], ['grid', 'Cuadrícula', '#28406e'],
];
const TITLES = { single: 'Sincrotrón · una partícula', multi: 'Sincrotrón · varias partículas', bunch: 'Sincrotrón · bunch de partículas' };

// Constantes sólo para mostrar q y m en el panel (el backend usa CODATA en SI y es quien decide)
const AMU_MEV = 931.49410242;
const SPECIES = {
  electron: { label: 'Electrón', z: -1, mc2: 0.51099895 },
  positron: { label: 'Positrón', z: 1, mc2: 0.51099895 },
  proton: { label: 'Protón', z: 1, mc2: 938.27208816 },
  ion: { label: 'Ion configurable', z: null, mc2: null },
};
const PALETTE = ['#7cf5ff', '#ff4fd8', '#8fe66f', '#ffb84d', '#b678ff', '#ff6b6b', '#4d8bff', '#f5e663',
  '#22d3a6', '#ff9a5a', '#c3a6ff', '#5ee08a'];
const VISUAL_FIELDS = new Set(['color', 'visible', 'trail_visible', 'trail_opacity']);
const NOTE_OFF = 'Las partículas interactúan únicamente con los campos externos del acelerador (imanes y cavidad RF). '
  + 'No hay fuerzas entre partículas.';
const NOTE_ON = 'Además de los campos externos, cada partícula siente la fuerza de Coulomb instantánea de las demás. '
  + 'Es una aproximación electrostática: sin campo magnético propio, retardo ni radiación mutua; para haces '
  + 'relativistas sobreestima la fuerza neta (~γ²) y no representa todos los efectos colectivos de un bunch.';

const state = {
  id: null, info: null, params: null, names: [], idx: {}, rows: [], cursor: 0, shown: -1, acc: 0,
  playing: false, fetching: false, lost: false, lostReason: null, finished: false, speed: 300,
  // --- varias partículas
  uiMode: 'single', mode: 'single', defaults: null,
  cfg: { particles: [], bunch: {}, interactions: false },
  system: null, interaction: null,
  meta: [], status: [], nPoints: 0, sel: 0, detail: { pid: null, rows: [] }, detailLoading: false, legendSig: '',
};
const scene = new SynchrotronScene($('#view'));
if (import.meta.env.DEV) window.__sim = { state, scene };          // inspección desde la consola (sólo en desarrollo)

// ------------------------------------------------------------------ formato
function fmt(v, d = 5) {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  if (v === 0) return '0';
  const a = Math.abs(v);
  return a >= 1e4 || a < 1e-3 ? v.toExponential(d - 2) : Number(v.toPrecision(d)).toString();
}
const row = (i) => Object.fromEntries(state.names.map((n, j) => [n, state.rows[i][j]]));
const setDl = (el, pairs) => { el.innerHTML = pairs.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join(''); };
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const clone = (o) => JSON.parse(JSON.stringify(o));
const opt = (v, label, cur) => `<option value="${v}" ${v === cur ? 'selected' : ''}>${label}</option>`;
const chargeText = (z) => `${z > 0 ? '+' : z < 0 ? '−' : ''}${Math.abs(z)} e`;
const isMulti = () => state.mode !== 'single';

function speciesZM(p) {
  if (p.species === 'ion') return { z: p.ion_charge_state, mc2: p.ion_mass_u * AMU_MEV };
  return SPECIES[p.species];
}

// ---------------------------------------------------------------- formulario
function buildForm(defaults) {
  state.defaults = defaults;
  $('#form').innerHTML = PARAMS_UI.map(([key, text, extra]) => {
    if (Array.isArray(extra)) {
      return `<label data-key="${key}"><span>${text}</span><select name="${key}">${extra.map((o) => `<option ${o === defaults[key] ? 'selected' : ''}>${o}</option>`).join('')}</select></label>`;
    }
    const val = defaults[key] ?? '';
    return `<label data-key="${key}"><span>${text}</span><input type="number" step="any" name="${key}" value="${val}" ${extra === 'opt' ? 'placeholder="auto"' : ''}></label>`;
  }).join('');
  $('#toggles').innerHTML = TOGGLES.map(([k, t, c]) =>
    `<label><input type="checkbox" data-k="${k}" checked><span class="sw" style="background:${c}"></span>${t}</label>`).join('');
  $('#toggles').addEventListener('change', (e) => { scene.setVisible(e.target.dataset.k, e.target.checked); state.shown = -1; });
  state.cfg.particles = clone(defaults.particles);
  state.cfg.bunch = clone(defaults.bunch);
  renderCards();
  renderBunchForm();
  updateModeUI();
}
function readForm() {
  const p = {};
  for (const el of $('#form').elements) {
    if (!el.name) continue;
    if (el.tagName === 'SELECT') { p[el.name] = el.value; continue; }
    if (el.value === '') { p[el.name] = null; continue; }
    p[el.name] = Number(el.value);
  }
  for (const k of ['rf_harmonic', 'steps_per_turn', 'n_steps', 'n_magnets']) p[k] = Math.round(p[k]);
  p.mode = state.uiMode;
  if (p.mode !== 'single') p.interactions = state.cfg.interactions;
  if (p.mode === 'multi') p.particles = state.cfg.particles.map(({ _open, ...rest }) => rest);
  if (p.mode === 'bunch') p.bunch = { ...state.cfg.bunch };
  return p;
}

function updateModeUI() {
  const m = state.uiMode;
  $('#mode').value = m;
  $('#title').textContent = TITLES[m];
  $('#formTitle').textContent = m === 'single' ? 'Parámetros' : 'Anillo y partícula de referencia';
  $('#multiPanel').hidden = m !== 'multi';
  $('#bunchPanel').hidden = m !== 'bunch';
  $('#interactionNote').hidden = m === 'single';
  $('#interactionsBox').hidden = m === 'single';
  $('#interactions').checked = state.cfg.interactions;
  $('#interactionNote').textContent = state.cfg.interactions ? NOTE_ON : NOTE_OFF;
  for (const [key, text] of PARAMS_UI) {
    const lab = $(`#form label[data-key="${key}"]`);
    if (!lab) continue;
    lab.hidden = m !== 'single' && SINGLE_ONLY.has(key);
    lab.querySelector('span').textContent = m !== 'single' && MULTI_LABELS[key] ? MULTI_LABELS[key] : text;
  }
}

// Valida la configuración antes de enviarla (el backend vuelve a validar todo)
function validateConfig() {
  const panel = state.uiMode === 'multi' ? '#multiPanel' : state.uiMode === 'bunch' ? '#bunchPanel' : null;
  if (panel && $(`${panel} .invalid`)) return 'hay campos con valores no válidos (marcados en rojo).';
  if (state.uiMode === 'multi') {
    const ps = state.cfg.particles;
    if (ps.length < 2 || ps.length > 100) return 'el modo múltiple necesita entre 2 y 100 partículas.';
    const ids = new Set();
    for (const p of ps) {
      if (!/^[A-Za-z0-9_-]{1,16}$/.test(p.id)) return `identificador no válido: «${p.id}» (letras, números, _ o -; máx. 16).`;
      if (ids.has(p.id)) return `identificador repetido: ${p.id}`;
      ids.add(p.id);
      if (p.species === 'ion') {
        if (!p.ion_charge_state) return `${p.id}: un ion necesita carga Z ≠ 0.`;
        if (p.ion_mass_u < 0.99 * Math.abs(p.ion_charge_state)) return `${p.id}: con |Z| = ${Math.abs(p.ion_charge_state)} la masa debe ser ≥ ${Math.abs(p.ion_charge_state)} u.`;
      }
    }
  }
  return null;
}

// ------------------------------------------------------- tarjetas de partículas
function summaryText(p) {
  const e = p.energy_input === 'kinetic' ? `${fmt(p.kinetic_energy_MeV)} MeV` : `${fmt(p.momentum_MeV_c)} MeV/c`;
  return `${SPECIES[p.species].label} · ${e}`;
}
function qmText(p) {
  const { z, mc2 } = speciesZM(p);
  if (!z || !(mc2 > 0)) return 'q, m: —';
  return `q = ${chargeText(z)} · m = ${fmt(mc2, 6)} MeV/c²`;
}
function numInput(f, label, v, attrs = '') {
  return `<label><span>${label}</span><input type="number" step="any" data-f="${f}" value="${v}" ${attrs}></label>`;
}
function cardHTML(p, i) {
  const ion = p.species === 'ion';
  const n = state.cfg.particles.length;
  return `<details class="pcard" data-i="${i}" ${p._open ? 'open' : ''}>
    <summary><span class="dot" style="background:${p.color}"></span><b>${esc(p.id)}</b>
      <span class="dim psum">${summaryText(p)}</span>
      <button type="button" class="del" data-act="del" title="Eliminar partícula" ${n <= 2 ? 'disabled' : ''}>×</button></summary>
    <div class="pgrid">
      <label><span>Identificador</span><input type="text" data-f="id" value="${esc(p.id)}" maxlength="16" pattern="[A-Za-z0-9_\\-]{1,16}" required></label>
      <label><span>Especie</span><select data-f="species">${Object.keys(SPECIES).map((s) => opt(s, SPECIES[s].label, p.species)).join('')}</select></label>
      ${ion ? numInput('ion_charge_state', 'Carga Z (× e)', p.ion_charge_state, 'step="1" min="-100" max="100"')
        + numInput('ion_mass_u', 'Masa (u)', p.ion_mass_u, 'min="0.0001" max="300"') : ''}
      <div class="qm">${qmText(p)}</div>
      <label><span>Condición inicial</span><select data-f="energy_input">${opt('kinetic', 'Energía cinética', p.energy_input)}${opt('momentum', 'Momento', p.energy_input)}</select></label>
      ${p.energy_input === 'kinetic' ? numInput('kinetic_energy_MeV', 'T (MeV)', p.kinetic_energy_MeV, 'min="0.000001" max="1000000"')
        : numInput('momentum_MeV_c', '|p| (MeV/c)', p.momentum_MeV_c, 'min="0.000001" max="1000000"')}
      ${numInput('dr_m', 'Δr radial (m)', p.dr_m)}
      ${numInput('dz_m', 'Δz vertical (m)', p.dz_m)}
      ${numInput('ds_m', 'Δs a lo largo del arco (m)', p.ds_m)}
      <label><span>Sentido</span><select data-f="direction">${opt('forward', 'Como la referencia', p.direction)}${opt('backward', 'Opuesto', p.direction)}</select></label>
      ${numInput('yaw_mrad', 'Ángulo horizontal (mrad)', p.yaw_mrad, 'min="-500" max="500"')}
      ${numInput('pitch_mrad', 'Ángulo vertical (mrad)', p.pitch_mrad, 'min="-500" max="500"')}
      <label><span>Color</span><input type="color" data-f="color" value="${p.color}"></label>
      <label><span>Opacidad trayectoria</span><input type="range" data-f="trail_opacity" min="0.05" max="1" step="0.05" value="${p.trail_opacity}"></label>
      <label class="check"><input type="checkbox" data-f="visible" ${p.visible ? 'checked' : ''}>Partícula visible</label>
      <label class="check"><input type="checkbox" data-f="trail_visible" ${p.trail_visible ? 'checked' : ''}>Trayectoria visible</label>
    </div></details>`;
}
function renderCards() {
  const ps = state.cfg.particles;
  $('#pcards').innerHTML = ps.map(cardHTML).join('');
  $('#pcount').textContent = `(${ps.length} / 100)`;
  $('#addParticle').disabled = ps.length >= 100;
}
function freeId() {
  const used = new Set(state.cfg.particles.map((p) => p.id));
  let n = state.cfg.particles.length + 1;
  while (used.has(`p${n}`)) n++;
  return `p${n}`;
}
function readInput(el) {
  if (el.type === 'checkbox') return el.checked;
  if (el.type === 'number' || el.type === 'range') return el.value === '' ? NaN : Number(el.value);
  return el.value;
}
// Convierte T <-> |p| al cambiar la condición inicial: pc = sqrt(T (T + 2 mc²))
function convertEnergy(p) {
  const { mc2 } = speciesZM(p);
  if (!(mc2 > 0)) return;
  if (p.energy_input === 'momentum') {
    const T = p.kinetic_energy_MeV;
    p.momentum_MeV_c = Number(Math.sqrt(T * (T + 2 * mc2)).toPrecision(8));
  } else {
    const pc = p.momentum_MeV_c;
    p.kinetic_energy_MeV = Number((Math.sqrt(pc * pc + mc2 * mc2) - mc2).toPrecision(8));
  }
}
function onCardEdit(e) {
  const el = e.target, f = el.dataset.f;
  if (!f) return;
  const card = el.closest('.pcard');
  const p = state.cfg.particles[Number(card.dataset.i)];
  const v = readInput(el);
  const ok = el.checkValidity() && !(typeof v === 'number' && !Number.isFinite(v));
  el.classList.toggle('invalid', !ok);
  if (!ok) return;
  const prevId = p.id;
  p[f] = f === 'ion_charge_state' ? Math.round(v) : v;
  if (e.type === 'change' && (f === 'species' || f === 'energy_input')) {
    if (f === 'energy_input') convertEnergy(p);
    p._open = true;
    renderCards();
    return;
  }
  card.querySelector('summary b').textContent = p.id;
  card.querySelector('.dot').style.background = p.color;
  card.querySelector('.psum').textContent = summaryText(p);
  card.querySelector('.qm').textContent = qmText(p);
  if (VISUAL_FIELDS.has(f)) applyVisual(prevId, { [f]: p[f] });
}
$('#pcards').addEventListener('input', onCardEdit);
$('#pcards').addEventListener('change', onCardEdit);
$('#pcards').addEventListener('toggle', (e) => {
  const card = e.target.closest?.('.pcard');
  if (card) state.cfg.particles[Number(card.dataset.i)]._open = card.open;
}, true);
$('#pcards').addEventListener('click', (e) => {
  if (e.target.dataset.act !== 'del') return;
  e.preventDefault();
  const i = Number(e.target.closest('.pcard').dataset.i);
  if (state.cfg.particles.length > 2) { state.cfg.particles.splice(i, 1); renderCards(); }
});
$('#addParticle').addEventListener('click', () => {
  const ps = state.cfg.particles;
  if (ps.length >= 100) return;
  const used = new Set(ps.map((p) => p.color));
  const color = PALETTE.find((c) => !used.has(c)) || PALETTE[ps.length % PALETTE.length];
  ps.push({ ...clone(state.defaults.particles[0]), id: freeId(), color, _open: true });
  renderCards();
});
$('#restoreParticles').addEventListener('click', () => { state.cfg.particles = clone(state.defaults.particles); renderCards(); });

// Cambios puramente visuales: se aplican en vivo sin recalcular la física
function applyVisual(pid, style) {
  if (state.mode !== 'multi') return;
  const k = state.meta.findIndex((m) => m.pid === pid);
  if (k < 0) return;
  Object.assign(state.meta[k], style);
  scene.setMultiStyle(k, visualStyle(k));
  state.legendSig = ''; state.shown = -1;
  renderLegend();
}
// En modo bunch la opción «envolvente» oculta puntos y trayectorias individuales
function visualStyle(k) {
  const m = state.meta[k];
  const envOnly = state.mode === 'bunch' && state.cfg.bunch.display === 'envelope';
  return { color: m.color, visible: m.visible && !envOnly, trail_visible: m.trail_visible && !envOnly, trail_opacity: m.trail_opacity };
}

// --------------------------------------------------------------- panel de bunch
function renderBunchForm() {
  const b = state.cfg.bunch;
  const ion = b.species === 'ion';
  const bin = (f, label, v, attrs = '') => `<label><span>${label}</span><input type="number" step="any" data-b="${f}" value="${v ?? ''}" ${attrs}></label>`;
  $('#bunchForm').innerHTML = `
    ${bin('n_particles', 'Número de partículas', b.n_particles, 'step="1" min="2" max="100"')}
    <label><span>Especie</span><select data-b="species">${Object.keys(SPECIES).map((s) => opt(s, SPECIES[s].label, b.species)).join('')}</select></label>
    ${ion ? bin('ion_charge_state', 'Carga Z (× e)', b.ion_charge_state, 'step="1" min="-100" max="100"')
      + bin('ion_mass_u', 'Masa (u)', b.ion_mass_u, 'min="0.0001" max="300"') : ''}
    <div class="qm">${qmText(b)}</div>
    ${bin('central_energy_MeV', 'Energía central (MeV), vacío = referencia', b.central_energy_MeV, 'min="0.000001" placeholder="referencia"')}
    ${bin('sigma_s_m', 'Longitud σ_s (m, RMS)', b.sigma_s_m, 'min="0"')}
    ${bin('sigma_x_m', 'Anchura radial σ_x (m, RMS)', b.sigma_x_m, 'min="0"')}
    ${bin('sigma_z_m', 'Altura σ_z (m, RMS)', b.sigma_z_m, 'min="0"')}
    ${bin('sigma_delta', 'Dispersión de momento σ_δ = Δp/p', b.sigma_delta, 'min="0" max="0.1"')}
    <label><span>Distribución</span><select data-b="distribution">${opt('gaussian', 'Gaussiana (±3σ)', b.distribution)}${opt('uniform', 'Uniforme (±√3σ)', b.distribution)}</select></label>
    ${bin('seed', 'Semilla aleatoria', b.seed, 'step="1" min="0" max="4294967295"')}
    <label><span>Mostrar</span><select data-b="display">${opt('particles', 'Partículas individuales', b.display)}${opt('envelope', 'Envolvente translúcida', b.display)}${opt('both', 'Ambas', b.display)}</select></label>
    <label><span>Color</span><input type="color" data-b="color" value="${b.color}"></label>
    <label><span>Opacidad trayectorias</span><input type="range" data-b="trail_opacity" min="0.05" max="1" step="0.05" value="${b.trail_opacity}"></label>
    <label class="check"><input type="checkbox" data-b="trail_visible" ${b.trail_visible ? 'checked' : ''}>Trayectorias visibles</label>
    <p class="note">Tamaños RMS. La envolvente representa la distribución calculada (±2σ); no es un objeto físico.</p>`;
}
function onBunchEdit(e) {
  const el = e.target, f = el.dataset.b;
  if (!f) return;
  const b = state.cfg.bunch;
  let v = readInput(el);
  if (f === 'central_energy_MeV' && el.value === '') v = null;
  const ok = el.checkValidity() && !(typeof v === 'number' && !Number.isFinite(v));
  el.classList.toggle('invalid', !ok);
  if (!ok) return;
  b[f] = ['n_particles', 'seed', 'ion_charge_state'].includes(f) ? Math.round(v) : v;
  if (e.type === 'change' && f === 'species') { renderBunchForm(); return; }
  const qm = $('#bunchForm .qm');
  if (qm) qm.textContent = qmText(b);
  if (state.mode === 'bunch' && ['display', 'color', 'trail_visible', 'trail_opacity'].includes(f)) applyBunchVisual();
}
function applyBunchVisual() {
  const b = state.cfg.bunch;
  state.meta.forEach((m, k) => {
    Object.assign(m, { color: b.color, trail_visible: b.trail_visible, trail_opacity: b.trail_opacity });
    scene.setMultiStyle(k, visualStyle(k));
  });
  scene.setEnvelopeMode(b.display === 'particles' ? 'none' : 'on', b.color);
  state.legendSig = ''; state.shown = -1;
  renderLegend();
}
$('#bunchForm').addEventListener('input', onBunchEdit);
$('#bunchForm').addEventListener('change', onBunchEdit);
$('#newSeed').addEventListener('click', () => {
  state.cfg.bunch.seed = Math.floor(Math.random() * 2 ** 31);
  renderBunchForm();
});
$('#restoreBunch').addEventListener('click', () => { state.cfg.bunch = clone(state.defaults.bunch); renderBunchForm(); });
$('#mode').addEventListener('change', (e) => { state.uiMode = e.target.value; updateModeUI(); newSession(); });
// Activar/desactivar las fuerzas entre partículas cambia la física: se reinicia la simulación
$('#interactions').addEventListener('change', (e) => { state.cfg.interactions = e.target.checked; updateModeUI(); newSession(); });

// -------------------------------------------------------- datos desde Python (single)
function ingest(resp) {
  if (!state.names.length) { state.names = resp.fields; resp.fields.forEach((n, i) => { state.idx[n] = i; }); }
  const { x, y, z } = state.idx;
  for (const r of resp.rows) {
    const i = state.rows.length;
    state.rows.push(r);
    scene.setTrailPoint(i, r[x], r[y], r[z]);
  }
  scene.commitTrail();
  state.lost = resp.lost; state.lostReason = resp.lost_reason; state.finished = resp.finished;
  $('#scrub').max = state.rows.length - 1;
}

// --------------------------------------------------- datos desde Python (multi/bunch)
function ingestMulti(resp) {
  resp.positions.forEach((flat, k) => scene.appendPositions(k, resp.first_index, flat));
  state.status = resp.status;
  resp.status.forEach((s, k) => scene.setLastValid(k, s.lost_step));
  state.nPoints = resp.n_points;
  const det = resp.detail;
  if (det && det.pid === state.detail.pid) det.rows.forEach((r, j) => { state.detail.rows[det.first_index + j] = r; });
  if (resp.system && state.system) {          // energía y momento del sistema en cada índice (con interacciones)
    const s = resp.system;
    for (const key of ['kinetic_J', 'potential_J', 'total_J', 'momentum']) {
      s[key].forEach((v, j) => { state.system[key][s.first_index + j] = v; });
    }
  }
  if (resp.interaction) state.interaction = resp.interaction;
  state.lost = resp.lost; state.lostReason = resp.lost_reason; state.finished = resp.finished;
  $('#scrub').max = state.nPoints - 1;
}
const lastValid = (k) => state.status[k]?.lost_step ?? state.nPoints - 1;

// Garantiza que las filas de diagnóstico de la partícula inspeccionada estén cargadas
async function ensureDetail(j) {
  const det = state.detail;
  if (state.detailLoading || det.rows[j]) return;
  state.detailLoading = true;
  const sid = state.id, pid = det.pid;
  let start = 0;
  while (det.rows[start]) start++;
  try {
    const h = await api.getParticleHistory(sid, pid, start);
    if (sid === state.id && state.detail.pid === pid) h.rows.forEach((r, i) => { det.rows[h.first_index + i] = r; });
  } catch (e) { showBanner(`Error del backend: ${e.message}`, true); }
  finally { state.detailLoading = false; state.shown = -1; }
}
function selectParticle(k) {
  if (k < 0 || k >= state.meta.length) return;
  state.sel = k;
  state.detail = { pid: state.meta[k].pid, rows: [] };
  scene.setSelected(k);
  state.legendSig = ''; state.shown = -1;
  renderLegend();
}

async function fetchMore(n) {
  if (state.fetching || state.lost || state.finished) return;
  state.fetching = true;
  const sid = state.id;
  try {
    const r = await api.stepSim(sid, n, isMulti() ? state.detail.pid : null);
    if (sid === state.id) (isMulti() ? ingestMulti(r) : ingest(r));
  } catch (e) { showBanner(`Error del backend: ${e.message}`, true); state.playing = false; syncPlay(); }
  finally { state.fetching = false; }
}

async function newSession() {
  state.playing = false; syncPlay();
  const problem = validateConfig();
  if (problem) { showBanner(`Parámetros no válidos: ${problem}`, true); return; }
  let r;
  try { r = await api.createSim(readForm()); } catch (e) { showBanner(`Parámetros no válidos: ${e.message}`, true); return; }
  state.id = r.id; state.info = r.derived; state.params = r.params;
  if (r.mode === 'single') loadSession(r); else loadMulti(r);
}

async function resetSession() {
  if (!state.id) return;
  state.playing = false; syncPlay();
  const r = await api.resetSim(state.id, isMulti() ? state.detail.pid : null);
  if (r.mode === 'single') loadSession(r); else loadMulti(r);
}

function buildRingFor(r) {
  const d = r.derived, p = r.params;
  scene.buildRing({ R: p.ring_radius_m, aR: d.aperture_r_m, aZ: d.aperture_z_m, nMag: p.n_magnets, gap: d.rf_gap_m,
    thetaC: d.cavity_angle_rad, bSign: Math.sign(d.bz_T) || 1, maxPoints: p.n_steps + 1 });
  for (const el of $('#toggles').querySelectorAll('input')) scene.setVisible(el.dataset.k, el.checked);
}

function loadSession(r) {
  state.mode = 'single';
  document.body.classList.remove('multi-mode');
  $('#legend').hidden = true;
  $('#derivedExtra').innerHTML = '';
  scene.clearMulti();
  state.rows = []; state.names = []; state.cursor = 0; state.acc = 0; state.shown = -1;
  const d = r.derived;
  buildRingFor(r);
  ingest(r);
  renderDerived(d);
  showBanner([...d.warnings].join('  ·  '), false);
  updateSpeedLabel();
}

function loadMulti(r) {
  const prevPid = state.detail.pid;
  state.mode = r.mode;
  document.body.classList.add('multi-mode');
  state.names = r.fields; state.idx = {}; r.fields.forEach((n, i) => { state.idx[n] = i; });
  state.rows = []; state.cursor = 0; state.acc = 0; state.shown = -1;
  state.meta = r.particles.map((m) => ({ ...m }));
  if (r.mode === 'bunch') {                         // estilo visual vigente del panel de bunch
    const b = state.cfg.bunch;
    state.meta.forEach((m) => Object.assign(m, { color: b.color, trail_visible: b.trail_visible, trail_opacity: b.trail_opacity }));
  }
  buildRingFor(r);
  const b = state.cfg.bunch;
  scene.initMulti(state.meta.map((m, k) => ({ ...m, ...visualStyle(k) })), r.params.n_steps + 1,
    { envelope: r.mode === 'bunch' && b.display !== 'particles' ? 'on' : 'none', envColor: b.color });
  // la partícula inspeccionada se conserva si sigue existiendo
  let k = state.meta.findIndex((m) => m.pid === prevPid);
  if (k < 0) k = 0;
  state.sel = k;
  state.detail = { pid: r.detail.pid, rows: [] };
  state.system = r.system ? { kinetic_J: [], potential_J: [], total_J: [], momentum: [] } : null;
  state.interaction = r.derived.interaction || null;
  ingestMulti(r);
  scene.setSelected(k);
  if (state.meta[k].pid !== r.detail.pid) selectParticle(k);
  renderDerivedMulti(r.derived);
  showBanner([...r.derived.warnings].join('  ·  '), false);
  updateSpeedLabel();
  $('#legend').hidden = false;
  state.legendSig = '';
  renderLegend();
}

// ------------------------------------------------------------------- vistas
function renderDerived(d) {
  setDl($('#derived'), [
    ['B de referencia', `${fmt(d.b_ref_T)} T`], ['B aplicado', `${fmt(d.b_used_T)} T`],
    ['Radio de curvatura ρ', `${fmt(d.rho_m)} m`], ['γ', fmt(d.gamma_ref)], ['β', fmt(d.beta_ref, 7)],
    ['Periodo de vuelta', `${fmt(d.t_rev_s * 1e9)} ns`], ['f_rev', `${fmt(d.f_rev_Hz / 1e6)} MHz`],
    ['f_RF', `${fmt(d.f_rf_Hz / 1e6)} MHz`], ['dt', `${fmt(d.dt_s * 1e12)} ps`],
    ['Tiempo físico total', `${fmt(d.total_time_s * 1e9)} ns`],
    ['Ganancia RF / vuelta', `${fmt(d.rf_gain_per_turn_eV)} eV`], ['Factor de tránsito', fmt(d.transit_time_factor, 6)],
    ['Potencia radiada (ref.)', `${fmt(d.rad_power_ref_W)} W`], ['Pérdida / vuelta (no aplicada)', `${fmt(d.rad_loss_per_turn_eV)} eV`],
    ['Energía crítica', `${fmt(d.ecrit_ref_eV)} eV`], ['Semiángulo 1/γ', `${fmt(d.cone_half_angle_rad * 1e3)} mrad`],
    ['Confinamiento previsto', d.confined_predicted ? 'sí' : '<b style="color:#ff6b7d">no</b>'],
  ]);
}

function renderDerivedMulti(d) {
  const pairs = [
    ['Modo', d.mode === 'bunch' ? 'bunch' : 'múltiple'], ['Partículas', d.n_particles],
    ['Confinadas (predicción)', `${d.n_confined_predicted} / ${d.n_particles}`],
    ['B de referencia', `${fmt(d.b_ref_T)} T`], ['B aplicado', `${fmt(d.b_used_T)} T`],
    ['ρ de la referencia', `${fmt(d.rho_m)} m`], ['γ de la referencia', fmt(d.gamma_ref)],
    ['Periodo de vuelta (ref.)', `${fmt(d.t_rev_s * 1e9)} ns`], ['f_RF', `${fmt(d.f_rf_Hz / 1e6)} MHz`],
    ['dt (reloj común)', `${fmt(d.dt_s * 1e12)} ps`], ['Tiempo físico total', `${fmt(d.total_time_s * 1e9)} ns`],
    ['Ganancia RF / vuelta (ref.)', `${fmt(d.rf_gain_per_turn_eV)} eV`],
    ['Interacciones entre partículas', d.interactions ? 'Coulomb (aprox.)' : 'no'],
  ];
  if (d.bunch) {
    pairs.push(['σ_s muestral', `${fmt(d.bunch.sigma_s_m_sample)} m`], ['σ_x muestral', `${fmt(d.bunch.sigma_x_m_sample)} m`],
      ['σ_z muestral', `${fmt(d.bunch.sigma_z_m_sample)} m`], ['σ_δ muestral', fmt(d.bunch.sigma_delta_sample)]);
  }
  setDl($('#derived'), pairs);
  const rows = d.particles.map((p) => `<tr><td><span class="dot" style="background:${p.color}"></span>${esc(p.pid)}</td>
    <td>${chargeText(Math.round(p.charge_C / E_CHARGE))}</td><td>${fmt(p.p_MeV_c)}</td><td>${fmt(p.rho_m, 4)}</td>
    <td>${p.rotation === 'antihorario' ? '↺' : '↻'}</td><td>${p.confined_predicted ? 'sí' : '<b class="bad">no</b>'}</td></tr>`).join('');
  $('#derivedExtra').innerHTML = `<table class="ptable"><thead><tr><th>id</th><th>q</th><th>p (MeV/c)</th><th>ρ (m)</th>
    <th>giro</th><th>conf.</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="note">${d.notes.map(esc).join('<br>')}</p>`;
}

function renderLegend() {
  const i = state.cursor;
  const sig = state.meta.map((m, k) => {
    const ls = state.status[k]?.lost_step;
    return `${m.visible}${m.trail_visible}${m.color}${ls != null && i >= ls}`;
  }).join('|') + state.sel + state.cfg.bunch.display;
  if (sig === state.legendSig) return;
  state.legendSig = sig;
  const alive = state.status.filter((s) => s.lost_step == null || i < s.lost_step).length;
  $('#legendCount').textContent = `${alive} / ${state.meta.length} confinadas`;
  $('#legendList').innerHTML = state.meta.map((m, k) => {
    const ls = state.status[k]?.lost_step;
    const lost = ls != null && i >= ls;
    const name = m.species === 'ion' ? m.label : SPECIES[m.species].label;
    return `<div class="lg-row ${k === state.sel ? 'sel' : ''} ${lost ? 'lost' : ''}" data-k="${k}" title="Clic para inspeccionar">
      <input type="checkbox" data-lg="visible" ${m.visible ? 'checked' : ''} title="Mostrar partícula">
      <input type="checkbox" data-lg="trail_visible" ${m.trail_visible ? 'checked' : ''} title="Mostrar trayectoria">
      <span class="dot" style="background:${m.color}"></span>
      <span class="lg-txt"><b>${esc(m.pid)}</b> · ${esc(name)} · ${chargeText(Math.round(m.charge_C / E_CHARGE))}</span>
      <span class="lg-st">${lost ? `perdida (paso ${ls})` : ''}</span></div>`;
  }).join('');
  $('#legendNote').textContent = (state.info?.interactions
    ? 'Campos externos + Coulomb instantáneo entre partículas (aproximación electrostática).'
    : 'Interactúan sólo con los campos externos; sin fuerzas entre partículas.')
    + (state.mode === 'bunch' && state.cfg.bunch.display !== 'particles'
      ? ' La envolvente (±2σ) representa la distribución calculada; no es un objeto físico.' : '');
}
$('#legendList').addEventListener('change', (e) => {
  const f = e.target.dataset.lg;
  if (!f) return;
  const k = Number(e.target.closest('.lg-row').dataset.k);
  const m = state.meta[k];
  m[f] = e.target.checked;
  if (state.mode === 'multi') {
    const p = state.cfg.particles.find((q) => q.id === m.pid);
    if (p) { p[f] = m[f]; renderCards(); }
  }
  scene.setMultiStyle(k, visualStyle(k));
  state.legendSig = ''; state.shown = -1;
  renderLegend();
});
$('#legendList').addEventListener('click', (e) => {
  if (e.target.dataset.lg) return;
  const r = e.target.closest('.lg-row');
  if (r) selectParticle(Number(r.dataset.k));
});

function updateView() {
  const i = state.cursor;
  state.shown = i;
  const d = row(i);
  scene.setParticle(d, state.info);
  scene.setTrailCount(i + 1);

  const status = $('#status');
  const atEnd = i === state.rows.length - 1;
  if (state.lost && atEnd) { status.className = 'status lost'; status.textContent = `Confinamiento perdido (${state.lostReason}) en el paso ${i}`; }
  else if (state.finished && atEnd) { status.className = 'status done'; status.textContent = 'Simulación completada'; }
  else { status.className = 'status ok'; status.textContent = d.inside ? 'Confinada' : 'Fuera de la cámara'; }

  setDl($('#telemetry'), [
    ['Paso', `${d.i} / ${state.params.n_steps}`], ['Tiempo físico', `${fmt(d.t * 1e9)} ns`], ['Vueltas', fmt(d.turns, 5)],
    ['γ', fmt(d.gamma, 6)], ['Energía cinética', `${fmt(d.ekin_MeV, 8)} MeV`],
    ['r', `${fmt(d.r, 7)} m`], ['r − R', `${fmt(d.dr * 1e3)} mm`], ['|B| en la partícula', `${fmt(Math.hypot(d.Bx, d.By, d.Bz))} T`],
    ['Potencia radiada (Liénard)', `${fmt(d.power_W)} W`], ['Energía crítica', `${fmt(d.ecrit_eV)} eV`],
    ['Energía radiada acumulada', `${fmt(d.radiated_J / 1.602176634e-19)} eV`], ['Trabajo de E acumulado', `${fmt(d.work_E_J / 1.602176634e-19)} eV`],
    ['Residuo ΔT − W', fmt(d.energy_residual, 3)],
  ]);
  $('#point').innerHTML = state.names.map((n) => `<tr><td>${n}</td><td>${fmt(d[n], 8)}</td></tr>`).join('');
  $('#scrub').value = i;
  $('#scrubLabel').textContent = `punto ${i} / ${state.rows.length - 1}`;
}

function updateViewMulti() {
  const i = state.cursor;
  state.shown = i;
  scene.setMultiCursor(i);
  renderLegend();
  const k = state.sel, m = state.meta[k];
  const ls = state.status[k]?.lost_step;
  const j = Math.min(i, lastValid(k));
  const r = state.detail.rows[j];
  if (!r) ensureDetail(j);
  const d = r ? Object.fromEntries(state.names.map((n, c) => [n, r[c]])) : null;
  if (d && !(ls != null && i > ls) && visualStyle(k).visible) scene.setParticle(d, state.info); else scene.hideVectors();

  const alive = state.status.filter((s) => s.lost_step == null || i < s.lost_step).length;
  const status = $('#status');
  const atEnd = i === state.nPoints - 1;
  if (state.lost && atEnd) { status.className = 'status lost'; status.textContent = 'Todas las partículas han salido de la cámara'; }
  else if (state.finished && atEnd) { status.className = 'status done'; status.textContent = `Simulación completada · ${alive} / ${state.meta.length} confinadas`; }
  else { status.className = 'status ok'; status.textContent = `${alive} / ${state.meta.length} partículas confinadas`; }

  const pairs = [
    ['Partícula inspeccionada', `<span class="dot" style="background:${m.color}"></span>${esc(m.pid)}`],
    ['Estado', ls != null && i >= ls ? `<b class="bad">fuera de la cámara (paso ${ls})</b>` : 'confinada'],
    ['Paso (reloj común)', `${i} / ${state.params.n_steps}`], ['Tiempo físico', `${fmt(i * state.info.dt_s * 1e9)} ns`],
  ];
  if (d) {
    pairs.push(['Vueltas', fmt(d.turns, 5)], ['γ', fmt(d.gamma, 6)], ['Energía cinética', `${fmt(d.ekin_MeV, 8)} MeV`],
      ['|p|', `${fmt(Math.hypot(d.px, d.py, d.pz) * 299792458 / E_CHARGE / 1e6, 8)} MeV/c`],
      ['r', `${fmt(d.r, 7)} m`], ['r − R', `${fmt(d.dr * 1e3)} mm`], ['z', `${fmt(d.z * 1e3)} mm`],
      ['|B| en la partícula', `${fmt(Math.hypot(d.Bx, d.By, d.Bz))} T`],
      ['Potencia radiada (Liénard)', `${fmt(d.power_W)} W`], ['Trabajo de E acumulado', `${fmt(d.work_E_J / E_CHARGE)} eV`],
      ['Residuo ΔT − W', fmt(d.energy_residual, 3)]);
  } else pairs.push(['Diagnóstico', 'cargando…']);
  const sys = state.system;
  if (sys && sys.total_J[i] !== undefined) {
    const E0 = sys.total_J[0], U = sys.potential_J[i], Pt = sys.momentum[i];
    pairs.push(['— Sistema (confinadas) —', ''],
      ['Energía de Coulomb U', `${fmt(U / E_CHARGE)} eV`],
      [state.params.rf_voltage_V > 0 ? 'Δ(E_cin + U) (RF activa: no se conserva)' : 'Δ(E_cin + U) (debe conservarse)', `${fmt((sys.total_J[i] - E0) / E_CHARGE)} eV`],
      ['|P| total', `${fmt(Math.hypot(...Pt) * 299792458 / E_CHARGE / 1e6, 8)} MeV/c`]);
  }
  if (state.interaction) {
    const it = state.interaction;
    pairs.push(['Distancia mínima entre pares', `${fmt(it.min_pair_distance_m)} m`],
      ['Subpasos máx. por dt', `${it.max_substeps}${it.unresolved_steps ? ` · <b class="bad">${it.unresolved_steps} sin resolver</b>` : ''}`]);
  }
  setDl($('#telemetry'), pairs);
  $('#point').innerHTML = d ? state.names.map((n) => `<tr><td>${n}</td><td>${fmt(d[n], 8)}</td></tr>`).join('') : '';
  $('#scrub').value = i;
  $('#scrubLabel').textContent = `punto ${i} / ${state.nPoints - 1}`;
}

function showBanner(text, err) {
  const b = $('#banner');
  b.hidden = !text; b.textContent = text; b.className = err ? 'glass err' : 'glass';
}
function syncPlay() { $('#play').textContent = state.playing ? 'Pausa' : 'Reproducir'; }
function updateSpeedLabel() {
  // La velocidad de animación (pasos/s de pantalla) es independiente del tiempo físico: 1 s de pantalla = speed·dt s físicos
  const dt = state.info ? state.info.dt_s : 0;
  $('#speedLabel').textContent = `${Math.round(state.speed)} pasos/s · 1 s de pantalla = ${fmt(state.speed * dt * 1e9, 3)} ns físicos`;
}

// ----------------------------------------------------------------- controles
const nRows = () => (isMulti() ? state.nPoints : state.rows.length);
function togglePlay() {
  if (state.cursor >= nRows() - 1 && (state.lost || state.finished)) return;
  state.playing = !state.playing; syncPlay();
}
async function stepOnce() {
  state.playing = false; syncPlay();
  if (state.cursor + 1 >= nRows()) { await fetchMore(1); }
  state.cursor = Math.min(state.cursor + 1, nRows() - 1);
}

$('#play').addEventListener('click', togglePlay);
$('#step').addEventListener('click', stepOnce);
$('#reset').addEventListener('click', resetSession);
$('#apply').addEventListener('click', newSession);
$('#scrub').addEventListener('input', (e) => { state.playing = false; syncPlay(); state.cursor = Number(e.target.value); });
$('#speed').addEventListener('input', (e) => {
  state.speed = 10 * Math.pow(10, (Number(e.target.value) / 100) * 3);   // 10 .. 10 000 pasos/s
  updateSpeedLabel();
});
window.addEventListener('keydown', (e) => {
  const t = e.target;
  if (t.tagName === 'SELECT' || (t.tagName === 'INPUT' && ['number', 'text'].includes(t.type))) return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') stepOnce();
  else if (e.code === 'KeyR') resetSession();
});

// -------------------------------------------------------------------- bucle
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (state.id && nRows()) {
    if (state.playing) {
      state.acc += state.speed * dt;
      const adv = Math.floor(state.acc);
      state.acc -= adv;
      const lastIdx = nRows() - 1;
      state.cursor = Math.min(state.cursor + adv, lastIdx);
      if (state.cursor >= lastIdx && (state.lost || state.finished)) { state.playing = false; syncPlay(); }
      if (lastIdx - state.cursor < Math.max(2 * CHUNK, state.speed / 2)) fetchMore(CHUNK);
    }
    if (state.cursor !== state.shown) (isMulti() ? updateViewMulti() : updateView());
  }
  scene.render();
  requestAnimationFrame(frame);
}

(async function init() {
  try {
    buildForm(await api.getDefaults());
    await newSession();
  } catch (e) {
    showBanner(`No se pudo conectar con el backend (http://127.0.0.1:8000): ${e.message}`, true);
  }
  $('#speed').dispatchEvent(new Event('input'));
  requestAnimationFrame(frame);
})();
