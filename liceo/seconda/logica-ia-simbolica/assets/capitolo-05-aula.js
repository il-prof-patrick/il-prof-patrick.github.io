window.AULA = {
 "modulo": "Logica e IA simbolica",
 "n": "05",
 "titolo": "La logica dei predicati",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "La logica dei predicati",
   "sotto": "Aprire le proposizioni per vedere gli oggetti di cui parlano, le loro proprietà e le loro relazioni.",
   "indice": [
    [
     "5.1",
     "Quando le proposizioni non bastano"
    ],
    [
     "5.2",
     "Il linguaggio dei predicati"
    ],
    [
     "5.3",
     "Le proprietà delle relazioni"
    ],
    [
     "5.4",
     "Formule aperte e insiemi di verità"
    ],
    [
     "5.5",
     "Interpretazioni e mondi"
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
   "num": "5.1",
   "titolo": "Quando le proposizioni non bastano",
   "sotto": "Quando le proposizioni non bastano",
   "icona": "box"
  },
  {
   "tipo": "punti",
   "titolo": "Un ragionamento ovviamente giusto",
   "msg": "Eppure la logica proposizionale non lo dimostra",
   "punti": [
    [
     "ticket",
     "«Tutti gli abbonati entrano gratis. Anna è abbonata. Quindi Anna entra gratis.»"
    ],
    [
     "box",
     "Tre proposizioni atomiche diverse: **p, q, quindi r**"
    ],
    [
     "circle-x",
     "C’è una riga in cui p e q sono vere e r è falsa: **non è valido**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Frasi come blocchi chiusi",
   "msg": "La logica proposizionale non vede",
   "tessere": [
    [
     "user",
     "Gli oggetti",
     "di cui si parla: Anna"
    ],
    [
     "tag",
     "Proprietà e relazioni",
     "essere abbonata, entrare gratis"
    ],
    [
     "users",
     "«Tutti» e «qualcuno»",
     "parole che parlano di molti oggetti in una volta"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Aprire i blocchi",
   "id": "f-blocchi"
  },
  {
   "tipo": "punti",
   "titolo": "Una regola per tutti",
   "msg": "Per questo le basi di conoscenza si scrivono con i predicati",
   "punti": [
    [
     "house",
     "Con le proposizioni servirebbe una frase per ogni persona: «Marco è in casa», «Anna è in casa»…"
    ],
    [
     "user-check",
     "Con i predicati basta **InCasa(x)**"
    ],
    [
     "scroll-text",
     "E **una sola regola** vale per tutti"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "5.2",
   "titolo": "Il linguaggio dei predicati",
   "sotto": "Dominio, costanti, variabili e predicati",
   "icona": "shapes"
  },
  {
   "tipo": "tessere",
   "titolo": "Gli elementi nuovi",
   "msg": "Per parlare di oggetti",
   "tessere": [
    [
     "circle-dashed",
     "Dominio",
     "l’insieme degli oggetti di cui si parla: la classe, le città, i numeri"
    ],
    [
     "user",
     "Costanti",
     "nomi di un oggetto preciso, in minuscolo: anna, roma, 7"
    ],
    [
     "variable",
     "Variabili",
     "x, y, z: un oggetto qualsiasi del dominio"
    ],
    [
     "tag",
     "Predicati",
     "proprietà o relazioni, in maiuscolo: Abbonato(anna)"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Anatomia di una formula atomica",
   "sel": "#s-anatomia"
  },
  {
   "tipo": "tabella",
   "titolo": "L’arità",
   "msg": "Il numero di argomenti di un predicato",
   "righe": [
    [
     "Arità",
     "Esempio",
     "Che cosa dice"
    ],
    [
     "1 (proprietà)",
     "Abbonato(anna)",
     "Anna è abbonata"
    ],
    [
     "2 (relazione)",
     "Genitore(anna, marco)",
     "Anna è genitore di Marco"
    ],
    [
     "3 (relazione)",
     "Tra(firenze, bologna, roma)",
     "Firenze sta tra Bologna e Roma"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Segue(luca, giulia): vuol dire anche che Giulia segue Luca?",
   "risposta": "no. Dice che Luca segue Giulia (per esempio su Instagram); Giulia può non seguire Luca. L’ordine degli argomenti cambia il significato."
  },
  {
   "tipo": "errore",
   "no": "«Genitore(anna, marco) e Genitore(marco, anna) sono la stessa cosa.»",
   "si": "**L’ordine degli argomenti conta**: la prima dice che Anna è genitore di Marco, la seconda che Marco è genitore di Anna."
  },
  {
   "tipo": "punti",
   "titolo": "Frege e Peano",
   "msg": "La nascita della logica moderna",
   "punti": [
    [
     "book",
     "**Frege**, *Ideografia* (1879): inventa i predicati e i quantificatori"
    ],
    [
     "sigma",
     "**Peano**, Torino: scrive la matematica con simboli, come ∈ ed ∃"
    ],
    [
     "history",
     "Russell parte dai loro lavori"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/99/Young_frege.jpg",
    "tit": "Gottlob Frege",
    "alt": "Gottlob Frege"
   }
  },
  {
   "tipo": "sezione",
   "num": "5.3",
   "titolo": "Le proprietà delle relazioni",
   "sotto": "Ricavare fatti nuovi senza scriverli",
   "icona": "share-2"
  },
  {
   "tipo": "tessere",
   "titolo": "Le proprietà delle relazioni",
   "msg": "Una relazione R può essere",
   "tessere": [
    [
     "rotate-ccw",
     "Riflessiva",
     "ogni oggetto è in relazione con sé stesso: «è nella stessa classe di»"
    ],
    [
     "arrow-right-left",
     "Simmetrica",
     "se R(x, y) allora R(y, x): «stessa classe» sì, «segue su Instagram» no"
    ],
    [
     "git-commit-horizontal",
     "Transitiva",
     "da R(x, y) e R(y, z) segue R(x, z): «più alto di» sì, l’amicizia no"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Che proprietà ha?",
   "w": "relazioni"
  },
  {
   "tipo": "domanda",
   "testo": "Anna è amica di Bea e Bea è amica di Carla: allora Anna è amica di Carla?",
   "risposta": "non per forza: l’amicizia non è transitiva (Anna e Carla potrebbero non conoscersi). «Più alto di», invece, è transitiva."
  },
  {
   "tipo": "sezione",
   "num": "5.4",
   "titolo": "Formule aperte e insiemi di verità",
   "sotto": "Formule che aspettano un oggetto",
   "icona": "circle-dashed"
  },
  {
   "tipo": "punti",
   "titolo": "Le formule aperte",
   "msg": "Diventano proposizioni quando la variabile prende un valore",
   "punti": [
    [
     "variable",
     "«x è maggiore di 3» **non è né vera né falsa**"
    ],
    [
     "check",
     "«7 è maggiore di 3» è vera, «2 è maggiore di 3» è falsa"
    ],
    [
     "circle-dashed",
     "L’**insieme di verità**: gli oggetti che la rendono vera, {4, 5, …, 10} tra 1 e 10"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I connettivi come operazioni tra insiemi",
   "msg": "Si vedono con i diagrammi di Venn",
   "righe": [
    [
     "Connettivo",
     "Operazione tra insiemi",
     "Nel diagramma"
    ],
    [
     "P(x) ∧ Q(x)",
     "intersezione P ∩ Q",
     "la parte comune ai due cerchi"
    ],
    [
     "P(x) ∨ Q(x)",
     "unione P ∪ Q",
     "tutto ciò che sta in almeno un cerchio"
    ],
    [
     "¬P(x)",
     "complementare",
     "tutto ciò che sta fuori dal cerchio P"
    ],
    [
     "P(x) ⊕ Q(x)",
     "differenza simmetrica",
     "i due cerchi senza la parte comune"
    ],
    [
     "P(x) → Q(x) per ogni x",
     "inclusione P ⊆ Q",
     "il cerchio P sta dentro il cerchio Q"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "La classe e gli insiemi",
   "id": "f-insiemi"
  },
  {
   "tipo": "errore",
   "no": "«“x è maggiore di 3” è falsa.»",
   "si": "Non è né vera né falsa: è una **formula aperta**, non una proposizione. Diventa vera o falsa solo quando al posto di x si mette un numero."
  },
  {
   "tipo": "sezione",
   "num": "5.5",
   "titolo": "Interpretazioni e mondi",
   "sotto": "La stessa formula in mondi diversi",
   "icona": "globe"
  },
  {
   "tipo": "punti",
   "titolo": "Interpretazioni e mondi",
   "msg": "Il valore di una formula dipende dal mondo di cui si parla",
   "punti": [
    [
     "globe",
     "L’**interpretazione**: il dominio e il significato di costanti e predicati"
    ],
    [
     "moon",
     "InCasa(marco) è vera stasera e falsa domattina"
    ],
    [
     "database",
     "Una base di conoscenza è la **descrizione di un mondo**"
    ],
    [
     "triangle-alert",
     "Se la descrizione è sbagliata o incompleta, **lo saranno anche le conclusioni**"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Il mondo dei blocchi",
   "msg": "Un piccolo mondo per allenarsi a leggere le formule",
   "punti": [
    [
     "box",
     "Forme geometriche su una scacchiera: Cubo(a), ASinistraDi(a, b)"
    ],
    [
     "monitor",
     "*Tarski’s World*: il programma dice se ogni formula è vera o falsa in quel mondo"
    ]
   ],
   "foto": {
    "src": "https://www.gradegrinder.net/images/static-page-img/Tarskis-main-win7.png#intera",
    "tit": "Tarski’s World",
    "alt": "Tarski's World"
   }
  },
  {
   "tipo": "widget",
   "titolo": "Il mondo dei blocchi",
   "w": "blocchi"
  }
 ]
};
