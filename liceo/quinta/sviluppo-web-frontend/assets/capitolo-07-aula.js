window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "07",
 "titolo": "CSS: avanzato",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "CSS: avanzato",
   "sotto": "Impaginare con Flexbox e Grid, adattarsi a ogni schermo, animare, usare un framework.",
   "indice": [
    [
     "7.1",
     "Flexbox"
    ],
    [
     "7.2",
     "Grid"
    ],
    [
     "7.3",
     "Responsive design"
    ],
    [
     "7.4",
     "Trasformazioni, transizioni, animazioni"
    ],
    [
     "7.5",
     "Tabelle e moduli"
    ],
    [
     "7.6",
     "Framework CSS: Bootstrap e Tailwind"
    ]
   ],
   "foto": {
    "src": "assets/immagini/atmosfera/c11.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "sezione",
   "num": "7.1",
   "titolo": "Flexbox",
   "sotto": "Mettere in fila, distribuire lo spazio, allineare: Flexbox.",
   "foto": {
    "src": "assets/immagini/atmosfera/c11.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Tre card affiancate, larghe uguali, centrate in verticale in una fascia. Con quello che sapete finora, come le fareste?",
   "risposta": "Con `inline-block`, float e margini calcolati a mano, con molti trucchi. Con **Flexbox** bastano tre righe sul contenitore."
  },
  {
   "tipo": "sezione",
   "num": "7.1",
   "titolo": "L’idea (contenitore ed elementi · asse principale e trasversale)",
   "sotto": "display:flex sul contenitore dispone i figli lungo un asse principale, con un asse trasversale perpendicolare.",
   "foto": {
    "src": "assets/immagini/atmosfera/11-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Contenitore ed elementi",
   "msg": "display: flex va sul contenitore",
   "punti": [
    [
     "box",
     "`display: flex` sul **contenitore**: i figli diretti si mettono in fila"
    ],
    [
     "git-fork",
     "Solo i **figli diretti** diventano elementi flessibili, non i nipoti"
    ],
    [
     "arrow-right",
     "**Asse principale**: la direzione della fila (con `row`, orizzontale)"
    ],
    [
     "arrow-down",
     "**Asse trasversale**: perpendicolare (con `row`, verticale)"
    ],
    [
     "repeat",
     "Con `column` gli assi **si scambiano**"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Flexbox",
   "w": "w11_flex"
  },
  {
   "tipo": "errore",
   "no": "«`display: flex` va messo sugli elementi che voglio affiancare.»",
   "si": "Va sul **contenitore**: sono i suoi figli diretti a mettersi in fila. Su un elemento da solo non affianca niente."
  },
  {
   "tipo": "errore",
   "no": "«`justify-content` lavora sempre in orizzontale.»",
   "si": "`justify-content` lavora sull’**asse principale**: orizzontale con `row`, ma **verticale** con `column`."
  },
  {
   "tipo": "sezione",
   "num": "7.1",
   "titolo": "Proprietà del contenitore (flex-direction · flex-wrap · justify-content · align-items · gap)",
   "sotto": "flex-direction e flex-wrap impostano flusso e a capo; justify-content distribuisce sull’asse principale, align-items sul trasversale.",
   "foto": {
    "src": "assets/immagini/atmosfera/11-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Con `flex-direction: column`, `justify-content: center` centra gli elementi in orizzontale o in verticale?",
   "risposta": "In **verticale**: `justify-content` lavora sull’asse principale, che con `column` è verticale. E serve un’**altezza** sul contenitore, altrimenti non c’è spazio libero da distribuire."
  },
  {
   "tipo": "tessere",
   "titolo": "Le proprietà del contenitore",
   "msg": "Due assi, due famiglie di proprietà",
   "tessere": [
    [
     "arrow-right-left",
     "`flex-direction`",
     "row, row-reverse, column, column-reverse"
    ],
    [
     "wrap-text",
     "`flex-wrap`",
     "nowrap (predefinito) o wrap"
    ],
    [
     "align-horizontal-space-between",
     "`justify-content`",
     "sull’asse principale"
    ],
    [
     "align-vertical-justify-center",
     "`align-items`",
     "sull’asse trasversale"
    ],
    [
     "space",
     "`gap`",
     "spazio tra gli elementi, non ai bordi"
    ]
   ],
   "nota": "`align-content` distribuisce le righe quando sono più d’una"
  },
  {
   "tipo": "schema",
   "titolo": "I sei valori di justify-content",
   "sel": "#s11_justify"
  },
  {
   "tipo": "errore",
   "no": "«`flex-wrap` è attivo di default: se gli elementi non entrano vanno a capo.»",
   "si": "Il valore predefinito è `nowrap`: gli elementi restano **su una riga** e si restringono, fino a uscire dal contenitore. Per andare a capo serve `flex-wrap: wrap`."
  },
  {
   "tipo": "sezione",
   "num": "7.1",
   "titolo": "Proprietà degli elementi (flex-grow · flex-shrink · flex-basis · flex · order · align-self)",
   "sotto": "flex-grow, flex-shrink e flex-basis dicono come un elemento si allarga, si restringe e da quale misura parte.",
   "foto": {
    "src": "assets/immagini/atmosfera/11-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Tre box con testi di lunghezza diversa e `flex-grow: 1` su tutti. Diventano larghi uguali?",
   "risposta": "**No**: `flex-grow` divide in parti uguali solo lo spazio **avanzato oltre il contenuto**, quindi il box con il testo più lungo resta più largo. Con `flex: 1` (base 0) sì, diventano uguali."
  },
  {
   "tipo": "punti",
   "titolo": "grow, shrink, basis",
   "msg": "Da quale misura parte e come si spartisce lo spazio",
   "punti": [
    [
     "ruler",
     "`flex-basis`: la misura di partenza (`auto` = il contenuto)"
    ],
    [
     "expand",
     "`flex-grow`: quota dello **spazio avanzato** che l’elemento prende"
    ],
    [
     "shrink",
     "`flex-shrink`: quota dello **spazio mancante** a cui rinuncia"
    ],
    [
     "equal",
     "`flex: 1` = `1 1 0%`: tutti larghi **uguali**"
    ],
    [
     "arrow-right-to-line",
     "`margin-left: auto` spinge in fondo; `min-width: 0` per i testi lunghi"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "La scorciatoia flex",
   "righe": [
    [
     "Scrittura",
     "Equivale a",
     "Effetto"
    ],
    [
     "valore iniziale",
     "`flex: 0 1 auto`",
     "non cresce, si restringe, parte dal contenuto"
    ],
    [
     "`flex: 1`",
     "`flex: 1 1 0%`",
     "parte da zero e cresce: elementi **larghi uguali**"
    ],
    [
     "`flex: auto`",
     "`flex: 1 1 auto`",
     "parte dal contenuto e cresce: larghi diversi"
    ],
    [
     "`flex: none`",
     "`flex: 0 0 auto`",
     "rigido: né cresce né si restringe"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "flex sugli elementi",
   "w": "w11_elementi"
  },
  {
   "tipo": "errore",
   "no": "«`flex: 1` e `flex-grow: 1` sono la stessa cosa.»",
   "si": "`flex: 1` mette anche la **base a 0**: gli elementi diventano larghi uguali. `flex-grow: 1` lascia la base `auto`: divide solo lo spazio avanzato e gli elementi restano diversi."
  },
  {
   "tipo": "errore",
   "no": "«Un testo lungo sta sempre nel suo riquadro.»",
   "si": "Un elemento flessibile non scende sotto la larghezza del suo contenuto più lungo: una parola o un URL lunghissimi lo fanno sporgere. Serve `min-width: 0` (e magari `overflow-wrap: anywhere`)."
  },
  {
   "tipo": "sezione",
   "num": "7.1",
   "titolo": "Schemi ricorrenti (centrare · barra di navigazione · card affiancate · footer in fondo)",
   "sotto": "Quattro schemi coprono quasi tutti i casi: centrare, barra di navigazione, card affiancate, footer in fondo.",
   "foto": {
    "src": "assets/immagini/atmosfera/11-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "schema",
   "titolo": "Quattro schemi ricorrenti",
   "sel": "#s11_schemi"
  },
  {
   "tipo": "errore",
   "no": "«`align-items: center` centra in orizzontale.»",
   "si": "`align-items` lavora sull’**asse trasversale**: con `row` centra in **verticale**. In orizzontale (asse principale) centra `justify-content: center`."
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "Grid",
   "sotto": "Disegnare righe e colonne e collocare gli elementi: Grid.",
   "foto": {
    "src": "assets/immagini/atmosfera/c12.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Una galleria di foto: su computer quattro colonne, su tablet due, su telefono una. Quante media query servono?",
   "risposta": "**Nessuna**: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` sceglie da sola quante colonne ci stanno."
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "L’idea (righe e colonne)",
   "sotto": "Grid dispone gli elementi in due direzioni insieme, su righe e colonne.",
   "foto": {
    "src": "assets/immagini/atmosfera/12-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Righe e colonne",
   "msg": "Prima la griglia, poi gli elementi nelle caselle",
   "punti": [
    [
     "grid-3x3",
     "`display: grid` sul **contenitore**: i figli diretti vanno nelle celle"
    ],
    [
     "separator-vertical",
     "**Linee** numerate da 1: tre colonne hanno quattro linee"
    ],
    [
     "columns-3",
     "**Traccia**: lo spazio tra due linee, una riga o una colonna"
    ],
    [
     "square",
     "**Cella**: l’incrocio tra una riga e una colonna"
    ],
    [
     "rectangle-horizontal",
     "**Area**: un rettangolo di più celle"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Linee, tracce, celle, aree",
   "sel": "#s12_idea"
  },
  {
   "tipo": "errore",
   "no": "«`display: grid` va messo sugli elementi da mettere in griglia.»",
   "si": "Va sul **contenitore**, come `display: flex`: sono i suoi figli diretti a diventare elementi della griglia."
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "Definire la griglia (grid-template-columns · fr · repeat() · minmax() · auto-fit · gap)",
   "sotto": "Le colonne si definiscono con grid-template-columns; fr è una frazione dello spazio libero e auto-fit adatta il numero di colonne.",
   "foto": {
    "src": "assets/immagini/atmosfera/12-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "In una griglia a 3 colonne metto 4 elementi. Che fine fa il quarto?",
   "risposta": "Va a capo in una **nuova riga**, nella prima colonna: la griglia crea le righe che servono da sola (griglia implicita)."
  },
  {
   "tipo": "tessere",
   "titolo": "Definire le colonne",
   "msg": "grid-template-columns: una misura per colonna",
   "tessere": [
    [
     "divide",
     "`fr`",
     "frazione dello spazio libero, non una percentuale"
    ],
    [
     "repeat",
     "`repeat(3, 1fr)`",
     "ripete la stessa misura"
    ],
    [
     "ruler",
     "`minmax(200px, 1fr)`",
     "almeno 200px, al massimo una frazione"
    ],
    [
     "layout-grid",
     "`auto-fit`",
     "quante colonne ci stanno, senza media query"
    ]
   ],
   "nota": "Elementi in più → righe nuove da sole (griglia implicita, `grid-auto-rows`)"
  },
  {
   "tipo": "codice",
   "titolo": "La galleria che si adatta",
   "html": "<span class=\"k\">.galleria </span>{\n<span class=\"a\">  display</span>:<span class=\"s\"> grid</span>;\n<span class=\"a\">  grid-template-columns</span>:<span class=\"s\"> repeat(auto-fit, minmax(200px, 1fr))</span>;\n<span class=\"a\">  gap</span>:<span class=\"s\"> 16px</span>;\n}"
  },
  {
   "tipo": "widget",
   "titolo": "Grid",
   "w": "w12_grid"
  },
  {
   "tipo": "errore",
   "no": "«`fr` è una percentuale.»",
   "si": "`fr` è una frazione dello **spazio libero**, cioè di quello che resta dopo le colonne fisse e i `gap`. Per questo, a differenza delle percentuali, non fa mai uscire la griglia dal contenitore."
  },
  {
   "tipo": "errore",
   "no": "«`auto-fit` e `auto-fill` sono uguali.»",
   "si": "Con molti elementi sì. Con pochi, `auto-fill` lascia **colonne vuote** in fondo, `auto-fit` le chiude e **allarga gli elementi** a tutta la larghezza."
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "Posizionare gli elementi (grid-column · grid-row · span · grid-template-areas)",
   "sotto": "grid-column e grid-row indicano da quale linea a quale; grid-template-areas disegna il layout con i nomi.",
   "foto": {
    "src": "assets/immagini/atmosfera/12-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Collocare gli elementi",
   "msg": "Da quale linea a quale linea",
   "punti": [
    [
     "move-horizontal",
     "`grid-column: 1 / 3`: dalla linea 1 alla 3, due colonne"
    ],
    [
     "stretch-horizontal",
     "`span 2`: occupa due tracce da dove capita"
    ],
    [
     "arrow-right-to-line",
     "`1 / -1`: fino all’ultima linea, tutta la larghezza"
    ],
    [
     "pencil-ruler",
     "`grid-template-areas`: il layout **disegnato** con i nomi"
    ],
    [
     "smartphone",
     "Sul telefono si ridisegna la stringa, l’HTML non cambia"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Dal disegno al layout",
   "w": "w12_aree"
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "Allineamento (justify-items · align-items · place-items)",
   "sotto": "justify-items e align-items allineano gli elementi dentro le celle, justify-content e align-content la griglia nel contenitore.",
   "foto": {
    "src": "assets/immagini/atmosfera/12-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Due livelli di allineamento",
   "msg": "Dentro la cella o la griglia intera",
   "a": {
    "icona": "square",
    "titolo": "Dentro la cella",
    "righe": [
     "• `justify-items`: orizzontale",
     "• `align-items`: verticale",
     "• `place-items` le scrive insieme",
     "• un elemento solo: `justify-self`, `align-self`"
    ]
   },
   "b": {
    "icona": "grid-3x3",
    "titolo": "La griglia nel contenitore",
    "righe": [
     "• quando le tracce sono più piccole",
     "• `justify-content`, `align-content`",
     "• scorciatoia `place-content`"
    ]
   }
  },
  {
   "tipo": "schema",
   "titolo": "place-items: quattro valori",
   "sel": "#s12_allinea"
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "Differenza tra Flexbox e Grid",
   "sotto": "Flexbox lavora in una direzione partendo dal contenuto, Grid in due partendo dalla struttura; si combinano.",
   "foto": {
    "src": "assets/immagini/atmosfera/12-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Flexbox e Grid a confronto",
   "righe": [
    [
     "",
     "Flexbox",
     "Grid"
    ],
    [
     "Dimensioni",
     "una: una riga **o** una colonna (con `wrap`, righe indipendenti)",
     "due: righe **e** colonne insieme"
    ],
    [
     "Punto di partenza",
     "il contenuto: le misure nascono dagli elementi",
     "la struttura: le misure nascono dalla griglia"
    ],
    [
     "Allineamento tra righe",
     "ogni riga va per conto suo",
     "le colonne restano **allineate** in tutte le righe"
    ],
    [
     "Quando usarlo",
     "barre di navigazione, pulsanti, una fila di card, centrare",
     "l’impaginazione della pagina, gallerie, moduli a colonne"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Righe indipendenti o colonne allineate",
   "w": "w12_confronto"
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Responsive design",
   "sotto": "Una pagina per tutti gli schermi: viewport, media query, layout fluidi, immagini.",
   "foto": {
    "src": "assets/immagini/atmosfera/c13.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Aprite lo stesso sito sul telefono e sul computer: che cosa cambia nell’impaginazione?",
   "risposta": "Il numero di colonne, il menu (spesso un’icona sul telefono), la grandezza dei titoli e delle immagini: è il **responsive design**."
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Perché serve (schermi diversi · meta viewport)",
   "sotto": "Il sito deve adattarsi a schermi diversi; senza meta viewport il telefono rimpicciolisce una pagina disegnata per un computer.",
   "foto": {
    "src": "assets/immagini/atmosfera/13-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Il sito, sul telefono, appare minuscolo, come una pagina da computer rimpicciolita. Nell’`&lt;head&gt;` manca una riga: quale?",
   "risposta": "Il **meta viewport**: `&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;`. Senza, il telefono impagina a circa 980px e rimpicciolisce."
  },
  {
   "tipo": "punti",
   "titolo": "Il meta viewport",
   "msg": "Senza, il telefono finge di essere largo 980px",
   "punti": [
    [
     "monitor-smartphone",
     "Una sola pagina per telefono, tablet e computer: **responsive design**"
    ],
    [
     "zoom-out",
     "Senza indicazioni il telefono impagina a ~980px e **rimpicciolisce**"
    ],
    [
     "code",
     "`width=device-width`: usa la larghezza **vera** dello schermo"
    ],
    [
     "scan",
     "`initial-scale=1`: niente ingrandimento all’apertura"
    ],
    [
     "ruler",
     "I breakpoint si scelgono dove **il contenuto** si rompe"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "La riga del meta viewport",
   "html": "<span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"viewport\"</span> <span class=\"a\">content</span>=<span class=\"s\">\"width=device-width, initial-scale=1\"</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "widget",
   "titolo": "Con e senza meta viewport",
   "w": "w13_viewport"
  },
  {
   "tipo": "errore",
   "no": "«Il meta viewport non serve se ho scritto il CSS responsive.»",
   "si": "Senza meta viewport il telefono finge di essere largo 980px: le media query per gli schermi piccoli **non scattano** e la pagina viene rimpicciolita. È la prima riga da scrivere."
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Mobile first contro desktop first",
   "sotto": "Mobile first parte dallo schermo piccolo e con min-width aggiunge regole; desktop first fa l’inverso con max-width.",
   "foto": {
    "src": "assets/immagini/atmosfera/13-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "In mobile first scrivo `@media (min-width: 768px) { … }`. Da quale larghezza valgono quelle regole?",
   "risposta": "Da **768px in su**: `min-width` vuol dire «la finestra è larga almeno 768px». Sotto, valgono solo le regole di base."
  },
  {
   "tipo": "confronto",
   "titolo": "Mobile first e desktop first",
   "msg": "Stesso risultato, direzione opposta",
   "a": {
    "icona": "smartphone",
    "titolo": "Mobile first",
    "tono": "buono",
    "righe": [
     "• base: lo schermo **piccolo**",
     "• `min-width`: «da qui **in su**»",
     "• si **aggiungono** colonne",
     "• oggi è la scelta consigliata"
    ]
   },
   "b": {
    "icona": "monitor",
    "titolo": "Desktop first",
    "righe": [
     "• base: lo schermo **grande**",
     "• `max-width`: «fino a qui»",
     "• si **tolgono** colonne",
     "• tipico dei siti più vecchi"
    ]
   }
  },
  {
   "tipo": "widget",
   "titolo": "Stesso risultato, regole diverse",
   "w": "w13_mobile"
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Media queries (larghezza · orientamento · breakpoint)",
   "sotto": "Una media query applica le sue regole solo quando la condizione è vera; i breakpoint si scelgono dove il contenuto si rompe.",
   "foto": {
    "src": "assets/immagini/atmosfera/13-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le media query",
   "msg": "Regole che valgono solo se la condizione è vera",
   "punti": [
    [
     "brackets",
     "`@media (condizione) { regole }`"
    ],
    [
     "move-horizontal",
     "`min-width`: almeno · `max-width`: al massimo"
    ],
    [
     "link",
     "`and` unisce due condizioni; `orientation` guarda l’orientamento"
    ],
    [
     "list-ordered",
     "Nessuna specificità in più: vanno **in fondo** al foglio"
    ],
    [
     "ruler",
     "576 · 768 · 992 · 1200 (Bootstrap): solo un punto di partenza"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Come si scrive una media query",
   "html": "<span class=\"c\">/* base: una colonna */</span>\n<span class=\"k\">.corsi </span>{<span class=\"a\"> display</span>:<span class=\"s\"> grid</span>;<span class=\"a\"> gap</span>:<span class=\"s\"> 16px</span>; }\n\n<span class=\"k\">@media (min-width: 768px) </span>{\n<span class=\"k\">  .corsi </span>{<span class=\"a\"> grid-template-columns</span>:<span class=\"s\"> 1fr 1fr</span>; }\n}\n\n<span class=\"k\">@media (min-width: 768px) and (orientation: landscape) </span>{\n<span class=\"k\">  .testata </span>{<span class=\"a\"> height</span>:<span class=\"s\"> 30vh</span>; }\n}"
  },
  {
   "tipo": "widget",
   "titolo": "Le media query in azione",
   "w": "w13_media"
  },
  {
   "tipo": "errore",
   "no": "«`@media (min-width: 768px)` vale per gli schermi sotto i 768px.»",
   "si": "`min-width: 768px` vuol dire «larghezza **almeno** 768px»: vale da 768 **in su**. Per «fino a 767px» si scrive `max-width: 767px`."
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Layout fluidi (percentuali · Flexbox e Grid · clamp())",
   "sotto": "Il responsive non è solo media queries: percentuali, Flexbox, Grid con auto-fit e clamp() adattano il layout senza breakpoint.",
   "foto": {
    "src": "assets/immagini/atmosfera/13-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Tre modi di adattarsi",
   "righe": [
    [
     "Approccio",
     "Come funziona",
     "Esempio"
    ],
    [
     "**fluido**",
     "misure relative alla finestra o al contenitore: crescono e calano con lei",
     "`width: 90%; max-width: 1100px;` · `font-size: clamp(1.5rem, 4vw, 3rem);`"
    ],
    [
     "**flessibile**",
     "Flexbox e Grid decidono da soli quanti elementi stanno in una riga",
     "`flex: 1 1 220px` con `flex-wrap: wrap` · `repeat(auto-fit, minmax(220px, 1fr))`"
    ],
    [
     "**a punti di rottura**",
     "le media query cambiano il layout oltre una certa larghezza",
     "`@media (min-width: 768px) { … }` per passare da una a due colonne"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il responsive si fa solo con le media query.»",
   "si": "Percentuali, `max-width`, Flexbox con `wrap`, Grid con `auto-fit` e `clamp()` adattano il layout **senza breakpoint**. Le media query servono per i cambiamenti che non si possono ottenere così."
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Immagini responsive (srcset · sizes · picture)",
   "sotto": "srcset e sizes fanno scegliere al browser il file in base alla larghezza, picture cambia immagine o formato a certe condizioni.",
   "foto": {
    "src": "assets/immagini/atmosfera/13-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "srcset e sizes",
   "msg": "Più file, sceglie il browser",
   "punti": [
    [
     "images",
     "`srcset`: i file con la loro larghezza vera (`480w`, `800w`…)"
    ],
    [
     "ruler",
     "`sizes`: quanto sarà larga l’immagine nella pagina"
    ],
    [
     "calculator",
     "Pixel che servono = larghezza nella pagina × densità dello schermo"
    ],
    [
     "check",
     "Il browser prende il **file più piccolo che basta** (scelta indicativa)"
    ],
    [
     "image",
     "`&lt;picture&gt;`: un’immagine o un formato **diversi** a certe condizioni"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "srcset e sizes",
   "html": "<span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"robot-800.jpg\"</span>\n     <span class=\"a\">srcset</span>=<span class=\"s\">\"robot-480.jpg 480w,\n             robot-800.jpg 800w,\n             robot-1600.jpg 1600w\"</span>\n     <span class=\"a\">sizes</span>=<span class=\"s\">\"(min-width: 800px) 50vw, 100vw\"</span>\n     <span class=\"a\">alt</span>=<span class=\"s\">\"Il robot del club\"</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "widget",
   "titolo": "Quale file sceglie il browser?",
   "w": "w13_srcset"
  },
  {
   "tipo": "codice",
   "titolo": "picture",
   "html": "<span class=\"k\">&lt;picture</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;source</span> <span class=\"a\">media</span>=<span class=\"s\">\"(min-width: 800px)\"</span> <span class=\"a\">srcset</span>=<span class=\"s\">\"robot-largo.jpg\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;source</span> <span class=\"a\">type</span>=<span class=\"s\">\"image/avif\"</span> <span class=\"a\">srcset</span>=<span class=\"s\">\"robot.avif\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"robot.jpg\"</span> <span class=\"a\">alt</span>=<span class=\"s\">\"Il robot del club\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/picture</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "sezione",
   "num": "7.4",
   "titolo": "Trasformazioni, transizioni, animazioni",
   "sotto": "Muovere le cose con il CSS: transform, transition, animation.",
   "foto": {
    "src": "assets/immagini/atmosfera/c14.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Passate il mouse su un pulsante di un sito ben fatto: cambia colore di colpo o con un passaggio morbido? Chi fa quel passaggio?",
   "risposta": "Una **transition**: il browser calcola i colori intermedi e il cambiamento dura una frazione di secondo."
  },
  {
   "tipo": "sezione",
   "num": "7.4",
   "titolo": "transform (translate · rotate · scale · skew · transform-origin)",
   "sotto": "transform cambia l’aspetto di un elemento senza spostare i vicini; l’ordine delle funzioni conta.",
   "foto": {
    "src": "assets/immagini/atmosfera/14-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Le funzioni di transform",
   "msg": "Muovere la scatola senza disturbare i vicini",
   "tessere": [
    [
     "move",
     "`translate()`",
     "sposta; in % rispetto all’elemento"
    ],
    [
     "rotate-cw",
     "`rotate()`",
     "ruota, in `deg` o `turn`"
    ],
    [
     "maximize",
     "`scale()`",
     "ingrandisce o rimpicciolisce"
    ],
    [
     "italic",
     "`skew()`",
     "inclina in un parallelogramma"
    ]
   ],
   "nota": "`transform-origin` è il punto fisso; l’ordine delle funzioni conta"
  },
  {
   "tipo": "widget",
   "titolo": "transform",
   "w": "w14_transform"
  },
  {
   "tipo": "errore",
   "no": "«`transform` sposta anche gli elementi vicini.»",
   "si": "Per l’impaginazione l’elemento resta **dov’era**: i vicini non si muovono e, se serve, l’elemento trasformato si sovrappone a loro. Per spostare davvero i vicini servono margini, Flexbox o Grid."
  },
  {
   "tipo": "sezione",
   "num": "7.4",
   "titolo": "transition",
   "sotto": "transition interpola il passaggio tra due stati; va scritta nello stato base.",
   "foto": {
    "src": "assets/immagini/atmosfera/14-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "transition",
   "msg": "Dal valore vecchio al nuovo, con i passaggi in mezzo",
   "punti": [
    [
     "list",
     "Quattro parti: **proprietà**, **durata**, **funzione**, **ritardo**"
    ],
    [
     "activity",
     "`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`: come procede"
    ],
    [
     "home",
     "Va nello **stato base**: vale all’entrata e all’uscita"
    ],
    [
     "ban",
     "`display` non si interpola: per le dissolvenze `opacity`"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Una transizione sul pulsante",
   "html": "<span class=\"k\">.bottone </span>{\n<span class=\"a\">  background-color</span>:<span class=\"s\"> #0f8d80</span>;\n<span class=\"a\">  transition</span>:<span class=\"s\"> background-color 0.3s ease-out,</span>\n<span class=\"s\">              transform 0.3s ease-out</span>;\n}\n<span class=\"k\">.bottone:hover </span>{\n<span class=\"a\">  background-color</span>:<span class=\"s\"> #0a6f66</span>;\n<span class=\"a\">  transform</span>:<span class=\"s\"> translateY(-3px)</span>;\n}"
  },
  {
   "tipo": "widget",
   "titolo": "transition",
   "w": "w14_transition"
  },
  {
   "tipo": "errore",
   "no": "«Basta scrivere `transition` in `:hover`.»",
   "si": "Così la transizione vale solo **all’entrata**: all’uscita lo stato base non ha `transition` e il ritorno è istantaneo. Va scritta nello **stato base**."
  },
  {
   "tipo": "errore",
   "no": "«`display: none` si anima con `transition`.»",
   "si": "`display` non si interpola: passa da un valore all’altro di colpo. Per una dissolvenza si animano `opacity` e `visibility`."
  },
  {
   "tipo": "sezione",
   "num": "7.4",
   "titolo": "@keyframes e animation",
   "sotto": "@keyframes definisce i passi di un’animazione e animation li applica.",
   "foto": {
    "src": "assets/immagini/atmosfera/14-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "@keyframes e animation",
   "msg": "Più tappe, anche da sola e ripetuta",
   "punti": [
    [
     "film",
     "`@keyframes nome { 0% {…} 50% {…} 100% {…} }`: le tappe"
    ],
    [
     "play",
     "`animation: nome 1.2s ease-in-out`: la applica a un elemento"
    ],
    [
     "repeat",
     "`iteration-count`, `direction: alternate`: ripetere e tornare"
    ],
    [
     "pin",
     "`fill-mode: forwards`: resta all’ultimo fotogramma"
    ],
    [
     "pause",
     "`play-state: paused`: in pausa"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "@keyframes e animation",
   "html": "<span class=\"k\">@keyframes sali </span>{\n<span class=\"k\">  0%   </span>{<span class=\"a\"> transform</span>:<span class=\"s\"> translateY(0)</span>;<span class=\"a\">     background</span>:<span class=\"s\"> #2f6fd6</span>; }\n<span class=\"k\">  50%  </span>{<span class=\"a\"> transform</span>:<span class=\"s\"> translateY(-60px)</span>;<span class=\"a\"> background</span>:<span class=\"s\"> #2f9e44</span>; }\n<span class=\"k\">  100% </span>{<span class=\"a\"> transform</span>:<span class=\"s\"> translateY(-90px)</span>;<span class=\"a\"> background</span>:<span class=\"s\"> #e9a313</span>; }\n}\n<span class=\"k\">.box </span>{\n<span class=\"a\">  animation</span>:<span class=\"s\"> sali 1.2s ease-in-out</span>;\n}"
  },
  {
   "tipo": "tabella",
   "titolo": "Le proprietà di animation",
   "righe": [
    [
     "Proprietà",
     "Che cosa dice",
     "Esempio"
    ],
    [
     "`animation-name`",
     "il nome dei `@keyframes`",
     "`sali`"
    ],
    [
     "`animation-duration`",
     "quanto dura un giro",
     "`1.2s`"
    ],
    [
     "`animation-timing-function`",
     "come procede nel tempo",
     "`ease-in-out`"
    ],
    [
     "`animation-delay`",
     "quanto aspetta prima di partire",
     "`0.5s`"
    ],
    [
     "`animation-iteration-count`",
     "quante volte si ripete",
     "`3`, `infinite`"
    ],
    [
     "`animation-direction`",
     "il verso di ogni giro",
     "`alternate` (avanti e indietro)"
    ],
    [
     "`animation-fill-mode`",
     "che cosa resta prima e dopo",
     "`forwards` (resta all’ultimo fotogramma)"
    ],
    [
     "`animation-play-state`",
     "in corso o in pausa",
     "`paused`"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "@keyframes passo per passo",
   "w": "w14_keyframes"
  },
  {
   "tipo": "errore",
   "no": "«Finita l’animazione, l’elemento resta nello stato finale.»",
   "si": "Finita l’animazione, l’elemento **torna allo stato iniziale** (quello del suo CSS). Per farlo restare all’ultimo fotogramma serve `animation-fill-mode: forwards`."
  },
  {
   "tipo": "sezione",
   "num": "7.4",
   "titolo": "Quando animare e quando no (prestazioni · accessibilità)",
   "sotto": "transform e opacity si animano a basso costo, width, height, top e left ricalcolano l’impaginazione.",
   "foto": {
    "src": "assets/immagini/atmosfera/14-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Per far scorrere un riquadro verso destra, conviene animare `left` o `transform: translateX()`?",
   "risposta": "`transform: translateX()`: non ricalcola l’impaginazione a ogni fotogramma e resta fluido anche sui telefoni. `left` sposta davvero la scatola e costringe a rifare l’impaginazione."
  },
  {
   "tipo": "punti",
   "titolo": "Animare con giudizio",
   "msg": "Leggere per il browser, sopportabili per chi guarda",
   "punti": [
    [
     "zap",
     "`transform` e `opacity`: solo composizione, fluide"
    ],
    [
     "snail",
     "`width`, `height`, `top`, `left`: impaginazione a ogni fotogramma"
    ],
    [
     "hand",
     "WCAG: ciò che si muove **oltre 5 secondi** si deve poter fermare"
    ],
    [
     "triangle-alert",
     "Mai più di **3 lampeggi al secondo**"
    ],
    [
     "accessibility",
     "`prefers-reduced-motion`: rispettare chi chiede meno movimento"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Che cosa animare",
   "righe": [
    [
     "Conviene animare",
     "Perché",
     "Meglio evitare",
     "Perché"
    ],
    [
     "`transform`",
     "sposta, ruota, ingrandisce senza toccare l’impaginazione",
     "`width`, `height`",
     "ogni fotogramma ricalcola l’impaginazione di tutta la zona"
    ],
    [
     "`opacity`",
     "cambia solo la composizione degli strati",
     "`top`, `left`, `margin`",
     "spostano davvero la scatola: i vicini vanno ricalcolati"
    ],
    [
     "`background-color`, `color`",
     "costano un nuovo disegno, ma non l’impaginazione",
     "`box-shadow` grandi, `filter: blur()`",
     "ogni fotogramma ridipinge molti pixel"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Rispettare «riduci movimento»",
   "html": "<span class=\"k\">@media (prefers-reduced-motion: reduce) </span>{\n<span class=\"k\">  * </span>{<span class=\"a\"> animation</span>:<span class=\"s\"> none !important</span>;<span class=\"a\"> transition</span>:<span class=\"s\"> none !important</span>; }\n}"
  },
  {
   "tipo": "sezione",
   "num": "7.5",
   "titolo": "Tabelle e moduli",
   "sotto": "Tabelle leggibili e moduli che aiutano chi li compila.",
   "foto": {
    "src": "assets/immagini/atmosfera/c15.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Aprite un modulo di iscrizione: i campi sono rossi prima ancora di aver scritto? Che effetto vi fa?",
   "risposta": "Sembra di aver già sbagliato. Il rosso dovrebbe comparire **dopo** l’interazione: è la differenza tra `:invalid` e `:user-invalid`."
  },
  {
   "tipo": "sezione",
   "num": "7.5",
   "titolo": "Stile delle tabelle (border-collapse · righe a zebra · tabelle su schermo piccolo)",
   "sotto": "border-collapse fonde i bordi vicini; su schermo piccolo la tabella va avvolta in un contenitore che scorre.",
   "foto": {
    "src": "assets/immagini/atmosfera/15-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Stile delle tabelle",
   "msg": "Bordi fusi, righe a zebra, uno scorrimento solo per lei",
   "punti": [
    [
     "table",
     "`separate` (iniziale): ogni cella la sua cornice, bordi **doppi**"
    ],
    [
     "merge",
     "`border-collapse: collapse`: i bordi vicini diventano **uno**"
    ],
    [
     "rows-3",
     "`tbody tr:nth-child(even)`: righe a zebra"
    ],
    [
     "smartphone",
     "Sul telefono: contenitore con `overflow-x: auto`"
    ],
    [
     "ruler",
     "`table-layout: fixed`, `caption-side: bottom`: casi particolari"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Una tabella leggibile",
   "html": "<span class=\"k\">table </span>{\n<span class=\"a\">  border-collapse</span>:<span class=\"s\"> collapse</span>;\n<span class=\"a\">  width</span>:<span class=\"s\"> 100%</span>;\n}\n<span class=\"k\">th, td </span>{\n<span class=\"a\">  border</span>:<span class=\"s\"> 1px solid #9aa8b6</span>;\n<span class=\"a\">  padding</span>:<span class=\"s\"> 6px 10px</span>;\n<span class=\"a\">  text-align</span>:<span class=\"s\"> left</span>;\n}\n<span class=\"k\">tbody tr:nth-child(even) </span>{\n<span class=\"a\">  background</span>:<span class=\"s\"> #dcefeb</span>;\n}"
  },
  {
   "tipo": "widget",
   "titolo": "Quattro ritocchi a una tabella",
   "w": "w15_tabella"
  },
  {
   "tipo": "errore",
   "no": "«Con il bordo sulle celle ho un bordo solo tra una cella e l’altra.»",
   "si": "Con il valore iniziale `border-collapse: separate` ogni cella ha la sua cornice: i bordi vicini sono **due**. Per fonderli serve `border-collapse: collapse`."
  },
  {
   "tipo": "sezione",
   "num": "7.5",
   "titolo": "Stile dei moduli (input · label · :focus · :valid e :invalid · accent-color)",
   "sotto": "Un campo obbligatorio vuoto è già non valido all’apertura: per colorare solo dopo l’interazione c’è :user-invalid.",
   "foto": {
    "src": "assets/immagini/atmosfera/15-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Metto un bordo rosso con `:invalid` ai campi `required` di un modulo di iscrizione. Com’è il modulo appena si apre la pagina?",
   "risposta": "**Già tutto rosso**: i campi obbligatori vuoti sono subito non validi. Per colorarli solo dopo che l’utente ha interagito serve `:user-invalid`."
  },
  {
   "tipo": "punti",
   "titolo": "Gli stati dei campi",
   "msg": "Una pseudo-classe per ogni stato",
   "punti": [
    [
     "text-cursor-input",
     "`:focus`, `:focus-visible`: il campo attivo"
    ],
    [
     "ban",
     "`:disabled`, `:checked`, `:required`"
    ],
    [
     "circle-x",
     "`:valid`, `:invalid`: **subito**, anche prima di scrivere"
    ],
    [
     "user-check",
     "`:user-valid`, `:user-invalid`: **dopo** l’interazione"
    ],
    [
     "palette",
     "`accent-color` per caselle e cursori; `font: inherit` per i campi"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": ":invalid e :user-invalid",
   "w": "w15_moduli"
  },
  {
   "tipo": "codice",
   "titolo": "Un modulo curato",
   "html": "<span class=\"k\">input, button, select, textarea </span>{\n<span class=\"a\">  font</span>:<span class=\"s\"> inherit</span>;\n}\n<span class=\"k\">input:focus-visible </span>{\n<span class=\"a\">  outline</span>:<span class=\"s\"> 3px solid #e9a313</span>;\n<span class=\"a\">  outline-offset</span>:<span class=\"s\"> 2px</span>;\n}\n<span class=\"k\">input:user-invalid </span>{\n<span class=\"a\">  border-color</span>:<span class=\"s\"> #c0392b</span>;\n}\n<span class=\"k\">form </span>{\n<span class=\"a\">  accent-color</span>:<span class=\"s\"> #0f8d80</span>;\n}"
  },
  {
   "tipo": "errore",
   "no": "«`:invalid` colora di rosso il campo solo dopo che ho scritto.»",
   "si": "`:invalid` vale **subito**: un campo obbligatorio vuoto è già non valido all’apertura. Solo dopo l’interazione colora `:user-invalid`."
  },
  {
   "tipo": "errore",
   "no": "«I campi del modulo usano automaticamente il font della pagina.»",
   "si": "`input`, `button`, `select` e `textarea` **non ereditano** il carattere: hanno quello del sistema. Serve `font: inherit`."
  },
  {
   "tipo": "sezione",
   "num": "7.6",
   "titolo": "Framework CSS: Bootstrap e Tailwind",
   "sotto": "Usare il CSS scritto da altri: Bootstrap e Tailwind.",
   "foto": {
    "src": "assets/immagini/atmosfera/c16.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Dovete fare in un pomeriggio il sito di iscrizione al club: con pulsanti, menu e moduli già belli. Scrivete tutto il CSS da zero?",
   "risposta": "Si può partire da un **framework CSS**, che offre tutto già pronto attraverso le sue classi."
  },
  {
   "tipo": "sezione",
   "num": "7.6",
   "titolo": "Che cos’è un framework CSS e come si collega",
   "sotto": "Un framework è CSS già scritto che si usa con le sue classi, collegato con un link o con una build.",
   "foto": {
    "src": "assets/immagini/atmosfera/16-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Framework CSS",
   "msg": "CSS già scritto, da usare con le sue classi",
   "a": {
    "icona": "zap",
    "titolo": "Vantaggi",
    "tono": "buono",
    "righe": [
     "• **velocità**: un’interfaccia in pochi minuti",
     "• **coerenza**: stessi pulsanti ovunque",
     "• responsive e accessibile già pronto"
    ]
   },
   "b": {
    "icona": "link",
    "titolo": "Prezzo",
    "righe": [
     "• **dipendenza** da un vocabolario e da una versione",
     "• siti che si assomigliano",
     "• il CSS va capito comunque"
    ]
   },
   "verdetto": "Si collega con un `&lt;link&gt;` a una CDN (prove) o con una build (progetti veri)"
  },
  {
   "tipo": "schema",
   "titolo": "Lo stesso pulsante in tre modi",
   "sel": "#s16_bottone"
  },
  {
   "tipo": "errore",
   "no": "«Con un framework non serve conoscere il CSS.»",
   "si": "Il framework è CSS: per personalizzarlo, capire perché qualcosa non funziona o andare oltre i suoi componenti servono **cascata, specificità, box model, Flexbox e Grid**. Senza, si è in balia delle classi."
  },
  {
   "tipo": "sezione",
   "num": "7.6",
   "titolo": "Bootstrap",
   "sotto": "Bootstrap offre componenti pronti e una griglia a 12 colonne.",
   "foto": {
    "src": "assets/immagini/atmosfera/16-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Bootstrap",
   "msg": "Componenti pronti e una griglia a 12 colonne",
   "punti": [
    [
     "component",
     "Componenti: `btn btn-primary`, `card`, `navbar`, finestre, avvisi"
    ],
    [
     "columns-3",
     "Griglia: `container` › `row` › `col-md-6` (6 colonne su 12)"
    ],
    [
     "smartphone",
     "Mobile first: `md` vuol dire «da 768px in su»"
    ],
    [
     "tag",
     "Stabile: **5.3.8** · Bootstrap 6 in *alpha* dall’8 ottobre 2026"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "La documentazione di Bootstrap",
   "foto": [
    {
     "src": "assets/immagini/bootstrap-varianti.png",
     "tit": "",
     "alt": "La pagina Buttons della documentazione di Bootstrap 5.3 con i pulsanti colorati e il codice HTML"
    }
   ]
  },
  {
   "tipo": "codice",
   "titolo": "La griglia di Bootstrap",
   "html": "<span class=\"k\">&lt;div</span> <span class=\"a\">class</span>=<span class=\"s\">\"container\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;div</span> <span class=\"a\">class</span>=<span class=\"s\">\"row\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;div</span> <span class=\"a\">class</span>=<span class=\"s\">\"col-md-6\"</span><span class=\"k\">&gt;</span>Arduino<span class=\"k\">&lt;/div</span><span class=\"k\">&gt;</span>   <span class=\"c\">&lt;!-- metà riga da 768px in su --&gt;</span>\n    <span class=\"k\">&lt;div</span> <span class=\"a\">class</span>=<span class=\"s\">\"col-md-6\"</span><span class=\"k\">&gt;</span>Stampa 3D<span class=\"k\">&lt;/div</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/div</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/div</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "sezione",
   "num": "7.6",
   "titolo": "Tailwind",
   "sotto": "Tailwind è utility-first: classi piccole e componibili direttamente nell’HTML.",
   "foto": {
    "src": "assets/immagini/atmosfera/16-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Tailwind",
   "msg": "Utility-first: una classe, una regola",
   "punti": [
    [
     "blocks",
     "`p-4`, `text-center`, `bg-blue-500`: ogni classe fa una cosa sola"
    ],
    [
     "smartphone",
     "`md:flex`: le varianti per breakpoint e stati nella classe"
    ],
    [
     "palette",
     "Versione 4: personalizzazione in CSS con `@theme`"
    ],
    [
     "flask-conical",
     "Script dalla CDN solo per **prove**; nei siti veri una **build**"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Tailwind dalla CDN",
   "foto": [
    {
     "src": "assets/immagini/tailwind-play-cdn.png",
     "tit": "",
     "alt": "La pagina Play CDN della documentazione di Tailwind CSS con il codice HTML di esempio"
    }
   ]
  },
  {
   "tipo": "sezione",
   "num": "7.6",
   "titolo": "Differenza tra Bootstrap e Tailwind",
   "sotto": "Bootstrap dà componenti pronti da personalizzare, Tailwind mattoni per costruirli.",
   "foto": {
    "src": "assets/immagini/atmosfera/16-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Bootstrap e Tailwind a confronto",
   "righe": [
    [
     "",
     "Bootstrap",
     "Tailwind"
    ],
    [
     "Approccio",
     "componenti pronti, classi che descrivono **che cosa è** (`btn`, `card`)",
     "*utility-first*: classi che descrivono **come appare** (`p-4`, `bg-blue-500`)"
    ],
    [
     "Componenti pronti",
     "sì, anche con JavaScript (menu a tendina, finestre)",
     "no: si costruiscono (o si prendono da librerie a parte)"
    ],
    [
     "Personalizzazione",
     "variabili e temi; uscire dallo stile Bootstrap costa fatica",
     "totale, nel blocco `@theme`; ogni sito ha il suo aspetto"
    ],
    [
     "Peso",
     "il foglio intero, se non si fa una build",
     "con la build, solo le classi usate: pochi kB"
    ],
    [
     "Curva di apprendimento",
     "bassa: si copia un componente dalla documentazione",
     "più ripida all’inizio: tante classi da imparare"
    ],
    [
     "Limiti",
     "siti che si assomigliano tutti",
     "HTML pieno di classi, difficile da leggere"
    ],
    [
     "In comune",
     "dipendenza da una versione: con quella nuova qualcosa cambia",
     "idem"
    ]
   ]
  }
 ]
};
