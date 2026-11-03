# Tema 5.3 · I selettori (vecchio capitolo 3 del modulo CSS)
# Filo: scegliere per tag, classe, id → combinare condizioni e posizioni nell'albero → scegliere dagli attributi
#       → dallo stato e dalla posizione tra i fratelli → parti che nell'HTML non ci sono → due coppie da non confondere → dare buoni nomi
from lib import *

P.capo('I selettori', 3)

# ---------------------------------------------------------------- 3.1
P.sez('3.1', 'Tipo, classe, id, universale', ic='crosshair',
      R='Tipo, classe, id e universale scelgono per tag, per class, per id unico o tutti; punto e cancelletto fanno parte del selettore.')
P.p('Il selettore `h1` del tema precedente prende **tutti** i titoli di primo livello. Ma spesso vogliamo colorare solo alcuni elementi: tre avvisi tra trenta paragrafi, una sola immagine in tutta la pagina. Per questo esistono quattro selettori di base, che scelgono gli elementi in modi diversi.',
    'Il **selettore di tipo** sceglie gli elementi per nome del tag: `p` prende tutti i paragrafi. Il **selettore di classe** sceglie gli elementi che hanno quella classe nell’attributo `class`: `.nota` prende tutti gli elementi con `class="nota"`, **qualunque sia il tag**. Il **selettore di id** sceglie l’elemento con quell’`id`: `#robot` prende l’elemento con `id="robot"`. Infine il **selettore universale** `*` prende **tutti gli elementi**.')
P.css('p      { line-height: 1.5; }        /* tutti i paragrafi */\n.nota  { color: gray; }             /* class="nota" */\n#robot { color: crimson; }          /* id="robot" */\n*      { box-sizing: border-box; }  /* tutti gli elementi */')
P.p('Il **punto** e il **cancelletto** fanno parte del selettore, non del nome: nell’HTML si scrive `class="nota"`, nel CSS `.nota`.')
P.forma('HTML|`class="nota"` · `id="robot"`', 'nel CSS', 'selettore|`.nota` · `#robot`')
P.p('Classi e id si comportano però in modo diverso. Un elemento può avere **più classi**, separate da spazi (`class="card big"`), e una classe si può dare a **tutti gli elementi che si vuole**. L’`id` invece è **unico**: nella pagina non ci possono essere due elementi con lo stesso id.',
    'Nel widget qui sotto c’è la pagina campione del club di robotica che useremo in tutto il tema, scritta come elenco di elementi: ogni riga è un elemento, rientrato dentro il suo genitore. Scrivi un selettore, o scegli un esempio, e guarda quali elementi prende.')
P.widget('w3_cacc', 'Il selettore-cacciatore')
P.err('«`.titolo` e `titolo` sono lo stesso selettore.»',
      'Senza il punto è un selettore di **tipo**: cerca gli elementi `<titolo>`, che in HTML non esistono. Per la classe `titolo` serve il punto: `.titolo`.')
P.err('«Lo stesso id si può dare a più elementi che devono avere lo stesso stile.»',
      'L’id è **unico** nella pagina. Per dare lo stesso stile a più elementi si usa una **classe**, che si può ripetere quante volte si vuole.')

# ---------------------------------------------------------------- 3.2
P.sez('3.2', 'Raggruppare e combinare', ic='git-fork',
      R='Virgola raggruppa, spazio prende i discendenti, `>` i figli diretti, `+` e `~` i fratelli; senza spazio le condizioni valgono sullo stesso elemento.')
P.p('I selettori di base si possono mettere insieme in tre modi, e la differenza sta tutta in un carattere: una virgola, nessuno spazio, oppure uno spazio o un simbolo.',
    'La **virgola** crea una **lista di selettori** che condividono le stesse dichiarazioni: `h1, h2, h3 { font-family: Georgia, serif; }` vale per tutti e tre i titoli. Attenzione: se **uno solo** dei selettori della lista non è valido, **l’intera regola viene scartata**, anche per gli altri.',
    'Più selettori **scritti di seguito, senza spazio**, sono condizioni sullo **stesso elemento** e formano un [[selettore composto]]: `p.nota` prende i paragrafi con la classe `nota`, `.card.big` gli elementi che hanno entrambe le classi.')
