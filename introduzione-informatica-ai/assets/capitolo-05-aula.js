window.AULA = {
 "modulo": "Introduzione a informatica ed AI",
 "n": "05",
 "titolo": "Dall’algoritmo all’IA che impara",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Dall’algoritmo all’IA che impara",
   "sotto": "Alcuni problemi non si riescono a scrivere come regole: per risolverli si cambia strada e si fa imparare il sistema dagli esempi.",
   "indice": [
    [
     "5.1",
     "Un problema che le istruzioni non risolvono"
    ],
    [
     "5.2",
     "Imparare dagli esempi"
    ],
    [
     "5.3",
     "Algoritmi tradizionali e algoritmi di apprendimento automatico a confronto"
    ],
    [
     "5.4",
     "La mappa dei termini: i quattro cerchi"
    ],
    [
     "5.5",
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
   "testo": "Provate a scrivere tre regole per riconoscere un gatto in una foto: bastano?",
   "risposta": "No: ogni regola ha eccezioni, sia animali che sembrano gatti e non lo sono sia gatti che non rispettano la regola, e un computer tradizionale ha bisogno di regole precise."
  },
  {
   "tipo": "sezione",
   "num": "5.1",
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
     "Un computer tradizionale **funziona solo con regole precise** (capitolo 4)"
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
   "num": "5.2",
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
     "Come la persona nella **stanza cinese** (capitolo 3)"
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
   "num": "5.3",
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
   "num": "5.4",
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
     "Qualsiasi sistema che svolge **compiti che, svolti da una persona, richiederebbero intelligenza** (capitolo 2)"
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
     "Il filtro antispam di Gmail (capitolo 1) funziona così"
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
     "Google Lens (capitolo 1), che riconosce una pianta da una foto, è un esempio"
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
     "Midjourney, Suno (capitolo 1) e i chatbot come ChatGPT sono IA generativa"
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
   "num": "5.5",
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
     "Sono **racconti**, non descrizioni della realtà (capitolo 1, «Idee sbagliate sull’IA»)"
    ]
   ]
  }
 ]
};
