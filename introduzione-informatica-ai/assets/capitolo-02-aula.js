window.AULA = {
 "modulo": "Introduzione a informatica ed AI",
 "n": "02",
 "titolo": "Il linguaggio del computer",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "Il linguaggio del computer",
   "sotto": "Come un computer rappresenta i numeri e le informazioni, e come si fanno i conti con i bit.",
   "indice": [
    [
     "2.1",
     "Segnali analogici e digitali"
    ],
    [
     "2.2",
     "I sistemi di numerazione"
    ],
    [
     "2.3",
     "Decimale, binario ed esadecimale"
    ],
    [
     "2.4",
     "Bit, byte e configurazioni"
    ],
    [
     "2.5",
     "Le conversioni"
    ],
    [
     "2.6",
     "Somma e sottrazione binaria"
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
   "testo": "Con tre interruttori, ognuno acceso o spento, quante combinazioni diverse si possono fare?",
   "risposta": "**8**: ogni interruttore in più raddoppia le combinazioni (2 × 2 × 2 = 2³)."
  },
  {
   "tipo": "sezione",
   "num": "2.1",
   "titolo": "Segnali analogici e digitali",
   "sotto": "Continuo o a scalini",
   "icona": "audio-waveform"
  },
  {
   "tipo": "tabella",
   "titolo": "Analogico e digitale",
   "msg": "Valori continui contro valori discreti",
   "righe": [
    [
     "",
     "Analogico",
     "Digitale"
    ],
    [
     "Valori",
     "continui: infiniti valori",
     "discreti: un numero finito di valori ammessi"
    ],
    [
     "Esempi",
     "voce, lancette, vinile, termometro a mercurio",
     "orologio con i numeri, CD, mp3, foto sul telefono"
    ],
    [
     "Pregio",
     "molto fedele alla realtà",
     "si copia senza perdite e resiste al disturbo"
    ],
    [
     "Difetto",
     "ogni copia lo peggiora",
     "è un’approssimazione"
    ]
   ]
  },
  {
   "tipo": "schema",
   "titolo": "Lo stesso segnale in due modi",
   "msg": "La curva continua diventa una scala di punti",
   "sel": "#s-segnale"
  },
  {
   "tipo": "punti",
   "titolo": "Perché il computer è digitale",
   "msg": "Due stati sono facili da distinguere",
   "punti": [
    [
     "layers",
     "Digitale non vuol dire per forza 0 e 1: il **binario** è il digitale con **due soli valori**"
    ],
    [
     "toggle-left",
     "Un circuito distingue bene **acceso** e **spento**, tensione alta e bassa"
    ],
    [
     "binary",
     "Chiamiamo i due stati **0** e **1**: una cifra che vale 0 o 1 è un **bit**"
    ],
    [
     "shield-check",
     "Il disturbo non li confonde: **copie e trasmissioni senza errori**"
    ],
    [
     "cpu",
     "Con sequenze di bit si rappresenta **qualsiasi informazione**"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "Da analogico a digitale",
   "msg": "Tre passaggi in fila",
   "tessere": [
    [
     "clock",
     "Campionamento",
     "Si **misura** il segnale a intervalli regolari"
    ],
    [
     "layers",
     "Quantizzazione",
     "Ogni misura si **arrotonda** a uno dei livelli ammessi"
    ],
    [
     "binary",
     "Codifica",
     "Ogni livello si **scrive in binario**"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova: campioni e livelli",
   "w": "campiona"
  },
  {
   "tipo": "domanda",
   "testo": "Per avere un suono più fedele, che cosa conviene aumentare? E che cosa si paga?",
   "risposta": "I **campioni** al secondo e i **livelli** per campione. Si paga in **bit**: un CD ne usa 44.100 × 16 × 2 = 1.411.200 al secondo."
  },
  {
   "tipo": "sezione",
   "num": "2.2",
   "titolo": "I sistemi di numerazione",
   "sotto": "Additivi e posizionali",
   "icona": "hash"
  },
  {
   "tipo": "punti",
   "titolo": "Sistema di numerazione",
   "msg": "Simboli e regole per scrivere i numeri",
   "punti": [
    [
     "type",
     "Un insieme di **simboli**"
    ],
    [
     "list-checks",
     "E di **regole** per combinarli e dare loro un valore"
    ],
    [
     "layers",
     "Due grandi famiglie: **additivi** e **posizionali**"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Sistemi additivi: i numeri romani",
   "msg": "Ogni simbolo vale sempre lo stesso: si sommano",
   "html": "XXVII = X + X + V + I + I\n       = 10 + 10 + 5 + 1 + 1 = 27\n\nMDCLXVI = 1000+500+100+50+10+5+1 = 1666",
   "note": [
    [
     "plus",
     "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000"
    ],
    [
     "minus",
     "Regola sottrattiva: IV = 5 − 1, IX = 10 − 1"
    ],
    [
     "x",
     "Nessuno **zero**, calcoli in colonna quasi impossibili"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Sistemi posizionali",
   "msg": "Il valore della cifra dipende dal posto",
   "punti": [
    [
     "map-pin",
     "In **212** la cifra 2 compare due volte: la prima vale **200**, la seconda **2**"
    ],
    [
     "hash",
     "Il numero di cifre diverse è la **base**"
    ],
    [
     "circle",
     "Lo **zero** serve da segnaposto: senza, 205 e 25 si confonderebbero"
    ],
    [
     "calculator",
     "I calcoli in **colonna** funzionano"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Additivo e posizionale",
   "msg": "Che cosa cambia",
   "righe": [
    [
     "",
     "Additivo",
     "Posizionale"
    ],
    [
     "Valore di un simbolo",
     "fisso",
     "dipende dalla posizione"
    ],
    [
     "Come si legge",
     "si sommano i simboli",
     "cifra × peso, poi si somma"
    ],
    [
     "Zero",
     "non serve",
     "indispensabile"
    ],
    [
     "Esempi",
     "numeri romani, egizi",
     "decimale, binario, esadecimale"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Come si legge un numero",
   "msg": "Cifra per peso, poi si somma",
   "html": "347 (base 10) = 3·10² + 4·10¹ + 7·10⁰\n              = 300 + 40 + 7\n\n1011 (base 2) = 1·2³ + 0·2² + 1·2¹ + 1·2⁰\n              = 8 + 0 + 2 + 1 = 11",
   "note": [
    [
     "arrow-left",
     "I pesi sono le potenze della base, da destra: b⁰, b¹, b²…"
    ],
    [
     "plus",
     "Il valore è la **somma** di cifra × peso"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Nel numero 1010 in base 2 ci sono due cifre 1: valgono lo stesso? Quanto vale ciascuna?",
   "risposta": "No: la prima vale **8** (2³) e la seconda **2** (2¹). In totale 8 + 2 = **10**."
  },
  {
   "tipo": "errore",
   "titolo": "Errore tipico",
   "no": "«Il numero 15 vale 1 + 5 = 6, come i numeri romani: si sommano i simboli.»",
   "si": "Quella è la regola dei sistemi **additivi**. Nel **posizionale** la cifra 1 sta tra le decine e vale 10: 15 = **1·10 + 5**."
  },
  {
   "tipo": "sezione",
   "num": "2.3",
   "titolo": "Decimale, binario ed esadecimale",
   "sotto": "Tre basi, un solo metodo",
   "icona": "binary"
  },
  {
   "tipo": "tabella",
   "titolo": "Le tre basi",
   "msg": "Stesso funzionamento, base e cifre diverse",
   "righe": [
    [
     "Sistema",
     "Base",
     "Cifre",
     "Pesi",
     "Dove"
    ],
    [
     "Decimale",
     "10",
     "0–9",
     "1, 10, 100…",
     "la vita di tutti i giorni"
    ],
    [
     "Binario",
     "2",
     "0, 1",
     "1, 2, 4, 8, 16…",
     "dentro il computer"
    ],
    [
     "Esadecimale",
     "16",
     "0–9, A–F",
     "1, 16, 256…",
     "colori, indirizzi MAC"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I primi numeri nelle tre basi",
   "msg": "Da 0 a 8",
   "righe": [
    [
     "Decimale",
     "Binario",
     "Esadecimale"
    ],
    [
     "0",
     "0000",
     "0"
    ],
    [
     "1",
     "0001",
     "1"
    ],
    [
     "2",
     "0010",
     "2"
    ],
    [
     "3",
     "0011",
     "3"
    ],
    [
     "4",
     "0100",
     "4"
    ],
    [
     "5",
     "0101",
     "5"
    ],
    [
     "6",
     "0110",
     "6"
    ],
    [
     "7",
     "0111",
     "7"
    ],
    [
     "8",
     "1000",
     "8"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I primi numeri nelle tre basi",
   "msg": "Da 9 a 16: da 0 a 15 bastano 4 bit e una cifra esadecimale",
   "righe": [
    [
     "Decimale",
     "Binario",
     "Esadecimale"
    ],
    [
     "9",
     "1001",
     "9"
    ],
    [
     "10",
     "1010",
     "A"
    ],
    [
     "11",
     "1011",
     "B"
    ],
    [
     "12",
     "1100",
     "C"
    ],
    [
     "13",
     "1101",
     "D"
    ],
    [
     "14",
     "1110",
     "E"
    ],
    [
     "15",
     "1111",
     "F"
    ],
    [
     "16",
     "10000",
     "10"
    ]
   ]
  },
  {
   "tipo": "widget",
   "titolo": "Prova: otto interruttori",
   "w": "bit"
  },
  {
   "tipo": "domanda",
   "testo": "Qual è il numero più grande che si può scrivere con 8 interruttori (un byte)?",
   "risposta": "Tutti accesi: 11111111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = **255**, cioè 2⁸ − 1."
  },
  {
   "tipo": "sezione",
   "num": "2.4",
   "titolo": "Bit, byte e configurazioni",
   "sotto": "Quante cose si distinguono con n bit",
   "icona": "database"
  },
  {
   "tipo": "punti",
   "titolo": "Dati n bit, quante configurazioni?",
   "msg": "Ogni bit in più raddoppia",
   "punti": [
    [
     "binary",
     "Un **bit** è 0 o 1; un **byte** sono **8 bit**"
    ],
    [
     "x",
     "Con 1 bit: 2 configurazioni. Con 2 bit: 00, 01, 10, 11 → **4**"
    ],
    [
     "zap",
     "Con **n bit** le configurazioni sono **2ⁿ**"
    ],
    [
     "list-checks",
     "Metodo: leggi n, calcola 2ⁿ e scrivi la risposta"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Con 3 bit: ogni bit raddoppia",
   "id": "f-config"
  },
  {
   "tipo": "tabella",
   "titolo": "Le potenze di 2",
   "msg": "Da imparare a memoria",
   "righe": [
    [
     "Bit",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "10",
     "16"
    ],
    [
     "2ⁿ",
     "2",
     "4",
     "8",
     "16",
     "32",
     "64",
     "128",
     "256",
     "1.024",
     "65.536"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Date m configurazioni, quanti bit?",
   "msg": "La prima potenza di 2 che arriva a m",
   "punti": [
    [
     "list-ordered",
     "Scrivi le potenze di 2: 2, 4, 8, 16, 32, 64, 128, 256, 512…"
    ],
    [
     "search",
     "Trova la **prima maggiore o uguale a m**"
    ],
    [
     "hash",
     "Il suo **esponente** è il numero di bit"
    ],
    [
     "arrow-up",
     "Si arrotonda sempre **per eccesso**: niente mezzi bit"
    ],
    [
     "tv",
     "**Esempio**: 40 canali → 2⁵ = 32 non basta, 2⁶ = 64 sì → **6 bit**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Quanti bit per 40 canali?",
   "id": "f-bitper"
  },
  {
   "tipo": "errore",
   "titolo": "Errore tipico",
   "no": "«Per 40 canali servono 40 / 2 = 20 bit», oppure «5 bit, perché 32 è quasi 40».",
   "si": "Non si divide per 2: si cerca la prima potenza di 2 che arriva **almeno** a m. **32 non basta**: il canale 33 non avrebbe un codice. Servono **6 bit**."
  },
  {
   "tipo": "punti",
   "titolo": "Contare in binario",
   "msg": "Come un contachilometri con due sole cifre",
   "punti": [
    [
     "plus",
     "Per il numero successivo si **aggiunge 1**"
    ],
    [
     "arrow-left",
     "Parti dalla cifra di **destra**"
    ],
    [
     "check",
     "Se è **0** diventa **1** e hai finito"
    ],
    [
     "refresh-cw",
     "Se è **1** diventa **0** e **riporti** alla cifra a sinistra"
    ],
    [
     "hash",
     "Se finiscono le cifre aggiungi un **1** davanti"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Contare in binario: dall’11 al 16",
   "id": "f-conta"
  },
  {
   "tipo": "tabella",
   "titolo": "I multipli del byte",
   "msg": "Dal byte al terabyte: ×1.000 oppure ×1.024",
   "righe": [
    [
     "Sistema internazionale",
     "Sistema binario",
     "Il binario è più grande del",
     "Un esempio di questa grandezza"
    ],
    [
     " byte  (B) 1 byte",
     " byte  (B) 1 byte",
     "—",
     "una lettera o una cifra di un testo"
    ],
    [
     " kilobyte  (kB) 10³ = 1.000",
     " kibibyte  (KiB) 2¹⁰ = 1.024",
     "2,4%",
     "un breve messaggio; una pagina di solo testo occupa qualche kB"
    ],
    [
     " megabyte  (MB) 10⁶ = 1.000.000",
     " mebibyte  (MiB) 2²⁰ = 1.048.576",
     "4,9%",
     "una foto dello smartphone (qualche MB), una canzone in mp3 (circa 4 MB)"
    ],
    [
     " gigabyte  (GB) 10⁹",
     " gibibyte  (GiB) 2³⁰ = 1.073.741.824",
     "7,4%",
     "un film in alta definizione (qualche GB), la memoria di un telefono (128 GB)"
    ],
    [
     " terabyte  (TB) 10¹²",
     " tebibyte  (TiB) 2⁴⁰",
     "10,0%",
     "il disco di un computer (1 o 2 TB)"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I multipli del byte",
   "msg": "Dal petabyte allo yottabyte",
   "righe": [
    [
     "Sistema internazionale",
     "Sistema binario",
     "Il binario è più grande del",
     "Un esempio di questa grandezza"
    ],
    [
     " petabyte  (PB) 10¹⁵",
     " pebibyte  (PiB) 2⁵⁰",
     "12,6%",
     "un grande data center: decine o centinaia di PB"
    ],
    [
     " exabyte  (EB) 10¹⁸",
     " exbibyte  (EiB) 2⁶⁰",
     "15,3%",
     "tutto il traffico di internet nel mondo in un giorno: circa una decina di EB"
    ],
    [
     " zettabyte  (ZB) 10²¹",
     " zebibyte  (ZiB) 2⁷⁰",
     "18,1%",
     "tutti i dati creati nel mondo in un anno: più di 100 ZB (stime recenti)"
    ],
    [
     " yottabyte  (YB) 10²⁴",
     " yobibyte  (YiB) 2⁸⁰",
     "20,9%",
     "nessun archivio arriva ancora a tanto: 1 YB è mille ZB"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "MB o MiB?",
   "msg": "Numeri vicini, ma non uguali",
   "punti": [
    [
     "scale",
     "**1 MB = 1.000.000 byte**, **1 MiB = 1.048.576 byte**: il MiB è più grande del **4,9%**"
    ],
    [
     "trending-up",
     "La differenza **cresce** a ogni gradino: 7,4% per i giga, 10% per i tera, quasi 21% per gli yotta"
    ],
    [
     "store",
     "I **rivenditori** usano il sistema internazionale: un disco «da 1 TB» = 10¹² byte"
    ],
    [
     "monitor",
     "**Windows** conta in potenze di 2 e mostra **931 GB**: stessi byte, unità diverse"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Come si fa un’equivalenza",
   "msg": "Si contano i gradini e si moltiplica o si divide",
   "punti": [
    [
     "list-ordered",
     "Metti in fila B, kB, MB, GB, TB, PB"
    ],
    [
     "footprints",
     "Conta i **gradini** tra le due unità"
    ],
    [
     "arrow-right-left",
     "Verso l’unità più **piccola** si **moltiplica** per 1.000 a gradino; verso la più grande si **divide**"
    ],
    [
     "files",
     "Per «quanti file»: stessa unità, poi **capacità : dimensione**"
    ],
    [
     "calculator",
     "**Esempio**: 3 GB → kB = 3 × 1.000 × 1.000 = **3.000.000 kB**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "3 GB in kB: la scala delle unità",
   "id": "f-si"
  },
  {
   "tipo": "anim",
   "titolo": "5 MiB in byte",
   "id": "f-iec"
  },
  {
   "tipo": "errore",
   "titolo": "Errore tipico",
   "no": "«1 MB e 1 MiB sono la stessa cosa: sono tutti megabyte.»",
   "si": "**1 MB = 1.000.000 byte**, **1 MiB = 1.048.576 byte**. Un disco da «1 TB» per il computer ne contiene circa **931 GiB**: non manca spazio, sono unità diverse."
  },
  {
   "tipo": "sezione",
   "num": "2.5",
   "titolo": "Le conversioni",
   "sotto": "Da una base all’altra, passo passo",
   "icona": "arrow-right-left"
  },
  {
   "tipo": "anim",
   "titolo": "Da binario a decimale",
   "id": "f-b2d"
  },
  {
   "tipo": "anim",
   "titolo": "Da decimale a binario",
   "id": "f-d2b"
  },
  {
   "tipo": "widget",
   "titolo": "Prova: decimale → binario, un passo alla volta",
   "w": "divisioni"
  },
  {
   "tipo": "errore",
   "titolo": "Errore tipico",
   "no": "«Leggo i resti dall’alto: 37 diventa 101001.»",
   "si": "I resti si leggono **dal basso verso l’alto**: l’ultimo è la cifra di sinistra. Controllo: 101001 vale 41, non 37."
  },
  {
   "tipo": "anim",
   "titolo": "Da binario a esadecimale",
   "id": "f-b2h"
  },
  {
   "tipo": "anim",
   "titolo": "Da esadecimale a binario",
   "id": "f-h2b"
  },
  {
   "tipo": "anim",
   "titolo": "Da base n a base m",
   "id": "f-nm"
  },
  {
   "tipo": "sezione",
   "num": "2.6",
   "titolo": "Somma e sottrazione binaria",
   "sotto": "In colonna, come in decimale",
   "icona": "calculator"
  },
  {
   "tipo": "tabella",
   "titolo": "Le regole della somma",
   "msg": "Solo quattro casi, e un riporto",
   "righe": [
    [
     "Cifre",
     "Risultato",
     "Si scrive",
     "Riporto"
    ],
    [
     "0 + 0",
     "0",
     "0",
     "—"
    ],
    [
     "0 + 1",
     "1",
     "1",
     "—"
    ],
    [
     "1 + 1",
     "2 = 10",
     "0",
     "1"
    ],
    [
     "1 + 1 + 1 (con riporto)",
     "3 = 11",
     "1",
     "1"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Una somma binaria",
   "id": "f-somma"
  },
  {
   "tipo": "punti",
   "titolo": "La sottrazione",
   "msg": "Il caso difficile è 0 − 1",
   "punti": [
    [
     "check",
     "**0 − 0 = 0**, **1 − 0 = 1**, **1 − 1 = 0**"
    ],
    [
     "triangle-alert",
     "Con **0 − 1** non si può: serve un **prestito**"
    ],
    [
     "arrow-left",
     "Il prestito si prende dal primo **1** a sinistra, che diventa **0**"
    ],
    [
     "hash",
     "Gli 0 in mezzo diventano **1** e la colonna in difficoltà ne riceve **2** (10)"
    ],
    [
     "refresh-cw",
     "Controllo: **risultato + sottraendo = numero di partenza**"
    ]
   ]
  },
  {
   "tipo": "anim",
   "titolo": "Una sottrazione con prestito",
   "id": "f-sottr"
  },
  {
   "tipo": "errore",
   "titolo": "Errore tipico",
   "no": "«100 − 1: nella colonna di destra 0 − 1 fa 1, il resto lo ricopio: 101.»",
   "si": "**0 − 1 fa 1 solo con un prestito**, tolto alla colonna a sinistra. Qui 100 − 1 è 4 − 1 = 3, cioè **011**, e non 5 (101)."
  }
 ]
};
