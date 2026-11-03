window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "06",
 "titolo": "CSS: base",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "CSS: base",
   "sotto": "Sfondi, testo, scatole e posizione: l’aspetto di ogni elemento.",
   "indice": [
    [
     "6.1",
     "Sfondi, bordi e ombre"
    ],
    [
     "6.2",
     "Testo, link e liste"
    ],
    [
     "6.3",
     "Il box model"
    ],
    [
     "6.4",
     "Flusso normale e display"
    ],
    [
     "6.5",
     "Position e float"
    ]
   ],
   "foto": {
    "src": "assets/immagini/atmosfera/c6.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Sfondi, bordi e ombre",
   "sotto": "Sfondi, gradienti, bordi e ombre.",
   "foto": {
    "src": "assets/immagini/atmosfera/c6.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Su una foto di sfondo molto chiara un titolo bianco non si legge. Come si può rimediare senza cambiare la foto?",
   "risposta": "Mettendo **sopra la foto un gradiente scuro e trasparente**: con più sfondi separati da virgole, il primo sta sopra."
  },
  {
   "tipo": "gettoni",
   "titolo": "Le immagini di sfondo",
   "gettoni": [
    [
     "maximize",
     "`background-size`"
    ],
    [
     "move",
     "`background-position`"
    ],
    [
     "repeat",
     "`background-repeat`"
    ]
   ],
   "perche": [
    [
     "maximize",
     "Dimensione",
     "`auto` grandezza vera · `cover` riempie e taglia · `contain` tutta, con i vuoti"
    ],
    [
     "move",
     "Posizione",
     "`center`, `right bottom`, `20% 50%`"
    ],
    [
     "repeat",
     "Ripetizione",
     "`repeat` (iniziale), `repeat-x`, `repeat-y`, `no-repeat`"
    ],
    [
     "layers",
     "Più sfondi",
     "separati da virgole: **il primo sta sopra**"
    ]
   ],
   "foto": {
    "src": "assets/immagini/arduino.jpg",
    "tit": "Scheda Arduino",
    "alt": "Una scheda Arduino Uno"
   },
   "occhiello": "Immagini di sfondo"
  },
  {
   "tipo": "widget",
   "titolo": "La stessa foto di sfondo, sei impostazioni",
   "w": "w6_sfondo",
   "occhiello": "Immagini di sfondo"
  },
  {
   "tipo": "casi",
   "titolo": "Sfondo o immagine nell’HTML?",
   "casi": [
    {
     "titolo": "`background-image`",
     "testo": "niente testo alternativo: gli screen reader non la annunciano, in stampa spesso sparisce",
     "tono": "no",
     "etichetta": "decorazione"
    },
    {
     "titolo": "`&lt;img alt=\"…\"&gt;`",
     "testo": "la foto di un prodotto, un grafico, un ritratto: vanno nell’HTML",
     "tono": "si",
     "etichetta": "contenuto"
    }
   ],
   "occhiello": "Immagini di sfondo"
  },
  {
   "tipo": "errore",
   "no": "«L’immagine importante la metto come sfondo con il CSS.»",
   "si": "Uno sfondo **non ha testo alternativo**: chi usa uno screen reader non sa che c’è. Le immagini che portano contenuto vanno nell’HTML con `&lt;img alt=\"…\"&gt;`."
  },
  {
   "tipo": "errore",
   "no": "«`background-size: cover` mostra tutta l’immagine.»",
   "si": "`cover` riempie l’elemento e **taglia** ciò che non entra. Per vedere tutta l’immagine serve `contain`, che però può lasciare dei vuoti."
  },
  {
   "tipo": "definizione",
   "titolo": "I gradienti",
   "frase": "Un **gradiente** è una sfumatura tra due o più colori: per il CSS è un’**immagine generata dal browser**, non un colore.",
   "parti": [
    [
     "move-right",
     "`linear-gradient()`: lungo una retta"
    ],
    [
     "circle-dot",
     "`radial-gradient()`: dal centro verso l’esterno"
    ],
    [
     "chart-pie",
     "`conic-gradient()`: intorno al centro"
    ]
   ],
   "nota": "Si scrive in `background-image`, mai in `background-color`.",
   "occhiello": "Gradienti"
  },
  {
   "tipo": "anatomia",
   "titolo": "Un taglio netto",
   "codice": "linear-gradient(90deg, green 33%, white 33% 66%, red 66%)",
   "parti": [
    [
     "90deg",
     "direzione",
     "verso destra"
    ],
    [
     "green 33%",
     "verde",
     "fino al 33%"
    ],
    [
     "white 33% 66%",
     "bianco",
     "comincia dove finisce il verde"
    ],
    [
     "red 66%",
     "rosso",
     "dal 66% in fondo"
    ]
   ],
   "effetto": "Stessa posizione per due colori = nessuna sfumatura",
   "occhiello": "Gradienti"
  },
  {
   "tipo": "widget",
   "titolo": "Costruisci un gradiente",
   "w": "w6_gradiente",
   "occhiello": "Gradienti"
  },
  {
   "tipo": "errore",
   "no": "«`background-color: linear-gradient(…)` funziona.»",
   "si": "Un gradiente è un’**immagine**, non un colore: in `background-color` la dichiarazione non è valida e viene scartata. Si scrive in `background-image` o in `background`."
  },
  {
   "tipo": "anatomia",
   "titolo": "Il bordo",
   "codice": "border: 2px solid red;",
   "parti": [
    [
     "2px",
     "spessore",
     ""
    ],
    [
     "solid",
     "stile",
     "obbligatorio: l’iniziale è `none`"
    ],
    [
     "red",
     "colore",
     "se manca: `currentColor`"
    ]
   ],
   "effetto": "Un lato solo: `border-top`, `border-right`, `border-bottom`, `border-left`",
   "occhiello": "Bordi e angoli"
  },
  {
   "tipo": "schema",
   "titolo": "Gli angoli arrotondati",
   "sel": "#s6_radius",
   "occhiello": "Bordi e angoli"
  },
  {
   "tipo": "casi",
   "titolo": "border e outline",
   "casi": [
    {
     "titolo": "`border`",
     "testo": "fa parte della scatola: **occupa spazio** e allontana i vicini",
     "icona": "square",
     "nota": "anche su un lato solo"
    },
    {
     "titolo": "`outline`",
     "testo": "fuori e sopra: **non occupa spazio**, non sposta nulla",
     "icona": "scan",
     "nota": "segnala il fuoco: non toglierlo senza sostituirlo"
    }
   ],
   "occhiello": "Bordi e angoli"
  },
  {
   "tipo": "widget",
   "titolo": "border o outline?",
   "w": "w6_bordo",
   "occhiello": "Bordi e angoli"
  },
  {
   "tipo": "errore",
   "no": "«`outline` è un bordo come gli altri.»",
   "si": "`outline` **non occupa spazio** e non sposta i vicini, sta sopra e fuori dall’elemento e non si può dare a un lato solo. Serve soprattutto a segnalare il fuoco."
  },
  {
   "tipo": "anatomia",
   "titolo": "L’ombra",
   "codice": "box-shadow: 0 8px 24px 0 rgb(0 0 0 / 25%);",
   "parti": [
    [
     "0 8px",
     "x e y",
     "lo spostamento"
    ],
    [
     "24px",
     "sfocatura",
     "0 = netta"
    ],
    [
     " 0 ",
     "diffusione",
     "la allarga o la restringe",
     1
    ],
    [
     "rgb(0 0 0 / 25%)",
     "colore",
     "di solito un nero trasparente"
    ]
   ],
   "effetto": "`inset`: dentro · più ombre con le virgole · non sposta nulla",
   "occhiello": "Ombre"
  },
  {
   "tipo": "widget",
   "titolo": "Costruisci l’ombra",
   "w": "w6_ombra",
   "occhiello": "Ombre"
  },
  {
   "tipo": "errore",
   "no": "«Il terzo valore di `box-shadow` è la distanza dell’ombra.»",
   "si": "Il terzo valore è la **sfocatura**: con 0 l’ombra ha i bordi netti. La distanza la danno i primi due valori, gli spostamenti x e y."
  },
  {
   "tipo": "flusso",
   "titolo": "Un’immagine nel contenitore",
   "blocchi": [
    {
     "titolo": "Grandezza naturale",
     "testo": "se è più larga del contenitore, **ne esce**",
     "icona": "image",
     "tono": "no"
    },
    {
     "titolo": "La regola di sempre",
     "icona": "minimize",
     "html": "<span class=\"k\">img </span>{\n<span class=\"a\">  max-width</span>:<span class=\"s\"> 100%</span>;\n<span class=\"a\">  height</span>:<span class=\"s\"> auto</span>;\n}"
    },
    {
     "titolo": "Mai più larga del contenitore",
     "testo": "l’altezza segue, senza deformare",
     "icona": "circle-check",
     "tono": "si"
    }
   ],
   "riga": "`width` e `height` nell’`&lt;img&gt;`: il browser riserva lo spazio **prima** che la foto arrivi.",
   "occhiello": "Immagini nella pagina"
  },
  {
   "tipo": "casi",
   "titolo": "object-fit in un riquadro",
   "casi": [
    {
     "titolo": "`fill`",
     "testo": "il valore iniziale: riempie **deformando**",
     "icona": "stretch-horizontal",
     "tono": "no"
    },
    {
     "titolo": "`cover`",
     "testo": "riempie, mantiene le proporzioni e **taglia**",
     "icona": "crop"
    },
    {
     "titolo": "`contain`",
     "testo": "mostra **tutta** l’immagine, con i vuoti",
     "icona": "frame"
    }
   ],
   "msg": "Come `background-size`, ma per le immagini di contenuto",
   "occhiello": "Immagini nella pagina"
  },
  {
   "tipo": "widget",
   "titolo": "Una foto in un riquadro",
   "w": "w6_objectfit",
   "occhiello": "Immagini nella pagina"
  },
  {
   "tipo": "tabella",
   "titolo": "object-fit e background-size",
   "righe": [
    [
     "",
     "`object-fit`",
     "`background-size`"
    ],
    [
     "si usa per",
     "immagini di contenuto (`&lt;img&gt;`, `&lt;video&gt;`)",
     "immagini di sfondo (CSS)"
    ],
    [
     "riempire e tagliare",
     "`cover`",
     "`cover`"
    ],
    [
     "tutta, con i vuoti",
     "`contain`",
     "`contain`"
    ],
    [
     "valore iniziale",
     "`fill`: deforma",
     "`auto`: grandezza vera"
    ],
    [
     "testo alternativo",
     "sì, con `alt`",
     "no"
    ]
   ],
   "occhiello": "Immagini nella pagina"
  },
  {
   "tipo": "errore",
   "no": "«`width` e `height` fissi in CSS non danneggiano la foto.»",
   "si": "Se le proporzioni non sono quelle della foto, `object-fit: fill` la **deforma**. Si fissa una sola misura con `height: auto`, oppure si aggiunge `object-fit: cover`."
  },
  {
   "tipo": "domanda",
   "testo": "Una foto 4:3 con `width: 200px; height: 200px`. Come appare?",
   "risposta": "**Deformata**, schiacciata in un quadrato, perché il valore iniziale di `object-fit` è `fill`. Servono `height: auto` oppure `object-fit: cover`."
  },
  {
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Testo, link e liste",
   "sotto": "Caratteri, spazi, link ed elenchi.",
   "foto": {
    "src": "assets/immagini/atmosfera/c7.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Due computer aprono la stessa pagina: su uno il titolo è in Gill Sans, sull’altro in Arial. Com’è possibile?",
   "risposta": "Il browser usa i font **installati** sul computer di chi legge: dove Gill Sans manca, passa al font successivo della lista."
  },
  {
   "tipo": "domanda",
   "testo": "Scrivo `font-family: \"Gill Sans\"`. Tutti quelli che aprono la pagina vedranno Gill Sans?",
   "risposta": "No: solo chi ha quel font **installato**. Gli altri vedranno il carattere predefinito del browser. Serve una lista che finisca con una famiglia generica: `\"Gill Sans\", \"Segoe UI\", sans-serif`."
  },
  {
   "tipo": "flusso",
   "titolo": "Una lista in ordine di preferenza",
   "blocchi": [
    {
     "titolo": "`\"Gill Sans\"`",
     "testo": "installato? lo usa",
     "icona": "type"
    },
    {
     "titolo": "`\"Segoe UI\"`",
     "testo": "altrimenti il successivo",
     "icona": "type"
    },
    {
     "titolo": "`sans-serif`",
     "testo": "la **famiglia generica**: c’è su ogni computer",
     "icona": "shield-check",
     "tono": "fine"
    }
   ],
   "frecce": [
    "non c’è",
    "non c’è"
   ],
   "riga": "Il browser usa il **primo font installato** sul computer di chi legge; nomi con spazi tra virgolette.",
   "occhiello": "Famiglie di caratteri"
  },
  {
   "tipo": "schema",
   "titolo": "Con e senza grazie",
   "sel": "#s7_grazie",
   "occhiello": "Famiglie di caratteri"
  },
  {
   "tipo": "casi",
   "titolo": "Le famiglie generiche",
   "casi": [
    {
     "titolo": "`serif`",
     "testo": "con le grazie: Times, Georgia",
     "icona": "book-open",
     "nota": "i libri"
    },
    {
     "titolo": "`sans-serif`",
     "testo": "senza grazie: Arial, Helvetica, Segoe UI",
     "icona": "monitor",
     "nota": "gli schermi"
    },
    {
     "titolo": "`monospace`",
     "testo": "larghezza fissa: Consolas, Courier",
     "icona": "code",
     "nota": "il codice"
    }
   ],
   "msg": "E poi `cursive`, `fantasy`, `system-ui`",
   "occhiello": "Famiglie di caratteri"
  },
  {
   "tipo": "widget",
   "titolo": "Quale font userà il browser?",
   "w": "w7_fontstack",
   "occhiello": "Famiglie di caratteri"
  },
  {
   "tipo": "errore",
   "no": "«Scrivo `font-family: \"Gill Sans\"` e tutti vedranno Gill Sans.»",
   "si": "Il browser usa solo i font **installati sul computer di chi legge** (o scaricati con `@font-face`, più avanti). Senza alternative e senza famiglia generica, chi non ce l’ha vede il carattere predefinito."
  },
  {
   "tipo": "anatomia",
   "titolo": "La regola @font-face",
   "codice": "@font-face {\n  font-family: \"Titoli\";\n  src: url(\"font/titoli.woff2\");\n  font-weight: 700;\n  font-display: swap;\n}",
   "parti": [
    [
     "\"Titoli\"",
     "il nome",
     "lo scegliamo noi"
    ],
    [
     "url(\"font/titoli.woff2\")",
     "il file",
     "formato WOFF2"
    ],
    [
     "700",
     "il peso",
     "ogni peso è un file in più"
    ],
    [
     "swap",
     "nel frattempo",
     "subito il font di riserva"
    ]
   ],
   "msg": "Un font che chi legge non ha, scaricato con la pagina",
   "occhiello": "Font web"
  },
  {
   "tipo": "flusso",
   "titolo": "Mentre il font arriva",
   "blocchi": [
    {
     "titolo": "Pagina aperta",
     "testo": "il file del font non c’è ancora",
     "icona": "clock"
    },
    {
     "titolo": "Font di riserva",
     "testo": "con `swap` il testo si legge subito",
     "icona": "type",
     "tono": "si"
    },
    {
     "titolo": "Font scelto",
     "testo": "arriva il file e il browser lo sostituisce",
     "icona": "circle-check"
    }
   ],
   "riga": "Senza indicazioni, per qualche istante il testo resta **nascosto**.",
   "occhiello": "Font web"
  },
  {
   "tipo": "widget",
   "titolo": "Mentre il font sta arrivando",
   "w": "w7_swap",
   "occhiello": "Font web"
  },
  {
   "tipo": "storia",
   "titolo": "Un caso di cronaca",
   "anno": "2022",
   "icona": "scale",
   "punti": [
    [
     "scale",
     "20 gennaio, tribunale di Monaco di Baviera: **100 euro** a un visitatore di un sito"
    ],
    [
     "globe",
     "Il sito caricava un font da Google Fonts e trasmetteva il suo **indirizzo IP** senza consenso"
    ],
    [
     "server",
     "Per questo molti siti europei **ospitano i font in locale**, come le licenze permettono"
    ]
   ],
   "occhiello": "Font web"
  },
  {
   "tipo": "errore",
   "no": "«Più font e più pesi carico, più la pagina è bella.»",
   "si": "Ogni font e ogni peso è un **file da scaricare**: la pagina diventa più lenta, soprattutto sul telefono. Due famiglie e pochi pesi bastano quasi sempre."
  },
  {
   "tipo": "errore",
   "no": "«Incorporare Google Fonts è solo un link, non cambia nulla per la privacy.»",
   "si": "Il browser di chi visita il sito si collega ai server di Google e gli **trasmette l’indirizzo IP**. Per questo molti siti ospitano i font in locale."
  },
  {
   "tipo": "schema",
   "titolo": "La scala dei pesi",
   "sel": "#s7_pesi",
   "occhiello": "Dimensione, peso e stile"
  },
  {
   "tipo": "casi",
   "titolo": "Il peso che manca",
   "casi": [
    {
     "titolo": "Il font ce l’ha",
     "testo": "`font-weight: 900` → il nero più nero",
     "icona": "circle-check",
     "tono": "si"
    },
    {
     "titolo": "Il font non ce l’ha",
     "testo": "il browser usa il peso **più vicino**, o lo **simula** ispessendo le lettere",
     "icona": "circle-alert",
     "tono": "forse"
    }
   ],
   "msg": "Da 100 a 900: `normal` = 400, `bold` = 700",
   "occhiello": "Dimensione, peso e stile"
  },
  {
   "tipo": "casi",
   "titolo": "italic e oblique",
   "casi": [
    {
     "titolo": "`italic`",
     "testo": "il **corsivo vero**, disegnato apposta: forme diverse (la «a»)",
     "icona": "italic"
    },
    {
     "titolo": "`oblique`",
     "testo": "il carattere normale **inclinato**",
     "icona": "slash"
    }
   ],
   "occhiello": "Dimensione, peso e stile"
  },
  {
   "tipo": "widget",
   "titolo": "Dimensione, peso e stile",
   "w": "w7_testo",
   "occhiello": "Dimensione, peso e stile"
  },
  {
   "tipo": "errore",
   "no": "«`font-weight: 900` rende più nero qualunque font.»",
   "si": "Funziona solo se il font **ha quel peso**. Altrimenti il browser usa il peso più vicino (spesso il 700) o lo simula."
  },
  {
   "tipo": "gettoni",
   "titolo": "Spazi nel testo",
   "gettoni": [],
   "perche": [
    [
     "between-horizontal-start",
     "`line-height`",
     "l’interlinea, **senza unità**: tra 1,4 e 1,6 per il testo continuo"
    ],
    [
     "letter-text",
     "`letter-spacing` · `word-spacing`",
     "tra le lettere e tra le parole, con misura"
    ],
    [
     "indent-increase",
     "`text-indent`",
     "il rientro della prima riga, come nei libri"
    ],
    [
     "accessibility",
     "WCAG 1.4.12",
     "con l’interlinea a 1,5 il testo non deve rompersi: niente altezze fisse"
    ]
   ],
   "occhiello": "Spaziatura e allineamento"
  },
  {
   "tipo": "casi",
   "titolo": "text-align allinea il contenuto",
   "casi": [
    {
     "titolo": "Centrare il paragrafo nella pagina",
     "testo": "la scatola resta larga e ferma dov’era",
     "tono": "no",
     "etichetta": "non fa questo"
    },
    {
     "titolo": "Centrare le righe nel paragrafo",
     "testo": "per il blocco: `margin: 0 auto` o Flexbox",
     "tono": "si",
     "etichetta": "fa questo"
    }
   ],
   "msg": "`left`, `right`, `center`, `justify` · con `justify` aiuta `hyphens: auto`",
   "occhiello": "Spaziatura e allineamento"
  },
  {
   "tipo": "widget",
   "titolo": "Spaziatura e allineamento",
   "w": "w7_spazio",
   "occhiello": "Spaziatura e allineamento"
  },
  {
   "tipo": "errore",
   "no": "«`text-align: center` centra il paragrafo nella pagina.»",
   "si": "Centra le **righe di testo** dentro il paragrafo; la scatola del paragrafo non si sposta. Per centrare un blocco servono `margin: 0 auto` con una larghezza, o Flexbox."
  },
  {
   "tipo": "errore",
   "no": "«`line-height: 20px` è come `line-height: 1.5`.»",
   "si": "Con l’unità il valore è **fisso** e viene ereditato già calcolato: un titolo grande ha le righe sovrapposte. Senza unità si moltiplica per il testo di ogni elemento."
  },
  {
   "tipo": "gettoni",
   "titolo": "Decorazioni e trasformazioni",
   "gettoni": [],
   "perche": [
    [
     "underline",
     "`text-decoration`",
     "una linea sul testo; `text-underline-offset` la allontana dalle lettere"
    ],
    [
     "case-upper",
     "`text-transform`",
     "cambia l’**aspetto**, non il testo: chi copia trova le lettere dell’HTML"
    ],
    [
     "wrap-text",
     "`white-space`",
     "che cosa fare di spazi e a capo dell’HTML"
    ],
    [
     "scissors",
     "`overflow-wrap: anywhere`",
     "spezza le parole lunghissime, come un indirizzo web"
    ]
   ],
   "occhiello": "Decorazioni e trasformazioni"
  },
  {
   "tipo": "flusso",
   "titolo": "Tre dichiarazioni per i puntini",
   "blocchi": [
    {
     "titolo": "Su una riga",
     "icona": "move-horizontal",
     "html": "<span class=\"k\">white-space: nowrap</span>;"
    },
    {
     "titolo": "Nascondi ciò che avanza",
     "icona": "eye-off",
     "html": "<span class=\"k\">overflow: hidden</span>;"
    },
    {
     "titolo": "I puntini",
     "icona": "ellipsis",
     "tono": "si",
     "html": "<span class=\"k\">text-overflow: ellipsis</span>;"
    }
   ],
   "riga": "`text-overflow` **da solo non fa niente**.",
   "occhiello": "Decorazioni e trasformazioni"
  },
  {
   "tipo": "widget",
   "titolo": "Tre dichiarazioni per i puntini",
   "w": "w7_ellipsis",
   "occhiello": "Decorazioni e trasformazioni"
  },
  {
   "tipo": "tabella",
   "titolo": "I valori di white-space",
   "righe": [
    [
     "`white-space`",
     "Spazi multipli",
     "A capo dell’HTML",
     "Va a capo da solo"
    ],
    [
     "`normal`",
     "uniti in uno",
     "ignorati",
     "sì"
    ],
    [
     "`nowrap`",
     "uniti in uno",
     "ignorati",
     "**no**"
    ],
    [
     "`pre`",
     "conservati",
     "conservati",
     "no"
    ],
    [
     "`pre-wrap`",
     "conservati",
     "conservati",
     "sì"
    ],
    [
     "`pre-line`",
     "uniti in uno",
     "conservati",
     "sì"
    ]
   ],
   "occhiello": "Decorazioni e trasformazioni"
  },
  {
   "tipo": "errore",
   "no": "«`text-overflow: ellipsis` basta per avere i puntini.»",
   "si": "Servono anche `white-space: nowrap`, perché il testo non vada a capo, e `overflow: hidden`, perché la parte in eccesso sia tagliata."
  },
  {
   "tipo": "flusso",
   "titolo": "L’ordine LVHA",
   "blocchi": [
    {
     "titolo": "`:link`",
     "testo": "non visitato",
     "icona": "link"
    },
    {
     "titolo": "`:visited`",
     "testo": "già visitato",
     "icona": "history"
    },
    {
     "titolo": "`:hover`",
     "testo": "il mouse sopra",
     "icona": "mouse-pointer"
    },
    {
     "titolo": "`:active`",
     "testo": "mentre lo si preme",
     "icona": "pointer"
    }
   ],
   "riga": "Stessa specificità: vince l’ultima. In inglese si ricorda con *LoVe HAte*.",
   "occhiello": "Stile dei link"
  },
  {
   "tipo": "widget",
   "titolo": "L’ordine delle regole dei link",
   "w": "w7_lvha",
   "occhiello": "Stile dei link"
  },
  {
   "tipo": "gettoni",
   "titolo": "Un limite e due attenzioni",
   "gettoni": [],
   "perche": [
    [
     "eye-off",
     "`:visited` accetta solo colori",
     "privacy: un sito non deve scoprire, misurando la pagina, dove sei stato"
    ],
    [
     "keyboard",
     "L’`outline` del fuoco",
     "non toglierlo senza un altro segno ben visibile"
    ],
    [
     "underline",
     "Non solo il colore",
     "chi non distingue i colori non vede il link: si tiene la sottolineatura"
    ]
   ],
   "occhiello": "Stile dei link"
  },
  {
   "tipo": "errore",
   "no": "«L’ordine delle regole sui link non conta.»",
   "si": "Le pseudo-classi dei link hanno la **stessa specificità**: a parità vince l’ultima. Con un ordine diverso da LVHA alcuni stati non si vedono mai."
  },
  {
   "tipo": "errore",
   "no": "«`a:visited { display: none; }` nasconde i link già visitati.»",
   "si": "Per privacy `:visited` accetta **solo proprietà di colore**: la dichiarazione viene ignorata."
  },
  {
   "tipo": "errore",
   "no": "«`outline: none` toglie solo un contorno fastidioso.»",
   "si": "Toglie l’unico segno che mostra **dove si trova chi usa la tastiera**. Se proprio si toglie, va sostituito con un altro segno ben visibile."
  },
  {
   "tipo": "domanda",
   "testo": "Un link già visitato, con il mouse sopra. Prima c’è `a:hover { color: red; }`, poi `a:visited { color: purple; }`. Di che colore è?",
   "risposta": "**Viola**: le due regole hanno la stessa specificità e vince l’ultima. Per questo si scrive nell’ordine LVHA."
  },
  {
   "tipo": "anatomia",
   "titolo": "Simbolo e rientro",
   "codice": "ul {\n  list-style: none;\n  padding-left: 0;\n}",
   "parti": [
    [
     "list-style: none;",
     "toglie il simbolo",
     "`disc`, `square`, `decimal`… o `none`"
    ],
    [
     "padding-left: 0;",
     "toglie il rientro",
     "il browser dà circa 40px a `ul` e `ol`"
    ]
   ],
   "msg": "Per una barra di navigazione servono tutte e due",
   "occhiello": "Liste"
  },
  {
   "tipo": "schema",
   "titolo": "Il rientro degli elenchi",
   "sel": "#s7_rientro",
   "occhiello": "Liste"
  },
  {
   "tipo": "flusso",
   "titolo": "Numerare con un contatore",
   "blocchi": [
    {
     "titolo": "Crea",
     "icona": "rotate-ccw",
     "html": "<span class=\"k\">counter-reset</span>"
    },
    {
     "titolo": "Fai avanzare",
     "icona": "plus",
     "html": "<span class=\"k\">counter-increment</span>"
    },
    {
     "titolo": "Mostra",
     "icona": "hash",
     "tono": "si",
     "html": "<span class=\"k\">content: counter(…)</span>"
    }
   ],
   "riga": "Si numera anche ciò che non è un elenco, come i titoli; `::marker` colora il simbolo delle voci.",
   "occhiello": "Liste"
  },
  {
   "tipo": "widget",
   "titolo": "Numerare i titoli con un contatore",
   "w": "w7_contatori",
   "occhiello": "Liste"
  },
  {
   "tipo": "errore",
   "no": "«`list-style: none` toglie anche il rientro dell’elenco.»",
   "si": "Toglie solo il simbolo. Il rientro viene dal `padding-left` del browser: serve anche `padding-left: 0`."
  },
  {
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "Il box model",
   "sotto": "Contenuto, padding, bordo e margine: ogni elemento è una scatola.",
   "foto": {
    "src": "assets/immagini/atmosfera/c8.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Un link, una parola in grassetto, un’immagine: per il browser che forma hanno?",
   "risposta": "Sono tutti **scatole rettangolari**, con contenuto, padding, bordo e margine: è il box model."
  },
  {
   "tipo": "definizione",
   "titolo": "Il box model",
   "frase": "Per il browser **ogni elemento è una scatola rettangolare**, fatta di quattro strati dal centro verso l’esterno.",
   "parti": [
    [
     "type",
     "contenuto"
    ],
    [
     "square",
     "padding: spazio interno"
    ],
    [
     "square-dashed",
     "bordo: la cornice"
    ],
    [
     "move",
     "margine: spazio esterno"
    ]
   ],
   "nota": "Lo sfondo arriva fino al bordo; il margine è sempre **trasparente**.",
   "occhiello": "Content, padding, border, margin"
  },
  {
   "tipo": "widget",
   "titolo": "La scatola",
   "w": "w8_scatola",
   "occhiello": "Content, padding, border, margin"
  },
  {
   "tipo": "gettoni",
   "titolo": "Il box model nei DevTools",
   "gettoni": [
    [
     "move",
     "margine"
    ],
    [
     "square-dashed",
     "bordo"
    ],
    [
     "square",
     "padding"
    ],
    [
     "type",
     "contenuto"
    ]
   ],
   "perche": [
    [
     "move",
     "Arancione",
     "il margine"
    ],
    [
     "square-dashed",
     "Giallo",
     "il bordo (1px)"
    ],
    [
     "square",
     "Verde",
     "il padding (16px per lato)"
    ],
    [
     "type",
     "Azzurro",
     "il contenuto (140,531 × 28 px)"
    ]
   ],
   "foto": {
    "src": "assets/immagini/devtools-box-model.png",
    "tit": "Gli stessi colori evidenziano l’elemento nella pagina",
    "alt": "Il diagramma del box model nei DevTools di Chrome"
   },
   "occhiello": "Content, padding, border, margin"
  },
  {
   "tipo": "errore",
   "no": "«Il margine fa parte dello sfondo dell’elemento.»",
   "si": "Lo sfondo arriva fino al **bordo**. Il margine è sempre **trasparente**: lì si vede lo sfondo del genitore."
  },
  {
   "tipo": "casi",
   "titolo": "Larghezza e altezza",
   "casi": [
    {
     "titolo": "`width: auto`",
     "testo": "tutta la larghezza disponibile nel contenitore",
     "icona": "move-horizontal"
    },
    {
     "titolo": "`height: auto`",
     "testo": "l’altezza che serve al contenuto",
     "icona": "move-vertical"
    },
    {
     "titolo": "`max-width`",
     "testo": "si stringe sugli schermi piccoli, non si allarga troppo su quelli grandi",
     "icona": "arrow-left-right",
     "tono": "si"
    }
   ],
   "msg": "Di solito si lasciano `auto`; i limiti con `min-` e `max-`",
   "occhiello": "Larghezza e altezza"
  },
  {
   "tipo": "casi",
   "titolo": "height: 100%",
   "casi": [
    {
     "titolo": "`height: 100%`",
     "testo": "con il genitore `auto` la percentuale non ha niente su cui calcolarsi",
     "tono": "no",
     "etichetta": "ignorata"
    },
    {
     "titolo": "`min-height: 100vh`",
     "testo": "almeno alto quanto la finestra, e cresce se serve",
     "tono": "si",
     "etichetta": "funziona"
    }
   ],
   "occhiello": "Larghezza e altezza"
  },
  {
   "tipo": "widget",
   "titolo": "Quattro modi di dare la larghezza",
   "w": "w8_larghezze",
   "occhiello": "Larghezza e altezza"
  },
  {
   "tipo": "errore",
   "no": "«Con `width: 100%` e un padding l’elemento sta sempre nel contenitore.»",
   "si": "Con il `box-sizing` predefinito (`content-box`) il padding **si aggiunge** al 100%: l’elemento esce dal contenitore. Serve `box-sizing: border-box` (più avanti)."
  },
  {
   "tipo": "errore",
   "no": "«`height: 100%` fa riempire tutta la pagina.»",
   "si": "La percentuale dell’altezza funziona solo se il genitore ha un’**altezza definita**; altrimenti è ignorata. Per occupare almeno la finestra si usa `min-height: 100vh`."
  },
  {
   "tipo": "domanda",
   "testo": "Un `div` con `width: 200px; padding: 20px; border: 5px solid`. Quanto spazio occupa in orizzontale?",
   "risposta": "**250px**: con `content-box` padding (20 + 20) e bordo (5 + 5) si aggiungono ai 200px del contenuto."
  },
  {
   "tipo": "cifra",
   "titolo": "Che cosa misura width",
   "a": [
    "box",
    "`content-box`",
    "il predefinito: padding e bordo **si aggiungono**"
   ],
   "b": [
    "package",
    "`border-box`",
    "padding e bordo stanno **dentro**"
   ],
   "cifra": "250px contro 200px",
   "testo": "La stessa `width: 200px` con `padding: 20px` e un bordo di 5px: 200 + 40 + 10, oppure 200.",
   "cautela": "Per questo quasi tutti i fogli di stile cominciano con il reset di `box-sizing`.",
   "occhiello": "box-sizing: content-box contro border-box"
  },
  {
   "tipo": "widget",
   "titolo": "content-box o border-box?",
   "w": "w8_scatola2",
   "occhiello": "box-sizing: content-box contro border-box"
  },
  {
   "tipo": "codice",
   "titolo": "Il reset di box-sizing",
   "html": "<span class=\"k\">*, *::before, *::after </span>{\n<span class=\"a\">  box-sizing</span>:<span class=\"s\"> border-box</span>;\n}",
   "occhiello": "box-sizing: content-box contro border-box"
  },
  {
   "tipo": "errore",
   "no": "«Con `width: 200px` l’elemento occupa sempre 200px, anche con padding e bordo.»",
   "si": "Solo con `box-sizing: border-box`. Con il valore predefinito, `content-box`, padding e bordo **si aggiungono** ai 200px."
  },
  {
   "tipo": "domanda",
   "testo": "Un paragrafo con `margin-bottom: 20px`, sotto un paragrafo con `margin-top: 30px`. Quanti pixel li separano?",
   "risposta": "**30px**: i margini verticali si fondono e vale il più grande."
  },
  {
   "tipo": "casi",
   "titolo": "Margini che si fondono",
   "casi": [
    {
     "titolo": "Verticali, nel flusso normale",
     "testo": "20px e 30px tra due blocchi: distanza **30px**",
     "icona": "merge",
     "nota": "vale il più grande, non la somma"
    },
    {
     "titolo": "Orizzontali, o in flex e grid",
     "testo": "non si fondono mai: **si sommano**",
     "icona": "columns-2"
    }
   ],
   "occhiello": "Margini"
  },
  {
   "tipo": "widget",
   "titolo": "Margini che si fondono",
   "w": "w8_margini",
   "occhiello": "Margini"
  },
  {
   "tipo": "anatomia",
   "titolo": "Centrare un blocco",
   "codice": "margin: 0 auto;",
   "parti": [
    [
     "0",
     "sopra e sotto",
     ""
    ],
    [
     "auto",
     "destra e sinistra",
     "lo spazio libero diviso in parti uguali"
    ]
   ],
   "effetto": "Solo con una larghezza; in verticale `auto` vale zero",
   "occhiello": "Margini"
  },
  {
   "tipo": "schema",
   "titolo": "Margini negativi",
   "sel": "#s8_negativi",
   "occhiello": "Margini"
  },
  {
   "tipo": "errore",
   "no": "«`margin: auto` centra anche in verticale.»",
   "si": "Nel flusso normale `auto` in verticale vale **zero**: centra solo in orizzontale, e solo un blocco con una larghezza definita."
  },
  {
   "tipo": "errore",
   "no": "«Due blocchi affiancati con i margini orizzontali: i margini si fondono.»",
   "si": "Si fondono **solo i margini verticali** tra blocchi uno sopra l’altro. Quelli orizzontali si sommano sempre."
  },
  {
   "tipo": "domanda",
   "testo": "Due card una sopra l’altra, `margin-bottom: 24px` la prima e `margin-top: 24px` la seconda. Le metto in un contenitore con `display: flex; flex-direction: column`. La distanza cambia?",
   "risposta": "Sì: da **24px** (margini fusi) diventa **48px**, perché tra gli elementi di un contenitore flex i margini non si fondono e si sommano."
  },
  {
   "tipo": "schema",
   "titolo": "Padding e margine",
   "sel": "#s8_padmar",
   "occhiello": "Differenza tra margin e padding"
  },
  {
   "tipo": "tabella",
   "titolo": "Padding e margine a confronto",
   "righe": [
    [
     "",
     "Padding",
     "Margine"
    ],
    [
     "dove sta",
     "dentro il bordo",
     "fuori dal bordo"
    ],
    [
     "sfondo",
     "prende lo sfondo dell’elemento",
     "trasparente"
    ],
    [
     "area cliccabile",
     "ne fa parte (un link più comodo da toccare)",
     "non ne fa parte"
    ],
    [
     "si fonde con i vicini",
     "mai",
     "sì, in verticale nel flusso normale"
    ],
    [
     "valori negativi",
     "non ammessi",
     "ammessi"
    ]
   ],
   "occhiello": "Differenza tra margin e padding"
  },
  {
   "tipo": "errore",
   "no": "«Per staccare un elemento dal vicino uso il padding.»",
   "si": "Il padding allarga lo spazio **dentro** l’elemento (e il suo sfondo). Per allontanarlo dai vicini serve il **margine**."
  },
  {
   "tipo": "casi",
   "titolo": "overflow",
   "casi": [
    {
     "titolo": "`visible`",
     "testo": "il valore iniziale: il contenuto **esce** dalla scatola",
     "icona": "eye"
    },
    {
     "titolo": "`hidden`",
     "testo": "il contenuto in eccesso è **tagliato**",
     "icona": "scissors"
    },
    {
     "titolo": "`scroll`",
     "testo": "barre di scorrimento **sempre**",
     "icona": "scroll"
    },
    {
     "titolo": "`auto`",
     "testo": "barre **solo se servono**",
     "icona": "scan",
     "tono": "si"
    }
   ],
   "msg": "Il contenuto che non entra · `overflow-x: auto` per una tabella larga sul telefono",
   "occhiello": "overflow"
  },
  {
   "tipo": "widget",
   "titolo": "Che cosa succede al contenuto che non entra",
   "w": "w8_overflow",
   "occhiello": "overflow"
  },
  {
   "tipo": "errore",
   "no": "«`overflow: hidden` fa scorrere il contenuto.»",
   "si": "`hidden` lo **taglia**: la parte in eccesso non si vede e non si raggiunge. Per scorrere servono `auto` o `scroll`."
  },
  {
   "tipo": "errore",
   "no": "«`overflow: scroll` e `overflow: auto` sono uguali.»",
   "si": "`scroll` mostra le barre **sempre**, anche quando il contenuto entra; `auto` solo quando servono."
  },
  {
   "tipo": "sezione",
   "num": "6.4",
   "titolo": "Flusso normale e display",
   "sotto": "Blocchi, elementi in linea e il valore che li cambia: display.",
   "foto": {
    "src": "assets/immagini/atmosfera/c9.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Due paragrafi e una parola in grassetto: perché i paragrafi vanno a capo e la parola no?",
   "risposta": "Il browser dà a ogni tag un `display`: `p` è un **blocco** (va a capo), `strong` è **in linea** (scorre nella riga)."
  },
  {
   "tipo": "casi",
   "titolo": "Il flusso normale",
   "casi": [
    {
     "titolo": "Blocchi",
     "testo": "vanno a capo e occupano **tutta la larghezza** del contenitore",
     "icona": "rows-3",
     "nota": "`div`, `p`, `h1`, `ul`, `section`…"
    },
    {
     "titolo": "In linea",
     "testo": "scorrono nella riga come parole, larghi quanto il contenuto",
     "icona": "wrap-text",
     "nota": "`span`, `a`, `em`, `strong`, `code`"
    },
    {
     "titolo": "Sostituiti",
     "testo": "in linea, ma con **misure proprie**: accettano `width` e `height`",
     "icona": "image",
     "nota": "`img`, `input`, `button`, `video`"
    }
   ],
   "msg": "Gli elementi nell’ordine dell’HTML, in due modi",
   "occhiello": "Il flusso normale (blocco e in linea)"
  },
  {
   "tipo": "widget",
   "titolo": "Il browser mette in fila",
   "w": "w9_fila",
   "occhiello": "Il flusso normale (blocco e in linea)"
  },
  {
   "tipo": "schema",
   "titolo": "Blocchi impilati e elementi in linea che scorrono",
   "sel": "#s9_flusso",
   "occhiello": "Il flusso normale (blocco e in linea)"
  },
  {
   "tipo": "tabella",
   "titolo": "Chi è blocco e chi è in linea",
   "righe": [
    [
     "Comportamento",
     "Elementi"
    ],
    [
     "di blocco (`display: block`)",
     "`div`, `p`, `h1`…`h6`, `ul`, `ol`, `section`, `header`, `footer`, `nav`, `main`, `form`"
    ],
    [
     "in linea (`display: inline`)",
     "`span`, `a`, `em`, `strong`, `code`, `br`"
    ],
    [
     "in linea ma *sostituiti*",
     "`img`, `input`, `button`, `video`: stanno nella riga ma hanno **dimensioni proprie**"
    ]
   ],
   "occhiello": "Il flusso normale (blocco e in linea)"
  },
  {
   "tipo": "foto",
   "titolo": "Il display viene dal browser",
   "foto": [
    {
     "src": "assets/immagini/devtools-user-agent.png",
     "tit": "",
     "alt": "La scheda Styles dei DevTools di Chrome con la regola div display block del foglio di stile del browser"
    }
   ],
   "occhiello": "Il flusso normale (blocco e in linea)"
  },
  {
   "tipo": "errore",
   "no": "«Gli elementi vanno dove li metto io, senza un ordine.»",
   "si": "Nel flusso normale seguono **l’ordine del codice**: un elemento scritto dopo compare dopo, sotto (se è un blocco) o più avanti nella riga (se è in linea)."
  },
  {
   "tipo": "errore",
   "no": "«Un `div` è largo quanto il suo testo.»",
   "si": "Un blocco con `width: auto` occupa **tutta la larghezza del contenitore**, anche con una sola parola. Larghi quanto il contenuto sono gli elementi **in linea**."
  },
  {
   "tipo": "domanda",
   "testo": "Metto `width: 200px` su uno `&lt;span&gt;`. Quanto diventa largo?",
   "risposta": "**Quanto il suo contenuto**: uno `span` è in linea e gli elementi in linea ignorano `width` e `height`. Per dargli una larghezza serve `display: inline-block` o `block`."
  },
  {
   "tipo": "casi",
   "titolo": "I valori di display",
   "casi": [
    {
     "titolo": "`block`",
     "testo": "a capo, tutta la riga, **accetta tutte le misure**",
     "icona": "square"
    },
    {
     "titolo": "`inline`",
     "testo": "nella riga, **ignora** `width` e `height`",
     "icona": "type",
     "nota": "padding verticale: si vede, ma non sposta le righe"
    },
    {
     "titolo": "`inline-block`",
     "testo": "nella riga, ma **accetta le misure**",
     "icona": "layout-grid",
     "nota": "i pulsanti affiancati"
    },
    {
     "titolo": "`none`",
     "testo": "non esiste nell’impaginazione",
     "icona": "eye-off"
    }
   ],
   "msg": "Verso l’esterno: blocco o in linea",
   "occhiello": "display (block · inline · inline-block · none)"
  },
  {
   "tipo": "widget",
   "titolo": "display",
   "w": "w9_display",
   "occhiello": "display (block · inline · inline-block · none)"
  },
  {
   "tipo": "casi",
   "titolo": "Due spazi misteriosi",
   "casi": [
    {
     "titolo": "Tra due `inline-block`",
     "testo": "è lo **spazio tra i tag** nell’HTML, come tra due parole",
     "icona": "space",
     "nota": "tag attaccati, o Flexbox con `gap`"
    },
    {
     "titolo": "Sotto un’immagine",
     "testo": "l’`img` sta sulla **linea di base**: sotto resta lo spazio per g e p",
     "icona": "image",
     "nota": "`display: block` sull’immagine"
    }
   ],
   "msg": "Vengono dall’HTML, non dal CSS",
   "occhiello": "display (block · inline · inline-block · none)"
  },
  {
   "tipo": "errore",
   "no": "«Uno `span` con `width: 200px` diventa largo 200px.»",
   "si": "Gli elementi **in linea** ignorano `width` e `height`. Lo `span` resta largo quanto il testo, finché non gli si dà `display: inline-block` o `block`."
  },
  {
   "tipo": "errore",
   "no": "«`inline-block` e `block` sono uguali.»",
   "si": "Accettano tutti e due le misure, ma `block` va a capo e occupa tutta la riga, `inline-block` **resta nella riga**, largo quanto serve, accanto agli altri."
  },
  {
   "tipo": "errore",
   "no": "«Tra due `inline-block` c’è uno spazio che non ho messo: è un bug.»",
   "si": "È lo **spazio tra i tag nell’HTML**, che in linea vale come lo spazio tra due parole. Sparisce scrivendo i tag attaccati, o con Flexbox (`gap` al posto degli spazi)."
  },
  {
   "tipo": "errore",
   "no": "«Sotto la mia immagine c’è uno spazio: è un margine.»",
   "si": "L’immagine è **in linea** e si appoggia sulla linea di base del testo: sotto resta lo spazio per le lettere con la gamba. Con `display: block` sparisce."
  },
  {
   "tipo": "domanda",
   "testo": "Nascondo il secondo di tre paragrafi. Con `display: none` il terzo sale? E con `visibility: hidden`?",
   "risposta": "Con `display: none` **sale** e prende il posto del secondo; con `visibility: hidden` **resta dov’era** e al posto del secondo rimane un vuoto."
  },
  {
   "tipo": "widget",
   "titolo": "Quattro modi di nascondere B",
   "w": "w9_nascondi",
   "occhiello": "Differenza tra display: none e visibility: hidden"
  },
  {
   "tipo": "tabella",
   "titolo": "Quattro modi di nascondere",
   "righe": [
    [
     "",
     "Spazio occupato",
     "Cliccabile",
     "Letto dai lettori di schermo",
     "Un figlio può riapparire"
    ],
    [
     "`display: none`",
     "no",
     "no",
     "no",
     "no"
    ],
    [
     "`visibility: hidden`",
     "sì",
     "no",
     "no",
     "sì, con `visibility: visible`"
    ],
    [
     "`opacity: 0`",
     "sì",
     "**sì**",
     "sì",
     "no (l’opacità si moltiplica)"
    ],
    [
     "attributo `hidden`",
     "no",
     "no",
     "no",
     "no (ma un `display` nel CSS lo annulla)"
    ]
   ],
   "occhiello": "Differenza tra display: none e visibility: hidden"
  },
  {
   "tipo": "errore",
   "no": "«`display: none` e `visibility: hidden` sono la stessa cosa.»",
   "si": "Tutti e due nascondono, ma `display: none` **libera lo spazio** (i vicini si spostano), `visibility: hidden` lo **lascia occupato**."
  },
  {
   "tipo": "errore",
   "no": "«`opacity: 0` nasconde come `display: none`.»",
   "si": "Con `opacity: 0` l’elemento è solo trasparente: **occupa lo spazio**, si può ancora **cliccare** e i lettori di schermo lo leggono."
  },
  {
   "tipo": "sezione",
   "num": "6.5",
   "titolo": "Position e float",
   "sotto": "Togliere un elemento dal flusso: relative, absolute, fixed, sticky e i float.",
   "foto": {
    "src": "assets/immagini/atmosfera/c10.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Su un sito di notizie scorrete la pagina: il menu in alto resta lì, il banner dei cookie anche. Come fanno a non scorrere via?",
   "risposta": "Hanno `position: fixed` (o `sticky`): si collocano rispetto alla **finestra**, non alla pagina."
  },
  {
   "tipo": "domanda",
   "testo": "Un `div` con `position: absolute` sta dentro un genitore **senza** `position`. Rispetto a che cosa si colloca?",
   "risposta": "Al **più vicino antenato posizionato** (con `position` diverso da `static`). Se non c’è, alla **pagina**: il genitore, da solo, non basta."
  },
  {
   "tipo": "gettoni",
   "titolo": "I cinque valori di position",
   "gettoni": [],
   "perche": [
    [
     "minus",
     "`static`",
     "il valore iniziale: nel flusso; `top` e `left` non hanno effetto"
    ],
    [
     "move",
     "`relative`",
     "spostato rispetto al suo posto, che **resta occupato**"
    ],
    [
     "crosshair",
     "`absolute`",
     "fuori dal flusso, rispetto al più vicino **antenato posizionato**"
    ],
    [
     "pin",
     "`fixed`",
     "rispetto alla **finestra**: resta fermo quando si scorre"
    ],
    [
     "sticky-note",
     "`sticky`",
     "scorre, poi **si ferma** alla soglia, finché il genitore è visibile"
    ]
   ],
   "occhiello": "position (static · relative · absolute · fixed · sticky)"
  },
  {
   "tipo": "anatomia",
   "titolo": "Genitore relative, figlio absolute",
   "codice": ".card {\n  position: relative;\n}\n.card .etichetta {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}",
   "parti": [
    [
     "position: relative;",
     "il riferimento",
     "resta nel flusso, non si sposta"
    ],
    [
     "position: absolute;",
     "esce dal flusso",
     "si colloca rispetto alla card"
    ],
    [
     "top: 8px;",
     "dall’alto",
     "8px"
    ],
    [
     "right: 8px;",
     "da destra",
     "angolo in alto a destra"
    ]
   ],
   "msg": "Lo schema più usato",
   "occhiello": "position (static · relative · absolute · fixed · sticky)"
  },
  {
   "tipo": "widget",
   "titolo": "position",
   "w": "w10_position",
   "occhiello": "position (static · relative · absolute · fixed · sticky)"
  },
  {
   "tipo": "widget",
   "titolo": "Tre barre mentre la pagina scorre",
   "w": "w10_scroll",
   "occhiello": "position (static · relative · absolute · fixed · sticky)"
  },
  {
   "tipo": "casi",
   "titolo": "Quando fixed non è fisso",
   "casi": [
    {
     "titolo": "Nessun antenato con `transform`",
     "testo": "l’elemento `fixed` si colloca rispetto alla **finestra**",
     "icona": "pin",
     "tono": "si"
    },
    {
     "titolo": "Un antenato con `transform` o `filter`",
     "testo": "il riferimento diventa **quell’antenato**: l’elemento scorre con lui",
     "icona": "triangle-alert",
     "tono": "forse"
    }
   ],
   "msg": "Se una barra fissa non resta ferma, è la prima cosa da controllare",
   "occhiello": "position (static · relative · absolute · fixed · sticky)"
  },
  {
   "tipo": "errore",
   "no": "«`position: relative` sposta l’elemento e libera il suo posto.»",
   "si": "Con `relative` l’elemento si vede spostato, ma il suo **posto originale resta occupato**: i vicini non si muovono. A liberarlo è `absolute`."
  },
  {
   "tipo": "errore",
   "no": "«`absolute` si posiziona rispetto al genitore.»",
   "si": "Rispetto al **più vicino antenato posizionato**. Il genitore è il riferimento solo se ha un `position` diverso da `static` (di solito `relative`)."
  },
  {
   "tipo": "errore",
   "no": "«`top` funziona su ogni elemento.»",
   "si": "`top`, `right`, `bottom` e `left` funzionano solo sugli elementi **posizionati**. Su un elemento `static` non hanno effetto."
  },
  {
   "tipo": "errore",
   "no": "«`sticky` funziona anche senza `top`.»",
   "si": "Senza una **soglia** (`top`, `bottom`…) l’elemento sticky si comporta come `relative` e scorre via con la pagina."
  },
  {
   "tipo": "tabella",
   "titolo": "I quattro valori a confronto",
   "righe": [
    [
     "Valore",
     "Riferimento",
     "Spazio nel flusso",
     "Allo scroll",
     "Uso tipico"
    ],
    [
     "`relative`",
     "la sua posizione normale",
     "resta occupato",
     "scorre con la pagina",
     "riferimento per i figli `absolute`, piccoli ritocchi"
    ],
    [
     "`absolute`",
     "il più vicino antenato posizionato (o la pagina)",
     "liberato",
     "scorre con il riferimento",
     "icona o etichetta sull’angolo di un’immagine o di una card"
    ],
    [
     "`fixed`",
     "la finestra",
     "liberato",
     "**resta fermo**",
     "barra in alto, pulsante «torna su», banner dei cookie"
    ],
    [
     "`sticky`",
     "la finestra, dentro il genitore",
     "resta occupato",
     "scorre, poi **si ferma** alla soglia",
     "intestazione di una tabella o di una sezione"
    ]
   ],
   "occhiello": "Differenza tra relative, absolute, fixed e sticky"
  },
  {
   "tipo": "domanda",
   "testo": "A ha `z-index: 100` dentro un contenitore con `z-index: 1`; B ha `z-index: 5` dentro un contenitore con `z-index: 2`. Chi sta sopra?",
   "risposta": "**B**. I contenitori creano due contesti: si confrontano prima loro (2 batte 1), e tutto il contenuto del secondo sta sopra tutto il contenuto del primo."
  },
  {
   "tipo": "definizione",
   "titolo": "Il contesto di impilamento",
   "frase": "`z-index` ordina gli elementi sovrapposti, ma vale solo **dentro il proprio contesto di impilamento**: una pila di fogli chiusa in una cartellina.",
   "parti": [
    [
     "layers",
     "posizionato con `z-index` ≠ `auto`"
    ],
    [
     "blend",
     "`opacity` minore di 1"
    ],
    [
     "rotate-cw",
     "`transform` o `filter`"
    ]
   ],
   "nota": "Si confrontano **prima i contesti**, poi i figli dentro ciascuno; a parità vince chi viene dopo nel codice.",
   "occhiello": "z-index e sovrapposizione"
  },
  {
   "tipo": "widget",
   "titolo": "Chi sta sopra?",
   "w": "w10_zindex",
   "occhiello": "z-index e sovrapposizione"
  },
  {
   "tipo": "errore",
   "no": "«`z-index: 9999` mette un elemento sopra tutto.»",
   "si": "Solo **dentro il suo contesto di impilamento**. Se il suo contenitore crea un contesto più in basso di un altro, l’elemento resta sotto, qualunque numero abbia."
  },
  {
   "tipo": "errore",
   "no": "«`z-index` funziona su qualsiasi elemento.»",
   "si": "Funziona sugli elementi **posizionati** (non `static`) e sui figli di Flexbox e Grid. Su un paragrafo normale non ha effetto."
  },
  {
   "tipo": "schema",
   "titolo": "Float: il testo attorno",
   "sel": "#s10_float",
   "occhiello": "Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)"
  },
  {
   "tipo": "flusso",
   "titolo": "Il genitore che collassa",
   "blocchi": [
    {
     "titolo": "Un’immagine in float",
     "testo": "**non conta** nell’altezza del genitore",
     "icona": "image"
    },
    {
     "titolo": "Il genitore collassa",
     "testo": "il bordo avvolge solo il testo, l’immagine esce sotto",
     "icona": "triangle-alert",
     "tono": "no"
    },
    {
     "titolo": "Il rimedio",
     "testo": "`display: flow-root` sul genitore, oppure il **clearfix**",
     "icona": "wrench",
     "tono": "si"
    }
   ],
   "riga": "Per far ripartire un elemento **sotto** il float: `clear: both`.",
   "occhiello": "Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)"
  },
  {
   "tipo": "widget",
   "titolo": "Il genitore che collassa",
   "w": "w10_flowroot",
   "occhiello": "Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)"
  },
  {
   "tipo": "casi",
   "titolo": "A che cosa serve oggi il float",
   "casi": [
    {
     "titolo": "Le colonne della pagina",
     "testo": "si faceva prima di Flexbox e Grid, con molti trucchi",
     "tono": "no",
     "etichetta": "non più"
    },
    {
     "titolo": "Il testo attorno a un’immagine",
     "testo": "ciò per cui il float è nato",
     "tono": "si",
     "etichetta": "ancora sì"
    }
   ],
   "occhiello": "Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)"
  },
  {
   "tipo": "codice",
   "titolo": "Il clearfix",
   "html": "<span class=\"k\">.riquadro::after </span>{\n<span class=\"a\">  content</span>:<span class=\"s\"> \"\"</span>;\n<span class=\"a\">  display</span>:<span class=\"s\"> block</span>;\n<span class=\"a\">  clear</span>:<span class=\"s\"> both</span>;\n}",
   "occhiello": "Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)"
  },
  {
   "tipo": "errore",
   "no": "«Il float serve a fare i layout a colonne.»",
   "si": "Si faceva così prima di Flexbox e Grid, con molti trucchi. Oggi il float serve solo a far **scorrere il testo attorno** a un elemento."
  },
  {
   "tipo": "errore",
   "no": "«Il genitore si allarga attorno a un figlio in float.»",
   "si": "Il float **non conta nell’altezza** del genitore, che collassa. Serve `display: flow-root` o il clearfix."
  }
 ],
 "stile": "schema"
};
