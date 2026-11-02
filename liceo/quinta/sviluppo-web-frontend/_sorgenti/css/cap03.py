# Capitolo 3 · I selettori
from lib import *

P.capo('I selettori', 3)

# ---------------------------------------------------------------- 3.1
P.sez('3.1', 'Tipo, classe, id, universale',
      R='Tipo, classe, id e universale scelgono per tag, per class, per id unico o tutti; punto e cancelletto fanno parte del selettore.')
P.p('I selettori di base sono quattro:')
P.ul(['il **selettore di tipo** sceglie gli elementi per nome del tag: `p` prende tutti i paragrafi;',
      'il **selettore di classe** sceglie gli elementi che hanno quella classe nell’attributo `class`: `.nota` prende tutti gli elementi con `class="nota"`, qualunque sia il tag;',
      'il **selettore di id** sceglie l’elemento con quell’`id`: `#robot` prende l’elemento con `id="robot"`;',
      'il **selettore universale** `*` prende tutti gli elementi.'])
P.css('p      { line-height: 1.5; }        /* tutti i paragrafi */\n.nota  { color: gray; }             /* class="nota" */\n#robot { color: crimson; }          /* id="robot" */\n*      { box-sizing: border-box; }  /* tutti gli elementi */')
P.p('Il **punto** e il **cancelletto** fanno parte del selettore, non del nome: nell’HTML si scrive `class="nota"`, nel CSS `.nota`. Un elemento può avere **più classi**, separate da spazi (`class="card big"`), e una classe si può dare a tutti gli elementi che si vuole. L’`id` invece è **unico**: nella pagina non ci possono essere due elementi con lo stesso id.',
    'Nel widget qui sotto c’è la pagina campione del club di robotica che useremo in tutto il capitolo, scritta come elenco di elementi: ogni riga è un elemento, rientrato dentro il suo genitore. Scrivi un selettore, o scegli un esempio, e guarda quali elementi prende.')
P.widget('w3_cacc', 'Il selettore-cacciatore')
P.err('«`.titolo` e `titolo` sono lo stesso selettore.»',
      'Senza il punto è un selettore di **tipo**: cerca gli elementi `<titolo>`, che in HTML non esistono. Per la classe `titolo` serve il punto: `.titolo`.')
P.err('«Lo stesso id si può dare a più elementi che devono avere lo stesso stile.»',
      'L’id è **unico** nella pagina. Per dare lo stesso stile a più elementi si usa una **classe**, che si può ripetere quante volte si vuole.')

# ---------------------------------------------------------------- 3.2
P.sez('3.2', 'Raggruppare e combinare',
      R='Virgola raggruppa, spazio prende i discendenti, `>` i figli diretti, `+` e `~` i fratelli; senza spazio le condizioni valgono sullo stesso elemento.')
P.p('La **virgola** crea una **lista di selettori** che condividono le stesse dichiarazioni: `h1, h2, h3 { font-family: Georgia, serif; }` vale per tutti e tre i titoli. Attenzione: se **uno solo** dei selettori della lista non è valido, **l’intera regola viene scartata**, anche per gli altri.',
    'Più selettori **scritti di seguito, senza spazio**, sono condizioni sullo **stesso elemento** e formano un [[selettore composto]]: `p.nota` prende i paragrafi con la classe `nota`, `.card.big` gli elementi che hanno entrambe le classi.',
    'I **combinatori** collegano due selettori in base alla posizione degli elementi nell’albero della pagina:')
P.tab([['Combinatore', 'Si legge', 'Che cosa prende'],
       ['`A B` (spazio)', 'B **discendente** di A', 'ogni B dentro A, a qualsiasi profondità: `main p`'],
       ['`A > B`', 'B **figlio** di A', 'solo i B figli diretti di A: `nav > a`'],
       ['`A + B`', 'B **fratello adiacente** di A', 'il B subito dopo A, con lo stesso genitore: `h3 + p`'],
       ['`A ~ B`', 'B **fratello successivo** di A', 'tutti i B che vengono dopo A, con lo stesso genitore: `h2 ~ div`']],
      'I combinatori')
