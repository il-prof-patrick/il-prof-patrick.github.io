# Tema 5.5 · Valori, unità e colori (vecchio capitolo 5 del modulo CSS + sezioni 6.1–6.2 sui colori)
# Filo: ogni proprietà accetta certi tipi di valore → le lunghezze: unità assolute e relative → px, em, rem a confronto
#       → il CSS fa i conti → i colori e i loro formati → la trasparenza
from lib import *

P.capo('Valori, unità e colori', 5)

# ---------------------------------------------------------------- 5.1
P.sez('5.1', 'I tipi di valore', ic='shapes',
      R='Ogni proprietà accetta solo certi tipi di valore; uno sbagliato rende la dichiarazione non valida.')
P.p('Dopo i due punti di una dichiarazione non si può scrivere qualunque cosa. Ogni proprietà accetta solo certi **tipi di valore**: `color` vuole un colore, `width` una lunghezza o una percentuale, `display` una parola chiave. Un valore del tipo sbagliato rende la dichiarazione **non valida**, e il browser la scarta come un errore di battitura.')
P.tab([['Tipo', 'Esempi', 'Proprietà tipiche'],
       ['parole chiave', '`auto`, `none`, `bold`, `center`, `inherit`', '`display`, `text-align`, `font-weight`'],
       ['numeri senza unità', '`1.5`, `0.8`, `10`', '`line-height`, `opacity`, `z-index`'],
       ['lunghezze', '`16px`, `2rem`, `50vw`, `0`', '`width`, `margin`, `font-size`'],
       ['percentuali', '`50%`, `100%`', '`width`, `font-size`, `line-height`'],
       ['colori', '`red`, `#0a6f66`, `rgb(10 111 102)` (più avanti)', '`color`, `background-color`, `border-color`'],
       ['stringhe e URL', '`"NUOVO"`, `url("foto.jpg")`', '`content`, `background-image`, `font-family`'],
       ['funzioni', '`calc(100% - 2rem)`, `rgb()`, `clamp()`', 'quasi tutte']],
      'I tipi di valore')
P.p('Due dettagli da ricordare. Il primo: una **lunghezza vuole sempre l’unità**, tranne lo **zero**: `margin: 0` va bene, `margin: 10` no.',
    'Il secondo riguarda `line-height`, che accetta sia un numero senza unità sia una lunghezza, ma non sono la stessa cosa. Un numero (`1.5`) **si moltiplica per la dimensione del testo di ogni elemento**; una lunghezza (`24px`, o `1.5em`) viene calcolata una volta, e i discendenti **ereditano il risultato già calcolato**.')
P.casi(('si', 'numero senza unità', 'Ogni elemento ha un’interlinea di 1,5 volte il suo testo: un titolo a 40px ha righe di 60px, proporzionate.', 'body { line-height: 1.5; }'),
       ('no', 'lunghezza', 'Tutti i discendenti ereditano 24px: un titolo a 40px ha righe di 24px, che si sovrappongono.', 'body { line-height: 24px; }'))
P.p('Tra tutti i tipi di valore, le lunghezze sono quelle con più possibilità di scelta, perché hanno molte unità di misura diverse.')

# ---------------------------------------------------------------- 5.2
P.sez('5.2', 'Unità di misura', ic='ruler',
      R='Le unità sono assolute o relative a un’altra grandezza; la percentuale dipende dalla proprietà.')
P.p('Le unità di lunghezza sono di due famiglie. Le **unità assolute** hanno una **misura fissa**: `px`, `cm`, `mm`, `in` (pollice), `pt` (punto tipografico), legate tra loro (1in = 96px = 2,54cm). Ma il [[pixel CSS]] **non è un pixel dello schermo**: è un’unità di riferimento, e su uno schermo ad alta densità un pixel CSS corrisponde a due, tre o più pixel fisici. Per lo schermo, delle assolute si usa praticamente solo `px`; `cm` e `pt` hanno senso per la stampa.',
    'Le **unità relative** dipendono **da un’altra grandezza**, e per questo si adattano a schermi e preferenze diverse:')
P.tab([['Unità', 'Rispetto a che cosa', 'Esempio'],
       ['`%`', 'dipende dalla proprietà (vedi sotto)', '`width: 50%`'],
       ['`em`', 'dimensione del testo dell’elemento (per `font-size`: del genitore)', '`padding: 0.5em`'],
       ['`rem`', 'dimensione del testo della radice, `html` (di solito 16px)', '`font-size: 1.25rem`'],
       ['`ch`', 'larghezza del carattere «0» nel font dell’elemento', '`max-width: 65ch`'],
       ['`vw` · `vh`', '1% della larghezza · dell’altezza della finestra', '`width: 50vw`'],
       ['`vmin` · `vmax`', '1% del lato più corto · più lungo della finestra', '`font-size: 5vmin`'],
       ['`svh` · `lvh` · `dvh`', '1% dell’altezza della finestra piccola, grande, attuale (sul telefono)', '`min-height: 100dvh`']],
      'Le unità relative')
