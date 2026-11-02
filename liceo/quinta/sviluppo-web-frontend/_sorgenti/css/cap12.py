# Capitolo 12 · Grid
from lib import *

P.capo('Grid', 12)

# ---------------------------------------------------------------- 12.1
P.sez('12.1', 'L’idea (righe e colonne)',
      R='Grid dispone gli elementi in due direzioni insieme, su righe e colonne.')
P.p('Flexbox dispone gli elementi **in una direzione** e lascia che ogni riga si arrangi da sola. [[Grid]] (*CSS Grid Layout*) lavora invece in **due direzioni insieme**: si disegna prima una **griglia** di righe e colonne, come un foglio a quadretti, e poi si collocano gli elementi nelle sue caselle. È lo strumento adatto per l’impaginazione di una pagina intera o di una galleria.',
    'Come per Flexbox, si scrive `display: grid` sul **contenitore** (*grid container*) e i suoi figli diretti diventano **elementi della griglia** (*grid item*). Le parole da conoscere:')
P.ul(['le **linee** (*grid line*) sono le righe divisorie, orizzontali e verticali, **numerate da 1**: una griglia di 3 colonne ha 4 linee verticali;',
      'una **traccia** (*track*) è lo spazio tra due linee vicine: una **colonna** o una **riga**;',
      'una **cella** (*cell*) è l’incrocio tra una riga e una colonna, la casella più piccola;',
      'un’**area** (*grid area*) è un rettangolo di più celle: un elemento può occuparne una intera.'])
P.schema('s12_idea', 'Una griglia di 3 colonne e 2 righe', '''      <div class="s12i">
        <div class="s12i-g">
          <div class="s12i-c traccia" style="grid-column:3;grid-row:1 / 3"></div>
          <div class="s12i-c cella" style="grid-column:2;grid-row:1"></div>
          <div class="s12i-c area" style="grid-column:1 / 3;grid-row:2"></div>
          <span class="s12i-n v" style="left:0">1</span><span class="s12i-n v" style="left:33.33%">2</span><span class="s12i-n v" style="left:66.66%">3</span><span class="s12i-n v" style="left:100%">4</span>
          <span class="s12i-n o" style="top:0">1</span><span class="s12i-n o" style="top:50%">2</span><span class="s12i-n o" style="top:100%">3</span>
        </div>
        <ul class="s12i-leg"><li><i class="lin"></i>le <b>linee</b>, numerate: 4 verticali e 3 orizzontali</li><li><i class="traccia"></i>una <b>traccia</b>: la colonna 3, tra le linee 3 e 4</li><li><i class="cella"></i>una <b>cella</b>: riga 1, colonna 2</li><li><i class="area"></i>un’<b>area</b> di due celle: riga 2, colonne da 1 a 3</li></ul>
      </div>''', titolo_aula='Linee, tracce, celle, aree')
P.err('«`display: grid` va messo sugli elementi da mettere in griglia.»',
      'Va sul **contenitore**, come `display: flex`: sono i suoi figli diretti a diventare elementi della griglia.')

# ---------------------------------------------------------------- 12.2
P.sez('12.2', 'Definire la griglia (grid-template-columns · fr · repeat() · minmax() · auto-fit · gap)',
      R='Le colonne si definiscono con grid-template-columns; fr è una frazione dello spazio libero e auto-fit adatta il numero di colonne.')
P.p('Le colonne si disegnano con `grid-template-columns`, scrivendo **una misura per ogni colonna**; le righe, allo stesso modo, con `grid-template-rows`. Le misure possono essere in px, %, rem, oppure nell’unità nata per Grid:')
P.ul(['`fr` (*fraction*) è una **frazione dello spazio libero**, quello che avanza dopo aver tolto le colonne a misura fissa e i `gap`. `1fr 2fr` divide lo spazio in tre parti: una alla prima colonna, due alla seconda. `150px 1fr` fa una colonna fissa e una che prende **tutto il resto**. Non è una percentuale: `1fr 1fr 1fr` con un `gap` di 10px non sbaglia mai i conti, `33% 33% 33%` sì;',
      '`repeat(3, 1fr)` ripete una misura: è lo stesso di `1fr 1fr 1fr`;',
      '`minmax(200px, 1fr)` dà a una traccia una misura **minima e massima**: almeno 200px, al massimo una frazione;',
      '`gap` (o `row-gap` e `column-gap`) è lo spazio **tra** le tracce.'])
