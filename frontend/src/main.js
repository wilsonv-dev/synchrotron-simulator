import './style.css';
import { SynchrotronScene } from './scene.js';
import { ChartsPanel } from './charts.js';
import { renderIcons, setIcon } from './icons.js';
import { buildCSV, downloadBlob, downloadText } from './report.js';
import * as api from './api.js';

const $ = (s) => document.querySelector(s);
renderIcons();                                       // iconos SVG de los botones (data-icon)
const CHUNK = 250;                                   // pasos que se piden al motor de Python por lote
const E_CHARGE = 1.602176634e-19;

// Cada parámetro va a la pestaña «Acelerador» (#form) o «Partículas» (#formPart)
const PART_KEYS = new Set(['species', 'kinetic_energy_MeV', 'dp_rel', 'dr_m', 'start_angle_deg']);
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
  system: null, interaction: null, radiation: null,
  meta: [], status: [], nPoints: 0, sel: 0, detail: { pid: null, rows: [] }, detailLoading: false, legendSig: '',
};
const scene = new SynchrotronScene($('#view'));
let charts = null;                                    // ChartsPanel, se crea al abrir el panel por primera vez
const ui = { chartsAt: 0, chartsCursor: -1, chartsDirty: true,
  hudAt: 0,              // último refresco de los textos del HUD (se limitan a ~10 por segundo al reproducir)
  msPerStep: 0,          // coste medido de calcular un paso (incluye la transferencia de datos), media móvil
  speedLabelAt: 0 };
const isPhone = () => window.matchMedia('(max-width: 760px)').matches;
// inspección desde la consola (sólo en desarrollo); `ui` y `frame` permiten medir la fluidez del bucle
if (import.meta.env.DEV) window.__sim = { state, scene, get ui() { return ui; }, frame: (t) => frame(t) };

// ------------------------------------------------------------------ formato
function fmt(v, d = 5) {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  if (v === 0) return '0';
  const a = Math.abs(v);
  return a >= 1e4 || a < 1e-3 ? v.toExponential(d - 2) : Number(v.toPrecision(d)).toString();
}
const row = (i) => Object.fromEntries(state.names.map((n, j) => [n, state.rows[i][j]]));

// Radiación sincrotrón: tipo de luz según la longitud de onda crítica λc = h c / εc
const HC_EV_NM = 1239.84198;
function lightBand(ecrit_eV) {
  if (!(ecrit_eV > 0)) return { lambda: null, band: '—' };
  const nm = HC_EV_NM / ecrit_eV;
  const band = nm > 1e6 ? 'microondas' : nm > 700 ? 'infrarrojo' : nm >= 400 ? 'visible'
    : nm >= 10 ? 'ultravioleta' : nm >= 0.01 ? 'rayos X' : 'rayos gamma';
  return { lambda: nm, band };
}
const lambdaText = (nm) => (nm >= 1e6 ? `${fmt(nm / 1e6)} mm` : nm >= 1e3 ? `${fmt(nm / 1e3)} µm` : `${fmt(nm)} nm`);
// Bloque del HUD con la radiación de UNA partícula (fila del motor d) y su pérdida prevista por vuelta
function radiationPairs(d, lossPerTurn_eV) {
  const rad_eV = d.radiated_J / E_CHARGE;
  const { lambda, band } = lightBand(d.ecrit_eV);
  return [
    ['— Radiación sincrotrón —', ''],
    ['Potencia emitida (Liénard)', `${fmt(d.power_W)} W`],
    ['Energía radiada acumulada', `${fmt(rad_eV)} eV`],
    ['Fracción de T radiada (no se resta)', `${fmt((rad_eV / (d.ekin_MeV * 1e6)) * 100)} %`],
    ['Pérdida prevista por vuelta', `${fmt(lossPerTurn_eV)} eV`],
    ['Energía crítica de los fotones', `${fmt(d.ecrit_eV)} eV`],
    ['λ crítica', lambda ? `${lambdaText(lambda)} · ${band}` : '— (sin curvatura)'],
    ['Semiángulo del cono 1/γ', `${fmt(1000 / d.gamma)} mrad (dibujo ×${scene.coneX})`],
  ];
}
const setDl = (el, pairs) => { el.innerHTML = pairs.map(([k, v]) => `<dt title="${String(k).replace(/"/g, '&quot;')}">${k}</dt><dd>${v}</dd>`).join(''); };
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
  const field = ([key, text, extra]) => {
    if (Array.isArray(extra)) {
      return `<label data-key="${key}"><span>${text}</span><select name="${key}">${extra.map((o) => `<option ${o === defaults[key] ? 'selected' : ''}>${o}</option>`).join('')}</select></label>`;
    }
    const val = defaults[key] ?? '';
    return `<label data-key="${key}"><span>${text}</span><input type="number" step="any" name="${key}" value="${val}" ${extra === 'opt' ? 'placeholder="auto"' : ''}></label>`;
  };
  $('#form').innerHTML = PARAMS_UI.filter(([k]) => !PART_KEYS.has(k)).map(field).join('');
  $('#formPart').innerHTML = PARAMS_UI.filter(([k]) => PART_KEYS.has(k)).map(field).join('');
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
  for (const el of [...$('#form').elements, ...$('#formPart').elements]) {
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
  $('#partTitle').textContent = m === 'single' ? 'Partícula' : 'Partícula de referencia (sintoniza B y RF)';
  $('#interSingle').hidden = m !== 'single';
  $('#multiPanel').hidden = m !== 'multi';
  $('#bunchPanel').hidden = m !== 'bunch';
  $('#interactionNote').hidden = m === 'single';
  $('#interactionsBox').hidden = m === 'single';
  $('#interactions').checked = state.cfg.interactions;
  $('#interactionNote').textContent = state.cfg.interactions ? NOTE_ON : NOTE_OFF;
  for (const [key, text] of PARAMS_UI) {
    const lab = $(`#panel label[data-key="${key}"]`);
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
  ui.chartsDirty = true;
  updateReportHint();
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
  if (resp.radiation && state.radiation) {      // radiación total de todas las partículas por paso
    const rr = resp.radiation;
    for (const key of ['power_W', 'radiated_J']) rr[key].forEach((v, j) => { state.radiation[key][rr.first_index + j] = v; });
  }
  ui.chartsDirty = true;
  state.lost = resp.lost; state.lostReason = resp.lost_reason; state.finished = resp.finished;
  $('#scrub').max = state.nPoints - 1;
  updateReportHint();
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
    ui.chartsDirty = true;
  } catch (e) { showBanner(`Error del backend: ${e.message}`, true); }
  finally { state.detailLoading = false; state.shown = -1; }
}
function selectParticle(k) {
  if (k < 0 || k >= state.meta.length) return;
  state.sel = k;
  state.detail = { pid: state.meta[k].pid, rows: [] };
  scene.setSelected(k);
  state.legendSig = ''; state.shown = -1;
  ui.chartsDirty = true;
  renderLegend();
}