P.p('Un selettore si legge **da destra a sinistra**: l’elemento preso è sempre l’ultimo (in `main p` sono i `p`), quelli prima sono condizioni. E il CSS sceglie solo in base a ciò che sta **sopra** o **prima** nell’albero: non c’è un combinatore per «il genitore di B» o per «l’elemento che viene prima di B». Per questi casi oggi esiste `:has()`.')
P.widget('w3_cacc_comb', 'Combinatori nella pagina campione')
P.err('«`.card .big` e `.card.big` sono lo stesso selettore.»',
      'Con lo spazio, `.big` deve stare **dentro** un `.card` (discendente); senza spazio, lo **stesso elemento** deve avere entrambe le classi. Nella pagina campione il primo non prende niente, il secondo prende la card «Stampa 3D».')
P.err('«Se un selettore della lista è sbagliato, funzionano comunque gli altri.»',
      'Basta un selettore non valido nella lista perché **l’intera regola venga scartata**, per tutti i selettori.')
P.dom('`.card .big` e `.card.big`: sono lo stesso selettore?',
      'No. Con lo spazio `.big` è un elemento **dentro** un `.card`; senza spazio è **lo stesso elemento** che ha entrambe le classi.')

# ---------------------------------------------------------------- 3.3
P.sez('3.3', 'Selettori di attributo',
      R='I selettori di attributo scelgono in base ai dati dell’elemento, senza aggiungere classi a mano.')
P.p('I [[selettori di attributo]] scelgono gli elementi in base ai loro attributi e ai loro valori, scritti tra parentesi quadre. Così si possono dare uno stile a tutti i link esterni o a tutti i campi email **senza aggiungere classi a mano**: l’informazione c’è già nell’HTML.')
P.tab([['Selettore', 'Significato', 'Esempio'],
       ['`[attr]`', 'l’attributo c’è, con qualunque valore', '`input[required]`'],
       ['`[attr="v"]`', 'valore **esattamente** uguale a v', '`input[type="email"]`'],
       ['`[attr^="v"]`', 'valore che **inizia** con v', '`a[href^="https"]`: link esterni sicuri'],
       ['`[attr$="v"]`', 'valore che **finisce** con v', '`a[href$=".pdf"]`: link ai PDF'],
       ['`[attr*="v"]`', 'valore che **contiene** v', '`a[href*="arduino"]`'],
       ['`[attr~="v"]`', 'v è una delle **parole** del valore', '`[class~="big"]`']],
      'I selettori di attributo')
P.p('Dopo il valore si può aggiungere una `i` per ignorare maiuscole e minuscole: `a[href$=".pdf" i]` prende anche un link a `PROGRAMMA.PDF`.')
P.css('a[href^="https"]    { color: #0a6f66; }   /* link esterni */\na[href$=".pdf"]     { font-weight: bold; } /* link ai PDF */\ninput[type="email"] { border-color: #0a6f66; }')
P.widget('w3_cacc_attr', 'Selettori di attributo nella pagina campione')
P.err('«`[href=".pdf"]` prende i link ai PDF.»',
      '`=` vuole il valore **esatto**: prenderebbe solo un link con `href=".pdf"`. Per «finisce con» serve `$=`: `a[href$=".pdf"]`.')

# ---------------------------------------------------------------- 3.4
P.sez('3.4', 'Pseudo-classi',
      R='La pseudo-classe sceglie un elemento esistente in un certo stato, posizione o che non soddisfa una condizione.')
P.p('Una [[pseudo-classe]] (due punti seguiti da un nome) sceglie un elemento che esiste già nell’HTML **quando si trova in un certo stato o in una certa posizione**, oppure quando **non** soddisfa una condizione. Sono tre famiglie:')
P.ul(['**stato**: `:hover` (il puntatore è sopra), `:focus` (l’elemento ha il fuoco, dopo un clic o con il tasto Tab), `:active` (mentre lo si preme), `:checked` (casella spuntata), `:disabled` (elemento disattivato);',
      '**posizione** tra i fratelli: `:first-child`, `:last-child`, `:nth-child()`, `:nth-of-type()`, `:only-child` (figlio unico), `:empty` (senza contenuto);',
      '**negazione**: `:not()` prende gli elementi che **non** corrispondono al selettore tra parentesi, per esempio `.card:not(.big)`.'])
