// Dispensa del modulo in Word, nello stile del «Libro di studio» di Patrick (paper scientifico).
// Uso: node build_dispensa.js contenuto.json cartella_figure "Dispensa - <Modulo>.docx" ['{"classe":"Biennio","autore":"Prof. Patrick Militello"}']
//   contenuto.json  = uscita di contenuto_json.js (i file di contenuto del brainstorming)
//   cartella_figure = uscita di figure_dispensa.js (<pagina>-figure.json + PNG), una per capitolo del sito
// Niente foto e niente animazioni: gli schemi e le animazioni del sito diventano figure statiche numerate.
const fs = require('fs'), path = require('path');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  AlignmentType, HeadingLevel, LevelFormat, Footer, Header, PageNumber, TableOfContents, PageBreak, Bookmark, InternalHyperlink, Tab, TabStopType } = D;

const [, , SRC, FIGDIR, OUT, META, PAGINE] = process.argv;
const pagine = PAGINE && fs.existsSync(PAGINE) ? JSON.parse(fs.readFileSync(PAGINE, 'utf8')) : {};
const voci = [];  // indice: [livello, testo, ancora]
function titolo(livello, testoT, opz = {}) { const a = 'v' + voci.length; voci.push([livello, testoT, a]); return new Paragraph({ heading: livello === 1 ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2, children: [new Bookmark({ id: a, children: [new TextRun(testoT)] })], ...opz }); }
const cfg = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const meta = Object.assign({ classe: 'Biennio', autore: 'Prof. Patrick Militello', scuola: 'IIS Altiero Spinelli' }, META ? JSON.parse(META) : {});

const SERIF = 'Georgia', SANS = 'Arial', MONO = 'Consolas';
const INK = '20333F', BLUE = '173E54', BLUE2 = '214F67', MUTED = '586B77', LINE = 'DBE4E9', GOLD = 'C59249';
const W = 9638; // larghezza utile A4 con margini di 2 cm (DXA)

// --- testo con **grassetto**, *corsivo*, `codice`
function runs(text, base = {}) {
  const res = [], re = /(\*\*.+?\*\*|`.+?`|\*[^*\s][^*]*?\*)/g; let last = 0, m;
  text = String(text);
  while ((m = re.exec(text))) {
    if (m.index > last) res.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) res.push(...runs(t.slice(2, -2), { ...base, bold: true }));
    else if (t.startsWith('`')) res.push(new TextRun({ text: t.slice(1, -1), ...base, font: MONO, size: 19 }));
    else res.push(new TextRun({ text: t.slice(1, -1), ...base, italics: true }));
    last = m.index + t.length;
  }
  if (last < text.length) res.push(new TextRun({ text: text.slice(last), ...base }));
  return res;
}
const P = (children, o = {}) => new Paragraph({ children, spacing: { after: 140, line: 330 }, alignment: AlignmentType.JUSTIFIED, ...o });
const testo = (x, o) => P(runs(x), o);
const lead = (titolo, x, o) => P([new TextRun({ text: titolo + ' ', bold: true }), ...runs(x)], o);
const caption = (x) => new Paragraph({ children: runs(x, { font: SANS, size: 17, color: MUTED }), spacing: { before: 60, after: 240 }, alignment: AlignmentType.LEFT });

