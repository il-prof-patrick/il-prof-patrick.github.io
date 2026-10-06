window.AULA = {
 "modulo": "Reti e Internet",
 "n": "07",
 "titolo": "Reti e intelligenza artificiale",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Reti e intelligenza artificiale",
   "sotto": "L’IA vive nei data center, è nata leggendo il Web e oggi lo riempie.",
   "indice": [
    [
     "7.1",
     "Dove “abita” un chatbot"
    ],
    [
     "7.2",
     "IA sul dispositivo e IA nel cloud"
    ],
    [
     "7.3",
     "Il Web come cibo per l’IA"
    ],
    [
     "7.4",
     "La teoria dell’Internet morta"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quando scrivete una domanda a un chatbot sul telefono, secondo voi la risposta viene calcolata dentro il telefono? Come potreste scoprirlo?",
   "risposta": "Quasi sempre no: la domanda viaggia via Internet fino a un data center, dove il modello calcola la risposta. Basta mettere il telefono in modalità aereo: il chatbot smette di funzionare."
  },
  {
   "tipo": "sezione",
   "num": "7.1",
   "titolo": "Dove “abita” un chatbot",
   "sotto": "Il telefono è solo il client",
   "foto": {
    "src": "https://images.unsplash.com/photo-1660855551740-4474188debdb?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Dove gira un chatbot",
   "punti": [
    [
     "smartphone",
     "ChatGPT, Gemini, Claude **non funzionano dentro il telefono**"
    ],
    [
     "server",
     "Il **modello** gira su server specializzati nei **data center**"
    ],
    [
     "lock",
     "Domanda e risposta viaggiano con **DNS, TCP, HTTPS**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Le GPU",
   "punti": [
    [
     "brain",
     "Modelli con **centinaia di miliardi di parametri**"
    ],
    [
     "cpu",
     "**GPU** (*Graphics Processing Unit*): nate per i videogiochi"
    ],
    [
     "grid-3x3",
     "**Migliaia di calcoli semplici in parallelo**: quello che serve alle reti neurali"
    ],
    [
     "network",
     "Più GPU collegate da **reti velocissime**"
    ]
   ],
   "foto": {
    "src": "https://www.trgdatacenters.com/wp-content/uploads/2024/10/Nvidia-h100.jpeg",
    "tit": "Una GPU per data center",
    "alt": "Una GPU per data center: un solo chip di questo tipo costa decine di migliaia di euro, e i data center per l’IA ne contengono decine o centinaia di migliaia."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Il viaggio di una domanda",
   "id": "f-chatbot"
  },
  {
   "tipo": "punti",
   "titolo": "I data center dell’IA",
   "punti": [
    [
     "building",
     "Data center **giganteschi**, consumano quanto **intere città**"
    ],
    [
     "coins",
     "Centinaia di miliardi di dollari: edifici, **contratti per l’energia**, centrali riaperte"
    ],
    [
     "droplet",
     "Il consumo di **elettricità e acqua** è un tema centrale"
    ]
   ],
   "foto": {
    "src": "https://imgproxy.divecdn.com/C8S-cy2YNVsMZq4Ga3VDxxBK6dQ2gevQXUsBqpt6MkU/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0yMTcwNjgzMzc1LmpwZw==.webp",
    "tit": "Un campus di data center",
    "alt": "Un grande campus di data center visto dall’alto: capannoni enormi, impianti di raffreddamento sul tetto e linee elettriche dedicate."
   }
  },
  {
   "tipo": "errore",
   "no": "«Una rete neurale è una rete di computer.»",
   "si": "Una **rete neurale** è un **modello matematico** ispirato in modo molto lontano ai neuroni: è un programma, non un insieme di dispositivi collegati. Il nome “rete” indica i collegamenti tra i suoi “nodi” matematici. Per funzionare, però, gira su molti computer collegati da **reti vere**."
  },
  {
   "tipo": "sezione",
   "num": "7.2",
   "titolo": "IA sul dispositivo e IA nel cloud",
   "sotto": "Vicino o lontano",
   "foto": {
    "src": "https://images.unsplash.com/photo-1612442058361-178007e5e498?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "L’IA sul dispositivo",
   "punti": [
    [
     "smartphone",
     "Modelli che girano **sul telefono**, sul computer, nell’auto"
    ],
    [
     "cpu",
     "**Edge AI** o IA locale (*on-device AI*), con le **NPU** (*Neural Processing Unit*)"
    ],
    [
     "shuffle",
     "Spesso si **combinano**: semplici e private in locale, complesse nel cloud"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "IA nel cloud e IA sul dispositivo",
   "righe": [
    [
     "",
     "Nel cloud",
     "Sul dispositivo"
    ],
    [
     "Dove",
     "data center",
     "telefono, computer, oggetto"
    ],
    [
     "Modello",
     "enorme, molto capace",
     "piccolo, più limitato"
    ],
    [
     "Internet?",
     "sì",
     "no"
    ],
    [
     "Latenza",
     "andata e ritorno",
     "quasi nulla"
    ],
    [
     "Privacy",
     "i dati escono",
     "i dati restano"
    ],
    [
     "Esempi",
     "chatbot, immagini e video",
     "sblocco col volto, foto, dettatura e traduzione offline"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Un chatbot in locale ha le stesse prestazioni di uno che lavora nel cloud?",
   "risposta": "No, quello in cloud è tipicamente più performante perché il telefono ha poca memoria e poca potenza di calcolo: può far girare solo modelli piccoli, mentre nel data center si usano modelli enormi su molte GPU."
  },
  {
   "tipo": "sezione",
   "num": "7.3",
   "titolo": "Il Web come cibo per l’IA",
   "sotto": "Migliaia di miliardi di parole",
   "foto": {
    "src": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Da dove impara un modello",
   "punti": [
    [
     "book-open",
     "Legge **migliaia di miliardi di parole**"
    ],
    [
     "globe",
     "Soprattutto dal **Web**: pagine, enciclopedie, forum, libri, codice"
    ],
    [
     "bug",
     "Raccolte con gli stessi **crawler** dei motori di ricerca"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il diritto d’autore",
   "punti": [
    [
     "pen-tool",
     "Giornalisti, scrittori, artisti chiedono di essere **pagati o consultati**"
    ],
    [
     "gavel",
     "**Cause in tribunale**: *New York Times* contro OpenAI e Microsoft (2023)"
    ],
    [
     "flag",
     "In Europa: estrazione permessa, ma **i titolari possono opporsi** (anche con robots.txt)"
    ],
    [
     "file-text",
     "**AI Act**: riassunto pubblico dei dati di addestramento"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«L’IA quando risponde va a leggere Internet in quel momento.»",
   "si": "Il modello ha **imparato** dai testi raccolti **prima** dell’addestramento, fino a una certa data. Solo se il chatbot fa anche una **ricerca sul web** (paragrafo 5.5) usa pagine attuali."
  },
  {
   "tipo": "sezione",
   "num": "7.4",
   "titolo": "La teoria dell’Internet morta",
   "sotto": "Quanta parte di Internet è umana?",
   "foto": {
    "src": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quando leggete i commenti sotto un video molto popolare, quanti pensate siano scritti da persone vere? Come fate a capirlo?",
   "risposta": "Spesso non si sa: molti commenti generici, ripetitivi o con link sospetti sono scritti da bot. Riconoscerli è sempre più difficile."
  },
  {
   "tipo": "punti",
   "titolo": "La teoria dell’Internet morta (*Dead Internet Theory*)",
   "punti": [
    [
     "bot",
     "Gran parte di traffico, account, commenti e contenuti sarebbe fatta da **bot**"
    ],
    [
     "users",
     "Le persone vere sarebbero una **minoranza**"
    ],
    [
     "messages-square",
     "Un web di macchine che **parlano tra loro**"
    ]
   ],
   "foto": {
    "src": "https://blog-static.morelogin.com/halo/phone-farm.png",
    "tit": "Una phone farm",
    "alt": "Una phone farm: centinaia di smartphone su scaffali, comandati da un computer per far sembrare reali account, visualizzazioni e “mi piace”."
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Perché ci riguarda",
   "tessere": [
    [
     "star",
     "Fidarsi è più difficile",
     "recensioni, follower e visualizzazioni gonfiati"
    ],
    [
     "megaphone",
     "Opinione falsata",
     "migliaia di account fanno sembrare maggioritaria un’idea"
    ],
    [
     "file-x",
     "Web di qualità più bassa",
     "pagine in serie per i motori di ricerca"
    ],
    [
     "repeat",
     "L’IA mangia se stessa",
     "*model collapse* (*Nature*, 2024)"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Quando l’IA impara dall’IA",
   "id": "f-collasso"
  },
  {
   "tipo": "tessere",
   "titolo": "Come difendersi",
   "tessere": [
    [
     "search",
     "Chi c’è dietro",
     "un account o un sito, non i numeri"
    ],
    [
     "user-check",
     "Autori riconoscibili",
     "e comunità reali"
    ],
    [
     "copy",
     "Diffidare",
     "di commenti generici e account senza storia"
    ],
    [
     "pen-line",
     "Contribuire",
     "con contenuti propri, originali e firmati"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Se un giorno la maggior parte dei commenti e degli articoli fosse scritta da IA, che cosa cambierebbe per voi? Che valore avrebbe un contenuto scritto sicuramente da una persona?",
   "risposta": "Domanda aperta: emergono la perdita di fiducia, la difficoltà di distinguere, il valore crescente delle relazioni reali e delle fonti con autori identificabili."
  }
 ]
};
