# Capitolo 13 · Responsive design
from lib import *

P.capo('Responsive design', 13)

# ---------------------------------------------------------------- 13.1
P.sez('13.1', 'Perché serve (schermi diversi · meta viewport)',
      R='Il sito deve adattarsi a schermi diversi; senza meta viewport il telefono rimpicciolisce una pagina disegnata per un computer.')
P.p('Lo stesso sito si apre su un telefono largo 360px, su un tablet, su un portatile e su un monitor da 1920px. Il [[responsive design]] (*design che risponde*) è l’insieme delle tecniche con cui **una sola pagina si adatta** a tutte queste larghezze: una colonna sul telefono, due o tre sul computer, testi leggibili ovunque, senza scorrere di lato.',
    'Il primo passo non è nel CSS, ma nell’`<head>`. I primi smartphone dovevano mostrare siti pensati solo per i computer; per questo, senza indicazioni, il browser del telefono **finge di avere una finestra larga circa 980px**, impagina la pagina a quella larghezza e poi la **rimpicciolisce** per farla entrare nello schermo. Il risultato è una pagina intera ma minuscola, da ingrandire con le dita. Una riga dice al browser di usare la **larghezza vera** dello schermo:')
P.html('<meta name="viewport" content="width=device-width, initial-scale=1">', 'index.html, dentro &lt;head&gt;', aula='La riga del meta viewport')
P.ul(['`width=device-width`: la finestra è larga quanto lo schermo del dispositivo (in px CSS: circa 360–430 su un telefono);',
      '`initial-scale=1`: all’apertura la pagina non è né ingrandita né rimpicciolita.'])
P.p('Ultima idea, importante: i punti in cui il layout cambia (i [[breakpoint]], 13.3) **si scelgono guardando il contenuto, non i modelli di telefono**. Si allarga e si stringe la finestra e, dove il layout «si rompe» (righe troppo lunghe, card schiacciate), lì serve un cambiamento.')
P.dom('Il sito, sul telefono, appare minuscolo, come una pagina da computer rimpicciolita. Nell’`<head>` manca una riga: quale?',
      'Il **meta viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1">`. Senza, il telefono impagina a circa 980px e rimpicciolisce.', prima=True)
P.widget('w13_viewport', 'Con e senza meta viewport')
P.err('«Il meta viewport non serve se ho scritto il CSS responsive.»',
      'Senza meta viewport il telefono finge di essere largo 980px: le media query per gli schermi piccoli **non scattano** e la pagina viene rimpicciolita. È la prima riga da scrivere.')

# ---------------------------------------------------------------- 13.2
P.sez('13.2', 'Mobile first contro desktop first',
      R='Mobile first parte dallo schermo piccolo e con min-width aggiunge regole; desktop first fa l’inverso con max-width.')
P.p('Ci sono due modi di organizzare il CSS di un sito che si adatta:')
P.ul(['**mobile first** (prima il telefono): le regole di base sono quelle per lo schermo **piccolo**, di solito una colonna. Poi, con media query `min-width` («da questa larghezza **in su**»), si **aggiungono** le regole per gli schermi più grandi;',
      '**desktop first** (prima il computer): le regole di base sono per lo schermo **grande** e, con media query `max-width` («fino a questa larghezza»), si **tolgono o cambiano** cose per gli schermi più piccoli.'])
P.p('Il risultato può essere identico; cambia il modo di arrivarci. Oggi si preferisce **mobile first**: la maggior parte delle visite arriva dal telefono, il CSS di base è più semplice (una colonna è il flusso normale) e ci si chiede da subito che cosa è davvero essenziale.')
P.dom('In mobile first scrivo `@media (min-width: 768px) { … }`. Da quale larghezza valgono quelle regole?',
      'Da **768px in su**: `min-width` vuol dire «la finestra è larga almeno 768px». Sotto, valgono solo le regole di base.', prima=True)
P.widget('w13_mobile', 'Stesso risultato, regole diverse')

# ---------------------------------------------------------------- 13.3
P.sez('13.3', 'Media queries (larghezza · orientamento · breakpoint)',
      R='Una media query applica le sue regole solo quando la condizione è vera; i breakpoint si scelgono dove il contenuto si rompe.')
