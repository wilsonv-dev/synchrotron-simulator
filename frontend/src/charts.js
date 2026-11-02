// Gráficas del panel inferior (Chart.js). Sólo representan datos calculados por el motor de Python:
// filas de diagnóstico (t, energía, potencia), posiciones x-y y la energía de Coulomb del sistema.
import {
  Chart, LineController, ScatterController, LineElement, PointElement, LinearScale, Tooltip, Legend,
} from 'chart.js';

Chart.register(LineController, ScatterController, LineElement, PointElement, LinearScale, Tooltip, Legend);

Chart.defaults.color = '#7f8cab';
Chart.defaults.font.size = 10;
Chart.defaults.font.family = '"Segoe UI", "Helvetica Neue", Arial, sans-serif';
Chart.defaults.borderColor = 'rgba(110, 150, 255, 0.12)';

const GRID = 'rgba(110, 150, 255, 0.12)';
const MEV_TO_EV = 1e6;

// Ticks con los dígitos justos para distinguir valores cercanos (p. ej. 4.4012e-12 y 4.4013e-12)
function tickSmart(v, _i, ticks) {
  if (v === 0) return '0';
  const vals = ticks.map((t) => t.value);
  const step = vals.length > 1 ? Math.abs(vals[1] - vals[0]) : Math.abs(v);
  const digits = Math.min(10, Math.max(2, Math.ceil(Math.log10(Math.abs(v) / step)) + 1));
  const a = Math.abs(v);
  return a >= 1e5 || a < 1e-3 ? v.toExponential(digits - 1) : Number(v.toPrecision(digits)).toString();
}

// Formato compacto de los ticks: notación científica fuera de [1e-3, 1e4)
function tick(v) {
  if (v === 0) return '0';
  const a = Math.abs(v);
  return a >= 1e4 || a < 1e-3 ? v.toExponential(1) : Number(v.toPrecision(6)).toString();
}

function timeSeriesChart(canvas, yTitle, color) {
  return new Chart(canvas, {
    type: 'line',
    data: { datasets: [{ data: [], borderColor: color, backgroundColor: color, borderWidth: 1.5, pointRadius: 0,
      tension: 0, parsing: false, normalized: true }] },
    options: {
      animation: false, responsive: true, maintainAspectRatio: false, parsing: false,
      interaction: { mode: 'nearest', axis: 'x', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => `${c.parsed.y.toPrecision(7)} ${yTitle} @ ${tick(c.parsed.x)} ns` } },
      },
      scales: {
        x: { type: 'linear', title: { display: true, text: 't (ns)' }, grid: { color: GRID }, ticks: { callback: tick, maxTicksLimit: 6 } },
        y: { type: 'linear', title: { display: true, text: yTitle }, grid: { color: GRID },
          ticks: { callback: tickSmart, maxTicksLimit: 5 }, grace: '5%' },
      },
    },
  });
}

// Si todas las variaciones de una serie están al nivel del redondeo numérico (≲1e-11 de su escala), se fija
// un eje centrado para que se vea una línea plana y no un "ruido" que no es físico.
function fixRoundoffAxis(chart, scale) {
  const ys = chart.data.datasets.flatMap((d) => d.data.map((p) => p.y));
  const y = chart.options.scales.y;
  if (!ys.length || !(scale > 0)) { delete y.min; delete y.max; return; }
  const lo = Math.min(...ys), hi = Math.max(...ys);
  if (hi - lo <= 1e-11 * scale) {
    const c = (hi + lo) / 2, half = Math.max(1e-6 * scale, Math.abs(c) * 1e-6);
    y.min = c - half; y.max = c + half;
  } else { delete y.min; delete y.max; }
}

function addTotalDataset(chart) {
  if (chart.data.datasets.length > 1) return;
  chart.data.datasets[0].label = 'Partícula';
  chart.data.datasets.push({ label: 'Total (todas)', data: [], borderColor: '#e8ecf8', backgroundColor: '#e8ecf8',
    borderWidth: 1.2, borderDash: [5, 3], pointRadius: 0, tension: 0, parsing: false, normalized: true });
  chart.options.plugins.legend.labels = { boxWidth: 12, boxHeight: 1, padding: 6 };
}

function setSeries(chart, particle, total, color) {
  chart.data.datasets[0].data = particle;
  if (color) chart.data.datasets[0].borderColor = color;
  chart.data.datasets[1].data = total || [];
  chart.options.plugins.legend.display = !!total;
  const ys = [...particle, ...(total || [])].map((p) => Math.abs(p.y));
  fixRoundoffAxis(chart, ys.length ? Math.max(...ys) : 0);
  chart.update('none');
}

