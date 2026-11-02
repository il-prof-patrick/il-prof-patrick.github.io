# Capitolo 2 · La sintassi
from lib import *

P.capo('La sintassi', 2)

# ---------------------------------------------------------------- 2.1
P.sez('2.1', 'Anatomia di una regola',
      R='Una regola ha un selettore, che dice a chi si applica, e un blocco di dichiarazioni `proprietà: valore;` che dice come.')
P.p('Un foglio di stile è un elenco di **regole**. Ogni regola dice **a chi** si applica e **come** deve apparire:')
P.css('h1 {\n  color: navy;\n  font-size: 32px;\n}')
P.ul(['il [[selettore]] (`h1`) sceglie gli elementi a cui si applica la regola;',
      'il **blocco di dichiarazioni**, tra parentesi graffe `{ }`, contiene le istruzioni;',
      'ogni [[dichiarazione]] è una coppia `proprietà: valore;`: la **proprietà** (`color`) dice che cosa cambiare, il **valore** (`navy`) come. I due punti separano proprietà e valore, il punto e virgola chiude la dichiarazione.'])
P.svg('s2_anatomia', 'Anatomia di una regola', '0 0 720 290', 'La regola h1 { color: navy; font-size: 32px; } con indicati il selettore, le proprietà, i valori, le due dichiarazioni e il blocco di dichiarazioni tra graffe')
P.p('I nomi delle proprietà si scrivono in **minuscolo** e, se sono fatti di più parole, le parole sono unite da un **trattino**: `font-size`, `background-color`, `text-align`. L’ultimo punto e virgola prima della graffa si potrebbe omettere, ma conviene scriverlo sempre: quando si aggiunge una riga sotto, non lo si dimentica.')
P.widget('w2_regola', 'Componi una regola')
P.err('«Le proprietà si scrivono come in Java: `fontSize`.»',
      'In CSS si scrive `font-size`, minuscolo con il trattino; `fontSize` non esiste e viene ignorata. La forma con la maiuscola in mezzo (*camelCase*) si usa solo quando si cambia lo stile da JavaScript (cap. 8).')

# ---------------------------------------------------------------- 2.2
P.sez('2.2', 'Commenti e formattazione',
      R='L’unico commento valido è `/* */`; la formattazione non cambia nulla per il browser ma serve a chi legge.')
P.p('Un [[commento]] si scrive tra `/*` e `*/`, anche su più righe, e il browser lo ignora. È l’**unico** commento del CSS: la doppia barra `//`, comune in JavaScript e in Java, qui non esiste. I commenti **non si possono annidare**: il primo `*/` chiude il commento, anche se dentro ce n’era un altro aperto.',
    'Un uso pratico durante le prove: **commentare una dichiarazione per disattivarla**, senza cancellarla.')
P.css('/* Titoli della pagina */\nh1 {\n  color: navy;\n  /* font-size: 40px; */\n  font-size: 32px;\n}')
P.p('Spazi, a capo e rientri **non cambiano nulla per il browser**, ma servono a chi legge. La convenzione: **una dichiarazione per riga**, rientrata di due o quattro spazi, la graffa di chiusura su una riga sua e una riga vuota tra una regola e l’altra.',
    'I fogli di stile pubblicati sono spesso **compressi** (*minified*): tutto su una riga, senza spazi né commenti, per pesare meno. Si leggono male, ma il browser li interpreta esattamente come la versione ordinata.')
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
P.sez('2.3', 'Proprietà abbreviate',
      R='Una proprietà abbreviata ne imposta più insieme e ciò che non scrivi torna al valore iniziale.')
P.p('Alcune proprietà ne raggruppano altre: sono le [[proprietà abbreviate]] (*shorthand*). `margin` imposta in un colpo solo `margin-top`, `margin-right`, `margin-bottom` e `margin-left`; `border` imposta spessore, stile e colore del bordo; `font` lo stile, il peso, la dimensione, l’interlinea e la famiglia del carattere; `background` il colore, l’immagine, la posizione e la ripetizione dello sfondo.',
    '`margin` e `padding` accettano da uno a quattro valori, letti **in senso orario a partire dall’alto**:')
P.ul(['**1 valore**: vale per tutti e quattro i lati (`margin: 10px`);',
      '**2 valori**: il primo sopra e sotto, il secondo a destra e a sinistra (`margin: 10px 30px`);',
      '**3 valori**: sopra, poi destra e sinistra, poi sotto (`margin: 10px 30px 50px`);',
      '**4 valori**: sopra, destra, sotto, sinistra, come le lancette dell’orologio (`margin: 10px 20px 30px 40px`).'])
P.widget('w2_lati', 'Uno, due, tre o quattro valori')
P.p('Attenzione: una proprietà abbreviata imposta **tutte** le sue proprietà, anche quelle che non scrivi, e quelle mancanti tornano al loro [[valore iniziale]]. `background: red` imposta il colore ma rimette anche `background-image` a `none`: se prima c’era un’immagine di sfondo, sparisce.',
    'Alcune parti poi sono obbligatorie. `border` senza lo **stile** (`solid`, `dashed`, `dotted`…) non disegna niente, perché lo stile iniziale è `none`. `font` senza **dimensione e famiglia** non è valida e viene scartata.')
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
P.sez('2.4', 'Errori comuni e validatore',
      R='Il browser non segnala gli errori: scarta ciò che non capisce e va avanti; si trovano con editor, DevTools e validatore.')
