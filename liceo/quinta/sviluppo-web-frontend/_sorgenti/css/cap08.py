# Capitolo 8 · Il box model
from lib import *

P.capo('Il box model', 8)

# ---------------------------------------------------------------- 8.1
P.sez('8.1', 'Content, padding, border, margin',
      R='Ogni elemento è una scatola a strati: contenuto, padding, bordo, margine.')
P.p('Per il browser **ogni elemento è una scatola rettangolare**, anche un link o una parola in grassetto. La scatola è fatta di quattro strati, dal centro verso l’esterno: è il [[box model]], il modello della scatola.')
P.ul(['il **contenuto** (*content*): il testo, l’immagine o gli elementi figli;',
      'il **padding**: lo spazio **interno**, tra il contenuto e il bordo;',
      'il **bordo** (*border*): la cornice, che può avere spessore zero;',
      'il **margine** (*margin*): lo spazio **esterno**, che separa la scatola dalle altre.'])
P.p('Lo **sfondo** dell’elemento si estende sotto il contenuto, il padding e il bordo, ma **non sotto il margine**, che resta sempre trasparente: attraverso il margine si vede lo sfondo del genitore.')
P.widget('w8_scatola', 'La scatola')
P.grande('local:assets/immagini/devtools-box-model.png|https://developer.chrome.com/docs/devtools/css/reference',
         'Il diagramma del box model nei DevTools di Chrome: dall’esterno, in arancione il **margine**, in giallo il **bordo** (1px), in verde il **padding** (16px per lato) e al centro, in azzurro, il **contenuto** (140,531 × 28 px). Osservare che i colori sono gli stessi che il browser usa per evidenziare l’elemento nella pagina.',
         'Il diagramma del box model nella scheda Styles dei DevTools di Chrome', aula='Il box model nei DevTools')
P.err('«Il margine fa parte dello sfondo dell’elemento.»',
      'Lo sfondo arriva fino al **bordo**. Il margine è sempre **trasparente**: lì si vede lo sfondo del genitore.')

# ---------------------------------------------------------------- 8.2
P.sez('8.2', 'Larghezza e altezza',
      R='width auto riempie il contenitore, height auto segue il contenuto; min e max fissano i limiti.')
P.p('Senza indicazioni, un elemento di blocco ha `width: auto`, che vuol dire **tutta la larghezza disponibile** nel contenitore, e `height: auto`, cioè **l’altezza che serve al contenuto**. Di solito conviene lasciarle così: il testo va a capo e la scatola cresce da sola.',
    'Quando servono dei limiti si usano `min-width`, `max-width`, `min-height` e `max-height`. `max-width` è la più utile: `max-width: 70ch` o `max-width: 1100px` lascia che un blocco si stringa sugli schermi piccoli ma gli impedisce di allargarsi troppo su quelli grandi.',
    'Una trappola classica: `height: 100%` funziona **solo se il genitore ha un’altezza definita**. Se il genitore è `auto`, la percentuale non ha niente su cui calcolarsi e viene ignorata. Per dire «almeno alto quanto la finestra» si usa `min-height: 100vh` (o `100dvh`, 5.2); per «almeno così alto, ma che cresca se serve», `min-height` al posto di `height`.')
P.widget('w8_larghezze', 'Quattro modi di dare la larghezza')
P.err('«Con `width: 100%` e un padding l’elemento sta sempre nel contenitore.»',
      'Con il `box-sizing` predefinito (`content-box`) il padding **si aggiunge** al 100%: l’elemento esce dal contenitore. Serve `box-sizing: border-box` (più avanti).')
P.err('«`height: 100%` fa riempire tutta la pagina.»',
      'La percentuale dell’altezza funziona solo se il genitore ha un’**altezza definita**; altrimenti è ignorata. Per occupare almeno la finestra si usa `min-height: 100vh`.')

# ---------------------------------------------------------------- 8.3
P.sez('8.3', 'box-sizing: content-box contro border-box',
      R='Con content-box padding e bordo si aggiungono alla width, con border-box ne fanno parte.')
P.p('`box-sizing` decide che cosa misurano `width` e `height`:')
P.ul(['`content-box` (il valore predefinito): misurano **solo il contenuto**. Padding e bordo **si aggiungono**: un elemento con `width: 200px`, `padding: 20px` e un bordo di 5px occupa 200 + 40 + 10 = **250px**;',
      '`border-box`: misurano la scatola **fino al bordo compreso**. Padding e bordo stanno **dentro** la larghezza e il contenuto si restringe: lo stesso elemento occupa esattamente **200px**.'])
