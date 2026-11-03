# Tema 6.3 · Il box model (vecchio capitolo 8 del modulo CSS)
# Filo: ogni elemento è una scatola a strati → quanto è grande → che cosa misura width (box-sizing)
#       → lo spazio fuori: i margini → padding e margine a confronto → il contenuto che non entra
from lib import *

P.capo('Il box model', 8)

# ---------------------------------------------------------------- 8.1
P.sez('8.1', 'Content, padding, border, margin', ic='box',
      R='Ogni elemento è una scatola a strati: contenuto, padding, bordo, margine.')
P.p('Sfondi, bordi, ombre, testo: finora abbiamo decorato gli elementi. Ma che forma ha, per il browser, un elemento? **Ogni elemento è una scatola rettangolare**, anche un link o una parola in grassetto. La scatola è fatta di **quattro strati**, dal centro verso l’esterno: è il [[box model]], il modello della scatola.',
    'Al centro c’è il **contenuto** (*content*): il testo, l’immagine o gli elementi figli. Intorno c’è il **padding**, lo spazio **interno** tra il contenuto e il bordo. Poi il **bordo** (*border*), la cornice, che può avere spessore zero. Fuori di tutto il **margine** (*margin*), lo spazio **esterno** che separa la scatola dalle altre.')
P.forma('contenuto', '', 'padding|spazio interno', '', 'bordo|la cornice', '', 'margine|spazio esterno')
P.p('Lo **sfondo** dell’elemento si estende sotto il contenuto, il padding e il bordo, ma **non sotto il margine**, che resta sempre trasparente: attraverso il margine si vede lo sfondo del genitore.')
P.widget('w8_scatola', 'La scatola')
P.grande('local:assets/immagini/devtools-box-model.png|https://developer.chrome.com/docs/devtools/css/reference',
         'Il diagramma del box model nei DevTools di Chrome: dall’esterno, in arancione il **margine**, in giallo il **bordo** (1px), in verde il **padding** (16px per lato) e al centro, in azzurro, il **contenuto** (140,531 × 28 px). Osservare che i colori sono gli stessi che il browser usa per evidenziare l’elemento nella pagina.',
         'Il diagramma del box model nella scheda Styles dei DevTools di Chrome')
P.err('«Il margine fa parte dello sfondo dell’elemento.»',
      'Lo sfondo arriva fino al **bordo**. Il margine è sempre **trasparente**: lì si vede lo sfondo del genitore.')

# ---------------------------------------------------------------- 8.2
P.sez('8.2', 'Larghezza e altezza', ic='move-horizontal',
      R='width auto riempie il contenitore, height auto segue il contenuto; min e max fissano i limiti.')
P.p('Quanto è grande la scatola? Senza indicazioni, un elemento di blocco ha `width: auto`, che vuol dire **tutta la larghezza disponibile** nel contenitore, e `height: auto`, cioè **l’altezza che serve al contenuto**. Di solito conviene lasciarle così: il testo va a capo e la scatola cresce da sola.',
    'Quando servono dei limiti si usano `min-width`, `max-width`, `min-height` e `max-height`. `max-width` è la più utile: `max-width: 70ch` o `max-width: 1100px` lascia che un blocco **si stringa** sugli schermi piccoli ma gli impedisce di **allargarsi troppo** su quelli grandi.',
    'Una trappola classica: `height: 100%` funziona **solo se il genitore ha un’altezza definita**. Se il genitore è `auto`, la percentuale non ha niente su cui calcolarsi e viene ignorata. Per dire «almeno alto quanto la finestra» si usa `min-height: 100vh` (o `100dvh`, 5.5); per «almeno così alto, ma che cresca se serve», `min-height` al posto di `height`.')
P.widget('w8_larghezze', 'Quattro modi di dare la larghezza')
P.err('«Con `width: 100%` e un padding l’elemento sta sempre nel contenitore.»',
      'Con il `box-sizing` predefinito (`content-box`) il padding **si aggiunge** al 100%: l’elemento esce dal contenitore. Serve `box-sizing: border-box` (più avanti).')
P.err('«`height: 100%` fa riempire tutta la pagina.»',
      'La percentuale dell’altezza funziona solo se il genitore ha un’**altezza definita**; altrimenti è ignorata. Per occupare almeno la finestra si usa `min-height: 100vh`.')

