window.AULA = {
 "modulo": "Introduzione a informatica ed AI",
 "n": "03",
 "titolo": "L’IA nella vita di tutti i giorni",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "L’IA nella vita di tutti i giorni",
   "sotto": "Dove si incontra l’IA, che cosa sa fare e che cosa non è.",
   "indice": [
    [
     "3.1",
     "Una giornata piena di IA"
    ],
    [
     "3.2",
     "Riconoscere"
    ],
    [
     "3.3",
     "Capire e produrre linguaggio"
    ],
    [
     "3.4",
     "Prevedere e consigliare"
    ],
    [
     "3.5",
     "Giocare e decidere"
    ],
    [
     "3.6",
     "Creare"
    ],
    [
     "3.7",
     "Idee sbagliate sull’IA"
    ],
    [
     "3.8",
     "Un po’ di storia"
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
   "testo": "Quante volte avete usato un’IA stamattina, prima di arrivare a scuola?",
   "risposta": "Risposta istintiva: «nessuna, o al massimo ChatGPT». In realtà molte: sblocco del telefono, assistente vocale, navigatore, consigli dei video. Quasi tutte lavorano senza che ce ne accorgiamo."
  },
  {
   "tipo": "sezione",
   "num": "3.1",
   "titolo": "Una giornata piena di IA",
   "sotto": "In una giornata normale lavora per te, spesso di nascosto",
   "icona": "smartphone"
  },
  {
   "tipo": "anim",
   "titolo": "Una giornata piena di IA",
   "id": "f-giornata"
  },
  {
   "tipo": "foto",
   "titolo": "La mattina",
   "msg": "Tre momenti prima di arrivare a scuola",
   "foto": [
    {
     "src": "https://cdn.osxdaily.com/wp-content/uploads/2017/11/use-iphone-x-without-face-id.jpg",
     "tit": "Face ID: lo sblocco con il volto",
     "alt": "Face ID: lo sblocco con il volto. Di riconoscimento."
    },
    {
     "src": "https://i.pcmag.com/imagery/articles/02l1csH5Q0saE8idorcBLmM-27..v1637090084.jpg",
     "tit": "Siri: l’assistente vocale",
     "alt": "Siri: l’assistente vocale dell’iPhone. Di riconoscimento."
    },
    {
     "src": "https://images.indianexpress.com/2024/02/Google-Maps-Pixabay.jpg",
     "tit": "Google Maps: la navigazione",
     "alt": "Google Maps: la navigazione sul telefono. Di riconoscimento."
    }
   ]
  },
  {
   "tipo": "foto",
   "titolo": "A scuola e nel pomeriggio",
   "msg": "Traduzioni, video consigliati e volti riconosciuti",
   "foto": [
    {
     "src": "https://sm.pcmag.com/pcmag_uk/news/h/how-to-use/how-to-use-googles-translate-app_v5aj.jpg",
     "tit": "Google Traduttore",
     "alt": "Google Traduttore: l’app su smartphone. Di riconoscimento."
    },
    {
     "src": "https://assets.qz.com/media/fde6fa52af15a10b8ed69b6e33c2f4bc.jpg",
     "tit": "YouTube: i video consigliati",
     "alt": "YouTube: i video consigliati. Di riconoscimento."
    },
    {
     "src": "assets/immagini/ia-fotocamera-volti.jpg",
     "tit": "La fotocamera dello smartphone",
     "alt": "La fotocamera dello smartphone. Di riconoscimento."
    }
   ]
  },
  {
   "tipo": "foto",
   "titolo": "La sera",
   "msg": "Il filtro che butta via la posta indesiderata e il chatbot per i compiti",
   "foto": [
    {
     "src": "https://wips.plug.it/cips/tecnologia/cms/2020/02/gmail.jpg",
     "tit": "Gmail: la cartella Spam",
     "alt": "Gmail: la cartella Spam. Da guardare nei dettagli: osserva il pulsante «Empty spam now», cioè «Svuota spam»."
    },
    {
     "src": "https://images.macrumors.com/article-new/2023/05/chatgpt-for-iphone-feature.jpg",
     "tit": "ChatGPT: una conversazione",
     "alt": "ChatGPT: una conversazione sul telefono. Di riconoscimento."
    }
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Roomba, Tesla, qXR",
   "msg": "Tre esempi fuori dalla giornata di uno studente",
   "foto": [
    {
     "src": "https://vacuumwars.com/wp-content/uploads/2022/11/Vacuuming-Carpet-iRobot-Roomba-Combo-j7-1024x538.jpg",
     "tit": "Roomba: l’aspirapolvere robot",
     "alt": "Roomba: l’aspirapolvere robot al lavoro. Di riconoscimento."
    },
    {
     "src": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1078702682/ed8d8aa2-70bf-4793-8430-a8e2aaf69085/d45eb94a-b12c-4f80-b60d-1a62cd0034db/1920x1080/match/image.jpg",
     "tit": "Una Tesla in guida assistita",
     "alt": "Lo schermo di una Tesla in guida assistita, quando il sistema si chiamava Autopilot. Di riconoscimento."
    },
    {
     "src": "https://qure-website-images.s3.ap-south-1.amazonaws.com/Chest_X_ray_reporting_747c180b0e.webp",
     "tit": "qXR: una radiografia analizzata",
     "alt": "qXR: una radiografia del torace analizzata dal programma. Da guardare nei dettagli: osserva le zone segnalate sull’immagine."
    }
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.2",
   "titolo": "Riconoscere",
   "sotto": "Trasformare ciò che si vede o si sente in un’etichetta o in un testo",
   "icona": "scan-eye"
  },
  {
   "tipo": "tessere",
   "titolo": "Riconoscere",
   "msg": "L’IA trasforma ciò che vede o sente in un’etichetta o in un testo",
   "tessere": [
    [
     "scan-eye",
     "Immagini e volti",
     "Google Lens: «è un’orchidea»"
    ],
    [
     "music",
     "Suoni e musica",
     "Shazam: titolo e autore"
    ],
    [
     "mic",
     "La voce",
     "sottotitoli automatici: «la frase è questa»"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Riconoscere in tre app",
   "msg": "Una pianta, una canzone, una voce",
   "foto": [
    {
     "src": "assets/immagini/ia-google-lens-pianta.webp",
     "tit": "Google Lens: una pianta",
     "alt": "Google Lens: il riconoscimento di una pianta. Da guardare nei dettagli: osserva i risultati, cioè le piante simili che il sistema propone."
    },
    {
     "src": "https://i.pcmag.com/imagery/articles/04V5PM0Sr9b0FH0UQsEp8oU-1..v1569491633.png",
     "tit": "Shazam: una canzone",
     "alt": "Shazam: l’app mentre ascolta una canzone. Di riconoscimento."
    },
    {
     "src": "https://www.malaymail.com/uploads/imported_images/2021/2021-10/20211012_YouTube_Caption_Auto.jpg",
     "tit": "Sottotitoli automatici di YouTube",
     "alt": "I sottotitoli automatici di YouTube. Da guardare nei dettagli: osserva le parole scritte sotto il video."
    }
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.3",
   "titolo": "Capire e produrre linguaggio",
   "sotto": "L’IA non si limita a leggere le parole: le elabora",
   "icona": "languages"
  },
  {
   "tipo": "punti",
   "titolo": "Capire e produrre linguaggio",
   "msg": "Elabora le parole, non solo le legge",
   "punti": [
    [
     "captions",
     "**Trascrive** quello che si dice, anche in una videochiamata"
    ],
    [
     "languages",
     "**Traduce** un testo da una lingua all’altra"
    ],
    [
     "file-text",
     "**Riassume** una riunione in un testo da rileggere"
    ],
    [
     "message-circle",
     "**Risponde** a una domanda"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Sottotitoli e trascrizioni",
   "msg": "Il testo compare in tempo reale e una riunione diventa un riassunto",
   "foto": [
    {
     "src": "https://helios-i.mashable.com/imagery/articles/04WTqG8z5PopdwPJ81KEzyf/hero-image.fill.size_1248x702.v1632813606.png",
     "tit": "Google Meet: i sottotitoli in tempo reale",
     "alt": "Google Meet: i sottotitoli in tempo reale. Da guardare nei dettagli: osserva il testo sotto i volti."
    },
    {
     "src": "https://cdn.prod.website-files.com/61a05ff14c09ecacc06eec05/6936f366bc8bf574a26c413e_cover-how-to-transcribe-any-video-meetings-with-otter-ai.webp",
     "tit": "Otter.ai: la trascrizione di una riunione",
     "alt": "Otter.ai: la trascrizione di una riunione. Da guardare nei dettagli: osserva il testo accanto ai volti dei partecipanti."
    }
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Perché il linguaggio è difficile",
   "msg": "Per una macchina il significato dipende dal contesto",
   "punti": [
    [
     "quote",
     "Prendi la frase **«Ho visto Marco con il binocolo»**"
    ],
    [
     "circle-help",
     "Non si capisce **chi abbia il binocolo**"
    ],
    [
     "brain",
     "Una persona lo capisce solo da **ciò che sa della situazione**"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.4",
   "titolo": "Prevedere e consigliare",
   "sotto": "Da ciò che è già successo a ciò che succederà",
   "icona": "trending-up"
  },
  {
   "tipo": "punti",
   "titolo": "Prevedere e consigliare",
   "msg": "È una stima, non una certezza",
   "punti": [
    [
     "history",
     "Parte da **ciò che è già successo**: acquisti, video visti, dati del tempo"
    ],
    [
     "sparkles",
     "Stima **che cosa succederà** o che cosa ti piacerà"
    ],
    [
     "circle-x",
     "Per questo **ogni tanto sbaglia**"
    ]
   ],
   "foto": {
    "src": "https://cdn.prod.website-files.com/663e17fff238bd97b0a022cd/6645d94cef2950a240114cec_amazon-product-recommendations-homepage_600x600.jpeg",
    "tit": "Amazon: «Acquistati insieme di frequente»",
    "alt": "Amazon: i prodotti acquistati insieme. Da guardare nei dettagli: osserva i tre prodotti proposti insieme e il prezzo totale."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le app meteo",
   "msg": "Funzionano così anche loro",
   "punti": [
    [
     "cloud",
     "Usano i **modelli fisici dell’atmosfera**"
    ],
    [
     "cpu",
     "E in più **modelli di IA** per stimare il tempo delle prossime ore"
    ]
   ],
   "foto": {
    "src": "https://www.weathercompany.com/wp-content/uploads/2024/01/Hero-Max-Mobile-1.jpg",
    "tit": "Un’app meteo sul telefono",
    "alt": "Un’app meteo sul telefono. Di riconoscimento."
   }
  },
  {
   "tipo": "schema",
   "titolo": "L’antifrode della carta di pagamento",
   "sel": "#s-antifrode"
  },
  {
   "tipo": "sezione",
   "num": "3.5",
   "titolo": "Giocare e decidere",
   "sotto": "Provare le mosse in anticipo e scegliere la migliore",
   "icona": "swords"
  },
  {
   "tipo": "punti",
   "titolo": "Giocare e decidere",
   "msg": "L’IA prova le mosse in anticipo e sceglie quella dalle conseguenze migliori",
   "punti": [
    [
     "dices",
     "I giochi sono il **banco di prova ideale**: regole chiare e un vincitore"
    ],
    [
     "crown",
     "**Stockfish**, un programma di scacchi, non lo batte più nessun giocatore umano"
    ],
    [
     "smartphone",
     "Si può installare **sul telefono**"
    ]
   ],
   "foto": {
    "src": "https://stockfishchess.org/images/gui/lichess_gui.webp",
    "tit": "Stockfish: una partita analizzata",
    "alt": "Stockfish: una partita analizzata dal programma. Da guardare nei dettagli: osserva la scacchiera e le linee di analisi a lato."
   }
  },
  {
   "tipo": "anim",
   "titolo": "Il computer prova le mosse",
   "id": "f-tris"
  },
  {
   "tipo": "punti",
   "titolo": "Non solo giochi",
   "msg": "Anche una macchina in strada deve decidere",
   "punti": [
    [
     "car",
     "I taxi senza conducente di **Waymo** circolano in diverse città degli Stati Uniti"
    ],
    [
     "gauge",
     "Decidono di continuo **quando frenare, svoltare e dare la precedenza**"
    ]
   ],
   "foto": {
    "src": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioPF9z1qdBLI/v0/-1x-1.webp",
    "tit": "Waymo: un taxi senza conducente",
    "alt": "Waymo: un taxi senza conducente in strada. Di riconoscimento."
   }
  },
  {
   "tipo": "sezione",
   "num": "3.6",
   "titolo": "Creare",
   "sotto": "Dalla richiesta scritta a un contenuto nuovo",
   "icona": "wand-sparkles"
  },
  {
   "tipo": "punti",
   "titolo": "Creare",
   "msg": "L’IA generativa produce un contenuto nuovo invece di cercarne uno esistente",
   "punti": [
    [
     "pen-line",
     "Parte da una **richiesta scritta**"
    ],
    [
     "music",
     "Su **Suno** «una canzone jazz sull’annaffiare le piante» diventa una canzone che nessuno aveva mai scritto"
    ],
    [
     "message-circle",
     "Lo stesso vale per i **testi**, come le risposte del chatbot"
    ]
   ],
   "foto": {
    "src": "https://static-lib.s3.amazonaws.com/cms/suno_496a093af5.jpg",
    "tit": "Suno: la richiesta scritta",
    "alt": "Suno: la pagina in cui si scrive la richiesta. Da guardare nei dettagli: osserva la frase di esempio nella casella di testo."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Midjourney",
   "msg": "Immagini a partire da una descrizione",
   "punti": [
    [
     "pen-line",
     "Scrivi **che cosa vuoi vedere**"
    ],
    [
     "image",
     "Il sistema produce **quattro immagini nuove**"
    ]
   ],
   "foto": {
    "src": "https://www.alphr.com/wp-content/uploads/2022/09/midjourney6.png",
    "tit": "Midjourney: richiesta e immagini",
    "alt": "Midjourney: la richiesta e le immagini prodotte. Da guardare nei dettagli: osserva la descrizione scritta e le quattro immagini ottenute."
   }
  },
  {
   "tipo": "sezione",
   "num": "3.7",
   "titolo": "Idee sbagliate sull’IA",
   "sotto": "Che cosa l’IA non è",
   "icona": "circle-help"
  },
  {
   "tipo": "domanda",
   "testo": "Un braccio robotico in fabbrica salda tutto il giorno gli stessi movimenti: è un’IA?",
   "risposta": "Risposta istintiva: «sì, è un robot, quindi ha un’IA». No: ripete movimenti decisi da una persona, senza riconoscere né decidere nulla. Un robot può non avere nessuna IA, e quasi tutte le IA di questo capitolo sono programmi senza corpo."
  },
  {
   "tipo": "widget",
   "titolo": "È IA o non è IA?",
   "w": "iaonon"
  },
  {
   "tipo": "tessere",
   "titolo": "Tre idee sbagliate",
   "msg": "Che cosa l’IA non è",
   "tessere": [
    [
     "bot",
     "Non è un robot",
     "il robot è una macchina con un corpo; l’IA è un programma"
    ],
    [
     "brain",
     "Non è un cervello",
     "può svolgere i compiti in modo meccanico, seguendo ordini precisi"
    ],
    [
     "circle-help",
     "Non sa tutto",
     "è brava in un compito e sbaglia fuori da quello"
    ]
   ],
   "nota": "Face ID non sa tradurre e Stockfish non sa riconoscere un volto."
  },
  {
   "tipo": "errore",
   "no": "«L’IA è un robot che pensa come noi.»",
   "si": "Un robot è una **macchina con un corpo**, l’IA è un **programma**: quasi sempre vive in un telefono o in un sito, e non c’è nessuna prova che «pensi» come una persona."
  },
  {
   "tipo": "errore",
   "no": "«Un chatbot sa tutto perché è collegato a internet.»",
   "si": "Un chatbot **può sbagliare anche quando risponde con sicurezza**: scrive la risposta che gli sembra più probabile, non controlla un archivio di verità."
  },
  {
   "tipo": "sezione",
   "num": "3.8",
   "titolo": "Un po’ di storia",
   "sotto": "Dagli automi a ChatGPT, tra inverni e primavere dell’IA",
   "icona": "hourglass"
  },
  {
   "tipo": "domanda",
   "testo": "Quando è nata l’IA? E il primo chatbot? E il primo veicolo a guida autonoma? Quando l’IA è diventata di dominio pubblico?",
   "risposta": "L’IA nasce nel 1956, con la conferenza di Dartmouth. Il primo chatbot, ELIZA, è del 1966; i primi veicoli a guida autonoma sono degli anni Ottanta, per esempio il furgone Mercedes del 1986. Il grande pubblico ne sente parlare nel 1997, quando Deep Blue batte il campione del mondo di scacchi Garry Kasparov; dal 2022, con i chatbot, chiunque può usarla direttamente scrivendo una frase."
  },
  {
   "tipo": "sezione",
   "num": "3.8.1",
   "titolo": "Le origini",
   "sotto": "Dagli automi al nome «intelligenza artificiale»",
   "icona": "hourglass"
  },
  {
   "tipo": "punti",
   "titolo": "Gli automi",
   "msg": "Dal Seicento all’Ottocento, macchine che imitano i gesti di una persona",
   "punti": [
    [
     "cog",
     "Per secoli si sono costruiti **automi**"
    ],
    [
     "hand",
     "Imitano i gesti di una persona, di solito **per spettacolo**"
    ],
    [
     "pen-tool",
     "Orologiai e artigiani facevano **scrivere, suonare o disegnare** piccole figure meccaniche"
    ]
   ],
   "foto": {
    "src": "https://www.thisiscolossal.com/wp-content/uploads/2013/11/boy-1.jpg",
    "tit": "Un automa del Settecento",
    "alt": "Un automa del Settecento: una figura meccanica che imita un gesto umano. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Il Turco meccanico",
   "msg": "Non era un’IA: era un inganno",
   "punti": [
    [
     "calendar",
     "Mostrato nel **1770** da Wolfgang von Kempelen"
    ],
    [
     "crown",
     "Sembrava **giocare a scacchi da solo**"
    ],
    [
     "user",
     "I pezzi erano mossi da **un maestro di scacchi nascosto dentro la macchina**"
    ],
    [
     "paw-print",
     "Per decenni la gente ci credette, come con il cavallo Hans (capitolo 4); fu distrutto da un incendio nel 1854"
    ]
   ],
   "foto": {
    "src": "https://www.worldhistory.org/img/c/p/1200x627/20947.png.webp",
    "tit": "Il Turco meccanico",
    "alt": "Il Turco meccanico: il disegno mostra dove si nascondeva il giocatore. Da guardare nei dettagli: osserva lo spazio dentro il mobile."
   }
  },
  {
   "tipo": "storia",
   "titolo": "Il primo neurone artificiale",
   "anno": "1943",
   "icona": "brain",
   "punti": [
    [
     "users",
     "Il neurofisiologo **Warren McCulloch** e il matematico **Walter Pitts**"
    ],
    [
     "brain",
     "Il **primo modello matematico di neurone artificiale**: riceve segnali, li somma e decide se «accendersi»"
    ],
    [
     "network",
     "È l’**antenato delle reti neurali**"
    ],
    [
     "sliders-horizontal",
     "Il **percettrone**, che regola da solo i propri valori imparando dagli esempi, arriva con Frank Rosenblatt (1957)"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Il neurone di McCulloch e Pitts",
   "msg": "Osserva gli ingressi a sinistra e l’uscita a destra",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mcculloch-pitts-neuron-model.png",
     "tit": "Gli ingressi, la somma, una soglia e un’uscita",
     "alt": "Il neurone di McCulloch e Pitts: due ingressi, una soglia e un’uscita che vale 0 o 1. Da guardare nei dettagli: osserva gli ingressi a sinistra e l’uscita a destra."
    }
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Turing",
   "anno": "1950",
   "icona": "messages-square",
   "punti": [
    [
     "book-open",
     "**Alan Turing** pubblica «Computing Machinery and Intelligence»"
    ],
    [
     "gamepad-2",
     "Propone il **gioco dell’imitazione**, poi chiamato test di Turing (capitolo 4)"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Dartmouth: nasce il nome",
   "anno": "1956",
   "foto": {
    "src": "http://media.wired.com/photos/59327c782a990b06268ab0b1/master/pass/john-mccarthy.png",
    "tit": "John McCarthy",
    "alt": "John McCarthy, che inventò il termine «intelligenza artificiale» per la conferenza di Dartmouth del 1956. Di riconoscimento."
   },
   "punti": [
    [
     "graduation-cap",
     "Conferenza estiva al **Dartmouth College**, negli Stati Uniti"
    ],
    [
     "users",
     "Ricercatori come McCarthy, Minsky, Rochester e Shannon decidono di studiare come costruire **macchine che simulino l’intelligenza**"
    ],
    [
     "quote",
     "**Il termine «intelligenza artificiale» è di John McCarthy**"
    ],
    [
     "flag",
     "Da quel momento nasce la **disciplina**"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Alla conferenza di Dartmouth",
   "msg": "Alcuni partecipanti, estate 1956",
   "foto": [
    {
     "src": "https://macloo.github.io/ai-timeline/images/Dartmouth-1956-Conference_CROPPED.jpg",
     "tit": "Alcuni partecipanti alla conferenza di Dartmouth",
     "alt": "Alcuni partecipanti alla conferenza di Dartmouth del 1956. Di riconoscimento."
    }
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.8.2",
   "titolo": "Le prime IA",
   "sotto": "Parole, reti piccole e il primo chatbot",
   "icona": "message-circle"
  },
  {
   "tipo": "storia",
   "titolo": "Il riconoscimento vocale",
   "anno": "1952–1962",
   "foto": {
    "src": "https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/arc/cf/ul/g/b3/8c/1961_IBM_Shoebox_Speech_Translation.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
    "tit": "IBM Shoebox",
    "alt": "IBM Shoebox: la macchina che riconosceva 16 parole pronunciate. Di riconoscimento."
   },
   "punti": [
    [
     "mic",
     "**Audrey** (1952, Bell Labs) capisce solo le **cifre da 0 a 9**, pronunciate da una voce sola"
    ],
    [
     "package",
     "L’**IBM Shoebox** (sviluppato nel 1961, mostrato nel 1962) riconosce **16 parole**: dieci cifre e sei comandi"
    ],
    [
     "calculator",
     "Con i comandi aziona una macchina per **sommare**"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "La prima rete neurale funzionante",
   "anno": "1965",
   "foto": {
    "src": "https://esu.com.ua/images/article_images/I/Ivahnenko%20Oleksiy%20Grigorovich2.jpg",
    "tit": "Alexey Ivakhnenko",
    "alt": "Alexey Ivakhnenko, che nel 1965 creò la prima rete neurale a più livelli funzionante. Di riconoscimento."
   },
   "punti": [
    [
     "users",
     "Il matematico **Alexey Ivakhnenko**, con Valentin Lapa"
    ],
    [
     "layers",
     "Mette a punto il primo metodo funzionante per far imparare una rete a **più livelli**"
    ],
    [
     "sparkles",
     "Per molti è la prima rete di **deep learning**, piccola ma funzionante"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "ELIZA, il primo chatbot",
   "anno": "1966",
   "foto": {
    "src": "https://assets.mitmuseum.mit.edu/iiifimg3/67149759/full/800,/0/default.jpg",
    "tit": "Joseph Weizenbaum",
    "alt": "Joseph Weizenbaum, l’autore di ELIZA. Di riconoscimento."
   },
   "punti": [
    [
     "graduation-cap",
     "Scritto al **MIT** da **Joseph Weizenbaum**: il primo chatbot della storia"
    ],
    [
     "replace",
     "Sostituisce parole con poche **regole scritte da una persona**"
    ],
    [
     "message-square",
     "«Mi sento triste» → «perché ti senti triste?»"
    ],
    [
     "circle-help",
     "Molti erano convinti che capisse davvero: **sembrare intelligente non è esserlo** (capitolo 4)"
    ]
   ]
  },
  {
   "tipo": "foto",
   "titolo": "Una conversazione con ELIZA",
   "msg": "Le risposte riprendono le parole dell’utente",
   "foto": [
    {
     "src": "https://upload.wikimedia.org/wikipedia/commons/7/79/ELIZA_conversation.png",
     "tit": "Una conversazione con ELIZA",
     "alt": "Una conversazione con ELIZA. Da guardare nei dettagli: osserva come le risposte riprendono le parole dell’utente."
    }
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova: parla con ELIZA",
   "w": "eliza"
  },
  {
   "tipo": "punti",
   "titolo": "I sistemi esperti",
   "msg": "Anni Settanta e Ottanta: regole scritte da specialisti",
   "punti": [
    [
     "stethoscope",
     "Programmi con le **regole scritte da specialisti**, per esempio medici"
    ],
    [
     "message-circle",
     "Danno consigli **in un campo preciso**"
    ],
    [
     "route",
     "Diventano la **strada principale** dell’IA"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.8.3",
   "titolo": "Alti e bassi",
   "sotto": "Ondate di entusiasmo e inverni",
   "icona": "trending-up"
  },
  {
   "tipo": "punti",
   "titolo": "Gli inverni dell’IA",
   "msg": "Grandi promesse, poi delusioni, poi nuove speranze",
   "punti": [
    [
     "snowflake",
     "Le fasi di delusione: i finanziamenti si **congelano** e l’interesse svanisce"
    ],
    [
     "calendar",
     "**Primo inverno (1974–1980)**: le promesse non si realizzano; un rapporto critico in Gran Bretagna (1973) e i tagli negli Stati Uniti"
    ],
    [
     "trending-up",
     "Negli anni Ottanta i **sistemi esperti** riaccendono le speranze"
    ],
    [
     "calendar",
     "**Secondo inverno (1987–1993)**: costano troppo da mantenere e il mercato crolla nel 1987"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Dal 1950 a oggi",
   "id": "f-ondate"
  },
  {
   "tipo": "punti",
   "titolo": "Le cause",
   "msg": "Perché la storia procede a ondate",
   "punti": [
    [
     "megaphone",
     "**Promesse esagerate**"
    ],
    [
     "cpu",
     "Computer ancora **poco potenti**"
    ],
    [
     "database",
     "**Pochi dati** da cui imparare"
    ],
    [
     "file-text",
     "Per i sistemi esperti, **regole scritte a mano** costose da mantenere (capitolo 5)"
    ],
    [
     "graduation-cap",
     "La svolta: i mezzi per far **imparare i sistemi dagli esempi**"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.8.4",
   "titolo": "Dalle sfide simbolo a oggi",
   "sotto": "Giochi, quiz e guida autonoma",
   "icona": "trophy"
  },
  {
   "tipo": "punti",
   "titolo": "Le sfide simbolo",
   "msg": "Prove chiare, con un vincitore",
   "punti": [
    [
     "trophy",
     "Giochi e quiz diventano le **sfide simbolo**"
    ],
    [
     "scale",
     "Servono a misurare **quanto una macchina sia brava**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Uno dei primi veicoli a guida autonoma",
   "msg": "1986 · Un furgone che guida da solo",
   "foto": {
    "src": "https://dyna-vision.de/wp-content/uploads/2021/03/A367image002.jpg",
    "tit": "Il furgone di Dickmanns (VaMoRs)",
    "alt": "Il furgone Mercedes sperimentale di Dickmanns (VaMoRs). Di riconoscimento."
   },
   "punti": [
    [
     "truck",
     "In Germania **Ernst Dickmanns** equipaggia un furgone Mercedes-Benz con telecamere e computer"
    ],
    [
     "gauge",
     "Nel 1986 guida da solo; nel 1987 percorre un tratto di autostrada vuota a **96 km/h**"
    ],
    [
     "globe",
     "Non fu l’unico: nel 1977 in Giappone un veicolo con telecamere andava a circa 30 km/h su un percorso preparato"
    ],
    [
     "circle-help",
     "«Il primo» dipende da che cosa si intende; Dickmanns è il **pioniere ad alta velocità**"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "Deep Blue batte Kasparov",
   "anno": "1997",
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/b/be/Deep_Blue.jpg",
    "tit": "Deep Blue",
    "alt": "Garry Kasparov alla scacchiera contro Deep Blue, nel 1997. Di riconoscimento."
   },
   "punti": [
    [
     "crown",
     "Il computer **Deep Blue** di IBM batte il campione del mondo **Garry Kasparov** per 3,5 a 2,5"
    ],
    [
     "newspaper",
     "La prima volta in un match: la notizia fa il giro del mondo"
    ],
    [
     "cpu",
     "Funziona con **regole scritte da programmatori** e un calcolo velocissimo: moltissime mosse al secondo"
    ],
    [
     "target",
     "Più «intelligente» di un uomo, ma **in un compito solo**: è un’IA specializzata (capitolo 5)"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Watson vince a Jeopardy!",
   "msg": "2011 · Un sistema di IBM risponde a domande",
   "foto": {
    "src": "https://i.ytimg.com/vi/YgYSv2KSyWg/maxresdefault.jpg",
    "tit": "Watson a Jeopardy!",
    "alt": "Watson alla sfida di Jeopardy! tra i due campioni umani. Di riconoscimento."
   },
   "punti": [
    [
     "message-circle-question",
     "**Watson**, un sistema di IBM, risponde a domande in linguaggio naturale"
    ],
    [
     "trophy",
     "Batte due campioni del quiz televisivo americano **Jeopardy!**"
    ],
    [
     "calendar",
     "In tre puntate: il 14, 15 e 16 febbraio 2011"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "AlphaGo batte Lee Sedol",
   "msg": "2016 · Un programma che ha imparato dagli esempi",
   "foto": {
    "src": "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnature.2016.19575/MediaObjects/41586_2016_Article_BFnature201619575_Figb_HTML.jpg",
    "tit": "AlphaGo contro Lee Sedol",
    "alt": "La sfida tra AlphaGo e Lee Sedol a Seoul, nel 2016. Di riconoscimento."
   },
   "punti": [
    [
     "trophy",
     "Il programma **AlphaGo** di DeepMind batte il campione di **Go** Lee Sedol per 4 a 1, a Seoul, a marzo"
    ],
    [
     "graduation-cap",
     "A differenza di Deep Blue **ha imparato dagli esempi**"
    ],
    [
     "swords",
     "Ha guardato partite di esperti umani e poi **ne ha giocate milioni contro se stesso**"
    ]
   ]
  },
  {
   "tipo": "storia",
   "titolo": "I chatbot per tutti",
   "anno": "2022",
   "icona": "message-circle",
   "punti": [
    [
     "calendar",
     "Il **30 novembre 2022** esce **ChatGPT**, un chatbot gratuito e facile da usare"
    ],
    [
     "users",
     "In due mesi arriva a circa **100 milioni di utenti** (stima della banca UBS)"
    ],
    [
     "sparkles",
     "Per la prima volta un’**IA generativa** è alla portata di chiunque: basta scrivere una frase"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.8.5",
   "titolo": "Perché è esplosa proprio ora",
   "sotto": "Le condizioni giuste, arrivate insieme",
   "icona": "rocket"
  },
  {
   "tipo": "punti",
   "titolo": "Perché proprio ora",
   "msg": "Le idee c’erano da decenni: servivano le condizioni giuste",
   "punti": [
    [
     "cpu",
     "**Più potenza di calcolo**"
    ],
    [
     "database",
     "**Esplosione dei Big Data**"
    ],
    [
     "brain",
     "**Modelli di machine learning migliori**"
    ],
    [
     "cloud",
     "**Archiviazione in cloud** a basso costo"
    ],
    [
     "banknote",
     "**Grandi investimenti**"
    ],
    [
     "users",
     "**Popolarità crescente**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Potenza di calcolo",
   "msg": "Le schede grafiche calcolano moltissime operazioni in parallelo",
   "punti": [
    [
     "gauge",
     "I computer sono diventati molto più veloci, soprattutto grazie alle **schede grafiche** (GPU)"
    ],
    [
     "trophy",
     "Nel **2012** la rete **AlexNet** vince la gara ImageNet di riconoscimento delle immagini **con un enorme distacco**"
    ],
    [
     "gamepad-2",
     "Fu addestrata su **due schede grafiche da gioco**"
    ]
   ],
   "foto": {
    "src": "https://cdn.mos.cms.futurecdn.net/849b7e2a8252e98ad1bd200159a2471a.jpg",
    "tit": "Una scheda grafica GeForce GTX 580",
    "alt": "Una scheda grafica GeForce GTX 580, come quelle su cui fu addestrato AlexNet. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Dati, modelli e cloud",
   "msg": "Esempi da cui imparare, metodi migliori, spazio per conservarli",
   "punti": [
    [
     "smartphone",
     "**Big Data**: Internet e smartphone producono ogni giorno foto, testi e voci in quantità immensa; per ImageNet servirono milioni di immagini"
    ],
    [
     "layers",
     "**Modelli migliori**: il deep learning è molto più bravo dei metodi precedenti con immagini, voce e linguaggio"
    ],
    [
     "cloud",
     "**Cloud**: conservare e condividere enormi quantità di dati costa sempre meno"
    ]
   ],
   "foto": {
    "src": "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "tit": "Un centro dati",
    "alt": "Un centro dati, dove si conservano e si elaborano i dati nel cloud. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Investimenti e popolarità",
   "msg": "Un circolo vizioso, in senso buono",
   "punti": [
    [
     "banknote",
     "Aziende e Stati investono somme enormi, anche nell’IA **aperta** (*open source*), i cui modelli sono condivisi"
    ],
    [
     "users",
     "Più l’IA funziona, più persone la usano e più si investe"
    ],
    [
     "rocket",
     "**ChatGPT**, nel 2022, è il punto in cui il circolo diventa visibile a tutti"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "La combinazione",
   "msg": "Nessun fattore da solo basta",
   "punti": [
    [
     "puzzle",
     "È **la combinazione** che ha fatto esplodere l’IA"
    ],
    [
     "trending-up",
     "La curva di «Alti e bassi» mostra proprio **questa impennata**"
    ]
   ]
  }
 ]
};
