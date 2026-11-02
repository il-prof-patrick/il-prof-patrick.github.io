# Capitolo 1 · Che cos'è il CSS e come si collega
from lib import *

P.capo('Che cos’è il CSS e come si collega', 1)

# ---------------------------------------------------------------- 1.1
P.sez('1.1', 'A cosa serve il CSS',
      R='L’HTML dice cos’è ogni parte della pagina, il CSS come appare; separarli permette di cambiare l’aspetto senza toccare il contenuto.')
P.p('Il **CSS** (*Cascading Style Sheets*, «fogli di stile a cascata») è il linguaggio che decide **come appare** una pagina web: colori, caratteri, dimensioni, spazi, impaginazione. L’HTML dice **che cos’è** ogni parte della pagina (un titolo, un paragrafo, un elenco, un link); il CSS dice come quella parte si presenta.',
    'Anche una pagina senza una riga di CSS ha un aspetto. Il browser applica il suo [[foglio di stile predefinito]] (*user agent stylesheet*): titoli grandi e in grassetto, link blu e sottolineati, un po’ di margine intorno al testo. Per questo tutte le pagine senza CSS si somigliano; il nostro CSS parte da lì e lo modifica.',
    'In breve: **HTML = significato, CSS = presentazione**. Tenerli separati ha tre vantaggi:')
P.ul(['**Manutenzione**: per cambiare l’aspetto si modifica il foglio di stile, senza toccare il contenuto delle pagine.',
      '**Coerenza**: tutte le pagine che usano lo stesso foglio di stile hanno gli stessi colori, caratteri e spazi.',
      '**Riuso**: una regola scritta una volta vale per tutti gli elementi a cui si applica, in tutte le pagine.'])
P.widget('w1_fogli', 'Stesso HTML, tre fogli di stile')
P.mg('local:assets/immagini/zen-garden.jpg|https://www.csszengarden.com/', 'CSS Zen Garden', 'Quattro versioni della pagina del CSS Zen Garden: stesso HTML, quattro fogli di stile diversi')
P.p('L’esempio più famoso è il **CSS Zen Garden** (csszengarden.com): una sola pagina HTML, sempre la stessa, e centinaia di fogli di stile diversi scritti da designer di tutto il mondo. Cambiando solo il CSS, la stessa pagina diventa un giardino giapponese, un manifesto a colori, una struttura d’acciaio, una pergamena in fondo al mare.',
    'Il sito è nato nel 2003 per dimostrare che con il CSS si poteva fare grafica vera senza toccare l’HTML; è ancora online e ogni progetto si può scaricare per vedere come è fatto.')
P.dom('Una pagina non ha nemmeno una riga di CSS. Perché allora il titolo è grande e in grassetto e il link è blu e sottolineato?',
      'Lo decide il **foglio di stile predefinito del browser** (*user agent stylesheet*). L’HTML dice solo «questo è un titolo di primo livello» e «questo è un link», non come devono apparire.', prima=True)

# ---------------------------------------------------------------- 1.2
P.sez('1.2', 'I quattro modi di collegare il CSS',
      R='Per un sito si usa un file CSS esterno collegato con link, perché una modifica vale per tutte le pagine; @import si evita.')
P.p('Il CSS si può collegare all’HTML in quattro modi:')
P.ol(['**Attributo `style`** su un singolo elemento: `<h1 style="color: red">`. Vale solo per quell’elemento.',
      '**Elemento `<style>`** dentro `<head>`: le regole valgono per tutta la pagina, ma solo per quella.',
      '**File esterno** collegato con `<link rel="stylesheet" href="stile.css">` dentro `<head>`: un file `.css` che contiene **solo regole** e che tutte le pagine del sito possono collegare.',
      '**`@import`**: una riga all’inizio di un foglio di stile che ne carica un altro, per esempio `@import url("colori.css");`.'])
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
P.p('Per un sito si usa **il file esterno**: tutte le pagine lo collegano, e una modifica fatta in un punto vale ovunque. In più il browser scarica il file una volta e lo tiene in memoria (*cache*) per le pagine successive, che quindi si aprono più in fretta.',
    'L’attributo `style` rimescola aspetto e contenuto e va ritoccato tag per tag; `<style>` va bene per una pagina isolata o per una prova veloce. `@import` funziona, ma **si evita**: il browser scopre il secondo file solo dopo aver scaricato e letto il primo, così i file arrivano uno dopo l’altro invece che insieme e la pagina compare più tardi. Se servono più fogli di stile, si scrivono più `<link>`.')