P.p('La **percentuale** cambia significato secondo la proprietà: in `width` è la larghezza del **contenitore**; in `font-size` è il testo del **genitore**; in `margin` e `padding` è sempre la **larghezza** del contenitore, anche per l’alto e il basso. Quindi `padding-top: 50%` **non** è metà dell’altezza.',
    'Anche le unità della finestra hanno due trappole. Sui telefoni `100vh` è **più alto dello schermo visibile**, perché è calcolato come se la barra degli indirizzi fosse nascosta: per questo sono nate `svh` (finestra piccola, barre visibili), `lvh` (finestra grande) e `dvh` (quella del momento), supportate da tutti i browser principali dal 2025. E `100vw` comprende anche la **barra di scorrimento verticale**: un elemento largo `100vw` è un po’ più largo della pagina e fa comparire lo scorrimento orizzontale.',
    'L’unità `ch`, infine, è comoda per il testo: `max-width: 65ch` tiene le righe intorno ai **60–70 caratteri**, la lunghezza più facile da leggere.')
P.widget('w5_unita', 'Sei larghezze, sei unità')
P.err('«`padding-top: 50%` è metà dell’altezza dell’elemento.»',
      'Nel `padding` e nel `margin` la percentuale si calcola sempre sulla **larghezza del contenitore**, anche in verticale.')
P.err('«`width: 100vw` riempie esattamente la pagina.»',
      '`100vw` comprende anche la barra di scorrimento verticale: l’elemento **esce** di qualche pixel e compare lo scorrimento orizzontale. Per tutta la larghezza disponibile basta `width: 100%` (o lasciare `auto`).')

# ---------------------------------------------------------------- 5.3
P.sez('5.3', 'Differenza tra px, em e rem', ic='type',
      R='px non cambia mai, rem segue il testo della radice, em quello dell’elemento e si accumula nei livelli annidati.')
P.dom('Lista dentro lista dentro lista, ognuna con `font-size: 1.2em`. Il terzo livello è grande quanto il primo?',
      'No: ogni livello moltiplica il genitore, quindi 1,2 × 1,2 × 1,2 = **1,73** volte il testo di partenza.', prima=True)
P.p('Tra tutte queste unità, tre si usano più delle altre, e conviene confrontarle da vicino. `px` è **fisso**: 16px restano 16px qualunque cosa succeda. `rem` (*root em*) moltiplica la **dimensione del testo della radice**, cioè dell’elemento `html`: di solito 16px, ma **l’utente la può cambiare** nelle impostazioni del browser per leggere meglio. `em` moltiplica la **dimensione del testo dell’elemento stesso**; dentro `font-size`, che non può riferirsi a sé stessa, moltiplica quella del **genitore**. Per questo con gli `em` le dimensioni **si accumulano** negli elementi annidati.')
P.forma('lista|1,2em', '× 1,2', 'lista nella lista|1,44 volte', '× 1,2', 'terzo livello|1,73 volte il testo di partenza')
P.widget('w5_annidate', 'Liste annidate con em e con rem')
P.p('Da qui le scelte consigliate. `rem` per le **dimensioni del testo** e per le **spaziature** generali, così tutta la pagina segue la preferenza dell’utente. `em` per i **componenti che devono crescere con il proprio testo**, come il `padding` di un pulsante: un pulsante con il testo più grande ha anche più spazio intorno. `px` per i dettagli che non devono cambiare, come i **bordi sottili**.',
    'Un vecchio trucco da evitare è scrivere `html { font-size: 10px; }` per avere conti facili (1rem = 10px). Così però la dimensione della radice è fissata in pixel e **ignora la preferenza dell’utente**: chi ha impostato caratteri più grandi nel browser non li vedrà più.')
P.err('«`1em` è sempre 16px.»',
      '`1em` è la dimensione del testo **dell’elemento** (o del genitore, dentro `font-size`): vale 16px solo se il testo è a 16px. È `1rem` che vale di solito 16px, e solo finché l’utente non cambia le impostazioni.')
P.err('«Con `html { font-size: 10px; }` i conti sono più facili e non cambia nulla.»',
      'Cambia per l’utente: la radice in pixel **ignora la dimensione del testo scelta nel browser**, e chi ha bisogno di caratteri più grandi non li ottiene.')