P.casi(('', '`.card.big` · senza spazio', 'Lo **stesso elemento** deve avere entrambe le classi: nella pagina campione, la card «Stampa 3D».'),
       ('', '`.card .big` · con lo spazio', 'Un elemento `.big` **dentro** un `.card`, a qualsiasi profondità: nella pagina campione, nessuno.'))
P.p('Lo spazio dell’ultimo esempio è il primo dei **combinatori**, che collegano due selettori in base alla **posizione degli elementi nell’albero** della pagina:')
P.tab([['Combinatore', 'Si legge', 'Che cosa prende'],
       ['`A B` (spazio)', 'B **discendente** di A', 'ogni B dentro A, a qualsiasi profondità: `main p`'],
       ['`A > B`', 'B **figlio** di A', 'solo i B figli diretti di A: `nav > a`'],
       ['`A + B`', 'B **fratello adiacente** di A', 'il B subito dopo A, con lo stesso genitore: `h3 + p`'],
       ['`A ~ B`', 'B **fratello successivo** di A', 'tutti i B che vengono dopo A, con lo stesso genitore: `h2 ~ div`']],
      'I combinatori')
P.p('Un selettore con i combinatori si legge **da destra a sinistra**: l’elemento preso è sempre **l’ultimo** (in `main p` sono i `p`), quelli prima sono condizioni. E il CSS sceglie solo in base a ciò che sta **sopra** o **prima** nell’albero: non c’è un combinatore per «il genitore di B» o per «l’elemento che viene prima di B». Per questi casi oggi esiste `:has()`.')
P.widget('w3_cacc_comb', 'Combinatori nella pagina campione')
P.err('«`.card .big` e `.card.big` sono lo stesso selettore.»',
      'Con lo spazio, `.big` deve stare **dentro** un `.card` (discendente); senza spazio, lo **stesso elemento** deve avere entrambe le classi. Nella pagina campione il primo non prende niente, il secondo prende la card «Stampa 3D».')
P.err('«Se un selettore della lista è sbagliato, funzionano comunque gli altri.»',
      'Basta un selettore non valido nella lista perché **l’intera regola venga scartata**, per tutti i selettori.')
P.dom('`.card .big` e `.card.big`: sono lo stesso selettore?',
      'No. Con lo spazio `.big` è un elemento **dentro** un `.card`; senza spazio è **lo stesso elemento** che ha entrambe le classi.')

# ---------------------------------------------------------------- 3.3
P.sez('3.3', 'Selettori di attributo', ic='brackets',
      R='I selettori di attributo scelgono in base ai dati dell’elemento, senza aggiungere classi a mano.')
P.p('Spesso l’informazione che serve per scegliere un elemento **c’è già nell’HTML**: un link esterno ha un `href` che comincia con `https`, un link a un documento finisce con `.pdf`, un campo email ha `type="email"`. I [[selettori di attributo]] scelgono gli elementi proprio in base ai loro attributi e ai loro valori, scritti **tra parentesi quadre**. Così si dà uno stile a tutti i link esterni o a tutti i campi email **senza aggiungere classi a mano**.')
P.tab([['Selettore', 'Significato', 'Esempio'],
       ['`[attr]`', 'l’attributo c’è, con qualunque valore', '`input[required]`'],
       ['`[attr="v"]`', 'valore **esattamente** uguale a v', '`input[type="email"]`'],
       ['`[attr^="v"]`', 'valore che **inizia** con v', '`a[href^="https"]`: link esterni sicuri'],
       ['`[attr$="v"]`', 'valore che **finisce** con v', '`a[href$=".pdf"]`: link ai PDF'],
       ['`[attr*="v"]`', 'valore che **contiene** v', '`a[href*="arduino"]`'],
       ['`[attr~="v"]`', 'v è una delle **parole** del valore', '`[class~="big"]`']],
      'I selettori di attributo')
P.p('Dopo il valore si può aggiungere una `i` per **ignorare maiuscole e minuscole**: `a[href$=".pdf" i]` prende anche un link a `PROGRAMMA.PDF`.')
P.css('a[href^="https"]    { color: #0a6f66; }   /* link esterni */\na[href$=".pdf"]     { font-weight: bold; } /* link ai PDF */\ninput[type="email"] { border-color: #0a6f66; }')
P.widget('w3_cacc_attr', 'Selettori di attributo nella pagina campione')
P.err('«`[href=".pdf"]` prende i link ai PDF.»',
      '`=` vuole il valore **esatto**: prenderebbe solo un link con `href=".pdf"`. Per «finisce con» serve `$=`: `a[href$=".pdf"]`.')

