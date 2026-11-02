window.AULA = {
 "modulo": "Sviluppo Web - Front end",
 "n": "04",
 "titolo": "HTML: avanzato",
 "slide": [
  {
   "tipo": "copertina",
   "titolo": "HTML: avanzato",
   "sotto": "Moduli, audio e video, struttura semantica e metadati.",
   "indice": [
    [
     "4.1",
     "Moduli"
    ],
    [
     "4.2",
     "Multimedia e contenuti incorporati"
    ],
    [
     "4.3",
     "HTML semantico"
    ],
    [
     "4.4",
     "Metadati e SEO di base"
    ]
   ],
   "foto": {
    "src": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "sezione",
   "num": "4.1",
   "titolo": "Moduli",
   "sotto": "Raccogliere dati dall’utente",
   "foto": {
    "src": "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "I moduli (form)",
   "html": "<span class=\"k\">&lt;form</span> <span class=\"a\">action</span>=<span class=\"s\">\"https://httpbin.org/get\"</span> <span class=\"a\">method</span>=<span class=\"s\">\"get\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"nome\"</span><span class=\"k\">&gt;</span>Nome<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"text\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"nome\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"nome\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"email\"</span><span class=\"k\">&gt;</span>E-mail<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">placeholder</span>=<span class=\"s\">\"nome@esempio.it\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;button</span> <span class=\"a\">type</span>=<span class=\"s\">\"submit\"</span><span class=\"k\">&gt;</span>Iscriviti<span class=\"k\">&lt;/button</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/form</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "tabella",
   "titolo": "Le parti di un modulo",
   "righe": [
    [
     "Parte",
     "A che cosa serve"
    ],
    [
     "`action`",
     "**l’indirizzo** a cui vanno i dati (un programma sul server); se manca, alla pagina stessa"
    ],
    [
     "`method`",
     "**come** vengono inviati: `get` o `post`"
    ],
    [
     "`name`",
     "il nome con cui il dato **arriva al server**: senza `name` il campo **non viene inviato**"
    ],
    [
     "`id` + `&lt;label for&gt;`",
     "collegano l’etichetta al campo"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Che cosa succede ai dati?",
   "punti": [
    [
     "file-code",
     "HTML fornisce i campi, **controlla la forma** dei dati e **li invia**"
    ],
    [
     "server",
     "Che cosa succede dopo lo decide il **programma sul server** (o JavaScript, cap. 8)"
    ],
    [
     "file",
     "In un sito statico un modulo da solo **non salva niente**"
    ],
    [
     "search",
     "Per le prove: `https://httpbin.org/get` (o `/post`) **mostra i dati ricevuti**"
    ]
   ]
  },
  {
   "tipo": "confronto",
   "titolo": "GET o POST?",
   "a": {
    "icona": "search",
    "titolo": "GET",
    "righe": [
     "• i dati vanno **nell’URL**, dopo il `?`",
     "• visibili nella barra, **restano nella cronologia**",
     "• la pagina si può salvare con i dati dentro",
     "• per richieste che **leggono** e non modificano: una ricerca"
    ]
   },
   "b": {
    "icona": "send",
    "titolo": "POST",
    "tono": "buono",
    "righe": [
     "• i dati nel **corpo della richiesta**",
     "• per dati che **modificano** qualcosa: iscrizioni, ordini, messaggi, file",
     "• **non li cifra**: senza HTTPS si leggono comunque",
     "• li nasconde solo da barra e cronologia"
    ]
   }
  },
  {
   "tipo": "anim",
   "titolo": "GET e POST",
   "id": "f-getpost"
  },
  {
   "tipo": "errore",
   "no": "«Con POST i dati sono al sicuro, perché non si vedono.»",
   "si": "POST **toglie i dati dall’URL**, ma non li cifra. **La protezione dei dati durante il viaggio la dà HTTPS**, con qualunque metodo. Una password su HTTP con POST si può intercettare."
  },
  {
   "tipo": "codice",
   "titolo": "Le etichette",
   "html": "<span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"citta\"</span><span class=\"k\">&gt;</span>Città<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"text\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"citta\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"citta\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"privacy\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span> Accetto l’informativa sulla privacy<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "link",
     "`&lt;label for=\"…\"&gt;` uguale all’`id` del campo, oppure **avvolge** il campo"
    ],
    [
     "mouse-pointer-click",
     "Cliccando l’etichetta **si attiva il campo** (comodo per i checkbox)"
    ],
    [
     "ear",
     "Lo screen reader **legge l’etichetta** quando arriva sul campo"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Al posto dell’etichetta uso il `placeholder`, così occupa meno spazio.»",
   "si": "Il `placeholder` **sparisce appena si inizia a scrivere**, quindi l’utente dimentica che cosa doveva inserire; spesso ha poco contrasto e alcuni screen reader non lo leggono. Il `placeholder` serve per **un esempio** del formato (“nome@esempio.it”), **l’etichetta è sempre necessaria**."
  },
  {
   "tipo": "tabella",
   "titolo": "I tipi di campo (1)",
   "righe": [
    [
     "`type`",
     "Che cosa fa",
     "Sul telefono"
    ],
    [
     "`text`",
     "testo libero su una riga (predefinito)",
     "tastiera normale"
    ],
    [
     "`password`",
     "nasconde i caratteri",
     "niente correttore"
    ],
    [
     "`email`",
     "controlla `@` e dominio",
     "tastiera con @"
    ],
    [
     "`number`",
     "solo numeri, con `min` `max` `step`",
     "tastierino numerico"
    ],
    [
     "`tel`",
     "numero di telefono (non controlla)",
     "tastierino telefonico"
    ],
    [
     "`url`",
     "controlla che sia un indirizzo web",
     "tastiera con / e .com"
    ],
    [
     "`search`",
     "ricerca, con la X per cancellare",
     "tasto «Cerca»"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I tipi di campo (2)",
   "righe": [
    [
     "`type`",
     "Che cosa fa",
     "Sul telefono"
    ],
    [
     "`date` `time` `datetime-local` `month` `week`",
     "data e ora con calendario",
     "selettore nativo"
    ],
    [
     "`color`",
     "tavolozza dei colori",
     "selettore nativo"
    ],
    [
     "`range`",
     "cursore tra `min` e `max`",
     "cursore"
    ],
    [
     "`checkbox`",
     "casella: **scelte indipendenti**, anche più di una",
     ""
    ],
    [
     "`radio`",
     "pallino: **una sola scelta** tra quelle con lo stesso `name`",
     ""
    ],
    [
     "`file`",
     "scelta di un file (`accept=\"image/*\"`)",
     "galleria o fotocamera"
    ],
    [
     "`hidden`",
     "campo invisibile inviato con il modulo",
     ""
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Scegliere il tipo giusto",
   "punti": [
    [
     "circle-check",
     "Il browser **controlla il formato**"
    ],
    [
     "smartphone",
     "Sul telefono compare la **tastiera adatta**"
    ],
    [
     "palette",
     "Spesso c’è un **selettore già pronto**: calendario, tavolozza dei colori"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Radio e checkbox",
   "html": "<span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;legend</span><span class=\"k\">&gt;</span>Taglia della felpa<span class=\"k\">&lt;/legend</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"radio\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"taglia\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"S\"</span><span class=\"k\">&gt;</span> S<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"radio\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"taglia\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"M\"</span> <span class=\"a\">checked</span><span class=\"k\">&gt;</span> M<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"radio\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"taglia\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"L\"</span><span class=\"k\">&gt;</span> L<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;legend</span><span class=\"k\">&gt;</span>Interessi<span class=\"k\">&lt;/legend</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"interessi\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"musica\"</span><span class=\"k\">&gt;</span> Musica<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"interessi\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"sport\"</span><span class=\"k\">&gt;</span> Sport<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "circle-dot",
     "I **radio** funzionano in gruppo **solo con lo stesso `name`**"
    ],
    [
     "send",
     "`value` è ciò che arriva al server (senza, arriva «on»)"
    ],
    [
     "circle-check",
     "`checked` preseleziona una scelta"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Nei miei radio si possono selezionare tutte e tre le taglie.»",
   "si": "I tre `input` `type=\"radio\"` hanno **`name` diversi**, quindi il browser li considera tre gruppi separati. Per avere una sola scelta devono avere **lo stesso `name`** e `value` diversi."
  },
  {
   "tipo": "codice",
   "titolo": "Altri controlli",
   "html": "<span class=\"k\">&lt;select</span> <span class=\"a\">id</span>=<span class=\"s\">\"classe\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"classe\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;optgroup</span> <span class=\"a\">label</span>=<span class=\"s\">\"Triennio\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"3\"</span><span class=\"k\">&gt;</span>Terza<span class=\"k\">&lt;/option</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"5\"</span> <span class=\"a\">selected</span><span class=\"k\">&gt;</span>Quinta<span class=\"k\">&lt;/option</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/optgroup</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/select</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;textarea</span> <span class=\"a\">id</span>=<span class=\"s\">\"msg\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"messaggio\"</span> <span class=\"a\">rows</span>=<span class=\"s\">\"5\"</span> <span class=\"a\">maxlength</span>=<span class=\"s\">\"500\"</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/textarea</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;input</span> <span class=\"a\">list</span>=<span class=\"s\">\"browser-list\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"browser\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"browser\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;datalist</span> <span class=\"a\">id</span>=<span class=\"s\">\"browser-list\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"Chrome\"</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;option</span> <span class=\"a\">value</span>=<span class=\"s\">\"Firefox\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/datalist</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "list",
     "`select`: **menu a tendina**; `option` le voci; `optgroup` le raggruppa; `multiple` per più scelte"
    ],
    [
     "text-cursor",
     "`textarea`: testo su **più righe**; il testo iniziale va **tra i tag**"
    ],
    [
     "search",
     "`datalist`: **suggerimenti** a un campo di testo"
    ],
    [
     "layers",
     "`fieldset` raggruppa i campi, `legend` è il titolo del gruppo"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "I pulsanti",
   "righe": [
    [
     "Pulsante",
     "Che cosa fa"
    ],
    [
     "`&lt;button type=\"submit\"&gt;`",
     "**invia** il modulo (è il tipo **predefinito** in un form)"
    ],
    [
     "`&lt;button type=\"reset\"&gt;`",
     "riporta i campi ai valori iniziali (raramente: si cancella tutto per sbaglio)"
    ],
    [
     "`&lt;button type=\"button\"&gt;`",
     "non fa niente da solo: per le azioni con **JavaScript**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo nel modulo un pulsante “Mostra password” e quando lo clicco il modulo viene inviato.»",
   "si": "Dentro un `form`, un `&lt;button&gt;` senza `type` è **submit**. Per un pulsante che serve solo a JavaScript si scrive **`type=\"button\"`**."
  },
  {
   "tipo": "tabella",
   "titolo": "La validazione del browser",
   "righe": [
    [
     "Attributo",
     "Controllo",
     "Esempio"
    ],
    [
     "`required`",
     "campo obbligatorio",
     "`&lt;input name=\"nome\" required&gt;`"
    ],
    [
     "`minlength` `maxlength`",
     "lunghezza del testo",
     "`&lt;input type=\"password\" minlength=\"8\"&gt;`"
    ],
    [
     "`min` `max` `step`",
     "intervallo e passo",
     "`&lt;input type=\"number\" min=\"1\" max=\"10\" step=\"0.5\"&gt;`"
    ],
    [
     "`type`",
     "il formato del tipo",
     "`&lt;input type=\"email\"&gt;`"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Altri attributi utili",
   "html": "<span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"cap\"</span><span class=\"k\">&gt;</span>CAP<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;input</span> <span class=\"a\">id</span>=<span class=\"s\">\"cap\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"cap\"</span> <span class=\"a\">inputmode</span>=<span class=\"s\">\"numeric\"</span> <span class=\"a\">pattern</span>=<span class=\"s\">\"[0-9]{5}\"</span>\n       <span class=\"a\">title</span>=<span class=\"s\">\"5 cifre, per esempio 00184\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "search",
     "`pattern`: controllo con **espressione regolare**"
    ],
    [
     "smartphone",
     "`inputmode`: sceglie la tastiera sul telefono"
    ],
    [
     "zap",
     "`autocomplete`: **compilazione automatica**"
    ],
    [
     "lock",
     "`disabled` disattiva (e non invia); `readonly` non modificabile (ma invia); `autofocus` mette il cursore nel campo"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo `required` e `type=\"email\"`, quindi sul server arriveranno solo e-mail valide.»",
   "si": "La validazione del browser **aiuta l’utente**, ma **chiunque può aggirarla** (togliendo l’attributo con F12 o inviando i dati senza il modulo). **Chi riceve i dati deve sempre controllarli di nuovo sul server.**"
  },
  {
   "tipo": "codice",
   "titolo": "Esempio svolto: iscrizione al torneo di calcetto",
   "html": "<span class=\"k\">&lt;form</span> <span class=\"a\">action</span>=<span class=\"s\">\"https://httpbin.org/post\"</span> <span class=\"a\">method</span>=<span class=\"s\">\"post\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;legend</span><span class=\"k\">&gt;</span>Dati della squadra<span class=\"k\">&lt;/legend</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"squadra\"</span><span class=\"k\">&gt;</span>Nome della squadra<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;input</span> <span class=\"a\">id</span>=<span class=\"s\">\"squadra\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"squadra\"</span> <span class=\"a\">required</span> <span class=\"a\">minlength</span>=<span class=\"s\">\"3\"</span> <span class=\"a\">maxlength</span>=<span class=\"s\">\"30\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"capitano\"</span><span class=\"k\">&gt;</span>E-mail del capitano<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"capitano\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">autocomplete</span>=<span class=\"s\">\"email\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"giocatori\"</span><span class=\"k\">&gt;</span>Numero di giocatori<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"number\"</span> <span class=\"a\">id</span>=<span class=\"s\">\"giocatori\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"giocatori\"</span> <span class=\"a\">min</span>=<span class=\"s\">\"5\"</span> <span class=\"a\">max</span>=<span class=\"s\">\"8\"</span> <span class=\"a\">value</span>=<span class=\"s\">\"5\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;label</span> <span class=\"a\">for</span>=<span class=\"s\">\"classe\"</span><span class=\"k\">&gt;</span>Classe<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;select</span> <span class=\"a\">id</span>=<span class=\"s\">\"classe\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"classe\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/select</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;fieldset</span><span class=\"k\">&gt;</span>…turno preferito (radio) e note (textarea)…<span class=\"k\">&lt;/fieldset</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;label</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;input</span> <span class=\"a\">type</span>=<span class=\"s\">\"checkbox\"</span> <span class=\"a\">name</span>=<span class=\"s\">\"regolamento\"</span> <span class=\"a\">required</span><span class=\"k\">&gt;</span> Ho letto il regolamento<span class=\"k\">&lt;/label</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;button</span> <span class=\"a\">type</span>=<span class=\"s\">\"submit\"</span><span class=\"k\">&gt;</span>Iscrivi la squadra<span class=\"k\">&lt;/button</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/form</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "punti",
   "titolo": "Provalo così com’è",
   "punti": [
    [
     "send",
     "Inviando a `httpbin.org` la pagina di risposta mostra i dati in **JSON**, ognuno con il suo `name`"
    ],
    [
     "circle-x",
     "Lascia vuoti i campi obbligatori, scrivi **9 giocatori**, un’e-mail **senza @**"
    ],
    [
     "eye",
     "Osserva i **messaggi del browser**"
    ]
   ]
  },
  {
   "tipo": "domanda",
   "testo": "Togliete il `name` al campo della squadra e inviate. Che cosa arriva al server?",
   "risposta": "Tutti i dati tranne il nome della squadra: un campo senza `name` non viene inviato, anche se è compilato."
  },
  {
   "tipo": "sezione",
   "num": "4.2",
   "titolo": "Multimedia e contenuti incorporati",
   "sotto": "Audio, video e pagine incorporate",
   "foto": {
    "src": "https://images.unsplash.com/photo-1617994452722-4145e196248b?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "codice",
   "titolo": "Video e audio",
   "html": "<span class=\"k\">&lt;video</span> <span class=\"a\">src</span>=<span class=\"s\">\"video/presentazione.mp4\"</span> <span class=\"a\">controls</span> <span class=\"a\">width</span>=<span class=\"s\">\"640\"</span> <span class=\"a\">poster</span>=<span class=\"s\">\"img/copertina.jpg\"</span><span class=\"k\">&gt;</span>\n  Il tuo browser non supporta i video HTML5.\n<span class=\"k\">&lt;/video</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;audio</span> <span class=\"a\">controls</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;source</span> <span class=\"a\">src</span>=<span class=\"s\">\"audio/intervista.ogg\"</span> <span class=\"a\">type</span>=<span class=\"s\">\"audio/ogg\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;source</span> <span class=\"a\">src</span>=<span class=\"s\">\"audio/intervista.mp3\"</span> <span class=\"a\">type</span>=<span class=\"s\">\"audio/mpeg\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/audio</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "tabella",
   "titolo": "Gli attributi di video e audio",
   "righe": [
    [
     "Attributo",
     "Che cosa fa"
    ],
    [
     "`controls`",
     "mostra i comandi: **senza, l’utente non controlla** il video"
    ],
    [
     "`autoplay`",
     "parte da solo · **bloccato se c’è audio**: funziona solo con `muted`"
    ],
    [
     "`muted`",
     "parte senza audio"
    ],
    [
     "`loop`",
     "ricomincia alla fine"
    ],
    [
     "`poster`",
     "l’immagine prima della riproduzione"
    ],
    [
     "`preload=\"none\"`",
     "non scarica niente finché non premi play (risparmia dati)"
    ],
    [
     "`playsinline`",
     "su iPhone riproduce nella pagina"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "Più sorgenti, più formati",
   "punti": [
    [
     "file",
     "Con più `&lt;source&gt;` il browser usa **il primo formato che sa leggere**"
    ],
    [
     "message-square",
     "Il testo tra i tag compare solo nei browser che **non supportano** l’elemento"
    ],
    [
     "circle-check",
     "Sicuri: **MP4** (H.264) e **MP3** ovunque; **WebM** è più leggero"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho messo `autoplay` ma il video non parte.»",
   "si": "I browser **bloccano l’avvio automatico con l’audio** per non disturbare l’utente. Il video parte da solo solo se è anche **`muted`** (come gli sfondi animati dei siti), oppure se l’utente ha già interagito con la pagina."
  },
  {
   "tipo": "codice",
   "titolo": "Contenuti incorporati: iframe",
   "html": "<span class=\"k\">&lt;iframe</span> <span class=\"a\">width</span>=<span class=\"s\">\"560\"</span> <span class=\"a\">height</span>=<span class=\"s\">\"315\"</span>\n        <span class=\"a\">src</span>=<span class=\"s\">\"https://www.youtube-nocookie.com/embed/ID_DEL_VIDEO\"</span>\n        <span class=\"a\">title</span>=<span class=\"s\">\"Come funziona Internet – video\"</span>\n        <span class=\"a\">loading</span>=<span class=\"s\">\"lazy\"</span> <span class=\"a\">allowfullscreen</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/iframe</span><span class=\"k\">&gt;</span>",
   "note": [
    [
     "globe",
     "**Un’intera pagina di un altro sito** dentro la tua, come una finestra"
    ],
    [
     "video",
     "Video di YouTube, mappe, moduli di Google: **“Condividi › Incorpora”**"
    ],
    [
     "ear",
     "`title` descrive il contenuto agli screen reader; `loading=\"lazy\"` lo carica quando serve"
    ],
    [
     "shield",
     "`youtube-nocookie.com`: niente cookie di profilazione finché non parte il video"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho incorporato il sito della mia banca con un `iframe`, ma è vuoto.»",
   "si": "Molti siti **impediscono di essere mostrati dentro altre pagine** per sicurezza: un sito truffa potrebbe incorporare la pagina di login vera e sovrapporci pulsanti invisibili (*clickjacking*). Il blocco è voluto e non si può aggirare."
  },
  {
   "tipo": "domanda",
   "testo": "Un video di 3 minuti in Full HD pesa circa 100 MB. Conviene metterlo nella cartella del sito o incorporarlo da YouTube?",
   "risposta": "Di solito incorporarlo da YouTube: lo spazio, la banda e l’adattamento della qualità alla connessione li gestisce YouTube. Il file nel sito ha senso per video brevi e leggeri o quando non si vogliono servizi esterni."
  },
  {
   "tipo": "sezione",
   "num": "4.3",
   "titolo": "HTML semantico",
   "sotto": "Dare un ruolo a ogni parte",
   "foto": {
    "src": "https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "domanda",
   "testo": "Guardate la home di un sito di notizie: in quali “zone” è divisa? Che nome dareste a ciascuna?",
   "risposta": "Intestazione con logo, menu di navigazione, contenuto principale con gli articoli, colonna laterale, piè di pagina con contatti e note legali."
  },
  {
   "tipo": "punti",
   "titolo": "Una pagina di soli div non dice niente",
   "punti": [
    [
     "layers",
     "Per browser, Google e screen reader sono **scatole tutte uguali**"
    ],
    [
     "tag",
     "Gli **elementi semantici** (HTML5) **dicono il ruolo** di ogni parte"
    ]
   ]
  },
  {
   "tipo": "tabella",
   "titolo": "Gli elementi semantici",
   "righe": [
    [
     "Elemento",
     "Ruolo",
     "Quante"
    ],
    [
     "`&lt;header&gt;`",
     "intestazione della pagina o di una sezione",
     "anche più di una"
    ],
    [
     "`&lt;nav&gt;`",
     "link di navigazione principali",
     "una o poche"
    ],
    [
     "`&lt;main&gt;`",
     "il **contenuto principale**",
     "**una sola**"
    ],
    [
     "`&lt;section&gt;`",
     "sezione tematica, di solito con un titolo",
     "molte"
    ],
    [
     "`&lt;article&gt;`",
     "contenuto **autonomo**: articolo, post, scheda prodotto",
     "molte"
    ],
    [
     "`&lt;aside&gt;`",
     "contenuto collegato ma secondario",
     "molte"
    ],
    [
     "`&lt;footer&gt;`",
     "piè di pagina (autore, contatti, copyright)",
     "anche più di uno"
    ],
    [
     "`&lt;address&gt;`",
     "informazioni di contatto",
     ""
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Una pagina semantica",
   "html": "<span class=\"k\">&lt;body</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;header</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;img</span> <span class=\"a\">src</span>=<span class=\"s\">\"img/logo.svg\"</span> <span class=\"a\">alt</span>=<span class=\"s\">\"Il Blog della 5CL\"</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;nav</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;ul</span><span class=\"k\">&gt;</span>…Home · Articoli · Chi siamo…<span class=\"k\">&lt;/ul</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/nav</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/header</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;main</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;article</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;header</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h1</span><span class=\"k\">&gt;</span>La nostra gita a Ginevra<span class=\"k\">&lt;/h1</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/header</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;section</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>La visita al CERN<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/section</span><span class=\"k\">&gt;</span>\n      <span class=\"k\">&lt;section</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>Il lago<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>…<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/section</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;/article</span><span class=\"k\">&gt;</span>\n    <span class=\"k\">&lt;aside</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;h2</span><span class=\"k\">&gt;</span>Lo sapevi?<span class=\"k\">&lt;/h2</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;p</span><span class=\"k\">&gt;</span>Il Web è nato al CERN.<span class=\"k\">&lt;/p</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/aside</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;/main</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;footer</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;address</span><span class=\"k\">&gt;</span>blog5cl@scuola.it<span class=\"k\">&lt;/address</span><span class=\"k\">&gt;</span><span class=\"k\">&lt;/footer</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/body</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "schema",
   "titolo": "La struttura di una pagina",
   "sel": "#s-semantica"
  },
  {
   "tipo": "punti",
   "titolo": "Perché usarli",
   "punti": [
    [
     "ear",
     "**Accessibilità**: lo screen reader annuncia «navigazione», «principale», «piè di pagina» e **salta al contenuto**"
    ],
    [
     "search",
     "**Motori di ricerca**: capiscono contenuto e contorno"
    ],
    [
     "code",
     "**Leggibilità**: `&lt;/nav&gt;` dice più di `&lt;/div&gt;`"
    ],
    [
     "book-open",
     "**Modalità lettura** e altri strumenti estraggono il testo giusto"
    ]
   ]
  },
  {
   "tipo": "tessere",
   "titolo": "section, article o div?",
   "tessere": [
    [
     "newspaper",
     "`article`",
     "Avrebbe senso **pubblicato da solo**, magari condiviso su un social?"
    ],
    [
     "layers",
     "`section`",
     "È **una parte di un discorso più ampio**, con un suo titolo?"
    ],
    [
     "package",
     "`div`",
     "Serve **solo per lo stile** o per raggruppare?"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Ho trasformato tutti i `div` in `section`, così la pagina è più semantica.»",
   "si": "Una `section` è **una parte tematica con un titolo**, non una scatola qualsiasi. Usarla dove serve solo un contenitore per lo stile **toglie significato** invece di aggiungerlo. Il `div` va benissimo quando non c’è un ruolo da dichiarare."
  },
  {
   "tipo": "errore",
   "no": "«`header` è la stessa cosa di `head`, e `h1` è la stessa cosa di `header`.»",
   "si": "`&lt;head&gt;` contiene **informazioni sulla pagina, invisibili**; `&lt;header&gt;` è **la zona visibile di intestazione**, nel `body`; `&lt;h1&gt;` è **un titolo**. Sono tre elementi diversi."
  },
  {
   "tipo": "domanda",
   "testo": "In una pagina con l’elenco dei prodotti di un negozio online, ogni scheda prodotto è una `section` o un `article`?",
   "risposta": "Un `article`: ogni scheda ha senso anche da sola (si potrebbe condividere o mostrare in un’altra pagina)."
  },
  {
   "tipo": "sezione",
   "num": "4.4",
   "titolo": "Metadati e SEO di base",
   "sotto": "Come ti trova Google",
   "foto": {
    "src": "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&q=80&fm=jpg",
    "tit": "",
    "alt": ""
   }
  },
  {
   "tipo": "punti",
   "titolo": "Metadati e SEO",
   "punti": [
    [
     "file",
     "I **metadati** sono dati **sulla pagina**, scritti in `head` con `&lt;meta&gt;`"
    ],
    [
     "eye",
     "Non si vedono nella pagina: li leggono **browser, motori di ricerca, social**"
    ],
    [
     "trending-up",
     "La **SEO** (*Search Engine Optimization*): far comparire la pagina **tra i primi risultati**, in modo corretto"
    ]
   ]
  },
  {
   "tipo": "codice",
   "titolo": "Titolo e descrizione",
   "html": "<span class=\"k\">&lt;head</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">charset</span>=<span class=\"s\">\"UTF-8\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"viewport\"</span> <span class=\"a\">content</span>=<span class=\"s\">\"width=device-width, initial-scale=1.0\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;title</span><span class=\"k\">&gt;</span>Torneo di calcetto 2026 – Liceo Spinelli<span class=\"k\">&lt;/title</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"description\"</span>\n        <span class=\"a\">content</span>=<span class=\"s\">\"Regolamento, calendario delle partite e iscrizioni al torneo\n                 di calcetto delle classi del triennio. Iscrizioni entro il 30 novembre.\"</span><span class=\"k\">&gt;</span>\n  <span class=\"k\">&lt;meta</span> <span class=\"a\">name</span>=<span class=\"s\">\"author\"</span> <span class=\"a\">content</span>=<span class=\"s\">\"Classe 5CL\"</span><span class=\"k\">&gt;</span>\n<span class=\"k\">&lt;/head</span><span class=\"k\">&gt;</span>"
  },
  {
   "tipo": "schema",
   "titolo": "Come si appare su Google",
   "sel": "#s-google"
  },
  {
   "tipo": "tessere",
   "titolo": "title e description",
   "tessere": [
    [
     "file",
     "`&lt;title&gt;`",
     "il **titolo blu**: unico per pagina, parole importanti all’inizio, **50–60 caratteri**"
    ],
    [
     "pen-line",
     "`meta description`",
     "il **testo grigio**: **150–160 caratteri**, un riassunto che invogli a cliccare"
    ]
   ],
   "nota": "Google può scegliere un testo diverso, se lo ritiene più adatto alla ricerca"
  },
  {
   "tipo": "punti",
   "titolo": "Come Google trova e valuta le pagine",
   "punti": [
    [
     "route",
     "**Scansione** (*crawling*): il **crawler** (Googlebot) **segue i link** e scarica le pagine"
    ],
    [
     "book-open",
     "**Indicizzazione**: legge testi, titoli, alt, struttura e li registra nell’**indice**"
    ],
    [
     "trending-up",
     "**Posizionamento** (*ranking*): ordina le pagine con **centinaia di fattori**: pertinenza, qualità, link da siti affidabili, velocità, compatibilità con il telefono, HTTPS"
    ]
   ]
  },
  {
   "tipo": "punti",
   "titolo": "L’HTML fatto bene è già buona SEO",
   "punti": [
    [
     "list",
     "Titoli `h1`–`h6` **ordinati** e tag **semantici**"
    ],
    [
     "image",
     "`alt` descrittivi, link con **testo chiaro**"
    ],
    [
     "gauge",
     "Pagine **veloci** e adatte al telefono"
    ],
    [
     "sparkles",
     "**Il fattore più importante: un contenuto utile e originale**"
    ]
   ]
  },
  {
   "tipo": "errore",
   "no": "«Se ripeto “pizza Roma” cinquanta volte nella pagina, divento primo su Google.»",
   "si": "Ripetere le parole chiave (*keyword stuffing*) è una tecnica vecchia che **Google riconosce e penalizza**. Oggi conta che la pagina **risponda bene a ciò che cerca l’utente**. Anche il vecchio `&lt;meta name=\"keywords\"&gt;` è ignorato da Google da più di dieci anni."
  }
 ]
};
