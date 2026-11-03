# Tema 5.4 · Cascata, ereditarietà, specificità (vecchio capitolo 4 del modulo CSS)
# Filo: un valore può arrivare dal genitore (ereditarietà) → parole per dire da dove prenderlo → quando più regole litigano: la cascata
#       → il suo criterio più usato, la specificità → !important, che la scavalca → come si indaga quando una regola non funziona
from lib import *

P.capo('Cascata, ereditarietà, specificità', 4)

# ---------------------------------------------------------------- 4.1
P.sez('4.1', 'Ereditarietà', ic='git-branch',
      R='Molte proprietà del testo passano ai discendenti, quelle della scatola no; `inherit` forza l’ereditarietà.')
P.p('Il valore di una proprietà non arriva sempre da una regola scritta per quell’elemento. Alcune proprietà date a un elemento **passano da sole ai suoi discendenti**: è l’[[ereditarietà]]. Se il `body` ha `color: navy`, anche i paragrafi, i titoli e le voci degli elenchi sono blu scuro, senza bisogno di una regola per ciascuno.',
    'Si ereditano soprattutto le **proprietà del testo**: `color`, le `font-*` (famiglia, dimensione, peso, stile), `line-height`, `text-align`, `letter-spacing`. **Non** si ereditano le **proprietà della scatola**: `margin`, `padding`, `border`, `background`, `width`, `height`. È una scelta sensata: se il bordo di un articolo passasse a tutti i paragrafi e ai link che contiene, ci sarebbero cornici dappertutto.')
P.widget('w4_eredita', 'Che cosa passa ai discendenti')
P.tab([['Si ereditano (testo)', 'Non si ereditano (scatola)'],
       ['`color`', '`margin`, `padding`'],
       ['`font-family`, `font-size`, `font-weight`, `font-style`', '`border`, `outline`'],
       ['`line-height`, `letter-spacing`, `word-spacing`', '`background-color`, `background-image`'],
       ['`text-align`, `text-indent`, `text-transform`', '`width`, `height`, `display`'],
       ['`list-style`, `visibility`, `cursor`', '`box-shadow`, `opacity`, `position`']],
      'Proprietà ereditate e non ereditate')
P.p('Un caso che sorprende: il `color` del `body` **non arriva ai link**. Il foglio di stile del browser dà ai link un colore loro, e una regola che prende direttamente l’elemento **batte sempre un valore ereditato**. Per colorare i link serve una regola per `a`.',
    'Con il valore `inherit` si può però **forzare l’ereditarietà**, anche per una proprietà che normalmente non si eredita o che il browser ha già impostato.')
P.es('`a { color: inherit; }` dà ai link il colore del testo che li circonda: in un paragrafo blu scuro, i link diventano blu scuro anche loro.')
P.err('«Se do un bordo al genitore, ce l’hanno anche i figli.»',
      '`border` è una proprietà della scatola e **non si eredita**: il bordo ce l’ha solo l’elemento a cui lo hai dato.')
P.err('«Il `color` del `body` vale per tutto il testo, link compresi.»',
      'I link hanno un colore **dal foglio di stile del browser**, che batte il valore ereditato dal `body`. Serve una regola per `a` (o `a { color: inherit; }`).')
P.dom('Metto `color: green` sul `body`. Titoli e link diventano verdi?',
      'I titoli **sì**, perché `color` si eredita. I link **no**: hanno un colore loro dal foglio di stile del browser.')

# ---------------------------------------------------------------- 4.2
P.sez('4.2', 'Valori speciali', ic='undo-2',
      R='`inherit` prende dal genitore, `initial` il valore iniziale della specifica, `unset` uno dei due, `revert` quello del browser.')
P.p('`inherit` non è l’unica parola di questo tipo. Quattro parole chiave valgono per **qualunque proprietà** e, invece di dare un valore, dicono **da dove prenderlo**. `inherit` prende il valore del **genitore**. `initial` prende il [[valore iniziale]] scritto nella specifica della proprietà, **uguale per tutti gli elementi**. `unset` si comporta come `inherit` se la proprietà si eredita (come `color`), altrimenti come `initial` (come `display` o `border`). `revert`, infine, prende il valore che darebbe il **foglio di stile del browser**, come se le nostre regole per quella proprietà non ci fossero.',
    'Attenzione a `initial`: **non** è il valore che il browser dà a quell’elemento.')
