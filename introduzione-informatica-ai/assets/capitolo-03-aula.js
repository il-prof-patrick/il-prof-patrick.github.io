window.AULA = {
 "modulo": "Introduzione a informatica ed AI",
 "n": "03",
 "titolo": "Un computer può essere intelligente?",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Un computer può essere intelligente?",
   "sotto": "Il test di Turing e la stanza cinese danno risposte opposte alla stessa domanda.",
   "indice": [
    [
     "3.1",
     "Il test di Turing"
    ],
    [
     "3.2",
     "La stanza cinese"
    ],
    [
     "3.3",
     "Punti di vista a confronto"
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
   "testo": "Chattate con uno sconosciuto: che domanda fareste per scoprire se è una macchina?",
   "risposta": "Un calcolo difficile non basta: una macchina può fingere di sbagliare, e nel gioco qui sotto lo fa."
  },
  {
   "tipo": "sezione",
   "num": "3.1",
   "titolo": "Il test di Turing",
   "sotto": "Un gioco per sostituire una domanda troppo vaga",
   "icona": "messages-square"
  },
  {
   "tipo": "punti",
   "titolo": "Alan Turing, 1950",
   "msg": "Dalla domanda «le macchine possono pensare?» a un gioco",
   "punti": [
    [
     "calendar",
     "Nel **1950** il matematico britannico **Alan Turing** si chiede se le macchine possano pensare"
    ],
    [
     "circle-help",
     "La domanda è **troppo vaga**: non si sa che cosa voglia dire «pensare»"
    ],
    [
     "gamepad-2",
     "La sostituisce con un gioco: il **gioco dell’imitazione**, oggi detto **test di Turing**"
    ]
   ],
   "foto": {
    "src": "https://cdn.britannica.com/81/191581-050-3C5C0F9D/Alan-Turing.jpg",
    "tit": "Alan Turing",
    "alt": "Alan Turing, matematico britannico: nel 1950 propose il «gioco dell’imitazione». Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "Le regole del gioco",
   "msg": "Un interrogatore, una persona e una macchina",
   "punti": [
    [
     "message-square",
     "L’**interrogatore** conversa **per iscritto** con due interlocutori, senza vederli"
    ],
    [
     "users",
     "Uno è una **persona**, l’altro è una **macchina**"
    ],
    [
     "circle-help",
     "Può fare **tutte le domande** che vuole"
    ],
    [
     "trophy",
     "Se alla fine **non capisce quale sia la macchina**, la macchina **supera il test**"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova: sei tu l’interrogatore",
   "w": "turing"
  },
  {
   "tipo": "punti",
   "titolo": "Che cosa misura il test",
   "msg": "Quanto bene una macchina imita una persona",
   "punti": [
    [
     "drama",
     "Misura **l’imitazione** in una conversazione, non quanto la macchina sia intelligente"
    ],
    [
     "check",
     "Nel primo giro la macchina **passa fingendo di sbagliare** e inventando ricordi"
    ],
    [
     "x",
     "Nel secondo **fallisce perché è troppo brava**, pur facendo cose molto intelligenti"
    ],
    [
     "paw-print",
     "Superarlo **non prova che pensi**: come Hans, può sembrare intelligente senza esserlo"
    ],
    [
     "brain",
     "Non superarlo **non prova che non sia intelligente**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Quante IA hanno superato oggi il test di Turing?",
   "risposta": "Non c’è un conteggio ufficiale: dipende da come si fa il test. Nello studio più rigoroso (Università della California a San Diego, pubblicato su PNAS nel 2026), in conversazioni di cinque minuti con una persona e una macchina, GPT-4.5 è stato scambiato per la persona il 73% delle volte e LLaMa-3.1 il 56%, quasi come tirare a caso. Ma solo dopo essere stati istruiti a recitare una persona: senza quell’istruzione, no."
  },
  {
   "tipo": "errore",
   "no": "«Il test di Turing dimostra che una macchina pensa.»",
   "si": "Il test misura solo se una macchina **sembra una persona** in una conversazione. Una macchina può superarlo fingendo, e può fallirlo proprio perché è troppo brava."
  },
  {
   "tipo": "sezione",
   "num": "3.2",
   "titolo": "La stanza cinese",
   "sotto": "Rispondere bene non basta per capire",
   "icona": "door-closed"
  },
  {
   "tipo": "domanda",
   "testo": "Se un chatbot risponde sempre come una persona, vuol dire che capisce quello che dice?",
   "risposta": "Non per forza: come nella stanza cinese, si può rispondere bene seguendo regole su simboli, senza capire."
  },
  {
   "tipo": "punti",
   "titolo": "John Searle, 1980",
   "msg": "Un esperimento mentale contro il test di Turing",
   "punti": [
    [
     "eye",
     "Il test di Turing **guarda solo le risposte**"
    ],
    [
     "calendar",
     "Nel **1980** il filosofo statunitense **John Searle** propone un **esperimento mentale**"
    ],
    [
     "lightbulb",
     "È uno scenario **immaginato e non realizzato**"
    ],
    [
     "door-closed",
     "Vuole mostrare che **rispondere bene non basta per capire**: la **stanza cinese**"
    ]
   ],
   "foto": {
    "src": "https://cdn.britannica.com/28/241128-050-6B7E001E/American-philosopher-John-Searle.jpg",
    "tit": "John Searle",
    "alt": "John Searle, filosofo statunitense: nel 1980 propose l’esperimento mentale della stanza cinese. Di riconoscimento."
   }
  },
  {
   "tipo": "punti",
   "titolo": "La stanza cinese",
   "msg": "Dentro non capisce nessuno",
   "punti": [
    [
     "user",
     "Una persona che **non conosce il cinese** è chiusa in una stanza con un **libro di regole**"
    ],
    [
     "file-text",
     "Da una fessura riceve **fogli con ideogrammi**; per ogni sequenza il libro dice quali segni **copiare e restituire**"
    ],
    [
     "circle-check",
     "Fuori le risposte sembrano **perfette**: si pensa che dentro qualcuno capisca il cinese"
    ],
    [
     "circle-x",
     "Invece la persona ha solo seguito regole su **simboli di cui non conosce il significato**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "La stanza cinese",
   "id": "f-stanza"
  },
  {
   "tipo": "punti",
   "titolo": "Il computer è nella stanza",
   "msg": "Manipolare simboli non è capire",
   "punti": [
    [
     "cpu",
     "Per Searle un computer **esegue regole su simboli**, come la persona nella stanza"
    ],
    [
     "message-circle",
     "Anche se **supera il test di Turing**, non è detto che **capisca ciò che dice**"
    ],
    [
     "book-x",
     "**Manipolare simboli non è capire**"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "3.3",
   "titolo": "Punti di vista a confronto",
   "sotto": "Tre risposte, e nessuna è chiusa",
   "icona": "scale"
  },
  {
   "tipo": "tabella",
   "titolo": "Un computer può essere intelligente?",
   "msg": "Tre posizioni a confronto",
   "righe": [
    [
     "Posizione",
     "Idea",
     "Chi la sostiene",
     "Limite"
    ],
    [
     "Sì",
     "se si comporta in modo intelligente, è intelligente",
     "Turing, con il suo test",
     "il comportamento può ingannare, come con Hans"
    ],
    [
     "No",
     "senza comprensione non c’è intelligenza",
     "Searle, con la stanza cinese",
     "che cos’è esattamente la comprensione?"
    ],
    [
     "Dipende",
     "da che cosa intendiamo per intelligenza: svolgere compiti o capire",
     "chi parte dalla definizione (capitolo 2)",
     "rimanda la domanda alla definizione, ma non la risolve"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Una domanda aperta",
   "msg": "La risposta dipende da che cosa chiamiamo intelligenza",
   "punti": [
    [
     "scale",
     "Se conta **ciò che il sistema fa**, vince la posizione di Turing: la definizione operativa del **capitolo 2**"
    ],
    [
     "brain",
     "Se conta **capire**, vince Searle: ma nessuno sa dire con precisione che cosa sia la comprensione"
    ],
    [
     "book-open",
     "Per questo **nessuna delle tre risposte è chiusa**"
    ]
   ]
  }
 ]
};
