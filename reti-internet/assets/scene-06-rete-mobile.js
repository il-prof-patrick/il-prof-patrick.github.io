/* Capitolo 6 · scene della rete mobile: celle e handover, spettro elettromagnetico. */
(function () {
  var A = Anim2, s = A.s, t = A.t, g = A.g, C = A.C, D = A.D;
  A.scene = A.scene || {};

  function hex(cx, cy, r) {
    var p = [];
    for (var i = 0; i < 6; i++) {
      var a = (60 * i - 90) * Math.PI / 180;
      p.push((cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1));
    }
    return 'M' + p.join('L') + 'Z';
  }
  function rnd(i) { var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

  /* ======================= celle e handover ======================= */
  A.scene['f-handover'] = {
    id: 'f-handover',
    titolo: 'Celle e handover',
    viewBox: [960, 480],
    aria: 'Un’auto percorre una strada che attraversa prima la campagna, con celle grandi, poi la città, con celle piccole: il telefono cambia antenna a ogni cella senza interrompere la chiamata; in città ogni antenna serve pochi telefoni.',
    inizio: 'Una strada attraversa la <b>campagna</b>, con celle grandi, e poi la <b>città</b>, con celle piccole. Ogni cella ha la sua antenna. L’auto è collegata alla prima.',
    passi: [
      'L’auto si avvicina al <b>bordo della cella</b>: il collegamento con l’antenna si indebolisce.',
      '<b>Handover</b>: il collegamento passa all’antenna della cella vicina e la chiamata continua.',
      'L’auto entra in città: le celle sono piccole e gli <b>handover</b> sono più frequenti.',
      'In ogni cella cittadina ci sono <b>pochi telefoni</b>: ogni antenna divide la sua capacità tra pochi utenti.'
    ],
    build: function (svg, Q) {
      var S = { P: { x: 90 }, lastX: 90, cur: null }, ROAD = 270;
      s('rect', { width: 960, height: 480, fill: C.grass }, svg);
      [[18, 30, 120, 70], [150, 360, 150, 80], [30, 390, 90, 60], [250, 24, 110, 60]].forEach(function (f) {
        s('rect', { x: f[0], y: f[1], width: f[2], height: f[3], rx: 8, fill: C.grass2, opacity: .65 }, svg);
      });
      [[60, 140], [160, 330], [330, 360], [340, 70], [240, 440]].forEach(function (a) {
        s('circle', { cx: a[0], cy: a[1], r: 13, fill: '#8fbf7a' }, svg); s('circle', { cx: a[0] - 3, cy: a[1] - 3, r: 8, fill: '#a3cd8e' }, svg);
      });
      s('rect', { x: 383, width: 577, height: 480, fill: '#dde3e5' }, svg);
      var clip = s('clipPath', { id: 'cc' + Q.id }, Q.defs); s('rect', { x: 383, y: 0, width: 577, height: 480 }, clip);
      var city = s('g', { 'clip-path': 'url(#cc' + Q.id + ')' }, svg), n = 0;
      for (var k = -3; k <= 3; k++) {
        for (var i = -1; i < 8; i++) {
          var cx = 422 + (k % 2 ? 39 : 0) + 78 * i, cy = 250 + 67.5 * k;
          s('path', { d: hex(cx, cy, 45), fill: 'rgba(255,255,255,.28)', stroke: '#fff', 'stroke-width': 2.5 }, city);
          for (var b = 0; b < 2; b++) {
            var w = 12 + rnd(++n) * 14, hh = 10 + rnd(++n) * 18;
            s('rect', { x: cx - 26 + rnd(++n) * 34, y: cy - 22 + rnd(++n) * 34, width: w, height: hh, rx: 2, fill: rnd(++n) > .5 ? '#c4cfd5' : '#b6c3ca' }, city);
          }
        }
      }
      var big = [[110, 250], [292, 250], [201, 93], [19, 93], [201, 407], [19, 407]];
      big.forEach(function (c) { s('path', { d: hex(c[0], c[1], 105), fill: 'rgba(255,255,255,.2)', stroke: '#fff', 'stroke-width': 3.5 }, svg); });
      /* strada */
      s('path', { d: 'M-10 ' + ROAD + 'H970', stroke: C.road, 'stroke-width': 26, fill: 'none' }, svg);
      s('path', { d: 'M-10 ' + ROAD + 'H970', stroke: '#fff', 'stroke-width': 2.5, 'stroke-dasharray': '12 12', fill: 'none', opacity: .85 }, svg);
      /* antenne */
      S.ants = [{ x: 110, y: 205, r: 105 }, { x: 292, y: 205, r: 105 }];
      D.torre(svg, 110, 205, .85); D.torre(svg, 292, 205, .85);
      for (var j = 0; j < 6; j++) { S.ants.push({ x: 422 + 78 * j, y: 236, r: 45 }); D.torre(svg, 422 + 78 * j, 236, .42); }
      t(svg, 190, 456, 'CAMPAGNA · celle grandi', { s: 14, c: '#3d5a34', ls: 1.2 });
      t(svg, 672, 456, 'CITTÀ · celle piccole', { s: 14, c: '#44545c', ls: 1.2 });
      /* telefoni (compaiono al passo 4) */
      S.phones = s('g', { opacity: 1 }, svg); S.phoneList = [];
      for (var q = 0; q < 6; q++) {
        for (var m = 0; m < 3; m++) {
          var px = 422 + 78 * q + (m - 1) * 17, py = 214 + (m % 2) * 62 + (m === 1 ? 14 : 0) - (m === 2 ? 14 : 0);
          var o = g(S.phones, px, py, 1, { opacity: 0 }), inn = g(o, 0, 0, 1);
          D.telefono(inn, 0, 0, .5, { screen: '#bfe3d8' });
          S.phoneList.push(o);
        }
      }
      /* collegamento e anelli del segnale */
      S.link = s('path', { d: '', fill: 'none', stroke: C.brand, 'stroke-width': 3.5, 'stroke-dasharray': '7 7', 'stroke-linecap': 'round' }, svg);
      gsap.to(S.link, { strokeDashoffset: -28, duration: 1.2, repeat: -1, ease: 'none' });
      S.rings = g(svg, 0, 0, 1);
      for (var r = 0; r < 3; r++) {
        var c = s('circle', { cx: 0, cy: 0, r: 8, fill: 'none', stroke: C.brand2, 'stroke-width': 2.5, opacity: 0 }, S.rings);
        gsap.fromTo(c, { attr: { r: 8 }, opacity: .9 }, { attr: { r: 44 }, opacity: 0, duration: 1.9, repeat: -1, delay: r * .63, ease: 'power1.out' });
      }
      /* auto con il telefono, barre del segnale, etichette */
      S.car = g(svg, 0, ROAD, 1.1); D.auto(S.car, 0, 0, 1, C.amber);
      s('circle', { cx: -4, cy: 0, r: 5.5, fill: '#2c3b3a' }, S.car);
      S.barre = g(svg, 0, 236, 1); S.bars = [];
      for (var bb = 0; bb < 4; bb++) S.bars.push(s('rect', { x: -14 + bb * 8, y: -(5 + bb * 4), width: 5.5, height: 5 + bb * 4, rx: 1.5, fill: C.brand }, S.barre));
      S.chipDebole = g(svg, 0, 200, 1, { opacity: 0 }); D.etichetta(S.chipDebole, 0, 0, 'segnale debole', { bg: C.redBg, line: C.red, c: C.red, s: 14 });
      S.chipHand = g(svg, 0, 200, 1, { opacity: 0 }); D.etichetta(S.chipHand, 0, 0, 'handover!', { bg: C.amberBg, line: C.amber, c: C.amberDk, s: 14 });
      S.badge = g(svg, 110, 36, 1); D.etichetta(S.badge, 0, 0, 'handover: 0', { s: 15, w: 130 }); S.badgeT = S.badge.querySelector('text');
      S.chipPochi = g(svg, 672, 108, 1, { opacity: 0 }); D.etichetta(S.chipPochi, 0, 0, 'pochi telefoni per antenna', { bg: C.brandBg, line: C.brand, c: C.brand, s: 15 });

      var BOUND = [201, 383, 461, 539, 617, 695, 773, 851];
      function antAt(x) {
        if (x < 201) return S.ants[0];
        if (x < 383) return S.ants[1];
        return S.ants[Math.min(2 + Math.floor((x - 383) / 78), S.ants.length - 1)];
      }
      S.update = function () {
        var x = S.P.x, a = antAt(x);
        S.car.setAttribute('transform', 'translate(' + x + ' ' + ROAD + ') scale(1.1)');
        S.barre.setAttribute('transform', 'translate(' + x + ' 242)');
        S.chipDebole.setAttribute('transform', 'translate(' + x + ' 202)');
        S.chipHand.setAttribute('transform', 'translate(' + x + ' 202)');
        S.link.setAttribute('d', 'M' + x + ' ' + (ROAD - 12) + 'L' + a.x + ' ' + (a.y + 36));
        S.rings.setAttribute('transform', 'translate(' + a.x + ' ' + (a.y - 50) + ')');
        var st = Math.max(0, 1 - Math.abs(x - a.x) / (a.r * (a.r > 60 ? .9 : .86))), nb = Math.max(1, Math.ceil(st * 4));
        S.bars.forEach(function (b, i) { b.setAttribute('fill', i < nb ? (nb <= 1 ? C.red : nb === 2 ? C.amber : C.brand) : '#c4ccd0'); });
        var nh = BOUND.filter(function (b) { return x >= b; }).length;
        S.badgeT.textContent = 'handover: ' + nh;
        if (S.cur && S.cur !== a && Math.abs(x - S.lastX) < 40) {
          var c = s('circle', { cx: a.x, cy: a.y - 14, r: 6, fill: 'none', stroke: C.amber, 'stroke-width': 4 }, svg);
          gsap.fromTo(c, { attr: { r: 6 }, opacity: 1 }, { attr: { r: 50 }, opacity: 0, duration: .9, ease: 'power2.out', onComplete: function () { c.remove(); } });
        }
        S.cur = a; S.lastX = x;
      };
      S.update();
      return S;
    },
    steps: [
      function (S, tl) {
        tl.to(S.P, { x: 196, duration: 3.4, ease: 'power1.inOut', onUpdate: S.update });
        tl.to(S.chipDebole, { opacity: 1, duration: .4 }, '-=.6');
      },
      function (S, tl) {
        tl.to(S.chipDebole, { opacity: 0, duration: .25 });
        tl.to(S.P, { x: 330, duration: 2.6, ease: 'power1.inOut', onUpdate: S.update }, '<');
        tl.to(S.chipHand, { opacity: 1, duration: .3 }, '-=1.9');
        tl.to(S.chipHand, { opacity: 0, duration: .4 }, '+=.7');
      },
      function (S, tl) {
        tl.to(S.P, { x: 650, duration: 5.2, ease: 'power1.inOut', onUpdate: S.update });
      },
      function (S, tl) {
        tl.to(S.phoneList, { opacity: 1, duration: .35, stagger: .05, ease: 'power2.out' });
        tl.to(S.chipPochi, { opacity: 1, duration: .5 }, '-=.4');
      }
    ]
  };

  /* ======================= spettro elettromagnetico ======================= */
  A.scene['f-spettro'] = {
    id: 'f-spettro',
    titolo: 'Onde non ionizzanti e ionizzanti',
    viewBox: [960, 512],
    aria: 'Lo spettro elettromagnetico, dalle onde radio ai raggi gamma, diviso da una soglia: a sinistra le onde non ionizzanti (radio, TV, 4G, 5G, Wi-Fi, microonde, luce visibile), a destra quelle ionizzanti (ultravioletti estremi, raggi X, raggi gamma). Il 5G, anche a 26 GHz, resta molto lontano dalla soglia.',
    inizio: 'Lo <b>spettro elettromagnetico</b>, dalle onde a bassa frequenza (a sinistra) a quelle ad alta frequenza ed energia (a destra).',
    passi: [
      'Dalle <b>onde radio</b> ai <b>raggi gamma</b>: la frequenza e l’energia crescono verso destra.',
      'Una <b>soglia</b> divide lo spettro: a sinistra le onde <b>non ionizzanti</b>, a destra le <b>ionizzanti</b>, con energia sufficiente a rompere i legami chimici e danneggiare il DNA.',
      '<b>4G, Wi-Fi e 5G</b> stanno tutti nella zona non ionizzante, accanto a radio e TV.',
      'Anche le <b>onde millimetriche a 26 GHz</b> del 5G restano molto lontane dalla soglia.',
      'L’unico effetto accertato delle onde radio, a intensità molto alte, è il <b>riscaldamento</b>: per evitarlo esistono i <b>limiti di esposizione</b>.'
    ],
    build: function (svg, Q) {
      var S = {}, Y = 262;
      s('rect', { width: 960, height: 512, fill: '#eef3f1' }, svg);
      var seg = [
        ['Radio e TV', 40, 230, '#8fbfd9'], ['Microonde', 230, 340, '#6fa9cb'], ['Infrarossi', 340, 440, '#e0b183'],
        ['Luce visibile', 440, 520, 'url(#arc' + Q.id + ')'], ['UV', 520, 585, '#a58ad6'],
        ['UV estremi', 585, 640, '#cf6a8a'], ['Raggi X', 640, 770, '#d4574b'], ['Raggi gamma', 770, 920, '#9a2f26']
      ];
      var lg = s('linearGradient', { id: 'arc' + Q.id, x1: 0, x2: 1, y1: 0, y2: 0 }, Q.defs);
      ['#e0544b', '#f0b13c', '#7ac36a', '#4aa3d4', '#7c5fc6'].forEach(function (c, i) { s('stop', { offset: i / 4, 'stop-color': c }, lg); });
      S.seg = [];
      var bar = g(svg, 0, 0, 1);
      seg.forEach(function (d) {
        var gg = g(bar, d[1], Y, 1);
        s('rect', { x: 0, y: 0, width: d[2] - d[1], height: 64, fill: d[3], stroke: '#fff', 'stroke-width': 2 }, gg);
        t(gg, (d[2] - d[1]) / 2, 86, d[0], { s: 13, c: C.ink });
        S.seg.push(gg);
      });
      S.sweep = s('rect', { x: 40, y: Y, width: 70, height: 64, fill: '#fff', opacity: 0 }, bar);
      /* asse della frequenza */
      S.asse = g(svg, 0, 0, 1);
      D.freccia(S.asse, 'M40 412H910M900 404L912 412L900 420', C.mute, 2.5);
      t(S.asse, 40, 438, 'bassa frequenza · poca energia', { a: 'start', s: 13, c: C.mute, w: 600 });
      t(S.asse, 920, 438, 'alta frequenza · molta energia', { a: 'end', s: 13, c: C.mute, w: 600 });
      /* zone e soglia */
      S.zone = g(svg, 0, 0, 1, { opacity: 0 });
      s('path', { d: 'M40 86V76H580V86', fill: 'none', stroke: C.brand, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, S.zone);
      t(S.zone, 310, 62, 'NON IONIZZANTI', { s: 17, c: C.brand, ls: 1.6, w: 700 });
      s('path', { d: 'M590 86V76H920V86', fill: 'none', stroke: C.red, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, S.zone);
      t(S.zone, 755, 62, 'IONIZZANTI', { s: 17, c: C.red, ls: 1.6, w: 700 });
      S.soglia = g(svg, 585, 0, 1, { opacity: 0 });
      s('line', { x1: 0, y1: 118, x2: 0, y2: 372, stroke: C.ink, 'stroke-width': 3, 'stroke-dasharray': '7 6' }, S.soglia);
      D.etichetta(S.soglia, 0, 106, 'soglia', { s: 14, w: 76, bg: '#fff' });
      S.sogliaNota = g(svg, 768, 190, 1, { opacity: 0 });
      t(S.sogliaNota, 0, 0, 'energia sufficiente a rompere', { s: 14, c: C.red });
      t(S.sogliaNota, 0, 19, 'i legami chimici e il DNA', { s: 14, c: C.red });
      /* marcatori 4G, Wi-Fi, 5G (su tre altezze per non sovrapporsi) */
      S.mark = [];
      [['4G', 240, 40], ['Wi-Fi', 270, 76], ['5G', 301, 40], ['5G · 26 GHz', 332, 112]].forEach(function (m) {
        var mg = g(svg, m[1], Y, 1, { opacity: 0 }), inn = g(mg, 0, 0, 1);
        s('line', { x1: 0, y1: 0, x2: 0, y2: -m[2] + 12, stroke: C.brand, 'stroke-width': 2 }, inn);
        s('circle', { cx: 0, cy: 0, r: 5, fill: C.brand, stroke: '#fff', 'stroke-width': 2 }, inn);
        D.etichetta(inn, 0, -m[2] + 2, m[0], { s: 13, bg: C.brandBg, line: C.brand, c: C.brand, w: m[0].length * 7.6 + 22 });
        S.mark.push(mg);
      });
      /* distanza 5G - soglia */
      S.dist = g(svg, 0, 0, 1, { opacity: 0 });
      D.freccia(S.dist, 'M336 378H580M346 370L336 378L346 386M570 370L580 378L570 386', C.amberDk, 3);
      D.etichetta(S.dist, 458, 378, 'molto lontano dalla soglia', { s: 14.5, bg: C.amberBg, line: C.amber, c: C.amberDk });
      /* riscaldamento */
      S.caldo = g(svg, 70, 478, 1, { opacity: 0 });
      s('rect', { x: -8, y: -24, width: 16, height: 38, rx: 8, fill: '#fff', stroke: C.red, 'stroke-width': 2.5 }, S.caldo);
      s('rect', { x: -3.5, y: -2, width: 7, height: 16, rx: 3.5, fill: C.red }, S.caldo);
      s('circle', { cx: 0, cy: 14, r: 10, fill: C.red }, S.caldo);
      t(S.caldo, 24, 0, 'a intensità molto alte: solo riscaldamento dei tessuti, evitato dai limiti di esposizione', { a: 'start', s: 14, c: C.ink });
      return S;
    },
    steps: [
      function (S, tl) {
        tl.fromTo(S.sweep, { opacity: .6, x: 0 }, { x: 850, duration: 2.6, ease: 'power1.inOut' });
        tl.to(S.sweep, { opacity: 0, duration: .4 }, '-=.5');
      },
      function (S, tl) {
        tl.to(S.zone, { opacity: 1, duration: .6 });
        tl.fromTo(S.soglia, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: .7, ease: 'bounce.out' }, '-=.2');
        tl.to(S.sogliaNota, { opacity: 1, duration: .5 }, '-=.2');
      },
      function (S, tl) {
        S.mark.forEach(function (m, i) {
          var inn = m.firstChild;
          tl.to(m, { opacity: 1, duration: .3 }, i * .5);
          tl.fromTo(inn, { y: 12, scale: .6 }, { y: 0, scale: 1, duration: .5, ease: 'back.out(2.4)' }, i * .5);
        });
      },
      function (S, tl) {
        tl.to(S.dist, { opacity: 1, duration: .7 });
        tl.fromTo(S.dist, { x: 14 }, { x: 0, duration: .7, ease: 'power2.out' }, '<');
      },
      function (S, tl) {
        tl.to(S.caldo, { opacity: 1, duration: .6 });
        tl.fromTo(S.caldo, { y: 490 }, { y: 478, duration: .6, ease: 'power2.out' }, '<');
      }
    ]
  };
})();
