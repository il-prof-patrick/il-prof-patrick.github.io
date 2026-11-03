# Tema 5.1 · Che cos'è il CSS e come si collega (vecchio capitolo 1 del modulo CSS)
# Filo: l'HTML dice che cos'è, il CSS come appare → separarli conviene → dove si scrive il CSS → con quali strumenti si vede l'effetto
from lib import *

P.capo('Che cos’è il CSS e come si collega', 1)

# ---------------------------------------------------------------- 1.1
P.sez('1.1', 'A cosa serve il CSS', ic='palette',
      R='L’HTML dice cos’è ogni parte della pagina, il CSS come appare; separarli permette di cambiare l’aspetto senza toccare il contenuto.')
P.dom('Una pagina non ha nemmeno una riga di CSS. Perché allora il titolo è grande e in grassetto e il link è blu e sottolineato?',
      'Lo decide il **foglio di stile predefinito del browser** (*user agent stylesheet*). L’HTML dice solo «questo è un titolo di primo livello» e «questo è un link», non come devono apparire.', prima=True)
P.p('Nei capitoli sull’HTML abbiamo descritto **che cos’è** ogni parte di una pagina: questo è un titolo, questo un paragrafo, questo un elenco, questo un link. Non abbiamo mai detto di che colore deve essere il titolo, con quale carattere va scritto il paragrafo o quanto spazio deve esserci tra un elenco e l’altro. Di questo si occupa un secondo linguaggio.',
    'Il **CSS** (*Cascading Style Sheets*, «fogli di stile a cascata») è il linguaggio che decide **come appare** una pagina web: colori, caratteri, dimensioni, spazi, impaginazione. In breve: **l’HTML dà il significato, il CSS la presentazione**.')
P.forma('HTML|che cos’è ogni parte', 'più', 'CSS|come appare', 'insieme', 'la pagina che vediamo')
P.p('Eppure anche una pagina senza una riga di CSS ha un aspetto. Il browser applica il suo [[foglio di stile predefinito]] (*user agent stylesheet*): titoli **grandi e in grassetto**, link **blu e sottolineati**, un po’ di margine intorno al testo. Per questo tutte le pagine senza CSS si somigliano. Il nostro CSS **parte da lì e lo modifica**.')
P.p('Tenere separati significato e presentazione, in due linguaggi e di solito in due file, ha tre vantaggi. Il primo è la **manutenzione**: per cambiare l’aspetto si modifica il foglio di stile, senza toccare il contenuto delle pagine. Il secondo è la **coerenza**: tutte le pagine che usano lo stesso foglio di stile hanno gli stessi colori, caratteri e spazi. Il terzo è il **riuso**: una regola scritta una volta vale per tutti gli elementi a cui si applica, in tutte le pagine.',
    'Nel widget qui sotto la stessa pagina HTML cambia aspetto solo cambiando il foglio di stile.')
P.widget('w1_fogli', 'Stesso HTML, tre fogli di stile')
P.mg('local:assets/immagini/zen-garden.jpg|https://www.csszengarden.com/', 'CSS Zen Garden', 'Quattro versioni della pagina del CSS Zen Garden: stesso HTML, quattro fogli di stile diversi')
P.p('L’esempio più famoso di questa idea è il **CSS Zen Garden** (csszengarden.com): **una sola pagina HTML**, sempre la stessa, e **centinaia di fogli di stile** diversi scritti da designer di tutto il mondo. Cambiando solo il CSS, la stessa pagina diventa un giardino giapponese, un manifesto a colori, una struttura d’acciaio, una pergamena in fondo al mare.',
    'Il sito è nato nel 2003 per dimostrare che con il CSS si poteva fare **grafica vera senza toccare l’HTML**; è ancora online e ogni progetto si può scaricare per vedere come è fatto. Resta da capire dove si scrive, concretamente, questo CSS e come si aggancia alla pagina.')

# ---------------------------------------------------------------- 1.2
P.sez('1.2', 'I quattro modi di collegare il CSS', ic='link',
      R='Per un sito si usa un file CSS esterno collegato con link, perché una modifica vale per tutte le pagine; @import si evita.')
