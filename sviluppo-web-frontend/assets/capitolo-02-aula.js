window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "02",
 "titolo": "HTML: la struttura",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "HTML: la struttura",
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
     "Il testo"
    ],
    [
     "2.4",
     "Elementi di blocco ed elementi in linea"
    ],
    [
     "2.5",
     "Elenchi"
    ],
    [
     "2.6",
     "Collegamenti"
    ],
    [
     "2.7",
     "Immagini"
    ],
    [
     "2.8",
     "Tabelle"
    ],
    [
     "2.9",
     "Moduli"
    ],
    [
     "2.10",
     "Multimedia e contenuti incorporati"
    ],
    [
     "2.11",
     "HTML semantico"
    ],
    [
     "2.12",
     "Metadati e SEO di base"
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
     "stile CSS sull’elemento (da evitare, 3.1)",
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
     "Indispensabile per il **responsive design** (3.15)"
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
     "collega un foglio di stile (cap. 3)"
    ],
    [
     "code",
     "`&lt;script&gt;`",
     "collega un file JavaScript (cap. 4)"
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
   "titolo": "Il testo",
   "sotto": "Titoli, paragrafi, enfasi",
   "foto": {
    "src": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "I titoli: da h1 a h6",
   "html": "<span class=\"k\">&lt;h1</span><span class=\"k\">&gt;</span>Le mie ricette<span class=\"k\">&lt;/h1</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>Primi piatti<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;h3</span><span class=\"k\">&gt;</span>Pasta alla carbonara<span class=\"k\">&lt;/h3</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;h3</span><span class=\"k\">&gt;</span>Risotto ai funghi<span class=\"k\">&lt;/h3</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>Dolci<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;h3</span><span class=\"k\">&gt;</span>Tiramisù<span class=\"k\">&lt;/h3</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "list",
     "`h1` titolo principale, `h2` sezioni, `h3` sottosezioni…"
    ],
    [
     "book-open",
     "Descrivono la **struttura**, come l’indice di un libro: non la grandezza"
    ],
    [
     "circle-check",
     "**Un solo `h1`** per pagina, **nessun livello saltato**"
    ],
    [
     "ear",
     "Gli screen reader **saltano da un titolo all’altro**; anche Google li usa"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Uso `&lt;h4&gt;` perché `&lt;h1&gt;` è troppo grande.»",
   "si": "Il livello del titolo si sceglie **in base alla struttura**, non all’aspetto. La dimensione si cambia con il CSS (`font-size`). Scegliere i titoli per l’aspetto rovina la navigazione con gli screen reader e l’indicizzazione."
  },
  {
   "tipo": "tessere",
   "titolo": "Paragrafi, a capo e linee",
   "tessere": [
    [
     "file-text",
     "`&lt;p&gt;`",
     "il **paragrafo**"
    ],
    [
     "corner-down-left",
     "`&lt;br&gt;`",
     "**a capo** nello stesso paragrafo: indirizzi, poesie"
    ],
    [
     "minus",
     "`&lt;hr&gt;`",
     "**cambio di argomento**: linea orizzontale"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Gli spazi bianchi si riducono a uno",
   "html": "<span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Questa frase\nè scritta\nsu tre righe.<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span>\n<span class=\"c\">&lt;!-- nel browser: \"Questa frase è scritta su tre righe.\" --&gt;</span>",
   "note": [
    [
     "minus",
     "Spazi, tabulazioni e a capo diventano **un solo spazio**"
    ],
    [
     "code",
     "Così si può **indentare** senza cambiare l’aspetto"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Per staccare i paragrafi ho messo cinque `&lt;br&gt;` di fila.»",
   "si": "Lo spazio tra i blocchi **si regola con il CSS** (`margin`), non con i `&lt;br&gt;`. I `&lt;br&gt;` vanno usati solo dove l’a capo fa parte del contenuto (un indirizzo, i versi di una poesia)."
  },
  {
   "tipo": "punti",
   "titolo": "Enfasi: significato o aspetto?",
   "punti": [
    [
     "triangle-alert",
     "`&lt;strong&gt;` = **importanza** · `&lt;em&gt;` = **enfasi** (l’accento a voce alta): gli screen reader possono pronunciarli diversamente"
    ],
    [
     "paintbrush",
     "`&lt;b&gt;` e `&lt;i&gt;` = solo grassetto e corsivo, **senza significato**"
    ],
    [
     "languages",
     "`&lt;i&gt;` per termini stranieri, nomi scientifici, titoli di opere"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I tag del testo (1)",
   "righe": [
    [
     "Tag",
     "Significato",
     "Esempio"
    ],
    [
     "`&lt;strong&gt;`",
     "importanza, serietà, urgenza",
     "Non toccare: **alta tensione**"
    ],
    [
     "`&lt;em&gt;`",
     "enfasi che cambia il senso",
     "Io *non* ho detto questo"
    ],
    [
     "`&lt;b&gt;`",
     "evidenziato, senza importanza",
     "nome del prodotto in una recensione"
    ],
    [
     "`&lt;i&gt;`",
     "voce o tono diverso",
     "*Homo sapiens*, il *download*"
    ],
    [
     "`&lt;mark&gt;`",
     "rilevante in quel contesto",
     "parole cercate nei risultati"
    ],
    [
     "`&lt;small&gt;`",
     "note a margine, avvertenze",
     "© 2026, tutti i diritti riservati"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I tag del testo (2)",
   "righe": [
    [
     "Tag",
     "Significato",
     "Esempio"
    ],
    [
     "`&lt;sub&gt;` `&lt;sup&gt;`",
     "pedice e apice",
     "H₂O, x²"
    ],
    [
     "`&lt;code&gt;`",
     "codice in una frase",
     "Il tag `&lt;p&gt;`"
    ],
    [
     "`&lt;pre&gt;`",
     "testo preformattato",
     "blocchi di codice"
    ],
    [
     "`&lt;blockquote&gt;`",
     "citazione lunga a blocco (con `cite`)",
     "una citazione di un autore"
    ],
    [
     "`&lt;q&gt;`",
     "citazione breve (aggiunge le virgolette)",
     "Disse «Eureka»"
    ],
    [
     "`&lt;abbr&gt;`",
     "abbreviazione (con `title`)",
     "`&lt;abbr title=\"Uniform Resource Locator\"&gt;URL&lt;/abbr&gt;`"
    ],
    [
     "`&lt;time&gt;`",
     "data leggibile anche dalle macchine",
     "`&lt;time datetime=\"2026-10-07\"&gt;`"
    ],
    [
     "`&lt;del&gt;` `&lt;ins&gt;`",
     "testo cancellato e inserito",
     "Prezzo: 30 € → 20 €"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Perché esistono sia `&lt;strong&gt;` sia `&lt;b&gt;`, se tutti e due mettono in grassetto?",
   "risposta": "Perché in HTML conta il significato, non l’aspetto: `strong` dice che il testo è importante (e lo screen reader lo può comunicare), b lo evidenzia soltanto. L’aspetto si può sempre cambiare con il CSS."
  },
  {
   "tipo": "tabella",
   "titolo": "Entità: i caratteri speciali",
   "righe": [
    [
     "Entità",
     "Carattere",
     "Quando serve"
    ],
    [
     "`&amp;lt;` e `&amp;gt;`",
     "&lt; e &gt;",
     "mostrare un tag come testo"
    ],
    [
     "`&amp;amp;`",
     "&amp;",
     "la «e commerciale» stessa"
    ],
    [
     "`&amp;quot;`",
     "\"",
     "virgolette in un valore di attributo"
    ],
    [
     "`&amp;nbsp;`",
     "spazio indivisibile",
     "tiene unite «10 kg», «pag. 5»"
    ],
    [
     "`&amp;copy;` `&amp;reg;` `&amp;trade;`",
     "© ® ™",
     "diritti e marchi"
    ],
    [
     "`&amp;euro;`",
     "€",
     "con UTF-8 si può anche scrivere direttamente"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Quando servono davvero",
   "punti": [
    [
     "code",
     "Se scrivi `&lt;` il browser crede che inizi un tag: serve l’**entità**"
    ],
    [
     "languages",
     "Con **UTF-8** lettere accentate e quasi tutti i simboli si scrivono direttamente"
    ],
    [
     "hash",
     "Le entità servono soprattutto per `&lt;`, `&gt;`, `&amp;` e lo spazio indivisibile"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Uso `&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;` per spostare il testo a destra.»",
   "si": "Lo spazio indivisibile serve a **non spezzare** due parole a fine riga, non a impaginare. Rientri e spaziature si fanno con il CSS (`padding`, `margin`, `text-indent`)."
  },
  {
   "tipo": "sezione",
   "num": "2.4",
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
     "Prima di un `div` chiediti se c’è un **tag semantico** (2.11)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il CSS può cambiare tutto",
   "punti": [
    [
     "paintbrush",
     "Il modo di disporsi **si può cambiare con il CSS** (`display`, 3.10)"
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
  },
  {
   "tipo": "sezione",
   "num": "2.5",
   "titolo": "Elenchi",
   "sotto": "Tre tipi di elenco",
   "foto": {
    "src": "https://images.unsplash.com/photo-1625053376622-e462848c453f?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Scegli in base all’ordine",
   "righe": [
    [
     "Tipo",
     "Tag",
     "Quando"
    ],
    [
     "Puntato",
     "`&lt;ul&gt;` + `&lt;li&gt;`",
     "l’ordine **non conta**: ingredienti, menu"
    ],
    [
     "Numerato",
     "`&lt;ol&gt;` + `&lt;li&gt;`",
     "l’ordine **conta**: passaggi, classifica"
    ],
    [
     "Definizioni",
     "`&lt;dl&gt;` + `&lt;dt&gt;` + `&lt;dd&gt;`",
     "glossari, scheda tecnica"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Elenco numerato e di definizioni",
   "html": "<span class=\"k\">&lt;ol</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>Cuocere la pasta.<span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>Rosolare il guanciale.<span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>Mescolare uova e pecorino.<span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/ol</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;dl</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;dt</span><span class=\"k\">&gt;</span>HTML<span class=\"k\">&lt;/dt</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;dd</span><span class=\"k\">&gt;</span>Linguaggio di markup per la struttura.<span class=\"k\">&lt;/dd</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;dt</span><span class=\"k\">&gt;</span>CSS<span class=\"k\">&lt;/dt</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;dd</span><span class=\"k\">&gt;</span>Linguaggio per l’aspetto.<span class=\"k\">&lt;/dd</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/dl</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "list-ordered",
     "`start=\"5\"` parte da 5, `reversed` scende, `type` cambia lo stile"
    ],
    [
     "paintbrush",
     "Puntini e numeri si cambiano di solito con il CSS (`list-style`)"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Elenchi annidati",
   "html": "<span class=\"k\">&lt;ul</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>Frontend\n    <span class=\"k\">&lt;ul</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>HTML<span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>CSS<span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;/ul</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;li</span><span class=\"k\">&gt;</span>Backend<span class=\"k\">&lt;/li</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/ul</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "layers",
     "Il sottoelenco va **dentro un `&lt;li&gt;`**"
    ],
    [
     "circle-x",
     "`ul` e `ol` possono avere come figli **solo `li`**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo il sottoelenco tra un `&lt;/li&gt;` e il successivo `&lt;li&gt;`.»",
   "si": "Dentro `ul` e `ol` ci possono essere **solo elementi li**. Il sottoelenco va **dentro** la voce a cui appartiene, prima del suo `&lt;/li&gt;`."
  },
  {
   "tipo": "punti",
   "titolo": "I menu sono elenchi",
   "punti": [
    [
     "list",
     "Una serie di link è un **elenco** di voci senza ordine"
    ],
    [
     "link",
     "Quasi tutti i menu sono un `ul` con un `li` per ogni link"
    ],
    [
     "paintbrush",
     "Il CSS li trasforma poi in barre orizzontali (3.12)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: il curriculum",
   "punti": [
    [
     "list",
     "Le **competenze** con un `ul` annidato: Informatica › HTML, CSS, JavaScript; Lingue › Inglese, Francese"
    ],
    [
     "trophy",
     "La **top 5** dei film preferiti con un `ol` `reversed`"
    ],
    [
     "book-open",
     "Un piccolo **glossario** con `dl`"
    ],
    [
     "zap",
     "Con Emmet: `ul&gt;li*3&gt;a` genera tre voci con un link ciascuna"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "2.6",
   "titolo": "Collegamenti",
   "sotto": "Saltare da un documento all’altro",
   "foto": {
    "src": "https://images.unsplash.com/photo-1545987796-200677ee1011?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "I collegamenti",
   "html": "<span class=\"k\">&lt;a</span> <span class=\"a\">href</span>=<span class=\"s\">\"https://it.wikipedia.org/wiki/World_Wide_Web\"</span><span class=\"k\">&gt;</span>La voce di Wikipedia sul Web<span class=\"k\">&lt;/a</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "link",
     "**Ipertesto**: l’idea che ha dato il nome all’HTML"
    ],
    [
     "tag",
     "`&lt;a&gt;` (*anchor*) con l’attributo `href` (*hypertext reference*)"
    ],
    [
     "mouse-pointer-click",
     "Il contenuto di `a` è la parte **cliccabile**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il testo del link",
   "punti": [
    [
     "circle-x",
     "«Clicca qui» non dice niente fuori dal contesto"
    ],
    [
     "ear",
     "Con lo screen reader spesso si ascolta **solo l’elenco dei link**"
    ],
    [
     "search",
     "Anche Google usa quel testo per capire la pagina di destinazione"
    ],
    [
     "circle-check",
     "**Il testo del link deve dire dove porta**"
    ]
   ]
  },
  {
   "tipo": "confronto",
   "titolo": "Percorso assoluto o relativo?",
   "a": {
    "icona": "globe",
    "titolo": "Assoluto",
    "righe": [
     "• **indirizzo completo**, dal protocollo",
     "• `https://www.scuola.it/corsi/index.html`",
     "• per i link **verso altri siti**"
    ]
   },
   "b": {
    "icona": "folder",
    "titolo": "Relativo",
    "tono": "buono",
    "righe": [
     "• **dove sta il file** a partire dalla pagina con il link",
     "• per i link **tra pagine dello stesso sito**",
     "• funziona sul tuo computer e online; la cartella si può spostare"
    ]
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Leggere un percorso relativo",
   "righe": [
    [
     "Percorso",
     "Significato"
    ],
    [
     "`contatti.html`",
     "il file nella **stessa cartella**"
    ],
    [
     "`img/logo.png`",
     "il file dentro la sottocartella `img`"
    ],
    [
     "`../index.html`",
     "la **cartella superiore** (`..` = sali di un livello)"
    ],
    [
     "`../../css/style.css`",
     "sali di due livelli, poi entra in `css`"
    ],
    [
     "`/img/logo.png`",
     "dalla **radice del sito** (solo su un server)"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Come si legge un percorso",
   "id": "f-percorso"
  },
  {
   "tipo": "errore",
   "no": "«Ho scritto il link C:\\Users\\Marco\\Desktop\\sito\\`foto.jpg` e sul mio computer funziona.»",
   "si": "È un percorso che esiste **solo sul computer di Marco**: online, o sul computer del professore, quel file non c’è. Nei siti si usano **percorsi relativi** alla pagina, con le barre normali /."
  },
  {
   "tipo": "errore",
   "no": "«Il link ../`index.html` non funziona, eppure il file c’è.»",
   "si": "Il percorso relativo si calcola **a partire dalla cartella della pagina che contiene il link**, non dalla cartella principale del sito. Se la pagina è già nella cartella principale, ../ esce dal sito."
  },
  {
   "tipo": "codice",
   "titolo": "Ancore: link a un punto della pagina",
   "html": "<span class=\"k\">&lt;a</span> <span class=\"a\">href</span>=<span class=\"s\">\"#ingredienti\"</span><span class=\"k\">&gt;</span>Vai agli ingredienti<span class=\"k\">&lt;/a</span><span class=\"k\">&gt;</span>\n…\n<span class=\"k\">&lt;h2</span> <span class=\"a\">id</span>=<span class=\"s\">\"ingredienti\"</span><span class=\"k\">&gt;</span>Ingredienti<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span>\n…\n<span class=\"k\">&lt;a</span> <span class=\"a\">href</span>=<span class=\"s\">\"#\"</span><span class=\"k\">&gt;</span>Torna su<span class=\"k\">&lt;/a</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "anchor",
     "`#` + un **id**: porta al punto con quell’id"
    ],
    [
     "list",
     "Indici in cima alle pagine lunghe, pulsanti «torna su»"
    ],
    [
     "link",
     "Anche in un’altra pagina: `regolamento.html#orari`"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Altri attributi e link speciali",
   "righe": [
    [
     "Codice",
     "Che cosa fa"
    ],
    [
     "`target=\"_blank\"`",
     "**nuova scheda** · usalo con misura; i browser aggiungono `rel=\"noopener\"`"
    ],
    [
     "`href=\"mailto:…\"`",
     "apre la **posta** con il destinatario già scritto"
    ],
    [
     "`href=\"tel:+39…\"`",
     "sul telefono avvia la **chiamata**"
    ],
    [
     "`download`",
     "**scarica** il file invece di aprirlo"
    ]
   ]
  },
  {
   "tipo": "confronto",
   "titolo": "Link o pulsante?",
   "a": {
    "icona": "link",
    "titolo": "Un link porta da qualche parte",
    "righe": [
     "• `&lt;a href=\"…\"&gt;`",
     "• cambia pagina o punto della pagina"
    ]
   },
   "b": {
    "icona": "mouse-pointer-click",
    "titolo": "Un pulsante fa qualcosa",
    "tono": "buono",
    "righe": [
     "• `&lt;button&gt;`",
     "• apre un menu, invia un modulo, cambia tema",
     "• meglio di `&lt;a href=\"#\"&gt;` con tastiera e screen reader"
    ]
   }
  },
  {
   "tipo": "domanda",
   "testo": "Che differenza c’è tra `href=\"contatti.html\"` e `href=\"https://www.miosito.it/contatti.html\"`? Quale conviene usare tra le pagine del vostro sito?",
   "risposta": "Il primo è relativo (il file nella stessa cartella della pagina), il secondo assoluto. Tra pagine dello stesso sito conviene il relativo: funziona sia sul computer sia online, e anche se il sito cambia indirizzo."
  },
  {
   "tipo": "sezione",
   "num": "2.7",
   "titolo": "Immagini",
   "sotto": "Un file separato, con una descrizione",
   "foto": {
    "src": "https://images.unsplash.com/photo-1616418625172-c607e16733ca?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "Immagini",
   "html": "<span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"img/tiramisu.jpg\"</span>\n     <span class=\"a\">alt</span>=<span class=\"s\">\"Fetta di tiramisù con cacao in polvere su un piattino bianco\"</span>\n     <span class=\"a\">width</span>=<span class=\"s\">\"800\"</span> <span class=\"a\">height</span>=<span class=\"s\">\"600\"</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "image",
     "`&lt;img&gt;` è un elemento **vuoto**"
    ],
    [
     "download",
     "L’immagine **non sta nell’HTML**: è un file che il browser chiede al server (1.2)"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Gli attributi di img",
   "righe": [
    [
     "Attributo",
     "A che cosa serve"
    ],
    [
     "`src`",
     "il **percorso** del file (vale quanto detto sui percorsi relativi)"
    ],
    [
     "`alt`",
     "il **testo alternativo**: descrive l’immagine a chi non la vede"
    ],
    [
     "`width` `height`",
     "dimensioni originali **senza unità**: il browser riserva lo spazio e il testo non «salta»"
    ],
    [
     "`loading=\"lazy\"`",
     "carica l’immagine **solo quando ci si sta per arrivare**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il testo alternativo",
   "punti": [
    [
     "ear",
     "`alt` è **obbligatorio**: lo leggono gli screen reader"
    ],
    [
     "image",
     "Compare **al posto dell’immagine** se non si carica"
    ],
    [
     "search",
     "Lo usano i **motori di ricerca**"
    ],
    [
     "pen-line",
     "Descrive **ciò che l’immagine comunica**, in poche parole, senza «immagine di»"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "alt sbagliato, alt corretto",
   "righe": [
    [
     "Situazione",
     "Sbagliato",
     "Corretto"
    ],
    [
     "Foto in un articolo",
     "`alt=\"foto1.jpg\"`",
     "`alt=\"Studenti in laboratorio davanti ai computer\"`"
    ],
    [
     "Logo che porta alla home",
     "`alt=\"logo\"`",
     "`alt=\"Liceo Spinelli, home page\"`"
    ],
    [
     "Icona di un pulsante",
     "nessun `alt`",
     "`alt=\"Cerca\"` (la funzione, non «lente»)"
    ],
    [
     "Solo decorativa",
     "`alt=\"decorazione con fiori\"`",
     "`alt=\"\"` (la salta)"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«L’`alt` lo lascio vuoto, tanto l’immagine si vede.»",
   "si": "Non si vede per **chi è cieco**, per chi ha una connessione lenta o se il percorso è sbagliato. Un `alt` mancante viene letto dagli screen reader con il nome del file (“d-s-c-zero-zero-quattro-due punto jpg”). **L’`alt` vuoto `alt=\"\"` si usa solo per le immagini decorative**."
  },
  {
   "tipo": "punti",
   "titolo": "Come si comprime un’immagine",
   "punti": [
    [
     "gauge",
     "**Con perdita** (*lossy*): butta i dettagli che l’occhio nota poco → file piccoli"
    ],
    [
     "image",
     "**Senza perdita** (*lossless*): conserva ogni pixel"
    ],
    [
     "layout-template",
     "**Raster**: griglie di pixel · **vettoriali**: forme geometriche, si ingrandiscono all’infinito"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I formati delle immagini",
   "righe": [
    [
     "Formato",
     "Tipo",
     "Trasp.",
     "Quando"
    ],
    [
     "**JPEG**",
     "raster, con perdita",
     "no",
     "fotografie"
    ],
    [
     "**PNG**",
     "raster, senza perdita",
     "sì",
     "grafiche con testo, schermate, loghi raster"
    ],
    [
     "**GIF**",
     "raster, 256 colori",
     "on/off",
     "piccole animazioni"
    ],
    [
     "**SVG**",
     "vettoriale (testo XML)",
     "sì",
     "loghi, icone, grafici"
    ],
    [
     "**WebP**",
     "raster, entrambe",
     "sì",
     "come JPEG e PNG, 25–35% più leggero"
    ],
    [
     "**AVIF**",
     "raster, entrambe",
     "sì",
     "il più efficiente, browser recenti"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "JPEG o PNG?",
   "foto": [
    {
     "src": "assets/immagini/jpeg-contro-png.png",
     "tit": "Aloni e quadratini nel JPEG, bordi netti nel PNG",
     "alt": "Confronto “da guardare nei dettagli”: lo stesso logo con testo salvato in JPEG di bassa qualità (aloni e quadratini intorno alle lettere) e in PNG o SVG (bordi netti), ingrandito al 400%. Si può produrre in laboratorio con un logo della scuola."
    }
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Peso e ottimizzazione",
   "punti": [
    [
     "image",
     "Le immagini sono **la parte più pesante** della maggior parte delle pagine"
    ],
    [
     "smartphone",
     "Una foto del telefono: **4000 px, 3–5 MB**; in pagina ne servono 1000–1500"
    ],
    [
     "gauge",
     "Ridimensionando e comprimendo: **150–300 KB**, venti volte meno, senza differenze visibili"
    ]
   ]
  },
  {
   "tipo": "formula",
   "titolo": "Esempio svolto: una galleria di 20 foto",
   "formula": "20 × 4 MB = **80 MB**",
   "righe": [
    [
     "A 20 Mbps (≈ 2,5 MB/s)",
     "**più di 30 secondi**"
    ],
    [
     "Ridimensionate a 1200 px, in WebP (≈ 200 KB)",
     "**4 MB in tutto**"
    ],
    [
     "Con le immagini ottimizzate",
     "**meno di 2 secondi**"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "figure e figcaption",
   "html": "<span class=\"k\">&lt;figure</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"img/server-cern.jpg\"</span> <span class=\"a\">alt</span>=<span class=\"s\">\"Computer NeXT con un’etichetta scritta a mano sul case\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;figcaption</span><span class=\"k\">&gt;</span>Il primo web server della storia, al CERN (1990).<span class=\"k\">&lt;/figcaption</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/figure</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "image",
     "**Immagine e didascalia** insieme: browser e screen reader sanno a chi si riferisce"
    ],
    [
     "ear",
     "`alt` **sostituisce** l’immagine per chi non la vede; la didascalia **la commenta** per tutti"
    ],
    [
     "code",
     "`figure` vale anche per grafici, schemi, codice"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "La favicon",
   "punti": [
    [
     "star",
     "L’**iconcina** nella scheda del browser e nei preferiti"
    ],
    [
     "link",
     "Si collega in `head`: `&lt;link rel=\"icon\" href=\"img/favicon.svg\"&gt;`"
    ],
    [
     "image",
     "Può essere `.ico`, `.png` (32×32) o `.svg`"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "2.8",
   "titolo": "Tabelle",
   "sotto": "Dati in righe e colonne",
   "foto": {
    "src": "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le tabelle",
   "punti": [
    [
     "layout-template",
     "**Dati in righe e colonne**: un orario, una classifica, i risultati di un esperimento"
    ],
    [
     "list",
     "Si costruisce **riga per riga**: `&lt;table&gt;` contiene le righe `&lt;tr&gt;`"
    ],
    [
     "tag",
     "Ogni riga contiene celle `&lt;td&gt;` (dato) o `&lt;th&gt;` (intestazione)"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Una tabella",
   "html": "<span class=\"k\">&lt;table</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;caption</span><span class=\"k\">&gt;</span>Orario del lunedì<span class=\"k\">&lt;/caption</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;thead</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span> <span class=\"a\">scope</span>=<span class=\"s\">\"col\"</span><span class=\"k\">&gt;</span>Ora<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span> <span class=\"a\">scope</span>=<span class=\"s\">\"col\"</span><span class=\"k\">&gt;</span>Materia<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span> <span class=\"a\">scope</span>=<span class=\"s\">\"col\"</span><span class=\"k\">&gt;</span>Aula<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/thead</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;tbody</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span> <span class=\"a\">scope</span>=<span class=\"s\">\"row\"</span><span class=\"k\">&gt;</span>8:00<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Informatica<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Lab 2<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span> <span class=\"a\">scope</span>=<span class=\"s\">\"row\"</span><span class=\"k\">&gt;</span>9:00<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Matematica<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>4B<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/tbody</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/table</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "tabella",
   "titolo": "Gli elementi di una tabella",
   "righe": [
    [
     "Elemento",
     "Ruolo"
    ],
    [
     "`&lt;caption&gt;`",
     "il **titolo** della tabella: subito dopo `&lt;table&gt;`; lo screen reader lo legge per primo"
    ],
    [
     "`&lt;thead&gt;` `&lt;tbody&gt;` `&lt;tfoot&gt;`",
     "raggruppano intestazione, corpo e piede (totali); nelle tabelle lunghe stampate l’intestazione si ripete"
    ],
    [
     "`&lt;th&gt;`",
     "cella di **intestazione** di una colonna o di una riga"
    ],
    [
     "senza CSS",
     "la tabella **non ha bordi**: le linee si aggiungono nel foglio di stile (3.9)"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Celle unite: colspan e rowspan",
   "html": "<span class=\"k\">&lt;table</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span><span class=\"k\">&gt;</span>Giorno<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span><span class=\"k\">&gt;</span>Mattina<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;th</span><span class=\"k\">&gt;</span>Pomeriggio<span class=\"k\">&lt;/th</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Lunedì<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span> <span class=\"a\">colspan</span>=<span class=\"s\">\"2\"</span><span class=\"k\">&gt;</span>Gita a Firenze (tutto il giorno)<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span> <span class=\"a\">rowspan</span>=<span class=\"s\">\"2\"</span><span class=\"k\">&gt;</span>Martedì e mercoledì<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Lezione<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Laboratorio<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;tr</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Lezione<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;td</span><span class=\"k\">&gt;</span>Libero<span class=\"k\">&lt;/td</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/tr</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/table</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "arrow-left-right",
     "`colspan=\"2\"`: una cella su **due colonne**"
    ],
    [
     "arrow-down",
     "`rowspan=\"2\"`: una cella su **due righe**"
    ],
    [
     "circle-x",
     "Le celle «coperte» **non si scrivono**: una cella in meno nel codice"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "La griglia sotto la tabella",
   "sel": "#s-celleunite"
  },
  {
   "tipo": "errore",
   "no": "«Ho messo `colspan=\"2\"` ma la riga ha una cella in più che sporge a destra.»",
   "si": "Una cella che occupa due colonne **sostituisce due celle**: nella riga se ne deve scrivere una in meno. Conviene disegnare la griglia su carta e contare le celle riga per riga."
  },
  {
   "tipo": "punti",
   "titolo": "Le tabelle non servono per impaginare",
   "punti": [
    [
     "history",
     "Negli anni Novanta, **prima del CSS**, l’impaginazione si faceva con le tabelle"
    ],
    [
     "circle-x",
     "Oggi è un **errore**: codice enorme e difficile da modificare"
    ],
    [
     "ear",
     "Lo screen reader legge la pagina come **una griglia di dati**"
    ],
    [
     "smartphone",
     "Una tabella **non si adatta** allo schermo del telefono"
    ]
   ],
   "nota": "L’impaginazione si fa con Flexbox e Grid (3.12–3.13)"
  },
  {
   "tipo": "storia",
   "titolo": "Space Jam, il sito che non è mai cambiato",
   "anno": "1996",
   "icona": "history",
   "punti": [
    [
     "film",
     "Il sito del film *Space Jam*, rimasto online **quasi identico per oltre vent’anni**"
    ],
    [
     "layout-template",
     "Impaginazione fatta con **tabelle**, immagini GIF e sfondo stellato"
    ],
    [
     "search",
     "Aprilo con **F12**: vedi quanto era diverso il modo di costruire le pagine"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "2.9",
   "titolo": "Moduli",
   "sotto": "Raccogliere dati dall’utente",
   "foto": {
    "src": "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "I moduli (form)",
   "html": "<span class=\"k\">&lt;form</span> <span class=\"a\">action</span>=<span class=\"s\">\"https://httpbin.org/get\"</span> <span class=\"a\">method</span>=<span class=\"s\">\"get\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"nome\"</span><span class=\"k\">&gt;</span>Nome<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"text\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"nome\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"nome\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"email\"</span><span class=\"k\">&gt;</span>E-mail<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">placeholder</span>=<span class=\"s\">\"nome@esempio.it\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;button</span> <span class=\"a\">type</span>=<span class=\"s\">\"submit\"</span><span class=\"k\">&gt;</span>Iscriviti<span class=\"k\">&lt;/button</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/form</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "tabella",
   "titolo": "Le parti di un modulo",
   "righe": [
    [
     "Parte",
     "A che cosa serve"
    ],
    [
     "`action`",
     "**l’indirizzo** a cui vanno i dati (un programma sul server); se manca, alla pagina stessa"
    ],
    [
     "`method`",
     "**come** vengono inviati: `get` o `post`"
    ],
    [
     "`name`",
     "il nome con cui il dato **arriva al server**: senza `name` il campo **non viene inviato**"
    ],
    [
     "`id` + `&lt;label for&gt;`",
     "collegano l’etichetta al campo"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Che cosa succede ai dati?",
   "punti": [
    [
     "file-code",
     "HTML fornisce i campi, **controlla la forma** dei dati e **li invia**"
    ],
    [
     "server",
     "Che cosa succede dopo lo decide il **programma sul server** (o JavaScript, 4.11)"
    ],
    [
     "file",
     "In un sito statico un modulo da solo **non salva niente**"
    ],
    [
     "search",
     "Per le prove: `https://httpbin.org/get` (o `/post`) **mostra i dati ricevuti**"
    ]
   ]
  },
  {
   "tipo": "confronto",
   "titolo": "GET o POST?",
   "a": {
    "icona": "search",
    "titolo": "GET",
    "righe": [
     "• i dati vanno **nell’URL**, dopo il `?`",
     "• visibili nella barra, **restano nella cronologia**",
     "• la pagina si può salvare con i dati dentro",
     "• per richieste che **leggono** e non modificano: una ricerca"
    ]
   },
   "b": {
    "icona": "send",
    "titolo": "POST",
    "tono": "buono",
    "righe": [
     "• i dati nel **corpo della richiesta**",
     "• per dati che **modificano** qualcosa: iscrizioni, ordini, messaggi, file",
     "• **non li cifra**: senza HTTPS si leggono comunque",
     "• li nasconde solo da barra e cronologia"
    ]
   }
  },
  {
   "tipo": "anim",
   "titolo": "GET e POST",
   "id": "f-getpost"
  },
  {
   "tipo": "errore",
   "no": "«Con POST i dati sono al sicuro, perché non si vedono.»",
   "si": "POST **toglie i dati dall’URL**, ma non li cifra. **La protezione dei dati durante il viaggio la dà HTTPS**, con qualunque metodo. Una password su HTTP con POST si può intercettare."
  },
  {
   "tipo": "codice",
   "titolo": "Le etichette",
   "html": "<span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"citta\"</span><span class=\"k\">&gt;</span>Città<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"text\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"citta\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"citta\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"privacy\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span> Accetto l’informativa sulla privacy<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "link",
     "`&lt;label for=\"…\"&gt;` uguale all’`id` del campo, oppure **avvolge** il campo"
    ],
    [
     "mouse-pointer-click",
     "Cliccando l’etichetta **si attiva il campo** (comodo per i checkbox)"
    ],
    [
     "ear",
     "Lo screen reader **legge l’etichetta** quando arriva sul campo"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Al posto dell’etichetta uso il `placeholder`, così occupa meno spazio.»",
   "si": "Il `placeholder` **sparisce appena si inizia a scrivere**, quindi l’utente dimentica che cosa doveva inserire; spesso ha poco contrasto e alcuni screen reader non lo leggono. Il `placeholder` serve per **un esempio** del formato (“nome@esempio.it”), **l’etichetta è sempre necessaria**."
  },
  {
   "tipo": "tabella",
   "titolo": "I tipi di campo (1)",
   "righe": [
    [
     "`type`",
     "Che cosa fa",
     "Sul telefono"
    ],
    [
     "`text`",
     "testo libero su una riga (predefinito)",
     "tastiera normale"
    ],
    [
     "`password`",
     "nasconde i caratteri",
     "niente correttore"
    ],
    [
     "`email`",
     "controlla `@` e dominio",
     "tastiera con @"
    ],
    [
     "`number`",
     "solo numeri, con `min` `max` `step`",
     "tastierino numerico"
    ],
    [
     "`tel`",
     "numero di telefono (non controlla)",
     "tastierino telefonico"
    ],
    [
     "`url`",
     "controlla che sia un indirizzo web",
     "tastiera con / e .com"
    ],
    [
     "`search`",
     "ricerca, con la X per cancellare",
     "tasto «Cerca»"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I tipi di campo (2)",
   "righe": [
    [
     "`type`",
     "Che cosa fa",
     "Sul telefono"
    ],
    [
     "`date` `time` `datetime-local` `month` `week`",
     "data e ora con calendario",
     "selettore nativo"
    ],
    [
     "`color`",
     "tavolozza dei colori",
     "selettore nativo"
    ],
    [
     "`range`",
     "cursore tra `min` e `max`",
     "cursore"
    ],
    [
     "`checkbox`",
     "casella: **scelte indipendenti**, anche più di una",
     ""
    ],
    [
     "`radio`",
     "pallino: **una sola scelta** tra quelle con lo stesso `name`",
     ""
    ],
    [
     "`file`",
     "scelta di un file (`accept=\"image/*\"`)",
     "galleria o fotocamera"
    ],
    [
     "`hidden`",
     "campo invisibile inviato con il modulo",
     ""
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Scegliere il tipo giusto",
   "punti": [
    [
     "circle-check",
     "Il browser **controlla il formato**"
    ],
    [
     "smartphone",
     "Sul telefono compare la **tastiera adatta**"
    ],
    [
     "palette",
     "Spesso c’è un **selettore già pronto**: calendario, tavolozza dei colori"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Radio e checkbox",
   "html": "<span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;legend</span><span class=\"k\">&gt;</span>Taglia della felpa<span class=\"k\">&lt;/legend</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"radio\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"taglia\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"S\"</span><span class=\"k\">&gt;</span> S<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"radio\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"taglia\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"M\"</span> <span class=\"a\">checked</span><span class=\"k\">&gt;</span> M<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"radio\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"taglia\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"L\"</span><span class=\"k\">&gt;</span> L<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;legend</span><span class=\"k\">&gt;</span>Interessi<span class=\"k\">&lt;/legend</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"interessi\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"musica\"</span><span class=\"k\">&gt;</span> Musica<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"interessi\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"sport\"</span><span class=\"k\">&gt;</span> Sport<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "circle-dot",
     "I **radio** funzionano in gruppo **solo con lo stesso `name`**"
    ],
    [
     "send",
     "`value` è ciò che arriva al server (senza, arriva «on»)"
    ],
    [
     "circle-check",
     "`checked` preseleziona una scelta"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Nei miei radio si possono selezionare tutte e tre le taglie.»",
   "si": "I tre `input` `type=\"radio\"` hanno **`name` diversi**, quindi il browser li considera tre gruppi separati. Per avere una sola scelta devono avere **lo stesso `name`** e `value` diversi."
  },
  {
   "tipo": "codice",
   "titolo": "Altri controlli",
   "html": "<span class=\"k\">&lt;select</span> <span class=\"a\">id</span>=<span class=\"s\">\"classe\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"classe\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;optgroup</span> <span class=\"a\">label</span>=<span class=\"s\">\"Triennio\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"3\"</span><span class=\"k\">&gt;</span>Terza<span class=\"k\">&lt;/option</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"5\"</span> <span class=\"a\">selected</span><span class=\"k\">&gt;</span>Quinta<span class=\"k\">&lt;/option</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/optgroup</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/select</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;textarea</span> <span class=\"a\">id</span>=<span class=\"s\">\"msg\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"messaggio\"</span> <span class=\"a\">rows</span>=<span class=\"s\">\"5\"</span> <span class=\"a\">maxlength</span>=<span class=\"s\">\"500\"</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/textarea</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;input</span> <span class=\"a\">list</span>=<span class=\"s\">\"browser-list\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"browser\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"browser\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;datalist</span> <span class=\"a\">id</span>=<span class=\"s\">\"browser-list\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"Chrome\"</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"Firefox\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/datalist</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "list",
     "`select`: **menu a tendina**; `option` le voci; `optgroup` le raggruppa; `multiple` per più scelte"
    ],
    [
     "text-cursor",
     "`textarea`: testo su **più righe**; il testo iniziale va **tra i tag**"
    ],
    [
     "search",
     "`datalist`: **suggerimenti** a un campo di testo"
    ],
    [
     "layers",
     "`fieldset` raggruppa i campi, `legend` è il titolo del gruppo"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I pulsanti",
   "righe": [
    [
     "Pulsante",
     "Che cosa fa"
    ],
    [
     "`&lt;button type=\"submit\"&gt;`",
     "**invia** il modulo (è il tipo **predefinito** in un form)"
    ],
    [
     "`&lt;button type=\"reset\"&gt;`",
     "riporta i campi ai valori iniziali (raramente: si cancella tutto per sbaglio)"
    ],
    [
     "`&lt;button type=\"button\"&gt;`",
     "non fa niente da solo: per le azioni con **JavaScript**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo nel modulo un pulsante “Mostra password” e quando lo clicco il modulo viene inviato.»",
   "si": "Dentro un `form`, un `&lt;button&gt;` senza `type` è **submit**. Per un pulsante che serve solo a JavaScript si scrive **`type=\"button\"`**."
  },
  {
   "tipo": "tabella",
   "titolo": "La validazione del browser",
   "righe": [
    [
     "Attributo",
     "Controllo",
     "Esempio"
    ],
    [
     "`required`",
     "campo obbligatorio",
     "`&lt;input name=\"nome\" required&gt;`"
    ],
    [
     "`minlength` `maxlength`",
     "lunghezza del testo",
     "`&lt;input type=\"password\" minlength=\"8\"&gt;`"
    ],
    [
     "`min` `max` `step`",
     "intervallo e passo",
     "`&lt;input type=\"number\" min=\"1\" max=\"10\" step=\"0.5\"&gt;`"
    ],
    [
     "`type`",
     "il formato del tipo",
     "`&lt;input type=\"email\"&gt;`"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Altri attributi utili",
   "html": "<span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"cap\"</span><span class=\"k\">&gt;</span>CAP<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;input</span> <span class=\"a\">id</span>=<span class=\"s\">\"cap\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"cap\"</span> <span class=\"a\">inputmode</span>=<span class=\"s\">\"numeric\"</span> <span class=\"a\">pattern</span>=<span class=\"s\">\"[0-9]{5}\"</span>\n       <span class=\"a\">title</span>=<span class=\"s\">\"5 cifre, per esempio 00184\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "search",
     "`pattern`: controllo con **espressione regolare**"
    ],
    [
     "smartphone",
     "`inputmode`: sceglie la tastiera sul telefono"
    ],
    [
     "zap",
     "`autocomplete`: **compilazione automatica**"
    ],
    [
     "lock",
     "`disabled` disattiva (e non invia); `readonly` non modificabile (ma invia); `autofocus` mette il cursore nel campo"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo `required` e `type=\"email\"`, quindi sul server arriveranno solo e-mail valide.»",
   "si": "La validazione del browser **aiuta l’utente**, ma **chiunque può aggirarla** (togliendo l’attributo con F12 o inviando i dati senza il modulo). **Chi riceve i dati deve sempre controllarli di nuovo sul server.**"
  },
  {
   "tipo": "codice",
   "titolo": "Esempio svolto: iscrizione al torneo di calcetto",
   "html": "<span class=\"k\">&lt;form</span> <span class=\"a\">action</span>=<span class=\"s\">\"https://httpbin.org/post\"</span> <span class=\"a\">method</span>=<span class=\"s\">\"post\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;legend</span><span class=\"k\">&gt;</span>Dati della squadra<span class=\"k\">&lt;/legend</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"squadra\"</span><span class=\"k\">&gt;</span>Nome della squadra<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;input</span> <span class=\"a\">id</span>=<span class=\"s\">\"squadra\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"squadra\"</span> <span class=\"a\">required</span> <span class=\"a\">minlength</span>=<span class=\"s\">\"3\"</span> <span class=\"a\">maxlength</span>=<span class=\"s\">\"30\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"capitano\"</span><span class=\"k\">&gt;</span>E-mail del capitano<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"capitano\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">autocomplete</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"giocatori\"</span><span class=\"k\">&gt;</span>Numero di giocatori<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"number\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"giocatori\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"giocatori\"</span> <span class=\"a\">min</span>=<span class=\"s\">\"5\"</span> <span class=\"a\">max</span>=<span class=\"s\">\"8\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"5\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"classe\"</span><span class=\"k\">&gt;</span>Classe<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;select</span> <span class=\"a\">id</span>=<span class=\"s\">\"classe\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"classe\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/select</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>…turno preferito (radio) e note (textarea)…<span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"regolamento\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span> Ho letto il regolamento<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;button</span> <span class=\"a\">type</span>=<span class=\"s\">\"submit\"</span><span class=\"k\">&gt;</span>Iscrivi la squadra<span class=\"k\">&lt;/button</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/form</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "punti",
   "titolo": "Provalo così com’è",
   "punti": [
    [
     "send",
     "Inviando a `httpbin.org` la pagina di risposta mostra i dati in **JSON**, ognuno con il suo `name`"
    ],
    [
     "circle-x",
     "Lascia vuoti i campi obbligatori, scrivi **9 giocatori**, un’e-mail **senza @**"
    ],
    [
     "eye",
     "Osserva i **messaggi del browser**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Togliete il `name` al campo della squadra e inviate. Che cosa arriva al server?",
   "risposta": "Tutti i dati tranne il nome della squadra: un campo senza `name` non viene inviato, anche se è compilato."
  },
  {
   "tipo": "sezione",
   "num": "2.10",
   "titolo": "Multimedia e contenuti incorporati",
   "sotto": "Audio, video e pagine incorporate",
   "foto": {
    "src": "https://images.unsplash.com/photo-1617994452722-4145e196248b?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "Video e audio",
   "html": "<span class=\"k\">&lt;video</span> <span class=\"a\">src</span>=<span class=\"s\">\"video/presentazione.mp4\"</span> <span class=\"a\">controls</span> <span class=\"a\">width</span>=<span class=\"s\">\"640\"</span> <span class=\"a\">poster</span>=<span class=\"s\">\"img/copertina.jpg\"</span><span class=\"k\">&gt;</span>\n  Il tuo browser non supporta i video HTML5.\n<span class=\"k\">&lt;/video</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;audio</span> <span class=\"a\">controls</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;source</span> <span class=\"a\">src</span>=<span class=\"s\">\"audio/intervista.ogg\"</span> <span class=\"a\">type</span>=<span class=\"s\">\"audio/ogg\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;source</span> <span class=\"a\">src</span>=<span class=\"s\">\"audio/intervista.mp3\"</span> <span class=\"a\">type</span>=<span class=\"s\">\"audio/mpeg\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/audio</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "tabella",
   "titolo": "Gli attributi di video e audio",
   "righe": [
    [
     "Attributo",
     "Che cosa fa"
    ],
    [
     "`controls`",
     "mostra i comandi: **senza, l’utente non controlla** il video"
    ],
    [
     "`autoplay`",
     "parte da solo · **bloccato se c’è audio**: funziona solo con `muted`"
    ],
    [
     "`muted`",
     "parte senza audio"
    ],
    [
     "`loop`",
     "ricomincia alla fine"
    ],
    [
     "`poster`",
     "l’immagine prima della riproduzione"
    ],
    [
     "`preload=\"none\"`",
     "non scarica niente finché non premi play (risparmia dati)"
    ],
    [
     "`playsinline`",
     "su iPhone riproduce nella pagina"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Più sorgenti, più formati",
   "punti": [
    [
     "file",
     "Con più `&lt;source&gt;` il browser usa **il primo formato che sa leggere**"
    ],
    [
     "message-square",
     "Il testo tra i tag compare solo nei browser che **non supportano** l’elemento"
    ],
    [
     "circle-check",
     "Sicuri: **MP4** (H.264) e **MP3** ovunque; **WebM** è più leggero"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo `autoplay` ma il video non parte.»",
   "si": "I browser **bloccano l’avvio automatico con l’audio** per non disturbare l’utente. Il video parte da solo solo se è anche **`muted`** (come gli sfondi animati dei siti), oppure se l’utente ha già interagito con la pagina."
  },
  {
   "tipo": "codice",
   "titolo": "Contenuti incorporati: iframe",
   "html": "<span class=\"k\">&lt;iframe</span> <span class=\"a\">width</span>=<span class=\"s\">\"560\"</span> <span class=\"a\">height</span>=<span class=\"s\">\"315\"</span>\n        <span class=\"a\">src</span>=<span class=\"s\">\"https://www.youtube-nocookie.com/embed/ID_DEL_VIDEO\"</span>\n        <span class=\"a\">title</span>=<span class=\"s\">\"Come funziona Internet – video\"</span>\n        <span class=\"a\">loading</span>=<span class=\"s\">\"lazy\"</span> <span class=\"a\">allowfullscreen</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/iframe</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "globe",
     "**Un’intera pagina di un altro sito** dentro la tua, come una finestra"
    ],
    [
     "video",
     "Video di YouTube, mappe, moduli di Google: **“Condividi › Incorpora”**"
    ],
    [
     "ear",
     "`title` descrive il contenuto agli screen reader; `loading=\"lazy\"` lo carica quando serve"
    ],
    [
     "shield",
     "`youtube-nocookie.com`: niente cookie di profilazione finché non parte il video"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho incorporato il sito della mia banca con un `iframe`, ma è vuoto.»",
   "si": "Molti siti **impediscono di essere mostrati dentro altre pagine** per sicurezza: un sito truffa potrebbe incorporare la pagina di login vera e sovrapporci pulsanti invisibili (*clickjacking*). Il blocco è voluto e non si può aggirare."
  },
  {
   "tipo": "domanda",
   "testo": "Un video di 3 minuti in Full HD pesa circa 100 MB. Conviene metterlo nella cartella del sito o incorporarlo da YouTube?",
   "risposta": "Di solito incorporarlo da YouTube: lo spazio, la banda e l’adattamento della qualità alla connessione li gestisce YouTube. Il file nel sito ha senso per video brevi e leggeri o quando non si vogliono servizi esterni."
  },
  {
   "tipo": "sezione",
   "num": "2.11",
   "titolo": "HTML semantico",
   "sotto": "Dare un ruolo a ogni parte",
   "foto": {
    "src": "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Guardate la home di un sito di notizie: in quali “zone” è divisa? Che nome dareste a ciascuna?",
   "risposta": "Intestazione con logo, menu di navigazione, contenuto principale con gli articoli, colonna laterale, piè di pagina con contatti e note legali."
  },
  {
   "tipo": "punti",
   "titolo": "Una pagina di soli div non dice niente",
   "punti": [
    [
     "layers",
     "Per browser, Google e screen reader sono **scatole tutte uguali**"
    ],
    [
     "tag",
     "Gli **elementi semantici** (HTML5) **dicono il ruolo** di ogni parte"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Gli elementi semantici",
   "righe": [
    [
     "Elemento",
     "Ruolo",
     "Quante"
    ],
    [
     "`&lt;header&gt;`",
     "intestazione della pagina o di una sezione",
     "anche più di una"
    ],
    [
     "`&lt;nav&gt;`",
     "link di navigazione principali",
     "una o poche"
    ],
    [
     "`&lt;main&gt;`",
     "il **contenuto principale**",
     "**una sola**"
    ],
    [
     "`&lt;section&gt;`",
     "sezione tematica, di solito con un titolo",
     "molte"
    ],
    [
     "`&lt;article&gt;`",
     "contenuto **autonomo**: articolo, post, scheda prodotto",
     "molte"
    ],
    [
     "`&lt;aside&gt;`",
     "contenuto collegato ma secondario",
     "molte"
    ],
    [
     "`&lt;footer&gt;`",
     "piè di pagina (autore, contatti, copyright)",
     "anche più di uno"
    ],
    [
     "`&lt;address&gt;`",
     "informazioni di contatto",
     ""
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Una pagina semantica",
   "html": "<span class=\"k\">&lt;body</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;header</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"img/logo.svg\"</span> <span class=\"a\">alt</span>=<span class=\"s\">\"Il Blog della 5CL\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;nav</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;ul</span><span class=\"k\">&gt;</span>…Home · Articoli · Chi siamo…<span class=\"k\">&lt;/ul</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/nav</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/header</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;main</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;article</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;header</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h1</span><span class=\"k\">&gt;</span>La nostra gita a Ginevra<span class=\"k\">&lt;/h1</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/header</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;section</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>La visita al CERN<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/section</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;section</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>Il lago<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/section</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;/article</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;aside</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>Lo sapevi?<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Il Web è nato al CERN.<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/aside</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/main</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;footer</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;address</span><span class=\"k\">&gt;</span>blog5cl@scuola.it<span class=\"k\">&lt;/address</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/footer</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/body</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "schema",
   "titolo": "La struttura di una pagina",
   "sel": "#s-semantica"
  },
  {
   "tipo": "punti",
   "titolo": "Perché usarli",
   "punti": [
    [
     "ear",
     "**Accessibilità**: lo screen reader annuncia «navigazione», «principale», «piè di pagina» e **salta al contenuto**"
    ],
    [
     "search",
     "**Motori di ricerca**: capiscono contenuto e contorno"
    ],
    [
     "code",
     "**Leggibilità**: `&lt;/nav&gt;` dice più di `&lt;/div&gt;`"
    ],
    [
     "book-open",
     "**Modalità lettura** e altri strumenti estraggono il testo giusto"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "section, article o div?",
   "tessere": [
    [
     "newspaper",
     "`article`",
     "Avrebbe senso **pubblicato da solo**, magari condiviso su un social?"
    ],
    [
     "layers",
     "`section`",
     "È **una parte di un discorso più ampio**, con un suo titolo?"
    ],
    [
     "package",
     "`div`",
     "Serve **solo per lo stile** o per raggruppare?"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho trasformato tutti i `div` in `section`, così la pagina è più semantica.»",
   "si": "Una `section` è **una parte tematica con un titolo**, non una scatola qualsiasi. Usarla dove serve solo un contenitore per lo stile **toglie significato** invece di aggiungerlo. Il `div` va benissimo quando non c’è un ruolo da dichiarare."
  },
  {
   "tipo": "errore",
   "no": "«`header` è la stessa cosa di `head`, e `h1` è la stessa cosa di `header`.»",
   "si": "`&lt;head&gt;` contiene **informazioni sulla pagina, invisibili**; `&lt;header&gt;` è **la zona visibile di intestazione**, nel `body`; `&lt;h1&gt;` è **un titolo**. Sono tre elementi diversi."
  },
  {
   "tipo": "domanda",
   "testo": "In una pagina con l’elenco dei prodotti di un negozio online, ogni scheda prodotto è una `section` o un `article`?",
   "risposta": "Un `article`: ogni scheda ha senso anche da sola (si potrebbe condividere o mostrare in un’altra pagina)."
  },
  {
   "tipo": "sezione",
   "num": "2.12",
   "titolo": "Metadati e SEO di base",
   "sotto": "Come ti trova Google",
   "foto": {
    "src": "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Metadati e SEO",
   "punti": [
    [
     "file",
     "I **metadati** sono dati **sulla pagina**, scritti in `head` con `&lt;meta&gt;`"
    ],
    [
     "eye",
     "Non si vedono nella pagina: li leggono **browser, motori di ricerca, social**"
    ],
    [
     "trending-up",
     "La **SEO** (*Search Engine Optimization*): far comparire la pagina **tra i primi risultati**, in modo corretto"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Titolo e descrizione",
   "html": "<span class=\"k\">&lt;head</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">charset</span>=<span class=\"s\">\"UTF-8\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"viewport\"</span> <span class=\"a\">content</span>=<span class=\"s\">\"width=device-width, initial-scale=1.0\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;title</span><span class=\"k\">&gt;</span>Torneo di calcetto 2026 – Liceo Spinelli<span class=\"k\">&lt;/title</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"description\"</span>\n        <span class=\"a\">content</span>=<span class=\"s\">\"Regolamento, calendario delle partite e iscrizioni al torneo\n                 di calcetto delle classi del triennio. Iscrizioni entro il 30 novembre.\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"author\"</span> <span class=\"a\">content</span>=<span class=\"s\">\"Classe 5CL\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/head</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "schema",
   "titolo": "Come si appare su Google",
   "sel": "#s-google"
  },
  {
   "tipo": "tessere",
   "titolo": "title e description",
   "tessere": [
    [
     "file",
     "`&lt;title&gt;`",
     "il **titolo blu**: unico per pagina, parole importanti all’inizio, **50–60 caratteri**"
    ],
    [
     "pen-line",
     "`meta description`",
     "il **testo grigio**: **150–160 caratteri**, un riassunto che invogli a cliccare"
    ]
   ],
   "nota": "Google può scegliere un testo diverso, se lo ritiene più adatto alla ricerca"
  },
  {
   "tipo": "punti",
   "titolo": "Come Google trova e valuta le pagine",
   "punti": [
    [
     "route",
     "**Scansione** (*crawling*): il **crawler** (Googlebot) **segue i link** e scarica le pagine"
    ],
    [
     "book-open",
     "**Indicizzazione**: legge testi, titoli, alt, struttura e li registra nell’**indice**"
    ],
    [
     "trending-up",
     "**Posizionamento** (*ranking*): ordina le pagine con **centinaia di fattori**: pertinenza, qualità, link da siti affidabili, velocità, compatibilità con il telefono, HTTPS"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "L’HTML fatto bene è già buona SEO",
   "punti": [
    [
     "list",
     "Titoli `h1`–`h6` **ordinati** e tag **semantici**"
    ],
    [
     "image",
     "`alt` descrittivi, link con **testo chiaro**"
    ],
    [
     "gauge",
     "Pagine **veloci** e adatte al telefono"
    ],
    [
     "sparkles",
     "**Il fattore più importante: un contenuto utile e originale**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Se ripeto “pizza Roma” cinquanta volte nella pagina, divento primo su Google.»",
   "si": "Ripetere le parole chiave (*keyword stuffing*) è una tecnica vecchia che **Google riconosce e penalizza**. Oggi conta che la pagina **risponda bene a ciò che cerca l’utente**. Anche il vecchio `&lt;meta name=\"keywords\"&gt;` è ignorato da Google da più di dieci anni."
  }
 ]
};
