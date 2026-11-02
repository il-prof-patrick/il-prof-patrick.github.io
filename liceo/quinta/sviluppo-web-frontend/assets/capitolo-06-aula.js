window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "06",
 "titolo": "CSS: base",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "CSS: base",
   "sotto": "Colori, testo, scatole e posizione: l’aspetto di ogni elemento.",
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
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Immagini di sfondo",
   "sotto": "Le immagini di sfondo si controllano con size, position, repeat e si sovrappongono; le immagini di contenuto vanno nell’HTML.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le immagini di sfondo",
   "msg": "Dimensione, posizione, ripetizione",
   "punti": [
    [
     "maximize",
     "`background-size`: `cover` riempie e taglia, `contain` tutta con i vuoti"
    ],
    [
     "move",
     "`background-position`: `center`, `right bottom`"
    ],
    [
     "repeat",
     "`background-repeat`: `repeat`, `repeat-x`, `no-repeat`"
    ],
    [
     "layers",
     "Più sfondi separati da virgole: **il primo sta sopra**"
    ],
    [
     "image",
     "Immagine che porta contenuto? `&lt;img alt=\"…\"&gt;` nell’HTML"
    ]
   ],
   "foto": {
    "src": "assets/immagini/arduino.jpg",
    "tit": "",
    "alt": "Scheda Arduino"
   }
  },
  {
   "tipo": "widget",
   "titolo": "La stessa foto di sfondo, sei impostazioni",
   "w": "w6_sfondo"
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
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Gradienti",
   "sotto": "Un gradiente è un’immagine generata: va in background-image, mai in background-color.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "I gradienti",
   "msg": "Immagini generate dal browser",
   "tessere": [
    [
     "move-right",
     "`linear-gradient()`",
     "lungo una retta · `90deg` = verso destra"
    ],
    [
     "circle-dot",
     "`radial-gradient()`",
     "dal centro verso l’esterno"
    ],
    [
     "pie-chart",
     "`conic-gradient()`",
     "intorno al centro: torte, ruote"
    ]
   ],
   "nota": "Vanno in `background-image`, mai in `background-color` · stessa posizione = taglio netto"
  },
  {
   "tipo": "widget",
   "titolo": "Costruisci un gradiente",
   "w": "w6_gradiente"
  },
  {
   "tipo": "errore",
   "no": "«`background-color: linear-gradient(…)` funziona.»",
   "si": "Un gradiente è un’**immagine**, non un colore: in `background-color` la dichiarazione non è valida e viene scartata. Si scrive in `background-image` o in `background`."
  },
  {
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Bordi e angoli",
   "sotto": "border imposta spessore, stile e colore; outline è un contorno che non occupa spazio.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Bordi e angoli",
   "msg": "Spessore, stile, colore",
   "punti": [
    [
     "square",
     "`border: 2px solid red`: lo **stile** è obbligatorio"
    ],
    [
     "palette",
     "Senza colore → `currentColor`, il colore del testo"
    ],
    [
     "square-round-corner",
     "`border-radius`: da alto-sinistra, in senso orario"
    ],
    [
     "circle",
     "`50%` su un quadrato → cerchio · `999px` → pillola"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Gli angoli arrotondati",
   "sel": "#s6_radius"
  },
  {
   "tipo": "widget",
   "titolo": "border o outline?",
   "w": "w6_bordo"
  },
  {
   "tipo": "errore",
   "no": "«`outline` è un bordo come gli altri.»",
   "si": "`outline` **non occupa spazio** e non sposta i vicini, sta sopra e fuori dall’elemento e non si può dare a un lato solo. Serve soprattutto a segnalare il fuoco."
  },
  {
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Ombre",
   "sotto": "box-shadow ha offset, sfocatura, diffusione e colore; non cambia l’impaginazione.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-6.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le ombre",
   "msg": "x, y, sfocatura, diffusione, colore",
   "punti": [
    [
     "move",
     "**x** e **y**: lo spostamento dell’ombra"
    ],
    [
     "cloud",
     "**sfocatura**: 0 = netta"
    ],
    [
     "expand",
     "**diffusione**: la allarga o la restringe"
    ],
    [
     "square-dashed",
     "`inset`: dentro · più ombre con le virgole"
    ],
    [
     "circle-check",
     "Non sposta nulla nell’impaginazione"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Costruisci l’ombra",
   "w": "w6_ombra"
  },
  {
   "tipo": "errore",
   "no": "«Il terzo valore di `box-shadow` è la distanza dell’ombra.»",
   "si": "Il terzo valore è la **sfocatura**: con 0 l’ombra ha i bordi netti. La distanza la danno i primi due valori, gli spostamenti x e y."
  },
  {
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Immagini nella pagina",
   "sotto": "max-width:100% adatta l’immagine al contenitore, object-fit decide come entra in un riquadro dato.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-7.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Immagini nella pagina",
   "msg": "Adattarle al contenitore senza deformarle",
   "punti": [
    [
     "minimize",
     "`max-width: 100%; height: auto;`: mai fuori dal contenitore"
    ],
    [
     "crop",
     "`object-fit: cover`: riempie il riquadro e taglia"
    ],
    [
     "frame",
     "`object-fit: contain`: tutta, con i vuoti · `fill` deforma"
    ],
    [
     "ratio",
     "`width` e `height` nell’`&lt;img&gt;`: spazio riservato prima del caricamento"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Una foto in un riquadro",
   "w": "w6_objectfit"
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
   ]
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
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Famiglie di caratteri",
   "sotto": "font-family è una lista in ordine di preferenza che finisce con una famiglia generica.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Scrivo `font-family: \"Gill Sans\"`. Tutti quelli che aprono la pagina vedranno Gill Sans?",
   "risposta": "No: solo chi ha quel font **installato**. Gli altri vedranno il carattere predefinito del browser. Serve una lista che finisca con una famiglia generica: `\"Gill Sans\", \"Segoe UI\", sans-serif`."
  },
  {
   "tipo": "punti",
   "titolo": "font-family",
   "msg": "Una lista in ordine di preferenza",
   "punti": [
    [
     "list-ordered",
     "Il browser usa il **primo font installato** sul computer di chi legge"
    ],
    [
     "quote",
     "Nomi con spazi tra virgolette: `\"Segoe UI\"`"
    ],
    [
     "shield-check",
     "In fondo sempre una **famiglia generica**: c’è su ogni computer"
    ],
    [
     "type",
     "`serif` con grazie · `sans-serif` senza · `monospace` larghezza fissa"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Con e senza grazie",
   "sel": "#s7_grazie"
  },
  {
   "tipo": "widget",
   "titolo": "Quale font userà il browser?",
   "w": "w7_fontstack"
  },
  {
   "tipo": "errore",
   "no": "«Scrivo `font-family: \"Gill Sans\"` e tutti vedranno Gill Sans.»",
   "si": "Il browser usa solo i font **installati sul computer di chi legge** (o scaricati con `@font-face`, 7.2). Senza alternative e senza famiglia generica, chi non ce l’ha vede il carattere predefinito."
  },
  {
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Font web",
   "sotto": "@font-face rende scaricabile un font, ma ogni font e peso è un file in più che rallenta la pagina.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "I font web",
   "msg": "Un font scaricato insieme alla pagina",
   "punti": [
    [
     "download",
     "`@font-face`: nome scelto, `src: url()` del file, peso"
    ],
    [
     "file-archive",
     "Formato **WOFF2**; ogni peso è un **file in più**"
    ],
    [
     "timer",
     "`font-display: swap`: subito il font di riserva, poi il cambio"
    ],
    [
     "server",
     "Google Fonts dai loro server **o ospitato in locale**"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Un caso di cronaca",
   "anno": "20 gennaio 2022",
   "icona": "scale",
   "punti": [
    [
     "scale",
     "Tribunale di Monaco: **100 euro** a un visitatore di un sito"
    ],
    [
     "globe",
     "Il sito caricava un font da Google Fonts e trasmetteva il suo **indirizzo IP**"
    ],
    [
     "server",
     "Da allora molti siti europei **ospitano i font in locale**"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "La regola @font-face",
   "html": "<span class=\"k\">@font-face </span>{\n<span class=\"a\">  font-family</span>:<span class=\"s\"> \"Titoli\"</span>;                     <span class=\"c\">/* il nome che scegliamo noi */</span>\n<span class=\"a\">  src</span>:<span class=\"s\"> url(\"font/titoli.woff2\") format(\"woff2\")</span>; <span class=\"c\">/* il file */</span>\n<span class=\"a\">  font-weight</span>:<span class=\"s\"> 700</span>;                         <span class=\"c\">/* il peso contenuto nel file */</span>\n<span class=\"a\">  font-display</span>:<span class=\"s\"> swap</span>;                       <span class=\"c\">/* nel frattempo, il font di riserva */</span>\n}\n<span class=\"k\">h1 </span>{\n<span class=\"a\">  font-family</span>:<span class=\"s\"> \"Titoli\", Georgia, serif</span>;\n}"
  },
  {
   "tipo": "widget",
   "titolo": "Mentre il font sta arrivando",
   "w": "w7_swap"
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
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Dimensione, peso e stile",
   "sotto": "Il peso del font esiste solo se il font lo contiene; italic è un corsivo disegnato, oblique un testo inclinato.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Dimensione, peso, stile",
   "msg": "Il peso esiste solo se il font lo contiene",
   "punti": [
    [
     "type",
     "`font-size`: in `rem`, di solito"
    ],
    [
     "bold",
     "`font-weight` da 100 a 900 · `normal` = 400 · `bold` = 700"
    ],
    [
     "circle-alert",
     "Peso mancante → il più vicino o **simulato**"
    ],
    [
     "italic",
     "`italic`: corsivo disegnato · `oblique`: carattere inclinato"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "La scala dei pesi",
   "sel": "#s7_pesi"
  },
  {
   "tipo": "widget",
   "titolo": "Dimensione, peso e stile",
   "w": "w7_testo"
  },
  {
   "tipo": "errore",
   "no": "«`font-weight: 900` rende più nero qualunque font.»",
   "si": "Funziona solo se il font **ha quel peso**. Altrimenti il browser usa il peso più vicino (spesso il 700) o lo simula."
  },
  {
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Spaziatura e allineamento",
   "sotto": "line-height senza unità scala col testo; text-align allinea il contenuto, non la scatola.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Spaziatura e allineamento",
   "msg": "Righe leggibili, testo allineato",
   "punti": [
    [
     "between-horizontal-start",
     "`line-height` **senza unità**, tra 1,4 e 1,6"
    ],
    [
     "letter-text",
     "`letter-spacing`, `word-spacing`: con misura"
    ],
    [
     "indent-increase",
     "`text-indent`: rientro della prima riga"
    ],
    [
     "align-center",
     "`text-align` allinea il **contenuto**, non la scatola"
    ],
    [
     "accessibility",
     "WCAG 1.4.12: con interlinea 1,5 il testo non deve rompersi"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Spaziatura e allineamento",
   "w": "w7_spazio"
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
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Decorazioni e trasformazioni",
   "sotto": "I puntini di text-overflow compaiono solo con overflow hidden e white-space nowrap.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Decorazioni e trasformazioni",
   "msg": "Linee, maiuscole, spazi, parole lunghe",
   "punti": [
    [
     "underline",
     "`text-decoration` + `text-underline-offset`"
    ],
    [
     "case-upper",
     "`text-transform`: cambia l’aspetto, **non** il testo"
    ],
    [
     "wrap-text",
     "`white-space`: spazi e a capo · `overflow-wrap` per le parole lunghe"
    ],
    [
     "ellipsis",
     "Puntini: `text-overflow` + `nowrap` + `overflow: hidden`"
    ]
   ]
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Tre dichiarazioni per i puntini",
   "w": "w7_ellipsis"
  },
  {
   "tipo": "errore",
   "no": "«`text-overflow: ellipsis` basta per avere i puntini.»",
   "si": "Servono anche `white-space: nowrap`, perché il testo non vada a capo, e `overflow: hidden`, perché la parte in eccesso sia tagliata."
  },
  {
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Stile dei link",
   "sotto": "Gli stati dei link hanno la stessa specificità: decide l’ordine, LVHA.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-6.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Gli stati dei link",
   "msg": "Stessa specificità: decide l’ordine",
   "punti": [
    [
     "link",
     "`:link` · `:visited` · `:hover` · `:active` (+ `:focus`)"
    ],
    [
     "heart",
     "Ordine **LVHA**: *LoVe HAte*"
    ],
    [
     "eye-off",
     "`:visited` accetta solo colori (privacy)"
    ],
    [
     "keyboard",
     "Mai togliere l’`outline` del fuoco senza sostituirlo"
    ],
    [
     "underline",
     "Il solo colore non basta: tieni la sottolineatura"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "L’ordine delle regole dei link",
   "w": "w7_lvha"
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
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Liste",
   "sotto": "list-style none toglie il simbolo ma non il rientro; i contatori CSS numerano anche ciò che non è una lista.",
   "foto": {
    "src": "assets/immagini/atmosfera/7-7.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le liste",
   "msg": "Simbolo, rientro, contatori",
   "punti": [
    [
     "list",
     "`list-style`: `disc` `square` `decimal` `lower-roman` `none`"
    ],
    [
     "palette",
     "`::marker` per colore e dimensione del simbolo"
    ],
    [
     "indent-increase",
     "Il rientro è il `padding-left` del browser"
    ],
    [
     "hash",
     "Contatori: `counter-reset` · `counter-increment` · `counter()`"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Il rientro degli elenchi",
   "sel": "#s7_rientro"
  },
  {
   "tipo": "widget",
   "titolo": "Numerare i titoli con un contatore",
   "w": "w7_contatori"
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
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "Content, padding, border, margin",
   "sotto": "Ogni elemento è una scatola a strati: contenuto, padding, bordo, margine.",
   "foto": {
    "src": "assets/immagini/atmosfera/8-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Il box model",
   "msg": "Ogni elemento è una scatola a quattro strati",
   "tessere": [
    [
     "type",
     "Contenuto",
     "testo, immagini, figli"
    ],
    [
     "square",
     "Padding",
     "spazio interno, prende lo sfondo"
    ],
    [
     "square-dashed",
     "Bordo",
     "la cornice"
    ],
    [
     "move",
     "Margine",
     "spazio esterno, sempre trasparente"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "La scatola",
   "w": "w8_scatola"
  },
  {
   "tipo": "foto",
   "titolo": "Il box model nei DevTools",
   "foto": [
    {
     "src": "assets/immagini/devtools-box-model.png",
     "tit": "",
     "alt": "Il diagramma del box model nella scheda Styles dei DevTools di Chrome"
    }
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il margine fa parte dello sfondo dell’elemento.»",
   "si": "Lo sfondo arriva fino al **bordo**. Il margine è sempre **trasparente**: lì si vede lo sfondo del genitore."
  },
  {
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "Larghezza e altezza",
   "sotto": "width auto riempie il contenitore, height auto segue il contenuto; min e max fissano i limiti.",
   "foto": {
    "src": "assets/immagini/atmosfera/8-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Larghezza e altezza",
   "msg": "auto riempie il contenitore e segue il contenuto",
   "punti": [
    [
     "move-horizontal",
     "`width: auto`: tutta la larghezza disponibile"
    ],
    [
     "move-vertical",
     "`height: auto`: l’altezza che serve al contenuto"
    ],
    [
     "arrow-down-to-line",
     "`max-width`: si stringe, ma non si allarga troppo"
    ],
    [
     "triangle-alert",
     "`height: 100%` solo se il genitore ha un’altezza → `min-height`"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Quattro modi di dare la larghezza",
   "w": "w8_larghezze"
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
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "box-sizing: content-box contro border-box",
   "sotto": "Con content-box padding e bordo si aggiungono alla width, con border-box ne fanno parte.",
   "foto": {
    "src": "assets/immagini/atmosfera/8-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Un `div` con `width: 200px; padding: 20px; border: 5px solid`. Quanto spazio occupa in orizzontale?",
   "risposta": "**250px**: con `content-box` padding (20 + 20) e bordo (5 + 5) si aggiungono ai 200px del contenuto."
  },
  {
   "tipo": "confronto",
   "titolo": "box-sizing",
   "msg": "Che cosa misura width",
   "a": {
    "icona": "box",
    "titolo": "`content-box`",
    "righe": [
     "• solo il contenuto (predefinito)",
     "• padding e bordo **si aggiungono**",
     "• 200 + 2×20 + 2×5 = **250px**"
    ]
   },
   "b": {
    "icona": "package",
    "titolo": "`border-box`",
    "tono": "buono",
    "righe": [
     "• fino al bordo compreso",
     "• padding e bordo stanno **dentro**",
     "• occupa **200px**"
    ]
   },
   "verdetto": "Il reset: `*, *::before, *::after { box-sizing: border-box; }`"
  },
  {
   "tipo": "codice",
   "titolo": "Il reset di box-sizing",
   "html": "<span class=\"k\">*, *::before, *::after </span>{\n<span class=\"a\">  box-sizing</span>:<span class=\"s\"> border-box</span>;\n}"
  },
  {
   "tipo": "widget",
   "titolo": "content-box o border-box?",
   "w": "w8_scatola2"
  },
  {
   "tipo": "errore",
   "no": "«Con `width: 200px` l’elemento occupa sempre 200px, anche con padding e bordo.»",
   "si": "Solo con `box-sizing: border-box`. Con il valore predefinito, `content-box`, padding e bordo **si aggiungono** ai 200px."
  },
  {
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "Margini",
   "sotto": "I margini verticali tra blocchi si fondono (vale il più grande); margin auto centra solo in orizzontale.",
   "foto": {
    "src": "assets/immagini/atmosfera/8-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Un paragrafo con `margin-bottom: 20px`, sotto un paragrafo con `margin-top: 30px`. Quanti pixel li separano?",
   "risposta": "**30px**: i margini verticali si fondono e vale il più grande."
  },
  {
   "tipo": "punti",
   "titolo": "Tre cose dei margini",
   "msg": "Si fondono, centrano, possono essere negativi",
   "punti": [
    [
     "merge",
     "Verticali tra blocchi: si **fondono**, vale il più grande"
    ],
    [
     "columns-2",
     "Mai quelli orizzontali, mai in flex e grid"
    ],
    [
     "align-center-horizontal",
     "`margin: 0 auto` centra in orizzontale un blocco con larghezza"
    ],
    [
     "minus",
     "Negativi: avvicinano e **sovrappongono**"
    ],
    [
     "languages",
     "`margin-inline`, `padding-block`: lati secondo la direzione del testo"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Margini che si fondono",
   "w": "w8_margini"
  },
  {
   "tipo": "schema",
   "titolo": "Margini negativi",
   "sel": "#s8_negativi"
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
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "Differenza tra margin e padding",
   "sotto": "Il padding è spazio dentro l’elemento e prende lo sfondo, il margine è spazio fuori e trasparente.",
   "foto": {
    "src": "assets/immagini/atmosfera/8-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "schema",
   "titolo": "Padding e margine",
   "sel": "#s8_padmar"
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
   ]
  },
  {
   "tipo": "errore",
   "no": "«Per staccare un elemento dal vicino uso il padding.»",
   "si": "Il padding allarga lo spazio **dentro** l’elemento (e il suo sfondo). Per allontanarlo dai vicini serve il **margine**."
  },
  {
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "overflow",
   "sotto": "overflow decide che cosa succede al contenuto che non entra: esce, è tagliato o scorre.",
   "foto": {
    "src": "assets/immagini/atmosfera/8-6.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "overflow",
   "msg": "Il contenuto che non entra",
   "tessere": [
    [
     "eye",
     "`visible`",
     "esce dalla scatola (iniziale)"
    ],
    [
     "scissors",
     "`hidden`",
     "tagliato"
    ],
    [
     "scroll",
     "`scroll`",
     "barre sempre"
    ],
    [
     "scan",
     "`auto`",
     "barre solo se servono"
    ]
   ],
   "nota": "`overflow-x: auto` per una tabella larga sul telefono"
  },
  {
   "tipo": "widget",
   "titolo": "Che cosa succede al contenuto che non entra",
   "w": "w8_overflow"
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
   "tipo": "sezione",
   "num": "6.4",
   "titolo": "Il flusso normale (blocco e in linea)",
   "sotto": "Il flusso normale dispone gli elementi nell’ordine dell’HTML: i blocchi vanno a capo, quelli in linea scorrono nella riga.",
   "foto": {
    "src": "assets/immagini/atmosfera/9-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il flusso normale",
   "msg": "L’ordine dell’HTML, in due modi",
   "punti": [
    [
     "list-ordered",
     "Gli elementi si dispongono **nell’ordine del codice**, dall’alto in basso"
    ],
    [
     "rows-3",
     "**Blocchi**: vanno a capo e occupano tutta la larghezza del contenitore"
    ],
    [
     "wrap-text",
     "**In linea**: scorrono nella riga come parole, a capo a riga piena"
    ],
    [
     "image",
     "**Sostituiti** (`img`, `input`, `button`): in linea, ma con misure proprie"
    ],
    [
     "globe",
     "Chi è blocco e chi in linea lo decide il **foglio di stile del browser**"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Blocchi impilati e elementi in linea che scorrono",
   "sel": "#s9_flusso"
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
   ]
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Il browser mette in fila",
   "w": "w9_fila"
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
   "tipo": "sezione",
   "num": "6.4",
   "titolo": "display (block · inline · inline-block · none)",
   "sotto": "display decide se un elemento si comporta da blocco o in linea e come dispone i figli; gli elementi in linea ignorano width e height.",
   "foto": {
    "src": "assets/immagini/atmosfera/9-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Metto `width: 200px` su uno `&lt;span&gt;`. Quanto diventa largo?",
   "risposta": "**Quanto il suo contenuto**: uno `span` è in linea e gli elementi in linea ignorano `width` e `height`. Per dargli una larghezza serve `display: inline-block` o `block`."
  },
  {
   "tipo": "tessere",
   "titolo": "I valori di display",
   "msg": "Verso l’esterno: blocco o in linea",
   "tessere": [
    [
     "square",
     "`block`",
     "a capo, tutta la riga, accetta tutte le misure"
    ],
    [
     "type",
     "`inline`",
     "nella riga, ignora width e height"
    ],
    [
     "layout-grid",
     "`inline-block`",
     "nella riga, ma accetta le misure"
    ],
    [
     "eye-off",
     "`none`",
     "non esiste nell’impaginazione"
    ]
   ],
   "nota": "Altri: `list-item`, `flow-root`, `contents`; `flex` e `grid` dispongono i figli (7.1–7.2)"
  },
  {
   "tipo": "punti",
   "titolo": "Due spazi misteriosi",
   "msg": "Vengono dall’HTML, non dal CSS",
   "punti": [
    [
     "space",
     "Tra due `inline-block` c’è lo **spazio tra i tag**, come tra due parole"
    ],
    [
     "image",
     "Sotto un’immagine c’è lo spazio per le lettere con la **gamba**"
    ],
    [
     "wrench",
     "Rimedi: tag attaccati o Flexbox; `display: block` sull’immagine"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "display",
   "w": "w9_display"
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
   "tipo": "sezione",
   "num": "6.4",
   "titolo": "Differenza tra display: none e visibility: hidden",
   "sotto": "display none toglie l’elemento dall’impaginazione, visibility hidden lo rende invisibile lasciando lo spazio.",
   "foto": {
    "src": "assets/immagini/atmosfera/9-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Nascondo il secondo di tre paragrafi. Con `display: none` il terzo sale? E con `visibility: hidden`?",
   "risposta": "Con `display: none` **sale** e prende il posto del secondo; con `visibility: hidden` **resta dov’era** e al posto del secondo rimane un vuoto."
  },
  {
   "tipo": "widget",
   "titolo": "Quattro modi di nascondere B",
   "w": "w9_nascondi"
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
   ]
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
   "tipo": "sezione",
   "num": "6.5",
   "titolo": "position (static · relative · absolute · fixed · sticky)",
   "sotto": "position decide come si colloca un elemento: relative rispetto al suo posto, absolute al più vicino antenato posizionato, fixed alla finestra, sticky fino a una soglia.",
   "foto": {
    "src": "assets/immagini/atmosfera/10-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Un `div` con `position: absolute` sta dentro un genitore **senza** `position`. Rispetto a che cosa si colloca?",
   "risposta": "Al **più vicino antenato posizionato** (con `position` diverso da `static`). Se non c’è, alla **pagina**: il genitore, da solo, non basta."
  },
  {
   "tipo": "tessere",
   "titolo": "I cinque valori di position",
   "msg": "Rispetto a che cosa si colloca l’elemento",
   "tessere": [
    [
     "minus",
     "`static`",
     "nel flusso; top e left ignorati"
    ],
    [
     "move",
     "`relative`",
     "spostato dal suo posto, che resta occupato"
    ],
    [
     "crosshair",
     "`absolute`",
     "fuori dal flusso, dal più vicino antenato posizionato"
    ],
    [
     "pin",
     "`fixed`",
     "fermo nella finestra"
    ],
    [
     "sticky-note",
     "`sticky`",
     "scorre, poi si ferma alla soglia"
    ]
   ],
   "nota": "`top`, `right`, `bottom`, `left` (o `inset`) solo sugli elementi posizionati"
  },
  {
   "tipo": "codice",
   "titolo": "Genitore relative, figlio absolute",
   "html": "<span class=\"k\">.card </span>{\n<span class=\"a\">  position</span>:<span class=\"s\"> relative</span>;   <span class=\"c\">/* il riferimento */</span>\n}\n<span class=\"k\">.card .etichetta </span>{\n<span class=\"a\">  position</span>:<span class=\"s\"> absolute</span>;\n<span class=\"a\">  top</span>:<span class=\"s\"> 8px</span>;\n<span class=\"a\">  right</span>:<span class=\"s\"> 8px</span>;            <span class=\"c\">/* angolo in alto a destra della card */</span>\n}"
  },
  {
   "tipo": "widget",
   "titolo": "position",
   "w": "w10_position"
  },
  {
   "tipo": "widget",
   "titolo": "Tre barre mentre la pagina scorre",
   "w": "w10_scroll"
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
   "tipo": "sezione",
   "num": "6.5",
   "titolo": "Differenza tra relative, absolute, fixed e sticky",
   "sotto": "I quattro valori differiscono per riferimento, spazio lasciato nel flusso e comportamento allo scroll.",
   "foto": {
    "src": "assets/immagini/atmosfera/10-2.jpg",
    "tit": "",
    "alt": ""
   }
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
   ]
  },
  {
   "tipo": "sezione",
   "num": "6.5",
   "titolo": "z-index e sovrapposizione",
   "sotto": "z-index ordina gli elementi sovrapposti ma vale solo dentro il proprio contesto di impilamento.",
   "foto": {
    "src": "assets/immagini/atmosfera/10-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "A ha `z-index: 100` dentro un contenitore con `z-index: 1`; B ha `z-index: 5` dentro un contenitore con `z-index: 2`. Chi sta sopra?",
   "risposta": "**B**. I contenitori creano due contesti: si confrontano prima loro (2 batte 1), e tutto il contenuto del secondo sta sopra tutto il contenuto del primo."
  },
  {
   "tipo": "punti",
   "titolo": "Il contesto di impilamento",
   "msg": "z-index vale solo dentro la sua cartellina",
   "punti": [
    [
     "layers",
     "Numero più alto = **più in primo piano**; a parità, vince chi viene dopo"
    ],
    [
     "folder",
     "Un **contesto** è una cartellina: i fogli si riordinano solo al suo interno"
    ],
    [
     "square-stack",
     "Lo crea un posizionato con `z-index` ≠ auto, `opacity` &lt; 1, `transform`, `filter`"
    ],
    [
     "scale",
     "Si confrontano **prima i contesti**, poi i figli dentro ciascuno"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Chi sta sopra?",
   "w": "w10_zindex"
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
   "tipo": "sezione",
   "num": "6.5",
   "titolo": "Float e clear (testo attorno a un’immagine · contenitore collassato · clearfix)",
   "sotto": "float porta un elemento a lato con il testo attorno, ma il genitore collassa: si risolve con clearfix o flow-root.",
   "foto": {
    "src": "assets/immagini/atmosfera/10-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Float e clear",
   "msg": "Nato per il testo attorno a un’immagine",
   "punti": [
    [
     "image",
     "`float: left | right`: l’elemento va a lato, il testo gli scorre attorno"
    ],
    [
     "arrow-down-to-line",
     "`clear: both`: l’elemento successivo riparte **sotto** il float"
    ],
    [
     "triangle-alert",
     "Il float non conta nell’altezza: il genitore **collassa**"
    ],
    [
     "wrench",
     "Rimedi: `display: flow-root` sul genitore o il **clearfix**"
    ],
    [
     "columns-3",
     "Le colonne della pagina oggi si fanno con **Flexbox e Grid**"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Float: il testo attorno",
   "sel": "#s10_float"
  },
  {
   "tipo": "codice",
   "titolo": "Il clearfix",
   "html": "<span class=\"k\">.riquadro::after </span>{\n<span class=\"a\">  content</span>:<span class=\"s\"> \"\"</span>;\n<span class=\"a\">  display</span>:<span class=\"s\"> block</span>;\n<span class=\"a\">  clear</span>:<span class=\"s\"> both</span>;\n}"
  },
  {
   "tipo": "widget",
   "titolo": "Il genitore che collassa",
   "w": "w10_flowroot"
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
 ]
};