P.es('Il valore iniziale di `display` è `inline` per tutti gli elementi, quindi un `div` con `display: initial` diventa **in linea** e non torna a blocco. Per riavere il blocco che gli dà il browser serve `display: revert`.')
P.widget('w4_valori', 'I quattro valori speciali a confronto')
P.p('La proprietà `all` le imposta tutte insieme (tranne pochissime): `all: unset` toglie a un elemento **ogni stile**, `all: revert` lo riporta **all’aspetto che gli dà il browser**. Esiste anche `revert-layer`, che si capisce con i livelli della cascata (`@layer`), di cui parliamo subito.')
P.err('«`display: initial` rimette il `block` dei `div`.»',
      'Il valore iniziale di `display` è `inline` per tutti: il `div` diventa **in linea**. Per riavere il `block` del foglio del browser serve `display: revert`.')

# ---------------------------------------------------------------- 4.3
P.sez('4.3', 'La cascata', ic='list-ordered',
      R='Il browser ordina le dichiarazioni in conflitto per origine e importanza, specificità, ordine di scrittura.')
P.p('Ereditarietà e valori speciali dicono che cosa succede quando **nessuna regola** dà un valore a un elemento. Più spesso succede il contrario: **più dichiarazioni** cercano di dare un valore alla **stessa proprietà dello stesso elemento**. Per scegliere, il browser applica la [[cascata]] (la «C» di CSS): mette in fila le dichiarazioni in conflitto e le confronta con dei criteri, **in ordine**. Il criterio successivo serve **solo se il precedente finisce in parità**.')
P.forma('origine e importanza', 'parità?', 'livelli', 'parità?', 'specificità', 'parità?', 'ordine di scrittura|vince l’ultima')
P.p('Il primo criterio è l’**origine e importanza**, cioè da dove viene la dichiarazione. Le origini sono tre: il **browser** (il suo foglio predefinito), l’**utente** (le preferenze impostate nel browser, per esempio caratteri più grandi) e l’**autore** (chi ha scritto il sito). Tra le dichiarazioni normali vale **browser < utente < autore**; con `!important`, come vedremo, l’ordine si inverte.',
    'Vengono poi i **livelli** (*cascade layers*, `@layer`), un modo moderno per ordinare interi gruppi di regole. Il terzo criterio è la **specificità**, cioè quanto è preciso il selettore, che vedremo nella prossima sezione; una dichiarazione nell’attributo `style` batte tutti i selettori. L’ultimo è l’**ordine di apparizione**: a parità di tutto il resto vince la dichiarazione **scritta per ultima**.')
P.widget('w4_cascata', 'Cinque dichiarazioni per lo stesso link')
P.p('L’ordine di scrittura è quindi **l’ultimo criterio, non il primo**: conta solo quando origine e specificità sono uguali. Per questo spostare in fondo al file una regola «che non funziona», spesso, non serve a niente.')
P.err('«Vince sempre la regola scritta per ultima.»',
      'L’ordine conta **solo a parità** di origine, importanza e specificità. Una regola più specifica vince anche se è scritta prima.')
P.dom('Prima `.nota { color: red; }`, poi `p { color: blue; }`. Di che colore è un paragrafo con `class="nota"`?',
      '**Rosso**: `.nota` (0,1,0) è più specifica di `p` (0,0,1), e la specificità si guarda prima dell’ordine.')

# ---------------------------------------------------------------- 4.4
P.sez('4.4', 'Calcolo della specificità', ic='calculator',
      R='La specificità è una terna (id, classi, tipi) confrontata da sinistra; non si somma e l’ordine conta solo a parità.')