# ---------------------------------------------------------------- 3.4
P.sez('3.4', 'Pseudo-classi', ic='mouse-pointer',
      R='La pseudo-classe sceglie un elemento esistente in un certo stato, posizione o che non soddisfa una condizione.')
P.p('Finora abbiamo scelto gli elementi per quello che **sono**: un tag, una classe, un attributo. Ma un link sotto il puntatore del mouse, un campo in cui si sta scrivendo, il primo elemento di un elenco non hanno niente di scritto nell’HTML che li distingua. Per sceglierli servono le pseudo-classi.',
    'Una [[pseudo-classe]] (due punti seguiti da un nome) sceglie un elemento **che esiste già** nell’HTML quando si trova **in un certo stato** o **in una certa posizione**, oppure quando **non** soddisfa una condizione. Sono quindi tre famiglie.',
    'Le pseudo-classi di **stato** dipendono da che cosa sta facendo l’utente: `:hover` (il puntatore è sopra), `:focus` (l’elemento ha il fuoco, dopo un clic o con il tasto Tab), `:active` (mentre lo si preme), `:checked` (casella spuntata), `:disabled` (elemento disattivato). Quelle di **posizione** guardano il posto dell’elemento tra i fratelli: `:first-child`, `:last-child`, `:nth-child()`, `:nth-of-type()`, `:only-child` (figlio unico), `:empty` (senza contenuto). Infine la **negazione** `:not()` prende gli elementi che **non** corrispondono al selettore tra parentesi, per esempio `.card:not(.big)`.')
P.widget('w3_stati', 'Le pseudo-classi di stato')
P.p('Sugli schermi touch un vero `:hover` **non esiste**: non c’è un puntatore che passa sopra senza toccare. Le informazioni importanti non devono quindi comparire solo al passaggio del mouse.',
    'Tra le pseudo-classi di posizione, due si confondono spesso. `:nth-child()` conta **tutti i fratelli**, di qualunque tag; `:nth-of-type()` conta solo i fratelli **dello stesso tag**.')
P.es('In un `div` ci sono un `h2` e poi tre `p`. `p:nth-child(2)` vuol dire «un `p` che è il secondo figlio del suo genitore»: è il primo paragrafo, perché il primo figlio è l’`h2`. Il secondo paragrafo si prende con `p:nth-of-type(2)`.')
P.p('Tra le parentesi si scrive un numero, una parola chiave o un’espressione con `n`, che vale 0, 1, 2, 3…:')
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
P.sez('3.5', 'Pseudo-elementi', ic='sparkles',
      R='I pseudo-elementi sono parti di un elemento o contenuti generati che nell’HTML non ci sono; servono a decorare.')
P.p('Le pseudo-classi scelgono elementi che esistono. A volte invece vogliamo dare uno stile a qualcosa che **non è un elemento**: la prima lettera di un paragrafo, il testo selezionato, un’etichetta «NUOVO» che nell’HTML non c’è.',
    'Un [[pseudo-elemento]] (con due volte i due punti, `::`) sceglie una **parte** di un elemento, oppure crea un **contenuto generato** che nell’HTML non c’è. `::first-letter` sceglie la prima lettera e `::first-line` la prima riga di un blocco di testo; `::selection` il testo selezionato dall’utente e `::placeholder` il testo segnaposto di un campo. `::before` e `::after`, infine, creano un elemento finto all’inizio e alla fine del contenuto, che compare **solo se ha la proprietà `content`** (anche vuota: `content: ""`).')
P.widget('w3_pseudoel', 'I pseudo-elementi uno alla volta')
P.p('La forma con un solo due punti (`:before`) è un’eredità del CSS 2 e funziona ancora, ma la regola è: **due due punti** per i pseudo-elementi, **un due punti** per le pseudo-classi.',
    'Il contenuto generato serve a **decorare**: non si può selezionare né copiare e non tutti gli screen reader lo leggono. **Un’informazione importante va nell’HTML.**')
