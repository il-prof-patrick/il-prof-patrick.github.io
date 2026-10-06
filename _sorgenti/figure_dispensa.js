// Figure per la dispensa: fotografa (PNG, alta risoluzione, tema chiaro) gli schemi e le animazioni di una pagina del sito.
// Per le animazioni usa l'ultimo passo, oppure i passi indicati (es. confronti prima/dopo: due immagini affiancate).
// Uso: node figure_dispensa.js <cartella sito> capitolo-NN <cartella uscita> ['{"f-ftth":[2,4]}']
// Scrive <uscita>/figure.json: [{id, tipo, titolo, file:[...], passi:[...]}] nell'ordine della pagina.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const [, , DIR, PAG, OUT, CONF] = process.argv;
const scelte = CONF ? JSON.parse(CONF) : {};
fs.mkdirSync(OUT, { recursive: true });
const PH = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAEklEQVR4nGOYu2YfDDEgcQDJFxRhAb4AVwAAAABJRU5ErkJggg==', 'base64');
(async () => {
  const exe = fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {};
  const b = await chromium.launch(exe);
  const p = await b.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2.5, colorScheme: 'light', reducedMotion: 'reduce' });
  await p.route(/^https?:\/\//, (r) => r.request().resourceType() === 'image' ? r.fulfill({ body: PH, contentType: 'image/png' }) : r.continue());
  await p.goto('file://' + path.resolve(DIR, PAG + '.html'));
  await p.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
  await p.waitForTimeout(800);
  const figs = await p.$$eval('.lezione .tela.passi-anim, .lezione .tela.schema', (L) => L.map((e) => ({
    id: e.id || '', tipo: e.classList.contains('passi-anim') ? 'animazione' : 'schema',
    titolo: e.getAttribute('data-titolo') || ((e.querySelector('.passi-titolo') || {}).textContent || '').trim(),
    n: e.querySelectorAll('ol.passi-testo li').length })));
  const out = [];
  for (let k = 0; k < figs.length; k++) {
    const f = figs[k]; const sel = f.id ? '#' + f.id : `.lezione .tela.schema >> nth=${k}`;
    const el = await p.$(f.id ? '#' + f.id : '.lezione .tela.schema'); await el.scrollIntoViewIfNeeded();
    const passi = f.tipo === 'animazione' ? (scelte[f.id] || [f.n]) : [0];
    const files = [];
    for (const s of passi) {
      if (f.tipo === 'animazione') {
        // ricomincia e avanza fino al passo s
        const ric = await p.$(`#${f.id} .passi-com button:has-text("Ricomincia")`); if (ric) await ric.click();
        for (let i = 0; i < s; i++) { await p.click(`#${f.id} .passi-com .tasto.primario`); await p.waitForTimeout(150); }
        await p.waitForTimeout(2500);
      }
      const svg = await p.$(`${f.id ? '#' + f.id : sel} svg:not(.ic)`);
      const file = `${PAG}-fig${k + 1}${passi.length > 1 ? '-' + s : ''}.png`;
      await svg.screenshot({ path: path.join(OUT, file) }); files.push(file);
    }
    out.push({ id: f.id, tipo: f.tipo, titolo: f.titolo, file: files, passi });
  }
  fs.writeFileSync(path.join(OUT, `${PAG}-figure.json`), JSON.stringify(out, null, 1));
  console.log(out.map((x) => x.tipo + ' ' + (x.id || '-') + ' ' + x.titolo + ' ' + x.file.join(',')).join('\n'));
  await b.close();
})();
