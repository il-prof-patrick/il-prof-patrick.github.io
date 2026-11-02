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
   "tipo": "sezione",
   "num": "5.1",
   "titolo": "A cosa serve il CSS",
   "sotto": "L’HTML dice cos’è ogni parte della pagina, il CSS come appare; separarli permette di cambiare l’aspetto senza toccare il contenuto.",
   "foto": {
    "src": "assets/immagini/atmosfera/1-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Una pagina non ha nemmeno una riga di CSS. Perché allora il titolo è grande e in grassetto e il link è blu e sottolineato?",
   "risposta": "Lo decide il **foglio di stile predefinito del browser** (*user agent stylesheet*). L’HTML dice solo «questo è un titolo di primo livello» e «questo è un link», non come devono apparire."
  },
  {
   "tipo": "punti",
   "titolo": "HTML e CSS",
   "msg": "L’HTML dice che cos’è, il CSS come appare",
   "punti": [
    [
     "file-code",
     "**CSS** = *Cascading Style Sheets*, «fogli di stile a cascata»"
    ],
    [
     "tag",
     "**HTML**: che cos’è ogni parte · titolo, paragrafo, elenco, link"
    ],
    [
     "palette",
     "**CSS**: come appare · colori, caratteri, spazi, impaginazione"
    ],
    [
     "layers",
     "Due linguaggi, due file: **significato** da una parte, **presentazione** dall’altra"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il foglio di stile del browser",
   "msg": "Anche senza CSS una pagina ha un aspetto",
   "punti": [
    [
     "monitor",
     "Il browser applica il suo **foglio di stile predefinito** (*user agent stylesheet*)"
    ],
    [
     "type",
     "Titoli **grandi e in grassetto**, link **blu e sottolineati**, margini intorno al testo"
    ],
    [
     "copy",
     "Per questo le pagine senza CSS **si somigliano tutte**"
    ],
    [
     "pencil",
     "Il nostro CSS **parte da lì** e lo modifica"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Perché separarli",
   "msg": "Cambiare l’aspetto senza toccare il contenuto",
   "tessere": [
    [
     "wrench",
     "Manutenzione",
     "si modifica il foglio di stile, non le pagine"
    ],
    [
     "copy",
     "Coerenza",
     "stesso foglio → stessi colori e caratteri ovunque"
    ],
    [
     "repeat",
     "Riuso",
     "una regola, scritta una volta, vale per tutti gli elementi"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Stesso HTML, tre fogli di stile",
   "w": "w1_fogli"
  },
  {
   "tipo": "foto",
   "titolo": "CSS Zen Garden",
   "msg": "Una pagina HTML, centinaia di fogli di stile",
   "foto": [
    {
     "src": "assets/immagini/zen-garden.jpg",
     "tit": "",
     "alt": "Quattro versioni della pagina del CSS Zen Garden"
    }
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.1",
   "titolo": "I quattro modi di collegare il CSS",
   "sotto": "Per un sito si usa un file CSS esterno collegato con link, perché una modifica vale per tutte le pagine; @import si evita.",
   "foto": {
    "src": "assets/immagini/atmosfera/1-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Quattro modi di collegare il CSS",
   "msg": "Dal singolo elemento a tutto il sito",
   "tessere": [
    [
     "tag",
     "Attributo `style`",
     "un solo elemento"
    ],
    [
     "file-code",
     "Elemento `&lt;style&gt;`",
     "nell’`head`: una sola pagina"
    ],
    [
     "link",
     "File esterno con `&lt;link&gt;`",
     "nell’`head`: tutte le pagine che lo collegano"
    ],
    [
     "download",
     "`@import`",
     "un foglio che ne carica un altro"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Quattro modi per la stessa regola",
   "sel": "#s1_quattro"
  },
  {
   "tipo": "punti",
   "titolo": "Il file esterno",
   "msg": "Per un sito si usa sempre il file esterno",
   "punti": [
    [
     "link",
     "`&lt;link rel=\"stylesheet\" href=\"stile.css\"&gt;` in ogni pagina"
    ],
    [
     "pencil",
     "Una modifica **in un punto** vale per **tutte** le pagine"
    ],
    [
     "hard-drive",
     "Il browser lo scarica una volta e lo tiene in *cache*: le pagine dopo sono più veloci"
    ],
    [
     "file-code",
     "`style` e `&lt;style&gt;`: solo per un elemento o una pagina, per prove veloci"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Perché evitare @import",
   "msg": "I file arrivano uno dopo l’altro",
   "punti": [
    [
     "download",
     "Il browser scopre il secondo file **solo dopo** aver letto il primo"
    ],
    [
     "clock",
     "Due scaricamenti **in fila** invece che insieme: la pagina compare più tardi"
    ],
    [
     "list",
     "Più fogli di stile? **Più `&lt;link&gt;`**, che partono insieme"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Un foglio di stile per cinque pagine",
   "w": "w1_pagine"
  },
  {
   "tipo": "errore",
   "no": "«Nel file stile.css devo scrivere anche il tag `&lt;style&gt;`.»",
   "si": "Il file esterno contiene **solo regole CSS**. `&lt;style&gt;` è un elemento HTML: serve solo per scrivere il CSS dentro una pagina HTML. In un file `.css` un tag non è CSS valido e la regola che lo segue viene scartata."
  },
  {
   "tipo": "sezione",
   "num": "5.1",
   "titolo": "Gli strumenti di lavoro",
   "sotto": "VS Code per scrivere, Live Server per vedere gli aggiornamenti, DevTools per ispezionare: ciò che cambi nei DevTools resta solo nel browser.",
   "foto": {
    "src": "assets/immagini/atmosfera/1-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Editor e Live Server",
   "msg": "Si salva e la pagina si aggiorna da sola",
   "punti": [
    [
     "code",
     "**VS Code**: l’editor che usiamo in classe"
    ],
    [
     "refresh-cw",
     "**Live Server**: apre la pagina e la **ricarica a ogni salvataggio**"
    ],
    [
     "sparkles",
     "Facoltative: **Prettier** riordina il codice, **CSS Peek** trova la regola di una classe"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "VS Code e Live Server",
   "foto": [
    {
     "src": "assets/immagini/vscode-live-server.png",
     "tit": "",
     "alt": "VS Code con il codice HTML a sinistra e il browser con la pagina aggiornata da Live Server a destra"
    }
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "I DevTools",
   "msg": "F12: come il browser ha capito la pagina",
   "tessere": [
    [
     "list-tree",
     "Elementi",
     "l’albero degli elementi; passandoci sopra si illuminano"
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
   ]
  },
  {
   "tipo": "foto",
   "titolo": "I DevTools",
   "foto": [
    {
     "src": "assets/immagini/devtools-elementi-stili.png",
     "tit": "",
     "alt": "I DevTools di Chrome con il pannello Elementi e la scheda Styles aperti accanto alla pagina"
    }
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Prove in diretta",
   "msg": "Ciò che cambi nei DevTools resta solo nel tuo browser",
   "punti": [
    [
     "pencil",
     "Nei DevTools si cambiano i valori e si vede **subito** il risultato"
    ],
    [
     "monitor",
     "La modifica vive nella **copia della pagina** che c’è nel tuo browser"
    ],
    [
     "refresh-cw",
     "Non viene salvata: **sparisce** al ricaricamento"
    ],
    [
     "save",
     "Le prove riuscite vanno **ricopiate nel file CSS**"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Una modifica nei DevTools",
   "w": "w1_devtools"
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
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "Anatomia di una regola",
   "sotto": "Una regola ha un selettore, che dice a chi si applica, e un blocco di dichiarazioni `proprietà: valore;` che dice come.",
   "foto": {
    "src": "assets/immagini/atmosfera/2-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Una regola CSS",
   "msg": "A chi si applica e come deve apparire",
   "punti": [
    [
     "crosshair",
     "Il **selettore** sceglie gli elementi: `h1` prende tutti i titoli di primo livello"
    ],
    [
     "braces",
     "Il **blocco di dichiarazioni** sta tra le graffe `{ }`"
    ],
    [
     "pencil",
     "Ogni **dichiarazione** è `proprietà: valore;`"
    ],
    [
     "type",
     "Proprietà **minuscole**, parole unite dal **trattino**: `font-size`, `background-color`"
    ],
    [
     "circle-check",
     "Il punto e virgola finale si scrive **sempre**, anche nell’ultima riga"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Anatomia di una regola",
   "sel": "#s2_anatomia"
  },
  {
   "tipo": "widget",
   "titolo": "Componi una regola",
   "w": "w2_regola"
  },
  {
   "tipo": "errore",
   "no": "«Le proprietà si scrivono come in Java: `fontSize`.»",
   "si": "In CSS si scrive `font-size`, minuscolo con il trattino; `fontSize` non esiste e viene ignorata. La forma con la maiuscola in mezzo (*camelCase*) si usa solo quando si cambia lo stile da JavaScript (cap. 8)."
  },
  {
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "Commenti e formattazione",
   "sotto": "L’unico commento valido è `/* */`; la formattazione non cambia nulla per il browser ma serve a chi legge.",
   "foto": {
    "src": "assets/immagini/atmosfera/2-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "I commenti",
   "msg": "Uno solo: /* … */",
   "punti": [
    [
     "message-square",
     "`/* … */`, anche su più righe: il browser lo ignora"
    ],
    [
     "circle-x",
     "`//` **non esiste** in CSS (è di JavaScript e Java)"
    ],
    [
     "layers",
     "Non si annidano: il primo `*/` chiude il commento"
    ],
    [
     "toggle-left",
     "Commentare una dichiarazione = **disattivarla** nelle prove"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "La formattazione",
   "msg": "Per il browser non cambia nulla, per chi legge sì",
   "punti": [
    [
     "list",
     "**Una dichiarazione per riga**, rientro di 2 o 4 spazi"
    ],
    [
     "minus",
     "Graffa di chiusura su una riga sua, una riga vuota tra le regole"
    ],
    [
     "file-archive",
     "Online i file sono spesso **compressi** (*minified*): una riga, senza spazi"
    ],
    [
     "sparkles",
     "Prettier in VS Code riordina il codice da solo"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Tre modi di scrivere lo stesso CSS",
   "sel": "#s2_formati"
  },
  {
   "tipo": "domanda",
   "testo": "Scrivo `// ricordati di cambiare il colore` sopra la regola dei titoli. La regola funziona ancora?",
   "risposta": "No: `//` non è un commento in CSS. Il testo finisce nel **selettore**, che non è più valido, e **l’intera regola viene scartata**. Si scrive `/* ricordati di cambiare il colore */`."
  },
  {
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "Proprietà abbreviate",
   "sotto": "Una proprietà abbreviata ne imposta più insieme e ciò che non scrivi torna al valore iniziale.",
   "foto": {
    "src": "assets/immagini/atmosfera/2-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le proprietà abbreviate",
   "msg": "Una proprietà ne imposta più insieme",
   "punti": [
    [
     "box",
     "`margin` = `margin-top` + `-right` + `-bottom` + `-left`"
    ],
    [
     "square",
     "`border` = spessore + **stile** + colore"
    ],
    [
     "type",
     "`font` = stile, peso, dimensione/interlinea, **famiglia**"
    ],
    [
     "image",
     "`background` = colore, immagine, posizione, ripetizione"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Ciò che non scrivi si azzera",
   "msg": "Le parti mancanti tornano al valore iniziale",
   "punti": [
    [
     "image-off",
     "`background: red` → anche `background-image` torna a `none`"
    ],
    [
     "square-dashed",
     "`border` senza stile → stile `none`, **bordo invisibile**"
    ],
    [
     "circle-x",
     "`font` senza dimensione e famiglia → **scartata**"
    ],
    [
     "lightbulb",
     "Per cambiare una cosa sola: la proprietà estesa (`background-color`)"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Uno, due, tre o quattro valori",
   "w": "w2_lati"
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
   ]
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
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "Errori comuni e validatore",
   "sotto": "Il browser non segnala gli errori: scarta ciò che non capisce e va avanti; si trovano con editor, DevTools e validatore.",
   "foto": {
    "src": "assets/immagini/atmosfera/2-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Dimentico il punto e virgola dopo `color: red` e sotto c’è `font-size: 48px;`. Il titolo sarà rosso, grande, tutti e due o nessuno dei due?",
   "risposta": "**Nessuno dei due**: senza il punto e virgola le due righe diventano una sola dichiarazione, `color: red font-size: 48px`, che non è valida e viene scartata."
  },
  {
   "tipo": "punti",
   "titolo": "Il browser non protesta",
   "msg": "Scarta ciò che non capisce e va avanti",
   "punti": [
    [
     "eye-off",
     "Nessun messaggio di errore: la regola **non funziona e basta**"
    ],
    [
     "sparkles",
     "Voluto: le proprietà nuove non rompono i browser vecchi"
    ],
    [
     "triangle-alert",
     "Il prezzo: gli errori **passano in silenzio**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Dove si trovano gli errori",
   "msg": "Editor, DevTools, validatore",
   "tessere": [
    [
     "code",
     "Editor",
     "VS Code sottolinea proprietà sconosciute e graffe sbagliate"
    ],
    [
     "search",
     "DevTools",
     "dichiarazione **barrata** con il triangolo giallo"
    ],
    [
     "shield-check",
     "Validatore W3C",
     "elenco degli errori con il numero di riga"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Cinque errori che il browser non segnala",
   "w": "w2_errori"
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
   ]
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
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Tipo, classe, id, universale",
   "sotto": "Tipo, classe, id e universale scelgono per tag, per class, per id unico o tutti; punto e cancelletto fanno parte del selettore.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "I quattro selettori di base",
   "msg": "Per tag, per classe, per id, tutti",
   "tessere": [
    [
     "tag",
     "`p` · tipo",
     "tutti gli elementi con quel tag"
    ],
    [
     "layers",
     "`.nota` · classe",
     "tutti gli elementi con `class=\"nota\"`"
    ],
    [
     "hash",
     "`#robot` · id",
     "l’unico elemento con `id=\"robot\"`"
    ],
    [
     "asterisk",
     "`*` · universale",
     "tutti gli elementi"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Classe e id nell’HTML",
   "msg": "Punto e cancelletto stanno solo nel CSS",
   "punti": [
    [
     "file-code",
     "HTML `class=\"nota\"` → CSS `.nota`; HTML `id=\"robot\"` → CSS `#robot`"
    ],
    [
     "copy",
     "Più classi per elemento, separate da spazi: `class=\"card big\"`"
    ],
    [
     "repeat",
     "Una classe si dà a **quanti elementi si vuole**"
    ],
    [
     "fingerprint",
     "L’id è **unico** nella pagina"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Il selettore-cacciatore",
   "w": "w3_cacc"
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
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Raggruppare e combinare",
   "sotto": "Virgola raggruppa, spazio prende i discendenti, `&gt;` i figli diretti, `+` e `~` i fratelli; senza spazio le condizioni valgono sullo stesso elemento.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Liste e selettori composti",
   "msg": "Virgola = elenco, niente spazio = stesso elemento",
   "punti": [
    [
     "list",
     "`h1, h2, h3`: una regola per tre selettori"
    ],
    [
     "triangle-alert",
     "Un selettore non valido nella lista → **scartata tutta la regola**"
    ],
    [
     "link",
     "`p.nota`: un `p` **che ha** la classe nota"
    ],
    [
     "layers",
     "`.card.big`: un elemento con **entrambe** le classi"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Leggere un combinatore",
   "msg": "Da destra a sinistra: l’ultimo è l’elemento preso",
   "punti": [
    [
     "arrow-left",
     "`main p`: si prendono i `p`; `main` è una condizione"
    ],
    [
     "git-fork",
     "Spazio = dentro, `&gt;` = figlio diretto, `+` = subito dopo, `~` = dopo"
    ],
    [
     "arrow-up",
     "Si guarda solo **sopra** e **prima** nell’albero, mai il genitore"
    ],
    [
     "sparkles",
     "Per il genitore oggi c’è `:has()`"
    ]
   ]
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Combinatori nella pagina campione",
   "w": "w3_cacc_comb"
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
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Selettori di attributo",
   "sotto": "I selettori di attributo scelgono in base ai dati dell’elemento, senza aggiungere classi a mano.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Selettori di attributo",
   "msg": "Lo stile dai dati che l’elemento ha già",
   "punti": [
    [
     "brackets",
     "Tra parentesi quadre: `[type=\"email\"]`"
    ],
    [
     "equal",
     "`=` esatto · `^=` inizia · `$=` finisce · `*=` contiene"
    ],
    [
     "link",
     "`a[href^=\"https\"]`: tutti i link esterni, senza classi"
    ],
    [
     "case-sensitive",
     "`i` finale: ignora maiuscole e minuscole"
    ]
   ]
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Selettori di attributo nella pagina campione",
   "w": "w3_cacc_attr"
  },
  {
   "tipo": "errore",
   "no": "«`[href=\".pdf\"]` prende i link ai PDF.»",
   "si": "`=` vuole il valore **esatto**: prenderebbe solo un link con `href=\".pdf\"`. Per «finisce con» serve `$=`: `a[href$=\".pdf\"]`."
  },
  {
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Pseudo-classi",
   "sotto": "La pseudo-classe sceglie un elemento esistente in un certo stato, posizione o che non soddisfa una condizione.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Tre famiglie di pseudo-classi",
   "msg": "Un elemento che esiste, in un certo stato o posizione",
   "tessere": [
    [
     "mouse-pointer",
     "Stato",
     "`:hover` `:focus` `:active` `:checked` `:disabled`"
    ],
    [
     "list-ordered",
     "Posizione",
     "`:first-child` `:nth-child()` `:nth-of-type()` `:empty`"
    ],
    [
     "ban",
     "Negazione",
     "`:not(.big)`: tutti tranne quelli"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "nth-child e nth-of-type",
   "msg": "Tutti i fratelli contro i fratelli dello stesso tag",
   "punti": [
    [
     "list-ordered",
     "`:nth-child(2)`: il secondo figlio, **di qualunque tag**"
    ],
    [
     "filter",
     "`:nth-of-type(2)`: il secondo **tra quelli dello stesso tag**"
    ],
    [
     "calculator",
     "`odd`, `even`, `3n`, `n+3`: `n` vale 0, 1, 2…"
    ],
    [
     "smartphone",
     "Sul touch niente vero `:hover`: le cose importanti non vanno solo lì"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Le pseudo-classi di stato",
   "w": "w3_stati"
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Pseudo-classi di posizione nella pagina campione",
   "w": "w3_cacc_pseudo"
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
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Pseudo-elementi",
   "sotto": "I pseudo-elementi sono parti di un elemento o contenuti generati che nell’HTML non ci sono; servono a decorare.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "I pseudo-elementi",
   "msg": "Parti e contenuti che nell’HTML non ci sono",
   "punti": [
    [
     "type",
     "`::first-letter`, `::first-line`: prima lettera e prima riga"
    ],
    [
     "text-select",
     "`::selection`, `::placeholder`: selezione e segnaposto"
    ],
    [
     "plus",
     "`::before`, `::after`: contenuto generato, **solo con `content`**"
    ],
    [
     "eye-off",
     "Servono a **decorare**: non si selezionano, non tutti gli screen reader li leggono"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "I pseudo-elementi uno alla volta",
   "w": "w3_pseudoel"
  },
  {
   "tipo": "codice",
   "titolo": "Un’etichetta generata",
   "html": "<span class=\"k\">.nuovo::after </span>{\n<span class=\"a\">  content</span>:<span class=\"s\"> \"NUOVO\"</span>;\n<span class=\"a\">  background</span>:<span class=\"s\"> crimson</span>;\n<span class=\"a\">  color</span>:<span class=\"s\"> white</span>;\n<span class=\"a\">  font-size</span>:<span class=\"s\"> 0.7em</span>;\n<span class=\"a\">  padding</span>:<span class=\"s\"> 2px 6px</span>;\n<span class=\"a\">  margin-left</span>:<span class=\"s\"> 6px</span>;\n}"
  },
  {
   "tipo": "errore",
   "no": "«`::before` mette l’icona anche senza `content`.»",
   "si": "Senza la proprietà `content` il pseudo-elemento **non viene creato** e non appare nulla, qualunque altra proprietà gli si dia."
  },
  {
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Differenza tra classe e id, tra pseudo-classe e pseudo-elemento",
   "sotto": "La classe si riusa, l’id è unico; la pseudo-classe sceglie uno stato, il pseudo-elemento una parte o un contenuto generato.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-6.jpg",
    "tit": "",
    "alt": ""
   }
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
   ]
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
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Dare i nomi alle classi",
   "sotto": "Il nome dice a che cosa serve l’elemento, non com’è fatto; BEM lo struttura come blocco__elemento--modificatore.",
   "foto": {
    "src": "assets/immagini/atmosfera/3-7.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Nomi per il ruolo",
   "msg": "Che cosa fa l’elemento, non com’è fatto",
   "punti": [
    [
     "circle-check",
     "`.avviso` sì, `.rosso` no: il colore può cambiare"
    ],
    [
     "type",
     "Minuscolo e trattini: `.card-corso`, `.menu-principale`"
    ],
    [
     "ban",
     "Niente id per lo stile: pesa troppo e non si riusa"
    ],
    [
     "blocks",
     "**BEM**: `.card` · `.card__titolo` · `.card--evidenziata`"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Nomi per il ruolo, non per l’aspetto",
   "sel": "#s3_nomi"
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
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Ereditarietà",
   "sotto": "Molte proprietà del testo passano ai discendenti, quelle della scatola no; `inherit` forza l’ereditarietà.",
   "foto": {
    "src": "assets/immagini/atmosfera/4-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Ereditarietà",
   "msg": "Il testo passa ai discendenti, la scatola no",
   "a": {
    "icona": "type",
    "titolo": "Si ereditano",
    "tono": "buono",
    "righe": [
     "+ `color`",
     "+ `font-family`, `font-size`, `font-weight`",
     "+ `line-height`, `text-align`"
    ],
    "piede": "proprietà del testo"
   },
   "b": {
    "icona": "square",
    "titolo": "Non si ereditano",
    "righe": [
     "- `margin`, `padding`, `border`",
     "- `background`",
     "- `width`, `height`"
    ],
    "piede": "proprietà della scatola"
   },
   "verdetto": "Con `inherit` si forza: `a { color: inherit; }`"
  },
  {
   "tipo": "widget",
   "titolo": "Che cosa passa ai discendenti",
   "w": "w4_eredita"
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
   ]
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
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Valori speciali",
   "sotto": "`inherit` prende dal genitore, `initial` il valore iniziale della specifica, `unset` uno dei due, `revert` quello del browser.",
   "foto": {
    "src": "assets/immagini/atmosfera/4-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "I quattro valori speciali",
   "msg": "Da dove prendere il valore",
   "tessere": [
    [
     "arrow-up",
     "`inherit`",
     "dal genitore"
    ],
    [
     "file-text",
     "`initial`",
     "il valore iniziale della specifica, per tutti uguale"
    ],
    [
     "shuffle",
     "`unset`",
     "`inherit` se si eredita, altrimenti `initial`"
    ],
    [
     "undo-2",
     "`revert`",
     "il valore del foglio del browser"
    ]
   ],
   "nota": "`display: initial` su un `div` → **inline**, non block"
  },
  {
   "tipo": "widget",
   "titolo": "I quattro valori speciali a confronto",
   "w": "w4_valori"
  },
  {
   "tipo": "errore",
   "no": "«`display: initial` rimette il `block` dei `div`.»",
   "si": "Il valore iniziale di `display` è `inline` per tutti: il `div` diventa **in linea**. Per riavere il `block` del foglio del browser serve `display: revert`."
  },
  {
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "La cascata",
   "sotto": "Il browser ordina le dichiarazioni in conflitto per origine e importanza, specificità, ordine di scrittura.",
   "foto": {
    "src": "assets/immagini/atmosfera/4-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "La cascata",
   "msg": "Criteri in ordine: il successivo solo in caso di parità",
   "punti": [
    [
     "layers",
     "**1 · Origine e importanza**: browser &lt; utente &lt; autore"
    ],
    [
     "folder-tree",
     "**2 · Livelli** `@layer`"
    ],
    [
     "crosshair",
     "**3 · Specificità**: il selettore più preciso; `style` batte tutti"
    ],
    [
     "list-ordered",
     "**4 · Ordine**: a parità, l’ultima scritta"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Cinque dichiarazioni per lo stesso link",
   "w": "w4_cascata"
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
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Calcolo della specificità",
   "sotto": "La specificità è una terna (id, classi, tipi) confrontata da sinistra; non si somma e l’ordine conta solo a parità.",
   "foto": {
    "src": "assets/immagini/atmosfera/4-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "La specificità",
   "msg": "Una terna (id, classi, tipi) confrontata da sinistra",
   "punti": [
    [
     "hash",
     "**a** = id · **b** = classi, attributi, pseudo-classi · **c** = tipi, pseudo-elementi"
    ],
    [
     "arrow-right",
     "Colonna per colonna: (0,1,0) batte (0,0,11)"
    ],
    [
     "ban",
     "Niente somma, niente riporto"
    ],
    [
     "circle",
     "`*` e i combinatori valgono zero; `:where()` zero"
    ],
    [
     "brackets",
     "`:not()` `:is()` `:has()`: quanto il loro argomento"
    ]
   ]
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Chi vince?",
   "w": "w4_chivince"
  },
  {
   "tipo": "errore",
   "no": "«Più selettori scrivo, più la regola è forte.»",
   "si": "Conta **che cosa** scrivi, non quanto: `div div div p` vale (0,0,4) e perde contro `.nota`, che vale (0,1,0)."
  },
  {
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "!important e perché evitarlo",
   "sotto": "!important batte le regole normali prima di ogni calcolo, ma nel lavoro normale segnala un conflitto di specificità non risolto.",
   "foto": {
    "src": "assets/immagini/atmosfera/4-5.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "!important",
   "msg": "Batte tutte le dichiarazioni normali",
   "punti": [
    [
     "zap",
     "Vince **prima** della specificità; tra più `!important` si riparte"
    ],
    [
     "accessibility",
     "Inverte le origini: l’utente impone caratteri e colori"
    ],
    [
     "swords",
     "Nel lavoro normale: **guerra degli !important**"
    ],
    [
     "circle-check",
     "Usi legittimi: classi di utilità, stili altrui non modificabili"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "La precedenza delle origini",
   "sel": "#s4_scala"
  },
  {
   "tipo": "widget",
   "titolo": "Chi vince, con !important",
   "w": "w4_chivince_imp"
  },
  {
   "tipo": "errore",
   "no": "«`!important` risolve sempre.»",
   "si": "Risolve **fino al prossimo** `!important` più specifico. Meglio capire quale regola vince e perché, e correggere la specificità."
  },
  {
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Perché la mia regola non funziona?",
   "sotto": "Le cause sono poche e si controllano in ordine con i DevTools.",
   "foto": {
    "src": "assets/immagini/atmosfera/4-6.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "schema",
   "titolo": "Perché la mia regola non funziona",
   "sel": "#s4_flusso"
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
   ]
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
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "I tipi di valore",
   "sotto": "Ogni proprietà accetta solo certi tipi di valore; uno sbagliato rende la dichiarazione non valida.",
   "foto": {
    "src": "assets/immagini/atmosfera/5-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "I tipi di valore",
   "msg": "Ogni proprietà accetta solo certi tipi",
   "punti": [
    [
     "key",
     "**Parole chiave**: `auto`, `none`, `center`"
    ],
    [
     "hash",
     "**Numeri** senza unità: `line-height: 1.5`, `opacity: 0.8`"
    ],
    [
     "ruler",
     "**Lunghezze**, sempre con l’unità tranne lo **zero**"
    ],
    [
     "percent",
     "**Percentuali**, **colori**, **stringhe**, `url()`, **funzioni**"
    ],
    [
     "circle-x",
     "Tipo sbagliato → dichiarazione **scartata**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "line-height senza unità",
   "msg": "Il numero si moltiplica, la lunghezza si eredita già calcolata",
   "punti": [
    [
     "calculator",
     "`line-height: 1.5`: per ogni elemento 1,5 × il suo testo"
    ],
    [
     "ruler",
     "`line-height: 24px`: tutti i discendenti ereditano 24px"
    ],
    [
     "triangle-alert",
     "Un titolo a 40px con righe di 24px: **righe sovrapposte**"
    ],
    [
     "circle-check",
     "Per l’interlinea: **numero senza unità**"
    ]
   ]
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
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Unità di misura",
   "sotto": "Le unità sono assolute o relative a un’altra grandezza; la percentuale dipende dalla proprietà.",
   "foto": {
    "src": "assets/immagini/atmosfera/5-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Assolute e relative",
   "msg": "Misura fissa o misura che si adatta",
   "a": {
    "icona": "ruler",
    "titolo": "Assolute",
    "righe": [
     "• `px`, `cm`, `mm`, `in`, `pt`",
     "• 1in = 96px = 2,54cm",
     "• il pixel CSS **non** è un pixel dello schermo"
    ],
    "piede": "per lo schermo, in pratica solo `px`"
   },
   "b": {
    "icona": "scaling",
    "titolo": "Relative",
    "tono": "buono",
    "righe": [
     "• `%`, `em`, `rem`, `ch`",
     "• `vw`, `vh`, `vmin`, `vmax`",
     "• `svh`, `lvh`, `dvh` per i telefoni"
    ],
    "piede": "si adattano a schermi e preferenze"
   }
  },
  {
   "tipo": "punti",
   "titolo": "La percentuale",
   "msg": "Dipende dalla proprietà",
   "punti": [
    [
     "move-horizontal",
     "`width: 50%`: metà della larghezza del **contenitore**"
    ],
    [
     "type",
     "`font-size: 120%`: 1,2 × il testo del **genitore**"
    ],
    [
     "triangle-alert",
     "`padding-top: 50%`: metà della **larghezza** del contenitore!"
    ],
    [
     "smartphone",
     "`100vh` sul telefono: più alto dello schermo → `100dvh`"
    ],
    [
     "scroll",
     "`100vw` include la barra di scorrimento → esce"
    ]
   ]
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
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Sei larghezze, sei unità",
   "w": "w5_unita"
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
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Differenza tra px, em e rem",
   "sotto": "px non cambia mai, rem segue il testo della radice, em quello dell’elemento e si accumula nei livelli annidati.",
   "foto": {
    "src": "assets/immagini/atmosfera/5-3.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Lista dentro lista dentro lista, ognuna con `font-size: 1.2em`. Il terzo livello è grande quanto il primo?",
   "risposta": "No: ogni livello moltiplica il genitore, quindi 1,2 × 1,2 × 1,2 = **1,73** volte il testo di partenza."
  },
  {
   "tipo": "tessere",
   "titolo": "px, em, rem",
   "msg": "Fisso, relativo all’elemento, relativo alla radice",
   "tessere": [
    [
     "lock",
     "`px`",
     "non cambia mai · bordi sottili"
    ],
    [
     "type",
     "`em`",
     "testo dell’elemento · si **accumula** · padding dei pulsanti"
    ],
    [
     "house",
     "`rem`",
     "testo della radice, scelto dall’utente · testi e spaziature"
    ]
   ],
   "nota": "Mai `html { font-size: 10px; }`: ignora la preferenza dell’utente"
  },
  {
   "tipo": "widget",
   "titolo": "Liste annidate con em e con rem",
   "w": "w5_annidate"
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
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Funzioni di calcolo",
   "sotto": "calc() combina unità, min() e max() fissano limiti, clamp() tiene un valore tra minimo e massimo.",
   "foto": {
    "src": "assets/immagini/atmosfera/5-4.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le funzioni di calcolo",
   "msg": "Il CSS fa i conti tra unità diverse",
   "punti": [
    [
     "calculator",
     "`calc(100% - 2rem)`: spazi **obbligatori** attorno a + e −"
    ],
    [
     "arrow-down-to-line",
     "`min(100%, 600px)`: il più piccolo → limite **massimo**"
    ],
    [
     "arrow-up-to-line",
     "`max(1rem, 2vw)`: il più grande → limite **minimo**"
    ],
    [
     "brackets",
     "`clamp(min, preferito, max)`: il preferito, tenuto tra i limiti"
    ],
    [
     "zoom-in",
     "Testo fluido: `1rem + 1vw`, non solo `vw` (lo zoom deve funzionare)"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "clamp() al lavoro",
   "w": "w5_clamp"
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
   ]
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
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Formati dei colori",
   "sotto": "Lo stesso colore si scrive in più formati; HSL è comodo per costruire palette, RGB per i canali.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-1.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "`#ff0000`, `rgb(255 0 0)`, `hsl(0 100% 50%)` e `red`: quanti colori diversi sono?",
   "risposta": "**Uno solo**: il rosso puro, scritto in quattro formati diversi."
  },
  {
   "tipo": "tessere",
   "titolo": "I formati dei colori",
   "msg": "Lo stesso colore, più scritture",
   "tessere": [
    [
     "type",
     "Nomi",
     "`tomato`, `rebeccapurple`"
    ],
    [
     "hash",
     "Esadecimale",
     "`#0a6f66` · breve `#fc0` = `#ffcc00`"
    ],
    [
     "sliders-horizontal",
     "`rgb()`",
     "tre canali da 0 a 255"
    ],
    [
     "palette",
     "`hsl()`",
     "tinta in gradi, saturazione %, luminosità %"
    ]
   ],
   "nota": "Sintassi moderna: `rgb(10 111 102 / 0.5)` · `rgba()` non serve più"
  },
  {
   "tipo": "widget",
   "titolo": "Un colore, due scritture",
   "w": "w6_colori"
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
   ]
  },
  {
   "tipo": "errore",
   "no": "«`#fc0` è uguale a `#fc0000`.»",
   "si": "Nella forma breve **ogni cifra si raddoppia**: `#fc0` vale `#ffcc00`, un giallo oro; `#fc0000` è un rosso."
  },
  {
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Trasparenza: opacity contro canale alfa",
   "sotto": "opacity rende trasparente tutto l’elemento, l’alfa di un colore solo quel colore.",
   "foto": {
    "src": "assets/immagini/atmosfera/6-2.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Due trasparenze",
   "msg": "Tutto l’elemento o solo un colore",
   "a": {
    "icona": "layers",
    "titolo": "`opacity: 0.5`",
    "righe": [
     "• sfondo, testo, bordi e figli",
     "• con 0: invisibile ma **c’è**, e si clicca"
    ],
    "piede": "tutto l’elemento"
   },
   "b": {
    "icona": "droplet",
    "titolo": "`rgb(… / 0.5)`",
    "tono": "buono",
    "righe": [
     "• solo quel colore",
     "• sullo sfondo: il testo resta pieno"
    ],
    "piede": "solo il colore"
   }
  },
  {
   "tipo": "widget",
   "titolo": "opacity o canale alfa?",
   "w": "w6_alfa"
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
 ]
};