P.p('Con `border-box` i conti tornano come uno se li aspetta, soprattutto con le percentuali. Per questo quasi tutti i fogli di stile cominciano con un piccolo **reset** che lo applica a tutto:')
P.css('*, *::before, *::after {\n  box-sizing: border-box;\n}', aula='Il reset di box-sizing')
P.dom('Un `div` con `width: 200px; padding: 20px; border: 5px solid`. Quanto spazio occupa in orizzontale?',
      '**250px**: con `content-box` padding (20 + 20) e bordo (5 + 5) si aggiungono ai 200px del contenuto.', prima=True)
P.widget('w8_scatola2', 'content-box o border-box?')
P.err('«Con `width: 200px` l’elemento occupa sempre 200px, anche con padding e bordo.»',
      'Solo con `box-sizing: border-box`. Con il valore predefinito, `content-box`, padding e bordo **si aggiungono** ai 200px.')

# ---------------------------------------------------------------- 8.4
P.sez('8.4', 'Margini',
      R='I margini verticali tra blocchi si fondono (vale il più grande); margin auto centra solo in orizzontale.')
P.p('I margini hanno qualche comportamento speciale. Il primo: quando due blocchi stanno **uno sopra l’altro**, il margine inferiore del primo e quello superiore del secondo **si fondono** (*margin collapsing*): la distanza tra i due è il **più grande** dei due margini, non la somma. Succede solo con i margini **verticali** e nel **flusso normale**: i margini orizzontali non si fondono mai, e nemmeno quelli tra gli elementi di un contenitore Flexbox o Grid.')
P.dom('Un paragrafo con `margin-bottom: 20px`, sotto un paragrafo con `margin-top: 30px`. Quanti pixel li separano?',
      '**30px**: i margini verticali si fondono e vale il più grande.', prima=True)
P.widget('w8_margini', 'Margini che si fondono')
P.p('Il secondo: `margin: 0 auto` **centra in orizzontale** un blocco che ha una larghezza definita (o una `max-width`): il browser divide lo spazio libero in parti uguali a destra e a sinistra. In verticale, nel flusso normale, `auto` vale **zero**: per centrare in verticale servono Flexbox o Grid (7.1 e 7.2).',
    'Il terzo: i margini possono essere **negativi**. Un margine negativo avvicina un elemento ai vicini fino a **sovrapporlo**, o lo fa sporgere fuori dal contenitore.')
P.schema('s8_negativi', 'Margini negativi', '''      <div class="s8n">
        <div class="kit-cella"><div class="area"><div class="c1">Card A</div><div class="c2">Card B · <code>margin-top: -18px</code></div></div><span>B sale e si sovrappone ad A</span></div>
        <div class="kit-cella"><div class="area"><div class="c3">Sporge a sinistra · <code>margin-left: -28px</code></div></div><span>l’elemento esce dal suo contenitore</span></div>
      </div>''', titolo_aula='Margini negativi')
P.p('Infine, le **proprietà logiche** come `margin-inline` (destra e sinistra) e `padding-block` (sopra e sotto) indicano i lati secondo la direzione del testo invece che come alto, destra, basso, sinistra: in una lingua scritta da destra a sinistra si adattano da sole.')
P.err('«`margin: auto` centra anche in verticale.»',
      'Nel flusso normale `auto` in verticale vale **zero**: centra solo in orizzontale, e solo un blocco con una larghezza definita.')
P.err('«Due blocchi affiancati con i margini orizzontali: i margini si fondono.»',
      'Si fondono **solo i margini verticali** tra blocchi uno sopra l’altro. Quelli orizzontali si sommano sempre.')
P.dom('Due card una sopra l’altra, `margin-bottom: 24px` la prima e `margin-top: 24px` la seconda. Le metto in un contenitore con `display: flex; flex-direction: column`. La distanza cambia?',
      'Sì: da **24px** (margini fusi) diventa **48px**, perché tra gli elementi di un contenitore flex i margini non si fondono e si sommano.')

# ---------------------------------------------------------------- 8.5
P.sez('8.5', 'Differenza tra margin e padding',
      R='Il padding è spazio dentro l’elemento e prende lo sfondo, il margine è spazio fuori e trasparente.')
