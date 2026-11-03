// Iconos de la interfaz: SVG de línea de Lucide (https://lucide.dev, licencia ISC) en lugar de emojis.
// Se ven igual en cualquier sistema, heredan el color del texto (currentColor) y sólo se incluyen los usados.
import {
  createElement, ChartLine, ChartNoAxesColumn, ChevronLeft, ChevronRight, Download, ExternalLink, FileText, Info,
  Pause, Play, RefreshCw, RotateCcw, SlidersHorizontal, StepForward, TriangleAlert, X,
} from 'lucide';

const ICONS = {
  play: Play, pause: Pause, step: StepForward, reset: RotateCcw,
  controls: SlidersHorizontal, data: ChartNoAxesColumn, charts: ChartLine, report: FileText,
  refresh: RefreshCw, download: Download, external: ExternalLink, close: X,
  'chevron-left': ChevronLeft, 'chevron-right': ChevronRight, info: Info, alert: TriangleAlert,
};

// Pone el icono `name` dentro de `el` (sustituye lo que hubiera)
export function setIcon(el, name) {
  const svg = createElement(ICONS[name]);
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('icon');
  el.replaceChildren(svg);
}

// Rellena todos los elementos marcados con data-icon="nombre"
export function renderIcons(root = document) {
  for (const el of root.querySelectorAll('[data-icon]')) setIcon(el, el.dataset.icon);
}
