window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "01",
 "titolo": "Come funziona il Web",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Come funziona il Web",
   "sotto": "Che cosa succede tra il clic e la pagina sullo schermo.",
   "indice": [
    [
     "1.1",
     "Internet e Web"
    ],
    [
     "1.2",
     "Come il browser mostra la pagina"
    ],
    [
     "1.3",
     "I tre linguaggi del front-end"
    ],
    [
     "1.4",
     "Anatomia di una chiamata"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Internet e Web sono la stessa cosa? Fate un esempio di qualcosa che usa Internet ma non è il Web.",
   "risposta": "No: il Web è uno dei servizi che funzionano su Internet. WhatsApp, le e-mail, i videogiochi online e lo streaming di Spotify usano Internet senza passare dal Web."
  },
  {
   "tipo": "sezione",
   "num": "1.1",
   "titolo": "Internet e Web",
   "sotto": "Un’infrastruttura e un servizio",
   "foto": {
    "src": "https://images.unsplash.com/photo-1604149370100-2cf3be3bc845?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Internet",
   "punti": [
    [
     "network",
     "**Rete mondiale** che collega miliardi di dispositivi"
    ],
    [
     "cable",
     "Cavi, fibre, antenne, router: l’**infrastruttura**"
    ],
    [
     "list",
     "Regole comuni: i protocolli della famiglia **TCP/IP**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il Web (*World Wide Web*)",
   "punti": [
    [
     "globe",
     "Un **servizio** che funziona sopra Internet"
    ],
    [
     "link",
     "Pagine web **collegate da link**"
    ],
    [
     "map",
     "Ogni pagina ha un **indirizzo** e si chiede con **HTTP**"
    ],
    [
     "monitor",
     "Si legge con un programma: il **browser**"
    ]
   ],
   "nota": "Internet = le strade · il Web = i corrieri che le usano (come autobus, ambulanze, taxi: e-mail, chat, giochi online)"
  },
  {
   "tipo": "tabella",
   "titolo": "Internet e Web a confronto",
   "righe": [
    [
     "",
     "Internet",
     "Web"
    ],
    [
     "Che cos’è",
     "la rete che collega i dispositivi",
     "un servizio: pagine e link"
    ],
    [
     "Nasce",
     "1969 (ARPANET) · TCP/IP dal 1983",
     "1989–1991 (Berners-Lee, CERN)"
    ],
    [
     "Regole",
     "TCP/IP",
     "HTTP/HTTPS, URL, HTML"
    ],
    [
     "Per usarlo",
     "dipende dal servizio",
     "il browser"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Se non funziona Google, non funziona Internet.»",
   "si": "Google è **un sito**, cioè un servizio del Web ospitato su certi server. Se quei server hanno un problema, **Internet continua a funzionare**: WhatsApp, la posta e gli altri siti funzionano lo stesso. Se invece manca la connessione, non funziona nessun servizio."
  },
  {
   "tipo": "confronto",
   "titolo": "Client e server",
   "a": {
    "icona": "monitor",
    "titolo": "Client",
    "righe": [
     "• di solito il **browser** (Chrome, Edge, Firefox, Safari)",
     "• **chiede** una risorsa",
     "• prende l’**iniziativa**"
    ]
   },
   "b": {
    "icona": "server",
    "titolo": "Server",
    "tono": "buono",
    "righe": [
     "• il **web server** (Nginx, Apache)",
     "• **risponde** inviando la risorsa",
     "• se nessuno chiede, **non succede niente**"
    ]
   }
  },
  {
   "tipo": "foto",
   "titolo": "Dove “vive” una pagina",
   "foto": [
    {
     "src": "https://office.sysracks.com/storage/kgbsr4DUTuJzCkNw8eXpMZsSyD8pSxpc0kmjFxhh.jpg",
     "tit": "Un data center: server accesi 24 ore su 24",
     "alt": "Data center: corridoio di armadi pieni di server. Le pagine dei siti che visitiamo stanno su macchine come queste, accese 24 ore su 24."
    }
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Ruolo e macchina sono cose diverse",
   "punti": [
    [
     "monitor",
     "Lo stesso computer può fare **sia da client sia da server**"
    ],
    [
     "code",
     "Con **Live Server** di VS Code il tuo PC fa partire un piccolo web server e il tuo browser gli fa da client"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Il modello client-server",
   "sel": "#s-clientserver"
  },
  {
   "tipo": "storia",
   "titolo": "Il Web nasce al CERN",
   "anno": "1989 – 1993",
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
    "tit": "Tim Berners-Lee",
    "alt": "Tim Berners-Lee, inventore del Web."
   },
   "punti": [
    [
     "calendar",
     "**Marzo 1989**: Berners-Lee propone di collegare i documenti con link (**ipertesto**)"
    ],
    [
     "message-square",
     "Il capo scrive: «*Vague but exciting*»"
    ],
    [
     "globe",
     "**1990**: primo browser, primo server, primo sito: **info.cern.ch**"
    ],
    [
     "gift",
     "**1993**: Web di **pubblico dominio**, gratis e senza brevetti"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Il primo web server",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d1/First_Web_Server.jpg",
     "tit": "L’etichetta: «Questa macchina è un server. NON SPEGNERLA!!»",
     "alt": "Il computer NeXT usato da Berners-Lee al CERN come primo web server della storia, oggi in un museo. Osservare l’etichetta incollata sopra: «Questa macchina è un server. NON SPEGNERLA!!»."
    }
   ]
  },
  {
   "tipo": "foto",
   "titolo": "La prima pagina web",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/eb/The_first_website%2C_info.cern.ch%2C_in_2025.PNG",
     "tit": "Solo titoli, testo e link sottolineati",
     "alt": "La prima pagina web della storia, ricostruita dal CERN su info.cern.ch e ancora online. Osservare che ci sono solo titoli, testo e link sottolineati."
    }
   ]
  },
  {
   "tipo": "sezione",
   "num": "1.2",
   "titolo": "Come il browser mostra la pagina",
   "sotto": "Dal file alla pagina",
   "foto": {
    "src": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quando aprite una pagina, secondo voi il browser riceve dal server un’“immagine” della pagina già pronta?",
   "risposta": "No: riceve file di testo con le istruzioni (HTML, CSS, JavaScript) e i file delle immagini, e la pagina la disegna lui. Per questo la stessa pagina appare diversa su un telefono e su un computer."
  },
  {
   "tipo": "punti",
   "titolo": "Il server non manda una fotografia",
   "punti": [
    [
     "file-code",
     "Manda **file di testo con istruzioni**"
    ],
    [
     "image",
     "Più i file di immagini, video e caratteri"
    ],
    [
     "monitor",
     "**Il browser costruisce e disegna** la pagina"
    ],
    [
     "smartphone",
     "Per questo la stessa pagina appare **diversa** su schermi e browser diversi"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "I passi del browser (1)",
   "punti": [
    [
     "file-code",
     "**1 · Riceve l’HTML** e lo legge dall’alto in basso: titoli, paragrafi, immagini, link, come sono annidati"
    ],
    [
     "download",
     "**2 · Trova altri file** (CSS, immagini, script, caratteri) e li chiede **uno per uno**"
    ],
    [
     "palette",
     "**3 · Applica gli stili**: colore, dimensione, margini di ogni elemento"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "I passi del browser (2)",
   "punti": [
    [
     "layout-template",
     "**4 · Layout**: dove va ogni elemento e quanto spazio occupa"
    ],
    [
     "monitor",
     "**5 · Rendering**: disegna i pixel sullo schermo"
    ],
    [
     "code",
     "**6 · Script**: JavaScript può cambiare la pagina anche dopo; a ogni modifica il browser **ricalcola e ridisegna**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "La pagina arriva a pezzi",
   "id": "f-costruzione"
  },
  {
   "tipo": "punti",
   "titolo": "Molte richieste, un solo clic",
   "punti": [
    [
     "download",
     "Una pagina di notizie può richiedere **più di cento file**"
    ],
    [
     "gauge",
     "Il **peso** dei file, soprattutto delle immagini, decide la velocità"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il mio sito è uguale su tutti i computer, perché l’ho visto sul mio.»",
   "si": "Ogni browser **disegna la pagina da solo**, con la larghezza della sua finestra, i caratteri installati e le sue regole predefinite. Una pagina va **provata su più browser e più larghezze di schermo**, a partire dal telefono."
  },
  {
   "tipo": "tabella",
   "titolo": "I browser e i loro motori",
   "righe": [
    [
     "Browser",
     "Rendering",
     "JavaScript",
     "Azienda"
    ],
    [
     "Chrome, Edge, Opera, Brave",
     "Blink",
     "V8",
     "Google (Edge: Microsoft)"
    ],
    [
     "Firefox",
     "Gecko",
     "SpiderMonkey",
     "Mozilla"
    ],
    [
     "Safari",
     "WebKit",
     "JavaScriptCore",
     "Apple"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Tre soli motori di rendering",
   "punti": [
    [
     "cpu",
     "Il **motore di rendering** legge HTML e CSS e disegna la pagina; il **motore JavaScript** esegue gli script"
    ],
    [
     "layers",
     "Stesso motore → pagine disegnate **quasi allo stesso modo**"
    ],
    [
     "smartphone",
     "Oltre metà del traffico viene dai **telefoni**: si progetta prima per lo schermo piccolo"
    ],
    [
     "chart-no-axes-combined",
     "Chrome ≈ **due terzi**, Safari 15–20%, Edge e Firefox sotto il 10%"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "1.3",
   "titolo": "I tre linguaggi del front-end",
   "sotto": "Struttura, aspetto, comportamento",
   "foto": {
    "src": "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Tre linguaggi, tre compiti",
   "righe": [
    [
     "Linguaggio",
     "Compito",
     "Risponde a",
     "Esempio"
    ],
    [
     "**HTML**",
     "struttura e contenuto",
     "che cosa c’è?",
     "questo è un titolo, un paragrafo, un’immagine"
    ],
    [
     "**CSS**",
     "presentazione",
     "come appare?",
     "il titolo è blu, grande 32 pixel, centrato"
    ],
    [
     "**JavaScript**",
     "comportamento",
     "che cosa fa quando…?",
     "quando clicchi il pulsante, mostra il menu"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Che cos’è ciascuno",
   "tessere": [
    [
     "file-code",
     "HTML",
     "*HyperText Markup Language* · **marcatura**: etichetta le parti di un testo, non dà ordini"
    ],
    [
     "palette",
     "CSS",
     "*Cascading Style Sheets* · **stile**: regole sull’aspetto degli elementi"
    ],
    [
     "code",
     "JavaScript",
     "**programmazione**: variabili, condizioni, cicli, funzioni"
    ]
   ],
   "nota": "Separare i compiti: cambi l’aspetto di tutto il sito senza toccare i contenuti"
  },
  {
   "tipo": "tessere",
   "titolo": "L’analogia della casa",
   "tessere": [
    [
     "house",
     "HTML",
     "la **struttura in muratura**: muri, stanze, porte, finestre"
    ],
    [
     "paintbrush",
     "CSS",
     "l’**arredamento** e la tinteggiatura"
    ],
    [
     "zap",
     "JavaScript",
     "l’**impianto elettrico**: accende la luce quando premi l’interruttore"
    ]
   ],
   "nota": "Il limite: in una casa vera l’impianto non sposta i muri, JavaScript può aggiungere e togliere elementi HTML"
  },
  {
   "tipo": "widget",
   "titolo": "Prova tu: e se spegnessi un linguaggio?",
   "w": "linguaggi"
  },
  {
   "tipo": "errore",
   "no": "«Programmo in HTML.»",
   "si": "HTML **non è un linguaggio di programmazione**: non ha variabili, condizioni né cicli e non esegue calcoli; **descrive la struttura di un documento**. Si dice “scrivo una pagina in HTML”. Anche il CSS non è un linguaggio di programmazione; lo è JavaScript."
  },
  {
   "tipo": "errore",
   "no": "«Java e JavaScript sono lo stesso linguaggio, o almeno parenti stretti.»",
   "si": "Sono **due linguaggi diversi**, con regole e usi diversi. Il nome “JavaScript” fu scelto nel 1995 per **ragioni di marketing**, sfruttando la popolarità che Java aveva allora. Come si dice tra programmatori: Java sta a JavaScript come *car* sta a *carpet*."
  },
  {
   "tipo": "confronto",
   "titolo": "Front-end e back-end",
   "a": {
    "icona": "monitor",
    "titolo": "Front-end",
    "tono": "buono",
    "righe": [
     "• arriva al **browser** ed è eseguito lì",
     "• HTML, CSS, JavaScript, immagini",
     "• **questo modulo**"
    ]
   },
   "b": {
    "icona": "server",
    "titolo": "Back-end",
    "righe": [
     "• gira **sul server**",
     "• PHP, Python, Java, JavaScript (Node.js)",
     "• legge e scrive nei **database**"
    ]
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il front-end è pubblico",
   "punti": [
    [
     "eye",
     "Chiunque lo legge: **Visualizza sorgente** o strumenti per sviluppatori"
    ],
    [
     "lock",
     "Il back-end resta sul server: l’utente vede solo il risultato"
    ],
    [
     "triangle-alert",
     "**Mai password o dati riservati** nel codice del front-end"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Volete vedere il codice HTML di Instagram o di Wikipedia. Si può fare? E quello che gestisce le password degli utenti?",
   "risposta": "Il codice HTML, CSS e JavaScript sì, perché arriva al nostro browser (Ctrl+U o F12). Il codice che controlla le password no: è nel back-end, sul server, e non viene mai inviato."
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: F12 su Wikipedia",
   "punti": [
    [
     "monitor",
     "**F12** → scheda *Elements*: togli la spunta ad alcune regole CSS e guarda la pagina perdere l’aspetto"
    ],
    [
     "code",
     "Ctrl+Maiusc+P → «Disable JavaScript», ricarica: che cosa smette di funzionare?"
    ],
    [
     "rotate-ccw",
     "Ricaricando le modifiche spariscono: hai cambiato **solo la copia nel tuo browser**"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "1.4",
   "titolo": "Anatomia di una chiamata",
   "sotto": "Che cosa succede quando premi Invio",
   "foto": {
    "src": "https://images.unsplash.com/photo-1483213097419-365e22f0f258?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "L’indirizzo: l’URL",
   "html": "https://www.scuola.it:443\n  /corsi/informatica/index.html\n  ?classe=5#programma",
   "note": [
    [
     "lock",
     "`https://` · il **protocollo**"
    ],
    [
     "server",
     "`www.scuola.it` · il **server**"
    ],
    [
     "door-open",
     "`:443` · la **porta** (80 HTTP, 443 HTTPS: si omette)"
    ],
    [
     "folder",
     "`/corsi/…/index.html` · **cartelle e file**"
    ],
    [
     "search",
     "`?classe=5` · **parametri** `nome=valore`"
    ],
    [
     "anchor",
     "`#programma` · un **punto della pagina** (non va al server)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il file predefinito",
   "punti": [
    [
     "folder",
     "Se il percorso finisce con una cartella (`www.scuola.it/corsi/`) il server manda il **file predefinito**"
    ],
    [
     "file-code",
     "Di solito `index.html`: per questo la pagina principale di un sito si chiama **sempre** così"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Dal nome all’indirizzo IP: il DNS",
   "punti": [
    [
     "hash",
     "Su Internet i dispositivi hanno **indirizzi IP**: numeri come `193.205.86.10`"
    ],
    [
     "book-open",
     "Il **DNS** (*Domain Name System*) traduce il nome di dominio nell’IP del server"
    ],
    [
     "clock",
     "Le risposte restano per un po’ in **cache**"
    ]
   ],
   "nota": "Il DNS è come la rubrica del telefono: cerchi il nome, ti dà il numero. Ma è distribuita su migliaia di server"
  },
  {
   "tipo": "codice",
   "titolo": "Richiesta e risposta: HTTP",
   "html": "GET /corsi/index.html HTTP/1.1\nHost: www.scuola.it\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n\n<span class=\"k\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"k\">&lt;html</span> <span class=\"a\">lang</span>=<span class=\"s\">\"it\"</span><span class=\"k\">&gt;</span> ...",
   "note": [
    [
     "send",
     "**Richiesta**: metodo (`GET` = «dammi») e percorso"
    ],
    [
     "circle-check",
     "**Risposta**: **codice di stato** e, se va bene, il file"
    ],
    [
     "history",
     "HTTP è **senza memoria**: ogni richiesta è indipendente"
    ],
    [
     "cookie",
     "Per ricordare un utente i siti usano i **cookie**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I codici di stato",
   "righe": [
    [
     "Codice",
     "Significato",
     "Quando capita"
    ],
    [
     "**200** OK",
     "tutto bene, ecco la risorsa",
     "quasi sempre"
    ],
    [
     "**301** / **302**",
     "spostata a un altro indirizzo",
     "cambio di dominio, da http a https"
    ],
    [
     "**304** Not Modified",
     "non è cambiata: usa la tua copia",
     "ricaricando immagini e CSS"
    ],
    [
     "**403** Forbidden",
     "vietato",
     "area riservata"
    ],
    [
     "**404** Not Found",
     "non trovata",
     "link sbagliato, file rinominato"
    ],
    [
     "**500** Internal Server Error",
     "errore del server",
     "il programma sul server si è bloccato"
    ],
    [
     "**503** Service Unavailable",
     "server non disponibile",
     "sovraccarico o manutenzione"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Le famiglie si riconoscono dalla prima cifra",
   "tessere": [
    [
     "circle-check",
     "2xx",
     "successo"
    ],
    [
     "arrow-right",
     "3xx",
     "reindirizzamento"
    ],
    [
     "circle-x",
     "4xx",
     "errore del **client**: la richiesta è sbagliata"
    ],
    [
     "server-crash",
     "5xx",
     "errore del **server**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Errore 404: il sito è rotto, il server non funziona.»",
   "si": "Il 404 è un errore **della richiesta**: il server funziona benissimo, tanto che risponde, ma **il file chiesto non esiste a quell’indirizzo** (link sbagliato, file rinominato). Se il server fosse guasto si avrebbe un 5xx, oppure nessuna risposta."
  },
  {
   "tipo": "storia",
   "titolo": "La stanza 404",
   "anno": "una leggenda",
   "icona": "door-open",
   "punti": [
    [
     "door-open",
     "Si racconta che il 404 venga dalla «stanza 404» del CERN dove stava il primo server"
    ],
    [
     "circle-x",
     "**Non ci sono prove**: è considerata una leggenda"
    ],
    [
     "list",
     "I codici furono scelti **a famiglie**: il 4 indica gli errori del client, 04 è il quarto della serie"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "HTTPS",
   "punti": [
    [
     "lock",
     "**HTTP con i dati cifrati** (la S è *Secure*)"
    ],
    [
     "shield-check",
     "Nessuno tra browser e server può **leggere o modificare** ciò che si scambiano"
    ],
    [
     "key",
     "Il server dimostra chi è con un **certificato digitale**"
    ],
    [
     "triangle-alert",
     "Il lucchetto dice che la connessione è **cifrata**, non che il sito è **onesto**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Dall’Invio alla pagina",
   "id": "f-chiamata"
  },
  {
   "tipo": "confronto",
   "titolo": "Sito statico e sito dinamico",
   "a": {
    "icona": "file",
    "titolo": "Statico",
    "righe": [
     "• **file già pronti**, inviati così come sono",
     "• **uguali per tutti**",
     "• per cambiare: modifichi i file e li ricarichi",
     "• può essere **interattivo**: JavaScript gira nel browser"
    ]
   },
   "b": {
    "icona": "database",
    "titolo": "Dinamico",
    "tono": "buono",
    "righe": [
     "• la pagina è **costruita a ogni richiesta**",
     "• un programma sul server legge un **database**",
     "• **pagine diverse per utenti diversi**",
     "• profilo, carrello, voti sul registro"
    ]
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Statico e dinamico a confronto",
   "righe": [
    [
     "",
     "Statico",
     "Dinamico"
    ],
    [
     "Pagina",
     "file già pronto",
     "generata a ogni richiesta"
    ],
    [
     "Contenuto",
     "uguale per tutti",
     "può cambiare per ogni utente"
    ],
    [
     "Sul server",
     "solo un web server",
     "web server + programma + database"
    ],
    [
     "Velocità e costo",
     "molto veloce, hosting anche gratuito",
     "più lento e costoso"
    ],
    [
     "Sicurezza",
     "poche parti attaccabili",
     "più parti da proteggere"
    ],
    [
     "Esempi",
     "portfolio, documentazione, sito di un evento",
     "social, e-commerce, registro elettronico"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Sito statico e sito dinamico",
   "id": "f-statico"
  },
  {
   "tipo": "errore",
   "no": "«Un sito statico è un sito dove non si muove niente.»",
   "si": "“Statico” si riferisce **a come il server fornisce le pagine** (file già pronti), non all’aspetto. Un sito statico può avere animazioni, giochi, quiz e menu interattivi, perché **tutto questo lo fa JavaScript nel browser**. Non può invece salvare dati sul server o mostrare a ogni utente contenuti diversi presi da un database."
  },
  {
   "tipo": "domanda",
   "testo": "Il sito che costruiremo noi: statico o dinamico? E il registro elettronico?",
   "risposta": "Il nostro è statico: file HTML, CSS e JS pubblicati così come sono. Il registro elettronico è dinamico, perché mostra a ogni utente i suoi voti presi da un database."
  },
  {
   "tipo": "punti",
   "titolo": "Molti siti sono ibridi",
   "punti": [
    [
     "file",
     "Le pagine sono file **statici**"
    ],
    [
     "download",
     "JavaScript chiede i dati a un servizio esterno (**API**) quando servono"
    ],
    [
     "gauge",
     "Anche blog e documentazione generano **in anticipo** le pagine: più veloci e sicure"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: la scheda Network",
   "punti": [
    [
     "monitor",
     "**F12** → *Network*: ricarica la home della scuola e guarda le richieste: quante, di che tipo, con quale **codice di stato**, quanto pesano"
    ],
    [
     "circle-x",
     "Scrivi un indirizzo inesistente dello stesso sito: trova il **404**"
    ],
    [
     "lock",
     "Clicca il **lucchetto** e leggi a chi è intestato il certificato"
    ]
   ]
  }
 ]
};
