// Immagini d'atmosfera per copertine e aperture di sezione di Presenta in aula (modulo CSS).
// Composizioni astratte fatte con il CSS stesso (scatole, gradienti, ombre, bordi arrotondati) sopra
// un frammento di codice sfumato: una diversa per ogni capitolo e sezione, generate con un seme.
// Uso: node atmosfera.js <cartella playwright-core> <chrome.exe>   →  assets/immagini/atmosfera/*.png + atmosfera.json
const path = require('path'), fs = require('fs');
const { chromium } = require(path.join(process.argv[2], 'playwright-core'));
const OUT = path.join(__dirname, '..', '..', 'assets', 'immagini', 'atmosfera');
fs.mkdirSync(OUT, { recursive: true });
const SEZ = { 1: 3, 2: 4, 3: 7, 4: 6, 5: 4, 6: 7, 7: 7, 8: 6, 9: 3, 10: 4, 11: 4, 12: 5, 13: 5, 14: 4, 15: 2, 16: 4 };
const COD = {
  1: 'h1 {\n  color: #1f3a5f;\n}\n<link rel="stylesheet"\n      href="stile.css">',
  2: 'selettore {\n  proprietà: valore;\n}\n/* commento */\nmargin: 10px 20px;',
  3: '.card.big > h3 + p,\na[href^="https"],\nli:nth-child(odd)::before',
  4: '#avviso .nota p {\n  color: crimson !important;\n}\n/* (1,1,1) */',
  5: 'font-size: clamp(1rem,\n  0.5rem + 2vw, 2rem);\nwidth: calc(100% - 2rem);',
  6: 'background: linear-gradient(\n  135deg, #0f8d80, #e9a313);\nbox-shadow: 0 8px 24px #0004;',
  7: '@font-face {\n  font-family: "Titoli";\n  font-display: swap;\n}\na:link, a:visited',
  8: '*, *::before, *::after {\n  box-sizing: border-box;\n}\nmargin: 0 auto;',
  9: 'display: inline-block;\nvisibility: hidden;\n<span> <div> <img>',
  10: '.card { position: relative; }\n.tag {\n  position: absolute;\n  z-index: 10;\n}',
  11: 'display: flex;\njustify-content: space-between;\nalign-items: center;\nflex: 1 1 0%;',
  12: 'grid-template-columns:\n  repeat(auto-fit, minmax(200px, 1fr));\ngrid-area: 1 / 1 / -1 / 3;',
  13: '@media (min-width: 768px) {\n  .corsi { columns: 2; }\n}\nsrcset="robot-800.jpg 800w"',
  14: '@keyframes sali {\n  to { transform: rotate(1turn); }\n}\ntransition: all .3s ease-out;',
  15: 'border-collapse: collapse;\ntr:nth-child(even)\ninput:user-invalid',
  16: '<button class="btn btn-primary">\n<div class="p-4 bg-blue-500">\n@theme { }'
};
const TINTE = { 1: 175, 2: 200, 3: 30, 4: 330, 5: 220, 6: 15, 7: 265, 8: 150, 9: 45, 10: 290, 11: 165, 12: 210, 13: 120, 14: 0, 15: 190, 16: 255, 0: 185 };
function rnd(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; }
function pagina(seed, hue, codice) {
  const r = rnd(seed * 7919 + 13);
  const h2 = (hue + 40 + r() * 60) % 360, h3 = (hue + 180 + r() * 40) % 360;
  let forme = '';
  const n = 6 + Math.floor(r() * 5);
  for (let i = 0; i < n; i++) {
    const w = 120 + r() * 420, h = 80 + r() * 300, x = r() * 1600 - 100, y = r() * 900 - 80;
    const rad = r() < 0.3 ? '50%' : (r() < 0.5 ? '999px' : Math.round(r() * 48) + 'px');
    const hh = [hue, h2, h3][Math.floor(r() * 3)];
    const tipo = r();
    const bg = tipo < 0.45 ? `linear-gradient(${Math.round(r() * 360)}deg, hsl(${hh} 70% 60% / .85), hsl(${(hh + 30) % 360} 80% 45% / .6))`
      : tipo < 0.7 ? `hsl(${hh} 60% 92% / .14)` : `radial-gradient(circle at 30% 30%, hsl(${hh} 90% 70% / .8), transparent 70%)`;
    const bord = tipo >= 0.45 && tipo < 0.7 ? `border:${2 + Math.round(r() * 6)}px solid hsl(${hh} 80% 75% / .5);` : '';
    forme += `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${rad};background:${bg};${bord}box-shadow:0 ${20 + r() * 40}px ${60 + r() * 60}px rgb(0 0 0 / .35);transform:rotate(${Math.round(r() * 40 - 20)}deg)"></div>`;
  }
  const cx = 80 + r() * 700, cy = 120 + r() * 420;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;width:1600px;height:900px;overflow:hidden}
body{position:relative;background:radial-gradient(ellipse at ${20 + r() * 60}% ${20 + r() * 60}%, hsl(${hue} 55% 26%), hsl(${(hue + 200) % 360} 40% 8%) 75%)}
pre{position:absolute;left:${cx}px;top:${cy}px;margin:0;font:600 46px/1.35 Consolas,"JetBrains Mono",monospace;color:hsl(${hue} 70% 85% / .22);white-space:pre;transform:rotate(-6deg);filter:blur(.6px)}
.v{position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgb(0 0 0 / .35))}
</style></head><body>${forme}<pre>${codice.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre><div class="v"></div></body></html>`;
}
(async () => {
  const b = await chromium.launch({ executablePath: process.argv[3] });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
  const mappa = {};
  const lavori = [['modulo', 0, 1, COD[6]]];
  for (const c of Object.keys(SEZ)) {
    lavori.push(['c' + c, +c, 100 + +c, COD[c]]);
    for (let s = 1; s <= SEZ[c]; s++) lavori.push([c + '.' + s, +c, +c * 100 + s * 7, COD[c]]);
  }
  for (const [k, c, seed, cod] of lavori) {
    const f = (k === 'modulo' ? 'modulo' : k.replace('.', '-')) + '.png';
    if (k !== 'modulo') mappa[k] = f.replace('.png', '.jpg');
    // le immagini già fatte (convertite in jpg) non si rifanno; le nuove escono in png e vanno convertite
    if (fs.existsSync(path.join(OUT, f.replace('.png', '.jpg')))) continue;
    await p.setContent(pagina(seed, TINTE[c], cod));
    await p.screenshot({ path: path.join(OUT, f) });
  }
  fs.writeFileSync(path.join(__dirname, 'atmosfera.json'), JSON.stringify(mappa, null, 1));
  console.log('immagini', lavori.length);
  await b.close();
})();