P.p('Insieme danno la riga più famosa di Grid, una galleria che **sceglie da sola quante colonne** mettere:')
P.css('.galleria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}', 'stile.css', aula='La galleria che si adatta')
P.p('`auto-fit` vuol dire «quante colonne ci stanno, ognuna di almeno 200px»: su un computer quattro, su un tablet due, su un telefono una, **senza nessuna media query**. Esiste anche `auto-fill`: la differenza si vede quando gli elementi sono pochi. `auto-fill` lascia le **colonne vuote** che ci starebbero, `auto-fit` le chiude ed **espande gli elementi** a occupare tutta la larghezza.',
    'Se gli elementi sono più delle celle definite, la griglia **aggiunge righe da sola**: sono le righe della [[griglia implicita]]. La loro altezza si decide con `grid-auto-rows` (per esempio `grid-auto-rows: 120px`), e con `grid-auto-flow: column` la griglia cresce invece per colonne. Tra le misure esistono anche `min-content` e `max-content`, cioè «quanto il contenuto più stretto possibile» e «quanto il contenuto senza andare a capo».')
P.dom('In una griglia a 3 colonne metto 4 elementi. Che fine fa il quarto?',
      'Va a capo in una **nuova riga**, nella prima colonna: la griglia crea le righe che servono da sola (griglia implicita).', prima=True)
P.widget('w12_grid', 'Grid')
P.err('«`fr` è una percentuale.»',
      '`fr` è una frazione dello **spazio libero**, cioè di quello che resta dopo le colonne fisse e i `gap`. Per questo, a differenza delle percentuali, non fa mai uscire la griglia dal contenitore.')
P.err('«`auto-fit` e `auto-fill` sono uguali.»',
      'Con molti elementi sì. Con pochi, `auto-fill` lascia **colonne vuote** in fondo, `auto-fit` le chiude e **allarga gli elementi** a tutta la larghezza.')

# ---------------------------------------------------------------- 12.3
P.sez('12.3', 'Posizionare gli elementi (grid-column · grid-row · span · grid-template-areas)',
      R='grid-column e grid-row indicano da quale linea a quale; grid-template-areas disegna il layout con i nomi.')
P.p('Senza indicazioni gli elementi riempiono le celle **in ordine**, una dopo l’altra. Per mettere un elemento in un punto preciso si dice **da quale linea a quale** deve andare:')
P.ul(['`grid-column: 1 / 3` lo stende dalla linea verticale 1 alla 3, cioè sulle prime **due colonne**; `grid-row: 2 / 4` sulle righe 2 e 3;',
      '`span 2` vuol dire «occupa due tracce» a partire da dove capita: `grid-column: span 2`;',
      'i numeri **negativi** contano dalla fine: `-1` è l’**ultima linea**, quindi `grid-column: 1 / -1` stende un elemento su **tutta la larghezza**, qualunque sia il numero di colonne;',
      '`grid-area` è la scorciatoia per riga e colonna insieme: `grid-area: 1 / 1 / 3 / 3` (riga di inizio, colonna di inizio, riga di fine, colonna di fine).'])
P.p('Il modo più leggibile di impaginare una pagina intera, però, è **disegnarla**. Con `grid-template-areas` si scrive una stringa per ogni riga e una parola per ogni cella: celle vicine con lo stesso nome formano un’area. Poi a ogni elemento si dice in quale area andare con `grid-area: nome`. Ogni area deve essere un **rettangolo**, e un punto (`.`) lascia una cella vuota.')
P.widget('w12_aree', 'Dal disegno al layout')
P.p('Con le aree cambiare l’impaginazione è facilissimo: su un telefono basta ridisegnare la stringa con una colonna sola (`"h" "m" "s" "f"`), senza toccare l’HTML né le regole degli elementi.')

# ---------------------------------------------------------------- 12.4
P.sez('12.4', 'Allineamento (justify-items · align-items · place-items)',
      R='justify-items e align-items allineano gli elementi dentro le celle, justify-content e align-content la griglia nel contenitore.')
P.p('In Grid ci sono due livelli di allineamento, con nomi simili a quelli di Flexbox:')
P.ul(['**dentro la cella**: `justify-items` allinea gli elementi **in orizzontale** (sull’asse delle righe), `align-items` **in verticale**. I valori sono `start`, `end`, `center` e `stretch` (predefinito: l’elemento riempie la cella). `place-items` è la scorciatoia per tutti e due: `place-items: center` centra ogni elemento nella sua cella. Un elemento solo si sposta con `justify-self` e `align-self`;',
      '**la griglia nel contenitore**: se le tracce, tutte insieme, sono più piccole del contenitore (per esempio colonne in px), `justify-content` e `align-content` decidono dove mettere **l’intera griglia** e come distribuire lo spazio avanzato, con gli stessi valori di Flexbox (`start`, `center`, `space-between`…). La scorciatoia è `place-content`.'])