P.p('Tra i criteri della cascata, quello che decide più spesso è la [[specificità]], che misura **quanto è preciso** un selettore. Si scrive come una **terna di numeri** (a, b, c): **a** conta gli **id**; **b** conta le **classi**, i **selettori di attributo** e le **pseudo-classi**; **c** conta i **tipi** (nomi di tag) e i **pseudo-elementi**.')
P.es('`#avviso .nota p::first-line` ha un id, una classe, un tipo e un pseudo-elemento: la sua specificità è (1,1,2).')
P.p('Due terne si confrontano **colonna per colonna, da sinistra**: vince chi ha più id; a parità di id, chi ha più classi; a parità anche di quelle, chi ha più tipi. **Non si fa una somma e non c’è riporto**: undici tipi (0,0,11) non battono una classe (0,1,0), così come nel dizionario «b» viene dopo «azzzz».',
    'Alcuni pezzi di selettore hanno regole proprie. Il selettore universale `*` e i combinatori (spazio, `>`, `+`, `~`) **valgono zero**, e anche `:where()` vale sempre zero. `:not()`, `:is()` e `:has()` non contano per sé: valgono quanto il selettore **più specifico** che hanno tra parentesi. E una dichiarazione nell’**attributo `style`** batte qualunque selettore.')
P.tab([['Selettore', 'Specificità', 'Perché'],
       ['`*`', '(0,0,0)', 'il selettore universale vale zero'],
       ['`div p`', '(0,0,2)', 'due tipi; lo spazio non conta'],
       ['`.nota`', '(0,1,0)', 'una classe'],
       ['`p.nota`', '(0,1,1)', 'una classe e un tipo'],
       ['`a:hover`', '(0,1,1)', 'una pseudo-classe e un tipo'],
       ['`#avviso`', '(1,0,0)', 'un id'],
       ['`#avviso .nota p::first-line`', '(1,1,2)', 'un id, una classe, un tipo, un pseudo-elemento'],
       ['`li:not(.big)`', '(0,1,1)', '`:not()` vale quanto `.big`, più il tipo']],
      'La specificità di otto selettori')
P.widget('w4_chivince', 'Chi vince?')
P.err('«Più selettori scrivo, più la regola è forte.»',
      'Conta **che cosa** scrivi, non quanto: `div div div p` vale (0,0,4) e perde contro `.nota`, che vale (0,1,0).')

# ---------------------------------------------------------------- 4.5
P.sez('4.5', '!important e perché evitarlo', ic='zap',
      R='!important batte le regole normali prima di ogni calcolo, ma nel lavoro normale segnala un conflitto di specificità non risolto.')
P.p('C’è un modo per scavalcare la specificità. Scritto alla fine di un valore, `!important` (`color: red !important;`) fa vincere la dichiarazione su **tutte quelle normali**, prima ancora di guardare la specificità. Tra più dichiarazioni con `!important` si torna a confrontare specificità e ordine.',
    'Con `!important` l’ordine delle origini **si inverte**: le dichiarazioni importanti dell’utente battono quelle importanti dell’autore. Non è un caso: `!important` esiste soprattutto per l’**accessibilità**. Chi vede poco può imporre i propri caratteri o i propri colori, e **nessun sito glieli può togliere**.')
P.schema('s4_scala', 'Chi batte chi: la precedenza delle origini', '''      <div class="s4s">
        <div class="s4s-gr"><span class="s4s-t">più forte</span>
          <div class="s4s-p imp">browser · <b>!important</b></div>
          <div class="s4s-p imp">utente · <b>!important</b></div>
          <div class="s4s-p imp">autore · <b>!important</b></div>
          <div class="s4s-sep">con !important l’ordine si capovolge</div>
          <div class="s4s-p">autore · normale</div>
          <div class="s4s-p">utente · normale</div>
          <div class="s4s-p">browser · normale</div>
          <span class="s4s-t">più debole</span></div>
        <p class="s4s-nota">Dentro ogni gradino decidono la <b>specificità</b> e poi l’<b>ordine</b> di scrittura. Il sito (autore) batte le preferenze normali dell’utente, ma non quelle che l’utente ha reso importanti.</p>
      </div>''', titolo_aula='La precedenza delle origini')