P.p('Quando incontra qualcosa che non capisce, il browser **non segnala nessun errore**: scarta la dichiarazione (o l’intera regola) e va avanti con il resto. È una scelta voluta: un foglio di stile scritto con le proprietà di domani funziona anche nei browser di oggi, che ignorano soltanto ciò che non conoscono. Il prezzo è che gli errori **passano in silenzio**: la pagina semplicemente non ha l’aspetto voluto.')
P.dom('Dimentico il punto e virgola dopo `color: red` e sotto c’è `font-size: 48px;`. Il titolo sarà rosso, grande, tutti e due o nessuno dei due?',
      '**Nessuno dei due**: senza il punto e virgola le due righe diventano una sola dichiarazione, `color: red font-size: 48px`, che non è valida e viene scartata.', prima=True)
P.widget('w2_errori', 'Cinque errori che il browser non segnala')
P.p('Gli errori si trovano in tre modi:')
P.ul(['con l’**editor**: VS Code colora in modo diverso e sottolinea le proprietà sconosciute e le graffe che non tornano;',
      'con i **DevTools**: nella scheda Stili una dichiarazione non valida è **barrata** e ha accanto un **triangolo giallo** di avviso;',
      'con il [[validatore]] del W3C (jigsaw.w3.org/css-validator): si incolla il CSS o si carica il file e restituisce l’elenco degli errori con il numero di riga. Il profilo predefinito è «CSS livello 3 + SVG»; conviene provarlo, perché alcune novità recenti possono risultare errori anche se i browser le capiscono.'])
P.coppia(('local:assets/immagini/devtools-non-valida.png|https://developer.chrome.com/docs/devtools/css/issues',
          'Nei DevTools `color: unicornpink` (un colore che non esiste) e `colour: deeppink` (la proprietà scritta all’inglese) sono **barrate** con il triangolo giallo; vale solo l’ultima, `color: deeppink`.',
          'I DevTools con due dichiarazioni non valide barrate e segnalate da un triangolo giallo'),
         ('local:assets/immagini/validatore-w3c.png|https://jigsaw.w3.org/css-validator/',
          'Il validatore del W3C su un foglio con tre errori: il punto e virgola mancante dopo `color` (riga 3), la proprietà `colour` che non esiste, con il suggerimento `color` (riga 6), il `18` senza unità (riga 7).',
          'Il validatore CSS del W3C con l’elenco di tre errori e i numeri di riga'), aula='DevTools e validatore')


# ---------------------------------------------------------------- slide
SP = {
 '2.1': [
  punti('Una regola CSS', 'A chi si applica e come deve apparire', [
    ['crosshair', 'Il **selettore** sceglie gli elementi: `h1` prende tutti i titoli di primo livello'],
    ['braces', 'Il **blocco di dichiarazioni** sta tra le graffe `{ }`'],
    ['pencil', 'Ogni **dichiarazione** è `proprietà: valore;`'],
    ['type', 'Proprietà **minuscole**, parole unite dal **trattino**: `font-size`, `background-color`'],
    ['circle-check', 'Il punto e virgola finale si scrive **sempre**, anche nell’ultima riga']]),
  's2_anatomia',
 ],
 '2.2': [
  punti('I commenti', 'Uno solo: /* … */', [
    ['message-square', '`/* … */`, anche su più righe: il browser lo ignora'],
    ['circle-x', '`//` **non esiste** in CSS (è di JavaScript e Java)'],
    ['layers', 'Non si annidano: il primo `*/` chiude il commento'],
    ['toggle-left', 'Commentare una dichiarazione = **disattivarla** nelle prove']]),
  punti('La formattazione', 'Per il browser non cambia nulla, per chi legge sì', [
    ['list', '**Una dichiarazione per riga**, rientro di 2 o 4 spazi'],
    ['minus', 'Graffa di chiusura su una riga sua, una riga vuota tra le regole'],
    ['file-archive', 'Online i file sono spesso **compressi** (*minified*): una riga, senza spazi'],
    ['sparkles', 'Prettier in VS Code riordina il codice da solo']]),
 ],
 '2.3': [
  punti('Le proprietà abbreviate', 'Una proprietà ne imposta più insieme', [
    ['box', '`margin` = `margin-top` + `-right` + `-bottom` + `-left`'],
    ['square', '`border` = spessore + **stile** + colore'],
    ['type', '`font` = stile, peso, dimensione/interlinea, **famiglia**'],
    ['image', '`background` = colore, immagine, posizione, ripetizione']]),
  punti('Ciò che non scrivi si azzera', 'Le parti mancanti tornano al valore iniziale', [
    ['image-off', '`background: red` → anche `background-image` torna a `none`'],
    ['square-dashed', '`border` senza stile → stile `none`, **bordo invisibile**'],
    ['circle-x', '`font` senza dimensione e famiglia → **scartata**'],
    ['lightbulb', 'Per cambiare una cosa sola: la proprietà estesa (`background-color`)']]),
 ],
 '2.4': [
  punti('Il browser non protesta', 'Scarta ciò che non capisce e va avanti', [
    ['eye-off', 'Nessun messaggio di errore: la regola **non funziona e basta**'],
    ['sparkles', 'Voluto: le proprietà nuove non rompono i browser vecchi'],
    ['triangle-alert', 'Il prezzo: gli errori **passano in silenzio**']]),
  tessere('Dove si trovano gli errori', 'Editor, DevTools, validatore', [
    ['code', 'Editor', 'VS Code sottolinea proprietà sconosciute e graffe sbagliate'],
    ['search', 'DevTools', 'dichiarazione **barrata** con il triangolo giallo'],
    ['shield-check', 'Validatore W3C', 'elenco degli errori con il numero di riga']]),
 ],
}
P.aula('Regole, dichiarazioni, commenti: come si scrive il CSS.', SP,
       apertura=('In un foglio di stile c’è un errore di battitura. Secondo voi il browser mostra un messaggio d’errore?',
                 'No: il browser **scarta in silenzio** ciò che non capisce e va avanti. Per questo bisogna saper cercare gli errori.'))