// --- figure del sito, nell'ordine della pagina, separate per tipo
function figureCapitolo(n) {
  const f = path.join(FIGDIR, `capitolo-${String(n).padStart(2, '0')}-figure.json`);
  if (!fs.existsSync(f)) return { animazione: [], schema: [] };
  const L = JSON.parse(fs.readFileSync(f, 'utf8'));
  return { animazione: L.filter((x) => x.tipo === 'animazione'), schema: L.filter((x) => x.tipo === 'schema') };
}
function pngSize(file) { const b = fs.readFileSync(file); return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; }
function immagine(file, larghezzaPx) {
  const s = pngSize(file), w = larghezzaPx, h = Math.round(s.h * w / s.w);
  return new ImageRun({ type: 'png', data: fs.readFileSync(file), transformation: { width: w, height: h } });
}
function figura(fig, numero, didascalia) {
  const out = [];
  if (fig.file.length === 1) {
    out.push(new Paragraph({ children: [immagine(path.join(FIGDIR, fig.file[0]), 600)], alignment: AlignmentType.CENTER, spacing: { before: 200, after: 60 }, keepNext: true }));
  } else {
    fig.file.forEach((f, i) => {
      out.push(new Paragraph({ children: [immagine(path.join(FIGDIR, f), 520)], alignment: AlignmentType.CENTER, spacing: { before: 160, after: 20 }, keepNext: true }));
      out.push(new Paragraph({ children: [new TextRun({ text: '(' + 'abcd'[i] + ')', font: SANS, size: 17, color: MUTED })], alignment: AlignmentType.CENTER, keepNext: true, spacing: { after: 40 } }));
    });
  }
  out.push(caption(`**Figura ${numero}** – ${didascalia}`));
  return out;
}
function didascaliaDa(fig, x, tipo) {
  let d = fig ? fig.titolo : '';
  if (tipo === 'animazione' && x) { const m = String(x).match(/Fa capire:\s*(.*?)(\.\s+Scena iniziale|$)/); if (m) d += ': ' + m[1].replace(/\.$/, ''); }
  return d.replace(/\s+/g, ' ').trim() + '.';
}

// --- tabelle
function tabella(rows) {
  const nc = rows[0].length, cw = Math.floor(W / nc), widths = rows[0].map(() => cw);
  widths[nc - 1] = W - cw * (nc - 1);
  const bd = { style: BorderStyle.SINGLE, size: 4, color: LINE };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: widths,
    rows: rows.map((r, i) => new TableRow({ tableHeader: i === 0, children: r.map((c, j) => new TableCell({ width: { size: widths[j], type: WidthType.DXA },
      borders: { top: bd, bottom: bd, left: bd, right: bd }, margins: { top: 60, bottom: 60, left: 100, right: 100 },
      shading: i === 0 ? { fill: 'EDF3F7', type: ShadingType.CLEAR, color: 'auto' } : undefined,
      children: [new Paragraph({ children: runs(c, { font: SANS, size: 18, bold: i === 0 || (j === 0 && rows[0][0] === '') ? true : undefined, color: i === 0 ? BLUE : undefined }), spacing: { after: 0 } })] })) })) });
}
function titoloTabella(rows) {
  const h = rows[0];
  if (h[0] === '' && h.length === 3) return `${h[1]} e ${h[2]} a confronto`;
  if (h[0] === '') return h.slice(1).join(', ') + ' a confronto';
  return h.join(' · ');
}
// riquadro con bordo a sinistra (riepilogo, note storiche, attività)
function riquadro(children, fill, bordo) {
  const nb = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [new TableCell({ width: { size: W, type: WidthType.DXA }, shading: { fill, type: ShadingType.CLEAR, color: 'auto' },
      margins: { top: 140, bottom: 100, left: 220, right: 220 },
      borders: { top: nb, bottom: nb, right: nb, left: { style: BorderStyle.SINGLE, size: 24, color: bordo } }, children })] })] });
}
const spazio = () => new Paragraph({ children: [], spacing: { after: 120 } });

// --- documento
const corpo = [], risposte = [];
// copertina
corpo.push(new Paragraph({ children: [new TextRun({ text: `INFORMATICA · ${meta.classe.toUpperCase()}`, font: SANS, size: 18, bold: true, color: BLUE2, characterSpacing: 40 })], spacing: { before: 2400, after: 500 } }));
corpo.push(new Paragraph({ children: [new TextRun({ text: cfg.title, font: SERIF, size: 96, bold: true, color: BLUE })], spacing: { after: 300 } }));
corpo.push(new Paragraph({ children: [new TextRun({ text: 'Dispensa del modulo', font: SERIF, size: 40, color: INK })], spacing: { after: 400 } }));
corpo.push(new Paragraph({ children: [], border: { bottom: { style: BorderStyle.SINGLE, size: 24, color: GOLD, space: 1 } }, indent: { right: 8200 }, spacing: { after: 500 } }));
corpo.push(new Paragraph({ children: [new TextRun({ text: `${meta.autore} · ${meta.scuola}`, font: SANS, size: 20, color: MUTED })] }));
corpo.push(new Paragraph({ children: [new TextRun({ text: 'Capitoli: ' + cfg.chapters.map((c) => c.n + '. ' + c.titolo).join(' · '), font: SANS, size: 18, color: MUTED })], spacing: { before: 120 } }));
corpo.push(new Paragraph({ children: [new PageBreak()] }));
// indice
corpo.push(new Paragraph({ children: [new TextRun({ text: 'Indice', font: SERIF, size: 40, bold: true, color: BLUE })], spacing: { after: 280 }, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: LINE, space: 6 } } }));
const POS_INDICE = corpo.length; corpo.push({ indice: true });

