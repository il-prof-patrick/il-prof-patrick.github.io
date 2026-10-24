window.AULA = {
 "modulo": "Introduzione a informatica ed AI",
 "n": "05",
 "titolo": "Dall’algoritmo all’apprendimento",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Dall’algoritmo all’apprendimento",
   "sotto": "Un computer non ragiona come una persona: esegue istruzioni, e un algoritmo è il modo di dirgli che cosa fare.",
   "indice": [
    [
     "5.1",
     "Il computer tradizionale"
    ],
    [
     "5.2",
     "Che cos’è un algoritmo"
    ],
    [
     "5.3",
     "Le proprietà di un algoritmo"
    ],
    [
     "5.4",
     "Come si rappresenta un algoritmo"
    ],
    [
     "5.5",
     "L’IA che impara"
    ],
    [
     "5.6",
     "La mappa dei termini: i quattro cerchi"
    ],
    [
     "5.7",
     "Quanto è «generale» un’IA"
    ]
   ],
   "foto": {
    "src": "../assets/immagini/modulo-introduzione-informatica-ai.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Un computer fa in un istante conti che a noi richiederebbero ore: è più intelligente di noi?",
   "risposta": "No: esegue istruzioni semplicissime, ma molto in fretta. È veloce, non intelligente: come la persona nella stanza cinese, esegue senza capire."
  },
  {
   "tipo": "sezione",
   "num": "5.1",
   "titolo": "Il computer tradizionale",
   "sotto": "Esegue istruzioni semplicissime, ma molto in fretta",
   "icona": "cpu"
  },
  {
   "tipo": "punti",
   "titolo": "Il computer tradizionale",
   "msg": "Non ragiona: esegue istruzioni",
   "punti": [
    [
     "file-text",
     "Esegue **istruzioni scritte da una persona**"
    ],
    [
     "list-ordered",
     "L’insieme delle istruzioni è il **programma**"
    ],
    [
     "circle-x",
     "Un computer tradizionale **non ragiona**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Che cosa sa fare il processore",
   "msg": "Pochissimi tipi di istruzione, tutte semplicissime",
   "tessere": [
    [
     "calculator",
     "Calcoli matematici",
     "per esempio una somma"
    ],
    [
     "scale",
     "Operazioni logiche",
     "per esempio confrontare due numeri"
    ],
    [
     "memory-stick",
     "Memoria e salti",
     "leggere o scrivere un dato e passare a un’altra istruzione, anche solo se un confronto è vero"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Dai mattoni al videogioco",
   "msg": "Tutto nasce combinando istruzioni semplici",
   "punti": [
    [
     "gamepad-2",
     "Dal **videogioco** al **browser**: tutto nasce dalle stesse istruzioni semplicissime"
    ],
    [
     "gauge",
     "Le istruzioni si combinano **a miliardi al secondo**"
    ]
   ],
   "foto": {
    "src": "https://images.pexels.com/photos/37368169/pexels-photo-37368169.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "tit": "Un processore (CPU)",
    "alt": "Un processore (CPU): il chip che esegue le istruzioni. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Veloce, non intelligente",
   "msg": "Dove un computer eccelle e dove no",
   "punti": [
    [
     "zap",
     "Eccelle nella **velocità**: miliardi di istruzioni al secondo"
    ],
    [
     "database",
     "Eccelle nella **memoria**: non dimentica e non si stanca"
    ],
    [
     "circle-x",
     "Non eccelle in ciò che richiede di **capire**"
    ],
    [
     "door-closed",
     "Come la persona nella stanza cinese, **esegue regole** senza sapere che cosa significhino"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Una «macchina stupida»",
   "msg": "Umberto Eco sul computer",
   "punti": [
    [
     "quote",
     "Lo scrittore **Umberto Eco** lo disse in una prefazione"
    ],
    [
     "bot",
     "Per lui il computer non rende intelligente chi non lo è: è una **«macchina stupida»**"
    ],
    [
     "users",
     "Dà buoni risultati solo **nelle mani di persone intelligenti**"
    ]
   ],
   "foto": {
    "src": "https://cdn.britannica.com/33/225133-050-AD8BB3DB/Umberto-Eco-Italian-literary-critic-novelist-semiotician.jpg",
    "tit": "Umberto Eco",
    "alt": "Umberto Eco (1932-2016), scrittore e semiologo: nella prefazione a Claudio Pozzoli, «Come scrivere una tesi di laurea con il personal computer» (Rizzoli), definì il computer «una macchina stupida» che funziona bene solo in mano a persone intelligenti. Di riconoscimento."
   }
  },
  {
   "tipo": "errore",
   "no": "«Un computer che calcola velocissimo è intelligente.»",
   "si": "La **velocità non è intelligenza**: il computer esegue istruzioni semplicissime molto in fretta, ma non capisce che cosa sta calcolando."
  },
  {
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "Che cos’è un algoritmo",
   "sotto": "Un procedimento che trasforma dati in dati",
   "icona": "list-ordered"
  },
  {
   "tipo": "punti",
   "titolo": "Che cos’è un algoritmo",
   "msg": "Un procedimento per risolvere un problema",
   "punti": [
    [
     "flag",
     "È un **procedimento finito**"
    ],
    [
     "list-ordered",
     "Formato da una **sequenza ordinata di passi elementari**"
    ],
    [
     "arrow-right-left",
     "**Trasforma dati in ingresso** (*input*) **in dati in uscita** (*output*)"
    ],
    [
     "target",
     "Serve a **risolvere un problema**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Un esempio: il caffè",
   "msg": "Che cosa serve per andare alle macchinette",
   "punti": [
    [
     "coffee",
     "L’**output atteso** è il caffè"
    ],
    [
     "coins",
     "Gli **input necessari** sono le monete e la scelta"
    ],
    [
     "list-ordered",
     "I **passi** portano dagli input all’output"
    ],
    [
     "file-code",
     "Il **programma** è la traduzione di un algoritmo in istruzioni che il computer sa eseguire"
    ]
   ],
   "foto": {
    "src": "https://www.orasesta.com/wp-content/uploads/2023/02/macchina-illy-capsule-per-uffici-e-pmi-orasesta.jpg",
    "tit": "Una macchinetta del caffè",
    "alt": "Una macchinetta del caffè: un algoritmo che prende monete e scelta e restituisce un caffè. Di riconoscimento."
   }
  },
  {
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Le proprietà di un algoritmo",
   "sotto": "Che cosa rende buono un algoritmo",
   "icona": "list-checks"
  },
  {
   "tipo": "domanda",
   "testo": "«Aggiungi un po’ di zucchero» è una buona istruzione per un computer?",
   "risposta": "No: il computer non sa che cosa voglia dire «un po’». Ogni passo deve avere un solo significato."
  },
  {
   "tipo": "tabella",
   "titolo": "Le proprietà di un algoritmo",
   "msg": "Che cosa richiedono e perché servono",
   "righe": [
    [
     "Proprietà",
     "Che cosa richiede",
     "Perché serve"
    ],
    [
     "Finitezza",
     "l’esecuzione termina in un tempo ragionevole",
     "un procedimento infinito non dà mai una risposta"
    ],
    [
     "Non ambiguità",
     "ogni passo si interpreta in un solo modo",
     "la macchina non può «indovinare» che cosa si intendeva"
    ],
    [
     "Efficacia",
     "il risultato è una soluzione adeguata al problema",
     "un algoritmo che termina ma sbaglia è inutile"
    ],
    [
     "Efficienza",
     "usa poco tempo e poca memoria",
     "per uno stesso problema esistono tanti algoritmi, alcuni molto più rapidi"
    ],
    [
     "Generalità",
     "risolve una classe di problemi e non uno solo",
     "ordinare qualsiasi elenco, non solo uno"
    ],
    [
     "Atomicità",
     "i passi non sono ulteriormente scomponibili",
     "il computer capisce solo istruzioni elementari"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Come si rappresenta un algoritmo",
   "sotto": "Quattro modi di scrivere lo stesso algoritmo",
   "icona": "file-code"
  },
  {
   "tipo": "tessere",
   "titolo": "Le quattro forme",
   "msg": "Dalla più umana alla più vicina al computer",
   "tessere": [
    [
     "message-square",
     "Linguaggio naturale",
     "chiaro, ma può essere ambiguo"
    ],
    [
     "workflow",
     "Diagramma di flusso",
     "visivo: riquadri, frecce e rombi"
    ],
    [
     "file-text",
     "Pseudocodice",
     "preciso, ma non eseguibile"
    ],
    [
     "file-code",
     "Codice",
     "eseguibile dal computer"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Linguaggio naturale",
   "msg": "La macchinetta del caffè, con il prezzo in centesimi",
   "punti": [
    [
     "circle-play",
     "**Parti** da un credito di zero"
    ],
    [
     "repeat",
     "**Finché** il credito è minore del prezzo, chiedi una moneta e aggiungila"
    ],
    [
     "coffee",
     "**Quando** il credito basta, prepara il caffè"
    ],
    [
     "coins",
     "**Se** il credito supera il prezzo, restituisci la differenza come resto"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Diagramma di flusso",
   "sel": "#s-flusso"
  },
  {
   "tipo": "codice",
   "titolo": "Pseudocodice",
   "html": "credito ← 0\nleggi prezzo\nfinché credito &lt; prezzo\n    leggi moneta\n    credito ← credito + moneta\nscrivi «Caffè pronto»\nse credito &gt; prezzo\n    scrivi «Resto:», credito − prezzo",
   "msg": "Preciso, ma non eseguibile: parole italiane usate come istruzioni"
  },
  {
   "tipo": "codice",
   "titolo": "Codice di programmazione",
   "html": "prezzo = 120  # in centesimi\ncredito = 0\nwhile credito &lt; prezzo:\n    credito = credito + int(input(\"Moneta: \"))\nprint(\"Caffè pronto\")\nif credito &gt; prezzo:\n    print(\"Resto:\", credito - prezzo)",
   "msg": "Eseguibile dal computer, secondo le regole di un linguaggio"
  },
  {
   "tipo": "punti",
   "titolo": "Da una forma all’altra",
   "msg": "L’algoritmo resta lo stesso, cambia il modo di scriverlo",
   "punti": [
    [
     "file-text",
     "Dallo **pseudocodice** si arriva a **qualsiasi linguaggio** di programmazione"
    ],
    [
     "workflow",
     "Lo stesso vale per il **diagramma di flusso**"
    ],
    [
     "equal",
     "Cambia solo **il modo di scriverlo**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Quattro forme, un solo algoritmo",
   "id": "f-quattro"
  },
  {
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "L’IA che impara",
   "sotto": "Quando le istruzioni non bastano e il sistema impara dagli esempi",
   "icona": "sparkles"
  },
  {
   "tipo": "domanda",
   "testo": "Provate a scrivere tre regole per riconoscere un gatto in una foto: bastano?",
   "risposta": "No: ogni regola ha eccezioni, sia animali che sembrano gatti e non lo sono sia gatti che non rispettano la regola, e un computer tradizionale ha bisogno di regole precise."
  },
  {
   "tipo": "sezione",
   "num": "5.5.1",
   "titolo": "Un problema che le istruzioni non risolvono",
   "sotto": "Le regole non bastano mai",
   "icona": "cat"
  },
  {
   "tipo": "punti",
   "titolo": "Riconoscere un gatto",
   "msg": "Facile per noi, impossibile da descrivere con regole",
   "punti": [
    [
     "eye",
     "Per una persona è **facilissimo**"
    ],
    [
     "list-checks",
     "Ma non si riesce a **descriverlo con regole precise**"
    ],
    [
     "cpu",
     "Un computer tradizionale **funziona solo con regole precise** (capitolo 5)"
    ],
    [
     "triangle-alert",
     "Per ogni regola si trovano **eccezioni di due tipi**: animali che sembrano gatti e non lo sono, gatti che non la rispettano"
    ]
   ],
   "foto": {
    "src": "https://images.pexels.com/photos/8305815/pexels-photo-8305815.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "tit": "Un gatto",
    "alt": "Un gatto: per una persona è immediato riconoscerlo. Di riconoscimento."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Provare con le regole",
   "id": "f-gatti"
  },
  {
   "tipo": "punti",
   "titolo": "Migliaia di regole",
   "msg": "Serve un altro modo",
   "punti": [
    [
     "plus",
     "A ogni foto in più c’è **un’altra eccezione**"
    ],
    [
     "files",
     "Servirebbero **migliaia di regole**"
    ],
    [
     "circle-x",
     "E **non basterebbero** lo stesso"
    ],
    [
     "route",
     "Serve **un altro modo** di risolvere il problema"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.5.2",
   "titolo": "Imparare dagli esempi",
   "sotto": "Mostrare tanti esempi invece di scrivere le regole",
   "icona": "graduation-cap"
  },
  {
   "tipo": "punti",
   "titolo": "Imparare dagli esempi",
   "msg": "Come impara un bambino",
   "punti": [
    [
     "images",
     "Si **mostrano al sistema tanti esempi**"
    ],
    [
     "search",
     "Gli si lascia **trovare da solo ciò che li distingue**"
    ],
    [
     "baby",
     "Un bambino impara che cos’è un cane **vedendo tanti cani**, non ascoltando un elenco di caratteristiche"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il modello",
   "msg": "Che cosa il sistema ricava dagli esempi",
   "punti": [
    [
     "brain",
     "Il **modello** è l’insieme di schemi (*pattern*) con cui giudica i casi nuovi"
    ],
    [
     "dumbbell",
     "**Addestrare** un modello vuol dire fargli imparare dagli esempi"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Imparare dagli esempi",
   "id": "f-impara"
  },
  {
   "tipo": "punti",
   "titolo": "Imparare non è capire",
   "msg": "Il sistema trova schemi, non sa che cos’è un gatto",
   "punti": [
    [
     "scan-search",
     "Trova **schemi che distinguono** i gatti dai non-gatti"
    ],
    [
     "circle-help",
     "Ma non «sa» che cos’è un gatto"
    ],
    [
     "door-closed",
     "Come la persona nella **stanza cinese** (capitolo 4)"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Se un sistema ha imparato dagli esempi, ha capito che cos’è un gatto.»",
   "si": "Ha trovato **schemi che distinguono** i gatti dagli altri animali: non è detto che sappia che cos’è un gatto."
  },
  {
   "tipo": "sezione",
   "num": "5.5.3",
   "titolo": "Algoritmi tradizionali e algoritmi di apprendimento automatico a confronto",
   "sotto": "Regole scritte o regole ricavate dagli esempi",
   "icona": "scale"
  },
  {
   "tipo": "domanda",
   "testo": "Chiedete due volte la stessa domanda a un chatbot: la risposta sarà identica? E con una calcolatrice?",
   "risposta": "Con la calcolatrice sì: stesso ingresso, stessa uscita. Con un chatbot di solito no: sceglie tra risposte probabili, quindi può cambiare."
  },
  {
   "tipo": "confronto",
   "titolo": "Due modi di risolvere lo stesso problema",
   "msg": "Chi scrive le regole",
   "a": {
    "icona": "user",
    "titolo": "Algoritmi tradizionali",
    "righe": [
     "• **regole scritte da una persona**",
     "• il programmatore dice come arrivare al risultato"
    ]
   },
   "b": {
    "icona": "brain",
    "titolo": "Machine Learning",
    "tono": "buono",
    "righe": [
     "• **regole ricavate dagli esempi**",
     "• in italiano, apprendimento automatico"
    ]
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Come funzionano",
   "msg": "Algoritmi tradizionali e Machine Learning a confronto",
   "righe": [
    [
     "",
     "Algoritmi tradizionali",
     "Machine Learning"
    ],
    [
     "Come si ottiene la soluzione",
     "Regole scritte esplicitamente dal programmatore, con una logica ben definita",
     "Impara schemi (*pattern*) dai dati di esempio e addestra un modello che sa generalizzare"
    ],
    [
     "Su che cosa si basano",
     "Sulle regole scritte dal programmatore",
     "Sui dati. Tanti dati"
    ],
    [
     "Approccio",
     "**Imperativo**: le istruzioni dicono come raggiungere l’obiettivo",
     "**Dichiarativo**: gli esempi descrivono com’è fatto l’obiettivo, il modello impara come raggiungerlo"
    ],
    [
     "Dopo che sono scritti",
     "Istruzioni fisse, salvo modifiche manuali",
     "Possono aggiornare il modello da soli con nuovi dati o errori: più adattabili"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Che cosa danno",
   "msg": "Risultato, problemi adatti ed esempio",
   "righe": [
    [
     "",
     "Algoritmi tradizionali",
     "Machine Learning"
    ],
    [
     "Risultato",
     "**Deterministico**: stesso ingresso, stesso risultato, fisso e prevedibile",
     "**Probabilistico**: nessun risultato garantito, ma la stima della soluzione più probabile"
    ],
    [
     "Problemi adatti",
     "Strutture medio-semplici e ben definite: ordinare un elenco, calcolare un’operazione",
     "Schemi complessi e relazioni difficili da formalizzare: riconoscere una mela, prevedere l’esito di una partita"
    ],
    [
     "Esempio: filtro antispam",
     "Un elenco di parole vietate scritto da una persona",
     "Migliaia di email spam e non spam da cui ricava gli indizi"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Il filtro antispam in due modi",
   "id": "f-antispam"
  },
  {
   "tipo": "sezione",
   "num": "5.6",
   "titolo": "La mappa dei termini: i quattro cerchi",
   "sotto": "Quattro termini, uno dentro l’altro",
   "icona": "target"
  },
  {
   "tipo": "punti",
   "titolo": "Quattro cerchi",
   "msg": "Ognuno è un caso particolare di quello che lo contiene",
   "punti": [
    [
     "sparkles",
     "**IA**: il cerchio più grande"
    ],
    [
     "graduation-cap",
     "**Apprendimento automatico**: dentro l’IA"
    ],
    [
     "layers",
     "**Apprendimento profondo**: dentro l’apprendimento automatico"
    ],
    [
     "image-plus",
     "**IA generativa**: il più piccolo"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "IA · *Artificial Intelligence*",
   "msg": "Non dice come il sistema ci riesce",
   "punti": [
    [
     "sparkles",
     "Qualsiasi sistema che svolge **compiti che, svolti da una persona, richiederebbero intelligenza** (capitolo 4)"
    ],
    [
     "user",
     "Può riuscirci con **regole scritte a mano**, come i primi programmi di conversazione"
    ],
    [
     "brain",
     "Oppure **imparando dagli esempi**: sono tutte IA"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Apprendimento automatico · *Machine Learning*",
   "msg": "L’IA che impara dagli esempi",
   "punti": [
    [
     "images",
     "Si mostrano **molti esempi** e il sistema ne ricava un **modello**"
    ],
    [
     "percent",
     "Sui casi nuovi dà una risposta **probabile**"
    ],
    [
     "mail",
     "Il filtro antispam di Gmail (capitolo 3) funziona così"
    ],
    [
     "circle-x",
     "**Non tutta l’IA è machine learning**: un sistema a regole scritte a mano è IA ma non impara"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Apprendimento profondo · *Deep Learning*",
   "msg": "Per i problemi più difficili, come immagini e voce",
   "punti": [
    [
     "layers",
     "Il modello è un sistema **molto grande, organizzato in molti livelli** («strati»)"
    ],
    [
     "scan-eye",
     "In una foto: i primi livelli colgono i **contorni**, poi le **forme**, infine l’**oggetto intero**"
    ],
    [
     "network",
     "Il nome tecnico è **rete neurale artificiale**: ne riparlerete più avanti nel corso"
    ],
    [
     "flower-2",
     "Google Lens (capitolo 3), che riconosce una pianta da una foto, è un esempio"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "IA generativa · *Generative AI*",
   "msg": "Produce contenuti nuovi",
   "punti": [
    [
     "circle-help",
     "I sistemi visti finora **rispondono a una domanda**: «è spam?», «che pianta è?»"
    ],
    [
     "wand-sparkles",
     "Un sistema generativo **crea qualcosa**: testi, immagini, musica, programmi"
    ],
    [
     "images",
     "Di solito è deep learning con una grandissima quantità di esempi: ciò che produce **somiglia a ciò che ha visto**, senza essere in genere una copia"
    ],
    [
     "music",
     "Midjourney, Suno (capitolo 3) e i chatbot come ChatGPT sono IA generativa"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Come stanno insieme",
   "msg": "Vale in un verso solo",
   "punti": [
    [
     "check",
     "Un sistema di **IA generativa** è anche deep learning, machine learning e IA"
    ],
    [
     "x",
     "Non vale il contrario: un sistema a regole scritte a mano è IA ma **non machine learning**"
    ],
    [
     "x",
     "Un riconoscitore di immagini è deep learning ma **non genera nulla**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "I quattro cerchi",
   "id": "f-cerchi"
  },
  {
   "tipo": "tabella",
   "titolo": "In sintesi",
   "msg": "I quattro termini, in italiano e in inglese",
   "righe": [
    [
     "Italiano",
     "Inglese",
     "Che cos’è",
     "Esempio"
    ],
    [
     "Intelligenza artificiale (IA)",
     "Artificial Intelligence (AI)",
     "Tutto ciò che svolge compiti che richiederebbero intelligenza, anche con regole scritte a mano",
     "I primi programmi di conversazione a regole"
    ],
    [
     "Apprendimento automatico",
     "Machine Learning (ML)",
     "L’IA che impara dagli esempi invece di seguire regole scritte da una persona",
     "Il filtro antispam di Gmail"
    ],
    [
     "Apprendimento profondo",
     "Deep Learning (DL)",
     "Machine learning con sistemi molto grandi, organizzati in molti livelli",
     "Google Lens che riconosce una pianta"
    ],
    [
     "IA generativa",
     "Generative AI (GenAI)",
     "L’IA che produce contenuti nuovi: testi, immagini, suoni",
     "Midjourney, Suno, i chatbot"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.7",
   "titolo": "Quanto è «generale» un’IA",
   "sotto": "Una cosa sola o qualsiasi cosa",
   "icona": "footprints"
  },
  {
   "tipo": "domanda",
   "testo": "Un programma di scacchi che batte tutti i campioni del mondo è un’IA generale?",
   "risposta": "No: è bravissimo in un compito solo. Fuori dagli scacchi non sa fare nulla, per esempio non sa riconoscere un volto."
  },
  {
   "tipo": "punti",
   "titolo": "Tre gradini",
   "msg": "Alcune IA fanno una cosa sola, altre, in teoria, qualsiasi cosa",
   "punti": [
    [
     "circle-check",
     "**IA specializzata**: esiste oggi, secondo la visione più diffusa"
    ],
    [
     "lightbulb",
     "**IA generale**: ipotetica"
    ],
    [
     "rocket",
     "**Superintelligenza**: ipotetica"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Tre gradini",
   "id": "f-gradini"
  },
  {
   "tipo": "punti",
   "titolo": "IA specializzata · *Narrow AI*",
   "msg": "Una cosa sola, anche molto bene",
   "punti": [
    [
     "target",
     "In inglese *Narrow AI* (**ANI**), in italiano anche «IA debole»"
    ],
    [
     "circle-x",
     "Fuori dal suo compito **non sa fare nulla**"
    ],
    [
     "crown",
     "**Stockfish** gioca a scacchi meglio di qualsiasi persona ma non sa riconoscere un volto"
    ],
    [
     "scan-face",
     "**Face ID** riconosce i volti ma non sa tradurre; **Google Lens** riconosce le piante ma non sa giocare a scacchi"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "IA generale · *AGI*",
   "msg": "Ipotetica: oggi non esiste un sistema che tutti riconoscano come tale",
   "punti": [
    [
     "brain",
     "*Artificial General Intelligence*, in italiano anche «IA forte»"
    ],
    [
     "list-checks",
     "Saprebbe svolgere **qualsiasi compito intellettuale** che sa fare una persona"
    ],
    [
     "graduation-cap",
     "E **imparare compiti nuovi**, come una persona"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Che cosa se ne dice oggi",
   "msg": "Non c’è una definizione di AGI su cui siano tutti d’accordo",
   "punti": [
    [
     "calendar",
     "Nel **2023** alcuni ricercatori di Google DeepMind propongono di classificare i sistemi in **livelli**"
    ],
    [
     "eye",
     "Guardano a **ciò che sanno fare**, non a come lo fanno"
    ],
    [
     "crown",
     "Per loro programmi come Stockfish sono già **superumani** nel loro compito"
    ],
    [
     "message-circle",
     "I chatbot sarebbero soltanto un’AGI **«emergente»**, al primo livello"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Jensen Huang, marzo 2026",
   "msg": "Il capo di Nvidia pensa che l’AGI sia stata raggiunta",
   "punti": [
    [
     "mic",
     "Lo ha detto in un podcast"
    ],
    [
     "briefcase",
     "Per lui AGI vuol dire un sistema capace di **fare il lavoro di una persona**, perfino di avviare un’azienda"
    ],
    [
     "circle-x",
     "Ma ha aggiunto che la probabilità che centomila agenti di IA costruiscano un’azienda come Nvidia è **zero**"
    ],
    [
     "messages-square",
     "Molti esperti hanno contestato sia l’affermazione sia la definizione"
    ]
   ],
   "foto": {
    "src": "https://cdn.britannica.com/60/257460-050-62FF74CB/NVIDIA-Jensen-Huang.jpg",
    "tit": "Jensen Huang",
    "alt": "Jensen Huang, capo di Nvidia: a marzo 2026 ha detto di pensare che l’AGI sia stata raggiunta. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Yann LeCun",
   "msg": "Anche l’intelligenza umana è piuttosto specializzata",
   "punti": [
    [
     "award",
     "Ricercatore premiato con il **Turing Award**, ex capo della ricerca sull’IA di Meta"
    ],
    [
     "building-2",
     "Ha lasciato l’azienda a fine 2025 e fondato a Parigi **AMI Labs**: a marzo 2026 ha raccolto oltre un miliardo di dollari"
    ],
    [
     "brain",
     "Preferisce parlare di «*Advanced Machine Intelligence*»"
    ],
    [
     "bot",
     "Secondo lui i chatbot di oggi **non sono una strada** verso l’intelligenza umana"
    ]
   ],
   "foto": {
    "src": "https://capacityglobal.com/wp-content/uploads/2025/11/Yann-LeCun.png",
    "tit": "Yann LeCun",
    "alt": "Yann LeCun, ricercatore premio Turing: preferisce parlare di «Advanced Machine Intelligence» e dice che anche l’intelligenza umana è specializzata. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Misurare la «generalità»",
   "msg": "Per ora non c’è consenso",
   "punti": [
    [
     "ruler",
     "Esistono test per misurare quanto un sistema sia «generale»"
    ],
    [
     "puzzle",
     "**ARC-AGI** misura con quanta efficienza un sistema impara compiti che non ha mai visto"
    ],
    [
     "scale",
     "Per ora **non c’è consenso** sul fatto che qualche sistema abbia raggiunto un’intelligenza generale a livello umano"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "ASI",
   "msg": "Superintelligenza: come l’AGI, è ipotetica",
   "punti": [
    [
     "rocket",
     "*Artificial Super Intelligence*"
    ],
    [
     "crown",
     "**Supererebbe le persone in praticamente tutti i campi**"
    ],
    [
     "circle-x",
     "Nessun sistema del genere esiste"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Nella fantascienza",
   "msg": "IA generali e superintelligenze molto diverse da quelle reali",
   "punti": [
    [
     "skull",
     "**Terminator** (1984): la rete Skynet decide di combattere gli esseri umani"
    ],
    [
     "bot",
     "**Io, Robot** (2004): il sistema VIKI controlla i robot di una città"
    ],
    [
     "heart",
     "**WALL·E** (2008): un piccolo robot spazzino prova sentimenti"
    ],
    [
     "eye",
     "**2001: Odissea nello spazio** (1968): il computer HAL 9000 gestisce un’astronave e si rifiuta di obbedire"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Quattro film",
   "msg": "A colpo d’occhio: storie di fantasia",
   "foto": [
    {
     "src": "https://i.ytimg.com/vi/F76ttUhSkhs/maxresdefault.jpg",
     "tit": "Terminator",
     "alt": "Terminator (1984): lo scheletro metallico del T-800, creato dalla rete Skynet. Di riconoscimento."
    },
    {
     "src": "https://www.looper.com/img/gallery/the-actor-who-plays-sonny-in-i-robot-might-surprise-you/l-intro-1624582212.jpg",
     "tit": "Io, Robot",
     "alt": "Io, Robot (2004): il robot Sonny. Di riconoscimento."
    },
    {
     "src": "https://images.everyeye.it/img-artwork/wall-e-v1-578067-1280x720.jpg",
     "tit": "WALL·E",
     "alt": "WALL·E (2008): il piccolo robot spazzino, con un cubo di Rubik. Di riconoscimento."
    },
    {
     "src": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/04/09/red-hal-eye.jpg",
     "tit": "2001: Odissea nello spazio",
     "alt": "2001: Odissea nello spazio (1968): l’occhio rosso del computer HAL 9000. Di riconoscimento."
    }
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Racconti, non realtà",
   "msg": "Che cosa l’IA di oggi non ha",
   "punti": [
    [
     "bot",
     "Un **corpo da robot**"
    ],
    [
     "target",
     "**Volontà proprie**"
    ],
    [
     "heart",
     "**Sentimenti**"
    ],
    [
     "book-open",
     "Sono **racconti**, non descrizioni della realtà (capitolo 3, «Idee sbagliate sull’IA»)"
    ]
   ]
  }
 ]
};
