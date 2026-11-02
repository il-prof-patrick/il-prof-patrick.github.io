window.AULA = {
 "modulo": "Logica e IA simbolica",
 "n": "03",
 "titolo": "Tavole di verità",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Tavole di verità",
   "sotto": "Calcolare il valore di una formula in tutte le situazioni possibili: sempre vera, mai vera o vera solo a volte.",
   "indice": [
    [
     "3.1",
     "Costruire la tavola di una formula"
    ],
    [
     "3.2",
     "Tautologie, contraddizioni e formule soddisfacibili"
    ],
    [
     "3.3",
     "Equivalenza logica"
    ],
    [
     "3.4",
     "Le leggi della logica"
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
   "num": "3.1",
   "titolo": "Costruire la tavola di una formula",
   "sotto": "Tutti i casi possibili, uno per riga",
   "icona": "table"
  },
  {
   "tipo": "punti",
   "titolo": "L’isola dei cavalieri e dei furfanti",
   "msg": "I cavalieri dicono sempre il vero, i furfanti mentono sempre",
   "punti": [
    [
     "users",
     "Incontri due abitanti, A e B"
    ],
    [
     "message-circle",
     "A dice: «**Siamo entrambi furfanti**»"
    ],
    [
     "circle-help",
     "Che cosa sono A e B?"
    ]
   ]
  },
  {
   "tipo": "formula",
   "titolo": "Prima si formalizza",
   "msg": "A è un cavaliere se e solo se ciò che dice è vero",
   "formula": "a ↔ (¬a ∧ ¬b)",
   "righe": [
    [
     "a",
     "A è un cavaliere"
    ],
    [
     "b",
     "B è un cavaliere"
    ],
    [
     "¬a ∧ ¬b",
     "ciò che dice A: «siamo entrambi furfanti»"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "La tavola in tre mosse",
   "msg": "Il valore della formula per ogni combinazione delle variabili",
   "tessere": [
    [
     "rows-3",
     "1 · Le righe",
     "**2ⁿ** per n variabili, partendo dal falso: metà F e metà V, poi blocchi di un quarto…"
    ],
    [
     "columns-3",
     "2 · Le colonne intermedie",
     "una per ogni pezzo, **dall’interno verso l’esterno**"
    ],
    [
     "flag",
     "3 · La colonna finale",
     "il valore della formula intera in ogni caso"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Ogni variabile raddoppia le righe",
   "msg": "Con n variabili le righe sono 2ⁿ",
   "punti": [
    [
     "dice-1",
     "1 variabile → **2** righe"
    ],
    [
     "dice-2",
     "2 variabili → **4** righe"
    ],
    [
     "dice-3",
     "3 variabili → **8** righe"
    ],
    [
     "triangle-alert",
     "10 variabili → **1024** righe"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "La tavola risolve l’enigma",
   "id": "f-enigma"
  },
  {
   "tipo": "punti",
   "titolo": "Leibniz: «*Calculemus!*»",
   "msg": "Risolvere le discussioni facendo i conti (1646–1716)",
   "punti": [
    [
     "languages",
     "Sognava una lingua in cui **ogni ragionamento si scrive con simboli precisi**"
    ],
    [
     "calculator",
     "Davanti a un disaccordo: «*Calculemus!*», «**calcoliamo!**»"
    ],
    [
     "table",
     "Le tavole di verità realizzano una piccola parte del suo sogno"
    ],
    [
     "binary",
     "Inventa il **sistema binario** moderno (1703): 0 e 1, falso e vero"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Gottfried_Wilhelm_Leibniz%2C_Bernhard_Christoph_Francke.jpg",
    "tit": "Gottfried Wilhelm Leibniz",
    "alt": "Gottfried Wilhelm Leibniz"
   }
  },
  {
   "tipo": "sezione",
   "num": "3.2",
   "titolo": "Tautologie, contraddizioni e formule soddisfacibili",
   "sotto": "Sempre vera, mai vera o vera a volte",
   "icona": "scale"
  },
  {
   "tipo": "tessere",
   "titolo": "Tre tipi di formule",
   "msg": "Si riconoscono dalla colonna finale",
   "tessere": [
    [
     "circle-check",
     "Tautologia",
     "**vera in ogni riga**, qualunque siano i valori delle variabili"
    ],
    [
     "circle-x",
     "Contraddizione",
     "**falsa in ogni riga**"
    ],
    [
     "circle-dot",
     "Soddisfacibile",
     "**vera in almeno una riga**: esiste un caso che la rende vera"
    ]
   ],
   "nota": "Una tautologia è anche soddisfacibile; una contraddizione è una formula non soddisfacibile."
  },
  {
   "tipo": "schema",
   "titolo": "Tre formule, tre colonne finali",
   "sel": "#s-tre-formule"
  },
  {
   "tipo": "punti",
   "titolo": "I principi sono tautologie",
   "msg": "La logica classica del capitolo 2, in formule",
   "punti": [
    [
     "split",
     "Terzo escluso: **p ∨ ¬p**, «piove o non piove»"
    ],
    [
     "ban",
     "Non contraddizione: **¬(p ∧ ¬p)**, «non è vero che piove e non piove»"
    ],
    [
     "circle-x",
     "**p ∧ ¬p**, «piove e non piove», è una contraddizione"
    ],
    [
     "puzzle",
     "La formula dell’enigma è soddisfacibile: vera in **una sola** riga, ed è la soluzione"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "“Domani piove oppure domani non piove”: è una previsione utile?",
   "risposta": "no. È sempre vera, qualunque tempo faccia: è una tautologia, quindi non dà nessuna informazione sul tempo di domani."
  },
  {
   "tipo": "errore",
   "no": "«Una tautologia è una formula che dice una cosa vera.»",
   "si": "Una tautologia è vera **in ogni caso**, qualunque siano i valori delle variabili. Proprio per questo **non dice niente sul mondo**: «piove o non piove» è vera sia che piova sia che non piova."
  },
  {
   "tipo": "sezione",
   "num": "3.3",
   "titolo": "Equivalenza logica",
   "sotto": "Due formule che dicono la stessa cosa",
   "icona": "equal"
  },
  {
   "tipo": "punti",
   "titolo": "L’equivalenza logica",
   "msg": "A ≡ B se hanno la stessa colonna finale",
   "punti": [
    [
     "equal",
     "In ogni caso sono **entrambe vere o entrambe false**"
    ],
    [
     "repeat",
     "Dicono la stessa cosa in modi diversi: **una si può sostituire con l’altra**"
    ],
    [
     "film",
     "«Se prendi 8 ti porto al cinema» = «non prendi 8, oppure ti porto al cinema»"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Stessa colonna, stessa formula",
   "sel": "#s-stessa-colonna"
  },
  {
   "tipo": "tessere",
   "titolo": "≡ non è ↔",
   "msg": "Un connettivo e un’affermazione sulle formule",
   "tessere": [
    [
     "arrow-right-left",
     "↔ è un connettivo",
     "sta **dentro** una formula, che può essere vera o falsa"
    ],
    [
     "equal",
     "≡ non è un connettivo",
     "è un’affermazione **su** due formule: dice che sono equivalenti"
    ]
   ],
   "nota": "A ≡ B vuol dire che la formula A ↔ B è una tautologia."
  },
  {
   "tipo": "sezione",
   "num": "3.4",
   "titolo": "Le leggi della logica",
   "sotto": "Riscrivere le formule senza cambiarne il valore",
   "icona": "wand-sparkles"
  },
  {
   "tipo": "tabella",
   "titolo": "Le leggi della logica",
   "msg": "Equivalenze che valgono sempre, qualunque cosa ci sia al posto di p, q e r",
   "righe": [
    [
     "Legge",
     "Formula"
    ],
    [
     "doppia negazione",
     "¬¬p ≡ p"
    ],
    [
     "commutativa",
     "p ∧ q ≡ q ∧ p · p ∨ q ≡ q ∨ p"
    ],
    [
     "associativa",
     "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r) · lo stesso per ∨"
    ],
    [
     "distributiva",
     "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) · p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)"
    ],
    [
     "idempotenza",
     "p ∧ p ≡ p · p ∨ p ≡ p"
    ],
    [
     "assorbimento",
     "p ∧ (p ∨ q) ≡ p · p ∨ (p ∧ q) ≡ p"
    ],
    [
     "De Morgan",
     "¬(p ∧ q) ≡ ¬p ∨ ¬q · ¬(p ∨ q) ≡ ¬p ∧ ¬q"
    ],
    [
     "implicazione",
     "p → q ≡ ¬p ∨ q"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Le leggi di De Morgan",
   "msg": "Quelle che si sbagliano più spesso",
   "punti": [
    [
     "circle-slash",
     "Negando un **AND** si ottiene un **OR** delle negazioni: ¬(p ∧ q) ≡ ¬p ∨ ¬q"
    ],
    [
     "circle-slash",
     "Negando un **OR** si ottiene un **AND** delle negazioni: ¬(p ∨ q) ≡ ¬p ∧ ¬q"
    ],
    [
     "users",
     "«Non è vero che Marco o Luca sono venuti» = «**Né** Marco **né** Luca sono venuti»"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "“Non è vero che Marco e Luca sono venuti tutti e due”: quindi nessuno dei due è venuto?",
   "risposta": "no. Vuol dire che almeno uno dei due non è venuto (magari Marco sì e Luca no): per De Morgan ¬(m ∧ l) ≡ ¬m ∨ ¬l."
  },
  {
   "tipo": "widget",
   "titolo": "Verifica la legge",
   "w": "leggi"
  },
  {
   "tipo": "errore",
   "no": "«¬(p ∨ q) ≡ ¬p ∨ ¬q»",
   "si": "Negando un OR si ottiene un **AND** delle negazioni: **¬(p ∨ q) ≡ ¬p ∧ ¬q**. «Non è vero che piove o nevica» vuol dire «non piove **e** non nevica»."
  }
 ]
};