// Tamaño del lote: ~0,4 s de cálculo según lo medido (pocos viajes al motor sin bloquearlo demasiado)
function chunkSize() {
  if (!ui.msPerStep) return CHUNK;
  return Math.max(100, Math.min(5000, Math.round(400 / ui.msPerStep)));
}
// Pasos por segundo que el motor es capaz de producir (null si aún no se ha medido)
const computeRate = () => (ui.msPerStep ? 1000 / ui.msPerStep : null);

async function fetchMore(n) {
  if (state.fetching || state.lost || state.finished) return;
  state.fetching = true;
  const sid = state.id;
  try {
    const t0 = performance.now();
    const r = await api.stepSim(sid, n, isMulti() ? state.detail.pid : null);
    if (sid === state.id) {
      (isMulti() ? ingestMulti(r) : ingest(r));
      const got = isMulti() ? r.n_points - r.first_index : r.rows.length;
      if (got > 0) {
        const ms = (performance.now() - t0) / got;
        ui.msPerStep = ui.msPerStep ? 0.6 * ui.msPerStep + 0.4 * ms : ms;
      }
    }
  } catch (e) { showBanner(`Error del backend: ${e.message}`, true); state.playing = false; syncPlay(); }
  finally { state.fetching = false; }
}

async function newSession() {
  state.playing = false; syncPlay();
  ui.msPerStep = 0;                                   // otra configuración: otro coste por paso
  if (isPhone()) setPhonePanel(null);                 // en el celular se cierra el panel para ver la escena
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
  ringInfo = { R: p.ring_radius_m, aR: d.aperture_r_m };
  if (charts) charts.setRing(ringInfo.R, ringInfo.aR);
  ui.chartsDirty = true;
  scene.buildRing({ R: p.ring_radius_m, aR: d.aperture_r_m, aZ: d.aperture_z_m, nMag: p.n_magnets, gap: d.rf_gap_m,
    thetaC: d.cavity_angle_rad, bSign: Math.sign(d.bz_T) || 1, maxPoints: p.n_steps + 1 });
  for (const el of $('#toggles').querySelectorAll('input')) scene.setVisible(el.dataset.k, el.checked);
}

function loadSession(r) {
  state.mode = 'single';
  state.radiation = null;
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
  state.radiation = r.radiation ? { power_W: [], radiated_J: [] } : null;
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

// Mientras se reproduce, la escena 3D se actualiza en cada fotograma pero los textos del panel de datos sólo
// ~10 veces por segundo (redibujar ~40 valores 60 veces por segundo resta fluidez y no se alcanza a leer)
function hudDue() {
  const now = performance.now();
  if (state.playing && now - ui.hudAt < 100) return false;
  ui.hudAt = now;
  return true;
}
const pointTable = (d) => ($('#inspector').open
  ? state.names.map((n) => `<tr><td>${n}</td><td>${fmt(d[n], 8)}</td></tr>`).join('') : '');
$('#inspector').addEventListener('toggle', () => { state.shown = -1; });

function updateView() {
  const i = state.cursor;
  state.shown = i;
  const d = row(i);
  scene.setParticle(d, state.info);
  scene.setTrailCount(i + 1);
  $('#scrub').value = i;
  if (!hudDue()) return;

  const status = $('#status');
  const atEnd = i === state.rows.length - 1;
  if (state.lost && atEnd) { status.className = 'status lost'; status.textContent = `Confinamiento perdido (${state.lostReason}) en el paso ${i}`; }
  else if (state.finished && atEnd) { status.className = 'status done'; status.textContent = 'Simulación completada'; }
  else { status.className = 'status ok'; status.textContent = d.inside ? 'Confinada' : 'Fuera de la cámara'; }

  setDl($('#telemetry'), [
    ['Paso', `${d.i} / ${state.params.n_steps}`], ['Tiempo físico', `${fmt(d.t * 1e9)} ns`], ['Vueltas', fmt(d.turns, 5)],
    ['γ', fmt(d.gamma, 6)], ['Energía cinética', `${fmt(d.ekin_MeV, 8)} MeV`],
    ['r', `${fmt(d.r, 7)} m`], ['r − R', `${fmt(d.dr * 1e3)} mm`], ['|B| en la partícula', `${fmt(Math.hypot(d.Bx, d.By, d.Bz))} T`],
    ['Trabajo de E acumulado', `${fmt(d.work_E_J / 1.602176634e-19)} eV`],
    ['Residuo ΔT − W', fmt(d.energy_residual, 3)],
    ...radiationPairs(d, state.info.rad_loss_per_turn_eV),
  ]);
  $('#point').innerHTML = pointTable(d);
  $('#scrubLabel').textContent = `punto ${i} / ${state.rows.length - 1}`;
}

function updateViewMulti() {
  const i = state.cursor;
  state.shown = i;
  scene.setMultiCursor(i);
  $('#scrub').value = i;
  const k = state.sel, m = state.meta[k];
  const ls = state.status[k]?.lost_step;
  const j = Math.min(i, lastValid(k));
  const r = state.detail.rows[j];
  if (!r) ensureDetail(j);
  const d = r ? Object.fromEntries(state.names.map((n, c) => [n, r[c]])) : null;
  if (d && !(ls != null && i > ls) && visualStyle(k).visible) scene.setParticle(d, state.info); else scene.hideVectors();
  if (!hudDue()) return;
  renderLegend();

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
      ['Trabajo de E acumulado', `${fmt(d.work_E_J / E_CHARGE)} eV`],
      ['Residuo ΔT − W', fmt(d.energy_residual, 3)],
      ...radiationPairs(d, state.info.particles?.[k]?.rad_loss_per_turn_eV));
  } else pairs.push(['Diagnóstico', 'cargando…']);
  const rad = state.radiation;
  if (rad && rad.power_W[i] !== undefined) {
    pairs.push(['— Radiación total (todas) —', ''],
      ['Potencia total emitida', `${fmt(rad.power_W[i])} W`],
      ['Energía total radiada', `${fmt(rad.radiated_J[i] / E_CHARGE)} eV`],
      ['Pérdida total prevista / vuelta', `${fmt(state.info.rad_loss_per_turn_total_pred_eV)} eV`]);
  }
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
  $('#point').innerHTML = d ? pointTable(d) : '';
  $('#scrubLabel').textContent = `punto ${i} / ${state.nPoints - 1}`;
}

