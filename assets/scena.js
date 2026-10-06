/* Scene delle animazioni a passi: funzioni comuni a tutti i capitoli */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function S(par, tag, att, testo) { var n = document.createElementNS(NS, tag); for (var k in att) if (att[k] != null) n.setAttribute(k, att[k]); if (testo != null) n.textContent = testo; if (par) par.appendChild(n); return n; }
  function num(x, d) { return x.toFixed(d == null ? 1 : d).replace('.', ','); }
  // attributi dei passi: p = compare al passo, f = resta fino al passo, r = ritardo ms, d = durata ms
  function pa(o) { o = o || {}; var a = {}; if (o.p != null) a['data-passo'] = o.p; else if (o.f != null) a['data-passo'] = 0; if (o.f != null) a['data-fino'] = o.f; if (o.r) a['data-ritardo'] = o.r; if (o.d) a['data-durata'] = o.d;
    if (o.rotta) a['data-rotta'] = o.rotta; if (o.inv) a['data-inverso'] = ''; if (o.resta) a['data-resta'] = ''; if (o.solo) a['data-solo'] = o.solo; return a; }
  function costruisci(id, fn) { var el = document.getElementById(id); if (!el) return; var svg = el.querySelector('svg:not(.ic)'); fn(svg, helper(svg)); }
  function helper(svg) {
    return {
      g: function (o, par) { return S(par || svg, 'g', pa(o)); },
      box: function (x, y, w, h, cls, o, par) { return S(par || svg, 'rect', Object.assign({ x: x, y: y, width: w, height: h, rx: 2, 'class': cls || 'nodo' }, pa(o))); },
      txt: function (x, y, t, cls, o, anchor, par) { return S(par || svg, 'text', Object.assign({ x: x, y: y, 'class': cls || 't', 'text-anchor': anchor || 'middle' }, pa(o)), t); },
      path: function (d, cls, o, id, par) { return S(par || svg, 'path', Object.assign({ d: d, 'class': cls || 'lin', id: id }, pa(o))); },
      disp: function (tipo, x, y, o) { return glifo(svg, tipo, x, y, o); },
      // qualunque icona Lucide (oltre 1500: cpu, database, lock, key, user, file, printer, battery…) centrata in (x, y)
      icona: function (nome, x, y, o) {
        o = o || {}; var d = o.s || 40, ic = (window.ICONE || {})[nome];
        var g = S(svg, 'g', Object.assign({ transform: 'translate(' + (x - d / 2) + ',' + (y - d / 2) + ') scale(' + (d / 24) + ')', 'class': 'ic-scena' + (o.tono ? ' ' + o.tono : '') }, pa(o)));
        if (ic) g.innerHTML = ic; else S(g, 'rect', { x: 2, y: 2, width: 20, height: 20, rx: 3 });
        if (o.nome) S(svg, 'text', Object.assign({ x: x, y: y + d / 2 + 16, 'text-anchor': 'middle', 'class': 't' }, pa(o)), o.nome);
        if (o.sotto) S(svg, 'text', Object.assign({ x: x, y: y + d / 2 + 31, 'text-anchor': 'middle', 'class': 't-m' }, pa(o)), o.sotto);
        return g;
      },
      via: function (id, d) { return S(svg, 'path', { id: id, d: d, fill: 'none', stroke: 'none' }); },
      // pacchetto che si muove lungo una via durante il suo passo
      pk: function (via, o, testo, cls, w) {
        var g = S(svg, 'g', Object.assign({ 'class': 'pk' }, pa(Object.assign({ rotta: '#' + via }, o))));
        w = w || (testo ? Math.max(30, testo.length * 8.5 + 14) : 14);
        if (cls === 'goccia') S(g, 'circle', { r: 5, 'class': 'pkt' });
        else { S(g, 'rect', { x: -w / 2, y: testo ? -12 : -6, width: w, height: testo ? 24 : 12, rx: 2, 'class': cls || 'pkt' });
          if (testo) S(g, 'text', { y: 4, 'text-anchor': 'middle', 'class': cls === 'pkt-ok' ? 't-on' : (cls === 'pkt-err' ? 't-e' : 't-mono-on'), style: cls === 'pkt-ok' ? 'font-size:12px' : null }, testo); }
        return g;
      }
    };
  }
  /* Dispositivi disegnati (non rettangoli generici): A.disp(tipo, x, y, opz) disegna l'oggetto centrato in (x, y).
     tipi: telefono, computer, portatile, server, router, switch, modem, accesspoint, antenna, satellite, parabola, casa, centrale, armadio, nuvola, globo
     opz: { s: scala, nome: 'etichetta sotto', sotto: 'seconda riga', attivo: true, p/f/r: passi }  */
  function glifo(svg, tipo, x, y, o) {
    o = o || {}; var s = o.s || 1, g = S(svg, 'g', Object.assign({ transform: 'translate(' + x + ',' + y + ') scale(' + s + ')', 'class': 'disp disp-' + tipo + (o.attivo ? ' attivo' : '') }, pa(o)));
    function E(tag, a) { return S(g, tag, a); }
    var c = o.attivo ? 'nodo attivo' : 'nodo', h = 26;
    switch (tipo) {
      case 'telefono': E('rect', { x: -14, y: -26, width: 28, height: 52, rx: 7, 'class': c }); E('rect', { x: -10, y: -20, width: 20, height: 34, rx: 2, 'class': 'schermo' }); E('circle', { cx: 0, cy: 20, r: 2, 'class': 'punto' }); h = 26; break;
      case 'computer': E('rect', { x: -30, y: -26, width: 60, height: 40, rx: 4, 'class': c }); E('rect', { x: -25, y: -21, width: 50, height: 30, rx: 2, 'class': 'schermo' }); E('path', { d: 'M-6 14 L-9 24 M6 14 L9 24 M-16 25 H16', 'class': 'filo' }); h = 26; break;
      case 'portatile': E('rect', { x: -26, y: -24, width: 52, height: 34, rx: 4, 'class': c }); E('rect', { x: -21, y: -19, width: 42, height: 24, rx: 2, 'class': 'schermo' }); E('path', { d: 'M-34 12 H34 L30 18 H-30 Z', 'class': c }); h = 18; break;
      case 'server': [-24, -7, 10].forEach(function (dy) { E('rect', { x: -26, y: dy, width: 52, height: 15, rx: 3, 'class': c }); E('circle', { cx: -17, cy: dy + 7.5, r: 2.4, 'class': 'led' }); E('path', { d: 'M-8 ' + (dy + 7.5) + ' H18', 'class': 'filo' }); }); h = 25; break;
      case 'router': E('path', { d: 'M-22 -10 L-28 -30 M22 -10 L28 -30', 'class': 'filo spesso' }); E('rect', { x: -36, y: -12, width: 72, height: 26, rx: 7, 'class': 'nodo attivo' }); [-20, -10, 0].forEach(function (dx) { E('circle', { cx: dx, cy: 1, r: 2.6, 'class': 'led' }); }); h = 14; break;
      case 'modem': E('rect', { x: -32, y: -12, width: 64, height: 26, rx: 6, 'class': c }); [-18, -8, 2, 12].forEach(function (dx) { E('circle', { cx: dx, cy: 1, r: 2.4, 'class': 'led' }); }); E('path', { d: 'M-20 14 L-24 20 M20 14 L24 20', 'class': 'filo' }); h = 20; break;
      case 'switch': E('rect', { x: -44, y: -13, width: 88, height: 26, rx: 4, 'class': c }); for (var i = 0; i < 6; i++) E('rect', { x: -36 + i * 12, y: -4, width: 8, height: 7, rx: 1, 'class': 'porta' }); h = 13; break;
      case 'accesspoint': E('ellipse', { cx: 0, cy: 6, rx: 26, ry: 9, 'class': c }); E('circle', { cx: 0, cy: 4, r: 2.5, 'class': 'led' }); [10, 17].forEach(function (r) { E('path', { d: 'M' + (-r) + ' ' + (-4 - r / 2) + ' Q0 ' + (-12 - r) + ' ' + r + ' ' + (-4 - r / 2), 'class': 'onda' }); }); h = 15; break;
      case 'antenna': E('path', { d: 'M0 -26 L-12 26 M0 -26 L12 26 M-7 4 H7 M-9.5 15 H9.5', 'class': 'filo spesso' }); E('circle', { cx: 0, cy: -26, r: 3.5, 'class': 'led' }); [9, 15].forEach(function (r) { E('path', { d: 'M' + (-r) + ' ' + (-26 - r * .6) + ' A' + r + ' ' + r + ' 0 0 0 ' + (-r) + ' ' + (-26 + r * .6) + ' M' + r + ' ' + (-26 - r * .6) + ' A' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + (-26 + r * .6), 'class': 'onda' }); }); h = 26; break;
      case 'satellite': E('rect', { x: -7, y: -6, width: 14, height: 12, rx: 2, 'class': c }); [-1, 1].forEach(function (d) { E('rect', { x: d < 0 ? -27 : 11, y: -4, width: 16, height: 8, rx: 1, 'class': 'pannello' }); }); h = 8; break;
      case 'parabola': E('path', { d: 'M-18 -8 A22 22 0 0 0 10 20 Z', 'class': c }); E('path', { d: 'M-4 6 L10 -10 M2 14 L-2 26 M-12 26 H8', 'class': 'filo spesso' }); E('circle', { cx: 10, cy: -10, r: 2.5, 'class': 'led' }); h = 26; break;
      case 'casa': E('path', { d: 'M-30 -4 L0 -26 L30 -4 Z', 'class': c }); E('rect', { x: -24, y: -4, width: 48, height: 30, rx: 2, 'class': c }); E('rect', { x: -6, y: 10, width: 12, height: 16, 'class': 'schermo' }); h = 26; break;
      case 'centrale': E('rect', { x: -36, y: -26, width: 72, height: 52, rx: 4, 'class': 'nodo attivo' }); for (var r = 0; r < 3; r++) for (var k = 0; k < 4; k++) E('rect', { x: -28 + k * 15, y: -18 + r * 14, width: 10, height: 7, rx: 1, 'class': 'finestra' }); h = 26; break;
      case 'armadio': E('rect', { x: -18, y: -28, width: 36, height: 56, rx: 3, 'class': c }); E('path', { d: 'M0 -24 V24 M-13 -18 H-4 M-13 -13 H-4 M4 -18 H13 M4 -13 H13', 'class': 'filo' }); h = 28; break;
      case 'nuvola': E('path', { d: 'M-26 14 A12 12 0 0 1 -20 -8 A16 16 0 0 1 10 -14 A13 13 0 0 1 28 4 A10 10 0 0 1 22 14 Z', 'class': c }); h = 14; break;
      case 'globo': E('circle', { r: 24, 'class': c }); E('ellipse', { rx: 10, ry: 24, 'class': 'onda' }); E('path', { d: 'M-24 0 H24 M-21 -11 H21 M-21 11 H21', 'class': 'onda' }); h = 24; break;
    }
    var on = o.attivo ? 't' : 't';
    if (o.nome) S(svg, 'text', Object.assign({ x: x, y: y + (h + 16) * s, 'text-anchor': 'middle', 'class': 't' }, pa(o)), o.nome);
    if (o.sotto) S(svg, 'text', Object.assign({ x: x, y: y + (h + 31) * s, 'text-anchor': 'middle', 'class': 't-m' }, pa(o)), o.sotto);
    return g;
  }

  /* aiuti comuni a tutte le scene (prima erano copiati in ogni capitolo) */
  // croce rossa di guasto o di blocco
  function croce(A, x, y, o) { var g = A.g(o); A.path('M' + (x - 10) + ' ' + (y - 10) + ' L' + (x + 10) + ' ' + (y + 10) + ' M' + (x + 10) + ' ' + (y - 10) + ' L' + (x - 10) + ' ' + (y + 10), 'lin err', {}, null, g).style.cssText = 'stroke-dasharray:none;stroke-width:4'; return g; }
  // linea colorata libera (fili, fibre, onde)
  function linea(svg, d, colore, spess, o) { return S(svg, 'path', Object.assign({ d: d, fill: 'none', stroke: colore, 'stroke-width': spess || 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, pa(o))); }
  // fulmine (disturbo)
  function fulmine(svg, x, y, o) { return S(svg, 'path', Object.assign({ d: 'M' + (x + 4) + ' ' + y + ' L' + (x - 8) + ' ' + (y + 20) + ' L' + x + ' ' + (y + 20) + ' L' + (x - 6) + ' ' + (y + 38) + ' L' + (x + 10) + ' ' + (y + 14) + ' L' + (x + 2) + ' ' + (y + 14) + ' L' + (x + 8) + ' ' + y + ' Z', fill: 'var(--accent-500)', stroke: 'var(--accent-ink)', 'stroke-width': 1 }, pa(o))); }
  // un gruppo che si muove lungo una via (auto, telefono, busta…): disegna(g) ci mette dentro il disegno centrato in 0,0
  function mobile(A, via, o, disegna) { var g = A.g(Object.assign({ rotta: '#' + via }, o)); g.setAttribute('class', 'pk'); g.style.filter = 'none'; disegna(g); return g; }
  // un oggetto fermo in (x, y), disegnato da disegna(g) attorno a 0,0
  function fermo(A, x, y, o, disegna) { var g = A.g(o); g.setAttribute('transform', 'translate(' + x + ',' + y + ')'); disegna(g); return g; }
  // etichetta su un rettangolo arrotondato (fumetto, cartello)
  function cartello(A, x, y, w, h, testo, cls, o, tcls) { var g = A.g(o); A.box(x, y, w, h, cls || 'nodo', {}, g); A.txt(x + w / 2, y + h / 2 + 5, testo, tcls || 't', {}, 'middle', g); return g; }
  function rnd(seme) { var s = seme; return function () { s = (s * 16807) % 2147483647; return s / 2147483647; }; }

  window.SCENA = { S: S, pa: pa, glifo: glifo, costruisci: costruisci, helper: helper, rnd: rnd, num: num, croce: croce, linea: linea, fulmine: fulmine, mobile: mobile, fermo: fermo, cartello: cartello };
})();
