# Capitolo 5 · Valori e unità
from lib import *

P.capo('Valori, unità e colori', 5)

# ---------------------------------------------------------------- 5.1
P.sez('5.1', 'I tipi di valore',
      R='Ogni proprietà accetta solo certi tipi di valore; uno sbagliato rende la dichiarazione non valida.')
P.p('Ogni proprietà accetta solo certi **tipi di valore**: `color` vuole un colore, `width` una lunghezza o una percentuale, `display` una parola chiave. Un valore del tipo sbagliato rende la dichiarazione **non valida**, e il browser la scarta come un errore di battitura.')
P.tab([['Tipo', 'Esempi', 'Proprietà tipiche'],
       ['parole chiave', '`auto`, `none`, `bold`, `center`, `inherit`', '`display`, `text-align`, `font-weight`'],
       ['numeri senza unità', '`1.5`, `0.8`, `10`', '`line-height`, `opacity`, `z-index`'],
       ['lunghezze', '`16px`, `2rem`, `50vw`, `0`', '`width`, `margin`, `font-size`'],
       ['percentuali', '`50%`, `100%`', '`width`, `font-size`, `line-height`'],
       ['colori', '`red`, `#0a6f66`, `rgb(10 111 102)` (più avanti)', '`color`, `background-color`, `border-color`'],
       ['stringhe e URL', '`"NUOVO"`, `url("foto.jpg")`', '`content`, `background-image`, `font-family`'],
       ['funzioni', '`calc(100% - 2rem)`, `rgb()`, `clamp()`', 'quasi tutte']],
      'I tipi di valore')
P.p('Due dettagli da ricordare. Una **lunghezza** vuole sempre l’unità, tranne lo **zero**: `margin: 0` va bene, `margin: 10` no. E `line-height` accetta sia un numero senza unità sia una lunghezza, ma non sono la stessa cosa: un numero (`1.5`) si **moltiplica per la dimensione del testo di ogni elemento**, mentre una lunghezza (`24px`, o `1.5em`) viene calcolata una volta e i discendenti **ereditano il risultato già calcolato**. Con `line-height: 24px` un titolo a 40px ha le righe che si sovrappongono; con `line-height: 1.5` ha un’interlinea di 60px, proporzionata.')
P.css('body { line-height: 1.5; }   /* ogni elemento: 1,5 × il suo testo */\nh1   { font-size: 40px; }     /* interlinea 60px, giusta */\n\n/* con body { line-height: 24px; } il titolo avrebbe righe di 24px: sovrapposte */')

# ---------------------------------------------------------------- 5.2
P.sez('5.2', 'Unità di misura',
      R='Le unità sono assolute o relative a un’altra grandezza; la percentuale dipende dalla proprietà.')
P.p('Le unità di lunghezza sono di due famiglie. Le **unità assolute** hanno una misura fissa: `px`, `cm`, `mm`, `in` (pollice), `pt` (punto tipografico). Sono legate tra loro: 1in = 96px = 2,54cm. Ma il [[pixel CSS]] **non è un pixel dello schermo**: è un’unità di riferimento, e su uno schermo ad alta densità un pixel CSS corrisponde a due, tre o più pixel fisici. Per lo schermo, delle assolute si usa praticamente solo `px`; `cm` e `pt` hanno senso per la stampa.',
    'Le **unità relative** dipendono da un’altra grandezza, e per questo si adattano a schermi e preferenze diverse:')
P.tab([['Unità', 'Rispetto a che cosa', 'Esempio'],
       ['`%`', 'dipende dalla proprietà (vedi sotto)', '`width: 50%`'],
       ['`em`', 'dimensione del testo dell’elemento (per `font-size`: del genitore)', '`padding: 0.5em`'],
       ['`rem`', 'dimensione del testo della radice, `html` (di solito 16px)', '`font-size: 1.25rem`'],
       ['`ch`', 'larghezza del carattere «0» nel font dell’elemento', '`max-width: 65ch`'],
       ['`vw` · `vh`', '1% della larghezza · dell’altezza della finestra', '`width: 50vw`'],
       ['`vmin` · `vmax`', '1% del lato più corto · più lungo della finestra', '`font-size: 5vmin`'],
       ['`svh` · `lvh` · `dvh`', '1% dell’altezza della finestra piccola, grande, attuale (sul telefono)', '`min-height: 100dvh`']],
      'Le unità relative')
