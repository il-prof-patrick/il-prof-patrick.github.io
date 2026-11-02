window.AULA = {
 "modulo": "Reti e Internet",
 "n": "03",
 "titolo": "Come comunicano i computer: indirizzi e protocolli",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Indirizzi e protocolli",
   "sotto": "Regole condivise e indirizzi: come un pacchetto trova il suo destinatario.",
   "indice": [
    [
     "3.1",
     "Che cos’è un protocollo"
    ],
    [
     "3.2",
     "Il modello a livelli"
    ],
    [
     "3.3",
     "L’indirizzo MAC"
    ],
    [
     "3.4",
     "L’indirizzo IP"
    ],
    [
     "3.5",
     "Il DNS"
    ],
    [
     "3.6",
     "TCP e UDP"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quando telefonate a una persona che non conoscete bene, che “regole” seguite senza pensarci, dal momento in cui l’altro risponde a quando chiudete?",
   "risposta": "«Pronto?», ci si presenta, si parla a turno, si chiede di ripetere se non si è capito, ci si saluta prima di chiudere. Sono le regole di un protocollo umano."
  },
  {
   "tipo": "sezione",
   "num": "3.1",
   "titolo": "Che cos’è un protocollo",
   "sotto": "Le regole della conversazione",
   "foto": {
    "src": "https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il protocollo",
   "msg": "Regole condivise per scambiarsi i dati",
   "punti": [
    [
     "list",
     "**Insieme di regole** con cui due dispositivi si scambiano i dati"
    ],
    [
     "file",
     "In che **formato**, in che **ordine**, come capire che è arrivato, che fare se va storto"
    ],
    [
     "circle-x",
     "Senza protocollo comune: bit che l’altro **non sa interpretare**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Che cosa definisce un protocollo",
   "msg": "Formato, significato e tempi dei messaggi",
   "tessere": [
    [
     "layout-list",
     "Sintassi",
     "il formato dei messaggi, come un modulo"
    ],
    [
     "book-open",
     "Semantica",
     "il significato di ogni campo e messaggio"
    ],
    [
     "list-ordered",
     "Sequenza",
     "chi parla per primo, che cosa si risponde, che cosa fare se non arriva risposta"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il protocollo è il programma che manda i dati.»",
   "si": "Il protocollo è **l’insieme delle regole**; il programma (browser, app, sistema operativo) è ciò che le **mette in pratica**. Programmi diversi possono implementare lo stesso protocollo."
  },
  {
   "tipo": "sezione",
   "num": "3.2",
   "titolo": "Il modello a livelli",
   "sotto": "Un problema enorme, diviso in livelli",
   "foto": {
    "src": "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Perché i livelli",
   "msg": "Un problema enorme diviso in parti, una per livello",
   "punti": [
    [
     "layers",
     "Ogni livello risolve **una parte** del problema"
    ],
    [
     "arrow-down",
     "Usa i servizi del livello **sotto**, offre i suoi a quello **sopra**"
    ],
    [
     "repeat",
     "Si può **cambiare un livello senza toccare gli altri**"
    ],
    [
     "wifi",
     "Il browser funziona uguale con Wi-Fi, cavo o 5G"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Esempio: spedire un pacco",
   "msg": "Ognuno fa il suo lavoro senza conoscere quello degli altri",
   "tessere": [
    [
     "mail",
     "Contenuto",
     "scrivi e imbusti la lettera"
    ],
    [
     "tag",
     "Trasporto",
     "etichetta con indirizzo e tracciamento"
    ],
    [
     "route",
     "Instradamento",
     "su quale camion caricarlo"
    ],
    [
     "truck",
     "Mezzo fisico",
     "il camionista guida"
    ]
   ],
   "nota": "Il camionista non apre la lettera, tu non sai che strada farà il camion"
  },
  {
   "tipo": "tabella",
   "titolo": "Il modello TCP/IP: quattro livelli",
   "msg": "Dall’applicazione al collegamento fisico",
   "righe": [
    [
     "TCP/IP",
     "Livelli OSI",
     "Protocolli"
    ],
    [
     "**Applicazione**",
     "7, 6, 5",
     "HTTP/HTTPS, DNS, SMTP, IMAP, POP3"
    ],
    [
     "**Trasporto**",
     "4",
     "TCP, UDP"
    ],
    [
     "**Internet** (rete)",
     "3",
     "IP"
    ],
    [
     "**Accesso alla rete**",
     "2, 1",
     "Ethernet, Wi-Fi, 4G/5G"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "L’incapsulamento",
   "msg": "Ogni livello aggiunge in testa la sua intestazione",
   "punti": [
    [
     "mail",
     "Ogni livello aggiunge **in testa** la sua **intestazione** (*header*)"
    ],
    [
     "layers",
     "Trasporto: **porte** · rete: **indirizzi IP** · accesso: **indirizzi MAC**"
    ],
    [
     "package",
     "Una busta dentro una busta più grande"
    ],
    [
     "package-open",
     "All’arrivo ogni livello **toglie la sua busta** (decapsulamento)"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Buste dentro buste",
   "id": "f-incapsulamento",
   "msg": "Il messaggio scende i livelli e si riempie di intestazioni"
  },
  {
   "tipo": "errore",
   "no": "«Ogni dispositivo lungo il percorso legge tutto il messaggio.»",
   "si": "Ogni apparato apre **solo i livelli che gli servono**: lo switch guarda il MAC (livello 2), il router l’IP (livello 3). Il contenuto, oggi quasi sempre **cifrato**, lo leggono solo le app alle due estremità."
  },
  {
   "tipo": "domanda",
   "testo": "Se domani inventassero un nuovo tipo di Wi-Fi molto più veloce, bisognerebbe riscrivere i browser? Perché?",
   "risposta": "No: il Wi-Fi riguarda solo il livello di accesso alla rete. Grazie alla divisione in livelli, il browser (livello di applicazione) continua a funzionare senza modifiche."
  },
  {
   "tipo": "sezione",
   "num": "3.3",
   "titolo": "L’indirizzo MAC",
   "sotto": "Chi è la scheda di rete",
   "foto": {
    "src": "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "formula",
   "titolo": "L’indirizzo MAC (*Media Access Control*)",
   "msg": "Dice chi è la scheda di rete, 48 bit scritti in esadecimale",
   "formula": "3C:22:FB : 7A:10:9E",
   "righe": [
    [
     "48 bit",
     "6 coppie di cifre **esadecimali**"
    ],
    [
     "prime 3 coppie",
     "**produttore** (OUI, assegnato dall’IEEE)"
    ],
    [
     "ultime 3 coppie",
     "**numero di serie**"
    ],
    [
     "indirizzi possibili",
     "circa **281 mila miliardi**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il MAC serve solo nella rete locale",
   "msg": "Esce dal router e non conta più",
   "punti": [
    [
     "network",
     "Lo usano gli **switch** per consegnare all’host giusto"
    ],
    [
     "route",
     "Uscendo dal router il MAC **perde di utilità**"
    ],
    [
     "smartphone",
     "Lo trovi nelle impostazioni Wi-Fi o nelle proprietà della connessione"
    ],
    [
     "shuffle",
     "I telefoni usano un **MAC casuale** per ogni rete: non ti riconoscono quando torni"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Con l’indirizzo MAC si può trovare un telefono ovunque nel mondo.»",
   "si": "Il MAC **non esce dalla rete locale**: già al primo router viene sostituito. Per comunicare attraverso Internet contano gli indirizzi IP."
  },
  {
   "tipo": "domanda",
   "testo": "Se porto il telefono da casa a scuola, che cosa cambia tra MAC e IP?",
   "risposta": "Il MAC resta uguale, perché dice chi è il telefono; l’IP cambia, perché lo assegna la rete a cui ci si collega."
  },
  {
   "tipo": "sezione",
   "num": "3.4",
   "titolo": "L’indirizzo IP",
   "sotto": "Dove si trova un dispositivo",
   "foto": {
    "src": "https://images.unsplash.com/photo-1759729117467-1f01a4502941?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "L’indirizzo IP (*Internet Protocol*)",
   "msg": "Dice dove si trova un dispositivo, per consegnargli i pacchetti",
   "punti": [
    [
     "map-pin",
     "Identifica un dispositivo e permette ai router di **consegnargli i pacchetti**"
    ],
    [
     "map",
     "Dice **dove si trova**, non chi è"
    ],
    [
     "repeat",
     "**Cambia** quando ci si collega a una rete diversa"
    ]
   ]
  },
  {
   "tipo": "formula",
   "titolo": "IPv4: 32 bit",
   "msg": "Quattro numeri da 0 a 255, ognuno è un byte",
   "formula": "192.168.1.4 = 11000000.10101000.00000001.00000100",
   "righe": [
    [
     "4 numeri da 0 a 255",
     "ognuno è **8 bit**, un byte"
    ],
    [
     "prima parte",
     "la **rete** (il nome della via)"
    ],
    [
     "seconda parte",
     "il **dispositivo** (il numero civico)"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova tu: un indirizzo IPv4 in bit",
   "w": "ipv4",
   "msg": "Dai numeri ai bit e ritorno"
  },
  {
   "tipo": "punti",
   "titolo": "Pochi indirizzi: l’esaurimento",
   "msg": "Circa 4,3 miliardi, meno dei dispositivi di oggi",
   "punti": [
    [
     "binary",
     "2³² ≈ **4,3 miliardi** di indirizzi"
    ],
    [
     "users",
     "Oggi i dispositivi sono **più delle persone**"
    ],
    [
     "calendar",
     "IANA: ultimi blocchi nel **2011** · RIPE NCC (Europa): esauriti nel **2019**"
    ],
    [
     "coins",
     "Un indirizzo IPv4 oggi **si compra e si vende**"
    ]
   ]
  },
  {
   "tipo": "formula",
   "titolo": "IPv6: 128 bit",
   "msg": "Indirizzi quasi inesauribili",
   "formula": "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
   "righe": [
    [
     "8 gruppi",
     "di 4 cifre esadecimali"
    ],
    [
     "2¹²⁸ indirizzi",
     "uno per ogni granello di sabbia, moltissime volte"
    ],
    [
     "IPv4 e IPv6",
     "**non compatibili**: devono convivere · circa metà degli utenti Google è in IPv6"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "MAC e IP a confronto",
   "msg": "Il MAC dice chi sei, l’IP dove sei",
   "righe": [
    [
     "",
     "Indirizzo MAC",
     "Indirizzo IP"
    ],
    [
     "Che cosa indica",
     "chi è la scheda",
     "dove si trova il dispositivo"
    ],
    [
     "Lunghezza",
     "48 bit",
     "32 bit (IPv4) · 128 bit (IPv6)"
    ],
    [
     "Chi lo assegna",
     "il produttore",
     "la rete (amministratore o DHCP)"
    ],
    [
     "Dove vale",
     "solo nella rete locale",
     "in tutta Internet (se pubblico)"
    ],
    [
     "Chi lo usa",
     "lo switch",
     "il router"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: qual è il mio IP?",
   "msg": "Telefono e computer sulla stessa rete: che cosa cambia?",
   "punti": [
    [
     "smartphone",
     "Aprire **whatismyip.com** dal telefono e dal computer"
    ],
    [
     "list",
     "Annotare i due valori"
    ],
    [
     "message-circle-question",
     "**Sono uguali? Perché?**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il mio indirizzo IP è sempre lo stesso, è come il numero di telefono.»",
   "si": "L’IP **dipende dalla rete**: cambia passando dal Wi-Fi di casa a quello della scuola o ai dati mobili, e spesso cambia anche nella stessa rete dopo un riavvio."
  },
  {
   "tipo": "punti",
   "titolo": "Il DHCP",
   "msg": "Un IP libero in pochi secondi, in automatico",
   "punti": [
    [
     "wifi",
     "Ti colleghi al Wi-Fi e in pochi secondi hai un IP"
    ],
    [
     "settings",
     "Assegna **automaticamente** un IP libero"
    ],
    [
     "route",
     "Insieme: indirizzo del **router** (*gateway*) e del **server DNS**"
    ],
    [
     "hourglass",
     "L’indirizzo è **in prestito** (*lease*): poi torna libero"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Il DHCP in quattro messaggi",
   "id": "f-dhcp",
   "msg": "Scopri, offri, richiedi, conferma"
  },
  {
   "tipo": "sezione",
   "num": "3.5",
   "titolo": "Il DNS",
   "sotto": "La rubrica di Internet",
   "foto": {
    "src": "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il DNS (*Domain Name System*)",
   "msg": "Le persone ricordano i nomi, i router capiscono i numeri",
   "punti": [
    [
     "user",
     "Le persone ricordano i **nomi**, i router capiscono i **numeri**"
    ],
    [
     "book-open",
     "Traduce **www.wikipedia.org** nell’**IP** del server"
    ],
    [
     "phone",
     "Come una **rubrica**: cerchi il nome, ottieni il numero"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Come funziona la risoluzione",
   "msg": "Un sistema distribuito e gerarchico, con la cache",
   "punti": [
    [
     "network",
     "Sistema **distribuito e gerarchico**: milioni di server"
    ],
    [
     "arrow-left",
     "I nomi si leggono **da destra**: org → wikipedia → www"
    ],
    [
     "notebook-pen",
     "**Cache**: le risposte recenti si ricordano → risposta **immediata**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Dal nome al numero",
   "id": "f-dns",
   "msg": "Da www.wikipedia.org al suo indirizzo IP"
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: DNS lookup",
   "msg": "Cercare l’IP di alcuni siti",
   "punti": [
    [
     "search",
     "Con **nslookup.io** cercare l’IP del sito della scuola, wikipedia.org, google.com"
    ],
    [
     "list",
     "Annotare i risultati"
    ],
    [
     "globe",
     "I siti grandi hanno **più indirizzi**, diversi a seconda di dove ti trovi"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il DNS è il server dove si trova il sito.»",
   "si": "Il DNS **non contiene il sito**: contiene solo l’associazione tra il nome e l’indirizzo IP del server che lo ospita, come la rubrica contiene il numero, non la persona."
  },
  {
   "tipo": "sezione",
   "num": "3.6",
   "titolo": "TCP e UDP",
   "sotto": "Consegnare all’app giusta",
   "foto": {
    "src": "https://images.unsplash.com/photo-1784884513649-6c24a2ff95ef?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il livello di trasporto",
   "msg": "Consegna all’app giusta e decide quanto garantire",
   "punti": [
    [
     "target",
     "Consegnare i dati **all’app giusta**"
    ],
    [
     "shield-check",
     "Decidere **quanto garantire** la consegna"
    ],
    [
     "arrow-left-right",
     "Due protocolli opposti: **TCP** e **UDP**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Le porte",
   "msg": "Un solo IP, tante app: la porta dice quale",
   "punti": [
    [
     "smartphone",
     "Un dispositivo: **un solo IP**, tante app"
    ],
    [
     "door-open",
     "La **porta** (0–65535) dice **a quale programma** va il pacchetto"
    ],
    [
     "building-2",
     "IP = indirizzo del condominio · porta = **numero dell’interno**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "A quale app va il pacchetto?",
   "id": "f-porte",
   "msg": "L’IP trova il dispositivo, la porta trova il programma"
  },
  {
   "tipo": "confronto",
   "titolo": "TCP e UDP",
   "msg": "Consegna garantita contro consegna veloce",
   "a": {
    "icona": "shield-check",
    "titolo": "TCP · *Transmission Control Protocol*",
    "tono": "buono",
    "righe": [
     "• apre una connessione (*three-way handshake*)",
     "+ consegna **garantita**, in ordine",
     "• conferme e **ritrasmissioni**",
     "- un po’ più **lento**"
    ]
   },
   "b": {
    "icona": "zap",
    "titolo": "UDP · *User Datagram Protocol*",
    "righe": [
     "• niente connessione né conferme",
     "+ **più veloce**",
     "- se un pacchetto si perde, **si perde**",
     "• meglio perderlo che aspettarlo"
    ]
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Quando si usa l’uno o l’altro",
   "msg": "Pagine e posta con TCP, video e giochi con UDP",
   "righe": [
    [
     "",
     "TCP",
     "UDP"
    ],
    [
     "Connessione",
     "sì",
     "no"
    ],
    [
     "Consegna",
     "garantita",
     "non garantita"
    ],
    [
     "Ordine",
     "in ordine",
     "anche in disordine"
    ],
    [
     "Velocità",
     "più lento",
     "più veloce"
    ],
    [
     "Si usa per",
     "pagine web, email, download, messaggi",
     "videochiamate, dirette, giochi online, DNS"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Se un pacchetto si perde",
   "id": "f-tcpudp",
   "msg": "TCP lo rimanda, UDP va avanti"
  }
 ]
};