P.p('Nel lavoro normale, invece, `!important` è quasi sempre il segno di un **conflitto di specificità non risolto**. Funziona subito, ma la prossima volta che bisognerà battere quella regola ci vorrà un altro `!important` più specifico, poi un altro ancora: è la «**guerra degli `!important`**», e il foglio di stile diventa impossibile da modificare.')
P.forma('`!important`|funziona subito', 'per batterlo', 'un altro `!important`|più specifico', 'e poi', 'un altro ancora|foglio impossibile da modificare')
P.p('Gli usi legittimi sono pochi: le **classi di utilità** che devono valere sempre (`.nascosto { display: none !important; }`) e il bisogno di **battere stili scritti da altri**, per esempio un attributo `style` inserito da un programma che non si può modificare.')
P.widget('w4_chivince_imp', 'Chi vince, con !important')
P.err('«`!important` risolve sempre.»',
      'Risolve **fino al prossimo** `!important` più specifico. Meglio capire quale regola vince e perché, e correggere la specificità.')

# ---------------------------------------------------------------- 4.6
P.sez('4.6', 'Perché la mia regola non funziona?', ic='search',
      R='Le cause sono poche e si controllano in ordine con i DevTools.')
P.p('Mettendo insieme tutto il tema, quando una regola non ha effetto le cause possibili sono poche, e conviene controllarle **in ordine**, con i DevTools aperti sull’elemento (tasto destro › *Ispeziona*):')
P.schema('s4_flusso', 'Cinque domande, in quest’ordine', '''      <ol class="s4f">
        <li><b>Il selettore prende davvero l’elemento?</b><span class="no">No → selettore sbagliato: un refuso, una classe che nell’HTML manca, un combinatore sbagliato. Nei DevTools la regola non compare tra gli Stili.</span></li>
        <li><b>La dichiarazione è valida?</b><span class="no">No → errore di sintassi: proprietà o valore sbagliati, punto e virgola mancante. Nei DevTools è barrata con il triangolo giallo.</span></li>
        <li><b>Un’altra regola la batte?</b><span class="no">Sì → una regola più specifica o scritta dopo. Nei DevTools è barrata e la vincente sta più in alto.</span></li>
        <li><b>Il valore arriva da un genitore o dal browser?</b><span class="no">Sì → ereditarietà o foglio del browser: serve una regola per l’elemento stesso. Nei DevTools: «Ereditato da…» o <i>user agent stylesheet</i>.</span></li>
        <li><b>Il file CSS è caricato?</b><span class="no">No → percorso sbagliato nel <code>link</code> o file non salvato. Nei DevTools la regola manca e nella scheda Rete c’è un errore 404.</span></li>
      </ol>''', aula=False)
P.p('Nella scheda **Stili** le regole compaiono **dalla più forte alla più debole**: una dichiarazione **barrata** è stata battuta da un’altra più in alto; un triangolo giallo indica una dichiarazione non valida; la sezione «Ereditato da…» (*Inherited from*) mostra i valori che arrivano dai genitori. La scheda **Calcolati** mostra il valore finale e, aprendo la proprietà, la regola che l’ha deciso.')
P.coppia(('local:assets/immagini/devtools-barrate.png|https://developer.chrome.com/docs/devtools/css/issues',
          'La scheda **Styles**: la regola `body, h1, h2, h3, p, pre` si applica all’elemento, ma la sua dichiarazione `margin` è **barrata** perché un’altra la batte.',
          'Scheda Styles dei DevTools con una dichiarazione barrata'),
         ('local:assets/immagini/devtools-ereditate.png|https://developer.chrome.com/docs/devtools/css/issues',
          'La sezione **Inherited from body**: in nero le proprietà che l’elemento eredita davvero (`color`, `overflow-wrap`), in grigio quelle che non si ereditano.',
          'Sezione Inherited from body dei DevTools con proprietà ereditate e non ereditate'), aula='Le prove nei DevTools')
P.p('Sappiamo ora quale dichiarazione vince. Resta da guardare più da vicino la parte destra di ogni dichiarazione: i **valori** che si possono scrivere dopo i due punti.')