P.p('La **percentuale** cambia significato secondo la proprietà: in `width` è la larghezza del **contenitore**; in `font-size` è il testo del **genitore**; in `margin` e `padding` è sempre la **larghezza** del contenitore, anche per l’alto e il basso. Quindi `padding-top: 50%` non è metà dell’altezza.',
    'Due trappole delle unità della finestra. Sui telefoni `100vh` è **più alto dello schermo visibile**, perché è calcolato come se la barra degli indirizzi fosse nascosta: per questo sono nate `svh` (finestra piccola, barre visibili), `lvh` (finestra grande) e `dvh` (quella del momento), supportate da tutti i browser principali dal 2025. E `100vw` comprende anche la **barra di scorrimento verticale**: un elemento largo `100vw` è un po’ più largo della pagina e fa comparire lo scorrimento orizzontale.',
    'L’unità `ch` è comoda per il testo: `max-width: 65ch` tiene le righe intorno ai 60–70 caratteri, la lunghezza più facile da leggere.')
P.widget('w5_unita', 'Sei larghezze, sei unità')
P.err('«`padding-top: 50%` è metà dell’altezza dell’elemento.»',
      'Nel `padding` e nel `margin` la percentuale si calcola sempre sulla **larghezza del contenitore**, anche in verticale.')
P.err('«`width: 100vw` riempie esattamente la pagina.»',
      '`100vw` comprende anche la barra di scorrimento verticale: l’elemento **esce** di qualche pixel e compare lo scorrimento orizzontale. Per tutta la larghezza disponibile basta `width: 100%` (o lasciare `auto`).')

# ---------------------------------------------------------------- 5.3
P.sez('5.3', 'Differenza tra px, em e rem',
      R='px non cambia mai, rem segue il testo della radice, em quello dell’elemento e si accumula nei livelli annidati.')
P.p('Le tre unità più usate a confronto:')
P.ul(['`px` è **fisso**: 16px restano 16px qualunque cosa succeda;',
      '`rem` (*root em*) moltiplica la **dimensione del testo della radice**, cioè dell’elemento `html`: di solito 16px, ma **l’utente la può cambiare** nelle impostazioni del browser per leggere meglio;',
      '`em` moltiplica la **dimensione del testo dell’elemento stesso**; dentro `font-size`, che non può riferirsi a sé stessa, moltiplica quella del **genitore**. Per questo con gli `em` le dimensioni **si accumulano** negli elementi annidati.'])
P.p('Da qui le scelte consigliate: `rem` per le **dimensioni del testo** e per le **spaziature** generali, così tutta la pagina segue la preferenza dell’utente; `em` per i **componenti che devono crescere con il proprio testo**, come il `padding` di un pulsante (un pulsante con il testo più grande ha anche più spazio intorno); `px` per i dettagli che non devono cambiare, come i **bordi sottili**.')
P.dom('Lista dentro lista dentro lista, ognuna con `font-size: 1.2em`. Il terzo livello è grande quanto il primo?',
      'No: ogni livello moltiplica il genitore, quindi 1,2 × 1,2 × 1,2 = **1,73** volte il testo di partenza.', prima=True)
P.widget('w5_annidate', 'Liste annidate con em e con rem')
P.p('Un vecchio trucco da evitare: scrivere `html { font-size: 10px; }` per avere conti facili (1rem = 10px). Così però la dimensione della radice è fissata in pixel e **ignora la preferenza dell’utente**: chi ha impostato caratteri più grandi nel browser non li vedrà più.')
P.err('«`1em` è sempre 16px.»',
      '`1em` è la dimensione del testo **dell’elemento** (o del genitore, dentro `font-size`): vale 16px solo se il testo è a 16px. È `1rem` che vale di solito 16px, e solo finché l’utente non cambia le impostazioni.')
