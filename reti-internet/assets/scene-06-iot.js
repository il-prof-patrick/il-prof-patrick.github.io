/* Capitolo 6 · scene dell'Internet of Things: il ciclo del termostato, la botnet Mirai. */
(function () {
  var A = Anim2, s = A.s, t = A.t, g = A.g, C = A.C, D = A.D;

  /* ======================= il ciclo di un oggetto IoT ======================= */
  A.scene['f-iot'] = {
    id: 'f-iot',
    titolo: 'Il ciclo di un oggetto IoT',
    viewBox: [960, 500],
    aria: 'Una stanza con un termostato smart, una caldaia, un radiatore e una finestra; il termostato misura la temperatura, accende la caldaia, manda i dati al cloud e all’app sul telefono, si accorge dell’apertura della finestra e spegne la caldaia, poi riceve dal telefono un nuovo obiettivo.',
    inizio: 'Una stanza con un <b>termostato smart</b>, una caldaia e una finestra. In alto il <b>cloud</b> del produttore; fuori casa, un telefono con l’app.',
    passi: [
      'Il <b>sensore</b> misura 17 °C e il valore compare sul termostato.',
      'Il termostato confronta 17 °C con l’<b>obiettivo</b> (20 °C) e <b>accende la caldaia</b>, da solo.',
      'Il dato viaggia via Wi-Fi fino al <b>cloud</b> e l’app mostra «17 °C, riscaldamento acceso».',
      'Si apre la finestra: il sensore registra un <b>calo brusco</b> e il termostato spegne la caldaia da solo, mandando una <b>notifica</b>.',
      'Dal telefono l’utente alza l’obiettivo a <b>21 °C</b>: il comando passa dal cloud al termostato.'
    ],
    build: function (svg, Q) {
      var S = { T: { v: 17 } };
      s('rect', { width: 960, height: 500, fill: '#e6eff2' }, svg);
      s('rect', { y: 452, width: 960, height: 48, fill: '#cfe3c0' }, svg);
      /* casa in sezione */
      s('path', { d: 'M40 176L320 84L600 176Z', fill: '#c9674a', stroke: '#a8513a', 'stroke-width': 3, 'stroke-linejoin': 'round' }, svg);
      s('rect', { x: 60, y: 176, width: 520, height: 276, fill: '#f6ecd8', stroke: '#cdb58a', 'stroke-width': 6 }, svg);
      s('rect', { x: 66, y: 418, width: 508, height: 34, fill: '#d6bd8c' }, svg);
      s('path', { d: 'M66 418H574', stroke: '#c0a572', 'stroke-width': 2 }, svg);
      /* finestra con anta apribile */
      s('rect', { x: 96, y: 200, width: 118, height: 146, rx: 3, fill: '#fff', stroke: C.wood, 'stroke-width': 5 }, svg);
      s('rect', { x: 106, y: 210, width: 98, height: 126, fill: '#bfdcea' }, svg);
      S.sash = g(svg, 0, 0, 1);
      s('rect', { x: 106, y: 210, width: 98, height: 126, fill: '#cfe6ee', stroke: C.wood, 'stroke-width': 3 }, S.sash);
      s('path', { d: 'M155 210V336M106 273H204', stroke: C.wood, 'stroke-width': 3 }, S.sash);
      s('path', { d: 'M114 226L134 214', stroke: '#fff', 'stroke-width': 4, 'stroke-linecap': 'round', opacity: .7 }, S.sash);
      /* radiatore e tubo */
      S.rad = g(svg, 155, 384, 1);
      s('rect', { x: -52, y: -24, width: 104, height: 46, rx: 6, fill: '#c5cdd2', stroke: '#9aa7ae', 'stroke-width': 2 }, S.rad);
      S.radFins = [];
      for (var i = 0; i < 7; i++) S.radFins.push(s('rect', { x: -46 + i * 14.5, y: -18, width: 9, height: 34, rx: 4, fill: '#e3e8eb' }, S.rad));
      s('path', { d: 'M52 8H318', stroke: '#9aa7ae', 'stroke-width': 7, transform: 'translate(155 384)', fill: 'none' }, svg);
      S.caldoOnda = g(svg, 155, 336, 1, { opacity: 0 });
      [-30, 0, 30].forEach(function (x) { s('path', { d: 'M' + x + ' 0Q' + (x - 8) + ' -10 ' + x + ' -20T' + x + ' -40', fill: 'none', stroke: C.amber, 'stroke-width': 3.5, 'stroke-linecap': 'round' }, S.caldoOnda); });
      /* caldaia */
      var cd = g(svg, 504, 360, 1);
      s('rect', { x: -44, y: -62, width: 88, height: 126, rx: 8, fill: '#f4f6f7', stroke: '#9aa7ae', 'stroke-width': 3 }, cd);
      s('rect', { x: -30, y: -50, width: 60, height: 24, rx: 4, fill: '#2c3b3a' }, cd);
      S.cdLed = s('circle', { cx: 18, cy: -38, r: 4, fill: '#7d8f9d' }, cd);
      t(cd, -4, -33, 'caldaia', { s: 10.5, c: '#9fb0b8', w: 600 });
      s('rect', { x: -30, y: -12, width: 60, height: 62, rx: 6, fill: '#e3e8eb' }, cd);
      S.fiamma = g(cd, 0, 38, 1, { opacity: 0 });
      s('path', { d: 'M0 -34Q16 -14 14 0Q12 12 0 12Q-12 12 -14 0Q-14 -10 -6 -18Q-6 -8 0 -4Q-4 -20 0 -34Z', fill: '#f08a24' }, S.fiamma);
      s('path', { d: 'M0 -14Q8 -4 6 4Q4 10 0 10Q-6 10 -6 4Q-6 -4 0 -14Z', fill: '#ffd36b' }, S.fiamma);
      /* router e wifi */
      var rt = g(svg, 410, 408, 1);
      s('rect', { x: -26, y: -6, width: 52, height: 14, rx: 4, fill: '#34495b' }, rt);
      s('path', { d: 'M-16 -6L-20 -22M16 -6L20 -22', stroke: '#34495b', 'stroke-width': 3, 'stroke-linecap': 'round' }, rt);
      [[-10, 0], [0, 0], [10, 0]].forEach(function (a) { s('circle', { cx: a[0], cy: 2, r: 2, fill: '#2fc4b2' }, rt); });
      t(svg, 410, 440, 'router', { s: 12, c: C.mute, w: 600 });
      /* termostato */
      S.th = g(svg, 300, 262, 1);
      s('rect', { x: -46, y: -46, width: 92, height: 92, rx: 18, fill: '#fff', stroke: '#9aa7ae', 'stroke-width': 3, filter: Q.ombra }, S.th);
      S.thCerchio = s('circle', { cx: 0, cy: 0, r: 37, fill: '#eaf2f5', stroke: '#bfd0d8', 'stroke-width': 3 }, S.th);
      S.thT = t(S.th, 0, 12, '--', { s: 23, c: C.ink, w: 700 });
      S.thO = t(S.th, 0, -15, '', { s: 10.5, c: C.brand, w: 700 });
      s('circle', { cx: 36, cy: -36, r: 3.5, fill: C.brand2 }, S.th);
      t(svg, 300, 326, 'termostato smart', { s: 12.5, c: C.mute, w: 600 });
      S.sensore = g(svg, 300, 262, 1, { opacity: 0 });
      s('circle', { r: 56, fill: 'none', stroke: C.blue, 'stroke-width': 3 }, S.sensore);
      /* aria fredda dalla finestra */
      S.freddo = g(svg, 0, 0, 1, { opacity: 0 });
      [[120, 250], [120, 290], [120, 322]].forEach(function (p, i) {
        s('path', { d: 'M' + p[0] + ' ' + p[1] + 'H' + (p[0] + 70) + 'M' + (p[0] + 60) + ' ' + (p[1] - 8) + 'L' + (p[0] + 72) + ' ' + p[1] + 'L' + (p[0] + 60) + ' ' + (p[1] + 8), fill: 'none', stroke: C.blue, 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, S.freddo);
      });
      /* cloud */
      D.nuvola(svg, 770, 112, 1.25, '#fff');
      var cs = g(svg, 770, 106, .6); D.server(cs, -18, 0, .8, { led: C.brand2 }); D.server(cs, 18, 0, .8, { led: C.amber });
      t(svg, 770, 176, 'cloud del produttore', { s: 13.5, c: C.mute });
      /* telefono dell'utente */
      S.ph = g(svg, 830, 332, 1);
      s('rect', { x: -48, y: -102, width: 96, height: 204, rx: 18, fill: '#2c3b3a', filter: Q.ombra }, S.ph);
      s('rect', { x: -42, y: -92, width: 84, height: 184, rx: 10, fill: '#f4f7fa' }, S.ph);
      s('rect', { x: -42, y: -92, width: 84, height: 22, rx: 10, fill: C.brand }, S.ph);
      t(S.ph, 0, -76, 'Termostato', { s: 11.5, c: '#fff', w: 700 });
      S.phT = t(S.ph, 0, -26, '— °C', { s: 22, c: C.ink, w: 700 });
      S.phS = t(S.ph, 0, -6, '', { s: 11, c: C.brand, w: 700 });
      S.phObj = g(S.ph, 0, 40, 1);
      s('rect', { x: -34, y: -18, width: 68, height: 38, rx: 8, fill: '#fff', stroke: '#cfd8dc', 'stroke-width': 1.5 }, S.phObj);
      t(S.phObj, 0, -4, 'obiettivo', { s: 10.5, c: C.mute, w: 600 });
      S.phObjT = t(S.phObj, 0, 14, '20 °C', { s: 15, c: C.ink, w: 700 });
      S.phTap = s('circle', { cx: 24, cy: 60, r: 0, fill: C.amber, opacity: .8 }, S.ph);
      S.notif = g(S.ph, 0, -112, 1, { opacity: 0 });
      s('rect', { x: -44, y: -20, width: 88, height: 40, rx: 9, fill: '#fff', stroke: C.amber, 'stroke-width': 2.5 }, S.notif);
      t(S.notif, 0, -4, 'Finestra aperta', { s: 11, c: C.ink, w: 700 });
      t(S.notif, 0, 11, 'caldaia spenta', { s: 11, c: C.amberDk, w: 600 });
      t(svg, 830, 456, 'app sul telefono', { s: 13.5, c: C.mute });
      /* pacchetto */
      S.dot = g(svg, 0, 0, 1, { opacity: 0 });
      s('circle', { r: 11, fill: C.amber, opacity: .35 }, S.dot); s('circle', { r: 6, fill: C.amber, stroke: '#fff', 'stroke-width': 2 }, S.dot);
      S.rUp = A.rotta(svg, ['M300 262L408 400', 'M408 400Q600 220 748 128', 'M790 140Q828 200 830 232']);
      S.rDown = A.rotta(svg, ['M830 232Q828 200 790 140', 'M748 128Q600 220 408 400', 'M408 400L300 262']);
      S.rUp1 = A.rotta(svg, ['M300 262L408 400', 'M408 400Q600 220 748 128']);
      S.P = { f: 0 };
      S.fmt = function (v) { return v.toFixed(1).replace('.', ',') + '°'; };
      return S;
    },
    steps: [
      function (S, tl) {
        tl.fromTo(S.sensore, { opacity: .9, scale: .4}, { opacity: 0, scale: 1.3, duration: 1.2, ease: 'power2.out' });
        tl.call(function () { S.thT.textContent = S.fmt(17); });
        tl.fromTo(S.thT, { scale: .6}, { scale: 1, duration: .5, ease: 'back.out(3)' }, '<');
        tl.set(S.thCerchio, { stroke: C.blue });
        tl.to(S.thCerchio, { attr: { fill: '#d8e9f3' }, duration: .5 }, '<');
      },
      function (S, tl) {
        tl.call(function () { S.thO.textContent = 'obiettivo 20°'; });
        tl.fromTo(S.thO, { opacity: 0 }, { opacity: 1, duration: .5 }, '<');
        tl.to(S.thCerchio, { attr: { stroke: C.amber }, duration: .3 }, '+=.3');
        tl.to(S.cdLed, { attr: { fill: '#2fc4b2' }, duration: .2 }, '+=.2');
        tl.fromTo(S.fiamma, { opacity: 0, scale: .2, transformOrigin: '50% 100%' }, { opacity: 1, scale: 1, duration: .6, ease: 'back.out(2)' }, '<');
        tl.to(S.radFins, { attr: { fill: '#f6c36a' }, duration: .9, stagger: .08 }, '-=.2');
        tl.to(S.caldoOnda, { opacity: 1, duration: .5 }, '-=.6');
        tl.to(S.caldoOnda, { y: -6, duration: .6, yoyo: true, repeat: 3, ease: 'sine.inOut' }, '<');
      },
      function (S, tl) {
        tl.set(S.dot, { opacity: 1 });
        tl.to(S.P, { f: 1, duration: 2.6, ease: 'power1.inOut', onUpdate: function () { A.muovi(S.dot, S.rUp, S.P); } });
        tl.set(S.dot, { opacity: 0 });
        tl.call(function () { S.phT.textContent = '17 °C'; S.phS.textContent = 'caldaia accesa'; });
        tl.fromTo([S.phT, S.phS], { opacity: 0 }, { opacity: 1, duration: .5 });
      },
      function (S, tl) {
        tl.to(S.sash, { scaleX: .22, svgOrigin: '106 273', duration: .9, ease: 'power2.inOut' });
        tl.to(S.freddo, { opacity: 1, duration: .5 }, '-=.4');
        tl.to(S.freddo, { x: 24, duration: .9, repeat: 1, yoyo: true, ease: 'sine.inOut' }, '<');
        var o = { v: 17 };
        tl.to(o, { v: 13.6, duration: 1.6, ease: 'power2.in', onUpdate: function () { S.thT.textContent = S.fmt(o.v); } }, '-=.8');
        tl.to(S.thCerchio, { attr: { stroke: C.blue, fill: '#c8e0ee' }, duration: .6 }, '-=.4');
        tl.to(S.fiamma, { opacity: 0, scale: .2, transformOrigin: '50% 100%', duration: .5 }, '-=.3');
        tl.to(S.cdLed, { attr: { fill: '#7d8f9d' }, duration: .2 }, '<');
        tl.to(S.radFins, { attr: { fill: '#e3e8eb' }, duration: .7, stagger: .06 }, '<');
        tl.to(S.caldoOnda, { opacity: 0, duration: .4 }, '<');
        tl.set(S.dot, { opacity: 1 }, '+=.1');
        tl.to(S.P, { f: 1, duration: 2.2, ease: 'power1.inOut', onUpdate: function () { A.muovi(S.dot, S.rUp, S.P); } }, '<');
        tl.set(S.dot, { opacity: 0 });
        tl.call(function () { S.phT.textContent = '13,6 °C'; S.phS.textContent = 'caldaia spenta'; });
        tl.fromTo(S.notif, { opacity: 0, y: -126 }, { opacity: 1, y: -112, duration: .5, ease: 'back.out(2)' });
        tl.to(S.ph, { rotation: 3, svgOrigin: '830 332', duration: .08, repeat: 5, yoyo: true }, '<');
      },
      function (S, tl) {
        tl.to(S.notif, { opacity: 0, duration: .3 });
        tl.to(S.sash, { scaleX: 1, svgOrigin: '106 273', duration: .8, ease: 'power2.inOut' }, '<');
        tl.to(S.freddo, { opacity: 0, duration: .3 }, '<');
        tl.call(function () { S.phObjT.textContent = '21 °C'; });
        tl.fromTo(S.phTap, { attr: { r: 0 }, opacity: .9 }, { attr: { r: 22 }, opacity: 0, duration: .6 }, '+=.2');
        tl.fromTo(S.phObjT, { scale: .6}, { scale: 1, duration: .5, ease: 'back.out(3)' }, '<');
        tl.set(S.P, { f: 0 });
        tl.set(S.dot, { opacity: 1 });
        tl.to(S.P, { f: 1, duration: 3, ease: 'power1.inOut', onUpdate: function () { A.muovi(S.dot, S.rDown, S.P); } });
        tl.set(S.dot, { opacity: 0 });
        tl.call(function () { S.thO.textContent = 'obiettivo 21°'; });
        tl.fromTo(S.thO, { opacity: .2 }, { opacity: 1, duration: .5 }, '<');
        tl.to(S.thCerchio, { attr: { stroke: C.amber, fill: '#f6e6c9' }, duration: .4 }, '<');
        tl.to(S.cdLed, { attr: { fill: '#2fc4b2' }, duration: .2 }, '+=.2');
        tl.fromTo(S.fiamma, { opacity: 0, scale: .2, transformOrigin: '50% 100%' }, { opacity: 1, scale: 1, duration: .6, ease: 'back.out(2)' }, '<');
        tl.to(S.radFins, { attr: { fill: '#f6c36a' }, duration: .8, stagger: .08 }, '<');
        tl.to(S.caldoOnda, { opacity: 1, duration: .5 }, '<');
        tl.call(function () { S.phS.textContent = 'caldaia accesa'; });
      }
    ]
  };

  /* ======================= la botnet Mirai ======================= */
  A.scene['f-mirai'] = {
    id: 'f-mirai',
    titolo: 'Mirai: la botnet fatta di videocamere',
    viewBox: [960, 500],
    aria: 'Un malware prova password predefinite sulle videocamere collegate a Internet, le infetta e le trasforma in una botnet; i dispositivi infetti sommergono di richieste il server DNS di Dyn, e siti famosi diventano irraggiungibili.',
    inizio: 'Videocamere e videoregistratori collegati a Internet, quasi tutti con la <b>password predefinita</b> mai cambiata. In alto, chi scrive il malware.',
    passi: [
      'Il malware prova a entrare nei dispositivi con le <b>password predefinite</b>, come «admin/admin». In molti casi funziona.',
      'I dispositivi diventano una <b>botnet</b>, un esercito controllato a distanza. Funzionano come prima e <b>i proprietari non si accorgono di nulla</b>.',
      'A un ordine, tutti inviano richieste insieme al fornitore di <b>DNS Dyn</b>: il server è sommerso.',
      'Senza il DNS i siti non si trovano: <b>Twitter, Netflix, Spotify</b> e altri restano irraggiungibili per ore.'
    ],
    build: function (svg, Q) {
      var S = { dev: [] };
      s('rect', { width: 960, height: 500, fill: '#e9eef0' }, svg);
      s('rect', { x: 28, y: 74, width: 420, height: 398, rx: 14, fill: '#f7fafb', stroke: C.line, 'stroke-width': 2 }, svg);
      t(svg, 238, 62, 'dispositivi collegati a Internet', { s: 13, c: C.mute, ls: 1 });
      var nom = ['videocamera', 'videoregistratore'];
      for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 4; c++) {
          var idx = r * 4 + c, x = 86 + c * 95, y = 150 + r * 112, dg = g(svg, x, y, 1);
          var body = g(dg, 0, 0, 1);
          if ((r + c) % 2 === 0) D.camera(body, 0, 0, 1); else {
            s('rect', { x: -26, y: -12, width: 52, height: 26, rx: 4, fill: '#e9eef0', stroke: C.steel, 'stroke-width': 2 }, body);
            s('rect', { x: -19, y: -6, width: 22, height: 5, rx: 2, fill: '#9fb0b8' }, body);
            s('circle', { class: 'led', cx: 17, cy: -3, r: 2.6, fill: '#2fc4b2' }, body);
            t(body, 0, 10, 'DVR', { s: 9, c: C.mute, w: 700 });
          }
          var lock = g(dg, 0, -26, 1);
          s('path', { d: 'M-5 0V-5Q-5 -11 0 -11Q5 -11 5 -5V0', fill: 'none', stroke: C.steel, 'stroke-width': 2.4 }, lock);
          s('rect', { x: -7, y: 0, width: 14, height: 10, rx: 2, fill: C.steel }, lock);
          var tag = g(dg, 0, 34, 1, { opacity: 0 });
          s('rect', { x: -38, y: -9, width: 76, height: 18, rx: 9, fill: C.amberBg, stroke: C.amber, 'stroke-width': 1.5 }, tag);
          t(tag, 0, 4, 'admin/admin', { s: 10.5, c: C.amberDk, w: 700 });
          S.dev.push({ g: dg, body: body, lock: lock, tag: tag, x: x, y: y });
        }
      }
      S.tuoi = g(svg, 238, 452, 1, { opacity: 0 });
      D.etichetta(S.tuoi, 0, -8, 'il proprietario non si accorge di nulla', { s: 13.5, bg: '#fff', c: C.mute, w: 292 });
      /* internet, chi comanda, Dyn, siti */
      D.nuvola(svg, 560, 262, 1.15, '#fff'); t(svg, 560, 270, 'Internet', { s: 15, c: C.mute });
      S.cc = g(svg, 640, 100, 1); D.laptop(S.cc, 0, 0, 1.25, { screen: '#3b1d1a' });
      t(S.cc, 0, 52, 'chi comanda la botnet', { s: 13.5, c: C.red });
      s('text', { x: 0, y: 10, 'text-anchor': 'middle', 'font-size': 15, fill: '#ff8a7a', 'font-family': 'monospace', 'font-weight': 700, transform: 'translate(0 -4) scale(1.25)' }, S.cc).textContent = '>_';
      S.dyn = g(svg, 850, 262, 1);
      S.dynS = D.server(S.dyn, 0, 0, 1.4, { led: C.brand2 });
      t(S.dyn, 0, 66, 'Dyn · server DNS', { s: 14.5, c: C.ink });
      var barra = g(S.dyn, 0, 84, 1);
      s('rect', { x: -48, y: -6, width: 96, height: 12, rx: 6, fill: '#dfe7ea' }, barra);
      S.carico = s('rect', { x: -48, y: -6, width: 4, height: 12, rx: 6, fill: C.brand2 }, barra);
      t(S.dyn, 0, 112, 'richieste al secondo', { s: 11.5, c: C.mute, w: 500 });
      S.siti = [];
      ['Twitter', 'Netflix', 'Spotify'].forEach(function (n, i) {
        var sg = g(svg, 620 + i * 110, 408, 1);
        s('rect', { x: -48, y: -26, width: 96, height: 52, rx: 9, fill: '#fff', stroke: C.line, 'stroke-width': 2, filter: Q.ombra }, sg);
        var col = ['#4aa3d4', '#d4574b', '#4fae6a'][i];
        s('rect', { x: -48, y: -26, width: 96, height: 12, rx: 9, fill: col }, sg); s('rect', { x: -48, y: -20, width: 96, height: 6, fill: col }, sg);
        t(sg, 0, 10, n, { s: 15, c: C.ink, w: 700 });
        var no = g(sg, 0, 0, 1, { opacity: 0 });
        s('rect', { x: -48, y: -26, width: 96, height: 52, rx: 9, fill: '#8d979c' }, no);
        t(no, 0, -2, 'irraggiungibile', { s: 12, c: '#fff', w: 700 });
        S.siti.push({ g: sg, no: no });
      });
      S.utente = g(svg, 520, 408, 1); D.laptop(S.utente, 0, 0, .9); t(S.utente, 0, 40, 'utente', { s: 12.5, c: C.mute });
      S.tempo = g(svg, 840, 458, 1, { opacity: 0 }); D.etichetta(S.tempo, 0, 0, 'per ore', { s: 14, bg: C.redBg, line: C.red, c: C.red });
      /* effetti */
      S.fx = g(svg, 0, 0, 1);
      S.rDyn = S.dev.map(function (d) { return A.rotta(svg, ['M' + (d.x + 18) + ' ' + d.y + 'Q' + (d.x + 180) + ' ' + (d.y + 30) + ' 560 262', 'M560 262L822 262']); });
      return S;
    },
    steps: [
      function (S, tl, Q) {
        S.dev.forEach(function (d, i) {
          var dot = s('circle', { r: 5, fill: C.red, opacity: 0, cx: 640, cy: 150 }, S.fx);
          tl.fromTo(dot, { opacity: 1, attr: { cx: 640, cy: 150 } }, { attr: { cx: d.x, cy: d.y - 10 }, duration: .55, ease: 'power1.in' }, i * .22);
          tl.set(dot, { opacity: 0 }, i * .22 + .56);
          tl.to(d.lock.firstChild, { y: -4, rotation: -30, transformOrigin: '0% 100%', duration: .25 }, i * .22 + .5);
          tl.fromTo(d.tag, { opacity: 0, y: 40 }, { opacity: 1, y: 34, duration: .3, ease: 'back.out(2)' }, i * .22 + .52);
        });
      },
      function (S, tl) {
        S.dev.forEach(function (d, i) {
          tl.to(d.body, { opacity: 1, duration: .01 }, i * .12);
          tl.call(function () { Array.prototype.forEach.call(d.body.querySelectorAll('rect'), function (r) { if (r.getAttribute('fill') === '#e9eef0') r.setAttribute('fill', C.redBg); }); }, null, i * .12);
          tl.to(d.tag, { opacity: 0, duration: .2 }, i * .12);
          tl.fromTo(d.g, { scale: 1.12}, { scale: 1, duration: .4, ease: 'back.out(3)' }, i * .12);
        });
        tl.to(S.tuoi, { opacity: 1, duration: .5 }, '-=.3');
      },
      function (S, tl) {
        S.dev.forEach(function (d, i) {
          var l = s('path', { d: 'M640 150L' + d.x + ' ' + (d.y - 10), fill: 'none', stroke: C.red, 'stroke-width': 2.5, 'stroke-dasharray': '4 6', opacity: 0 }, S.fx);
          tl.to(l, { opacity: .8, duration: .25 }, i * .04);
          tl.to(l, { opacity: 0, duration: .4 }, .6 + i * .04);
        });
        var car = { v: 0 };
        for (var w = 0; w < 3; w++) {
          S.dev.forEach(function (d, i) {
            var dot = s('circle', { r: 4.5, fill: C.red, opacity: 0 }, S.fx), P = { f: 0 };
            tl.set(dot, { opacity: 1 }, 1 + w * 1.1 + i * .06);
            tl.to(P, { f: 1, duration: 1.4, ease: 'power1.in', onUpdate: function () { var p = S.rDyn[i].pt(P.f); dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y); } }, 1 + w * 1.1 + i * .06);
            tl.set(dot, { opacity: 0 }, 2.4 + w * 1.1 + i * .06);
          });
        }
        tl.to(car, { v: 1, duration: 3.2, ease: 'power1.in', onUpdate: function () { S.carico.setAttribute('width', 4 + 92 * car.v); S.carico.setAttribute('fill', car.v > .6 ? C.red : C.brand2); } }, 1.6);
        tl.to(S.dyn, { x: '+=3', duration: .06, repeat: 24, yoyo: true }, 3);
        tl.to(S.dynS, { opacity: .85, duration: .2 }, '<');
        tl.call(function () { Array.prototype.forEach.call(S.dynS.querySelectorAll('.led'), function (l) { l.setAttribute('fill', C.red); }); }, null, 3.2);
      },
      function (S, tl) {
        var dot = s('circle', { r: 6, fill: C.blue, opacity: 0, stroke: '#fff', 'stroke-width': 2 }, S.fx), P = { f: 0 };
        var ru = A.rotta(S.fx, ['M520 392Q540 300 560 262', 'M560 262L822 262']);
        tl.set(dot, { opacity: 1 });
        tl.to(P, { f: 1, duration: 1.8, ease: 'power1.inOut', onUpdate: function () { var p = ru.pt(P.f); dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y); } });
        tl.to(dot, { attr: { fill: C.red }, duration: .2 }, '-=.2');
        tl.to(dot, { opacity: 0, duration: .3 });
        var x = s('path', { d: 'M838 250L862 274M862 250L838 274', stroke: C.red, 'stroke-width': 6, 'stroke-linecap': 'round', opacity: 0 }, S.fx);
        tl.fromTo(x, { opacity: 0, scale: .3 }, { opacity: 1, scale: 1, duration: .4, ease: 'back.out(3)' }, '-=.3');
        S.siti.forEach(function (st, i) { tl.to(st.no, { opacity: 1, duration: .4 }, '+=' + (i ? 0 : .2)); });
        tl.to(S.tempo, { opacity: 1, duration: .5 });
      }
    ]
  };
})();