P.p('Il CSS si può collegare all’HTML in quattro modi, che si distinguono per **quanta parte del sito raggiungono**. Il più piccolo è l’**attributo `style`** su un singolo elemento, come `<h1 style="color: red">`: vale solo per quell’elemento. Poi c’è l’**elemento `<style>`** dentro `<head>`: le regole che contiene valgono per tutta la pagina, ma solo per quella.',
    'Il terzo modo è il **file esterno**: un file `.css` che contiene **solo regole** e che si collega con `<link rel="stylesheet" href="stile.css">` dentro `<head>`. Tutte le pagine del sito possono collegare lo stesso file. Il quarto è **`@import`**: una riga all’inizio di un foglio di stile che ne carica un altro, per esempio `@import url("colori.css");`.')
P.schema('s1_quattro', 'La stessa regola (titolo rosso) nei quattro modi', '''      <div class="kit-schema-griglia">
        <div class="kit-cella"><b>1 · Attributo style</b>
''' + codice_html('<h1 style="color: red">\n  Club di robotica\n</h1>', 'index.html') + '''          <span>vale per <b>un elemento</b></span></div>
        <div class="kit-cella"><b>2 · Elemento style</b>
''' + codice_html('<head>\n  <style>\n    h1 { color: red; }\n  </style>\n</head>', 'index.html') + '''          <span>vale per <b>una pagina</b></span></div>
        <div class="kit-cella"><b>3 · File esterno con link</b>
''' + codice_html('<head>\n  <link rel="stylesheet"\n        href="stile.css">\n</head>', 'index.html') + codice_css('h1 { color: red; }', 'stile.css') + '''          <span>vale per <b>tutte le pagine</b> che lo collegano</span></div>
        <div class="kit-cella"><b>4 · @import</b>
''' + codice_css('@import url("titoli.css");', 'stile.css') + codice_css('h1 { color: red; }', 'titoli.css') + '''          <span>il secondo file arriva <b>dopo</b> il primo</span></div>
      </div>''', titolo_aula='Quattro modi per la stessa regola')
P.p('Per un sito si usa **il file esterno**. Tutte le pagine lo collegano, e **una modifica fatta in un punto vale ovunque**. In più il browser scarica il file una volta e lo tiene in memoria (*cache*) per le pagine successive, che quindi si aprono più in fretta. Gli altri modi hanno usi più ristretti: l’attributo `style` rimescola aspetto e contenuto e va ritoccato tag per tag; `<style>` va bene per una pagina isolata o per una prova veloce.',
    '`@import` funziona, ma **si evita**, e il motivo sta nell’ordine in cui arrivano i file.')
P.forma('scarica stile.css', 'legge', '@import', 'solo ora', 'scarica colori.css|la pagina compare più tardi')
P.p('Il browser scopre il secondo file **solo dopo** aver scaricato e letto il primo: i file arrivano uno dopo l’altro invece che insieme, e la pagina compare più tardi. Se servono più fogli di stile, si scrivono **più `<link>`**, che partono tutti insieme.')
P.widget('w1_pagine', 'Un foglio di stile per cinque pagine')
P.err('«Nel file stile.css devo scrivere anche il tag `<style>`.»',
      'Il file esterno contiene **solo regole CSS**. `<style>` è un elemento HTML: serve solo per scrivere il CSS dentro una pagina HTML. In un file `.css` un tag non è CSS valido e la regola che lo segue viene scartata.')

# ---------------------------------------------------------------- 1.3
P.sez('1.3', 'Gli strumenti di lavoro', ic='wrench',
      R='VS Code per scrivere, Live Server per vedere gli aggiornamenti, DevTools per ispezionare: ciò che cambi nei DevTools resta solo nel browser.')
P.p('Una volta scritto il foglio di stile, bisogna **vederne l’effetto** e, quando qualcosa non torna, capire perché. Per scrivere CSS bastano un editor e un browser. In classe usiamo **Visual Studio Code** (VS Code) con l’estensione **Live Server**, che apre la pagina nel browser e la **ricarica da sola a ogni salvataggio**: si vede subito l’effetto di ogni modifica. Due estensioni facoltative: **Prettier**, che riordina il codice, e **CSS Peek**, che dall’HTML porta alla regola di una classe.')
P.grande('local:assets/immagini/vscode-live-server.png|https://github.com/ritwickdey/vscode-live-server',
         'VS Code a sinistra e il browser a destra con Live Server: si scrive «I Am Live» nel titolo e, appena si salva il file, la pagina si aggiorna da sola. Osservare l’indirizzo nel browser: comincia con 127.0.0.1, cioè la pagina arriva dal proprio computer.',
         'VS Code con il codice HTML a sinistra e il browser con la pagina aggiornata da Live Server a destra')