P.err('«Con `html { font-size: 10px; }` i conti sono più facili e non cambia nulla.»',
      'Cambia per l’utente: la radice in pixel **ignora la dimensione del testo scelta nel browser**, e chi ha bisogno di caratteri più grandi non li ottiene.')

# ---------------------------------------------------------------- 5.4
P.sez('5.4', 'Funzioni di calcolo',
      R='calc() combina unità, min() e max() fissano limiti, clamp() tiene un valore tra minimo e massimo.')
P.p('Il CSS sa fare i conti, anche tra unità diverse, che il browser converte al momento:')
P.ul(['`calc()` fa un calcolo: `width: calc(100% - 2rem)` è tutta la larghezza meno 2rem. Gli spazi attorno a `+` e `-` sono **obbligatori** (attorno a `*` e `/` no);',
      '`min()` sceglie il valore **più piccolo** dell’elenco, quindi fa da **limite massimo**: `width: min(100%, 600px)` non supera mai 600px;',
      '`max()` sceglie il **più grande**, quindi fa da **limite minimo**: `font-size: max(1rem, 2vw)` non scende mai sotto 1rem;',
      '`clamp(minimo, preferito, massimo)` usa il valore preferito, ma lo tiene tra minimo e massimo; equivale a `max(minimo, min(preferito, massimo))`.'])
P.p('`clamp()` serve soprattutto per un **testo fluido**, che cresce con la finestra ma entro dei limiti. Il valore preferito non deve però essere solo in `vw`: un testo in `vw` dipende solo dalla larghezza della finestra e **non risponde allo zoom** dell’utente. Si scrive allora `1rem + 1vw`: una parte fissa in rem, che segue le preferenze, e una parte che cresce con la finestra.')
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


# ---------------------------------------------------------------- 6.1
P.sez('6.1', 'Formati dei colori',
      R='Lo stesso colore si scrive in più formati; HSL è comodo per costruire palette, RGB per i canali.')
P.p('Lo stesso colore si può scrivere in più formati:')
P.ul(['**nomi**: circa 140 parole chiave in inglese, da `red` a `rebeccapurple` (aggiunto nel 2014 in ricordo della figlia di Eric Meyer, uno dei padri del CSS);',
      '**esadecimale** `#rrggbb`: tre coppie di cifre da `00` a `ff` per rosso, verde e blu (`#0a6f66`). La **forma breve** `#rgb` raddoppia ogni cifra: `#fc0` vale `#ffcc00`. Con una quarta coppia, `#rrggbbaa`, si aggiunge la trasparenza;',
      '`rgb()`: i tre canali di luce **da 0 a 255**: `rgb(10 111 102)`;',
      '`hsl()`: **tinta** in gradi sulla ruota dei colori (0 rosso, 120 verde, 240 blu), **saturazione** in percentuale (0% grigio, 100% colore pieno), **luminosità** in percentuale (0% nero, 50% colore puro, 100% bianco): `hsl(175 83% 24%)`;',
      'due parole speciali: `currentColor`, il valore attuale di `color` dell’elemento, e `transparent`, del tutto trasparente.'])
