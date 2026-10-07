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

  'curvatura-ai-1': [],
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
  'curvatura-ai-3': [],
  'curvatura-ai-4': [],
  'curvatura-ai-5': []
};