# ---------------------------------------------------------------- 5.4
P.sez('5.4', 'Funzioni di calcolo', ic='sigma',
      R='calc() combina unità, min() e max() fissano limiti, clamp() tiene un valore tra minimo e massimo.')
P.p('Unità diverse servono a cose diverse, e a volte bisogna metterle insieme: tutta la larghezza meno un margine in rem, un testo che cresce con la finestra ma non oltre un certo limite. Il CSS **sa fare i conti**, anche tra unità diverse, che il browser converte al momento.',
    '`calc()` fa un calcolo: `width: calc(100% - 2rem)` è tutta la larghezza meno 2rem. Gli spazi attorno a `+` e `-` sono **obbligatori** (attorno a `*` e `/` no). `min()` sceglie il valore **più piccolo** dell’elenco, quindi fa da **limite massimo**: `width: min(100%, 600px)` non supera mai 600px. `max()` sceglie il **più grande**, quindi fa da **limite minimo**: `font-size: max(1rem, 2vw)` non scende mai sotto 1rem.',
    '`clamp(minimo, preferito, massimo)` usa il valore preferito, ma **lo tiene tra minimo e massimo**; equivale a `max(minimo, min(preferito, massimo))`. Serve soprattutto per un **testo fluido**, che cresce con la finestra ma entro dei limiti.')
P.p('Il valore preferito non deve però essere solo in `vw`: un testo in `vw` dipende solo dalla larghezza della finestra e **non risponde allo zoom** dell’utente. Si scrive allora `1rem + 1vw`: una parte fissa in rem, che segue le preferenze, e una parte che cresce con la finestra.')
P.widget('w5_clamp', 'clamp() al lavoro')
P.tab([['Funzione', 'Che cosa fa', 'Esempio'],
       ['`calc()`', 'calcola, anche tra unità diverse', '`width: calc(100% - 2rem)`'],
       ['`min()`', 'il più piccolo: limite **massimo**', '`width: min(100%, 600px)`'],
       ['`max()`', 'il più grande: limite **minimo**', '`font-size: max(1rem, 2vw)`'],
       ['`clamp()`', 'il preferito, tra minimo e massimo', '`font-size: clamp(1rem, 0.5rem + 2vw, 2rem)`']],
      'Le funzioni di calcolo')
P.err('«`calc(100%-2rem)` funziona.»',
      'Senza spazi attorno al meno il browser legge `100%-2rem` come un unico valore non valido e **scarta la dichiarazione**. Si scrive `calc(100% - 2rem)`.')
P.err('«`min()` mette un minimo.»',
      '`min()` sceglie il valore più piccolo, quindi impedisce di superare l’altro: è un **limite massimo**. Il limite minimo si ottiene con `max()`.')
P.dom('`width: min(100%, 600px)`: è una larghezza minima o massima?',
      '**Massima**: `min()` sceglie il più piccolo dei due, quindi la larghezza non supera mai 600px (e su uno schermo stretto è il 100%).')
P.p('Lunghezze e calcoli sono una parte dei valori. L’altra grande famiglia, quella che si nota per prima in ogni pagina, sono i colori.')

# ---------------------------------------------------------------- 6.1
P.sez('6.1', 'Formati dei colori', ic='palette',
      R='Lo stesso colore si scrive in più formati; HSL è comodo per costruire palette, RGB per i canali.')
P.dom('`#ff0000`, `rgb(255 0 0)`, `hsl(0 100% 50%)` e `red`: quanti colori diversi sono?',
      '**Uno solo**: il rosso puro, scritto in quattro formati diversi.', prima=True)
P.p('Lo stesso colore si può scrivere in più formati. Il più semplice sono i **nomi**: circa 140 parole chiave in inglese, da `red` a `rebeccapurple` (aggiunto nel 2014 in ricordo della figlia di Eric Meyer, uno dei padri del CSS).',
    'Il formato più diffuso è l’**esadecimale** `#rrggbb`: tre coppie di cifre da `00` a `ff` per **rosso, verde e blu**, come in `#0a6f66`. La **forma breve** `#rgb` raddoppia ogni cifra: `#fc0` vale `#ffcc00`. Con una quarta coppia, `#rrggbbaa`, si aggiunge la trasparenza.',
    '`rgb()` scrive gli stessi tre canali di luce in decimale, **da 0 a 255**: `rgb(10 111 102)`. `hsl()` descrive invece il colore come lo pensiamo: **tinta** in gradi sulla ruota dei colori (0 rosso, 120 verde, 240 blu), **saturazione** in percentuale (0% grigio, 100% colore pieno), **luminosità** in percentuale (0% nero, 50% colore puro, 100% bianco): `hsl(175 83% 24%)`. Ci sono infine due parole speciali: `currentColor`, il valore attuale di `color` dell’elemento, e `transparent`, del tutto trasparente.')