P.widget('w1_pagine', 'Un foglio di stile per cinque pagine')
P.err('«Nel file stile.css devo scrivere anche il tag `<style>`.»',
      'Il file esterno contiene **solo regole CSS**. `<style>` è un elemento HTML: serve solo per scrivere il CSS dentro una pagina HTML. In un file `.css` un tag non è CSS valido e la regola che lo segue viene scartata.')

# ---------------------------------------------------------------- 1.3
P.sez('1.3', 'Gli strumenti di lavoro',
      R='VS Code per scrivere, Live Server per vedere gli aggiornamenti, DevTools per ispezionare: ciò che cambi nei DevTools resta solo nel browser.')
P.p('Per scrivere CSS bastano un editor e un browser. In classe usiamo **Visual Studio Code** (VS Code) con l’estensione **Live Server**: apre la pagina nel browser e la **ricarica da sola a ogni salvataggio**, così si vede subito l’effetto di ogni modifica. Due estensioni facoltative: **Prettier**, che riordina il codice, e **CSS Peek**, che dall’HTML porta alla regola di una classe.')
P.grande('local:assets/immagini/vscode-live-server.png|https://github.com/ritwickdey/vscode-live-server',
         'VS Code a sinistra e il browser a destra con Live Server: si scrive «I Am Live» nel titolo e, appena si salva il file, la pagina si aggiorna da sola. Osservare l’indirizzo nel browser: comincia con 127.0.0.1, cioè la pagina arriva dal proprio computer.',
         'VS Code con il codice HTML a sinistra e il browser con la pagina aggiornata da Live Server a destra', aula='VS Code e Live Server')
P.p('Gli **strumenti per sviluppatori** del browser (*DevTools*: tasto F12, oppure tasto destro › *Ispeziona*) mostrano come il browser ha capito la pagina:')
P.ul(['il pannello **Elementi** (*Elements*): l’albero degli elementi della pagina; passando sopra a un elemento, si illumina nella pagina;',
      'la scheda **Stili** (*Styles*): tutte le regole che si applicano all’elemento scelto, con il file e la riga da cui vengono; le dichiarazioni battute da altre sono **barrate**;',
      'la scheda **Calcolati** (*Computed*): il valore finale di ogni proprietà, quello che il browser usa davvero.'])
P.grande('local:assets/immagini/devtools-elementi-stili.png|https://developer.chrome.com/docs/devtools/css',
         'I DevTools di Chrome. A destra in alto il pannello **Elementi** con l’elemento scelto evidenziato in azzurro; sotto, la scheda **Styles** con la regola `.aloha` (bordo tratteggiato rosso, `display`, `padding`) e, accanto, il file e la riga da cui viene. Osservare a sinistra l’elemento «Inspect Me!» illuminato nella pagina.',
         'I DevTools di Chrome con il pannello Elementi e la scheda Styles aperti accanto alla pagina', aula='I DevTools')
P.p('Nei DevTools si possono **cambiare i valori in diretta** e vedere subito il risultato: è il modo più veloce per fare prove. Ma la modifica vive **solo nella copia della pagina che c’è nel tuo browser**: non viene salvata in nessun file e **sparisce al ricaricamento**. Le prove riuscite vanno ricopiate nel file CSS.')
P.widget('w1_devtools', 'Una modifica nei DevTools')
P.err('«Ho cambiato il colore nei DevTools del sito della scuola: ora lo vedono tutti.»',
      'È cambiato **solo nella copia della pagina che c’è nel tuo browser**. Il file sul server non è stato toccato: gli altri vedono il sito come prima, e anche tu lo rivedi come prima appena ricarichi.')
P.dom('Cambiate il colore del titolo del sito della scuola nei DevTools e poi premete F5. Che cosa succede? Il compagno di banco vede il nuovo colore?',
      'Il colore cambia **solo nel vostro browser**; con F5 la pagina viene scaricata di nuovo e torna com’era. Il compagno non ha mai visto la modifica.')


