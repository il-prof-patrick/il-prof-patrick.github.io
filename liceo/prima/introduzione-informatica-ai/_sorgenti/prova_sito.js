// Prova automatica di una pagina del sito: animazioni passo per passo, testi fuori dal disegno,
// impaginazione delle foto e tutte le slide di Presenta in aula.
// Uso: node prova_sito.js <cartella del sito> capitolo-05 [cartella screenshot]
// Richiede playwright (npm i playwright; nel sandbox Chromium è in /opt/pw-browsers/chromium).
// Variabili: PW (percorso di playwright/playwright-core), CHROME (eseguibile di Chrome), REAL=1 (carica le foto vere),
// ANIM=id1,id2 (prova solo quelle animazioni), NOSLIDE=1 (salta le slide).
// Le slide usano il motore condiviso assets/aula/ (dalla radice del sito): la cartella deve esistere.
// Le foto esterne non si caricano dal sandbox: vengono sostituite da un riquadro grigio
// solo per controllare l'impaginazione.
const { chromium } = require(process.env.PW || 'playwright');
const fs = require('fs'), path = require('path');
const [, , DIR, PAG, OUTARG] = process.argv;
const OUT = OUTARG || path.join(DIR, '_prova');
fs.mkdirSync(OUT, { recursive: true });
const PH = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAEklEQVR4nGOYu2YfDDEgcQDJFxRhAb4AVwAAAABJRU5ErkJggg==', 'base64');

(async () => {
  const exe = process.env.CHROME ? { executablePath: process.env.CHROME } : (fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
  const b = await chromium.launch(exe);
  const p = await b.newPage({ viewport: { width: 1360, height: 860 } });
  const errori = [];
  p.on('pageerror', (e) => errori.push('JS: ' + e.message));
  if (!process.env.REAL) await p.route(/^https?:\/\//, (r) => r.request().resourceType() === 'image' ? r.fulfill({ body: PH, contentType: 'image/png' }) : r.continue());
  await p.goto('file://' + path.resolve(DIR, PAG + '.html'));
  await p.waitForTimeout(1000);
  await p.screenshot({ path: path.join(OUT, 'pagina.png'), fullPage: true });

  // 0. buchi bianchi: una foto a lato o a margine non deve scendere molto più in basso del testo che ha accanto
  const buchi = await p.$$eval('.lezione .foto-margine, .lezione .foto-lato', (fs) => fs.map((f) => {
    const fb = f.getBoundingClientRect().bottom, top = f.getBoundingClientRect().top; let tb = top, n = f.nextElementSibling;
    while (n) {
      if (n.classList.contains('foto-margine') || n.classList.contains('foto-lato')) break;
      const cs = getComputedStyle(n); if (cs.clear && cs.clear !== 'none') break;
      if (cs.display !== 'none') tb = Math.max(tb, n.getBoundingClientRect().bottom); n = n.nextElementSibling;
    }
    if (!n && f.parentElement.classList.contains('box')) tb = Math.max(tb, f.parentElement.getBoundingClientRect().bottom - 24);
    const t = (f.querySelector('.foto-tit') || {}).textContent || '';
    return { t, gap: Math.round(fb - tb) };
  }).filter((x) => x.gap > 40));
  buchi.forEach((x) => errori.push(`buco bianco di ${x.gap}px sotto il testo accanto alla foto «${x.t}»`));

  // 1. animazioni: ogni passo, testi che escono dal disegno
  let ids = await p.$$eval('.passi-anim', (a) => a.map((x) => x.id));
  if (process.env.ANIM) ids = ids.filter((x) => process.env.ANIM.split(',').includes(x));
  for (const id of ids) {
    const el = await p.$('#' + id); await el.scrollIntoViewIfNeeded();
    const n = await p.$$eval('#' + id + ' ol.passi-testo li', (l) => l.length);
    await el.screenshot({ path: path.join(OUT, `${id}-0.png`) });
    for (let i = 1; i <= n; i++) {
      await p.evaluate((id) => [...document.querySelectorAll('#' + id + ' .passi-com button')].find((x) => /Avanti/.test(x.textContent)).click(), id);
      await p.waitForTimeout(3200);
      await el.screenshot({ path: path.join(OUT, `${id}-${i}.png`) });
      const fuori = await p.evaluate((id) => {
        const s = document.querySelector('#' + id + ' svg'), vb = s.viewBox.baseVal, out = [];
        s.querySelectorAll('text').forEach((t) => {
          if (!t.textContent.trim() || t.closest('[transform],[data-rotta],.pk')) return;
          const r = t.getBBox(); if (r.x < 0 || r.y < 0 || r.x + r.width > vb.width || r.y + r.height > vb.height) out.push(t.textContent);
        });
        return out;
      }, id);
      if (fuori.length) errori.push(`${id} passo ${i}: testo fuori dal disegno → ${fuori.join(' | ')}`);
    }
  }

  // 2. slide (motore assets/aula/: palco #palco, slide .pl, elementi a comparsa .rv → .visto)
  if (!process.env.NOSLIDE && await p.evaluate(() => !!window.AULA)) {
    await p.keyboard.press('p');
    try { await p.waitForSelector('#palco .pl-tela .pl', { timeout: 10000 }); } catch (e) { errori.push('le slide non si aprono: controlla che assets/aula/ (aula.js, aula.css) sia nella radice del sito'); }
    await p.waitForTimeout(800);
    const tot = await p.evaluate(() => window.AULA.slide.length);
    const DA = +(process.env.DA || 1), A_ = Math.min(tot, +(process.env.A || tot));   // intervallo di slide (per capitoli lunghi)
    for (let k = DA; k <= A_; k++) {
      if (k > 1) { await p.keyboard.type(String(k)); await p.keyboard.press('Enter'); await p.waitForTimeout(900); }
      for (let j = 0; j < 40; j++) {
        const resta = await p.evaluate(() => {
          const sec = document.querySelector('#palco .pl-tela > section:not(.fuori)'); if (!sec) return '';
          const rv = sec.querySelectorAll('.rv:not(.visto)').length;
          const av = sec.querySelector('.passi-com .tasto.primario');
          return rv > 0 ? 'rv' : (av && !av.disabled ? 'anim' : '');
        });
        if (!resta) break;
        await p.keyboard.press('ArrowRight'); await p.waitForTimeout(resta === 'anim' ? 3000 : 450);
      }
      // testo che esce dallo spazio anche dopo il rimpicciolimento del motore
      const fuori = await p.evaluate(() => [...document.querySelectorAll('#palco .pl-tela > section:not(.fuori) [data-fit]')]
        .filter((e) => e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1).map((e) => (e.textContent || '').trim().slice(0, 40)));
      if (fuori.length) errori.push(`slide ${k}: testo che esce dallo spazio → ${fuori.join(' | ')}`);
      await p.screenshot({ path: path.join(OUT, `slide-${String(k).padStart(2, '0')}.png`) });
    }
    console.log('slide:', tot);
  }
  console.log('animazioni:', ids.length);
  console.log(errori.length ? 'PROBLEMI:\n' + errori.join('\n') : 'nessun errore');
  console.log('screenshot in', OUT, '(guardali tutti, le slide anche a griglia)');
  await b.close();
})();