P.p('Padding e margine sono tutti e due spazio vuoto, ma da parti opposte del bordo. Il **padding** fa «respirare» il contenuto **dentro** l’elemento: il testo di un pulsante non tocca i bordi. Il **margine** **separa** l’elemento dai vicini.')
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
P.sez('8.6', 'overflow',
      R='overflow decide che cosa succede al contenuto che non entra: esce, è tagliato o scorre.')
P.p('Quando una scatola ha un’altezza (o una larghezza) fissa e il contenuto è più grande, il contenuto **trabocca**. La proprietà `overflow` decide che cosa farne:')
P.ul(['`visible` (il valore iniziale): il contenuto **esce** dalla scatola e si sovrappone a ciò che c’è sotto;',
      '`hidden`: il contenuto in eccesso è **tagliato** e non si vede;',
      '`scroll`: compaiono le **barre di scorrimento**, sempre, anche se non servono;',
      '`auto`: le barre compaiono **solo se servono**.'])
P.p('Con `overflow-x` e `overflow-y` si decide separatamente per l’orizzontale e il verticale: una tabella larga in un contenitore con `overflow-x: auto` si può far scorrere di lato sul telefono senza allargare tutta la pagina. Esiste anche `clip`, simile a `hidden` ma più rigido: non permette di scorrere nemmeno con JavaScript.')
P.widget('w8_overflow', 'Che cosa succede al contenuto che non entra')
P.err('«`overflow: hidden` fa scorrere il contenuto.»',
      '`hidden` lo **taglia**: la parte in eccesso non si vede e non si raggiunge. Per scorrere servono `auto` o `scroll`.')
P.err('«`overflow: scroll` e `overflow: auto` sono uguali.»',
      '`scroll` mostra le barre **sempre**, anche quando il contenuto entra; `auto` solo quando servono.')


# ---------------------------------------------------------------- slide
SP = {
 '8.1': [
  tessere('Il box model', 'Ogni elemento è una scatola a quattro strati', [
    ['type', 'Contenuto', 'testo, immagini, figli'],
    ['square', 'Padding', 'spazio interno, prende lo sfondo'],
    ['square-dashed', 'Bordo', 'la cornice'],
    ['move', 'Margine', 'spazio esterno, sempre trasparente']]),
 ],
 '8.2': [
  punti('Larghezza e altezza', 'auto riempie il contenitore e segue il contenuto', [
    ['move-horizontal', '`width: auto`: tutta la larghezza disponibile'],
    ['move-vertical', '`height: auto`: l’altezza che serve al contenuto'],
    ['arrow-down-to-line', '`max-width`: si stringe, ma non si allarga troppo'],
    ['triangle-alert', '`height: 100%` solo se il genitore ha un’altezza → `min-height`']]),
 ],
 '8.3': [
  confronto('box-sizing', 'Che cosa misura width',
            {'icona': 'box', 'titolo': '`content-box`', 'righe': ['• solo il contenuto (predefinito)', '• padding e bordo **si aggiungono**', '• 200 + 2×20 + 2×5 = **250px**']},
            {'icona': 'package', 'titolo': '`border-box`', 'tono': 'buono', 'righe': ['• fino al bordo compreso', '• padding e bordo stanno **dentro**', '• occupa **200px**']},
            'Il reset: `*, *::before, *::after { box-sizing: border-box; }`'),
 ],
 '8.4': [
  punti('Tre cose dei margini', 'Si fondono, centrano, possono essere negativi', [
    ['merge', 'Verticali tra blocchi: si **fondono**, vale il più grande'],
    ['columns-2', 'Mai quelli orizzontali, mai in flex e grid'],
    ['align-center-horizontal', '`margin: 0 auto` centra in orizzontale un blocco con larghezza'],
    ['minus', 'Negativi: avvicinano e **sovrappongono**'],
    ['languages', '`margin-inline`, `padding-block`: lati secondo la direzione del testo']]),
 ],
 '8.5': [],
 '8.6': [
  tessere('overflow', 'Il contenuto che non entra', [
    ['eye', '`visible`', 'esce dalla scatola (iniziale)'],
    ['scissors', '`hidden`', 'tagliato'],
    ['scroll', '`scroll`', 'barre sempre'],
    ['scan', '`auto`', 'barre solo se servono']],
    nota='`overflow-x: auto` per una tabella larga sul telefono'),
 ],
}
P.aula('Contenuto, padding, bordo e margine: ogni elemento è una scatola.', SP,
       apertura=('Un link, una parola in grassetto, un’immagine: per il browser che forma hanno?',
                 'Sono tutti **scatole rettangolari**, con contenuto, padding, bordo e margine: è il box model.'))