# ---------------------------------------------------------------- slide
SP = {
 '1.1': [
  punti('HTML e CSS', 'L’HTML dice che cos’è, il CSS come appare', [
    ['file-code', '**CSS** = *Cascading Style Sheets*, «fogli di stile a cascata»'],
    ['tag', '**HTML**: che cos’è ogni parte · titolo, paragrafo, elenco, link'],
    ['palette', '**CSS**: come appare · colori, caratteri, spazi, impaginazione'],
    ['layers', 'Due linguaggi, due file: **significato** da una parte, **presentazione** dall’altra']]),
  punti('Il foglio di stile del browser', 'Anche senza CSS una pagina ha un aspetto', [
    ['monitor', 'Il browser applica il suo **foglio di stile predefinito** (*user agent stylesheet*)'],
    ['type', 'Titoli **grandi e in grassetto**, link **blu e sottolineati**, margini intorno al testo'],
    ['copy', 'Per questo le pagine senza CSS **si somigliano tutte**'],
    ['pencil', 'Il nostro CSS **parte da lì** e lo modifica']]),
  tessere('Perché separarli', 'Cambiare l’aspetto senza toccare il contenuto', [
    ['wrench', 'Manutenzione', 'si modifica il foglio di stile, non le pagine'],
    ['copy', 'Coerenza', 'stesso foglio → stessi colori e caratteri ovunque'],
    ['repeat', 'Riuso', 'una regola, scritta una volta, vale per tutti gli elementi']]),
  'w1_fogli',
  {'tipo': 'foto', 'titolo': 'CSS Zen Garden', 'msg': 'Una pagina HTML, centinaia di fogli di stile', 'foto': [F('local:assets/immagini/zen-garden.jpg', '', 'Quattro versioni della pagina del CSS Zen Garden')]},
 ],
 '1.2': [
  tessere('Quattro modi di collegare il CSS', 'Dal singolo elemento a tutto il sito', [
    ['tag', 'Attributo `style`', 'un solo elemento'],
    ['file-code', 'Elemento `<style>`', 'nell’`head`: una sola pagina'],
    ['link', 'File esterno con `<link>`', 'nell’`head`: tutte le pagine che lo collegano'],
    ['download', '`@import`', 'un foglio che ne carica un altro']]),
  's1_quattro',
  punti('Il file esterno', 'Per un sito si usa sempre il file esterno', [
    ['link', '`<link rel="stylesheet" href="stile.css">` in ogni pagina'],
    ['pencil', 'Una modifica **in un punto** vale per **tutte** le pagine'],
    ['hard-drive', 'Il browser lo scarica una volta e lo tiene in *cache*: le pagine dopo sono più veloci'],
    ['file-code', '`style` e `<style>`: solo per un elemento o una pagina, per prove veloci']]),
  punti('Perché evitare @import', 'I file arrivano uno dopo l’altro', [
    ['download', 'Il browser scopre il secondo file **solo dopo** aver letto il primo'],
    ['clock', 'Due scaricamenti **in fila** invece che insieme: la pagina compare più tardi'],
    ['list', 'Più fogli di stile? **Più `<link>`**, che partono insieme']]),
 ],
 '1.3': [
  punti('Editor e Live Server', 'Si salva e la pagina si aggiorna da sola', [
    ['code', '**VS Code**: l’editor che usiamo in classe'],
    ['refresh-cw', '**Live Server**: apre la pagina e la **ricarica a ogni salvataggio**'],
    ['sparkles', 'Facoltative: **Prettier** riordina il codice, **CSS Peek** trova la regola di una classe']]),
  'local:assets/immagini/vscode-live-server.png|https://github.com/ritwickdey/vscode-live-server',
  tessere('I DevTools', 'F12: come il browser ha capito la pagina', [
    ['list-tree', 'Elementi', 'l’albero degli elementi; passandoci sopra si illuminano'],
    ['palette', 'Stili', 'le regole dell’elemento, con file e riga; le battute sono **barrate**'],
    ['calculator', 'Calcolati', 'il valore finale che il browser usa davvero']]),
  'local:assets/immagini/devtools-elementi-stili.png|https://developer.chrome.com/docs/devtools/css',
  punti('Prove in diretta', 'Ciò che cambi nei DevTools resta solo nel tuo browser', [
    ['pencil', 'Nei DevTools si cambiano i valori e si vede **subito** il risultato'],
    ['monitor', 'La modifica vive nella **copia della pagina** che c’è nel tuo browser'],
    ['refresh-cw', 'Non viene salvata: **sparisce** al ricaricamento'],
    ['save', 'Le prove riuscite vanno **ricopiate nel file CSS**']]),
 ],
}
P.aula('Il linguaggio che decide come appare una pagina web.', SP,
       apertura=('Due siti con lo stesso testo, parola per parola, ma uno sembra un giornale e l’altro un videogioco. Che cosa è cambiato?',
                 'Non il contenuto (l’HTML) ma l’**aspetto**: il **foglio di stile CSS**.'))
