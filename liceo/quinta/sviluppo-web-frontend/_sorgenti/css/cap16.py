# Capitolo 16 · Framework CSS: Bootstrap e Tailwind
from lib import *

P.capo('Framework CSS: Bootstrap e Tailwind', 16)

def pre(t, lingua='html'):
    return '<pre class="codice"><code>' + (SL.evidenzia(t) if lingua == 'html' else evidenzia_css(t)) + '</code></pre>'

# ---------------------------------------------------------------- 16.1
P.sez('16.1', 'Che cos’è un framework CSS e come si collega',
      R='Un framework è CSS già scritto che si usa con le sue classi, collegato con un link o con una build.')
P.p('Scrivere tutto il CSS di un sito da zero richiede tempo: pulsanti, moduli, griglie, menu, finestre, e ognuno va reso responsive e accessibile. Un [[framework CSS]] è un **foglio di stile già scritto** (spesso con un po’ di JavaScript) che offre tutto questo attraverso delle **classi**: invece di scrivere le regole, si aggiungono all’HTML le classi del framework.',
    'I vantaggi sono la **velocità** (un’interfaccia decente in pochi minuti) e la **coerenza** (stessi margini, colori e pulsanti in tutte le pagine, anche se ci lavorano in tanti). Il prezzo è la **dipendenza**: si impara il vocabolario di quel framework, il sito tende ad assomigliare agli altri fatti con lo stesso strumento e, quando esce una versione nuova, a volte le classi cambiano.')
P.p('Un framework si collega in due modi:')
P.ul(['con un **link a una CDN** (*Content Delivery Network*, una rete di server che distribuisce file pubblici): una riga nell’`<head>` e il framework è pronto. È il modo più rapido, adatto per imparare e per i prototipi;',
      'con una **build**: il framework si installa nel progetto con un gestore di pacchetti (npm) e uno strumento come **Vite** prepara il CSS finale, togliendo ciò che non si usa e permettendo di personalizzarlo. È il modo dei progetti veri.'])
P.schema('s16_bottone', 'Lo stesso pulsante in tre modi', '''      <div class="s16b">
        <div class="kit-cella"><b>CSS scritto a mano</b><div class="s16b-r"><button type="button" class="s16b-mano">Iscriviti</button></div>''' + pre('<button class="iscriviti">\n  Iscriviti\n</button>') + pre('.iscriviti {\n  padding: 8px 16px;\n  background: #0d6efd;\n  color: white;\n  border: 0;\n  border-radius: 6px;\n}', 'css') + '''</div>
        <div class="kit-cella"><b>Bootstrap</b><div class="s16b-r"><button type="button" class="s16b-bs">Iscriviti</button></div>''' + pre('<link rel="stylesheet"\n  href="…/bootstrap.min.css">\n\n<button\n  class="btn btn-primary">\n  Iscriviti\n</button>') + '''<span>nessuna regola da scrivere: le classi <code>btn</code> e <code>btn-primary</code> sono già nel foglio di Bootstrap</span></div>
        <div class="kit-cella"><b>Tailwind</b><div class="s16b-r"><button type="button" class="s16b-tw">Iscriviti</button></div>''' + pre('<script\n  src="…/@tailwindcss/browser@4">\n</script>\n\n<button class="px-4 py-2\n  bg-blue-500 text-white\n  rounded-md">\n  Iscriviti\n</button>') + '''<span>ogni classe è una sola regola: <code>px-4</code> è il padding orizzontale, <code>bg-blue-500</code> lo sfondo…</span></div>
      </div>''', titolo_aula='Lo stesso pulsante in tre modi')
P.err('«Con un framework non serve conoscere il CSS.»',
      'Il framework è CSS: per personalizzarlo, capire perché qualcosa non funziona o andare oltre i suoi componenti servono **cascata, specificità, box model, Flexbox e Grid**. Senza, si è in balia delle classi.')

# ---------------------------------------------------------------- 16.2
P.sez('16.2', 'Bootstrap',
      R='Bootstrap offre componenti pronti e una griglia a 12 colonne.')
