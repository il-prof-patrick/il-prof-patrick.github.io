window.AULA = {
 "modulo": "Logica e IA simbolica",
 "n": "01",
 "titolo": "Macchine che ragionano: che cos'è la logica",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Macchine che ragionano: che cos'è la logica",
   "sotto": "Le macchine che decidono con le regole, il ragionamento che c’è dietro e perché serve un linguaggio senza ambiguità.",
   "indice": [
    [
     "1.1",
     "Macchine che seguono regole"
    ],
    [
     "1.2",
     "Ragionare e argomentare"
    ],
    [
     "1.3",
     "Validità e verità"
    ],
    [
     "1.4",
     "Dal linguaggio naturale al linguaggio formale"
    ]
   ],
   "foto": {
    "src": "../../../assets/immagini/modulo-logica-ai.jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "sezione",
   "num": "1.1",
   "titolo": "Macchine che seguono regole",
   "sotto": "Dietro una casa che «decide» c’è una regola scritta da una persona",
   "icona": "house"
  },
  {
   "tipo": "domanda",
   "testo": "Un programma decide se bloccare la vostra carta seguendo 200 regole scritte da esperti di frodi. È intelligenza artificiale?",
   "risposta": "sì. È IA simbolica: una macchina che prende decisioni da esperto applicando conoscenza scritta in forma di regole. Non serve che impari da sola per essere IA."
  },
  {
   "tipo": "punti",
   "titolo": "Una luce che si accende da sola",
   "msg": "L’app della casa applica una regola scritta da una persona",
   "punti": [
    [
     "moon",
     "Entri in casa la sera e la luce **si accende da sola**"
    ],
    [
     "hand",
     "Nessuno ha premuto un interruttore"
    ],
    [
     "scroll-text",
     "La regola: **se è sera e c’è qualcuno in casa, accendi le luci**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Una regola in un’app per la casa",
   "msg": "Due condizioni sotto *If*, un’azione sotto *Then*",
   "punti": [
    [
     "clock",
     "*If*: sono **le 6**"
    ],
    [
     "droplets",
     "**e** il terreno ha **meno del 50% di umidità**"
    ],
    [
     "sprout",
     "*Then*: **annaffia per 15 minuti**"
    ]
   ],
   "foto": {
    "src": "https://www.holmanindustries.com.au/Holman-Home/Scene/WX1/Ex4_Point26.png#intera",
    "tit": "Una regola in un’app per la casa",
    "alt": "Una regola in un'app per la casa"
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Regole ovunque",
   "msg": "Condizioni collegate ad azioni",
   "tessere": [
    [
     "house",
     "Casa",
     "app come IFTTT («se questo allora quello»): luci, riscaldamento, irrigazione"
    ],
    [
     "credit-card",
     "Banca",
     "pagamento all’estero pochi minuti dopo uno in Italia: carta bloccata"
    ],
    [
     "car",
     "Auto",
     "pressione dell’olio sotto la soglia: si accende la spia"
    ],
    [
     "gamepad-2",
     "Videogiochi",
     "i personaggi del computer si muovono seguendo regole"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "I fantasmi di Pac-Man",
   "msg": "Il gioco di squadra nasce da regole semplici",
   "punti": [
    [
     "target",
     "Il **rosso** punta alla casella di Pac-Man"
    ],
    [
     "move-right",
     "Il **rosa** punta 4 caselle davanti a lui, per tagliargli la strada"
    ],
    [
     "calculator",
     "L’**azzurro** usa la posizione di Pac-Man e quella del rosso"
    ],
    [
     "undo-2",
     "L’**arancione** insegue da lontano, ma vicino torna nel suo angolo"
    ],
    [
     "users",
     "Nessuno «pensa» né sa degli altri: **la squadra nasce dalle regole**"
    ]
   ],
   "foto": {
    "src": "https://www.techspot.com/images2/trivia/bigimage/2024/2024-12-16-image.jpg",
    "tit": "Pac-Man (1980)",
    "alt": "Pac-Man (1980)"
   }
  },
  {
   "tipo": "tessere",
   "titolo": "Fatti e regole",
   "msg": "I due ingredienti di ogni sistema a regole",
   "tessere": [
    [
     "database",
     "Fatti",
     "**ciò che il sistema sa** ora: sono le 19, fuori è buio, Marco è in casa. Arrivano da sensori, dati o da chi usa il sistema"
    ],
    [
     "scroll-text",
     "Regole",
     "frasi **SE condizioni ALLORA conclusione**, scritte da chi conosce il problema: l’esperto di frodi, il programmatore del gioco"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il ragionamento a catena",
   "msg": "La conclusione diventa un fatto nuovo",
   "punti": [
    [
     "circle-check",
     "Quando **tutte le condizioni sono vere**, la regola «scatta»"
    ],
    [
     "plus",
     "La sua conclusione **si aggiunge ai fatti**"
    ],
    [
     "link",
     "Il fatto nuovo può **far scattare altre regole**"
    ],
    [
     "circle-x",
     "Se manca anche un solo fatto, la regola non scatta: **il sistema non indovina**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "La casa che ragiona",
   "id": "f-casa"
  },
  {
   "tipo": "errore",
   "no": "«La casa accende la luce perché capisce che è buio e che serve.»",
   "si": "La casa non capisce nulla: **controlla se i fatti che ha soddisfano le condizioni di una regola** che qualcuno ha scritto. Se la regola fosse sbagliata (per esempio senza la condizione «c’è qualcuno in casa»), accenderebbe la luce anche in una casa vuota, senza accorgersene."
  },
  {
   "tipo": "punti",
   "titolo": "L’IA simbolica",
   "msg": "Le persone scrivono la conoscenza, la macchina la applica",
   "punti": [
    [
     "pen-line",
     "La conoscenza la scrivono le persone, come **fatti e regole**"
    ],
    [
     "shapes",
     "**Simboli**: parole o segni che stanno per cose del mondo («buio», «Marco»)"
    ],
    [
     "history",
     "**GOFAI**, *Good Old-Fashioned AI*: il primo modo di fare IA, dagli anni Cinquanta"
    ],
    [
     "scale",
     "Per scrivere fatti e regole **senza ambiguità** serve la **logica**"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "1.2",
   "titolo": "Ragionare e argomentare",
   "sotto": "Ricavare una conclusione da premesse date per buone",
   "icona": "brain"
  },
  {
   "tipo": "punti",
   "titolo": "Il ragionamento della casa",
   "msg": "Scritto per esteso: premesse sopra, conclusione sotto",
   "punti": [
    [
     "scroll-text",
     "Se è sera e fuori è buio, allora serve la luce"
    ],
    [
     "database",
     "È sera e fuori è buio"
    ],
    [
     "arrow-down",
     "**Quindi serve la luce**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Ragionare",
   "msg": "Ricavare una conclusione da informazioni date per buone",
   "punti": [
    [
     "list",
     "Le informazioni di partenza sono le **premesse**"
    ],
    [
     "flag",
     "Quella ricavata è la **conclusione**"
    ],
    [
     "package",
     "Insieme formano un **argomento**: non il «tema», ma premesse più conclusione"
    ],
    [
     "arrow-right",
     "Il passaggio dalle premesse alla conclusione è l’**inferenza**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Le parole-spia",
   "msg": "Come si riconoscono premesse e conclusione",
   "tessere": [
    [
     "flag",
     "Conclusione",
     "«quindi», «perciò», «dunque»"
    ],
    [
     "list",
     "Premessa",
     "«perché», «dato che», «poiché»"
    ],
    [
     "rows-3",
     "In logica",
     "premesse sopra, una riga, conclusione sotto"
    ]
   ],
   "nota": "La logica studia quando una conclusione segue davvero dalle premesse, chiunque ragioni: persona o macchina."
  },
  {
   "tipo": "schema",
   "titolo": "Tre argomenti, una stessa forma",
   "sel": "#s-argomenti"
  },
  {
   "tipo": "punti",
   "titolo": "Aristotele e il sillogismo",
   "msg": "Il primo a studiare la forma dei ragionamenti (384–322 a.C.)",
   "punti": [
    [
     "scroll",
     "Studia per primo **la forma dei ragionamenti** (*Organon*)"
    ],
    [
     "git-merge",
     "Il **sillogismo**: due premesse e una conclusione"
    ],
    [
     "quote",
     "«Socrate è mortale» non è suo, ma dei suoi commentatori"
    ],
    [
     "hourglass",
     "La sua logica resta la base **per più di duemila anni**"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
    "tit": "Aristotele",
    "alt": "Aristotele"
   }
  },
  {
   "tipo": "sezione",
   "num": "1.3",
   "titolo": "Validità e verità",
   "sotto": "La validità dipende dalla forma, non dal contenuto",
   "icona": "scale"
  },
  {
   "tipo": "punti",
   "titolo": "Due modi di sbagliare",
   "msg": "Un argomento può andare storto per due motivi",
   "punti": [
    [
     "circle-x",
     "**Una premessa è falsa**: il sensore sbaglia, la notizia è inventata"
    ],
    [
     "unlink",
     "**La conclusione non segue** dalle premesse, anche se sono vere"
    ],
    [
     "scale",
     "La logica si occupa **del secondo**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Valido e corretto",
   "msg": "La verità delle premesse passa per forza alla conclusione",
   "tessere": [
    [
     "shapes",
     "Valido",
     "è **impossibile** che le premesse siano vere e la conclusione falsa"
    ],
    [
     "circle-check",
     "Corretto (o fondato)",
     "è **valido e** ha le premesse **vere**: la conclusione è **sicuramente vera**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Conta la forma",
   "msg": "Per questo la validità la controlla anche una macchina",
   "punti": [
    [
     "shapes",
     "«Tutti gli A sono B; x è un A; quindi x è un B»"
    ],
    [
     "repeat",
     "È valido **qualunque cosa** si metta al posto di A, B e x"
    ],
    [
     "cpu",
     "Non serve sapere niente del mondo: **lo può controllare una macchina**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Tutti i pesci sanno volare. Bolla è un pesce. Quindi Bolla sa volare. Il ragionamento è corretto?",
   "risposta": "il ragionamento è valido: se le premesse fossero vere, la conclusione lo sarebbe per forza. A essere falsa è la prima premessa, quindi l’argomento è valido ma non corretto."
  },
  {
   "tipo": "anim",
   "titolo": "Lo stampo del ragionamento",
   "id": "f-stampo"
  },
  {
   "tipo": "punti",
   "titolo": "*Garbage in, garbage out*",
   "msg": "Una macchina che ragiona bene non si accorge delle premesse false",
   "punti": [
    [
     "cat",
     "Il sensore scambia **il gatto per una persona**"
    ],
    [
     "lightbulb",
     "La casa accende la luce in una stanza vuota"
    ],
    [
     "trash-2",
     "Ragionamento valido, premessa falsa: **conclusione sbagliata**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Tutti i gatti hanno quattro zampe; il mio cane ha quattro zampe; quindi il mio cane è un mammifero. Il ragionamento è giusto, perché la conclusione è vera.»",
   "si": "La conclusione è vera, ma **non segue dalle premesse**: le premesse parlano di gatti e zampe, non di mammiferi. Che la conclusione sia vera non basta: un argomento è valido solo se le premesse la garantiscono."
  },
  {
   "tipo": "sezione",
   "num": "1.4",
   "titolo": "Dal linguaggio naturale al linguaggio formale",
   "sotto": "Il computer non ha contesto: serve un linguaggio formale",
   "icona": "languages"
  },
  {
   "tipo": "domanda",
   "testo": "“Ho visto un uomo col binocolo”: chi ha il binocolo?",
   "risposta": "la frase ha due significati, entrambi possibili: posso aver usato io il binocolo per vedere l’uomo, oppure posso aver visto un uomo che aveva un binocolo. È ambigua."
  },
  {
   "tipo": "schema",
   "titolo": "Una frase, due significati",
   "sel": "#s-binocolo"
  },
  {
   "tipo": "punti",
   "titolo": "Il linguaggio naturale è ambiguo",
   "msg": "Chi ascolta sceglie il significato giusto grazie al contesto",
   "punti": [
    [
     "message-circle",
     "La stessa frase può avere **più significati**"
    ],
    [
     "map-pin",
     "Chi ascolta usa il **contesto** e il buon senso, senza accorgersene"
    ],
    [
     "cpu",
     "Un computer **non ha né l’uno né l’altro**: non può «capire che cosa si intendeva»"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Ambiguità nelle parole piccole",
   "msg": "Le ritroveremo nel modulo",
   "tessere": [
    [
     "split",
     "«o»",
     "verifica o interrogazione: una sola, o tutte e due?"
    ],
    [
     "arrow-right",
     "«se»",
     "se finisci i compiti puoi uscire: e se non li finisci?"
    ],
    [
     "users",
     "«tutti… non»",
     "nessuno ha fatto i compiti, o non tutti?"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il linguaggio formale",
   "msg": "Ogni frase si scrive in modi stabiliti e ha un solo significato",
   "punti": [
    [
     "code",
     "Come **Python**, che non accetta una riga «più o meno» giusta"
    ],
    [
     "book-open",
     "La **logica** è il linguaggio formale con cui si scrivono fatti e regole"
    ],
    [
     "pen-line",
     "**Formalizzare**: tradurre una frase nella logica"
    ],
    [
     "database",
     "Serve a **rappresentare** la conoscenza e ad **aumentarla** con l’inferenza"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Wittgenstein e la frase come immagine",
   "msg": "Una proposizione è un’immagine dei fatti (1921)",
   "punti": [
    [
     "book",
     "Nel *Tractatus* (1921): la frase **ripete la disposizione delle cose**"
    ],
    [
     "car",
     "L’idea: un incidente ricostruito in tribunale con **automobiline e pupazzi**"
    ],
    [
     "database",
     "Una base di conoscenza fa lo stesso: **un’immagine del mondo fatta di simboli**"
    ],
    [
     "quote",
     "«I limiti del mio linguaggio significano i limiti del mio mondo»"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ludwig_Wittgenstein.jpg",
    "tit": "Ludwig Wittgenstein",
    "alt": "Ludwig Wittgenstein"
   }
  }
 ]
};
