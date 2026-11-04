window.AULA = {
 "modulo": "Logica e IA simbolica",
 "n": "01",
 "titolo": "Macchine che ragionano: che cos'è la logica",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Macchine che ragionano: che cos'è la logica",
   "sotto": "Le macchine che seguono regole, il linguaggio senza ambiguità in cui si scrivono e quando un ragionamento è valido.",
   "indice": [
    [
     "1.1",
     "Macchine che seguono regole"
    ],
    [
     "1.2",
     "Che cos'è la logica"
    ],
    [
     "1.3",
     "Ragionare: dalle premesse alla conclusione"
    ],
    [
     "1.4",
     "Validità e verità"
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
   "sotto": "Come fa una casa a decidere da sola?",
   "icona": "house"
  },
  {
   "tipo": "flusso",
   "titolo": "Una luce che si accende da sola",
   "blocchi": [
    {
     "titolo": "È sera",
     "icona": "moon"
    },
    {
     "titolo": "C’è qualcuno in casa",
     "icona": "user"
    },
    {
     "titolo": "Accendi le luci",
     "icona": "lightbulb",
     "tono": "fine",
     "riga": "Nessuno ha premuto un interruttore: l’app ha applicato **una regola scritta da una persona**."
    }
   ],
   "frecce": [
    "e",
    "allora"
   ],
   "msg": "Una sera d’inverno entri in casa e la luce del soggiorno si accende da sola",
   "occhiello": "1.1 · Macchine che seguono regole"
  },
  {
   "tipo": "gettoni",
   "titolo": "Regole ovunque",
   "gettoni": [],
   "perche": [
    [
     "smartphone",
     "Nell’app per la casa",
     "*If* sono le 6 **e** il terreno ha meno del 50% di umidità, *Then* annaffia per 15 minuti"
    ],
    [
     "credit-card",
     "Nella banca",
     "pagamento all’estero pochi minuti dopo uno in Italia: la carta si blocca"
    ],
    [
     "car",
     "Nell’auto",
     "la pressione dell’olio scende sotto una soglia: si accende la spia"
    ]
   ],
   "foto": {
    "src": "https://www.holmanindustries.com.au/Holman-Home/Scene/WX1/Ex4_Point26.png#intera",
    "tit": "Una regola in un’app per la casa",
    "alt": "Una regola in un'app per la casa"
   },
   "msg": "Le app permettono a chiunque di scriverle; altre lavorano dove non le vediamo",
   "occhiello": "1.1 · Macchine che seguono regole"
  },
  {
   "tipo": "anim",
   "titolo": "La casa che ragiona",
   "id": "f-casa",
   "occhiello": "1.1 · Macchine che seguono regole"
  },
  {
   "tipo": "definizione",
   "titolo": "Il sistema a regole",
   "frase": "Un **sistema a regole** è un programma che **rappresenta la conoscenza come fatti e regole condizionali** e ne trae conclusioni **applicando automaticamente le regole ai fatti**.",
   "parti": [
    [
     "database",
     "Fatti: ciò che il sistema considera vero ora"
    ],
    [
     "scroll-text",
     "Regole: SE condizioni ALLORA conclusione"
    ],
    [
     "zap",
     "Scatta: tutte le condizioni sono tra i fatti"
    ],
    [
     "link",
     "Catena: il fatto nuovo ne fa scattare altre"
    ]
   ],
   "msg": "Ciò che fa la casa ha un nome",
   "parafrasi": "Le regole le scrive chi conosce il problema: il programma si limita ad applicarle.",
   "occhiello": "1.1 · Macchine che seguono regole"
  },
  {
   "tipo": "errore",
   "no": "«La casa accende la luce perché capisce che è buio e che serve.»",
   "si": "La casa non capisce nulla: **controlla se i fatti che ha soddisfano le condizioni di una regola** che qualcuno ha scritto. Se la regola fosse sbagliata (per esempio senza la condizione «c’è qualcuno in casa»), accenderebbe la luce anche in una casa vuota, senza accorgersene."
  },
  {
   "tipo": "gettoni",
   "titolo": "I fantasmi di Pac-Man",
   "gettoni": [
    [
     "users",
     "nessuno «pensa» né sa degli altri"
    ]
   ],
   "perche": [
    [
     "target",
     "Rosso",
     "punta alla casella in cui si trova Pac-Man"
    ],
    [
     "move-right",
     "Rosa",
     "punta quattro caselle davanti a Pac-Man, per anticiparne i movimenti"
    ],
    [
     "git-merge",
     "Azzurro",
     "combina la posizione di Pac-Man con quella del fantasma rosso"
    ],
    [
     "undo-2",
     "Arancione",
     "insegue da lontano; a meno di 8 caselle punta al suo angolo"
    ]
   ],
   "foto": {
    "src": "https://www.techspot.com/images2/trivia/bigimage/2024/2024-12-16-image.jpg",
    "tit": "Pac-Man (1980)",
    "alt": "Pac-Man (1980)"
   },
   "msg": "Sembrano dotati di intelligenza strategica, eppure ognuno segue una sola regola",
   "occhiello": "1.1 · Esempio"
  },
  {
   "tipo": "domanda",
   "testo": "Un programma decide se bloccare la vostra carta seguendo 200 regole scritte da esperti di frodi. È intelligenza artificiale?",
   "risposta": "Sì. È IA simbolica: una macchina che prende decisioni da esperto applicando conoscenza scritta in forma di regole. Non serve che impari da sola per essere IA."
  },
  {
   "tipo": "definizione",
   "titolo": "L’IA simbolica",
   "frase": "L’**IA simbolica** è l’approccio all’IA che **rappresenta la conoscenza in modo esplicito, con simboli organizzati in fatti e regole**, e ne ricava conclusioni **applicando le regole ai fatti**.",
   "parti": [
    [
     "shapes",
     "Simbolo: segno che sta per un oggetto, una proprietà o una relazione"
    ],
    [
     "history",
     "GOFAI: il primo modo di fare IA, dagli anni Cinquanta"
    ]
   ],
   "nota": "*Good Old-Fashioned Artificial Intelligence*, «la buona vecchia IA».",
   "parafrasi": "Sono le persone a scrivere ciò che la macchina sa, e la macchina lo usa come la casa smart.",
   "occhiello": "1.1 · Macchine che seguono regole"
  },
  {
   "tipo": "sezione",
   "num": "1.2",
   "titolo": "Che cos'è la logica",
   "sotto": "In che lingua vanno scritti fatti e regole, perché una macchina li possa usare?",
   "icona": "languages"
  },
  {
   "tipo": "domanda",
   "testo": "Le guardie di un videogioco seguono la regola “Se vedi un uomo con il binocolo, uccidilo”. Chi devono colpire?",
   "risposta": ""
  },
  {
   "tipo": "schema",
   "titolo": "Una regola, due significati",
   "sel": "#s-binocolo",
   "msg": "Chi ha il binocolo: la guardia o l’uomo?",
   "occhiello": "1.2 · Che cos’è la logica"
  },
  {
   "tipo": "casi",
   "titolo": "Una persona e un programma",
   "casi": [
    {
     "testo": "usa il **contesto**: dove si trova, che cosa sta succedendo, che cosa vuole chi ha dato l’ordine. E nel dubbio può chiedere.",
     "icona": "user",
     "tono": "si",
     "etichetta": "Una persona"
    },
    {
     "testo": "esegue la regola in uno dei due modi: se è quello sbagliato, la guardia **colpisce le persone sbagliate**.",
     "icona": "cpu",
     "tono": "no",
     "etichetta": "Un programma"
    }
   ],
   "msg": "Davanti alla stessa regola ambigua",
   "occhiello": "1.2 · Che cos’è la logica"
  },
  {
   "tipo": "definizione",
   "titolo": "Il linguaggio naturale",
   "frase": "Un **linguaggio naturale** è una lingua storica che si è formata e si trasforma **spontaneamente nell’uso** di una comunità di parlanti, **senza regole stabilite in anticipo**.",
   "parti": [
    [
     "split",
     "Ambigua: una frase che ammette più di un’interpretazione"
    ],
    [
     "message-circle",
     "Nelle lingue naturali succede spesso"
    ]
   ],
   "parafrasi": "Nessuno ha progettato l’italiano, e le sue frasi spesso si possono capire in più modi.",
   "occhiello": "1.2 · Che cos’è la logica"
  },
  {
   "tipo": "gettoni",
   "titolo": "Ambiguità nelle parole piccole",
   "gettoni": [],
   "perche": [
    [
     "split",
     "«o»",
     "domani c’è la verifica o l’interrogazione: una sola, o tutte e due?"
    ],
    [
     "arrow-right",
     "«se»",
     "se finisci i compiti, puoi uscire: e se non li finisci, non puoi uscire?"
    ],
    [
     "users",
     "«tutti… non»",
     "tutti gli studenti non hanno fatto i compiti: nessuno, o non tutti?"
    ]
   ],
   "msg": "Proprio le parole che servono per scrivere le regole",
   "occhiello": "1.2 · Esempio"
  },
  {
   "tipo": "definizione",
   "titolo": "Il linguaggio formale",
   "frase": "Un **linguaggio formale** è un linguaggio **artificiale**: regole esplicite di **sintassi** stabiliscono quali sequenze di simboli sono **formule ben formate**, regole di **semantica** danno a ciascuna **un solo significato**.",
   "parti": [
    [
     "code",
     "Python: niente righe «più o meno» giuste"
    ],
    [
     "pen-line",
     "Formalizzare: tradurre una frase in una formula"
    ]
   ],
   "parafrasi": "Non nasce dall’uso, lo progetta qualcuno: ogni frase scritta correttamente si capisce in un modo solo. Formalizzare una frase ambigua obbliga a **scegliere uno dei suoi significati**.",
   "occhiello": "1.2 · Che cos’è la logica"
  },
  {
   "tipo": "definizione",
   "titolo": "Che cos’è la logica",
   "frase": "La **logica** è la disciplina che studia le **condizioni di validità dei ragionamenti**: in quali casi la verità di alcune affermazioni (*proposizioni*, come diremo nel capitolo 2) **garantisce, per la sola forma**, la verità di un’altra.",
   "nota": "Per farlo scrive le affermazioni in un **linguaggio formale**: quello che serve a un sistema di IA simbolica.",
   "parafrasi": "Non si chiede se una cosa è vera, ma se **segue con certezza** da ciò che si dà per vero, chiunque ragioni: una persona o una macchina.",
   "occhiello": "1.2 · Che cos’è la logica"
  },
  {
   "tipo": "flusso",
   "titolo": "A che cosa serve la logica",
   "blocchi": [
    {
     "titolo": "Base di conoscenza",
     "testo": "rappresentare la conoscenza: i fatti e le regole del sistema",
     "icona": "database"
    },
    {
     "titolo": "Fatti nuovi",
     "testo": "ricavare conoscenza nuova",
     "icona": "sparkles",
     "tono": "fine",
     "riga": "L’**inferenza** è il passaggio da affermazioni date per vere a un’affermazione che ne segue: è ciò che fa la casa quando una regola scatta."
    }
   ],
   "frecce": [
    "inferenza"
   ],
   "msg": "In un sistema di IA simbolica, due compiti",
   "occhiello": "1.2 · Che cos’è la logica"
  },
  {
   "tipo": "gettoni",
   "titolo": "Wittgenstein e la frase come immagine",
   "gettoni": [],
   "perche": [
    [
     "image",
     "Una proposizione è un’immagine dei fatti",
     "i suoi elementi stanno tra loro come le cose nel mondo (*Tractatus*, 1921)"
    ],
    [
     "car",
     "Un modellino in tribunale",
     "a Parigi un incidente ricostruito con automobiline e pupazzi"
    ],
    [
     "database",
     "Una base di conoscenza fa lo stesso",
     "è un’immagine del mondo fatta di simboli"
    ],
    [
     "quote",
     "«I limiti del mio linguaggio significano i limiti del mio mondo»",
     ""
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ludwig_Wittgenstein.jpg",
    "tit": "Ludwig Wittgenstein",
    "alt": "Ludwig Wittgenstein"
   },
   "msg": "Ludwig Wittgenstein (1889–1951)",
   "occhiello": "1.2 · Nella storia"
  },
  {
   "tipo": "sezione",
   "num": "1.3",
   "titolo": "Ragionare: dalle premesse alla conclusione",
   "sotto": "Il passaggio da ciò che si sa a ciò che ne segue è un ragionamento: com’è fatto?",
   "icona": "brain"
  },
  {
   "tipo": "anatomia",
   "titolo": "Il ragionamento della casa",
   "codice": "Se è sera e fuori è buio,\nallora serve la luce.\nÈ sera e fuori è buio.\n―――――――――――――――――――――\nQuindi serve la luce.",
   "parti": [
    [
     "Se è sera e fuori è buio,\nallora serve la luce.",
     "Premessa",
     "la regola"
    ],
    [
     "È sera e fuori è buio.",
     "Premessa",
     "i fatti"
    ],
    [
     "Quindi serve la luce.",
     "Conclusione",
     "l’affermazione ricavata"
    ]
   ],
   "msg": "Quando la regola 1 scatta, la casa parte da due informazioni e ne ricava una terza",
   "occhiello": "1.3 · Ragionare"
  },
  {
   "tipo": "definizione",
   "titolo": "L’argomento",
   "frase": "Un **argomento** (o ragionamento) è una **sequenza di affermazioni** in cui una, la **conclusione**, è presentata come **conseguenza** delle altre, le **premesse**.",
   "parti": [
    [
     "arrow-down",
     "Inferenza: il passaggio dalle premesse alla conclusione"
    ]
   ],
   "nota": "In logica «argomento» non vuol dire «tema di cui si parla».",
   "msg": "Vale per qualunque ragionamento, non solo per quello della casa",
   "parafrasi": "Le premesse sono ciò che si dà per vero, la conclusione è ciò che se ne ricava.",
   "occhiello": "1.3 · Ragionare"
  },
  {
   "tipo": "anatomia",
   "titolo": "Le parole-spia",
   "codice": "Il ladro è entrato dalla finestra, dato che la porta era chiusa a chiave",
   "parti": [
    [
     "Il ladro è entrato dalla finestra",
     "Conclusione",
     "qui viene prima"
    ],
    [
     "dato che",
     "Parola-spia",
     "introduce una premessa"
    ],
    [
     "la porta era chiusa a chiave",
     "Premessa",
     ""
    ]
   ],
   "msg": "Nella lingua di tutti i giorni la riga non c’è",
   "effetto": "«quindi», «perciò», «dunque» → **conclusione** · «perché», «dato che», «poiché» → **premessa**",
   "occhiello": "1.3 · Esempio"
  },
  {
   "tipo": "schema",
   "titolo": "Tre argomenti, una stessa forma di scrittura",
   "sel": "#s-argomenti",
   "msg": "Temi diversissimi, scritti tutti allo stesso modo",
   "occhiello": "1.3 · Ragionare"
  },
  {
   "tipo": "gettoni",
   "titolo": "Aristotele e il sillogismo",
   "gettoni": [],
   "perche": [
    [
     "scroll",
     "La forma dei ragionamenti",
     "il primo a studiarla in modo sistematico, nell’*Organon* («strumento»)"
    ],
    [
     "git-merge",
     "Il sillogismo",
     "un argomento con due premesse e una conclusione"
    ],
    [
     "quote",
     "«Socrate è mortale»",
     "l’esempio più famoso non è suo, ma dei suoi commentatori"
    ],
    [
     "hourglass",
     "Più di duemila anni",
     "la sua logica resta la base dello studio del ragionamento"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
    "tit": "Aristotele",
    "alt": "Aristotele"
   },
   "msg": "Aristotele (384–322 a.C.)",
   "occhiello": "1.3 · Nella storia"
  },
  {
   "tipo": "sezione",
   "num": "1.4",
   "titolo": "Validità e verità",
   "sotto": "Scrivere un ragionamento in colonna non lo rende buono: quando funziona davvero?",
   "icona": "scale"
  },
  {
   "tipo": "casi",
   "titolo": "Due modi di sbagliare",
   "casi": [
    {
     "testo": "il sensore sbaglia, la notizia è inventata",
     "icona": "circle-x",
     "tono": "no",
     "etichetta": "Una premessa è falsa"
    },
    {
     "testo": "dalle premesse, anche se queste sono vere",
     "icona": "unlink",
     "tono": "no",
     "etichetta": "La conclusione non segue"
    }
   ],
   "msg": "Un argomento può andare storto per due motivi molto diversi",
   "aClic": true,
   "occhiello": "1.4 · Validità e verità"
  },
  {
   "tipo": "flusso",
   "titolo": "*Garbage in, garbage out*",
   "blocchi": [
    {
     "titolo": "Il sensore sbaglia",
     "testo": "scambia il gatto per una persona",
     "icona": "cat"
    },
    {
     "titolo": "Un fatto falso",
     "testo": "«c’è qualcuno in casa»",
     "icona": "database",
     "tono": "no"
    },
    {
     "titolo": "Luce accesa",
     "testo": "in una stanza vuota",
     "icona": "lightbulb",
     "tono": "no",
     "riga": "Regole applicate senza errori, premessa falsa: conclusione sbagliata. La logica si occupa dell’altro motivo: **il passaggio** dalle premesse alla conclusione."
    }
   ],
   "msg": "Il primo motivo una macchina non lo vede",
   "occhiello": "1.4 · Esempio"
  },
  {
   "tipo": "definizione",
   "titolo": "Valido e corretto",
   "frase": "Un argomento è **valido** quando è **impossibile** che tutte le premesse siano vere e la conclusione falsa.",
   "parti": [
    [
     "circle-check",
     "Corretto (o fondato): valido e con tutte le premesse vere"
    ]
   ],
   "parafrasi": "Se le premesse sono vere, la conclusione lo è per forza. La validità non dice se le premesse sono vere: dice che cosa succede alla conclusione se lo sono.",
   "occhiello": "1.4 · Validità e verità"
  },
  {
   "tipo": "domanda",
   "testo": "Tutti i pesci sanno volare. Bolla è un pesce. Quindi Bolla sa volare. Il ragionamento è corretto?",
   "risposta": "Il ragionamento è valido: se le premesse fossero vere, la conclusione lo sarebbe per forza. A essere falsa è la prima premessa, quindi l’argomento è valido ma non corretto."
  },
  {
   "tipo": "anim",
   "titolo": "Lo stampo del ragionamento",
   "id": "f-stampo",
   "occhiello": "1.4 · Validità e verità"
  },
  {
   "tipo": "casi",
   "titolo": "Conta la forma",
   "casi": [
    {
     "titolo": "Tutti gli A sono B · x è un A · quindi x è un B",
     "testo": "vale per **ogni argomento** con questa forma, qualunque cosa ci sia al posto delle lettere",
     "tono": "si",
     "etichetta": "Valido"
    },
    {
     "titolo": "Tutti gli A sono B · x è un B · quindi x è un A",
     "testo": "«Tutti i gatti hanno quattro zampe; Fido ha quattro zampe; quindi Fido è un gatto»: premesse vere, conclusione falsa",
     "tono": "no",
     "etichetta": "Non valido"
    }
   ],
   "msg": "La **forma logica** è ciò che resta sostituendo con lettere i termini specifici («tutti», «non», «se… allora» restano): la validità dipende da lei, non dal contenuto",
   "riga": "Per controllarla non serve sapere niente di uomini, pesci o gatti: per questo **la può controllare anche una macchina**.",
   "occhiello": "1.4 · Validità e verità"
  },
  {
   "tipo": "errore",
   "no": "«Tutti i cani sono mammiferi; Fido è un mammifero; quindi Fido è un cane. Le premesse sono vere e Fido è davvero un cane: il ragionamento è valido.»",
   "si": "La conclusione è vera, ma **non segue dalle premesse**: anche un gatto è un mammifero. È lo stampo non valido dell’animazione («Tutti gli A sono B; x è un B; quindi x è un A»), e questa volta la conclusione è vera per caso. **Che la conclusione sia vera non rende valido un argomento**: deve essere la forma a garantirla."
  }
 ],
 "stile": "schema"
};
