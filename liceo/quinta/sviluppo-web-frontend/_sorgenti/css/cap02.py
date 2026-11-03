# Tema 5.2 · La sintassi (vecchio capitolo 2 del modulo CSS)
# Filo: com'è fatta una regola → come la si scrive perché si legga → le scorciatoie (abbreviate) e la loro trappola
#       → che cosa succede quando si sbaglia → come si trovano gli errori
from lib import *

P.capo('La sintassi', 2)

# ---------------------------------------------------------------- 2.1
P.sez('2.1', 'Anatomia di una regola', ic='braces',
      R='Una regola ha un selettore, che dice a chi si applica, e un blocco di dichiarazioni `proprietà: valore;` che dice come.')
P.p('Un foglio di stile è un elenco di **regole**, e ogni regola risponde a due domande: **a chi** si applica e **come** deve apparire. Prendiamo la regola che rende blu scuro e grande il titolo principale:')
P.css('h1 {\n  color: navy;\n  font-size: 32px;\n}')
P.p('All’inizio c’è il [[selettore]], `h1`, che sceglie gli elementi a cui la regola si applica: qui tutti i titoli di primo livello. Segue, tra parentesi graffe `{ }`, il **blocco di dichiarazioni**, che contiene le istruzioni. Ogni [[dichiarazione]] è una coppia **`proprietà: valore;`**: la **proprietà** (`color`) dice che cosa cambiare, il **valore** (`navy`) dice come. I due punti separano proprietà e valore, il punto e virgola chiude la dichiarazione.')
P.svg('s2_anatomia', 'Anatomia di una regola', '0 0 720 290', 'La regola h1 { color: navy; font-size: 32px; } con indicati il selettore, le proprietà, i valori, le due dichiarazioni e il blocco di dichiarazioni tra graffe', aula=False)
P.p('I nomi delle proprietà si scrivono in **minuscolo** e, se sono fatti di più parole, le parole sono unite da un **trattino**: `font-size`, `background-color`, `text-align`. L’ultimo punto e virgola prima della graffa si potrebbe omettere, ma conviene **scriverlo sempre**: quando si aggiunge una riga sotto, non lo si dimentica.')
P.widget('w2_regola', 'Componi una regola')
P.err('«Le proprietà si scrivono come in Java: `fontSize`.»',
      'In CSS si scrive `font-size`, minuscolo con il trattino; `fontSize` non esiste e viene ignorata. La forma con la maiuscola in mezzo (*camelCase*) si usa solo quando si cambia lo stile da JavaScript (cap. 8).')

# ---------------------------------------------------------------- 2.2
P.sez('2.2', 'Commenti e formattazione', ic='message-square',
      R='L’unico commento valido è `/* */`; la formattazione non cambia nulla per il browser ma serve a chi legge.')
P.p('Una regola si può scrivere in modo che il browser la capisca, ma anche in modo che **la capisca una persona**: chi la rilegge tra un mese, o un compagno che lavora allo stesso sito. A questo servono i commenti e la formattazione.',
    'Un [[commento]] si scrive tra `/*` e `*/`, anche su più righe, e il browser lo ignora. È **l’unico commento del CSS**: la doppia barra `//`, comune in JavaScript e in Java, qui non esiste. I commenti inoltre **non si possono annidare**: il primo `*/` chiude il commento, anche se dentro ce n’era un altro aperto.')
P.casi(('si', 'commento CSS', 'Tra `/*` e `*/`, anche su più righe: il browser lo ignora.', '/* Titoli della pagina */'),
       ('no', 'non è un commento', 'La doppia barra viene da JavaScript e Java: in CSS il testo finisce nel selettore e la regola viene scartata.', '// Titoli della pagina'))
P.p('Un uso pratico durante le prove: **commentare una dichiarazione per disattivarla**, senza cancellarla.')
P.es('Nella regola qui sotto la vecchia dimensione del titolo, 40px, è disattivata da un commento: resta lì, pronta per essere rimessa, ma il browser usa solo 32px.')
P.css('/* Titoli della pagina */\nh1 {\n  color: navy;\n  /* font-size: 40px; */\n  font-size: 32px;\n}')
P.p('Spazi, a capo e rientri **non cambiano nulla per il browser**, ma servono a chi legge. La convenzione è **una dichiarazione per riga**, rientrata di due o quattro spazi, la graffa di chiusura su una riga sua e una riga vuota tra una regola e l’altra.',
    'I fogli di stile pubblicati sono invece spesso **compressi** (*minified*): tutto su una riga, senza spazi né commenti, per pesare meno. Si leggono male, ma il browser li interpreta esattamente come la versione ordinata. Non si scrivono a mano: li produce un programma, partendo dal file ordinato.')
