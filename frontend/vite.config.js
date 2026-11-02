import { defineConfig } from 'vite';

// BASE_PATH: ruta pública del sitio. En GitHub Pages es "/<nombre-del-repo>/" (lo pone el workflow).
// VITE_ENGINE=pyodide (también lo pone el workflow): el motor Python se ejecuta en el navegador y no hace
// falta servidor. En desarrollo, sin esa variable, la interfaz usa el backend FastAPI a través del proxy.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  server: {
    port: 5173,
    proxy: { '/api': 'http://127.0.0.1:8000' },
    // el worker importa los .py del backend (carpeta hermana) como texto
    fs: { allow: ['..'] },
  },
  worker: { format: 'es' },
});