// Avisos compactos: una línea con un icono de información; «Ver más» despliega la lista completa. Los errores se abren desplegados.
function showBanner(text, err) {
  const b = $('#banner');
  const items = String(text || '').split('  ·  ').map((t) => t.trim()).filter(Boolean);
  b.hidden = !items.length;
  if (!items.length) return;
  b.className = `toast glass${err ? ' err' : ''}`;
  setIcon(b.querySelector('.toast-icon'), err ? 'alert' : 'info');
  b.querySelector('.toast-text').textContent = items.length > 1 ? `${items.length} avisos · ${items[0]}` : items[0];
  b.querySelector('.toast-list').innerHTML = items.map((t) => `<li>${esc(t)}</li>`).join('');
  setToastExpanded(!!err);
}
function setToastExpanded(open) {
  const b = $('#banner');
  b.classList.toggle('expanded', open);
  b.querySelector('.toast-list').hidden = !open;
  const more = b.querySelector('.toast-more');
  more.textContent = open ? 'Ver menos' : 'Ver más';
  more.setAttribute('aria-expanded', String(open));
}
$('#banner .toast-more').addEventListener('click', () => setToastExpanded(!$('#banner').classList.contains('expanded')));
$('#banner .toast-close').addEventListener('click', () => { $('#banner').hidden = true; });

