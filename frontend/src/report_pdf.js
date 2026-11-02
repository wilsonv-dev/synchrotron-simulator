// Informe de la simulación en PDF (A4), generado en el navegador con jsPDF. El texto es vectorial y
// seleccionable; las gráficas se insertan como imágenes. Se usa la fuente DejaVu porque las fuentes
// estándar del PDF no tienen griego ni símbolos (γ, σ, λ, −, ₀, ², ×, ∫…). Este módulo se carga bajo
// demanda (import dinámico) para no engordar la carga inicial de la aplicación.
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import fontRegularUrl from 'dejavu-fonts-ttf/ttf/DejaVuSansCondensed.ttf?url';
import fontBoldUrl from 'dejavu-fonts-ttf/ttf/DejaVuSansCondensed-Bold.ttf?url';

const PAGE_W = 210, PAGE_H = 297, M = 16, W = PAGE_W - 2 * M;   // mm
const INK = [20, 22, 28], INK2 = [85, 90, 102], ACCENT = [31, 111, 209], LINE = [217, 220, 227], SOFT = [238, 241, 246];
const FONT = 'DejaVu';

let fontCache = null;
async function loadFonts() {
  if (fontCache) return fontCache;
  const toB64 = async (url) => {
    const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer());
    let bin = '';
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  };
  fontCache = { regular: await toB64(fontRegularUrl), bold: await toB64(fontBoldUrl) };
  return fontCache;
}

/**
 * ctx: { title, subtitle, generated, cards:[[valor, etiqueta]], sections:[{title, groups:[{title, pairs}]}],
 *        tables:[{title, head, rows, note}], charts:[{title, note, img, w, h}], warnings:[], notes:[], method:[] }
 * Devuelve un Blob application/pdf.
 */
