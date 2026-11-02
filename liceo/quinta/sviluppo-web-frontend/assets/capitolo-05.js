/* Capitolo 05 · widget e demo dei temi (un blocco per tema, numerati come i vecchi capitoli del modulo CSS) */
/* Capitolo 1 · Che cos'è il CSS e come si collega — demo e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;

  /* ===================== 1.1 · stesso HTML, tre fogli di stile ===================== */
  var PAG = '<h1>Club di robotica</h1><p>Ci troviamo il giovedì alle 14:30.</p><ul><li>Arduino</li><li>Stampa 3D</li></ul><a href="#" onclick="return false">Iscriviti al club</a>';
  K.demo('w1_fogli', {
    titolo: 'Stesso HTML, tre fogli di stile',
    inizio: 'A sinistra `index.html`, che collega `stile.css`; il foglio di stile è ancora **vuoto**: la pagina a destra ha l’aspetto che le dà il **foglio di stile del browser** (titolo grande in grassetto, link blu sottolineato).',
    mostraHtml: '<link rel="stylesheet" href="stile.css">\n\n<h1>Club di robotica</h1>\n<p>Ci troviamo il giovedì alle 14:30.</p>\n<ul>\n  <li>Arduino</li>\n  <li>Stampa 3D</li>\n</ul>\n<a href="iscrizione.html">Iscriviti al club</a>',
    html: PAG, altezza: 250,
    passi: [
      { desc: 'Primo foglio di stile, **chiaro e con le grazie**: fondo color carta, carattere Georgia, titolo blu scuro con una riga sotto, link color mattone senza sottolineatura. **L’HTML non è cambiato.**',
        css: 'body {\n  background: #faf6ee;\n  font-family: Georgia, serif;\n}\nh1 {\n  color: #1f3a5f;\n  border-bottom: 2px solid #1f3a5f;\n}\na {\n  color: #b5441f;\n  text-decoration: none;\n}' },
      { desc: 'Secondo foglio, **scuro e a spaziatura fissa**: fondo quasi nero, testo chiaro, carattere Consolas, titolo verde acqua e link arancione. Stesso HTML, aspetto completamente diverso.',
        css: 'body {\n  background: #14181f;\n  color: #e6edf3;\n  font-family: Consolas, monospace;\n}\nh1 {\n  color: #4fd1c5;\n}\na {\n  color: #f6ad55;\n}' },
      { desc: 'Terzo foglio, **colorato e senza grazie**: fondo giallo, carattere Arial, titolo bianco su una fascia rossa, elenco con i quadratini e link trasformato in un pulsante. Il contenuto è sempre lo stesso: **cambia solo il CSS**.',
        css: 'body {\n  background: #ffe66d;\n  font-family: Arial, sans-serif;\n}\nh1 {\n  background: #ff6b6b;\n  color: white;\n  padding: 8px;\n}\nli {\n  list-style: square;\n}\na {\n  background: #1a1a2e;\n  color: white;\n  padding: 6px 12px;\n  text-decoration: none;\n}' }
    ]
  });

  /* ===================== 1.2 · cinque pagine, un foglio di stile ===================== */
  W.registra('w1_pagine', function (el) {
    var b = W.base(el, 'Prova tu · cambiare il colore dei titoli in cinque pagine', 'scegli un colore');
    var COL = [['#1f6feb', 'blu'], ['#c2410c', 'arancione'], ['#15803d', 'verde'], ['#9333ea', 'viola']];
    var PAGINE = ['Home', 'Corsi', 'Orari', 'Galleria', 'Contatti'];
    var modo = 'file', scelto = COL[0][0], mod = 0, colori = PAGINE.map(function () { return COL[0][0]; });
    var gModo = W.scelta([['file', 'Un solo stile.css collegato'], ['style', 'Attributo style in ogni pagina']], modo, function (v) { modo = v; mod = 0; scelto = colori[0]; colori = PAGINE.map(function () { return scelto; }); gCol.imposta(scelto); disegna(); });
    var gCol = W.scelta(COL.map(function (c) { return [c[0], c[1]]; }), scelto, function (v) {
      scelto = v;
      if (modo === 'file') { if (colori[0] !== v) mod++; colori = PAGINE.map(function () { return v; }); }
      disegna();
    });
    b.ctrl.appendChild(gModo); b.ctrl.appendChild(gCol);
    var file = K.file('stile.css', '', 'css'); file.classList.add('kit-riga');
    var griglia = W.h('div', { 'class': 'w1p-griglia' });
    el.appendChild(file); el.appendChild(griglia);
    var conta = W.dato('modifiche fatte', '0');
    var dati = W.h('div', { 'class': 'wid-dati' }, [conta]); el.appendChild(dati);
    b.chiudi();
    function disegna() {
      file.style.display = modo === 'file' ? '' : 'none';
      file.metti('h1 {\n  color: ' + scelto + ';\n}');
      griglia.innerHTML = '';
      PAGINE.forEach(function (p, i) {
        var c = colori[i];
        var pag = W.h('div', { 'class': 'w1p-pag' + (modo === 'style' && c !== scelto ? ' vecchia' : '') }, [
          W.h('div', { 'class': 'w1p-nome', testo: p.toLowerCase() + '.html' }),
          W.h('div', { 'class': 'w1p-tit', testo: p, style: 'color:' + c }),
          W.h('i'), W.h('i'), W.h('i', { 'class': 'corta' })
        ]);
        if (modo === 'style') {
          pag.appendChild(W.h('code', { 'class': 'w1p-cod', testo: '<h1 style="color: ' + c + '">' }));
          var bt = W.bottone(c === scelto ? 'aggiornata' : 'Modifica questa pagina', function () { colori[i] = scelto; mod++; disegna(); });
          bt.disabled = c === scelto; pag.appendChild(bt);
        }
        griglia.appendChild(pag);
      });
      conta.v.textContent = mod;
      var fatte = colori.filter(function (c) { return c === scelto; }).length;
      if (modo === 'file') b.dica('Le cinque pagine collegano lo stesso stile.css: cambi il colore in un punto e cambiano tutte insieme. Modifiche fatte: ' + mod + '.', 'ok');
      else if (fatte < 5) b.dica('Con l’attributo style ogni pagina ha il suo colore scritto nel tag: per cambiarlo devi aprire e ritoccare le pagine una per una. Pagine aggiornate: ' + fatte + ' di 5.', 'att');
      else b.dica('Tutte e cinque aggiornate, con ' + mod + ' modifiche. In un sito vero le pagine sono decine e i titoli in ogni pagina più di uno.', 'att');
    }
    disegna();
  });

  /* ===================== 1.3 · una modifica nei DevTools ===================== */
  K.passi('w1_devtools', {
    titolo: 'Dove vive una modifica fatta nei DevTools',
    inizio: 'A sinistra il sito della scuola nel browser, a destra i **DevTools** aperti con F12; sotto, il file `stile.css` così com’è sul **server** della scuola.',
    passi: [
      'Nel pannello **Elementi** si sceglie il titolo `h1`: nella pagina si illumina e la scheda **Stili** mostra la sua regola, che viene da `stile.css`.',
      'Nella scheda Stili si cambia `color` in `crimson`: il titolo diventa **subito rosso**. Ma il file sul server **non è cambiato**: la modifica è solo nella copia della pagina che c’è nel tuo browser.',
      'Si preme **F5**: il browser scarica di nuovo la pagina e `stile.css` dal server e il titolo **torna com’era**. La prova è sparita.',
      'Per tenere una prova riuscita bisogna **ricopiarla nel file CSS** del proprio progetto e salvarlo: ora il colore resta anche dopo F5 (e, quando il sito sarà pubblicato, lo vedranno tutti).'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia');
      var a = K.anteprima({ indirizzo: 'liceo-galilei.edu.it', altezza: 190 });
      var dt = W.h('div', { 'class': 'kit-dt' });
      dt.innerHTML = '<div class="kit-dt-schede"><span class="on">Elementi</span><span>Console</span><span>Sorgenti</span></div>' +
        '<div class="kit-dt-albero"><div>&lt;body&gt;</div><div class="r-h1">&nbsp;&nbsp;&lt;h1&gt;Liceo Galilei&lt;/h1&gt;</div><div>&nbsp;&nbsp;&lt;p&gt;…&lt;/p&gt;</div><div>&lt;/body&gt;</div></div>' +
        '<div class="kit-dt-schede piccole"><span class="on">Stili</span><span>Calcolati</span></div>' +
        '<div class="kit-dt-stili"><div class="kit-dt-regola"><span class="fonte">stile.css:3</span><span class="k">h1</span> {<br>&nbsp;&nbsp;<span class="a">color</span>: <span class="v">#0a6f66</span>;<br>}</div></div>';
      var sx = W.h('div', { 'class': 'kit-col' }, [a]), dx = W.h('div', { 'class': 'kit-col' }, [dt]);
      var f = K.file('stile.css · sul server', '', 'css');
      sx.appendChild(f);
      corpo.appendChild(sx); corpo.appendChild(dx);
      var velo = W.h('div', { 'class': 'kit-ricarica', testo: '↻ ricarico…' }); a.appendChild(velo);
      function pagina(col, evid) {
        a.metti('<h1>Liceo Galilei</h1><p>Benvenuti nel sito della scuola.</p>', 'body { font-family: Arial, sans-serif; }\nh1 { color: ' + col + ';' + (evid ? ' outline: 2px solid #4b8df8; outline-offset: 2px; background: rgba(75,141,248,.15);' : '') + ' }');
      }
      return function (i, anima) {
        var col = (i === 2 || i === 4) ? 'crimson' : '#0a6f66';
        pagina(col, i >= 1 && i <= 2);
        dt.querySelector('.r-h1').classList.toggle('sel', i >= 1);
        var v = dt.querySelector('.v'); v.textContent = col; v.classList.toggle('cambiato', i === 2);
        dt.querySelector('.fonte').textContent = i === 2 ? 'stile.css:3 (modificato qui)' : 'stile.css:3';
        a.indirizzo(i === 4 ? '127.0.0.1:5500/index.html' : 'liceo-galilei.edu.it');
        f.nome(i === 4 ? 'stile.css · nel tuo progetto, salvato' : 'stile.css · sul server');
        f.metti('body {\n  font-family: Arial, sans-serif;\n}\nh1 {\n  color: ' + (i === 4 ? 'crimson' : '#0a6f66') + ';\n}', i === 4 ? { 5: 'nuova' } : {});
        velo.classList.remove('on');
        if (i === 3 && anima) { velo.classList.add('on'); W.dopo(velo, 700, function () { velo.classList.remove('on'); }); }
      };
    }
  });
})();

