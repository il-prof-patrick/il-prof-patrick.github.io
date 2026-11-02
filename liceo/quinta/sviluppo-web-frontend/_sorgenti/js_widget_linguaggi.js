  /* ===================== Prova tu · e se spegnessi un linguaggio? ===================== */
  // Il mini sito è una pagina vera, in un iframe isolato (sandbox): i tre pezzi sono stringhe separate
  // e la pagina viene ricomposta ogni volta con solo i linguaggi accesi.
  var SITO_HTML = [
    '<header class="top"><a class="logo" href="#"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M7 2v3M11 2v3M15 2v3"/></svg>Bottega Aurora</a>',
    '<nav><a href="#menu">Menu</a><a href="#dove">Dove siamo</a><a href="#dove">Contatti</a></nav>',
    '<div class="azioni"><button id="tema" type="button">Tema scuro</button><button id="carrello" type="button">Ordine: <span id="n">0</span></button></div></header>',
    '<section class="hero"><h1>Il caffè che ti sveglia il buonumore</h1><p>Torrefazione artigianale e dolci freschi ogni mattina, a due passi da scuola.</p><a class="cta" href="#menu">Guarda il menu</a></section>',
    '<main><h2 id="menu">Il menu di oggi</h2>',
    '<div class="filtri"><button type="button" data-f="tutti" class="on">Tutti</button><button type="button" data-f="caffe">Caffè</button><button type="button" data-f="dolci">Dolci</button></div>',
    '<ul class="griglia">',
    // categoria, nome, descrizione, prezzo, tracciato dell'icona
    [['caffe', 'Espresso', 'Corto, intenso, con la sua crema.', '1,20 €', 'M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM7 2v3M11 2v3M15 2v3'],
     ['caffe', 'Cappuccino', 'Latte montato e una spolverata di cacao.', '1,80 €', 'M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM7 2v3M11 2v3'],
     ['caffe', 'Tè matcha', 'Verde, vellutato, con latte d’avena.', '3,00 €', 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10ZM2 21c0-3 1.9-5.5 6-7 4-1.5 7-1.5 9-3'],
     ['dolci', 'Cornetto', 'Sfogliato, caldo di forno, alla crema.', '1,50 €', 'M3 15c2-7 7-11 13-12 2 0 3 1 3 3-1 6-5 11-12 13-3 .5-5-1.5-4-4ZM8 8l3 3M11 6l3 3'],
     ['dolci', 'Tiramisù', 'Fatto ogni mattina, con mascarpone vero.', '4,50 €', 'M3 11h18v9H3ZM3 11l3-7h12l3 7M8 15h.01M13 15h.01M17 17h.01'],
     ['dolci', 'Brownie', 'Cioccolato fondente e noci, ancora morbido.', '3,20 €', 'M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM4 9l2-5h12l2 5M9 14h.01M14 16h.01M15 12h.01']].map(function (c) {
      return '<li class="card" data-c="' + c[0] + '"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="' + c[4] + '"/></svg><h3>' + c[1] + '</h3><p>' + c[2] + '</p><div class="riga"><b>' + c[3] + '</b><button class="add" type="button">Aggiungi</button></div></li>';
    }).join(''),
    '</ul></main>',
    '<footer id="dove"><b>Via dei Mille 12</b> · aperti dalle 7:00 alle 19:00 · <a href="#menu">torna al menu</a></footer>'
  ].join('\n');

  var SITO_CSS = [
    ':root{--bg:#fffaf3;--card:#fff;--ink:#2a1e16;--mut:#7a6a5c;--acc:#c8541e;--line:#ecdfd0;--h1:#ffd9a8;--h2:#ff9d6c;--hi:#3b1d0e}',
    '[data-t=scuro]{--bg:#171210;--card:#241c18;--ink:#f6ece2;--mut:#b8a595;--acc:#ff8a4c;--line:#3a2d26;--h1:#4a2616;--h2:#8a3f1c;--hi:#fff1e4}',
    '*{box-sizing:border-box}',
    'body{margin:0;font:15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);color:var(--ink);transition:background .3s,color .3s}',
    '.top{position:sticky;top:0;z-index:2;display:flex;align-items:center;flex-wrap:wrap;gap:8px 18px;padding:10px 18px;background:var(--bg);border-bottom:1px solid var(--line)}',
    '.logo{display:flex;align-items:center;gap:8px;font-weight:800;color:var(--acc);text-decoration:none}',
    'nav{display:flex;gap:16px;margin-right:auto}nav a{color:var(--mut);font-weight:600;text-decoration:none;transition:color .15s}nav a:hover{color:var(--acc)}',
    '.azioni{display:flex;gap:8px}button{font:inherit;cursor:pointer}',
    '.azioni button,.filtri button{border:1px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:5px 14px;font-weight:600;transition:background .15s,color .15s,transform .15s}',
    '.azioni button:hover,.filtri button:hover{border-color:var(--acc)}',
    '#carrello.pop{transform:scale(1.12);background:var(--acc);color:#fff}',
    '.hero{padding:34px 18px;text-align:center;color:var(--hi);background:linear-gradient(135deg,var(--h1),var(--h2))}',
    '.hero h1{margin:0 0 8px;font-size:clamp(24px,5vw,34px);line-height:1.15}.hero p{margin:0 auto;max-width:34em}',
    '@media(min-width:700px){.hero{padding:20px 18px 22px}.hero h1{font-size:28px}}',
    '.cta{display:inline-block;margin-top:14px;padding:9px 22px;border-radius:999px;background:var(--hi);color:var(--h1);font-weight:700;text-decoration:none;transition:transform .15s}',
    '.cta:hover{transform:translateY(-2px)}',
    'main{padding:18px 18px 8px}h2{margin:0 0 10px;font-size:20px}',
    '.filtri{display:flex;gap:8px;margin-bottom:14px}.filtri .on{background:var(--acc);border-color:var(--acc);color:#fff}',
    '.griglia{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}',
    '.card{padding:14px;background:var(--card);border:1px solid var(--line);border-radius:14px;transition:transform .2s,box-shadow .2s}',
    '.card:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.14)}',
    '.card svg{color:var(--acc)}.card h3{margin:6px 0 2px;font-size:16px}.card p{margin:0 0 10px;color:var(--mut);font-size:13px;line-height:1.4}',
    '.riga{display:flex;align-items:center;justify-content:space-between;gap:8px}',
    '.add{border:0;border-radius:999px;padding:5px 12px;background:var(--acc);color:#fff;font-weight:700;font-size:13px;transition:filter .15s}.add:hover{filter:brightness(1.12)}',
    'footer{padding:16px 18px 20px;color:var(--mut);font-size:13px}footer a{color:var(--acc)}'
  ].join('\n');

  var SITO_JS = [
    'var n=0,num=document.getElementById("n"),car=document.getElementById("carrello");',
    'document.addEventListener("click",function(e){if(e.target.closest("a"))e.preventDefault();});',
    '[].forEach.call(document.querySelectorAll(".add"),function(b){b.onclick=function(){n++;num.textContent=n;car.classList.add("pop");setTimeout(function(){car.classList.remove("pop");},220);',
    ' b.textContent="Aggiunto";setTimeout(function(){b.textContent="Aggiungi";},900);};});',
    '[].forEach.call(document.querySelectorAll(".filtri button"),function(f){f.onclick=function(){',
    ' [].forEach.call(document.querySelectorAll(".filtri button"),function(x){x.classList.toggle("on",x===f);});',
    ' [].forEach.call(document.querySelectorAll(".card"),function(c){c.hidden=f.dataset.f!=="tutti"&&c.dataset.c!==f.dataset.f;});};});',
    'var tema=document.getElementById("tema");tema.onclick=function(){var s=document.documentElement.dataset.t==="scuro";',
    ' document.documentElement.dataset.t=s?"":"scuro";tema.textContent=s?"Tema scuro":"Tema chiaro";};'
  ].join('\n');

  W.registra('linguaggi', function (el) {
    var b = W.base(el, 'Prova tu · e se spegnessi un linguaggio?', 'clicca HTML, CSS, JavaScript');
    var acceso = { html: true, css: true, js: true };
    var voci = [['html', 'HTML', 'struttura'], ['css', 'CSS', 'aspetto'], ['js', 'JavaScript', 'comportamento']];
    b.ctrl.className = 'wid-ling';
    var frame = W.h('iframe', { title: 'Anteprima della pagina web', sandbox: 'allow-scripts', loading: 'lazy' });
    var barra = W.h('div', { 'class': 'barra' }, [W.h('i'), W.h('i'), W.h('i'), W.h('span', { 'class': 'indirizzo', testo: 'https://www.bottegaaurora.it' })]);
    b.ctrl.appendChild(W.h('div', { 'class': 'quadro' }, [barra, frame]));
    var tasti = W.h('div', { 'class': 'wid-ling-tasti', role: 'group', 'aria-label': 'Linguaggi della pagina' });
    var bt = {};
    voci.forEach(function (v) {
      var t = W.h('button', { 'class': 'tasto', type: 'button', 'aria-pressed': 'true' }, [W.h('b', { testo: v[1] }), W.h('span', { testo: v[2] + ' · acceso' })]);
      t.onclick = function () { acceso[v[0]] = !acceso[v[0]]; disegna(); };
      bt[v[0]] = t; tasti.appendChild(t);
    });
    b.ctrl.appendChild(tasti);
    b.chiudi();
    function dica(t, tono) { b.stato.textContent = t; b.stato.className = 'stato passi-desc' + (tono ? ' ' + tono : ''); }
    function disegna() {
      voci.forEach(function (v) {
        bt[v[0]].setAttribute('aria-pressed', String(acceso[v[0]]));
        bt[v[0]].lastChild.textContent = v[2] + (acceso[v[0]] ? ' · acceso' : ' · spento');
      });
      var doc = '<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Bottega Aurora</title>' +
        (acceso.html && acceso.css ? '<style>' + SITO_CSS + '</style>' : '') + '</head><body style="margin:0">' +
        (acceso.html ? SITO_HTML : '') +
        (acceso.html && acceso.js ? '<script>' + SITO_JS + '<\/script>' : '') + '</body></html>';
      frame.srcdoc = doc;
      if (!acceso.html) dica('Senza HTML non c’è niente da mostrare: CSS e JavaScript descrivono come si vede e come si comporta una pagina, ma qui non c’è nessun elemento a cui applicarsi. Un arredamento e un impianto elettrico senza muri.', 'att');
      else if (acceso.css && acceso.js) dica('Tutti e tre accesi: una pagina moderna, bella e interattiva. Prova i filtri, il pulsante «Aggiungi» e il tema scuro.', 'ok');
      else if (!acceso.css && acceso.js) dica('Senza CSS la struttura c’è e tutto funziona (prova i filtri e il carrello), ma il browser usa l’aspetto di base: niente colori, niente impaginazione. La casa ha i muri e la luce, ma è spoglia.', 'att');
      else if (acceso.css && !acceso.js) dica('Senza JavaScript la pagina è bella ma ferma: i filtri, il carrello e il tema scuro non rispondono. La casa è arredata, ma manca l’impianto elettrico.', 'att');
      else dica('Solo HTML: titoli, testi, elenchi e pulsanti ci sono, ma senza aspetto e senza comportamento. Così erano le prime pagine del Web.', 'att');
    }
    disegna();
  });