P.p('[[Bootstrap]] è nato nel 2011 dentro Twitter ed è il framework CSS più diffuso. La sua idea è offrire **componenti pronti**: si scrive l’HTML con le classi giuste e si ottiene un pulsante (`btn btn-primary`), una scheda (`card`), una barra di navigazione che sul telefono diventa un menu a tendina (`navbar`), finestre, avvisi, moduli. Le classi descrivono **che cosa è** l’elemento; l’aspetto lo decide Bootstrap, e si personalizza cambiando le sue variabili.')
P.grande('local:assets/immagini/bootstrap-varianti.png|https://getbootstrap.com/docs/5.3/components/buttons/',
         'La documentazione di Bootstrap, pagina *Buttons*: sopra i pulsanti, sotto il codice che li produce. Osservare che ogni pulsante ha due classi: `btn`, comune a tutti, e una che dice il suo **ruolo** (`btn-primary`, `btn-danger`…), da cui viene il colore.',
         'La pagina Buttons della documentazione di Bootstrap 5.3 con i pulsanti colorati e il codice HTML', aula='La documentazione di Bootstrap')
P.p('L’altra metà di Bootstrap è la **griglia a 12 colonne**: un `container` centra il contenuto, una `row` è una riga, e dentro ogni `col-…` dice **quante colonne su 12** occupa e da quale larghezza. `col-md-6` vuol dire «metà riga (6 su 12) dagli schermi medi in su (`md`, da 768px)»; sotto, la colonna occupa tutta la riga. È mobile first (7.3) e usa proprio i breakpoint 576, 768, 992 e 1200 visti in 13.3.')
P.html('<div class="container">\n  <div class="row">\n    <div class="col-md-6">Arduino</div>   <!-- metà riga da 768px in su -->\n    <div class="col-md-6">Stampa 3D</div>\n  </div>\n</div>', 'index.html', aula='La griglia di Bootstrap')
P.p('L’ultima versione stabile è la **5.3.8**. L’**8 ottobre 2026** è uscita la prima versione *alpha* (di prova, non ancora per i siti veri) di **Bootstrap 6**, che funziona solo con browser recenti (Chrome ed Edge 130, Firefox 132, Safari 18).')

# ---------------------------------------------------------------- 16.3
P.sez('16.3', 'Tailwind',
      R='Tailwind è utility-first: classi piccole e componibili direttamente nell’HTML.')
P.p('[[Tailwind]] CSS ha un’idea opposta, detta *utility-first* (prima le utilità). Non offre componenti, ma **centinaia di classi piccolissime**, ognuna con **una sola regola**: `p-4` è un padding, `text-center` centra il testo, `bg-blue-500` dà uno sfondo blu (500 è la tonalità, da 50 chiarissimo a 950 scurissimo), `rounded-md` arrotonda gli angoli, `md:flex` applica `display: flex` dagli schermi medi in su. Il componente lo si **costruisce** nell’HTML mettendo insieme le classi: non si scrivono regole e non si inventano nomi.')
P.grande('local:assets/immagini/tailwind-play-cdn.png|https://tailwindcss.com/docs/installation/play-cdn',
         'La documentazione di Tailwind CSS 4, pagina *Play CDN*: per provarlo basta uno `<script>` dalla CDN jsDelivr nell’`<head>` e un titolo con le classi `text-3xl font-bold underline`. Osservare che non c’è nessun foglio di stile: il CSS lo genera lo script, leggendo le classi usate nella pagina.',
         'La pagina Play CDN della documentazione di Tailwind CSS con il codice HTML di esempio', aula='Tailwind dalla CDN')
P.p('La versione attuale è la **4**, in cui la personalizzazione (colori, caratteri, misure) si scrive **direttamente in CSS**, dentro un blocco `@theme`. Lo script dalla CDN è pensato **solo per le prove**: genera il CSS nel browser, a ogni caricamento. Nei siti veri Tailwind si usa con una **build** (con Vite o PostCSS), che produce un file CSS con le sole classi usate, piccolissimo. Il vecchio indirizzo `cdn.tailwindcss.com` è della versione 3 ed è superato. Tailwind 4 richiede browser moderni (Safari 16.4, Chrome 111, Firefox 128).')