for (const cap of cfg.chapters) {
  const figs = figureCapitolo(cap.n); let nFig = 0, nTab = 0; const domande = [];
  corpo.push(titolo(1, `${cap.n}. ${cap.titolo}`, { pageBreakBefore: true }));
  if (cap.intro) corpo.push(lead('Obiettivo del capitolo.', cap.intro));
  cap.sezioni.forEach((sez, si) => {
    corpo.push(titolo(2, `${cap.n}.${si + 1} ${sez.titolo}`));
    let ultimoTesto = null;
    for (const b of sez.blocchi) {
      if (b.t === 'p') { const p = { x: b.x }; ultimoTesto = p; corpo.push(p); }
      else if (b.t === 'h3') corpo.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: runs(b.x) }));
      else if (b.t === 'list' || b.t === 'num') b.items.forEach((it) => corpo.push(new Paragraph({ children: runs(it), numbering: { reference: b.t === 'list' ? 'punti' : 'numeri', level: 0 }, spacing: { after: 80, line: 320 }, alignment: AlignmentType.JUSTIFIED })));
      else if (b.t === 'formula') corpo.push(new Paragraph({ children: runs(b.x, { font: MONO, size: 21 }), alignment: AlignmentType.CENTER, spacing: { before: 120, after: 200 } }));
      else if (b.t === 'code') b.lines.forEach((ln, i) => corpo.push(new Paragraph({ children: [new TextRun({ text: ln || ' ', font: MONO, size: 18 })], shading: { fill: 'F1F5F7', type: ShadingType.CLEAR, color: 'auto' }, spacing: { after: i === b.lines.length - 1 ? 200 : 0 } })));
      else if (b.t === 'table') { nTab++; corpo.push(caption(`**Tabella ${cap.n}.${nTab}** – ${titoloTabella(b.rows)}.`)); corpo.push(tabella(b.rows)); corpo.push(spazio()); }
      else if (b.t === 'box') {
        if (b.k === 'esempio') corpo.push(lead('Esempio.', b.x));
        else if (b.k === 'storia') { corpo.push(riquadro([P([new TextRun({ text: 'Nota storica. ', bold: true, color: '725122' }), ...runs(b.x)], { spacing: { after: 60, line: 320 } })], 'FBF7EE', GOLD)); corpo.push(spazio()); }
        else { corpo.push(riquadro([P([new TextRun({ text: 'Attività di laboratorio. ', bold: true, color: BLUE2 }), ...runs(b.x)], { spacing: { after: 60, line: 320 } })], 'EDF3F7', '46748D')); corpo.push(spazio()); }
      }
      else if (b.t === 'errore') {
        const errata = String(b.errata).replace(/^«|»$/g, '');
        corpo.push(P([new TextRun({ text: 'Attenzione. ', bold: true }), new TextRun('È sbagliato pensare che «'), ...runs(errata.replace(/\.$/, '')), new TextRun('». '), ...runs(b.corretta || '')]));
      }
      else if (b.t === 'domanda') domande.push(b);
      else if (b.t === 'figura' && (b.tipo === 'animazione' || b.tipo === 'schema')) {
        const fig = figs[b.tipo].shift(); if (!fig) continue;
        nFig++; const num = `${cap.n}.${nFig}`;
        if (ultimoTesto) ultimoTesto.x = ultimoTesto.x.replace(/([.:;])?\s*$/, (m0, p1) => ` (figura ${num})${p1 || '.'}`);
        corpo.push(...figura(fig, num, didascaliaDa(fig, b.x, b.tipo)));
      }
      // le foto non entrano nella dispensa
    }
  });
  if (cap.ricorda && cap.ricorda.length) {
    corpo.push(spazio());
    corpo.push(riquadro([new Paragraph({ children: [new TextRun({ text: `Riepilogo del capitolo ${cap.n}`, font: SERIF, size: 26, bold: true, color: BLUE })], spacing: { after: 120 } }),
      ...cap.ricorda.map((r) => new Paragraph({ children: runs(r), numbering: { reference: 'punti', level: 0 }, spacing: { after: 80, line: 310 } }))], 'EDF3F7', '46748D'));
  }
  if (domande.length) {
    corpo.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun('Verifica la comprensione')], spacing: { before: 360, after: 120 } }));
    domande.forEach((d, i) => {
      corpo.push(P([new TextRun({ text: `C${cap.n}.${i + 1} `, bold: true, color: '725122' }), ...runs(d.q)], { spacing: { after: 100, line: 320 }, indent: { left: 360, hanging: 360 } }));
      risposte.push([`C${cap.n}.${i + 1}`, d.q, d.risposta || '']);
    });
  }
}
// appendice: risposte commentate
corpo.push(titolo(1, 'Appendice · Risposte alle domande', { pageBreakBefore: true }));
risposte.forEach(([k, q, r]) => {
  corpo.push(P([new TextRun({ text: k + ' ', bold: true, color: '725122' }), ...runs(q, { italics: true })], { spacing: { after: 40, line: 320 }, keepNext: true }));
  corpo.push(P(runs(r), { spacing: { after: 180, line: 320 } }));
});

