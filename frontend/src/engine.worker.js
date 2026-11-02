// Motor de simulación ejecutándose en el navegador (versión publicada en GitHub Pages).
// Carga Pyodide (Python compilado a WebAssembly) con numpy y pydantic, copia en su sistema de archivos los
// MISMOS módulos Python del backend (backend/app/*.py, importados como texto en el build) y atiende las
// peticiones de la interfaz llamando a app.browser.handle, que responde igual que la API HTTP.
// Corre en un web worker para que los cálculos no congelen la animación.
import initSrc from '../../backend/app/__init__.py?raw';
import constantsSrc from '../../backend/app/constants.py?raw';
import physicsSrc from '../../backend/app/physics.py?raw';
import simulationSrc from '../../backend/app/simulation.py?raw';
import serviceSrc from '../../backend/app/service.py?raw';
import browserSrc from '../../backend/app/browser.py?raw';

const PYODIDE_VERSION = '0.29.3';
const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const APP_FILES = {
  '__init__.py': initSrc, 'constants.py': constantsSrc, 'physics.py': physicsSrc,
  'simulation.py': simulationSrc, 'service.py': serviceSrc, 'browser.py': browserSrc,
};

const progress = (text) => self.postMessage({ type: 'progress', text });

const ready = (async () => {
  progress('Descargando el intérprete de Python (Pyodide)…');
  const { loadPyodide } = await import(/* @vite-ignore */ `${PYODIDE_URL}pyodide.mjs`);
  const py = await loadPyodide({ indexURL: PYODIDE_URL });
  progress('Cargando numpy y pydantic…');
  await py.loadPackage(['numpy', 'pydantic']);
  progress('Preparando el motor físico…');
  py.FS.mkdirTree('/home/pyodide/app');
  for (const [name, src] of Object.entries(APP_FILES)) py.FS.writeFile(`/home/pyodide/app/${name}`, src);
  py.runPython('import sys\nif "/home/pyodide" not in sys.path: sys.path.insert(0, "/home/pyodide")');
  const handle = py.pyimport('app.browser').handle;
  self.postMessage({ type: 'ready', python: py.runPython('import sys; sys.version.split()[0]'), pyodide: PYODIDE_VERSION });
  return handle;
})();

self.onmessage = async (e) => {
  const { id, op, args } = e.data;
  try {
    const handle = await ready;
    self.postMessage({ type: 'result', id, out: handle(op, JSON.stringify(args || {})) });
  } catch (err) {
    self.postMessage({ type: 'result', id, fatal: `No se pudo cargar el motor Python en el navegador: ${err.message || err}` });
  }
};
