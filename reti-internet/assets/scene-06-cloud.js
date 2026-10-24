/* Capitolo 6 · scene di cloud, grid ed edge computing. */
(function () {
  var A = Anim2, s = A.s, t = A.t, g = A.g, C = A.C, D = A.D;

  /* ======================= IaaS, PaaS, SaaS: chi gestisce che cosa ======================= */
  A.scene['f-modelli'] = {
    id: 'f-modelli',
    titolo: 'Chi gestisce che cosa: dalla pizza fatta in casa alla pizza pronta',
    viewBox: [960, 560],
    aria: 'Quattro colonne di sei livelli, dall’edificio all’applicazione: in casa propria tutto lo gestisce l’utente; con IaaS il fornitore gestisce i livelli più bassi, con PaaS anche il sistema e l’ambiente, con SaaS tutto.',
    inizio: 'Ogni servizio informatico è fatto di <b>sei livelli</b>, dall’edificio con i server fino al programma. Quanti ne gestisci tu e quanti il fornitore dipende dal modello.',
    passi: [
      '<b>Fatta in casa</b>: compri e gestisci tutto tu, dai server al programma.',
      '<b>IaaS</b>: noleggi una cucina attrezzata. Il fornitore ti dà macchine virtuali, dischi e rete; la pizza la fai tu.',
      '<b>PaaS</b>: ti danno l’impasto e il forno acceso. Il fornitore gestisce anche il sistema e l’ambiente: tu metti i tuoi programmi.',
      '<b>SaaS</b>: ordini la pizza pronta. Il fornitore gestisce tutto e tu usi il programma dal browser o da un’app.'
    ],
    build: function (svg, Q) {
      var S = { col: [] };
      s('rect', { width: 960, height: 560, fill: '#eef3f1' }, svg);
      var names = ['Edificio, rete, corrente', 'Server fisici', 'Virtualizzazione', 'Sistema operativo', 'Ambiente e librerie', 'Programma e dati'];
      var heads = [['In casa tua', 'i tuoi server'], ['IaaS', 'AWS EC2, Azure'], ['PaaS', 'App Engine, Firebase'], ['SaaS', 'Gmail, Classroom, Netflix']];
      var caps = ['Fatta in casa', 'Cucina noleggiata', 'Impasto e forno', 'Pizza pronta'];
      var cx = [145, 375, 605, 835];
      /* legenda */
      var lg = g(svg, 0, 40, 1);
      s('rect', { x: 40, y: -11, width: 22, height: 22, rx: 5, fill: '#f2c36b' }, lg); t(lg, 72, 5, 'lo gestisci tu', { a: 'start', s: 15, c: C.ink });
      s('rect', { x: 230, y: -11, width: 22, height: 22, rx: 5, fill: '#69b7ab' }, lg); t(lg, 262, 5, 'lo gestisce il fornitore', { a: 'start', s: 15, c: C.ink });
      for (var c = 0; c < 4; c++) {
        var col = { layers: [], ex: null }, x0 = cx[c] - 98;
        t(svg, cx[c], 100, heads[c][0], { s: 20, w: 700, c: C.ink });
        for (var i = 0; i < 6; i++) {
          var y = 120 + (5 - i) * 48, lay = g(svg, x0, y, 1);
          var r = s('rect', { x: 0, y: 0, width: 196, height: 42, rx: 8, fill: '#dbe3e6', stroke: '#fff', 'stroke-width': 2 }, lay);
          t(lay, 98, 26, names[i], { s: 13, c: C.ink, w: 600 });
          col.layers.push(r);
        }
        /* icona e didascalia */
        var ic = g(svg, cx[c], 452, 1);
        if (c === 0) { s('path', { d: 'M-24 6L0 -14L24 6V30H-24Z', fill: '#f6ecd8', stroke: C.wood, 'stroke-width': 3, 'stroke-linejoin': 'round' }, ic); s('rect', { x: -6, y: 12, width: 12, height: 18, fill: C.wood }, ic); }
        if (c === 1) { s('rect', { x: -28, y: -2, width: 56, height: 32, rx: 4, fill: '#e3e8eb', stroke: C.steel, 'stroke-width': 2.5 }, ic); s('rect', { x: -8, y: -14, width: 16, height: 12, rx: 3, fill: '#9fb0b8' }, ic); s('circle', { cx: -14, cy: 6, r: 4, fill: '#c9674a' }, ic); s('circle', { cx: 0, cy: 6, r: 4, fill: '#c9674a' }, ic); s('circle', { cx: 14, cy: 6, r: 4, fill: '#c9674a' }, ic); }
        if (c === 2) { s('rect', { x: -28, y: -10, width: 56, height: 40, rx: 6, fill: '#e3e8eb', stroke: C.steel, 'stroke-width': 2.5 }, ic); s('rect', { x: -20, y: -2, width: 40, height: 22, rx: 4, fill: '#2c3b3a' }, ic); s('path', { d: 'M0 16Q10 6 4 -2Q0 8 -4 4Q-8 12 0 16Z', fill: '#f08a24' }, ic); }
        if (c === 3) { s('rect', { x: -28, y: -6, width: 56, height: 36, rx: 4, fill: '#e8c59a', stroke: '#b98f55', 'stroke-width': 2.5 }, ic); s('circle', { cx: 0, cy: 12, r: 13, fill: '#f4cf8a', stroke: '#d6a24a', 'stroke-width': 2 }, ic); s('circle', { cx: -4, cy: 8, r: 3, fill: '#c9674a' }, ic); s('circle', { cx: 5, cy: 14, r: 3, fill: '#c9674a' }, ic); }
        t(svg, cx[c], 508, caps[c], { s: 15.5, w: 700, c: C.ink });
        col.ex = t(svg, cx[c], 530, heads[c][1], { s: 13, w: 500, c: C.mute });
        col.ex.setAttribute('opacity', 0);
        S.col.push(col);
      }
      return S;
    },
    steps: (function () {
      function paint(S, tl, c, nProv) {
        S.col[c].layers.forEach(function (r, i) {
          tl.to(r, { attr: { fill: i < nProv ? '#69b7ab' : '#f2c36b' }, duration: .35 }, i * .12);
        });
        tl.to(S.col[c].ex, { opacity: 1, duration: .5 }, '-=.2');
      }
      return [
        function (S, tl) { paint(S, tl, 0, 0); },
        function (S, tl) { paint(S, tl, 1, 3); },
        function (S, tl) { paint(S, tl, 2, 5); },
        function (S, tl) { paint(S, tl, 3, 6); }
      ];
    })()
  };

  /* ======================= grid computing ======================= */
  A.scene['f-grid'] = {
    id: 'f-grid',
    titolo: 'Un calcolo enorme diviso tra tanti computer',
    viewBox: [960, 500],
    aria: 'Un grande calcolo viene diviso in cento pezzi, distribuito a dieci computer in città diverse; quando un computer si spegne i suoi pezzi non finiti vengono riassegnati agli altri; alla fine i risultati tornano e si ricompongono.',
    inizio: 'Al centro di sinistra un grande <b>calcolo da 1000 ore</b>. A destra, su una mappa, dieci computer in città diverse.',
    passi: [
      'Il calcolo si <b>divide in cento pezzi</b> indipendenti, uno per ogni quadratino.',
      'I pezzi partono verso i dieci computer: ognuno lavora sui suoi, e le <b>barre di avanzamento</b> crescono.',
      'Un computer si spegne: i suoi pezzi <b>non finiti tornano al centro</b> e vengono <b>riassegnati</b> agli altri.',
      'I risultati tornano e si <b>ricompongono</b>: il calcolo da 1000 ore è finito in un giorno.'
    ],
    build: function (svg, Q) {
      var S = { tiles: [], pc: [] };
      s('rect', { width: 960, height: 500, fill: '#eef3f1' }, svg);
      /* mappa stilizzata */
      s('path', { d: 'M300 80Q380 30 520 50Q660 20 780 70Q900 110 910 220Q920 330 860 410Q780 480 640 470Q500 490 400 430Q300 380 310 260Q290 160 300 80Z', fill: '#dfeae6', stroke: '#c9d8d2', 'stroke-width': 2 }, svg);
      s('path', { d: 'M310 150H900M310 250H910M330 350H880M420 60V460M540 40V480M660 30V470M780 60V440', stroke: '#cfdcd6', 'stroke-width': 1.5, 'stroke-dasharray': '3 6', fill: 'none' }, svg);
      t(svg, 118, 120, 'calcolo da 1000 ore', { s: 16, w: 700, c: C.ink });
      var cities = [['Oslo', 640, 84], ['Londra', 450, 150], ['Berlino', 640, 184], ['Varsavia', 790, 190], ['Parigi', 480, 260], ['Vienna', 660, 262], ['Ginevra', 560, 330], ['Madrid', 400, 380], ['Roma', 650, 395], ['Atene', 810, 410]];
      var pal = ['#e9a313', '#0f8d80', '#3f82a6', '#c9674a', '#7a6fb5', '#86b673', '#d9794d', '#5a8fb5', '#b5584a', '#8f9f3a'];
      S.pal = pal; S.cities = cities;
      cities.forEach(function (c, i) {
        var cg = g(svg, c[1], c[2], 1);
        D.laptop(cg, 0, -4, .6, { screen: '#cfe8e2' });
        t(cg, 0, 28, c[0], { s: 11.5, c: C.mute, w: 600 });
        var bg = s('rect', { x: -22, y: 34, width: 44, height: 6, rx: 3, fill: '#d3dde0' }, cg);
        var fg = s('rect', { x: -22, y: 34, width: 0, height: 6, rx: 3, fill: pal[i] }, cg);
        var xm = g(cg, 0, -4, 1, { opacity: 0 });
        s('rect', { x: -17, y: -11, width: 34, height: 22, rx: 2, fill: 'rgba(28,43,42,.82)' }, xm);
        s('path', { d: 'M-8 -6L8 6M8 -6L-8 6', stroke: C.red, 'stroke-width': 3.5, 'stroke-linecap': 'round' }, xm);
        S.pc.push({ x: c[1], y: c[2], fg: fg, xm: xm, g: cg });
      });
      /* i cento pezzi */
      S.bx = 36; S.by = 160;
      for (var r = 0; r < 10; r++) {
        for (var q = 0; q < 10; q++) {
          var el = s('rect', { x: S.bx + q * 16, y: S.by + r * 16, width: 14, height: 14, rx: 2.5, fill: C.brand }, svg);
          S.tiles.push({ el: el, r: r, c: q });
        }
      }
      S.slot = function (comp, k) {
        var p = S.pc[comp];
        return { x: p.x - 29 + (k % 5) * 12, y: p.y + 46 + Math.floor(k / 5) * 12 };
      };
      S.fine = g(svg, 118, 350, 1, { opacity: 0 });
      D.etichetta(S.fine, 0, 0, '1000 ore → 1 giorno', { s: 16, bg: C.brandBg, line: C.brand, c: C.brand, w: 190 });
      S.fatto = g(svg, 118, 394, 1, { opacity: 0 });
      s('circle', { r: 17, fill: C.brand }, S.fatto); s('path', { d: 'M-8 0L-2 6L9 -6', fill: 'none', stroke: '#fff', 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, S.fatto);
      return S;
    },
    steps: [
      function (S, tl) {
        S.tiles.forEach(function (tt, i) {
          tl.to(tt.el, { attr: { x: S.bx + tt.c * 19 + 2, y: S.by + tt.r * 19 - 6, fill: S.pal[tt.r] }, duration: .6, ease: 'power2.out' }, (tt.r + tt.c) * .03);
        });
      },
      function (S, tl) {
        S.tiles.forEach(function (tt) {
          var p = S.slot(tt.r, tt.c);
          tl.to(tt.el, { attr: { x: p.x, y: p.y, width: 10, height: 10 }, duration: 1.1, ease: 'power2.inOut' }, tt.r * .12 + tt.c * .02);
        });
        S.pc.forEach(function (p, i) {
          tl.to(p.fg, { attr: { width: 26 }, duration: 1.6, ease: 'power1.inOut' }, 1.2 + i * .05);
        });
      },
      function (S, tl) {
        var bad = 3, to = [0, 1, 2, 5, 6, 7], j = 0;
        tl.to(S.pc[bad].xm, { opacity: 1, duration: .4 });
        tl.to(S.pc[bad].fg, { attr: { fill: '#9aa7ae' }, duration: .3 }, '<');
        S.tiles.forEach(function (tt) {
          if (tt.r === bad && tt.c >= 4) {
            var dest = to[j], p = S.slot(dest, 10 + j);
            tl.to(tt.el, {
              keyframes: [{ attr: { x: 120 + j * 12, y: 270, width: 14, height: 14 }, duration: .8, ease: 'power2.inOut' },
                          { attr: { x: p.x, y: p.y, width: 10, height: 10, fill: S.pal[dest] }, duration: .9, ease: 'power2.inOut' }]
            }, .6 + j * .12);
            tl.to(S.pc[dest].fg, { attr: { width: 36 }, duration: 1.2 }, 1.7);
            j++;
          }
        });
        tl.to(S.pc[bad].fg, { attr: { width: 14 }, duration: .6 }, 0);
      },
      function (S, tl) {
        S.pc.forEach(function (p, i) { tl.to(p.fg, { attr: { width: 44 }, duration: 1, ease: 'power1.inOut' }, i * .03); });
        S.tiles.forEach(function (tt) {
          tl.to(tt.el, { attr: { x: S.bx + tt.c * 16, y: S.by + tt.r * 16, width: 14, height: 14, fill: C.brand }, duration: 1.2, ease: 'power2.inOut' }, 1 + (tt.r + tt.c) * .03);
        });
        tl.to(S.fine, { opacity: 1, duration: .5 }, '-=.3');
        tl.fromTo(S.fatto, { opacity: 0, scale: .3 }, { opacity: 1, scale: 1, duration: .5, ease: 'back.out(3)' }, '-=.2');
      }
    ]
  };

  /* ======================= cloud contro edge ======================= */
  function auto(p, x, y, col) {
    var e = g(p, x, y, 1);
    s('path', { d: 'M-48 0L-48 -16Q-48 -26 -36 -26L-24 -26L-14 -44Q-10 -48 -4 -48L22 -48Q28 -48 32 -42L42 -26Q50 -26 50 -16L50 0Z', fill: col || C.amber, stroke: 'rgba(0,0,0,.2)', 'stroke-width': 1.5 }, e);
    s('path', { d: 'M-10 -42L-18 -28H8V-42ZM14 -42V-28H36L28 -42Z', fill: '#cfe6ee' }, e);
    [-28, 30].forEach(function (cx) { s('circle', { cx: cx, cy: 0, r: 11, fill: '#2c3b3a' }, e); s('circle', { cx: cx, cy: 0, r: 4.5, fill: '#9fb0b8' }, e); });
    return e;
  }
  function panel(svg, Q, ox, titolo, edge) {
    var P = g(svg, ox, 0, 1);
    s('rect', { x: 0, y: 56, width: 470, height: 440, rx: 14, fill: '#f7fafb', stroke: C.line, 'stroke-width': 2 }, P);
    t(P, 235, 40, titolo, { s: 16, w: 700, c: edge ? C.brand : C.blue, ls: 2 });
    s('rect', { x: 14, y: 440, width: 442, height: 30, fill: '#e3e8e6' }, P);
    s('path', { d: 'M14 440H456', stroke: '#b9c3c0', 'stroke-width': 3 }, P);
    /* cancello */
    s('rect', { x: 348, y: 380, width: 14, height: 60, rx: 3, fill: '#8a6a3a' }, P);
    var arm = g(P, 355, 384, 1); var ar = g(arm, 0, 0, 1);
    s('rect', { x: 0, y: -4, width: 100, height: 8, rx: 3, fill: '#fff', stroke: '#c0392b', 'stroke-width': 2 }, ar);
    [18, 48, 78].forEach(function (x) { s('rect', { x: x, y: -4, width: 12, height: 8, fill: '#c0392b' }, ar); });
    /* camera su palo */
    s('rect', { x: 226, y: 330, width: 8, height: 110, fill: '#7d8f9d' }, P);
    var cam = D.camera(P, 230, 320, 1);
    /* nuvola / data center */
    D.nuvola(P, 380, 150, 1.05, '#fff');
    var sv = g(P, 380, 146, .55); D.server(sv, -16, 0, .8); D.server(sv, 18, 0, .8, { led: C.amber });
    t(P, 380, 202, edge ? 'cloud (lontano)' : 'data center (lontano)', { s: 12.5, c: C.mute, w: 600 });
    /* cronometro */
    var cr = g(P, 80, 120, 1);
    s('rect', { x: -58, y: -24, width: 116, height: 48, rx: 10, fill: '#2c3b3a' }, cr);
    var tm = t(cr, 0, 9, '0,00 s', { s: 24, c: '#7fe0d2', w: 700 }); tm.setAttribute('font-family', 'JetBrains Mono, monospace');
    t(P, 80, 168, 'cronometro', { s: 11.5, c: C.mute, w: 600 });
    /* strumento dei dati */
    var dm = g(P, 300, 482, 1);
    s('rect', { x: -150, y: -7, width: 300, height: 14, rx: 7, fill: '#dfe7ea' }, dm);
    var fill = s('rect', { x: -150, y: -7, width: 0, height: 14, rx: 7, fill: edge ? C.brand2 : C.blue }, dm);
    t(P, 16, 486, 'dati mandati in rete', { a: 'start', s: 12, c: C.mute, w: 600 });
    var car = auto(P, 40, 440, '#e9a313');
    var chip = null;
    if (edge) { chip = D.chip(P, 276, 332, .75); }
    return { P: P, arm: ar, car: car, tm: tm, fill: fill, chip: chip, cam: cam };
  }
  A.scene['f-edge'] = {
    id: 'f-edge',
    titolo: 'Cloud o edge: dove si decide?',
    viewBox: [960, 520],
    aria: 'Due scene a confronto: a sinistra una videocamera manda tutto il video a un data center lontano e il cancello si apre dopo parecchi decimi di secondo; a destra un piccolo chip accanto alla videocamera riconosce l’auto da solo e apre subito, mandando al cloud una sola riga.',
    inizio: 'Una videocamera davanti a un cancello. A sinistra la versione <b>cloud</b> (data center lontano), a destra la versione <b>edge</b> (un chip accanto alla videocamera). Un cronometro per lato.',
    passi: [
      '<b>Cloud</b>: la videocamera manda <b>tutto il video</b>, un flusso continuo di pacchetti, al data center lontano.',
      '<b>Cloud</b>: il data center riconosce l’auto e rimanda il comando «apri»: il cronometro segna <b>parecchi decimi di secondo</b>.',
      '<b>Edge</b>: il chip riconosce l’auto da solo e <b>apre subito</b>: il cronometro segna pochi <b>millisecondi</b>.',
      '<b>Edge</b>: verso il cloud parte <b>solo una riga</b>: «ore 8:02, auto riconosciuta, cancello aperto».'
    ],
    build: function (svg, Q) {
      var S = {};
      s('rect', { width: 960, height: 520, fill: '#eef3f1' }, svg);
      S.L = panel(svg, Q, 8, 'CLOUD', false);
      S.R = panel(svg, Q, 482, 'EDGE', true);
      /* percorsi dei dati */
      S.pL = A.rotta(svg, ['M' + (8 + 244) + ' 312L' + (8 + 372) + ' 160']);
      S.pLr = A.rotta(svg, ['M' + (8 + 372) + ' 160L' + (8 + 244) + ' 312', 'M' + (8 + 244) + ' 312L' + (8 + 354) + ' 392']);
      S.pR = A.rotta(svg, ['M' + (482 + 244) + ' 312L' + (482 + 372) + ' 160']);
      s('path', { d: 'M' + (8 + 244) + ' 312L' + (8 + 372) + ' 160', fill: 'none', stroke: '#b8c4c0', 'stroke-width': 2.5, 'stroke-dasharray': '5 6' }, svg);
      s('path', { d: 'M' + (482 + 244) + ' 312L' + (482 + 372) + ' 160', fill: 'none', stroke: '#d2dad7', 'stroke-width': 2, 'stroke-dasharray': '3 7' }, svg);
      S.bolla = g(svg, 482 + 250, 252, 1, { opacity: 0 });
      D.etichetta(S.bolla, 0, 0, 'ore 8:02 · auto riconosciuta · cancello aperto', { s: 12.5, w: 300, bg: C.brandBg, line: C.brand, c: C.brand });
      S.nota = g(svg, 8 + 235, 118, 1, { opacity: 0 });
      D.etichetta(S.nota, 0, 0, 'auto riconosciuta!', { s: 13.5, bg: C.brandBg, line: C.brand, c: C.brand });
      S.fmt = function (v, ms) { return ms ? ((v * 1000).toFixed(0) + ' ms') : v.toFixed(2).replace('.', ',') + ' s'; };
      return S;
    },
    steps: [
      function (S, tl, Q) {
        tl.to(S.L.car, { x: 232, duration: 1.6, ease: 'power2.out' });
        var dots = [];
        for (var i = 0; i < 14; i++) {
          var d = s('rect', { width: 9, height: 7, rx: 1.5, fill: C.blue, opacity: 0 }, S.L.P.parentNode), P = { f: 0 };
          tl.set(d, { opacity: 1 }, 1 + i * .22);
          tl.to(P, { f: 1, duration: 1.1, ease: 'none', onUpdate: (function (d, P) { return function () { var p = S.pL.pt(P.f); d.setAttribute('x', p.x - 4.5); d.setAttribute('y', p.y - 3.5); }; })(d, P) }, 1 + i * .22);
          tl.set(d, { opacity: 0 }, 2.1 + i * .22);
        }
        tl.to(S.L.fill, { attr: { width: 300 }, duration: 3, ease: 'none' }, 1);
      },
      function (S, tl) {
        var o = { v: 0 }, P = { f: 0 }, d = s('circle', { r: 8, fill: C.brand2, stroke: '#fff', 'stroke-width': 2.5, opacity: 0 }, S.L.P.parentNode);
        tl.to(S.nota, { opacity: 1, duration: .4 });
        tl.set(d, { opacity: 1 });
        tl.to(P, { f: 1, duration: 3, ease: 'power1.inOut', onUpdate: function () { var p = S.pLr.pt(P.f); d.setAttribute('cx', p.x); d.setAttribute('cy', p.y); } });
        tl.to(o, { v: .48, duration: 3, ease: 'none', onUpdate: function () { S.L.tm.textContent = S.fmt(o.v); } }, '<');
        tl.set(d, { opacity: 0 });
        tl.to(S.L.arm, { rotation: -80, transformOrigin: '0% 50%', duration: .5, ease: 'power2.out' });
        tl.to(S.L.car, { x: 470, duration: 1.4, ease: 'power2.in' }, '-=.1');
        tl.to(S.nota, { opacity: 0, duration: .3 }, '<');
      },
      function (S, tl) {
        var o = { v: 0 };
        tl.to(S.R.car, { x: 232, duration: 1.6, ease: 'power2.out' });
        tl.fromTo(S.R.chip, { scale: 1 }, { scale: 1.35, duration: .25, yoyo: true, repeat: 1, ease: 'sine.inOut' });
        tl.to(S.R.arm, { rotation: -80, transformOrigin: '0% 50%', duration: .4, ease: 'power2.out' }, '<.15');
        tl.to(o, { v: .005, duration: .5, ease: 'none', onUpdate: function () { S.R.tm.textContent = S.fmt(o.v, true); } }, '<');
        tl.to(S.R.car, { x: 470, duration: 1.4, ease: 'power2.in' }, '+=.1');
      },
      function (S, tl) {
        var P = { f: 0 }, d = s('circle', { r: 5, fill: C.brand2, stroke: '#fff', 'stroke-width': 2, opacity: 0 }, S.R.P.parentNode);
        tl.set(d, { opacity: 1 });
        tl.to(P, { f: 1, duration: 1.6, ease: 'power1.inOut', onUpdate: function () { var p = S.pR.pt(P.f); d.setAttribute('cx', p.x); d.setAttribute('cy', p.y); } });
        tl.set(d, { opacity: 0 });
        tl.fromTo(S.bolla, { opacity: 0, y: 260 }, { opacity: 1, y: 252, duration: .5, ease: 'back.out(2)' });
        tl.to(S.R.fill, { attr: { width: 4 }, duration: .6 }, '-=.4');
      }
    ]
  };
})();
