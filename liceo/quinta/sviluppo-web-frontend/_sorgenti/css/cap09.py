# Tema 6.4 · Flusso normale e display (vecchio capitolo 9 del modulo CSS)
# Filo: il browser mette in fila le scatole (flusso normale: blocchi e in linea) → display cambia il comportamento
#       → display: none e gli altri modi di nascondere
from lib import *

P.capo('Flusso normale e display', 9)

# ---------------------------------------------------------------- 9.1
P.sez('9.1', 'Il flusso normale (blocco e in linea)', ic='rows-3',
      R='Il flusso normale dispone gli elementi nell’ordine dell’HTML: i blocchi vanno a capo, quelli in linea scorrono nella riga.')
P.p('Una pagina contiene centinaia di scatole. Prima di qualunque regola di impaginazione, il browser le dispone secondo il [[flusso normale]] (*normal flow*): le prende **nell’ordine in cui compaiono nell’HTML**, dall’alto in basso, e le sistema in due modi diversi.',
    'Gli **elementi di blocco** (*block*) vanno sempre **a capo**: ognuno comincia su una riga nuova e, con `width: auto`, occupa **tutta la larghezza del contenitore**, anche se il suo testo è corto. I blocchi si impilano uno sotto l’altro. Gli **elementi in linea** (*inline*) invece **scorrono dentro la riga** come le parole di un testo: sono larghi quanto il loro contenuto, si mettono uno dopo l’altro e vanno a capo solo quando la riga è piena.')
P.schema('s9_flusso', 'Blocchi impilati e elementi in linea che scorrono', '''      <div class="s9f">
        <div class="kit-cella"><b>Blocchi: uno per riga, larghi quanto il contenitore</b><div class="s9f-area"><div class="s9f-b">h1</div><div class="s9f-b">p</div><div class="s9f-b">div</div><div class="s9f-b">ul</div></div></div>
        <div class="kit-cella"><b>In linea: uno dopo l’altro, a capo a riga piena</b><div class="s9f-area s9f-righe"><span class="s9f-i">span</span> <span class="s9f-i">a</span> <span class="s9f-i">strong</span> <span class="s9f-i">em</span> <span class="s9f-i">span</span> <span class="s9f-i">a</span> <span class="s9f-i">code</span> <span class="s9f-i">em</span> <span class="s9f-i">span</span></div></div>
      </div>''')
P.p('Chi decide se un elemento è di blocco o in linea? Non l’elemento in sé, ma il **foglio di stile del browser** (*user agent stylesheet*), che assegna a ogni tag il suo `display` iniziale:')
P.tab([['Comportamento', 'Elementi'],
       ['di blocco (`display: block`)', '`div`, `p`, `h1`…`h6`, `ul`, `ol`, `section`, `header`, `footer`, `nav`, `main`, `form`'],
       ['in linea (`display: inline`)', '`span`, `a`, `em`, `strong`, `code`, `br`'],
       ['in linea ma *sostituiti*', '`img`, `input`, `button`, `video`: stanno nella riga ma hanno **dimensioni proprie**']],
      'Chi è blocco e chi è in linea')
P.p('Gli ultimi della tabella sono gli [[elementi sostituiti]] (*replaced elements*): il loro contenuto non è testo dell’HTML ma qualcosa che il browser «sostituisce» (un’immagine, un campo di un modulo). Stanno in linea come le parole, però hanno **una larghezza e un’altezza loro** e accettano `width` e `height`. Un caso a parte è `li`, che ha un `display` tutto suo, `list-item`: un blocco con il marcatore (più avanti).')
P.grande('local:assets/immagini/devtools-user-agent.png|https://developer.chrome.com/docs/devtools/css/reference',
         'Nei DevTools di Chrome è selezionato `<div class="card">Arduino</div>`. Nella scheda *Styles*, sotto la regola `.card` di `stile.css`, c’è quella del **foglio di stile del browser** (*user agent stylesheet*): `div { display: block; }`. Nessuno l’ha scritta nel sito. A sinistra, il `div` evidenziato occupa **tutta la larghezza** della pagina, anche se contiene una parola sola.',
         'La scheda Styles dei DevTools di Chrome con la regola div display block del foglio di stile del browser', aula='Il display viene dal browser')
P.widget('w9_fila', 'Il browser mette in fila')
P.err('«Gli elementi vanno dove li metto io, senza un ordine.»',
      'Nel flusso normale seguono **l’ordine del codice**: un elemento scritto dopo compare dopo, sotto (se è un blocco) o più avanti nella riga (se è in linea).')
