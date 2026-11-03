window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "05",
 "titolo": "CSS: introduzione",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "CSS: introduzione",
   "sotto": "Che cos’è il CSS, come si scrive e come il browser decide quale regola vince.",
   "indice": [
    [
     "5.1",
     "Che cos’è il CSS e come si collega"
    ],
    [
     "5.2",
     "La sintassi"
    ],
    [
     "5.3",
     "I selettori"
    ],
    [
     "5.4",
     "Cascata, ereditarietà, specificità"
    ],
    [
     "5.5",
     "Valori, unità e colori"
    ]
   ],
   "foto": {
    "src": "assets/immagini/atmosfera/c1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "sezione",
   "num": "5.1",
   "titolo": "Che cos’è il CSS e come si collega",
   "sotto": "Il linguaggio che decide come appare una pagina web.",
   "foto": {
    "src": "assets/immagini/atmosfera/c1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Due siti con lo stesso testo, parola per parola, ma uno sembra un giornale e l’altro un videogioco. Che cosa è cambiato?",
   "risposta": "Non il contenuto (l’HTML) ma l’**aspetto**: il **foglio di stile CSS**."
  },
  {
   "tipo": "domanda",
   "testo": "Una pagina non ha nemmeno una riga di CSS. Perché allora il titolo è grande e in grassetto e il link è blu e sottolineato?",
   "risposta": "Lo decide il **foglio di stile predefinito del browser** (*user agent stylesheet*). L’HTML dice solo «questo è un titolo di primo livello» e «questo è un link», non come devono apparire."
  },
  {
   "tipo": "definizione",
   "titolo": "Il CSS",
   "frase": "Il **CSS** (*Cascading Style Sheets*, «fogli di stile a cascata») è il linguaggio che decide **come appare** una pagina web.",
   "parti": [
    [
     "palette",
     "colori"
    ],
    [
     "type",
     "caratteri"
    ],
    [
     "ruler",
     "dimensioni e spazi"
    ],
    [
     "layout-dashboard",
     "impaginazione"
    ]
   ],
   "nota": "L’HTML dà il **significato**, il CSS la **presentazione**.",
   "occhiello": "A cosa serve il CSS"
  },
  {
   "tipo": "flusso",
   "titolo": "Il foglio di stile del browser",
   "blocchi": [
    {
     "titolo": "Pagina senza CSS",
     "testo": "solo HTML: titoli, paragrafi, link",
     "icona": "file-code"
    },
    {
     "titolo": "Foglio predefinito",
     "testo": "il browser applica il suo *user agent stylesheet*",
     "icona": "monitor"
    },
    {
     "titolo": "L’aspetto di partenza",
     "icona": "eye",
     "righe": [
      "titoli grandi e in grassetto",
      "link blu e sottolineati",
      "margini intorno al testo"
     ],
     "tono": "fine"
    }
   ],
   "riga": "Per questo le pagine senza CSS **si somigliano tutte**; il nostro CSS parte da lì e lo modifica.",
   "occhiello": "A cosa serve il CSS"
  },
  {
   "tipo": "gettoni",
   "titolo": "Perché separarli",
   "gettoni": [],
   "perche": [
    [
     "wrench",
     "Manutenzione",
     "per cambiare l’aspetto si modifica il foglio di stile, non le pagine"
    ],
    [
     "copy",
     "Coerenza",
     "stesso foglio di stile: stessi colori, caratteri e spazi in tutte le pagine"
    ],
    [
     "repeat",
     "Riuso",
     "una regola scritta una volta vale per tutti gli elementi a cui si applica"
    ]
   ],
   "msg": "Significato e presentazione in due linguaggi, di solito in due file",
   "occhiello": "A cosa serve il CSS"
  },
  {
   "tipo": "widget",
   "titolo": "Stesso HTML, tre fogli di stile",
   "w": "w1_fogli",
   "occhiello": "A cosa serve il CSS"
  },
  {
   "tipo": "gettoni",
   "titolo": "CSS Zen Garden",
   "gettoni": [
    [
     "palmtree",
     "giardino giapponese"
    ],
    [
     "megaphone",
     "manifesto a colori"
    ],
    [
     "building-2",
     "struttura d’acciaio"
    ],
    [
     "scroll",
     "pergamena in fondo al mare"
    ]
   ],
   "perche": [
    [
     "file-code",
     "Una sola pagina HTML",
     "sempre la stessa"
    ],
    [
     "palette",
     "Centinaia di fogli di stile",
     "scritti da designer di tutto il mondo"
    ],
    [
     "calendar",
     "Nato nel 2003",
     "per dimostrare che con il CSS si fa grafica vera senza toccare l’HTML"
    ]
   ],
   "foto": {
    "src": "assets/immagini/zen-garden.jpg",
    "tit": "CSS Zen Garden",
    "alt": "Quattro versioni della pagina del CSS Zen Garden"
   },
   "occhiello": "A cosa serve il CSS"
  },
  {
   "tipo": "schema",
   "titolo": "Quattro modi per la stessa regola",
   "sel": "#s1_quattro",
   "occhiello": "I quattro modi di collegare il CSS"
  },
  {
   "tipo": "gettoni",
   "titolo": "Il file esterno",
   "gettoni": [
    [
     "link",
     "`&lt;link rel=\"stylesheet\" href=\"stile.css\"&gt;`"
    ]
   ],
   "perche": [
    [
     "pencil",
     "Una modifica vale ovunque",
     "tutte le pagine collegano lo stesso file"
    ],
    [
     "hard-drive",
     "Scaricato una volta",
     "il browser lo tiene in *cache*: le pagine successive si aprono più in fretta"
    ],
    [
     "flask-conical",
     "`style` e `&lt;style&gt;` solo per prove",
     "un elemento o una pagina isolata"
    ]
   ],
   "msg": "Per un sito si usa il file esterno",
   "occhiello": "I quattro modi di collegare il CSS"
  },
  {
   "tipo": "flusso",
   "titolo": "Perché @import si evita",
   "blocchi": [
    {
     "titolo": "Scarica stile.css",
     "icona": "download"
    },
    {
     "titolo": "Legge `@import`",
     "testo": "scopre solo ora il secondo file",
     "icona": "file-search"
    },
    {
     "titolo": "Scarica colori.css",
     "icona": "download"
    },
    {
     "titolo": "La pagina compare",
     "testo": "più tardi",
     "icona": "clock",
     "tono": "no"
    }
   ],
   "riga": "Con più `&lt;link&gt;` i file **partono tutti insieme**.",
   "occhiello": "I quattro modi di collegare il CSS"
  },
  {
   "tipo": "widget",
   "titolo": "Un foglio di stile per cinque pagine",
   "w": "w1_pagine",
   "occhiello": "I quattro modi di collegare il CSS"
  },
  {
   "tipo": "errore",
   "no": "«Nel file stile.css devo scrivere anche il tag `&lt;style&gt;`.»",
   "si": "Il file esterno contiene **solo regole CSS**. `&lt;style&gt;` è un elemento HTML: serve solo per scrivere il CSS dentro una pagina HTML. In un file `.css` un tag non è CSS valido e la regola che lo segue viene scartata."
  },
  {
   "tipo": "gettoni",
   "titolo": "Editor e Live Server",
   "gettoni": [
    [
     "code",
     "VS Code"
    ],
    [
     "refresh-cw",
     "Live Server"
    ],
    [
     "sparkles",
     "Prettier"
    ],
    [
     "search",
     "CSS Peek"
    ]
   ],
   "perche": [
    [
     "refresh-cw",
     "Live Server",
     "apre la pagina e la ricarica a ogni salvataggio"
    ],
    [
     "sparkles",
     "Prettier",
     "riordina il codice (facoltativa)"
    ],
    [
     "search",
     "CSS Peek",
     "dall’HTML porta alla regola di una classe (facoltativa)"
    ]
   ],
   "foto": {
    "src": "assets/immagini/vscode-live-server.png",
    "tit": "L’indirizzo comincia con 127.0.0.1: la pagina arriva dal proprio computer",
    "alt": "VS Code e il browser con Live Server"
   },
   "occhiello": "Gli strumenti di lavoro"
  },
  {
   "tipo": "gettoni",
   "titolo": "I DevTools",
   "gettoni": [
    [
     "keyboard",
     "F12"
    ],
    [
     "mouse-pointer-click",
     "tasto destro › Ispeziona"
    ]
   ],
   "perche": [
    [
     "list-tree",
     "Elementi",
     "l’albero degli elementi; passandoci sopra si illuminano nella pagina"
    ],
    [
     "palette",
     "Stili",
     "le regole dell’elemento, con file e riga; le battute sono **barrate**"
    ],
    [
     "calculator",
     "Calcolati",
     "il valore finale che il browser usa davvero"
    ]
   ],
   "foto": {
    "src": "assets/immagini/devtools-elementi-stili.png",
    "tit": "Elementi e Styles accanto alla pagina",
    "alt": "I DevTools di Chrome"
   },
   "occhiello": "Gli strumenti di lavoro"
  },
  {
   "tipo": "flusso",
   "titolo": "Prove in diretta",
   "blocchi": [
    {
     "titolo": "Cambi un valore",
     "testo": "nei DevTools",
     "icona": "pencil"
    },
    {
     "titolo": "Lo vedi subito",
     "testo": "nella copia della pagina del tuo browser",
     "icona": "eye"
    },
    {
     "titolo": "Ricarichi",
     "testo": "la modifica sparisce: non è in nessun file",
     "icona": "refresh-cw",
     "tono": "no"
    },
    {
     "titolo": "Ricopi nel file CSS",
     "testo": "le prove riuscite",
     "icona": "save",
     "tono": "si"
    }
   ],
   "occhiello": "Gli strumenti di lavoro"
  },
  {
   "tipo": "widget",
   "titolo": "Una modifica nei DevTools",
   "w": "w1_devtools",
   "occhiello": "Gli strumenti di lavoro"
  },
  {
   "tipo": "errore",
   "no": "«Ho cambiato il colore nei DevTools del sito della scuola: ora lo vedono tutti.»",
   "si": "È cambiato **solo nella copia della pagina che c’è nel tuo browser**. Il file sul server non è stato toccato: gli altri vedono il sito come prima, e anche tu lo rivedi come prima appena ricarichi."
  },
  {
   "tipo": "domanda",
   "testo": "Cambiate il colore del titolo del sito della scuola nei DevTools e poi premete F5. Che cosa succede? Il compagno di banco vede il nuovo colore?",
   "risposta": "Il colore cambia **solo nel vostro browser**; con F5 la pagina viene scaricata di nuovo e torna com’era. Il compagno non ha mai visto la modifica."
  },
  {
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "La sintassi",
   "sotto": "Regole, dichiarazioni, commenti: come si scrive il CSS.",
   "foto": {
    "src": "assets/immagini/atmosfera/c2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "In un foglio di stile c’è un errore di battitura. Secondo voi il browser mostra un messaggio d’errore?",
   "risposta": "No: il browser **scarta in silenzio** ciò che non capisce e va avanti. Per questo bisogna saper cercare gli errori."
  },
  {
   "tipo": "anatomia",
   "titolo": "Una regola CSS",
   "codice": "h1 {\n  color: navy;\n  font-size: 32px;\n}",
   "parti": [
    [
     "h1",
     "selettore",
     "sceglie gli elementi: tutti i titoli h1"
    ],
    [
     "{\n  color: navy;\n  font-size: 32px;\n}",
     "blocco di dichiarazioni",
     "tra parentesi graffe"
    ],
    [
     "color: navy;",
     "dichiarazione",
     "`proprietà: valore;`"
    ],
    [
     "color",
     "proprietà",
     "che cosa cambiare"
    ],
    [
     "navy",
     "valore",
     "come"
    ]
   ],
   "msg": "A chi si applica e come deve apparire",
   "occhiello": "Anatomia di una regola"
  },
  {
   "tipo": "widget",
   "titolo": "Componi una regola",
   "w": "w2_regola",
   "occhiello": "Anatomia di una regola"
  },
  {
   "tipo": "errore",
   "no": "«Le proprietà si scrivono come in Java: `fontSize`.»",
   "si": "In CSS si scrive `font-size`, minuscolo con il trattino; `fontSize` non esiste e viene ignorata. La forma con la maiuscola in mezzo (*camelCase*) si usa solo quando si cambia lo stile da JavaScript (cap. 8)."
  },
  {
   "tipo": "casi",
   "titolo": "I commenti",
   "casi": [
    {
     "testo": "il browser lo ignora; anche su più righe",
     "tono": "si",
     "html": "<span class=\"c\">/* Titoli della pagina */</span>",
     "etichetta": "commento CSS"
    },
    {
     "testo": "viene da JavaScript e Java: la regola sotto viene scartata",
     "tono": "no",
     "html": "<span class=\"k\">// Titoli della pagina</span>",
     "etichetta": "non esiste in CSS"
    }
   ],
   "msg": "I commenti non si annidano: il primo `*/` chiude",
   "occhiello": "Commenti e formattazione"
  },
  {
   "tipo": "flusso",
   "titolo": "Disattivare senza cancellare",
   "blocchi": [
    {
     "titolo": "Una prova",
     "icona": "flask-conical",
     "html": "<span class=\"k\">h1 </span>{\n<span class=\"a\">  font-size</span>:<span class=\"s\"> 40px</span>;\n}"
    },
    {
     "titolo": "La commento",
     "icona": "message-square",
     "html": "<span class=\"k\">h1 </span>{\n  <span class=\"c\">/* font-size: 40px; */</span>\n<span class=\"a\">  font-size</span>:<span class=\"s\"> 32px</span>;\n}"
    },
    {
     "titolo": "Il browser usa 32px",
     "testo": "la vecchia riga resta lì, pronta da rimettere",
     "icona": "circle-check",
     "tono": "si"
    }
   ],
   "occhiello": "Commenti e formattazione"
  },
  {
   "tipo": "schema",
   "titolo": "Tre modi di scrivere lo stesso CSS",
   "sel": "#s2_formati",
   "occhiello": "Commenti e formattazione"
  },
  {
   "tipo": "domanda",
   "testo": "Scrivo `// ricordati di cambiare il colore` sopra la regola dei titoli. La regola funziona ancora?",
   "risposta": "No: `//` non è un commento in CSS. Il testo finisce nel **selettore**, che non è più valido, e **l’intera regola viene scartata**. Si scrive `/* ricordati di cambiare il colore */`."
  },
  {
   "tipo": "definizione",
   "titolo": "Le proprietà abbreviate",
   "frase": "Una proprietà abbreviata (*shorthand*) **ne imposta più insieme**.",
   "parti": [
    [
     "box",
     "`margin`: i quattro lati"
    ],
    [
     "square",
     "`border`: spessore, stile, colore"
    ],
    [
     "type",
     "`font`: stile, peso, dimensione, famiglia"
    ],
    [
     "image",
     "`background`: colore, immagine, posizione"
    ]
   ],
   "occhiello": "Proprietà abbreviate"
  },
  {
   "tipo": "anatomia",
   "titolo": "Quattro valori, in senso orario",
   "codice": "margin: 10px 20px 30px 40px;",
   "parti": [
    [
     "10px",
     "sopra",
     "1° valore"
    ],
    [
     "20px",
     "destra",
     "2° valore"
    ],
    [
     "30px",
     "sotto",
     "3° valore"
    ],
    [
     "40px",
     "sinistra",
     "4° valore"
    ]
   ],
   "effetto": "Come le lancette dell’orologio, a partire dall’alto",
   "occhiello": "Proprietà abbreviate"
  },
  {
   "tipo": "widget",
   "titolo": "Uno, due, tre o quattro valori",
   "w": "w2_lati",
   "occhiello": "Proprietà abbreviate"
  },
  {
   "tipo": "flusso",
   "titolo": "Ciò che non scrivi si azzera",
   "blocchi": [
    {
     "titolo": "Prima",
     "testo": "c’è un’immagine di sfondo",
     "icona": "image",
     "html": "<span class=\"k\">background: url(foto.jpg)</span>;"
    },
    {
     "titolo": "Poi",
     "testo": "si cambia il colore con l’abbreviata",
     "icona": "pencil",
     "html": "<span class=\"k\">background: red</span>;"
    },
    {
     "titolo": "Risultato",
     "testo": "sfondo rosso, ma `background-image` torna a `none`: l’immagine sparisce",
     "icona": "image-off",
     "tono": "no"
    }
   ],
   "riga": "Per cambiare una cosa sola: la proprietà estesa, `background-color: red`.",
   "occhiello": "Proprietà abbreviate"
  },
  {
   "tipo": "tabella",
   "titolo": "Forma abbreviata e forma estesa",
   "righe": [
    [
     "Abbreviata",
     "Equivale a",
     "Attenzione"
    ],
    [
     "`border: 2px solid red`",
     "`border-width: 2px` · `border-style: solid` · `border-color: red`",
     "senza lo stile il bordo non si vede"
    ],
    [
     "`font: italic bold 18px/1.5 Georgia, serif`",
     "`font-style` · `font-weight` · `font-size`/`line-height` · `font-family`",
     "dimensione e famiglia obbligatorie, in quest’ordine, in fondo"
    ],
    [
     "`background: #eee url(foto.jpg) no-repeat center`",
     "`background-color` · `background-image` · `background-repeat` · `background-position`",
     "ciò che manca torna al valore iniziale"
    ],
    [
     "`margin: 10px 30px 50px`",
     "`margin-top: 10px` · `margin-right: 30px` · `margin-bottom: 50px` · `margin-left: 30px`",
     "con tre valori il secondo vale a destra e a sinistra"
    ]
   ],
   "occhiello": "Proprietà abbreviate"
  },
  {
   "tipo": "errore",
   "no": "«`border: 2px red` disegna un bordo rosso di 2 pixel.»",
   "si": "Manca lo **stile**: il suo valore iniziale è `none` e il bordo non si vede. Si scrive `border: 2px solid red`."
  },
  {
   "tipo": "errore",
   "no": "«`font: 18px` cambia la dimensione del testo.»",
   "si": "Nella forma abbreviata `font` la **famiglia è obbligatoria**: senza, la dichiarazione non è valida e viene scartata. Per la sola dimensione si usa `font-size: 18px`."
  },
  {
   "tipo": "errore",
   "no": "«`background: red` cambia solo il colore di sfondo.»",
   "si": "La forma abbreviata imposta **tutte** le proprietà dello sfondo: anche l’immagine torna a `none` e sparisce. Per cambiare solo il colore si usa `background-color: red`."
  },
  {
   "tipo": "domanda",
   "testo": "Dimentico il punto e virgola dopo `color: red` e sotto c’è `font-size: 48px;`. Il titolo sarà rosso, grande, tutti e due o nessuno dei due?",
   "risposta": "**Nessuno dei due**: senza il punto e virgola le due righe diventano una sola dichiarazione, `color: red font-size: 48px`, che non è valida e viene scartata."
  },
  {
   "tipo": "flusso",
   "titolo": "Il browser non protesta",
   "blocchi": [
    {
     "titolo": "Una dichiarazione che non capisce",
     "icona": "circle-help",
     "html": "<span class=\"k\">color: red</span>\n<span class=\"k\">font-size: 48px</span>;"
    },
    {
     "titolo": "La scarta",
     "testo": "nessun messaggio di errore",
     "icona": "trash-2",
     "tono": "no"
    },
    {
     "titolo": "Va avanti con il resto",
     "testo": "la pagina semplicemente non ha l’aspetto voluto",
     "icona": "arrow-right"
    }
   ],
   "riga": "Voluto: le proprietà di domani non rompono i browser di oggi. Il prezzo: gli errori **passano in silenzio**.",
   "occhiello": "Errori comuni e validatore"
  },
  {
   "tipo": "widget",
   "titolo": "Cinque errori che il browser non segnala",
   "w": "w2_errori",
   "occhiello": "Errori comuni e validatore"
  },
  {
   "tipo": "gettoni",
   "titolo": "Dove si trovano gli errori",
   "gettoni": [],
   "perche": [
    [
     "code",
     "Editor",
     "VS Code sottolinea le proprietà sconosciute e le graffe che non tornano"
    ],
    [
     "search",
     "DevTools",
     "la dichiarazione non valida è **barrata**, con il triangolo giallo"
    ],
    [
     "shield-check",
     "Validatore del W3C",
     "l’elenco degli errori con il numero di riga"
    ]
   ],
   "occhiello": "Errori comuni e validatore"
  },
  {
   "tipo": "foto",
   "titolo": "DevTools e validatore",
   "foto": [
    {
     "src": "assets/immagini/devtools-non-valida.png",
     "tit": "",
     "alt": "I DevTools con due dichiarazioni non valide barrate e segnalate da un triangolo giallo"
    },
    {
     "src": "assets/immagini/validatore-w3c.png",
     "tit": "",
     "alt": "Il validatore CSS del W3C con l’elenco di tre errori e i numeri di riga"
    }
   ],
   "occhiello": "Errori comuni e validatore"
  },
  {
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "I selettori",
   "sotto": "Come si scelgono gli elementi a cui dare uno stile.",
   "foto": {
    "src": "assets/immagini/atmosfera/c3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "In una pagina ci sono 30 paragrafi e solo 3 sono «avvisi». Come fa il CSS a colorare solo quei 3?",
   "risposta": "Con un **selettore** che li distingue: per esempio una **classe** `avviso` data nell’HTML, e nel CSS la regola `.avviso { … }`."
  },
  {
   "tipo": "casi",
   "titolo": "I quattro selettori di base",
   "casi": [
    {
     "titolo": "`p` · tipo",
     "testo": "tutti gli elementi con quel tag",
     "icona": "tag"
    },
    {
     "titolo": "`.nota` · classe",
     "testo": "tutti gli elementi con `class=\"nota\"`, qualunque sia il tag",
     "icona": "layers"
    },
    {
     "titolo": "`#robot` · id",
     "testo": "l’unico elemento con `id=\"robot\"`",
     "icona": "hash"
    },
    {
     "titolo": "`*` · universale",
     "testo": "tutti gli elementi",
     "icona": "asterisk"
    }
   ],
   "msg": "Per tag, per classe, per id, tutti",
   "occhiello": "Tipo, classe, id, universale"
  },
  {
   "tipo": "flusso",
   "titolo": "Classe e id: dall’HTML al CSS",
   "blocchi": [
    {
     "titolo": "Nell’HTML",
     "icona": "file-code",
     "html": "<span class=\"k\">&lt;p</span> <span class=\"a\">class</span>=<span class=\"s\">\"nota\"</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;div</span> <span class=\"a\">id</span>=<span class=\"s\">\"robot\"</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/div</span><span class=\"k\">&gt;</span>"
    },
    {
     "titolo": "Nel CSS",
     "icona": "palette",
     "tono": "fine",
     "html": "<span class=\"k\">.nota  </span>{<span class=\"a\"> color</span>:<span class=\"s\"> gray</span>; }\n<span class=\"k\">#robot </span>{<span class=\"a\"> color</span>:<span class=\"s\"> crimson</span>; }"
    }
   ],
   "frecce": [
    "punto e cancelletto"
   ],
   "riga": "Più classi per elemento (`class=\"card big\"`), una classe su quanti elementi si vuole; l’id è **unico**.",
   "occhiello": "Tipo, classe, id, universale"
  },
  {
   "tipo": "widget",
   "titolo": "Il selettore-cacciatore",
   "w": "w3_cacc",
   "occhiello": "Tipo, classe, id, universale"
  },
  {
   "tipo": "errore",
   "no": "«`.titolo` e `titolo` sono lo stesso selettore.»",
   "si": "Senza il punto è un selettore di **tipo**: cerca gli elementi `&lt;titolo&gt;`, che in HTML non esistono. Per la classe `titolo` serve il punto: `.titolo`."
  },
  {
   "tipo": "errore",
   "no": "«Lo stesso id si può dare a più elementi che devono avere lo stesso stile.»",
   "si": "L’id è **unico** nella pagina. Per dare lo stesso stile a più elementi si usa una **classe**, che si può ripetere quante volte si vuole."
  },
  {
   "tipo": "casi",
   "titolo": "Virgola, niente spazio, spazio",
   "casi": [
    {
     "titolo": "`h1, h2, h3`",
     "testo": "una **lista**: la stessa regola per tre selettori",
     "icona": "list",
     "nota": "un selettore non valido → scartata tutta la regola"
    },
    {
     "titolo": "`.card.big`",
     "testo": "condizioni sullo **stesso elemento**: entrambe le classi",
     "icona": "link"
    },
    {
     "titolo": "`.card .big`",
     "testo": "un `.big` **dentro** un `.card`, a qualsiasi profondità",
     "icona": "git-fork"
    }
   ],
   "msg": "La differenza sta tutta in un carattere",
   "occhiello": "Raggruppare e combinare"
  },
  {
   "tipo": "anatomia",
   "titolo": "Leggere un combinatore",
   "codice": "main p",
   "parti": [
    [
     "p",
     "l’elemento preso",
     "l’ultimo, a destra"
    ],
    [
     " ",
     "combinatore",
     "lo spazio: «dentro»"
    ],
    [
     "main",
     "condizione",
     "deve stare sopra nell’albero"
    ]
   ],
   "effetto": "Si legge da destra a sinistra; per il genitore oggi c’è `:has()`",
   "occhiello": "Raggruppare e combinare"
  },
  {
   "tipo": "widget",
   "titolo": "Combinatori nella pagina campione",
   "w": "w3_cacc_comb",
   "occhiello": "Raggruppare e combinare"
  },
  {
   "tipo": "tabella",
   "titolo": "I combinatori",
   "righe": [
    [
     "Combinatore",
     "Si legge",
     "Che cosa prende"
    ],
    [
     "`A B` (spazio)",
     "B **discendente** di A",
     "ogni B dentro A, a qualsiasi profondità: `main p`"
    ],
    [
     "`A &gt; B`",
     "B **figlio** di A",
     "solo i B figli diretti di A: `nav &gt; a`"
    ],
    [
     "`A + B`",
     "B **fratello adiacente** di A",
     "il B subito dopo A, con lo stesso genitore: `h3 + p`"
    ],
    [
     "`A ~ B`",
     "B **fratello successivo** di A",
     "tutti i B che vengono dopo A, con lo stesso genitore: `h2 ~ div`"
    ]
   ],
   "occhiello": "Raggruppare e combinare"
  },
  {
   "tipo": "errore",
   "no": "«`.card .big` e `.card.big` sono lo stesso selettore.»",
   "si": "Con lo spazio, `.big` deve stare **dentro** un `.card` (discendente); senza spazio, lo **stesso elemento** deve avere entrambe le classi. Nella pagina campione il primo non prende niente, il secondo prende la card «Stampa 3D»."
  },
  {
   "tipo": "errore",
   "no": "«Se un selettore della lista è sbagliato, funzionano comunque gli altri.»",
   "si": "Basta un selettore non valido nella lista perché **l’intera regola venga scartata**, per tutti i selettori."
  },
  {
   "tipo": "domanda",
   "testo": "`.card .big` e `.card.big`: sono lo stesso selettore?",
   "risposta": "No. Con lo spazio `.big` è un elemento **dentro** un `.card`; senza spazio è **lo stesso elemento** che ha entrambe le classi."
  },
  {
   "tipo": "anatomia",
   "titolo": "Un selettore di attributo",
   "codice": "a[href$=\".pdf\" i]",
   "parti": [
    [
     "a",
     "tipo",
     "i link"
    ],
    [
     "href",
     "attributo",
     "tra parentesi quadre"
    ],
    [
     "$=",
     "confronto",
     "«finisce con»"
    ],
    [
     "\".pdf\"",
     "valore",
     "cercato nel valore dell’attributo"
    ],
    [
     " i",
     "maiuscole",
     "prende anche PROGRAMMA.PDF"
    ]
   ],
   "msg": "Lo stile dai dati che l’elemento ha già, senza classi a mano",
   "occhiello": "Selettori di attributo"
  },
  {
   "tipo": "widget",
   "titolo": "Selettori di attributo nella pagina campione",
   "w": "w3_cacc_attr",
   "occhiello": "Selettori di attributo"
  },
  {
   "tipo": "tabella",
   "titolo": "I selettori di attributo",
   "righe": [
    [
     "Selettore",
     "Significato",
     "Esempio"
    ],
    [
     "`[attr]`",
     "l’attributo c’è, con qualunque valore",
     "`input[required]`"
    ],
    [
     "`[attr=\"v\"]`",
     "valore **esattamente** uguale a v",
     "`input[type=\"email\"]`"
    ],
    [
     "`[attr^=\"v\"]`",
     "valore che **inizia** con v",
     "`a[href^=\"https\"]`: link esterni sicuri"
    ],
    [
     "`[attr$=\"v\"]`",
     "valore che **finisce** con v",
     "`a[href$=\".pdf\"]`: link ai PDF"
    ],
    [
     "`[attr*=\"v\"]`",
     "valore che **contiene** v",
     "`a[href*=\"arduino\"]`"
    ],
    [
     "`[attr~=\"v\"]`",
     "v è una delle **parole** del valore",
     "`[class~=\"big\"]`"
    ]
   ],
   "occhiello": "Selettori di attributo"
  },
  {
   "tipo": "errore",
   "no": "«`[href=\".pdf\"]` prende i link ai PDF.»",
   "si": "`=` vuole il valore **esatto**: prenderebbe solo un link con `href=\".pdf\"`. Per «finisce con» serve `$=`: `a[href$=\".pdf\"]`."
  },
  {
   "tipo": "definizione",
   "titolo": "Le pseudo-classi",
   "frase": "Una **pseudo-classe** sceglie un elemento **che esiste già** nell’HTML quando si trova in un certo **stato** o in una certa **posizione**, oppure quando **non** soddisfa una condizione.",
   "parti": [
    [
     "mouse-pointer",
     "stato: `:hover` `:focus` `:checked`"
    ],
    [
     "list-ordered",
     "posizione: `:first-child` `:nth-child()`"
    ],
    [
     "ban",
     "negazione: `:not(.big)`"
    ]
   ],
   "nota": "Sul touch non c’è un vero `:hover`: le informazioni importanti non vanno solo lì.",
   "occhiello": "Pseudo-classi"
  },
  {
   "tipo": "widget",
   "titolo": "Le pseudo-classi di stato",
   "w": "w3_stati",
   "occhiello": "Pseudo-classi"
  },
  {
   "tipo": "casi",
   "titolo": "nth-child e nth-of-type",
   "casi": [
    {
     "titolo": "`p:nth-child(2)`",
     "testo": "un `p` che è il **secondo figlio**, contando tutti i fratelli",
     "icona": "list-ordered",
     "nota": "div con h2 + tre p → il primo paragrafo"
    },
    {
     "titolo": "`p:nth-of-type(2)`",
     "testo": "il **secondo tra i soli `p`**",
     "icona": "filter",
     "nota": "div con h2 + tre p → il secondo paragrafo"
    }
   ],
   "msg": "Tutti i fratelli contro i fratelli dello stesso tag",
   "occhiello": "Pseudo-classi"
  },
  {
   "tipo": "tabella",
   "titolo": "Le espressioni di nth-child",
   "righe": [
    [
     "Espressione",
     "Posizioni prese"
    ],
    [
     "`3`",
     "solo la terza"
    ],
    [
     "`odd` (= `2n+1`)",
     "le dispari: 1, 3, 5…"
    ],
    [
     "`even` (= `2n`)",
     "le pari: 2, 4, 6…"
    ],
    [
     "`3n`",
     "una ogni tre: 3, 6, 9…"
    ],
    [
     "`n+3`",
     "dalla terza in poi: 3, 4, 5…"
    ],
    [
     "`-n+3`",
     "le prime tre: 1, 2, 3"
    ]
   ],
   "occhiello": "Pseudo-classi"
  },
  {
   "tipo": "widget",
   "titolo": "Pseudo-classi di posizione nella pagina campione",
   "w": "w3_cacc_pseudo",
   "occhiello": "Pseudo-classi"
  },
  {
   "tipo": "errore",
   "no": "«`p:nth-child(2)` colora il secondo paragrafo.»",
   "si": "Colora un `p` **solo se è il secondo figlio** del suo genitore, contando tutti i fratelli. Per il secondo paragrafo tra i soli paragrafi serve `p:nth-of-type(2)`."
  },
  {
   "tipo": "domanda",
   "testo": "In un `div` ci sono un `h2` seguito da tre `p`. Che cosa colora `p:nth-child(2)`?",
   "risposta": "Il **primo paragrafo**: è il secondo figlio del `div`, perché il primo è l’`h2`."
  },
  {
   "tipo": "definizione",
   "titolo": "I pseudo-elementi",
   "frase": "Un **pseudo-elemento** (`::`) sceglie una **parte** di un elemento, oppure crea un **contenuto generato** che nell’HTML non c’è.",
   "parti": [
    [
     "type",
     "`::first-letter` `::first-line`"
    ],
    [
     "text-cursor",
     "`::selection` `::placeholder`"
    ],
    [
     "plus",
     "`::before` `::after`, solo con `content`"
    ]
   ],
   "nota": "Servono a **decorare**: un’informazione importante va nell’HTML.",
   "occhiello": "Pseudo-elementi"
  },
  {
   "tipo": "widget",
   "titolo": "I pseudo-elementi uno alla volta",
   "w": "w3_pseudoel",
   "occhiello": "Pseudo-elementi"
  },
  {
   "tipo": "codice",
   "titolo": "Un’etichetta generata",
   "html": "<span class=\"k\">.nuovo::after </span>{\n<span class=\"a\">  content</span>:<span class=\"s\"> \"NUOVO\"</span>;\n<span class=\"a\">  background</span>:<span class=\"s\"> crimson</span>;\n<span class=\"a\">  color</span>:<span class=\"s\"> white</span>;\n<span class=\"a\">  font-size</span>:<span class=\"s\"> 0.7em</span>;\n<span class=\"a\">  padding</span>:<span class=\"s\"> 2px 6px</span>;\n<span class=\"a\">  margin-left</span>:<span class=\"s\"> 6px</span>;\n}",
   "occhiello": "Pseudo-elementi"
  },
  {
   "tipo": "errore",
   "no": "«`::before` mette l’icona anche senza `content`.»",
   "si": "Senza la proprietà `content` il pseudo-elemento **non viene creato** e non appare nulla, qualunque altra proprietà gli si dia."
  },
  {
   "tipo": "tabella",
   "titolo": "Classe e id",
   "righe": [
    [
     "",
     "Classe",
     "Id"
    ],
    [
     "Nell’HTML e nel CSS",
     "`class=\"card big\"` · `.card`",
     "`id=\"robot\"` · `#robot`"
    ],
    [
     "Quante volte",
     "su quanti elementi si vuole; più classi per elemento",
     "**una volta** nella pagina; un id per elemento"
    ],
    [
     "Serve anche per",
     "JavaScript",
     "ancore dei link (`href=\"#robot\"`), `&lt;label for=\"…\"&gt;`, JavaScript"
    ],
    [
     "Per lo stile",
     "**sì**, è la scelta normale",
     "meglio di no: pesa troppo nella cascata (5.4)"
    ]
   ],
   "occhiello": "Differenza tra classe e id, tra pseudo-classe e pseudo-elemento"
  },
  {
   "tipo": "tabella",
   "titolo": "Pseudo-classe e pseudo-elemento",
   "righe": [
    [
     "",
     "Pseudo-classe",
     "Pseudo-elemento"
    ],
    [
     "Si scrive",
     "un due punti: `:hover`",
     "due due punti: `::before`"
    ],
    [
     "Sceglie",
     "un elemento **che esiste**, in un certo stato o posizione",
     "una **parte** dell’elemento o un **contenuto generato**"
    ],
    [
     "Esempi",
     "`:hover`, `:focus`, `:nth-child()`, `:not()`",
     "`::first-line`, `::before`, `::placeholder`"
    ]
   ],
   "occhiello": "Differenza tra classe e id, tra pseudo-classe e pseudo-elemento"
  },
  {
   "tipo": "casi",
   "titolo": "Due modi di dare un nome",
   "casi": [
    {
     "titolo": "`.rosso` · `.box1` · `.sinistra-grande`",
     "testo": "quando cambiano colore o impaginazione, il nome **mente**",
     "tono": "no",
     "etichetta": "descrive l’aspetto"
    },
    {
     "titolo": "`.avviso` · `.card-corso` · `.menu-principale`",
     "testo": "minuscolo con i trattini; niente id per lo stile",
     "tono": "si",
     "etichetta": "descrive il ruolo"
    }
   ],
   "occhiello": "Dare i nomi alle classi"
  },
  {
   "tipo": "anatomia",
   "titolo": "BEM",
   "codice": ".card\n.card__titolo\n.card--evidenziata",
   "parti": [
    [
     ".card",
     "blocco",
     "un componente autonomo"
    ],
    [
     "__titolo",
     "elemento",
     "una sua parte: due trattini bassi"
    ],
    [
     "--evidenziata",
     "modificatore",
     "una variante: due trattini"
    ]
   ],
   "msg": "*Block, Element, Modifier*: dal nome si capisce il componente",
   "occhiello": "Dare i nomi alle classi"
  },
  {
   "tipo": "schema",
   "titolo": "Nomi per il ruolo, non per l’aspetto",
   "sel": "#s3_nomi",
   "occhiello": "Dare i nomi alle classi"
  },
  {
   "tipo": "errore",
   "no": "«`.rosso` è un buon nome per la classe degli avvisi.»",
   "si": "Descrive l’aspetto, non il ruolo: quando il colore degli avvisi cambia, il nome **mente**. Meglio `.avviso`."
  },
  {
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Cascata, ereditarietà, specificità",
   "sotto": "Quando più regole litigano: chi vince e perché.",
   "foto": {
    "src": "assets/immagini/atmosfera/c4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Due regole danno al titolo due colori diversi. Secondo voi vince sempre quella scritta per ultima?",
   "risposta": "Non sempre: prima contano **origine**, **importanza** e **specificità**; l’ordine di scrittura decide solo a parità."
  },
  {
   "tipo": "casi",
   "titolo": "Ereditarietà",
   "casi": [
    {
     "titolo": "Si ereditano",
     "icona": "type",
     "righe": [
      "`color`",
      "`font-family`, `font-size`, `font-weight`",
      "`line-height`, `text-align`"
     ],
     "nota": "proprietà del **testo**"
    },
    {
     "titolo": "Non si ereditano",
     "icona": "square",
     "righe": [
      "`margin`, `padding`, `border`",
      "`background`",
      "`width`, `height`"
     ],
     "nota": "proprietà della **scatola**: niente cornici dappertutto"
    }
   ],
   "msg": "Il testo passa ai discendenti, la scatola no",
   "occhiello": "Ereditarietà"
  },
  {
   "tipo": "widget",
   "titolo": "Che cosa passa ai discendenti",
   "w": "w4_eredita",
   "occhiello": "Ereditarietà"
  },
  {
   "tipo": "flusso",
   "titolo": "Forzare l’ereditarietà",
   "blocchi": [
    {
     "titolo": "Il body è blu scuro",
     "icona": "file-code",
     "html": "<span class=\"k\">body </span>{<span class=\"a\"> color</span>:<span class=\"s\"> navy</span>; }"
    },
    {
     "titolo": "I link restano blu",
     "testo": "il foglio del browser batte il valore ereditato",
     "icona": "link"
    },
    {
     "titolo": "`inherit`",
     "testo": "i link prendono il colore del testo intorno",
     "icona": "circle-check",
     "tono": "si",
     "html": "<span class=\"k\">a </span>{<span class=\"a\"> color</span>:<span class=\"s\"> inherit</span>; }"
    }
   ],
   "occhiello": "Ereditarietà"
  },
  {
   "tipo": "tabella",
   "titolo": "Proprietà ereditate e non ereditate",
   "righe": [
    [
     "Si ereditano (testo)",
     "Non si ereditano (scatola)"
    ],
    [
     "`color`",
     "`margin`, `padding`"
    ],
    [
     "`font-family`, `font-size`, `font-weight`, `font-style`",
     "`border`, `outline`"
    ],
    [
     "`line-height`, `letter-spacing`, `word-spacing`",
     "`background-color`, `background-image`"
    ],
    [
     "`text-align`, `text-indent`, `text-transform`",
     "`width`, `height`, `display`"
    ],
    [
     "`list-style`, `visibility`, `cursor`",
     "`box-shadow`, `opacity`, `position`"
    ]
   ],
   "occhiello": "Ereditarietà"
  },
  {
   "tipo": "errore",
   "no": "«Se do un bordo al genitore, ce l’hanno anche i figli.»",
   "si": "`border` è una proprietà della scatola e **non si eredita**: il bordo ce l’ha solo l’elemento a cui lo hai dato."
  },
  {
   "tipo": "errore",
   "no": "«Il `color` del `body` vale per tutto il testo, link compresi.»",
   "si": "I link hanno un colore **dal foglio di stile del browser**, che batte il valore ereditato dal `body`. Serve una regola per `a` (o `a { color: inherit; }`)."
  },
  {
   "tipo": "domanda",
   "testo": "Metto `color: green` sul `body`. Titoli e link diventano verdi?",
   "risposta": "I titoli **sì**, perché `color` si eredita. I link **no**: hanno un colore loro dal foglio di stile del browser."
  },
  {
   "tipo": "casi",
   "titolo": "I quattro valori speciali",
   "casi": [
    {
     "titolo": "`inherit`",
     "testo": "il valore del **genitore**",
     "icona": "arrow-up"
    },
    {
     "titolo": "`initial`",
     "testo": "il valore iniziale della specifica, **uguale per tutti**",
     "icona": "file-text"
    },
    {
     "titolo": "`unset`",
     "testo": "`inherit` se la proprietà si eredita, altrimenti `initial`",
     "icona": "shuffle"
    },
    {
     "titolo": "`revert`",
     "testo": "il valore del **foglio del browser**",
     "icona": "undo-2"
    }
   ],
   "msg": "Non danno un valore: dicono da dove prenderlo",
   "occhiello": "Valori speciali"
  },
  {
   "tipo": "widget",
   "titolo": "I quattro valori speciali a confronto",
   "w": "w4_valori",
   "occhiello": "Valori speciali"
  },
  {
   "tipo": "errore",
   "no": "«`display: initial` rimette il `block` dei `div`.»",
   "si": "Il valore iniziale di `display` è `inline` per tutti: il `div` diventa **in linea**. Per riavere il `block` del foglio del browser serve `display: revert`."
  },
  {
   "tipo": "flusso",
   "titolo": "La cascata",
   "blocchi": [
    {
     "titolo": "Origine e importanza",
     "testo": "browser &lt; utente &lt; autore",
     "icona": "layers"
    },
    {
     "titolo": "Livelli",
     "testo": "`@layer`",
     "icona": "folder-tree"
    },
    {
     "titolo": "Specificità",
     "testo": "il selettore più preciso; `style` batte tutti",
     "icona": "crosshair"
    },
    {
     "titolo": "Ordine",
     "testo": "a parità, vince l’ultima scritta",
     "icona": "list-ordered",
     "tono": "fine"
    }
   ],
   "frecce": [
    "parità?",
    "parità?",
    "parità?"
   ],
   "riga": "Il criterio successivo serve **solo se il precedente finisce in parità**.",
   "occhiello": "La cascata"
  },
  {
   "tipo": "widget",
   "titolo": "Cinque dichiarazioni per lo stesso link",
   "w": "w4_cascata",
   "occhiello": "La cascata"
  },
  {
   "tipo": "errore",
   "no": "«Vince sempre la regola scritta per ultima.»",
   "si": "L’ordine conta **solo a parità** di origine, importanza e specificità. Una regola più specifica vince anche se è scritta prima."
  },
  {
   "tipo": "domanda",
   "testo": "Prima `.nota { color: red; }`, poi `p { color: blue; }`. Di che colore è un paragrafo con `class=\"nota\"`?",
   "risposta": "**Rosso**: `.nota` (0,1,0) è più specifica di `p` (0,0,1), e la specificità si guarda prima dell’ordine."
  },
  {
   "tipo": "anatomia",
   "titolo": "La specificità",
   "codice": "#avviso .nota p::first-line",
   "parti": [
    [
     "#avviso",
     "a = id",
     "1"
    ],
    [
     ".nota",
     "b = classi, attributi, pseudo-classi",
     "1"
    ],
    [
     "p",
     "c = tipi",
     "1"
    ],
    [
     "::first-line",
     "c = pseudo-elementi",
     "+1"
    ]
   ],
   "msg": "Una terna (a, b, c)",
   "effetto": "Specificità (1,1,2)",
   "occhiello": "Calcolo della specificità"
  },
  {
   "tipo": "cifra",
   "titolo": "Colonna per colonna",
   "a": [
    "tags",
    "Undici tipi",
    "`div div … p` · (0,0,11)"
   ],
   "b": [
    "layers",
    "Una classe",
    "`.nota` · (0,1,0)"
   ],
   "cifra": "(0,1,0) vince",
   "testo": "Si confronta da sinistra: **niente somma, niente riporto**.",
   "cautela": "Come nel dizionario, dove «b» viene dopo «azzzz».",
   "occhiello": "Calcolo della specificità"
  },
  {
   "tipo": "widget",
   "titolo": "Chi vince?",
   "w": "w4_chivince",
   "occhiello": "Calcolo della specificità"
  },
  {
   "tipo": "tabella",
   "titolo": "La specificità di otto selettori",
   "righe": [
    [
     "Selettore",
     "Specificità",
     "Perché"
    ],
    [
     "`*`",
     "(0,0,0)",
     "il selettore universale vale zero"
    ],
    [
     "`div p`",
     "(0,0,2)",
     "due tipi; lo spazio non conta"
    ],
    [
     "`.nota`",
     "(0,1,0)",
     "una classe"
    ],
    [
     "`p.nota`",
     "(0,1,1)",
     "una classe e un tipo"
    ],
    [
     "`a:hover`",
     "(0,1,1)",
     "una pseudo-classe e un tipo"
    ],
    [
     "`#avviso`",
     "(1,0,0)",
     "un id"
    ],
    [
     "`#avviso .nota p::first-line`",
     "(1,1,2)",
     "un id, una classe, un tipo, un pseudo-elemento"
    ],
    [
     "`li:not(.big)`",
     "(0,1,1)",
     "`:not()` vale quanto `.big`, più il tipo"
    ]
   ],
   "occhiello": "Calcolo della specificità"
  },
  {
   "tipo": "errore",
   "no": "«Più selettori scrivo, più la regola è forte.»",
   "si": "Conta **che cosa** scrivi, non quanto: `div div div p` vale (0,0,4) e perde contro `.nota`, che vale (0,1,0)."
  },
  {
   "tipo": "schema",
   "titolo": "La precedenza delle origini",
   "sel": "#s4_scala",
   "occhiello": "!important e perché evitarlo"
  },
  {
   "tipo": "flusso",
   "titolo": "La guerra degli !important",
   "blocchi": [
    {
     "titolo": "Funziona subito",
     "icona": "zap",
     "html": "<span class=\"k\">.nota </span>{\n<span class=\"a\">  color</span>:<span class=\"s\"> red !important</span>;\n}"
    },
    {
     "titolo": "Per batterlo",
     "icona": "swords",
     "html": "<span class=\"k\">#box .nota </span>{\n<span class=\"a\">  color</span>:<span class=\"s\"> blue !important</span>;\n}"
    },
    {
     "titolo": "E poi un altro ancora",
     "testo": "il foglio di stile diventa impossibile da modificare",
     "icona": "triangle-alert",
     "tono": "no"
    }
   ],
   "occhiello": "!important e perché evitarlo"
  },
  {
   "tipo": "casi",
   "titolo": "Quando usarlo",
   "casi": [
    {
     "testo": "per risolvere un **conflitto di specificità**: meglio capire chi vince e correggere",
     "tono": "no",
     "etichetta": "segnala un problema"
    },
    {
     "righe": [
      "classi di utilità: `.nascosto { display: none !important; }`",
      "battere stili altrui non modificabili",
      "l’utente che impone caratteri e colori"
     ],
     "tono": "si",
     "etichetta": "usi legittimi"
    }
   ],
   "occhiello": "!important e perché evitarlo"
  },
  {
   "tipo": "widget",
   "titolo": "Chi vince, con !important",
   "w": "w4_chivince_imp",
   "occhiello": "!important e perché evitarlo"
  },
  {
   "tipo": "errore",
   "no": "«`!important` risolve sempre.»",
   "si": "Risolve **fino al prossimo** `!important` più specifico. Meglio capire quale regola vince e perché, e correggere la specificità."
  },
  {
   "tipo": "gettoni",
   "titolo": "Perché la mia regola non funziona",
   "gettoni": [],
   "perche": [
    [
     "crosshair",
     "1 · Il selettore prende davvero l’elemento?",
     "no → un refuso, una classe che manca nell’HTML: la regola non compare tra gli Stili"
    ],
    [
     "circle-x",
     "2 · La dichiarazione è valida?",
     "no → errore di sintassi: è barrata con il triangolo giallo"
    ],
    [
     "swords",
     "3 · Un’altra regola la batte?",
     "sì → più specifica o scritta dopo: è barrata, la vincente sta più in alto"
    ],
    [
     "git-branch",
     "4 · Il valore arriva da un genitore o dal browser?",
     "sì → serve una regola per l’elemento: «Ereditato da…» o *user agent stylesheet*"
    ],
    [
     "file-x",
     "5 · Il file CSS è caricato?",
     "no → percorso sbagliato nel `link`: nella scheda Rete c’è un errore 404"
    ]
   ],
   "occhiello": "Perché la mia regola non funziona?"
  },
  {
   "tipo": "foto",
   "titolo": "Le prove nei DevTools",
   "foto": [
    {
     "src": "assets/immagini/devtools-barrate.png",
     "tit": "",
     "alt": "Scheda Styles dei DevTools con una dichiarazione barrata"
    },
    {
     "src": "assets/immagini/devtools-ereditate.png",
     "tit": "",
     "alt": "Sezione Inherited from body dei DevTools con proprietà ereditate e non ereditate"
    }
   ],
   "occhiello": "Perché la mia regola non funziona?"
  },
  {
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Valori, unità e colori",
   "sotto": "Numeri, unità, funzioni e colori: che cosa si può scrivere dopo i due punti.",
   "foto": {
    "src": "assets/immagini/atmosfera/c5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Un testo scritto in `px` e uno in `rem`: l’utente imposta nel browser «caratteri grandi». Quale dei due cambia?",
   "risposta": "Quello in **`rem`**, che segue la dimensione del testo della radice scelta dall’utente; quello in `px` resta fisso."
  },
  {
   "tipo": "casi",
   "titolo": "Due regole sui valori",
   "casi": [
    {
     "titolo": "`margin: 0`",
     "testo": "lo zero non vuole l’unità",
     "tono": "si",
     "etichetta": "si può"
    },
    {
     "titolo": "`margin: 10`",
     "testo": "una lunghezza vuole sempre l’unità: dichiarazione scartata",
     "tono": "no",
     "etichetta": "non valida"
    }
   ],
   "msg": "Ogni proprietà accetta solo certi tipi di valore",
   "occhiello": "I tipi di valore"
  },
  {
   "tipo": "casi",
   "titolo": "line-height: numero o lunghezza?",
   "casi": [
    {
     "testo": "ogni elemento: 1,5 × il suo testo; titolo a 40px → righe di 60px",
     "tono": "si",
     "html": "<span class=\"k\">body </span>{<span class=\"a\"> line-height</span>:<span class=\"s\"> 1.5</span>; }",
     "etichetta": "numero senza unità"
    },
    {
     "testo": "i discendenti ereditano 24px: titolo a 40px → righe sovrapposte",
     "tono": "no",
     "html": "<span class=\"k\">body </span>{<span class=\"a\"> line-height</span>:<span class=\"s\"> 24px</span>; }",
     "etichetta": "lunghezza"
    }
   ],
   "msg": "Il numero si moltiplica, la lunghezza si eredita già calcolata",
   "occhiello": "I tipi di valore"
  },
  {
   "tipo": "tabella",
   "titolo": "I tipi di valore",
   "righe": [
    [
     "Tipo",
     "Esempi",
     "Proprietà tipiche"
    ],
    [
     "parole chiave",
     "`auto`, `none`, `bold`, `center`, `inherit`",
     "`display`, `text-align`, `font-weight`"
    ],
    [
     "numeri senza unità",
     "`1.5`, `0.8`, `10`",
     "`line-height`, `opacity`, `z-index`"
    ],
    [
     "lunghezze",
     "`16px`, `2rem`, `50vw`, `0`",
     "`width`, `margin`, `font-size`"
    ],
    [
     "percentuali",
     "`50%`, `100%`",
     "`width`, `font-size`, `line-height`"
    ],
    [
     "colori",
     "`red`, `#0a6f66`, `rgb(10 111 102)` (più avanti)",
     "`color`, `background-color`, `border-color`"
    ],
    [
     "stringhe e URL",
     "`\"NUOVO\"`, `url(\"foto.jpg\")`",
     "`content`, `background-image`, `font-family`"
    ],
    [
     "funzioni",
     "`calc(100% - 2rem)`, `rgb()`, `clamp()`",
     "quasi tutte"
    ]
   ],
   "occhiello": "I tipi di valore"
  },
  {
   "tipo": "casi",
   "titolo": "Assolute e relative",
   "casi": [
    {
     "titolo": "Assolute",
     "icona": "ruler",
     "righe": [
      "`px`, `cm`, `mm`, `in`, `pt`",
      "1in = 96px = 2,54cm",
      "il pixel CSS **non** è un pixel dello schermo"
     ],
     "nota": "per lo schermo, in pratica solo `px`"
    },
    {
     "titolo": "Relative",
     "icona": "scaling",
     "righe": [
      "`%`, `em`, `rem`, `ch`",
      "`vw`, `vh`, `vmin`, `vmax`",
      "`svh`, `lvh`, `dvh` per i telefoni"
     ],
     "tono": "si",
     "nota": "si adattano a schermi e preferenze"
    }
   ],
   "msg": "Misura fissa o misura che dipende da un’altra grandezza",
   "occhiello": "Unità di misura"
  },
  {
   "tipo": "casi",
   "titolo": "La percentuale dipende dalla proprietà",
   "casi": [
    {
     "titolo": "`width: 50%`",
     "testo": "metà della larghezza del **contenitore**",
     "icona": "move-horizontal"
    },
    {
     "titolo": "`font-size: 120%`",
     "testo": "1,2 × il testo del **genitore**",
     "icona": "type"
    },
    {
     "titolo": "`padding-top: 50%`",
     "testo": "metà della **larghezza** del contenitore, non dell’altezza",
     "icona": "triangle-alert",
     "tono": "forse"
    }
   ],
   "occhiello": "Unità di misura"
  },
  {
   "tipo": "casi",
   "titolo": "Le trappole della finestra",
   "casi": [
    {
     "titolo": "`100vh` sul telefono",
     "testo": "più alto dello schermo visibile: calcolato con la barra degli indirizzi nascosta",
     "icona": "smartphone",
     "nota": "`100dvh`: l’altezza del momento"
    },
    {
     "titolo": "`100vw`",
     "testo": "comprende la barra di scorrimento: l’elemento esce e scorre in orizzontale",
     "icona": "scroll",
     "nota": "`width: 100%`, o lasciare `auto`"
    }
   ],
   "occhiello": "Unità di misura"
  },
  {
   "tipo": "widget",
   "titolo": "Sei larghezze, sei unità",
   "w": "w5_unita",
   "occhiello": "Unità di misura"
  },
  {
   "tipo": "tabella",
   "titolo": "Le unità relative",
   "righe": [
    [
     "Unità",
     "Rispetto a che cosa",
     "Esempio"
    ],
    [
     "`%`",
     "dipende dalla proprietà (vedi sotto)",
     "`width: 50%`"
    ],
    [
     "`em`",
     "dimensione del testo dell’elemento (per `font-size`: del genitore)",
     "`padding: 0.5em`"
    ],
    [
     "`rem`",
     "dimensione del testo della radice, `html` (di solito 16px)",
     "`font-size: 1.25rem`"
    ],
    [
     "`ch`",
     "larghezza del carattere «0» nel font dell’elemento",
     "`max-width: 65ch`"
    ],
    [
     "`vw` · `vh`",
     "1% della larghezza · dell’altezza della finestra",
     "`width: 50vw`"
    ],
    [
     "`vmin` · `vmax`",
     "1% del lato più corto · più lungo della finestra",
     "`font-size: 5vmin`"
    ],
    [
     "`svh` · `lvh` · `dvh`",
     "1% dell’altezza della finestra piccola, grande, attuale (sul telefono)",
     "`min-height: 100dvh`"
    ]
   ],
   "occhiello": "Unità di misura"
  },
  {
   "tipo": "errore",
   "no": "«`padding-top: 50%` è metà dell’altezza dell’elemento.»",
   "si": "Nel `padding` e nel `margin` la percentuale si calcola sempre sulla **larghezza del contenitore**, anche in verticale."
  },
  {
   "tipo": "errore",
   "no": "«`width: 100vw` riempie esattamente la pagina.»",
   "si": "`100vw` comprende anche la barra di scorrimento verticale: l’elemento **esce** di qualche pixel e compare lo scorrimento orizzontale. Per tutta la larghezza disponibile basta `width: 100%` (o lasciare `auto`)."
  },
  {
   "tipo": "domanda",
   "testo": "Lista dentro lista dentro lista, ognuna con `font-size: 1.2em`. Il terzo livello è grande quanto il primo?",
   "risposta": "No: ogni livello moltiplica il genitore, quindi 1,2 × 1,2 × 1,2 = **1,73** volte il testo di partenza."
  },
  {
   "tipo": "casi",
   "titolo": "px, em, rem",
   "casi": [
    {
     "titolo": "`px`",
     "testo": "fisso: 16px restano 16px",
     "icona": "lock",
     "nota": "bordi sottili"
    },
    {
     "titolo": "`em`",
     "testo": "il testo dell’elemento (in `font-size`: del genitore); **si accumula**",
     "icona": "type",
     "nota": "padding dei pulsanti"
    },
    {
     "titolo": "`rem`",
     "testo": "il testo della radice, che **l’utente può cambiare**",
     "icona": "house",
     "tono": "si",
     "nota": "testi e spaziature"
    }
   ],
   "msg": "Fisso, relativo all’elemento, relativo alla radice",
   "occhiello": "Differenza tra px, em e rem"
  },
  {
   "tipo": "widget",
   "titolo": "Liste annidate con em e con rem",
   "w": "w5_annidate",
   "occhiello": "Differenza tra px, em e rem"
  },
  {
   "tipo": "errore",
   "no": "«`1em` è sempre 16px.»",
   "si": "`1em` è la dimensione del testo **dell’elemento** (o del genitore, dentro `font-size`): vale 16px solo se il testo è a 16px. È `1rem` che vale di solito 16px, e solo finché l’utente non cambia le impostazioni."
  },
  {
   "tipo": "errore",
   "no": "«Con `html { font-size: 10px; }` i conti sono più facili e non cambia nulla.»",
   "si": "Cambia per l’utente: la radice in pixel **ignora la dimensione del testo scelta nel browser**, e chi ha bisogno di caratteri più grandi non li ottiene."
  },
  {
   "tipo": "anatomia",
   "titolo": "clamp() per un testo fluido",
   "codice": "font-size: clamp(1rem, 0.5rem + 2vw, 2rem);",
   "parti": [
    [
     "1rem",
     "minimo",
     "non scende sotto"
    ],
    [
     "0.5rem + 2vw",
     "preferito",
     "una parte in rem, una che cresce con la finestra"
    ],
    [
     "2rem",
     "massimo",
     "non sale sopra"
    ]
   ],
   "effetto": "Solo `vw` non risponde allo zoom: serve anche una parte in rem",
   "occhiello": "Funzioni di calcolo"
  },
  {
   "tipo": "widget",
   "titolo": "clamp() al lavoro",
   "w": "w5_clamp",
   "occhiello": "Funzioni di calcolo"
  },
  {
   "tipo": "tabella",
   "titolo": "Le funzioni di calcolo",
   "righe": [
    [
     "Funzione",
     "Che cosa fa",
     "Esempio"
    ],
    [
     "`calc()`",
     "calcola, anche tra unità diverse",
     "`width: calc(100% - 2rem)`"
    ],
    [
     "`min()`",
     "il più piccolo: limite **massimo**",
     "`width: min(100%, 600px)`"
    ],
    [
     "`max()`",
     "il più grande: limite **minimo**",
     "`font-size: max(1rem, 2vw)`"
    ],
    [
     "`clamp()`",
     "il preferito, tra minimo e massimo",
     "`font-size: clamp(1rem, 0.5rem + 2vw, 2rem)`"
    ]
   ],
   "occhiello": "Funzioni di calcolo"
  },
  {
   "tipo": "errore",
   "no": "«`calc(100%-2rem)` funziona.»",
   "si": "Senza spazi attorno al meno il browser legge `100%-2rem` come un unico valore non valido e **scarta la dichiarazione**. Si scrive `calc(100% - 2rem)`."
  },
  {
   "tipo": "errore",
   "no": "«`min()` mette un minimo.»",
   "si": "`min()` sceglie il valore più piccolo, quindi impedisce di superare l’altro: è un **limite massimo**. Il limite minimo si ottiene con `max()`."
  },
  {
   "tipo": "domanda",
   "testo": "`width: min(100%, 600px)`: è una larghezza minima o massima?",
   "risposta": "**Massima**: `min()` sceglie il più piccolo dei due, quindi la larghezza non supera mai 600px (e su uno schermo stretto è il 100%)."
  },
  {
   "tipo": "domanda",
   "testo": "`#ff0000`, `rgb(255 0 0)`, `hsl(0 100% 50%)` e `red`: quanti colori diversi sono?",
   "risposta": "**Uno solo**: il rosso puro, scritto in quattro formati diversi."
  },
  {
   "tipo": "anatomia",
   "titolo": "L’esadecimale",
   "codice": "color: #0a6f66;",
   "parti": [
    [
     "0a",
     "rosso",
     "da 00 a ff"
    ],
    [
     "6f",
     "verde",
     "da 00 a ff"
    ],
    [
     "66",
     "blu",
     "da 00 a ff"
    ]
   ],
   "effetto": "Forma breve: `#fc0` = `#ffcc00`, ogni cifra si raddoppia",
   "occhiello": "Formati dei colori"
  },
  {
   "tipo": "anatomia",
   "titolo": "HSL",
   "codice": "color: hsl(175 83% 24%);",
   "parti": [
    [
     "175",
     "tinta",
     "gradi sulla ruota: 0 rosso, 120 verde, 240 blu"
    ],
    [
     "83%",
     "saturazione",
     "0% grigio, 100% colore pieno"
    ],
    [
     "24%",
     "luminosità",
     "0% nero, 50% puro, 100% bianco"
    ]
   ],
   "effetto": "Stessa tinta, luminosità diverse: una palette",
   "occhiello": "Formati dei colori"
  },
  {
   "tipo": "widget",
   "titolo": "Un colore, due scritture",
   "w": "w6_colori",
   "occhiello": "Formati dei colori"
  },
  {
   "tipo": "tabella",
   "titolo": "I formati dei colori",
   "righe": [
    [
     "Formato",
     "Esempio",
     "Quando conviene"
    ],
    [
     "nome",
     "`tomato`",
     "prove veloci, esempi"
    ],
    [
     "esadecimale",
     "`#0a6f66`",
     "il più diffuso: lo danno i programmi di grafica"
    ],
    [
     "`rgb()`",
     "`rgb(10 111 102 / 0.8)`",
     "quando si ragiona sui canali o serve la trasparenza"
    ],
    [
     "`hsl()`",
     "`hsl(175 83% 24%)`",
     "per costruire una palette: stessa tinta, luminosità diverse"
    ],
    [
     "`currentColor`",
     "`border-color: currentColor`",
     "per legare un bordo o un’icona al colore del testo"
    ]
   ],
   "occhiello": "Formati dei colori"
  },
  {
   "tipo": "errore",
   "no": "«`#fc0` è uguale a `#fc0000`.»",
   "si": "Nella forma breve **ogni cifra si raddoppia**: `#fc0` vale `#ffcc00`, un giallo oro; `#fc0000` è un rosso."
  },
  {
   "tipo": "casi",
   "titolo": "Due trasparenze",
   "casi": [
    {
     "titolo": "`opacity: 0.5`",
     "testo": "tutto l’elemento: sfondo, testo, bordi e figli",
     "icona": "layers",
     "nota": "con 0 è invisibile ma **c’è ancora**, e si clicca"
    },
    {
     "titolo": "canale alfa",
     "testo": "solo quel colore: sullo sfondo, il testo resta pieno",
     "icona": "droplet",
     "tono": "si",
     "html": "<span class=\"k\">background: rgb(30 80 200 / 0.5)</span>;"
    }
   ],
   "msg": "Tutto l’elemento o solo un colore",
   "occhiello": "Trasparenza: opacity contro canale alfa"
  },
  {
   "tipo": "widget",
   "titolo": "opacity o canale alfa?",
   "w": "w6_alfa",
   "occhiello": "Trasparenza: opacity contro canale alfa"
  },
  {
   "tipo": "errore",
   "no": "«`opacity: 0.5` rende trasparente solo lo sfondo.»",
   "si": "`opacity` rende trasparente **tutto** l’elemento, testo compreso. Per lo sfondo soltanto si usa l’alfa nel colore: `background: rgb(30 80 200 / 0.5)`."
  },
  {
   "tipo": "domanda",
   "testo": "Card con sfondo blu e testo bianco, poi `opacity: 0.5`. Che cosa diventa trasparente?",
   "risposta": "**Tutto**: sfondo, testo e bordo. Per rendere trasparente solo lo sfondo serve il canale alfa nel colore di sfondo."
  }
 ],
 "stile": "schema"
};
