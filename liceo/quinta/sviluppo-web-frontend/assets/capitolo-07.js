/* Capitolo 07 · widget e demo dei temi (un blocco per tema, numerati come i vecchi capitoli del modulo CSS) */
/* Capitolo 11 · Flexbox — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  var COL = ['#2f6fd6', '#2f9e44', '#e9a313'], INK = ['#fff', '#fff', '#2a1c00'];
  var PAD = [8, 24, 14, 30, 10, 20, 26, 16];

  /* frecce degli assi attorno al contenitore (SVG nel DOM del sito, colori dalle variabili) */
  function assi(svg, dir, w, h) {
    var NS = 'http://www.w3.org/2000/svg';
    svg.setAttribute('viewBox', '0 0 ' + (w + 30) + ' ' + (h + 30)); svg.style.width = (w + 30) + 'px'; svg.style.height = (h + 30) + 'px';
    svg.innerHTML = '<defs><marker id="w11p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="w11-fp"/></marker>' +
      '<marker id="w11t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="w11-ft"/></marker></defs>';
    var riga = dir.indexOf('row') === 0, inv = dir.indexOf('reverse') > 0;
    function freccia(x1, y1, x2, y2, cls, mk, et, tx, ty, rot) {
      var l = document.createElementNS(NS, 'line');
      [['x1', x1], ['y1', y1], ['x2', x2], ['y2', y2]].forEach(function (p) { l.setAttribute(p[0], p[1]); });
      l.setAttribute('class', cls); l.setAttribute('marker-end', 'url(#' + mk + ')'); svg.appendChild(l);
      var t = document.createElementNS(NS, 'text'); t.setAttribute('x', tx); t.setAttribute('y', ty); t.setAttribute('class', cls + '-t'); t.textContent = et;
      if (rot) t.setAttribute('transform', 'rotate(-90 ' + tx + ' ' + ty + ')');
      svg.appendChild(t);
    }
    var X0 = 30, Y0 = 30, X1 = w + 26, Y1 = h + 26;
    if (riga) {
      freccia(inv ? X1 : X0, 12, inv ? X0 : X1, 12, 'w11-p', 'w11p', 'asse principale', (X0 + X1) / 2, 9);
      freccia(12, Y0, 12, Y1, 'w11-t', 'w11t', 'trasversale', 9, (Y0 + Y1) / 2, true);
    } else {
      freccia(12, inv ? Y1 : Y0, 12, inv ? Y0 : Y1, 'w11-p', 'w11p', 'asse principale', 9, (Y0 + Y1) / 2, true);
      freccia(X0, 12, X1, 12, 'w11-t', 'w11t', 'trasversale', (X0 + X1) / 2, 9);
    }
  }

  /* ===================== 11.1–11.2 · Flexbox: Prova tu ===================== */
  W.registra('w11_flex', function (el) {
    var b = W.base(el, 'Prova tu · Flexbox', 'menu e cursori');
    var S = { dir: 'row', wrap: 'nowrap', jc: 'flex-start', ai: 'stretch', gap: 8, n: 4 };
    function m(et, k, voci) { b.ctrl.appendChild(K.menu(et, voci.map(function (v) { return [v]; }), S[k], function (v) { S[k] = v; disegna(true); })); }
    m('flex-direction', 'dir', ['row', 'row-reverse', 'column', 'column-reverse']);
    m('flex-wrap', 'wrap', ['nowrap', 'wrap']);
    m('justify-content', 'jc', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']);
    m('align-items', 'ai', ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']);
    b.ctrl.appendChild(W.cursore('gap', 0, 30, S.gap, 1, function (v) { S.gap = v; disegna(false); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.cursore('elementi', 2, 8, S.n, 1, function (v) { S.n = v; disegna(true); }));
    var palco = W.h('div', { 'class': 'w11-palco' });
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'w11-assi'); svg.setAttribute('aria-hidden', 'true');
    var cont = W.h('div', { 'class': 'w11-cont' });
    palco.appendChild(svg); palco.appendChild(cont);
    var g = W.h('div', { 'class': 'w11-sotto' });
    var testo = W.h('div', { 'class': 'w11-assi-t' });
    var f = K.file('stile.css', '', 'css');
    g.appendChild(testo); g.appendChild(f);
    el.appendChild(palco); el.appendChild(g); b.chiudi();
    var items = [];
    for (var k = 0; k < 8; k++) items.push(W.h('div', { 'class': 'w11-el', 'data-k': 'i' + k, style: 'background:' + COL[k % 3] + ';color:' + INK[k % 3] + ';padding:' + PAD[k] + 'px 0' }, [String(k + 1)]));
    function disegna(anima) {
      var fare = function () {
        cont.style.flexDirection = S.dir; cont.style.flexWrap = S.wrap; cont.style.justifyContent = S.jc; cont.style.alignItems = S.ai; cont.style.gap = S.gap + 'px';
        items.forEach(function (it, k) { if (k < S.n) { if (it.parentNode !== cont) cont.appendChild(it); } else if (it.parentNode) it.remove(); });
      };
      if (anima) K.flip(palco, fare, 650); else fare();
      var w = cont.offsetWidth, h = cont.offsetHeight;
      assi(svg, S.dir, w, h);
      var riga = S.dir.indexOf('row') === 0, inv = S.dir.indexOf('reverse') > 0;
      var pr = riga ? (inv ? '← orizzontale, da destra a sinistra' : '→ orizzontale, da sinistra a destra') : (inv ? '↑ verticale, dal basso in alto' : '↓ verticale, dall’alto in basso');
      var tr = riga ? '↓ verticale' : '→ orizzontale';
      testo.innerHTML = '<p><b class="p">Asse principale</b> ' + pr + ': lo governa <code>justify-content</code> (' + S.jc + ').</p>' +
        '<p><b class="t">Asse trasversale</b> ' + tr + ': lo governa <code>align-items</code> (' + S.ai + ').</p>';
      f.metti('.contenitore {\n  display: flex;\n  flex-direction: ' + S.dir + ';\n  flex-wrap: ' + S.wrap + ';\n  justify-content: ' + S.jc + ';\n  align-items: ' + S.ai + ';\n  gap: ' + S.gap + 'px;\n}');
      var esce = cont.scrollWidth > cont.clientWidth + 1 || cont.scrollHeight > cont.clientHeight + 1;
      b.dica(esce ? 'Gli elementi non entrano: con nowrap restano su una riga sola, si restringono fin dove possono e poi escono dal contenitore. Prova flex-wrap: wrap.' :
        (S.ai === 'stretch' ? 'stretch: gli elementi si allungano su tutto l’asse trasversale; il padding diverso si vede solo con gli altri valori di align-items.' :
          S.ai === 'baseline' ? 'baseline: i numeri stanno sulla stessa linea di base, anche se il padding sopra è diverso.' : 'Il padding verticale diverso dà agli elementi altezze diverse: guarda come si allineano sull’asse trasversale.'), esce ? 'att' : 'ok');
    }
    disegna(false);
    if (window.ResizeObserver) new ResizeObserver(function () { assi(svg, S.dir, cont.offsetWidth, cont.offsetHeight); }).observe(cont);
  });

  /* ===================== 11.3 · flex sugli elementi ===================== */
  W.registra('w11_elementi', function (el) {
    var b = W.base(el, 'Prova tu · flex sugli elementi', 'menu, cursore e preset');
    var T = ['corto', 'un testo medio', 'un testo molto più lungo degli altri'];
    var S = { w: 480, el: [[1, 1, 'auto'], [1, 1, 'auto'], [1, 1, 'auto']] };
    var PRESET = [['predefinito (0 1 auto)', [[0, 1, 'auto'], [0, 1, 'auto'], [0, 1, 'auto']]], ['flex-grow: 1 su tutti', [[1, 1, 'auto'], [1, 1, 'auto'], [1, 1, 'auto']]],
      ['flex: 1 su tutti', [[1, 1, '0'], [1, 1, '0'], [1, 1, '0']]], ['flex: 1, 1, 2', [[1, 1, '0'], [1, 1, '0'], [2, 1, '0']]]];
    var es = W.h('div', { 'class': 'kit-esempi' });
    PRESET.forEach(function (p) { es.appendChild(W.bottone(p[0], function () { S.el = p[1].map(function (x) { return x.slice(); }); sinc(); disegna(true); })); });
    b.ctrl.appendChild(W.cursore('larghezza del contenitore', 240, 560, S.w, 10, function (v) { S.w = v; disegna(false); }, function (v) { return v + ' px'; }));
    b.ctrl.appendChild(es);
    var palco = W.h('div', { 'class': 'w11e-palco' });
    var cont = W.h('div', { 'class': 'w11e-cont' });
    var els = T.map(function (t, k) {
      var d = W.h('div', { 'class': 'w11e-el', 'data-k': 'e' + k, 'data-dim': '', style: 'background:' + COL[k] + ';color:' + INK[k] }, [W.h('span', { 'class': 'l', testo: 'ABC'[k] + ' · ' + t }), W.h('span', { 'class': 'px' })]);
      cont.appendChild(d); return d;
    });
    palco.appendChild(cont);
    var tab = W.h('table', { 'class': 'kit-tab w11e-tab' });
    tab.appendChild(W.h('thead', {}, [W.h('tr', {}, ['', 'flex-grow', 'flex-shrink', 'flex-basis', 'larghezza'].map(function (x) { return W.h('th', { testo: x }); }))]));
    var tb = W.h('tbody'); tab.appendChild(tb);
    var menu = [], larg = [];
    T.forEach(function (t, k) {
      var r = W.h('tr');
      r.appendChild(W.h('td', {}, [W.h('span', { 'class': 'w9d-chip', style: 'background:' + COL[k] + ';color:' + INK[k], testo: 'ABC'[k] })]));
      var mm = [[['0'], ['1'], ['2'], ['3']], [['0'], ['1'], ['2'], ['3']], [['auto'], ['0'], ['100px'], ['200px']]].map(function (v, j) {
        var x = K.menu(['flex-grow', 'flex-shrink', 'flex-basis'][j] + ' di ' + 'ABC'[k], v, String(S.el[k][j]), function (val) { S.el[k][j] = j < 2 ? +val : val; disegna(true); });
        x.querySelector('span').remove(); r.appendChild(W.h('td', {}, [x])); return x.sel;
      });
      menu.push(mm);
      var l = W.h('td', { 'class': 'w9d-mis' }); larg.push(l); r.appendChild(l);
      tb.appendChild(r);
    });
    function sinc() { menu.forEach(function (mm, k) { mm.forEach(function (s, j) { s.value = String(S.el[k][j]); }); }); }
    var dati = W.h('div', { 'class': 'w11e-libero' });
    el.appendChild(palco); el.appendChild(dati); el.appendChild(tab); b.chiudi();
    function disegna(anima) {
      var fare = function () {
        cont.style.width = S.w + 'px';
        els.forEach(function (d, k) { var e = S.el[k]; d.style.flex = e[0] + ' ' + e[1] + ' ' + e[2]; });
        misura();
      };
      // si misura dentro il cambio, prima che partano le animazioni (che allargano e stringono gli elementi)
      if (anima) K.flip(palco, fare, 700); else fare();
    }
    var base = 0;
    function misura() {
      base = 0;
      els.forEach(function (d, k) {
        d.lastChild.textContent = Math.round(d.offsetWidth) + ' px';
        larg[k].textContent = Math.round(d.offsetWidth) + ' px';
        var e = S.el[k];
        if (e[2] === 'auto') { var c = d.style.flex; d.style.flex = '0 0 auto'; base += d.offsetWidth; d.style.flex = c; }
        else base += parseFloat(e[2]) || 0;
      });
      var libero = S.w - 2 * 8 - base, g = S.el.reduce(function (s, e) { return s + e[0]; }, 0);
      dati.innerHTML = 'Contenitore <b>' + S.w + ' px</b> · somma delle misure di partenza <b>' + Math.round(base) + ' px</b> · ' +
        (libero >= 0 ? 'spazio <b class="ok">avanzato ' + Math.round(libero) + ' px</b>' + (g ? ', diviso in proporzione a flex-grow' : ', ma nessuno ha flex-grow: resta vuoto') :
          'spazio <b class="no">mancante ' + Math.round(-libero) + ' px</b>, tolto in proporzione a flex-shrink (senza scendere sotto la parola più lunga)');
      b.dica('flex-basis è la partenza; flex-grow divide lo spazio avanzato; flex-shrink lo spazio mancante. Con basis auto si parte dal testo, quindi gli elementi restano diversi; con basis 0 e flex-grow uguali diventano uguali.', 'ok');
    }
    disegna(false);
  });
})();

/* Capitolo 12 · Grid — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  var COL = ['#2f6fd6', '#2f9e44', '#e9a313'], INK = ['#fff', '#fff', '#2a1c00'];
  function n0(x) { return Math.round(x * 10) / 10; }

  /* ===================== 12.2 · Grid: Prova tu ===================== */
  W.registra('w12_grid', function (el) {
    var b = W.base(el, 'Prova tu · Grid', 'scrivi, scegli e muovi i cursori');
    var S = { col: '1fr 1fr 1fr', gap: 8, n: 4, w: 460 };
    var PRE = ['1fr 1fr 1fr', '1fr 2fr', '150px 1fr', 'repeat(auto-fit, minmax(120px, 1fr))', 'repeat(auto-fill, minmax(120px, 1fr))'];
    var campo = K.campo('grid-template-columns', S.col, function (v) { S.col = v; disegna(true); }, '22em');
    var es = W.h('div', { 'class': 'kit-esempi' });
    PRE.forEach(function (p) { es.appendChild(W.bottone(p, function () { S.col = p; campo.input.value = p; disegna(true); })); });
    b.ctrl.appendChild(campo); b.ctrl.appendChild(es);
    b.ctrl.appendChild(W.cursore('gap', 0, 24, S.gap, 1, function (v) { S.gap = v; disegna(false); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.cursore('elementi', 1, 9, S.n, 1, function (v) { S.n = v; disegna(true); }));
    b.ctrl.appendChild(W.cursore('larghezza', 260, 600, S.w, 10, function (v) { S.w = v; disegna(false); }, function (v) { return v + ' px'; }));
    var palco = W.h('div', { 'class': 'w12-palco' });
    var cont = W.h('div', { 'class': 'w12-cont' });
    var tracce = W.h('div', { 'class': 'w12-tracce' });
    palco.appendChild(cont); palco.appendChild(tracce);
    var f = K.file('stile.css', '', 'css');
    el.appendChild(palco); el.appendChild(f); b.chiudi();
    var items = [];
    for (var k = 0; k < 9; k++) items.push(W.h('div', { 'class': 'w12-el', 'data-k': 'g' + k, style: 'background:' + COL[k % 3] + ';color:' + INK[k % 3] }, [String(k + 1)]));
    var ultimoValido = S.col;
    function disegna(anima) {
      var ok = window.CSS && CSS.supports('grid-template-columns', S.col) && S.col.trim();
      if (ok) ultimoValido = S.col;
      var fare = function () {
        cont.style.width = S.w + 'px'; cont.style.gap = S.gap + 'px'; cont.style.gridTemplateColumns = ultimoValido;
        items.forEach(function (it, k) { if (k < S.n) { if (it.parentNode !== cont) cont.appendChild(it); } else if (it.parentNode) it.remove(); });
      };
      if (anima) K.flip(palco, fare, 650); else fare();
      // tracce calcolate dal browser: getComputedStyle restituisce le colonne in px
      var t = getComputedStyle(cont).gridTemplateColumns.split(' ').map(parseFloat).filter(function (x) { return !isNaN(x); });
      tracce.innerHTML = ''; tracce.style.width = S.w + 'px'; tracce.style.columnGap = S.gap + 'px'; tracce.style.gridTemplateColumns = t.map(function (x) { return x + 'px'; }).join(' ');
      t.forEach(function (x) { tracce.appendChild(W.h('span', { testo: n0(x) + ' px' })); });
      f.metti('.griglia {\n  display: grid;\n  grid-template-columns: ' + (ok ? S.col : ultimoValido) + ';\n  gap: ' + S.gap + 'px;\n}', { 3: ok ? 'nuova' : 'errata' });
      var righe = Math.ceil(S.n / Math.max(1, t.length));
      var vuote = t.length - (S.n % t.length || t.length);
      if (!ok) b.dica('«' + S.col + '» non è un valore valido per grid-template-columns: il browser lo ignora e tiene l’ultimo valido.', 'att');
      else b.dica(t.length + (t.length === 1 ? ' colonna' : ' colonne') + ' (' + t.map(function (x) { return n0(x); }).join(' + ') + ' px) e ' + righe + (righe === 1 ? ' riga' : ' righe') +
        (righe > 1 ? ': le righe in più le crea il browser (griglia implicita).' : '.') +
        (/auto-fill/.test(S.col) && S.n < t.length ? ' auto-fill lascia ' + (t.length - S.n) + ' colonne vuote: con auto-fit gli elementi si allargherebbero.' : '') +
        (/auto-fit/.test(S.col) ? ' auto-fit: le colonne vuote si chiudono e gli elementi si allargano.' : '') + (vuote && righe > 1 && !/auto/.test(S.col) ? '' : ''), 'ok');
    }
    disegna(false);
  });

  /* ===================== 12.3 · dal disegno al layout ===================== */
  var AREE = 'grid-template-columns: 1fr 3fr;\n';
  var CODICE = '.pagina {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-areas:\n    "h h"\n    "s m"\n    "f f";\n}\nheader { grid-area: h; }\naside  { grid-area: s; }\nmain   { grid-area: m; }\nfooter { grid-area: f; }';
  var PEZZI = [['header', 'h', '1 / 1 / 2 / 3', '#33404f', '#fff'], ['aside', 's', '2 / 1 / 3 / 2', '#e9a313', '#2a1c00'], ['main', 'm', '2 / 2 / 3 / 3', '#0f8d80', '#fff'], ['footer', 'f', '3 / 1 / 4 / 3', '#5f7183', '#fff']];
  var SEGNI = [{ 5: 'nuova', 9: 'nuova', 6: 'spenta', 7: 'spenta', 10: 'spenta', 11: 'spenta', 12: 'spenta' }, { 6: 'nuova', 10: 'nuova', 7: 'spenta', 11: 'spenta', 12: 'spenta' },
    { 6: 'nuova', 11: 'nuova', 7: 'spenta', 12: 'spenta' }, { 7: 'nuova', 12: 'nuova' }];
  K.passi('w12_aree', {
    titolo: 'Dal disegno al layout',
    inizio: 'Il contenitore ha due colonne (`1fr 3fr`) e tre righe. Le tre stringhe di `grid-template-areas` sono il **disegno** della pagina: una stringa per riga, una lettera per cella.',
    passi: [
      'Prima riga, `"h h"`: le due celle si chiamano h e formano un’area. `header` con `grid-area: h` la occupa **tutta**.',
      'Seconda riga, `"s m"`: la cella di sinistra è s. `aside` con `grid-area: s` va nella **colonna stretta**.',
      'La cella di destra della seconda riga è m: `main` va nella **colonna larga**, accanto all’aside.',
      'Terza riga, `"f f"`: `footer` occupa di nuovo **tutta la larghezza**. Il layout è esattamente il disegno delle stringhe.'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia');
      var f = K.file('stile.css', CODICE, 'css');
      var a = K.anteprima({ altezza: 250, indirizzo: 'club-robotica.it' });
      corpo.appendChild(f); corpo.appendChild(a);
      var CSS = '.kit-body{padding:12px}.pagina{display:grid;grid-template-columns:1fr 3fr;grid-template-rows:44px 1fr 38px;gap:6px;height:216px;font:600 14px Arial,sans-serif}' +
        '.cella{border:2px dashed #b1b9c2;display:grid;place-items:center;font:600 22px Consolas,monospace;color:#c3ccd5}' +
        '.pz{display:grid;place-items:center;z-index:1;border-radius:3px;box-shadow:0 3px 8px rgba(0,0,0,.2)}';
      var CELLE = [['h', '1 / 1'], ['h', '1 / 2'], ['s', '2 / 1'], ['m', '2 / 2'], ['f', '3 / 1'], ['f', '3 / 2']];
      return function (i, anima) {
        f.metti(CODICE, i ? SEGNI[i - 1] : { 9: 'spenta', 10: 'spenta', 11: 'spenta', 12: 'spenta' });
        var h = '<div class="pagina">' + CELLE.map(function (c) { return '<div class="cella" style="grid-area:' + c[1] + '">' + c[0] + '</div>'; }).join('') +
          PEZZI.slice(0, i).map(function (p, k) { return '<div class="pz" data-k="p' + k + '" style="grid-area:' + p[2] + ';background:' + p[3] + ';color:' + p[4] + '">' + p[0] + ' · ' + p[1] + '</div>'; }).join('') + '</div>';
        var root = a.metti(h, '', CSS);
        if (anima && i) root.querySelector('[data-k="p' + (i - 1) + '"]').animate([{ opacity: 0, transform: 'scale(.55)' }, { opacity: 1, transform: 'none' }], { duration: 650, easing: K.MOTO });
      };
    }
  });

  /* ===================== 12.5 · righe indipendenti o colonne allineate ===================== */
  var LARG = [640, 500, 330];
  K.passi('w12_confronto', {
    titolo: 'Righe indipendenti o colonne allineate',
    inizio: 'Sei elementi, finestra larga **640px**. Flexbox (`flex-wrap: wrap`, `flex: 1 1 110px`) ne mette cinque in riga e il sesto, da solo, si allarga su **tutta la riga**. Grid (`repeat(auto-fit, minmax(110px, 1fr))`) mette il sesto **sotto il primo**, largo come gli altri.',
    passi: [
      'La finestra si stringe a **500px**. Ne stanno quattro per riga: in Flexbox gli ultimi due **si dividono tutta la riga** e diventano più larghi; in Grid restano **allineati alle colonne** di sopra.',
      'A **330px** ne stanno due per riga e sei si dividono esattamente: qui i due layout coincidono. La differenza si vede solo quando l’ultima riga è incompleta: Flexbox ragiona **riga per riga**, Grid **per colonne**.'
    ],
    monta: function (corpo) {
      corpo.classList.add('w12c');
      var mis = W.h('div', { 'class': 'w12c-mis' });
      corpo.appendChild(mis);
      var box = ['flex', 'grid'].map(function (t) {
        var c = W.h('div', { 'class': 'w12c-c ' + t, 'data-k': 'c' + t, 'data-dim': '' });
        for (var k = 0; k < 6; k++) c.appendChild(W.h('div', { 'class': 'w12c-el', 'data-k': t + k, 'data-dim': '', style: 'background:' + COL[k % 3] + ';color:' + INK[k % 3] }, [String(k + 1)]));
        corpo.appendChild(W.h('div', { 'class': 'w12c-riga' }, [W.h('code', { testo: t === 'flex' ? 'Flexbox · flex-wrap: wrap; flex: 1 1 110px' : 'Grid · repeat(auto-fit, minmax(110px, 1fr))' }), c]));
        return c;
      });
      return function (i, anima) {
        var fare = function () { box.forEach(function (c) { c.style.width = LARG[i] + 'px'; }); mis.textContent = 'finestra ' + LARG[i] + ' px'; };
        if (anima) K.flip(corpo, fare, 900); else fare();
      };
    }
  });
})();

/* Capitolo 13 · Responsive design — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  var CORSI = [['Arduino', 'Giovedì'], ['Stampa 3D', 'Venerdì'], ['Robot', 'Lunedì'], ['Droni', 'Martedì'], ['Sensori', 'Mercoledì'], ['Gara', 'Maggio']];

  /* una pagina del Club di robotica larga «larg» px CSS, con «col» colonne di card, rimpicciolita di «k» */
  function pagina(larg, col, k, n, chiave) {
    var p = W.h('div', { 'class': 'w13p' + (larg < 768 ? ' stretta' : ''), style: 'width:' + larg + 'px' });
    p.appendChild(W.h('div', { 'class': 'w13p-testa' }, [W.h('b', { testo: 'Club di robotica' }), W.h('span', { 'class': 'nav', testo: larg < 768 ? '☰' : 'Corsi   Orari   Iscrizioni   Contatti' })]));
    p.appendChild(W.h('div', { 'class': 'w13p-tit', testo: 'I corsi del club' }));
    var g = W.h('div', { 'class': 'w13p-corsi', style: 'grid-template-columns:repeat(' + col + ',1fr)' });
    CORSI.slice(0, n || 3).forEach(function (c, j) { g.appendChild(W.h('div', chiave ? { 'class': 'w13p-card', 'data-k': chiave + j } : { 'class': 'w13p-card' }, [W.h('i'), W.h('b', { testo: c[0] }), W.h('span', { testo: c[1] })])); });
    p.appendChild(g);
    p.appendChild(W.h('div', { 'class': 'w13p-txt', testo: 'Ci troviamo nel laboratorio di informatica. Le iscrizioni sono aperte a tutte le classi, anche a chi non ha mai programmato.' }));
    var box = W.h('div', { 'class': 'w13p-box' }); box.appendChild(p);
    p.style.transform = 'scale(' + k + ')';
    box.style.width = larg * k + 'px';
    box.pag = p;
    return box;
  }
  function altezza(box, k) { box.style.height = box.pag.offsetHeight * k + 'px'; }

  /* ===================== 13.1 · con e senza meta viewport ===================== */
  var HEAD0 = '<head>\n  <meta charset="utf-8">\n  <title>Club di robotica</title>\n  <link rel="stylesheet" href="stile.css">\n</head>';
  var HEAD1 = '<head>\n  <meta charset="utf-8">\n  <meta name="viewport"\n        content="width=device-width, initial-scale=1">\n  <title>Club di robotica</title>\n  <link rel="stylesheet" href="stile.css">\n</head>';
  K.passi('w13_viewport', {
    titolo: 'Con e senza meta viewport',
    inizio: 'Un telefono con uno schermo largo **360px CSS**. Il sito del club è responsive: sotto i 768px usa una colonna sola. Il telefono sta per caricare la pagina.',
    passi: [
      '**Senza meta viewport**: il telefono finge una finestra larga **980px**, impagina la versione da computer (tre colonne, menu completo) e la **rimpicciolisce** a un terzo. Il testo da 16px diventa di circa 6px: illeggibile senza ingrandire.',
      '**Con il meta viewport**: la finestra è larga quanto lo schermo, **360px**. Scatta la regola per gli schermi stretti: una colonna, menu a icona, testo alla grandezza vera.'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia', 'w13v');
      var f = K.file('index.html', HEAD0, 'html');
      var tel = W.h('div', { 'class': 'w13-tel' });
      var schermo = W.h('div', { 'class': 'w13-schermo' });
      var nota = W.h('div', { 'class': 'w13-nota' });
      tel.appendChild(W.h('i', { 'class': 'w13-notch' })); tel.appendChild(schermo);
      corpo.appendChild(f); corpo.appendChild(W.h('div', { 'class': 'w13v-dx' }, [tel, nota]));
      return function (i, anima) {
        f.metti(i === 2 ? HEAD1 : HEAD0, i === 2 ? { 3: 'nuova', 4: 'nuova' } : {}, 'html');
        schermo.innerHTML = '';
        nota.textContent = ['schermo: 360 px CSS', 'finta: 980 px, rimpicciolita', 'finestra: 360 px → grandezza vera'][i];
        if (!i) { schermo.appendChild(W.h('div', { 'class': 'w13-vuoto', testo: 'caricamento…' })); return; }
        // lo schermo disegnato è largo 180px: 360px CSS → × 0,5
        var larg = i === 1 ? 980 : 360, k = 180 / larg;
        var box = pagina(larg, i === 1 ? 3 : 1, k, 3);
        schermo.appendChild(box);
        if (anima && box.animate) box.animate([{ opacity: 0, transform: 'scale(' + (i === 1 ? 1.25 : 0.7) + ')' }, { opacity: 1, transform: 'none' }], { duration: 750, easing: K.MOTO });
      };
    }
  });

  /* ===================== 13.2 · mobile first contro desktop first ===================== */
  var MF = [['.corsi { grid-template-columns: 1fr; }', 0, 9999], ['@media (min-width: 768px) {\n  .corsi { grid-template-columns: 1fr 1fr; }\n}', 768, 9999], ['@media (min-width: 1024px) {\n  .corsi { grid-template-columns: repeat(3, 1fr); }\n}', 1024, 9999]];
  var DF = [['.corsi { grid-template-columns: repeat(3, 1fr); }', 0, 9999], ['@media (max-width: 1023px) {\n  .corsi { grid-template-columns: 1fr 1fr; }\n}', 0, 1023], ['@media (max-width: 767px) {\n  .corsi { grid-template-columns: 1fr; }\n}', 0, 767]];
  function colonne(w) { return w >= 1024 ? 3 : w >= 768 ? 2 : 1; }
  var FIN = [360, 800, 1100];
  K.passi('w13_mobile', {
    titolo: 'Stesso risultato, regole diverse',
    inizio: 'Finestra larga **360px**. Mobile first: vale solo la regola di base (una colonna). Desktop first: la base dice tre colonne, ma valgono anche le due media query `max-width`, e l’ultima riporta a **una colonna**.',
    passi: [
      'Finestra **800px**: due colonne. In mobile first si **aggiunge** `min-width: 768px`; in desktop first resta attiva solo `max-width: 1023px`, che **toglie** una colonna alla base.',
      'Finestra **1100px**: tre colonne. In mobile first sono attive **tutte e tre** le regole e vince l’ultima; in desktop first vale **solo la base**. Stesso risultato a ogni larghezza, con regole diverse.'
    ],
    monta: function (corpo) {
      corpo.classList.add('w13m');
      var mis = W.h('div', { 'class': 'w12c-mis' });
      var fin = W.h('div', { 'class': 'w13m-fin', 'data-k': 'fin', 'data-dim': '' });
      corpo.appendChild(mis); corpo.appendChild(W.h('div', { 'class': 'w13m-palco' }, [fin]));
      var colonneR = W.h('div', { 'class': 'w13m-regole' });
      var carte = [['Mobile first', MF], ['Desktop first', DF]].map(function (x) {
        var c = W.h('div', { 'class': 'w13m-col' }, [W.h('div', { 'class': 'w13m-tit', testo: x[0] })]);
        var rr = x[1].map(function (r) { var e = W.h('pre', { 'class': 'w13m-r', html: K.css(r[0]) }); c.appendChild(e); return e; });
        colonneR.appendChild(c); return rr;
      });
      corpo.appendChild(colonneR);
      var K_SC = 0.42;
      return function (i, anima) {
        var w = FIN[i], n = colonne(w);
        var fare = function () {
          fin.innerHTML = '';
          var box = pagina(w, n, K_SC, 6, 'm');
          fin.appendChild(box); fin.style.width = w * K_SC + 'px'; altezza(box, K_SC);
        };
        if (anima) K.flip(corpo, fare, 800); else fare();
        mis.textContent = 'finestra ' + w + ' px · ' + n + (n === 1 ? ' colonna' : ' colonne');
        [MF, DF].forEach(function (R, j) {
          var vince = -1;
          R.forEach(function (r, k) { var on = w >= r[1] && w <= r[2]; if (on) vince = k; carte[j][k].className = 'w13m-r' + (on ? ' on' : ''); });
          carte[j][vince].className += ' vince';
        });
      };
    }
  });

  /* ===================== 13.3 · le media query in azione ===================== */
  W.registra('w13_media', function (el) {
    var b = W.base(el, 'Prova tu · le media query in azione', 'muovi il cursore');
    var w = 600;
    b.ctrl.appendChild(W.cursore('larghezza della finestra', 320, 1200, w, 10, function (v) { w = v; disegna(); }, function (v) { return v + ' px'; }));
    var g = W.h('div', { 'class': 'w13q' });
    var palco = W.h('div', { 'class': 'w13q-palco' });
    var f = K.file('stile.css', '', 'css');
    g.appendChild(palco); g.appendChild(f); el.appendChild(g); b.chiudi();
    var COD = '.corsi {\n  display: grid;\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .corsi { grid-template-columns: 1fr 1fr; }\n  .nav { display: flex; }\n}\n@media (min-width: 1024px) {\n  .corsi { grid-template-columns: repeat(3, 1fr); }\n}';
    var ultimo = 0;
    function disegna() {
      var n = colonne(w), disp = palco.clientWidth - 20 || 600, k = Math.min(0.5, disp / w);
      palco.innerHTML = '';
      var box = pagina(w, n, k, 3);
      var cornice = W.h('div', { 'class': 'w13q-fin' }, [W.h('div', { 'class': 'w13q-barra', testo: w + ' px' }), box]);
      palco.appendChild(cornice); altezza(box, k);
      var s = {};
      [5, 6, 7, 8].forEach(function (r) { s[r] = w >= 768 ? 'nuova' : 'spenta'; });
      [9, 10, 11].forEach(function (r) { s[r] = w >= 1024 ? 'nuova' : 'spenta'; });
      f.metti(COD, s);
      if (n !== ultimo && ultimo && box.pag.animate && !W.ridotto) box.pag.querySelector('.w13p-corsi').animate([{ opacity: 0.3 }, { opacity: 1 }], { duration: 400 });
      ultimo = n;
      b.dica(w + ' px: ' + (w >= 1024 ? 'sono vere tutte e due le media query (768 e 1024): tre colonne, menu in riga.' : w >= 768 ? 'è vera solo la prima media query (almeno 768): due colonne, menu in riga.' : 'nessuna media query è vera: valgono solo le regole di base, una colonna e il menu a icona.'), 'ok');
    }
    disegna();
    if (window.ResizeObserver) new ResizeObserver(function () { disegna(); }).observe(g);
  });

  /* ===================== 13.5 · quale file sceglie il browser? ===================== */
  var FILE = [480, 800, 1600];
  var CASI = [[360, 1], [360, 1], [800, 1], [1200, 1], [360, 2]];
  K.passi('w13_srcset', {
    titolo: 'Quale file sceglie il browser?',
    inizio: 'Tre file della stessa foto: **480w**, **800w** e **1600w**. `sizes` dice: «da 800px in su l’immagine è larga metà finestra (`50vw`), altrimenti tutta (`100vw`)». Finestra di **360px**.',
    passi: [
      'Finestra 360px, sotto gli 800: lo spazio dell’immagine è `100vw` = **360px**. Il file più piccolo che basta è **480w**.',
      'Finestra **800px**: ora vale `50vw`, cioè **400px**. Basta ancora il **480w**: niente download inutile.',
      'Finestra **1200px**: `50vw` = **600px**. Il 480w non basta più: il browser prende l’**800w**.',
      'Telefono di nuovo a 360px, ma con uno schermo ad **alta densità (2x)**: ogni px CSS sono 2 pixel veri, quindi servono 360 × 2 = **720px**. Il browser sceglie l’**800w**.'
    ],
    monta: function (corpo) {
      corpo.classList.add('w13s');
      var fin = W.h('div', { 'class': 'w13s-fin', 'data-k': 'f', 'data-dim': '' });
      var slot = W.h('div', { 'class': 'w13s-slot', 'data-k': 's', 'data-dim': '' });
      var testo = W.h('div', { 'class': 'w13s-testo' });
      fin.appendChild(W.h('div', { 'class': 'w13s-barra' })); fin.appendChild(W.h('div', { 'class': 'w13s-dentro' }, [slot, testo]));
      var file = W.h('div', { 'class': 'w13s-file' });
      var carte = FILE.map(function (x) {
        var c = W.h('div', { 'class': 'w13s-c' }, [W.h('code', { testo: 'robot-' + x + '.jpg' }), W.h('div', { 'class': 'w13s-bar', style: 'width:' + (x / 1600 * 100) + '%' }, [W.h('span', { testo: x + 'w' })])]);
        file.appendChild(c); return c;
      });
      var serve = W.h('div', { 'class': 'w13s-serve' });
      corpo.appendChild(W.h('div', { 'class': 'w13s-palco' }, [fin])); corpo.appendChild(serve); corpo.appendChild(file);
      var SC = 0.36;
      return function (i, anima) {
        var c = CASI[i], w = c[0], dens = c[1], vw = w >= 800 ? 50 : 100, px = w * vw / 100, need = px * dens;
        var scelto = i ? FILE.filter(function (x) { return x >= need; })[0] : null;
        var fare = function () {
          fin.style.width = w * SC + 'px';
          slot.style.width = px * SC + 'px';
          fin.querySelector('.w13s-barra').textContent = w + ' px' + (dens > 1 ? ' · schermo 2x' : '');
        };
        if (anima) K.flip(corpo, fare, 800); else fare();
        slot.textContent = i ? px + ' px' : '';
        testo.style.display = vw === 50 ? '' : 'none';
        serve.innerHTML = i ? 'spazio dell’immagine: <b>' + vw + 'vw = ' + px + ' px</b>' + (dens > 1 ? ' × densità 2 = <b>' + need + ' pixel veri</b>' : '') + ' → file scelto: <b class="ok">' + scelto + 'w</b>' : 'Il browser deve ancora fare il calcolo.';
        carte.forEach(function (cc, k) {
          cc.classList.toggle('scelto', FILE[k] === scelto);
          cc.classList.toggle('poco', !!i && FILE[k] < need);
        });
      };
    }
  });
})();