P.err('«Un `div` è largo quanto il suo testo.»',
      'Un blocco con `width: auto` occupa **tutta la larghezza del contenitore**, anche con una sola parola. Larghi quanto il contenuto sono gli elementi **in linea**.')

# ---------------------------------------------------------------- 9.2
P.sez('9.2', 'display (block · inline · inline-block · none)', ic='layout-grid',
      R='display decide se un elemento si comporta da blocco o in linea e come dispone i figli; gli elementi in linea ignorano width e height.')
P.dom('Metto `width: 200px` su uno `<span>`. Quanto diventa largo?',
      '**Quanto il suo contenuto**: uno `span` è in linea e gli elementi in linea ignorano `width` e `height`. Per dargli una larghezza serve `display: inline-block` o `block`.', prima=True)
P.p('Il comportamento assegnato dal browser si può cambiare con la proprietà `display`. In realtà `display` dice **due cose**: come si comporta l’elemento **verso l’esterno** (blocco o in linea, rispetto ai vicini) e come dispone **all’interno** i suoi figli (flusso normale, Flexbox, Grid: 7.1 e 7.2).',
    'I valori di base sono quattro. `block` va a capo, occupa tutta la larghezza e **accetta tutto**: `width`, `height`, margini e padding in ogni direzione. `inline` sta nella riga e **ignora `width` e `height`**; padding e margini orizzontali allontanano i vicini, quelli **verticali** si vedono (lo sfondo si allarga) ma **non spostano le righe**. `inline-block` sta nella riga come una parola, ma **accetta `width`, `height` e margini** come un blocco: è il modo classico di affiancare piccoli riquadri, come i pulsanti. `none`, infine, fa sì che l’elemento **non esista** nell’impaginazione, come se non fosse nell’HTML (più avanti).')
P.p('Ci sono poi valori più specifici: `list-item` è il `display` dei `li` (un blocco con il marcatore); `flow-root` è un blocco che **contiene i propri float** e non lascia uscire i margini dei figli (6.5); `contents` fa sparire la scatola dell’elemento lasciando al loro posto i figli, come se il genitore non ci fosse. `inline-flex` e `inline-grid` si vedranno con Flexbox e Grid.')
P.widget('w9_display', 'display')
P.p('Il widget mostra anche due sorprese, che vengono dall’HTML e non dal CSS. Tra due `inline-block` scritti su righe diverse dell’HTML compare uno **spazio di qualche pixel**. Non è un margine: è lo **spazio (o l’a capo) tra i tag**, che negli elementi in linea conta come lo spazio tra due parole.',
    'Lo stesso motivo lascia un piccolo vuoto **sotto le immagini**: un `img` è in linea e si appoggia sulla **linea di base** del testo, sotto la quale resta lo spazio per le lettere come g e p. Si risolve con `display: block` sull’immagine.')
P.err('«Uno `span` con `width: 200px` diventa largo 200px.»',
      'Gli elementi **in linea** ignorano `width` e `height`. Lo `span` resta largo quanto il testo, finché non gli si dà `display: inline-block` o `block`.')
P.err('«`inline-block` e `block` sono uguali.»',
      'Accettano tutti e due le misure, ma `block` va a capo e occupa tutta la riga, `inline-block` **resta nella riga**, largo quanto serve, accanto agli altri.')
P.err('«Tra due `inline-block` c’è uno spazio che non ho messo: è un bug.»',
      'È lo **spazio tra i tag nell’HTML**, che in linea vale come lo spazio tra due parole. Sparisce scrivendo i tag attaccati, o con Flexbox (`gap` al posto degli spazi).')
P.err('«Sotto la mia immagine c’è uno spazio: è un margine.»',
      'L’immagine è **in linea** e si appoggia sulla linea di base del testo: sotto resta lo spazio per le lettere con la gamba. Con `display: block` sparisce.')

# ---------------------------------------------------------------- 9.3
P.sez('9.3', 'Differenza tra display: none e visibility: hidden', ic='eye-off',
      R='display none toglie l’elemento dall’impaginazione, visibility hidden lo rende invisibile lasciando lo spazio.')
P.dom('Nascondo il secondo di tre paragrafi. Con `display: none` il terzo sale? E con `visibility: hidden`?',
      'Con `display: none` **sale** e prende il posto del secondo; con `visibility: hidden` **resta dov’era** e al posto del secondo rimane un vuoto.', prima=True)