P.p('Per capire come il browser ha interpretato la pagina ci sono gli **strumenti per sviluppatori** (*DevTools*), che si aprono con il tasto F12 oppure con tasto destro › *Ispeziona*. Il pannello **Elementi** (*Elements*) mostra l’albero degli elementi della pagina: passando sopra a un elemento, quello si illumina nella pagina. Accanto, la scheda **Stili** (*Styles*) elenca tutte le regole che si applicano all’elemento scelto, con il file e la riga da cui vengono; le dichiarazioni battute da altre sono **barrate**. La scheda **Calcolati** (*Computed*) mostra infine il **valore finale** di ogni proprietà, quello che il browser usa davvero.')
P.grande('local:assets/immagini/devtools-elementi-stili.png|https://developer.chrome.com/docs/devtools/css',
         'I DevTools di Chrome. A destra in alto il pannello **Elementi** con l’elemento scelto evidenziato in azzurro; sotto, la scheda **Styles** con la regola `.aloha` (bordo tratteggiato rosso, `display`, `padding`) e, accanto, il file e la riga da cui viene. Osservare a sinistra l’elemento «Inspect Me!» illuminato nella pagina.',
         'I DevTools di Chrome con il pannello Elementi e la scheda Styles aperti accanto alla pagina')
P.p('Nei DevTools si possono anche **cambiare i valori in diretta** e vedere subito il risultato: è il modo più veloce per fare prove. Ma la modifica vive **solo nella copia della pagina che c’è nel tuo browser**: non viene salvata in nessun file e **sparisce al ricaricamento**.')
P.forma('prova nei DevTools|si vede subito', 'se funziona', 'ricopiala nel file CSS|così resta')
P.widget('w1_devtools', 'Una modifica nei DevTools')
P.err('«Ho cambiato il colore nei DevTools del sito della scuola: ora lo vedono tutti.»',
      'È cambiato **solo nella copia della pagina che c’è nel tuo browser**. Il file sul server non è stato toccato: gli altri vedono il sito come prima, e anche tu lo rivedi come prima appena ricarichi.')
P.dom('Cambiate il colore del titolo del sito della scuola nei DevTools e poi premete F5. Che cosa succede? Il compagno di banco vede il nuovo colore?',
      'Il colore cambia **solo nel vostro browser**; con F5 la pagina viene scaricata di nuovo e torna com’era. Il compagno non ha mai visto la modifica.')
P.p('Con l’editor per scrivere e i DevTools per controllare abbiamo tutto quello che serve. Ora possiamo guardare da vicino come è fatto il CSS che scriviamo.')