P.es('Un’etichetta «NUOVO» accanto ai corsi appena aggiunti: è una decorazione, quindi può nascere da `::after`.')
P.css('.nuovo::after {\n  content: "NUOVO";\n  background: crimson;\n  color: white;\n  font-size: 0.7em;\n  padding: 2px 6px;\n  margin-left: 6px;\n}', aula='Un’etichetta generata')
P.err('«`::before` mette l’icona anche senza `content`.»',
      'Senza la proprietà `content` il pseudo-elemento **non viene creato** e non appare nulla, qualunque altra proprietà gli si dia.')

# ---------------------------------------------------------------- 3.6
P.sez('3.6', 'Differenza tra classe e id, tra pseudo-classe e pseudo-elemento', ic='scale',
      R='La classe si riusa, l’id è unico; la pseudo-classe sceglie uno stato, il pseudo-elemento una parte o un contenuto generato.')
P.p('Con tanti selettori nuovi, due coppie si confondono spesso. Conviene metterle a confronto.')
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
P.p('Pseudo-classi e pseudo-elementi si possono anche **combinare**, prima la pseudo-classe e poi il pseudo-elemento: `a:hover::after { content: " →"; }` mostra una freccia dopo il link **solo mentre** il mouse è sopra.')

# ---------------------------------------------------------------- 3.7
P.sez('3.7', 'Dare i nomi alle classi', ic='tag',
      R='Il nome dice a che cosa serve l’elemento, non com’è fatto; BEM lo struttura come blocco__elemento--modificatore.')
P.p('Le classi sono il selettore che useremo di più, e il loro nome lo scegliamo noi. Un buon nome dice **a che cosa serve** l’elemento, non **com’è fatto**.')
P.casi(('no', '`.rosso`', 'Descrive l’aspetto: se domani gli avvisi diventano arancioni, la classe `.rosso` colorerà di arancione e **il nome mentirà**.'),
       ('si', '`.avviso`', 'Descrive il ruolo: resta vero qualunque colore abbiano gli avvisi.'))
P.p('Allo stesso modo `.box1` non dice niente e `.sinistra-grande` smette di essere vero appena si cambia l’impaginazione. I nomi si scrivono in **minuscolo**, con le parole separate da **trattini** (`.card-corso`, `.menu-principale`), e non devono essere né troppo generici (`.testo`, `.blocco`) né legati a una sola pagina. Ed è una convenzione condivisa **non usare gli id per lo stile**: un id pesa molto più di una classe nella cascata (5.4) e non si può riusare.',
    'Per i progetti più grandi ci sono delle convenzioni per i nomi. La più diffusa è **BEM** (*Block, Element, Modifier*). Un **blocco** è un componente autonomo (`.card`); un **elemento** è una sua parte, unita al blocco da **due trattini bassi** (`.card__titolo`); un **modificatore** è una variante, unita da **due trattini** (`.card--evidenziata`). Dal nome si capisce subito a quale componente appartiene una regola.')
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
P.p('Ora sappiamo scegliere gli elementi in molti modi diversi. Proprio per questo capita spesso che **più regole scelgano lo stesso elemento** e gli diano valori diversi: bisogna capire quale vince.')