P.p('`display: none` è uno dei modi di nascondere un elemento, ma non l’unico, e i modi **non sono equivalenti**. Si distinguono per tre cose: se lo spazio dell’elemento resta occupato, se si può ancora cliccare, se lo leggono i **lettori di schermo** (i programmi che leggono la pagina a voce alle persone non vedenti).',
    '`display: none` **toglie l’elemento dall’impaginazione**: i vicini **prendono il suo posto**, non si può cliccare né raggiungere con la tastiera e i lettori di schermo lo ignorano. `visibility: hidden` lo rende **invisibile** ma il suo **spazio resta occupato**: al suo posto c’è un buco. Non è cliccabile né letto, ma a differenza di `display: none` un figlio con `visibility: visible` **torna visibile** dentro il genitore nascosto.')
P.casi(('', '`display: none`', 'Il terzo paragrafo **sale** e prende il posto del secondo.'),
       ('', '`visibility: hidden`', 'Il terzo paragrafo **resta dov’era**: al posto del secondo rimane un vuoto.'))
P.p('Ci sono poi altri due modi. `opacity: 0` rende l’elemento **trasparente**: lo spazio resta e l’elemento è **ancora cliccabile** e letto dai lettori di schermo; è invisibile solo agli occhi. L’attributo HTML `hidden` (`<p hidden>`) equivale a `display: none`, ma basta una regola CSS con un altro `display` sull’elemento per **farlo ricomparire**.')
P.widget('w9_nascondi', 'Quattro modi di nascondere B')
P.tab([['', 'Spazio occupato', 'Cliccabile', 'Letto dai lettori di schermo', 'Un figlio può riapparire'],
       ['`display: none`', 'no', 'no', 'no', 'no'],
       ['`visibility: hidden`', 'sì', 'no', 'no', 'sì, con `visibility: visible`'],
       ['`opacity: 0`', 'sì', '**sì**', 'sì', 'no (l’opacità si moltiplica)'],
       ['attributo `hidden`', 'no', 'no', 'no', 'no (ma un `display` nel CSS lo annulla)']],
      'Quattro modi di nascondere')
P.err('«`display: none` e `visibility: hidden` sono la stessa cosa.»',
      'Tutti e due nascondono, ma `display: none` **libera lo spazio** (i vicini si spostano), `visibility: hidden` lo **lascia occupato**.')
P.err('«`opacity: 0` nasconde come `display: none`.»',
      'Con `opacity: 0` l’elemento è solo trasparente: **occupa lo spazio**, si può ancora **cliccare** e i lettori di schermo lo leggono.')
P.p('Il flusso normale mette ogni scatola al suo posto, una dopo l’altra. A volte però un elemento deve stare altrove: fermo in un angolo, sopra un altro, a lato con il testo intorno.')


# ---------------------------------------------------------------- slide
SP = {
 '9.1': [
  casi('Il flusso normale', [
    nd('Blocchi', 'vanno a capo e occupano **tutta la larghezza** del contenitore', 'rows-3', nota='`div`, `p`, `h1`, `ul`, `section`…'),
    nd('In linea', 'scorrono nella riga come parole, larghi quanto il contenuto', 'wrap-text', nota='`span`, `a`, `em`, `strong`, `code`'),
    nd('Sostituiti', 'in linea, ma con **misure proprie**: accettano `width` e `height`', 'image', nota='`img`, `input`, `button`, `video`')],
    msg='Gli elementi nell’ordine dell’HTML, in due modi'),
  'w9_fila',
 ],
 '9.2': [
  casi('I valori di display', [
    nd('`block`', 'a capo, tutta la riga, **accetta tutte le misure**', 'square'),
    nd('`inline`', 'nella riga, **ignora** `width` e `height`', 'type', nota='padding verticale: si vede, ma non sposta le righe'),
    nd('`inline-block`', 'nella riga, ma **accetta le misure**', 'layout-grid', nota='i pulsanti affiancati'),
    nd('`none`', 'non esiste nell’impaginazione', 'eye-off')],
    msg='Verso l’esterno: blocco o in linea'),
  'w9_display',
  casi('Due spazi misteriosi', [
    nd('Tra due `inline-block`', 'è lo **spazio tra i tag** nell’HTML, come tra due parole', 'space', nota='tag attaccati, o Flexbox con `gap`'),
    nd('Sotto un’immagine', 'l’`img` sta sulla **linea di base**: sotto resta lo spazio per g e p', 'image', nota='`display: block` sull’immagine')],
    msg='Vengono dall’HTML, non dal CSS'),
 ],
 '9.3': [
  'w9_nascondi',
 ],
}
P.aula('Blocchi, elementi in linea e il valore che li cambia: display.', SP,
       apertura=('Due paragrafi e una parola in grassetto: perché i paragrafi vanno a capo e la parola no?',
                 'Il browser dà a ogni tag un `display`: `p` è un **blocco** (va a capo), `strong` è **in linea** (scorre nella riga).'))
