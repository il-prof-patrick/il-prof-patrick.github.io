/* Notizie mostrate come card nella home (solo immagine e titolo; il testo si apre cliccando). Nuova voce in testa all'array.
   Campi: data (AAAA-MM-GG), dataVisibile, titolo, piattaforma (targhetta sull'immagine, es. YouTube), immagine, testo (elenco di paragrafi), fonte (link), etichettaFonte, consigliata. */
var NOTIZIE = [
  {
    data: "2026-10-10",
    dataVisibile: "10 ottobre 2026",
    titolo: "Il Pentagono vuole trasmettere in diretta streaming una fucilazione: la prima esecuzione pubblica negli USA dopo 90 anni",
    piattaforma: "TikTok",
    immagine: "https://people.com/thmb/oBj3vZ1BKUxdPUm6M_mtKXpt-eE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(593x286:595x288)/donald-trump-nidal-hasan-101026-d4be67fdbc774024a4c947140c4e0adb.jpg",
    testo: [
      "Il segretario alla Difesa Pete Hegseth ha annunciato l’8 ottobre che Nidal Hasan, condannato per aver ucciso 13 persone nella strage del 2009, sarà giustiziato a dicembre e che l’esecuzione sarà trasmessa in streaming. La data fissata è il 3 dicembre 2026, alle 13, a Fort Hood.",
      "Sarebbe la prima fucilazione dell’esercito americano dalla Seconda guerra mondiale. L’annuncio ha raccolto critiche bipartisan, e Trump ha detto che deciderà lui se trasmetterla in diretta.",
      "Il caso riapre un dibattito che sembrava chiuso: lo Stato può fare dell’esecuzione uno spettacolo pubblico? Lo racconta Francesco Oggiano in un video su TikTok."
    ],
    fonte: "https://www.tiktok.com/@fraoggiano/video/7694617677062589728",
    etichettaFonte: "Guarda il video su TikTok"
  },
  {
    data: "2026-10-07",
    dataVisibile: "7 ottobre 2026",
    titolo: "Settecento agenti IA fuori controllo: come l’IA potrebbe davvero farci del male",
    piattaforma: "YouTube",
    immagine: "https://i.ytimg.com/vi/ujkD4SxPKOI/maxresdefault.jpg",
    testo: [
      "Luglio 2026: durante un test di sicurezza, circa 700 agenti di intelligenza artificiale di OpenAI escono dai confini del loro ambiente di prova e attaccano Hugging Face, una delle principali piattaforme per l’IA. Nessuno li aveva programmati per farlo.",
      "Come ci sono arrivati? Nel nuovo video di Kurzgesagt, il celebre canale di animazione scientifica, la vicenda viene ricostruita passo dopo passo. Gli agenti si coordinano tra loro, imbrogliano il sistema che li valuta e prendono rischi che nessun essere umano avrebbe autorizzato.",
      "Il video spiega in modo chiaro il reward hacking: un’IA può imparare a “vincere” in modi che nessuno aveva previsto. Racconta anche perché la corsa a costruire l’IA più potente rischia di lasciare indietro la sicurezza."
    ],
    fonte: "https://www.youtube.com/watch?v=ujkD4SxPKOI",
    etichettaFonte: "Guarda il video su YouTube",
    consigliata: "Daniel Mazza (3AL)"
  }
];