/* Capitolo 2 · La sintassi — schemi, demo e widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT, SC = window.SCENA;
  var MONO = 'font-family:var(--font-mono);font-weight:600';

  // testo a spaziatura fissa: ogni carattere occupa cw pixel (per allineare le parentesi al codice)
  function codice(A, x, y, pezzi, cw, size) {
    var p = x;
    pezzi.forEach(function (z) {
      var t = A.txt(p, y, z[0], z[1] || 't', {}, 'start'); t.setAttribute('style', MONO + ';font-size:' + size + 'px;white-space:pre'); t.setAttribute('xml:space', 'preserve'); t.setAttribute('textLength', z[0].length * cw); t.setAttribute('lengthAdjust', 'spacing');
      p += z[0].length * cw;
    });
  }
  function graffa(A, x1, x2, y, dir, testo, cls) {
    A.path('M' + x1 + ' ' + y + ' L' + x1 + ' ' + (y + dir * 8) + ' L' + x2 + ' ' + (y + dir * 8) + ' L' + x2 + ' ' + y, 'lin');
    A.txt((x1 + x2) / 2, y + dir * 24 + (dir > 0 ? 0 : -2), testo, cls || 't');
  }

  /* ===================== 2.1 · anatomia di una regola ===================== */
  SC.costruisci('s2_anatomia', function (svg, A) {
    var cw = 13.2, x0 = 52, y = 112;
    codice(A, x0, y, [['h1', 't-b'], [' { ', 't'], ['color', 't-p'], [': ', 't'], ['navy', 't-a'], ['; ', 't'], ['font-size', 't-p'], [': ', 't'], ['32px', 't-a'], ['; }', 't']], cw, 22);
    var X = function (c) { return x0 + c * cw; };
    graffa(A, X(0), X(2), 92, -1, 'selettore', 't-b');
    graffa(A, X(5), X(10), 92, -1, 'proprietà', 't-p');
    graffa(A, X(12), X(16), 92, -1, 'valore', 't-a');
    graffa(A, X(18), X(27), 92, -1, 'proprietà', 't-p');
    graffa(A, X(29), X(33), 92, -1, 'valore', 't-a');
    graffa(A, X(5), X(17), 128, 1, 'dichiarazione', 't');
    graffa(A, X(18), X(34), 128, 1, 'dichiarazione', 't');
    A.path('M' + X(3) + ' 184 L' + X(3) + ' 196 L' + X(36) + ' 196 L' + X(36) + ' 184', 'lin att');
    A.txt((X(3) + X(36)) / 2, 220, 'blocco di dichiarazioni, tra { }', 't-a');
    A.path('M' + X(0) + ' 236 L' + X(0) + ' 248 L' + X(36) + ' 248 L' + X(36) + ' 236', 'lin');
    A.txt((X(0) + X(36)) / 2, 272, 'regola = selettore + blocco di dichiarazioni', 't-b');
  });

  /* ===================== 2.1 · Prova tu: comporre una regola ===================== */
  var PROP = {
    'color': ['crimson', 'navy', '#0a6f66'],
    'background-color': ['lightyellow', 'lightblue', '#ffe0e0'],
    'font-size': ['32px', '14px', '24px'],
    'font-family': ['Georgia, serif', 'Arial, sans-serif', 'monospace'],
    'text-align': ['center', 'right', 'left'],
    'text-transform': ['uppercase', 'lowercase', 'none']
  };
  W.registra('w2_regola', function (el) {
    var b = W.base(el, 'Prova tu · componi una regola', 'scegli dai tre menu');
    var sel = 'h1', prop = 'color', val = 'crimson';
    var mS = K.menu('selettore', [['h1'], ['p'], ['li']], sel, function (v) { sel = v; disegna(); });
    var mP = K.menu('proprietà', Object.keys(PROP).map(function (k) { return [k]; }), prop, function (v) { prop = v; val = PROP[v][0]; valori(); disegna(); });
    var mV = K.menu('valore', [], val, function (v) { val = v; disegna(); });
    b.ctrl.appendChild(mS); b.ctrl.appendChild(mP); b.ctrl.appendChild(mV);
    function valori() { mV.sel.innerHTML = ''; PROP[prop].forEach(function (v) { mV.sel.appendChild(W.h('option', { value: v, testo: v })); }); mV.sel.value = val; }
    valori();
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css');
    var a = K.anteprima({ altezza: 210 });
    g.appendChild(f); g.appendChild(a); el.appendChild(g);
    b.chiudi();
    function disegna() {
      var c = sel + ' {\n  ' + prop + ': ' + val + ';\n}';
      f.metti(c, { 2: 'nuova' });
      a.metti('<h1>Club di robotica</h1><p>Ci troviamo il giovedì alle 14:30.</p><ul><li>Arduino</li><li>Stampa 3D</li></ul>', c);
      var n = sel === 'li' ? 'i due elementi li' : 'l’elemento ' + sel;
      b.dica('Il selettore ' + sel + ' prende ' + n + '; la dichiarazione ' + prop + ': ' + val + ' dice che cosa cambiare e come.', 'ok');
    }
    disegna();
  });

  /* ===================== 2.3 · 1, 2, 3 o 4 valori ===================== */
  var LATI = [
    { v: ['10px'], css: 'margin: 10px;' },
    { v: ['10px', '30px'], css: 'margin: 10px 30px;' },
    { v: ['10px', '30px', '50px'], css: 'margin: 10px 30px 50px;' },
    { v: ['10px', '20px', '30px', '40px'], css: 'margin: 10px 20px 30px 40px;' }
  ];
  function quattro(v) { // [alto, destra, basso, sinistra]
    if (v.length === 1) return [v[0], v[0], v[0], v[0]];
    if (v.length === 2) return [v[0], v[1], v[0], v[1]];
    if (v.length === 3) return [v[0], v[1], v[2], v[1]];
    return v.slice();
  }
  var TINTE = [['#ddf0ed', '#0a6f66'], ['#fcf0d6', '#845403'], ['#e3ecfb', '#1f4fa3'], ['#f6e3f1', '#8a2a75']];
  K.passi('w2_lati', {
    titolo: 'Uno, due, tre o quattro valori: a quale lato va ciascuno',
    inizio: 'Con **un valore** tutti e quattro i lati ricevono `10px`: i lati dello stesso colore hanno lo stesso valore.',
    passi: [
      'Con **due valori** il primo va **sopra e sotto**, il secondo **a destra e a sinistra**.',
      'Con **tre valori**: il primo **sopra**, il secondo **a destra e a sinistra**, il terzo **sotto**.',
      'Con **quattro valori** si gira come le lancette dell’orologio partendo dall’alto: **sopra, destra, sotto, sinistra**.'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia');
      var f = K.file('stile.css', '', 'css');
      var svgBox = W.h('div', { 'class': 'w2-lati' });
      corpo.appendChild(f); corpo.appendChild(svgBox);
      return function (i) {
        var L = LATI[i], q = quattro(L.v), tinta = {};
        L.v.forEach(function (x, k) { if (!(x in tinta)) tinta[x] = TINTE[Object.keys(tinta).length]; });
        f.metti('.scatola {\n  ' + L.css + '\n}', { 2: 'nuova' });
        var P = [['40,20 320,20 260,80 100,80', 180, 56], ['320,20 320,240 260,180 260,80', 292, 136], ['320,240 40,240 100,180 260,180', 180, 216], ['40,240 40,20 100,80 100,180', 70, 136]];
        var s = '<svg viewBox="0 0 360 260" role="img" aria-label="I quattro lati della scatola con il valore che ricevono">';
        P.forEach(function (p, k) { var t = tinta[q[k]]; s += '<polygon points="' + p[0] + '" fill="' + t[0] + '" stroke="' + t[1] + '" stroke-width="2"/><text x="' + p[1] + '" y="' + (p[2] + 5) + '" text-anchor="middle" style="font:600 15px var(--font-mono);fill:' + t[1] + '">' + q[k] + '</text>'; });
        s += '<rect x="100" y="80" width="160" height="100" fill="#fff" stroke="#78889a" stroke-width="1.5"/><text x="180" y="135" text-anchor="middle" style="font:600 14px var(--font-sans);fill:#46566a">.scatola</text>';
        if (i === 3) s += '<path d="M300 8 A 168 120 0 0 1 352 120" fill="none" stroke="#845403" stroke-width="2" marker-end="url(#fr2)"/><defs><marker id="fr2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#845403"/></marker></defs>';
        svgBox.innerHTML = s + '</svg>';
      };
    }
  });

  /* ===================== 2.4 · cinque errori ===================== */
  var GIUSTO = 'h1 {\n  color: red;\n  font-size: 48px;\n}\np {\n  color: blue;\n}';
  K.demo('w2_errori', {
    titolo: 'Cinque errori che il browser non segnala',
    inizio: 'Il foglio di stile **giusto**: titolo rosso e grande 48px, paragrafo blu. A sinistra c’è come lo volevi, a destra come lo vede il browser: per ora sono uguali.',
    html: '<h1>Titolo</h1><p>Un paragrafo di testo.</p>', css0: GIUSTO, due: { css: GIUSTO }, altezza: 175,
    passi: [
      { desc: '**Manca il punto e virgola** dopo `color: red`. Per il browser le due righe diventano una sola dichiarazione, `color: red font-size: 48px`, che non è valida: il titolo **perde colore e dimensione**. Il paragrafo resta blu.',
        css: 'h1 {\n  color: red\n  font-size: 48px;\n}\np {\n  color: blue;\n}', segna: { 2: 'errata' } },
      { desc: '**`colour`** invece di `color`: la proprietà non esiste e viene ignorata **senza nessun avviso**. Il titolo è grande ma nero.',
        css: 'h1 {\n  colour: red;\n  font-size: 48px;\n}\np {\n  color: blue;\n}', segna: { 2: 'errata' } },
      { desc: 'Un **commento con `//`**: in CSS non esiste, quindi `// titolo` diventa parte del selettore, che non è più valido. **L’intera regola del titolo è scartata**; il paragrafo resta blu.',
        css: '// titolo\nh1 {\n  color: red;\n  font-size: 48px;\n}\np {\n  color: blue;\n}', segna: { 1: 'errata' } },
      { desc: '**`font-size: 48`** senza unità: non è un valore valido (senza unità si può scrivere solo `0`). Il titolo è rosso ma ha la **dimensione predefinita**.',
        css: 'h1 {\n  color: red;\n  font-size: 48;\n}\np {\n  color: blue;\n}', segna: { 3: 'errata' } },
      { desc: '**Graffa non chiusa** dopo il titolo: il titolo funziona, ma il browser legge la regola del paragrafo **dentro** il blocco del titolo e il paragrafo resta **nero**. Un errore piccolo rovina le regole che vengono dopo.',
        css: 'h1 {\n  color: red;\n  font-size: 48px;\n\np {\n  color: blue;\n}', segna: { 4: 'errata' } }
    ]
  });
})();