P.schema('s2_formati', 'Lo stesso CSS scritto in tre modi', '''      <div class="kit-schema-griglia">
        <div class="kit-cella"><b>Tutto su una riga</b>
''' + codice_css('h1 { color: navy; font-size: 32px; } p { color: #333; line-height: 1.5; }') + '''          <span>valido, ma difficile da leggere e da correggere</span></div>
        <div class="kit-cella"><b>Ordinato</b>
''' + codice_css('/* Titoli */\nh1 {\n  color: navy;\n  font-size: 32px;\n}\n\np {\n  color: #333;\n  line-height: 1.5;\n}') + '''          <span>una dichiarazione per riga: si scrive così</span></div>
        <div class="kit-cella"><b>Compresso</b>
''' + codice_css('h1{color:navy;font-size:32px}p{color:#333;line-height:1.5}') + '''          <span>per la pubblicazione: pesa meno, lo fa un programma</span></div>
      </div>''', titolo_aula='Tre modi di scrivere lo stesso CSS')
P.dom('Scrivo `// ricordati di cambiare il colore` sopra la regola dei titoli. La regola funziona ancora?',
      'No: `//` non è un commento in CSS. Il testo finisce nel **selettore**, che non è più valido, e **l’intera regola viene scartata**. Si scrive `/* ricordati di cambiare il colore */`.')

# ---------------------------------------------------------------- 2.3
P.sez('2.3', 'Proprietà abbreviate', ic='layers',
      R='Una proprietà abbreviata ne imposta più insieme e ciò che non scrivi torna al valore iniziale.')
P.p('Scrivere una dichiarazione per ogni dettaglio può diventare lungo: per dare un margine ai quattro lati di un elemento servirebbero quattro righe. Per questo alcune proprietà ne raggruppano altre: sono le [[proprietà abbreviate]] (*shorthand*). `margin` imposta in un colpo solo `margin-top`, `margin-right`, `margin-bottom` e `margin-left`; `border` imposta **spessore, stile e colore** del bordo; `font` lo stile, il peso, la dimensione, l’interlinea e la famiglia del carattere; `background` il colore, l’immagine, la posizione e la ripetizione dello sfondo.',
    '`margin` e `padding` accettano **da uno a quattro valori**, letti **in senso orario a partire dall’alto**, come le lancette dell’orologio. Con un valore solo, quello vale per tutti e quattro i lati; con due, il primo vale sopra e sotto, il secondo a destra e a sinistra; con tre, il primo vale sopra, il secondo a destra e a sinistra, il terzo sotto; con quattro, si va sopra, destra, sotto, sinistra.')
P.es('- `margin: 10px` · 10px su tutti e quattro i lati\n- `margin: 10px 30px` · 10px sopra e sotto, 30px a destra e a sinistra\n- `margin: 10px 30px 50px` · 10px sopra, 30px a destra e a sinistra, 50px sotto\n- `margin: 10px 20px 30px 40px` · sopra, destra, sotto, sinistra')
P.widget('w2_lati', 'Uno, due, tre o quattro valori')
P.p('La comodità ha però un prezzo: una proprietà abbreviata imposta **tutte** le sue proprietà, anche quelle che non scrivi, e quelle mancanti **tornano al loro [[valore iniziale]]**.')
P.forma('`background: url(foto.jpg)`|c’è un’immagine', 'poi', '`background: red`', 'risultato', 'sfondo rosso|l’immagine sparisce')
P.p('Alcune parti, poi, sono **obbligatorie**. `border` senza lo **stile** (`solid`, `dashed`, `dotted`…) non disegna niente, perché lo stile iniziale è `none`. `font` senza **dimensione e famiglia** non è valida e viene scartata. Per cambiare una cosa sola, conviene la proprietà estesa: `background-color: red` cambia il colore e lascia stare l’immagine.')
P.tab([['Abbreviata', 'Equivale a', 'Attenzione'],
       ['`border: 2px solid red`', '`border-width: 2px` · `border-style: solid` · `border-color: red`', 'senza lo stile il bordo non si vede'],
       ['`font: italic bold 18px/1.5 Georgia, serif`', '`font-style` · `font-weight` · `font-size`/`line-height` · `font-family`', 'dimensione e famiglia obbligatorie, in quest’ordine, in fondo'],
       ['`background: #eee url(foto.jpg) no-repeat center`', '`background-color` · `background-image` · `background-repeat` · `background-position`', 'ciò che manca torna al valore iniziale'],
       ['`margin: 10px 30px 50px`', '`margin-top: 10px` · `margin-right: 30px` · `margin-bottom: 50px` · `margin-left: 30px`', 'con tre valori il secondo vale a destra e a sinistra']],
      'Forma abbreviata e forma estesa')