P.p('Una [[media query]] è un blocco di regole che il browser applica **solo se una condizione è vera**. Si scrive con `@media`, una condizione tra parentesi e, tra graffe, normali regole CSS:')
P.css('/* base: una colonna */\n.corsi { display: grid; gap: 16px; }\n\n@media (min-width: 768px) {\n  .corsi { grid-template-columns: 1fr 1fr; }\n}\n\n@media (min-width: 768px) and (orientation: landscape) {\n  .testata { height: 30vh; }\n}', 'stile.css', aula='Come si scrive una media query')
P.ul(['le condizioni più usate sono sulla **larghezza della finestra**: `min-width` (almeno) e `max-width` (al massimo);',
      '`and` unisce due condizioni, che devono essere vere tutte e due;',
      '`orientation: portrait` (più alta che larga) e `orientation: landscape` (più larga che alta) guardano l’orientamento;',
      'le regole dentro una media query **non hanno più specificità** delle altre: se vincono, è perché vengono **dopo** nel foglio (5.4). Per questo le media query si scrivono **in fondo** alle regole che modificano.'])
P.p('Le larghezze delle condizioni sono i **breakpoint**. Si trovano spesso valori «di riferimento» come **576, 768, 992 e 1200px**, che sono quelli di Bootstrap (7.6); vanno bene come punto di partenza, ma ogni sito sceglie i suoi guardando **dove il proprio contenuto si rompe**.')
P.widget('w13_media', 'Le media query in azione')
P.err('«`@media (min-width: 768px)` vale per gli schermi sotto i 768px.»',
      '`min-width: 768px` vuol dire «larghezza **almeno** 768px»: vale da 768 **in su**. Per «fino a 767px» si scrive `max-width: 767px`.')

# ---------------------------------------------------------------- 13.4
P.sez('13.4', 'Layout fluidi (percentuali · Flexbox e Grid · clamp())',
      R='Il responsive non è solo media queries: percentuali, Flexbox, Grid con auto-fit e clamp() adattano il layout senza breakpoint.')
P.p('Le media query cambiano il layout **a scatti**, a certe larghezze. Ma molte cose si adattano da sole, **in modo continuo**, se si usano le misure giuste. Un buon sito responsive usa le media query il meno possibile:')
P.tab([['Approccio', 'Come funziona', 'Esempio'],
       ['**fluido**', 'misure relative alla finestra o al contenitore: crescono e calano con lei', '`width: 90%; max-width: 1100px;` · `font-size: clamp(1.5rem, 4vw, 3rem);`'],
       ['**flessibile**', 'Flexbox e Grid decidono da soli quanti elementi stanno in una riga', '`flex: 1 1 220px` con `flex-wrap: wrap` · `repeat(auto-fit, minmax(220px, 1fr))`'],
       ['**a punti di rottura**', 'le media query cambiano il layout oltre una certa larghezza', '`@media (min-width: 768px) { … }` per passare da una a due colonne']],
      'Tre modi di adattarsi')
P.p('Nella pratica si combinano: un contenitore **fluido** con una `max-width`, una griglia **flessibile** con `auto-fit` per le card, titoli con `clamp()` (5.5) e poche media query solo dove serve cambiare davvero l’impaginazione, per esempio il menu.')
P.err('«Il responsive si fa solo con le media query.»',
      'Percentuali, `max-width`, Flexbox con `wrap`, Grid con `auto-fit` e `clamp()` adattano il layout **senza breakpoint**. Le media query servono per i cambiamenti che non si possono ottenere così.')

# ---------------------------------------------------------------- 13.5
P.sez('13.5', 'Immagini responsive (srcset · sizes · picture)',
      R='srcset e sizes fanno scegliere al browser il file in base alla larghezza, picture cambia immagine o formato a certe condizioni.')
