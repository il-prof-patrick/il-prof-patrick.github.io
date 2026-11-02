window.AULA = {
 "modulo": "Logica e IA simbolica",
 "n": "04",
 "titolo": "Implicazione e ragionamenti",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Implicazione e ragionamenti",
   "sotto": "Gli schemi di ragionamento sempre validi, che si concatenano fino a una conclusione sicura, e quelli che sembrano validi ma non lo sono.",
   "indice": [
    [
     "4.1",
     "Condizione necessaria e condizione sufficiente"
    ],
    [
     "4.2",
     "Inversa, contraria e contronominale"
    ],
    [
     "4.3",
     "Le regole di inferenza"
    ],
    [
     "4.4",
     "Le fallacie"
    ],
    [
     "4.5",
     "Conseguenza logica e derivazione"
    ],
    [
     "4.6",
     "Deduzione, induzione e abduzione"
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
   "num": "4.1",
   "titolo": "Condizione necessaria e condizione sufficiente",
   "sotto": "Che cosa basta e che cosa serve",
   "icona": "key-round"
  },
  {
   "tipo": "punti",
   "titolo": "Le implicazioni del regolamento",
   "msg": "Per leggerle bene servono due parole",
   "punti": [
    [
     "scroll-text",
     "«Se hai almeno 18 anni, puoi giustificarti da solo»"
    ],
    [
     "scroll-text",
     "«Se superi il limite di assenze, non puoi essere scrutinato»"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Sufficiente e necessaria",
   "msg": "In p → q",
   "tessere": [
    [
     "circle-check",
     "p è sufficiente per q",
     "**basta** che p sia vera perché q sia vera"
    ],
    [
     "key-round",
     "q è necessaria per p",
     "**senza q non può esserci p**, ma q da sola non basta"
    ]
   ],
   "nota": "Se una condizione è sia necessaria sia sufficiente vale il «se e solo se»: pari ↔ divisibile per 2."
  },
  {
   "tipo": "schema",
   "titolo": "Roma e l’Italia",
   "sel": "#s-roma"
  },
  {
   "tipo": "domanda",
   "testo": "Per essere promossi serve la sufficienza in tutte le materie. Se ho la sufficienza in tutte, sono promosso per forza?",
   "risposta": "no. La sufficienza in tutte le materie è una condizione **necessaria**, non sufficiente: serve anche, per esempio, aver frequentato abbastanza ore di lezione."
  },
  {
   "tipo": "errore",
   "no": "«L’ossigeno è sufficiente per accendere un fuoco.»",
   "si": "L’ossigeno è **necessario** (senza ossigeno il fuoco non si accende), ma non sufficiente: servono anche qualcosa che bruci e una fonte di calore."
  },
  {
   "tipo": "sezione",
   "num": "4.2",
   "titolo": "Inversa, contraria e contronominale",
   "sotto": "Tre frasi che somigliano a un’implicazione",
   "icona": "shuffle"
  },
  {
   "tipo": "tessere",
   "titolo": "Inversa, contraria, contronominale",
   "msg": "Da p → q si costruiscono altre tre frasi",
   "tessere": [
    [
     "shuffle",
     "Inversa",
     "scambia le due parti: **q → p**"
    ],
    [
     "circle-slash",
     "Contraria",
     "le nega: **¬p → ¬q**"
    ],
    [
     "repeat",
     "Contronominale",
     "le scambia e le nega: **¬q → ¬p**"
    ]
   ],
   "nota": "Solo la contronominale è equivalente all’implicazione di partenza."
  },
  {
   "tipo": "schema",
   "titolo": "Il quadrato delle quattro frasi",
   "sel": "#s-quadrato"
  },
  {
   "tipo": "domanda",
   "testo": "“Chi ha la patente ha almeno 18 anni”. Quindi chi non ha la patente ha meno di 18 anni?",
   "risposta": "no: quella è la contraria e non vale (tanti maggiorenni non hanno la patente). Vale la contronominale: chi ha meno di 18 anni non ha la patente."
  },
  {
   "tipo": "sezione",
   "num": "4.3",
   "titolo": "Le regole di inferenza",
   "sotto": "Gli stampi sempre validi",
   "icona": "cog"
  },
  {
   "tipo": "punti",
   "titolo": "Le regole di inferenza",
   "msg": "Schemi di ragionamento sempre validi",
   "punti": [
    [
     "shapes",
     "Se le premesse hanno una certa forma, permettono di ricavare una certa conclusione"
    ],
    [
     "repeat",
     "Valgono **qualunque cosa** ci sia al posto delle lettere"
    ],
    [
     "cog",
     "Sono gli strumenti con cui ragiona un **motore inferenziale**"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Sette regole",
   "msg": "Il simbolo ∴ si legge «quindi»",
   "righe": [
    [
     "Regola",
     "Schema"
    ],
    [
     "*modus ponens*",
     "p → q, p ∴ q"
    ],
    [
     "*modus tollens*",
     "p → q, ¬q ∴ ¬p"
    ],
    [
     "sillogismo ipotetico",
     "p → q, q → r ∴ p → r"
    ],
    [
     "sillogismo disgiuntivo",
     "p ∨ q, ¬p ∴ q"
    ],
    [
     "introduzione della congiunzione",
     "p, q ∴ p ∧ q"
    ],
    [
     "eliminazione della congiunzione",
     "p ∧ q ∴ p"
    ],
    [
     "introduzione della disgiunzione",
     "p ∴ p ∨ q"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Le regole come stampi",
   "sel": "#s-stampi"
  },
  {
   "tipo": "punti",
   "titolo": "Le abbiamo già viste all’opera",
   "msg": "Nella casa smart del capitolo 1",
   "punti": [
    [
     "house",
     "Il ***modus ponens*** è ciò che fa la casa quando una regola scatta"
    ],
    [
     "link",
     "Il **sillogismo ipotetico** è il ragionamento a catena: dalla sera alle luci accese"
    ]
   ]
  },
  {
   "tipo": "sezione",
   "num": "4.4",
   "titolo": "Le fallacie",
   "sotto": "Ragionamenti che sembrano validi",
   "icona": "triangle-alert"
  },
  {
   "tipo": "punti",
   "titolo": "Le fallacie",
   "msg": "Sembrano valide ma non lo sono",
   "punti": [
    [
     "triangle-alert",
     "Alcune hanno la forma di una regola valida, ma «storta»"
    ],
    [
     "message-circle-warning",
     "Altre sbagliano nel contenuto, pur sembrando ragionevoli"
    ],
    [
     "search",
     "Si smontano con un **controesempio**: premesse vere e conclusione falsa"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "“Se piove, la strada è bagnata”. La strada è bagnata: quindi piove?",
   "risposta": "non necessariamente: può essere passata la macchina che lava le strade, o si è rotto un tubo. È un’affermazione del conseguente."
  },
  {
   "tipo": "tessere",
   "titolo": "Regole storte",
   "msg": "Somigliano alle regole valide",
   "tessere": [
    [
     "droplets",
     "Affermazione del conseguente",
     "p → q, q, quindi p: «la strada è bagnata, quindi piove»"
    ],
    [
     "circle-slash",
     "Negazione dell’antecedente",
     "p → q, ¬p, quindi ¬q: «non hai studiato, quindi non passi»"
    ],
    [
     "split",
     "Affermazione di un disgiunto",
     "p ∨ q, p, quindi ¬q: l’OR letto come uno XOR"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Le fallacie di tutti i giorni",
   "msg": "Nella pubblicità, sui social, nelle discussioni",
   "tessere": [
    [
     "git-fork",
     "Falso dilemma",
     "«O sei con me o sei contro di me»"
    ],
    [
     "users",
     "Generalizzazione affrettata",
     "«Due ragazzi copiano, quindi copiano tutti»"
    ],
    [
     "clover",
     "*Post hoc*",
     "«Da quando ho il braccialetto prendo voti migliori»"
    ],
    [
     "user-x",
     "*Ad hominem*",
     "«Cosa ne sai tu di matematica, che hai 5?»"
    ],
    [
     "wheat",
     "Uomo di paglia",
     "«Vuoi meno compiti? Allora vuoi che non si studi più»"
    ],
    [
     "megaphone",
     "Maggioranza e autorità",
     "«Lo fanno tutti», «l’ha detto un influencer»"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Correlazione non è causa",
   "msg": "Vale anche per l’IA",
   "punti": [
    [
     "clover",
     "Che due cose capitino insieme **non vuol dire** che una causi l’altra"
    ],
    [
     "brain-circuit",
     "Un modello che impara dai dati trova **correlazioni, non cause**"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Valido o fallacia?",
   "w": "fallacie"
  },
  {
   "tipo": "errore",
   "no": "«Tutti i campioni bevono questa bibita: se la bevo divento un campione.»",
   "si": "È un’**affermazione del conseguente** («campione → beve la bibita; bevo la bibita; quindi sono un campione») e insieme una **falsa causa**: la pubblicità fa passare per una causa del successo una cosa che, al massimo, lo accompagna."
  },
  {
   "tipo": "sezione",
   "num": "4.5",
   "titolo": "Conseguenza logica e derivazione",
   "sotto": "Dalle premesse alla conclusione, passo dopo passo",
   "icona": "footprints"
  },
  {
   "tipo": "punti",
   "titolo": "La conseguenza logica",
   "msg": "Vera in tutti i casi in cui le premesse sono vere",
   "punti": [
    [
     "table",
     "Con la **tavola di verità**: sicura, ma le righe sono **2ⁿ** e diventano troppe"
    ],
    [
     "footprints",
     "Con una **derivazione**: una catena di passi, ognuno con una regola di inferenza"
    ],
    [
     "cog",
     "Un motore inferenziale **non prova tutti i casi: applica regole**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "L’indagine del detective",
   "id": "f-detective"
  },
  {
   "tipo": "sezione",
   "num": "4.6",
   "titolo": "Deduzione, induzione e abduzione",
   "sotto": "Ragionamenti certi e ragionamenti probabili",
   "icona": "scale"
  },
  {
   "tipo": "tessere",
   "titolo": "Tre tipi di ragionamento",
   "msg": "Non tutti i ragionamenti sono deduzioni",
   "tessere": [
    [
     "arrow-down",
     "Deduzione",
     "dalla regola generale al caso particolare: **certa**"
    ],
    [
     "arrow-up",
     "Induzione",
     "da tanti casi a una regola generale: **probabile**"
    ],
    [
     "search",
     "Abduzione",
     "la spiegazione più probabile di un fatto: **probabile**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "I fagioli di Peirce",
   "id": "f-fagioli"
  },
  {
   "tipo": "punti",
   "titolo": "Charles S. Peirce",
   "msg": "Il primo a distinguere i tre ragionamenti (1839–1914)",
   "punti": [
    [
     "scroll-text",
     "In un articolo del **1878**"
    ],
    [
     "bean",
     "Con l’esempio del **sacco di fagioli**"
    ]
   ],
   "foto": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/5/58/Charles_Sanders_Peirce.jpg",
    "tit": "Charles S. Peirce",
    "alt": "Charles S. Peirce"
   }
  },
  {
   "tipo": "anim",
   "titolo": "Il tacchino induttivista",
   "id": "f-tacchino"
  },
  {
   "tipo": "punti",
   "titolo": "Da un pollo a un tacchino",
   "msg": "La storia ha due autori",
   "punti": [
    [
     "history",
     "**Russell**, 1912: un pollo nutrito ogni giorno, fino al giorno in cui il fattore gli tira il collo"
    ],
    [
     "book",
     "**Alan Chalmers**, 1976: il «tacchino induttivista» in *Che cos’è questa scienza?*"
    ]
   ],
   "foto": {
    "src": "https://d3f44jafdqsrtg.cloudfront.net/authors/author-1135/_1600x1600_crop_center-center_none/Chalmers-pic.jpg",
    "tit": "Alan Chalmers",
    "alt": "Alan Chalmers"
   }
  },
  {
   "tipo": "tabella",
   "titolo": "Deduzione, induzione, abduzione",
   "msg": "A confronto",
   "righe": [
    [
     "",
     "Deduzione",
     "Induzione",
     "Abduzione"
    ],
    [
     "Parte da",
     "una regola e un caso",
     "tanti casi osservati",
     "una regola e un fatto osservato"
    ],
    [
     "Arriva a",
     "un risultato",
     "una regola generale",
     "la spiegazione più probabile"
    ],
    [
     "La conclusione è",
     "**certa**",
     "**probabile**",
     "**probabile**"
    ],
    [
     "Esempio",
     "Anna è abbonata: entra gratis",
     "il tacchino",
     "il medico: «probabilmente è influenza»"
    ],
    [
     "Nell’IA",
     "l’IA simbolica, che applica regole",
     "l’apprendimento automatico, che ricava regole",
     "i sistemi di diagnosi"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "L’abduzione",
   "msg": "Non è valida, ma usata con prudenza è utile",
   "punti": [
    [
     "triangle-alert",
     "Ha la forma di un’**affermazione del conseguente**: influenza → febbre; febbre; quindi influenza"
    ],
    [
     "stethoscope",
     "È il modo in cui medici e detective **scelgono l’ipotesi da verificare**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Il medico vede febbre e mal di gola e dice “è influenza”: ha fatto una deduzione?",
   "risposta": "no, un’abduzione: ha scelto la spiegazione più probabile, che potrebbe essere sbagliata. Per questo a volte servono altri esami."
  },
  {
   "tipo": "errore",
   "no": "«Il tacchino aveva visto il cibo arrivare per 300 giorni di fila: la sua regola era sicura.»",
   "si": "Era un’**induzione**, quindi solo **probabile**: per quanti siano i casi osservati, il caso successivo può smentire la regola."
  }
 ]
};