P.err('«`border: 2px red` disegna un bordo rosso di 2 pixel.»',
      'Manca lo **stile**: il suo valore iniziale è `none` e il bordo non si vede. Si scrive `border: 2px solid red`.')
P.err('«`font: 18px` cambia la dimensione del testo.»',
      'Nella forma abbreviata `font` la **famiglia è obbligatoria**: senza, la dichiarazione non è valida e viene scartata. Per la sola dimensione si usa `font-size: 18px`.')
P.err('«`background: red` cambia solo il colore di sfondo.»',
      'La forma abbreviata imposta **tutte** le proprietà dello sfondo: anche l’immagine torna a `none` e sparisce. Per cambiare solo il colore si usa `background-color: red`.')

# ---------------------------------------------------------------- 2.4
P.sez('2.4', 'Errori comuni e validatore', ic='bug',
      R='Il browser non segnala gli errori: scarta ciò che non capisce e va avanti; si trovano con editor, DevTools e validatore.')
P.dom('Dimentico il punto e virgola dopo `color: red` e sotto c’è `font-size: 48px;`. Il titolo sarà rosso, grande, tutti e due o nessuno dei due?',
      '**Nessuno dei due**: senza il punto e virgola le due righe diventano una sola dichiarazione, `color: red font-size: 48px`, che non è valida e viene scartata.', prima=True)
P.p('Gli errori della sezione precedente hanno una cosa in comune: nessuno di loro produce un messaggio. Quando incontra qualcosa che non capisce, il browser **non segnala nessun errore**: **scarta la dichiarazione** (o l’intera regola) e va avanti con il resto.')
P.forma('dichiarazione che non capisce', 'il browser', 'la scarta', 'e', 'va avanti con il resto|nessun messaggio')
P.p('È una scelta voluta: un foglio di stile scritto con le proprietà di domani funziona anche nei browser di oggi, che **ignorano soltanto ciò che non conoscono**. Il prezzo è che gli errori **passano in silenzio**: la pagina semplicemente non ha l’aspetto voluto, e tocca a noi capire perché.')
P.widget('w2_errori', 'Cinque errori che il browser non segnala')
P.p('Per fortuna gli errori si possono cercare in tre posti. Il primo è l’**editor**: VS Code colora in modo diverso e sottolinea le proprietà sconosciute e le graffe che non tornano. Il secondo sono i **DevTools**: nella scheda Stili una dichiarazione non valida è **barrata** e ha accanto un **triangolo giallo** di avviso.',
    'Il terzo è il [[validatore]] del W3C (jigsaw.w3.org/css-validator): si incolla il CSS o si carica il file, e restituisce **l’elenco degli errori con il numero di riga**. Il profilo predefinito è «CSS livello 3 + SVG»; conviene provarlo, ma alcune novità recenti possono risultare errori anche se i browser le capiscono.')
P.coppia(('local:assets/immagini/devtools-non-valida.png|https://developer.chrome.com/docs/devtools/css/issues',
          'Nei DevTools `color: unicornpink` (un colore che non esiste) e `colour: deeppink` (la proprietà scritta all’inglese) sono **barrate** con il triangolo giallo; vale solo l’ultima, `color: deeppink`.',
          'I DevTools con due dichiarazioni non valide barrate e segnalate da un triangolo giallo'),
         ('local:assets/immagini/validatore-w3c.png|https://jigsaw.w3.org/css-validator/',
          'Il validatore del W3C su un foglio con tre errori: il punto e virgola mancante dopo `color` (riga 3), la proprietà `colour` che non esiste, con il suggerimento `color` (riga 6), il `18` senza unità (riga 7).',
          'Il validatore CSS del W3C con l’elenco di tre errori e i numeri di riga'), aula='DevTools e validatore')