P.p('Con `max-width: 100%` un’immagine si stringe con lo schermo (6.1), ma il **file** resta lo stesso: un telefono scarica una foto da 1600px per mostrarla a 360. Con `srcset` si offrono **più versioni** dello stesso file e il browser sceglie la più adatta:')
P.html('<img src="robot-800.jpg"\n     srcset="robot-480.jpg 480w,\n             robot-800.jpg 800w,\n             robot-1600.jpg 1600w"\n     sizes="(min-width: 800px) 50vw, 100vw"\n     alt="Il robot del club">', 'index.html', aula='srcset e sizes')
P.ul(['`srcset` elenca i file con la loro **larghezza vera** in pixel, seguita da `w`: `robot-480.jpg 480w`;',
      '`sizes` dice quanto sarà larga l’immagine **nella pagina**: «se la finestra è almeno 800px, metà finestra (`50vw`); altrimenti tutta (`100vw`)». Il browser lo deve sapere prima di aver scaricato il CSS;',
      'il browser calcola quanti pixel servono, tenendo conto anche della **densità dello schermo** (uno schermo «2x» ne vuole il doppio), e sceglie il file più piccolo che basta. La scelta è **indicativa**: decide il browser (con una connessione lenta, per esempio, può prendere un file più piccolo).'])
P.widget('w13_srcset', 'Quale file sceglie il browser?')
P.p('Quando invece serve un’immagine **diversa** (un ritaglio stretto per il telefono, una foto larga per il computer) o un **formato** più moderno, si usa `<picture>`: il browser prende il primo `<source>` la cui condizione è vera e, se nessuna lo è, l’`<img>` finale.')
P.html('<picture>\n  <source media="(min-width: 800px)" srcset="robot-largo.jpg">\n  <source type="image/avif" srcset="robot.avif">\n  <img src="robot.jpg" alt="Il robot del club">\n</picture>', 'index.html', aula='picture')


# ---------------------------------------------------------------- slide
SP = {
 '13.1': [
  punti('Il meta viewport', 'Senza, il telefono finge di essere largo 980px', [
    ['monitor-smartphone', 'Una sola pagina per telefono, tablet e computer: **responsive design**'],
    ['zoom-out', 'Senza indicazioni il telefono impagina a ~980px e **rimpicciolisce**'],
    ['code', '`width=device-width`: usa la larghezza **vera** dello schermo'],
    ['scan', '`initial-scale=1`: niente ingrandimento all’apertura'],
    ['ruler', 'I breakpoint si scelgono dove **il contenuto** si rompe']]),
 ],
 '13.2': [
  confronto('Mobile first e desktop first', 'Stesso risultato, direzione opposta',
            {'icona': 'smartphone', 'titolo': 'Mobile first', 'tono': 'buono', 'righe': ['• base: lo schermo **piccolo**', '• `min-width`: «da qui **in su**»', '• si **aggiungono** colonne', '• oggi è la scelta consigliata']},
            {'icona': 'monitor', 'titolo': 'Desktop first', 'righe': ['• base: lo schermo **grande**', '• `max-width`: «fino a qui»', '• si **tolgono** colonne', '• tipico dei siti più vecchi']}),
 ],
 '13.3': [
  punti('Le media query', 'Regole che valgono solo se la condizione è vera', [
    ['brackets', '`@media (condizione) { regole }`'],
    ['move-horizontal', '`min-width`: almeno · `max-width`: al massimo'],
    ['link', '`and` unisce due condizioni; `orientation` guarda l’orientamento'],
    ['list-ordered', 'Nessuna specificità in più: vanno **in fondo** al foglio'],
    ['ruler', '576 · 768 · 992 · 1200 (Bootstrap): solo un punto di partenza']]),
 ],
 '13.4': [],
 '13.5': [
  punti('srcset e sizes', 'Più file, sceglie il browser', [
    ['images', '`srcset`: i file con la loro larghezza vera (`480w`, `800w`…)'],
    ['ruler', '`sizes`: quanto sarà larga l’immagine nella pagina'],
    ['calculator', 'Pixel che servono = larghezza nella pagina × densità dello schermo'],
    ['check', 'Il browser prende il **file più piccolo che basta** (scelta indicativa)'],
    ['image', '`<picture>`: un’immagine o un formato **diversi** a certe condizioni']]),
 ],
}
P.aula('Una pagina per tutti gli schermi: viewport, media query, layout fluidi, immagini.', SP,
       apertura=('Aprite lo stesso sito sul telefono e sul computer: che cosa cambia nell’impaginazione?',
                 'Il numero di colonne, il menu (spesso un’icona sul telefono), la grandezza dei titoli e delle immagini: è il **responsive design**.'))