// i paragrafi segnaposto (con il rimando alla figura già inserito) diventano Paragraph
const righeIndice = voci.map(([l, t, a]) => new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: W, leader: 'dot' }], spacing: { before: l === 1 ? 160 : 20, after: 20 }, indent: { left: l === 1 ? 0 : 360 },
  children: [new InternalHyperlink({ anchor: a, children: [new TextRun({ text: t, bold: l === 1, color: l === 1 ? BLUE : INK, size: l === 1 ? 23 : 21 })] }),
    new TextRun({ children: [new Tab(), String(pagine[t] || '')], size: 21 })] }));
corpo.splice(POS_INDICE, 1, ...righeIndice);
fs.writeFileSync(OUT.replace(/\.docx$/, '') + '.voci.json', JSON.stringify(voci.map((v) => v[1])));
const figli = corpo.map((c) => (c && c.x !== undefined && !(c instanceof Paragraph) && !(c instanceof Table) && !(c instanceof TableOfContents)) ? testo(c.x) : c);

const doc = new Document({
  creator: meta.autore, title: `${cfg.title} – Dispensa`,
  styles: {
    default: { document: { run: { font: SERIF, size: 22, color: INK } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: SERIF, size: 40, bold: true, color: BLUE }, paragraph: { spacing: { before: 240, after: 280 }, outlineLevel: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: LINE, space: 6 } } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: SERIF, size: 29, bold: true, color: BLUE2 }, paragraph: { spacing: { before: 360, after: 140 }, outlineLevel: 1, keepNext: true } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: SERIF, size: 24, bold: true, color: BLUE2 }, paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 2, keepNext: true } },
    ],
  },
  numbering: { config: [
    { reference: 'punti', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 500, hanging: 260 } } } }] },
    { reference: 'numeri', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 500, hanging: 300 } } } }] },
  ] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } }, titlePage: true },
    headers: { default: new Header({ children: [new Paragraph({ children: [new TextRun({ text: `${cfg.title} · Dispensa`, font: SANS, size: 16, color: MUTED })], alignment: AlignmentType.RIGHT })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ children: [new TextRun({ children: [PageNumber.CURRENT], font: SANS, size: 16, color: MUTED })], alignment: AlignmentType.CENTER })] }) },
    children: figli,
  }],
});
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(OUT, buf); console.log('scritto', OUT); });