/* Capitolo 3 · I selettori — selettore-cacciatore, pseudo-classi, pseudo-elementi */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;

  /* ===================== Selettore-cacciatore (3.1–3.4) ===================== */
  var ESEMPI = ['p', '.card', '#robot', '.card.big', '.card .big', 'main p', 'main > p', 'h3 + p', 'h2 ~ div', 'a[href^="https"]', 'p:nth-child(2)', '.card:not(.big)'];
  function cacciatore(nome, iniziale, extra, sotto) {
    W.registra(nome, function (el) {
      var b = W.base(el, 'Prova tu · il selettore-cacciatore', 'scrivi un selettore');
      var tpl = document.createElement('template'); tpl.innerHTML = K.CLUB;
      var radice = tpl.content;
      // righe dell'elenco: una per elemento, rientrate secondo la profondità
      var nodi = [], righe = [];
      (function giro(n, liv) {
        [].forEach.call(n.children, function (c) {
          nodi.push(c);
          var att = [].map.call(c.attributes, function (a) { return ' <span class="a">' + a.name + '</span>=<span class="s">"' + K.esc(a.value) + '"</span>'; }).join('');
          var foglia = !c.children.length, t = foglia ? K.esc(c.textContent) : '';
          var r = W.h('div', { 'class': 'w3c-riga', html: '<span class="k">&lt;' + c.tagName.toLowerCase() + '</span>' + att + '<span class="k">&gt;</span>' + t + (foglia && c.tagName !== 'INPUT' ? '<span class="k">&lt;/' + c.tagName.toLowerCase() + '&gt;</span>' : '') });
          r.style.paddingLeft = (12 + liv * 22) + 'px';
          righe.push(r);
          giro(c, liv + 1);
        });
      })(radice, 0);
      var campo = K.campo('selettore', iniziale, function (v) { prova(v); }, '15em');
      b.ctrl.appendChild(campo);
      var es = W.h('div', { 'class': 'kit-esempi' });
      ESEMPI.concat(extra || []).forEach(function (x) { es.appendChild(W.bottone(x, function () { campo.input.value = x; prova(x); })); });
      el.appendChild(es);
      var lista = W.h('div', { 'class': 'w3c-lista' }); righe.forEach(function (r) { lista.appendChild(r); });
      el.appendChild(lista);
      b.chiudi();
      function prova(sel) {
        sel = sel.trim();
        righe.forEach(function (r) { r.classList.remove('presa'); });
        if (!sel) { b.dica('Scrivi un selettore o scegli un esempio.'); return; }
        var presi;
        try { presi = radice.querySelectorAll(sel); } catch (e) { b.dica('«' + sel + '» non è un selettore valido: in un foglio di stile il browser scarterebbe l’intera regola.', 'no'); return; }
        [].forEach.call(presi, function (n) { var k = nodi.indexOf(n); if (k >= 0) righe[k].classList.add('presa'); });
        var n = presi.length;
        b.dica(n + (n === 1 ? ' elemento selezionato' : ' elementi selezionati') + ' da ' + sel + (sotto && sotto[sel] ? ' · ' + sotto[sel] : ''), n ? 'ok' : 'att');
      }
      prova(iniziale);
    });
  }
  var SPIEGA = {
    'p': 'tutti i paragrafi', '.card': 'tutti gli elementi con la classe card', '#robot': 'l’unico elemento con id robot',
    '.card.big': 'elementi che hanno entrambe le classi (senza spazio)', '.card .big': 'elementi .big dentro un .card: nessuno!',
    'main p': 'tutti i p dentro main, a qualsiasi profondità', 'main > p': 'solo i p figli diretti di main: nessuno', 'h3 + p': 'il p subito dopo un h3',
    'h2 ~ div': 'tutti i div fratelli che vengono dopo h2', 'a[href^="https"]': 'i link il cui href inizia con https',
    'p:nth-child(2)': 'i p che sono il secondo figlio del loro genitore', '.card:not(.big)': 'le card che non hanno la classe big',
    'a[href$=".pdf"]': 'i link il cui href finisce con .pdf', 'input[type="email"]': 'i campi con type uguale a email',
    'div:nth-of-type(odd)': 'i div in posizione dispari tra i div fratelli', '*': 'tutti gli elementi', 'h3, p': 'tutti gli h3 e tutti i p (una lista)'
  };
  cacciatore('w3_cacc', 'p', ['*', 'h3, p'], SPIEGA);
  cacciatore('w3_cacc_comb', '.card .big', ['h3, p'], SPIEGA);
  cacciatore('w3_cacc_attr', 'a[href^="https"]', ['a[href$=".pdf"]', 'input[type="email"]'], SPIEGA);
  cacciatore('w3_cacc_pseudo', 'p:nth-child(2)', ['div:nth-of-type(odd)'], SPIEGA);

  /* ===================== 3.4 · Prova tu: gli stati ===================== */
  W.registra('w3_stati', function (el) {
    var b = W.base(el, 'Prova tu · le pseudo-classi di stato', 'mouse, Tab, clic');
    var REG = [
      ['button:hover', 'background: #ffe9a8;', ':hover', 'il puntatore è sopra il pulsante'],
      ['button:focus', 'outline: 3px solid #0a6f66;', ':focus', 'il pulsante ha il fuoco (clic o tasto Tab)'],
      ['button:active', 'transform: scale(0.94);', ':active', 'il pulsante è premuto in questo momento'],
      ['input:checked + label', 'font-weight: bold; color: #0a6f66;', ':checked', 'la casella è spuntata'],
      ['button:disabled', 'opacity: 0.4;', ':disabled', 'il pulsante è disattivato']
    ];
    var css = 'button{font:16px Arial,sans-serif;padding:10px 18px;border:2px solid #333;border-radius:6px;background:#fff;cursor:pointer;margin:4px 8px 4px 0}label{font:16px Arial,sans-serif}\n' + REG.map(function (r) { return r[0] + ' { ' + r[1] + ' }'; }).join('\n');
    var g = W.h('div', { 'class': 'kit-griglia' });
    var a = K.anteprima({ altezza: 150 });
    var tab = W.h('table', { 'class': 'kit-tab' });
    g.appendChild(a); g.appendChild(tab); el.appendChild(g);
    var root = a.metti('<p><button id="b1" type="button">Iscriviti</button><button type="button" disabled>Chiuso</button></p><p><input type="checkbox" id="c1"> <label for="c1">Ho letto il regolamento</label></p>', css);
    var bt = root.getElementById('b1'), ck = root.getElementById('c1'), dis = root.querySelector('button[disabled]');
    b.chiudi();
    function aggiorna() {
      var att = [bt.matches(':hover'), bt.matches(':focus'), bt.matches(':active'), ck.matches(':checked'), dis.matches(':disabled')];
      tab.innerHTML = '<tr><th>Regola</th><th>Ora</th></tr>' + REG.map(function (r, i) {
        return '<tr><td><code>' + r[0] + '</code><br><span class="kit-nota">' + r[3] + '</span></td><td><span class="kit-tag ' + (att[i] ? 'ok">attiva' : '">no') + '</span></td></tr>';
      }).join('');
      var on = REG.filter(function (r, i) { return att[i] && i < 4; }).map(function (r) { return r[2]; });
      b.dica(on.length ? 'Pseudo-classi attive sul pulsante e sulla casella: ' + on.join(' ') : 'Passa il mouse sul pulsante «Iscriviti», premilo, usa il tasto Tab, spunta la casella.', on.length ? 'ok' : '');
    }
    ['pointerenter', 'pointerleave', 'pointerdown', 'pointerup', 'focus', 'blur', 'keydown', 'keyup', 'change', 'click'].forEach(function (ev) {
      root.addEventListener(ev, function () { requestAnimationFrame(aggiorna); }, true);
    });
    aggiorna();
  });

  /* ===================== 3.5 · i pseudo-elementi ===================== */
  var TESTO = '<p>Il club di robotica si riunisce ogni giovedì in laboratorio: si costruiscono robot con Arduino, si programmano sensori e motori e, a fine anno, si partecipa alla gara regionale.</p>' +
    '<div style="margin:0 0 12px"><a href="#" onclick="return false">Programma del corso</a></div><div><input placeholder="Il tuo nome"></div>';
  var BASE3 = 'body { font-family: Georgia, serif; }\n';
  K.demo('w3_pseudoel', {
    titolo: 'Parti che esistono senza essere nell’HTML',
    inizio: 'Un paragrafo, un link e un campo di testo, **senza pseudo-elementi**. Nell’HTML a destra non cambierà mai nulla: cambia solo il CSS.',
    html: TESTO, css0: BASE3, altezza: 230,
    passi: [
      { desc: '`::first-letter`, la **prima lettera** del paragrafo: un capolettera grande e colorato, come nei libri.',
        css: BASE3 + 'p::first-letter {\n  float: left;\n  font-size: 3em;\n  line-height: 1;\n  color: #0a6f66;\n  margin-right: 6px;\n}', segna: { 2: 'nuova' } },
      { desc: '`::first-line`, la **prima riga**: quale sia la prima riga lo decide la larghezza della finestra, non l’HTML.',
        css: BASE3 + 'p::first-line {\n  font-variant: small-caps;\n  font-weight: bold;\n}', segna: { 2: 'nuova' } },
      { desc: '`::before`: un contenuto **generato prima** del link, un’icona. Senza la proprietà `content` non comparirebbe nulla.',
        css: BASE3 + 'a::before {\n  content: "📄 ";\n}', segna: { 2: 'nuova', 3: 'nuova' } },
      { desc: '`::after`: un contenuto **generato dopo** il link, una freccia. Nell’HTML la freccia non c’è.',
        css: BASE3 + 'a::after {\n  content: " →";\n}', segna: { 2: 'nuova', 3: 'nuova' } },
      { desc: '`::selection`: il **testo selezionato** con il mouse. Qui è già selezionata la prima parte del paragrafo; prova a selezionarne un’altra.',
        css: BASE3 + '::selection {\n  background: #ffd54f;\n  color: black;\n}', segna: { 2: 'nuova' } },
      { desc: '`::placeholder`: il **testo segnaposto** del campo, grigio e chiaro di solito, qui arancione e in corsivo.',
        css: BASE3 + 'input::placeholder {\n  color: #c2410c;\n  font-style: italic;\n}', segna: { 2: 'nuova' } }
    ],
    dopo: function (i, a) {
      var sel = window.getSelection();
      if (i === 5) { var t = a.root.querySelector('p').firstChild; try { sel.setBaseAndExtent(t, 0, t, 60); } catch (e) { } }
      else if (sel && sel.anchorNode && a.host.shadowRoot && a.root.contains(sel.anchorNode)) sel.removeAllRanges();
    }
  });
})();

