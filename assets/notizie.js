/* Notizie mostrate come card nella home (solo immagine e titolo; il testo si apre cliccando). Nuova voce in testa all'array.
   Campi: data (AAAA-MM-GG), dataVisibile, titolo, piattaforma (targhetta sull'immagine, es. YouTube), immagine, testo (elenco di paragrafi), fonte (link), etichettaFonte, consigliata. */
var NOTIZIE = [
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