P.p('La **sintassi moderna** separa i valori con spazi e aggiunge la trasparenza dopo una barra: `rgb(10 111 102 / 0.5)`. Per questo `rgba()` e `hsla()` non servono più, anche se le vecchie forme con le virgole restano valide. Esistono anche formati più recenti come `hwb()` e `oklch()`, che descrivono il colore in modo più vicino a come lo percepiamo; prima di usarli conviene verificare che i browser a cui ci si rivolge li supportino.')
P.widget('w6_colori', 'Un colore, due scritture')
P.tab([['Formato', 'Esempio', 'Quando conviene'],
       ['nome', '`tomato`', 'prove veloci, esempi'],
       ['esadecimale', '`#0a6f66`', 'il più diffuso: lo danno i programmi di grafica'],
       ['`rgb()`', '`rgb(10 111 102 / 0.8)`', 'quando si ragiona sui canali o serve la trasparenza'],
       ['`hsl()`', '`hsl(175 83% 24%)`', 'per costruire una palette: stessa tinta, luminosità diverse'],
       ['`currentColor`', '`border-color: currentColor`', 'per legare un bordo o un’icona al colore del testo']],
      'I formati dei colori')
P.p('I colori vanno scelti in modo che si leggano bene: serve un **contrasto sufficiente** tra testo e sfondo.')
P.err('«`#fc0` è uguale a `#fc0000`.»',
      'Nella forma breve **ogni cifra si raddoppia**: `#fc0` vale `#ffcc00`, un giallo oro; `#fc0000` è un rosso.')

# ---------------------------------------------------------------- 6.2
P.sez('6.2', 'Trasparenza: opacity contro canale alfa',
      R='opacity rende trasparente tutto l’elemento, l’alfa di un colore solo quel colore.')
P.p('Ci sono due modi per rendere trasparente qualcosa, e non fanno la stessa cosa:')
P.ul(['`opacity` (da 0 a 1) agisce su **tutto l’elemento**: sfondo, testo, bordi e anche tutti i figli;',
      'il **canale alfa** di un colore (`rgb(30 80 200 / 0.5)`, `#1e50c880`) agisce **solo su quel colore**: se è il colore di sfondo, il testo resta pieno.'])
P.p('Attenzione: un elemento con `opacity: 0` è invisibile ma **c’è ancora**: occupa il suo posto nell’impaginazione e si può cliccare. Per toglierlo davvero serve `display: none` (6.4).')
P.widget('w6_alfa', 'opacity o canale alfa?')
P.err('«`opacity: 0.5` rende trasparente solo lo sfondo.»',
      '`opacity` rende trasparente **tutto** l’elemento, testo compreso. Per lo sfondo soltanto si usa l’alfa nel colore: `background: rgb(30 80 200 / 0.5)`.')
P.dom('Card con sfondo blu e testo bianco, poi `opacity: 0.5`. Che cosa diventa trasparente?',
      '**Tutto**: sfondo, testo e bordo. Per rendere trasparente solo lo sfondo serve il canale alfa nel colore di sfondo.')