/* Capitolo 4 · Cascata, ereditarietà, specificità — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;

  /* ===================== 4.1 · chi eredita che cosa ===================== */
  var EREDI = [
    ['color', 'green', 'color'], ['font-family', 'Georgia, serif', 'font-family'], ['font-style', 'italic', 'font-style'], ['text-align', 'center', 'text-align'],
    ['border', '3px solid crimson', 'border-top-style'], ['padding', '16px', 'padding-top'], ['background-color', 'lightyellow', 'background-color']
  ];
  W.registra('w4_eredita', function (el) {
    var b = W.base(el, 'Prova tu · che cosa passa ai discendenti', 'scegli la proprietà');
    var k = 0;
    b.ctrl.appendChild(K.menu('proprietà data a body', EREDI.map(function (e, i) { return [String(i), e[0] + ': ' + e[1]]; }), '0', function (v) { k = +v; disegna(); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var col = W.h('div', { 'class': 'kit-col' });
    var f = K.file('stile.css', '', 'css');
    var a = K.anteprima({ altezza: 200 });
    col.appendChild(f); col.appendChild(a);
    var tab = W.h('table', { 'class': 'kit-tab' });
    g.appendChild(col); g.appendChild(tab); el.appendChild(g);
    b.chiudi();
    var HTML = '<article><h2>Il club</h2><p>Ci troviamo il giovedì: <a href="#" onclick="return false">leggi il programma</a>.</p></article>';
    var GUIDA = 'article{display:block;outline:1px dashed #9aa8b6;outline-offset:3px;margin:6px 0}h2{margin:0 0 8px;outline:1px dashed #c3ccd6}p{margin:0;outline:1px dashed #c3ccd6}';
    function disegna() {
      var e = EREDI[k], css = 'body {\n  ' + e[0] + ': ' + e[1] + ';\n}';
      f.metti(css, { 2: 'nuova' });
      var root = a.metti(HTML, css, GUIDA);
      var corpo = root.querySelector('.kit-body'), pr = e[2];
      var vb = getComputedStyle(corpo).getPropertyValue(pr);
      var righe = [['body', corpo, 0], ['article', root.querySelector('article'), 1], ['h2', root.querySelector('h2'), 2], ['p', root.querySelector('p'), 2], ['a', root.querySelector('a'), 3]];
      var ered = 0;
      tab.innerHTML = '<tr><th>Elemento</th><th>' + pr + '</th><th></th></tr>' + righe.map(function (r) {
        var v = getComputedStyle(r[1]).getPropertyValue(pr), uguale = v === vb;
        if (r[2] && uguale) ered++;
        var tag = !r[2] ? '<span class="kit-tag">dato a body</span>' : uguale ? '<span class="kit-tag ok">ereditato</span>' : '<span class="kit-tag no">no</span>';
        return '<tr><td style="padding-left:' + (8 + r[2] * 14) + 'px"><code>' + r[0] + '</code></td><td><code>' + K.esc(v.length > 22 ? v.slice(0, 22) + '…' : v) + '</code></td><td>' + tag + '</td></tr>';
      }).join('');
      if (e[0] === 'color') b.dica('color si eredita: titolo e paragrafo diventano verdi. Il link no: il foglio di stile del browser gli dà un colore suo (a:link), che batte quello ereditato.', 'att');
      else if (e[0] === 'background-color') b.dica('background-color non si eredita: i discendenti restano «transparent». Sembrano gialli solo perché sono trasparenti e si vede lo sfondo del body sotto di loro.', 'att');
      else if (ered === 4) b.dica(e[0] + ' è una proprietà del testo e si eredita: la ricevono tutti i discendenti.', 'ok');
      else b.dica(e[0] + ' è una proprietà della scatola e non si eredita: ce l’ha solo body, i discendenti restano con il valore iniziale.', 'no');
    }
    disegna();
  });

  /* ===================== 4.2 · i quattro valori speciali ===================== */
  W.registra('w4_valori', function (el) {
    var b = W.base(el, 'Lo stesso div con i quattro valori speciali');
    var g = W.h('div', { 'class': 'w4v-griglia' }); el.appendChild(g);
    ['inherit', 'initial', 'unset', 'revert'].forEach(function (v) {
      var c = W.h('div', { 'class': 'kit-cella' });
      g.appendChild(c);
      var f = K.file('', '.genitore {\n  color: teal;\n}\n.figlio {\n  display: ' + v + ';\n  color: ' + v + ';\n}', 'css', { 5: 'nuova', 6: 'nuova' });
      f.querySelector('.kit-file-nome').remove();
      var a = K.anteprima({ barra: false, altezza: 92 });
      c.appendChild(W.h('b', { testo: v }));
      c.appendChild(f); c.appendChild(a);
      var root = a.metti('<section class="genitore"><div class="figlio">div figlio</div><span> · span accanto</span></section>', '.genitore{color:teal;font:15px Arial,sans-serif;outline:1px dashed #9aa8b6;padding:4px}.figlio{display:' + v + ';color:' + v + ';background:#fff3c4}');
      var d = root.querySelector('.figlio'), cs = getComputedStyle(d);
      var col = cs.color === 'rgb(0, 128, 128)' ? 'teal (dal genitore)' : cs.color === 'rgb(0, 0, 0)' ? 'nero (iniziale)' : cs.color;
      c.appendChild(W.h('span', { html: 'display: <b>' + cs.display + '</b><br>color: <b>' + col + '</b>' }));
    });
    b.dica('Il genitore è un blocco color teal. inherit copia display e colore del genitore; initial dà i valori iniziali della specifica (inline e nero); unset eredita color ma non display, che diventa inline; revert torna al foglio del browser (div = block) ed eredita il colore.');
    b.chiudi();
  });

  /* ===================== 4.3 · la cascata in tre criteri ===================== */
  var GARA = [
    { o: 'browser', s: 'a:link', v: 'blue', sp: '0,1,1', nota: 'foglio del browser' },
    { o: 'utente', s: 'a', v: 'black', sp: '0,0,1', nota: 'preferenze dell’utente' },
    { o: 'autore', s: 'nav a', v: 'orange', sp: '0,0,2', nota: 'stile.css, riga 3' },
    { o: 'autore', s: '.menu', v: 'green', sp: '0,1,0', nota: 'stile.css, riga 8' },
    { o: 'autore', s: '.menu', v: 'crimson', sp: '0,1,0', nota: 'stile.css, riga 12' }
  ];
  K.passi('w4_cascata', {
    titolo: 'Cinque dichiarazioni di color per lo stesso link',
    inizio: 'Il link `<a class="menu">Corsi</a>` dentro un `nav` riceve **cinque dichiarazioni di `color`** da origini diverse. Una sola può vincere: il browser applica i criteri in ordine.',
    passi: [
      'Primo criterio, **origine e importanza**: tra dichiarazioni normali l’autore batte l’utente, che batte il browser. Restano le tre dell’autore.',
      'Secondo criterio, **specificità**: `nav a` vale (0,0,2), `.menu` vale (0,1,0) e una classe batte qualunque numero di tag. Restano le due `.menu`. (Un attributo `style` sull’elemento avrebbe vinto qui su tutti i selettori.)',
      'Terzo criterio, **ordine di apparizione**: a parità di tutto il resto vince la dichiarazione **scritta per ultima**, quella della riga 12. Il link è color cremisi.'
    ],
    monta: function (corpo) {
      corpo.classList.add('w4c');
      var lista = W.h('div', { 'class': 'w4c-lista' });
      var carte = GARA.map(function (d) {
        var c = W.h('div', { 'class': 'w4c-carta' }, [
          W.h('span', { 'class': 'kit-tag', testo: d.o }),
          W.h('code', { testo: d.s + ' { color: ' + d.v + '; }' }),
          W.h('span', { 'class': 'w4c-sp', testo: 'specificità ' + d.sp }),
          W.h('span', { 'class': 'kit-nota', testo: d.nota }),
          W.h('i', { 'class': 'w4c-pallino', style: 'background:' + d.v })
        ]);
        lista.appendChild(c); return c;
      });
      var a = K.anteprima({ altezza: 90, indirizzo: 'club-robotica.it' });
      corpo.appendChild(lista); corpo.appendChild(a);
      var FUORI = [[], [0, 1], [0, 1, 2], [0, 1, 2, 3]];
      return function (i) {
        carte.forEach(function (c, k) { c.classList.toggle('fuori', FUORI[i].indexOf(k) >= 0); c.classList.toggle('vince', i === 3 && k === 4); });
        a.metti('<nav><a class="menu" href="#" onclick="return false">Corsi</a>' + (i < 3 ? ' <span class="q">di che colore sarà?</span>' : '') + '</nav>', 'body{font:22px Arial,sans-serif}.q{font-size:14px;color:#777}.menu{color:' + (i === 3 ? 'crimson' : '#9aa3ad') + '}');
      };
    }
  });

  /* ===================== 4.4 e 4.5 · Chi vince? ===================== */
  function chiVince(nome, imp0) {
    W.registra(nome, function (el) {
      var b = W.base(el, 'Prova tu · chi vince?', 'modifica i selettori');
      var regole = [{ sel: 'p', col: 'red', imp: !!imp0 }, { sel: '.nota', col: 'blue', imp: false }, { sel: 'div p', col: 'green', imp: false }];
      var NOMI = { red: 'rosso', blue: 'blu', green: 'verde' };
      el.appendChild(W.h('div', { 'class': 'kit-nota', html: 'L’elemento: <code>&lt;div class="box"&gt;&lt;p id="avviso" class="nota"&gt;Riunione spostata a venerdì&lt;/p&gt;&lt;/div&gt;</code>' }));
      var g = W.h('div', { 'class': 'kit-griglia w4cv' });
      var lista = W.h('div', { 'class': 'w4v-regole' });
      var a = K.anteprima({ altezza: 90 });
      g.appendChild(lista); g.appendChild(a); el.appendChild(g);
      b.chiudi();
      function disegna() {
        lista.innerHTML = '';
        var css = regole.map(function (r) { return r.sel + ' { color: ' + r.col + (r.imp ? ' !important' : '') + '; }'; }).join('\n');
        var root = a.metti('<div class="box"><p id="avviso" class="nota">Riunione spostata a venerdì</p></div>', 'body{font:20px Arial,sans-serif}\n' + css);
        var p = root.querySelector('p');
        var comp = getComputedStyle(p).color;
        var RGB = { 'rgb(255, 0, 0)': 'red', 'rgb(0, 0, 255)': 'blue', 'rgb(0, 128, 0)': 'green' };
        var vinc = RGB[comp];
        // chi corre: valide e che prendono l'elemento
        var info = regole.map(function (r, i) {
          var s = K.specificita(r.sel), ok = false;
          if (s) { try { ok = p.matches(r.sel); } catch (e) { s = null; } }
          return { r: r, i: i, s: s, ok: ok };
        });
        var corrono = info.filter(function (x) { return x.ok; });
        var perche = '';
        if (!corrono.length) perche = 'Nessuna regola prende il paragrafo: il colore è quello ereditato (nero).';
        else if (corrono.length === 1) perche = 'È l’unica regola che si applica al paragrafo.';
        else {
          var imp = corrono.filter(function (x) { return x.r.imp; });
          var gara = imp.length ? imp : corrono;
          if (imp.length === 1) perche = 'Ha !important: batte le dichiarazioni normali prima di guardare la specificità.';
          else {
            var best = gara.reduce(function (m, x) { return K.confronta(x.s, m.s) >= 0 ? x : m; });
            var pari = gara.filter(function (x) { return K.confronta(x.s, best.s) === 0; });
            perche = (imp.length ? 'Più regole con !important: tra queste conta la specificità. ' : '') + (pari.length > 1 ? 'Stessa specificità: a parità vince quella scritta per ultima.' : 'Ha la specificità più alta (' + best.s.join(',') + ').');
          }
        }
        info.forEach(function (x) {
          var stato = !x.s ? '<span class="kit-tag no">non valido</span>' : x.ok ? '<span class="kit-tag">si applica</span>' : '<span class="kit-tag">non si applica</span>';
          if (x.ok && x.r.col === vinc) stato = '<span class="kit-tag ok">VINCE</span>';
          var riga = W.h('div', { 'class': 'w4v-regola' + (x.ok && x.r.col === vinc ? ' vince' : '') });
          var inp = W.h('input', { type: 'text', value: x.r.sel, spellcheck: 'false', 'aria-label': 'selettore della regola ' + (x.i + 1) });
          inp.onchange = function () { x.r.sel = inp.value.trim() || '*'; disegna(); };
          inp.onkeydown = function (e) { if (e.key === 'Enter') inp.onchange(); };
          var ck = K.casella('!important', x.r.imp, function (v) { x.r.imp = v; disegna(); });
          var su = W.bottone('↑', function () { if (x.i > 0) { regole.splice(x.i - 1, 0, regole.splice(x.i, 1)[0]); disegna(); } });
          var giu = W.bottone('↓', function () { if (x.i < regole.length - 1) { regole.splice(x.i + 1, 0, regole.splice(x.i, 1)[0]); disegna(); } });
          su.disabled = x.i === 0; giu.disabled = x.i === regole.length - 1;
          su.setAttribute('aria-label', 'sposta su'); giu.setAttribute('aria-label', 'sposta giù');
          riga.appendChild(W.h('i', { 'class': 'w4c-pallino', style: 'background:' + x.r.col }));
          riga.appendChild(inp);
          riga.appendChild(W.h('code', { testo: '{ color: ' + x.r.col + ' }' }));
          riga.appendChild(ck); riga.appendChild(su); riga.appendChild(giu);
          riga.appendChild(W.h('span', { 'class': 'w4v-info', html: 'specificità <b>' + (x.s ? x.s.join(',') : '—') + '</b> · ' + stato }));
          lista.appendChild(riga);
        });
        b.dica('Il paragrafo è ' + (vinc ? NOMI[vinc] : 'nero') + '. Perché: ' + perche, vinc ? 'ok' : 'att');
      }
      disegna();
    });
  }
  chiVince('w4_chivince', false);
  chiVince('w4_chivince_imp', true);
})();

/* Capitolo 5 · Valori e unità — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  function n1(x) { return (Math.round(x * 10) / 10).toString().replace('.', ','); }

  /* ===================== 5.2 · le unità rispetto a che cosa ===================== */
  W.registra('w5_unita', function (el) {
    var b = W.base(el, 'Prova tu · sei larghezze, sei unità', 'muovi i cursori');
    var fin = 480, txt = 16;
    b.ctrl.appendChild(W.cursore('finestra', 300, 640, fin, 10, function (v) { fin = v; disegna(); }, function (v) { return v + ' px'; }));
    b.ctrl.appendChild(W.cursore('testo del browser', 12, 20, txt, 1, function (v) { txt = v; disegna(); }, function (v) { return v + ' px'; }));
    var palco = W.h('div', { 'class': 'w5u-palco' });
    var fn = W.h('div', { 'class': 'w5u-fin' });
    palco.appendChild(fn); el.appendChild(palco);
    var BARRE = [
      ['width: 200px', 'width:200px', 'non cambia mai'],
      ['width: 40%', 'width:40%', 'il 40% della larghezza del contenitore'],
      ['width: 30vw', 'width:calc(30 * var(--vw))', '30 centesimi della larghezza della finestra'],
      ['width: 12rem', 'width:calc(12 * var(--rem))', '12 volte il testo della radice'],
      ['width: 12em', 'width:12em', 'dentro un elemento con font-size: 1.25rem: 12 × 1,25 × testo della radice', 'font-size:calc(1.25 * var(--rem))'],
      ['width: 40ch', 'width:40ch', '40 volte la larghezza dello zero del carattere', 'font-size:var(--rem)']
    ];
    var righe = BARRE.map(function (x) {
      var bar = W.h('div', { 'class': 'w5u-barra', style: x[1] + ';' + (x[3] || '') });
      var et = W.h('div', { 'class': 'w5u-et' });
      var r = W.h('div', { 'class': 'w5u-riga' }, [W.h('code', { testo: x[0] }), bar, et]);
      fn.appendChild(r); return { bar: bar, et: et, x: x };
    });
    b.chiudi();
    function disegna() {
      fn.style.width = fin + 'px';
      fn.style.setProperty('--vw', (fin / 100) + 'px');
      fn.style.setProperty('--rem', txt + 'px');
      var inner = fn.clientWidth - 24, fuori = 0;
      righe.forEach(function (r) {
        var w = r.bar.getBoundingClientRect().width, esce = w > inner + 0.5;
        if (esce) fuori++;
        r.et.innerHTML = '= <b>' + n1(w) + ' px</b>' + (esce ? ' <span class="w5u-esce">(esce dalla finestra)</span>' : '') + ' <span class="kit-nota">' + r.x[2] + '</span>';
      });
      b.dica('Finestra larga ' + fin + ' px, testo del browser a ' + txt + ' px. ' + (fuori ? fuori + (fuori === 1 ? ' barra esce' : ' barre escono') + ' dalla finestra.' : 'Tutte le barre stanno nella finestra.'), fuori ? 'att' : 'ok');
    }
    disegna();
    if (window.ResizeObserver) new ResizeObserver(function () { disegna(); }).observe(palco);
  });

  /* ===================== 5.3 · em che si accumulano ===================== */
  var LISTA = '<ul><li>Primo livello<ul><li>Secondo livello<ul><li>Terzo livello</li></ul></li></ul></li></ul>';
  K.passi('w5_annidate', {
    titolo: 'Liste annidate: em si accumula, rem no',
    inizio: 'Due liste uguali. A sinistra ogni `ul` ha `font-size: 1.2em`, a destra `font-size: 1.2rem`. Al primo livello sono identiche: **19,2 px** (1,2 × 16).',
    passi: [
      'Secondo livello: a sinistra `1.2em` si calcola sul genitore, che è già 19,2 px → **23 px**. A destra `1.2rem` si calcola sempre sulla radice → **19,2 px**.',
      'Terzo livello: a sinistra 1,2 × 1,2 × 1,2 = 1,73 → **27,6 px**, a destra ancora **19,2 px**. Con em i livelli annidati crescono a ogni passo; con rem restano uguali.'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia');
      var A = [K.anteprima({ etichetta: 'ul { font-size: 1.2em; }', barra: false, altezza: 190 }), K.anteprima({ etichetta: 'ul { font-size: 1.2rem; }', barra: false, altezza: 190 })];
      A.forEach(function (a) { corpo.appendChild(a); });
      return function (i) {
        ['1.2em', '1.2rem'].forEach(function (u, k) {
          var root = A[k].metti(LISTA, 'body{font-family:Arial,sans-serif}ul{font-size:' + u + ';margin:4px 0;padding-left:22px}.px{font:12px monospace;color:#0a6f66;margin-left:8px}');
          var lis = root.querySelectorAll('li');
          [].forEach.call(lis, function (li, j) {
            var px = parseFloat(getComputedStyle(li).fontSize);
            li.firstChild.after(Object.assign(document.createElement('span'), { className: 'px', textContent: n1(px) + ' px' }));
            if (j > i) li.style.visibility = 'hidden';
          });
        });
      };
    }
  });

  /* ===================== 5.4 · clamp() ===================== */
  W.registra('w5_clamp', function (el) {
    var b = W.base(el, 'Prova tu · clamp(minimo, preferito, massimo)', 'muovi la finestra');
    var fin = 720, mn = 1, a = 0.5, bb = 2, mx = 2;
    b.ctrl.appendChild(W.cursore('finestra', 320, 1280, fin, 10, function (v) { fin = v; disegna(); }, function (v) { return v + ' px'; }));
    function num(et, val, step, fn) {
      var i = W.h('input', { type: 'number', value: val, step: step, min: 0, max: 10, 'aria-label': et });
      i.oninput = function () { var v = parseFloat(i.value); if (!isNaN(v)) { fn(v); disegna(); } };
      return W.h('label', { 'class': 'wid-campo' }, [W.h('span', { testo: et }), i]);
    }
    var nums = W.h('div', { 'class': 'wid-comandi' }, [
      num('minimo (rem)', mn, 0.1, function (v) { mn = v; }), num('preferito: rem', a, 0.1, function (v) { a = v; }), num('+ vw', bb, 0.1, function (v) { bb = v; }), num('massimo (rem)', mx, 0.1, function (v) { mx = v; })
    ]);
    el.appendChild(nums);
    var f = K.riga('CSS'); el.appendChild(f);
    var g = W.h('div', { 'class': 'kit-griglia' });
    var graf = W.h('div', { 'class': 'w5c-graf' });
    var ante = W.h('div', { 'class': 'w5c-ante kit-bianco' });
    g.appendChild(graf); g.appendChild(ante); el.appendChild(g);
    b.chiudi();
    function val(w) { var pref = a * 16 + bb * w / 100; return Math.max(mn * 16, Math.min(pref, mx * 16)); }
    function disegna() {
      f.metti('h1 {\n  font-size: clamp(' + mn + 'rem, ' + a + 'rem + ' + bb + 'vw, ' + mx + 'rem);\n}');
      var X = function (w) { return 50 + (w - 320) / 960 * 420; }, Y = function (px) { return 200 - px / 48 * 180; };
      var s = '<svg viewBox="0 0 490 240" role="img" aria-label="Grafico della dimensione del testo in funzione della larghezza della finestra">';
      s += '<line x1="50" y1="200" x2="476" y2="200" class="lin"/><line x1="50" y1="20" x2="50" y2="200" class="lin"/>';
      [0, 16, 32, 48].forEach(function (p) { s += '<text x="44" y="' + (Y(p) + 4) + '" text-anchor="end" class="t-s">' + p + '</text><line x1="50" x2="476" y1="' + Y(p) + '" y2="' + Y(p) + '" stroke="var(--border)" stroke-width="1"/>'; });
      [320, 640, 960, 1280].forEach(function (w) { s += '<text x="' + X(w) + '" y="218" text-anchor="middle" class="t-s">' + w + '</text>'; });
      s += '<text x="263" y="236" text-anchor="middle" class="t-m">larghezza della finestra (px)</text><text x="12" y="14" class="t-m">testo (px)</text>';
      var pp = '', pc = '';
      for (var w = 320; w <= 1280; w += 10) { var pr = Math.min(48, a * 16 + bb * w / 100); pp += (w === 320 ? 'M' : 'L') + X(w).toFixed(1) + ' ' + Y(pr).toFixed(1); pc += (w === 320 ? 'M' : 'L') + X(w).toFixed(1) + ' ' + Y(Math.min(48, val(w))).toFixed(1); }
      s += '<path d="' + pp + '" fill="none" stroke="var(--ink-soft)" stroke-width="2" stroke-dasharray="5 5"/>';
      s += '<path d="' + pc + '" fill="none" stroke="var(--brand-600)" stroke-width="3.5" stroke-linejoin="round"/>';
      var v = val(fin);
      s += '<line x1="' + X(fin) + '" x2="' + X(fin) + '" y1="20" y2="200" stroke="var(--accent-500)" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="' + X(fin) + '" cy="' + Y(Math.min(48, v)) + '" r="6" fill="var(--accent-500)" stroke="var(--surface-000)" stroke-width="2"/>';
      graf.innerHTML = s + '</svg>';
      ante.innerHTML = '<div style="font:700 ' + v + 'px/1.2 Arial,sans-serif">Club di robotica</div><div class="kit-nota" style="color:#46566a">' + n1(v) + ' px con una finestra di ' + fin + ' px</div>';
      var pref = a * 16 + bb * fin / 100;
      if (pref <= mn * 16) b.dica('Zona del minimo: il valore preferito (' + n1(pref) + ' px) è sotto il minimo, quindi vale il minimo: ' + n1(mn * 16) + ' px.', 'att');
      else if (pref >= mx * 16) b.dica('Zona del massimo: il valore preferito (' + n1(pref) + ' px) supera il massimo, quindi vale il massimo: ' + n1(mx * 16) + ' px.', 'att');
      else b.dica('Zona di crescita: vale il preferito, ' + a + 'rem + ' + bb + 'vw = ' + n1(pref) + ' px, e cresce con la finestra.', 'ok');
    }
    disegna();
  });
})();