# ---------------------------------------------------------------- 16.4
P.sez('16.4', 'Differenza tra Bootstrap e Tailwind',
      R='Bootstrap dà componenti pronti da personalizzare, Tailwind mattoni per costruirli.')
P.p('I due framework rispondono in modo opposto alla stessa domanda. Bootstrap dice: «ecco un pulsante, cambialo se vuoi». Tailwind dice: «ecco i mattoni, costruisci il pulsante che vuoi».')
P.tab([['', 'Bootstrap', 'Tailwind'],
       ['Approccio', 'componenti pronti, classi che descrivono **che cosa è** (`btn`, `card`)', '*utility-first*: classi che descrivono **come appare** (`p-4`, `bg-blue-500`)'],
       ['Componenti pronti', 'sì, anche con JavaScript (menu a tendina, finestre)', 'no: si costruiscono (o si prendono da librerie a parte)'],
       ['Personalizzazione', 'variabili e temi; uscire dallo stile Bootstrap costa fatica', 'totale, nel blocco `@theme`; ogni sito ha il suo aspetto'],
       ['Peso', 'il foglio intero, se non si fa una build', 'con la build, solo le classi usate: pochi kB'],
       ['Curva di apprendimento', 'bassa: si copia un componente dalla documentazione', 'più ripida all’inizio: tante classi da imparare'],
       ['Limiti', 'siti che si assomigliano tutti', 'HTML pieno di classi, difficile da leggere'],
       ['In comune', 'dipendenza da una versione: con quella nuova qualcosa cambia', 'idem']],
      'Bootstrap e Tailwind a confronto')
P.p('Non c’è un vincitore: Bootstrap è comodo per un pannello di amministrazione o un prototipo da fare in fretta, Tailwind per un sito con una grafica propria. In tutti e due i casi, ciò che si è imparato in questo modulo resta la base: dietro ogni classe c’è una regola CSS.')


# ---------------------------------------------------------------- slide
SP = {
 '16.1': [
  confronto('Framework CSS', 'CSS già scritto, da usare con le sue classi',
            {'icona': 'zap', 'titolo': 'Vantaggi', 'tono': 'buono', 'righe': ['• **velocità**: un’interfaccia in pochi minuti', '• **coerenza**: stessi pulsanti ovunque', '• responsive e accessibile già pronto']},
            {'icona': 'link', 'titolo': 'Prezzo', 'righe': ['• **dipendenza** da un vocabolario e da una versione', '• siti che si assomigliano', '• il CSS va capito comunque']},
            'Si collega con un `<link>` a una CDN (prove) o con una build (progetti veri)'),
 ],
 '16.2': [
  punti('Bootstrap', 'Componenti pronti e una griglia a 12 colonne', [
    ['component', 'Componenti: `btn btn-primary`, `card`, `navbar`, finestre, avvisi'],
    ['columns-3', 'Griglia: `container` › `row` › `col-md-6` (6 colonne su 12)'],
    ['smartphone', 'Mobile first: `md` vuol dire «da 768px in su»'],
    ['tag', 'Stabile: **5.3.8** · Bootstrap 6 in *alpha* dall’8 ottobre 2026']]),
 ],
 '16.3': [
  punti('Tailwind', 'Utility-first: una classe, una regola', [
    ['blocks', '`p-4`, `text-center`, `bg-blue-500`: ogni classe fa una cosa sola'],
    ['smartphone', '`md:flex`: le varianti per breakpoint e stati nella classe'],
    ['palette', 'Versione 4: personalizzazione in CSS con `@theme`'],
    ['flask-conical', 'Script dalla CDN solo per **prove**; nei siti veri una **build**']]),
 ],
 '16.4': [],
}
P.aula('Usare il CSS scritto da altri: Bootstrap e Tailwind.', SP,
       apertura=('Dovete fare in un pomeriggio il sito di iscrizione al club: con pulsanti, menu e moduli già belli. Scrivete tutto il CSS da zero?',
                 'Si può partire da un **framework CSS**, che offre tutto già pronto attraverso le sue classi.'))
