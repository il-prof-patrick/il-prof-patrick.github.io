window.AULA = {
 "modulo": "Reti e Internet",
 "n": "02",
 "titolo": "Le reti di computer",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Le reti di computer",
   "sotto": "Che cos’è una rete, come si classifica e quali apparati la compongono.",
   "indice": [
    [
     "2.1",
     "Che cos’è una rete"
    ],
    [
     "2.2",
     "La classificazione per estensione"
    ],
    [
     "2.3",
     "Le topologie"
    ],
    [
     "2.4",
     "Le architetture: client-server e peer-to-peer"
    ],
    [
     "2.5",
     "I dispositivi di rete"
    ],
    [
     "2.6",
     "Differenze da non confondere"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quanti e quali dispositivi sono collegati in questo momento alla rete di casa vostra?",
   "risposta": "Spesso più di dieci: telefoni, computer, smart TV, console, assistenti vocali, stampante, a volte caldaia, videocamere, lavatrice. Tutti fanno parte della stessa rete locale."
  },
  {
   "tipo": "sezione",
   "num": "2.1",
   "titolo": "Che cos’è una rete",
   "sotto": "Dispositivi collegati che si parlano",
   "foto": {
    "src": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Una rete di computer",
   "punti": [
    [
     "network",
     "Dispositivi **collegati** per **scambiarsi dati e condividere risorse**"
    ],
    [
     "monitor",
     "I dispositivi sono **nodi** (o *host*)"
    ],
    [
     "cable",
     "Uniti da **collegamenti** (*link*), cablati o senza fili"
    ],
    [
     "list",
     "Servono **regole comuni**: i **protocolli**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "A che cosa serve una rete",
   "tessere": [
    [
     "printer",
     "Condividere risorse",
     "una stampante, un collegamento a Internet"
    ],
    [
     "file",
     "Condividere dati",
     "un documento su Drive"
    ],
    [
     "message-circle",
     "Comunicare",
     "messaggi, posta, videochiamate"
    ],
    [
     "globe",
     "Servizi a distanza",
     "registro, banca, streaming, giochi"
    ],
    [
     "users",
     "Lavorare insieme",
     "anche da città diverse"
    ]
   ],
   "nota": "Il rovescio: **se tutto è collegato, un problema può propagarsi** (virus, guasti, dati condivisi male)"
  },
  {
   "tipo": "punti",
   "titolo": "Esempio: l’aula di informatica",
   "punti": [
    [
     "monitor",
     "Computer degli studenti e del docente, stampante, proiettore: **una sola rete**"
    ],
    [
     "send",
     "Il docente manda un file a tutti"
    ],
    [
     "printer",
     "Tutti stampano sulla stessa stampante"
    ],
    [
     "globe",
     "Tutti escono su Internet dallo stesso collegamento"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Una rete si forma collegandosi a Internet.»",
   "si": "Internet è **una** rete, anzi una rete di reti (capitolo 4). Anche due computer collegati con un cavo, senza alcun accesso a Internet, formano una rete."
  },
  {
   "tipo": "sezione",
   "num": "2.2",
   "titolo": "La classificazione per estensione",
   "sotto": "Quanto spazio copre una rete",
   "foto": {
    "src": "https://images.unsplash.com/photo-1536286144513-881bfbd3f292?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Dalla più piccola alla più grande",
   "righe": [
    [
     "Sigla",
     "Nome",
     "Estensione",
     "Esempi"
    ],
    [
     "**BAN**",
     "*Body Area Network*",
     "il corpo",
     "smartwatch, sensore di glicemia, pacemaker"
    ],
    [
     "**PAN**",
     "*Personal Area Network*",
     "pochi metri",
     "auricolari, smartwatch, tastiera Bluetooth"
    ],
    [
     "**LAN**",
     "*Local Area Network*",
     "casa, scuola, edificio",
     "rete della scuola, Wi-Fi di casa"
    ],
    [
     "**MAN**",
     "*Metropolitan Area Network*",
     "una città",
     "fibra tra gli uffici di un comune"
    ],
    [
     "**WAN**",
     "*Wide Area Network*",
     "regioni, nazioni",
     "banca con filiali, rete di un operatore"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Cerchi intorno a una persona",
   "sel": "#s-estensione"
  },
  {
   "tipo": "punti",
   "titolo": "Esempio: il sensore di glicemia",
   "punti": [
    [
     "activity",
     "Il **sensore** sul braccio → una **BAN**"
    ],
    [
     "smartphone",
     "Sensore ↔ telefono → una **PAN**"
    ],
    [
     "globe",
     "Telefono ↔ medico → una **rete globale**"
    ]
   ],
   "foto": {
    "src": "https://cdn-bohdg.nitrocdn.com/LRSkEHBfAjwsEFOOHlbAXIhAeKQgiLsG/assets/images/optimized/rev-34c23c4/www.thekeyholeheartclinic.com/wp-content/uploads/2025/05/Untitled-1200-x-900-px-1300-x-900-px-6.png",
    "tit": "Smartwatch: BAN e PAN",
    "alt": "Uno smartwatch che misura il battito: il sensore sul polso fa parte di una BAN, il collegamento con il telefono di una PAN."
   }
  },
  {
   "tipo": "punti",
   "titolo": "I confini tra le categorie",
   "punti": [
    [
     "ruler",
     "**Nessun numero preciso** fissa i confini"
    ],
    [
     "house",
     "Conta **chi possiede e gestisce** la rete e **che tecnologie usa**"
    ],
    [
     "network",
     "LAN: di chi la usa, cavi Ethernet e Wi-Fi"
    ],
    [
     "building-2",
     "WAN: attraversa territori pubblici → **linee di un operatore**, a canone"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«La rete della scuola è una WAN perché è grande: ci sono tanti computer.»",
   "si": "La classificazione dipende dall’**estensione geografica**, non dal numero di dispositivi: una scuola con mille computer in un solo edificio è comunque una **LAN**."
  },
  {
   "tipo": "domanda",
   "testo": "Una scuola con due sedi in due quartieri della stessa città, collegate tra loro: che tipo di rete forma?",
   "risposta": "Ogni sede ha la sua LAN; il collegamento tra le due sedi nella stessa città forma una MAN, di solito usando le linee di un operatore."
  },
  {
   "tipo": "sezione",
   "num": "2.3",
   "titolo": "Le topologie",
   "sotto": "La forma della rete",
   "foto": {
    "src": "https://images.unsplash.com/photo-1545987796-200677ee1011?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "La topologia",
   "punti": [
    [
     "share-2",
     "La **forma** della rete: come sono collegati i nodi"
    ],
    [
     "cable",
     "**Fisica**: come sono stesi i cavi · **logica**: come viaggiano i dati"
    ],
    [
     "circle-check",
     "Decide **quanto costa** la rete e **che cosa succede quando qualcosa si guasta**"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Le cinque topologie",
   "sel": "#s-topologie"
  },
  {
   "tipo": "tabella",
   "titolo": "Vantaggi e svantaggi",
   "righe": [
    [
     "Topologia",
     "Com’è fatta",
     "Vantaggi",
     "Svantaggi"
    ],
    [
     "**Bus**",
     "un cavo condiviso",
     "poco cavo, economica",
     "cavo rotto → tutto fermo · uno alla volta"
    ],
    [
     "**Anello**",
     "ogni nodo al precedente e al successivo",
     "nessuna collisione",
     "un guasto interrompe l’anello"
    ],
    [
     "**Stella**",
     "ogni nodo al centro (switch)",
     "si ferma solo quel nodo · facile aggiungere",
     "centro guasto → tutto fermo"
    ],
    [
     "**Albero**",
     "stelle collegate in gerarchia",
     "edifici grandi, ordinata",
     "guasto in alto → isola un ramo"
    ],
    [
     "**Maglia**",
     "più percorsi (completa o parziale)",
     "robustissima",
     "costosa e complessa"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Che cosa succede quando si rompe qualcosa",
   "id": "f-topologie"
  },
  {
   "tipo": "confronto",
   "titolo": "Nella realtà",
   "a": {
    "icona": "building-2",
    "titolo": "Reti locali",
    "tono": "buono",
    "righe": [
     "• quasi tutte a **stella** o ad **albero**",
     "• ogni computer ha il suo cavo verso uno switch"
    ]
   },
   "b": {
    "icona": "globe",
    "titolo": "Internet",
    "righe": [
     "• una gigantesca **maglia parziale**",
     "+ quasi sempre **più percorsi**: resiste ai guasti"
    ]
   },
   "verdetto": "La scuola è un **albero**: “non va Internet al secondo piano”? Guarda lo switch o il cavo di quel piano"
  },
  {
   "tipo": "errore",
   "no": "«Con il Wi-Fi non c’è topologia, perché non ci sono cavi.»",
   "si": "Anche una rete Wi-Fi ha una forma: i dispositivi parlano con l’access point al centro, quindi è **una stella senza fili**. I sistemi Wi-Fi *mesh* (paragrafo 2.5) formano invece una maglia tra le unità."
  },
  {
   "tipo": "domanda",
   "testo": "Perché in una scuola non si collega ogni computer con un cavo a tutti gli altri, visto che la maglia completa è la topologia più robusta?",
   "risposta": "Perché i cavi crescerebbero enormemente: con 100 computer servirebbero 4950 collegamenti e ogni computer dovrebbe avere 99 prese. La stella con gli switch è molto più economica e gestibile."
  },
  {
   "tipo": "sezione",
   "num": "2.4",
   "titolo": "Le architetture: client-server e peer-to-peer",
   "sotto": "Chi offre e chi chiede",
   "foto": {
    "src": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Client-server",
   "punti": [
    [
     "server",
     "Il **server offre** un servizio, i **client** lo **richiedono**"
    ],
    [
     "send",
     "Richiesta («dammi la pagina») → risposta"
    ],
    [
     "globe",
     "Web, posta, Classroom, Netflix, social"
    ],
    [
     "users",
     "**Ruoli, non tipi di computer**: lo stesso computer può essere client e server"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Un data center",
   "foto": [
    {
     "src": "https://shieldenstrut.com/wp-content/uploads/2026/03/server-room-cable-tray-overhead-data-center-layout.jpg",
     "tit": "Niente schermi né tastiere: solo computer impilati, cavi e luci",
     "alt": "Un data center: corridoi di armadi pieni di server. Osservare: niente schermi né tastiere, solo computer impilati, cavi e luci di stato."
    }
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Quando mandate un vocale su WhatsApp a un amico che ha il telefono spento, dove si trova il messaggio? Quando poi lo riaccende, cambia qualcosa?",
   "risposta": "Su un server di WhatsApp: il servizio lo conserva e lo consegna appena il destinatario torna raggiungibile. Mittente e destinatario non devono essere collegati nello stesso momento."
  },
  {
   "tipo": "punti",
   "titolo": "Peer-to-peer (P2P)",
   "punti": [
    [
     "users",
     "Tutti **lo stesso ruolo**: ognuno chiede e offre"
    ],
    [
     "download",
     "**BitTorrent**: scarichi pezzi da molti e intanto li offri"
    ],
    [
     "smartphone",
     "AirDrop, Quick Share tra telefoni vicini"
    ],
    [
     "gamepad-2",
     "Partite ospitate dal computer di un giocatore"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Client-server e peer-to-peer",
   "id": "f-p2p"
  },
  {
   "tipo": "tabella",
   "titolo": "Client-server e peer-to-peer a confronto",
   "righe": [
    [
     "",
     "Client-server",
     "Peer-to-peer"
    ],
    [
     "Ruoli",
     "diversi",
     "uguali"
    ],
    [
     "Controllo",
     "centralizzato",
     "distribuito"
    ],
    [
     "Punto debole",
     "se il server cade, si ferma",
     "qualità e contenuti difficili da controllare"
    ],
    [
     "Con tanti utenti",
     "server da potenziare",
     "aumentano anche le fonti"
    ],
    [
     "Esempi",
     "web, posta, Classroom, social, streaming",
     "BitTorrent, AirDrop, alcuni giochi"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il server è un computer gigante e il client è un computer piccolo.»",
   "si": "Sono **ruoli**: anche un normale portatile può fare da server (ad esempio per una partita in rete locale), e un server enorme può fare da client quando chiede dati a un altro server."
  },
  {
   "tipo": "domanda",
   "testo": "Quando guardate una storia su Instagram, chi è il client e chi è il server? E quando mandate una foto con AirDrop o Quick Share a un compagno?",
   "risposta": "Su Instagram il client è l’app sul telefono e il server sono i computer di Meta. Con AirDrop o Quick Share i due telefoni comunicano direttamente, da pari a pari."
  },
  {
   "tipo": "sezione",
   "num": "2.5",
   "titolo": "I dispositivi di rete",
   "sotto": "Collegano, smistano, traducono",
   "foto": {
    "src": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "La scheda di rete (NIC)",
   "punti": [
    [
     "cpu",
     "Permette a un dispositivo di **collegarsi a una rete**"
    ],
    [
     "cable",
     "**Cablata** (RJ45) o **wireless** (Wi-Fi)"
    ],
    [
     "key",
     "Ha un identificativo **unico al mondo**: l’**indirizzo MAC**"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ethernet_pci_card.jpg",
    "tit": "Scheda di rete Ethernet",
    "alt": "Una scheda di rete Ethernet da inserire in un computer fisso: si vedono la presa RJ45 e i chip."
   }
  },
  {
   "tipo": "foto",
   "titolo": "Due schede di rete",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ethernet_pci_card.jpg",
     "tit": "Ethernet, da inserire nel computer",
     "alt": "Una scheda di rete Ethernet da inserire in un computer fisso: si vedono la presa RJ45 e i chip."
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/1/11/USB-wireless-adapter.jpg",
     "tit": "Chiavetta USB Wi-Fi",
     "alt": "Una chiavetta USB Wi-Fi: anche questa è una scheda di rete, ma senza fili."
    }
   ]
  },
  {
   "tipo": "confronto",
   "titolo": "Hub o switch?",
   "a": {
    "icona": "volume-2",
    "titolo": "Hub",
    "tono": "vecchio",
    "righe": [
     "- ripete i dati su **tutte le porte**",
     "- uno alla volta (half-duplex)",
     "- due insieme → **collisione**"
    ],
    "piede": "il postino che legge ad alta voce nel cortile"
   },
   "b": {
    "icona": "network",
    "titolo": "Switch",
    "tono": "buono",
    "righe": [
     "+ **impara** chi è collegato a quale porta",
     "+ invia **solo al destinatario**",
     "+ più coppie insieme (full-duplex)"
    ],
    "piede": "il postino che usa la cassetta giusta"
   }
  },
  {
   "tipo": "foto",
   "titolo": "Uguali fuori",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/4/4b/HP_EtherTwist_Hub8.jpg",
     "tit": "Un vecchio hub a 8 porte",
     "alt": "Un vecchio hub Ethernet a 8 porte (anni ’90): da fuori è quasi identico a uno switch."
    },
    {
     "src": "https://images.pexels.com/photos/13963756/pexels-photo-13963756.jpeg?auto=compress&cs=tinysrgb&w=1200",
     "tit": "Switch in un armadio di rete",
     "alt": "Switch in un armadio di rete, con decine di cavi: così sono fatte le reti di scuole e uffici."
    }
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Dove va un pacchetto",
   "id": "f-hub"
  },
  {
   "tipo": "tabella",
   "titolo": "Hub e switch",
   "righe": [
    [
     "",
     "Hub",
     "Switch"
    ],
    [
     "Inoltra i dati",
     "a tutte le porte",
     "solo al destinatario"
    ],
    [
     "Collisioni",
     "frequenti",
     "praticamente assenti"
    ],
    [
     "Prestazioni",
     "banda condivisa",
     "ogni porta ha la sua banda"
    ],
    [
     "Sicurezza",
     "tutti “sentono” tutto",
     "migliore"
    ],
    [
     "Oggi",
     "scomparso",
     "standard in ogni rete"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova tu: hub o switch?",
   "w": "switch"
  },
  {
   "tipo": "errore",
   "no": "«Per collegare la rete di casa a Internet basta uno switch.»",
   "si": "Lo switch collega dispositivi **nella stessa rete locale**; per collegare **reti diverse** servono altre componenti."
  },
  {
   "tipo": "domanda",
   "testo": "Perché secondo voi l’hub è scomparso dal mercato?",
   "risposta": "Lo switch fa lo stesso lavoro molto meglio (niente collisioni, più banda, più sicurezza) e oggi costa praticamente uguale."
  },
  {
   "tipo": "punti",
   "titolo": "Il router",
   "punti": [
    [
     "route",
     "Collega **reti diverse** e sceglie la strada"
    ],
    [
     "globe",
     "Lavora con gli **indirizzi IP** (lo switch con i MAC)"
    ],
    [
     "map",
     "Inoltra al **router successivo** più adatto · Italia → USA: 10–20 router"
    ]
   ],
   "nota": "Come un **centro di smistamento postale**",
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/5/55/Cisco_2800_series_router_%281%29.jpg",
    "tit": "Router professionale",
    "alt": "Un router professionale Cisco, come quelli usati dagli operatori e nelle aziende."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Di router in router",
   "id": "f-router"
  },
  {
   "tipo": "foto",
   "titolo": "Uno dei primi router",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_Advanced_Gateway_Server_%28AGS%29_router_%281986%29_-_Computer_History_Museum.jpg",
     "tit": "Cisco AGS, 1986 · Computer History Museum",
     "alt": "Il router Cisco AGS del 1986, oggi conservato al Computer History Museum."
    }
   ]
  },
  {
   "tipo": "formula",
   "titolo": "Il modem: MOdulatore + DEModulatore",
   "formula": "bit ⇄ segnale",
   "righe": [
    [
     "**modulazione**",
     "bit → segnale per la linea (trasmissione)"
    ],
    [
     "**demodulazione**",
     "segnale → bit (ricezione)"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Modulare e demodulare",
   "id": "f-modem"
  },
  {
   "tipo": "foto",
   "titolo": "Un modem del 1982",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/Hayes_Smartmodem_1982_%282%29.jpg",
     "tit": "Hayes Smartmodem: computer da una parte, telefono dall’altra",
     "alt": "Un modem esterno Hayes del 1982, uno dei più diffusi dei primi anni: si collegava al computer da una parte e alla presa del telefono dall’altra."
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/e/e6/External_dialup_modem_back_panel.jpg",
     "tit": "Il retro: presa del telefono e porta seriale",
     "alt": "Il retro di un modem esterno per linea telefonica: la presa per il telefono e la porta seriale verso il computer."
    }
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Quando Internet faceva rumore",
   "anno": "anni ’60–’90",
   "icona": "volume-2",
   "punti": [
    [
     "volume-2",
     "I bit diventavano **suoni**: fischi e gracchi in linea"
    ],
    [
     "phone",
     "Mentre navigavi il **telefono di casa era occupato**"
    ],
    [
     "clock",
     "Si pagava **a tempo** · massimo **56 kbps**"
    ],
    [
     "video",
     "In aula: il video del “canto” di un modem"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "L’access point",
   "punti": [
    [
     "wifi",
     "**Crea il Wi-Fi** e collega i dispositivi senza fili alla rete cablata"
    ],
    [
     "house",
     "A casa è **dentro il router**"
    ],
    [
     "building-2",
     "Scuole, uffici, hotel: **tanti**, spesso **sul soffitto**, collegati a uno switch"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1785682117495-d87ff069cdb5?w=1200&q=80&fm=jpg",
    "tit": "Access point sul soffitto",
    "alt": "Access point sul soffitto: il dispositivo che crea il Wi-Fi in scuole e uffici."
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Coprire spazi più grandi",
   "a": {
    "icona": "repeat",
    "titolo": "Ripetitore",
    "tono": "vecchio",
    "righe": [
     "• riceve e **ritrasmette**",
     "+ economico",
     "- spesso **dimezza la banda**: stesso canale per ricevere e ritrasmettere"
    ]
   },
   "b": {
    "icona": "network",
    "titolo": "Mesh",
    "tono": "buono",
    "righe": [
     "• **più unità** che collaborano",
     "+ **un’unica rete** in tutta la casa",
     "+ il telefono passa da un’unità all’altra"
    ]
   }
  },
  {
   "tipo": "foto",
   "titolo": "Un’unità di un sistema mesh",
   "foto": [
    {
     "src": "https://images.pexels.com/photos/1024697/pexels-photo-1024697.jpeg?auto=compress&cs=tinysrgb&w=1200",
     "tit": "Più unità come questa creano un’unica rete",
     "alt": "Un’unità di un sistema mesh: più unità come questa, sparse per la casa, creano un’unica rete Wi-Fi."
    }
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Router, ripetitore, mesh",
   "sel": "#s-wifi"
  },
  {
   "tipo": "domanda",
   "testo": "Guardate il soffitto dei corridoi o delle aule: riuscite a trovare gli access point della scuola? Quanti ce ne sono sul nostro piano?",
   "risposta": "Sono dischi o scatolette bianche con una luce; in una scuola ce n’è uno ogni poche aule, per coprire tutto il piano."
  },
  {
   "tipo": "sezione",
   "num": "2.6",
   "titolo": "Differenze da non confondere",
   "sotto": "Quattro apparati, una scatola",
   "foto": {
    "src": "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Le differenze che contano",
   "righe": [
    [
     "Coppia",
     "In una frase",
     "Il perché"
    ],
    [
     "Hub e switch",
     "ripete a tutti / consegna solo al destinatario",
     "lo switch impara la tabella MAC–porta"
    ],
    [
     "Switch e router",
     "stessa rete / reti diverse",
     "MAC solo locali, IP validi in tutta Internet"
    ],
    [
     "Modem e router",
     "traduce il segnale / decide dove mandare",
     "segnali fisici / indirizzi"
    ],
    [
     "Access point e router",
     "crea il Wi-Fi / collega a Internet",
     "l’AP prende Internet dal router via cavo"
    ],
    [
     "Ripetitore e access point",
     "rilancia il Wi-Fi / lo crea da un cavo",
     "il ripetitore dimezza la banda"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Switch o router?",
   "id": "f-switchrouter"
  },
  {
   "tipo": "tessere",
   "titolo": "Dentro il “router” di casa",
   "tessere": [
    [
     "radio",
     "Modem",
     "parla con l’operatore"
    ],
    [
     "route",
     "Router",
     "collega la casa a Internet"
    ],
    [
     "network",
     "Switch",
     "2–4 prese per i cavi"
    ],
    [
     "wifi",
     "Access point",
     "crea il Wi-Fi"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Una scatola sola",
   "foto": [
    {
     "src": "https://images.pexels.com/photos/32698507/pexels-photo-32698507.jpeg?auto=compress&cs=tinysrgb&w=1200",
     "tit": "Il modem-router di casa",
     "alt": "Il modem-router di casa: da fuori è una scatola sola."
    },
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/2/21/Adsl_connections.jpg",
     "tit": "Il retro: linea dell’operatore e prese LAN",
     "alt": "Il retro di un modem-router: la presa per la linea dell’operatore e le prese LAN dello switch. Da mostrare indicando a quale funzione corrisponde ogni presa."
    }
   ]
  }
 ]
};
