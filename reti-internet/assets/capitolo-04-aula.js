window.AULA = {
 "modulo": "Reti e Internet",
 "n": "04",
 "titolo": "Internet",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Internet",
   "sotto": "Un accordo tra decine di migliaia di reti, fatto di cavi, server e regole comuni.",
   "indice": [
    [
     "4.1",
     "Internet, la rete delle reti"
    ],
    [
     "4.2",
     "L’infrastruttura fisica"
    ],
    [
     "4.3",
     "I numeri di Internet"
    ],
    [
     "4.4",
     "Limiti e problemi di Internet"
    ],
    [
     "4.5",
     "Intranet, extranet e VPN"
    ],
    [
     "4.6",
     "Il Web"
    ],
    [
     "4.7",
     "La nascita del Web"
    ],
    [
     "4.8",
     "Ipertesto e ipermedia"
    ],
    [
     "4.9",
     "L’URL"
    ],
    [
     "4.10",
     "HTTP e HTTPS"
    ],
    [
     "4.11",
     "I linguaggi del Web"
    ],
    [
     "4.12",
     "Il browser"
    ],
    [
     "4.13",
     "Le tracce della navigazione"
    ],
    [
     "4.14",
     "Siti, server e domini"
    ],
    [
     "4.15",
     "Tipi di Web"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Secondo voi chi è il “proprietario” di Internet? Si potrebbe spegnere?",
   "risposta": "Nessuno: Internet è l’insieme di decine di migliaia di reti di proprietari diversi (operatori, aziende, università, governi) collegate tra loro. Non c’è un interruttore centrale."
  },
  {
   "tipo": "sezione",
   "num": "4.1",
   "titolo": "Internet, la rete delle reti",
   "sotto": "Nessun proprietario, nessun centro",
   "foto": {
    "src": "https://images.unsplash.com/photo-1663160055679-7b7fecb4468f?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Internet è una rete di reti",
   "punti": [
    [
     "network",
     "**Decine di migliaia** di reti indipendenti, di proprietari diversi"
    ],
    [
     "list",
     "Comunicano con gli stessi protocolli: **TCP/IP**"
    ],
    [
     "house",
     "Casa, scuola, operatori, Google: reti separate che **si collegano**"
    ],
    [
     "users",
     "**Nessun proprietario né centro**; alcune organizzazioni coordinano ciò che deve essere unico"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Il primo messaggio: «LO»",
   "anno": "1957–1969",
   "foto": {
    "src": "https://www.gedistatic.it/content/gedi/img/limesonline/www/2012/04/internet_kleinrock_interface_message_processor.jpg",
    "tit": "Kleinrock e l’IMP",
    "alt": "Leonard Kleinrock accanto all’IMP, il primo “router” di ARPANET: da questo armadio partì il messaggio «LO» nel 1969."
   },
   "punti": [
    [
     "satellite",
     "1957: lo **Sputnik** → gli USA creano l’**ARPA**"
    ],
    [
     "cpu",
     "Una rete per **condividere i costosissimi computer** delle università"
    ],
    [
     "send",
     "**29 ottobre 1969**, UCLA → Stanford: «LOGIN» si blocca dopo **«LO»**"
    ],
    [
     "network",
     "Fine 1969: **4 nodi**"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "La prima ARPANET",
   "foto": [
    {
     "src": "https://images.squarespace-cdn.com/content/v1/5c647bc99b7d150fe925ea5c/12a065de-dbb3-420b-9830-91172fdc7086/1967+arpanet.jpg",
     "tit": "Pochi cerchi e poche linee: l’inizio di una rete che oggi collega miliardi di dispositivi",
     "alt": "Uno schizzo della prima ARPANET: i nodi delle università collegati tra loro. Osservare: pochi cerchi e poche linee, l’inizio di una rete che oggi collega miliardi di dispositivi."
    }
   ]
  },
  {
   "tipo": "storia",
   "titolo": "L’Italia in rete",
   "anno": "1986",
   "icona": "flag",
   "punti": [
    [
     "flag",
     "**Primo paese dell’Europa continentale** collegato a Internet"
    ],
    [
     "building-2",
     "**30 aprile 1986**, CNUCE di Pisa (CNR)"
    ],
    [
     "satellite-dish",
     "Ponte satellitare verso gli Stati Uniti"
    ],
    [
     "activity",
     "Il primo segnale: un **ping**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Internet l’ha inventata una sola persona.»",
   "si": "Internet è il risultato del lavoro di **molte persone in decenni**: Baran e Davies (pacchetti), Kleinrock e il gruppo di ARPANET, Cerf e Kahn (TCP/IP), Mockapetris (DNS), e migliaia di altri. Il Web, che è un’altra cosa (paragrafo 4.6), ha invece un inventore preciso."
  },
  {
   "tipo": "domanda",
   "testo": "Se un paese decidesse di “staccarsi” da Internet, che cosa dovrebbe fare concretamente?",
   "risposta": "Dovrebbe interrompere i collegamenti delle sue reti con quelle degli altri paesi (cavi, dorsali, satelliti) o bloccare il traffico ai confini. Internet non si spegne da un punto: si può solo isolare una parte."
  },
  {
   "tipo": "sezione",
   "num": "4.2",
   "titolo": "L’infrastruttura fisica",
   "sotto": "Internet è fatta di oggetti",
   "foto": {
    "src": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Il viaggio di un pacchetto",
   "tessere": [
    [
     "building-2",
     "ISP",
     "l’azienda che ti collega: TIM, Vodafone, WindTre, Iliad, Fastweb…"
    ],
    [
     "cable",
     "Dorsali",
     "fibra ad altissima capacità lungo autostrade e ferrovie"
    ],
    [
     "anchor",
     "Cavi sottomarini",
     "oltre 500, più di un milione di km"
    ],
    [
     "server",
     "Data center",
     "migliaia di server, sempre accesi"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Sotto il mare, non nello spazio",
   "punti": [
    [
     "anchor",
     "**Oltre il 95%** del traffico tra continenti viaggia in **cavi sottomarini**"
    ],
    [
     "gauge",
     "Una coppia di fibre porta **più dati di un satellite**, con meno ritardo e meno costi"
    ],
    [
     "cable",
     "Grosso come un tubo da giardino · **ripetitori** che amplificano la luce"
    ],
    [
     "triangle-alert",
     "Ancore, reti da pesca, terremoti, sabotaggi: **infrastrutture strategiche**"
    ]
   ],
   "foto": {
    "src": "https://www.circleid.com/images/uploads/13954a.jpg",
    "tit": "Un cavo sottomarino in sezione",
    "alt": "Un cavo sottomarino in sezione: al centro poche fibre, intorno strati di protezione e armatura d’acciaio."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Da Roma a New York",
   "id": "f-cavi"
  },
  {
   "tipo": "foto",
   "titolo": "La mappa dei cavi sottomarini",
   "foto": [
    {
     "src": "https://www2.telegeography.com/hubfs/2025/Blog%20Assets/Submarine_Cable_Map_2025_Global-656609b2ac4cce708aa8385ae0ff644b-1.jpg",
     "tit": "Tanti cavi nell’Atlantico e nel Mediterraneo, pochissimi verso alcune isole del Pacifico",
     "alt": "La mappa mondiale dei cavi sottomarini. Osservare: quanti cavi attraversano l’Atlantico e il Mediterraneo, e quanti pochi raggiungono alcune isole del Pacifico."
    }
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Se un cavo si rompe",
   "punti": [
    [
     "route",
     "Il traffico viene **deviato su altri cavi**: rallenta, non si ferma"
    ],
    [
     "triangle-alert",
     "Rischio vero per chi ha pochissimi cavi: **Tonga, 2022**"
    ],
    [
     "map-pin",
     "L’Italia è un **punto di approdo**: Sicilia (Mazara del Vallo, Catania) e Genova"
    ]
   ],
   "foto": {
    "src": "https://media.datacenterdynamics.com/media/images/Marea-beach.original.jpg",
    "tit": "L’approdo di un cavo sottomarino su una spiaggia",
    "alt": "L’approdo di un cavo sottomarino su una spiaggia: da qui la fibra entra nella stazione di terra e si collega alle dorsali."
   }
  },
  {
   "tipo": "punti",
   "titolo": "I data center",
   "punti": [
    [
     "server",
     "**Migliaia di server** con alimentazione, raffreddamento e rete **ridondanti**"
    ],
    [
     "globe",
     "Lì “abitano” siti, email, foto nel *cloud*, video, modelli di IA"
    ],
    [
     "zap",
     "Consumano **quanto una cittadina**: vicino a centrali, acqua o nei paesi freddi"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Dentro un data center",
   "foto": [
    {
     "src": "https://shieldenstrut.com/wp-content/uploads/2026/03/server-room-cable-tray-overhead-data-center-layout.jpg",
     "tit": "Corridoi organizzati per far circolare aria fredda e calda",
     "alt": "L’interno di un data center: file di armadi pieni di server, con le canaline dei cavi sopra. Osservare: pavimenti e corridoi organizzati per far circolare l’aria fredda e quella calda."
    }
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Il viaggio fisico di una richiesta",
   "id": "f-viaggio"
  },
  {
   "tipo": "errore",
   "no": "«Il cloud è nell’aria, i miei dati non sono da nessuna parte.»",
   "si": "I dati “nel cloud” sono su **dischi veri dentro data center veri**, in un luogo preciso del mondo, collegati da cavi veri. *Cloud* è solo un nome commerciale."
  },
  {
   "tipo": "sezione",
   "num": "4.3",
   "titolo": "I numeri di Internet",
   "sotto": "Chi è online e chi no",
   "foto": {
    "src": "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "errore",
   "no": "«Ormai tutti hanno Internet.»",
   "si": "Nel 2025 oltre **2 miliardi di persone** sono ancora offline, e molte di quelle connesse hanno connessioni lente, costose o condivise. Il divario digitale riguarda anche l’Italia, tra città e aree interne."
  },
  {
   "tipo": "punti",
   "titolo": "I numeri (ITU, 2025, indicativi)",
   "punti": [
    [
     "users",
     "Circa **6 miliardi** di persone usano Internet: tre quarti dell’umanità"
    ],
    [
     "user-x",
     "**2,2 miliardi** sono offline"
    ],
    [
     "signal",
     "**3 miliardi** di abbonamenti 5G"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Chi è online nel mondo",
   "sel": "#s-numeri"
  },
  {
   "tipo": "tessere",
   "titolo": "Il divario digitale (*digital divide*)",
   "tessere": [
    [
     "wifi-off",
     "Accesso",
     "avere o non avere la connessione"
    ],
    [
     "gauge",
     "Qualità",
     "una connessione lenta e costosa non basta per una lezione online"
    ],
    [
     "graduation-cap",
     "Competenze",
     "saper cercare, valutare, proteggersi"
    ]
   ],
   "nota": "Nel 2020 molti studenti italiani avevano **un solo telefono per tutta la famiglia**"
  },
  {
   "tipo": "sezione",
   "num": "4.4",
   "titolo": "Limiti e problemi di Internet",
   "sotto": "Limiti e problemi",
   "foto": {
    "src": "https://images.unsplash.com/photo-1772376920820-4fb715c21e79?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Quattro problemi",
   "tessere": [
    [
     "zap",
     "Energia",
     "data center ≈ 1,5% dell’elettricità mondiale (2024), può raddoppiare entro il 2030 · acqua e rifiuti elettronici"
    ],
    [
     "ban",
     "Censura e blackout",
     "filtri (il “Grande Firewall”) e *Internet shutdown*"
    ],
    [
     "scale",
     "Neutralità della rete",
     "tutto il traffico trattato allo stesso modo · in UE dal 2015"
    ],
    [
     "building",
     "Il potere di pochi",
     "pochi cloud, motori e social: un guasto ferma mezzo web"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Un operatore vi propone: «WhatsApp e Spotify non consumano giga». Che ne pensate?",
   "risposta": "Per l’utente sembra un vantaggio, ma favorisce alcuni servizi rispetto ai concorrenti. Pratiche simili (lo zero rating) sono state molto limitate in Europa proprio perché in contrasto con la neutralità della rete."
  },
  {
   "tipo": "sezione",
   "num": "4.5",
   "titolo": "Intranet, extranet e VPN",
   "sotto": "Le tecnologie di Internet in privato",
   "foto": {
    "src": "https://images.unsplash.com/photo-1542577195-d562c6698ff3?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "schema",
   "titolo": "Intranet, extranet e Internet",
   "sel": "#s-intranet"
  },
  {
   "tipo": "punti",
   "titolo": "La VPN (*Virtual Private Network*)",
   "punti": [
    [
     "lock",
     "Un **tunnel cifrato** su Internet verso una rete privata"
    ],
    [
     "package",
     "Ogni pacchetto **cifrato e chiuso dentro un altro**, diretto al server VPN"
    ],
    [
     "eye-off",
     "Chi intercetta vede solo pacchetti illeggibili"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Che cosa vuol dire tunnel",
   "id": "f-vpn"
  },
  {
   "tipo": "confronto",
   "titolo": "Due usi da non confondere",
   "a": {
    "icona": "building-2",
    "titolo": "VPN aziendali o scolastiche",
    "tono": "buono",
    "righe": [
     "• lavorare da casa sulla **rete privata**",
     "• file e programmi interni"
    ]
   },
   "b": {
    "icona": "globe",
    "titolo": "VPN commerciali",
    "righe": [
     "• nascondono il traffico al Wi-Fi in cui sei",
     "• fanno sembrare un **altro paese**",
     "- **non rendono anonimi**: il fornitore vede tutto",
     "- non proteggono da phishing e virus"
    ]
   }
  },
  {
   "tipo": "errore",
   "no": "«Con la VPN sono invisibile e nessuno può sapere che cosa faccio online.»",
   "si": "La VPN nasconde il traffico **a chi sta lungo il percorso** (il Wi-Fi del bar, l’operatore), ma **il fornitore della VPN vede tutto**, e i siti in cui si entra con il proprio account sanno benissimo chi sei."
  },
  {
   "tipo": "domanda",
   "testo": "Il registro elettronico è una intranet, una extranet o un normale sito Internet?",
   "risposta": "È un servizio raggiungibile da Internet ma riservato a utenti con credenziali (docenti, studenti, famiglie): per l’uso che ne fanno le famiglie si comporta come una extranet della scuola."
  },
  {
   "tipo": "sezione",
   "num": "4.6",
   "titolo": "Il Web",
   "sotto": "Internet e Web non sono la stessa cosa",
   "foto": {
    "src": "https://images.unsplash.com/photo-1604149370100-2cf3be3bc845?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Internet e Web sono la stessa cosa?",
   "risposta": "Non sono la stessa cosa: WhatsApp, la posta elettronica nell’app, i videogiochi online, gli aggiornamenti del telefono usano Internet senza passare per pagine web."
  },
  {
   "tipo": "confronto",
   "titolo": "Internet e Web",
   "a": {
    "icona": "network",
    "titolo": "Internet",
    "righe": [
     "• l’**infrastruttura**",
     "• rete di reti: cavi, router, TCP/IP"
    ]
   },
   "b": {
    "icona": "globe",
    "titolo": "World Wide Web",
    "tono": "buono",
    "righe": [
     "• **uno dei servizi** sopra Internet",
     "• pagine collegate da **link**, lette con un **browser**",
     "• protocollo **HTTP/HTTPS**"
    ]
   },
   "verdetto": "Internet = la **rete stradale** · Web = il **servizio di autobus** (ma oggi molti servizi si usano attraverso pagine web)"
  },
  {
   "tipo": "schema",
   "titolo": "Tanti servizi sulla stessa base",
   "sel": "#s-servizi"
  },
  {
   "tipo": "domanda",
   "testo": "Quando usate WhatsApp dal telefono state usando il Web? E quando lo usate da WhatsApp Web sul computer?",
   "risposta": "Dall’app del telefono si usa Internet ma non il Web; da WhatsApp Web si usa una pagina web nel browser, che a sua volta comunica con i server di WhatsApp."
  },
  {
   "tipo": "sezione",
   "num": "4.7",
   "titolo": "La nascita del Web",
   "sotto": "Un inventore, un luogo, una data",
   "foto": {
    "src": "https://images.unsplash.com/photo-1661793422829-e1f648ab4a15?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il CERN, fine anni ’80",
   "punti": [
    [
     "building-2",
     "Migliaia di fisici, computer diversi, documenti sparsi"
    ],
    [
     "search",
     "Trovare un’informazione era **un’impresa**"
    ],
    [
     "link",
     "**Tim Berners-Lee**: collegarli con dei **link**, da qualsiasi computer"
    ]
   ],
   "foto": {
    "src": "https://cdn.britannica.com/94/123894-050-53EC378E/Tim-Berners-Lee-2005.jpg",
    "tit": "Tim Berners-Lee",
    "alt": "Tim Berners-Lee, l’inventore del World Wide Web."
   }
  },
  {
   "tipo": "storia",
   "titolo": "«Vague but exciting…»",
   "anno": "1989",
   "foto": {
    "src": "https://dexagod.github.io/introduction-slides-solid-linked-data/images/vague-but-exciting.jpg",
    "tit": "La proposta del 1989",
    "alt": "La prima pagina della proposta di Berners-Lee (1989), con l’annotazione a mano di Mike Sendall: «Vague but exciting…»."
   },
   "punti": [
    [
     "file",
     "Marzo 1989: la proposta *Information Management: A Proposal*"
    ],
    [
     "pencil",
     "Il capo, **Mike Sendall**, annota a matita: «vago ma entusiasmante»"
    ],
    [
     "clock",
     "E gli lascia il tempo di provarci"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il primo browser, il primo server",
   "punti": [
    [
     "monitor",
     "Berners-Lee scrive il **primo browser** e il **primo server web**"
    ],
    [
     "sticky-note",
     "Sul computer: «Questa macchina è un server. NON SPEGNERLA!!»"
    ],
    [
     "globe",
     "**Agosto 1991**: la prima pagina, **info.cern.ch**"
    ]
   ],
   "foto": {
    "src": "https://live.staticflickr.com/3187/2424440866_5011997474_b.jpg",
    "tit": "Il NeXT, primo server web",
    "alt": "Il computer NeXT usato da Berners-Lee come primo server web, oggi conservato al CERN."
   }
  },
  {
   "tipo": "storia",
   "titolo": "Un regalo al mondo",
   "anno": "1993",
   "icona": "gift",
   "punti": [
    [
     "gift",
     "**30 aprile 1993**: il CERN rende il Web **pubblico e gratuito**"
    ],
    [
     "trending-up",
     "Per questo si diffonde **così in fretta**: niente da pagare"
    ],
    [
     "crown",
     "2004: Berners-Lee nominato **cavaliere**"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "4.8",
   "titolo": "Ipertesto e ipermedia",
   "sotto": "Leggere saltando",
   "foto": {
    "src": "https://images.unsplash.com/photo-1625053376622-e462848c453f?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "confronto",
   "titolo": "Testo e ipertesto",
   "a": {
    "icona": "book-open",
    "titolo": "Libro",
    "righe": [
     "• lettura **lineare**",
     "• dalla prima all’ultima pagina"
    ]
   },
   "b": {
    "icona": "link",
    "titolo": "Ipertesto",
    "tono": "buono",
    "righe": [
     "• testi collegati da **link**",
     "• lettura **non lineare**: ognuno il suo percorso",
     "• con immagini, audio, video → **ipermedia**"
    ]
   }
  },
  {
   "tipo": "schema",
   "titolo": "Lineare e ipertesto",
   "sel": "#s-ipertesto"
  },
  {
   "tipo": "punti",
   "titolo": "Esempio: dieci minuti su Wikipedia",
   "punti": [
    [
     "search",
     "“fibra ottica” → “riflessione totale” → “Snell” → “Paesi Bassi”"
    ],
    [
     "circle-check",
     "Pregio: **curiosità**, collegamenti"
    ],
    [
     "circle-x",
     "Rischio: **perdere il filo**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Un link porta sempre a un’altra pagina.»",
   "si": "Un link può portare a **un punto della stessa pagina**, a un file da scaricare, a un indirizzo email da scrivere o a un numero di telefono da chiamare: è un collegamento a una **risorsa**, non solo a una pagina."
  },
  {
   "tipo": "domanda",
   "testo": "Leggere un ipertesto è più facile o più difficile che leggere un libro? Perché?",
   "risposta": "Dipende: è più facile approfondire e trovare collegamenti, ma più facile distrarsi e perdere il filo del discorso."
  },
  {
   "tipo": "sezione",
   "num": "4.9",
   "titolo": "L’URL",
   "sotto": "L’indirizzo di ogni risorsa",
   "foto": {
    "src": "https://images.unsplash.com/photo-1483213097419-365e22f0f258?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "schema",
   "titolo": "Un URL pezzo per pezzo",
   "sel": "#s-url"
  },
  {
   "tipo": "tabella",
   "titolo": "Le parti di un URL",
   "righe": [
    [
     "Parte",
     "Che cosa indica",
     "Nell’esempio"
    ],
    [
     "Protocollo",
     "con quali regole parlare al server",
     "`https`"
    ],
    [
     "Dominio",
     "il nome del server, tradotto dal DNS",
     "`www.istruzione.it`"
    ],
    [
     "Percorso",
     "dove si trova la risorsa sul server",
     "`/esame_di_stato/index.html`"
    ],
    [
     "Parametri",
     "informazioni aggiuntive",
     "`?anno=2026`"
    ],
    [
     "Segnalibro",
     "un punto della pagina",
     "`#date`"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "I domini si leggono da destra",
   "punti": [
    [
     "flag",
     "**Primo livello** (TLD): paese (.it, .fr) o categoria (.com, .org, .edu, .gov)"
    ],
    [
     "tag",
     "A sinistra il **nome** registrato, poi i **sottodomini** (www, mail, classroom)"
    ],
    [
     "shield",
     "classroom.**google.com** è di Google · google.com.**sicurezza-account.ru** no!"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova tu: di chi è davvero questo indirizzo?",
   "w": "url"
  },
  {
   "tipo": "errore",
   "no": "«Se nell’indirizzo c’è scritto “google”, il sito è di Google.»",
   "si": "Conta **solo il dominio registrato**, cioè le ultime due parti prima del primo /. La parola “google” può comparire ovunque in un indirizzo truffa."
  },
  {
   "tipo": "domanda",
   "testo": "In quale di questi indirizzi il sito appartiene davvero a Poste Italiane: poste.it.login-sicuro.com oppure login.poste.it?",
   "risposta": "Il secondo: il dominio registrato è poste.it. Nel primo il dominio è login-sicuro.com, che non ha nulla a che fare con Poste."
  },
  {
   "tipo": "sezione",
   "num": "4.10",
   "titolo": "HTTP e HTTPS",
   "sotto": "Richiesta e risposta",
   "foto": {
    "src": "https://images.unsplash.com/photo-1555529902-5261145633bf?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "HTTP (*HyperText Transfer Protocol*)",
   "punti": [
    [
     "send",
     "Il browser **chiede** una risorsa, il server la **invia**"
    ],
    [
     "arrow-left-right",
     "Modello **richiesta–risposta** del client-server"
    ],
    [
     "hash",
     "La risposta ha un **codice di stato**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Dall’Invio alla pagina",
   "id": "f-http"
  },
  {
   "tipo": "tabella",
   "titolo": "I codici di stato",
   "righe": [
    [
     "Codice",
     "Significato",
     "Quando lo vedi"
    ],
    [
     "**200** OK",
     "tutto bene",
     "sempre, ma non si vede"
    ],
    [
     "**301 / 302**",
     "la risorsa si è spostata",
     "il browser segue da solo"
    ],
    [
     "**403** Forbidden",
     "non hai il permesso",
     "pagine riservate"
    ],
    [
     "**404** Not Found",
     "non esiste",
     "link sbagliati"
    ],
    [
     "**500**",
     "errore del server",
     "sito guasto"
    ],
    [
     "**503**",
     "server sovraccarico",
     "il giorno dei risultati dei test"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "La prima cifra dice già molto",
   "tessere": [
    [
     "circle-check",
     "2xx",
     "successo"
    ],
    [
     "corner-down-right",
     "3xx",
     "reindirizzamento"
    ],
    [
     "user-x",
     "4xx",
     "errore del client"
    ],
    [
     "server-crash",
     "5xx",
     "errore del server"
    ]
   ]
  },
  {
   "tipo": "confronto",
   "titolo": "HTTP e HTTPS",
   "a": {
    "icona": "eye",
    "titolo": "HTTP",
    "tono": "vecchio",
    "righe": [
     "- dati **in chiaro**",
     "- sullo stesso Wi-Fi qualcuno può leggerli"
    ]
   },
   "b": {
    "icona": "lock",
    "titolo": "HTTPS (*Secure*)",
    "tono": "buono",
    "righe": [
     "+ comunicazione **cifrata** con **TLS**",
     "+ nessuno può modificarla senza che il browser se ne accorga"
    ]
   }
  },
  {
   "tipo": "errore",
   "no": "«C’è il lucchetto, quindi il sito è sicuro e affidabile.»",
   "si": "Il lucchetto dice solo che la **comunicazione è cifrata** con il dominio indicato. Un sito di phishing come poste.it.login-sicuro.com può avere un lucchetto perfetto."
  },
  {
   "tipo": "sezione",
   "num": "4.11",
   "titolo": "I linguaggi del Web",
   "sotto": "Tre linguaggi, tre compiti",
   "foto": {
    "src": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Una pagina web come una casa",
   "tessere": [
    [
     "file-code",
     "HTML",
     "**struttura e contenuto** · i muri e le stanze"
    ],
    [
     "palette",
     "CSS",
     "**aspetto** · arredamento e pittura"
    ],
    [
     "zap",
     "JavaScript",
     "**comportamento** · impianto elettrico e domotica"
    ]
   ],
   "nota": "Separare i compiti: cambi la grafica di tutto il sito **senza toccare i contenuti**"
  },
  {
   "tipo": "errore",
   "no": "«Programmo in HTML.»",
   "si": "L’HTML **descrive** il contenuto ma non contiene istruzioni da eseguire: è un linguaggio di **marcatura**. La parte di “programmazione” di una pagina è in **JavaScript** e nel codice che gira sul server."
  },
  {
   "tipo": "confronto",
   "titolo": "Pagine statiche e dinamiche",
   "a": {
    "icona": "file",
    "titolo": "Statica",
    "righe": [
     "• **file già pronto** sul server",
     "• uguale per tutti",
     "• “chi siamo”, un sito didattico"
    ]
   },
   "b": {
    "icona": "refresh-cw",
    "titolo": "Dinamica",
    "tono": "buono",
    "righe": [
     "• **costruita al momento** dal server",
     "• spesso da un **database**",
     "• feed dei social, registro elettronico, carrello"
    ]
   }
  },
  {
   "tipo": "domanda",
   "testo": "La pagina dei voti del registro elettronico è statica o dinamica? Da che cosa lo capite?",
   "risposta": "Dinamica: ogni studente vede i propri voti, aggiornati al momento; il server costruisce la pagina leggendo i dati dal database."
  },
  {
   "tipo": "sezione",
   "num": "4.12",
   "titolo": "Il browser",
   "sotto": "Il programma che sfoglia il Web",
   "foto": {
    "src": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il browser",
   "punti": [
    [
     "monitor",
     "Il **client** che chiede, interpreta e mostra le pagine"
    ],
    [
     "paintbrush",
     "**Motore di rendering**: legge HTML e CSS e “disegna”"
    ],
    [
     "cpu",
     "**Motore JavaScript**: esegue il codice"
    ],
    [
     "globe",
     "Chrome, Safari, Edge, Firefox · molti usano il motore di Chrome · standard del **W3C**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Le parti del browser",
   "righe": [
    [
     "Elemento",
     "A che cosa serve"
    ],
    [
     "Barra degli indirizzi",
     "URL o ricerca · mostra dominio e lucchetto"
    ],
    [
     "Schede (*tab*)",
     "più pagine nella stessa finestra"
    ],
    [
     "Preferiti",
     "salvare gli indirizzi"
    ],
    [
     "Cronologia",
     "le pagine visitate"
    ],
    [
     "Estensioni",
     "traduttori, blocco pubblicità, password"
    ],
    [
     "Profili",
     "separare personale e scuola, sincronizzare"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "La guerra dei browser",
   "anno": "1993–2008",
   "foto": {
    "src": "https://www.researchgate.net/profile/Erik-Ranschaert/publication/304300437/figure/fig1/AS:668993757118480@1536511949710/Screenshot-of-the-Mosaic-browser-displaying-the-NCSAs-home-page-The-browser-was.png",
    "tit": "Mosaic, 1993",
    "alt": "Il browser Mosaic (1993): una delle prime pagine web con testo e immagini insieme."
   },
   "punti": [
    [
     "image",
     "**Mosaic** (1993): immagini dentro il testo"
    ],
    [
     "swords",
     "**Netscape** contro **Internet Explorer** gratis in Windows"
    ],
    [
     "flame",
     "Dalle ceneri di Netscape: **Firefox** (2004)"
    ],
    [
     "globe",
     "2008: **Chrome**, oggi il più usato"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il browser è Google.»",
   "si": "**Google** è un’azienda e un **motore di ricerca** (capitolo 5); il **browser** è il programma con cui si aprono le pagine. Si può usare il motore di ricerca Google da Safari o Firefox, e un altro motore da Chrome."
  },
  {
   "tipo": "domanda",
   "testo": "Le estensioni del browser possono leggere le pagine che visitate. Perché bisogna installarle con prudenza?",
   "risposta": "Perché un’estensione con molti permessi può vedere tutto ciò che si fa nelle pagine, comprese password e dati personali; alcune estensioni gratuite raccolgono e vendono questi dati."
  },
  {
   "tipo": "sezione",
   "num": "4.13",
   "titolo": "Le tracce della navigazione",
   "sotto": "Che cosa resta dopo la visita",
   "foto": {
    "src": "https://images.unsplash.com/photo-1609631002724-572287d136bb?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Cronologia e cache",
   "tessere": [
    [
     "history",
     "Cronologia",
     "l’elenco delle pagine visitate"
    ],
    [
     "hard-drive",
     "Cache",
     "copie di immagini, stili, script: la pagina compare prima · svuotarla risolve pagine “strane”"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "I cookie",
   "punti": [
    [
     "cookie",
     "Un **piccolo file di testo** che il sito chiede al browser di conservare"
    ],
    [
     "repeat",
     "Il browser lo **rimanda** a ogni visita"
    ],
    [
     "brain",
     "HTTP **non ha memoria**: il cookie fa **ricordare** l’utente al sito"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Tipi di cookie",
   "righe": [
    [
     "Tipo",
     "A che cosa serve",
     "Consenso?"
    ],
    [
     "**Tecnici**",
     "login, carrello, lingua",
     "no"
    ],
    [
     "**Analitici**",
     "contare le visite",
     "dipende"
    ],
    [
     "**Di profilazione**",
     "pubblicità mirata",
     "sì"
    ],
    [
     "**Di terze parti**",
     "di un altro dominio, **ti seguono da un sito all’altro**",
     "sì"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Come ti segue un cookie",
   "id": "f-cookie"
  },
  {
   "tipo": "punti",
   "titolo": "Il banner dei cookie",
   "punti": [
    [
     "scale",
     "In Europa serve il **consenso** per i cookie non tecnici"
    ],
    [
     "circle-x",
     "Garante: **rifiutare** deve essere facile quanto accettare"
    ],
    [
     "x",
     "Chiudere il banner con la **X** = rifiutare"
    ]
   ],
   "foto": {
    "src": "https://www.cookieconsent.com/assets/images/cookie-consent-notice-banner-style.png",
    "tit": "Quale pulsante è più evidente?",
    "alt": "Un banner dei cookie: le scelte “Accetta”, “Rifiuta” e “Personalizza”. Osservare: quale pulsante è più evidente?"
   }
  },
  {
   "tipo": "punti",
   "titolo": "La navigazione in incognito",
   "punti": [
    [
     "eye-off",
     "**Non salva** cronologia, cookie e moduli sul dispositivo"
    ],
    [
     "users",
     "Utile sul computer di un altro, o per un secondo account"
    ],
    [
     "circle-x",
     "**Non rende anonimi**: sito, rete, operatore e account vedono tutto"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: privacy nel browser",
   "punti": [
    [
     "settings",
     "Impostazioni **privacy e sicurezza**: quanti siti hanno cookie?"
    ],
    [
     "ban",
     "Bloccare i cookie di terze parti, svuotare la cache di un sito"
    ],
    [
     "file-text",
     "Tre siti di notizie: «Rifiuta» è facile da trovare quanto «Accetta»? (Documento Google)"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«In incognito nessuno sa che cosa sto facendo.»",
   "si": "L’incognito cancella le tracce **solo sul dispositivo**. La scuola, l’operatore, i siti visitati e Google (se si è entrati con l’account) vedono tutto come prima."
  },
  {
   "tipo": "domanda",
   "testo": "Perché quando guardate un paio di scarpe su un sito poi le ritrovate in pubblicità su siti diversi?",
   "risposta": "Per i cookie di terze parti (e tecniche simili): la stessa azienda pubblicitaria è presente su più siti, riconosce il browser e mostra annunci legati a ciò che si è guardato."
  },
  {
   "tipo": "sezione",
   "num": "4.14",
   "titolo": "Siti, server e domini",
   "sotto": "Pubblicare un sito",
   "foto": {
    "src": "https://images.unsplash.com/photo-1487338875411-8880f74114a2?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Per pubblicare un sito servono",
   "tessere": [
    [
     "file-code",
     "I file",
     "HTML, CSS, immagini"
    ],
    [
     "server",
     "Un server web",
     "programma che risponde alle richieste HTTP (nginx, Apache) · di solito in **hosting**"
    ],
    [
     "globe",
     "Un dominio",
     "si **registra** presso un **registrar**, a pagamento, e si rinnova"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Esempi",
   "punti": [
    [
     "map-pin",
     "I domini **.it**: Registro .it, **CNR di Pisa** · oltre 3,5 milioni (indicativo)"
    ],
    [
     "layout-template",
     "**Google Sites**: editor visuale, pubblica su un indirizzo di Google"
    ],
    [
     "code",
     "**GitHub Pages**: siti statici gratis"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: un sito con Google Sites",
   "punti": [
    [
     "users",
     "A gruppi, un sito sul modulo “Reti e Internet”"
    ],
    [
     "file",
     "Una pagina per capitolo, immagini con testo alternativo"
    ],
    [
     "link",
     "Link tra le pagine e verso le fonti · pubblicato solo per la scuola"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Se compro un dominio, ho già un sito.»",
   "si": "Il dominio è **solo il nome**: servono anche l’**hosting** che conservi e distribuisca i file e i file stessi del sito. Senza hosting il dominio non porta da nessuna parte."
  },
  {
   "tipo": "domanda",
   "testo": "Che cosa succede a un sito se il proprietario dimentica di rinnovare il dominio?",
   "risposta": "Il nome smette di funzionare e, dopo un periodo, può essere registrato da chiunque, anche da truffatori che sfruttano le visite e i link verso il vecchio sito."
  },
  {
   "tipo": "sezione",
   "num": "4.15",
   "titolo": "Tipi di Web",
   "sotto": "Surface, deep e dark",
   "foto": {
    "src": "https://images.unsplash.com/photo-1519832064761-bbc1d76d4ef8?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "schema",
   "titolo": "L’iceberg del Web",
   "sel": "#s-iceberg"
  },
  {
   "tipo": "tessere",
   "titolo": "Tre parti del Web",
   "tessere": [
    [
     "search",
     "Surface web",
     "indicizzato dai motori di ricerca"
    ],
    [
     "lock",
     "Deep web",
     "non indicizzato: posta, registro, Drive, banca · **la parte più grande, normale e legale**"
    ],
    [
     "eye-off",
     "Dark web",
     "piccolo, solo con software come **Tor** · giornalisti e dissidenti, ma anche attività illegali"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il deep web è la parte illegale di Internet.»",
   "si": "Il **deep web** è semplicemente ciò che non è indicizzato: la vostra casella di posta e il registro elettronico sono deep web. La parte nascosta e a volte illegale è il **dark web**, molto più piccolo."
  },
  {
   "tipo": "domanda",
   "testo": "Il vostro profilo Instagram privato fa parte del surface web o del deep web?",
   "risposta": "Del deep web: i contenuti di un profilo privato non sono visibili ai motori di ricerca né a chi non è autorizzato."
  }
 ]
};
