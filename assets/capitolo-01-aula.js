window.AULA = {
 "modulo": "Reti e Internet",
 "n": "01",
 "titolo": "La comunicazione digitale",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "La comunicazione digitale",
   "sotto": "Chi parla, chi ascolta, attraverso che cosa e con quali regole.",
   "indice": [
    [
     "1.1",
     "Comunicare: gli elementi"
    ],
    [
     "1.2",
     "Le misure di una connessione"
    ],
    [
     "1.3",
     "I mezzi trasmissivi"
    ],
    [
     "1.4",
     "I modi di trasmissione"
    ],
    [
     "1.5",
     "Commutazione di circuito e di pacchetto"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Elencate tutti i modi in cui avete comunicato con qualcuno che non era nella stessa stanza nelle ultime 24 ore.",
   "risposta": "Messaggi, vocali, chiamate, videochiamate, social, mail: in tutti ci sono mittente, destinatario, messaggio, codice, canale e rumore."
  },
  {
   "tipo": "sezione",
   "num": "1.1",
   "titolo": "Comunicare: gli elementi",
   "sotto": "Sei elementi, sempre gli stessi",
   "foto": {
    "src": "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Comunicare = trasferire un’informazione",
   "tessere": [
    [
     "user",
     "Mittente",
     "chi invia · tu che scrivi"
    ],
    [
     "user",
     "Destinatario",
     "chi riceve · il tuo amico"
    ],
    [
     "message-square",
     "Messaggio",
     "“Ci vediamo alle 5?”"
    ],
    [
     "binary",
     "Codice",
     "le regole: l’italiano, poi i bit"
    ],
    [
     "radio",
     "Canale",
     "onde radio, cavi, fibra"
    ],
    [
     "zap",
     "Rumore",
     "segnale debole, interferenze"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Lo schema della comunicazione",
   "sel": "#s-comunicazione"
  },
  {
   "tipo": "punti",
   "titolo": "Codice e rumore",
   "punti": [
    [
     "binary",
     "Mittente e destinatario devono usare **lo stesso codice**"
    ],
    [
     "message-circle-question",
     "Scrivo in giapponese a chi non lo conosce → arriva, ma **non si capisce**"
    ],
    [
     "network",
     "Nelle reti l’accordo sul codice e sulle regole = **protocollo**"
    ],
    [
     "zap",
     "Il rumore c’è sempre: una buona comunicazione **lo tollera**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«WhatsApp è il canale attraverso cui arriva il mio messaggio.»",
   "si": "WhatsApp è il **servizio**; il canale sono le **onde radio, i cavi e le fibre** su cui viaggiano i dati."
  },
  {
   "tipo": "sezione",
   "num": "1.2",
   "titolo": "Le misure di una connessione",
   "sotto": "Banda, throughput, latenza, jitter",
   "foto": {
    "src": "https://images.unsplash.com/photo-1564668836804-05a2de350bb6?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Quando dite “qui Internet va lento”, a che cosa pensate esattamente? Che cosa misurereste per dimostrarlo?",
   "risposta": "Di solito si pensa ai “Mega” della connessione, ma la lentezza percepita può dipendere da tre grandezze diverse: banda, latenza e jitter."
  },
  {
   "tipo": "punti",
   "titolo": "La larghezza di banda (*bandwidth*)",
   "punti": [
    [
     "gauge",
     "Quantità **massima** di dati che un canale trasporta **in un secondo**"
    ],
    [
     "binary",
     "Si misura in **bit al secondo**: kbps · Mbps · Gbps · Tbps"
    ],
    [
     "zap",
     "Il segnale viaggia **sempre alla stessa velocità** (≈ 200.000 km/s nel rame e nella fibra)"
    ],
    [
     "layers",
     "Una connessione “più veloce” mette **più bit al secondo** sul canale"
    ]
   ],
   "nota": "La banda è la **larghezza del tubo**, non la velocità dell’acqua"
  },
  {
   "tipo": "tabella",
   "titolo": "Le unità della banda",
   "righe": [
    [
     "Unità",
     "Simbolo",
     "Valore"
    ],
    [
     "kilobit al secondo",
     "kbps",
     "1.000 bit/s"
    ],
    [
     "megabit al secondo",
     "Mbps",
     "1.000.000 bit/s"
    ],
    [
     "gigabit al secondo",
     "Gbps",
     "1.000.000.000 bit/s"
    ],
    [
     "terabit al secondo",
     "Tbps",
     "1.000.000.000.000 bit/s"
    ]
   ]
  },
  {
   "tipo": "formula",
   "titolo": "Bit e byte: l’errore più comune",
   "formula": "MB al secondo = Mbps ÷ 8",
   "righe": [
    [
     "connessioni",
     "bit al secondo · **Mbps** (b minuscola)"
    ],
    [
     "file",
     "byte · **MB** (B maiuscola)"
    ],
    [
     "100 Mbps",
     "al massimo **12,5 MB** al secondo"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Con una connessione da 1000 Mega scarico un file da 1000 MB in un secondo.»",
   "si": "1000 **megabit** al secondo sono al massimo **125 megabyte** al secondo: servono almeno 8 secondi."
  },
  {
   "tipo": "formula",
   "titolo": "Esempio: un videogioco da 50 GB a 100 Mbps",
   "formula": "50 GB = 400.000 megabit",
   "righe": [
    [
     "400.000 ÷ 100",
     "**4.000 secondi**"
    ],
    [
     "4.000 s",
     "≈ **1 ora e 7 minuti** (caso ideale)"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova tu: quanto ci metto a scaricare?",
   "w": "download"
  },
  {
   "tipo": "domanda",
   "testo": "Cosa vuole dire upload e download? Hanno la stessa banda?",
   "risposta": "Lo vediamo nelle prossime slides!"
  },
  {
   "tipo": "confronto",
   "titolo": "Download e upload",
   "a": {
    "icona": "download",
    "titolo": "Download",
    "tono": "buono",
    "righe": [
     "• dati **ricevuti**",
     "• guardare un video, scaricare un file",
     "+ di solito la banda **più alta**"
    ]
   },
   "b": {
    "icona": "upload",
    "titolo": "Upload",
    "righe": [
     "• dati **inviati**",
     "• caricare un video, videochiamare",
     "- spesso **più bassa**"
    ]
   },
   "verdetto": "Quasi tutti ricevono più di quanto inviano → l’operatore dà di più al download: la **A** di ADSL = *Asymmetric*. In FTTH spesso è **simmetrica**"
  },
  {
   "tipo": "domanda",
   "testo": "Se un’azienda vi offre una velocità di 1Gbps, raggiungete davvero quella velocità?",
   "risposta": "Tipicamente no, la banda dichiarata è un valore massimo."
  },
  {
   "tipo": "punti",
   "titolo": "Throughput: la velocità effettiva",
   "punti": [
    [
     "activity",
     "I dati che passano **davvero** in un secondo: quasi sempre **meno** della banda"
    ],
    [
     "users",
     "Linea **condivisa** con altri utenti e dispositivi"
    ],
    [
     "wifi",
     "Il **Wi-Fi** perde velocità con muri e interferenze"
    ],
    [
     "server",
     "Il server può essere **lento o lontano**"
    ],
    [
     "mail",
     "Parte dei bit è **informazione di servizio** (busta e francobollo)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Esempio: “1 Gbps” misurato in camera",
   "punti": [
    [
     "smartphone",
     "Telefono in camera, lontano dal router → **300 Mbps**"
    ],
    [
     "wifi",
     "Il **collo di bottiglia** è il Wi-Fi"
    ],
    [
     "cable",
     "Via cavo il test si avvicina molto al valore dichiarato"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "La latenza (*ping*)",
   "punti": [
    [
     "timer",
     "Tempo da quando un dato **parte** a quando **arriva** · in **millisecondi**"
    ],
    [
     "map",
     "**Distanza**: Milano → New York ≈ 33 ms · satellite geostazionario > 240 ms"
    ],
    [
     "router",
     "**Router attraversati**: ognuno legge e decide"
    ],
    [
     "list",
     "**Code**: router congestionato → il pacchetto aspetta"
    ]
   ],
   "nota": "Banda = quanto il tubo è **largo** · latenza = quanto è **lungo**"
  },
  {
   "tipo": "anim",
   "titolo": "Due tubi: banda e latenza",
   "id": "f-tubi"
  },
  {
   "tipo": "confronto",
   "titolo": "Che cosa conta di più?",
   "a": {
    "icona": "video",
    "titolo": "Streaming di un film",
    "righe": [
     "• conta la **banda**",
     "• qualche secondo di ritardo non si nota"
    ]
   },
   "b": {
    "icona": "gamepad-2",
    "titolo": "Gioco online, videochiamata",
    "tono": "buono",
    "righe": [
     "• conta la **latenza**",
     "• attività **interattive**"
    ]
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il jitter",
   "punti": [
    [
     "activity",
     "Quanto la latenza **varia** da un pacchetto all’altro"
    ],
    [
     "route",
     "I pacchetti non fanno tutti lo stesso viaggio: code, strade diverse"
    ],
    [
     "video",
     "Arrivano a **intervalli irregolari** → l’immagine va **a scatti**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Il jitter",
   "id": "f-jitter"
  },
  {
   "tipo": "punti",
   "titolo": "In laboratorio: lo speed test",
   "punti": [
    [
     "gauge",
     "speedtest.net o fast.com: Wi-Fi della scuola, rete di casa, rete del telefono"
    ],
    [
     "list",
     "Annotare **download, upload e ping** in un **Foglio Google condiviso**"
    ],
    [
     "activity",
     "Grafico a barre: più banda e meno latenza coincidono?"
    ]
   ],
   "foto": {
    "src": "https://images.pexels.com/photos/14690386/pexels-photo-14690386.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "tit": "Uno speed test sul telefono",
    "alt": "Uno speed test sul telefono: download, upload e ping, i tre valori da annotare in laboratorio."
   }
  },
  {
   "tipo": "errore",
   "no": "«Il gioco online va a scatti: mi serve una connessione con più Mega.»",
   "si": "Spesso il problema è la **latenza** o il **jitter**, non la banda: più Mega non lo risolvono."
  },
  {
   "tipo": "sezione",
   "num": "1.3",
   "titolo": "I mezzi trasmissivi",
   "sotto": "Su che cosa viaggiano i bit",
   "foto": {
    "src": "https://images.unsplash.com/photo-1761507321319-2d59343016f6?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "In questo momento, nella nostra aula, quali mezzi trasmissivi stanno trasportando dati?",
   "risposta": "Il Wi-Fi della scuola, la rete cellulare dei telefoni, il Bluetooth di eventuali cuffie o smartwatch e i cavi Ethernet di computer e access point."
  },
  {
   "tipo": "confronto",
   "titolo": "Due famiglie di mezzi trasmissivi",
   "a": {
    "icona": "cable",
    "titolo": "Guidati (cablati)",
    "tono": "buono",
    "righe": [
     "• il segnale viaggia **in un cavo**",
     "• rame (doppino, coassiale) e fibra",
     "+ **veloci, stabili, sicuri**"
    ]
   },
   "b": {
    "icona": "wifi",
    "titolo": "Non guidati (*wireless*)",
    "righe": [
     "• onda elettromagnetica **nell’aria**",
     "• Wi-Fi, Bluetooth, cellulare, satelliti",
     "+ **comodi**, ci si muove",
     "- distanza, ostacoli, interferenze"
    ]
   }
  },
  {
   "tipo": "schema",
   "titolo": "La mappa dei mezzi",
   "sel": "#s-mezzi"
  },
  {
   "tipo": "punti",
   "titolo": "Il doppino (*twisted pair*)",
   "punti": [
    [
     "cable",
     "**Coppie di fili di rame intrecciati**"
    ],
    [
     "network",
     "Cavo **Ethernet**: 4 coppie, connettore **RJ45**"
    ],
    [
     "zap",
     "L’intreccio **cancella i disturbi**: il ricevitore misura la **differenza** tra i due fili"
    ]
   ],
   "foto": {
    "src": "https://stl.tech/wp-content/uploads/2022/05/twistedCable.jpg",
    "tit": "Cavo di rete sguainato",
    "alt": "Un cavo di rete sguainato: le quattro coppie di fili colorati intrecciati."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Perché i fili sono intrecciati",
   "id": "f-intreccio"
  },
  {
   "tipo": "punti",
   "titolo": "Dal modem all’ADSL",
   "punti": [
    [
     "layers",
     "Categorie Cat 5e, 6, 6a…: intreccio più curato → **da 1 a 10 Gbps**"
    ],
    [
     "volume-2",
     "Anni ’90: modem sulla linea telefonica, bit come **suoni**, max **56 kbps**, telefono occupato"
    ],
    [
     "signal",
     "**ADSL**: stesso doppino, **frequenze più alte** → telefono e Internet insieme, fino a ~20 Mbps"
    ]
   ],
   "foto": {
    "src": "https://bilder.obi-italia.it/c8f6b437-cdb1-48ee-ba31-863625aae3eb/prZZK/image.jpeg",
    "tit": "Presa per telefono e Internet",
    "alt": "Presa per telefono e connessione a Internet."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il cavo coassiale",
   "punti": [
    [
     "cable",
     "Filo centrale + isolante + **calza metallica** + guaina"
    ],
    [
     "shield",
     "La **calza fa da scudo** ai disturbi"
    ],
    [
     "tv",
     "Antenna della **TV**, in alcuni paesi Internet via cavo"
    ]
   ],
   "foto": {
    "src": "https://www.amphenolrf.com/getattachment/2b8b4836-6fbc-4047-8925-530846e442d2/coaxial_cable.jpg",
    "tit": "Gli strati del coassiale",
    "alt": "Un cavo coassiale spellato a gradini, con gli strati etichettati in inglese. Osservare dall’interno all’esterno: conduttore centrale (center conductor), isolante (dielectric), schermo (foil e braided shield, la calza), guaina (jacket)."
   }
  },
  {
   "tipo": "punti",
   "titolo": "La fibra ottica",
   "punti": [
    [
     "sparkles",
     "Filo di **vetro** sottile come un capello"
    ],
    [
     "binary",
     "Impulsi di **luce**: accesa = 1, spenta = 0"
    ],
    [
     "layers",
     "**Nucleo** + **mantello**"
    ],
    [
     "repeat",
     "**Riflessione totale**: la luce rimbalza e resta dentro · niente pieghe a gomito"
    ]
   ],
   "foto": {
    "src": "https://www.rochester.edu/newscenter/wp-content/uploads/2025/06/fea-how-fiber-optics-works-2025-06-16_fiber_optics_0325.jpg",
    "tit": "Fibre ottiche illuminate",
    "alt": "Fibre ottiche illuminate: la luce esce solo dalle punte, perché lungo il filo resta intrappolata dentro."
   }
  },
  {
   "tipo": "anim",
   "titolo": "La luce intrappolata",
   "id": "f-fibra"
  },
  {
   "tipo": "tessere",
   "titolo": "Perché la fibra vince",
   "tessere": [
    [
     "gauge",
     "Banda enorme",
     "luce accesa e spenta miliardi di volte · più colori insieme"
    ],
    [
     "map",
     "Distanze lunghe",
     "il vetro assorbe pochissima luce"
    ],
    [
     "zap",
     "Niente disturbi",
     "luce, non corrente elettrica"
    ],
    [
     "lock",
     "Sicurezza",
     "la luce non trapela"
    ]
   ],
   "nota": "Svantaggi: **delicata**, difficile da giuntare · il costo vero è **lo scavo**"
  },
  {
   "tipo": "confronto",
   "titolo": "“Fibra” può voler dire due cose",
   "a": {
    "icona": "cable",
    "titolo": "FTTC · *Fiber To The Cabinet*",
    "righe": [
     "• fibra fino all’**armadio in strada**",
     "- ultimo tratto **in rame**",
     "- max ~200 Mbps, **cala con la distanza**"
    ]
   },
   "b": {
    "icona": "sparkles",
    "titolo": "FTTH · *Fiber To The Home*",
    "tono": "buono",
    "righe": [
     "• fibra **fino all’appartamento**",
     "+ **1–10 Gbps**",
     "+ la distanza non conta"
    ]
   }
  },
  {
   "tipo": "foto",
   "titolo": "L’armadio di strada",
   "foto": [
    {
     "src": "https://www.tariffando.it/wp-content/uploads/2017/02/11122494_10205447308395468_418905393_n-optimized.jpg",
     "tit": "In FTTC qui arriva la fibra e parte il rame",
     "alt": "Armadi di strada: in FTTC nell’armadio dell’operatore arriva la fibra e da lì parte il rame verso le case."
    }
   ]
  },
  {
   "tipo": "anim",
   "titolo": "FTTC e FTTH",
   "id": "f-ftth"
  },
  {
   "tipo": "widget",
   "titolo": "Prova tu: quanto sei lontano dall’armadio?",
   "w": "distanza"
  },
  {
   "tipo": "domanda",
   "testo": "Un’offerta pubblicizza “fibra fino a 200 Mega”, un’altra “fibra fino a 2,5 Giga”. Che cosa sospettate sulla prima?",
   "risposta": "Che sia FTTC: fibra solo fino all’armadio e poi rame, con la velocità che cala con la distanza. La seconda è FTTH."
  },
  {
   "tipo": "punti",
   "titolo": "Onde elettromagnetiche e frequenza",
   "punti": [
    [
     "waves",
     "Frequenza **bassa** → arriva lontano, aggira gli ostacoli"
    ],
    [
     "gauge",
     "Frequenza **alta** → più dati, ma la fermano muri, pioggia, foglie"
    ],
    [
     "radio",
     "**Onde radio**: FM, TV, cellulare, Wi-Fi, Bluetooth"
    ],
    [
     "satellite-dish",
     "**Microonde**: ponti radio, satelliti, 5G alto · antenne **a vista**"
    ],
    [
     "eye",
     "**Infrarossi**: telecomando · stessa stanza"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Lo spettro",
   "sel": "#s-spettro"
  },
  {
   "tipo": "punti",
   "titolo": "L’aria è di tutti",
   "punti": [
    [
     "users",
     "Stessa frequenza nello stesso posto → **ci si disturba**"
    ],
    [
     "building-2",
     "Frequenze = **risorsa pubblica divisa per legge**"
    ],
    [
     "key",
     "Bande in esclusiva: le **aste del 5G**, pagate miliardi"
    ],
    [
     "wifi",
     "Bande libere a bassa potenza: **2,4 e 5 GHz**"
    ]
   ],
   "nota": "Il telecomando non passa attraverso una persona; la chiamata arriva anche in tasca"
  },
  {
   "tipo": "confronto",
   "titolo": "Il Wi-Fi: due bande",
   "a": {
    "icona": "wifi",
    "titolo": "2,4 GHz",
    "righe": [
     "+ arriva **più lontano**",
     "+ attraversa meglio i muri",
     "- **più lento e affollato**"
    ]
   },
   "b": {
    "icona": "wifi",
    "titolo": "5 GHz (e 6 GHz)",
    "tono": "buono",
    "righe": [
     "+ **più veloce**, canali più larghi",
     "- **portata minore**",
     "- i muri lo fermano di più"
    ]
   },
   "verdetto": "In camera il 5 GHz “prende male” ma il 2,4 sì? **Non è un guasto**"
  },
  {
   "tipo": "schema",
   "titolo": "2,4 e 5 GHz nella stessa casa",
   "sel": "#s-bande"
  },
  {
   "tipo": "punti",
   "titolo": "Wi-Fi e Bluetooth",
   "punti": [
    [
     "wifi",
     "Wi-Fi: rete locale senza cavi tramite un **access point** · decine di metri"
    ],
    [
     "layers",
     "Dal Wi-Fi 4 al **Wi-Fi 7**: più velocità e **più dispositivi insieme**"
    ],
    [
     "bluetooth",
     "Bluetooth: dispositivi **vicinissimi**, **poca potenza** → poca batteria, pochi dati"
    ]
   ],
   "foto": {
    "src": "https://images.pexels.com/photos/10104833/pexels-photo-10104833.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "tit": "Auricolari Bluetooth",
    "alt": "Auricolari Bluetooth e telefono: una rete di pochi centimetri."
   }
  },
  {
   "tipo": "storia",
   "titolo": "Un re vichingo nel tuo telefono",
   "anno": "X secolo",
   "foto": {
    "src": "https://www.eurocomunicazione.com/wp-content/uploads/2022/01/Bluetooth-1.jpg",
    "tit": "Le rune H e B",
    "alt": "Le rune H e B"
   },
   "punti": [
    [
     "crown",
     "**Harald “Dente Blu” Gormsson** unificò Danimarca e Norvegia"
    ],
    [
     "bluetooth",
     "Il Bluetooth doveva **unire** dispositivi diversi"
    ],
    [
     "sparkles",
     "Il logo unisce le rune delle iniziali **H** e **B**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Il telefono segna Wi-Fi al massimo, ma le pagine non si caricano. Come è possibile?",
   "risposta": "Il collegamento radio con il router funziona, ma il router non è collegato a Internet: linea guasta, problema dell’operatore o contratto scaduto."
  },
  {
   "tipo": "punti",
   "titolo": "RFID",
   "punti": [
    [
     "tag",
     "Identifica un oggetto **a distanza** con un’etichetta radio, il **tag**"
    ],
    [
     "cpu",
     "Chip + antenna · **niente batteria**: l’energia arriva dall’onda del lettore"
    ],
    [
     "shopping-bag",
     "Antitaccheggio, badge, biglietti, passaporti, Telepass"
    ]
   ],
   "foto": {
    "src": "https://www.rfidcard.com/wp-content/uploads/2021/06/Understanding-RFID-Antennas-1230x706.jpg",
    "tit": "Un tag RFID",
    "alt": "Un tag RFID: al centro il minuscolo chip, intorno l’antenna stampata a spirale che raccoglie l’energia dal lettore."
   }
  },
  {
   "tipo": "punti",
   "titolo": "NFC",
   "punti": [
    [
     "smartphone",
     "Derivato dall’RFID, funziona a **pochi centimetri**"
    ],
    [
     "shield",
     "La distanza ridotta **è una protezione**"
    ],
    [
     "credit-card",
     "Pagamenti contactless, abbinare le cuffie, carta d’identità elettronica"
    ]
   ],
   "foto": {
    "src": "https://www.roxpay.eu/images/guides/contactless-payment-terminal.webp",
    "tit": "Pagamento contactless",
    "alt": "Pagamento contactless con lo smartphone avvicinato al POS: telefono e terminale parlano in NFC a pochi centimetri."
   }
  },
  {
   "tipo": "errore",
   "no": "«Con l’NFC qualcuno può prelevare soldi dalla mia carta passandomi vicino in metro.»",
   "si": "Il lettore deve stare **a pochi centimetri**, i pagamenti senza PIN hanno **un importo massimo** e ogni transazione usa **un codice valido una sola volta**. Il rischio non è zero, ma è molto più basso di quanto si racconti."
  },
  {
   "tipo": "confronto",
   "titolo": "Satelliti per telecomunicazioni",
   "a": {
    "icona": "satellite",
    "titolo": "Geostazionari · 36.000 km",
    "righe": [
     "+ sembrano **fermi**: antenna sempre puntata",
     "+ ne bastano pochi",
     "- ≈ 144.000 km di viaggio → **oltre mezzo secondo**"
    ]
   },
   "b": {
    "icona": "satellite",
    "titolo": "Orbita bassa (LEO) · 550 km",
    "tono": "buono",
    "righe": [
     "+ latenza **bassa**: decine di ms",
     "- si muovono: **ne servono migliaia**",
     "• costellazioni come **Starlink**"
    ]
   },
   "verdetto": "Indispensabili dove i cavi non arrivano: navi, aerei, montagne, disastri"
  },
  {
   "tipo": "anim",
   "titolo": "Geostazionari e orbita bassa",
   "id": "f-satelliti"
  },
  {
   "tipo": "foto",
   "titolo": "Un’antenna Starlink",
   "foto": [
    {
     "src": "https://www.dishytech.com/wp-content/uploads/2026/03/DSC00011-scaled.jpg",
     "tit": "Punta il cielo e segue i satelliti che passano",
     "alt": "Un’antenna Starlink su un tetto: punta il cielo e segue i satelliti che passano."
    }
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Perché non usiamo solo i satelliti al posto dei cavi, visto che non serve scavare?",
   "risposta": "Perché la loro capacità totale è molto più bassa di quella dei cavi in fibra, i geostazionari hanno latenza alta e i satelliti costano, durano pochi anni e vanno sostituiti."
  },
  {
   "tipo": "tabella",
   "titolo": "Il confronto (valori indicativi)",
   "righe": [
    [
     "Tecnologia",
     "Ultimo tratto",
     "Download",
     "Latenza"
    ],
    [
     "Linea commutata (’90)",
     "doppino, come voce",
     "56 kbps",
     "alta"
    ],
    [
     "ADSL",
     "doppino, frequenze alte",
     "fino a 20 Mbps",
     "20–40 ms"
    ],
    [
     "FTTC (VDSL)",
     "fibra + doppino",
     "30–200 Mbps",
     "10–20 ms"
    ],
    [
     "FTTH",
     "fibra fino in casa",
     "1–10 Gbps",
     "5–10 ms"
    ],
    [
     "Satellite LEO",
     "onde radio",
     "100–250 Mbps",
     "25–60 ms"
    ],
    [
     "Satellite geostazionario",
     "onde radio, 36.000 km",
     "decine di Mbps",
     "600 ms e oltre"
    ],
    [
     "4G / 5G",
     "onde radio dalla cella",
     "decine–centinaia Mbps / oltre 1 Gbps",
     "30–50 / 10–20 ms"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "La gara dei download",
   "id": "f-gara"
  },
  {
   "tipo": "punti",
   "titolo": "Cavo e onda radio convivono",
   "punti": [
    [
     "cable",
     "Il **cavo** vince per velocità, stabilità e sicurezza"
    ],
    [
     "wifi",
     "L’**onda radio** vince per comodità e mobilità"
    ],
    [
     "building-2",
     "La fibra porta i dati all’edificio, il Wi-Fi li distribuisce nelle stanze"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Il wireless è il mezzo del futuro: prima o poi i cavi spariranno.»",
   "si": "Anche quando il telefono è “senza fili”, **dopo l’antenna i dati viaggiano quasi sempre in fibra**. Le onde radio condividono un’aria affollata e si fermano contro gli ostacoli: i cavi restano la spina dorsale della rete."
  },
  {
   "tipo": "sezione",
   "num": "1.4",
   "titolo": "I modi di trasmissione",
   "sotto": "Chi trasmette, in che direzione, quando",
   "foto": {
    "src": "https://images.unsplash.com/photo-1501290301209-7a0323622985?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Tre modi di usare un canale",
   "tessere": [
    [
     "move-right",
     "Simplex",
     "una sola direzione · radio FM, TV, sensore"
    ],
    [
     "arrow-left-right",
     "Half-duplex",
     "due direzioni **a turno** · walkie-talkie, hub"
    ],
    [
     "repeat",
     "Full-duplex",
     "due direzioni **insieme** · telefonata, switch"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Simplex, half-duplex, full-duplex",
   "id": "f-modi"
  },
  {
   "tipo": "domanda",
   "testo": "Una lezione in cui solo il professore parla è simplex, half-duplex o full-duplex? E una discussione in classe con alzata di mano?",
   "risposta": "La lezione frontale è (quasi) simplex; la discussione con alzata di mano è half-duplex, perché si parla a turno."
  },
  {
   "tipo": "confronto",
   "titolo": "Sincrona o asincrona?",
   "a": {
    "icona": "clock",
    "titolo": "Sincrona",
    "righe": [
     "• presenti **nello stesso momento**",
     "• telefonata, videochiamata",
     "• lezione in diretta su Meet"
    ]
   },
   "b": {
    "icona": "mail",
    "titolo": "Asincrona",
    "tono": "buono",
    "righe": [
     "• il messaggio **si legge più tardi**",
     "• email, compito su Classroom, commento a un post",
     "• WhatsApp: asincrono, usato quasi in diretta"
    ]
   },
   "verdetto": "Asincrono = qualcuno **conserva** il messaggio nel frattempo"
  },
  {
   "tipo": "errore",
   "no": "«Asincrono vuol dire lento.»",
   "si": "Asincrono vuol dire **senza bisogno di essere presenti insieme**: un messaggio WhatsApp arriva in un secondo, ma resta asincrono perché si può leggere anche il giorno dopo."
  },
  {
   "tipo": "domanda",
   "testo": "Una lezione registrata e caricata su Classroom è sincrona o asincrona? E un compito in classe online con un orario fissato?",
   "risposta": "La lezione registrata è asincrona, si guarda quando si vuole; il compito online con orario fissato è sincrono, perché tutti devono essere collegati nello stesso intervallo."
  },
  {
   "tipo": "sezione",
   "num": "1.5",
   "titolo": "Commutazione di circuito e di pacchetto",
   "sotto": "Come condividere gli stessi cavi",
   "foto": {
    "src": "https://images.unsplash.com/photo-1726594200589-4d0a4cc47bc3?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Commutazione di circuito",
   "punti": [
    [
     "link",
     "Prima di parlare si costruisce un **collegamento riservato**"
    ],
    [
     "lock",
     "Resta tuo **per tutta la conversazione**, anche nei silenzi"
    ],
    [
     "phone",
     "Così funzionava la **rete telefonica tradizionale**"
    ],
    [
     "circle-check",
     "**Qualità garantita**"
    ],
    [
     "circle-x",
     "**Spreco**: nessun altro può usarlo · se un tratto si guasta, cade"
    ]
   ],
   "foto": {
    "src": "https://www.lambtonmuseums.ca/en/lambton-heritage-museum/resources/Images/LHM-Exhibits/Women-of-Lambton/Women-at-Work/Telephone-Operators/Picture2-1024x683-----HighRes.jpg",
    "tit": "Centraliniste al lavoro",
    "alt": "Centraliniste al lavoro: ogni spinotto inserito a mano collegava due linee e creava un circuito riservato a una telefonata."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Commutazione di pacchetto",
   "punti": [
    [
     "package",
     "Dati divisi in **pacchetti**, ognuno con l’indirizzo"
    ],
    [
     "route",
     "Ognuno **viaggia per conto suo**: cavi condivisi istante per istante"
    ],
    [
     "list",
     "In coda nei nodi · all’arrivo **rimessi in ordine**"
    ],
    [
     "circle-check",
     "**Efficienza** e **robustezza** ai guasti"
    ],
    [
     "circle-x",
     "**Tempi non garantiti**: latenza variabile, jitter"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Circuito o pacchetti?",
   "id": "f-commutazione"
  },
  {
   "tipo": "confronto",
   "titolo": "Esempio: pullman o autobus di linea?",
   "a": {
    "icona": "bus",
    "titolo": "Pullman noleggiato",
    "righe": [
     "• posti **riservati** alla classe",
     "- metà possono restare **vuoti**"
    ],
    "piede": "circuito"
   },
   "b": {
    "icona": "bus",
    "titolo": "Autobus di linea",
    "tono": "buono",
    "righe": [
     "• mezzi **condivisi** con altri",
     "+ nessun posto inutilizzato",
     "• si arriva in momenti diversi"
    ],
    "piede": "pacchetti"
   },
   "verdetto": "Limite: un pacchetto può **perdersi** e va richiesto di nuovo (paragrafo 3.6)"
  },
  {
   "tipo": "storia",
   "titolo": "Due inventori, un’idea",
   "anno": "anni ’60",
   "icona": "history",
   "punti": [
    [
     "shield",
     "USA · **Paul Baran**: una rete che **sopravviva a un attacco nucleare**"
    ],
    [
     "network",
     "Inghilterra · **Donald Davies**: condividere i costosi collegamenti, nome **pacchetti**"
    ],
    [
     "globe",
     "Le idee confluiscono in **ARPANET**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Oggi anche la voce viaggia a pacchetti",
   "punti": [
    [
     "phone",
     "Chiamate WhatsApp e videochiamate"
    ],
    [
     "signal",
     "VoLTE del 4G e telefonia fissa VoIP"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Durante una videochiamata l’immagine a volte si blocca per un attimo, cosa che con il vecchio telefono di casa non succedeva. Perché?",
   "risposta": "Perché Internet usa la commutazione di pacchetto: nessuna linea è riservata, e se la rete è affollata i pacchetti aspettano in coda o si perdono. Il vecchio telefono aveva un circuito tutto per sé."
  }
 ]
};