// ------------------------------------------------------- pestañas y paneles plegables
const store = {
  get(k, d) { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
};
function selectTab(name) {
  for (const t of document.querySelectorAll('.tab')) {
    const on = t.dataset.tab === name;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', String(on));
  }
  for (const p of document.querySelectorAll('.tabpane')) p.classList.toggle('active', p.dataset.pane === name);
  store.set('sim.tab', name);
}
document.querySelector('.tabs').addEventListener('click', (e) => { if (e.target.dataset.tab) selectTab(e.target.dataset.tab); });
selectTab(store.get('sim.tab', 'acc'));

function setCollapsed(side, collapsed) {
  document.body.classList.toggle(`${side}-collapsed`, collapsed);
  const btn = $(`#${side}Toggle`);
  btn.setAttribute('aria-expanded', String(!collapsed));
  setIcon(btn, (side === 'left') === collapsed ? 'chevron-right' : 'chevron-left');
  btn.title = collapsed ? 'Desplegar panel' : 'Plegar panel';
  store.set(`sim.${side}`, collapsed ? '1' : '0');
}
// En el celular cada panel se abre a casi toda la pantalla desde la barra; sólo uno a la vez
function setPhonePanel(side) {
  document.body.classList.toggle('m-left', side === 'left');
  document.body.classList.toggle('m-right', side === 'right');
  $('#mLeft').setAttribute('aria-expanded', String(side === 'left'));
  $('#mRight').setAttribute('aria-expanded', String(side === 'right'));
}
$('#mLeft').addEventListener('click', () => setPhonePanel(document.body.classList.contains('m-left') ? null : 'left'));
$('#mRight').addEventListener('click', () => setPhonePanel(document.body.classList.contains('m-right') ? null : 'right'));
for (const side of ['left', 'right']) {
  $(`#${side}Toggle`).addEventListener('click', () => {
    if (isPhone()) { setPhonePanel(null); return; }     // en el celular el botón de la cabecera cierra el panel
    setCollapsed(side, !document.body.classList.contains(`${side}-collapsed`));
  });
  setCollapsed(side, store.get(`sim.${side}`, '0') === '1');
}

// --------------------------------------------------------------------- gráficas
let ringInfo = { R: 1, aR: 0.1 };
const MAX_SERIES_POINTS = 600;

function setChartsOpen(open) {
  $('#charts').hidden = !open;
  document.body.classList.toggle('charts-open', open);
  $('#chartsToggle').setAttribute('aria-expanded', String(open));
  store.set('sim.charts', open ? '1' : '0');
  if (open && !charts) {
    charts = new ChartsPanel({ energy: $('#chEnergy'), power: $('#chPower'), xy: $('#chXY'), coulomb: $('#chCoulomb'),
      radiated: $('#chRadiated'),
      coulombEmpty: $('#chCoulombEmpty') });
    charts.setRing(ringInfo.R, ringInfo.aR);
  }
  ui.chartsDirty = true;
}
$('#chartsToggle').addEventListener('click', () => setChartsOpen($('#charts').hidden));

// Factor visual del ángulo del cono de radiación (no cambia la física: el ángulo real es 1/γ)
function setConeX(x) {
  scene.coneX = x;
  $('#coneX').value = x;
  $('#coneXLabel').textContent = `×${x}`;
  store.set('sim.coneX', String(x));
  state.shown = -1;
}
$('#coneX').addEventListener('input', (e) => setConeX(Number(e.target.value)));
setConeX(Number(store.get('sim.coneX', '3')) || 3);
$('#chartsClose').addEventListener('click', () => setChartsOpen(false));

// Reúne los datos ya recibidos del motor hasta el índice i (submuestreados a ~maxPts puntos para dibujar)
function chartData(i = state.cursor, maxPts = MAX_SERIES_POINTS) {
  const ix = state.idx;
  const dtNs = (state.info?.dt_s ?? 0) * 1e9;
  let rows, upto, color, subject;
  if (isMulti()) {
    const k = state.sel, m = state.meta[k];
    rows = state.detail.rows; upto = Math.min(i, lastValid(k)); color = m.color;
    subject = `Partícula inspeccionada: ${m.pid} · ${m.species === 'ion' ? m.label : SPECIES[m.species].label}`
      + ' (energía y potencia) · trayectorias de todas las visibles';
  } else {
    rows = state.rows; upto = Math.min(i, rows.length - 1); color = '#7cf5ff';
    subject = `Partícula individual · ${state.params?.species ?? ''}`;
  }
  const stride = Math.max(1, Math.ceil((upto + 1) / maxPts));
  const ekin = [], power = [], radiated = [], dr = [];
  const pushRow = (r) => {
    if (!r) return;                                   // filas de detalle aún no recibidas
    const t = r[ix.t] * 1e9;
    ekin.push({ x: t, y: r[ix.ekin_MeV] });
    power.push({ x: t, y: r[ix.power_W] });
    radiated.push({ x: t, y: r[ix.radiated_J] / E_CHARGE });
    dr.push({ x: t, y: r[ix.dr] * 1e3 });
  };
  for (let j = 0; j <= upto; j += stride) pushRow(rows[j]);
  if (upto >= 0 && upto % stride !== 0) pushRow(rows[upto]);   // siempre hasta el instante actual

  const tracks = [];
  if (isMulti() && scene.multi) {
    const n = state.meta.length;
    const per = Math.max(60, Math.min(maxPts, Math.floor((20 * maxPts) / n)));
    state.meta.forEach((m, k) => {
      const st = visualStyle(k);
      if (!st.visible && !st.trail_visible) return;
      const { buf } = scene.multi.lines[k];
      const last = Math.min(i, lastValid(k), scene.multi.count[k] - 1);
      if (last < 0) return;
      const s = Math.max(1, Math.ceil((last + 1) / per));
      const pts = [];
      for (let j = 0; j <= last; j += s) pts.push({ x: buf[3 * j] / scene.k, y: -buf[3 * j + 2] / scene.k });
      const now = { x: buf[3 * last] / scene.k, y: -buf[3 * last + 2] / scene.k };
      pts.push(now);
      const lost = state.status[k]?.lost_step != null && i >= state.status[k].lost_step;
      tracks.push({ label: m.pid, color: m.color, pts: st.trail_visible ? pts : [], now: lost || !st.visible ? null : now });
    });
  } else if (rows.length) {
    const s = Math.max(1, Math.ceil((upto + 1) / maxPts));
    const pts = [];
    for (let j = 0; j <= upto; j += s) pts.push({ x: rows[j][ix.x], y: rows[j][ix.y] });
    const now = { x: rows[upto][ix.x], y: rows[upto][ix.y] };
    pts.push(now);
    tracks.push({ label: 'partícula', color, pts, now });
  }

  let coulomb = null;
  if (state.system) {
    const U = state.system.potential_J;
    const last = Math.min(i, U.length - 1);
    const s = Math.max(1, Math.ceil((last + 1) / maxPts));
    coulomb = [];
    for (let j = 0; j <= last; j += s) if (U[j] !== undefined) coulomb.push({ x: j * dtNs, y: U[j] / E_CHARGE });
    if (last >= 0 && U[last] !== undefined) coulomb.push({ x: last * dtNs, y: U[last] / E_CHARGE });
  }
  let totals = null;
  if (state.radiation) {
    const R = state.radiation;
    const last = Math.min(i, R.power_W.length - 1);
    const s = Math.max(1, Math.ceil((last + 1) / maxPts));
    totals = { power: [], radiated: [] };
    const push = (j) => {
      if (R.power_W[j] === undefined) return;
      totals.power.push({ x: j * dtNs, y: R.power_W[j] });
      totals.radiated.push({ x: j * dtNs, y: R.radiated_J[j] / E_CHARGE });
    };
    for (let j = 0; j <= last; j += s) push(j);
    if (last >= 0 && last % s !== 0) push(last);
  }
  return { series: { ekin, power, radiated, dr, color }, tracks, coulomb, totals, subject };
}

// Se actualizan como máximo ~4 veces por segundo mientras avanza la simulación, y al pausar/desplazar
function maybeUpdateCharts(now) {
  if (!charts || $('#charts').hidden || !state.id) return;
  if (state.cursor === ui.chartsCursor && !ui.chartsDirty) return;
  if (now - ui.chartsAt < 250) return;
  const data = chartData();
  charts.update(data);
  $('#chartsSubject').textContent = data.subject;
  ui.chartsAt = now; ui.chartsCursor = state.cursor; ui.chartsDirty = false;
}
// ------------------------------------------------- análisis a pantalla completa + informe descargable
let analysisCharts = null;
const AN_POINTS = 2000;
const MODE_LABEL = { single: 'Partícula individual', multi: 'Múltiples partículas', bunch: 'Bunch de partículas' };
const lastIndex = () => nRows() - 1;
const speciesName = (m) => (m.species === 'ion' ? m.label : SPECIES[m.species]?.label ?? m.species);

function updateReportHint() {
  const done = !!(state.finished || state.lost);
  const b = $('#analysisOpen');
  if (done && !b.classList.contains('ready')) b.title = 'Simulación terminada: abre el análisis para descargar el informe';
  b.classList.toggle('ready', done);
}

// Garantiza que estén todas las filas de diagnóstico de la partícula inspeccionada hasta el último paso calculado
async function ensureFullDetail() {
  if (!isMulti()) return;
  for (let guard = 0; guard < 40; guard++) {
    const det = state.detail, need = lastValid(state.sel);
    if (det.rows[need]) return;
    let start = 0;
    while (det.rows[start]) start++;
    const h = await api.getParticleHistory(state.id, det.pid, start);
    if (state.detail !== det) continue;               // se cambió de partícula mientras tanto
    h.rows.forEach((r, j) => { det.rows[h.first_index + j] = r; });
    if (!h.rows.length) return;
  }
}

// Cifras de la simulación hasta el último paso calculado, agrupadas (para la vista y el informe)
function summaryGroups() {
  const i = lastIndex(), ix = state.idx, info = state.info, dt = info.dt_s;
  const multi = isMulti();
  const rows = multi ? state.detail.rows : state.rows;
  const kLast = multi ? Math.min(i, lastValid(state.sel)) : i;
  const r0 = rows[0], rl = rows[kLast];
  if (!r0 || !rl) return null;
  const v = (r, n) => r[ix[n]];
  let maxDr = 0, maxRes = 0;
  for (let j = 0; j <= kLast; j++) {
    const r = rows[j];
    if (!r) continue;
    maxDr = Math.max(maxDr, Math.abs(v(r, 'dr')));
    maxRes = Math.max(maxRes, Math.abs(v(r, 'energy_residual')));
  }
  const m = multi ? state.meta[state.sel] : null;
  const ls = multi ? state.status[state.sel]?.lost_step : null;
  let status;
  if (multi) {
    status = state.lost ? 'todas perdidas' : state.finished ? 'completada' : 'en curso';
  } else {
    status = state.lost ? `perdida (${state.lostReason}) en el paso ${i}` : state.finished ? 'completada' : 'en curso';
  }
  const T0 = v(r0, 'ekin_MeV'), Tf = v(rl, 'ekin_MeV');
  const radEv = v(rl, 'radiated_J') / E_CHARGE;
  const { lambda, band } = lightBand(v(rl, 'ecrit_eV'));
  const loss = multi ? info.particles?.[state.sel]?.rad_loss_per_turn_eV : info.rad_loss_per_turn_eV;
  const groups = [
    { title: 'Simulación', items: [
      ['Modo', MODE_LABEL[state.mode]],
      ['Pasos calculados', `${i} de ${state.params.n_steps}`],
      ['Tiempo físico simulado', `${fmt(i * dt * 1e9)} ns`],
      ['Estado', status],
      ...(multi ? [['Partículas confinadas al final',
        `${state.status.filter((s) => s.lost_step == null || i < s.lost_step).length} de ${state.meta.length}`]] : []),
    ] },
    { title: multi ? `Partícula ${m.pid} (${speciesName(m)})` : `Partícula (${state.params.species})`, items: [
      ...(multi && ls != null ? [['Salió de la cámara en el paso', String(ls)]] : []),
      ['Vueltas', fmt(v(rl, 'turns'), 6)],
      ['Energía cinética inicial', `${fmt(T0, 8)} MeV`],
      ['Energía cinética final', `${fmt(Tf, 8)} MeV`],
      ['Cambio de energía ΔT', `${fmt((Tf - T0) * 1e6)} eV`],
      ['Máx. desviación |r − R|', `${fmt(maxDr * 1e3)} mm`],
      ['Máx. residuo ΔT − W (precisión)', fmt(maxRes, 3)],
    ] },
    { title: 'Radiación sincrotrón de la partícula', items: [
      ['Potencia emitida (final)', `${fmt(v(rl, 'power_W'))} W`],
      ['Energía radiada acumulada', `${fmt(radEv)} eV`],
      ['Fracción de T radiada (no se resta)', `${fmt((radEv / (Tf * 1e6)) * 100)} %`],
      ['Pérdida prevista por vuelta', `${fmt(loss)} eV`],
      ['Energía crítica de los fotones', `${fmt(v(rl, 'ecrit_eV'))} eV`],
      ['Longitud de onda crítica', lambda ? `${lambdaText(lambda)} (${band})` : '—'],
      ['Semiángulo del cono 1/γ', `${fmt(1000 / v(rl, 'gamma'))} mrad`],
    ] },
  ];
  const R = state.radiation;
  if (R && R.power_W[i] !== undefined) {
    groups.push({ title: 'Radiación total (todas las partículas)', items: [
      ['Potencia total emitida (final)', `${fmt(R.power_W[i])} W`],
      ['Energía total radiada', `${fmt(R.radiated_J[i] / E_CHARGE)} eV`],
      ['Pérdida total prevista por vuelta', `${fmt(info.rad_loss_per_turn_total_pred_eV)} eV`],
    ] });
  }
  const S = state.system;
  if (S && S.total_J[i] !== undefined) {
    const it = state.interaction || {};
    groups.push({ title: 'Interacciones de Coulomb', items: [
      ['Energía de Coulomb inicial U₀', `${fmt(S.potential_J[0] / E_CHARGE)} eV`],
      ['Energía de Coulomb final', `${fmt(S.potential_J[i] / E_CHARGE)} eV`],
      [state.params.rf_voltage_V > 0 ? 'Δ(E_cin + U) (con RF no se conserva)' : 'Δ(E_cin + U) (debe conservarse)',
        `${fmt((S.total_J[i] - S.total_J[0]) / E_CHARGE)} eV`],
      ['Distancia mínima entre pares', `${fmt(it.min_pair_distance_m)} m`],
      ['Subpasos máximos por dt', `${it.max_substeps ?? '—'}${it.unresolved_steps ? ` (${it.unresolved_steps} sin resolver)` : ''}`],
    ] });
  }
  return groups;
}

function renderAnalysisCards(groups) {
  $('#anCards').innerHTML = groups.map((g) => `<div class="an-kpi group"><span>${esc(g.title)}</span></div>`
    + g.items.map(([k, val]) => `<div class="an-kpi"><b>${val}</b><span>${esc(k)}</span></div>`).join('')).join('');
}

function fillSubjectSelect() {
  const box = $('#anSubjectBox');
  box.hidden = !isMulti();
  if (!isMulti()) return;
  $('#anSubject').innerHTML = state.meta.map((m, k) =>
    `<option value="${k}" ${k === state.sel ? 'selected' : ''}>${esc(m.pid)} · ${esc(speciesName(m))}</option>`).join('');
}

async function refreshAnalysis() {
  $('#anInfo').textContent = 'Cargando los datos calculados…';
  await ensureFullDetail();
  const i = lastIndex();
  const data = chartData(i, AN_POINTS);
  analysisCharts.setRing(ringInfo.R, ringInfo.aR);
  analysisCharts.update(data);
  const groups = summaryGroups();
  if (groups) renderAnalysisCards(groups);
  $('#anInfo').textContent = `${MODE_LABEL[state.mode]} · ${i} pasos calculados (${fmt(i * state.info.dt_s * 1e9)} ns físicos)`
    + (isMulti() ? ' · trayectorias de todas las partículas visibles' : '');
}

async function openAnalysis() {
  if (!state.id || !nRows()) return;
  state.playing = false; syncPlay();
  $('#analysis').hidden = false;
  if (!analysisCharts) {
    analysisCharts = new ChartsPanel({ energy: $('#anEnergy'), power: $('#anPower'), radiated: $('#anRadiated'),
      xy: $('#anXY'), coulomb: $('#anCoulomb'), coulombEmpty: $('#anCoulombEmpty'), dr: $('#anDr') });
  }
  fillSubjectSelect();
  try { await refreshAnalysis(); } catch (e) { $('#anInfo').textContent = `Error al cargar los datos: ${e.message}`; }
  $('#analysisClose').focus();
}
function closeAnalysis() { $('#analysis').hidden = true; $('#analysisOpen').focus(); }

$('#analysisOpen').addEventListener('click', openAnalysis);
$('#analysisClose').addEventListener('click', closeAnalysis);
$('#anRefresh').addEventListener('click', () => refreshAnalysis());
$('#anSubject').addEventListener('change', async (e) => { selectParticle(Number(e.target.value)); await refreshAnalysis(); });

const fileStamp = () => new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-');

// Tabla final por partícula (modos múltiple y bunch): estado de todas en el último paso calculado
async function finalParticleTable() {
  const i = lastIndex();
  const p = await api.getPoint(state.id, i);
  const pred = state.info.particles || [];
  return {
    title: 'Partículas: resultado en el último paso calculado',
    head: ['id', 'especie', 'carga', 'T inicial (MeV)', 'T final (MeV)', 'ΔT (eV)', 'r − R (mm)', 'vueltas',
      'energía radiada (eV)', 'estado'],
    rows: p.particles.map((r, k) => {
      const m = state.meta[k], ls = state.status[k]?.lost_step;
      const T0 = pred[k]?.ekin_MeV ?? r.ekin_MeV;
      return [m.pid, speciesName(m), chargeText(Math.round(m.charge_C / E_CHARGE)), fmt(T0, 8), fmt(r.ekin_MeV, 8),
        fmt((r.ekin_MeV - T0) * 1e6), fmt(r.dr * 1e3), fmt(r.turns, 5), fmt(r.radiated_J / E_CHARGE),
        ls != null ? `perdida en el paso ${ls}` : 'confinada'];
    }),
    note: 'Para una partícula perdida se muestra su estado en el punto en que salió de la cámara.',
  };
}

function configSections() {
  const p = state.params, d = state.info;
  const val = (k) => (p[k] === null || p[k] === undefined ? 'auto' : String(p[k]));
  const acc = PARAMS_UI.filter(([k]) => !PART_KEYS.has(k)).map(([k, label]) => [label, val(k)]);
  const part = PARAMS_UI.filter(([k]) => PART_KEYS.has(k) && !(isMulti() && SINGLE_ONLY.has(k)))
    .map(([k, label]) => [isMulti() && MULTI_LABELS[k] ? MULTI_LABELS[k] : label, val(k)]);
  part.unshift(['Modo de simulación', MODE_LABEL[state.mode]]);
  if (isMulti()) part.push(['Interacciones de Coulomb', p.interactions ? 'activadas' : 'desactivadas']);
  const groups = [{ title: 'Anillo, campo B y RF', pairs: acc }, { title: 'Partículas', pairs: part }];
  if (state.mode === 'bunch') {
    const b = p.bunch;
    groups.push({ title: 'Bunch', pairs: [['Número de partículas', b.n_particles], ['Especie', b.species],
      ['Energía central (MeV)', b.central_energy_MeV ?? 'referencia'], ['σ_s longitud (m)', b.sigma_s_m],
      ['σ_x anchura (m)', b.sigma_x_m], ['σ_z altura (m)', b.sigma_z_m], ['σ_δ (Δp/p)', b.sigma_delta],
      ['Distribución', b.distribution === 'gaussian' ? 'gaussiana (±3σ)' : 'uniforme (±√3σ)'], ['Semilla', b.seed]] });
  }
  const derived = [
    { title: 'Máquina', pairs: [['B de referencia', `${fmt(d.b_ref_T)} T`], ['B aplicado', `${fmt(d.b_used_T)} T`],
      ['Radio de curvatura ρ (referencia)', `${fmt(d.rho_m)} m`], ['γ (referencia)', fmt(d.gamma_ref)],
      ['β (referencia)', fmt(d.beta_ref, 7)], ['Periodo de vuelta', `${fmt(d.t_rev_s * 1e9)} ns`],
      ['Frecuencia RF', `${fmt(d.f_rf_Hz / 1e6)} MHz`], ['Paso dt', `${fmt(d.dt_s * 1e12)} ps`],
      ['Tiempo físico programado', `${fmt(d.total_time_s * 1e9)} ns`]] },
    { title: 'RF y radiación (partícula de referencia)', pairs: [['Ganancia RF por vuelta', `${fmt(d.rf_gain_per_turn_eV)} eV`],
      ['Factor de tiempo de tránsito', fmt(d.transit_time_factor, 6)], ['Potencia radiada', `${fmt(d.rad_power_ref_W)} W`],
      ['Pérdida por vuelta (no aplicada)', `${fmt(d.rad_loss_per_turn_eV)} eV`], ['Energía crítica', `${fmt(d.ecrit_ref_eV)} eV`],
      ['Semiángulo 1/γ', `${fmt(d.cone_half_angle_rad * 1e3)} mrad`]] },
  ];
  return [{ title: 'Configuración', groups }, { title: 'Parámetros derivados', groups: derived }];
}

// Genera el informe en PDF y lo muestra en el visor; descargarlo es opcional (botón del visor)
async function showReport() {
  const btn = $('#anReport');
  btn.disabled = true; btn.querySelector('.txt').textContent = 'Generando PDF…';
  try {
    await refreshAnalysis();
    const groups = summaryGroups() || [];
    const C = analysisCharts;
    const charts = [
      ['Energía cinética vs tiempo', 'Cambio respecto a la energía inicial de la partícula analizada.', C.energy],
      ['Potencia radiada (Liénard) vs tiempo', 'Partícula analizada y, con varias partículas, el total (línea discontinua).', C.power],
      ['Energía radiada acumulada vs tiempo', '∫P dt; se calcula pero no se resta a la partícula.', C.radiated],
      ['Desviación de la órbita r − R vs tiempo', 'Distancia al radio de referencia del anillo.', C.dr],
      ['Trayectoria X–Y (planta)', 'Órbitas calculadas por el motor; el círculo discontinuo es la guía de radio R.', C.xy],
      ...(state.system ? [['Energía de Coulomb U vs tiempo', 'Energía potencial electrostática del sistema.', C.coulomb]] : []),
    ].map(([title, note, chart]) => ({ title, note, img: C.exportImage(chart), w: chart.canvas.width, h: chart.canvas.height }))
      .filter((c) => c.img);                          // una gráfica sin tamaño en pantalla no se puede copiar
    const highlights = groups.flatMap((g) => g.items).filter(([k]) => ['Estado', 'Vueltas', 'Cambio de energía ΔT',
      'Energía radiada acumulada', 'Longitud de onda crítica', 'Máx. desviación |r − R|', 'Partículas confinadas al final',
      'Energía total radiada'].includes(k)).map(([k, val]) => [val, k]);
    const ctx = {
      title: 'Informe de simulación — Sincrotrón 3D',
      subtitle: `${MODE_LABEL[state.mode]} · sesión ${state.id}`,
      generated: new Date().toLocaleString('es'),
      cards: highlights,
      sections: [...configSections(), { title: 'Resultados', groups: groups.map((g) => ({ title: g.title, pairs: g.items })) }],
      tables: isMulti() ? [await finalParticleTable()] : [],
      charts,
      warnings: state.info.warnings || [],
      notes: state.info.notes || [],
      method: [
        'Ecuaciones: dp/dt = q(E + v × B) (más la fuerza de Coulomb entre partículas si se activa) y dx/dt = p c²/E; '
          + 'integrador de Boris relativista de segundo orden con un paso dt común para todas las partículas.',
        'Campos: B vertical uniforme dentro de la cámara de vacío (sin gradiente ni rampa) y campo eléctrico tangencial '
          + 'en el hueco de la cavidad RF.',
        'Radiación: potencia de Liénard con la aceleración debida a los campos externos; la energía radiada se calcula '
          + 'pero no se resta a la partícula (sin reacción de radiación).',
        'Las predicciones analíticas (radio, confinamiento) suponen B uniforme sin RF ni interacciones.',
      ],
    };
    const { buildReportPDF } = await import('./report_pdf.js');      // se carga sólo al pedir el informe
    const blob = await buildReportPDF(ctx);
    openPdfViewer(blob, `informe_sincrotron_${state.mode}_${fileStamp()}.pdf`);
  } catch (e) {
    $('#anInfo').textContent = `No se pudo generar el informe: ${e.message}`;
  } finally {
    btn.disabled = false; btn.querySelector('.txt').textContent = 'Ver informe (PDF)';
  }
}

// CSV: una fila por paso con todas las magnitudes de la partícula analizada (+ totales del sistema)
async function downloadCSV() {
  await ensureFullDetail();
  const i = lastIndex();
  const multi = isMulti();
  const rows = multi ? state.detail.rows : state.rows;
  const header = [...state.names];
  const R = state.radiation, S = state.system;
  if (R) header.push('P_total_W', 'E_radiada_total_J');
  if (S) header.push('U_coulomb_J', 'E_cin_total_J', 'E_total_sistema_J');
  const out = [];
  for (let j = 0; j <= i; j++) {
    const r = rows[j] ? [...rows[j]] : [j, j * state.info.dt_s, ...Array(state.names.length - 2).fill(null)];
    if (R) r.push(R.power_W[j], R.radiated_J[j]);
    if (S) r.push(S.potential_J[j], S.kinetic_J[j], S.total_J[j]);
    out.push(r);
  }
  const who = multi ? state.meta[state.sel].pid : state.params.species;
  downloadText(`datos_sincrotron_${state.mode}_${who}_${fileStamp()}.csv`, buildCSV(header, out), 'text/csv');
}
$('#anReport').addEventListener('click', showReport);

// ----------------------------------------------------------------- visor del PDF
const pdf = { blob: null, url: null, name: '' };
function openPdfViewer(blob, name) {
  if (pdf.url) URL.revokeObjectURL(pdf.url);
  pdf.blob = blob; pdf.name = name; pdf.url = URL.createObjectURL(blob);
  $('#pdfName').textContent = `${name} · ${Math.max(1, Math.round(blob.size / 1024))} KB`;
  // los navegadores móviles no muestran PDFs incrustados: allí se ofrece abrir o descargar
  const noEmbed = isPhone() || window.matchMedia('(pointer: coarse)').matches;
  $('#pdfViewer').classList.toggle('no-embed', noEmbed);
  $('#pdfFrame').src = noEmbed ? 'about:blank' : pdf.url;
  $('#pdfViewer').hidden = false;
  $('#pdfClose').focus();
}
function closePdfViewer() {
  $('#pdfViewer').hidden = true;
  $('#pdfFrame').src = 'about:blank';
  if (pdf.url) { URL.revokeObjectURL(pdf.url); pdf.url = null; }
  $('#anReport').focus();
}
$('#pdfDownload').addEventListener('click', () => { if (pdf.blob) downloadBlob(pdf.name, pdf.blob); });
$('#pdfOpenTab').addEventListener('click', () => { if (pdf.url) window.open(pdf.url, '_blank', 'noopener'); });
$('#pdfOpenTab2').addEventListener('click', () => $('#pdfOpenTab').click());
$('#pdfDownload2').addEventListener('click', () => $('#pdfDownload').click());
$('#pdfClose').addEventListener('click', closePdfViewer);
$('#anCsv').addEventListener('click', () => downloadCSV().catch((e) => { $('#anInfo').textContent = `Error: ${e.message}`; }));

function syncPlay() {
  const label = state.playing ? 'Pausa' : 'Reproducir';
  setIcon($('#play .ic'), state.playing ? 'pause' : 'play');
  $('#play .lbl').textContent = label;
  $('#play').setAttribute('aria-label', label);
  state.shown = -1;                                   // al pausar se refresca todo el panel de datos
}
function updateSpeedLabel() {
  // La velocidad de animación (pasos/s de pantalla) es independiente del tiempo físico: 1 s de pantalla = speed·dt s físicos
  const dt = state.info ? state.info.dt_s : 0;
  const eff = effectiveSpeed();
  const limit = eff < state.speed * 0.98 ? ` · el cálculo da ~${Math.round(eff)} pasos/s` : '';
  $('#speedLabel').textContent = `${Math.round(state.speed)} pasos/s${limit} · 1 s de pantalla = ${fmt(eff * dt * 1e9, 3)} ns físicos`;
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
  if (!$('#pdfViewer').hidden) { if (e.code === 'Escape') closePdfViewer(); return; }
  if (!$('#analysis').hidden) { if (e.code === 'Escape') closeAnalysis(); return; }
  const t = e.target;
  if (t.tagName === 'SELECT' || (t.tagName === 'INPUT' && ['number', 'text'].includes(t.type))) return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') stepOnce();
  else if (e.code === 'KeyR') resetSession();
});

