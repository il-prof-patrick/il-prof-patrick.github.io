/* Capitolo 06 · widget e demo dei temi (un blocco per tema, numerati come i vecchi capitoli del modulo CSS) */
/* Capitolo 6 · Sfondi, bordi e ombre — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  var FOTO = 'assets/immagini/arduino.jpg', FOTO480 = 'assets/immagini/arduino-480.jpg';
  /* ===================== 6.3 · le immagini di sfondo ===================== */
  var BS = 'h2 {\n  color: white;\n  font-family: Arial, sans-serif;\n}\n';
  K.demo('w6_sfondo', {
    titolo: 'La stessa foto di sfondo, sei impostazioni',
    inizio: 'Un riquadro largo e basso con la foto della scheda Arduino come sfondo, **dimensione `auto`**: la foto è più grande del riquadro e se ne vede solo l’angolo in alto a sinistra.',
    html: '<div class="riquadro"><h2>Corso di Arduino</h2></div>', altezza: 220,
    css0: '.riquadro {\n  height: 180px;\n  background-image: url("arduino.jpg");\n}',
    vero: function (c) { return c.replace(/url\("arduino\.jpg"\)/g, 'url("' + FOTO480 + '")') + '\n.riquadro{border:1px dashed #9aa8b6}h2{margin:0;padding:12px}'; },
    passi: [
      { desc: '`background-size: cover`: la foto **riempie tutto** il riquadro mantenendo le proporzioni; quello che avanza viene **tagliato** (qui sopra e sotto).',
        css: '.riquadro {\n  height: 180px;\n  background-image: url("arduino.jpg");\n  background-size: cover;\n}', segna: { 4: 'nuova' } },
      { desc: '`background-size: contain`: la foto si vede **tutta**, ma restano dei **vuoti** ai lati, riempiti dal colore di sfondo. Senza `no-repeat` la foto si ripeterebbe nei vuoti.',
        css: '.riquadro {\n  height: 180px;\n  background-color: #dfe5eb;\n  background-image: url("arduino.jpg");\n  background-size: contain;\n  background-repeat: no-repeat;\n}', segna: { 3: 'nuova', 5: 'nuova', 6: 'nuova' } },
      { desc: '`background-position`: dove sta la foto. Qui è piccola (`background-size: 40%`) e messa **in basso a destra**.',
        css: '.riquadro {\n  height: 180px;\n  background-color: #dfe5eb;\n  background-image: url("arduino.jpg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: right bottom;\n}', segna: { 5: 'nuova', 7: 'nuova' } },
      { desc: '`background-repeat: repeat-x`: la foto si **ripete in orizzontale**, come una striscia di francobolli. Con `repeat` (il valore iniziale) si ripete in tutte e due le direzioni.',
        css: '.riquadro {\n  height: 180px;\n  background-color: #dfe5eb;\n  background-image: url("arduino.jpg");\n  background-size: 120px;\n  background-repeat: repeat-x;\n}', segna: { 5: 'nuova', 6: 'nuova' } },
      { desc: '**Due sfondi** separati da una virgola: il **primo sta sopra**. Un gradiente scuro e trasparente sopra la foto rende leggibile il titolo bianco.',
        css: '.riquadro {\n  height: 180px;\n  background-image:\n    linear-gradient(rgb(0 0 0 / 0.6), transparent),\n    url("arduino.jpg");\n  background-size: cover;\n}', segna: { 4: 'nuova', 5: 'nuova' } }
    ].map(function (p) { p.css = BS + p.css; var s = {}; Object.keys(p.segna).forEach(function (k) { s[+k + 4] = p.segna[k]; }); p.segna = s; return p; })
  });

  /* ===================== 6.4 · Prova tu: i gradienti ===================== */
  W.registra('w6_gradiente', function (el) {
    var b = W.base(el, 'Prova tu · costruisci un gradiente', 'tipo, angolo, colori');
    var tipo = 'linear', ang = 90, c = ['#0f8d80', '#e9a313', '#d14b8f'], tre = false;
    b.ctrl.appendChild(W.scelta([['linear', 'lineare'], ['radial', 'radiale'], ['conic', 'conico']], tipo, function (v) { tipo = v; disegna(); }));
    var cA = W.cursore('angolo', 0, 360, ang, 5, function (v) { ang = v; disegna(); }, function (v) { return v + 'deg'; });
    b.ctrl.appendChild(cA);
    var riga = W.h('div', { 'class': 'wid-comandi' });
    c.forEach(function (x, i) {
      var inp = W.h('input', { type: 'color', value: x, 'aria-label': 'colore ' + (i + 1) });
      inp.oninput = function () { c[i] = inp.value; disegna(); };
      riga.appendChild(W.h('label', { 'class': 'kit-casella' }, [inp, W.h('span', { testo: 'colore ' + (i + 1) })]));
    });
    riga.appendChild(K.casella('usa il terzo colore', tre, function (v) { tre = v; disegna(); }));
    el.appendChild(riga);
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css'); var box = W.h('div', { 'class': 'w6g-box' });
    g.appendChild(f); g.appendChild(box); el.appendChild(g); b.chiudi();
    function disegna() {
      var cols = (tre ? c : c.slice(0, 2)).join(', ');
      var v = tipo === 'linear' ? 'linear-gradient(' + ang + 'deg, ' + cols + ')' : tipo === 'radial' ? 'radial-gradient(circle, ' + cols + ')' : 'conic-gradient(from ' + ang + 'deg, ' + cols + (tre ? '' : ', ' + c[0]) + ')';
      cA.style.opacity = tipo === 'radial' ? 0.4 : 1; cA.input.disabled = tipo === 'radial';
      f.metti('.banner {\n  background-image:\n    ' + v + ';\n}', { 3: 'nuova' });
      box.style.backgroundImage = v;
      b.dica(tipo === 'linear' ? 'Gradiente lineare: i colori sfumano lungo una retta; 0deg va verso l’alto, 90deg verso destra, 180deg verso il basso.' : tipo === 'radial' ? 'Gradiente radiale: i colori sfumano dal centro verso l’esterno, a cerchi.' : 'Gradiente conico: i colori girano intorno al centro come le lancette; serve per torte e ruote di colore.', 'ok');
    }
    disegna();
  });

  /* ===================== 6.5 · border contro outline ===================== */
  W.registra('w6_bordo', function (el) {
    var b = W.base(el, 'Prova tu · border o outline?', 'scegli e guarda i vicini');
    var modo = 'niente';
    b.ctrl.appendChild(W.scelta([['niente', 'niente'], ['border', 'border: 6px solid'], ['outline', 'outline: 6px solid']], modo, function (v) { modo = v; disegna(); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css'); var a = K.anteprima({ altezza: 110, barra: false });
    g.appendChild(f); g.appendChild(a); el.appendChild(g); b.chiudi();
    function disegna() {
      var d = modo === 'niente' ? '' : '  ' + modo + ': 6px solid crimson;';
      var c = '.scelto {\n' + (d || '  /* nessun contorno */') + '\n}';
      f.metti(c, { 2: 'nuova' });
      a.metti('<span class="t">Arduino</span><span class="t scelto">Stampa 3D</span><span class="t">Robot</span><span class="t">Droni</span>', 'body{padding:24px 14px;font:16px Arial,sans-serif}.t{display:inline-block;padding:8px 12px;background:#e3ecfb;margin-right:6px;border-radius:2px}' + c);
      b.dica(modo === 'border' ? 'Il bordo occupa spazio: la casella diventa più grande e spinge a destra «Robot» e «Droni».' : modo === 'outline' ? 'L’outline è disegnato sopra, fuori dalla casella, e non occupa spazio: i vicini restano fermi (può anche coprirli).' : 'Quattro caselle in fila. Scegli border o outline per la seconda e guarda che cosa fanno le altre.', modo === 'niente' ? '' : 'ok');
    }
    disegna();
  });

  /* ===================== 6.6 · costruisci l'ombra ===================== */
  W.registra('w6_ombra', function (el) {
    var b = W.base(el, 'Prova tu · costruisci l’ombra', 'cursori e preset');
    var S = { x: 0, y: 8, s: 24, d: 0, o: 25, i: false };
    var PRE = { netta: { x: 6, y: 6, s: 0, d: 0, o: 30, i: false }, morbida: { x: 0, y: 8, s: 24, d: 0, o: 25, i: false }, interna: { x: 0, y: 4, s: 12, d: 0, o: 30, i: true } };
    var gp = W.scelta([['netta', 'Netta'], ['morbida', 'Morbida'], ['interna', 'Interna']], 'morbida', function (k) { S = Object.assign({}, PRE[k]); sync(); disegna(); });
    b.ctrl.appendChild(gp);
    var cc = {};
    var com = W.h('div', { 'class': 'wid-comandi' });
    [['x', 'spostamento x', -40, 40, 'px'], ['y', 'spostamento y', -40, 40, 'px'], ['s', 'sfocatura', 0, 60, 'px'], ['d', 'diffusione', -20, 20, 'px'], ['o', 'opacità del nero', 0, 100, '%']].forEach(function (d) {
      cc[d[0]] = W.cursore(d[1], d[2], d[3], S[d[0]], 1, function (v) { S[d[0]] = v; gp.imposta(''); disegna(); }, function (v) { return v + d[4]; });
      com.appendChild(cc[d[0]]);
    });
    var ci = K.casella('inset (ombra interna)', S.i, function (v) { S.i = v; gp.imposta(''); disegna(); });
    com.appendChild(ci); el.appendChild(com);
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css'); var fondo = W.h('div', { 'class': 'w6o-fondo' }, [W.h('div', { 'class': 'w6o-card', testo: 'Card' })]);
    g.appendChild(f); g.appendChild(fondo); el.appendChild(g); b.chiudi();
    function sync() { ['x', 'y', 's', 'd', 'o'].forEach(function (k) { cc[k].input.value = S[k]; cc[k].out.textContent = S[k] + (k === 'o' ? '%' : 'px'); }); ci.input.checked = S.i; }
    function disegna() {
      var v = (S.i ? 'inset ' : '') + S.x + 'px ' + S.y + 'px ' + S.s + 'px ' + S.d + 'px rgb(0 0 0 / ' + S.o + '%)';
      f.metti('.card {\n  box-shadow: ' + v + ';\n}', { 2: 'nuova' });
      fondo.firstChild.style.boxShadow = v;
      b.dica('x e y spostano l’ombra, la sfocatura la rende morbida (0 = netta), la diffusione la allarga o la restringe, inset la mette dentro. L’ombra non sposta nulla nella pagina.', 'ok');
    }
    disegna();
  });

  /* ===================== 6.7 · object-fit e max-width ===================== */
  W.registra('w6_objectfit', function (el) {
    var b = W.base(el, 'Prova tu · una foto in un riquadro', 'guarda e muovi il cursore');
    var tre = W.h('div', { 'class': 'w6f-tre' });
    ['fill', 'cover', 'contain'].forEach(function (v) {
      tre.appendChild(W.h('figure', { 'class': 'w6f-fig' }, [W.h('div', { 'class': 'w6f-quadro' }, [W.h('img', { src: FOTO, alt: 'Scheda Arduino con object-fit ' + v, style: 'object-fit:' + v })]), W.h('code', { testo: 'object-fit: ' + v })]));
    });
    el.appendChild(tre);
    var lw = 520;
    var cur = W.cursore('larghezza del contenitore', 120, 560, lw, 10, function (v) { lw = v; disegna(); }, function (v) { return v + ' px'; });
    el.appendChild(W.h('div', { 'class': 'wid-comandi' }, [cur]));
    var cont = W.h('div', { 'class': 'w6f-cont' }, [W.h('img', { src: FOTO, alt: 'Scheda Arduino che si adatta al contenitore' })]);
    el.appendChild(W.h('div', { 'class': 'w6f-palco' }, [cont]));
    var f = K.riga('stile.css'); f.metti('img {\n  max-width: 100%;\n  height: auto;\n}'); el.appendChild(f);
    b.chiudi();
    function disegna() { cont.style.width = lw + 'px'; b.dica('Sopra, tre riquadri quadrati con la stessa foto 3:2: fill la deforma, cover la ritaglia, contain la mostra tutta con due bande vuote. Sotto, con max-width: 100% la foto non esce mai dal contenitore e height: auto ne conserva le proporzioni.', 'ok'); }
    disegna();
  });
})();

/* Capitolo 7 · Testo, link e liste — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT, SC = window.SCENA;

  /* ===================== 7.1 · la lista dei font ===================== */
  var GENERICHE = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui'];
  var ctx = document.createElement('canvas').getContext('2d');
  function installato(nome) {
    var t = 'mmmmmmmmmmlli1WQ@#0';
    return ['monospace', 'serif', 'sans-serif'].some(function (base) {
      ctx.font = '72px ' + base; var w0 = ctx.measureText(t).width;
      ctx.font = '72px "' + nome + '", ' + base; return Math.abs(ctx.measureText(t).width - w0) > 0.5;
    });
  }
  function nomi(ff) { return ff.split(',').map(function (x) { return x.trim().replace(/^["']|["']$/g, ''); }).filter(Boolean); }
  W.registra('w7_fontstack', function (el) {
    var b = W.base(el, 'Prova tu · quale font userà il browser?', 'dipende dal tuo computer');
    var ES = ['Georgia, serif', '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', '"Fira Code", Consolas, monospace', '"Font Inesistente", cursive'];
    var val = ES[0];
    var campo = K.campo('font-family', val, function (v) { val = v; disegna(); }, '26em');
    b.ctrl.appendChild(campo);
    var es = W.h('div', { 'class': 'kit-esempi' });
    ES.forEach(function (x) { es.appendChild(W.bottone(x, function () { campo.input.value = x; val = x; disegna(); })); });
    el.appendChild(es);
    var g = W.h('div', { 'class': 'kit-griglia' });
    var ante = W.h('div', { 'class': 'kit-bianco w7f-ante' });
    var lista = W.h('ol', { 'class': 'w7f-lista' });
    g.appendChild(ante); g.appendChild(lista); el.appendChild(g);
    b.chiudi();
    function disegna() {
      ante.style.fontFamily = val;
      ante.innerHTML = '<div style="font-size:30px;line-height:1.2">Club di robotica</div><div style="font-size:17px;margin-top:6px">Ci troviamo il giovedì alle 14:30 · 0123456789</div>';
      var nn = nomi(val), primo = -1;
      lista.innerHTML = '';
      nn.forEach(function (n, i) {
        var gen = GENERICHE.indexOf(n.toLowerCase()) >= 0, ok = gen || installato(n);
        if (ok && primo < 0) primo = i;
        lista.appendChild(W.h('li', { 'class': primo === i ? 'usato' : '', html: '<code>' + K.esc(n) + '</code> <span class="kit-tag ' + (gen ? 'att">famiglia generica' : ok ? 'ok">installato' : 'no">non trovato') + '</span>' + (primo === i ? ' <b>← usato</b>' : '') }));
      });
      var ultima = nn.length && GENERICHE.indexOf(nn[nn.length - 1].toLowerCase()) >= 0;
      b.dica(primo < 0 ? 'Nessun font della lista è disponibile: il browser usa il suo carattere predefinito.' : 'Il browser scorre la lista e usa il primo font che trova su questo computer: «' + nn[primo] + '». ' + (ultima ? 'La lista finisce con una famiglia generica: c’è sempre un’alternativa.' : 'Attenzione: la lista non finisce con una famiglia generica.'), ultima ? 'ok' : 'att');
    }
    disegna();
  });

  /* ===================== 7.1 · grazie ===================== */
  SC.costruisci('s7_grazie', function (svg, A) {
    function lettera(x, grazie) {
      var g = A.g({});
      A.path('M' + (x - 14) + ' 40 L' + (x + 14) + ' 40 L' + (x + 14) + ' 190 L' + (x - 14) + ' 190 Z', 'nodo', {}, null, g).style.cssText = 'fill:var(--ink);stroke:none';
      A.path('M' + (x - 60) + ' 40 L' + (x + 60) + ' 40 L' + (x + 60) + ' 64 L' + (x - 60) + ' 64 Z', 'nodo', {}, null, g).style.cssText = 'fill:var(--ink);stroke:none';
      if (grazie) {
        [[x - 60, 64, x - 50, 92, x - 40, 64], [x + 40, 64, x + 50, 92, x + 60, 64]].forEach(function (p) { A.path('M' + p[0] + ' ' + p[1] + ' L' + p[2] + ' ' + p[3] + ' L' + p[4] + ' ' + p[5] + ' Z', 'nodo', {}, null, g).style.cssText = 'fill:var(--accent-500);stroke:none'; });
        A.path('M' + (x - 40) + ' 178 L' + (x + 40) + ' 178 L' + (x + 40) + ' 190 L' + (x - 40) + ' 190 Z', 'nodo', {}, null, g).style.cssText = 'fill:var(--accent-500);stroke:none';
      }
    }
    lettera(180, true); lettera(540, false);
    A.txt(180, 222, 'serif: con le grazie', 't-b'); A.txt(540, 222, 'sans-serif: senza grazie', 't-b');
        var t1 = A.txt(180, 258, 'Club di robotica', 't'); t1.style.cssText = 'font:400 24px Georgia,"Times New Roman",serif;fill:var(--ink)';
    var t2 = A.txt(540, 258, 'Club di robotica', 't'); t2.style.cssText = 'font:400 24px Arial,Helvetica,sans-serif;fill:var(--ink)';
    A.txt(300, 120, '← grazie', 't-a', {}, 'start');
  });

  /* ===================== 7.2 · font-display: swap ===================== */
  K.passi('w7_swap', {
    titolo: 'Che cosa vede chi apre la pagina mentre il font sta arrivando',
    inizio: '**0 secondi**: la pagina è arrivata, il file del font no. Senza `font-display` il browser **nasconde il testo** (per qualche istante si vedono solo spazi vuoti); con `swap` lo mostra **subito con il font di riserva**.',
    passi: [
      '**0,8 secondi**: il font è ancora in viaggio. Sopra il testo è ancora invisibile: chi legge aspetta. Sotto si legge già tutto.',
      '**1,5 secondi**: arriva il font. Sopra il testo compare; sotto il testo **cambia carattere** e si sposta un po’ («salta»): è il prezzo di `swap`, ma nessuno ha aspettato a vuoto.'
    ],
    monta: function (corpo) {
      corpo.classList.add('w7s');
      var barra = W.h('div', { 'class': 'w7s-tempo' }, [W.h('i'), W.h('span', { 'class': 'w7s-seg' })]);
      corpo.appendChild(barra);
      var righe = [['senza font-display', 'senza'], ['font-display: swap', 'swap']].map(function (r) {
        var p = W.h('div', { 'class': 'w7s-pag kit-bianco' }, [W.h('div', { 'class': 'w7s-tit', testo: 'Club di robotica' }), W.h('div', { 'class': 'w7s-txt', testo: 'Ci troviamo il giovedì alle 14:30 nel laboratorio di informatica.' })]);
        var riga = W.h('div', { 'class': 'w7s-riga' }, [W.h('code', { testo: r[0] }), p]);
        corpo.appendChild(riga); return { p: p, k: r[1] };
      });
      var T = [0, 0.8, 1.5];
      return function (i) {
        barra.querySelector('.w7s-seg').style.width = (T[i] / 2 * 100) + '%';
        barra.querySelector('.w7s-seg').textContent = (T[i] + ' s').replace('.', ',');
        righe.forEach(function (r) {
          r.p.classList.toggle('invisibile', r.k === 'senza' && i < 2);
          r.p.classList.toggle('web', i === 2);
          r.p.classList.toggle('salto', r.k === 'swap' && i === 2);
        });
      };
    }
  });

  /* ===================== 7.3 · dimensione, peso, stile ===================== */
  W.registra('w7_testo', function (el) {
    var b = W.base(el, 'Prova tu · dimensione, peso e stile', 'cursori e pulsanti');
    var S = { size: 28, w: 400, st: 'normal' };
    b.ctrl.appendChild(W.cursore('font-size', 12, 64, S.size, 1, function (v) { S.size = v; disegna(); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.cursore('font-weight', 100, 900, S.w, 100, function (v) { S.w = v; disegna(); }));
    b.ctrl.appendChild(W.scelta([['normal', 'normal'], ['italic', 'italic'], ['oblique', 'oblique']], S.st, function (v) { S.st = v; disegna(); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css'); var ante = W.h('div', { 'class': 'kit-bianco w7t-ante' });
    g.appendChild(f); g.appendChild(ante); el.appendChild(g); b.chiudi();
    function disegna() {
      f.metti('.titolo {\n  font-family: "Segoe UI", system-ui, sans-serif;\n  font-size: ' + S.size + 'px;\n  font-weight: ' + S.w + ';\n  font-style: ' + S.st + ';\n}', { 3: 'nuova', 4: 'nuova', 5: 'nuova' });
      ante.innerHTML = '<div style="font-family:\'Segoe UI\',system-ui,sans-serif;font-size:' + S.size + 'px;font-weight:' + S.w + ';font-style:' + S.st + ';line-height:1.2">Club di robotica</div>';
      b.dica('400 è normal, 700 è bold. Se il font non ha il peso richiesto, il browser usa il peso più vicino che ha (o lo simula). italic usa il corsivo disegnato dal font, oblique inclina il carattere normale.', 'ok');
    }
    disegna();
  });

  /* ===================== 7.4 · spaziatura e allineamento ===================== */
  W.registra('w7_spazio', function (el) {
    var b = W.base(el, 'Prova tu · spaziatura e allineamento', 'cursori e pulsanti');
    var S = { lh: 1.5, ls: 0, ti: 0, al: 'left' };
    b.ctrl.appendChild(W.cursore('line-height', 1, 2.4, S.lh, 0.1, function (v) { S.lh = v; disegna(); }, function (v) { return v.toFixed(1); }));
    b.ctrl.appendChild(W.cursore('letter-spacing', -1, 6, S.ls, 0.5, function (v) { S.ls = v; disegna(); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.cursore('text-indent', 0, 60, S.ti, 5, function (v) { S.ti = v; disegna(); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.scelta([['left', 'left'], ['center', 'center'], ['right', 'right'], ['justify', 'justify']], S.al, function (v) { S.al = v; disegna(); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css'); var ante = W.h('div', { 'class': 'kit-bianco w7p-ante' });
    g.appendChild(f); g.appendChild(ante); el.appendChild(g); b.chiudi();
    function disegna() {
      f.metti('p {\n  line-height: ' + S.lh.toFixed(1) + ';\n  letter-spacing: ' + S.ls + 'px;\n  text-indent: ' + S.ti + 'px;\n  text-align: ' + S.al + ';\n}');
      ante.innerHTML = '<p lang="it" style="margin:0;font:16px Georgia,serif;line-height:' + S.lh + ';letter-spacing:' + S.ls + 'px;text-indent:' + S.ti + 'px;text-align:' + S.al + ';hyphens:auto">Il club di robotica si riunisce ogni giovedì in laboratorio. Si costruiscono robot con Arduino, si programmano sensori e motori e, a fine anno, si partecipa alla gara regionale con le altre scuole.</p>';
      b.dica(S.lh < 1.3 ? 'Interlinea troppo stretta: le righe si toccano e l’occhio fatica a ritrovare l’inizio della riga dopo.' : S.al === 'justify' ? 'Con justify le righe arrivano tutte al margine destro; senza sillabazione (hyphens: auto) restano buchi tra le parole.' : 'Per il testo continuo si usa di solito un’interlinea tra 1,4 e 1,6, senza unità.', S.lh < 1.3 ? 'att' : 'ok');
    }
    disegna();
  });

  /* ===================== 7.5 · i puntini di sospensione ===================== */
  var TIT = '<div class="titolo">Corso avanzato di robotica educativa con Arduino e sensori</div>';
  K.demo('w7_ellipsis', {
    titolo: 'Tre dichiarazioni per i puntini',
    inizio: 'Solo `text-overflow: ellipsis` su un riquadro stretto: **non succede niente**, perché il testo va a capo e non c’è niente di tagliato a cui mettere i puntini.',
    html: TIT, altezza: 120,
    extra: '.titolo{font:18px Arial,sans-serif;border:2px solid #0a6f66;padding:6px;background:#f3fbf9}',
    css0: '.titolo {\n  width: 220px;\n  text-overflow: ellipsis;\n}',
    passi: [
      { desc: 'Con `white-space: nowrap` il testo non va più a capo, ma **esce dal riquadro**: l’eccedenza è ancora visibile, quindi niente puntini.',
        css: '.titolo {\n  width: 220px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}', segna: { 4: 'nuova' } },
      { desc: 'Con `overflow: hidden` la parte che esce viene tagliata e al suo posto compaiono i **puntini**. Servono tutte e tre le dichiarazioni.',
        css: '.titolo {\n  width: 220px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}', segna: { 5: 'nuova' } }
    ]
  });

  /* ===================== 7.6 · LVHA ===================== */
  W.registra('w7_lvha', function (el) {
    var b = W.base(el, 'Prova tu · l’ordine delle regole dei link', 'riordina e cambia stato');
    var BASE = [['link', ':link', 'blue', 'blu'], ['visited', ':visited', 'purple', 'viola'], ['hover', ':hover', 'red', 'rosso'], ['active', ':active', 'darkorange', 'arancione']];
    var ord = BASE.slice(), st = { visited: true, hover: false, active: false };
    var com = W.h('div', { 'class': 'wid-comandi' });
    com.appendChild(K.casella('Visitato', st.visited, function (v) { st.visited = v; disegna(); }));
    com.appendChild(K.casella('Mouse sopra', st.hover, function (v) { st.hover = v; disegna(); }));
    com.appendChild(K.casella('Premuto', st.active, function (v) { st.active = v; disegna(); }));
    com.appendChild(W.bottone('Ripristina LVHA', function () { ord = BASE.slice(); disegna(); }));
    el.appendChild(com);
    var g = W.h('div', { 'class': 'kit-griglia w4cv' });
    var lista = W.h('div', { 'class': 'w4v-regole' }); var a = K.anteprima({ altezza: 80 });
    g.appendChild(lista); g.appendChild(a); el.appendChild(g); b.chiudi();
    function disegna() {
      // stati simulati con classi: stessa specificità delle pseudo-classi (0,1,1)
      var css = ord.map(function (r) { return 'a.' + r[0] + ' { color: ' + r[2] + '; }'; }).join('\n');
      var cls = (st.visited ? 'visited' : 'link') + (st.hover ? ' hover' : '') + (st.active ? ' active' : '');
      var root = a.metti('<p>Leggi il <a class="' + cls + '" href="#" onclick="return false">programma del corso</a>.</p>', 'body{font:20px Arial,sans-serif}' + css);
      var col = getComputedStyle(root.querySelector('a')).color;
      var RGB = { 'rgb(0, 0, 255)': 'blue', 'rgb(128, 0, 128)': 'purple', 'rgb(255, 0, 0)': 'red', 'rgb(255, 140, 0)': 'darkorange' };
      var vin = RGB[col];
      lista.innerHTML = '';
      ord.forEach(function (r, i) {
        var att = cls.split(' ').indexOf(r[0]) >= 0;
        var riga = W.h('div', { 'class': 'w4v-regola' + (att && r[2] === vin ? ' vince' : '') });
        riga.appendChild(W.h('i', { 'class': 'w4c-pallino', style: 'background:' + r[2] }));
        riga.appendChild(W.h('code', { testo: 'a' + r[1] + ' { color: ' + r[2] + '; }' }));
        var su = W.bottone('↑', function () { if (i > 0) { ord.splice(i - 1, 0, ord.splice(i, 1)[0]); disegna(); } });
        var giu = W.bottone('↓', function () { if (i < ord.length - 1) { ord.splice(i + 1, 0, ord.splice(i, 1)[0]); disegna(); } });
        su.disabled = i === 0; giu.disabled = i === ord.length - 1;
        riga.appendChild(su); riga.appendChild(giu);
        riga.appendChild(W.h('span', { 'class': 'w4v-info', html: att ? (r[2] === vin ? '<span class="kit-tag ok">si applica ora · VINCE</span>' : '<span class="kit-tag">si applica ora, ma è battuta</span>') : '<span class="kit-tag">non si applica ora</span>' }));
        lista.appendChild(riga);
      });
      var giusto = ord.map(function (r) { return r[0][0].toUpperCase(); }).join(' ');
      var nomeV = (BASE.filter(function (r) { return r[2] === vin; })[0] || [0, 0, 0, '?'])[3];
      var applicate = ord.filter(function (r) { return cls.split(' ').indexOf(r[0]) >= 0; }).length;
      b.dica('Il link è ' + nomeV + '. Perché: ' + (applicate > 1 ? 'si applicano ' + applicate + ' regole con la stessa specificità, quindi vince quella scritta per ultima.' : 'si applica una sola regola.') + ' Ordine attuale: ' + giusto + (giusto === 'L V H A' ? ' (corretto)' : ' (non è LVHA: qualche stato non si vedrà mai)'), giusto === 'L V H A' ? 'ok' : 'att');
    }
    disegna();
  });

  /* ===================== 7.7 · i contatori ===================== */
  var ART = '<article><h2>Il box model</h2><p>Contenuto, padding, bordo e margine.</p><h2>Flexbox</h2><p>Elementi in fila su un asse.</p><h2>Grid</h2><p>Righe e colonne.</p></article>';
  var BASE7 = 'body { font-family: Arial, sans-serif; }\nh2 { font-size: 18px; margin: 8px 0 2px; }\np { margin: 0; }\n';
  K.demo('w7_contatori', {
    titolo: 'Numerare i titoli con un contatore',
    inizio: 'Tre titoli `h2` dentro un `article`, senza numeri. Non sono un elenco, quindi `ol` qui non serve: li numera il CSS.',
    html: ART, altezza: 210, css0: BASE7,
    passi: [
      { desc: '`counter-reset` sul contenitore **crea il contatore** «capitolo» e lo mette a zero. Nella pagina non cambia ancora nulla.', css: BASE7 + 'article { counter-reset: capitolo; }', segna: { 4: 'nuova' } },
      { desc: '`counter-increment` su ogni `h2` **aggiunge 1** al contatore ogni volta che il browser incontra un titolo. Il contatore conta, ma non si vede ancora.', css: BASE7 + 'article { counter-reset: capitolo; }\nh2 { counter-increment: capitolo; }', segna: { 5: 'nuova' } },
      { desc: '`counter()` dentro il `content` di `::before` **mostra il valore**: ora i titoli sono numerati 1, 2, 3, e restano giusti anche se se ne aggiunge o se ne toglie uno.', css: BASE7 + 'article { counter-reset: capitolo; }\nh2 { counter-increment: capitolo; }\nh2::before { content: counter(capitolo) ". "; }', segna: { 6: 'nuova' } }
    ]
  });
})();

/* Capitolo 8 · Il box model — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;

  /* ===================== 8.1 e 8.3 · la scatola ===================== */
  function scatola(nome, S0, titolo) {
    W.registra(nome, function (el) {
      var b = W.base(el, titolo, 'muovi i cursori');
      var S = Object.assign({}, S0);
      var com = W.h('div', { 'class': 'wid-comandi' });
      [['w', 'width', 60, 220], ['h', 'height', 30, 100], ['p', 'padding', 0, 30], ['b', 'border', 0, 16], ['m', 'margin', 0, 30]].forEach(function (d) {
        com.appendChild(W.cursore(d[1], d[2], d[3], S[d[0]], 1, function (v) { S[d[0]] = v; disegna(); }, function (v) { return v + 'px'; }));
      });
      com.appendChild(W.scelta([['content-box', 'content-box'], ['border-box', 'border-box']], S.bs, function (v) { S.bs = v; disegna(); }));
      el.appendChild(com);
      var g = W.h('div', { 'class': 'kit-griglia' });
      var col = W.h('div', { 'class': 'kit-col' });
      var f = K.file('stile.css', '', 'css');
      var dati = W.h('div', { 'class': 'wid-dati' });
      var dC = W.dato('contenuto', ''), dB = W.dato('box del bordo', ''), dM = W.dato('con i margini', '');
      dati.appendChild(dC); dati.appendChild(dB); dati.appendChild(dM);
      col.appendChild(f); col.appendChild(dati);
      var palco = W.h('div', { 'class': 'w8b-palco' });
      g.appendChild(col); g.appendChild(palco); el.appendChild(g);
      b.chiudi();
      function strato(cls, et, spess) {
        var d = W.h('div', { 'class': 'w8b-s ' + cls });
        if (spess >= 14) d.appendChild(W.h('span', { 'class': 'w8b-et', testo: et }));
        return d;
      }
      function disegna() {
        var cw = S.bs === 'border-box' ? Math.max(0, S.w - 2 * (S.p + S.b)) : S.w;
        var ch = S.bs === 'border-box' ? Math.max(0, S.h - 2 * (S.p + S.b)) : S.h;
        var bw = cw + 2 * (S.p + S.b), bh = ch + 2 * (S.p + S.b);
        var m = strato('m', 'margin', S.m), bo = strato('b', 'border', S.b), pa = strato('p', 'padding', S.p);
        var co = W.h('div', { 'class': 'w8b-c', testo: cw + '×' + ch });
        m.style.padding = S.m + 'px'; bo.style.padding = S.b + 'px'; pa.style.padding = S.p + 'px';
        co.style.width = cw + 'px'; co.style.height = ch + 'px';
        pa.appendChild(co); bo.appendChild(pa); m.appendChild(bo);
        palco.innerHTML = ''; palco.appendChild(m);
        f.metti('.scatola {\n  box-sizing: ' + S.bs + ';\n  width: ' + S.w + 'px;\n  height: ' + S.h + 'px;\n  padding: ' + S.p + 'px;\n  border: ' + S.b + 'px solid;\n  margin: ' + S.m + 'px;\n}');
        dC.v.textContent = cw + ' × ' + ch; dB.v.textContent = bw + ' × ' + bh; dM.v.textContent = (bw + 2 * S.m) + ' × ' + (bh + 2 * S.m);
        b.dica(S.bs === 'content-box' ? 'content-box: width e height valgono per il solo contenuto; padding e bordo si aggiungono. In orizzontale: ' + S.w + ' + 2×' + S.p + ' + 2×' + S.b + ' = ' + bw + ' px.' : 'border-box: width e height comprendono padding e bordo; il contenuto si restringe a ' + cw + ' px e la scatola resta larga ' + S.w + ' px.', 'ok');
      }
      disegna();
    });
  }
  scatola('w8_scatola', { w: 140, h: 60, p: 16, b: 6, m: 20, bs: 'content-box' }, 'Prova tu · la scatola');
  scatola('w8_scatola2', { w: 200, h: 60, p: 20, b: 5, m: 0, bs: 'content-box' }, 'Prova tu · content-box o border-box?');

  /* ===================== 8.2 · larghezze ===================== */
  W.registra('w8_larghezze', function (el) {
    var b = W.base(el, 'Prova tu · quattro modi di dare la larghezza', 'allarga e stringi il contenitore');
    var lw = 460;
    b.ctrl.appendChild(W.cursore('larghezza del contenitore', 160, 620, lw, 10, function (v) { lw = v; disegna(); }, function (v) { return v + ' px'; }));
    var palco = W.h('div', { 'class': 'w8l-palco' });
    var cont = W.h('div', { 'class': 'w8l-cont' });
    var BL = [['width: auto', ''], ['width: 100%; padding: 20px', 'width:100%;padding:20px;box-sizing:content-box'], ['max-width: 300px', 'max-width:300px'], ['min-width: 200px', 'min-width:200px']];
    var bb = BL.map(function (x) { var d = W.h('div', { 'class': 'w8l-b', style: x[1] }, [W.h('code', { testo: x[0] }), W.h('span')]); cont.appendChild(d); return d; });
    palco.appendChild(cont); el.appendChild(palco); b.chiudi();
    function disegna() {
      cont.style.width = lw + 'px';
      var esce = 0;
      bb.forEach(function (d) { var w = d.getBoundingClientRect().width; var fuori = w > lw - 2 + 0.5; if (fuori) esce++; d.classList.toggle('fuori', fuori); d.lastChild.textContent = ' = ' + Math.round(w) + ' px' + (fuori ? ' · esce!' : ''); });
      b.dica('auto riempie il contenitore; width: 100% con il padding esce di 40 px (content-box); max-width si ferma a 300 px ma si stringe con il contenitore; min-width non scende sotto 200 px e, se il contenitore è più stretto, esce.' + (esce ? '' : ''), esce ? 'att' : 'ok');
    }
    disegna();
  });

  /* ===================== 8.4 · margini che si fondono ===================== */
  W.registra('w8_margini', function (el) {
    var b = W.base(el, 'Prova tu · margini che si fondono', 'cursori e layout');
    var a = 20, c = 30, modo = 'normale';
    b.ctrl.appendChild(W.cursore('margin-bottom di A', 0, 60, a, 1, function (v) { a = v; disegna(); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.cursore('margin-top di B', 0, 60, c, 1, function (v) { c = v; disegna(); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.scelta([['normale', 'flusso normale'], ['flex', 'flex in colonna']], modo, function (v) { modo = v; disegna(); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css');
    var pal = W.h('div', { 'class': 'w8m-palco' });
    g.appendChild(f); g.appendChild(pal); el.appendChild(g); b.chiudi();
    function disegna() {
      f.metti('.contenitore { display: ' + (modo === 'flex' ? 'flex; flex-direction: column' : 'block') + '; }\n.a { margin-bottom: ' + a + 'px; }\n.b { margin-top: ' + c + 'px; }');
      pal.innerHTML = '';
      var ct = W.h('div', { 'class': 'w8m-cont', style: modo === 'flex' ? 'display:flex;flex-direction:column' : 'display:block' });
      var A = W.h('div', { 'class': 'w8m-a', testo: 'A', style: 'margin-bottom:' + a + 'px' }), B = W.h('div', { 'class': 'w8m-b', testo: 'B', style: 'margin-top:' + c + 'px' });
      ct.appendChild(A); ct.appendChild(B); pal.appendChild(ct);
      var d = Math.round(B.getBoundingClientRect().top - A.getBoundingClientRect().bottom);
      var banda = W.h('div', { 'class': 'w8m-banda', style: 'top:' + (A.offsetTop + A.offsetHeight) + 'px;height:' + d + 'px' }, [W.h('span', { testo: d + ' px' })]);
      ct.appendChild(banda);
      b.dica(modo === 'normale' ? 'Flusso normale: i margini verticali si fondono e vale il più grande, max(' + a + ', ' + c + ') = ' + d + ' px.' : 'In un contenitore flex i margini non si fondono: si sommano, ' + a + ' + ' + c + ' = ' + d + ' px.', 'ok');
    }
    disegna();
  });

  /* ===================== 8.6 · overflow ===================== */
  var LUNGO = '<div class="riquadro">Il club di robotica si riunisce ogni giovedì in laboratorio. Si costruiscono robot con Arduino, si programmano sensori e motori, si stampano i pezzi in 3D e, a fine anno, si partecipa alla gara regionale con le altre scuole della provincia.</div><p class="sotto">Paragrafo successivo</p>';
  K.demo('w8_overflow', {
    titolo: 'Che cosa succede al contenuto che non entra',
    inizio: 'Un riquadro alto 90px con più testo di quanto ne possa contenere. Con il valore iniziale `overflow: visible` il testo **esce** dal riquadro e finisce sopra il paragrafo successivo.',
    html: LUNGO, altezza: 230,
    extra: '.riquadro{width:260px;height:90px;border:2px solid #0a6f66;background:#f3fbf9;font:14px/1.45 Arial,sans-serif;padding:6px}.sotto{font:14px Arial,sans-serif;color:#c2410c;margin-top:8px}',
    css0: '.riquadro {\n  height: 90px;\n  overflow: visible;\n}', segna0: { 3: 'nuova' },
    passi: [
      { desc: '`overflow: hidden`: ciò che esce viene **tagliato** e non si vede più, né si può raggiungere scorrendo.', css: '.riquadro {\n  height: 90px;\n  overflow: hidden;\n}', segna: { 3: 'nuova' } },
      { desc: '`overflow: scroll`: compaiono le **barre di scorrimento**, sempre, anche quella orizzontale che qui non serve.', css: '.riquadro {\n  height: 90px;\n  overflow: scroll;\n}', segna: { 3: 'nuova' } },
      { desc: '`overflow: auto`: le barre compaiono **solo se servono**, qui solo quella verticale. È il valore che si usa di solito.', css: '.riquadro {\n  height: 90px;\n  overflow: auto;\n}', segna: { 3: 'nuova' } }
    ]
  });
})();

/* Capitolo 9 · Flusso normale e display — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  var COL = ['#2f6fd6', '#2f9e44', '#e9a313'];
  var TESTO_COL = ['#fff', '#fff', '#2a1c00'];

  /* ===================== 9.1 · il browser mette in fila ===================== */
  var FILA = [
    ['h1', 'Club', 'b'], ['p', 'Corsi', 'b'], ['span', 'il', 'i'], ['span', 'giovedì', 'i'], ['a', 'Iscriviti', 'i'], ['div', 'Arduino', 'b']
  ];
  var FILA_CSS = ':host{font-family:Arial,sans-serif}.kit-body{padding:14px}' +
    '.b{position:relative;margin:0 0 8px;padding:6px 8px;background:#e3f4f1;outline:2px dashed #0a6f66;outline-offset:-2px;color:#0e161f;overflow:hidden;white-space:nowrap}' +
    'h1.b{font-size:26px;line-height:32px}p.b,div.b{font-size:18px;line-height:24px}' +
    '.b .tag,.riga .tag{position:absolute;right:6px;top:4px;font:600 11px/14px Consolas,monospace;color:#0a6f66}' +
    '.riga{position:relative;margin:0 0 8px;padding:6px 8px;outline:1.5px dashed #b1b9c2;outline-offset:-2px;font-size:18px;line-height:30px;min-height:42px}' +
    '.riga .tag{color:#78889a}' +
    '.i{display:inline-block;padding:0 6px;margin-right:6px;background:#fcf0d6;outline:2px solid #e9a313;outline-offset:-2px;color:#2a1c00}' +
    'a.i{color:#1a4fb3;text-decoration:underline}';
  K.passi('w9_fila', {
    titolo: 'Il browser mette in fila',
    inizio: 'A sinistra sei elementi nell’HTML, a destra la finestra ancora vuota. Il browser li prende **uno alla volta, nell’ordine del codice**.',
    passi: [
      '`h1` è un **blocco**: comincia una riga nuova e la occupa **per intero**, anche se «Club» è una parola sola.',
      '`p` è un altro blocco: va **a capo**, sotto il titolo, e occupa anche lui tutta la larghezza.',
      '`span` è **in linea**: apre una riga (tratteggiata in grigio) ed è largo **quanto il suo testo**.',
      'Il secondo `span` **si accoda** nella stessa riga, come la parola successiva di una frase.',
      'Anche `a` è in linea: si mette dopo «giovedì», **nella stessa riga**. Se la riga fosse piena, andrebbe a capo come una parola.',
      '`div` è un blocco: **va a capo** e prende di nuovo tutta la larghezza. Blocchi uno sotto l’altro, elementi in linea uno dopo l’altro.'
    ],
    monta: function (corpo) {
      corpo.classList.add('kit-griglia');
      var codice = FILA.map(function (e) { return '<' + e[0] + '>' + e[1] + '</' + e[0] + '>'; }).join('\n');
      var f = K.file('index.html', codice, 'html');
      var a = K.anteprima({ altezza: 250, indirizzo: 'club-robotica.it' });
      corpo.appendChild(f); corpo.appendChild(a);
      return function (i, anima) {
        var s = {}; for (var k = 1; k <= 6; k++) s[k] = k === i ? 'nuova' : k > i ? 'spenta' : '';
        f.metti(codice, s, 'html');
        var h = '', riga = '';
        FILA.forEach(function (e, k) {
          if (k >= i) return;
          var el = '<' + e[0] + ' class="' + e[2] + '" data-k="e' + k + '">' + e[1] + (e[2] === 'b' ? '<span class="tag">' + e[0] + '</span>' : '') + '</' + e[0] + '>';
          if (e[2] === 'i') riga += el;
          else { if (riga) { h += '<div class="riga" data-k="r">' + riga + '<span class="tag">riga</span></div>'; riga = ''; } h += el; }
        });
        if (riga) h += '<div class="riga" data-k="r">' + riga + '<span class="tag">riga</span></div>';
        var root = a.metti(h, '', FILA_CSS);
        if (!anima || !i) return;
        var nuovo = root.querySelector('[data-k="e' + (i - 1) + '"]');
        if (FILA[i - 1][2] === 'b') {
          // il blocco nasce largo quanto il testo e si allarga fino a riempire la riga
          var piena = nuovo.getBoundingClientRect().width, z = piena / nuovo.offsetWidth || 1;
          var r = document.createRange(); r.selectNodeContents(nuovo.firstChild);
          var testo = r.getBoundingClientRect().width / z + 18;
          nuovo.animate([{ width: testo + 'px', opacity: 0, transform: 'translateY(-8px)' }, { width: testo + 'px', opacity: 1, transform: 'none', offset: 0.35 }, { width: nuovo.offsetWidth + 'px', opacity: 1, transform: 'none' }],
            { duration: 1100, easing: 'cubic-bezier(.45,0,.2,1)' });
        } else {
          nuovo.animate([{ opacity: 0, transform: 'translate(-14px,-6px)' }, { opacity: 1, transform: 'none' }], { duration: 550, easing: K.MOTO });
          if (i === 3) root.querySelector('.riga').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400 });
        }
      };
    }
  });

  /* ===================== 9.2 · display: Prova tu ===================== */
  W.registra('w9_display', function (el) {
    var b = W.base(el, 'Prova tu · display', 'menu, cursore e caselle');
    var D = { A: 'block', B: 'block', C: 'inline', D: 'inline', E: 'inline-block', F: 'inline-block' };
    var NOMI = Object.keys(D), lw = 460, spazi = true, auto = false;
    b.ctrl.appendChild(W.cursore('larghezza del contenitore', 260, 640, lw, 10, function (v) { lw = v; disegna(false); }, function (v) { return v + ' px'; }));
    b.ctrl.appendChild(K.casella('Togli gli spazi tra i tag', false, function (v) { spazi = !v; disegna(true); }));
    b.ctrl.appendChild(K.casella('width: auto ai blocchi', false, function (v) { auto = v; disegna(true); }));
    var a = K.anteprima({ barra: false, cls: 'w9d-ante' });
    el.appendChild(a);
    var g = W.h('div', { 'class': 'kit-griglia w9d-g' });
    var tab = W.h('table', { 'class': 'kit-tab w9d-tab' });
    tab.appendChild(W.h('thead', {}, [W.h('tr', {}, [W.h('th', { testo: 'elemento' }), W.h('th', { testo: 'display' }), W.h('th', { testo: 'misura nel browser' })])]));
    var tb = W.h('tbody'); tab.appendChild(tb);
    var misure = {};
    NOMI.forEach(function (n, k) {
      var sel = K.menu('display di ' + n, [['block'], ['inline'], ['inline-block'], ['none']], D[n], function (v) { D[n] = v; disegna(true); });
      sel.querySelector('span').remove();
      var m = W.h('td', { 'class': 'w9d-mis' });
      misure[n] = m;
      tb.appendChild(W.h('tr', {}, [W.h('td', {}, [W.h('span', { 'class': 'w9d-chip', style: 'background:' + COL[k % 3] + ';color:' + TESTO_COL[k % 3], testo: n })]), W.h('td', {}, [sel]), m]));
    });
    var f = K.file('stile.css', '', 'css');
    g.appendChild(f); g.appendChild(tab); el.appendChild(g);
    b.chiudi();
    function disegna(anima) {
      var sep = spazi ? '\n  ' : '';
      var h = '<div class="cont" style="width:' + lw + 'px">' + sep + NOMI.map(function (n, k) {
        return '<div class="el" data-k="' + n + '" style="display:' + D[n] + ';background:' + COL[k % 3] + ';color:' + TESTO_COL[k % 3] + (auto && D[n] === 'block' ? ';width:auto' : '') + '">' + n + '</div>';
      }).join(sep) + sep + '</div>';
      var css = '.cont{border:2px dashed #78889a;padding:4px;font:600 17px/22px Arial,sans-serif}.el{width:130px;height:40px;margin:6px 4px;padding:4px 8px;box-sizing:border-box}';
      var fare = function () { a.metti(h, '', css); };
      if (anima && a.root.querySelector('[data-k]')) K.flip(a.root, fare); else fare();
      var inl = [];
      NOMI.forEach(function (n) {
        var x = a.root.querySelector('[data-k="' + n + '"]');
        if (D[n] === 'none') { misure[n].innerHTML = '<span class="kit-tag no">non esiste</span>'; return; }
        var r = x.getBoundingClientRect(), z = x.offsetWidth ? r.width / x.offsetWidth : 1;
        var w = Math.round(x.offsetWidth || r.width / z), hh = Math.round(x.offsetHeight || r.height / z);
        if (D[n] === 'inline') { inl.push(n); misure[n].innerHTML = Math.round(r.width / z) + ' × ' + Math.round(r.height / z) + ' <span class="kit-tag att">width e height ignorati</span>'; }
        else misure[n].textContent = w + ' × ' + hh + ' px';
      });
      f.metti('.el {\n  width: 130px;\n  height: 40px;\n  margin: 6px 4px;\n  padding: 4px 8px;\n}' + (auto ? '\n.blocco { width: auto; }' : ''), auto ? { 7: 'nuova' } : {});
      b.dica((inl.length ? inl.join(' e ') + (inl.length > 1 ? ' sono' : ' è') + ' in linea: larghi quanto la lettera, i margini verticali non spostano le righe. ' : 'Nessun elemento in linea. ') +
        (spazi ? 'Tra gli elementi in linea e inline-block vedi lo spazio tra i tag dell’HTML.' : 'Senza spazi tra i tag, gli inline-block si toccano.'), 'ok');
    }
    disegna(false);
  });

  /* ===================== 9.3 · quattro modi di nascondere B ===================== */
  W.registra('w9_nascondi', function (el) {
    var b = W.base(el, 'Prova tu · quattro modi di nascondere B', 'scegli e prova a cliccare B');
    var modo = 'visibile', clic = 0;
    var MODI = { visibile: '', none: 'display: none', hidden: 'visibility: hidden', opacity: 'opacity: 0' };
    var FRASI = {
      visibile: 'B è visibile: si clicca, si raggiunge con il tasto Tab e il lettore di schermo legge «cliccami, pulsante».',
      none: 'display: none → B non esiste più: C scivola al suo posto. Non si clicca, il tasto Tab lo salta, il lettore di schermo non lo legge.',
      hidden: 'visibility: hidden → B è invisibile ma il suo posto resta vuoto: C non si muove. Non si clicca, Tab lo salta, il lettore lo ignora.',
      opacity: 'opacity: 0 → B è solo trasparente: occupa il posto e risponde ancora ai clic (prova a cliccare nel riquadro tratteggiato). Tab lo raggiunge e il lettore lo legge.'
    };
    b.ctrl.appendChild(W.scelta([['visibile', 'visibile'], ['none', 'display: none'], ['hidden', 'visibility: hidden'], ['opacity', 'opacity: 0']], modo, function (v) { modo = v; clic = 0; disegna(true); }));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var col = W.h('div', { 'class': 'kit-col' });
    var f = K.file('stile.css', '', 'css');
    var dati = W.h('div', { 'class': 'wid-dati' });
    var dC = W.dato('clic ricevuti da B', '0'); dati.appendChild(dC);
    col.appendChild(f); col.appendChild(dati);
    var a = K.anteprima({ altezza: 130 });
    g.appendChild(col); g.appendChild(a); el.appendChild(g); b.chiudi();
    var CSS = '.kit-body{padding:22px 14px}.fila{position:relative;display:flex;gap:10px;align-items:center;font:700 17px Arial,sans-serif}' +
      '.x{width:70px;height:56px;display:grid;place-items:center;border-radius:4px}.a{background:#2f6fd6;color:#fff}.c{background:#e9a313;color:#2a1c00}' +
      'button{font:600 15px Arial,sans-serif;height:56px;padding:0 14px;border:0;border-radius:4px;background:#2f9e44;color:#fff;cursor:pointer}' +
      '.posto{position:absolute;top:0;height:56px;border:2px dashed #a62a20;border-radius:4px;pointer-events:none}';
    function disegna(anima) {
      var st = MODI[modo] ? ' style="' + MODI[modo] + '"' : '';
      var h = '<div class="fila"><div class="x a" data-k="a">A</div><button type="button" data-k="b"' + st + '>cliccami</button><div class="x c" data-k="c">C</div></div>';
      var fare = function () { a.metti(h, '', CSS); };
      if (anima) K.flip(a.root, fare, 700); else fare();
      var B = a.root.querySelector('button');
      B.onclick = function () { clic++; dC.v.textContent = clic; B.animate && B.animate([{ transform: 'scale(.94)' }, { transform: 'none' }], { duration: 180 }); };
      if (modo === 'hidden' || modo === 'opacity') a.root.querySelector('.fila').appendChild(W.h('div', { 'class': 'posto', style: 'left:' + B.offsetLeft + 'px;width:' + B.offsetWidth + 'px' }));
      dC.v.textContent = clic;
      f.metti('.b {\n  ' + (MODI[modo] || '/* nessuna regola */') + (MODI[modo] ? ';' : '') + '\n}', MODI[modo] ? { 2: 'nuova' } : {});
      b.dica(FRASI[modo], modo === 'opacity' ? 'att' : 'ok');
    }
    disegna(false);
  });
})();

/* Capitolo 10 · Position e float — widget e demo */
(function () {
  'use strict';
  var W = window.WIDGET, K = window.KIT;
  function scala(n) { var r = n.getBoundingClientRect(); return n.offsetWidth ? r.width / n.offsetWidth : 1; }

  /* ===================== 10.1 · position: Prova tu ===================== */
  W.registra('w10_position', function (el) {
    var b = W.base(el, 'Prova tu · position', 'menu, cursori e casella');
    var S = { pos: 'relative', top: 20, left: 30, gen: false };
    var mPos = K.menu('position di B', [['static'], ['relative'], ['absolute'], ['sticky']], S.pos, function (v) { S.pos = v; disegna(true); });
    b.ctrl.appendChild(mPos);
    b.ctrl.appendChild(W.cursore('top', 0, 60, S.top, 1, function (v) { S.top = v; disegna(false); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(W.cursore('left', 0, 60, S.left, 1, function (v) { S.left = v; disegna(false); }, function (v) { return v + 'px'; }));
    b.ctrl.appendChild(K.casella('il genitore ha position: relative', S.gen, function (v) { S.gen = v; disegna(true); }));
    var g = W.h('div', { 'class': 'kit-griglia w10p-g' });
    var f = K.file('stile.css', '', 'css');
    var a = K.anteprima({ altezza: 250, indirizzo: 'club-robotica.it/corsi' });
    g.appendChild(f); g.appendChild(a); el.appendChild(g); b.chiudi();
    var CSS = '.kit-body{position:relative;padding:10px 14px 14px;font:600 15px Arial,sans-serif;color:#1d2630}' +
      '.testa{height:34px;display:flex;align-items:center;padding:0 10px;background:#33404f;color:#fff;margin-bottom:10px}' +
      '.gen{border:2px dashed #78889a;padding:8px;margin:0 0 10px;position:relative}.gen.statico{position:static}' +
      '.gen>.et{display:block;text-align:right;margin:-4px 0 2px;font:600 11px/14px Consolas,monospace;color:#5f7183}' +
      '.x{height:52px;display:grid;place-items:center;margin:0 0 6px;color:#fff}.x:last-child{margin-bottom:0}' +
      '.A{background:#2f6fd6}.B{background:#2f9e44;width:62%;z-index:2;box-shadow:0 4px 10px rgba(0,0,0,.25)}.C{background:#e9a313;color:#2a1c00}' +
      '.altro{height:46px;background:#eef2f6;margin-bottom:10px;display:grid;place-items:center;color:#78889a;font-weight:400}' +
      '.posto{position:absolute;border:2px dashed #2f9e44;background:rgba(47,158,68,.08);pointer-events:none}' +
      '.rif{outline:3px solid #e9a313;outline-offset:2px}.kit-body.rif{outline-offset:-3px}' +
      '.cartello{position:absolute;font:600 11px/15px Consolas,monospace;background:#e9a313;color:#2a1c00;padding:1px 6px;z-index:5}';
    var FRASI = {
      static: 'static: B sta nel flusso normale. top e left non hanno nessun effetto.',
      relative: 'relative: B si sposta rispetto al suo posto (tratteggiato), che resta occupato: C non si muove.',
      absolute: 'absolute: B esce dal flusso, C sale a prendere il suo posto e B si colloca rispetto al riferimento in ambra: ',
      sticky: 'sticky: B scorre con la pagina finché non arriva a top dal bordo alto, poi resta attaccato, ma solo finché il genitore è visibile. Scorri la pagina nel riquadro.'
    };
    function disegna(anima) {
      var h = '<div class="testa">Club di robotica</div>' +
        '<div class="gen' + (S.gen ? '' : ' statico') + '"><span class="et">genitore</span>' +
        '<div class="x A" data-k="A">A</div><div class="x B" data-k="B" style="position:' + S.pos + ';top:' + S.top + 'px;left:' + S.left + 'px">B</div><div class="x C" data-k="C">C</div></div>' +
        '<div class="altro">altro contenuto</div><div class="altro">altro contenuto</div><div class="altro">altro contenuto</div><div class="altro">piè di pagina</div>';
      var y = a.host.scrollTop;
      var fare = function () { a.metti(h, '', CSS); a.host.scrollTop = y; };
      if (anima) K.flip(a.root, fare); else fare();
      var R = a.root, B = R.querySelector('.B'), corpo = R.querySelector('.kit-body'), gen = R.querySelector('.gen');
      // posto originale di B: lo si misura rimettendolo per un istante nel flusso
      if (S.pos === 'relative' || S.pos === 'sticky') {
        var z = scala(corpo), cr = corpo.getBoundingClientRect();
        var old = B.style.position; B.style.position = 'static';
        var br = B.getBoundingClientRect(); B.style.position = old;
        corpo.appendChild(W.h('div', { 'class': 'posto', style: 'left:' + (br.left - cr.left) / z + 'px;top:' + (br.top - cr.top) / z + 'px;width:' + br.width / z + 'px;height:' + br.height / z + 'px' }));
      }
      var rif = '';
      if (S.pos === 'absolute') {
        var dove = S.gen ? gen : corpo; dove.classList.add('rif');
        var cart = W.h('div', { 'class': 'cartello', testo: S.gen ? 'riferimento: il genitore' : 'riferimento: la pagina' });
        if (S.gen) { cart.style.left = '8px'; cart.style.top = '-10px'; gen.appendChild(cart); } else { cart.style.right = '6px'; cart.style.top = '4px'; corpo.appendChild(cart); }
        rif = S.gen ? 'il genitore, che ora è posizionato.' : 'il genitore non è posizionato, quindi il riferimento è la pagina: B finisce sopra l’intestazione.';
      }
      var righe = '.b {\n  position: ' + S.pos + ';\n  top: ' + S.top + 'px;\n  left: ' + S.left + 'px;\n}';
      var segni = { 2: 'nuova' };
      if (S.pos === 'static') { segni[3] = 'spenta'; segni[4] = 'spenta'; }
      if (S.gen) { righe = '.genitore {\n  position: relative;\n}\n' + righe; segni = { 2: 'nuova', 5: 'nuova' }; if (S.pos === 'static') { segni[6] = 'spenta'; segni[7] = 'spenta'; } }
      f.metti(righe, segni);
      b.dica(FRASI[S.pos] + rif, S.pos === 'absolute' && !S.gen ? 'att' : 'ok');
    }
    disegna(false);
  });

  /* ===================== 10.1 · tre barre mentre la pagina scorre ===================== */
  K.passi('w10_scroll', {
    titolo: 'Tre barre mentre la pagina scorre',
    inizio: 'Una pagina con tre barre: **static** (nel flusso), **sticky** con `top: 0` (dentro un genitore tratteggiato) e **fixed** in alto a destra. La pagina non è ancora scorsa.',
    passi: [
      'La pagina scorre di **150px**. La barra static sale con la pagina; la sticky arriva al bordo alto e **si ferma**; la fixed **non si muove**.',
      'Scorre fino a **300px**. La static è sparita in alto; la sticky resta attaccata al bordo, perché il suo genitore è ancora visibile; la fixed è sempre lì.',
      'Scorre fino a **450px**. Il genitore della sticky sta uscendo: la barra si ferma al **bordo basso del genitore** e sale con lui. La fixed resta ferma: il suo riferimento è la finestra.'
    ],
    monta: function (corpo) {
      corpo.classList.add('w10s');
      var a = K.anteprima({ altezza: 280, indirizzo: 'club-robotica.it' });
      a.classList.add('w10s-ante');
      var fissa = W.h('div', { 'class': 'w10s-fixed', testo: 'fixed' });
      var segno = W.h('div', { 'class': 'w10s-scroll' });
      a.appendChild(fissa); a.appendChild(segno);
      corpo.appendChild(a);
      var CSS = '.kit-body{padding:12px 14px;font:600 14px Arial,sans-serif;color:#1d2630}' +
        '.bar{height:34px;display:flex;align-items:center;padding:0 10px}.st{background:#e9a313;color:#2a1c00;width:55%}' +
        '.sk{position:sticky;top:0;background:#0f8d80;color:#fff;z-index:2}' +
        '.riga{height:12px;border-radius:6px;background:#e3e8ee;margin:12px 0}.riga.c{width:70%}' +
        '.gen{position:relative;border:2px dashed #78889a;height:375px;margin:14px 0}.gen>.et{position:absolute;right:6px;bottom:4px;font:600 11px Consolas,monospace;color:#5f7183}';
      var righe = function (n) { var s = ''; for (var k = 0; k < n; k++) s += '<div class="riga' + (k % 3 === 2 ? ' c' : '') + '"></div>'; return s; };
      a.metti('<div class="bar st">static</div>' + righe(3) + '<div class="gen"><div class="bar sk">sticky · top: 0</div>' + righe(10) + '<span class="et">genitore della sticky</span></div>' + righe(26), '', CSS);
      a.host.style.overflow = 'hidden';
      var Y = [0, 150, 300, 450];
      return function (i, anima) {
        if (anima) K.scorri(a.host, Y[i], 1100); else a.host.scrollTop = Y[i];
        segno.textContent = 'scroll: ' + Y[i] + 'px';
      };
    }
  });

  /* ===================== 10.3 · chi sta sopra? ===================== */
  W.registra('w10_zindex', function (el) {
    var b = W.base(el, 'Prova tu · chi sta sopra?', 'menu e numeri');
    var S = { c1: '1', c2: '2', A: 100, B: 5 };
    var Z = [['auto'], ['1'], ['2'], ['3']];
    b.ctrl.appendChild(K.menu('z-index contenitore 1', Z, S.c1, function (v) { S.c1 = v; disegna(); }));
    b.ctrl.appendChild(K.menu('z-index contenitore 2', Z, S.c2, function (v) { S.c2 = v; disegna(); }));
    function num(k) {
      var inp = W.h('input', { type: 'number', value: S[k], step: 1, min: -10, max: 9999, 'aria-label': 'z-index di ' + k });
      inp.oninput = function () { var v = parseInt(inp.value, 10); if (!isNaN(v)) { S[k] = v; disegna(); } };
      return W.h('label', { 'class': 'wid-campo kit-campo' }, [W.h('span', { testo: 'z-index di ' + k }), inp]);
    }
    b.ctrl.appendChild(num('A')); b.ctrl.appendChild(num('B'));
    var g = W.h('div', { 'class': 'kit-griglia' });
    var f = K.file('stile.css', '', 'css');
    var a = K.anteprima({ barra: false, altezza: 230 });
    var esito = W.h('div', { 'class': 'w10z-esito' });
    var dx = W.h('div', { 'class': 'kit-col' }, [a, esito]);
    g.appendChild(f); g.appendChild(dx); el.appendChild(g); b.chiudi();
    var CSS = '.kit-body{position:relative;height:100%;font:700 16px Arial,sans-serif}' +
      '.c{position:absolute;width:190px;height:150px;border:2px dashed;padding:4px 6px;font:600 12px Consolas,monospace}' +
      '.c1{left:14px;top:16px;border-color:#2456b3;background:rgba(47,111,214,.10);color:#2456b3}' +
      '.c2{left:150px;top:56px;border-color:#2f7d3a;background:rgba(47,158,68,.12);color:#2f7d3a}' +
      '.f{position:absolute;width:110px;height:76px;display:grid;place-items:center;color:#fff;box-shadow:0 3px 8px rgba(0,0,0,.25)}' +
      '.A{left:80px;top:36px;background:#2f6fd6}.B{left:16px;top:22px;background:#2f9e44}';
    function contesto() {
      var c1 = S.c1 !== 'auto', c2 = S.c2 !== 'auto', n1 = +S.c1, n2 = +S.c2;
      if (c1 && c2) return 'Tutti e due i contenitori creano un contesto: si confrontano loro (' + S.c1 + ' contro ' + S.c2 + (n1 === n2 ? ', pari: vince il secondo, che viene dopo nel codice' : '') + '). I z-index di A e B contano solo dentro le loro cartelline.';
      if (!c1 && c2) return 'Il contenitore 1 è auto e non crea un contesto: A (' + S.A + ') si confronta direttamente con il contenitore 2 (' + S.c2 + ')' + (S.A === n2 ? ', pari: vince il contenitore 2, che viene dopo' : '') + '.';
      if (c1 && !c2) return 'Il contenitore 2 è auto e non crea un contesto: B (' + S.B + ') si confronta direttamente con il contenitore 1 (' + S.c1 + ')' + (S.B === n1 ? ', pari: vince B, che viene dopo' : '') + '.';
      return 'Nessun contenitore crea un contesto: A (' + S.A + ') e B (' + S.B + ') si confrontano direttamente' + (S.A === S.B ? ', pari: vince B, che viene dopo' : '') + '.';
    }
    function disegna() {
      var root = a.metti('<div class="c c1" style="z-index:' + S.c1 + '">contenitore 1<div class="f A" style="z-index:' + S.A + '">A</div></div>' +
        '<div class="c c2" style="z-index:' + S.c2 + '">contenitore 2<div class="f B" style="z-index:' + S.B + '">B</div></div>', '', CSS);
      f.metti('/* tutti con position: absolute */\n.contenitore-1 { z-index: ' + S.c1 + '; }\n.contenitore-2 { z-index: ' + S.c2 + '; }\n.a { z-index: ' + S.A + '; }\n.b { z-index: ' + S.B + '; }');
      requestAnimationFrame(function () {
        var A = root.querySelector('.A').getBoundingClientRect(), B = root.querySelector('.B').getBoundingClientRect();
        var x = (Math.max(A.left, B.left) + Math.min(A.right, B.right)) / 2, y = (Math.max(A.top, B.top) + Math.min(A.bottom, B.bottom)) / 2;
        var top = root.elementFromPoint(x, y), chi = top && top.classList.contains('A') ? 'A' : 'B';
        esito.innerHTML = 'Sopra c’è <b class="' + chi + '">' + chi + '</b>';
        b.dica(contesto(), 'ok');
      });
    }
    disegna();
  });

  /* ===================== 10.4 · il genitore che collassa ===================== */
  var FHTML = '<div class="riquadro"><div class="img"></div><p>Arduino Uno: la scheda del club.</p></div><p class="dopo">Paragrafo successivo della pagina.</p>';
  K.demo('w10_flowroot', {
    titolo: 'Il genitore che collassa',
    inizio: 'Un riquadro con il bordo verde contiene un’immagine in `float: left` e una riga di testo. Il float **non conta nell’altezza**: il bordo avvolge solo il testo e l’immagine **esce sotto**, fin dentro il paragrafo successivo.',
    html: FHTML, altezza: 240,
    extra: '.kit-body{font:15px/1.4 Arial,sans-serif;color:#1d2630}.riquadro{box-sizing:border-box;border:3px solid #0a6f66;padding:8px;background:#f3fbf9}.riquadro p{margin:0}' +
      '.img{width:96px;height:110px;margin-right:12px;background:linear-gradient(160deg,#2f6fd6,#0a6f66);border-radius:3px}.dopo{color:#c2410c;margin:10px 0}',
    css0: '.img {\n  float: left;\n}', segna0: { 2: 'nuova' },
    passi: [
      { desc: 'Si aggiunge `display: flow-root` al riquadro: diventa un blocco che **contiene i propri float**. Il bordo scende e avvolge anche l’immagine.', css: '.img {\n  float: left;\n}\n.riquadro {\n  display: flow-root;\n}', segna: { 5: 'nuova' } },
      { desc: 'Si toglie `flow-root` e si usa il **clearfix**: uno pseudo-elemento vuoto in fondo al riquadro con `clear: both` scende sotto il float e trascina giù il bordo. Stesso risultato.', css: '.img {\n  float: left;\n}\n.riquadro::after {\n  content: "";\n  display: block;\n  clear: both;\n}', segna: { 5: 'nuova', 6: 'nuova', 7: 'nuova' } }
    ],
    dopo: function (i, a) {
      var r = a.root.querySelector('.riquadro'), h = r.offsetHeight;
      var hPrima = a._h || 0;
      if (hPrima && hPrima !== h && !W.ridotto && r.animate) r.animate([{ height: hPrima + 'px' }, { height: h + 'px' }], { duration: 800, easing: K.MOTO });
      a._h = h;
    }
  });
})();