export class ChartsPanel {
  constructor({ energy, power, xy, coulomb, coulombEmpty, radiated, dr }) {
    this.energy = timeSeriesChart(energy, 'T − T₀ (eV)', '#7cf5ff');
    this.radiated = timeSeriesChart(radiated, 'eV', '#f5e663');
    // potencia y energía radiada: partícula (línea de color) + total de todas (línea blanca discontinua)
    addTotalDataset(this.radiated);
    // desviación de la órbita r − R (opcional: sólo en la vista de análisis)
    this.dr = dr ? timeSeriesChart(dr, 'r − R (mm)', '#8fe66f') : null;
    this.energyCaption = energy.closest('figure')?.querySelector('figcaption');
    this.power = timeSeriesChart(power, 'W', '#ff4fd8');
    addTotalDataset(this.power);
    this.coulomb = timeSeriesChart(coulomb, 'eV', '#ffb84d');
    this.coulombCanvas = coulomb;
    this.coulombEmpty = coulombEmpty;
    this.xy = new Chart(xy, {
      type: 'scatter',
      data: { datasets: [] },
      options: {
        animation: false, responsive: true, maintainAspectRatio: false, parsing: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c) => `${c.dataset.label}: (${tick(c.parsed.x)}, ${tick(c.parsed.y)}) m` } },
        },
        scales: {
          x: { type: 'linear', title: { display: true, text: 'x (m)' }, grid: { color: GRID }, ticks: { callback: tick, maxTicksLimit: 5 } },
          y: { type: 'linear', title: { display: true, text: 'y (m)' }, grid: { color: GRID }, ticks: { callback: tick, maxTicksLimit: 5 } },
        },
      },
    });
    this.R = 1;
  }

  // Radio de referencia: fija los ejes x-y iguales y simétricos (vista de planta sin deformar)
  setRing(R, apertureR) {
    this.R = R;
    const lim = R + 2.5 * apertureR;
    for (const ax of ['x', 'y']) { this.xy.options.scales[ax].min = -lim; this.xy.options.scales[ax].max = lim; }
  }

  update({ series, tracks, coulomb, totals }) {
    // energía cinética de la partícula inspeccionada como T − T₀ (eV): sus cambios son ≪ T₀
    const T0 = series.ekin.length ? series.ekin[0].y : 0;
    this.energy.data.datasets[0].data = series.ekin.map((p) => ({ x: p.x, y: (p.y - T0) * MEV_TO_EV }));
    if (this.energyCaption) {
      this.energyCaption.textContent = series.ekin.length
        ? `Energía cinética: T − T₀ vs tiempo (T₀ = ${Number(T0.toPrecision(8))} MeV)` : 'Energía cinética vs tiempo';
    }
    this.energy.data.datasets[0].borderColor = series.color;
    fixRoundoffAxis(this.energy, T0 * MEV_TO_EV);                 // escala: la propia energía T₀ en eV
    this.energy.update('none');
    // radiación: de la partícula y, con varias partículas, el total de todas
    setSeries(this.power, series.power, totals?.power, series.color === '#7cf5ff' ? '#ff4fd8' : series.color);
    setSeries(this.radiated, series.radiated, totals?.radiated, series.color === '#7cf5ff' ? '#f5e663' : series.color);
    if (this.dr) {
      this.dr.data.datasets[0].data = series.dr || [];
      this.dr.data.datasets[0].borderColor = series.color === '#7cf5ff' ? '#8fe66f' : series.color;
      fixRoundoffAxis(this.dr, this.R * 1e3);                     // escala: el radio del anillo en mm
      this.dr.update('none');
    }

    // trayectorias calculadas (no círculos ideales) + posición actual; el círculo R sólo es una guía
    const guide = [];
    for (let a = 0; a <= 96; a++) {
      const th = (a / 96) * 2 * Math.PI;
      guide.push({ x: this.R * Math.cos(th), y: this.R * Math.sin(th) });
    }
    const sets = [{ label: 'R (guía)', data: guide, showLine: true, pointRadius: 0, borderWidth: 1,
      borderColor: 'rgba(192, 96, 255, 0.45)', borderDash: [4, 4] }];
    for (const tr of tracks) {
      sets.push({ label: tr.label, data: tr.pts, showLine: true, pointRadius: 0, borderWidth: 1.2,
        borderColor: tr.color });
    }
    sets.push({ label: 'posición actual', data: tracks.filter((t) => t.now).map((t) => ({ ...t.now, label: t.label })),
      pointRadius: 3, pointBackgroundColor: tracks.filter((t) => t.now).map((t) => t.color), borderWidth: 0 });
    this.xy.data.datasets = sets;
    this.xy.update('none');

    // energía de Coulomb del sistema (sólo con interacciones activadas)
    const hasU = !!coulomb;
    this.coulombEmpty.hidden = hasU;
    this.coulombCanvas.style.visibility = hasU ? 'visible' : 'hidden';
    this.coulomb.data.datasets[0].data = hasU ? coulomb : [];
    this.coulomb.update('none');
  }

  resize() { for (const c of this.all()) c.resize(); }

  all() { return [this.energy, this.power, this.radiated, this.xy, this.coulomb, this.dr].filter(Boolean); }

  // Imagen PNG de una gráfica con fondo blanco y líneas "blancas" oscurecidas, para el informe imprimible
  exportImage(chart) {
    const src = chart.canvas;
    if (!src.width || !src.height) chart.resize();      // aún sin tamaño (vista recién abierta): se fuerza
    if (!src.width || !src.height) return null;         // sigue sin tamaño: la gráfica se omite del informe
    const swapped = chart.data.datasets.filter((d) => d.borderColor === '#e8ecf8');
    for (const d of swapped) { d.borderColor = '#30343c'; d.backgroundColor = '#30343c'; }
    const legend = chart.options.plugins.legend.labels;
    const prevColor = legend.color;
    legend.color = '#30343c';
    chart.update('none');
    const out = document.createElement('canvas');
    out.width = src.width;                               // misma resolución que en pantalla (incluye devicePixelRatio)
    out.height = src.height;
    const g = out.getContext('2d');
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, out.width, out.height);
    g.drawImage(src, 0, 0, out.width, out.height);
    for (const d of swapped) { d.borderColor = '#e8ecf8'; d.backgroundColor = '#e8ecf8'; }
    legend.color = prevColor;
    chart.update('none');
    return out.toDataURL('image/png');
  }
}
