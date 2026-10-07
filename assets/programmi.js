/* Indirizzi e moduli per anno. Per aggiungere un modulo, aggiungilo all'array giusto in MODULI. */
window.INDIRIZZI = {
  'itis': { nome: 'ITIS', accent: '--a-prog' },
  'scienze-applicate': { nome: 'Liceo Scientifico Scienze Applicate', accent: '--a-dati' },
  'curvatura-ai': { nome: 'Liceo Scientifico Curvatura AI', accent: '--a-ia' }
};

window.MODULI = {
  'itis-1': [],
  'itis-2': [],
  'itis-3': [],
  'itis-4': [],
  'itis-5': [],

  'scienze-applicate-1': [],
  'scienze-applicate-2': [],
  'scienze-applicate-3': [],
  'scienze-applicate-4': [],
  'scienze-applicate-5': [],

  'curvatura-ai-1': [
    {
      titolo: 'Introduzione a informatica e AI',
      descr: 'Che cos\'è l\'informatica, come "ragionano" i computer e che cosa significa davvero intelligenza artificiale: i concetti di base per tutto l\'anno.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-introduzione-informatica-ai.jpg'
    },
    {
      titolo: 'Algoritmi con Flowgorithm',
      descr: 'Pensare per passi: descrivere un problema con un algoritmo, disegnarlo come diagramma di flusso con Flowgorithm ed eseguirlo istruzione per istruzione.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-algoritmi-flowgorithm.jpg'
    },
    {
      titolo: 'Architettura di Von Neumann',
      descr: 'Dentro il computer: CPU, memoria e dispositivi di input e output, e come lavorano insieme per eseguire un programma.',
      link: 'von-neumann/',
      stato: 'disponibile',
      immagine: 'assets/immagini/modulo-von-neumann.jpg'
    },
    {
      titolo: 'Codifica dei dati',
      descr: 'Come un computer rappresenta numeri, testi, immagini e suoni usando solo 0 e 1: sistema binario e codifiche.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-codifica-dati.jpg'
    },
    {
      titolo: 'Documenti',
      descr: 'Scrivere documenti ben fatti: struttura, stili e impaginazione per testi chiari, ordinati e professionali.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-documenti.jpg'
    },
    {
      titolo: 'Presentazioni',
      descr: 'Costruire presentazioni efficaci: scaletta, immagini e slide leggibili per comunicare bene un\'idea.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-presentazioni.jpg'
    },
    {
      titolo: 'Prompt Engineering',
      descr: 'Come dare istruzioni chiare a un\'intelligenza artificiale: scrivere prompt efficaci e valutare criticamente le risposte.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-prompt-engineering.jpg'
    }
  ],
  'curvatura-ai-2': [
    {
      titolo: 'Reti e Internet',
      descr: '7 capitoli per capire come viaggiano i dati: dalla comunicazione digitale alle reti, da Internet al Web, fino a 5G, IoT, cloud e intelligenza artificiale.',
      link: 'reti-internet/index.html',
      stato: 'disponibile',
      immagine: 'assets/immagini/modulo-reti-internet.jpg'
    },
    {
      titolo: 'Logica e AI simbolica',
      descr: 'Come si ragiona con regole e simboli: logica proposizionale, sistemi esperti e le basi dell\'intelligenza artificiale simbolica.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-logica-ai.jpg'
    },
    {
      titolo: 'Sistemi operativi e sicurezza',
      descr: 'Come funziona un sistema operativo, processi e permessi, e le basi per proteggere dati e dispositivi.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-sistemi-operativi.png'
    },
    {
      titolo: 'Fogli Google',
      descr: 'Formule, tabelle e automazioni: usare i fogli di calcolo per organizzare dati e automatizzare compiti ripetitivi.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-fogli-google.jpg'
    },
    {
      titolo: 'Python - Le basi',
      descr: 'Variabili, cicli, funzioni: i primi passi per scrivere ed eseguire codice Python.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-python-basi.jpg'
    }
  ],
  'curvatura-ai-3': [
    {
      titolo: 'Python - Avanzato',
      descr: 'Oltre le basi: strutture dati, funzioni, file e gestione degli errori per scrivere programmi più completi e ben organizzati.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-python-avanzato.jpg'
    },
    {
      titolo: 'Linguaggi e computazione',
      descr: 'Come si descrive un calcolo: linguaggi formali, grammatiche e automi, fino a capire che cosa significa davvero "calcolabile" per un computer.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-linguaggi-computazione.jpg'
    },
    {
      titolo: 'Machine Learning',
      descr: 'Come le macchine imparano dai dati: addestramento, modelli e previsioni, con esempi pratici e uno sguardo critico a limiti e rischi.',
      link: '#',
      stato: 'in arrivo',
      immagine: 'assets/immagini/modulo-machine-learning.jpg'
    }
  ],
  'curvatura-ai-4': [],
  'curvatura-ai-5': []
};
