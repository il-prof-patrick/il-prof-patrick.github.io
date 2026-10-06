window.AULA = {
 "modulo": "Reti e Internet",
 "n": "06",
 "titolo": "Il 5G, l’Internet of Things e il Cloud Computing",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "5G, Internet of Things e cloud",
   "sotto": "La rete mobile, miliardi di oggetti connessi e il calcolo a distanza.",
   "indice": [
    [
     "6.1",
     "Come funziona la rete mobile"
    ],
    [
     "6.2",
     "Le generazioni: dalla 1G alla 5G"
    ],
    [
     "6.3",
     "5G e salute: falsi miti e dati"
    ],
    [
     "6.4",
     "L’Internet of Things"
    ],
    [
     "6.5",
     "Le applicazioni dell’IoT"
    ],
    [
     "6.6",
     "I rischi dell’IoT"
    ],
    [
     "6.7",
     "Il cloud computing"
    ],
    [
     "6.8",
     "Il grid computing"
    ],
    [
     "6.9",
     "L’edge computing"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1533664488202-6af66d26c44a?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Siete in treno e state guardando un video: il treno corre a 200 km/h, eppure il video continua. Come fa il telefono a restare collegato?",
   "risposta": "Passa continuamente da un’antenna all’altra lungo la linea, senza interrompere la connessione: è l’handover."
  },
  {
   "tipo": "sezione",
   "num": "6.1",
   "titolo": "Come funziona la rete mobile",
   "sotto": "Celle, antenne e handover",
   "foto": {
    "src": "https://images.unsplash.com/photo-1661095699423-d6ccb41e211f?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "La rete cellulare",
   "punti": [
    [
     "hexagon",
     "Il territorio è diviso in **celle**, ognuna con un’antenna (**stazione radio base**)"
    ],
    [
     "smartphone",
     "Il telefono parla con l’antenna della **sua** cella"
    ],
    [
     "repeat",
     "Ti sposti? Passa alla cella vicina **senza interrompere**: **handover**"
    ]
   ],
   "foto": {
    "src": "https://lxantenna.com/wp-content/uploads/2025/05/custom_antenna_solutions_bespoke_rf_design_manufacturing-%E6%81%A2%E5%A4%8D%E7%9A%84-%E6%81%A2%E5%A4%8D%E7%9A%84-1024x683.webp",
    "tit": "Una stazione radio base",
    "alt": "Una stazione radio base: le antenne in cima al traliccio servono le celle intorno."
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Celle grandi e celle piccole",
   "a": {
    "icona": "trees",
    "titolo": "Campagna",
    "righe": [
     "• pochi utenti",
     "• **celle grandi**, poche antenne"
    ]
   },
   "b": {
    "icona": "building-2",
    "titolo": "Città",
    "tono": "buono",
    "righe": [
     "• tanti utenti",
     "• **celle piccole**, tante antenne"
    ]
   },
   "verdetto": "Ogni antenna ha una **capacità limitata** che divide tra i telefoni della sua cella"
  },
  {
   "tipo": "anim",
   "titolo": "Celle e handover",
   "id": "f-handover"
  },
  {
   "tipo": "errore",
   "no": "«Il mio telefono si collega al satellite per telefonare.»",
   "si": "I normali telefoni si collegano alle **antenne a terra** della cella in cui si trovano, poche centinaia di metri o pochi chilometri; da lì i dati viaggiano quasi sempre **in fibra**. Solo alcuni modelli recenti possono mandare messaggi di emergenza via satellite."
  },
  {
   "tipo": "sezione",
   "num": "6.2",
   "titolo": "Le generazioni: dalla 1G alla 5G",
   "sotto": "Una generazione ogni dieci anni",
   "foto": {
    "src": "https://images.unsplash.com/photo-1560209617-059c0bd661ba?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Dalla 1G alla 5G",
   "righe": [
    [
     "Generazione",
     "In Italia",
     "Novità",
     "Banda"
    ],
    [
     "**1G** (TACS)",
     "fine ’80 – ’90",
     "mobile **analogica**, solo voce",
     "—"
    ],
    [
     "**2G** (GSM)",
     "anni ’90",
     "**digitale**, **SMS**, primi dati",
     "decine di kbps"
    ],
    [
     "**3G** (UMTS)",
     "anni 2000",
     "**Internet sul telefono**, videochiamate",
     "alcuni Mbps"
    ],
    [
     "**4G** (LTE)",
     "dal 2012",
     "streaming, social, app",
     "decine–centinaia di Mbps"
    ],
    [
     "**5G**",
     "dal 2019",
     "**latenza bassissima**, tantissimi dispositivi",
     "centinaia di Mbps – oltre 1 Gbps"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Martin Cooper",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/1f/2007Computex_e21Forum-MartinCooper.jpg",
     "tit": "Con il DynaTAC, nel 2007",
     "alt": "Martin Cooper con il DynaTAC, nel 2007."
    }
   ]
  },
  {
   "tipo": "errore",
   "no": "«Le generazioni del cellulare cambiano solo la velocità.»",
   "si": "Il passaggio 1G → 2G è stato **da analogico a digitale**; il 3G ha portato **Internet** sul telefono; il 5G punta soprattutto su **latenza** e **numero di dispositivi**."
  },
  {
   "tipo": "punti",
   "titolo": "Esempio: lo smartphone",
   "punti": [
    [
     "smartphone",
     "**iPhone** 2007 e primi **Android** 2008: arrivano con il **3G**"
    ],
    [
     "video",
     "Senza il **4G** niente Instagram e TikTok come li conosciamo"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Quale generazione ha cambiato di più la vostra vita, anche se non l’avete vissuta? Perché?",
   "risposta": "Domanda aperta: di solito emerge la 4G, che ha reso possibili app, streaming, social e videochiamate dal telefono."
  },
  {
   "tipo": "sezione",
   "num": "6.3",
   "titolo": "5G e salute: falsi miti e dati",
   "sotto": "Paure e fisica",
   "foto": {
    "src": "https://images.unsplash.com/photo-1617994452722-4145e196248b?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Partire dalla fisica",
   "punti": [
    [
     "triangle-alert",
     "2020: la falsa notizia «il 5G diffonde il COVID-19» · antenne incendiate"
    ],
    [
     "waves",
     "Onde **non ionizzanti**, come radio, TV, Wi-Fi"
    ],
    [
     "dna",
     "**Non hanno abbastanza energia** per danneggiare il DNA (a differenza dei raggi X)"
    ],
    [
     "thermometer",
     "Unico effetto accertato, a intensità molto alte: **riscaldamento** → **limiti di esposizione**"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Non ionizzanti e ionizzanti",
   "sel": "#s-ionizzanti"
  },
  {
   "tipo": "punti",
   "titolo": "Un dato controintuitivo",
   "punti": [
    [
     "radio-tower",
     "**Più antenne vicine** = meno esposizione per chi telefona"
    ],
    [
     "signal-low",
     "Antenna lontana → il telefono trasmette **alla massima potenza**, accanto alla testa"
    ],
    [
     "signal-high",
     "Antenna vicina → basta **pochissima potenza**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Secondo voi che cosa porterà il 6G (verso il 2030)? A che cosa potrebbe servire una connessione ancora più veloce e con ancora meno ritardo?",
   "risposta": "Domanda aperta: realtà aumentata ovunque, veicoli autonomi, sensori ovunque. La ricerca è in corso e gli standard sono attesi intorno al 2030."
  },
  {
   "tipo": "sezione",
   "num": "6.4",
   "titolo": "L’Internet of Things",
   "sotto": "Quando a comunicare sono le cose",
   "foto": {
    "src": "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Elencate gli oggetti di casa vostra, esclusi telefoni, computer e TV, che secondo voi sono collegati a Internet.",
   "risposta": "Spesso: assistenti vocali, termostati, telecamere, lampadine, lavatrici, robot aspirapolvere, contatore della luce, auto, bilance, giocattoli."
  },
  {
   "tipo": "punti",
   "titolo": "L’Internet of Things (IoT)",
   "punti": [
    [
     "cpu",
     "Oggetti fisici con **sensori**, **calcolo** e **connessione**"
    ],
    [
     "activity",
     "Raccolgono dati, li scambiano via Internet e **agiscono**, spesso da soli"
    ],
    [
     "sparkles",
     "Oggetti **smart** o **connessi**"
    ],
    [
     "users",
     "Gli oggetti connessi sono già **più delle persone**: decine di miliardi (indicativo)"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Il termostato smart",
   "id": "f-iot"
  },
  {
   "tipo": "storia",
   "titolo": "Una lattina connessa",
   "anno": "1999",
   "icona": "history",
   "punti": [
    [
     "user",
     "**Kevin Ashton** usa per primo «Internet of Things» (tag RFID nei magazzini)"
    ],
    [
     "cup-soda",
     "Primi anni ’80: un **distributore di Coca-Cola** della Carnegie Mellon su ARPANET"
    ],
    [
     "thermometer-snowflake",
     "Gli studenti controllavano da lontano se c’erano lattine fredde"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Un oggetto IoT è intelligente perché ragiona da solo.»",
   "si": "Un oggetto “smart” di solito **segue un programma** e reagisce ai dati dei sensori; l’intelligenza vera, quando c’è, è spesso nel **cloud** del produttore o in modelli di IA (paragrafo 7.2)."
  },
  {
   "tipo": "sezione",
   "num": "6.5",
   "titolo": "Le applicazioni dell’IoT",
   "sotto": "Casa e città intelligenti",
   "foto": {
    "src": "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "La casa intelligente (*smart home*)",
   "punti": [
    [
     "house",
     "Termostati, lampadine, prese, serrature, videocamere, robot, elettrodomestici"
    ],
    [
     "mic",
     "Gli **assistenti vocali** fanno da telecomando"
    ],
    [
     "leaf",
     "**Risparmio energetico**"
    ],
    [
     "accessibility",
     "**Autonomia** di anziani e persone con disabilità"
    ]
   ],
   "foto": {
    "src": "https://smartzenhome.com/wp-content/uploads/2026/03/best-smart-home-devices-1024x683.png",
    "tit": "Dispositivi della casa intelligente",
    "alt": "Alcuni dispositivi della casa intelligente: assistente vocale, termostato, lampadina, presa e videocamera connessi."
   }
  },
  {
   "tipo": "punti",
   "titolo": "La città intelligente (*smart city*)",
   "punti": [
    [
     "car",
     "**Parcheggi** che segnalano i posti liberi"
    ],
    [
     "lamp",
     "**Lampioni** che si accendono quando passa qualcuno"
    ],
    [
     "trash-2",
     "**Cassonetti** che avvisano quando sono pieni"
    ],
    [
     "traffic-cone",
     "**Semafori** regolati dal traffico · qualità dell’aria"
    ]
   ],
   "foto": {
    "src": "https://www.asmag.com/upload/pic/article/51947.10575.jpg",
    "tit": "Un sensore di parcheggio",
    "alt": "Un sensore di parcheggio installato sull’asfalto: rileva se sopra c’è un’auto e invia il dato via radio, così un’app mostra i posti liberi."
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quale applicazione dell’IoT vi sembra più utile per la vostra città? E quale vi sembra inutile o addirittura preoccupante?",
   "risposta": ""
  },
  {
   "tipo": "sezione",
   "num": "6.6",
   "titolo": "I rischi dell’IoT",
   "sotto": "Una porta in più verso la rete",
   "foto": {
    "src": "https://images.unsplash.com/photo-1549109926-58f039549485?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Perché gli oggetti IoT sono rischiosi",
   "tessere": [
    [
     "key",
     "Password predefinite",
     "uguali per tutti, mai cambiate"
    ],
    [
     "refresh-cw",
     "Aggiornamenti",
     "che non arrivano mai"
    ],
    [
     "lock-open",
     "Niente cifratura",
     "dati inviati in chiaro"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Mirai",
   "anno": "2016",
   "icona": "bug",
   "punti": [
    [
     "cctv",
     "Infetta centinaia di migliaia di **videocamere** con password come “admin/admin”"
    ],
    [
     "network",
     "Diventano una **botnet** e bombardano il DNS di **Dyn**"
    ],
    [
     "globe",
     "Per ore irraggiungibili Twitter, Netflix, Spotify"
    ],
    [
     "eye-off",
     "I proprietari **non se ne accorgono**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Privacy",
   "punti": [
    [
     "house",
     "Quando sei in casa, che cosa dici, come dormi, quanto consumi"
    ],
    [
     "file-text",
     "Chi possiede i dati e a chi li cede: **condizioni d’uso** che nessuno legge"
    ],
    [
     "cctv",
     "Videocamere e campanelli **riprendono altre persone**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Una lampadina smart viene violata. Che danno può fare, se non può “vedere” niente?",
   "risposta": "Può diventare un punto d’ingresso per raggiungere altri dispositivi della stessa rete, o essere usata in una botnet per attaccare altri; per questo conviene isolarla nella rete ospiti."
  },
  {
   "tipo": "sezione",
   "num": "6.7",
   "titolo": "Il cloud computing",
   "sotto": "Affittare invece di comprare",
   "foto": {
    "src": "https://images.unsplash.com/photo-1603437873662-dc1f44901825?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Dove si trovano, fisicamente, i compiti che caricate su Classroom e le foto salvate nel cloud del telefono?",
   "risposta": "In data center di Google, Apple o altri fornitori, su dischi reali in qualche parte del mondo; sul telefono ne resta spesso solo una copia o un’anteprima."
  },
  {
   "tipo": "punti",
   "titolo": "Il cloud computing",
   "punti": [
    [
     "cloud",
     "Usare via Internet risorse nei **data center di un fornitore**"
    ],
    [
     "hard-drive",
     "Spazio, potenza di calcolo, programmi"
    ],
    [
     "coins",
     "Si **affitta** e si paga **quanto si usa**, come l’elettricità"
    ],
    [
     "server",
     "Dentro la nuvola: **data center, server e cavi reali**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I modelli di servizio",
   "righe": [
    [
     "Modello",
     "Che cosa si affitta",
     "Chi lo usa",
     "Esempi"
    ],
    [
     "**IaaS**",
     "macchine virtuali, dischi, reti",
     "tecnici",
     "AWS EC2, Google Compute Engine, Azure"
    ],
    [
     "**PaaS**",
     "una piattaforma per i propri programmi",
     "programmatori",
     "Google App Engine, Firebase"
    ],
    [
     "**SaaS**",
     "un programma finito",
     "tutti",
     "Gmail, Documenti, Classroom, Canva, Netflix"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Esempio: la pizza",
   "tessere": [
    [
     "house",
     "Fatta in casa",
     "tutto tuo: i tuoi server"
    ],
    [
     "chef-hat",
     "IaaS",
     "noleggi la cucina, la pizza la fai tu"
    ],
    [
     "flame",
     "PaaS",
     "impasto e forno pronti, metti il condimento"
    ],
    [
     "pizza",
     "SaaS",
     "ordini la pizza pronta"
    ]
   ],
   "nota": "Limite: nel cloud si possono **combinare** i modelli"
  },
  {
   "tipo": "confronto",
   "titolo": "Vantaggi e rischi",
   "a": {
    "icona": "circle-check",
    "titolo": "Vantaggi",
    "tono": "buono",
    "righe": [
     "+ nessun server da comprare",
     "+ si paga quanto si usa",
     "+ accesso ovunque",
     "+ collaborazione in tempo reale",
     "+ backup gestiti da professionisti"
    ]
   },
   "b": {
    "icona": "triangle-alert",
    "titolo": "Rischi",
    "righe": [
     "- **senza Internet** non si lavora",
     "- **dipendenza** dal fornitore",
     "- **privacy**: dati su computer altrui",
     "- un guasto ferma migliaia di clienti",
     "- un account violato espone tutto"
    ]
   }
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: Google Drive",
   "punti": [
    [
     "folder",
     "Cartella di gruppo con permessi diversi: visualizzatore, commentatore, editor"
    ],
    [
     "file-text",
     "Lavorare **insieme** su un Documento Google"
    ],
    [
     "history",
     "Guardare la **cronologia delle versioni**"
    ],
    [
     "message-circle-question",
     "Dov’è il documento? Senza connessione? Chi lo vede?"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Se salvo nel cloud, non perdo mai niente.»",
   "si": "Il cloud protegge dai guasti del proprio dispositivo, ma **non da una cancellazione fatta per errore, da un account violato o da un abbonamento scaduto**. Per i file importanti serve comunque una copia di sicurezza separata."
  },
  {
   "tipo": "domanda",
   "testo": "Classroom è un esempio di IaaS, PaaS o SaaS? E perché?",
   "risposta": "SaaS: si usa un programma finito dal browser o dall’app, senza installare nulla né gestire server."
  },
  {
   "tipo": "sezione",
   "num": "6.8",
   "titolo": "Il grid computing",
   "sotto": "Tanti computer per un problema enorme",
   "foto": {
    "src": "https://images.unsplash.com/photo-1658870901700-9c0418787aa7?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il grid computing",
   "punti": [
    [
     "globe",
     "Clima del pianeta, collisioni del CERN, proteine: **troppo per un solo computer**"
    ],
    [
     "grid-3x3",
     "Unisce la potenza di **tanti computer**, anche di proprietari diversi"
    ],
    [
     "puzzle",
     "Un problema enorme diviso in **pezzi indipendenti**"
    ],
    [
     "plug",
     "Il nome dalla **rete elettrica** (*power grid*)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Esempi",
   "punti": [
    [
     "atom",
     "**Worldwide LHC Computing Grid**: ~170 centri in più di 40 paesi, Italia compresa (INFN)"
    ],
    [
     "house",
     "**Folding@home**: i computer di casa di milioni di volontari"
    ],
    [
     "trophy",
     "Nel 2020 più potente dei più grandi supercomputer"
    ]
   ],
   "foto": {
    "src": "https://home.cern/wp-content/uploads/2026/04/CDS-CERN-PHOTO-201705-115-7.jpg",
    "tit": "Il centro di calcolo del CERN",
    "alt": "Il centro di calcolo del CERN di Ginevra, uno dei nodi principali della griglia mondiale che analizza i dati degli esperimenti di fisica."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Un calcolo diviso tra tanti",
   "id": "f-grid"
  },
  {
   "tipo": "tabella",
   "titolo": "Cloud e grid",
   "righe": [
    [
     "",
     "Cloud computing",
     "Grid computing"
    ],
    [
     "Idea",
     "affittare risorse di un fornitore",
     "unire risorse di tanti"
    ],
    [
     "Proprietà",
     "un solo fornitore",
     "molti enti"
    ],
    [
     "Utenti",
     "chiunque, a pagamento",
     "soprattutto ricerca"
    ],
    [
     "Lavoro",
     "servizi di tutti i giorni",
     "calcoli enormi divisibili"
    ],
    [
     "Esempi",
     "Google Drive, AWS",
     "griglia del CERN, Folding@home"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Grid e cloud sono la stessa cosa: computer lontani usati via Internet.»",
   "si": "Entrambi usano risorse a distanza, ma il **cloud** è un servizio di un fornitore per usi quotidiani, la **grid** è una **collaborazione tra molti enti** per risolvere calcoli giganteschi."
  },
  {
   "tipo": "domanda",
   "testo": "Perché non tutti i problemi si possono risolvere con una grid?",
   "risposta": "Perché funziona solo se il calcolo si divide in pezzi indipendenti; se ogni passo dipende dal precedente, i computer resterebbero ad aspettarsi a vicenda."
  },
  {
   "tipo": "sezione",
   "num": "6.9",
   "titolo": "L’edge computing",
   "sotto": "Elaborare dove nascono i dati",
   "foto": {
    "src": "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Mandare tutto nel cloud? Tre problemi",
   "tessere": [
    [
     "timer",
     "Latenza",
     "andare e tornare richiede tempo"
    ],
    [
     "gauge",
     "Banda",
     "una videocamera che invia tutto consuma moltissimo"
    ],
    [
     "lock",
     "Privacy",
     "i dati escono da casa o dalla fabbrica"
    ]
   ],
   "nota": "L’**edge computing** elabora **vicino** all’oggetto e manda al cloud **solo i risultati**"
  },
  {
   "tipo": "anim",
   "titolo": "Lontano o vicino?",
   "id": "f-edge"
  },
  {
   "tipo": "tabella",
   "titolo": "Cloud ed edge",
   "righe": [
    [
     "",
     "Cloud",
     "Edge"
    ],
    [
     "Dove",
     "data center lontani",
     "vicino all’oggetto"
    ],
    [
     "Latenza",
     "più alta",
     "bassissima"
    ],
    [
     "Dati in rete",
     "tutti",
     "solo i risultati"
    ],
    [
     "Potenza",
     "enorme",
     "limitata"
    ],
    [
     "Senza connessione",
     "non funziona",
     "continua a funzionare"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Complementari",
   "punti": [
    [
     "zap",
     "Decisioni rapide **sul bordo**, analisi pesanti **nel cloud**"
    ],
    [
     "car",
     "Auto a guida assistita: frena **da sola** in pochi ms (edge)"
    ],
    [
     "cloud",
     "I dati di migliaia di auto migliorano il software (cloud)"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Con il 5G non serve l’edge: la rete è così veloce che basta il cloud.»",
   "si": "Il 5G riduce la latenza della **rete radio**, ma il viaggio fino a un data center lontano e ritorno richiede comunque tempo. Il 5G, anzi, prevede server “al bordo” della rete proprio per sfruttare la sua latenza bassa."
  },
  {
   "tipo": "domanda",
   "testo": "Perché una fabbrica potrebbe preferire elaborare i dati delle sue macchine nell’edificio invece che nel cloud?",
   "risposta": "Per avere reazioni immediate, continuare a funzionare anche se cade la connessione, ridurre il traffico e non far uscire dati riservati sulla produzione."
  }
 ]
};