/* Capitolo 14 · Trasformazioni, transizioni, animazioni — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  function v1(x) { return String(Math.round(x * 100) / 100).replace('.', ','); }

  /* ===================== 14.1 · transform: Prova tu ===================== */
  W.registra('w14_transform', function (el) {
    var b = W.base(el, 'Prova tu · transform', 'cursori e menu');
    var S = { tx: 60, ty: 0, r: 45, s: 1, k: 0, o: 'center' };
    var com = W.h('div', { 'class': 'wid-comandi' });
    [['tx', 'translateX', -60, 60, 1, 'px'], ['ty', 'translateY', -60, 60, 1, 'px'], ['r', 'rotate', -180, 180, 1, 'deg'], ['s', 'scale', 0.5, 2, 0.05, ''], ['k', 'skew', -30, 30, 1, 'deg']].forEach(function (d) {
      com.appendChild(W.cursore(d[1], d[2], d[3], S[d[0]], d[4], function (v) { S[d[0]] = v; disegna(); }, function (v) { return (d[0] === 's' ? v1(v) : v) + d[5]; }));
    });
    com.appendChild(K.menu('transform-origin', [['center'], ['top left'], ['bottom right']], S.o, function (v) { S.o = v; disegna(); }));
    el.appendChild(com);
    var g = W.h('div', { 'class': 'w14t' });
    var palchi = ['A', 'B'].map(function (x) {
      var p = W.h('div', { 'class': 'w14t-palco' });
      var cod = W.h('code', { 'class': 'w14t-cod' });
      var box = W.h('div', { 'class': 'w14t-box' }, [W.h('span', { testo: 'Club' }), W.h('i', { 'class': 'w14t-orig' })]);
      p.appendChild(W.h('div', { 'class': 'w14t-fant' })); p.appendChild(box);
      p.appendChild(W.h('div', { 'class': 'w14t-vicino', testo: 'vicino: resta dov’è' }));
      g.appendChild(W.h('div', { 'class': 'kit-cella' }, [cod, p]));
      return { box: box, cod: cod };
    });
    el.appendChild(g); b.chiudi();
    var ORIG = { center: ['50%', '50%'], 'top left': ['0', '0'], 'bottom right': ['100%', '100%'] };
    function disegna() {
      var tr = 'translate(' + S.tx + 'px, ' + S.ty + 'px)', ro = 'rotate(' + S.r + 'deg)', resto = (S.s !== 1 ? ' scale(' + v1(S.s).replace(',', '.') + ')' : '') + (S.k ? ' skew(' + S.k + 'deg)' : '');
      var T = [tr + ' ' + ro + resto, ro + ' ' + tr + resto];
      palchi.forEach(function (p, k) {
        p.box.style.transform = T[k]; p.box.style.transformOrigin = S.o;
        var o = p.box.querySelector('.w14t-orig'); o.style.left = ORIG[S.o][0]; o.style.top = ORIG[S.o][1];
        p.cod.textContent = 'transform: ' + T[k] + ';';
      });
      b.dica('A sinistra prima translate poi rotate: la scatola si sposta e ruota sul posto. A destra prima rotate poi translate: lo spostamento segue gli assi già ruotati. Il puntino è transform-origin (' + S.o + '); il riquadro tratteggiato è il posto che la scatola occupa nell’impaginazione.', 'ok');
    }
    disegna();
  });

  /* ===================== 14.2 · transition: Prova tu ===================== */
  var CURVE = { ease: [0.25, 0.1, 0.25, 1], linear: [0, 0, 1, 1], 'ease-in': [0.42, 0, 1, 1], 'ease-out': [0, 0, 0.58, 1], 'ease-in-out': [0.42, 0, 0.58, 1] };
  function bez(c, x) {
    // y della curva di Bézier cubica per l'ascissa x (bisezione sul parametro)
    function B(p1, p2, t) { return 3 * p1 * t * (1 - t) * (1 - t) + 3 * p2 * t * t * (1 - t) + t * t * t; }
    var lo = 0, hi = 1, t = x;
    for (var i = 0; i < 30; i++) { t = (lo + hi) / 2; if (B(c[0], c[2], t) < x) lo = t; else hi = t; }
    return B(c[1], c[3], t);
  }
  W.registra('w14_transition', function (el) {
    var b = W.base(el, 'Prova tu · transition', 'cursori, menu e pulsante');
    var S = { d: 0.8, r: 0, f: 'ease', dove: 'base', on: false };
    b.ctrl.appendChild(W.cursore('durata', 0.1, 2, S.d, 0.1, function (v) { S.d = v; scrivi(); }, function (v) { return v1(v) + ' s'; }));
    b.ctrl.appendChild(W.cursore('ritardo', 0, 1, S.r, 0.1, function (v) { S.r = v; scrivi(); }, function (v) { return v1(v) + ' s'; }));
    b.ctrl.appendChild(K.menu('funzione', Object.keys(CURVE).map(function (k) { return [k]; }), S.f, function (v) { S.f = v; scrivi(); curva(); }));
    b.ctrl.appendChild(W.scelta([['base', 'transition nello stato base'], ['hover', 'solo nello stato attivo']], S.dove, function (v) { S.dove = v; scrivi(); }));
    var att = W.bottone('Attiva', function () { S.on = !S.on; att.textContent = S.on ? 'Disattiva' : 'Attiva'; vai(); }, 'primario');
    var g = W.h('div', { 'class': 'w14r' });
    var pista = W.h('div', { 'class': 'w14r-pista' });
    var box = W.h('div', { 'class': 'w14r-box', testo: 'Club' });
    pista.appendChild(box);
    var graf = W.s('svg', { viewBox: '-14 -14 148 148', 'class': 'w14r-graf', role: 'img', 'aria-label': 'Grafico della funzione di temporizzazione: tempo in orizzontale, avanzamento in verticale' });
    var f = K.file('stile.css', '', 'css');
    g.appendChild(W.h('div', { 'class': 'kit-col' }, [att, pista, f])); g.appendChild(W.h('div', { 'class': 'w14r-gcol' }, [graf, W.h('span', { 'class': 'kit-nota', testo: 'in orizzontale il tempo, in verticale quanto è avanzato il cambiamento' })]));
    el.appendChild(g); b.chiudi();
    var path = W.s('path', { 'class': 'w14r-curva' }), dot = W.s('circle', { r: 5, 'class': 'w14r-dot' });
    graf.appendChild(W.s('rect', { x: 0, y: 0, width: 120, height: 120, 'class': 'w14r-ass' }));
    graf.appendChild(path); graf.appendChild(dot);
    function curva() { var c = CURVE[S.f]; path.setAttribute('d', 'M0 120 C' + c[0] * 120 + ' ' + (120 - c[1] * 120) + ' ' + c[2] * 120 + ' ' + (120 - c[3] * 120) + ' 120 0'); dot.setAttribute('cx', 0); dot.setAttribute('cy', 120); }
    function trans() { return 'transform ' + v1(S.d).replace(',', '.') + 's ' + S.f + ' ' + v1(S.r).replace(',', '.') + 's, background-color ' + v1(S.d).replace(',', '.') + 's ' + S.f + ' ' + v1(S.r).replace(',', '.') + 's'; }
    function scrivi() {
      var t = 'transition: ' + S.f + ' ' + v1(S.d).replace(',', '.') + 's' + (S.r ? ' ' + v1(S.r).replace(',', '.') + 's' : '') + ';';
      if (S.dove === 'base') f.metti('.box {\n  ' + t + '\n}\n.box.attivo {\n  transform: translateX(…) rotate(90deg);\n  background-color: #e9a313;\n}', { 2: 'nuova' });
      else f.metti('.box {\n  /* nessuna transition */\n}\n.box.attivo {\n  ' + t + '\n  transform: translateX(…) rotate(90deg);\n  background-color: #e9a313;\n}', { 5: 'nuova', 2: 'spenta' });
      b.dica(S.dove === 'base' ? 'Prova Attiva e Disattiva: con la transition nello stato base il passaggio è morbido in tutte e due le direzioni.' : 'Ora la transition c’è solo nello stato attivo: all’andata il passaggio è morbido, al ritorno istantaneo.', S.dove === 'base' ? 'ok' : 'att');
    }
    var raf = 0;
    function vai() {
      var morbido = S.dove === 'base' || S.on;
      box.style.transition = morbido ? trans() : 'none';
      box.style.transform = S.on ? 'translateX(' + (pista.clientWidth - 90) + 'px) rotate(90deg)' : 'none';
      box.style.backgroundColor = S.on ? '#e9a313' : '';
      box.style.color = S.on ? '#2a1c00' : '';
      cancelAnimationFrame(raf);
      if (!morbido || W.ridotto) { dot.setAttribute('cx', 120); dot.setAttribute('cy', 0); return; }
      var t0 = performance.now() + S.r * 1000, c = CURVE[S.f];
      (function giro(now) {
        var x = Math.max(0, Math.min(1, (now - t0) / (S.d * 1000)));
        dot.setAttribute('cx', x * 120); dot.setAttribute('cy', 120 - bez(c, x) * 120);
        if (x < 1) raf = requestAnimationFrame(giro);
      })(performance.now());
    }
    curva(); scrivi();
  });

  /* ===================== 14.3 · @keyframes passo per passo ===================== */
  var KCOD = '@keyframes sali {\n  0%   { transform: translateY(0);\n         background: #2f6fd6; }\n  50%  { transform: translateY(-60px);\n         background: #2f9e44; }\n  100% { transform: translateY(-90px);\n         background: #e9a313; }\n}\n.box {\n  animation: sali 1.2s ease-in-out;\n}';
  var KCOD4 = KCOD.replace('ease-in-out;', 'ease-in-out forwards;');
  var FOT = [{ transform: 'translateY(0)', backgroundColor: '#2f6fd6', easing: 'ease-in-out' }, { transform: 'translateY(-60px)', backgroundColor: '#2f9e44', easing: 'ease-in-out' }, { transform: 'translateY(-90px)', backgroundColor: '#e9a313' }];
  K.passi('w14_keyframes', {
    titolo: '@keyframes passo per passo',
    inizio: 'L’animazione `sali` ha tre fotogrammi chiave. Al tempo **0%** la scatola è in basso e blu.',
    passi: [
      'A metà del tempo, **50%**: la scatola è salita di 60px ed è diventata verde. Tra 0% e 50% il browser ha calcolato tutti i valori intermedi.',
      'Alla fine, **100%**: salita di 90px e ambra.',
      'Ora l’animazione va dall’inizio alla fine in 1,2 secondi. Appena finisce, la scatola **torna in basso e blu**: senza indicazioni, finita l’animazione vale di nuovo il CSS normale.',
      'Con `animation-fill-mode: forwards` (la parola `forwards` nella scorciatoia) la scatola, finita l’animazione, **resta all’ultimo fotogramma**.'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia', 'w14k');
      var f = K.file('stile.css', KCOD, 'css');
      var palco = W.h('div', { 'class': 'w14k-palco' });
      var box = W.h('div', { 'class': 'w14k-box', testo: 'box' });
      var tempo = W.h('div', { 'class': 'w14k-tempo' }, [W.h('i', { 'class': 'w14k-testina' }), W.h('span', { 'class': 'a', testo: '0%' }), W.h('span', { 'class': 'b', testo: '50%' }), W.h('span', { 'class': 'c', testo: '100%' })]);
      palco.appendChild(W.h('div', { 'class': 'w14k-pista' }, [box])); palco.appendChild(tempo);
      corpo.appendChild(f); corpo.appendChild(palco);
      var anim = null, raf = 0, testina = tempo.querySelector('.w14k-testina');
      function crea(fill) { if (anim) anim.cancel(); anim = box.animate(FOT, { duration: 1200, fill: fill }); anim.pause(); return anim; }
      function segui(fino, alla_fine) {
        cancelAnimationFrame(raf);
        (function giro() {
          var t = anim.currentTime || 0;
          if (fino != null && t >= fino) { anim.pause(); anim.currentTime = fino; t = fino; }
          testina.style.left = (Math.min(1, t / 1200) * 100) + '%';
          if (anim.playState === 'running') raf = requestAnimationFrame(giro);
          else if (alla_fine) alla_fine();
        })();
      }
      return function (i, anima) {
        var segni = [{ 2: 'nuova', 3: 'nuova' }, { 4: 'nuova', 5: 'nuova' }, { 6: 'nuova', 7: 'nuova' }, { 10: 'nuova' }, { 10: 'nuova' }][i];
        f.metti(i === 4 ? KCOD4 : KCOD, segni);
        if (i <= 2) {
          var a = crea('both'), meta = [0, 600, 1200][i];
          if (anima && !W.ridotto) { a.currentTime = [0, 0, 600][i]; a.play(); segui(meta); }
          else { a.currentTime = meta; segui(null); }
          return;
        }
        var b2 = crea(i === 4 ? 'forwards' : 'none');
        b2.currentTime = 0;
        if (W.ridotto || !anima) { b2.finish(); testina.style.left = '100%'; return; }
        b2.play(); segui(null, function () { testina.style.left = '100%'; });
      };
    }
  });
})();

