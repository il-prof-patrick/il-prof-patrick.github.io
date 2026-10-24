/* Capitolo 2 · Segnali, numeri e codice binario — widget: campionamento, interruttori, divisioni per 2 */
(function () {
  'use strict';
  var W = window.WIDGET;

  /* ===================== 7.1 · dall’analogico al digitale ===================== */
  function v(t) { return 0.5 + 0.30 * Math.sin(2 * Math.PI * 1.1 * t) + 0.11 * Math.sin(2 * Math.PI * 3.3 * t + 1); }

  W.registra('campiona', function (el) {
    var b = W.base(el, 'Prova tu · dall’analogico al digitale', 'campioni e livelli');
    var N = 12, L = 4;
    var tela = W.h('div', { 'class': 'camp-tela' });
    var svg = W.s('svg', { viewBox: '0 0 640 230', role: 'img', 'aria-label': 'Un segnale analogico (curva tratteggiata) e la sua versione digitale a gradini, con i campioni come punti.' });
    tela.appendChild(svg);
    var cN = W.cursore('Campioni', 4, 40, N, 1, function (x) { N = x; disegna(); });
    var cL = W.scelta([[2, '2 livelli'], [4, '4 livelli'], [8, '8 livelli'], [16, '16 livelli']], L, function (x) { L = x; disegna(); });
    b.ctrl.appendChild(cN); b.ctrl.appendChild(cL);
    var dati = W.h('div', { 'class': 'wid-dati' });
    var dBit = W.dato('Bit per campione', ''), dTot = W.dato('Bit in tutto', '');
    dati.appendChild(dBit); dati.appendChild(dTot);
    el.appendChild(tela); el.appendChild(dati); b.chiudi();

    var X0 = 30, X1 = 620, Y0 = 20, Y1 = 200;
    function px(t) { return X0 + t * (X1 - X0); }
    function py(u) { return Y1 - u * (Y1 - Y0); }
    function disegna() {
      var s = '<path d="M' + X0 + ' ' + Y1 + ' H' + X1 + ' M' + X0 + ' ' + Y1 + ' V' + (Y0 - 8) + '" fill="none" stroke="var(--border-strong)" stroke-width="1.5"/>';
      s += '<text x="' + X1 + '" y="' + (Y1 + 20) + '" text-anchor="end" font-size="12" fill="var(--ink-muted)">tempo</text>';
      for (var k = 0; k < L; k++) s += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + py(k / (L - 1)) + '" y2="' + py(k / (L - 1)) + '" stroke="var(--border)" stroke-width="1"/>';
      var d = '';
      for (var i = 0; i <= 160; i++) d += (i ? 'L' : 'M') + px(i / 160).toFixed(1) + ' ' + py(v(i / 160)).toFixed(1) + ' ';
      s += '<path d="' + d + '" fill="none" stroke="var(--ink-muted)" stroke-width="1.6" stroke-dasharray="5 4"/>';
      var g = '', pts = '';
      for (var j = 0; j < N; j++) {
        var t = j / (N - 1), q = Math.round(v(t) * (L - 1)) / (L - 1);
        var a = px(t - (j ? 0.5 / (N - 1) : 0)), c = px(t + (j < N - 1 ? 0.5 / (N - 1) : 0));
        g += (j ? 'L' : 'M') + a.toFixed(1) + ' ' + py(q).toFixed(1) + ' L' + c.toFixed(1) + ' ' + py(q).toFixed(1) + ' ';
        pts += '<circle cx="' + px(t).toFixed(1) + '" cy="' + py(q).toFixed(1) + '" r="4" fill="var(--brand-600)"/>';
      }
      s += '<path d="' + g + '" fill="none" stroke="var(--brand-600)" stroke-width="2.4"/>' + pts;
      svg.innerHTML = s;
      var bit = Math.log2(L);
      dBit.v.textContent = bit + (bit === 1 ? ' bit' : ' bit') + ' (' + L + ' livelli = 2' + '⁰¹²³⁴'.charAt(bit) + ')';
      dTot.v.textContent = (N * bit) + ' bit (' + N + ' × ' + bit + ')';
      b.dica(N < 10 || L < 4 ? 'Pochi campioni o pochi livelli: il segnale digitale si discosta molto da quello vero.' : 'Con tanti campioni e tanti livelli la curva a gradini segue bene il segnale vero, ma servono più bit.', N < 10 || L < 4 ? '' : 'ok');
    }
    disegna();
  });

  /* ===================== 7.3 · gli interruttori ===================== */
  W.registra('bit', function (el) {
    var b = W.base(el, 'Prova tu · un byte è una fila di otto interruttori', '8 bit');
    var pesi = [128, 64, 32, 16, 8, 4, 2, 1], val = [0, 0, 0, 0, 0, 0, 0, 0], tasti = [];
    var riga = W.h('div', { 'class': 'bit-riga' });
    pesi.forEach(function (p, i) {
      var t = W.h('button', { 'class': 'tasto bit-tasto', type: 'button', 'aria-pressed': 'false', 'aria-label': 'Bit di peso ' + p, testo: '0' });
      t.onclick = function () { val[i] ^= 1; disegna(); };
      tasti.push(t);
      riga.appendChild(W.h('div', { 'class': 'bit-col' }, [W.h('span', { 'class': 'bit-peso', testo: String(p) }), t]));
    });
    b.ctrl.appendChild(riga);
    var azzera = W.bottone('Azzera', function () { val = [0, 0, 0, 0, 0, 0, 0, 0]; disegna(); });
    var tutti = W.bottone('Tutti a 1', function () { val = [1, 1, 1, 1, 1, 1, 1, 1]; disegna(); });
    b.ctrl.appendChild(azzera); b.ctrl.appendChild(tutti);
    var dati = W.h('div', { 'class': 'wid-dati' });
    var dDec = W.dato('Decimale', ''), dBin = W.dato('Binario', ''), dEsa = W.dato('Esadecimale', ''), dSomma = W.dato('Somma dei pesi accesi', '');
    [dDec, dBin, dEsa, dSomma].forEach(function (d) { dati.appendChild(d); });
    el.appendChild(dati); b.chiudi();
    function disegna() {
      var n = 0, somma = [];
      val.forEach(function (x, i) { tasti[i].textContent = x; tasti[i].setAttribute('aria-pressed', String(!!x)); if (x) { n += pesi[i]; somma.push(pesi[i]); } });
      dDec.v.textContent = n; dBin.v.textContent = val.join(''); dEsa.v.textContent = n.toString(16).toUpperCase().padStart(2, '0');
      dSomma.v.textContent = somma.length ? somma.join(' + ') + ' = ' + n : '0';
      b.dica(n === 255 ? 'Tutti accesi: 255 è il numero più grande che sta in un byte (2⁸ − 1).' : 'Accendi e spegni gli interruttori: il valore è la somma dei pesi di quelli accesi.', n === 255 ? 'ok' : '');
    }
    disegna();
  });

  /* ===================== 7.5 · decimale → binario, un passo alla volta ===================== */
  W.registra('divisioni', function (el) {
    var b = W.base(el, 'Prova tu · da decimale a binario', 'divisioni per 2');
    var inp = W.h('input', { type: 'number', min: 1, max: 4095, value: 37, 'aria-label': 'Numero decimale' });
    var campo = W.h('label', { 'class': 'wid-campo' }, [W.h('span', { testo: 'Numero' }), inp]);
    var avanti = W.bottone('Prossimo passo', function () { if (k < passi.length) k++; disegna(); }, 'primario');
    var tutto = W.bottone('Mostra tutto', function () { k = passi.length; disegna(); });
    var rip = W.bottone('Ricomincia', function () { prepara(); });
    b.ctrl.appendChild(campo); b.ctrl.appendChild(avanti); b.ctrl.appendChild(tutto); b.ctrl.appendChild(rip);
    var lista = W.h('ol', { 'class': 'div-lista' });
    var esito = W.h('p', { 'class': 'div-esito' });
    el.appendChild(lista); el.appendChild(esito); b.chiudi();
    var passi = [], k = 0;
    function prepara() {
      var n = Math.max(1, Math.min(4095, parseInt(inp.value, 10) || 1)); inp.value = n;
      passi = [];
      while (n > 0) { passi.push([n, Math.floor(n / 2), n % 2]); n = Math.floor(n / 2); }
      k = 0; disegna();
    }
    function disegna() {
      lista.innerHTML = '';
      passi.slice(0, k).forEach(function (p, i) {
        lista.appendChild(W.h('li', { html: p[0] + ' : 2 = ' + p[1] + ' &nbsp;<span class="div-resto">resto <b>' + p[2] + '</b></span>' + (i === passi.length - 1 ? ' &nbsp;← quoziente 0: ci si ferma' : '') }));
      });
      var fatto = k === passi.length;
      avanti.disabled = fatto; tutto.disabled = fatto;
      if (fatto) {
        var bin = passi.map(function (p) { return p[2]; }).reverse().join('');
        esito.innerHTML = 'Resti letti <b>dal basso verso l’alto</b>: <b class="div-bin">' + bin + '</b> &nbsp;→&nbsp; ' + inp.value + ' = ' + bin + '<sub>2</sub>';
        b.dica('Controllo: riconverti ' + bin + ' in decimale con i pesi 1, 2, 4, 8…', 'ok');
      } else {
        esito.textContent = ''; b.dica(k ? 'Dividi di nuovo il quoziente per 2.' : 'Scegli un numero e premi «Prossimo passo».', '');
      }
    }
    inp.onchange = prepara;
    prepara();
  });

  /* ===================== esercizi svolti: animazioni a passi (un clic, un passaggio) ===================== */
  var K = window.SCENA, Sv = K.S, costruisci = K.costruisci;
  var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  // testo con pedici: parti = ['100110', ['2'], ' = 38', ['10']] (un array è un pedice)
  function scritta(A, x, y, parti, cls, o, anchor) {
    var t = A.txt(x, y, '', cls, o, anchor);
    parti.forEach(function (p) {
      if (typeof p === 'string') Sv(t, 'tspan', {}, p);
      else { Sv(t, 'tspan', { dy: 7, 'font-size': '62%' }, p[0]); Sv(t, 'tspan', { dy: -7 }, ' '); }
    });
    return t;
  }
  // una cifra nel suo quadretto
  function cella(A, x, y, testo, o, cls, w, h) {
    w = w || 46; h = h || 52;
    var g = A.g(o);
    A.box(x, y, w, h, 'c2-cella', {}, g);
    A.txt(x + w / 2, y + h / 2 + 9, testo, 'c2-cifra' + (cls ? ' ' + cls : ''), {}, 'middle', g);
    return g;
  }
  // punta di freccia in (x, y) nella direzione (dx, dy)
  function punta(A, x, y, dx, dy, o) {
    var l = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / l, uy = dy / l, bx = x - ux * 11, by = y - uy * 11;
    return A.path('M' + (bx - uy * 6).toFixed(1) + ' ' + (by + ux * 6).toFixed(1) + ' L' + x + ' ' + y + ' L' + (bx + uy * 6).toFixed(1) + ' ' + (by - ux * 6).toFixed(1), 'c2-freccia', o);
  }
  // risultato finale in un riquadro verde
  function esito(A, x, y, w, h, parti, o) {
    var g = A.g(o);
    A.box(x, y, w, h, 'c2-ok', {}, g).setAttribute('rx', 8);
    var t = scritta(A, x + w / 2, y + h / 2 + 8, parti, 'c2-grande', {}, 'middle');
    g.appendChild(t);
    return g;
  }
  function grigio(t) { t.style.fill = 'var(--ink-muted)'; return t; }   // lo stile in linea vince sulla classe

  /* ---------- 2.4 · dati n bit, quante configurazioni ---------- */
  costruisci('f-config', function (svg, A) {
    var X = [110, 330, 560], Y3 = [], Y2 = [], k;
    for (k = 0; k < 8; k++) Y3.push(46 + k * 34);
    for (k = 0; k < 4; k++) Y2.push((Y3[2 * k] + Y3[2 * k + 1]) / 2);
    var COL = [[(Y2[0] + Y2[1]) / 2, (Y2[2] + Y2[3]) / 2], Y2, Y3];
    function larg(c) { return (c + 1) * 14 + 24; }
    ['1 bit', '2 bit', '3 bit'].forEach(function (t, c) {
      A.txt(X[c], 20, t, 't-b', { p: c + 1 });
      A.txt(X[c], 326, ['2 configurazioni', '4 = 2 × 2', '8 = 2 × 2 × 2'][c], 't-b', { p: c + 1, f: 3 });
      COL[c].forEach(function (y, i) {
        var s = i.toString(2); while (s.length < c + 1) s = '0' + s;
        var w = larg(c), x = X[c];
        if (c) {
          var xp = X[c - 1] + larg(c - 1) / 2 + 4, yp = COL[c - 1][i >> 1], xa = x - w / 2 - 4;
          A.path('M' + xp + ' ' + yp + ' C' + (xp + 50) + ' ' + yp + ' ' + (xa - 50) + ' ' + y + ' ' + xa + ' ' + y, 'lin', { p: c + 1 });
        }
        var g = A.g({ p: c + 1 });
        A.box(x - w / 2, y - 14, w, 28, 'nodo', {}, g).setAttribute('rx', 6);
        var t = A.txt(x, y + 6, '', 'c2-nota', {}, 'middle', g);
        Sv(t, 'tspan', {}, s.slice(0, -1)); Sv(t, 'tspan', { fill: 'var(--brand-600)' }, s.slice(-1));
      });
    });
    esito(A, 60, 302, 600, 38, ['con n bit: 2ⁿ configurazioni  ·  8 bit = 2⁸ = 256'], { p: 4 }).querySelector('text').style.fontSize = '20px';
  });

  /* ---------- 2.4 · date m configurazioni, quanti bit ---------- */
  costruisci('f-bitper', function (svg, A) {
    var B = 272, KK = 3.4, X0 = 160, P = 86, W = 56;
    function y(v) { return B - v * KK; }
    A.path('M120 ' + B + ' H700', 'lin');
    for (var n = 1; n <= 6; n++) {
      var v = Math.pow(2, n), x = X0 + (n - 1) * P, p = n <= 4 ? 1 : n - 3;
      A.box(x, y(v), W, v * KK, n <= 4 ? 'nodo' : (n === 5 ? 'c2-evid' : 'nodo attivo'), { p: p });
      A.txt(x + W / 2, y(v) - 8, '2' + SUP[n] + ' = ' + v, 'c2-nota', { p: p });
      A.txt(x + W / 2, B + 22, n + ' bit', 't', { p: p });
    }
    A.path('M120 ' + y(40) + ' H700', 'lin att').style.strokeDasharray = '8 6';
    A.txt(112, y(40) + 5, '40 canali', 't-a', {}, 'end');
    // con 5 bit ne mancano 8
    A.path('M567 ' + y(40) + ' h7 V' + y(32) + ' h-7', 'c2-barra', { p: 2 });
    A.txt(574, y(40) - 9, '8 canali senza codice', 't-e', { p: 2 }, 'end');
    // con 6 bit ne avanzano 24
    var x6 = X0 + 5 * P;
    A.box(x6, y(64), W, 24 * KK, 'c2-avanzo', { p: 4 });
    A.txt(x6 - 10, y(52) + 5, '24 codici in più', 't-m', { p: 4 }, 'end');
  });

  /* ---------- 2.4 · contare in binario ---------- */
  costruisci('f-conta', function (svg, A) {
    var NUM = [11, 12, 13, 14, 15, 16], PASSO = [0, 3, 4, 5, 6, 7], X0 = 250, P = 46, w = 40, h = 38;
    function xj(j) { return X0 + j * P; }
    function yr(i) { return 22 + i * 52; }
    function cifre(n) { var s = n.toString(2); while (s.length < 5) s = ' ' + s; return s; }
    NUM.forEach(function (n, i) {
      var s = cifre(n), prima = i ? cifre(NUM[i - 1]) : s, pr = PASSO[i];
      // nella riga del 12 le cifre compaiono una alla volta (passi 1, 2, 3); nelle altre tutte insieme
      function quando(j) { return i === 1 ? Math.min(3, 5 - j) : pr; }
      for (var j = 0; j < 5; j++) {
        if (s[j] === ' ') continue;
        var cambia = i && s[j] !== prima[j], o = i ? { p: quando(j) } : null;
        if (cambia) A.box(xj(j) - 3, yr(i) - 3, w + 6, h + 6, 'c2-evid', { p: quando(j), f: quando(j) });
        cella(A, xj(j), yr(i), s[j], o, cambia ? 'nuova' : '', w, h);
      }
      grigio(A.txt(xj(4) + w + 18, yr(i) + 26, '(' + n + ')', 'c2-nota', i ? { p: pr } : null, 'start'));
      if (i) {
        A.txt(xj(0) - 26, yr(i) + 26, '+1', 't-a', { p: i === 1 ? 1 : pr });
        // riporti: ogni 1 finale della riga di prima manda un riporto alla cifra a sinistra
        for (var q = 4; q > 0 && prima[q] === '1'; q--) {
          var pq = i === 1 ? 5 - q : pr;
          A.txt(xj(q - 1) + w / 2, yr(i) - 3, '1', 'c2-piccola', { p: pq, f: pr });
        }
      }
    });
  });

  /* ---------- 2.4 · equivalenze tra multipli del byte: la scala delle unità ---------- */
  function equivalenza(id, U, fattore, da, a, valori) {
    costruisci(id, function (svg, A) {
      var X0 = 40, LW = 128, H0 = 40, PS = 36, BASE = 262;
      function alto(i) { return BASE - H0 - i * PS; }
      function cx(i) { return X0 + i * LW + (LW - 4) / 2; }
      U.forEach(function (u, i) { A.box(X0 + i * LW, alto(i), LW - 4, BASE - alto(i), 'nodo'); A.txt(cx(i), alto(i) + 26, u, 'c2-unita'); });
      A.box(X0 + da * LW, alto(da), LW - 4, BASE - alto(da), 'nodo evid', { p: 1 }); A.txt(cx(da), alto(da) + 26, U[da], 'c2-unita', { p: 1 });
      A.box(X0 + a * LW, alto(a), LW - 4, BASE - alto(a), 'c2-evid', { p: 1 }); A.txt(cx(a), alto(a) + 26, U[a], 'c2-unita', { p: 1 });
      A.txt(cx(da), BASE + 26, valori[0], 'c2-nota', { p: 1 });
      var dir = a < da ? -1 : 1, k = 1;
      for (var i = da; i !== a; i += dir, k++) {
        var j = i + dir, x1 = cx(i) + 18 * dir, y1 = alto(i) - 6, x2 = cx(j) - 18 * dir, y2 = alto(j) - 6;
        var qx = (x1 + x2) / 2, qy = Math.min(y1, y2) - 56;
        A.path('M' + x1 + ' ' + y1 + ' Q' + qx + ' ' + qy + ' ' + x2 + ' ' + y2, 'c2-freccia', { p: k + 1 });
        punta(A, x2, y2, x2 - qx, y2 - qy, { p: k + 1 });
        A.txt(qx, (y1 + 2 * qy + y2) / 4 - 8, (dir < 0 ? '× ' : ': ') + fattore, 't-a', { p: k + 1 });
        A.txt(cx(j), BASE + 26, valori[k], 'c2-nota', { p: k + 1 });
      }
      A.txt(X0, 26, 'scendendo si moltiplica, salendo si divide', 't-b', { p: k + 1 }, 'start');
    });
  }
  equivalenza('f-si', ['B', 'kB', 'MB', 'GB', 'TB'], '1.000', 3, 1, ['3 GB', '3.000 MB', '3.000.000 kB']);
  equivalenza('f-iec', ['B', 'KiB', 'MiB', 'GiB', 'TiB'], '1.024', 2, 0, ['5 MiB', '5.120 KiB', '5.242.880 B']);

  /* ---------- 2.5 · da binario a decimale ---------- */
  costruisci('f-b2d', function (svg, A) {
    var N = '100110', w = 60, P = 66, X0 = 360 - (N.length * P - 6) / 2, Y = 30, somma = [], tot = 0;
    A.txt(X0 - 16, Y + 36, 'numero', 't-m', {}, 'end');
    A.txt(X0 - 16, 146, 'pesi', 't-m', { p: 1 }, 'end');
    N.split('').forEach(function (d, j) {
      var x = X0 + j * P, peso = Math.pow(2, N.length - 1 - j);
      if (d === '1') { A.box(x - 4, Y - 4, w + 8, w + 8, 'c2-ok', { p: 2 }); somma.push(peso); tot += peso; }
      cella(A, x, Y, d, null, '', w, w);
      A.txt(x + w / 2, 152, String(peso), 'c2-peso', { p: 1, r: (N.length - 1 - j) * 160 });
      if (d === '0') A.path('M' + (x + 12) + ' 160 L' + (x + w - 12) + ' 130', 'c2-barra', { p: 2 });
    });
    A.txt(360, 214, somma.join(' + ') + ' = ' + tot, 'c2-grande', { p: 3 });
    esito(A, 240, 238, 240, 44, [N, ['2'], ' = ' + tot, ['10']], { p: 4 });
  });

  /* ---------- divisioni ripetute (da base 10 a base b) ---------- */
  function divisioni(A, n, b, x0, y0, p0, dx) {
    var righe = [];
    while (n > 0) { righe.push([n, Math.floor(n / b), n % b]); n = Math.floor(n / b); }
    righe.forEach(function (r, i) {
      var y = y0 + i * 44, o = { p: p0 + i };
      A.txt(x0 + 50, y, String(r[0]), 'c2-riga', o, 'end');
      A.txt(x0 + 58, y, ': ' + b + ' =', 'c2-riga', o, 'start');
      A.txt(x0 + 160, y, String(r[1]), 'c2-riga', o, 'end');
      A.txt(x0 + dx - 10, y, 'resto', 't-m', o, 'end');
      cella(A, x0 + dx, y - 28, String(r[2]), o, 'nuova', 38, 38);
    });
    return righe;
  }

  /* ---------- 2.5 · da decimale a binario ---------- */
  costruisci('f-d2b', function (svg, A) {
    var righe = divisioni(A, 37, 2, 70, 42, 1, 300), n = righe.length, yb = 42 + (n - 1) * 44;
    A.txt(420, yb - 4, 'quoziente 0: mi fermo', 't-a', { p: n, f: n }, 'start');
    A.path('M430 ' + (yb + 14) + ' V' + 20, 'c2-freccia', { p: n + 1 });
    punta(A, 430, 20, 0, -1, { p: n + 1 });
    A.txt(580, 132, 'resti letti dal basso', 't-m', { p: n + 1 });
    esito(A, 470, 146, 220, 46, ['37 = ' + righe.map(function (r) { return r[2]; }).reverse().join(''), ['2']], { p: n + 1 });
  });

  /* ---------- 2.5 · da binario a esadecimale ---------- */
  costruisci('f-b2h', function (svg, A) {
    var w = 44, h = 46, P = 48, X0 = 158;
    function X(k, gr) { return X0 + k * P + (gr ? (k >= 2 ? 14 : -14) : 0); }
    function cornice(x1, x2, y, o) { return A.box(x1 - 6, y - 6, x2 - x1 + 12, h + 12, 'c2-gruppo', o); }
    '101101'.split('').forEach(function (d, k) { cella(A, X(k), 18, d, null, '', w, h); });
    // gruppi da destra: 10 | 1101
    '101101'.split('').forEach(function (d, k) { cella(A, X(k, 1), 96, d, { p: 1 }, '', w, h); });
    cornice(X(0, 1), X(1, 1) + w, 96, { p: 1, f: 1 }); cornice(X(2, 1), X(5, 1) + w, 96, { p: 1, f: 1 });
    // zeri a sinistra: 0010 | 1101
    var sx = ['0', '0', '1', '0'];
    sx.forEach(function (d, i) { cella(A, X(i - 2, 1), 174, d, { p: 2 }, i < 2 ? 'agg' : '', w, h); });
    '1101'.split('').forEach(function (d, i) { cella(A, X(i + 2, 1), 174, d, { p: 2 }, '', w, h); });
    cornice(X(-2, 1), X(1, 1) + w, 174, { p: 2 }); cornice(X(2, 1), X(5, 1) + w, 174, { p: 2 });
    // ogni gruppo una cifra
    var cS = (X(-2, 1) + X(1, 1) + w) / 2, cD = (X(2, 1) + X(5, 1) + w) / 2;
    [[cS, '2', '0010 = 2'], [cD, 'D', '1101 = 8 + 4 + 1 = 13']].forEach(function (g) {
      A.path('M' + g[0] + ' 228 V244', 'lin', { p: 3 });
      cella(A, g[0] - 24, 248, g[1], { p: 3 }, 'nuova', 48, 44);
      A.txt(g[0], 312, g[2], 't-m', { p: 3 });
    });
    esito(A, 500, 176, 205, 46, ['101101', ['2'], ' = 2D', ['16']], { p: 4 });
  });

  /* ---------- 2.5 · da esadecimale a binario ---------- */
  costruisci('f-h2b', function (svg, A) {
    var cifre = [['3', '0011', '3 = 2 + 1', 190], ['C', '1100', 'C = 12 = 8 + 4', 420]];
    cifre.forEach(function (c, i) {
      cella(A, c[3] - 30, 16, c[0], null, '', 60, 56);
      A.path('M' + c[3] + ' 78 V96', 'lin', { p: i + 1 });
      [8, 4, 2, 1].forEach(function (pe, k) {
        var x = c[3] - 82 + k * 42;
        A.txt(x + 20, 114, String(pe), 't-s', { p: i + 1 });
        cella(A, x, 122, c[1][k], { p: i + 1 }, c[1][k] === '1' ? 'nuova' : '', 40, 44);
      });
      A.txt(c[3], 190, c[2], 't-m', { p: i + 1 });
    });
    '00111100'.split('').forEach(function (d, k) {
      var x = 110 + k * 42;
      cella(A, x, 214, d, { p: 3 }, k < 2 ? 'agg' : '', 40, 44);
      if (k < 2) A.path('M' + (x + 8) + ' 252 L' + (x + 32) + ' 220', 'c2-barra', { p: 4 });
    });
    esito(A, 480, 212, 225, 48, ['3C', ['16'], ' = 111100', ['2']], { p: 4 });
  });

  /* ---------- 2.5 · da una base n a una base m, passando dal decimale ---------- */
  costruisci('f-nm', function (svg, A) {
    var X0 = 98;
    A.path('M360 10 V250', 'lin');
    A.txt(180, 22, 'DA BASE 4 A BASE 10', 't-eti', { p: 1 });
    '213'.split('').forEach(function (d, k) {
      var x = X0 + k * 56;
      cella(A, x, 36, d, null, '', 52, 52);
      A.txt(x + 26, 126, ['16', '4', '1'][k], 'c2-peso', { p: 1 });
      A.txt(x + 26, 146, ['4²', '4¹', '4⁰'][k], 't-m', { p: 1 });
    });
    grigio(A.txt(X0 + 172, 70, 'base 4', 't-m', {}, 'start'));
    A.txt(180, 188, '2·16 + 1·4 + 3·1', 'c2-riga', { p: 2 });
    A.txt(180, 226, '= 32 + 4 + 3 = 39', 'c2-grande', { p: 2 });
    A.txt(540, 22, 'DA BASE 10 A BASE 6', 't-eti', { p: 3 });
    var righe = divisioni(A, 39, 6, 380, 70, 3, 230), n = righe.length;
    A.path('M672 ' + (70 + (n - 1) * 44 + 14) + ' V44', 'c2-freccia', { p: n + 3 });
    punta(A, 672, 44, 0, -1, { p: n + 3 });
    esito(A, 410, 214, 270, 46, ['213', ['4'], ' = 103', ['6']], { p: n + 3 });
    A.txt(360, 290, 'controllo: 1·36 + 0·6 + 3·1 = 39 ✓', 't-b', { p: n + 3 });
  });

  /* ---------- 2.6 · somma e sottrazione in colonna ---------- */
  // colonna: x0, numeri allineati a destra, passi = [{c: colonna, scrivi: cifra, nota: testo, riporto: colonna o null}, …]
  function colonna(A, conf) {
    var w = 46, P = 54, x0 = conf.x0, nc = conf.nc;
    function xj(j) { return x0 + j * P; }
    var YA = 52, YB = 112, YR = 184;
    conf.passi.forEach(function (s, k) { if (s.c != null) A.box(xj(s.c) - 5, 30, w + 10, 206, 'c2-evid', { p: k + 1, f: k + 1 }); });
    function riga(t, y) { for (var j = 0; j < t.length; j++) if (t[j] !== ' ') cella(A, xj(nc - t.length + j), y, t[j], null, '', w, 46); }
    riga(conf.a, YA); riga(conf.b, YB);
    A.txt(xj(0) - 30, YB + 33, conf.segno, 'c2-cifra');
    A.path('M' + (xj(0) - 40) + ' 172 H' + (xj(nc - 1) + w + 6), 'lin');
    for (var j = 0; j < nc; j++) A.box(xj(j), YR, w, 46, 'c2-cella');
    grigio(A.txt(xj(nc - 1) + w + 16, YA + 31, conf.da, 'c2-nota', null, 'start'));
    grigio(A.txt(xj(nc - 1) + w + 16, YB + 31, conf.db, 'c2-nota', null, 'start'));
    var ultimo = conf.passi.length;
    grigio(A.txt(xj(nc - 1) + w + 16, YR + 31, conf.dr, 'c2-nota', { p: ultimo }, 'start'));
    conf.passi.forEach(function (s, k) {
      var p = k + 1;
      if (s.scrivi != null) A.txt(xj(s.c) + w / 2, YR + 32, s.scrivi, 'c2-cifra nuova', { p: p });
      if (s.riporto != null) A.txt(xj(s.riporto) + w / 2, 44, '1', 'c2-piccola', { p: p });
      (s.sopra || []).forEach(function (q) {   // prestiti: cifra barrata e nuovo valore sopra
        A.path('M' + (xj(q[0]) + 10) + ' ' + (YA + 40) + ' L' + (xj(q[0]) + w - 10) + ' ' + (YA + 6), 'c2-barra', { p: p });
        A.txt(xj(q[0]) + w / 2, 44, q[1], 'c2-piccola', { p: p });
      });
      if (s.nota) A.txt(conf.xn, 124, s.nota, 'c2-nota', { p: p, f: p }).style.fill = s.errore ? 'var(--errore-ink)' : '';
      if (s.nota2) A.txt(conf.xn, 150, s.nota2, 't-m', { p: p, f: p });
    });
  }
  costruisci('f-somma', function (svg, A) {
    colonna(A, { x0: 230, nc: 5, a: '1011', b: '110', segno: '+', da: '(11)', db: '(6)', dr: '(17)', xn: 630, passi: [
      { c: 4, scrivi: '1', nota: '1 + 0 = 1' },
      { c: 3, scrivi: '0', riporto: 2, nota: '1 + 1 = 10', nota2: 'scrivo 0, riporto 1' },
      { c: 2, scrivi: '0', riporto: 1, nota: '0 + 1 + 1 = 10', nota2: 'scrivo 0, riporto 1' },
      { c: 1, scrivi: '0', riporto: 0, nota: '1 + 1 = 10', nota2: 'scrivo 0, riporto 1' },
      { c: 0, scrivi: '1', nota: '11 + 6 = 17 ✓', nota2: 'il riporto va davanti' }] });
  });
  costruisci('f-sottr', function (svg, A) {
    colonna(A, { x0: 250, nc: 4, a: '1000', b: '11', segno: '−', da: '(8)', db: '(3)', dr: '(5)', xn: 610, passi: [
      { c: 3, nota: '0 − 1 ?', nota2: 'non si può: prestito', errore: true },
      { sopra: [[0, '0'], [1, '1'], [2, '1'], [3, '10']], nota: 'prestito', nota2: 'dal primo 1 a sinistra' },
      { c: 3, scrivi: '1', nota: '10 − 1 = 1' },
      { c: 2, scrivi: '0', nota: '1 − 1 = 0' },
      { c: 1, scrivi: '1', nota: '1 − 0 = 1' },
      { c: 0, scrivi: '0', nota: '101 + 11 = 1000 ✓', nota2: 'controllo: 5 + 3 = 8' }] });
  });
})();