P.widget('w3_stati', 'Le pseudo-classi di stato')
P.p('Sugli schermi touch un vero `:hover` non esiste: non c’è un puntatore che passa sopra senza toccare. Le informazioni importanti non devono quindi comparire solo al passaggio del mouse.',
    '`:nth-child()` conta **tutti i fratelli**, di qualunque tag; `:nth-of-type()` conta solo i fratelli **dello stesso tag**. Quindi `p:nth-child(2)` vuol dire «un `p` che è il secondo figlio del suo genitore», non «il secondo `p`». Tra le parentesi si scrive un numero, una parola chiave o un’espressione con `n`, che vale 0, 1, 2, 3…:')
P.tab([['Espressione', 'Posizioni prese'],
       ['`3`', 'solo la terza'],
       ['`odd` (= `2n+1`)', 'le dispari: 1, 3, 5…'],
       ['`even` (= `2n`)', 'le pari: 2, 4, 6…'],
       ['`3n`', 'una ogni tre: 3, 6, 9…'],
       ['`n+3`', 'dalla terza in poi: 3, 4, 5…'],
       ['`-n+3`', 'le prime tre: 1, 2, 3']],
      'Le espressioni di nth-child')
P.widget('w3_cacc_pseudo', 'Pseudo-classi di posizione nella pagina campione')
P.p('Altre pseudo-classi arriveranno più avanti: `:link` e `:visited` con i link (6.2), `:valid` e `:invalid` con i moduli (7.5). Ne esistono altre ancora, come `:is()`, `:where()`, `:has()` e `:focus-visible`.')
P.err('«`p:nth-child(2)` colora il secondo paragrafo.»',
      'Colora un `p` **solo se è il secondo figlio** del suo genitore, contando tutti i fratelli. Per il secondo paragrafo tra i soli paragrafi serve `p:nth-of-type(2)`.')
P.dom('In un `div` ci sono un `h2` seguito da tre `p`. Che cosa colora `p:nth-child(2)`?',
      'Il **primo paragrafo**: è il secondo figlio del `div`, perché il primo è l’`h2`.')

# ---------------------------------------------------------------- 3.5
P.sez('3.5', 'Pseudo-elementi',
      R='I pseudo-elementi sono parti di un elemento o contenuti generati che nell’HTML non ci sono; servono a decorare.')
P.p('Un [[pseudo-elemento]] (con due volte i due punti, `::`) sceglie una **parte** di un elemento, oppure crea un **contenuto generato** che nell’HTML non c’è:')
P.ul(['`::first-letter` la prima lettera e `::first-line` la prima riga di un blocco di testo;',
      '`::selection` il testo selezionato dall’utente e `::placeholder` il testo segnaposto di un campo;',
      '`::before` e `::after` creano un elemento finto all’inizio e alla fine del contenuto, che compare **solo se ha la proprietà `content`** (anche vuota: `content: ""`).'])
P.widget('w3_pseudoel', 'I pseudo-elementi uno alla volta')
P.p('La forma con un solo due punti (`:before`) è un’eredità del CSS 2 e funziona ancora, ma la regola è: **due due punti** per i pseudo-elementi, **un due punti** per le pseudo-classi.',
    'Il contenuto generato serve a **decorare**: non si può selezionare né copiare e non tutti gli screen reader lo leggono. Un’informazione importante va nell’HTML.')
P.css('.nuovo::after {\n  content: "NUOVO";\n  background: crimson;\n  color: white;\n  font-size: 0.7em;\n  padding: 2px 6px;\n  margin-left: 6px;\n}', aula='Un’etichetta generata')
P.err('«`::before` mette l’icona anche senza `content`.»',
      'Senza la proprietà `content` il pseudo-elemento **non viene creato** e non appare nulla, qualunque altra proprietà gli si dia.')

# ---------------------------------------------------------------- 3.6
P.sez('3.6', 'Differenza tra classe e id, tra pseudo-classe e pseudo-elemento',
      R='La classe si riusa, l’id è unico; la pseudo-classe sceglie uno stato, il pseudo-elemento una parte o un contenuto generato.')
P.p('Due coppie che si confondono spesso, messe a confronto.')
P.tab([['', 'Classe', 'Id'],
       ['Nell’HTML e nel CSS', '`class="card big"` · `.card`', '`id="robot"` · `#robot`'],
       ['Quante volte', 'su quanti elementi si vuole; più classi per elemento', '**una volta** nella pagina; un id per elemento'],
       ['Serve anche per', 'JavaScript', 'ancore dei link (`href="#robot"`), `<label for="…">`, JavaScript'],
       ['Per lo stile', '**sì**, è la scelta normale', 'meglio di no: pesa troppo nella cascata (5.4)']],
      'Classe e id')
