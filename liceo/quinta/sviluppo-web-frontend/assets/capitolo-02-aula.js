window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "02",
 "titolo": "HTML: introduzione",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "HTML: introduzione",
   "sotto": "Il linguaggio che dice che cosa c’è in una pagina.",
   "indice": [
    [
     "2.1",
     "Tag, elementi e attributi"
    ],
    [
     "2.2",
     "Lo scheletro della pagina"
    ],
    [
     "2.3",
     "Elementi di blocco ed elementi in linea"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "sezione",
   "num": "2.1",
   "titolo": "Tag, elementi e attributi",
   "sotto": "Etichette che dicono che cosa è ogni parte",
   "foto": {
    "src": "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Un documento HTML",
   "punti": [
    [
     "file-code",
     "Un **file di testo** (estensione `.html`) con il contenuto «marcato» da **tag**"
    ],
    [
     "tag",
     "Un **tag** è un’etichetta racchiusa tra parentesi angolari `&lt; &gt;`"
    ],
    [
     "arrow-right",
     "**Apertura** `&lt;p&gt;`, **chiusura** `&lt;/p&gt;` (con la barra)"
    ],
    [
     "layers",
     "Apertura + contenuto + chiusura = un **elemento**"
    ]
   ],
   "nota": "Si dice «il tag p» per dire l’elemento: va bene a voce, ma sono due cose diverse"
  },
  {
   "tipo": "schema",
   "titolo": "Anatomia di un elemento",
   "sel": "#s-elemento"
  },
  {
   "tipo": "punti",
   "titolo": "Elementi vuoti",
   "punti": [
    [
     "circle-x",
     "Senza contenuto → **senza tag di chiusura** (*void elements*)"
    ],
    [
     "image",
     "`&lt;img&gt;` · `&lt;br&gt;` · `&lt;hr&gt;` · `&lt;input&gt;` · `&lt;meta&gt;` · `&lt;link&gt;`"
    ],
    [
     "file-code",
     "`&lt;br /&gt;` con la barra finale: accettato, eredità del vecchio **XHTML**"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Gli attributi",
   "html": "<span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"gatto.jpg\"</span> <span class=\"a\">alt</span>=<span class=\"s\">\"Gatto rosso che dorme sul divano\"</span> <span class=\"a\">width</span>=<span class=\"s\">\"400\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;a</span> <span class=\"a\">href</span>=<span class=\"s\">\"contatti.html\"</span> <span class=\"a\">title</span>=<span class=\"s\">\"Scrivici\"</span><span class=\"k\">&gt;</span>Contatti<span class=\"k\">&lt;/a</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "tag",
     "Aggiungono **informazioni** a un elemento"
    ],
    [
     "file-code",
     "Solo nel **tag di apertura**: `nome=\"valore\"`"
    ],
    [
     "list",
     "Più attributi, separati da spazi, in qualsiasi ordine"
    ],
    [
     "circle-check",
     "**Booleani**: basta scriverli (`required`, `controls`); `required=\"false\"` **non** lo disattiva"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Gli attributi globali",
   "righe": [
    [
     "Attributo",
     "A che cosa serve",
     "Esempio"
    ],
    [
     "`id`",
     "un nome **unico nella pagina**: link, CSS, JavaScript",
     "`&lt;section id=\"contatti\"&gt;`"
    ],
    [
     "`class`",
     "uno o più **gruppi** con lo stesso stile",
     "`&lt;p class=\"nota importante\"&gt;`"
    ],
    [
     "`title`",
     "testo al passaggio del mouse (non su telefono)",
     "`&lt;abbr title=\"World Wide Web\"&gt;`"
    ],
    [
     "`style`",
     "stile CSS sull’elemento (da evitare, 5.1)",
     "`&lt;p style=\"color:red\"&gt;`"
    ],
    [
     "`data-*`",
     "dati personalizzati per JavaScript",
     "`&lt;button data-taglia=\"M\"&gt;`"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Annidare gli elementi",
   "html": "<span class=\"c\">&lt;!-- corretto --&gt;</span>\n<span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Questo è <span class=\"k\">&lt;strong</span><span class=\"k\">&gt;</span>molto <span class=\"k\">&lt;em</span><span class=\"k\">&gt;</span>importante<span class=\"k\">&lt;/em</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/strong</span><span class=\"k\">&gt;</span>.<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span>\n<span class=\"c\">&lt;!-- sbagliato: strong si chiude prima di em --&gt;</span>\n<span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Questo è <span class=\"k\">&lt;strong</span><span class=\"k\">&gt;</span>molto <span class=\"k\">&lt;em</span><span class=\"k\">&gt;</span>importante<span class=\"k\">&lt;/strong</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/em</span><span class=\"k\">&gt;</span>.<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "layers",
     "Un elemento dentro un altro: **annidamento**"
    ],
    [
     "repeat",
     "**L’ultimo aperto è il primo che si chiude**, come le scatole cinesi"
    ],
    [
     "circle-x",
     "Gli elementi non si possono **accavallare**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "La famiglia degli elementi",
   "tessere": [
    [
     "layers",
     "Genitore",
     "*parent* · l’elemento che ne contiene un altro"
    ],
    [
     "layers",
     "Figlio",
     "*child* · l’elemento contenuto"
    ],
    [
     "layers",
     "Fratelli",
     "*siblings* · stesso genitore"
    ]
   ],
   "nota": "Servirà di continuo in CSS e JavaScript · Per vedere l’annidamento si **indenta**: 2 o 4 spazi per livello"
  },
  {
   "tipo": "anim",
   "titolo": "Chiudere nell’ordine giusto",
   "id": "f-annidamento"
  },
  {
   "tipo": "punti",
   "titolo": "Il browser è tollerante",
   "punti": [
    [
     "eye",
     "Una pagina con errori **viene comunque disegnata**"
    ],
    [
     "circle-x",
     "Il browser deve **indovinare** che cosa intendeva l’autore: browser diversi, risultati diversi"
    ],
    [
     "search",
     "Il **validatore** confronta il codice con lo standard e segnala ogni errore **con il numero di riga**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Gli errori più frequenti",
   "righe": [
    [
     "Errore",
     "Sbagliato",
     "Corretto"
    ],
    [
     "Tag non chiuso",
     "`&lt;p&gt;Testo &lt;strong&gt;importante&lt;/p&gt;`",
     "`…&lt;/strong&gt;&lt;/p&gt;`"
    ],
    [
     "Annidamento incrociato",
     "`&lt;em&gt;&lt;strong&gt;x&lt;/em&gt;&lt;/strong&gt;`",
     "`&lt;em&gt;&lt;strong&gt;x&lt;/strong&gt;&lt;/em&gt;`"
    ],
    [
     "Virgolette dimenticate",
     "`&lt;a href=\"pagina.html&gt;`",
     "`&lt;a href=\"pagina.html\"&gt;`"
    ],
    [
     "`id` ripetuto",
     "due elementi con `id=\"foto\"`",
     "`class=\"foto\"`"
    ],
    [
     "Blocco dentro un paragrafo",
     "`&lt;p&gt;&lt;ul&gt;…&lt;/ul&gt;&lt;/p&gt;`",
     "chiudere il `p` prima"
    ],
    [
     "Attributo nel tag di chiusura",
     "`&lt;/img src=\"…\"&gt;`",
     "`&lt;img src=\"…\" alt=\"…\"&gt;`"
    ],
    [
     "Barra rovesciata nei percorsi",
     "`src=\"img\\foto.jpg\"`",
     "`src=\"img/foto.jpg\"`"
    ],
    [
     "Tag inventato",
     "`&lt;pargraph&gt;`",
     "`&lt;p&gt;`"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Ispezionare con F12",
   "punti": [
    [
     "search",
     "**F12** (o tasto destro › *Ispeziona*): gli strumenti per sviluppatori, *DevTools*"
    ],
    [
     "monitor",
     "Scheda *Elements*: **come il browser ha interpretato** il codice"
    ],
    [
     "eye",
     "Passi sopra un elemento e lo vedi evidenziato; a destra gli **stili applicati**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Abitudini che evitano gli errori",
   "punti": [
    [
     "list",
     "**Indenta** sempre: in VS Code Alt+Maiusc+F"
    ],
    [
     "tag",
     "Scrivi **apertura e chiusura insieme**, poi riempi in mezzo (Emmet)"
    ],
    [
     "clock",
     "**Salva e controlla spesso**, non dopo cento righe"
    ],
    [
     "palette",
     "Leggi i **colori dell’editor**: colore strano → di solito manca una virgoletta"
    ],
    [
     "shield-check",
     "Estensione **HTMLHint**: sottolinea gli errori mentre scrivi"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«La pagina si vede bene, quindi il codice è giusto.»",
   "si": "Il browser **corregge da solo molti errori**, quindi “si vede bene” non vuol dire “è giusto”. Lo stesso errore può rompere la pagina in un altro browser, peggiorarne l’accessibilità o far fallire JavaScript. **Il controllo vero è il validatore.**"
  },
  {
   "tipo": "punti",
   "titolo": "Commenti, maiuscole e virgolette",
   "punti": [
    [
     "message-square",
     "Un **commento** va tra `&lt;!--` e `--&gt;`: il browser lo ignora… ma **chiunque lo legge nel sorgente**"
    ],
    [
     "languages",
     "Tag e attributi non distinguono maiuscole e minuscole, ma si scrivono **sempre minuscoli**"
    ],
    [
     "file-code",
     "Valori degli attributi **tra virgolette doppie**"
    ],
    [
     "hash",
     "`id` e `class` **distinguono** maiuscole e minuscole: `Menu` ≠ `menu`"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho scritto l’attributo nel tag di chiusura: `&lt;/a href=\"pagina.html\"&gt;`.»",
   "si": "Gli attributi **si scrivono solo nel tag di apertura**. Il tag di chiusura contiene soltanto la barra e il nome: `&lt;/a&gt;`."
  },
  {
   "tipo": "errore",
   "no": "«Ho dato `id=\"foto\"` a tutte le immagini della galleria, così hanno lo stesso stile.»",
   "si": "L’`id` deve essere **unico nella pagina**. Per dare lo stesso stile a più elementi si usa **la stessa classe**: `class=\"foto\"`. JavaScript, cercando un `id` ripetuto, troverebbe solo il primo."
  },
  {
   "tipo": "domanda",
   "testo": "Che differenza c’è tra “tag” ed “elemento”?",
   "risposta": "Il tag è l’etichetta tra parentesi angolari (di apertura o di chiusura); l’elemento è l’insieme di tag di apertura, contenuto e tag di chiusura."
  },
  {
   "tipo": "sezione",
   "num": "2.2",
   "titolo": "Lo scheletro della pagina",
   "sotto": "Ogni pagina ha lo stesso scheletro",
   "foto": {
    "src": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "Lo scheletro di una pagina",
   "html": "<span class=\"k\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"k\">&lt;html</span> <span class=\"a\">lang</span>=<span class=\"s\">\"it\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;head</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">charset</span>=<span class=\"s\">\"UTF-8\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"viewport\"</span> <span class=\"a\">content</span>=<span class=\"s\">\"width=device-width, initial-scale=1.0\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;title</span><span class=\"k\">&gt;</span>Le mie ricette<span class=\"k\">&lt;/title</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;link</span> <span class=\"a\">rel</span>=<span class=\"s\">\"stylesheet\"</span> <span class=\"a\">href</span>=<span class=\"s\">\"style.css\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/head</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;body</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;h1</span><span class=\"k\">&gt;</span>Le mie ricette<span class=\"k\">&lt;/h1</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Benvenuti nel mio ricettario.<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;script</span> <span class=\"a\">src</span>=<span class=\"s\">\"script.js\"</span> <span class=\"a\">defer</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/script</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/body</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/html</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "punti",
   "titolo": "DOCTYPE e lang",
   "punti": [
    [
     "file-code",
     "`&lt;!DOCTYPE html&gt;` dichiara **HTML moderno** (HTML5). Non è un tag, è un’istruzione per il browser"
    ],
    [
     "triangle-alert",
     "Senza, il browser va in ***quirks mode*** e imita i browser degli anni Novanta"
    ],
    [
     "globe",
     "`&lt;html lang=\"it\"&gt;` è l’**elemento radice**; `lang` serve a screen reader, traduttori e motori di ricerca"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "head: la codifica",
   "punti": [
    [
     "file",
     "`&lt;head&gt;`: informazioni sulla pagina **che non si vedono** nella pagina"
    ],
    [
     "languages",
     "`&lt;meta charset=\"UTF-8\"&gt;`: la **codifica**, comprende tutti i caratteri del mondo"
    ],
    [
     "triangle-alert",
     "Senza, le lettere accentate possono diventare «Ã¨»"
    ],
    [
     "arrow-right",
     "Va messo come **prima riga** di `head`"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "head: il viewport",
   "punti": [
    [
     "smartphone",
     "`&lt;meta name=\"viewport\" …&gt;` dice al telefono di usare la sua **vera larghezza**"
    ],
    [
     "monitor",
     "Senza, il telefono finge di essere uno schermo largo **980 pixel** e rimpicciolisce tutto"
    ],
    [
     "layout-template",
     "Indispensabile per il **responsive design** (7.3)"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "title, link, script, body",
   "tessere": [
    [
     "file",
     "`&lt;title&gt;`",
     "scheda del browser, preferiti, titolo blu di Google · **non** è l’`h1`"
    ],
    [
     "palette",
     "`&lt;link rel=\"stylesheet\"&gt;`",
     "collega un foglio di stile (cap. 5–7)"
    ],
    [
     "code",
     "`&lt;script&gt;`",
     "collega un file JavaScript (cap. 8)"
    ],
    [
     "monitor",
     "`&lt;body&gt;`",
     "**tutto ciò che si vede** nella pagina"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "head e body",
   "punti": [
    [
     "layers",
     "`head` e `body` sono **figli di `html`** e **fratelli** tra loro"
    ],
    [
     "file",
     "In `head` va solo ciò che riguarda la pagina **nel suo insieme**"
    ],
    [
     "monitor",
     "In `body` va **ciò che l’utente vede**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo `&lt;h1&gt;` dentro `&lt;head&gt;`, tanto è in cima.»",
   "si": "In `head` vanno **solo informazioni sulla pagina**, non contenuto visibile. Il browser, trovando un `h1` nel posto sbagliato, chiude `head` da solo e lo sposta in `body`, ma la struttura scritta è sbagliata e il validatore lo segnala."
  },
  {
   "tipo": "errore",
   "no": "«Il `title` è il titolo grande che si vede in cima alla pagina.»",
   "si": "Il `title` compare **nella scheda del browser e nei risultati di Google**, non nella pagina. Il titolo visibile si scrive con `&lt;h1&gt;` nel `body`."
  },
  {
   "tipo": "errore",
   "no": "«Nella mia pagina le lettere accentate escono come “perchÃ©”.»",
   "si": "Manca `&lt;meta charset=\"UTF-8\"&gt;`, oppure il file è stato salvato con un’altra codifica. **La codifica dichiarata e quella usata per salvare il file devono coincidere**: in VS Code si legge in basso a destra (“UTF-8”)."
  },
  {
   "tipo": "codice",
   "titolo": "File, cartelle e nomi",
   "html": "mio-sito/\n├── index.html\n├── chi-siamo.html\n├── contatti.html\n├── css/\n│   └── style.css\n├── js/\n│   └── script.js\n└── img/\n    ├── logo.svg\n    └── foto-classe.jpg",
   "note": [
    [
     "house",
     "La home si chiama sempre `index.html`"
    ],
    [
     "file",
     "Nomi **minuscoli**, senza spazi né accenti, parole separate da **trattini**"
    ],
    [
     "server",
     "I server **Linux** distinguono maiuscole e minuscole; gli spazi negli URL diventano `%20`"
    ],
    [
     "triangle-alert",
     "Su Windows funziona, **online può rompersi**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Sul mio computer l’immagine si vede, online no: il sito è rotto.»",
   "si": "Quasi sempre è un problema di **maiuscole nel nome del file**: nel codice c’è `foto.jpg`, il file si chiama Foto.JPG. Windows li considera uguali, il server online no. Per questo i nomi si scrivono sempre in minuscolo."
  },
  {
   "tipo": "domanda",
   "testo": "Togliamo la riga `&lt;meta name=\"viewport\"&gt;` e apriamo la pagina sul telefono. Che cosa vi aspettate?",
   "risposta": "Il telefono finge di essere uno schermo largo circa 980 pixel e rimpicciolisce tutta la pagina: il testo diventa minuscolo e bisogna ingrandire con le dita."
  },
  {
   "tipo": "sezione",
   "num": "2.3",
   "titolo": "Elementi di blocco ed elementi in linea",
   "sotto": "Blocchi e righe",
   "foto": {
    "src": "https://images.unsplash.com/photo-1784884513649-6c24a2ff95ef?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Blocco o in linea?",
   "a": {
    "icona": "layers",
    "titolo": "Elementi di blocco",
    "tono": "buono",
    "righe": [
     "• **nuova riga**, tutta la larghezza disponibile",
     "• `h1`–`h6`, `p`, `ul`, `ol`, `li`, `table`, `form`, `blockquote`, `div`",
     "• i tag semantici: `header`, `section`, `footer`…"
    ]
   },
   "b": {
    "icona": "text-cursor",
    "titolo": "Elementi in linea",
    "righe": [
     "• **restano nella riga**, solo lo spazio del contenuto",
     "• `a`, `strong`, `em`, `span`, `code`, `abbr`",
     "• `img`, `input`, `button`"
    ]
   }
  },
  {
   "tipo": "schema",
   "titolo": "Blocchi e in linea in una pagina",
   "sel": "#s-blocchi"
  },
  {
   "tipo": "punti",
   "titolo": "Regola di annidamento",
   "punti": [
    [
     "circle-check",
     "Un elemento **in linea** può stare dentro un blocco"
    ],
    [
     "circle-x",
     "Un **blocco** non dovrebbe stare dentro un elemento **in linea**"
    ],
    [
     "file-warning",
     "Un `p` **non può contenere altri blocchi**, nemmeno un altro `p`: il browser chiude il paragrafo prima"
    ],
    [
     "link",
     "Eccezione: `a` può avvolgere un blocco (una card cliccabile)"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "div e span: contenitori generici",
   "html": "<span class=\"k\">&lt;div</span> <span class=\"a\">class</span>=<span class=\"s\">\"card\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;h3</span><span class=\"k\">&gt;</span>Tiramisù<span class=\"k\">&lt;/h3</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Difficoltà: <span class=\"k\">&lt;span</span> <span class=\"a\">class</span>=<span class=\"s\">\"facile\"</span><span class=\"k\">&gt;</span>facile<span class=\"k\">&lt;/span</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/div</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "package",
     "**Nessun significato**: servono a raggruppare, per lo stile o per JavaScript"
    ],
    [
     "layers",
     "`div` è **di blocco**: raggruppa parti di pagina"
    ],
    [
     "text-cursor",
     "`span` è **in linea**: marca un pezzo di testo"
    ],
    [
     "lightbulb",
     "Prima di un `div` chiediti se c’è un **tag semantico** (4.3)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il CSS può cambiare tutto",
   "punti": [
    [
     "paintbrush",
     "Il modo di disporsi **si può cambiare con il CSS** (`display`, 6.4)"
    ],
    [
     "link",
     "Un link può diventare un blocco, una voce di elenco può mettersi in linea"
    ],
    [
     "circle-check",
     "Blocco o in linea è solo il **comportamento predefinito**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo due `&lt;div&gt;` uno accanto all’altro nel codice, ma nel browser vengono uno sotto l’altro.»",
   "si": "Il `div` è **di blocco**: occupa tutta la riga e il successivo va a capo, qualunque sia la disposizione nel codice. Per affiancarli serve il CSS (Flexbox o Grid, 3.12–3.13)."
  }
 ]
};