# ---------------------------------------------------------------- 8.3
P.sez('8.3', 'box-sizing: content-box contro border-box', ic='package',
      R='Con content-box padding e bordo si aggiungono alla width, con border-box ne fanno parte.')
P.dom('Un `div` con `width: 200px; padding: 20px; border: 5px solid`. Quanto spazio occupa in orizzontale?',
      '**250px**: con `content-box` padding (20 + 20) e bordo (5 + 5) si aggiungono ai 200px del contenuto.', prima=True)
P.p('Il primo errore della sezione precedente nasce da una domanda: `width` misura **quale strato** della scatola? Lo decide `box-sizing`.')
P.casi(('', '`content-box` · il predefinito', '`width` misura **solo il contenuto**: padding e bordo **si aggiungono**. Con `width: 200px`, `padding: 20px` e un bordo di 5px l’elemento occupa 200 + 40 + 10 = **250px**.'),
       ('', '`border-box`', '`width` misura la scatola **fino al bordo compreso**: padding e bordo stanno **dentro** e il contenuto si restringe. Lo stesso elemento occupa esattamente **200px**.'))
P.p('Con `border-box` i conti tornano come uno se li aspetta, soprattutto con le percentuali. Per questo quasi tutti i fogli di stile cominciano con un piccolo **reset** che lo applica a tutto:')
P.css('*, *::before, *::after {\n  box-sizing: border-box;\n}', aula='Il reset di box-sizing')
P.widget('w8_scatola2', 'content-box o border-box?')
P.err('«Con `width: 200px` l’elemento occupa sempre 200px, anche con padding e bordo.»',
      'Solo con `box-sizing: border-box`. Con il valore predefinito, `content-box`, padding e bordo **si aggiungono** ai 200px.')

# ---------------------------------------------------------------- 8.4
P.sez('8.4', 'Margini', ic='move',
      R='I margini verticali tra blocchi si fondono (vale il più grande); margin auto centra solo in orizzontale.')
P.dom('Un paragrafo con `margin-bottom: 20px`, sotto un paragrafo con `margin-top: 30px`. Quanti pixel li separano?',
      '**30px**: i margini verticali si fondono e vale il più grande.', prima=True)
P.p('Lo strato più esterno, il margine, ha tre comportamenti speciali. Il primo: quando due blocchi stanno **uno sopra l’altro**, il margine inferiore del primo e quello superiore del secondo **si fondono** (*margin collapsing*): la distanza tra i due è **il più grande** dei due margini, non la somma. Succede solo con i margini **verticali** e nel **flusso normale**: i margini orizzontali non si fondono mai, e nemmeno quelli tra gli elementi di un contenitore Flexbox o Grid.')
P.forma('`margin-bottom: 20px`', 'si fonde con', '`margin-top: 30px`', 'distanza', '30px|il più grande, non la somma')
P.widget('w8_margini', 'Margini che si fondono')
P.p('Il secondo: `margin: 0 auto` **centra in orizzontale** un blocco che ha una larghezza definita (o una `max-width`): il browser divide lo spazio libero in parti uguali a destra e a sinistra. In verticale, nel flusso normale, `auto` **vale zero**: per centrare in verticale servono Flexbox o Grid (7.1 e 7.2).',
    'Il terzo: i margini possono essere **negativi**. Un margine negativo avvicina un elemento ai vicini fino a **sovrapporlo**, o lo fa sporgere fuori dal contenitore.')
P.schema('s8_negativi', 'Margini negativi', '''      <div class="s8n">
        <div class="kit-cella"><div class="area"><div class="c1">Card A</div><div class="c2">Card B · <code>margin-top: -18px</code></div></div><span>B sale e si sovrappone ad A</span></div>
        <div class="kit-cella"><div class="area"><div class="c3">Sporge a sinistra · <code>margin-left: -28px</code></div></div><span>l’elemento esce dal suo contenitore</span></div>
      </div>''', titolo_aula='Margini negativi')
P.p('Infine, le **proprietà logiche** come `margin-inline` (destra e sinistra) e `padding-block` (sopra e sotto) indicano i lati **secondo la direzione del testo** invece che come alto, destra, basso, sinistra: in una lingua scritta da destra a sinistra si adattano da sole.')
P.err('«`margin: auto` centra anche in verticale.»',
      'Nel flusso normale `auto` in verticale vale **zero**: centra solo in orizzontale, e solo un blocco con una larghezza definita.')
