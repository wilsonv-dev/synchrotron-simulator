import './style.css';
import { SynchrotronScene } from './scene.js';
import * as api from './api.js';

const $ = (s) => document.querySelector(s);
const CHUNK = 250;                                   // pasos que se piden al motor de Python por lote

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
const TOGGLES = [
  ['trail', 'Trayectoria (estela visual)', '#7cf5ff'], ['v', 'Velocidad v', '#8fe66f'], ['p', 'Momento p', '#ffb84d'],
  ['B', 'Campo magnético B', '#b678ff'], ['E', 'Campo eléctrico E (RF)', '#39e6d0'],
  ['rad', 'Emisión de radiación (cono 1/γ)', '#ff4fd8'], ['magnets', 'Imanes de curvatura', '#9b4dff'],
  ['cavity', 'Cavidad RF', '#22d3a6'], ['ref', 'Órbita de referencia (guía)', '#c060ff'],
  ['axes', 'Ejes', '#ff6b6b'], ['grid', 'Cuadrícula', '#28406e'],
];

const state = {
  id: null, info: null, params: null, names: [], idx: {}, rows: [], cursor: 0, shown: -1, acc: 0,
  playing: false, fetching: false, lost: false, lostReason: null, finished: false, speed: 300,
};
const scene = new SynchrotronScene($('#view'));

// ------------------------------------------------------------------ formato
function fmt(v, d = 5) {
  if (v === null || v === undefined || Number.isNaN(v)) return '—';
  if (v === 0) return '0';
  const a = Math.abs(v);
  return a >= 1e4 || a < 1e-3 ? v.toExponential(d - 2) : Number(v.toPrecision(d)).toString();
}
const row = (i) => Object.fromEntries(state.names.map((n, j) => [n, state.rows[i][j]]));
const setDl = (el, pairs) => { el.innerHTML = pairs.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join(''); };

// ---------------------------------------------------------------- formulario
function buildForm(defaults) {
  $('#form').innerHTML = PARAMS_UI.map(([key, text, extra]) => {
    if (Array.isArray(extra)) {
      return `<label>${text}<select name="${key}">${extra.map((o) => `<option ${o === defaults[key] ? 'selected' : ''}>${o}</option>`).join('')}</select></label>`;
    }
    const val = defaults[key] ?? '';
    return `<label>${text}<input type="number" step="any" name="${key}" value="${val}" ${extra === 'opt' ? 'placeholder="auto"' : ''}></label>`;
  }).join('');
  $('#toggles').innerHTML = TOGGLES.map(([k, t, c]) =>
    `<label><input type="checkbox" data-k="${k}" checked><span class="sw" style="background:${c}"></span>${t}</label>`).join('');
  $('#toggles').addEventListener('change', (e) => { scene.setVisible(e.target.dataset.k, e.target.checked); state.shown = -1; });
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
  return p;
}

// -------------------------------------------------------- datos desde Python
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

async function fetchMore(n) {
  if (state.fetching || state.lost || state.finished) return;
  state.fetching = true;
  const sid = state.id;
  try {
    const r = await api.stepSim(sid, n);
    if (sid === state.id) ingest(r);
  } catch (e) { showBanner(`Error del backend: ${e.message}`, true); state.playing = false; syncPlay(); }
  finally { state.fetching = false; }
}

async function newSession() {
  state.playing = false; syncPlay();
  let r;
  try { r = await api.createSim(readForm()); } catch (e) { showBanner(`Parámetros no válidos: ${e.message}`, true); return; }
  state.id = r.id; state.info = r.derived; state.params = r.params;
  loadSession(r);
}

async function resetSession() {
  if (!state.id) return;
  state.playing = false; syncPlay();
  const r = await api.resetSim(state.id);
  loadSession(r);
}

function loadSession(r) {
  state.rows = []; state.names = []; state.cursor = 0; state.acc = 0; state.shown = -1;
  const d = r.derived, p = r.params;
  scene.buildRing({ R: p.ring_radius_m, aR: d.aperture_r_m, aZ: d.aperture_z_m, nMag: p.n_magnets, gap: d.rf_gap_m,
    thetaC: d.cavity_angle_rad, bSign: Math.sign(d.bz_T) || 1, maxPoints: p.n_steps + 1 });
  for (const el of $('#toggles').querySelectorAll('input')) scene.setVisible(el.dataset.k, el.checked);
  ingest(r);
  renderDerived(d);
  showBanner([...d.warnings].join('  ·  '), false);
  updateSpeedLabel();
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
function togglePlay() {
  if (state.cursor >= state.rows.length - 1 && (state.lost || state.finished)) return;
  state.playing = !state.playing; syncPlay();
}
async function stepOnce() {
  state.playing = false; syncPlay();
  if (state.cursor + 1 >= state.rows.length) { await fetchMore(1); }
  state.cursor = Math.min(state.cursor + 1, state.rows.length - 1);
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
  if (e.target.tagName === 'INPUT' && e.target.type === 'number') return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') stepOnce();
  else if (e.code === 'KeyR') resetSession();
});

// -------------------------------------------------------------------- bucle
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (state.id && state.rows.length) {
    if (state.playing) {
      state.acc += state.speed * dt;
      const adv = Math.floor(state.acc);
      state.acc -= adv;
      const lastIdx = state.rows.length - 1;
      state.cursor = Math.min(state.cursor + adv, lastIdx);
      if (state.cursor >= lastIdx && (state.lost || state.finished)) { state.playing = false; syncPlay(); }
      if (lastIdx - state.cursor < Math.max(2 * CHUNK, state.speed / 2)) fetchMore(CHUNK);
    }
    if (state.cursor !== state.shown) updateView();
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