P.tab([['', 'Pseudo-classe', 'Pseudo-elemento'],
       ['Si scrive', 'un due punti: `:hover`', 'due due punti: `::before`'],
       ['Sceglie', 'un elemento **che esiste**, in un certo stato o posizione', 'una **parte** dell’elemento o un **contenuto generato**'],
       ['Esempi', '`:hover`, `:focus`, `:nth-child()`, `:not()`', '`::first-line`, `::before`, `::placeholder`']],
      'Pseudo-classe e pseudo-elemento')
P.p('Si possono combinare, prima la pseudo-classe e poi il pseudo-elemento: `a:hover::after { content: " →"; }` mostra una freccia dopo il link **solo mentre** il mouse è sopra.')

# ---------------------------------------------------------------- 3.7
P.sez('3.7', 'Dare i nomi alle classi',
      R='Il nome dice a che cosa serve l’elemento, non com’è fatto; BEM lo struttura come blocco__elemento--modificatore.')
P.p('Il nome di una classe deve dire **a che cosa serve** l’elemento, non **com’è fatto**. `.avviso` va bene, `.rosso` no: se domani gli avvisi diventano arancioni, la classe `.rosso` colorerà di arancione e il nome mentirà. Allo stesso modo `.box1` non dice niente e `.sinistra-grande` smette di essere vero appena si cambia l’impaginazione.')
P.ul(['nomi in **minuscolo**, con le parole separate da **trattini**: `.card-corso`, `.menu-principale`;',
      'né troppo generici (`.testo`, `.blocco`) né legati a una sola pagina;',
      '**niente id per lo stile**: è una convenzione condivisa, perché un id pesa molto più di una classe nella cascata (5.4) e non si può riusare.'])
P.p('Per i progetti più grandi ci sono delle convenzioni per i nomi. La più diffusa è **BEM** (*Block, Element, Modifier*): un **blocco** è un componente autonomo (`.card`); un **elemento** è una sua parte, unita al blocco da due trattini bassi (`.card__titolo`); un **modificatore** è una variante, unita da due trattini (`.card--evidenziata`). Dal nome si capisce subito a quale componente appartiene una regola.')
P.schema('s3_nomi', 'Nomi che descrivono l’aspetto e nomi che descrivono il ruolo', '''      <div class="kit-schema-griglia">
        <div class="kit-cella"><b>Prima: com’è fatto</b>
''' + codice_html('<div class="box1 sinistra-grande">\n  <h3 class="rosso">Stampa 3D</h3>\n  <p class="piccolo">Venerdì</p>\n</div>') + '''          <span>se cambiano colore o posizione, i nomi mentono</span></div>
        <div class="kit-cella"><b>Dopo: a che cosa serve (BEM)</b>
''' + codice_html('<div class="card card--evidenziata">\n  <h3 class="card__titolo">Stampa 3D</h3>\n  <p class="card__testo">Venerdì</p>\n</div>') + '''          <span>blocco, elementi e modificatore si leggono nel nome</span></div>
        <div class="kit-cella"><b>BEM su una card</b>
          <div class="s3-bem"><div class="s3-blocco"><span class="s3-et b">.card · blocco</span>
            <div class="s3-el"><span class="s3-et e">.card__titolo · elemento</span><b>Stampa 3D</b></div>
            <div class="s3-el"><span class="s3-et e">.card__testo · elemento</span>Venerdì, laboratorio 2</div>
            <span class="s3-et m">.card--evidenziata · modificatore</span></div></div>
        </div>
      </div>''', titolo_aula='Nomi per il ruolo, non per l’aspetto')
P.err('«`.rosso` è un buon nome per la classe degli avvisi.»',
      'Descrive l’aspetto, non il ruolo: quando il colore degli avvisi cambia, il nome **mente**. Meglio `.avviso`.')


