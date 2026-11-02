window.AULA = {
 "modulo": "Logica e IA simbolica",
 "n": "02",
 "titolo": "La logica proposizionale",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "La logica proposizionale",
   "sotto": "Le frasi che sono o vere o false e le parole che le uniscono: il primo linguaggio formale per scrivere fatti e regole.",
   "indice": [
    [
     "2.1",
     "Le proposizioni e i principi della logica classica"
    ],
    [
     "2.2",
     "Proposizioni atomiche e composte"
    ],
    [
     "2.3",
     "I connettivi NOT, AND, OR e XOR"
    ],
    [
     "2.4",
     "Implicazione e doppia implicazione"
    ],
    [
     "2.5",
     "Dalla lingua alle formule"
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
   "num": "2.1",
   "titolo": "Le proposizioni e i principi della logica classica",
   "sotto": "Frasi che sono vere oppure false",
   "icona": "toggle-left"
  },
  {
   "tipo": "punti",
   "titolo": "La proposizione",
   "msg": "Una frase dichiarativa con uno e un solo valore di verità",
   "punti": [
    [
     "message-square",
     "È **dichiarativa**: afferma qualcosa"
    ],
    [
     "check",
     "Ha **uno e un solo** valore di verità: **vero (V)** oppure **falso (F)**"
    ],
    [
     "house",
     "«È sera», «fuori è buio», «Marco è in casa»: **i mattoni della logica**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "“7 è un numero pari” è una proposizione?",
   "risposta": "sì. È falsa, ma è una proposizione: conta che abbia un valore di verità, non che sia vera."
  },
  {
   "tipo": "tessere",
   "titolo": "Non sono proposizioni",
   "msg": "Non hanno un valore di verità uguale per tutti",
   "tessere": [
    [
     "circle-help",
     "Domande e ordini",
     "«Che ore sono?», «Chiudi la porta!»: non affermano niente"
    ],
    [
     "heart",
     "Giudizi personali",
     "«La pizza è il cibo più buono»: il valore cambia da persona a persona"
    ],
    [
     "repeat",
     "Paradossi",
     "«Questa frase è falsa»: non può essere né vera né falsa"
    ]
   ],
   "nota": "Una proposizione può benissimo essere falsa: «7 è un numero pari» lo è."
  },
  {
   "tipo": "widget",
   "titolo": "È una proposizione?",
   "w": "proposizione"
  },
  {
   "tipo": "errore",
   "no": "«“La pizza è il cibo più buono” è una proposizione: per me è vera.»",
   "si": "Non è una proposizione: è un **giudizio personale**. Per qualcuno è vera, per qualcun altro falsa: non ha un valore di verità uguale per tutti."
  },
  {
   "tipo": "tessere",
   "titolo": "La logica classica",
   "msg": "Tre principi dicono che cosa vuol dire «o vera o falsa»",
   "tessere": [
    [
     "toggle-left",
     "Bivalenza",
     "i valori di verità sono **solo due**: vero e falso"
    ],
    [
     "ban",
     "Non contraddizione",
     "una proposizione **non può essere vera e falsa** nello stesso momento"
    ],
    [
     "split",
     "Terzo escluso",
     "è vera **oppure** falsa: *tertium non datur*, «un terzo non è dato»"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Vero e falso nel computer",
   "msg": "I valori booleani",
   "punti": [
    [
     "binary",
     "Vero e falso sono i due stati di un **bit**: 1 e 0"
    ],
    [
     "braces",
     "Il tipo **booleano**: in Flowgorithm una variabile *Boolean* vale `true` o `false`"
    ],
    [
     "git-branch",
     "**Ogni condizione di un «Se» è una proposizione**: «voto ≥ 6» sceglie il ramo"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "George Boole",
   "msg": "L’algebra del pensiero (1815–1864)",
   "punti": [
    [
     "school",
     "Figlio di un calzolaio, studia quasi da solo e insegna matematica a Cork"
    ],
    [
     "book",
     "1854, *Le leggi del pensiero*: **il ragionamento diventa un calcolo con 1 e 0**"
    ],
    [
     "binary",
     "È l’**algebra di Boole**: da lui prendono il nome i valori **booleani**"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/George_Boole_color.jpg",
    "tit": "George Boole",
    "alt": "George Boole"
   }
  },
  {
   "tipo": "punti",
   "titolo": "I paradossi",
   "msg": "Frasi che non possono essere né vere né false",
   "punti": [
    [
     "quote",
     "Eubulide (IV secolo a.C.): «**Io sto mentendo**»"
    ],
    [
     "repeat",
     "Se è vera è falsa, se è falsa è vera: **non è una proposizione**"
    ],
    [
     "scissors",
     "Russell (1918): il barbiere che rade **tutti e soli** gli uomini che non si radono da soli"
    ],
    [
     "circle-x",
     "Chi rade il barbiere? **Un barbiere così non può esistere**"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bertrand_Russell_in_1936.jpg",
    "tit": "Bertrand Russell",
    "alt": "Bertrand Russell"
   }
  },
  {
   "tipo": "sezione",
   "num": "2.2",
   "titolo": "Proposizioni atomiche e composte",
   "sotto": "Dentro una proposizione ce ne possono essere altre",
   "icona": "puzzle"
  },
  {
   "tipo": "punti",
   "titolo": "Atomiche e composte",
   "msg": "Le composte si smontano in proposizioni più semplici",
   "punti": [
    [
     "atom",
     "**Atomica**: non si scompone («piove»)"
    ],
    [
     "puzzle",
     "**Composta**: proposizioni unite dai **connettivi**, «non», «e», «o», «se… allora»"
    ],
    [
     "circle-slash",
     "Anche «non piove» è composta"
    ],
    [
     "calculator",
     "Il suo valore **dipende solo** dalle atomiche e dai connettivi"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Smontare una frase",
   "sel": "#s-smonta"
  },
  {
   "tipo": "punti",
   "titolo": "Le variabili proposizionali",
   "msg": "Una lettera al posto di una proposizione qualsiasi",
   "punti": [
    [
     "variable",
     "p = «piove», q = «ho l’ombrello», r = «mi bagno»"
    ],
    [
     "x",
     "Come la x in algebra sta al posto di un numero qualsiasi"
    ],
    [
     "arrow-right",
     "La frase diventa: «se p e non q, allora r»"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«“Marco e Luca sono fratelli” è una proposizione composta, perché c’è la “e”.»",
   "si": "È **atomica**: qui «e» indica una **relazione** tra due persone, non unisce due proposizioni. Prova a dividerla: «Marco è fratello» da sola non ha senso. Invece «Marco e Luca sono alti» è composta: «Marco è alto» **e** «Luca è alto»."
  },
  {
   "tipo": "sezione",
   "num": "2.3",
   "titolo": "I connettivi NOT, AND, OR e XOR",
   "sotto": "Basta una parola a cambiare una regola",
   "icona": "toggle-right"
  },
  {
   "tipo": "punti",
   "titolo": "Regole di tutti i giorni",
   "msg": "Sono proposizioni composte",
   "punti": [
    [
     "door-open",
     "Puoi uscire prima con l’autorizzazione dei genitori **e** il permesso della presidenza"
    ],
    [
     "ticket",
     "Sconto per chi ha meno di 18 anni **o** è studente"
    ],
    [
     "utensils",
     "Il menù comprende primo **o** secondo"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "La tavola di verità",
   "msg": "Ogni connettivo è definito dalla sua tavola",
   "punti": [
    [
     "table",
     "Per ogni combinazione dei valori di partenza dà il valore della composta"
    ],
    [
     "circle-dot",
     "**Unario**: agisce su una sola proposizione"
    ],
    [
     "git-merge",
     "**Binario**: ne unisce due"
    ],
    [
     "hash",
     "Il numero di proposizioni su cui agisce è l’**arietà**"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Interruttori e lampadina",
   "w": "interruttori"
  },
  {
   "tipo": "tabella",
   "titolo": "NOT · la negazione",
   "msg": "Rovescia il valore di verità: ¬p, «non»",
   "righe": [
    [
     "p",
     "¬p"
    ],
    [
     "**F**",
     "**V**"
    ],
    [
     "**V**",
     "**F**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "AND · la congiunzione",
   "msg": "Vera solo quando sono vere entrambe: p ∧ q, «e»",
   "righe": [
    [
     "p",
     "q",
     "p ∧ q"
    ],
    [
     "**F**",
     "**F**",
     "**F**"
    ],
    [
     "**F**",
     "**V**",
     "**F**"
    ],
    [
     "**V**",
     "**F**",
     "**F**"
    ],
    [
     "**V**",
     "**V**",
     "**V**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Anche «ma» è un AND",
   "msg": "«ma», «però», «anche se», «eppure» sono congiunzioni",
   "punti": [
    [
     "quote",
     "«È bravo **ma** pigro» afferma che è bravo **e** che è pigro"
    ],
    [
     "eraser",
     "La sfumatura di contrasto, in logica, **si perde**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "“Sconto per chi ha meno di 18 anni o è studente” e “il menù comprende primo o secondo”: in tutti e due i casi posso avere entrambe le cose?",
   "risposta": "nel primo caso sì: chi ha 16 anni ed è studente ha lo sconto. Nel secondo no: si sceglie uno solo dei due piatti. La lingua usa la stessa parola «o», la logica due connettivi diversi: OR e XOR."
  },
  {
   "tipo": "tabella",
   "titolo": "OR · la disgiunzione inclusiva",
   "msg": "Vera se ne è vera almeno una, anche entrambe: p ∨ q, latino *vel*",
   "righe": [
    [
     "p",
     "q",
     "p ∨ q"
    ],
    [
     "**F**",
     "**F**",
     "**F**"
    ],
    [
     "**F**",
     "**V**",
     "**V**"
    ],
    [
     "**V**",
     "**F**",
     "**V**"
    ],
    [
     "**V**",
     "**V**",
     "**V**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "XOR · la disgiunzione esclusiva",
   "msg": "Vera se ne è vera una sola: p ⊕ q, «o… o…», latino *aut aut*",
   "righe": [
    [
     "p",
     "q",
     "p ⊕ q"
    ],
    [
     "**F**",
     "**F**",
     "**F**"
    ],
    [
     "**F**",
     "**V**",
     "**V**"
    ],
    [
     "**V**",
     "**F**",
     "**V**"
    ],
    [
     "**V**",
     "**V**",
     "**F**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«“Sconto per chi ha meno di 18 anni o è studente”: se ho 16 anni e sono studente lo sconto non vale, perché la “o” vuol dire una sola delle due.»",
   "si": "In logica **«o» è inclusiva**, salvo che si dica esplicitamente il contrario: la proposizione è vera anche quando sono vere entrambe. Lo sconto vale."
  },
  {
   "tipo": "punti",
   "titolo": "I connettivi nel computer",
   "msg": "Ogni connettivo è una porta logica",
   "punti": [
    [
     "cpu",
     "Una **porta logica** riceve bit (1 = vero, 0 = falso) e restituisce il valore del connettivo"
    ],
    [
     "plug",
     "Due interruttori **in serie** fanno un **AND**, due **in parallelo** un **OR**"
    ],
    [
     "microchip",
     "Gli interruttori sono **transistor**: un processore ne ha miliardi"
    ],
    [
     "history",
     "Claude Shannon, 1937: l’algebra di Boole descrive proprio questi circuiti"
    ],
    [
     "memory-stick",
     "Con la sola porta **NAND** si costruiscono tutte le altre: da qui la memoria «flash NAND»"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "2.4",
   "titolo": "Implicazione e doppia implicazione",
   "sotto": "Quando una promessa è tradita",
   "icona": "handshake"
  },
  {
   "tipo": "punti",
   "titolo": "L’implicazione",
   "msg": "p → q è falsa solo quando p è vera e q è falsa",
   "punti": [
    [
     "quote",
     "«**Se** prendi 8, **allora** ti porto al cinema»"
    ],
    [
     "arrow-right",
     "p è l’**antecedente**, q il **conseguente**"
    ],
    [
     "circle-x",
     "È falsa **solo** se prendi 8 e non vai al cinema"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Prendi 5, ma ti porto al cinema lo stesso: ho tradito la promessa?",
   "risposta": "no. La promessa diceva che cosa sarebbe successo se avessi preso 8, e non dice niente sul 5: l’implicazione resta vera."
  },
  {
   "tipo": "anim",
   "titolo": "La promessa è stata mantenuta?",
   "id": "f-promessa"
  },
  {
   "tipo": "tabella",
   "titolo": "L’implicazione",
   "msg": "Falsa solo con l’antecedente vero e il conseguente falso",
   "righe": [
    [
     "p",
     "q",
     "p → q"
    ],
    [
     "**F**",
     "**F**",
     "**V**"
    ],
    [
     "**F**",
     "**V**",
     "**V**"
    ],
    [
     "**V**",
     "**F**",
     "**F**"
    ],
    [
     "**V**",
     "**V**",
     "**V**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "*Ex falso quodlibet*",
   "msg": "«Dal falso segue qualunque cosa»",
   "punti": [
    [
     "message-circle",
     "L’implicazione dice che cosa succede **solo quando l’antecedente è vero**"
    ],
    [
     "shield-check",
     "Se prendi 5 la promessa non dice niente: **non può essere tradita**"
    ],
    [
     "toggle-left",
     "Per la bivalenza, «non tradita» vuol dire **vera**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Una regola sui numeri",
   "id": "f-numeri"
  },
  {
   "tipo": "errore",
   "no": "«“Se piove prendo l’ombrello”: oggi non piove, quindi la frase è falsa.»",
   "si": "Con l’**antecedente falso** l’implicazione è **vera**: la regola dice che cosa faccio quando piove, e oggi non è stata violata."
  },
  {
   "tipo": "tabella",
   "titolo": "La doppia implicazione",
   "msg": "Vera quando p e q hanno lo stesso valore: p ↔ q, «se e solo se»",
   "righe": [
    [
     "p",
     "q",
     "p ↔ q"
    ],
    [
     "**F**",
     "**F**",
     "**V**"
    ],
    [
     "**F**",
     "**V**",
     "**F**"
    ],
    [
     "**V**",
     "**F**",
     "**F**"
    ],
    [
     "**V**",
     "**V**",
     "**V**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Se e solo se",
   "msg": "Due implicazioni insieme: se p allora q, e se q allora p",
   "punti": [
    [
     "arrow-right-left",
     "Un numero è pari **se e solo se** è divisibile per 2"
    ],
    [
     "house",
     "Puoi uscire **se e solo se** hai finito i compiti"
    ],
    [
     "circle-x",
     "«Divisibile per 4 ↔ pari» invece è falsa: **6** è pari ma non divisibile per 4"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "2.5",
   "titolo": "Dalla lingua alle formule",
   "sotto": "Tradurre una frase in una formula",
   "icona": "languages"
  },
  {
   "tipo": "tessere",
   "titolo": "Formalizzare",
   "msg": "Tre mosse",
   "tessere": [
    [
     "atom",
     "1 · Le atomiche",
     "trovarle e dare a ciascuna una lettera"
    ],
    [
     "link",
     "2 · I connettivi",
     "riconoscerli, anche quando sono nascosti in altre parole"
    ],
    [
     "parentheses",
     "3 · Le parentesi",
     "metterle dove servono"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Traduci la frase",
   "id": "f-traduci"
  },
  {
   "tipo": "tabella",
   "titolo": "Connettivi nascosti",
   "msg": "Molte parole italiane nascondono un connettivo",
   "righe": [
    [
     "Nella lingua",
     "In logica",
     "Esempio"
    ],
    [
     "ma, però, anche se, eppure",
     "∧",
     "«È bravo ma pigro» → b ∧ p"
    ],
    [
     "né… né…",
     "¬p ∧ ¬q",
     "«Né Marco né Luca sono venuti» → ¬m ∧ ¬l"
    ],
    [
     "o… o…, oppure ma non entrambi",
     "⊕",
     "«O vieni o resti» → v ⊕ r"
    ],
    [
     "se, quando, ogni volta che",
     "p → q",
     "«Quando piove prendo l’ombrello» → p → o"
    ],
    [
     "p solo se q",
     "p → q",
     "«Esci solo se hai finito i compiti» → e → c"
    ],
    [
     "p a meno che q",
     "¬q → p",
     "«Esco, a meno che piova» → ¬p → e"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Precedenza e parentesi",
   "msg": "Prima ¬, poi ∧, poi ∨, poi → e infine ↔",
   "punti": [
    [
     "list-ordered",
     "Come in algebra la moltiplicazione si fa prima dell’addizione"
    ],
    [
     "parentheses",
     "¬p ∧ q vuol dire (¬p) ∧ q, **non** ¬(p ∧ q)"
    ],
    [
     "check",
     "Nel dubbio, **le parentesi tolgono ogni ambiguità**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Formule ben formate",
   "msg": "Scritte secondo le regole",
   "punti": [
    [
     "variable",
     "Una variabile da sola è ben formata; se A lo è, lo è anche ¬A"
    ],
    [
     "plus",
     "Se A e B lo sono, lo sono (A ∧ B), (A ∨ B), (A ⊕ B), (A → B), (A ↔ B)"
    ],
    [
     "bug",
     "«p ∧ ∨ q» e «(p ∧ q» non vogliono dire niente: come un **errore di sintassi**"
    ]
   ]
  },
  {
   "tipo": "formula",
   "titolo": "Le regole della casa smart",
   "msg": "Le due regole del capitolo 1, in formule",
   "formula": "(s ∧ b) → l     (l ∧ m) → a",
   "righe": [
    [
     "s",
     "è sera"
    ],
    [
     "b",
     "fuori è buio"
    ],
    [
     "l",
     "serve la luce"
    ],
    [
     "m",
     "c’è qualcuno in casa"
    ],
    [
     "a",
     "le luci sono accese"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "“Né Marco né Luca sono venuti”: come si scrive con i connettivi?",
   "risposta": "¬m ∧ ¬l: Marco non è venuto **e** Luca non è venuto."
  },
  {
   "tipo": "errore",
   "no": "«“Non è vero che piove e fa freddo” si scrive ¬p ∧ f.»",
   "si": "Si scrive **¬(p ∧ f)**: il «non è vero che» vale per tutta la frase «piove e fa freddo». Senza parentesi il ¬ vale solo per p, e la formula direbbe «non piove e fa freddo»."
  },
  {
   "tipo": "errore",
   "no": "«In Flowgorithm scrivo la condizione `voto == 6 or 7 or 8`.»",
   "si": "Ogni parte di un OR deve essere una proposizione completa: `voto == 6 or voto == 7 or voto == 8`. In italiano «il voto è 6, 7 o 8» sottintende «il voto è» davanti a ogni numero; in un linguaggio formale non si sottintende niente."
  }
 ]
};