# ---------------------------------------------------------------- slide
ZEN = F('local:assets/immagini/zen-garden.jpg', 'CSS Zen Garden', 'Quattro versioni della pagina del CSS Zen Garden')
SP = {
 '1.1': [
  definizione('Il CSS', 'Il **CSS** (*Cascading Style Sheets*, «fogli di stile a cascata») è il linguaggio che decide **come appare** una pagina web.',
              [['palette', 'colori'], ['type', 'caratteri'], ['ruler', 'dimensioni e spazi'], ['layout-dashboard', 'impaginazione']],
              nota='L’HTML dà il **significato**, il CSS la **presentazione**.'),
  flusso('Il foglio di stile del browser', [
    nd('Pagina senza CSS', 'solo HTML: titoli, paragrafi, link', 'file-code'),
    nd('Foglio predefinito', 'il browser applica il suo *user agent stylesheet*', 'monitor'),
    nd('L’aspetto di partenza', righe=['titoli grandi e in grassetto', 'link blu e sottolineati', 'margini intorno al testo'], icona='eye', tono='fine')],
    riga='Per questo le pagine senza CSS **si somigliano tutte**; il nostro CSS parte da lì e lo modifica.'),
  gettoni('Perché separarli', [], [
    ['wrench', 'Manutenzione', 'per cambiare l’aspetto si modifica il foglio di stile, non le pagine'],
    ['copy', 'Coerenza', 'stesso foglio di stile: stessi colori, caratteri e spazi in tutte le pagine'],
    ['repeat', 'Riuso', 'una regola scritta una volta vale per tutti gli elementi a cui si applica']],
    msg='Significato e presentazione in due linguaggi, di solito in due file'),
  'w1_fogli',
  gettoni('CSS Zen Garden', [['palmtree', 'giardino giapponese'], ['megaphone', 'manifesto a colori'], ['building-2', 'struttura d’acciaio'], ['scroll', 'pergamena in fondo al mare']], [
    ['file-code', 'Una sola pagina HTML', 'sempre la stessa'],
    ['palette', 'Centinaia di fogli di stile', 'scritti da designer di tutto il mondo'],
    ['calendar', 'Nato nel 2003', 'per dimostrare che con il CSS si fa grafica vera senza toccare l’HTML']],
    foto=ZEN, occhiello='A cosa serve il CSS'),
 ],
 '1.2': [
  's1_quattro',
  gettoni('Il file esterno', [['link', '`<link rel="stylesheet" href="stile.css">`']], [
    ['pencil', 'Una modifica vale ovunque', 'tutte le pagine collegano lo stesso file'],
    ['hard-drive', 'Scaricato una volta', 'il browser lo tiene in *cache*: le pagine successive si aprono più in fretta'],
    ['flask-conical', '`style` e `<style>` solo per prove', 'un elemento o una pagina isolata']],
    msg='Per un sito si usa il file esterno', occhiello='I quattro modi di collegare il CSS'),
  flusso('Perché @import si evita', [
    nd('Scarica stile.css', icona='download'),
    nd('Legge `@import`', 'scopre solo ora il secondo file', 'file-search'),
    nd('Scarica colori.css', icona='download'),
    nd('La pagina compare', 'più tardi', 'clock', tono='no')],
    riga='Con più `<link>` i file **partono tutti insieme**.'),
 ],
 '1.3': [
  gettoni('Editor e Live Server', [['code', 'VS Code'], ['refresh-cw', 'Live Server'], ['sparkles', 'Prettier'], ['search', 'CSS Peek']], [
    ['refresh-cw', 'Live Server', 'apre la pagina e la ricarica a ogni salvataggio'],
    ['sparkles', 'Prettier', 'riordina il codice (facoltativa)'],
    ['search', 'CSS Peek', 'dall’HTML porta alla regola di una classe (facoltativa)']],
    foto=F('local:assets/immagini/vscode-live-server.png', 'L’indirizzo comincia con 127.0.0.1: la pagina arriva dal proprio computer', 'VS Code e il browser con Live Server'),
    occhiello='Gli strumenti di lavoro'),
  gettoni('I DevTools', [['keyboard', 'F12'], ['mouse-pointer-click', 'tasto destro › Ispeziona']], [
    ['list-tree', 'Elementi', 'l’albero degli elementi; passandoci sopra si illuminano nella pagina'],
    ['palette', 'Stili', 'le regole dell’elemento, con file e riga; le battute sono **barrate**'],
    ['calculator', 'Calcolati', 'il valore finale che il browser usa davvero']],
    foto=F('local:assets/immagini/devtools-elementi-stili.png', 'Elementi e Styles accanto alla pagina', 'I DevTools di Chrome'),
    occhiello='Gli strumenti di lavoro'),
  flusso('Prove in diretta', [
    nd('Cambi un valore', 'nei DevTools', 'pencil'),
    nd('Lo vedi subito', 'nella copia della pagina del tuo browser', 'eye'),
    nd('Ricarichi', 'la modifica sparisce: non è in nessun file', 'refresh-cw', tono='no'),
    nd('Ricopi nel file CSS', 'le prove riuscite', 'save', tono='si')]),
 ],
}
P.aula('Il linguaggio che decide come appare una pagina web.', SP,
       apertura=('Due siti con lo stesso testo, parola per parola, ma uno sembra un giornale e l’altro un videogioco. Che cosa è cambiato?',
                 'Non il contenuto (l’HTML) ma l’**aspetto**: il **foglio di stile CSS**.'))