# ---------------------------------------------------------------- slide
SP = {
 '5.1': [
  punti('I tipi di valore', 'Ogni proprietà accetta solo certi tipi', [
    ['key', '**Parole chiave**: `auto`, `none`, `center`'],
    ['hash', '**Numeri** senza unità: `line-height: 1.5`, `opacity: 0.8`'],
    ['ruler', '**Lunghezze**, sempre con l’unità tranne lo **zero**'],
    ['percent', '**Percentuali**, **colori**, **stringhe**, `url()`, **funzioni**'],
    ['circle-x', 'Tipo sbagliato → dichiarazione **scartata**']]),
  punti('line-height senza unità', 'Il numero si moltiplica, la lunghezza si eredita già calcolata', [
    ['calculator', '`line-height: 1.5`: per ogni elemento 1,5 × il suo testo'],
    ['ruler', '`line-height: 24px`: tutti i discendenti ereditano 24px'],
    ['triangle-alert', 'Un titolo a 40px con righe di 24px: **righe sovrapposte**'],
    ['circle-check', 'Per l’interlinea: **numero senza unità**']]),
 ],
 '5.2': [
  confronto('Assolute e relative', 'Misura fissa o misura che si adatta',
            {'icona': 'ruler', 'titolo': 'Assolute', 'righe': ['• `px`, `cm`, `mm`, `in`, `pt`', '• 1in = 96px = 2,54cm', '• il pixel CSS **non** è un pixel dello schermo'], 'piede': 'per lo schermo, in pratica solo `px`'},
            {'icona': 'scaling', 'titolo': 'Relative', 'tono': 'buono', 'righe': ['• `%`, `em`, `rem`, `ch`', '• `vw`, `vh`, `vmin`, `vmax`', '• `svh`, `lvh`, `dvh` per i telefoni'], 'piede': 'si adattano a schermi e preferenze'}),
  punti('La percentuale', 'Dipende dalla proprietà', [
    ['move-horizontal', '`width: 50%`: metà della larghezza del **contenitore**'],
    ['type', '`font-size: 120%`: 1,2 × il testo del **genitore**'],
    ['triangle-alert', '`padding-top: 50%`: metà della **larghezza** del contenitore!'],
    ['smartphone', '`100vh` sul telefono: più alto dello schermo → `100dvh`'],
    ['scroll', '`100vw` include la barra di scorrimento → esce']]),
 ],
 '5.3': [
  tessere('px, em, rem', 'Fisso, relativo all’elemento, relativo alla radice', [
    ['lock', '`px`', 'non cambia mai · bordi sottili'],
    ['type', '`em`', 'testo dell’elemento · si **accumula** · padding dei pulsanti'],
    ['house', '`rem`', 'testo della radice, scelto dall’utente · testi e spaziature']],
    nota='Mai `html { font-size: 10px; }`: ignora la preferenza dell’utente'),
 ],
 '5.4': [
  punti('Le funzioni di calcolo', 'Il CSS fa i conti tra unità diverse', [
    ['calculator', '`calc(100% - 2rem)`: spazi **obbligatori** attorno a + e −'],
    ['arrow-down-to-line', '`min(100%, 600px)`: il più piccolo → limite **massimo**'],
    ['arrow-up-to-line', '`max(1rem, 2vw)`: il più grande → limite **minimo**'],
    ['brackets', '`clamp(min, preferito, max)`: il preferito, tenuto tra i limiti'],
    ['zoom-in', 'Testo fluido: `1rem + 1vw`, non solo `vw` (lo zoom deve funzionare)']]),
 ],
 '6.1': [
  {'tipo': 'domanda', 'testo': '`#ff0000`, `rgb(255 0 0)`, `hsl(0 100% 50%)` e `red`: quanti colori diversi sono?',
   'risposta': '**Uno solo**: il rosso puro, scritto in quattro formati diversi.'},
  tessere('I formati dei colori', 'Lo stesso colore, più scritture', [
    ['type', 'Nomi', '`tomato`, `rebeccapurple`'],
    ['hash', 'Esadecimale', '`#0a6f66` · breve `#fc0` = `#ffcc00`'],
    ['sliders-horizontal', '`rgb()`', 'tre canali da 0 a 255'],
    ['palette', '`hsl()`', 'tinta in gradi, saturazione %, luminosità %']],
    nota='Sintassi moderna: `rgb(10 111 102 / 0.5)` · `rgba()` non serve più'),
 ],
 '6.2': [
  confronto('Due trasparenze', 'Tutto l’elemento o solo un colore',
            {'icona': 'layers', 'titolo': '`opacity: 0.5`', 'righe': ['• sfondo, testo, bordi e figli', '• con 0: invisibile ma **c’è**, e si clicca'], 'piede': 'tutto l’elemento'},
            {'icona': 'droplet', 'titolo': '`rgb(… / 0.5)`', 'tono': 'buono', 'righe': ['• solo quel colore', '• sullo sfondo: il testo resta pieno'], 'piede': 'solo il colore'}),
 ],
}
P.aula('Numeri, unità, funzioni e colori: che cosa si può scrivere dopo i due punti.', SP,
       apertura=('Un testo scritto in `px` e uno in `rem`: l’utente imposta nel browser «caratteri grandi». Quale dei due cambia?',
                 'Quello in **`rem`**, che segue la dimensione del testo della radice scelta dall’utente; quello in `px` resta fisso.'))