/* Valori, unità e colori · i colori (ex 6.1–6.2) — widget */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  function hex2(n) { return ('0' + Math.round(n).toString(16)).slice(-2); }
  function hsl2rgb(h, s, l) {
    s /= 100; l /= 100;
    var k = function (n) { return (n + h / 30) % 12; }, a = s * Math.min(l, 1 - l);
    var f = function (n) { return l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))); };
    return [255 * f(0), 255 * f(8), 255 * f(4)].map(Math.round);
  }
  function rgb2hsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), h = 0, s = 0, l = (mx + mn) / 2, d = mx - mn;
    if (d) {
      s = d / (1 - Math.abs(2 * l - 1));
      if (mx === r) h = 60 * (((g - b) / d) % 6); else if (mx === g) h = 60 * ((b - r) / d + 2); else h = 60 * ((r - g) / d + 4);
    }
    return [Math.round((h + 360) % 360), Math.round(s * 100), Math.round(l * 100)];
  }

  /* ===================== 6.1 · un colore, due scritture ===================== */
  W.registra('w6_colori', function (el) {
    var b = W.base(el, 'Prova tu · un colore, due scritture', 'HSL e RGB sincronizzati');
    var hsl = [210, 60, 40], rgb = hsl2rgb(210, 60, 40);
    var g = W.h('div', { 'class': 'w6c' });
    var sw = W.h('div', { 'class': 'w6c-swatch' });
    var cH = W.h('div', { 'class': 'w6c-col' }, [W.h('b', { testo: 'HSL' })]), cR = W.h('div', { 'class': 'w6c-col' }, [W.h('b', { testo: 'RGB' })]);
    var cur = {};
    [['H', 'tinta', 0, 360, '°'], ['S', 'saturazione', 0, 100, '%'], ['L', 'luminosità', 0, 100, '%']].forEach(function (d, i) {
      cur[d[0]] = W.cursore(d[1], d[2], d[3], hsl[i], 1, function (v) { hsl[i] = v; rgb = hsl2rgb(hsl[0], hsl[1], hsl[2]); disegna('h'); }, function (v) { return v + d[4]; });
      cH.appendChild(cur[d[0]]);
    });
    [['R', 'rosso', '#d63b3b'], ['G', 'verde', '#2f9e44'], ['B', 'blu', '#2f6fd6']].forEach(function (d, i) {
      cur[d[0]] = W.cursore(d[1], 0, 255, rgb[i], 1, function (v) { rgb[i] = v; hsl = rgb2hsl(rgb[0], rgb[1], rgb[2]); disegna('r'); });
      cur[d[0]].input.style.accentColor = d[2];
      cR.appendChild(cur[d[0]]);
    });
    g.appendChild(sw); g.appendChild(cH); g.appendChild(cR); el.appendChild(g);
    var f = K.riga('lo stesso colore in tre formati'); el.appendChild(f);
    b.chiudi();
    function imposta(c, v) { c.input.value = v; c.out.textContent = c.out.textContent.replace(/^-?\d+/, v); }
    function disegna(da) {
      if (da === 'h') { imposta(cur.R, rgb[0]); imposta(cur.G, rgb[1]); imposta(cur.B, rgb[2]); }
      if (da === 'r') { imposta(cur.H, hsl[0]); imposta(cur.S, hsl[1]); imposta(cur.L, hsl[2]); }
      var hx = '#' + rgb.map(hex2).join('');
      var breve = hx[1] === hx[2] && hx[3] === hx[4] && hx[5] === hx[6] ? '#' + hx[1] + hx[3] + hx[5] : '';
      sw.style.background = hx;
      f.metti('color: hsl(' + hsl[0] + ' ' + hsl[1] + '% ' + hsl[2] + '%);\ncolor: rgb(' + rgb.join(' ') + ');\ncolor: ' + hx + ';' + (breve ? '   /* forma breve: ' + breve + ' */' : ''));
      b.dica('Tre scritture dello stesso colore. Con HSL basta cambiare la luminosità per avere una versione più chiara o più scura della stessa tinta; con RGB si regolano i tre canali di luce.', 'ok');
    }
    disegna();
  });

  /* ===================== 6.2 · opacity contro canale alfa ===================== */
  W.registra('w6_alfa', function (el) {
    var b = W.base(el, 'Prova tu · opacity o canale alfa?', 'muovi il cursore');
    var v = 0.5;
    b.ctrl.appendChild(W.cursore('trasparenza', 0, 1, v, 0.05, function (x) { v = x; disegna(); }, function (x) { return x.toFixed(2).replace('.', ','); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var A = [0, 1].map(function () { var c = W.h('div', { 'class': 'kit-col' }); var f = K.file('', '', 'css'); var a = K.anteprima({ barra: false, altezza: 150 }); c.appendChild(f); c.appendChild(a); g.appendChild(c); return { f: f, a: a }; });
    el.appendChild(g); b.chiudi();
    var SCACCHI = 'body{background:repeating-conic-gradient(#d9dee4 0 25%,#fff 0 50%) 0 0/24px 24px;font-family:Arial,sans-serif}.card{margin:18px auto;width:80%;padding:16px;border:3px solid #123a7a;border-radius:8px;font-weight:bold;font-size:18px}';
    function disegna() {
      var x = v.toFixed(2).replace(/0$/, '');
      var c1 = '.card {\n  background: rgb(30 80 200);\n  color: white;\n  opacity: ' + x + ';\n}', c2 = '.card {\n  background: rgb(30 80 200 / ' + x + ');\n  color: white;\n}';
      A[0].f.nome('con opacity'); A[0].f.metti(c1, { 4: 'nuova' });
      A[1].f.nome('con l’alfa nel colore'); A[1].f.metti(c2, { 2: 'nuova' });
      A[0].a.metti('<div class="card">Testo bianco</div>', SCACCHI + c1);
      A[1].a.metti('<div class="card">Testo bianco</div>', SCACCHI + c2);
      b.dica(v < 0.15 ? 'Con opacity quasi a zero sparisce tutto, testo e bordo compresi (ma la card occupa ancora il suo posto). Con l’alfa sparisce solo lo sfondo blu: il testo resta leggibile.' : 'A sinistra opacity rende trasparente tutta la card: sfondo, testo e bordo. A destra l’alfa agisce solo sul colore di sfondo.', 'ok');
    }
    disegna();
  });

})();
