// Utilidades de exportación: CSV con los datos paso a paso y descarga de archivos generados en el navegador.
// El informe en PDF se construye en report_pdf.js (se carga bajo demanda).

// CSV estándar (separador coma, punto decimal, precisión completa)
export function buildCSV(header, rows) {
  const cell = (v) => (v === null || v === undefined ? '' : typeof v === 'number' ? String(v) : `"${String(v).replace(/"/g, '""')}"`);
  return [header.map(cell).join(','), ...rows.map((r) => r.map(cell).join(','))].join('\r\n');
}

export function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function downloadText(filename, text, mime) {
  downloadBlob(filename, new Blob([text], { type: `${mime};charset=utf-8` }));
}