P.es('`#0a6f66`, `rgb(10 111 102)` e `hsl(175 83% 24%)` sono lo stesso verde acqua di questo sito. Per una palette con HSL basta tenere la tinta, 175, e cambiare la luminosità: più alta per un verde chiaro di sfondo, più bassa per un verde scuro per il testo.')
P.p('La **sintassi moderna** separa i valori con spazi e aggiunge la trasparenza **dopo una barra**: `rgb(10 111 102 / 0.5)`. Per questo `rgba()` e `hsla()` non servono più, anche se le vecchie forme con le virgole restano valide. Esistono anche formati più recenti come `hwb()` e `oklch()`, che descrivono il colore in modo più vicino a come lo percepiamo; prima di usarli conviene verificare che i browser a cui ci si rivolge li supportino.')
P.widget('w6_colori', 'Un colore, due scritture')
P.tab([['Formato', 'Esempio', 'Quando conviene'],
       ['nome', '`tomato`', 'prove veloci, esempi'],
       ['esadecimale', '`#0a6f66`', 'il più diffuso: lo danno i programmi di grafica'],
       ['`rgb()`', '`rgb(10 111 102 / 0.8)`', 'quando si ragiona sui canali o serve la trasparenza'],
       ['`hsl()`', '`hsl(175 83% 24%)`', 'per costruire una palette: stessa tinta, luminosità diverse'],
       ['`currentColor`', '`border-color: currentColor`', 'per legare un bordo o un’icona al colore del testo']],
      'I formati dei colori')
P.p('Qualunque formato si usi, i colori vanno scelti in modo che si leggano bene: serve un **contrasto sufficiente** tra testo e sfondo.')
P.err('«`#fc0` è uguale a `#fc0000`.»',
      'Nella forma breve **ogni cifra si raddoppia**: `#fc0` vale `#ffcc00`, un giallo oro; `#fc0000` è un rosso.')

# ---------------------------------------------------------------- 6.2
P.sez('6.2', 'Trasparenza: opacity contro canale alfa', ic='droplet',
      R='opacity rende trasparente tutto l’elemento, l’alfa di un colore solo quel colore.')
P.p('Abbiamo visto che un colore può avere una trasparenza. Ma c’è anche un secondo modo per rendere trasparente qualcosa, e i due **non fanno la stessa cosa**.')
P.casi(('', '`opacity: 0.5`', 'Da 0 a 1, agisce su **tutto l’elemento**: sfondo, testo, bordi e anche tutti i figli.'),
       ('', 'canale alfa: `rgb(30 80 200 / 0.5)`', 'Agisce **solo su quel colore**: se è il colore di sfondo, il testo resta pieno. Si scrive anche `#1e50c880`.'))
P.p('Attenzione: un elemento con `opacity: 0` è invisibile ma **c’è ancora**: occupa il suo posto nell’impaginazione e si può cliccare. Per toglierlo davvero serve `display: none` (6.4).')
P.widget('w6_alfa', 'opacity o canale alfa?')
P.err('«`opacity: 0.5` rende trasparente solo lo sfondo.»',
      '`opacity` rende trasparente **tutto** l’elemento, testo compreso. Per lo sfondo soltanto si usa l’alfa nel colore: `background: rgb(30 80 200 / 0.5)`.')
P.dom('Card con sfondo blu e testo bianco, poi `opacity: 0.5`. Che cosa diventa trasparente?',
      '**Tutto**: sfondo, testo e bordo. Per rendere trasparente solo lo sfondo serve il canale alfa nel colore di sfondo.')
P.p('Con i valori abbiamo tutti gli ingredienti di una dichiarazione. Nel prossimo capitolo li useremo per dare forma a sfondi, bordi, testi e scatole.')