# ---------------------------------------------------------------- slide
SP = {
 '4.1': [
  casi('Ereditarietà', [
    nd('Si ereditano', righe=['`color`', '`font-family`, `font-size`, `font-weight`', '`line-height`, `text-align`'], icona='type', nota='proprietà del **testo**'),
    nd('Non si ereditano', righe=['`margin`, `padding`, `border`', '`background`', '`width`, `height`'], icona='square', nota='proprietà della **scatola**: niente cornici dappertutto')],
    msg='Il testo passa ai discendenti, la scatola no'),
  'w4_eredita',
  flusso('Forzare l’ereditarietà', [
    nd('Il body è blu scuro', css='body { color: navy; }', icona='file-code'),
    nd('I link restano blu', 'il foglio del browser batte il valore ereditato', 'link'),
    nd('`inherit`', 'i link prendono il colore del testo intorno', 'circle-check', css='a { color: inherit; }', tono='si')]),
 ],
 '4.2': [
  casi('I quattro valori speciali', [
    nd('`inherit`', 'il valore del **genitore**', 'arrow-up'),
    nd('`initial`', 'il valore iniziale della specifica, **uguale per tutti**', 'file-text'),
    nd('`unset`', '`inherit` se la proprietà si eredita, altrimenti `initial`', 'shuffle'),
    nd('`revert`', 'il valore del **foglio del browser**', 'undo-2')],
    msg='Non danno un valore: dicono da dove prenderlo'),
  'w4_valori',
 ],
 '4.3': [
  flusso('La cascata', [
    nd('Origine e importanza', 'browser < utente < autore', 'layers'),
    nd('Livelli', '`@layer`', 'folder-tree'),
    nd('Specificità', 'il selettore più preciso; `style` batte tutti', 'crosshair'),
    nd('Ordine', 'a parità, vince l’ultima scritta', 'list-ordered', tono='fine')],
    frecce=['parità?', 'parità?', 'parità?'],
    riga='Il criterio successivo serve **solo se il precedente finisce in parità**.'),
  'w4_cascata',
 ],
 '4.4': [
  anatomia('La specificità', '#avviso .nota p::first-line', [
    ['#avviso', 'a = id', '1'],
    ['.nota', 'b = classi, attributi, pseudo-classi', '1'],
    ['p', 'c = tipi', '1'],
    ['::first-line', 'c = pseudo-elementi', '+1']],
    effetto='Specificità (1,1,2)', msg='Una terna (a, b, c)'),
  cifra('Colonna per colonna', ['tags', 'Undici tipi', '`div div … p` · (0,0,11)'], ['layers', 'Una classe', '`.nota` · (0,1,0)'],
        '(0,1,0) vince', 'Si confronta da sinistra: **niente somma, niente riporto**.',
        'Come nel dizionario, dove «b» viene dopo «azzzz».'),
  'w4_chivince',
 ],
 '4.5': [
  's4_scala',
  flusso('La guerra degli !important', [
    nd('Funziona subito', css='.nota {\n  color: red !important;\n}', icona='zap'),
    nd('Per batterlo', css='#box .nota {\n  color: blue !important;\n}', icona='swords'),
    nd('E poi un altro ancora', 'il foglio di stile diventa impossibile da modificare', 'triangle-alert', tono='no')]),
  casi('Quando usarlo', [
    caso('no', 'segnala un problema', testo='per risolvere un **conflitto di specificità**: meglio capire chi vince e correggere'),
    caso('si', 'usi legittimi', righe=['classi di utilità: `.nascosto { display: none !important; }`', 'battere stili altrui non modificabili', 'l’utente che impone caratteri e colori'])]),
 ],
 '4.6': [
  gettoni('Perché la mia regola non funziona', [], [
    ['crosshair', '1 · Il selettore prende davvero l’elemento?', 'no → un refuso, una classe che manca nell’HTML: la regola non compare tra gli Stili'],
    ['circle-x', '2 · La dichiarazione è valida?', 'no → errore di sintassi: è barrata con il triangolo giallo'],
    ['swords', '3 · Un’altra regola la batte?', 'sì → più specifica o scritta dopo: è barrata, la vincente sta più in alto'],
    ['git-branch', '4 · Il valore arriva da un genitore o dal browser?', 'sì → serve una regola per l’elemento: «Ereditato da…» o *user agent stylesheet*'],
    ['file-x', '5 · Il file CSS è caricato?', 'no → percorso sbagliato nel `link`: nella scheda Rete c’è un errore 404']],
    ),
 ],
}
P.aula('Quando più regole litigano: chi vince e perché.', SP,
       apertura=('Due regole danno al titolo due colori diversi. Secondo voi vince sempre quella scritta per ultima?',
                 'Non sempre: prima contano **origine**, **importanza** e **specificità**; l’ordine di scrittura decide solo a parità.'))