P.p('Ora sappiamo scrivere una regola e trovarne gli errori. La parte della regola che decide **a chi** si applica, il selettore, è però molto più ricca di un semplice `h1`.')


# ---------------------------------------------------------------- slide
SP = {
 '2.1': [
  anatomia('Una regola CSS', 'h1 {\n  color: navy;\n  font-size: 32px;\n}', [
    ['h1', 'selettore', 'sceglie gli elementi: tutti i titoli h1'],
    ['{\n  color: navy;\n  font-size: 32px;\n}', 'blocco di dichiarazioni', 'tra parentesi graffe'],
    ['color: navy;', 'dichiarazione', '`proprietà: valore;`'],
    ['color', 'proprietà', 'che cosa cambiare'],
    ['navy', 'valore', 'come']],
    msg='A chi si applica e come deve apparire'),
  'w2_regola',
 ],
 '2.2': [
  casi('I commenti', [
    caso('si', 'commento CSS', testo='il browser lo ignora; anche su più righe', css='/* Titoli della pagina */'),
    caso('no', 'non esiste in CSS', testo='viene da JavaScript e Java: la regola sotto viene scartata', css='// Titoli della pagina')],
    msg='I commenti non si annidano: il primo `*/` chiude'),
  flusso('Disattivare senza cancellare', [
    nd('Una prova', css='h1 {\n  font-size: 40px;\n}', icona='flask-conical'),
    nd('La commento', css='h1 {\n  /* font-size: 40px; */\n  font-size: 32px;\n}', icona='message-square'),
    nd('Il browser usa 32px', 'la vecchia riga resta lì, pronta da rimettere', 'circle-check', tono='si')]),
  's2_formati',
 ],
 '2.3': [
  definizione('Le proprietà abbreviate', 'Una proprietà abbreviata (*shorthand*) **ne imposta più insieme**.',
              [['box', '`margin`: i quattro lati'], ['square', '`border`: spessore, stile, colore'], ['type', '`font`: stile, peso, dimensione, famiglia'], ['image', '`background`: colore, immagine, posizione']]),
  anatomia('Quattro valori, in senso orario', 'margin: 10px 20px 30px 40px;', [
    ['10px', 'sopra', '1° valore'], ['20px', 'destra', '2° valore'], ['30px', 'sotto', '3° valore'], ['40px', 'sinistra', '4° valore']],
    effetto='Come le lancette dell’orologio, a partire dall’alto'),
  'w2_lati',
  flusso('Ciò che non scrivi si azzera', [
    nd('Prima', 'c’è un’immagine di sfondo', 'image', css='background: url(foto.jpg);'),
    nd('Poi', 'si cambia il colore con l’abbreviata', 'pencil', css='background: red;'),
    nd('Risultato', 'sfondo rosso, ma `background-image` torna a `none`: l’immagine sparisce', 'image-off', tono='no')],
    riga='Per cambiare una cosa sola: la proprietà estesa, `background-color: red`.'),
 ],
 '2.4': [
  flusso('Il browser non protesta', [
    nd('Una dichiarazione che non capisce', css='color: red\nfont-size: 48px;', icona='circle-help'),
    nd('La scarta', 'nessun messaggio di errore', 'trash-2', tono='no'),
    nd('Va avanti con il resto', 'la pagina semplicemente non ha l’aspetto voluto', 'arrow-right')],
    riga='Voluto: le proprietà di domani non rompono i browser di oggi. Il prezzo: gli errori **passano in silenzio**.'),
  'w2_errori',
  gettoni('Dove si trovano gli errori', [], [
    ['code', 'Editor', 'VS Code sottolinea le proprietà sconosciute e le graffe che non tornano'],
    ['search', 'DevTools', 'la dichiarazione non valida è **barrata**, con il triangolo giallo'],
    ['shield-check', 'Validatore del W3C', 'l’elenco degli errori con il numero di riga']]),
 ],
}
P.aula('Regole, dichiarazioni, commenti: come si scrive il CSS.', SP,
       apertura=('In un foglio di stile c’è un errore di battitura. Secondo voi il browser mostra un messaggio d’errore?',
                 'No: il browser **scarta in silenzio** ciò che non capisce e va avanti. Per questo bisogna saper cercare gli errori.'))