# ---------------------------------------------------------------- slide
SP = {
 '5.1': [
  casi('Due regole sui valori', [
    caso('si', 'si può', titolo='`margin: 0`', testo='lo zero non vuole l’unità'),
    caso('no', 'non valida', titolo='`margin: 10`', testo='una lunghezza vuole sempre l’unità: dichiarazione scartata')],
    msg='Ogni proprietà accetta solo certi tipi di valore'),
  casi('line-height: numero o lunghezza?', [
    caso('si', 'numero senza unità', css='body { line-height: 1.5; }', testo='ogni elemento: 1,5 × il suo testo; titolo a 40px → righe di 60px'),
    caso('no', 'lunghezza', css='body { line-height: 24px; }', testo='i discendenti ereditano 24px: titolo a 40px → righe sovrapposte')],
    msg='Il numero si moltiplica, la lunghezza si eredita già calcolata'),
 ],
 '5.2': [
  casi('Assolute e relative', [
    nd('Assolute', righe=['`px`, `cm`, `mm`, `in`, `pt`', '1in = 96px = 2,54cm', 'il pixel CSS **non** è un pixel dello schermo'], icona='ruler', nota='per lo schermo, in pratica solo `px`'),
    nd('Relative', righe=['`%`, `em`, `rem`, `ch`', '`vw`, `vh`, `vmin`, `vmax`', '`svh`, `lvh`, `dvh` per i telefoni'], icona='scaling', nota='si adattano a schermi e preferenze', tono='si')],
    msg='Misura fissa o misura che dipende da un’altra grandezza'),
  casi('La percentuale dipende dalla proprietà', [
    nd('`width: 50%`', 'metà della larghezza del **contenitore**', 'move-horizontal'),
    nd('`font-size: 120%`', '1,2 × il testo del **genitore**', 'type'),
    nd('`padding-top: 50%`', 'metà della **larghezza** del contenitore, non dell’altezza', 'triangle-alert', tono='forse')]),
  casi('Le trappole della finestra', [
    nd('`100vh` sul telefono', 'più alto dello schermo visibile: calcolato con la barra degli indirizzi nascosta', 'smartphone', nota='`100dvh`: l’altezza del momento'),
    nd('`100vw`', 'comprende la barra di scorrimento: l’elemento esce e scorre in orizzontale', 'scroll', nota='`width: 100%`, o lasciare `auto`')]),
  'w5_unita',
 ],
 '5.3': [
  casi('px, em, rem', [
    nd('`px`', 'fisso: 16px restano 16px', 'lock', nota='bordi sottili'),
    nd('`em`', 'il testo dell’elemento (in `font-size`: del genitore); **si accumula**', 'type', nota='padding dei pulsanti'),
    nd('`rem`', 'il testo della radice, che **l’utente può cambiare**', 'house', nota='testi e spaziature', tono='si')],
    msg='Fisso, relativo all’elemento, relativo alla radice'),
  'w5_annidate',
 ],
 '5.4': [
  anatomia('clamp() per un testo fluido', 'font-size: clamp(1rem, 0.5rem + 2vw, 2rem);', [
    ['1rem', 'minimo', 'non scende sotto'],
    ['0.5rem + 2vw', 'preferito', 'una parte in rem, una che cresce con la finestra'],
    ['2rem', 'massimo', 'non sale sopra']],
    effetto='Solo `vw` non risponde allo zoom: serve anche una parte in rem'),
  'w5_clamp',
 ],
 '6.1': [
  anatomia('L’esadecimale', 'color: #0a6f66;', [
    ['0a', 'rosso', 'da 00 a ff'], ['6f', 'verde', 'da 00 a ff'], ['66', 'blu', 'da 00 a ff']],
    effetto='Forma breve: `#fc0` = `#ffcc00`, ogni cifra si raddoppia'),
  anatomia('HSL', 'color: hsl(175 83% 24%);', [
    ['175', 'tinta', 'gradi sulla ruota: 0 rosso, 120 verde, 240 blu'],
    ['83%', 'saturazione', '0% grigio, 100% colore pieno'],
    ['24%', 'luminosità', '0% nero, 50% puro, 100% bianco']],
    effetto='Stessa tinta, luminosità diverse: una palette'),
  'w6_colori',
 ],
 '6.2': [
  casi('Due trasparenze', [
    nd('`opacity: 0.5`', 'tutto l’elemento: sfondo, testo, bordi e figli', 'layers', nota='con 0 è invisibile ma **c’è ancora**, e si clicca'),
    nd('canale alfa', 'solo quel colore: sullo sfondo, il testo resta pieno', 'droplet', css='background: rgb(30 80 200 / 0.5);', tono='si')],
    msg='Tutto l’elemento o solo un colore'),
  'w6_alfa',
 ],
}
P.aula('Numeri, unità, funzioni e colori: che cosa si può scrivere dopo i due punti.', SP,
       apertura=('Un testo scritto in `px` e uno in `rem`: l’utente imposta nel browser «caratteri grandi». Quale dei due cambia?',
                 'Quello in **`rem`**, che segue la dimensione del testo della radice scelta dall’utente; quello in `px` resta fisso.'))
