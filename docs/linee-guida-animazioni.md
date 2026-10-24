# Linee guida per le animazioni del sito

Stabilite con il Prof. Patrick il 21 ottobre 2026, provando a mano diverse animazioni (cavo sottomarino, pacchetti/TCP, motore di ricerca, stanza cinese, test di Turing). **Valgono per ogni animazione nuova del sito e di Presenta in aula**, in tutti i moduli. I prototipi di riferimento sono in `docs/animazioni-riferimento/` (file HTML autonomi, si aprono con un doppio clic; servono internet per GSAP).

Il documento di progetto generale è `docs/superpowers/specs/2026-10-21-riprogettazione-sito-design.md`.

## 1. Quando fare un'animazione

- Solo per spiegare un **processo** (qualcosa che avviene nel tempo: un pacchetto che viaggia, un crawler che visita, un foglio che passa dalla fessura).
- Per cose statiche (elenchi, classificazioni, strutture) è meglio un'immagine buona con punti numerati.
- Prima di disegnare si scrive in una frase **che cosa deve capire lo studente**. Tutto ciò che non serve a quella frase si toglie.
- I passi e le didascalie vengono dal campo `passi` della figura in `contenuto.json` (la scena e i passi si decidono lì, l'animazione li realizza).

## 2. Principi di movimento

1. Una animazione, un'idea. Un solo punto di attenzione per passo; il resto resta fermo o quasi.
2. Il movimento mostra una causa e un effetto. Se è solo decorazione, si toglie. Anche i tempi possono raccontare (la macchina risponde subito ai calcoli difficili e così si tradisce).
3. Accelerazioni e frenate sempre (mai velocità costante, tranne lo scorrimento di cose «meccaniche»); un breve anticipo prima dell'azione e un piccolo rimbalzo dopo.
4. Gli stessi tempi e gli stessi effetti in tutto il sito.
5. Pausa breve dopo ogni azione, perché l'occhio registri il risultato.
6. La didascalia cambia nell'istante in cui succede la cosa che descrive.
7. Un'animazione continua si scrive come **un solo movimento**, non come tre pezzi sovrapposti.

## 3. Controllo e struttura

- Un clic per ogni passo («Avanti»), pulsante «Da capo» sempre presente, indicatore dei passi (puntini o «Giro 1 · domanda 2 di 3»). Si può rivedere tutto.
- Le animazioni lunghe si dividono in passi brevi, non in un filmato.
- Quando lo studente deve scegliere o indovinare (come nel test di Turing), la scelta è un vero pulsante e l'esito dipende da ciò che ha scelto.
- Poche parole nella scena (etichette); la spiegazione sta nella riga sotto, con le parole chiave in evidenza. Stessi termini della pagina di studio.
- Le traduzioni o le soluzioni si mostrano solo nell'ultimo passo, se il contenuto lo prevede.

## 4. Stile grafico

- **Illustrazione piatta e sobria**, con ombre leggere. Mai neon, aloni luminosi o effetti «tecnologici»: l'utente li ha giudicati «finti». «Più minimal ma fatta bene», con oggetti veri disegnati con cura (case, router, scrivanie, libri), non linee e puntini.
- Palette limitata dal sito: verde acqua (marchio), ambra (attenzione/deviazione), un rosso solo per il guasto o l'errore, neutri caldi per sfondi e legno. Stessi oggetti, sempre con lo stesso aspetto da un capitolo all'altro.
- Per i processi si preferisce una **sezione o una pianta** della scena (mare in sezione, mappa con strade, stanza aperta) a uno schema astratto.
- Quando serve un oggetto vero (cavo, data center) si usa la foto reale accanto allo schema, non un disegno approssimato.
- Tema chiaro nelle prove; nel sito vero i colori devono venire dalle variabili CSS (tema chiaro e scuro).

### Persone

- Scelta dell'utente: **volto minimo (occhi con pupille, sopracciglia, bocca) e braccia corte**. Le persone senza volto (geometriche) sono state provate e non scelte; il pittogramma, le sagome piene e il solo contorno sono alternative da proporre solo se si cambia direzione.
- Braccia: lunghe circa quanto il busto (2 segmenti da ~45 px per un busto di ~80 px). Con braccia corte **la persona si sposta per raggiungere le cose** (fa un passo) e gli oggetti stanno a portata di mano.
- Il gomito sta sempre verso il basso. Le mani a riposo stanno a una distanza naturale (braccio appena piegato).
- Le mani vanno disegnate **sopra** i fogli (gruppo dedicato dopo i fogli), il braccio **sotto**, così non copre il testo.
- Dove la persona non serve: avatar di chat (per le conversazioni) o solo le mani e gli oggetti (per i gesti).
- Respiro e battito di ciglia leggeri per dare vita; espressione data anche dal corpo (testa inclinata, spalle, punti interrogativi), non solo dal volto.

## 5. Tecnica

- **SVG + GSAP 3.12.5** (da cdnjs, versione fissata). 2D è la regola.
- **3D (Three.js r128)** solo per 1–2 momenti forti per capitolo (cavo sottomarino, data center, Terra con i cavi), caricato su richiesta, con alternativa 2D per i dispositivi lenti: il globo è bello ma pesante.
- Rispettare «riduci movimento» del dispositivo: in quel caso i passi si susseguono senza animare (`prefers-reduced-motion`, nei prototipi `timeScale(60)`).
- Ogni scena ha `role="img"` con una descrizione testuale (`aria-label`); contrasto adeguato; leggibile su telefono (viewBox che scala, testi non troppo piccoli, ideogrammi e numeri grandi abbastanza).
- Il sito è statico: niente compilazione, niente backend.

### Trappole già incontrate

- **Mai due tween sulla stessa proprietà nello stesso intervallo** (un tween e un `onUpdate` che fa `gsap.set` della stessa cosa): il foglio «scattava». Si usa un oggetto proxy e un solo tween, con tutte le fasi calcolate nell'`onUpdate`.
- **Mai interpolare attributi `d` con strutture diverse** (`L` contro `Q`, `H` contro `Q`): produce linee impazzite. I due disegni devono avere lo stesso numero e tipo di segmenti.
- **`svgOrigin` è nello spazio globale dell'SVG**: se il genitore è traslato, il punto di rotazione non lo segue (ok per piccoli angoli).
- Gli elementi nel gruppo traslato e le mani che stanno in un altro gruppo devono ricevere la stessa traslazione.
- Un elemento con attributo `opacity="0"` e un tween di `opacity` funziona; per i gruppi con filtro conviene impostare lo stato con `gsap.set`.
- I `delayedCall` e i tween creati dentro `tl.add(...)` non fanno parte della timeline: se serve che la timeline duri fino a una certa fine, va aggiunto un tween vuoto di durata nota.
- Gli ideogrammi cinesi: `Microsoft YaHei`, `Noto Sans SC`, `PingFang SC` in `font-family`.

## 6. Come si verifica (obbligatorio prima di consegnare)

Non basta una schermata dell'inizio e della fine. Si guardano **fotogrammi a intervalli regolari di ogni passo**.

1. L'animazione accetta nell'URL `#go=N&t=S`: esegue N−1 passi per intero, avvia il passo N e avanza di S secondi, poi mette in pausa (`gsap.globalTimeline.totalTime(...)` a piccoli passi, `pause()`).
2. `docs/animazioni-riferimento/estrai-fotogrammi.py` scatta i fotogrammi con Edge in modalità headless e li compone in una tavola (richiede Pillow e Edge).
3. Si cerca: salti improvvisi, oggetti che compaiono o spariscono, mani staccate dal corpo, testo coperto, sovrapposizioni, ritagli.
4. Il sistema di prova non sostituisce l'occhio dell'utente: nella risposta si dice sempre che cosa si è controllato e che cosa lo giudica lui (il movimento vero).

## 7. Prototipi di riferimento (`docs/animazioni-riferimento/`)

| File | Che cosa mostra |
|---|---|
| `prova-2d-stanza-cinese-v4.html` | Stile e qualità di riferimento: persone con braccia corte, mani sopra i fogli, tutti i controlli |
| `prova-2d-turing.html` | Scelta dell'utente, due giri, esito, scheda finale; avatar delle cabine |
| `prova-2d-motore-ricerca.html` | Crawler, indice a schedario, scrittura nella barra, risultati con cronometro |
| `prova-2d-tcp-illustrata.html` | Mappa dall'alto con strade e router, pezzi di foto numerati che si ricompongono |
| `prova-2d-sezione.html` | Sezione dell'oceano con cavi sul fondo, nave e ancora |
| `prova-2d-minimal.html` | Versione minimal (linee e puntini): **scartata**, resta come termine di paragone |
| `prova-globo.html`, `prove-animazioni-cavo3d-e-gsap.html` | 3D con Three.js (globo, cavo): da usare con parsimonia |
| `prova-persone.html`, `prova-persone-2.html` | Confronto degli stili di persone considerati |