// Velocidad real de la animación: la pedida, salvo que el motor no pueda calcular tan deprisa; entonces se
// avanza al ritmo del cálculo (movimiento continuo) en lugar de adelantarse y quedarse esperando (tirones)
function effectiveSpeed() {
  const rate = computeRate();
  if (state.finished || state.lost || !rate) return state.speed;
  return Math.min(state.speed, 0.9 * rate);
}

// -------------------------------------------------------------------- bucle
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (state.id && nRows()) {
    if (state.playing) {
      state.acc += effectiveSpeed() * dt;
      const adv = Math.floor(state.acc);
      state.acc -= adv;
      const lastIdx = nRows() - 1;
      state.cursor = Math.min(state.cursor + adv, lastIdx);
      if (state.cursor >= lastIdx && (state.lost || state.finished)) { state.playing = false; syncPlay(); }
      if (lastIdx - state.cursor < Math.max(2 * chunkSize(), state.speed)) fetchMore(chunkSize());
      if (now - ui.speedLabelAt > 500) { ui.speedLabelAt = now; updateSpeedLabel(); }
    }
    if (state.cursor !== state.shown) (isMulti() ? updateViewMulti() : updateView());
    maybeUpdateCharts(now);
  }
  scene.render();
  requestAnimationFrame(frame);
}

(async function init() {
  // Versión publicada: el motor Python se carga en el navegador; se muestra el progreso de la descarga
  const inBrowser = api.ENGINE === 'pyodide';
  if (inBrowser) {
    $('#boot').hidden = false;
    const steps = [30, 65, 90];                         // descarga de Python, paquetes, preparación
    let stage = 0;
    api.onEngineProgress((text) => { $('#bootBar').style.width = `${text ? steps[Math.min(stage++, 2)] : 100}%`; });
  }
  try {
    buildForm(await api.getDefaults());
    await newSession();
  } catch (e) {
    showBanner(inBrowser ? e.message : `No se pudo conectar con el backend (http://127.0.0.1:8000): ${e.message}`, true);
  } finally {
    $('#boot').hidden = true;
  }
  $('#speed').dispatchEvent(new Event('input'));
  if (store.get('sim.charts', '0') === '1') setChartsOpen(true);
  requestAnimationFrame(frame);
})();