/* Capitolo 15 · Tabelle e moduli — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;

  /* ===================== 15.1 · quattro ritocchi a una tabella ===================== */
  var TAB = '<div class="scorre"><table><thead><tr><th>Corso</th><th>Giorno</th><th>Aula</th></tr></thead><tbody>' +
    '<tr><td>Arduino</td><td>Giovedì</td><td>Lab. 2</td></tr><tr><td>Stampa 3D</td><td>Venerdì</td><td>Lab. 1</td></tr>' +
    '<tr><td>Robot</td><td>Lunedì</td><td>Aula magna</td></tr></tbody></table></div>';
  var T = [
    'table {\n  border-collapse: separate;\n  border-spacing: 4px;\n}',
    'table {\n  border-collapse: separate;\n  border-spacing: 0;\n}',
    'table {\n  border-collapse: collapse;\n}',
    'table {\n  border-collapse: collapse;\n}\ntbody tr:nth-child(even) {\n  background: #dcefeb;\n}',
    'table {\n  border-collapse: collapse;\n}\ntbody tr:nth-child(even) {\n  background: #dcefeb;\n}\n.scorre {\n  overflow-x: auto;\n}'
  ];
  K.demo('w15_tabella', {
    titolo: 'Quattro ritocchi a una tabella',
    inizio: 'Ogni cella ha `border: 2px solid`. Con il valore iniziale `border-collapse: separate` ogni cella ha **la sua cornice**, staccata dalle altre di `border-spacing`.',
    html: TAB, altezza: 200,
    extra: '.kit-body{font:14px/1.4 Arial,sans-serif;color:#1d2630}table{white-space:nowrap}th,td{border:2px solid #0a6f66;padding:5px 9px;text-align:left}th{background:#ddf0ed}',
    css0: T[0], segna0: { 2: 'nuova', 3: 'nuova' },
    passi: [
      { desc: '`border-spacing: 0`: le celle si toccano, ma i bordi restano **due**, uno accanto all’altro: le linee interne sono spesse il doppio di quelle esterne.', css: T[1], segna: { 3: 'nuova' } },
      { desc: '`border-collapse: collapse`: i bordi delle celle vicine si **fondono in uno solo**. Tutte le linee hanno lo stesso spessore.', css: T[2], segna: { 2: 'nuova' } },
      { desc: 'Righe a zebra con `tbody tr:nth-child(even)`: una riga sì e una no ha uno sfondo leggero, e l’occhio segue meglio le righe lunghe.', css: T[3], segna: { 4: 'nuova', 5: 'nuova', 6: 'nuova' } },
      { desc: 'Finestra stretta, come su un telefono: la tabella non entra. Con `overflow-x: auto` sul contenitore **scorre di lato solo la tabella**, non tutta la pagina.', css: T[4], segna: { 7: 'nuova', 8: 'nuova', 9: 'nuova' } }
    ],
    dopo: function (i, a) {
      var stretta = i === 4, h = a.querySelector('.kit-host');
      a.classList.toggle('w15-stretta', stretta);
      h.style.overflow = stretta ? 'hidden' : '';
      var sc = a.root.querySelector('.scorre');
      if (stretta && !W.ridotto) {
        // un piccolo scorrimento orizzontale mostra che la tabella si muove da sola
        var t0 = performance.now();
        (function f(now) {
          var k = Math.min(1, (now - t0) / 2200), e = Math.sin(k * Math.PI);
          sc.scrollLeft = e * (sc.scrollWidth - sc.clientWidth) * 0.8;
          if (k < 1 && document.body.contains(sc)) requestAnimationFrame(f);
        })(t0 + 500);
      }
    }
  });

  /* ===================== 15.2 · :invalid e :user-invalid ===================== */
  W.registra('w15_moduli', function (el) {
    var b = W.base(el, 'Prova tu · :invalid e :user-invalid', 'scrivi, esci dal campo, scegli');
    var acc = '#0f8d80';
    b.ctrl.appendChild(K.menu('accent-color', [['#0f8d80', 'verde acqua'], ['#e9a313', 'ambra'], ['#a23b8f', 'viola'], ['auto', 'auto (sistema)']], acc, function (v) { acc = v; disegna(); }));
    b.ctrl.appendChild(W.bottone('Ricarica i moduli', function () { disegna(); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var P = [['input:invalid', ':invalid'], ['input:user-invalid', ':user-invalid']].map(function (x) {
      var a = K.anteprima({ etichetta: x[0] + ' { border-color: red; }', barra: false, altezza: 190 });
      var st = W.h('div', { 'class': 'w15m-st' });
      g.appendChild(W.h('div', { 'class': 'kit-col' }, [a, st]));
      return { a: a, sel: x[1], st: st };
    });
    el.appendChild(g); b.chiudi();
    var FORM = '<form onsubmit="return false"><label for="m">Email</label><input id="m" type="email" required placeholder="nome@scuola.it">' +
      '<label class="cas"><input type="checkbox" checked> Iscrivimi alla newsletter</label><button>Iscriviti</button></form>';
    function disegna() {
      P.forEach(function (p) {
        var css = '.kit-body{font:15px/1.4 Arial,sans-serif;color:#1d2630}form{display:grid;gap:8px;accent-color:' + acc + '}input,button{font:inherit}' +
          'input[type=email]{padding:6px 8px;border:2px solid #9aa8b6;border-radius:4px;outline:none}input[type=email]:focus-visible{outline:3px solid #e9a313;outline-offset:1px}' +
          'input' + p.sel + '{border-color:#c0392b;background:#fdf0ee}.cas{display:flex;gap:8px;align-items:center}input[type=checkbox]{width:18px;height:18px}' +
          'button{justify-self:start;padding:5px 14px;border:0;border-radius:4px;background:#0f8d80;color:#fff;cursor:pointer}';
        var root = p.a.metti(FORM, '', css);
        var inp = root.querySelector('input[type=email]');
        function stato() {
          var rosso = inp.matches(p.sel);
          p.st.innerHTML = '<span class="kit-tag ' + (rosso ? 'no' : 'ok') + '">' + (rosso ? 'rosso' : 'neutro') + '</span> ' + (inp.validity.valid ? 'contenuto valido' : inp.value ? 'non è un indirizzo email' : 'campo obbligatorio vuoto');
        }
        ['input', 'blur', 'focus', 'change'].forEach(function (ev) { inp.addEventListener(ev, function () { setTimeout(stato, 0); }); });
        root.querySelector('button').addEventListener('click', function () { setTimeout(stato, 0); });
        stato();
      });
      b.dica('All’apertura il campo è vuoto, quindi non valido: a sinistra è già rosso, a destra no. Scrivi qualcosa di sbagliato (per esempio «mario») ed esci dal campo: ora anche a destra diventa rosso. accent-color colora la casella.', 'ok');
    }
    disegna();
  });
})();

/* Capitolo 16 · Framework CSS — nessun widget: lo schema del pulsante è in HTML nella pagina */

