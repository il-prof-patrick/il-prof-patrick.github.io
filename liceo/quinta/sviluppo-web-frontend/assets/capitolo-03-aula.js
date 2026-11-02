window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "03",
 "titolo": "HTML: base",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "HTML: base",
   "sotto": "Testo, elenchi, collegamenti, immagini e tabelle: i mattoni di ogni pagina.",
   "indice": [
    [
     "3.1",
     "Il testo"
    ],
    [
     "3.2",
     "Elenchi"
    ],
    [
     "3.3",
     "Collegamenti"
    ],
    [
     "3.4",
     "Immagini"
    ],
    [
     "3.5",
     "Tabelle"
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
   "num": "3.1",
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
   "num": "3.2",
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
     "Il CSS li trasforma poi in barre orizzontali (7.1)"
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
   "num": "3.3",
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
   "num": "3.4",
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
   "num": "3.5",
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
     "la tabella **non ha bordi**: le linee si aggiungono nel foglio di stile (7.5)"
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
   "nota": "L’impaginazione si fa con Flexbox e Grid (7.1–7.2)"
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
  }
 ]
};