# ---------------------------------------------------------------- slide
SP = {
 '3.1': [
  tessere('I quattro selettori di base', 'Per tag, per classe, per id, tutti', [
    ['tag', '`p` · tipo', 'tutti gli elementi con quel tag'],
    ['layers', '`.nota` · classe', 'tutti gli elementi con `class="nota"`'],
    ['hash', '`#robot` · id', 'l’unico elemento con `id="robot"`'],
    ['asterisk', '`*` · universale', 'tutti gli elementi']]),
  punti('Classe e id nell’HTML', 'Punto e cancelletto stanno solo nel CSS', [
    ['file-code', 'HTML `class="nota"` → CSS `.nota`; HTML `id="robot"` → CSS `#robot`'],
    ['copy', 'Più classi per elemento, separate da spazi: `class="card big"`'],
    ['repeat', 'Una classe si dà a **quanti elementi si vuole**'],
    ['fingerprint', 'L’id è **unico** nella pagina']]),
 ],
 '3.2': [
  punti('Liste e selettori composti', 'Virgola = elenco, niente spazio = stesso elemento', [
    ['list', '`h1, h2, h3`: una regola per tre selettori'],
    ['triangle-alert', 'Un selettore non valido nella lista → **scartata tutta la regola**'],
    ['link', '`p.nota`: un `p` **che ha** la classe nota'],
    ['layers', '`.card.big`: un elemento con **entrambe** le classi']]),
  punti('Leggere un combinatore', 'Da destra a sinistra: l’ultimo è l’elemento preso', [
    ['arrow-left', '`main p`: si prendono i `p`; `main` è una condizione'],
    ['git-fork', 'Spazio = dentro, `>` = figlio diretto, `+` = subito dopo, `~` = dopo'],
    ['arrow-up', 'Si guarda solo **sopra** e **prima** nell’albero, mai il genitore'],
    ['sparkles', 'Per il genitore oggi c’è `:has()`']]),
 ],
 '3.3': [
  punti('Selettori di attributo', 'Lo stile dai dati che l’elemento ha già', [
    ['brackets', 'Tra parentesi quadre: `[type="email"]`'],
    ['equal', '`=` esatto · `^=` inizia · `$=` finisce · `*=` contiene'],
    ['link', '`a[href^="https"]`: tutti i link esterni, senza classi'],
    ['case-sensitive', '`i` finale: ignora maiuscole e minuscole']]),
 ],
 '3.4': [
  tessere('Tre famiglie di pseudo-classi', 'Un elemento che esiste, in un certo stato o posizione', [
    ['mouse-pointer', 'Stato', '`:hover` `:focus` `:active` `:checked` `:disabled`'],
    ['list-ordered', 'Posizione', '`:first-child` `:nth-child()` `:nth-of-type()` `:empty`'],
    ['ban', 'Negazione', '`:not(.big)`: tutti tranne quelli']]),
  punti('nth-child e nth-of-type', 'Tutti i fratelli contro i fratelli dello stesso tag', [
    ['list-ordered', '`:nth-child(2)`: il secondo figlio, **di qualunque tag**'],
    ['filter', '`:nth-of-type(2)`: il secondo **tra quelli dello stesso tag**'],
    ['calculator', '`odd`, `even`, `3n`, `n+3`: `n` vale 0, 1, 2…'],
    ['smartphone', 'Sul touch niente vero `:hover`: le cose importanti non vanno solo lì']]),
 ],
 '3.5': [
  punti('I pseudo-elementi', 'Parti e contenuti che nell’HTML non ci sono', [
    ['type', '`::first-letter`, `::first-line`: prima lettera e prima riga'],
    ['text-select', '`::selection`, `::placeholder`: selezione e segnaposto'],
    ['plus', '`::before`, `::after`: contenuto generato, **solo con `content`**'],
    ['eye-off', 'Servono a **decorare**: non si selezionano, non tutti gli screen reader li leggono']]),
 ],
 '3.6': [],
 '3.7': [
  punti('Nomi per il ruolo', 'Che cosa fa l’elemento, non com’è fatto', [
    ['circle-check', '`.avviso` sì, `.rosso` no: il colore può cambiare'],
    ['type', 'Minuscolo e trattini: `.card-corso`, `.menu-principale`'],
    ['ban', 'Niente id per lo stile: pesa troppo e non si riusa'],
    ['blocks', '**BEM**: `.card` · `.card__titolo` · `.card--evidenziata`']]),
 ],
}
P.aula('Come si scelgono gli elementi a cui dare uno stile.', SP,
       apertura=('In una pagina ci sono 30 paragrafi e solo 3 sono «avvisi». Come fa il CSS a colorare solo quei 3?',
                 'Con un **selettore** che li distingue: per esempio una **classe** `avviso` data nell’HTML, e nel CSS la regola `.avviso { … }`.'))