# ---------------------------------------------------------------- slide
SP = {
 '3.1': [
  casi('I quattro selettori di base', [
    nd('`p` · tipo', 'tutti gli elementi con quel tag', 'tag'),
    nd('`.nota` · classe', 'tutti gli elementi con `class="nota"`, qualunque sia il tag', 'layers'),
    nd('`#robot` · id', 'l’unico elemento con `id="robot"`', 'hash'),
    nd('`*` · universale', 'tutti gli elementi', 'asterisk')],
    msg='Per tag, per classe, per id, tutti'),
  flusso('Classe e id: dall’HTML al CSS', [
    nd('Nell’HTML', html='<p class="nota">…</p>\n<div id="robot">…</div>', icona='file-code'),
    nd('Nel CSS', css='.nota  { color: gray; }\n#robot { color: crimson; }', icona='palette', tono='fine')],
    frecce=['punto e cancelletto'],
    riga='Più classi per elemento (`class="card big"`), una classe su quanti elementi si vuole; l’id è **unico**.'),
  'w3_cacc',
 ],
 '3.2': [
  casi('Virgola, niente spazio, spazio', [
    nd('`h1, h2, h3`', 'una **lista**: la stessa regola per tre selettori', 'list', nota='un selettore non valido → scartata tutta la regola'),
    nd('`.card.big`', 'condizioni sullo **stesso elemento**: entrambe le classi', 'link'),
    nd('`.card .big`', 'un `.big` **dentro** un `.card`, a qualsiasi profondità', 'git-fork')],
    msg='La differenza sta tutta in un carattere'),
  anatomia('Leggere un combinatore', 'main p', [
    ['p', 'l’elemento preso', 'l’ultimo, a destra'],
    [' ', 'combinatore', 'lo spazio: «dentro»'],
    ['main', 'condizione', 'deve stare sopra nell’albero']],
    effetto='Si legge da destra a sinistra; per il genitore oggi c’è `:has()`'),
  'w3_cacc_comb',
 ],
 '3.3': [
  anatomia('Un selettore di attributo', 'a[href$=".pdf" i]', [
    ['a', 'tipo', 'i link'],
    ['href', 'attributo', 'tra parentesi quadre'],
    ['$=', 'confronto', '«finisce con»'],
    ['".pdf"', 'valore', 'cercato nel valore dell’attributo'],
    [' i', 'maiuscole', 'prende anche PROGRAMMA.PDF']],
    msg='Lo stile dai dati che l’elemento ha già, senza classi a mano'),
  'w3_cacc_attr',
 ],
 '3.4': [
  definizione('Le pseudo-classi', 'Una **pseudo-classe** sceglie un elemento **che esiste già** nell’HTML quando si trova in un certo **stato** o in una certa **posizione**, oppure quando **non** soddisfa una condizione.',
              [['mouse-pointer', 'stato: `:hover` `:focus` `:checked`'], ['list-ordered', 'posizione: `:first-child` `:nth-child()`'], ['ban', 'negazione: `:not(.big)`']],
              nota='Sul touch non c’è un vero `:hover`: le informazioni importanti non vanno solo lì.'),
  'w3_stati',
  casi('nth-child e nth-of-type', [
    nd('`p:nth-child(2)`', 'un `p` che è il **secondo figlio**, contando tutti i fratelli', 'list-ordered', nota='div con h2 + tre p → il primo paragrafo'),
    nd('`p:nth-of-type(2)`', 'il **secondo tra i soli `p`**', 'filter', nota='div con h2 + tre p → il secondo paragrafo')],
    msg='Tutti i fratelli contro i fratelli dello stesso tag'),
 ],
 '3.5': [
  definizione('I pseudo-elementi', 'Un **pseudo-elemento** (`::`) sceglie una **parte** di un elemento, oppure crea un **contenuto generato** che nell’HTML non c’è.',
              [['type', '`::first-letter` `::first-line`'], ['text-cursor', '`::selection` `::placeholder`'], ['plus', '`::before` `::after`, solo con `content`']],
              nota='Servono a **decorare**: un’informazione importante va nell’HTML.'),
  'w3_pseudoel',
 ],
 '3.7': [
  casi('Due modi di dare un nome', [
    caso('no', 'descrive l’aspetto', titolo='`.rosso` · `.box1` · `.sinistra-grande`', testo='quando cambiano colore o impaginazione, il nome **mente**'),
    caso('si', 'descrive il ruolo', titolo='`.avviso` · `.card-corso` · `.menu-principale`', testo='minuscolo con i trattini; niente id per lo stile')]),
  anatomia('BEM', '.card\n.card__titolo\n.card--evidenziata', [
    ['.card', 'blocco', 'un componente autonomo'],
    ['__titolo', 'elemento', 'una sua parte: due trattini bassi'],
    ['--evidenziata', 'modificatore', 'una variante: due trattini']],
    msg='*Block, Element, Modifier*: dal nome si capisce il componente'),
 ],
}
P.aula('Come si scelgono gli elementi a cui dare uno stile.', SP,
       apertura=('In una pagina ci sono 30 paragrafi e solo 3 sono «avvisi». Come fa il CSS a colorare solo quei 3?',
                 'Con un **selettore** che li distingue: per esempio una **classe** `avviso` data nell’HTML, e nel CSS la regola `.avviso { … }`.'))