export async function buildReportPDF(ctx) {
  const fonts = await loadFonts();
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  doc.addFileToVFS('DejaVuSansCondensed.ttf', fonts.regular);
  doc.addFileToVFS('DejaVuSansCondensed-Bold.ttf', fonts.bold);
  doc.addFont('DejaVuSansCondensed.ttf', FONT, 'normal');
  doc.addFont('DejaVuSansCondensed-Bold.ttf', FONT, 'bold');
  doc.setProperties({ title: ctx.title, subject: ctx.subtitle, creator: 'Simulador 3D de sincrotrón' });

  let y = M;
  const text = (s, x, yy, size, color = INK, style = 'normal', opts) => {
    doc.setFont(FONT, style); doc.setFontSize(size); doc.setTextColor(...color);
    doc.text(String(s), x, yy, opts);
  };
  const ensure = (h) => { if (y + h > PAGE_H - M - 6) { doc.addPage(); y = M; } };
  const section = (title) => {
    ensure(16);
    y += 4;
    text(title, M, y + 5, 13, ACCENT, 'bold');
    doc.setDrawColor(...ACCENT); doc.setLineWidth(0.5); doc.line(M, y + 7.5, M + W, y + 7.5);
    y += 12;
  };
  const tableDefaults = {
    margin: { left: M, right: M, top: M, bottom: M + 6 },
    styles: { font: FONT, fontSize: 8.5, textColor: INK, cellPadding: { top: 1.3, bottom: 1.3, left: 1.6, right: 1.6 },
      lineColor: LINE, lineWidth: 0.1 },
    headStyles: { font: FONT, fontStyle: 'bold', fillColor: SOFT, textColor: INK },
  };

  // ---------------------------------------------------------------- cabecera
  doc.setFillColor(...ACCENT); doc.rect(0, 0, PAGE_W, 4, 'F');
  y = M + 4;
  text(ctx.title, M, y, 18, INK, 'bold');
  y += 7;
  text(`${ctx.subtitle} · generado el ${ctx.generated}`, M, y, 9.5, INK2);
  y += 5;

  // ---------------------------------------------------------------- resumen (tarjetas)
  if (ctx.cards.length) {
    section('Resumen');
    const cols = 4, gap = 3, cw = (W - gap * (cols - 1)) / cols, ch = 17;
    ctx.cards.forEach(([value, label], k) => {
      const col = k % cols;
      if (col === 0 && k > 0) y += ch + gap;
      if (col === 0) ensure(ch);
      const x = M + col * (cw + gap);
      doc.setDrawColor(...LINE); doc.setLineWidth(0.25); doc.roundedRect(x, y, cw, ch, 1.5, 1.5, 'S');
      doc.setFont(FONT, 'bold'); doc.setFontSize(10.5); doc.setTextColor(...INK);
      doc.text(doc.splitTextToSize(String(value), cw - 5)[0], x + 2.5, y + 6.5);
      doc.setFont(FONT, 'normal'); doc.setFontSize(7.5); doc.setTextColor(...INK2);
      doc.text(doc.splitTextToSize(String(label), cw - 5).slice(0, 2), x + 2.5, y + 11);
    });
    y += ch + 2;
  }

  // ------------------------------------------- secciones clave–valor (2 pares por fila)
  for (const sec of ctx.sections) {
    section(sec.title);
    const body = [];
    for (const g of sec.groups) {
      body.push([{ content: g.title, colSpan: 4, styles: { fontStyle: 'bold', fillColor: SOFT } }]);
      for (let k = 0; k < g.pairs.length; k += 2) {
        const a = g.pairs[k], b = g.pairs[k + 1] || ['', ''];
        body.push([String(a[0]), String(a[1]), String(b[0]), String(b[1])]);
      }
    }
    autoTable(doc, {
      ...tableDefaults, startY: y, body, theme: 'plain',
      columnStyles: {
        0: { cellWidth: 52, textColor: INK2 }, 1: { cellWidth: 37, halign: 'right' },
        2: { cellWidth: 52, textColor: INK2 }, 3: { cellWidth: 37, halign: 'right' },
      },
      didDrawCell: (d) => {        // línea fina bajo cada fila
        if (d.section === 'body') {
          doc.setDrawColor(...LINE); doc.setLineWidth(0.1);
          doc.line(d.cell.x, d.cell.y + d.cell.height, d.cell.x + d.cell.width, d.cell.y + d.cell.height);
        }
      },
    });
    y = doc.lastAutoTable.finalY + 2;
  }

  // ---------------------------------------------------------------- tablas de datos
  for (const t of ctx.tables) {
    section(t.title);
    autoTable(doc, { ...tableDefaults, startY: y, head: [t.head], body: t.rows.map((r) => r.map(String)), theme: 'grid',
      styles: { ...tableDefaults.styles, fontSize: 7 }, headStyles: { ...tableDefaults.headStyles, fontSize: 7 } });
    y = doc.lastAutoTable.finalY + 2;
    if (t.note) { ensure(6); text(t.note, M, y + 3, 7.5, INK2); y += 6; }
  }

  // ---------------------------------------------------------------- gráficas (2 por fila)
  if (ctx.charts.length) {
    section('Gráficas');
    const gap = 8, cw = (W - gap) / 2;
    for (let k = 0; k < ctx.charts.length; k += 2) {
      const pair = ctx.charts.slice(k, k + 2).map((c) => {
        const h = Math.min(cw * (c.h / c.w), 85);
        const w = h / (c.h / c.w);                 // conserva la proporción (X–Y queda cuadrada)
        doc.setFontSize(8);
        doc.setFont(FONT, 'bold');
        const capTitle = doc.splitTextToSize(c.title, cw);
        doc.setFont(FONT, 'normal');
        const capNote = doc.splitTextToSize(c.note, cw);
        return { c, w, h, capTitle, capNote, total: h + 2 + (capTitle.length + capNote.length) * 3.4 };
      });
      const rowH = Math.max(...pair.map((p) => p.total));
      ensure(rowH + 4);
      pair.forEach((p, j) => {
        const x = M + j * (cw + gap);
        doc.setDrawColor(...LINE); doc.setLineWidth(0.2);
        doc.addImage(p.c.img, 'PNG', x + (cw - p.w) / 2, y, p.w, p.h, undefined, 'FAST');
        doc.rect(x, y, cw, p.h, 'S');
        doc.setFontSize(8);
        doc.setFont(FONT, 'bold'); doc.setTextColor(...INK);
        doc.text(p.capTitle, x, y + p.h + 4);                               // título de la gráfica
        doc.setFont(FONT, 'normal'); doc.setTextColor(...INK2);
        doc.text(p.capNote, x, y + p.h + 4 + p.capTitle.length * 3.4);      // explicación
      });
      y += rowH + 5;
    }
  }

  // ---------------------------------------------------------------- listas
  const list = (title, items, color = INK) => {
    section(title);
    if (!items.length) { text('Ninguno.', M, y + 1, 9, INK2); y += 6; return; }
    doc.setFont(FONT, 'normal'); doc.setFontSize(9);
    for (const it of items) {
      const lines = doc.splitTextToSize(String(it), W - 5);
      ensure(lines.length * 4.2 + 1.5);
      doc.setTextColor(...color);
      doc.text('•', M + 1, y + 1);
      doc.text(lines, M + 5, y + 1);
      y += lines.length * 4.2 + 1.5;
    }
  };
  list('Avisos de la simulación', ctx.warnings, [138, 75, 0]);
  list('Notas del modelo', ctx.notes);
  list('Método y limitaciones', ctx.method);

  // ---------------------------------------------------------------- pie de página
  const n = doc.getNumberOfPages();
  for (let p = 1; p <= n; p++) {
    doc.setPage(p);
    doc.setDrawColor(...LINE); doc.setLineWidth(0.2); doc.line(M, PAGE_H - 11, PAGE_W - M, PAGE_H - 11);
    text(`Simulador 3D de sincrotrón · ${ctx.subtitle}`, M, PAGE_H - 7, 7.5, INK2);
    text(`Página ${p} de ${n}`, PAGE_W - M, PAGE_H - 7, 7.5, INK2, 'normal', { align: 'right' });
  }
  return doc.output('blob');
}