P.err('«Due blocchi affiancati con i margini orizzontali: i margini si fondono.»',
      'Si fondono **solo i margini verticali** tra blocchi uno sopra l’altro. Quelli orizzontali si sommano sempre.')
P.dom('Due card una sopra l’altra, `margin-bottom: 24px` la prima e `margin-top: 24px` la seconda. Le metto in un contenitore con `display: flex; flex-direction: column`. La distanza cambia?',
      'Sì: da **24px** (margini fusi) diventa **48px**, perché tra gli elementi di un contenitore flex i margini non si fondono e si sommano.')

# ---------------------------------------------------------------- 8.5
P.sez('8.5', 'Differenza tra margin e padding', ic='scale',
      R='Il padding è spazio dentro l’elemento e prende lo sfondo, il margine è spazio fuori e trasparente.')
P.p('Padding e margine sono tutti e due spazio vuoto, e per questo si confondono, ma stanno **da parti opposte del bordo**. Il **padding** fa «respirare» il contenuto **dentro** l’elemento: il testo di un pulsante non tocca i bordi. Il **margine** **separa** l’elemento dai vicini.')
P.schema('s8_padmar', 'Lo stesso elemento con solo padding e con solo margine', '''      <div class="s8pm">
        <div class="kit-cella"><div class="area"><div class="el pad">Club di robotica</div></div><span><code>padding: 24px</code>: lo spazio è <b>dentro</b>, colorato dallo sfondo, e fa parte dell’area cliccabile</span></div>
        <div class="kit-cella"><div class="area"><div class="el mar">Club di robotica</div></div><span><code>margin: 24px</code>: lo spazio è <b>fuori</b>, trasparente, e allontana l’elemento dal contenitore</span></div>
      </div>''', titolo_aula='Padding e margine')
P.tab([['', 'Padding', 'Margine'],
       ['dove sta', 'dentro il bordo', 'fuori dal bordo'],
       ['sfondo', 'prende lo sfondo dell’elemento', 'trasparente'],
       ['area cliccabile', 'ne fa parte (un link più comodo da toccare)', 'non ne fa parte'],
       ['si fonde con i vicini', 'mai', 'sì, in verticale nel flusso normale'],
       ['valori negativi', 'non ammessi', 'ammessi']],
      'Padding e margine a confronto')
P.err('«Per staccare un elemento dal vicino uso il padding.»',
      'Il padding allarga lo spazio **dentro** l’elemento (e il suo sfondo). Per allontanarlo dai vicini serve il **margine**.')

# ---------------------------------------------------------------- 8.6
P.sez('8.6', 'overflow', ic='scroll',
      R='overflow decide che cosa succede al contenuto che non entra: esce, è tagliato o scorre.')
P.p('Resta un caso: la scatola ha un’altezza (o una larghezza) fissa e il contenuto è più grande. Il contenuto **trabocca**, e la proprietà `overflow` decide che cosa farne. Con `visible`, il valore iniziale, il contenuto **esce** dalla scatola e si sovrappone a ciò che c’è sotto. Con `hidden` il contenuto in eccesso è **tagliato** e non si vede. Con `scroll` compaiono le **barre di scorrimento**, sempre, anche se non servono. Con `auto` le barre compaiono **solo se servono**.',
    'Con `overflow-x` e `overflow-y` si decide separatamente per l’orizzontale e il verticale.')
P.es('Una tabella larga in un contenitore con `overflow-x: auto` si può far scorrere di lato sul telefono senza allargare tutta la pagina.')
P.p('Esiste anche `clip`, simile a `hidden` ma più rigido: non permette di scorrere nemmeno con JavaScript.')
P.widget('w8_overflow', 'Che cosa succede al contenuto che non entra')
P.err('«`overflow: hidden` fa scorrere il contenuto.»',
      '`hidden` lo **taglia**: la parte in eccesso non si vede e non si raggiunge. Per scorrere servono `auto` o `scroll`.')
P.err('«`overflow: scroll` e `overflow: auto` sono uguali.»',
      '`scroll` mostra le barre **sempre**, anche quando il contenuto entra; `auto` solo quando servono.')
