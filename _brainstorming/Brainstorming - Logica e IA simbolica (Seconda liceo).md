# Brainstorming – Logica e IA simbolica (Seconda liceo AI)

> **Legenda** · **grassetto** = idee chiave · *corsivo* = termini inglesi · blocchi tra parentesi quadre: **[CONCETTO]** (le idee principali), **[FOTO]**, **[ANIMAZIONE]**, **[SCHEMA]**, **[WIDGET]**, **[ESEMPIO]**, **[NELLA STORIA]**, **[DOMANDA ALLA CLASSE]**, **[ERRORE TIPICO]**, **[RICORDA]**. Correggi scrivendo direttamente nel testo.

---

## 1. Macchine che ragionano: che cos'è la logica

*Dalle macchine che seguono regole al ragionamento: premesse, conclusione, validità e perché serve un linguaggio senza ambiguità.*

### 1.1 Macchine che seguono regole

Una sera d'inverno entri in casa e la luce del soggiorno si accende da sola. Nessuno ha premuto un interruttore: **l'app della casa ha applicato una regola scritta da una persona**, del tipo «se è sera e c'è qualcuno in casa, accendi le luci».

> **[FOTO]** *Una regola in un'app per la casa* · da guardare nei dettagli
> Didascalia: osserva le due condizioni sotto *If* («quando tutte le condizioni sono vere»: sono le 6 **e** il terreno ha meno del 50% di umidità) e l'azione sotto *Then* (annaffia per 15 minuti).
> ![Una regola in un'app per la casa](https://www.holmanindustries.com.au/Holman-Home/Scene/WX1/Ex4_Point26.png)
> Fonte: https://www.holmanindustries.com.au/Holman-Home/Scene/WX1/HH_Example04.html

Regole di questo tipo sono ovunque:
- **banca**: il sistema antifrode blocca la carta se un pagamento avviene all'estero pochi minuti dopo uno fatto in Italia, perché nessuno può spostarsi così in fretta;
- **auto**: la spia dell'olio si accende se la pressione scende sotto una soglia;
- **videogiochi**: i personaggi controllati dal computer si muovono seguendo regole.

> **[ESEMPIO]** *I fantasmi di Pac-Man*
> In Pac-Man (1980) i quattro fantasmi sembrano una squadra che caccia insieme, ma **ognuno segue una sola regola** per scegliere dove andare:
> - **Rosso**: punta direttamente alla casella in cui si trova Pac-Man.
> - **Rosa**: punta quattro caselle davanti a Pac-Man, cercando di anticiparne i movimenti.
> - **Azzurro**: calcola il proprio bersaglio usando la posizione di Pac-Man e quella del fantasma rosso, attraverso un calcolo vettoriale.
> - **Arancione**: insegue Pac-Man finché si trova ad almeno 8 caselle di distanza; quando si avvicina ulteriormente, punta verso il proprio angolo del labirinto.
>
> Nessun fantasma «pensa» né sa degli altri: il comportamento da squadra nasce da regole semplici.
> **[FOTO]** *Pac-Man (1980)* · di riconoscimento
> ![Pac-Man (1980)](https://www.techspot.com/images2/trivia/bigimage/2024/2024-12-16-image.jpg)
> Fonte: https://www.techspot.com/trivia/42-ghosts-original-pac-man-had-unique-ai-traits/

> **[CONCETTO]** *Fatti e regole*
> Un **sistema a regole** lavora con due ingredienti:
> - i **fatti**: ciò che il sistema sa in questo momento. Arrivano dai sensori, dai dati o da chi usa il sistema;
> - le **regole**: frasi della forma **SE condizioni ALLORA conclusione**, scritte da persone che conoscono il problema.
>
> Quando **tutte** le condizioni di una regola sono vere, la regola **scatta** e la sua conclusione si aggiunge ai fatti. Il fatto nuovo può far scattare altre regole: è il **ragionamento a catena**. Se manca anche un solo fatto, la regola non scatta: il sistema conclude solo ciò che segue da ciò che sa.

Ecco la casa smart al lavoro, con due fatti di partenza e due regole.

> **[ANIMAZIONE]** *La casa che ragiona*
> **Fa capire:** come i fatti fanno scattare le regole e come una conclusione diventa un fatto nuovo che fa scattare la regola successiva; e che senza tutti i fatti la regola non scatta.
> **Scena iniziale (passo 0):** a sinistra il riquadro «Fatti» con due fatti: «è sera (19:00)», «fuori è buio». Al centro due regole: *Regola 1* «SE è sera E fuori è buio ALLORA serve la luce»; *Regola 2* «SE serve la luce E c'è qualcuno in casa ALLORA accendi le luci». A destra una casa disegnata con la luna fuori, una lampada spenta appesa al soffitto e un sensore di presenza spento sulla parete. Descrizione: «La casa conosce due fatti e ha due regole. Per ora la luce è spenta.»
> **Passo 1:** la Regola 1 si illumina (verde acqua) e nei Fatti compare, evidenziato, «serve la luce». Descrizione: «La regola 1 controlla i fatti: è sera e fuori è buio, quindi scatta e aggiunge un fatto nuovo.»
> **Passo 2:** la Regola 2 si colora d'ambra (controlla ma non scatta); la lampada resta spenta. Descrizione: «Il fatto nuovo interessa la regola 2, ma manca "c'è qualcuno in casa": la regola non scatta.»
> **Passo 3:** entra Marco (persona con volto minimo), il sensore si accende di verde e nei Fatti compare, evidenziato, «Marco è in casa». Descrizione: «Entra Marco: il sensore lo vede e aggiunge il fatto.»
> **Passo 4:** la Regola 2 si illumina, la lampada si accende con i raggi e nei Fatti compare «luci accese». Descrizione: «Ora la regola 2 ha tutti i fatti che le servono: scatta e la casa accende la luce.»

> **[ERRORE TIPICO]**
> ✗ «La casa accende la luce perché capisce che è buio e che serve.»
> ✓ La casa non capisce nulla: **controlla se i fatti che ha soddisfano le condizioni di una regola** che qualcuno ha scritto. Se la regola fosse sbagliata (per esempio senza la condizione «c'è qualcuno in casa»), accenderebbe la luce anche in una casa vuota, senza accorgersene.

> **[DOMANDA ALLA CLASSE]** · scopo: preconoscenze
> «Un programma decide se bloccare la vostra carta seguendo 200 regole scritte da esperti di frodi. È intelligenza artificiale?»
> **Risposta:** sì. È IA simbolica: una macchina che prende decisioni da esperto applicando conoscenza scritta in forma di regole. Non serve che impari da sola per essere IA.

> **[CONCETTO]** *IA simbolica*
> Costruire macchine «intelligenti» scrivendo la conoscenza come **fatti e regole**, che poi la macchina applica da sola, si chiama **IA simbolica**. Si chiama così perché lavora con **simboli**: parole o segni che stanno per cose del mondo («buio», «Marco», «in casa»). È detta anche **GOFAI** (*Good Old-Fashioned Artificial Intelligence*, «la buona vecchia IA»), perché è stato il primo modo di fare IA, dagli anni Cinquanta.

L'altro grande approccio, quello delle reti neurali che imparano dagli esempi, lo metteremo a confronto nel capitolo 9. Qui conta un'altra cosa: ogni volta che una regola scatta, la macchina **ricava qualcosa di nuovo da ciò che sa**. Sta ragionando. Che cosa vuol dire ragionare, e quando un ragionamento funziona, è ciò che studia la **logica**.

### 1.2 Ragionare: dalle premesse alla conclusione

Quando la regola 1 scatta, la casa parte da due informazioni (la regola e i fatti) e ne ricava una terza. È un piccolo ragionamento, con le stesse parti di qualunque ragionamento fatto da una persona.

> **[CONCETTO]** *Ragionare*
> **Ragionare** significa ricavare una conclusione da informazioni che si danno per buone:
> - le informazioni di partenza sono le **premesse**;
> - l'informazione ricavata è la **conclusione**;
> - premesse e conclusione insieme formano un **argomento**;
> - il passaggio dalle premesse alla conclusione è l'**inferenza**.
>
> In logica «argomento» non vuol dire «tema di cui si parla»: è un insieme di premesse con la conclusione che se ne ricava.

In logica un argomento si scrive in colonna: premesse sopra, una riga, conclusione sotto. Il ragionamento della casa diventa:

> Se è sera e fuori è buio, allora serve la luce.
> È sera e fuori è buio.
> ―――――
> Quindi serve la luce.

Nella lingua di tutti i giorni la riga non c'è: premesse e conclusione si riconoscono da alcune parole-spia. «Quindi», «perciò», «dunque» introducono la conclusione; «perché», «dato che», «poiché» introducono una premessa.

Argomenti su temi diversissimi si scrivono tutti allo stesso modo:

> **[SCHEMA]** *Tre argomenti, una stessa forma di scrittura*
> Tre riquadri affiancati, ognuno con le premesse sopra, una riga orizzontale e la conclusione sotto; a lato le etichette «premesse» e «conclusione».
> 1. Pioggia: «Se piove, la strada è bagnata» / «Piove» → «La strada è bagnata».
> 2. Socrate: «Tutti gli uomini sono mortali» / «Socrate è un uomo» → «Socrate è mortale».
> 3. Detective: «Il ladro è entrato dalla porta o dalla finestra» / «La porta era chiusa a chiave e intatta» → «Il ladro è entrato dalla finestra».

> **[CONCETTO]** *Che cos'è la logica*
> La **logica** studia **quando una conclusione segue davvero dalle premesse**, chiunque sia a ragionare: una persona o una macchina.

> **[NELLA STORIA]** *Aristotele e il sillogismo*
> Aristotele (384–322 a.C.) fu il primo a studiare in modo sistematico **la forma dei ragionamenti**, nelle opere che in seguito furono raccolte con il nome di *Organon* («strumento»). Il suo strumento principale è il **sillogismo**: un argomento con due premesse e una conclusione. L'esempio più famoso, «Tutti gli uomini sono mortali; Socrate è un uomo; quindi Socrate è mortale», non è suo ma dei suoi commentatori. La sua logica rimase la base dello studio del ragionamento per più di duemila anni.
> **[FOTO]** *Aristotele* · di riconoscimento
> ![Aristotele](https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg)
> Fonte: commons:Aristotle Altemps Inv8575.jpg

### 1.3 Validità e verità

Un argomento può andare storto per due motivi molto diversi:
- **una premessa è falsa**: il sensore sbaglia, la notizia è inventata;
- **la conclusione non segue dalle premesse**, anche se queste sono vere.

La logica si occupa del secondo: non controlla le premesse, controlla **il passaggio** dalle premesse alla conclusione.

> **[CONCETTO]** *Valido e corretto*
> Un argomento è **valido** quando **è impossibile che le premesse siano vere e la conclusione falsa**: la verità delle premesse «passa» per forza alla conclusione.
>
> Un argomento è **corretto** (o fondato) quando è valido **e** ha le premesse vere: allora la sua conclusione è sicuramente vera.

Per capire se un argomento è valido si può togliere il contenuto e guardare solo il suo «stampo», come «Tutti gli A sono B; x è un A; quindi x è un B». Qualunque cosa si metta al posto di A, B e x, se le premesse sono vere lo è per forza anche la conclusione.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima del passo 2 dell'animazione)
> «Tutti i pesci sanno volare. Bolla è un pesce. Quindi Bolla sa volare. Il ragionamento è corretto?»
> **Risposta:** il ragionamento è valido: se le premesse fossero vere, la conclusione lo sarebbe per forza. A essere falsa è la prima premessa, quindi l'argomento è valido ma non corretto.

> **[ANIMAZIONE]** *Lo stampo del ragionamento*
> **Fa capire:** che la validità dipende dalla forma (lo «stampo») e non dalla verità delle frasi: uno stampo valido resta valido anche con una premessa falsa, uno stampo non valido può dare una conclusione falsa anche con premesse vere.
> **Scena iniziale (passo 0):** a sinistra un riquadro tratteggiato «Stampo» con tre righe: «Tutti gli A sono B», «x è un A», una riga orizzontale, «x è un B». A destra un riquadro vuoto e sbiadito con la stessa disposizione. Descrizione: «Uno stampo: la forma di un ragionamento, con caselle vuote al posto delle parole.»
> **Passo 1:** a destra compaiono «Tutti gli uomini sono mortali» (vero), «Socrate è un uomo» (vero), «Socrate è mortale» (vero); in basso la fascia verde acqua «valido». Descrizione: «Riempiamo lo stampo: premesse vere, conclusione vera. Il ragionamento è valido.»
> **Passo 2:** a destra «Tutti i pesci sanno volare» (falso, in rosso), «Bolla è un pesce» (vero), «Bolla sa volare» (falso); fascia verde acqua «valido (ma una premessa è falsa)». Descrizione: «Stesso stampo, altre parole: una premessa è falsa e anche la conclusione. Ma se le premesse fossero vere, la conclusione lo sarebbe per forza: è ancora valido.»
> **Passo 3:** lo stampo cambia: «Tutti gli A sono B», «x è un **B**», riga, «x è un **A**» (le due righe cambiate in grassetto); a destra di nuovo vuoto. Descrizione: «Cambiamo stampo: nella seconda riga e nella conclusione A e B si scambiano di posto.»
> **Passo 4:** a destra «Tutti i gatti hanno quattro zampe» (vero), «Fido ha quattro zampe» (vero), «Fido è un gatto» (falso); fascia rossa «non valido». Descrizione: «Premesse tutte vere, eppure la conclusione è falsa: questo stampo non garantisce niente. Non è valido.»

> **[CONCETTO]** *Conta la forma*
> **La validità dipende dalla forma dell'argomento, non dal suo contenuto.** Per controllarla non serve sapere niente di uomini, pesci o gatti: per questo **la può controllare anche una macchina**, che delle cose del mondo non sa nulla.

> **[ESEMPIO]** *Garbage in, garbage out*
> Una macchina che ragiona in modo valido non si accorge se le premesse sono false. Se il sensore della casa scambia il gatto per una persona, la casa accende la luce in una stanza vuota: ragionamento valido, premessa falsa, conclusione sbagliata. In informatica si dice *garbage in, garbage out* («spazzatura dentro, spazzatura fuori»).

> **[ERRORE TIPICO]**
> ✗ «Tutti i gatti hanno quattro zampe; il mio cane ha quattro zampe; quindi il mio cane è un mammifero. Il ragionamento è giusto, perché la conclusione è vera.»
> ✓ La conclusione è vera, ma **non segue dalle premesse**: le premesse parlano di gatti e zampe, non di mammiferi. Che la conclusione sia vera non basta: un argomento è valido solo se le premesse la garantiscono.

### 1.4 Dal linguaggio naturale al linguaggio formale

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"Ho visto un uomo col binocolo": chi ha il binocolo?»
> **Risposta:** la frase ha due significati, entrambi possibili: posso aver usato io il binocolo per vedere l'uomo, oppure posso aver visto un uomo che aveva un binocolo. È ambigua.

> **[SCHEMA]** *Una frase, due significati*
> In alto la frase «Ho visto un uomo col binocolo». Sotto, due vignette affiancate (persone con volto minimo). A sinistra: una ragazza guarda nel binocolo un uomo lontano, sull'altra sponda di un fiume. A destra: la stessa ragazza, a occhio nudo, vede da vicino un uomo che tiene in mano un binocolo. Sotto ogni vignetta la frase riscritta senza ambiguità: «Con il binocolo, ho visto un uomo» / «Ho visto un uomo che aveva un binocolo».

Chi ascolta sceglie quasi sempre il significato giusto senza accorgersi dell'altro, grazie al contesto: dove si era, di che cosa si stava parlando.

> **[CONCETTO]** *Il linguaggio naturale è ambiguo*
> Nel **linguaggio naturale**, quello che parliamo tutti i giorni, la stessa frase può avere **più significati**. La comunicazione funziona perché chi ascolta usa il **contesto** e il buon senso. **Un computer non ha né l'uno né l'altro**: davanti a un'istruzione ambigua non può «capire che cosa si intendeva».

> **[ESEMPIO]** *Ambiguità nelle parole piccole*
> Le ambiguità si nascondono anche nelle parole più piccole, e torneranno nel modulo:
> - «Domani c'è la verifica **o** l'interrogazione»: una delle due soltanto, o possono esserci entrambe? (capitolo 2, i connettivi);
> - «**Se** finisci i compiti, puoi uscire»: e se non li finisci, non puoi uscire? (capitolo 4, l'implicazione);
> - «**Tutti** gli studenti **non** hanno fatto i compiti»: nessuno li ha fatti, o non tutti? (capitolo 6, i quantificatori).

> **[CONCETTO]** *Linguaggio formale*
> Un **linguaggio formale** ha regole precise: **ogni frase si scrive solo in modi stabiliti e ha un solo significato**. I linguaggi di programmazione sono linguaggi formali: Python non accetta una riga «più o meno» giusta.
>
> **La logica è il linguaggio formale con cui si scrivono fatti e regole.** Tradurre una frase nella logica si dice **formalizzare**, e serve a due cose: **rappresentare la conoscenza** (scrivere ciò che si sa, cioè la base di conoscenza) e **aumentarla** (ricavare fatti nuovi con l'inferenza).

> **[NELLA STORIA]** *Wittgenstein e la frase come immagine*
> Il filosofo austriaco Ludwig Wittgenstein (1889–1951), nel *Tractatus logico-philosophicus* (1921), sostenne che **una proposizione è un'immagine dei fatti**: funziona perché i suoi elementi stanno tra loro come le cose stanno nel mondo. L'idea gli venne leggendo di un processo a Parigi in cui un incidente stradale era stato ricostruito con automobiline e pupazzi: il modellino «diceva» come erano andate le cose perché ne ripeteva la disposizione. Una base di conoscenza fa lo stesso: è un'immagine del mondo fatta di simboli. Sua è la frase: «I limiti del mio linguaggio significano i limiti del mio mondo».
> **[FOTO]** *Ludwig Wittgenstein* · di riconoscimento
> ![Ludwig Wittgenstein](https://upload.wikimedia.org/wikipedia/commons/a/ab/Ludwig_Wittgenstein.jpg)
> Fonte: commons:Ludwig Wittgenstein.jpg

> **[RICORDA]**
> - Un sistema a regole parte dai **fatti** e applica regole **SE… ALLORA…** scritte da persone; ogni conclusione diventa un fatto nuovo che può farne scattare altre. È l'**IA simbolica**.
> - **Ragionare** è ricavare una **conclusione** da **premesse**; insieme formano un **argomento** e il passaggio è l'**inferenza**. La **logica** studia quando la conclusione segue davvero.
> - Un argomento è **valido** se è impossibile che le premesse siano vere e la conclusione falsa; è **corretto** se è valido e ha le premesse vere. La validità dipende dalla **forma**, non dal contenuto.
> - Il linguaggio naturale è **ambiguo** e si capisce grazie al contesto; il computer non ha contesto, perciò serve un **linguaggio formale**, in cui ogni frase ha un solo significato.

---

## 2. La logica proposizionale

*Le frasi che sono o vere o false e le parole che le uniscono: il primo linguaggio formale per scrivere fatti e regole.*

### 2.1 Le proposizioni e i principi della logica classica

Nella base di conoscenza della casa smart ci sono frasi come «è sera», «fuori è buio», «Marco è in casa». Hanno una cosa in comune: in ogni momento **sono vere oppure false**. Sono i mattoni della logica.

Una **proposizione** è **una frase dichiarativa, cioè che afferma qualcosa, a cui si può attribuire uno e un solo valore di verità: vero (V) oppure falso (F)**.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"7 è un numero pari" è una proposizione?»
> **Risposta:** sì. È falsa, ma è una proposizione: conta che abbia un valore di verità, non che sia vera.

**Una proposizione può benissimo essere falsa**: «7 è un numero pari» è una proposizione falsa. Non sono proposizioni, invece:
- le **domande** («Che ore sono?») e gli **ordini** («Chiudi la porta!»): non affermano niente, quindi non sono né vere né false;
- i **giudizi personali** («La pizza è il cibo più buono»): il loro valore cambia da persona a persona;
- le **frasi paradossali** che parlano di sé stesse («Questa frase è falsa»): vedi il riquadro sui paradossi.

> **[WIDGET]** *Prova tu: è una proposizione?*
> Sei carte con una frase ciascuna; lo studente sceglie «sì» o «no» e al clic compare la spiegazione.
> 1. «Roma è la capitale d'Italia» → sì, vera.
> 2. «7 è un numero pari» → sì, falsa: anche le frasi false sono proposizioni.
> 3. «Che ore sono?» → no: è una domanda, non afferma niente.
> 4. «Chiudi la porta!» → no: è un ordine.
> 5. «La pizza è il cibo più buono» → no: è un giudizio personale, il valore cambia da persona a persona.
> 6. «Questa frase è falsa» → no: se fosse vera sarebbe falsa e viceversa, quindi non può avere un valore di verità.

> **[ERRORE TIPICO]**
> ✗ «"La pizza è il cibo più buono" è una proposizione: per me è vera.»
> ✓ Non è una proposizione: è un **giudizio personale**. Per qualcuno è vera, per qualcun altro falsa: non ha un valore di verità uguale per tutti.

La logica di questo modulo si chiama **logica classica** e si basa su tre principi, che dicono con precisione che cosa significa «o vera o falsa»:
- **principio di bivalenza**: i valori di verità sono **solo due**, vero e falso;
- **principio di non contraddizione**: una proposizione **non può essere vera e falsa nello stesso momento**;
- **principio del terzo escluso**: una proposizione **è vera oppure falsa**, non esiste una terza possibilità (in latino *tertium non datur*, «un terzo non è dato»).

Due soli valori sono esattamente ciò che un computer sa gestire: **vero e falso corrispondono ai due stati di un bit, 1 e 0**. Nella programmazione si chiamano valori **booleani**, dal nome del matematico George Boole, e il tipo di dato che li contiene è il tipo **booleano**: in Flowgorithm una variabile di tipo *Boolean* vale `true` oppure `false`. **Ogni condizione di un blocco «Se» è una proposizione**: «voto ≥ 6» è vera o falsa, e a seconda del valore il programma prende un ramo o l'altro.

> **[NELLA STORIA]** *George Boole e l'algebra del pensiero*
> George Boole (1815–1864), figlio di un calzolaio inglese, studiò quasi da solo e diventò professore di matematica a Cork, in Irlanda. Nel 1854 pubblicò *Le leggi del pensiero* (*An Investigation of the Laws of Thought*), in cui **il ragionamento diventa un calcolo con due soli valori, 1 e 0**: è l'**algebra di Boole**. Da lui prendono il nome i valori e il tipo **booleani**.
> **[FOTO]** *George Boole* · di riconoscimento
> ![George Boole](https://upload.wikimedia.org/wikipedia/commons/c/ce/George_Boole_color.jpg)
> Fonte: commons:George Boole color.jpg

> **[NELLA STORIA]** *I paradossi: frasi che non possono essere né vere né false*
> Già nel IV secolo a.C. il filosofo greco Eubulide di Mileto proponeva il **paradosso del mentitore**: un uomo dice «Io sto mentendo». Se la frase è vera, allora sta mentendo, quindi è falsa; se è falsa, allora non sta mentendo, quindi è vera. Non può avere nessuno dei due valori: **non è una proposizione**.
> Nel 1918 il filosofo e matematico inglese **Bertrand Russell** (1872–1970) raccontò un paradosso simile con la storia del **barbiere**: in un villaggio il barbiere rade tutti e soli gli uomini che non si radono da soli. Chi rade il barbiere? Se si rade da solo, non dovrebbe farlo; se non si rade, dovrebbe radersi. Conclusione: **un barbiere così non può esistere**. Russell usava questa storia per spiegare un paradosso che aveva scoperto nel 1901 nella teoria degli insiemi e che mise in crisi le basi della matematica.
> **[FOTO]** *Bertrand Russell* · di riconoscimento
> ![Bertrand Russell](https://upload.wikimedia.org/wikipedia/commons/f/f4/Bertrand_Russell_in_1936.jpg)
> Fonte: commons:Bertrand Russell in 1936.jpg

### 2.2 Proposizioni atomiche e composte

«Se piove e non ho l'ombrello, mi bagno» è una proposizione, ma dentro ne contiene altre più piccole: «piove», «ho l'ombrello», «mi bagno».

Una proposizione è **atomica** se **non si può scomporre in proposizioni più semplici** («piove»). È **composta** se è **formata da proposizioni più semplici unite da parole come «non», «e», «o», «se… allora»**, che si chiamano **connettivi**. Anche «non piove» è composta: è «piove» con davanti il connettivo «non».

Il punto importante è che **il valore di verità di una proposizione composta dipende solo dai valori delle proposizioni atomiche e dai connettivi che le uniscono**. Se so se piove e se ho l'ombrello, so anche se mi bagno secondo la regola: non serve sapere altro.

Per non riscrivere ogni volta le frasi, le proposizioni atomiche si indicano con lettere minuscole: p = «piove», q = «ho l'ombrello», r = «mi bagno». Queste lettere si chiamano **variabili proposizionali**: come la x in algebra sta al posto di un numero qualsiasi, **una variabile proposizionale sta al posto di una proposizione qualsiasi**. La frase diventa: «se p e non q, allora r».

> **[SCHEMA]** *Smontare una frase*
> In alto la frase «Se piove e non ho l'ombrello, mi bagno», con le parole «se… allora», «e», «non» evidenziate in ambra (i connettivi) e le tre parti «piove», «ho l'ombrello», «mi bagno» sottolineate in verde acqua (le proposizioni atomiche). Sotto, da ogni parte verde una freccia verso la sua lettera: p, q, r. In fondo la frase riscritta: «se p e non q, allora r».

> **[ERRORE TIPICO]**
> ✗ «"Marco e Luca sono fratelli" è una proposizione composta, perché c'è la "e".»
> ✓ È **atomica**: qui «e» indica una **relazione** tra due persone, non unisce due proposizioni. Prova a dividerla: «Marco è fratello» da sola non ha senso. Invece «Marco e Luca sono alti» è composta: «Marco è alto» **e** «Luca è alto».

### 2.3 I connettivi NOT, AND, OR e XOR

Le regole che incontriamo ogni giorno sono proposizioni composte, e spesso basta una parola a cambiarne il significato:
- «Puoi uscire prima se hai l'autorizzazione dei genitori **e** il permesso della presidenza»;
- «Sconto per chi ha meno di 18 anni **o** è studente»;
- «Il menù comprende primo **o** secondo».

Ogni connettivo è definito dalla sua **tavola di verità**: una tabella che, per ogni combinazione dei valori delle proposizioni di partenza, dice il valore della proposizione composta. Un connettivo è **unario** se agisce su una sola proposizione, **binario** se ne unisce due (il numero di proposizioni su cui agisce si chiama **arietà**).

> **[WIDGET]** *Prova tu: interruttori e lampadina*
> Due interruttori, p e q (acceso = vero, spento = falso), un menu per scegliere il connettivo (NOT, AND, OR, XOR, se… allora, se e solo se) e una lampadina che si accende quando la proposizione composta è vera. Accanto, la tavola di verità del connettivo scelto con la riga corrispondente agli interruttori evidenziata (come tutte le tavole del modulo, ordinata partendo dal falso). Con NOT si usa solo l'interruttore p.

#### NOT – negazione

| Nome | Simboli | Arietà |
|---|---|---|
| negazione, «non» | ¬p · ~p · p̄ · NOT p · in Flowgorithm `not p` o `!p` | unario |

**La negazione rovescia il valore di verità**: se p è vera, ¬p è falsa, e viceversa.

| p | ¬p |
|---|---|
| F | V |
| V | F |

Esempi: «Non piove» (¬p, con p = «piove»); «Marco non è in casa»; «Non è vero che 7 è pari» (vera, perché «7 è pari» è falsa).

#### AND – congiunzione

| Nome | Simboli | Arietà |
|---|---|---|
| congiunzione, «e» | p ∧ q · p · q · p & q · p AND q · in Flowgorithm `p and q` o `p && q` | binario |

**La congiunzione è vera solo quando sono vere entrambe le proposizioni**; basta che una sia falsa perché sia falsa.

| p | q | p ∧ q |
|---|---|---|
| F | F | F |
| F | V | F |
| V | F | F |
| V | V | V |

Esempi: «È sera e fuori è buio»; «Puoi uscire prima se hai l'autorizzazione dei genitori e il permesso della presidenza» (non ne basta una). Anche **«ma», «però», «anche se», «eppure» sono congiunzioni**: «È bravo ma pigro» afferma che è bravo **e** che è pigro; la sfumatura di contrasto, in logica, si perde.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"Sconto per chi ha meno di 18 anni o è studente" e "il menù comprende primo o secondo": in tutti e due i casi posso avere entrambe le cose?»
> **Risposta:** nel primo caso sì: chi ha 16 anni ed è studente ha lo sconto. Nel secondo no: si sceglie uno solo dei due piatti. La lingua usa la stessa parola «o», la logica due connettivi diversi: OR e XOR.

#### OR – disgiunzione inclusiva

| Nome | Simboli | Arietà |
|---|---|---|
| disgiunzione inclusiva, «o», latino *vel* | p ∨ q · p + q · p OR q · in Flowgorithm `p or q` o `p \|\| q` | binario |

**La disgiunzione inclusiva è vera quando è vera almeno una delle due proposizioni, anche entrambe**; è falsa solo se sono false tutte e due.

| p | q | p ∨ q |
|---|---|---|
| F | F | F |
| F | V | V |
| V | F | V |
| V | V | V |

Esempi: «Sconto per chi ha meno di 18 anni o è studente»; «Per entrare serve la tessera o un documento» (se li hai entrambi, entri lo stesso).

#### XOR – disgiunzione esclusiva

| Nome | Simboli | Arietà |
|---|---|---|
| disgiunzione esclusiva, «o… o…», latino *aut aut* | p ⊕ q · p ⊻ q · p XOR q · in Flowgorithm non c'è un operatore apposito: si scrive `p != q` | binario |

**La disgiunzione esclusiva è vera quando è vera una sola delle due proposizioni**: è falsa se sono entrambe vere o entrambe false. Rispetto all'OR cambia solo l'ultima riga.

| p | q | p ⊕ q |
|---|---|---|
| F | F | F |
| F | V | V |
| V | F | V |
| V | V | F |

Esempi: «Il menù comprende primo o secondo»; «O vieni con noi o resti a casa»; «Testa o croce». È la risposta all'ambiguità del capitolo 1, «domani c'è la verifica **o** l'interrogazione»: se possono esserci entrambe è un OR, se ce n'è una sola è uno XOR. In italiano, quando si vuole l'esclusiva, si dice «o… o…» oppure «oppure… ma non entrambi».

> **[ERRORE TIPICO]**
> ✗ «"Sconto per chi ha meno di 18 anni o è studente": se ho 16 anni e sono studente lo sconto non vale, perché la "o" vuol dire una sola delle due.»
> ✓ In logica **«o» è inclusiva**, salvo che si dica esplicitamente il contrario: la proposizione è vera anche quando sono vere entrambe. Lo sconto vale.

#### I connettivi dentro il computer

Dentro il processore di un computer ogni connettivo è un piccolo circuito elettronico, la **porta logica**: **riceve in ingresso dei bit (1 = vero, 0 = falso) e restituisce il valore di verità del connettivo**. Per farsi un'idea bastano interruttori e lampadina: **due interruttori in fila (in serie) fanno un AND**, perché la corrente passa solo se sono chiusi entrambi; **due interruttori affiancati (in parallelo) fanno un OR**, perché basta che ne sia chiuso uno. Nei computer gli interruttori sono i **transistor**, e un processore di oggi ne contiene miliardi: tutto ciò che fa un computer, anche sommare due numeri, nasce dal combinare porte logiche. Fu l'ingegnere americano Claude Shannon, nel 1937, ad accorgersi che l'algebra di Boole descriveva proprio questi circuiti. Con un solo tipo di porta, la **NAND** («non e»), si possono costruire tutte le altre; e la memoria «flash NAND» delle chiavette USB e dei telefoni deve il nome a questa porta, perché le sue celle sono collegate come in una NAND.

### 2.4 Implicazione e doppia implicazione

«Se prendi 8 alla verifica, ti porto al cinema.» È una promessa, cioè una proposizione composta: quando si può dire che è stata **tradita**?

#### Implicazione – «se… allora…»

| Nome | Simboli | Arietà |
|---|---|---|
| implicazione (o condizionale), «se… allora…» | p → q · p ⇒ q · p ⊃ q · in Flowgorithm non c'è un operatore apposito: si scrive `not p or q` (nel capitolo 3 vedremo perché) | binario |

In «se p allora q» la prima proposizione si chiama **antecedente** (p), la seconda **conseguente** (q). **L'implicazione è falsa solo quando l'antecedente è vero e il conseguente è falso**: in tutti gli altri casi è vera.

| p | q | p → q |
|---|---|---|
| F | F | V |
| F | V | V |
| V | F | F |
| V | V | V |

Le prime due righe, quelle con l'antecedente falso, sorprendono sempre. Il motivo è che **l'implicazione dice che cosa succede solo quando l'antecedente è vero**: se prendi 5, la promessa non dice niente, quindi non può essere tradita, qualunque cosa succeda. E dato che per il principio di bivalenza ogni proposizione deve essere vera o falsa, «non tradita» vuol dire vera. Per questo si dice anche *ex falso quodlibet*, «dal falso segue qualunque cosa»: con un antecedente falso l'implicazione è vera, qualunque sia il conseguente.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima del passo 3 dell'animazione «La promessa»)
> «Prendi 5, ma ti porto al cinema lo stesso: ho tradito la promessa?»
> **Risposta:** no. La promessa diceva che cosa sarebbe successo se avessi preso 8, e non dice niente sul 5: l'implicazione resta vera.

> **[ANIMAZIONE]** *La promessa è stata mantenuta?*
> **Fa capire:** che l'implicazione è falsa solo quando l'antecedente è vero e il conseguente falso, riempiendo la tavola di verità un caso alla volta con una situazione concreta.
> **Nota:** la tavola è ordinata partendo dal falso (F F, F V, V F, V V); ogni caso, quando viene raccontato, va a occupare la sua riga.
> **Scena iniziale (passo 0):** in alto il fumetto «Se prendi 8, ti porto al cinema». A sinistra un foglio di verifica senza voto; a destra una tavola vuota con le colonne p, q, «se p allora q» e la legenda «p = prendi 8 · q = vai al cinema». Descrizione: «La promessa collega due proposizioni: p "prendi 8" e q "ti porto al cinema". Vediamo i quattro casi possibili.»
> **Passo 1:** sul foglio compare 8, accanto un biglietto del cinema; fascia verde acqua «promessa non tradita»; nella tavola la riga V V V. Descrizione: «Prendi 8 e vai al cinema: la promessa è mantenuta. Riga V V: vero.»
> **Passo 2:** 8 e, al posto del biglietto, una casa («niente cinema»); fascia rossa «promessa tradita»; riga V F F in rosso. Descrizione: «Prendi 8 ma non vai al cinema: la promessa è tradita. È l'unico caso in cui l'implicazione è falsa.»
> **Passo 3:** 5 e il biglietto del cinema; fascia verde acqua; riga F V V. Descrizione: «Prendi 5 e ti porto lo stesso al cinema: la promessa parlava solo dell'8, quindi non è tradita. Vero.»
> **Passo 4:** 5 e la casa; fascia verde acqua; riga F F V. Descrizione: «Prendi 5 e niente cinema: anche qui la promessa non è tradita. Vero. Con l'antecedente falso, l'implicazione è sempre vera.»

> **[ANIMAZIONE]** *Una regola sui numeri*
> **Fa capire:** che un'implicazione è vera per tutti i casi quando la riga «antecedente vero, conseguente falso» non si presenta mai, e che basta un solo caso di quel tipo (un controesempio) per renderla falsa.
> **Nota:** la tavola è ordinata partendo dal falso (F F, F V, V F, V V); ogni numero provato va a occupare la sua riga.
> **Scena iniziale (passo 0):** in alto la regola «Se un numero è divisibile per 4, allora è pari». A sinistra una carta con un numero (vuota) e sotto due caselle: «divisibile per 4?» e «pari?». A destra la tavola vuota p, q, «se p allora q», con la legenda «p = divisibile per 4 · q = pari». Descrizione: «Una regola sui numeri è un'implicazione: proviamola con qualche numero.»
> **Passo 1:** sulla carta 8; caselle «sì» e «sì»; riga V V V. Descrizione: «8 è divisibile per 4 ed è pari: la regola funziona.»
> **Passo 2:** 6; caselle «no» e «sì»; riga F V V. Descrizione: «6 non è divisibile per 4 ma è pari: la regola non parla dei numeri non divisibili per 4, quindi non è violata.»
> **Passo 3:** 7; caselle «no» e «no»; riga F F V. Descrizione: «7 non è divisibile per 4 e non è pari: anche qui la regola non è violata.»
> **Passo 4:** sulla carta un punto interrogativo; la riga V F compare tratteggiata con la scritta «nessun numero». Descrizione: «Per violarla servirebbe un numero divisibile per 4 ma dispari: non esiste. La riga "vero, falso" non capita mai, quindi la regola è vera per tutti i numeri.»
> **Passo 5:** la regola in alto si rovescia: «Se un numero è pari, allora è divisibile per 4». Sulla carta 6; caselle «sì» e «no»; riga V F F in rosso. Descrizione: «Rovesciamo la regola: 6 è pari ma non divisibile per 4. Basta un solo controesempio e la regola è falsa.»

Esempi: «Se prendi 8, ti porto al cinema»; «Se un numero è divisibile per 4, allora è pari»; la regola 1 della casa smart, «Se è sera e fuori è buio, allora serve la luce».

> **[ERRORE TIPICO]**
> ✗ «"Se piove prendo l'ombrello": oggi non piove, quindi la frase è falsa.»
> ✓ Con l'**antecedente falso** l'implicazione è **vera**: la regola dice che cosa faccio quando piove, e oggi non è stata violata.

#### Doppia implicazione – «se e solo se»

| Nome | Simboli | Arietà |
|---|---|---|
| doppia implicazione (o bicondizionale), «se e solo se» | p ↔ q · p ⇔ q · p ≡ q · in Flowgorithm `p == q` | binario |

**La doppia implicazione è vera quando le due proposizioni hanno lo stesso valore di verità**, entrambe vere o entrambe false. Equivale a due implicazioni insieme: se p allora q, **e** se q allora p.

| p | q | p ↔ q |
|---|---|---|
| F | F | V |
| F | V | F |
| V | F | F |
| V | V | V |

Esempi: «Un numero è pari se e solo se è divisibile per 2» (vale nei due sensi: ogni numero pari è divisibile per 2 e ogni numero divisibile per 2 è pari); «Puoi uscire se e solo se hai finito i compiti» (senza compiti finiti non esci, con i compiti finiti esci). Tra i numeri si vede la differenza con l'implicazione: «divisibile per 4 → pari» vale, «divisibile per 4 ↔ pari» no, perché 6 è pari ma non divisibile per 4.

### 2.5 Dalla lingua alle formule

Tradurre una frase in una formula, cioè **formalizzare**, si fa in tre mosse: **trovare le proposizioni atomiche** e dar loro una lettera, **riconoscere i connettivi**, anche quando sono nascosti in altre parole, e **mettere le parentesi** dove servono.

> **[ANIMAZIONE]** *Traduci la frase*
> **Fa capire:** il procedimento di formalizzazione in tre mosse, su una regola della casa smart.
> **Scena iniziale (passo 0):** la frase «Se è sera e non c'è nessuno in casa, la luce resta spenta». Descrizione: «Una regola della casa smart, scritta in italiano.»
> **Passo 1:** «è sera», «c'è qualcuno in casa», «la luce è accesa» si sottolineano in verde acqua e sotto compaiono s, m, a. Descrizione: «Prima mossa: le proposizioni atomiche, in forma affermativa, ciascuna con la sua lettera.»
> **Passo 2:** «se… ,», «e», «non c'è nessuno», «resta spenta» si evidenziano in ambra, con sotto →, ∧, ¬m, ¬a. Descrizione: «Seconda mossa: i connettivi. "Non c'è nessuno" è la negazione di m, "resta spenta" la negazione di a.»
> **Passo 3:** compare «se s e non m, allora non a». Descrizione: «Sostituiamo le lettere: restano solo atomiche e connettivi.»
> **Passo 4:** compare la formula (s ∧ ¬m) → ¬a, con le parentesi evidenziate. Descrizione: «Terza mossa: le parentesi dicono che la condizione è tutto "s e non m".»

Molte parole italiane nascondono un connettivo:

| Nella lingua | In logica | Esempio |
|---|---|---|
| ma, però, anche se, eppure | ∧ | «È bravo ma pigro» → b ∧ p |
| né… né… | ¬p ∧ ¬q | «Né Marco né Luca sono venuti» → ¬m ∧ ¬l |
| o… o…, oppure ma non entrambi | ⊕ | «O vieni o resti» → v ⊕ r |
| se, quando, ogni volta che | p → q | «Quando piove prendo l'ombrello» → p → o |
| p solo se q | p → q | «Esci solo se hai finito i compiti» → e → c |
| p a meno che q | ¬q → p | «Esco, a meno che piova» → ¬p → e |

Come in algebra la moltiplicazione si fa prima dell'addizione, anche i connettivi hanno una **precedenza**: **prima ¬, poi ∧, poi ∨, poi → e infine ↔**. Così ¬p ∧ q vuol dire (¬p) ∧ q, e non ¬(p ∧ q). Quando c'è un dubbio, **le parentesi tolgono ogni ambiguità**.

Una formula scritta secondo le regole si chiama **formula ben formata**: una variabile da sola è una formula ben formata; se A lo è, lo è anche ¬A; se A e B lo sono, lo sono anche (A ∧ B), (A ∨ B), (A ⊕ B), (A → B) e (A ↔ B). «p ∧ ∨ q» e «(p ∧ q» non sono ben formate: come una riga di codice con un errore di sintassi, non vogliono dire niente.

Ora le due regole della casa smart del capitolo 1 si possono scrivere in formule. Con s = «è sera», b = «fuori è buio», l = «serve la luce», m = «c'è qualcuno in casa», a = «le luci sono accese»:
- regola 1: (s ∧ b) → l
- regola 2: (l ∧ m) → a

> **[DOMANDA ALLA CLASSE]** · scopo: applicazione
> «"Né Marco né Luca sono venuti": come si scrive con i connettivi?»
> **Risposta:** ¬m ∧ ¬l: Marco non è venuto **e** Luca non è venuto.

> **[ERRORE TIPICO]**
> ✗ «"Non è vero che piove e fa freddo" si scrive ¬p ∧ f.»
> ✓ Si scrive **¬(p ∧ f)**: il «non è vero che» vale per tutta la frase «piove e fa freddo». Senza parentesi il ¬ vale solo per p, e la formula direbbe «non piove e fa freddo».

> **[ERRORE TIPICO]**
> ✗ «In Flowgorithm scrivo la condizione `voto == 6 or 7 or 8`.»
> ✓ Ogni parte di un OR deve essere una proposizione completa: `voto == 6 or voto == 7 or voto == 8`. In italiano «il voto è 6, 7 o 8» sottintende «il voto è» davanti a ogni numero; in un linguaggio formale non si sottintende niente.

> **[RICORDA]**
> - Una **proposizione** è una frase dichiarativa con **uno e un solo valore di verità**, vero o falso; può anche essere falsa. Domande, ordini, giudizi personali e paradossi non sono proposizioni.
> - Una proposizione è **atomica** se non si scompone, **composta** se unisce proposizioni con i **connettivi**; il suo valore dipende solo da quello delle atomiche. Le atomiche si indicano con **variabili proposizionali** (p, q, r).
> - **NOT** rovescia il valore; **AND** è vero solo se sono vere entrambe; **OR** se ne è vera almeno una; **XOR** se ne è vera esattamente una.
> - **p → q** è falsa solo quando p è vera e q è falsa; **p ↔ q** è vera quando p e q hanno lo stesso valore.
> - **Formalizzare** significa trovare le atomiche, riconoscere i connettivi anche nascosti e mettere le parentesi; senza parentesi vale la **precedenza** ¬, ∧, ∨, →, ↔.

---

## 3. Tavole di verità

*Calcolare il valore di una formula in tutte le situazioni possibili: per capire se è sempre vera, mai vera o vera solo a volte, e se due formule dicono la stessa cosa.*

### 3.1 Costruire la tavola di una formula

Su un'isola vivono due tipi di abitanti: i **cavalieri**, che dicono sempre il vero, e i **furfanti**, che mentono sempre. Incontri due abitanti, A e B, e A dice: «Siamo entrambi furfanti». Che cosa sono A e B?

Per rispondere con la logica, prima si formalizza. Con a = «A è un cavaliere» e b = «B è un cavaliere», ciò che dice A è ¬a ∧ ¬b. La regola dell'isola dice che **A è un cavaliere se e solo se ciò che dice è vero**: a ↔ (¬a ∧ ¬b). Ora basta trovare in quali casi questa formula è vera.

Una **tavola di verità** di una formula **calcola il suo valore per ogni combinazione possibile dei valori delle variabili**. Si costruisce in tre mosse:
1. **Le righe.** Ogni variabile può essere F o V, e **ogni variabile in più raddoppia i casi**: con n variabili le righe sono **2ⁿ** (1 variabile → 2 righe, 2 → 4, 3 → 8, 10 → 1024). Per non dimenticarne nessuna si segue sempre lo stesso ordine, partendo dal falso: nella prima colonna metà F e metà V, nella seconda blocchi di un quarto, e così via fino all'ultima, dove F e V si alternano.
2. **Le colonne intermedie.** Una colonna per ogni pezzo della formula, **dall'interno verso l'esterno**, come si risolvono le operazioni di un'espressione partendo dalle parentesi più interne.
3. **La colonna finale.** L'ultima colonna dà il valore della formula intera in ogni caso.

> **[ANIMAZIONE]** *La tavola risolve l'enigma*
> **Fa capire:** come si costruisce una tavola di verità passo per passo, e che la tavola esamina tutti i casi possibili: le righe in cui la formula è vera sono le soluzioni.
> **Scena iniziale (passo 0):** in alto la legenda «a = "A è un cavaliere" · b = "B è un cavaliere" · A dice: "Siamo entrambi furfanti"». Sotto, l'intestazione vuota della tavola con sei colonne: a, b, ¬a, ¬b, ¬a ∧ ¬b, a ↔ (¬a ∧ ¬b). Descrizione: «L'enigma diventa una formula: A è un cavaliere se e solo se ciò che dice è vero, cioè a ↔ (¬a ∧ ¬b). Due variabili: 2² = 4 righe.»
> **Passo 1:** si riempiono le colonne a e b: F F, F V, V F, V V (V in verde, F in rosso). Descrizione: «Prima le combinazioni, partendo dal falso: nella colonna a metà F e metà V, nella colonna b F e V alternati. Ci sono tutti i casi possibili.»
> **Passo 2:** si riempiono ¬a e ¬b. Descrizione: «Poi le colonne più interne: ¬a e ¬b rovesciano a e b.»
> **Passo 3:** si riempie ¬a ∧ ¬b (V solo nella prima riga). Descrizione: «Poi la congiunzione: ¬a ∧ ¬b è vera solo quando sono vere entrambe.»
> **Passo 4:** si riempie la colonna finale (V solo nella seconda riga). Descrizione: «Infine la formula intera: a ↔ (¬a ∧ ¬b) è vera quando a e ¬a ∧ ¬b hanno lo stesso valore.»
> **Passo 5:** la seconda riga (a = F, b = V) si evidenzia in verde acqua e sotto compare la fascia «Unica riga vera: a falso, b vero → A è un furfante, B è un cavaliere». Descrizione: «Una sola riga rende vera la formula: è la soluzione dell'enigma.»

> **[NELLA STORIA]** *Leibniz: «Calculemus!»*
> Il filosofo e matematico tedesco Gottfried Wilhelm Leibniz (1646–1716) sognava una lingua in cui ogni ragionamento si potesse scrivere con simboli precisi, così che le discussioni si potessero risolvere facendo i conti. Davanti a un disaccordo, scriveva, basterebbe sedersi e dire: «*Calculemus!*», «calcoliamo!». Le tavole di verità realizzano una piccola parte del suo sogno. Leibniz è anche l'inventore del **sistema binario** moderno, descritto in un articolo del 1703: lo stesso che, con 0 e 1, rappresenta falso e vero nei computer.
> **[FOTO]** *Gottfried Wilhelm Leibniz* · di riconoscimento
> ![Gottfried Wilhelm Leibniz](https://upload.wikimedia.org/wikipedia/commons/c/ce/Gottfried_Wilhelm_Leibniz%2C_Bernhard_Christoph_Francke.jpg)
> Fonte: commons:Gottfried Wilhelm Leibniz, Bernhard Christoph Francke.jpg

### 3.2 Tautologie, contraddizioni e formule soddisfacibili

Guardando la colonna finale di una tavola, ogni formula cade in uno di questi casi:
- è una **tautologia** se è **vera in ogni riga**, qualunque siano i valori delle variabili;
- è una **contraddizione** se è **falsa in ogni riga**;
- è **soddisfacibile** se è **vera in almeno una riga**: esiste almeno un caso che la rende vera.

Una tautologia è anche soddisfacibile; una contraddizione è proprio una formula **non** soddisfacibile. La formula dell'enigma è soddisfacibile, ma non è una tautologia: è vera in una sola riga, ed è per questo che l'enigma ha una soluzione.

I principi della logica classica del capitolo 2 sono tautologie: il **terzo escluso** si scrive **p ∨ ¬p** («piove o non piove»), la **non contraddizione** si scrive **¬(p ∧ ¬p)** («non è vero che piove e non piove»). Invece **p ∧ ¬p** («piove e non piove») è una contraddizione.

> **[SCHEMA]** *Tre formule, tre colonne finali*
> Tre piccole tavole affiancate, ognuna con la colonna finale evidenziata: p ∨ ¬p (righe F, V; colonna finale V, V, tutta verde, etichetta «tautologia»); p ∧ ¬p (colonna finale F, F, tutta rossa, etichetta «contraddizione»); p ∧ q (righe F F, F V, V F, V V; colonna finale F, F, F, V, etichetta «soddisfacibile»).

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"Domani piove oppure domani non piove": è una previsione utile?»
> **Risposta:** no. È sempre vera, qualunque tempo faccia: è una tautologia, quindi non dà nessuna informazione sul tempo di domani.

> **[ERRORE TIPICO]**
> ✗ «Una tautologia è una formula che dice una cosa vera.»
> ✓ Una tautologia è vera **in ogni caso**, qualunque siano i valori delle variabili. Proprio per questo **non dice niente sul mondo**: «piove o non piove» è vera sia che piova sia che non piova.

### 3.3 Equivalenza logica

Due formule sono **logicamente equivalenti** (si scrive A ≡ B) se **hanno la stessa colonna finale nella tavola di verità**: in ogni caso sono entrambe vere o entrambe false. Due formule equivalenti **dicono la stessa cosa in modi diversi**, quindi una si può sempre sostituire con l'altra.

Un esempio importante: **p → q ≡ ¬p ∨ q**. «Se prendi 8 ti porto al cinema» dice la stessa cosa di «non prendi 8, oppure ti porto al cinema»: in tutti e due i casi l'unica situazione esclusa è «prendi 8 e niente cinema».

> **[SCHEMA]** *Stessa colonna, stessa formula*
> Due tavole affiancate con le righe F F, F V, V F, V V: a sinistra p → q (colonna finale V, V, F, V), a destra ¬p ∨ q (colonne ¬p e ¬p ∨ q; colonna finale V, V, F, V). Le due colonne finali sono evidenziate in verde acqua e collegate da un segno ≡.

Attenzione a non confondere ≡ con ↔. **↔ è un connettivo**: sta *dentro* una formula e la formula può essere vera o falsa. **≡ non è un connettivo**: è un'affermazione che facciamo *su* due formule, e dice che sono equivalenti. I due simboli sono legati così: **A ≡ B vuol dire che la formula A ↔ B è una tautologia**.

### 3.4 Le leggi della logica

Alcune equivalenze valgono sempre, qualunque cosa si metta al posto di p, q e r: sono le **leggi della logica**. **Servono a riscrivere e semplificare le formule**, come in algebra le proprietà delle operazioni permettono di trasformare un'espressione senza cambiarne il valore.

| Legge | Formula | Esempio in italiano |
|---|---|---|
| doppia negazione | ¬¬p ≡ p | «Non è vero che non piove» = «piove» |
| commutativa | p ∧ q ≡ q ∧ p · p ∨ q ≡ q ∨ p | «È sera e fuori è buio» = «fuori è buio ed è sera» |
| associativa | (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) · lo stesso per ∨ | con un solo tipo di connettivo le parentesi non contano |
| distributiva | p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) · p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r) | «Studio e (ascolto musica o guardo la TV)» = «(studio e ascolto musica) o (studio e guardo la TV)» |
| idempotenza | p ∧ p ≡ p · p ∨ p ≡ p | «Piove e piove» = «piove» |
| assorbimento | p ∧ (p ∨ q) ≡ p · p ∨ (p ∧ q) ≡ p | «Marco è venuto, e Marco o Luca sono venuti» = «Marco è venuto» |
| De Morgan | ¬(p ∧ q) ≡ ¬p ∨ ¬q · ¬(p ∨ q) ≡ ¬p ∧ ¬q | «Non è vero che Marco e Luca sono venuti» = «Marco non è venuto o Luca non è venuto»; «Non è vero che Marco o Luca sono venuti» = «Né Marco né Luca sono venuti» |
| implicazione | p → q ≡ ¬p ∨ q | «Se prendi 8 ti porto al cinema» = «Non prendi 8, oppure ti porto al cinema» |

Ogni legge si può verificare con una tavola di verità: basta controllare che le colonne finali delle due formule siano uguali. Le **leggi di De Morgan** sono quelle che si sbagliano più spesso: **negando un AND si ottiene un OR delle negazioni, negando un OR si ottiene un AND delle negazioni**.

> **[WIDGET]** *Prova tu: verifica la legge*
> Un menu con le leggi della tabella. Scelta una legge, il widget mostra le due formule e riempie le loro tavole affiancate (righe ordinate partendo dal falso), colonna per colonna a ogni clic; alla fine confronta le colonne finali e le evidenzia in verde acqua se sono uguali. Un'opzione «formula sbagliata» mostra ¬(p ∨ q) a confronto con ¬p ∨ ¬q, con le righe diverse evidenziate in rosso.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"Non è vero che Marco e Luca sono venuti tutti e due": quindi nessuno dei due è venuto?»
> **Risposta:** no. Vuol dire che almeno uno dei due non è venuto (magari Marco sì e Luca no): per De Morgan ¬(m ∧ l) ≡ ¬m ∨ ¬l.

> **[ERRORE TIPICO]**
> ✗ «¬(p ∨ q) ≡ ¬p ∨ ¬q»
> ✓ Negando un OR si ottiene un **AND** delle negazioni: **¬(p ∨ q) ≡ ¬p ∧ ¬q**. «Non è vero che piove o nevica» vuol dire «non piove **e** non nevica».

> **[RICORDA]**
> - La **tavola di verità** calcola il valore di una formula in tutti i casi: **2ⁿ righe** per n variabili, ordinate partendo dal falso, e colonne dall'interno verso l'esterno.
> - Una formula è una **tautologia** se è sempre vera, una **contraddizione** se è sempre falsa, **soddisfacibile** se è vera in almeno un caso.
> - Due formule sono **equivalenti** (≡) se hanno la stessa colonna finale: dicono la stessa cosa in modi diversi. A ≡ B vuol dire che A ↔ B è una tautologia.
> - Le **leggi della logica** sono equivalenze che valgono sempre e servono a riscrivere le formule; le più importanti sono quelle di **De Morgan**: ¬(p ∧ q) ≡ ¬p ∨ ¬q e ¬(p ∨ q) ≡ ¬p ∧ ¬q.

---

## 4. Implicazione e ragionamenti

*Gli schemi di ragionamento sempre validi, che si possono concatenare fino a una conclusione sicura, e quelli che sembrano validi ma non lo sono.*

### 4.1 Condizione necessaria e condizione sufficiente

Il regolamento della scuola è pieno di implicazioni: «se hai almeno 18 anni, puoi giustificarti da solo», «se superi il limite di assenze, non puoi essere scrutinato». Per leggerle bene servono due parole.

In un'implicazione **p → q**:
- p è **condizione sufficiente** per q: **basta che p sia vera perché q sia vera**;
- q è **condizione necessaria** per p: **senza q non può esserci p**, ma q da sola non basta.

> **[SCHEMA]** *Roma e l'Italia*
> Una cartina dell'Italia con Roma evidenziata. Accanto due frasi: «Essere a Roma è **sufficiente** per essere in Italia» (se sei a Roma, sei per forza in Italia) e «Essere in Italia è **necessario** per essere a Roma» (non puoi essere a Roma senza essere in Italia, ma puoi essere in Italia senza essere a Roma, per esempio a Milano). In basso la formula: Roma → Italia.

Quando una condizione è **sia necessaria sia sufficiente**, vale l'implicazione nei due sensi: è la **doppia implicazione** del capitolo 2, «se e solo se». «Un numero è pari se e solo se è divisibile per 2»: essere divisibile per 2 basta e serve.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Per essere promossi serve la sufficienza in tutte le materie. Se ho la sufficienza in tutte, sono promosso per forza?»
> **Risposta:** no. La sufficienza in tutte le materie è una condizione **necessaria**, non sufficiente: serve anche, per esempio, aver frequentato abbastanza ore di lezione.

> **[ERRORE TIPICO]**
> ✗ «L'ossigeno è sufficiente per accendere un fuoco.»
> ✓ L'ossigeno è **necessario** (senza ossigeno il fuoco non si accende), ma non sufficiente: servono anche qualcosa che bruci e una fonte di calore.

### 4.2 Inversa, contraria e contronominale

Da un'implicazione p → q si possono costruire altre tre frasi, che si somigliano ma non dicono la stessa cosa:
- l'**inversa** scambia le due parti: **q → p**;
- la **contraria** le nega: **¬p → ¬q**;
- la **contronominale** le scambia e le nega: **¬q → ¬p**.

**Solo la contronominale è equivalente all'implicazione di partenza**: ha la stessa colonna nella tavola di verità. L'inversa e la contraria invece possono essere false anche quando l'originale è vera.

> **[SCHEMA]** *Il quadrato delle quattro frasi*
> Quattro riquadri disposti a quadrato, con l'esempio «Se un animale è un gatto, allora ha quattro zampe». In alto a sinistra l'originale p → q (vera, verde acqua); in alto a destra l'inversa «se ha quattro zampe, è un gatto» (falsa, rossa: un cane); in basso a sinistra la contraria «se non è un gatto, non ha quattro zampe» (falsa, rossa: un cane); in basso a destra la contronominale «se non ha quattro zampe, non è un gatto» (vera, verde acqua). Una freccia ≡ collega originale e contronominale. Sotto, la tavola con righe F F, F V, V F, V V e le colonne p → q (V, V, F, V) e ¬q → ¬p (V, V, F, V), uguali.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"Chi ha la patente ha almeno 18 anni". Quindi chi non ha la patente ha meno di 18 anni?»
> **Risposta:** no: quella è la contraria e non vale (tanti maggiorenni non hanno la patente). Vale la contronominale: chi ha meno di 18 anni non ha la patente.

### 4.3 Le regole di inferenza

Una **regola di inferenza** è **uno schema di ragionamento sempre valido**: se le premesse hanno una certa forma, permette di ricavare una certa conclusione, qualunque cosa ci sia al posto delle lettere. Sono gli «stampi» validi del capitolo 1, e sono gli strumenti con cui ragiona un motore inferenziale.

Nella tabella il simbolo ∴ si legge «quindi».

| Regola | Schema | Esempio |
|---|---|---|
| ***modus ponens*** | p → q, p ∴ q | «Se è sera e fuori è buio serve la luce; è sera e fuori è buio; quindi serve la luce» |
| ***modus tollens*** | p → q, ¬q ∴ ¬p | «Se fosse entrato dalla porta, la serratura sarebbe rotta; la serratura è intatta; quindi non è entrato dalla porta» |
| **sillogismo ipotetico** | p → q, q → r ∴ p → r | «Se piove prendo l'ombrello; se prendo l'ombrello non mi bagno; quindi se piove non mi bagno» |
| **sillogismo disgiuntivo** | p ∨ q, ¬p ∴ q | «Il ladro è entrato dalla porta o dalla finestra; non dalla porta; quindi dalla finestra» |
| **introduzione della congiunzione** | p, q ∴ p ∧ q | «È sera; fuori è buio; quindi è sera e fuori è buio» |
| **eliminazione della congiunzione** | p ∧ q ∴ p | «È sera e fuori è buio; quindi è sera» |
| **introduzione della disgiunzione** | p ∴ p ∨ q | «Ho la tessera; quindi ho la tessera o un documento» |

Due di queste le abbiamo già viste all'opera. Il ***modus ponens*** **è proprio ciò che fa la casa smart quando una regola scatta**: c'è la regola, ci sono i fatti, e la casa ricava la conclusione. Il **sillogismo ipotetico** è il **ragionamento a catena** del capitolo 1: da «sera e buio → serve la luce» e «serve la luce e qualcuno in casa → accendi» si arriva dalla sera alle luci accese.

> **[SCHEMA]** *Le regole come stampi*
> Una scheda per ogni regola della tabella, nella forma del capitolo 1: premesse sopra, una riga, conclusione sotto, con il nome della regola in alto e l'esempio in italiano accanto.

### 4.4 Le fallacie

Una **fallacia** è **un ragionamento che sembra valido ma non lo è**. Alcune fallacie hanno la forma di una regola valida, ma «storta»; altre sbagliano nel contenuto, pur sembrando ragionevoli. In tutti i casi **si smontano con un controesempio**: un caso in cui le premesse sono vere e la conclusione falsa.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima della spiegazione)
> «"Se piove, la strada è bagnata". La strada è bagnata: quindi piove?»
> **Risposta:** non necessariamente: può essere passata la macchina che lava le strade, o si è rotto un tubo. È un'affermazione del conseguente.

Le fallacie che somigliano alle regole valide:
- **affermazione del conseguente**: p → q, q, quindi p. «Se piove la strada è bagnata; la strada è bagnata; quindi piove.» È lo stampo non valido del capitolo 1 (Fido ha quattro zampe, quindi è un gatto): ora ha un nome. Somiglia al *modus ponens*, ma parte dal conseguente.
- **negazione dell'antecedente**: p → q, ¬p, quindi ¬q. «Se studi passi la verifica; non hai studiato; quindi non la passi» (magari la passi lo stesso). Somiglia al *modus tollens*, ma nega l'antecedente.
- **affermazione di un disgiunto**: p ∨ q, p, quindi ¬q. «Per entrare serve la tessera o un documento; ho la tessera; quindi non ho un documento.» È l'errore di chi legge l'OR come se fosse uno XOR (capitolo 2).

Le fallacie della vita di tutti i giorni:
- **falso dilemma**: «O sei con me o sei contro di me». Presenta come uno XOR due sole possibilità, quando ce ne sono altre.
- **generalizzazione affrettata**: «Due ragazzi dell'altra classe copiano, quindi copiano tutti». È un'induzione (vedi il 4.6) fatta con pochissimi esempi.
- ***post hoc*, cioè scambiare la correlazione per una causa**: «Da quando ho il braccialetto portafortuna prendo voti migliori». Che due cose capitino insieme non vuol dire che una causi l'altra. Vale anche per l'IA: **un modello che impara dai dati trova correlazioni, non cause**.
- ***ad hominem***: attaccare la persona invece dell'argomento. «Cosa ne sai tu di matematica, che hai 5?»
- **uomo di paglia**: deformare la tesi dell'altro per attaccarla meglio. «Vuoi meno compiti? Allora vuoi che non si studi più niente.»
- **appello alla maggioranza e all'autorità**: «Lo fanno tutti», «l'ha detto un influencer». Che molti lo facciano, o che lo dica qualcuno di famoso, non lo rende vero.

> **[WIDGET]** *Prova tu: valido o fallacia?*
> Una serie di carte con un ragionamento ciascuna, prese dalla scuola, dalla pubblicità e dai social. Per ogni carta lo studente sceglie «valido» o «fallacia»; al clic compare il nome della regola o della fallacia e, per le fallacie, un controesempio. Carte: un *modus ponens*, un *modus tollens*, un sillogismo disgiuntivo, un'affermazione del conseguente, una negazione dell'antecedente, un'affermazione di un disgiunto, un falso dilemma, una generalizzazione affrettata, un *post hoc*, un *ad hominem*.

> **[ERRORE TIPICO]**
> ✗ «Tutti i campioni bevono questa bibita: se la bevo divento un campione.»
> ✓ È un'**affermazione del conseguente** («campione → beve la bibita; bevo la bibita; quindi sono un campione») e insieme una **falsa causa**: la pubblicità fa passare per una causa del successo una cosa che, al massimo, lo accompagna.

Un altro esempio della stessa fallacia, molto comune: «Chi ha l'influenza ha la febbre; ho la febbre; quindi ho l'influenza». La febbre può avere tante altre cause.

### 4.5 Conseguenza logica e derivazione

Una conclusione è **conseguenza logica** di alcune premesse quando **è vera in tutti i casi in cui le premesse sono vere**. È un altro modo di dire che il ragionamento è valido. Si può verificare in due modi:
- con la **tavola di verità**: si scrivono tutte le righe e si controlla che, dove le premesse sono tutte vere, sia vera anche la conclusione. È un metodo sicuro, ma **le righe sono 2ⁿ** e con molte variabili diventano troppe;
- con una **derivazione**: **una catena di passi, ciascuno ottenuto con una regola di inferenza**, che porta dalle premesse alla conclusione. **È così che ragiona un motore inferenziale**: non prova tutti i casi, applica regole.

> **[ANIMAZIONE]** *L'indagine del detective*
> **Fa capire:** che una derivazione è una catena di regole di inferenza, ognuna delle quali usa premesse o risultati già ottenuti, fino alla conclusione.
> **Scena iniziale (passo 0):** a sinistra il riquadro «Indizi (premesse)» con quattro schede: «1. porta ∨ finestra — entrato dalla porta o dalla finestra»; «2. porta → serratura rotta — se dalla porta, serratura rotta»; «3. ¬ serratura rotta — la serratura è intatta»; «4. finestra → impronte — se dalla finestra, impronte in giardino». A destra il riquadro vuoto «Derivazione». Descrizione: «Un furto: il detective ha quattro indizi. Ognuno è una proposizione, scritta anche in formula.»
> **Passo 1:** gli indizi 2 e 3 si colorano d'ambra; a destra compare «5. ¬ porta — *modus tollens* (2, 3)». Descrizione: «Dagli indizi 2 e 3: se fosse entrato dalla porta, la serratura sarebbe rotta; ma è intatta. Quindi non è entrato dalla porta.»
> **Passo 2:** si colorano l'indizio 1 e il passo 5; compare «6. finestra — sillogismo disgiuntivo (1, 5)». Descrizione: «Dagli indizi 1 e 5: o porta o finestra; non dalla porta. Quindi dalla finestra.»
> **Passo 3:** si colorano l'indizio 4 e il passo 6; compare «7. impronte in giardino — *modus ponens* (4, 6)». Descrizione: «Dagli indizi 4 e 6: se dalla finestra, ci sono impronte in giardino. Conclusione: cercate in giardino!»
> **Passo 4:** la conclusione 7 si illumina in verde acqua. Descrizione: «Ogni passo usa una regola di inferenza valida: la conclusione è conseguenza logica degli indizi. È così che ragiona un motore inferenziale.»

### 4.6 Deduzione, induzione e abduzione

Non tutti i ragionamenti che facciamo sono deduzioni. Ne esistono tre tipi:
- la **deduzione** **va da una regola generale a un caso particolare**, e la sua conclusione è **certa** (se le premesse sono vere). È quella di cui abbiamo parlato finora.
- l'**induzione** **ricava una regola generale da tanti casi osservati**, e la sua conclusione è solo **probabile**: un caso nuovo può smentirla.
- l'**abduzione** **cerca la spiegazione più probabile di un fatto osservato**. È il ragionamento del medico e del detective, e anche la sua conclusione è solo **probabile**.

> **[ANIMAZIONE]** *I fagioli di Peirce*
> **Fa capire:** che deduzione, induzione e abduzione usano gli stessi tre elementi (regola, caso, risultato), ma partono da due diversi e ricavano il terzo.
> **Scena iniziale (passo 0):** un sacco di fagioli e una manciata di fagioli bianchi sul tavolo. Tre schede vuote: «Regola», «Caso», «Risultato». Descrizione: «Un sacco, una manciata di fagioli: tre ragionamenti diversi con gli stessi elementi.»
> **Passo 1 (deduzione):** le schede «Regola: tutti i fagioli di questo sacco sono bianchi» e «Caso: questi fagioli vengono da questo sacco» si riempiono; una freccia porta a «Risultato: questi fagioli sono bianchi», con l'etichetta «certo». Descrizione: «Deduzione: dalla regola e dal caso ricavo il risultato. È certo.»
> **Passo 2 (induzione):** si riempiono «Caso» e «Risultato» (prendo dal sacco una manciata: sono tutti bianchi); la freccia porta a «Regola: tutti i fagioli del sacco sono bianchi», con l'etichetta «probabile». Descrizione: «Induzione: da tanti casi ricavo una regola generale. È solo probabile: in fondo al sacco potrebbe esserci un fagiolo nero.»
> **Passo 3 (abduzione):** si riempiono «Regola» e «Risultato» (trovo dei fagioli bianchi vicino al sacco); la freccia porta a «Caso: questi fagioli vengono da quel sacco», con l'etichetta «probabile». Descrizione: «Abduzione: dalla regola e dal risultato immagino la spiegazione più probabile. Ma potrebbero venire da un altro sacco.»

> **[NELLA STORIA]** *Peirce e i fagioli*
> Il filosofo e logico americano Charles S. Peirce (1839–1914) fu il primo a distinguere con chiarezza i tre tipi di ragionamento, in un articolo del 1878 in cui usava proprio l'esempio del sacco di fagioli.
> **[FOTO]** *Charles S. Peirce* · di riconoscimento
> ![Charles S. Peirce](https://upload.wikimedia.org/wikipedia/commons/5/58/Charles_Sanders_Peirce.jpg)
> Fonte: commons:Charles Sanders Peirce.jpg

Il limite dell'induzione lo racconta una storia famosa: il **tacchino induttivista**.

> **[ANIMAZIONE]** *Il tacchino induttivista*
> **Fa capire:** che l'induzione, anche con tantissimi esempi, non dà mai una certezza.
> **Scena iniziale (passo 0):** un tacchino nel recinto di una fattoria e, accanto, un calendario e una barra vuota «quanto è sicuro il tacchino». Descrizione: «Un tacchino arriva in una fattoria e osserva quello che succede.»
> **Passo 1:** sul calendario «giorno 1»; alle 9 arriva il contadino con il cibo; la barra sale appena. Descrizione: «Il primo giorno, alle 9, gli portano da mangiare. Il tacchino prende nota.»
> **Passo 2:** il calendario scorre: giorno 2, 10, 50; una volta piove, una volta c'è il sole, una volta è domenica, e il cibo arriva sempre alle 9; la barra sale. Descrizione: «Il cibo arriva alle 9 con la pioggia e con il sole, di lunedì e di domenica. Il tacchino raccoglie sempre più osservazioni.»
> **Passo 3:** giorno 300; sopra il tacchino compare il fumetto «Ogni giorno alle 9 mi danno da mangiare»; la barra è quasi piena. Descrizione: «Dopo tante osservazioni, il tacchino ricava una regola generale. Ne è sicurissimo.»
> **Passo 4:** sul calendario «24 dicembre»; sono le 9, ma il cibo non arriva; la barra crolla; in un riquadro a lato, una tavola apparecchiata per il pranzo di Natale. Descrizione: «La vigilia di Natale il cibo non arriva: il tacchino finisce sulla tavola di Natale. Nessun numero di osservazioni rende certa una regola ricavata per induzione.»

> **[NELLA STORIA]** *Da un pollo a un tacchino*
> L'esempio nasce da Bertrand Russell, che nel 1912 parlava di un pollo nutrito ogni giorno, fino al giorno in cui il fattore gli tira il collo. Il filosofo Alan Chalmers lo trasformò nel «tacchino induttivista» nel suo libro *Che cos'è questa scienza?* (1976), dedicato a come funziona il metodo scientifico.
> **[FOTO]** *Alan Chalmers* · di riconoscimento
> ![Alan Chalmers](https://d3f44jafdqsrtg.cloudfront.net/authors/author-1135/_1600x1600_crop_center-center_none/Chalmers-pic.jpg)
> Fonte: https://www.uqp.com.au/books/what-is-this-thing-called-science

| | Deduzione | Induzione | Abduzione |
|---|---|---|---|
| Parte da | una regola e un caso | tanti casi osservati | una regola e un fatto osservato |
| Arriva a | un risultato | una regola generale | la spiegazione più probabile |
| La conclusione è | certa | probabile | probabile |
| Esempio | «Tutti gli abbonati entrano gratis; Anna è abbonata; quindi Anna entra gratis» | il tacchino | il medico: «febbre e mal di gola: probabilmente è influenza» |
| Nell'IA | l'IA simbolica, che applica regole | l'apprendimento automatico, che ricava regole dagli esempi | i sistemi di diagnosi |

L'abduzione ha la forma di un'**affermazione del conseguente** («se è influenza c'è la febbre; c'è la febbre; quindi è influenza»): non è valida, ma **usata con prudenza** è il modo in cui medici e detective scelgono l'ipotesi da verificare.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Il medico vede febbre e mal di gola e dice "è influenza": ha fatto una deduzione?»
> **Risposta:** no, un'abduzione: ha scelto la spiegazione più probabile, che potrebbe essere sbagliata. Per questo a volte servono altri esami.

> **[ERRORE TIPICO]**
> ✗ «Il tacchino aveva visto il cibo arrivare per 300 giorni di fila: la sua regola era sicura.»
> ✓ Era un'**induzione**, quindi solo **probabile**: per quanti siano i casi osservati, il caso successivo può smentire la regola.

> **[RICORDA]**
> - In **p → q**, p è condizione **sufficiente** per q e q è condizione **necessaria** per p; se valgono entrambe, è un «se e solo se».
> - Da p → q si ricavano inversa (q → p), contraria (¬p → ¬q) e contronominale (¬q → ¬p): **solo la contronominale è equivalente** all'originale.
> - Le **regole di inferenza** (*modus ponens*, *modus tollens*, sillogismi…) sono schemi di ragionamento sempre validi; il *modus ponens* è ciò che fa un sistema a regole quando una regola scatta.
> - Una **fallacia** sembra valida ma non lo è (affermazione del conseguente, negazione dell'antecedente, falso dilemma, falsa causa…): si smonta con un controesempio.
> - Una conclusione è **conseguenza logica** delle premesse se è vera in tutti i casi in cui lo sono le premesse; si verifica con la tavola o con una **derivazione**, una catena di regole di inferenza.
> - La **deduzione** è certa; l'**induzione** (dai casi alla regola) e l'**abduzione** (la spiegazione più probabile) danno conclusioni solo probabili.

---

## 5. La logica dei predicati

*Aprire le proposizioni per vedere gli oggetti di cui parlano, le loro proprietà e le loro relazioni: il linguaggio delle basi di conoscenza.*

### 5.1 Quando le proposizioni non bastano

«Tutti gli abbonati entrano gratis. Anna è abbonata. Quindi Anna entra gratis.» Il ragionamento è ovviamente giusto. Proviamo però a scriverlo con la logica proposizionale: le tre frasi sono tre proposizioni atomiche diverse, p, q e r, e il ragionamento diventa «p, q, quindi r». **Non è valido**: niente collega r a p e q, e c'è una riga della tavola in cui p e q sono vere e r è falsa.

Il problema è che **la logica proposizionale tratta ogni frase come un blocco chiuso**. Non vede:
- gli **oggetti** di cui si parla (Anna);
- le loro **proprietà** e **relazioni** (essere abbonata, entrare gratis);
- le parole **«tutti» e «qualcuno»**, che parlano di molti oggetti in una volta.

> **[ANIMAZIONE]** *Aprire i blocchi*
> **Fa capire:** che la logica proposizionale non vede ciò che le frasi hanno in comune, e che la logica dei predicati lo rende visibile.
> **Scena iniziale (passo 0):** tre frasi in colonna, nella forma premesse–riga–conclusione: «Tutti gli abbonati entrano gratis», «Anna è abbonata», «Anna entra gratis». Descrizione: «Un ragionamento chiaramente giusto.»
> **Passo 1:** ogni frase si chiude in un blocco grigio con sopra una lettera: p, q, r; i tre blocchi non si toccano. Descrizione: «Per la logica proposizionale sono tre blocchi chiusi: p, q, r. Niente li collega, e il ragionamento non risulta valido.»
> **Passo 2:** i blocchi q e r si aprono e diventano Abbonato(anna) ed EntraGratis(anna); «anna» si evidenzia in verde acqua nei due blocchi. Descrizione: «Apriamo i blocchi: dentro c'è un oggetto, Anna, che compare in entrambe le frasi.»
> **Passo 3:** anche il blocco p si apre: «per ogni x, Abbonato(x) → EntraGratis(x)»; Abbonato ed EntraGratis si evidenziano in ambra in tutte e tre le righe. Descrizione: «E la prima frase dice che chiunque abbia la proprietà "abbonato" ha anche la proprietà "entra gratis". Ora i pezzi in comune si vedono, e il ragionamento si può dimostrare.»

Lo stesso problema c'è nella casa smart: per dire chi è in casa servirebbe una proposizione per ogni persona, «Marco è in casa», «Anna è in casa», «Luca è in casa»…, e una regola diversa per ciascuna. Con la logica dei predicati basta scrivere InCasa(x) e **una sola regola vale per tutti**. Per questo **le basi di conoscenza si scrivono con la logica dei predicati**.

### 5.2 Il linguaggio dei predicati

Per parlare di oggetti servono alcuni elementi nuovi:
- il **dominio**: **l'insieme degli oggetti di cui si parla** (gli studenti della classe, le città d'Italia, i numeri naturali);
- le **costanti**: **nomi che indicano un oggetto preciso** del dominio (anna, roma, 7). Si scrivono con la minuscola;
- le **variabili**: lettere come x, y, z, che **stanno al posto di un oggetto qualsiasi** del dominio, come la x in algebra;
- i **predicati**: **esprimono una proprietà di un oggetto o una relazione tra più oggetti**, e con i loro argomenti formano una frase vera o falsa. Si scrivono con la maiuscola: Abbonato(anna), Genitore(anna, marco).

Una frase come Genitore(anna, marco), un predicato con i suoi argomenti, si chiama **formula atomica**: è il «mattone» della logica dei predicati, come la proposizione atomica lo era della logica proposizionale.

> **[SCHEMA]** *Anatomia di una formula atomica*
> La formula Genitore(anna, marco) in grande. Sopra «Genitore» l'etichetta «predicato» (ambra); sopra «anna» e «marco» l'etichetta «argomenti» (verde acqua), con i numeri 1 e 2; sotto, «arità 2». Sotto ancora, la lettura in italiano: «Anna è genitore di Marco».

Il numero di argomenti di un predicato si chiama **arità**, come per i connettivi:

| Arità | Esempio | Che cosa dice |
|---|---|---|
| 1 (proprietà) | Abbonato(anna) | Anna è abbonata |
| 2 (relazione) | Genitore(anna, marco) | Anna è genitore di Marco |
| 3 (relazione) | Tra(firenze, bologna, roma) | Firenze sta tra Bologna e Roma |

**L'ordine degli argomenti conta**: Genitore(anna, marco) e Genitore(marco, anna) dicono cose diverse. Chi scrive una base di conoscenza deve decidere un ordine e usarlo sempre.

Le convenzioni di scrittura (maiuscole per i predicati, minuscole per le costanti) sono quelle dei libri di logica; in DLV, nel capitolo 10, saranno un po' diverse.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Segue(luca, giulia): vuol dire anche che Giulia segue Luca?»
> **Risposta:** no. Dice che Luca segue Giulia (per esempio su Instagram); Giulia può non seguire Luca. L'ordine degli argomenti cambia il significato.

> **[ERRORE TIPICO]**
> ✗ «Genitore(anna, marco) e Genitore(marco, anna) sono la stessa cosa.»
> ✓ **L'ordine degli argomenti conta**: la prima dice che Anna è genitore di Marco, la seconda che Marco è genitore di Anna.

> **[NELLA STORIA]** *Frege, Peano e la nascita della logica moderna*
> Il matematico tedesco Gottlob Frege (1848–1925), nella sua *Ideografia* (1879), inventò la logica dei predicati e i quantificatori, «tutti» e «qualcuno» scritti con simboli: è considerato il fondatore della logica moderna. Negli stessi anni il matematico italiano Giuseppe Peano (1858–1932), professore a Torino, cercava di scrivere tutta la matematica con simboli precisi, e inventò segni che usiamo ancora oggi, come ∈ («appartiene a») ed ∃ («esiste»). Bertrand Russell, che abbiamo incontrato con il paradosso del barbiere, partì dai loro lavori.
> **[FOTO]** *Gottlob Frege* · di riconoscimento
> ![Gottlob Frege](https://upload.wikimedia.org/wikipedia/commons/9/99/Young_frege.jpg)
> Fonte: commons:Young frege.jpg
> **[FOTO]** *Giuseppe Peano* · di riconoscimento
> ![Giuseppe Peano](https://upload.wikimedia.org/wikipedia/commons/3/3a/Giuseppe_Peano.jpg)
> Fonte: commons:Giuseppe Peano.jpg

### 5.3 Le proprietà delle relazioni

Alcune relazioni hanno proprietà che permettono di **ricavare fatti nuovi senza scriverli**. Una relazione R è:
- **riflessiva** se **ogni oggetto è in relazione con sé stesso**: «è nella stessa classe di» (ognuno è nella stessa classe di sé stesso);
- **simmetrica** se **quando vale R(x, y) vale anche R(y, x)**: «è nella stessa classe di» (se Anna è nella stessa classe di Bea, Bea è nella stessa classe di Anna). «Segue su Instagram» invece non è simmetrica;
- **transitiva** se **da R(x, y) e R(y, z) segue R(x, z)**: «è più alto di» (se Anna è più alta di Bea e Bea di Carla, Anna è più alta di Carla). L'amicizia invece non è transitiva.

Se un sistema sa che una relazione è transitiva, da pochi fatti ne ricava molti altri. È così che nel capitolo 10, in DLV, una sola regola ricaverà tutta la **catena alimentare** di uno zoo dai soli fatti «chi mangia chi».

> **[WIDGET]** *Prova tu: che proprietà ha?*
> Quattro persone (Anna, Bea, Carla, Dario) disegnate in cerchio. Un menu per scegliere la relazione: «segue su Instagram», «è nella stessa classe di», «è più alto di», «è genitore di». Scelta la relazione, il widget disegna le frecce tra le persone (anche le frecce da una persona a sé stessa) e accende tre spie, «riflessiva», «simmetrica», «transitiva», verdi se la proprietà vale e rosse se non vale, con la coppia di frecce che lo dimostra evidenziata.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Anna è amica di Bea e Bea è amica di Carla: allora Anna è amica di Carla?»
> **Risposta:** non per forza: l'amicizia non è transitiva (Anna e Carla potrebbero non conoscersi). «Più alto di», invece, è transitiva.

### 5.4 Formule aperte e insiemi di verità

«x è maggiore di 3», o Abbonato(x), non è una proposizione: finché non sappiamo chi è x, non è né vera né falsa. Una formula con una variabile libera si chiama **formula aperta**: **diventa una proposizione quando al posto della variabile si mette un oggetto del dominio**. «7 è maggiore di 3» è vera, «2 è maggiore di 3» è falsa.

Gli oggetti del dominio che rendono vera una formula aperta formano il suo **insieme di verità**. Se il dominio sono i numeri da 1 a 10, l'insieme di verità di «x è maggiore di 3» è {4, 5, 6, 7, 8, 9, 10}.

Grazie agli insiemi di verità, **i connettivi diventano operazioni tra insiemi**, e si possono vedere con i diagrammi di Venn:

| Connettivo | Operazione tra insiemi | Nel diagramma |
|---|---|---|
| P(x) ∧ Q(x) | intersezione P ∩ Q | la parte comune ai due cerchi |
| P(x) ∨ Q(x) | unione P ∪ Q | tutto ciò che sta in almeno un cerchio |
| ¬P(x) | complementare | tutto ciò che sta fuori dal cerchio P |
| P(x) ⊕ Q(x) | differenza simmetrica | i due cerchi senza la parte comune |
| P(x) → Q(x) vera per ogni x | inclusione P ⊆ Q | il cerchio P sta dentro il cerchio Q |

L'ultima riga è Roma e l'Italia del capitolo 4: «se sei a Roma sei in Italia» vale per tutti perché Roma sta dentro l'Italia.

> **[ANIMAZIONE]** *La classe e gli insiemi*
> **Fa capire:** che una formula aperta ha un insieme di verità e che i connettivi corrispondono a intersezione, unione, complementare e differenza simmetrica.
> **Scena iniziale (passo 0):** un rettangolo «Dominio: la classe» con dodici studenti disegnati come piccole persone; due cerchi che si sovrappongono, «O = porta gli occhiali» (viola) e «C = gioca a calcio» (verde acqua); alcuni studenti in O, alcuni in C, due nell'intersezione, alcuni fuori da tutti e due. Descrizione: «Il dominio è la classe. Ogni studente rende vera o falsa la formula aperta "x porta gli occhiali", O(x), e "x gioca a calcio", C(x).»
> **Passo 1:** si accendono (ambra) gli studenti in O, gli altri si sbiadiscono. Descrizione: «Insieme di verità di O(x): gli studenti con gli occhiali.»
> **Passo 2:** si accendono quelli in C. Descrizione: «Insieme di verità di C(x): chi gioca a calcio.»
> **Passo 3:** si accendono solo i due nell'intersezione. Descrizione: «O(x) ∧ C(x): occhiali e calcio insieme. È l'intersezione dei due insiemi.»
> **Passo 4:** si accendono tutti quelli in almeno un cerchio. Descrizione: «O(x) ∨ C(x): almeno una delle due. È l'unione.»
> **Passo 5:** si accendono tutti quelli fuori da O. Descrizione: «¬O(x): chi non porta gli occhiali. È il complementare, tutto ciò che sta fuori dal cerchio O.»
> **Passo 6:** si accendono quelli in un solo cerchio. Descrizione: «O(x) ⊕ C(x): una sola delle due. È la differenza simmetrica: l'unione senza l'intersezione.»
> **Passo 7:** si accendono solo i due studenti fuori da entrambi i cerchi; in alto compare ¬(O ∨ C) ≡ ¬O ∧ ¬C. Descrizione: «De Morgan con gli insiemi: chi non è in nessuno dei due cerchi è chi non porta gli occhiali e non gioca a calcio.»

> **[ERRORE TIPICO]**
> ✗ «"x è maggiore di 3" è falsa.»
> ✓ Non è né vera né falsa: è una **formula aperta**, non una proposizione. Diventa vera o falsa solo quando al posto di x si mette un numero.

### 5.5 Interpretazioni e mondi

Il valore di verità di una formula **dipende dal mondo di cui si parla**: dal dominio e dal significato che diamo a costanti e predicati. Questa scelta si chiama **interpretazione**. **La stessa formula può essere vera in un mondo e falsa in un altro**: InCasa(marco) è vera stasera e falsa domattina.

Una base di conoscenza è proprio la **descrizione di un mondo**: un elenco di formule vere in quel mondo. Il sistema ragiona su quella descrizione, non sul mondo reale: se la descrizione è sbagliata o incompleta, anche le conclusioni lo saranno.

Per allenarsi a leggere le formule in un mondo si usa spesso il **mondo dei blocchi**: un piccolo mondo di forme geometriche disposte su una scacchiera, su cui si scrivono formule come Cubo(a) o ASinistraDi(a, b). È il mondo di un programma didattico molto usato per insegnare la logica, *Tarski's World*, e lo ritroveremo nel capitolo 8 con SHRDLU, uno dei primi programmi di IA.

> **[FOTO]** *Tarski's World* · da guardare nei dettagli
> Didascalia: a sinistra il mondo dei blocchi sulla scacchiera, a destra l'elenco delle formule; il programma dice se ciascuna è vera o falsa in quel mondo.
> ![Tarski's World](https://www.gradegrinder.net/images/static-page-img/Tarskis-main-win7.png)
> Fonte: https://www.gradegrinder.net/Support/documentation.html

> **[WIDGET]** *Prova tu: il mondo dei blocchi*
> Due mondi affiancati, ciascuno con alcune forme su una scacchiera 4 × 4 (cubi, piramidi e sfere, grandi e piccole, con un nome: a, b, c, d) disposte in modo diverso. Sotto, un elenco di formule (Cubo(a), Grande(b), ASinistraDi(a, b), Piramide(c) ∧ Piccola(c), ¬Sfera(d), ASinistraDi(c, d) ∨ Cubo(d)); per ogni formula lo studente sceglie V o F in ciascun mondo e al clic il widget mostra la risposta, evidenziando gli oggetti coinvolti.

> **[RICORDA]**
> - La logica proposizionale tratta le frasi come blocchi chiusi: non vede **oggetti**, **proprietà**, **relazioni** né le parole «tutti» e «qualcuno». La logica dei predicati sì, ed è il linguaggio delle basi di conoscenza.
> - Si fissa un **dominio**; le **costanti** nominano oggetti, le **variabili** stanno per oggetti qualsiasi, i **predicati** esprimono proprietà o relazioni. L'**arità** è il numero di argomenti, e il loro **ordine conta**.
> - Una relazione può essere **riflessiva**, **simmetrica** o **transitiva**; conoscere queste proprietà permette di ricavare fatti nuovi.
> - Una **formula aperta** diventa una proposizione quando la variabile prende un valore; i valori che la rendono vera formano il suo **insieme di verità**. AND, OR, NOT e XOR diventano intersezione, unione, complementare e differenza simmetrica.
> - Il valore di una formula dipende dall'**interpretazione**, cioè dal mondo di cui si parla; una base di conoscenza è la descrizione di un mondo.

---

## 6. I quantificatori

*«Tutti» e «qualcuno» in formula: scrivere regole che valgono per molti oggetti, tradurle senza errori e usarle per ragionare.*

### 6.1 Tutti e qualcuno: ∀ ed ∃

Il regolamento d'istituto è pieno di frasi che parlano di molti oggetti insieme: «**tutti** gli studenti devono avere la giustificazione», «**qualcuno** ha dimenticato il libretto», «**nessuno** può uscire durante la verifica». Per scriverle servono i **quantificatori**:
- il **quantificatore universale ∀** («per ogni»): **∀x P(x) è vera se P vale per ogni oggetto del dominio**;
- il **quantificatore esistenziale ∃** («esiste almeno un»): **∃x P(x) è vera se P vale per almeno un oggetto del dominio**.

∀ è una A rovesciata, da *All* («tutti»); ∃ è una E rovesciata, da *Exists* («esiste»), introdotta da Peano. ∀x Giustificato(x) si legge «per ogni x, x è giustificato»; ∃x Giustificato(x) si legge «esiste almeno un x tale che x è giustificato».

Ne segue una differenza importante per controllarle:
- per rendere **falsa** una frase con ∀ **basta un controesempio**: uno studente senza giustificazione;
- per rendere **vera** una frase con ∃ **basta un esempio**: uno studente giustificato.

In un dominio finito, **∀ è come un grande AND** e **∃ è come un grande OR**: «tutti hanno la giustificazione» vuol dire «Anna ce l'ha **e** Bea ce l'ha **e** Carla ce l'ha…»; «qualcuno ce l'ha» vuol dire «Anna **o** Bea **o** Carla…».

> **[ANIMAZIONE]** *Il controllore*
> **Fa capire:** come si verifica una frase con ∀ e una con ∃, e perché per la prima basta un controesempio e per la seconda basta un esempio.
> **Scena iniziale (passo 0):** una fila di sei studenti (persone con volto minimo); alcuni hanno in mano un foglio giustificazione, il terzo e il quinto no. A sinistra il controllore con un registro. In alto la frase «∀x Giustificato(x): tutti hanno la giustificazione». Descrizione: «Il controllore deve verificare se tutti hanno la giustificazione.»
> **Passo 1:** il controllore passa il primo e il secondo studente: due spunte verdi. Descrizione: «Il primo ce l'ha, il secondo anche: finora la frase regge.»
> **Passo 2:** al terzo studente, senza foglio, compare una croce rossa e il controllore si ferma; la frase in alto diventa rossa, «falsa». Descrizione: «Il terzo non ce l'ha: basta un controesempio, la frase è falsa. Non serve controllare gli altri.»
> **Passo 3:** si torna all'inizio; la frase in alto diventa «∃x Giustificato(x): qualcuno ha la giustificazione». Descrizione: «Ora la domanda è un'altra: qualcuno ha la giustificazione?»
> **Passo 4:** al primo studente spunta verde, il controllore si ferma; la frase diventa verde, «vera». Descrizione: «Il primo ce l'ha: basta un esempio, la frase è vera.»

Una variabile che compare sotto un quantificatore, come la x in ∀x Giustificato(x), si dice **vincolata**: il quantificatore dice di quali oggetti si parla. Una variabile senza quantificatore, come in Giustificato(x) da sola, si dice **libera**, e la formula è una formula aperta (capitolo 5). La parte di formula su cui agisce un quantificatore è il suo **campo d'azione**, e si indica con le parentesi.

### 6.2 Tradurre con i quantificatori

Quasi tutte le frasi con «tutti», «nessuno», «qualcuno» seguono uno di quattro schemi, che risalgono ad Aristotele: le **forme categoriche**.

| Forma | Frase | Formula | Nel diagramma |
|---|---|---|---|
| A (universale affermativa) | «Tutti gli studenti sono promossi» | ∀x(Studente(x) → Promosso(x)) | il cerchio degli studenti sta dentro quello dei promossi |
| E (universale negativa) | «Nessuno studente è bocciato» | ∀x(Studente(x) → ¬Bocciato(x)) | i due cerchi non si toccano |
| I (particolare affermativa) | «Qualche studente è promosso» | ∃x(Studente(x) ∧ Promosso(x)) | i due cerchi hanno almeno un punto in comune |
| O (particolare negativa) | «Qualche studente non è promosso» | ∃x(Studente(x) ∧ ¬Promosso(x)) | almeno uno studente sta fuori dal cerchio dei promossi |

La regola pratica è: **∀ va con →, ∃ va con ∧**. Con ∀ si dice «se qualcosa è uno studente, allora…», senza pretendere che tutto il dominio sia fatto di studenti; con ∃ si dice «c'è qualcosa che è uno studente **e**…».

Due parole che ingannano:
- **«solo»**: «Solo gli abbonati entrano gratis» si scrive **∀x(EntraGratis(x) → Abbonato(x))**, con la freccia al contrario rispetto a «tutti gli abbonati entrano gratis». Essere abbonato è una condizione **necessaria**, come nel capitolo 4;
- **«nessuno»**: «Nessuno studente è bocciato» si può scrivere come ∀x(Studente(x) → ¬Bocciato(x)) oppure come ¬∃x(Studente(x) ∧ Bocciato(x)), «non esiste uno studente bocciato».

> **[ERRORE TIPICO]**
> ✗ «"Tutti gli studenti sono promossi" si scrive ∀x(Studente(x) ∧ Promosso(x)).»
> ✓ Così si dice che **ogni oggetto del dominio** è uno studente ed è promosso: se nel dominio c'è anche un professore, la formula è falsa. Ci vuole la freccia: **∀x(Studente(x) → Promosso(x))**.

> **[ERRORE TIPICO]**
> ✗ «"Qualche studente è promosso" si scrive ∃x(Studente(x) → Promosso(x)).»
> ✓ Questa formula è vera anche se **nessuno studente è promosso**: basta un oggetto che non sia uno studente, perché un'implicazione con l'antecedente falso è vera. Ci vuole **∧**: ∃x(Studente(x) ∧ Promosso(x)).

### 6.3 Negare i quantificatori

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Il contrario di "tutti i miei compagni hanno lo smartphone" è "nessuno ha lo smartphone"?»
> **Risposta:** no. La negazione è «**almeno uno** non ce l'ha». «Nessuno ce l'ha» è un'altra frase, che può essere falsa insieme alla prima (per esempio se metà della classe ha lo smartphone).

Negare una frase con un quantificatore significa **cambiare quantificatore e spostare la negazione dentro**:
- **¬∀x P(x) ≡ ∃x ¬P(x)**: «non tutti hanno la giustificazione» = «qualcuno non ce l'ha»;
- **¬∃x P(x) ≡ ∀x ¬P(x)**: «nessuno ha la giustificazione» = «tutti non ce l'hanno».

Sono le **leggi di De Morgan** del capitolo 3, allargate a tutto il dominio: ∀ è un grande AND, ∃ un grande OR, e negando un AND si ottiene un OR delle negazioni.

> **[NELLA STORIA]** *Il quadrato delle opposizioni*
> Già Aristotele, l'inventore del sillogismo (capitolo 1), aveva studiato come le quattro forme A, E, I, O si oppongono tra loro. I logici del Medioevo le disposero ai quattro angoli di un quadrato, il **quadrato delle opposizioni**, che si è studiato nelle scuole per secoli.

> **[SCHEMA]** *Il quadrato delle opposizioni*
> Un quadrato con ai quattro angoli le forme categoriche e i loro esempi: in alto a sinistra A «Tutti hanno lo smartphone», in alto a destra E «Nessuno ha lo smartphone», in basso a sinistra I «Qualcuno ha lo smartphone», in basso a destra O «Qualcuno non ha lo smartphone». Le due diagonali (A–O e E–I) in rosso con l'etichetta «contraddittorie: una è la negazione dell'altra». Il lato in alto (A–E) con l'etichetta «contrarie: possono essere false tutte e due».

Ora si può sciogliere l'ambiguità del capitolo 1, «**tutti** gli studenti **non** hanno fatto i compiti»:

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"Tutti gli studenti non hanno fatto i compiti": quanti li hanno fatti?»
> **Risposta:** la frase è ambigua. Può voler dire «nessuno li ha fatti», ∀x ¬Compiti(x), oppure «non tutti li hanno fatti», ¬∀x Compiti(x), cioè qualcuno sì e qualcuno no. La formula costringe a scegliere.

### 6.4 Più quantificatori nella stessa frase

Molte frasi ne contengono più di uno: «ognuno ha un compagno di banco», «c'è un professore che conosce tutti». In questi casi **l'ordine dei quantificatori cambia il significato**:
- **∀x ∃y CompagnoDiBanco(y, x)**: per ogni studente esiste un compagno di banco, **ognuno ha il suo**;
- **∃y ∀x CompagnoDiBanco(y, x)**: esiste uno studente che è compagno di banco di tutti, **uno solo per tutti**.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima dell'animazione)
> «"Ognuno ha qualcuno che lo segue su Instagram" e "c'è qualcuno che segue tutti": dicono la stessa cosa?»
> **Risposta:** no. La prima dice che ognuno ha almeno un follower, magari diverso per ciascuno; la seconda che esiste una persona che segue tutti. L'ordine dei quantificatori cambia il significato.

> **[ANIMAZIONE]** *Ognuno ha il suo compagno di banco*
> **Fa capire:** la differenza tra ∀x ∃y ed ∃y ∀x.
> **Scena iniziale (passo 0):** sei studenti disegnati in due file, come in classe. In alto due formule grigie: «∀x ∃y CompagnoDiBanco(y, x)» e «∃y ∀x CompagnoDiBanco(y, x)». Descrizione: «Due formule con gli stessi quantificatori, in ordine diverso.»
> **Passo 1:** la prima formula si illumina; da ogni studente parte una freccia verso il proprio compagno di banco (tre coppie). Descrizione: «∀x ∃y: per ogni studente esiste un compagno di banco. Ognuno ha il suo, e i compagni sono diversi.»
> **Passo 2:** la seconda formula si illumina; le frecce si spostano e vanno tutte verso un solo studente al centro. Descrizione: «∃y ∀x: esiste uno studente che è compagno di banco di tutti. Uno solo per tutti: un'affermazione molto più forte, e in classe falsa.»

> **[ERRORE TIPICO]**
> ✗ «∀x ∃y Mamma(y, x) e ∃y ∀x Mamma(y, x) dicono la stessa cosa.»
> ✓ La prima dice che **ognuno ha una mamma**; la seconda che **esiste una mamma di tutti**. Cambiando l'ordine dei quantificatori cambia il significato.

### 6.5 Le eccezioni

«Tutti gli uccelli volano» è falsa: i pinguini non volano. Per scrivere una regola con un'eccezione, **l'eccezione si aggiunge alla condizione**:

**∀x(Uccello(x) ∧ ¬Pinguino(x) → Vola(x))**: «ogni uccello che non è un pinguino vola».

Il problema è che le eccezioni non finiscono mai: gli struzzi, i kiwi, un uccello con l'ala rotta, un pulcino appena nato… **Ogni eccezione va scritta a mano nella condizione**, e chi scrive la regola deve conoscerle tutte in anticipo. Nel capitolo 9 vedremo che questo è uno dei grandi limiti della logica e dei sistemi a regole, e come lo affrontano.

> **[SCHEMA]** *La regola che non finisce mai*
> In alto la regola «∀x(Uccello(x) → Vola(x))». A ogni clic la condizione si allunga di un pezzo, con la piccola icona dell'uccello corrispondente: «∧ ¬Pinguino(x)», «∧ ¬Struzzo(x)», «∧ ¬Kiwi(x)», «∧ ¬AlaRotta(x)», «∧ ¬AppenaNato(x)», e infine «∧ …?». (Si può realizzare come animazione a clic.)

### 6.6 Ragionare con i quantificatori

«Tutti gli abbonati entrano gratis. Anna è abbonata. Quindi Anna entra gratis.» Nel capitolo 5 questo ragionamento non si poteva dimostrare; ora sì. Per usare una regola che vale **per ogni x** su un caso preciso, **si sostituisce la variabile con l'oggetto di cui si parla**, e poi si applica il *modus ponens*.

> **[ANIMAZIONE]** *Dalla regola al caso*
> **Fa capire:** come si usa una regola con «per ogni x» su un caso preciso: prima si sostituisce la variabile, poi si applica il *modus ponens*.
> **Scena iniziale (passo 0):** in alto a sinistra la regola «∀x ( Abbonato(x) → EntraGratis(x) )», etichetta «regola»; a destra il fatto «Abbonato(anna)», etichetta «fatto». Sotto, spazio vuoto per i passi. Descrizione: «Una regola che vale per tutti e un fatto su Anna. Come si usano insieme?»
> **Passo 1:** la regola si colora d'ambra; sotto compare «1. Abbonato(anna) → EntraGratis(anna) — istanziazione universale: x diventa anna». Descrizione: «Primo passo: la regola vale per ogni x, quindi vale anche per Anna. Si sostituisce x con anna ovunque compaia.»
> **Passo 2:** il fatto si colora d'ambra; compare «2. EntraGratis(anna) — *modus ponens* con il fatto Abbonato(anna)». Descrizione: «Ora la regola parla di Anna e il fatto dice che Anna è abbonata: con il *modus ponens* si ricava che Anna entra gratis.»
> **Passo 3:** compare «3. ∃x EntraGratis(x) — generalizzazione esistenziale: qualcuno entra gratis». Descrizione: «Da un caso preciso si può anche risalire a "esiste qualcuno": se Anna entra gratis, esiste qualcuno che entra gratis.»
> **Passo 4:** il passo 2 si illumina in verde acqua. Descrizione: «Sostituire la variabile e poi applicare il *modus ponens*: è esattamente ciò che fa un motore inferenziale con le regole con variabili.»

Le regole di derivazione per i quantificatori sono quattro:

| Regola | Che cosa permette | Esempio |
|---|---|---|
| **eliminazione di ∀** (istanziazione universale) | da «vale per ogni x» a «vale per questo oggetto» | da ∀x(Uomo(x) → Mortale(x)) a Uomo(socrate) → Mortale(socrate) |
| **introduzione di ∃** (generalizzazione esistenziale) | da «vale per questo oggetto» a «esiste qualcuno per cui vale» | da EntraGratis(anna) a ∃x EntraGratis(x) |
| **introduzione di ∀** | se una cosa è stata dimostrata per un x **qualsiasi**, senza usare niente di particolare su x, vale per tutti | in geometria: «preso un triangolo qualsiasi, la somma degli angoli è 180°» |
| **eliminazione di ∃** | se esiste qualcuno con una proprietà, gli si può dare un nome nuovo e ragionare su di lui | da ∃x HaDimenticatoIlLibretto(x): «chiamiamolo c» |

La più importante è la prima: con l'**istanziazione universale** si dimostra finalmente il sillogismo di Socrate, e **la sostituzione della variabile è il cuore dei motori inferenziali** (capitolo 7) e di **DLV** (capitolo 10), dove ogni regola si scrive con le variabili e si applica a tutti i fatti che le corrispondono.

> **[RICORDA]**
> - **∀x P(x)** è vera se P vale per ogni oggetto del dominio (basta un controesempio per falsificarla); **∃x P(x)** se vale per almeno uno (basta un esempio). ∀ è come un grande AND, ∃ un grande OR.
> - Le frasi con «tutti», «nessuno», «qualcuno» seguono le quattro **forme categoriche**: **∀ va con →, ∃ va con ∧**; «solo» rovescia la freccia.
> - **¬∀x P(x) ≡ ∃x ¬P(x)** e **¬∃x P(x) ≡ ∀x ¬P(x)**: la negazione di «tutti» è «almeno uno no», non «nessuno».
> - Con più quantificatori **l'ordine conta**: ∀x ∃y («ognuno ha il suo») è diverso da ∃y ∀x («uno per tutti»).
> - Le **eccezioni** si aggiungono alla condizione della regola, ma non finiscono mai: è il problema del pinguino.
> - Per applicare una regola con «per ogni x» a un caso, si **sostituisce la variabile** con l'oggetto (istanziazione universale) e si usa il *modus ponens*: è ciò che fa un motore inferenziale.

---

## 7. Dalla logica alle regole

*Come si costruisce una base di conoscenza con fatti e regole, e come un motore inferenziale la usa: partendo dai fatti o partendo dalla domanda.*

### 7.1 La base di conoscenza: fatti e regole

> **[SCHEMA]** *La famiglia in fatti e regole*
> A sinistra un albero genealogico disegnato (persone con volto minimo): Mario in alto; sotto, i suoi figli Anna e Luigi; sotto Luigi, i figli Carla e Paolo. A destra, in un riquadro «Fatti»: Genitore(mario, anna), Genitore(mario, luigi), Genitore(luigi, carla), Genitore(luigi, paolo). Sotto, in un riquadro «Regola»: «Nonno(X, Z) se Genitore(X, Y) e Genitore(Y, Z)». In basso, in grigio chiaro e con l'etichetta «ricavati, non scritti»: Nonno(mario, carla), Nonno(mario, paolo).

Una **base di conoscenza** descrive un pezzo di mondo, per esempio una famiglia, con due tipi di formule:
- i **fatti**: **formule atomiche senza variabili**, che dicono qualcosa di preciso su oggetti precisi. Genitore(mario, luigi): Mario è genitore di Luigi;
- le **regole**, dette anche **regole di produzione**: **dicono che, se alcune condizioni sono vere, allora è vera anche una conclusione**. «Se X è genitore di Y e Y è genitore di Z, allora X è nonno di Z.»

Nelle regole **le variabili valgono implicitamente «per ogni»**: la regola del nonno è ∀X ∀Y ∀Z (Genitore(X, Y) ∧ Genitore(Y, Z) → Nonno(X, Z)), ma il ∀ non si scrive. Varrà lo stesso in DLV.

Il punto chiave è che **una base di conoscenza ricava fatti che nessuno ha scritto**: nessuno ha scritto «Mario è nonno di Carla», eppure segue dai fatti e dalla regola. È la differenza con un database:

| | Database | Base di conoscenza |
|---|---|---|
| Che cosa contiene | dati (nomi, voti, date) | fatti **e regole** |
| Che cosa sa fare | restituire ciò che contiene («che voto ha preso Mario?») | **ricavare fatti nuovi** («Mario rischia la bocciatura?», se c'è una regola che lo dice) |
| Se l'informazione non c'è | «nessun risultato» | prova a ricavarla dalle regole |

> **[ERRORE TIPICO]**
> ✗ «Una base di conoscenza è un database con tante informazioni.»
> ✓ Un database restituisce solo ciò che contiene; una base di conoscenza contiene anche **regole** e **ricava fatti nuovi** che nessuno ha scritto.

### 7.2 Le clausole di Horn e la risoluzione

Non tutte le regole sono comode per un computer. I motori inferenziali usano regole di una forma speciale, le **clausole di Horn** (dal nome del logico Alfred Horn, che le studiò nel 1951): **tutte le condizioni sono unite da AND e la conclusione è una sola**, senza OR.

Una regola di Horn si legge al contrario rispetto all'implicazione, **«testa se corpo»**: la **testa** è la conclusione, il **corpo** sono le condizioni. Nonno(X, Z) **se** Genitore(X, Y) **e** Genitore(Y, Z). È la forma che useremo in DLV.

> **[SCHEMA]** *Anatomia di una regola*
> In grande: «Nonno(X, Z) ← Genitore(X, Y) ∧ Genitore(Y, Z)». Sopra la parte sinistra l'etichetta «testa: la conclusione (una sola)» (ambra); sopra la parte destra «corpo: le condizioni (in AND)» (verde acqua); sopra la freccia «se». Sotto, tre esempi con una spunta o una croce: «Luce ← Sera ∧ Buio» ✓ di Horn; «Genitore(mario, luigi)» ✓ di Horn (un fatto: testa senza corpo); «Cane(X) ∨ Gatto(X) ← AnimaleDomestico(X)» ✗ non di Horn (due conclusioni in OR).

Anche **i fatti sono clausole di Horn**, con la testa e senza corpo («è vero e basta»), e anche **le domande** lo sono, con il corpo e senza testa («è vero che…?»). Il motivo per cui si usano è che **con le clausole di Horn il ragionamento è veloce e non deve mai «provare i casi»**: ogni regola, se le condizioni sono vere, dà una sola conclusione certa. Con un OR nella conclusione («è un cane o un gatto») il sistema dovrebbe invece seguire due strade.

I programmi che dimostrano teoremi in modo automatico usano spesso una sola regola di inferenza, la **risoluzione** (proposta da J. A. Robinson nel 1965 e usata anche dal linguaggio Prolog): da due frasi con OR in cui compaiono una proposizione e la sua negazione, si ricava una frase che le toglie entrambe.

> **[SCHEMA]** *La risoluzione*
> Due riquadri affiancati: «piove ∨ nevica» e «¬nevica ∨ fa freddo». «nevica» e «¬nevica» sono evidenziati in rosso e collegati da una linea con l'etichetta «si cancellano». Sotto, la riga e il risultato: «piove ∨ fa freddo». In italiano: «Piove o nevica; non nevica o fa freddo; quindi piove o fa freddo.»

### 7.3 Il *forward chaining*

Un **motore inferenziale** può usare la base di conoscenza in due modi. Il primo è il **ragionamento in avanti** (*forward chaining*): **si parte dai fatti, si applicano tutte le regole che possono scattare, si aggiungono le conclusioni e si ripete finché non si aggiunge più niente**. È il ragionamento a catena della casa smart del capitolo 1, ora con le variabili: una regola scatta per **ogni** combinazione di fatti che la soddisfa (capitolo 6: si sostituiscono le variabili).

> **[ANIMAZIONE]** *Tutti i nonni della famiglia*
> **Fa capire:** che il *forward chaining* applica una regola con variabili a tutte le combinazioni di fatti che la soddisfano e si ferma solo quando un giro intero non aggiunge niente.
> **Scena iniziale (passo 0):** a sinistra i quattro fatti Genitore(mario, anna), Genitore(mario, luigi), Genitore(luigi, carla), Genitore(luigi, paolo); al centro la regola «Nonno(X, Z) se Genitore(X, Y) e Genitore(Y, Z)»; a destra un riquadro vuoto «Fatti ricavati». In alto un contatore «giro 1». Descrizione: «Il motore parte dai fatti e prova la regola su tutte le coppie di fatti.»
> **Passo 1:** si evidenziano Genitore(mario, luigi) e Genitore(luigi, carla); sulla regola compaiono X = mario, Y = luigi, Z = carla; nei fatti ricavati compare Nonno(mario, carla). Descrizione: «Due fatti si incastrano: la Y del primo è la stessa persona del secondo. La regola scatta: Mario è nonno di Carla.»
> **Passo 2:** stessa cosa con Genitore(luigi, paolo): compare Nonno(mario, paolo). Descrizione: «La stessa regola scatta di nuovo, con altre persone: Mario è nonno anche di Paolo.»
> **Passo 3:** si evidenziano per un attimo Genitore(mario, anna) e i fatti di Luigi, con una croce grigia. Descrizione: «Anna non ha figli nella base di conoscenza: con lei la regola non scatta.»
> **Passo 4:** il contatore passa a «giro 2»; il motore riprova tutto e non aggiunge niente; compare la scritta «nessun fatto nuovo: fine». Descrizione: «Un giro intero senza fatti nuovi: il motore si ferma. Ha ricavato tutti i nonni della famiglia.»

Dentro un sistema a regole, il ragionamento in avanti è un ciclo di tre fasi, detto **ciclo riconoscimento-azione**:
1. **riconoscimento** (*matching*): il motore confronta i fatti con le condizioni di tutte le regole e trova quelle che possono scattare;
2. **scelta** (*conflict resolution*): se più regole possono scattare e danno ordini in contrasto, ne sceglie una con un criterio: la **priorità** decisa da chi ha scritto le regole, la **regola più specifica** (con più condizioni) o quella che usa il **fatto più recente**;
3. **esecuzione**: la regola scelta scatta, la conclusione si aggiunge ai fatti e il ciclo ricomincia.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima della fase di scelta)
> «La casa ha due regole: "se è sera e c'è qualcuno in casa, accendi le luci" e "se è dopo le 23 e nessuno si muove da un'ora, spegni tutto". Sono le 23:30 e Marco si è addormentato sul divano: che cosa fa la casa?»
> **Risposta:** scattano tutte e due, e danno ordini opposti. Il motore deve avere un criterio per scegliere, per esempio dare la priorità alla seconda: è la risoluzione dei conflitti.

> **[ERRORE TIPICO]**
> ✗ «Il *forward chaining* si ferma appena trova una conclusione.»
> ✓ Continua finché un giro intero non aggiunge **nessun** fatto nuovo, perché ogni conclusione può far scattare altre regole.

### 7.4 Il *backward chaining*

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa
> «Per sapere se Mario è nonno di Carla, conviene calcolare tutti i nonni della famiglia o partire dalla domanda?»
> **Risposta:** se la domanda è una sola, conviene partire dalla domanda: si controllano solo i fatti che servono, e non tutti quelli della base di conoscenza.

Il secondo modo è il **ragionamento all'indietro** (*backward chaining*): **si parte da una domanda, si cerca una regola che abbia quella conclusione, e le sue condizioni diventano sotto-obiettivi**; ogni sotto-obiettivo si cerca tra i fatti, oppure diventa a sua volta la domanda per un'altra regola. Se un tentativo fallisce, **si torna indietro e se ne prova un altro**: questo passo si chiama *backtracking*.

> **[ANIMAZIONE]** *Mario è nonno di Carla?*
> **Fa capire:** come il *backward chaining* trasforma una domanda in sotto-obiettivi e come torna indietro quando un tentativo fallisce.
> **Scena iniziale (passo 0):** a sinistra i fatti Genitore(mario, anna), Genitore(mario, luigi), Genitore(luigi, carla) e la regola «Nonno(X, Z) se Genitore(X, Y) e Genitore(Y, Z)»; a destra, in alto, la domanda «Nonno(mario, carla)?» in ambra. Descrizione: «La domanda è: Nonno(mario, carla)? Si parte da qui, non dai fatti.»
> **Passo 1:** dalla domanda scendono due rami: «Genitore(mario, Y)?» e «Genitore(Y, carla)?». Descrizione: «Una regola ha come conclusione Nonno(X, Z): con X = mario e Z = carla, le sue condizioni diventano due sotto-obiettivi.»
> **Passo 2:** il fatto Genitore(mario, anna) si illumina; il primo ramo diventa «Genitore(mario, anna)?» (verde acqua), il secondo «Genitore(anna, carla)?». Descrizione: «Primo sotto-obiettivo: Genitore(mario, Y). Il primo fatto che corrisponde dà Y = anna.»
> **Passo 3:** il secondo ramo diventa rosso con «✗ nessun fatto». Descrizione: «Secondo sotto-obiettivo: Genitore(anna, carla)? Non c'è nessun fatto così: il tentativo fallisce.»
> **Passo 4:** si illumina Genitore(mario, luigi); i rami diventano «Genitore(mario, luigi)?» e «Genitore(luigi, carla)?»; una nota: «anna: già provata, fallita». Descrizione: «Si torna indietro (*backtracking*) e si prova il fatto successivo: Genitore(mario, luigi), quindi Y = luigi.»
> **Passo 5:** si illumina Genitore(luigi, carla); tutto l'albero diventa verde acqua; in basso «Sì: Nonno(mario, carla), con Y = luigi». Descrizione: «Genitore(luigi, carla)? Sì, è un fatto. Tutti i sotto-obiettivi sono soddisfatti: Mario è nonno di Carla.»

Quando i tentativi possibili sono tanti, il motore deve decidere **in che ordine provarli**. Le due strategie principali sono:
- la **ricerca in profondità**: si segue una strada fino in fondo e, solo se fallisce, si torna indietro e si prova la successiva. È veloce e usa poca memoria, ma può perdersi in una strada molto lunga;
- la **ricerca in ampiezza**: si fa un primo passo in tutte le strade, poi un secondo passo in tutte, e così via. Trova sempre la soluzione più vicina, ma deve ricordarsi molte strade insieme.

> **[SCHEMA]** *Cercare le chiavi*
> Due alberi uguali affiancati: alla radice «casa», al primo livello tre stanze (cucina, camera, soggiorno), al secondo livello i mobili di ogni stanza (tavolo, cassetto, divano…). Nell'albero di sinistra, «in profondità», i nodi sono numerati nell'ordine in cui si visitano: cucina, poi tutti i mobili della cucina, poi la camera e i suoi mobili…; didascalia «smonto una stanza alla volta». In quello di destra, «in ampiezza», prima tutte le stanze, poi tutti i mobili; didascalia «prima un'occhiata a tutte le stanze, poi i cassetti».

### 7.5 Quale strategia, e perché logica e controllo sono separati

| | *Forward chaining* | *Backward chaining* |
|---|---|---|
| Parte da | i fatti | una domanda |
| Arriva a | tutte le conclusioni possibili | la risposta a quella domanda |
| Conviene quando | i fatti cambiano e bisogna reagire | c'è una domanda precisa da verificare |
| Esempi | casa smart, sistemi di allarme, monitoraggio | diagnosi («è influenza?»), «Mario è nonno di Carla?» |

In entrambi i casi **il motore inferenziale è lo stesso per qualunque base di conoscenza**: sa applicare regole, non sa niente di famiglie, case o malattie. Per cambiare argomento basta cambiare la base di conoscenza, senza toccare il motore. Si dice che **la conoscenza (la logica) e il modo di usarla (il controllo) sono separati**. Lo scienziato Robert Kowalski, uno dei creatori del linguaggio Prolog, lo riassunse nel 1979 con lo slogan «Algoritmo = Logica + Controllo».

> **[SCHEMA]** *Un motore, tante basi di conoscenza*
> Al centro un motore disegnato come un ingranaggio, etichetta «motore inferenziale». Intorno tre «cartucce» che si possono inserire una alla volta: «famiglia» (Genitore, Nonno), «casa smart» (Sera, Buio, Luce), «guasti dello scooter» (NonParte, Batteria, Candela). Una è inserita, le altre due in attesa; una freccia indica che si possono scambiare.

> **[RICORDA]**
> - Una **base di conoscenza** contiene **fatti** (formule atomiche senza variabili) e **regole** (se condizioni, allora conclusione), e a differenza di un database **ricava fatti che nessuno ha scritto**.
> - I motori inferenziali usano **clausole di Horn**: condizioni in AND e una sola conclusione, scritte «**testa se corpo**». La **risoluzione** è la regola con cui i computer dimostrano automaticamente.
> - Il ***forward chaining*** parte dai fatti e applica le regole finché non si aggiunge più niente, con il ciclo riconoscimento, scelta, esecuzione.
> - Il ***backward chaining*** parte dalla domanda, la trasforma in **sotto-obiettivi** e torna indietro se un tentativo fallisce; i tentativi si esplorano **in profondità** o **in ampiezza**.
> - Il *forward* serve per reagire ai fatti, il *backward* per rispondere a una domanda. In entrambi **logica e controllo sono separati**: lo stesso motore funziona con qualunque base di conoscenza.

---

## 8. IA simbolica e sistemi esperti

*Dall'idea che pensare sia manipolare simboli ai programmi che ragionano come uno specialista: come l'IA simbolica ha rappresentato la conoscenza e l'ha messa al lavoro.*

### 8.1 La nascita dell'IA simbolica

Nell'estate del 1956, al Dartmouth College (Stati Uniti), un piccolo gruppo di ricercatori si riunì per un seminario con un obiettivo ambizioso: capire come far «pensare» le macchine. Per presentarlo, John McCarthy aveva inventato un'espressione nuova: **intelligenza artificiale**. È considerato l'atto di nascita della disciplina.

Proprio nel 1956 Allen Newell, Herbert Simon e Cliff Shaw presentarono il ***Logic Theorist***, un programma che **dimostrava teoremi di logica** applicando regole di inferenza: riuscì a dimostrare 38 dei primi 52 teoremi dei *Principia Mathematica* di Russell e Whitehead. L'anno dopo, con il ***General Problem Solver***, provarono a scrivere un programma capace di risolvere problemi di qualunque tipo, scomponendoli in sotto-obiettivi.

Alla base di questi programmi c'era un'idea che Newell e Simon formularono in modo preciso: l'**ipotesi del sistema fisico di simboli**. **Un sistema che manipola simboli secondo regole ha tutto ciò che serve per comportarsi in modo intelligente**; e la mente umana, secondo loro, funziona proprio così. È l'idea su cui si fonda tutta l'IA simbolica.

> **[FOTO]** *Allen Newell e Herbert Simon* · di riconoscimento
> ![Allen Newell e Herbert Simon](https://www.letr.ai/_astro/67077c7bcd7ce44bad4703e5.CoPvmsMc_11u0Lm.webp)
> Fonte: https://www.letr.ai/en/blog/story-20211126-3

I pionieri erano molto ottimisti: nel 1965 Herbert Simon prevedeva che entro vent'anni le macchine sarebbero state capaci di fare qualunque lavoro di un essere umano. I risultati migliori arrivarono invece in **mondi piccoli e ben definiti**. Il più famoso è **SHRDLU**, il programma scritto da Terry Winograd al MIT tra il 1968 e il 1970: un braccio virtuale muoveva cubi, piramidi e scatole in un mondo dei blocchi, come quello del capitolo 5, e **capiva comandi e domande in inglese**.

> **[FOTO]** *SHRDLU* · da guardare nei dettagli
> Didascalia: lo schermo di SHRDLU: in alto il comando «Pick up a big red block» («prendi un blocco rosso grande») e la risposta «OK»; sotto, il mondo dei blocchi disegnato al computer.
> ![SHRDLU](https://www.galaxus.at/Files/7/7/1/3/5/5/8/2/SHRDLU%20Demo21.png)
> Fonte: https://www.galaxus.at/en/page/chatgpt-2025-is-dumber-than-shrdlu-1970-39759

> **[ESEMPIO]** *Un dialogo con SHRDLU (1970)*
> — Prendi un blocco rosso grande.
> — OK.
> — Afferra la piramide.
> — Non capisco quale piramide intendi.
> — Trova un blocco più alto di quello che tieni in mano e mettilo nella scatola.
> — Con «lo» suppongo che tu intenda il blocco più alto di quello che tengo in mano. OK.
> Fuori dal suo piccolo mondo, però, SHRDLU non capiva nulla.

> **[SCHEMA]** *La nascita dell'IA simbolica*
> Una linea del tempo con quattro tappe: 1956 Dartmouth («nasce l'espressione "intelligenza artificiale"»); 1956 *Logic Theorist* («dimostra teoremi di logica»); 1957 *General Problem Solver* («risolve problemi con sotto-obiettivi»); 1970 SHRDLU («capisce comandi nel mondo dei blocchi»).

### 8.2 Rappresentare la conoscenza: reti semantiche, frame, ontologie

Oltre ai fatti e alle regole del capitolo 7, l'IA simbolica ha inventato altri modi per **organizzare la conoscenza**, pensati per somigliare a come la organizziamo noi.

Una **rete semantica** è **un grafo in cui i nodi sono concetti e le frecce sono relazioni** tra concetti. Le due relazioni più usate sono **«è un»** (*is-a*: il canarino è un uccello), che forma una gerarchia dal particolare al generale, e **«ha»** (*has-a*: l'uccello ha le ali), che descrive le proprietà. Il grande vantaggio è l'**ereditarietà**: **un concetto eredita le proprietà dei concetti più generali** a cui è collegato con «è un», senza che nessuno debba scriverle.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima del passo 2 dell'animazione)
> «La rete sa che "il canarino è un uccello" e che "gli uccelli hanno le ali". Nessuno ha scritto "il canarino ha le ali": il sistema lo sa?»
> **Risposta:** sì, per ereditarietà: il sistema risale la relazione «è un» e trova la proprietà nel concetto «uccello».

> **[ANIMAZIONE]** *La rete che eredita*
> **Fa capire:** che in una rete semantica le proprietà si ereditano risalendo le relazioni «è un», e che così il sistema sa cose che nessuno ha scritto.
> **Scena iniziale (passo 0):** una rete con i concetti Animale (in alto), Uccello e Pesce (al centro), Canarino e Squalo (in basso), collegati da frecce «è un» verso l'alto; accanto a ogni concetto, collegate da frecce tratteggiate, le sue proprietà: Animale «respira», Uccello «ali», Pesce «squame», Canarino «è giallo», Squalo «morde». Descrizione: «Una rete semantica: concetti collegati da frecce "è un" (verso il concetto più generale) e da proprietà.»
> **Passo 1:** in alto la domanda «Il canarino ha le ali?»; il nodo Canarino si illumina in ambra. Descrizione: «Domanda: il canarino ha le ali? Il sistema guarda prima il nodo Canarino: tra le sue proprietà le ali non ci sono.»
> **Passo 2:** si illuminano la freccia «è un» verso Uccello, il nodo Uccello e la proprietà «ali»; la domanda diventa verde acqua. Descrizione: «Allora risale la freccia "è un": il canarino è un uccello, e l'uccello ha le ali. Sì: il canarino eredita le ali dall'uccello.»
> **Passo 3:** nuova domanda «Il canarino respira?»; si illumina il percorso Canarino → Uccello → Animale → «respira». Descrizione: «Nuova domanda: il canarino respira? Né Canarino né Uccello lo dicono: il sistema risale ancora, fino ad Animale.»
> **Passo 4:** in alto «Ereditarietà». Descrizione: «Nessuno ha scritto "il canarino respira" né "il canarino ha le ali": il sistema lo ricava risalendo le relazioni "è un". È l'ereditarietà.»

Un **frame** (in inglese «cornice», proposto da Marvin Minsky nel 1974) è **una scheda che descrive un tipo di oggetto con delle caselle da riempire**. Il frame «uccello» ha le caselle «numero di ali: 2», «copertura: piume», «vola: sì». I valori scritti nel frame sono **valori predefiniti**: valgono **salvo indicazioni contrarie**. Un canarino li eredita tutti; per un pinguino bisognerà correggere la casella «vola» (ci torneremo nel capitolo 9).

Quando la conoscenza diventa grande e deve essere condivisa da molti programmi, si costruisce un'**ontologia**: **un vocabolario preciso e condiviso di un campo**, con le **classi** (malattia, sintomo, paziente), le **sottoclassi** (l'influenza è una malattia infettiva), le **relazioni** (una malattia *ha come sintomo* la tosse), le **istanze** (il paziente Mario Rossi) e gli **assiomi**, cioè regole sempre vere («un paziente non può essere sano e malato della stessa malattia»).

Le reti semantiche di oggi sono enormi e si chiamano **grafi della conoscenza**. Quando su Google cerchi una persona famosa e a destra compare un riquadro con data di nascita, opere e parenti, quelle informazioni vengono dal **Knowledge Graph** di Google (2012). **Wikidata**, la base di conoscenza libera collegata a Wikipedia, contiene più di cento milioni di voci, ognuna collegata alle altre da relazioni. È l'idea del **Web semantico**: dati sul web scritti in modo che anche le macchine possano «capirli» e ragionarci sopra.

> **[FOTO]** *Una voce di Wikidata* · da guardare nei dettagli
> Didascalia: ogni voce è un nodo del grafo; ogni riga è una relazione («istanza di», «data di nascita», «occupazione») che collega la voce a un valore o a un'altra voce.
> ![Una voce di Wikidata](https://librarycarpentry.github.io/lc-wikidata/fig/l03-Mae_Jemison_03_Official_Wikidata_entry_full.png)
> Fonte: https://librarycarpentry.github.io/lc-wikidata/aio.html

### 8.3 I sistemi esperti: che cosa sono e come sono fatti

Un medico fa domande («da quanto ha la febbre?»), chiede esami, scarta alcune ipotesi e alla fine fa una diagnosi: è un *backward chaining* umano (capitolo 7). Un **sistema esperto** è **un programma che imita il ragionamento di uno specialista umano in un campo ristretto**: la diagnosi di una malattia, la ricerca di un guasto, la configurazione di un prodotto.

Un sistema esperto è fatto di cinque parti:
- la **base di conoscenza**: le regole e i fatti generali del campo, scritti con l'aiuto degli esperti;
- la **memoria di lavoro**: **i fatti del caso specifico** (i sintomi di questo paziente, i guasti di questo scooter), che cambiano ogni volta;
- il **motore inferenziale**: applica le regole ai fatti, in avanti o all'indietro (capitolo 7);
- l'**interfaccia**: fa le domande all'utente e mostra le risposte;
- il **modulo di spiegazione**: **sa dire perché fa una domanda e come è arrivato a una conclusione**, mostrando le regole che ha usato. È una delle grandi forze dei sistemi esperti.

> **[SCHEMA]** *Com'è fatto un sistema esperto*
> Al centro il motore inferenziale (ingranaggio). Sopra, collegata, la base di conoscenza (scaffale con le regole); a destra la memoria di lavoro (lavagna con i fatti del caso); a sinistra l'interfaccia (schermo), collegata all'utente (persona con volto minimo); sotto il modulo di spiegazione (fumetto «perché?» / «come?»). Frecce: utente ↔ interfaccia ↔ motore; motore ↔ base di conoscenza; motore ↔ memoria di lavoro; motore → modulo di spiegazione → interfaccia.

> **[WIDGET]** *Prova tu: il meccanico dello scooter*
> Un piccolo sistema esperto con cinque regole sui guasti di uno scooter (per esempio: «se non si accende e la spia della batteria è accesa, allora la batteria è scarica»; «se si accende ma non parte e c'è benzina, allora controlla la candela»; «se non c'è benzina, allora fai il pieno»). Il widget fa una domanda alla volta («Lo scooter si accende?», «La spia della batteria è accesa?», «C'è benzina?») con i pulsanti sì/no e alla fine dà la diagnosi. Accanto a ogni domanda un pulsante «perché?» mostra la regola che il sistema sta cercando di verificare; accanto alla diagnosi un pulsante «come?» mostra la catena di regole usate.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Un sistema esperto di medicina, bravo come uno specialista, sa consigliarti anche un buon film?»
> **Risposta:** no. Sa ragionare solo nel suo campo ristretto: fuori dalle sue regole non sa niente.

> **[ERRORE TIPICO]**
> ✗ «Un sistema esperto impara dai casi che vede.»
> ✓ Non impara niente: la sua conoscenza l'hanno scritta gli esperti, sotto forma di regole. Se una regola è sbagliata, sbaglia sempre allo stesso modo finché qualcuno non la corregge.

### 8.4 Costruire un sistema esperto

Le regole di un sistema esperto non si inventano: si **ricavano dagli esperti**. Lo fa l'**ingegnere della conoscenza**, che intervista lo specialista, gli fa risolvere dei casi ad alta voce, trasforma il suo modo di ragionare in regole e poi le controlla con lui su casi nuovi. È un lavoro lungo e difficile, perché gli esperti spesso **non sanno spiegare** come prendono le decisioni: «lo so per esperienza».

> **[SCHEMA]** *Dall'esperto alla regola*
> Tre passi da sinistra a destra. 1) Un fumetto del medico: «Di solito, se un paziente ha la febbre alta e il batterio nel sangue ha una certa forma, sospetto uno streptococco». 2) L'ingegnere della conoscenza (persona con un blocco note) evidenzia le condizioni e la conclusione. 3) La regola scritta: «SE febbre alta E batterio di forma rotonda in catenelle ALLORA streptococco (certezza 0,7)».

Spesso l'esperto **non è sicuro**: «di solito», «probabilmente». Per questo le regole possono avere un **fattore di certezza**, un numero che dice **quanto l'esperto si fida della regola**: 1 vuol dire «sicuro», 0 «non so», valori in mezzo «abbastanza sicuro».

È il metodo usato da **MYCIN**, il sistema esperto più famoso, sviluppato all'Università di Stanford nei primi anni '70. MYCIN aiutava i medici a riconoscere i batteri responsabili di **infezioni del sangue** e a scegliere l'**antibiotico**; aveva circa **600 regole**, ciascuna con il suo fattore di certezza, e sapeva spiegare il suo ragionamento. Nelle prove si dimostrò bravo quanto gli specialisti, ma **non fu mai usato negli ospedali**, anche perché non era chiaro chi sarebbe stato responsabile di un suo errore.

> **[FOTO]** *MYCIN* · di riconoscimento
> Didascalia: il libro di Edward Shortliffe (1976) che descriveva MYCIN.
> ![MYCIN](https://m.media-amazon.com/images/I/51vM2FWtduL._UF1000,1000_QL80_.jpg)
> Fonte: https://www.amazon.it/Computer-Based-Medical-Consultations-Artificial-intelligence-eb

> **[ERRORE TIPICO]**
> ✗ «Fattore di certezza 0,7 vuol dire che il 70% dei pazienti ha quella malattia.»
> ✓ È **quanto l'esperto si fida della regola**, non una percentuale misurata sui pazienti.

### 8.5 Giochi e spazio degli stati: Deep Blue

Anche i giochi da tavolo si possono affrontare con l'IA simbolica. Ogni posizione del gioco è uno **stato**, ogni mossa porta da uno stato a un altro: tutte le partite possibili formano un **albero delle mosse**, chiamato **spazio degli stati**. Per scegliere una mossa, il computer **esplora l'albero** (in profondità, come nel capitolo 7) e dà un punteggio alle posizioni che trova con una **funzione di valutazione**: una formula, scritta da esperti del gioco, che dice quanto una posizione è buona.

> **[ANIMAZIONE]** *L'albero del tris*
> **Fa capire:** che un gioco si rappresenta come un albero di stati, che l'albero cresce in fretta e che il computer sceglie la mossa valutando le posizioni.
> **Scena iniziale (passo 0):** una griglia del tris a metà partita, con tre X e due O; sotto, il contatore «posizioni esplorate: 1». Descrizione: «Una partita a tris: tocca alla X. Che mossa scegliere?»
> **Passo 1:** dalla griglia scendono quattro rami, uno per ogni casella libera, ciascuno con la griglia risultante; il contatore sale. Descrizione: «Primo livello: tutte le mosse possibili della X.»
> **Passo 2:** da ogni griglia scendono i rami delle risposte della O; il contatore sale ancora. Descrizione: «Secondo livello: per ogni mossa, tutte le risposte dell'avversario. L'albero si allarga in fretta.»
> **Passo 3:** sotto le foglie compaiono dei punteggi (+1 vittoria, 0 pareggio, −1 sconfitta) e risalgono verso la radice; una delle quattro mosse si illumina in verde acqua. Descrizione: «La funzione di valutazione dà un punteggio a ogni posizione; il computer sceglie la mossa che porta al punteggio migliore, anche se l'avversario risponde nel modo migliore.»
> **Passo 4:** a lato compare un confronto: «tris: al massimo 255.168 partite possibili» / «scacchi: più partite possibili che atomi nell'universo». Descrizione: «Nel tris si può esplorare tutto l'albero; negli scacchi no: bisogna fermarsi a qualche mossa di distanza e fidarsi della funzione di valutazione.»

Così nel **1997 Deep Blue**, un supercomputer dell'IBM, ha battuto il campione del mondo di scacchi **Garry Kasparov**. Deep Blue **valutava circa 200 milioni di posizioni al secondo** e la sua funzione di valutazione era stata messa a punto con l'aiuto di grandi maestri di scacchi.

> **[FOTO]** *Deep Blue* · di riconoscimento
> ![Deep Blue](https://cdn-blog.adafruit.com/uploads/2018/05/deepblue.jpg)
> Fonte: https://blog.adafruit.com/2018/05/11/machine-learning-deep-blue-ibm-time-to-open-sour

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Deep Blue ha battuto Kasparov: "capiva" gli scacchi come lui?»
> **Risposta:** no. Esplorava milioni di posizioni al secondo e le valutava con regole scritte da esperti. Gioca benissimo, ma non sa niente del gioco al di là di quelle regole, e non saprebbe giocare nemmeno a dama.

> **[RICORDA]**
> - L'IA nasce nel 1956 a Dartmouth; l'**ipotesi del sistema fisico di simboli** di Newell e Simon dice che manipolare simboli con regole basta per comportarsi in modo intelligente. I primi successi (*Logic Theorist*, SHRDLU) arrivano in mondi piccoli e ben definiti.
> - La conoscenza si può organizzare in **reti semantiche** (con l'**ereditarietà** lungo le relazioni «è un»), **frame** (schede con valori predefiniti) e **ontologie**; oggi i **grafi della conoscenza** come Wikidata ne sono la versione gigante.
> - Un **sistema esperto** imita uno specialista in un campo ristretto: **base di conoscenza**, **memoria di lavoro**, **motore inferenziale**, **interfaccia** e **modulo di spiegazione**.
> - Le regole le ricava l'**ingegnere della conoscenza** dagli esperti; quando l'esperto non è sicuro si usano i **fattori di certezza**, come in **MYCIN**.
> - Un gioco è uno **spazio degli stati**: il computer esplora l'albero delle mosse e valuta le posizioni con una **funzione di valutazione**. Così Deep Blue ha battuto Kasparov nel 1997.

---

## 9. Pregi e limiti

*Che cosa sanno fare bene le regole, dove si fermano, e quali sono i limiti della logica stessa.*

### 9.1 Due modi di fare IA: simbolica e connessionista

Nel capitolo 1 abbiamo detto che l'IA simbolica non è l'unico modo di fare intelligenza artificiale. L'altro grande approccio è l'**IA connessionista**, quella delle **reti neurali**: invece di scrivere le regole, **si mostra alla macchina un'enorme quantità di esempi e la si lascia «imparare» da sola** a riconoscere le somiglianze. È l'IA dei riconoscitori di immagini, dei traduttori automatici e dei chatbot.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima dell'animazione)
> «Arriva un'email "H4i v1nt0 un iPh0ne!!": la ferma prima un filtro a regole o un filtro che ha imparato da milioni di email?»
> **Risposta:** probabilmente quello che ha imparato. La regola cerca «hai vinto» scritto giusto e si fa ingannare dai numeri al posto delle lettere; il filtro che ha imparato ha visto migliaia di email truffaldine scritte in tutti i modi.

> **[ANIMAZIONE]** *Due filtri antispam*
> **Fa capire:** la differenza tra una regola scritta da una persona e un modello che ha imparato dagli esempi: la regola è fragile ma sa spiegarsi, il modello si adatta ma non sa dire perché.
> **Scena iniziale (passo 0):** al centro una busta in arrivo. A sinistra il «filtro a regole»: un riquadro con due regole scritte («SE il testo contiene "hai vinto" ALLORA spam», «SE il mittente è sconosciuto E c'è un link ALLORA spam»). A destra il «filtro che ha imparato»: un riquadro con una piccola rete di nodi collegati e, dietro, una pila di mille email con l'etichetta «esempi: spam / non spam». Descrizione: «Due filtri antispam: uno con regole scritte da una persona, uno che ha imparato da mille email.»
> **Passo 1:** arriva l'email «Hai vinto un iPhone! Clicca qui»; entrambi i filtri si illuminano di rosso: «spam». Descrizione: «Un'email truffaldina classica: tutti e due la fermano.»
> **Passo 2:** arriva l'email «H4i v1nt0 un iPh0ne!!»; il filtro a regole resta grigio («non spam»: la regola non la riconosce), il filtro che ha imparato si illumina di rosso. Descrizione: «Con i numeri al posto delle lettere la regola non scatta; il modello, che ha visto tanti esempi simili, la riconosce lo stesso.»
> **Passo 3:** su entrambi compare il pulsante «perché?». Il filtro a regole mostra la regola che è scattata nel passo 1; il filtro che ha imparato mostra solo dei numeri sui collegamenti della rete e la scritta «0,97 spam». Descrizione: «Ma perché hanno deciso così? Il filtro a regole sa indicare la regola; il modello sa dire solo quanto è sicuro, non perché.»

| | IA simbolica | IA connessionista |
|---|---|---|
| Da dove viene la conoscenza | la scrivono le persone, come fatti e regole | la macchina la ricava da moltissimi esempi |
| Quanti dati servono | pochi: basta la conoscenza dell'esperto | moltissimi esempi |
| Sa spiegare le sue decisioni? | sì: mostra le regole usate | di solito no: è una «scatola nera» |
| Casi nuovi, imprevisti | si blocca o sbaglia | spesso se la cava |
| Può sbagliare? | solo se le regole o i fatti sono sbagliati | sì, anche in modi difficili da prevedere |
| Esempi | sistemi esperti, DLV, antifrode, configuratori | riconoscimento di immagini, traduttori, chatbot |

### 9.2 I pregi delle regole

Un sistema a regole è una **scatola trasparente**: **si può seguire passo per passo il ragionamento che ha portato a una decisione** e controllare quale regola è scattata. Una rete neurale invece è spesso una **scatola nera**: dà una risposta, ma non sa dire perché.

> **[SCHEMA]** *Scatola trasparente e scatola nera*
> La stessa domanda («concedo il prestito a Mario?») entra in due scatole. A sinistra una scatola di vetro: dentro si vedono tre regole, e quella che scatta («SE reddito sotto la soglia E altri debiti ALLORA prestito negato») è evidenziata; esce «no, per questa regola». A destra una scatola nera, chiusa: esce solo «no (91%)».

Gli altri pregi:
- **precisione**: se le regole e i fatti sono giusti, le conclusioni sono **sicuramente giuste**, perché sono dedotte con la logica;
- **pochi dati**: non servono milioni di esempi, basta la conoscenza degli esperti;
- **certificazione**: un sistema a regole si può controllare regola per regola, ed è per questo che si usa dove una decisione va **giustificata e certificata**: nell'aviazione, nelle ferrovie, nel diritto, nelle banche.

È anche ciò che chiede la legge. La **legge europea sull'intelligenza artificiale** (*AI Act*, 2024) stabilisce che i sistemi di IA **ad alto rischio** (per esempio quelli che decidono su un prestito, un'assunzione o l'ammissione a una scuola) siano **trasparenti** e **sotto il controllo di una persona**: chi subisce una decisione deve poter capire come è stata presa.

> **[ERRORE TIPICO]**
> ✗ «Le reti neurali sono meglio delle regole in tutto.»
> ✓ Dove una decisione va **spiegata, controllata e certificata**, si preferiscono ancora le regole. I due approcci sono bravi in cose diverse.

### 9.3 I limiti delle regole

I sistemi a regole hanno anche limiti seri:
- **rigidità**: **funzionano solo nei casi previsti da chi ha scritto le regole**; davanti a una situazione nuova si bloccano o sbagliano, come il filtro antispam con «H4i v1nt0»;
- il **collo di bottiglia della conoscenza**: **scrivere le regole è lento e costoso**, perché bisogna ricavarle dagli esperti una per una (capitolo 8), e gli esperti spesso non sanno spiegare come ragionano;
- **niente apprendimento**: **un sistema a regole non migliora con l'esperienza**; se il mondo cambia, qualcuno deve riscrivere le regole;
- l'**esplosione combinatoria**: con molte regole e molti fatti, le combinazioni da provare diventano troppe;
- il **buon senso**: le cose «ovvie» che ogni persona sa (l'acqua bagna, un bicchiere che cade si rompe) sono tantissime, e nessuno riesce a scriverle tutte.

> **[SCHEMA]** *Il collo di bottiglia della conoscenza*
> Un imbuto. Sopra, una nuvola grande con la conoscenza di un medico esperto (icone di libri, casi, esperienza, intuizioni). Nel collo stretto, l'ingegnere della conoscenza al lavoro. Sotto, poche gocce: «3 regole al giorno».

C'è poi una sorpresa, che prende il nome dal ricercatore di robotica Hans Moravec (1988): il **paradosso di Moravec**. **Ciò che per noi è difficile, per un computer è facile, e ciò che per noi è facile, per un computer è difficilissimo.**

| Per noi difficile, per il computer facile | Per noi facile, per il computer difficile |
|---|---|
| giocare a scacchi da campione | riconoscere la faccia di un amico |
| fare calcoli enormi | camminare su un terreno accidentato |
| dimostrare un teorema di logica | piegare una maglietta |
| ricordare milioni di dati | capire una battuta |

Il motivo è che le abilità «facili» le abbiamo imparate in milioni di anni di evoluzione e le usiamo senza sapere come: per questo nessuno le sa scrivere in regole.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Che cosa è più difficile per un computer: battere il campione del mondo di scacchi o piegare una maglietta?»
> **Risposta:** piegare una maglietta. Il campione di scacchi è stato battuto nel 1997; i robot che piegano bene i vestiti sono ancora una sfida.

Questi limiti hanno avuto conseguenze anche nella storia dell'IA. Due volte, a metà degli anni '70 e alla fine degli anni '80, le promesse non mantenute fecero crollare la fiducia e i finanziamenti: sono gli **inverni dell'IA**. Il secondo arrivò dopo la grande stagione dei sistemi esperti e il fallimento del progetto giapponese della **Quinta generazione** (1982–1992), che voleva costruire computer intelligenti basati su Prolog e sui sistemi a regole. Nel 1984 lo scienziato Douglas Lenat iniziò invece **Cyc**, il tentativo di scrivere a mano **tutto il buon senso** in una gigantesca base di conoscenza: dopo decenni di lavoro e milioni di regole, il traguardo è ancora lontano.

### 9.4 Il pinguino: mondo chiuso e ragionamento non monotono

Nel capitolo 6 abbiamo visto che le eccezioni di «tutti gli uccelli volano» non finiscono mai. Il problema è più profondo: dipende da come funziona la logica classica.

Nella logica classica **aggiungere fatti nuovi non toglie mai una conclusione già ricavata**: ciò che segue da certe premesse segue anche da premesse in più. Si dice che la logica classica è **monotona**. Il buon senso invece funziona in un altro modo: **ragiona per *default***, cioè per regole che valgono «di solito, salvo eccezioni», e **ritira le conclusioni** quando scopre un'eccezione. Questo ragionamento si dice **non monotono**.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa (prima del passo 3 dell'animazione)
> «La base di conoscenza ha concluso "Tweety vola". Poi scopre che Tweety è un pinguino: che cosa deve fare?»
> **Risposta:** ritirare la conclusione. Nella logica classica non si può (si arriva a una contraddizione); nel ragionamento per *default* sì.

> **[ANIMAZIONE]** *Tweety vola?*
> **Fa capire:** che nella logica classica un fatto nuovo non toglie le conclusioni vecchie e porta a una contraddizione, mentre una regola di *default* permette di ritirarle.
> **Scena iniziale (passo 0):** a sinistra il riquadro «Base di conoscenza» con «Uccello(tweety)» e «Regola: Uccello(x) → Vola(x)»; a destra il riquadro vuoto «Conclusioni» e, sbiadito, un uccello disegnato. Descrizione: «La base di conoscenza sa che Tweety è un uccello e ha una regola: gli uccelli volano.»
> **Passo 1:** nelle conclusioni compare «Vola(tweety)» (verde acqua). Descrizione: «Con il *modus ponens* la conclusione è immediata: Tweety vola.»
> **Passo 2:** nella base di conoscenza compaiono, in ambra, «Pinguino(tweety)» e «Pinguino(x) → ¬Vola(x)»; l'uccello disegnato si rivela un pinguino. Descrizione: «Arriva un fatto nuovo: Tweety è un pinguino, e i pinguini non volano.»
> **Passo 3:** nelle conclusioni, in rosso, «Vola(tweety)», «¬Vola(tweety)» e «contraddizione!». Descrizione: «Nella logica classica le conclusioni vecchie restano: ora la base dice che Tweety vola e che non vola. È una contraddizione.»
> **Passo 4:** la regola diventa, in ambra e su due righe, «Default: Uccello(x) e non risulta Pinguino(x) → Vola(x)»; nelle conclusioni «Vola(tweety)» si sbiadisce e viene barrato («ritirata») e compare «Tweety non vola». Descrizione: «Con una regola di *default*, "un uccello vola, a meno che non risulti un pinguino", la conclusione vecchia viene ritirata. Il ragionamento non è monotono.»

Per scrivere «a meno che non risulti», molti sistemi a regole usano l'**ipotesi del mondo chiuso**: **tutto ciò che non risulta dalla base di conoscenza si considera falso**. È ciò che facciamo leggendo l'orario dei treni: se un treno per Milano alle 10:15 non c'è, diamo per scontato che non esista, anche se l'orario non lo dice esplicitamente. Con questa ipotesi la regola del pinguino diventa semplice, e in DLV (capitolo 10) si scrive così:

`vola(X) :- uccello(X), not pinguino(X).`

«X vola se X è un uccello e non risulta che X sia un pinguino.»

> **[ERRORE TIPICO]**
> ✗ «Se la base di conoscenza non sa che Marco è in casa, allora di sicuro Marco non è in casa.»
> ✓ È un'**ipotesi**, quella del mondo chiuso: comoda, ma sbaglia se la base di conoscenza è incompleta, per esempio se il sensore non ha visto entrare Marco.

### 9.5 I limiti della logica classica

Anche la logica classica, non solo i sistemi a regole, ha i suoi limiti.

**Le parole vaghe.** La logica classica ha solo due valori, vero e falso (capitolo 2). Ma molte parole che usiamo ogni giorno sono **vaghe**: «caldo», «alto», «vicino». A che temperatura l'acqua diventa «calda»? Con la logica classica bisogna scegliere una soglia, per esempio 40 °C, e a 39,9 °C l'acqua è «non calda». Nel 1965 l'ingegnere Lotfi Zadeh propose la **logica *fuzzy*** («sfumata»), in cui **una proposizione può essere vera in parte, con un grado di verità tra 0 e 1**: l'acqua a 39 °C è calda «al 70%». La logica *fuzzy* si usa nei controlli automatici: lavatrici, condizionatori, e dal 1987 la metropolitana di Sendai, in Giappone, che frena e accelera dolcemente grazie a un controllo *fuzzy*.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «"L'acqua a 39 gradi è calda": vera o falsa?»
> **Risposta:** non c'è una risposta netta, perché «calda» è una parola vaga. La logica classica obbliga a scegliere una soglia; la logica *fuzzy* dà un grado di verità.

> **[WIDGET]** *Prova tu: l'acqua è calda?*
> Un termometro con un cursore della temperatura da 0 a 80 °C. Sotto, due indicatori per «l'acqua è calda». «Logica classica»: una lampadina spenta (falso) fino a 39 °C, che a 40 °C si accende di colpo (vero). «Logica *fuzzy*»: una barra che si riempie gradualmente, con il grado di verità scritto accanto (0 sotto i 25 °C, che sale fino a 1 sopra i 55 °C). Accanto, un piccolo grafico con le due curve: un gradino e una rampa.

**Il «probabilmente».** La logica classica non sa esprimere l'incertezza: una proposizione è vera o falsa, non «probabile». Per questo i sistemi esperti hanno inventato i **fattori di certezza** (capitolo 8), e oggi si usano modelli basati sul calcolo delle probabilità.

**I limiti dimostrati.** Nel 1931 il logico austriaco **Kurt Gödel** dimostrò il **teorema di incompletezza**: **in ogni sistema logico abbastanza potente da contenere l'aritmetica esistono affermazioni vere che non si possono dimostrare** dentro quel sistema. Nel 1936 **Alonzo Church** e **Alan Turing** dimostrarono che **non può esistere un programma che, date delle premesse e una conclusione, dica sempre se la conclusione segue**: il problema è **indecidibile**. Per la logica dei predicati vale una via di mezzo, la **semidecidibilità**: se una conclusione segue dalle premesse, prima o poi un programma lo dimostra; se non segue, il programma potrebbe cercare per sempre, senza mai poter dire «no».

> **[FOTO]** *Kurt Gödel* · di riconoscimento
> ![Kurt Gödel](https://upload.wikimedia.org/wikipedia/commons/d/d7/Kurt_G%C3%B6del.png)
> Fonte: commons:Kurt Gödel.png

> **[FOTO]** *Alan Turing* · di riconoscimento
> ![Alan Turing](https://upload.wikimedia.org/wikipedia/commons/f/f8/Alan_Turing_%281951%29.jpg)
> Fonte: commons:Alan Turing (1951).jpg

> **[ERRORE TIPICO]**
> ✗ «Gödel ha dimostrato che la matematica è sbagliata.»
> ✓ Ha dimostrato che in ogni sistema abbastanza potente **esistono affermazioni vere che non si possono dimostrare**. La matematica non è sbagliata: è incompleta.

> **[RICORDA]**
> - L'**IA simbolica** usa regole scritte dalle persone, l'**IA connessionista** (reti neurali) impara da moltissimi esempi: la prima sa spiegarsi ma è rigida, la seconda si adatta ma è una scatola nera.
> - Le regole sono **trasparenti**, **precise**, richiedono **pochi dati** e si possono **certificare**: per questo si usano dove le decisioni vanno giustificate, come chiede anche l'AI Act.
> - Le regole sono **rigide**, costose da scrivere (**collo di bottiglia**), **non imparano** e non riescono a catturare il **buon senso**; per il **paradosso di Moravec**, ciò che per noi è facile è difficile per un computer.
> - La logica classica è **monotona**; il buon senso ragiona per **default** e ritira le conclusioni. Con l'**ipotesi del mondo chiuso**, ciò che non risulta si considera falso: è il `not` di DLV.
> - La logica classica non gestisce le **parole vaghe** (logica ***fuzzy***) né il «probabilmente», e ha limiti dimostrati: l'**incompletezza** di Gödel e l'**indecidibilità** di Church e Turing.

---

## 10. DLV: costruire una base di conoscenza

*Scrivere fatti e regole in un vero linguaggio e lasciare che il computer ricavi tutto ciò che ne segue. Un unico esempio accompagna tutto il capitolo: lo zoo.*

> **Nota per la fase 2:** tutto il codice di questo capitolo è stato provato con il DLV classico (build del 17 dicembre 2012), che si scarica dal sito di DLVSystem; le risposte riportate sono quelle stampate da DLV.

### 10.1 Programmare descrivendo: DLV

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa
> «In Flowgorithm dici al computer che cosa fare, passo per passo. In DLV non scrivi nessun passo: come fa a trovare la risposta?»
> **Risposta:** dentro DLV c'è un motore inferenziale (capitolo 7) che applica le regole ai fatti finché non ricava più niente di nuovo.

In Flowgorithm si scrive **come** risolvere un problema: istruzioni in ordine, cicli, condizioni. È la **programmazione imperativa**. In DLV si scrive invece **che cosa è vero**: fatti e regole, in qualunque ordine. È la **programmazione dichiarativa**: **il programma descrive il mondo, e il computer ricava da solo tutto ciò che ne segue**.

| | Flowgorithm (imperativo) | DLV (dichiarativo) |
|---|---|---|
| Che cosa si scrive | i passi da eseguire | fatti e regole |
| L'ordine conta? | sì | no |
| Problema: «quali animali sono mammiferi?» | un ciclo su tutti gli animali, con un «Se ha il pelo…» e una variabile da stampare | `mammifero(X) :- ha_pelo(X).` |
| Chi trova la risposta | il programma, seguendo i passi | il motore di DLV |

DLV appartiene a una famiglia di linguaggi logici: **Prolog** (1972), il primo; **Datalog**, usato nelle basi di dati; e l'***Answer Set Programming***, nato negli anni '90, di cui DLV è uno dei sistemi più importanti. DLV è stato sviluppato a partire dalla fine degli anni '90 all'**Università della Calabria**, dal gruppo di Nicola Leone, insieme al Politecnico di Vienna.

Un programma DLV è un semplice **file di testo** con estensione `.dl` (per esempio `zoo.dl`), scritto con qualunque editor, anche il Blocco note. Si esegue dal terminale con il comando `dlv zoo.dl`, e DLV risponde con un ***answer set***: **l'insieme di tutto ciò che è vero**, cioè i fatti scritti più quelli ricavati dalle regole, tra parentesi graffe. Le righe che iniziano con `%` sono **commenti**: DLV le ignora, servono a chi legge.

> **[SCHEMA]** *Come si usa DLV*
> Da sinistra a destra: un foglio «zoo.dl» con alcune righe di fatti e regole; una freccia verso una finestra del terminale con il comando `dlv zoo.dl`; una freccia verso un riquadro con l'*answer set* tra parentesi graffe, `{ha_pelo(leone), …, mammifero(leone), …}`, con i fatti scritti in grigio e quelli ricavati evidenziati in verde acqua.

### 10.2 I fatti

Un **fatto** si scrive come una formula atomica (capitolo 5) seguita da un **punto**:

```
% caratteristiche degli animali (predicati con un argomento)
ha_pelo(leone).    ha_pelo(gazzella).   ha_pelo(topo).    ha_pelo(orso).
ha_piume(aquila).  ha_piume(canarino).  ha_piume(pinguino).
ha_squame(serpente).
allatta(delfino).
depone_uova(aquila).  depone_uova(canarino).  depone_uova(pinguino).  depone_uova(serpente).
pianta(erba).  pianta(grano).  pianta(bacche).

% relazioni (predicati con più argomenti)
mangia(leone, gazzella).   mangia(gazzella, erba).   mangia(aquila, serpente).
mangia(serpente, topo).    mangia(topo, grano).      mangia(canarino, grano).
peso(leone, 190).   peso(gazzella, 25).   peso(aquila, 5).   peso(topo, 1).
vive_in(leone, savana).   vive_in(gazzella, savana).   vive_in(aquila, montagna).
```

Le regole di scrittura sono poche e rigide:
- **predicati e costanti si scrivono in minuscolo** (`ha_pelo`, `leone`); le parole composte si uniscono con il trattino basso (`depone_uova`);
- **ogni fatto termina con un punto**;
- un predicato può avere **un argomento** (una proprietà: `ha_pelo(leone)`) o **più argomenti** (una relazione: `mangia(leone, gazzella)`), e **l'ordine degli argomenti conta** (capitolo 5): `mangia(leone, gazzella)` non è `mangia(gazzella, leone)`;
- gli argomenti possono essere anche **numeri interi**, come in `peso(leone, 190)`. Nel DLV classico i numeri devono essere **positivi o zero**: un numero negativo non è accettato, perché il segno `-` serve alla negazione forte (10.5). Per una temperatura sotto zero conviene usare un'altra scala, per esempio i gradi Kelvin.

Senza regole, DLV risponde con un *answer set* che contiene soltanto i fatti scritti.

> **[ERRORE TIPICO]**
> ✗ «Scrivo `Mammifero(Leone).`»
> ✓ In DLV predicati e costanti vanno **in minuscolo**: con la maiuscola, `Leone` sarebbe una **variabile** (10.3). E ogni fatto e ogni regola finiscono con il **punto**: senza, DLV segnala un errore di sintassi.

### 10.3 Le regole

Una **regola** si scrive **testa `:-` corpo, punto**: a sinistra la conclusione, a destra le condizioni. Il simbolo `:-` si legge «**se**». È la forma «testa se corpo» delle clausole di Horn (capitolo 7).

```
mammifero(X) :- ha_pelo(X).
```

«X è un mammifero **se** X ha il pelo.» **Le variabili si scrivono con la maiuscola** (`X`, `Y`, `P`) e **valgono per tutti** (capitolo 6): DLV applica la regola a ogni animale che ha il pelo.

Con le regole si costruiscono tutti i connettivi del capitolo 2:
- **AND nelle condizioni**: le condizioni del corpo si separano con la **virgola**, che vale «e».
  `rettile(X) :- ha_squame(X), depone_uova(X).` «X è un rettile se ha le squame **e** depone le uova.»
- **OR nelle condizioni**: si scrivono **più regole con la stessa testa**. Basta che una delle due scatti.
  `mammifero(X) :- ha_pelo(X).` e `mammifero(X) :- allatta(X).` «X è un mammifero se ha il pelo **oppure** se allatta» (così anche il delfino, che non ha il pelo, risulta un mammifero).
- **AND nella conclusione**: in DLV la testa di una regola **non può contenere un «e»**. Per dire che dalle stesse condizioni seguono due conclusioni si scrivono **due regole con lo stesso corpo**:
  `grande(X) :- carnivoro(X), peso(X, P), P > 100.`
  `pericoloso(X) :- carnivoro(X), peso(X, P), P > 100.`
  «Un carnivoro che pesa più di 100 kg è grande **e** pericoloso.»

Le regole possono usare le conclusioni di altre regole, e così si costruisce la conoscenza a strati:

```
animale(X) :- mammifero(X).
animale(X) :- uccello(X).
animale(X) :- rettile(X).
uccello(X) :- ha_piume(X).
carnivoro(X) :- mangia(X, Y), animale(Y).
erbivoro(X) :- mangia(X, Y), pianta(Y).
```

**I confronti** si scrivono nel corpo con `<`, `>`, `<=`, `>=`, `=` e `!=` («diverso da»):
- `piccolo(X) :- peso(X, P), P < 10.` «X è piccolo se pesa meno di 10 kg.»
- `competono(X, Y) :- mangia(X, Z), mangia(Y, Z), X != Y.` «Due animali competono se mangiano la stessa cosa e **sono diversi**.» Senza `X != Y` ogni animale risulterebbe in competizione con sé stesso.

> **[DOMANDA ALLA CLASSE]** · scopo: errore
> «Se scrivo due regole con la stessa testa, DLV le usa tutte e due o solo la prima, come in un "Se… altrimenti"?»
> **Risposta:** tutte e due: in DLV l'ordine delle regole non conta, e basta che una delle due scatti. Insieme fanno un OR.

> **[ANIMAZIONE]** *DLV al lavoro*
> **Fa capire:** che DLV applica tutte le regole ai fatti, giro dopo giro, aggiungendo all'*answer set* ogni fatto ricavato, finché non cambia più niente.
> **Scena iniziale (passo 0):** a sinistra un piccolo programma: i fatti `ha_pelo(leone).`, `allatta(delfino).`, `ha_piume(aquila).`, `mangia(leone, gazzella).`, `ha_pelo(gazzella).` e le regole `mammifero(X) :- ha_pelo(X).`, `mammifero(X) :- allatta(X).`, `uccello(X) :- ha_piume(X).`, `animale(X) :- mammifero(X).`, `carnivoro(X) :- mangia(X, Y), animale(Y).`. A destra l'*answer set* con i soli fatti, in grigio. In alto «giro 1». Descrizione: «All'inizio l'*answer set* contiene solo i fatti.»
> **Passo 1:** si evidenziano le due regole di `mammifero`; nell'*answer set* compaiono in verde acqua `mammifero(leone)`, `mammifero(gazzella)`, `mammifero(delfino)`, e con la regola di `uccello` anche `uccello(aquila)`. Descrizione: «Primo giro: scattano le regole che usano solo fatti. Il delfino è un mammifero grazie alla seconda regola.»
> **Passo 2:** «giro 2»; si evidenzia la regola di `animale`: compaiono `animale(leone)`, `animale(gazzella)`, `animale(delfino)`. Descrizione: «Secondo giro: ora ci sono i mammiferi, e scatta la regola degli animali.»
> **Passo 3:** «giro 3»; si evidenzia la regola di `carnivoro`: compare `carnivoro(leone)`. Descrizione: «Terzo giro: il leone mangia la gazzella, che ora risulta un animale: il leone è carnivoro.»
> **Passo 4:** «giro 4»; nessuna regola aggiunge niente; l'*answer set* si incornicia. Descrizione: «Un giro senza novità: DLV si ferma e stampa l'*answer set*.»

Ogni regola deve essere **sicura**: **ogni variabile deve comparire almeno una volta in una condizione «normale» del corpo**, senza `not` davanti e fuori dai confronti. È quella condizione che dice a DLV **tra quali oggetti cercare** i valori della variabile. Se manca, DLV non sa a chi applicare la regola: prenderebbe in considerazione qualunque costante del programma, anche il numero 190 o la parola «savana». Per questo **rifiuta la regola** con l'errore «Rule is not safe».

> **[ERRORE TIPICO]**
> ✗ «`selvatico(X) :- not domestico(X).` va bene: è selvatico ciò che non è domestico.»
> ✓ È una **regola non sicura**: X compare solo dopo `not`, e DLV non sa tra quali oggetti cercarlo (dovrebbe dire che anche la savana e il numero 190 sono selvatici?). Bisogna aggiungere una condizione normale che dica di chi si parla: `selvatico(X) :- animale(X), not domestico(X).`

### 10.4 Regole riflessive, simmetriche e transitive

Le proprietà delle relazioni del capitolo 5 si scrivono come regole.

- **Riflessiva**: ogni oggetto è in relazione con sé stesso.
  `stesso_habitat(X, X) :- vive_in(X, H).` «Ogni animale vive nello stesso habitat di sé stesso.»
- **Simmetrica**: se la relazione vale in un verso, vale anche nell'altro.
  `stesso_habitat(X, Y) :- stesso_habitat(Y, X).`
- **Transitiva**: se vale tra X e Y e tra Y e Z, vale anche tra X e Z.
  `sopra(X, Z) :- sopra(X, Y), sopra(Y, Z).` «Se X sta sopra Y nella catena alimentare e Y sta sopra Z, allora X sta sopra Z.»

La regola transitiva è **ricorsiva**: usa nel corpo lo stesso predicato che ha nella testa. Insieme alla regola di partenza `sopra(X, Y) :- mangia(X, Y).` basta a ricavare **tutta la catena alimentare** da pochi fatti «mangia».

> **[ANIMAZIONE]** *La catena alimentare*
> **Fa capire:** come una regola ricorsiva ricava, giro dopo giro, tutte le relazioni che seguono dai fatti, e che DLV si ferma quando non c'è più niente di nuovo.
> **Scena iniziale (passo 0):** a sinistra il programma: `mangia(aquila, serpente).`, `mangia(serpente, topo).`, `mangia(topo, grano).`, la regola 1 `sopra(X, Y) :- mangia(X, Y).` e la regola 2 (ricorsiva) `sopra(X, Z) :- sopra(X, Y), sopra(Y, Z).`. A destra quattro riquadri in colonna, aquila, serpente, topo, grano, ancora senza frecce; in basso il contatore «*answer set*: solo i fatti». Descrizione: «Tre fatti su chi mangia chi e due regole. La regola 2 usa sopra anche nel corpo: è ricorsiva.»
> **Passo 1:** si evidenzia la regola 1; compaiono tre frecce ambra tra elementi vicini (aquila → serpente, serpente → topo, topo → grano); contatore «giro 1: +3 fatti». Descrizione: «Giro 1, regola 1: ogni mangia diventa un sopra. Tre fatti nuovi.»
> **Passo 2:** si evidenzia la regola 2; le frecce vecchie diventano grigie, compaiono due frecce ambra più lunghe (aquila → topo, serpente → grano); «giro 2: +2 fatti». Descrizione: «Giro 2, regola 2: aquila sta sopra serpente e serpente sta sopra topo, quindi aquila sta sopra topo. Allo stesso modo serpente sta sopra grano.»
> **Passo 3:** compare la freccia più lunga (aquila → grano); «giro 3: +1 fatto». Descrizione: «Giro 3, di nuovo la regola 2: aquila sta sopra topo e topo sta sopra grano, quindi aquila sta sopra grano.»
> **Passo 4:** tutte le frecce grigie, il contatore diventa verde acqua: «giro 4: nessun fatto nuovo, fine». Descrizione: «Giro 4: nessuna regola aggiunge fatti nuovi. DLV si ferma: la ricorsione non è un ciclo infinito.»

> **[ERRORE TIPICO]**
> ✗ «Una regola che usa sé stessa va in loop, come un ciclo infinito.»
> ✓ DLV **si ferma quando un giro non aggiunge fatti nuovi** (capitolo 7): i fatti possibili sono in numero finito, quindi prima o poi non ce ne sono più da aggiungere.

### 10.5 Negazione debole e negazione forte

In DLV ci sono **due modi di dire «non»**, e non vanno confusi.

La **negazione debole** si scrive **`not`** e vuol dire «**non risulta**». È l'ipotesi del mondo chiuso del capitolo 9: ciò che non si può ricavare si considera falso.

```
domestico(canarino).
selvatico(X) :- animale(X), not domestico(X).
```

«X è selvatico se è un animale e **non risulta** che sia domestico.» Il leone è selvatico non perché qualcuno l'abbia scritto, ma perché da nessuna parte risulta domestico. `not` si può usare **solo nel corpo** delle regole.

La **negazione forte** si scrive con il **segno `-` attaccato al predicato** e vuol dire «**è falso che**». Si usa per scrivere esplicitamente che una cosa **non** vale:

```
-vola(pinguino).
```

«È falso che il pinguino voli.» A differenza di `not`, la negazione forte si può usare anche nei fatti e nelle teste delle regole.

La differenza si vede con una domanda su cui il programma non dice niente. Nello zoo non c'è nessuna informazione sul volo del leone: `vola(leone)` non risulta, ma non risulta nemmeno `-vola(leone)`. Per `not` il leone «non vola», perché non risulta; con la negazione forte, invece, **non sappiamo**.

| | `not vola(X)` (negazione debole) | `-vola(X)` (negazione forte) |
|---|---|---|
| Significa | «non risulta che X voli» | «è falso che X voli» |
| Dove si usa | solo nel corpo delle regole | nei fatti, nelle teste e nei corpi |
| Per il leone (nessuna informazione) | vero: non risulta | falso: nessuno ha detto che non vola |

Insieme permettono di scrivere la regola del pinguino del capitolo 9:

```
vola(X) :- uccello(X), not -vola(X).
```

«Un uccello vola, **a meno che non risulti che non vola**.» L'aquila e il canarino volano; il pinguino no, perché `-vola(pinguino)` è un fatto. Se domani si scopre un altro uccello che non vola, basta aggiungere un fatto, senza toccare la regola.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa
> «Il programma non dice niente sul fatto che il leone voli. Chiedendo a DLV "vola il leone?", che cosa risponde? E chiedendo "è falso che il leone voli?"»
> **Risposta:** risponde «no» a tutte e due: `vola(leone)` non risulta, ma non risulta nemmeno `-vola(leone)`. Il programma semplicemente non lo sa.

> **[ERRORE TIPICO]**
> ✗ «`not vola(leone)` e `-vola(leone)` sono la stessa cosa.»
> ✓ `not` vuol dire «**non risulta**», `-` vuol dire «**è falso che**». Se il programma non dice niente sul leone, `not vola(leone)` è vero, mentre `-vola(leone)` non risulta.

### 10.6 La disgiunzione: più *answer set*

Finora ogni programma aveva un solo *answer set*. Con la **disgiunzione** nella testa le cose cambiano. Si scrive con la lettera **`v`** («vel», il «o» del capitolo 2):

```
diurno(X) v notturno(X) :- uccello(X).
```

«Ogni uccello è diurno **oppure** notturno.» DLV non sa quale delle due sia vera, e allora **costruisce un *answer set* per ogni scelta possibile**: uno in cui l'aquila è diurna, uno in cui è notturna, e così via per ogni uccello. Con tre uccelli e due scelte ciascuno, gli *answer set* sono 2 × 2 × 2 = **8**. Ogni *answer set* è **un mondo possibile**, coerente con tutto ciò che il programma dice.

DLV sceglie sempre **il minimo indispensabile**: in un *answer set* un uccello è diurno **o** notturno, mai tutte e due le cose, perché nessuna regola lo obbliga.

> **[SCHEMA]** *Un mondo per ogni scelta*
> In alto la regola `diurno(X) v notturno(X) :- uccello(X).` e i tre uccelli (aquila, canarino, pinguino). Sotto, otto riquadri piccoli in due file, numerati da 1 a 8: in ognuno i tre uccelli con un sole (diurno) o una luna (notturno), in tutte le combinazioni possibili.

### 10.7 I vincoli

Un **vincolo** è **una regola senza testa**: inizia direttamente con `:-` e dice **che cosa non deve mai succedere**. Si legge «non può essere che…».

```
canta_di_giorno(canarino).
:- notturno(X), canta_di_giorno(X).
```

«Non può essere che un animale che canta di giorno sia notturno.» DLV **scarta tutti gli *answer set* che violano un vincolo**. È il modo per eliminare i mondi possibili sbagliati nati da una disgiunzione: con questo vincolo, degli 8 *answer set* del 10.6 restano solo i 4 in cui il canarino è diurno.

I vincoli servono anche a **controllare che la base di conoscenza sia coerente**:
- `:- peso(X, P), P <= 0.` «Nessun animale può pesare zero o meno.»
- `:- pianta(X), animale(X).` «Niente può essere insieme una pianta e un animale.»

Se un vincolo è violato in **tutti** i casi, DLV **non trova nessun *answer set* e non stampa niente**: la base di conoscenza è **incoerente**. Di solito vuol dire che c'è un errore, nei fatti o nel vincolo stesso.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa
> «Il programma ha il vincolo `:- carnivoro(X), erbivoro(X).` Aggiungo l'orso, che mangia sia pesce sia bacche, e DLV non stampa più niente. Perché?»
> **Risposta:** l'orso risulta sia carnivoro sia erbivoro e viola il vincolo: non esiste più nessun *answer set*. Ma l'errore è nel vincolo, non nell'orso: esistono gli animali onnivori.

> **[SCHEMA]** *Il vincolo che scarta*
> Gli 8 riquadri dello schema precedente. Il vincolo `:- notturno(X), canta_di_giorno(X).` passa sopra come un filtro: i 4 riquadri in cui il canarino ha la luna si sbarrano in rosso, i 4 in cui ha il sole restano in verde acqua.

### 10.8 Le query: chiedere a DLV

Un *answer set* può essere molto lungo. Per avere una risposta precisa si fa una **domanda**, la **query**, che si scrive **in fondo al programma** e termina con il **punto interrogativo**:
- una **query chiusa**, **senza variabili**, chiede se una cosa è vera: `carnivoro(leone)?`
- una **query aperta**, **con una variabile**, chiede **per quali oggetti** è vera: `carnivoro(X)?`

Quando gli *answer set* sono più di uno (10.6), una cosa può essere vera in alcuni mondi possibili e falsa in altri. Per questo, quando si fa una query, si dice a DLV **come ragionare**, con un'opzione nel comando:
- il ragionamento ***brave*** («coraggioso»), con `dlv -brave zoo.dl`: la risposta è sì se la query è vera **in almeno un** *answer set*. «È possibile?»
- il ragionamento ***cautious*** («prudente»), con `dlv -cautious zoo.dl`: la risposta è sì solo se la query è vera **in tutti** gli *answer set*. «È sicuro?»

Le risposte di DLV sono molto chiare. Per una query chiusa scrive se è vera o falsa nel modo scelto; per una query aperta elenca gli oggetti per cui è vera.

| Query | `dlv -brave zoo.dl` | `dlv -cautious zoo.dl` |
|---|---|---|
| `carnivoro(leone)?` | `carnivoro(leone) is bravely true.` | `carnivoro(leone) is cautiously true.` |
| `diurno(pinguino)?` | `diurno(pinguino) is bravely true.` | `diurno(pinguino) is cautiously false.` |
| `carnivoro(X)?` | `leone aquila pinguino serpente delfino` | `leone aquila pinguino serpente delfino` |
| `notturno(X)?` | `aquila pinguino` | (nessuno) |

La tabella mostra il punto chiave: **quando un fatto non dipende dalla disgiunzione** (il leone è carnivoro in ogni mondo possibile) **le due risposte coincidono**; **quando dipende da una scelta**, *brave* e *cautious* rispondono in modo diverso. Il pinguino è diurno in qualche mondo possibile (*brave*: sì), ma non in tutti (*cautious*: no).

Due cose da ricordare:
- DLV considera **una sola query per volta**: se ce ne sono due nel programma, usa l'ultima. Per fare un'altra domanda si cambia la query e si esegue di nuovo;
- la query si scrive come un fatto con il punto interrogativo al posto del punto: `carnivoro(leone)?`, senza altri simboli davanti.

> **[DOMANDA ALLA CLASSE]** · scopo: anticipa
> «Nello zoo il canarino canta di giorno, quindi è diurno; aquila e pinguino possono essere diurni o notturni. "Il pinguino è notturno?": che cosa risponde DLV con *brave*? E con *cautious*?»
> **Risposta:** con *brave* sì, perché c'è almeno un mondo possibile in cui il pinguino è notturno; con *cautious* no, perché non lo è in tutti.

> **[ERRORE TIPICO]**
> ✗ «Con *cautious* DLV ha risposto "false": quindi il pinguino non è diurno.»
> ✓ «*Cautiously false*» vuol dire che **non è diurno in tutti** i mondi possibili, non che è notturno. Con *brave* la stessa query risponde «true»: il pinguino **può** essere diurno.

> **[ESEMPIO]** *Il programma completo dello zoo*
> Tutti i pezzi del capitolo messi insieme (provato con il DLV classico: 4 *answer set*; le risposte della tabella del 10.8 vengono da questo programma, con la query aggiunta in fondo).

```
% ----- FATTI -----
ha_pelo(leone). ha_pelo(gazzella). ha_pelo(topo). ha_pelo(orso).
ha_piume(aquila). ha_piume(canarino). ha_piume(pinguino).
ha_squame(serpente).
allatta(delfino).
depone_uova(aquila). depone_uova(canarino). depone_uova(pinguino). depone_uova(serpente).
pianta(erba). pianta(grano). pianta(bacche).
animale(pesce).
domestico(canarino).
canta_di_giorno(canarino).
-vola(pinguino).
mangia(leone, gazzella). mangia(gazzella, erba). mangia(aquila, serpente).
mangia(serpente, topo). mangia(topo, grano). mangia(canarino, grano).
mangia(pinguino, pesce). mangia(delfino, pesce).
peso(leone, 190). peso(gazzella, 25). peso(aquila, 5). peso(serpente, 2).
peso(topo, 1). peso(canarino, 1). peso(pinguino, 30). peso(delfino, 150).
vive_in(leone, savana). vive_in(gazzella, savana). vive_in(pinguino, antartide).
vive_in(aquila, montagna). vive_in(serpente, montagna). vive_in(delfino, mare).
% ----- REGOLE -----
mammifero(X) :- ha_pelo(X).
mammifero(X) :- allatta(X).
uccello(X) :- ha_piume(X).
rettile(X) :- ha_squame(X), depone_uova(X).
animale(X) :- mammifero(X).
animale(X) :- uccello(X).
animale(X) :- rettile(X).
carnivoro(X) :- mangia(X, Y), animale(Y).
erbivoro(X) :- mangia(X, Y), pianta(Y).
grande(X) :- carnivoro(X), peso(X, P), P > 100.
pericoloso(X) :- carnivoro(X), peso(X, P), P > 100.
piccolo(X) :- peso(X, P), P < 10.
competono(X, Y) :- mangia(X, Z), mangia(Y, Z), X != Y.
stesso_habitat(X, X) :- vive_in(X, H).
stesso_habitat(X, Y) :- vive_in(X, H), vive_in(Y, H).
stesso_habitat(X, Y) :- stesso_habitat(Y, X).
sopra(X, Y) :- mangia(X, Y).
sopra(X, Z) :- sopra(X, Y), sopra(Y, Z).
selvatico(X) :- animale(X), not domestico(X).
vola(X) :- uccello(X), not -vola(X).
diurno(X) v notturno(X) :- uccello(X).
% ----- VINCOLI -----
:- notturno(X), canta_di_giorno(X).
:- peso(X, P), P <= 0.
:- pianta(X), animale(X).
```

> **[RICORDA]**
> - DLV è un linguaggio **dichiarativo**: si scrivono fatti e regole, e DLV ricava l'***answer set***, l'insieme di tutto ciò che è vero.
> - I **fatti** si scrivono in minuscolo con il punto finale; i predicati possono avere uno o più argomenti, anche numeri interi non negativi.
> - Una **regola** si scrive **testa `:-` corpo**: la virgola vale AND, più regole con la stessa testa valgono OR, due regole con lo stesso corpo danno un AND nella conclusione. Le variabili sono maiuscole e ogni regola deve essere **sicura**.
> - Le proprietà **riflessiva**, **simmetrica** e **transitiva** si scrivono come regole; la transitiva è **ricorsiva** e DLV si ferma quando non ricava più niente.
> - **`not`** vuol dire «non risulta» (negazione debole), **`-`** vuol dire «è falso che» (negazione forte).
> - La **disgiunzione** `v` nella testa crea **più *answer set***, uno per ogni mondo possibile; i **vincoli** (regole senza testa) scartano quelli che non devono esistere.
> - Una **query** si scrive in fondo con il `?`: **chiusa** senza variabili, **aperta** con una variabile. Con ***brave*** è vera se lo è in almeno un *answer set*, con ***cautious*** se lo è in tutti.
