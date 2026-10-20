window.AULA = {
 "modulo": "Introduzione a informatica ed AI",
 "n": "04",
 "titolo": "Come ragiona un computer",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Come ragiona un computer",
   "sotto": "Un computer non ragiona come una persona: esegue istruzioni, e un algoritmo è il modo di dirgli che cosa fare.",
   "indice": [
    [
     "4.1",
     "Il computer tradizionale"
    ],
    [
     "4.2",
     "Che cos’è un algoritmo"
    ],
    [
     "4.3",
     "Le proprietà di un algoritmo"
    ],
    [
     "4.4",
     "Come si rappresenta un algoritmo"
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
   "num": "4.1",
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
   "num": "4.2",
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
   "num": "4.3",
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
   "num": "4.4",
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
  }
 ]
};