P.schema('s12_allinea', 'place-items: lo stesso elemento in una cella, con quattro valori', '''      <div class="s12a">''' + ''.join(f'''
        <div class="kit-cella"><div class="s12a-g" style="place-items:{v}"><div>{v}</div></div><code>place-items: {v};</code></div>''' for v in ['start', 'end', 'center', 'stretch']) + '''
      </div>''', titolo_aula='place-items: quattro valori')

# ---------------------------------------------------------------- 12.5
P.sez('12.5', 'Differenza tra Flexbox e Grid',
      R='Flexbox lavora in una direzione partendo dal contenuto, Grid in due partendo dalla struttura; si combinano.')
P.p('Flexbox e Grid non sono in concorrenza: rispondono a domande diverse. Flexbox parte dal **contenuto** («ho questi elementi, mettili in fila e distribuisci lo spazio»), Grid dalla **struttura** («ecco le colonne: ogni elemento va nella sua casella»).')
P.tab([['', 'Flexbox', 'Grid'],
       ['Dimensioni', 'una: una riga **o** una colonna (con `wrap`, righe indipendenti)', 'due: righe **e** colonne insieme'],
       ['Punto di partenza', 'il contenuto: le misure nascono dagli elementi', 'la struttura: le misure nascono dalla griglia'],
       ['Allineamento tra righe', 'ogni riga va per conto suo', 'le colonne restano **allineate** in tutte le righe'],
       ['Quando usarlo', 'barre di navigazione, pulsanti, una fila di card, centrare', 'l’impaginazione della pagina, gallerie, moduli a colonne']],
      'Flexbox e Grid a confronto')
P.widget('w12_confronto', 'Righe indipendenti o colonne allineate')
P.p('Nei siti veri si usano **insieme**: Grid per l’impaginazione della pagina (intestazione, barra laterale, contenuto, piè di pagina) e Flexbox dentro i singoli componenti (le voci del menu nell’intestazione, l’icona e il testo in un pulsante).')


# ---------------------------------------------------------------- slide
SP = {
 '12.1': [
  punti('Righe e colonne', 'Prima la griglia, poi gli elementi nelle caselle', [
    ['grid-3x3', '`display: grid` sul **contenitore**: i figli diretti vanno nelle celle'],
    ['separator-vertical', '**Linee** numerate da 1: tre colonne hanno quattro linee'],
    ['columns-3', '**Traccia**: lo spazio tra due linee, una riga o una colonna'],
    ['square', '**Cella**: l’incrocio tra una riga e una colonna'],
    ['rectangle-horizontal', '**Area**: un rettangolo di più celle']]),
 ],
 '12.2': [
  tessere('Definire le colonne', 'grid-template-columns: una misura per colonna', [
    ['divide', '`fr`', 'frazione dello spazio libero, non una percentuale'],
    ['repeat', '`repeat(3, 1fr)`', 'ripete la stessa misura'],
    ['ruler', '`minmax(200px, 1fr)`', 'almeno 200px, al massimo una frazione'],
    ['layout-grid', '`auto-fit`', 'quante colonne ci stanno, senza media query']],
    nota='Elementi in più → righe nuove da sole (griglia implicita, `grid-auto-rows`)'),
 ],
 '12.3': [
  punti('Collocare gli elementi', 'Da quale linea a quale linea', [
    ['move-horizontal', '`grid-column: 1 / 3`: dalla linea 1 alla 3, due colonne'],
    ['stretch-horizontal', '`span 2`: occupa due tracce da dove capita'],
    ['arrow-right-to-line', '`1 / -1`: fino all’ultima linea, tutta la larghezza'],
    ['pencil-ruler', '`grid-template-areas`: il layout **disegnato** con i nomi'],
    ['smartphone', 'Sul telefono si ridisegna la stringa, l’HTML non cambia']]),
 ],
 '12.4': [
  confronto('Due livelli di allineamento', 'Dentro la cella o la griglia intera',
            {'icona': 'square', 'titolo': 'Dentro la cella', 'righe': ['• `justify-items`: orizzontale', '• `align-items`: verticale', '• `place-items` le scrive insieme', '• un elemento solo: `justify-self`, `align-self`']},
            {'icona': 'grid-3x3', 'titolo': 'La griglia nel contenitore', 'righe': ['• quando le tracce sono più piccole', '• `justify-content`, `align-content`', '• scorciatoia `place-content`']}),
 ],
 '12.5': [],
}
P.aula('Disegnare righe e colonne e collocare gli elementi: Grid.', SP,
       apertura=('Una galleria di foto: su computer quattro colonne, su tablet due, su telefono una. Quante media query servono?',
                 '**Nessuna**: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` sceglie da sola quante colonne ci stanno.'))