P.p('Ora sappiamo com’è fatta una scatola. Una pagina, però, ne contiene centinaia: resta da capire come il browser le mette una accanto all’altra.')


# ---------------------------------------------------------------- slide
SP = {
 '8.1': [
  definizione('Il box model', 'Per il browser **ogni elemento è una scatola rettangolare**, fatta di quattro strati dal centro verso l’esterno.',
              [['type', 'contenuto'], ['square', 'padding: spazio interno'], ['square-dashed', 'bordo: la cornice'], ['move', 'margine: spazio esterno']],
              nota='Lo sfondo arriva fino al bordo; il margine è sempre **trasparente**.'),
  'w8_scatola',
  gettoni('Il box model nei DevTools', [['move', 'margine'], ['square-dashed', 'bordo'], ['square', 'padding'], ['type', 'contenuto']], [
    ['move', 'Arancione', 'il margine'],
    ['square-dashed', 'Giallo', 'il bordo (1px)'],
    ['square', 'Verde', 'il padding (16px per lato)'],
    ['type', 'Azzurro', 'il contenuto (140,531 × 28 px)']],
    foto=F('local:assets/immagini/devtools-box-model.png', 'Gli stessi colori evidenziano l’elemento nella pagina', 'Il diagramma del box model nei DevTools di Chrome')),
 ],
 '8.2': [
  casi('Larghezza e altezza', [
    nd('`width: auto`', 'tutta la larghezza disponibile nel contenitore', 'move-horizontal'),
    nd('`height: auto`', 'l’altezza che serve al contenuto', 'move-vertical'),
    nd('`max-width`', 'si stringe sugli schermi piccoli, non si allarga troppo su quelli grandi', 'arrow-left-right', tono='si')],
    msg='Di solito si lasciano `auto`; i limiti con `min-` e `max-`'),
  casi('height: 100%', [
    caso('no', 'ignorata', titolo='`height: 100%`', testo='con il genitore `auto` la percentuale non ha niente su cui calcolarsi'),
    caso('si', 'funziona', titolo='`min-height: 100vh`', testo='almeno alto quanto la finestra, e cresce se serve')]),
  'w8_larghezze',
 ],
 '8.3': [
  cifra('Che cosa misura width', ['box', '`content-box`', 'il predefinito: padding e bordo **si aggiungono**'], ['package', '`border-box`', 'padding e bordo stanno **dentro**'],
        '250px contro 200px', 'La stessa `width: 200px` con `padding: 20px` e un bordo di 5px: 200 + 40 + 10, oppure 200.',
        'Per questo quasi tutti i fogli di stile cominciano con il reset di `box-sizing`.'),
  'w8_scatola2',
 ],
 '8.4': [
  casi('Margini che si fondono', [
    nd('Verticali, nel flusso normale', '20px e 30px tra due blocchi: distanza **30px**', 'merge', nota='vale il più grande, non la somma'),
    nd('Orizzontali, o in flex e grid', 'non si fondono mai: **si sommano**', 'columns-2')]),
  'w8_margini',
  anatomia('Centrare un blocco', 'margin: 0 auto;', [
    ['0', 'sopra e sotto', ''], ['auto', 'destra e sinistra', 'lo spazio libero diviso in parti uguali']],
    effetto='Solo con una larghezza; in verticale `auto` vale zero'),
 ],
 '8.6': [
  casi('overflow', [
    nd('`visible`', 'il valore iniziale: il contenuto **esce** dalla scatola', 'eye'),
    nd('`hidden`', 'il contenuto in eccesso è **tagliato**', 'scissors'),
    nd('`scroll`', 'barre di scorrimento **sempre**', 'scroll'),
    nd('`auto`', 'barre **solo se servono**', 'scan', tono='si')],
    msg='Il contenuto che non entra · `overflow-x: auto` per una tabella larga sul telefono'),
  'w8_overflow',
 ],
}
P.aula('Contenuto, padding, bordo e margine: ogni elemento è una scatola.', SP,
       apertura=('Un link, una parola in grassetto, un’immagine: per il browser che forma hanno?',
                 'Sono tutti **scatole rettangolari**, con contenuto, padding, bordo e margine: è il box model.'))
