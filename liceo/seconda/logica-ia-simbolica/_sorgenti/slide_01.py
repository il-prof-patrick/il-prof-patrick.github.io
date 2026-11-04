# Slide di Presenta in aula · Capitolo 1 · Macchine che ragionano: che cos’è la logica
# Rifatte il 04/11/2026 con le forme «schema geometrico» (scrittura-e-forma.md, parte 2): contenuto = quello del sito.
# Ogni paragrafo è un discorso: domanda → esempio o dimostrazione → nome (definizione formale) → domanda successiva.
# Ogni idea si dice una volta sola; a differenza della pagina, l'esempio viene prima della definizione (1.1 e 1.3).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Logica e IA simbolica')
c = Capitolo(1)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
c.usati['fig'].update({'F1.2.2', 'F1.2.3'})     # gli schemi in una riga del sito: «formalizzare» sta nella definizione, l'altro è il flusso «A che cosa serve la logica»

S = [
 c.COP('Le macchine che seguono regole, il linguaggio senza ambiguità in cui si scrivono e quando un ragionamento è valido.'),

 # ------------------------------------------------ 1.1 · domanda: come fa una casa a decidere da sola?
 c.SEZ('1.1', 'Come fa una casa a decidere da sola?', 'house'),
 flusso('Una luce che si accende da sola', [
   nd('È sera', icona='moon'),
   nd('C’è qualcuno in casa', icona='user'),
   nd('Accendi le luci', icona='lightbulb', tono='fine', riga='Nessuno ha premuto un interruttore: l’app ha applicato **una regola scritta da una persona**.')],
   frecce=['e', 'allora'], msg='Una sera d’inverno entri in casa e la luce del soggiorno si accende da sola'),
 gettoni('Regole ovunque', [], [
   ['smartphone', 'Nell’app per la casa', '*If* sono le 6 **e** il terreno ha meno del 50% di umidità, *Then* annaffia per 15 minuti'],
   ['credit-card', 'Nella banca', 'pagamento all’estero pochi minuti dopo uno in Italia: la carta si blocca'],
   ['car', 'Nell’auto', 'la pressione dell’olio scende sotto una soglia: si accende la spia']],
   foto=dict(c.FO('F1.1.1', 'Una regola in un’app per la casa'), src=c.FO('F1.1.1')['src'] + '#intera'),   # schermata alta: intera
   msg='Le app permettono a chiunque di scriverle; altre lavorano dove non le vediamo'),
 c.AN('F1.1.2', 'La casa che ragiona'),
 definizione('Il sistema a regole', 'Un **sistema a regole** è un programma che **rappresenta la conoscenza come fatti e regole condizionali** e ne trae conclusioni **applicando automaticamente le regole ai fatti**.',
   [['database', 'Fatti: ciò che il sistema considera vero ora'], ['scroll-text', 'Regole: SE condizioni ALLORA conclusione'],
    ['zap', 'Scatta: tutte le condizioni sono tra i fatti'], ['link', 'Catena: il fatto nuovo ne fa scattare altre']],
   parafrasi='Le regole le scrive chi conosce il problema: il programma si limita ad applicarle.',
   msg='Ciò che fa la casa ha un nome'),
 c.ERR(0),
 gettoni('I fantasmi di Pac-Man', [['users', 'nessuno «pensa» né sa degli altri']], [
   ['target', 'Rosso', 'punta alla casella in cui si trova Pac-Man'],
   ['move-right', 'Rosa', 'punta quattro caselle davanti a Pac-Man, per anticiparne i movimenti'],
   ['git-merge', 'Azzurro', 'combina la posizione di Pac-Man con quella del fantasma rosso'],
   ['undo-2', 'Arancione', 'insegue da lontano; a meno di 8 caselle punta al suo angolo']],
   foto=c.FOBOX('1.1', 'Pac-Man (1980)'), occhiello='Esempio',
   msg='Sembrano dotati di intelligenza strategica, eppure ognuno segue una sola regola'),
 c.DOM(0),
 definizione('L’IA simbolica', 'L’**IA simbolica** è l’approccio all’IA che **rappresenta la conoscenza in modo esplicito, con simboli organizzati in fatti e regole**, e ne ricava conclusioni **applicando le regole ai fatti**.',
   [['shapes', 'Simbolo: segno che sta per un oggetto, una proprietà o una relazione'], ['history', 'GOFAI: il primo modo di fare IA, dagli anni Cinquanta']],
   parafrasi='Sono le persone a scrivere ciò che la macchina sa, e la macchina lo usa come la casa smart.',
   nota='*Good Old-Fashioned Artificial Intelligence*, «la buona vecchia IA».'),

 # ------------------------------------------------ 1.2 · domanda: in che lingua si scrivono fatti e regole?
 c.SEZ('1.2', 'In che lingua vanno scritti fatti e regole, perché una macchina li possa usare?', 'languages'),
 c.DOM(1, risposta=''),          # la risposta è la slide dopo
 dict(c.SC('F1.2.1', 'Una regola, due significati'), msg='Chi ha il binocolo: la guardia o l’uomo?'),
 casi('Una persona e un programma', [
   caso('si', 'Una persona', icona='user', testo='usa il **contesto**: dove si trova, che cosa sta succedendo, che cosa vuole chi ha dato l’ordine. E nel dubbio può chiedere.'),
   caso('no', 'Un programma', icona='cpu', testo='esegue la regola in uno dei due modi: se è quello sbagliato, la guardia **colpisce le persone sbagliate**.')],
   msg='Davanti alla stessa regola ambigua'),
 definizione('Il linguaggio naturale', 'Un **linguaggio naturale** è una lingua storica che si è formata e si trasforma **spontaneamente nell’uso** di una comunità di parlanti, **senza regole stabilite in anticipo**.',
   [['split', 'Ambigua: una frase che ammette più di un’interpretazione'], ['message-circle', 'Nelle lingue naturali succede spesso']],
   parafrasi='Nessuno ha progettato l’italiano, e le sue frasi spesso si possono capire in più modi.'),
 gettoni('Ambiguità nelle parole piccole', [], [
   ['split', '«o»', 'domani c’è la verifica o l’interrogazione: una sola, o tutte e due?'],
   ['arrow-right', '«se»', 'se finisci i compiti, puoi uscire: e se non li finisci, non puoi uscire?'],
   ['users', '«tutti… non»', 'tutti gli studenti non hanno fatto i compiti: nessuno, o non tutti?']],
   msg='Proprio le parole che servono per scrivere le regole', occhiello='Esempio'),
 definizione('Il linguaggio formale', 'Un **linguaggio formale** è un linguaggio **artificiale**: regole esplicite di **sintassi** stabiliscono quali sequenze di simboli sono **formule ben formate**, regole di **semantica** danno a ciascuna **un solo significato**.',
   [['code', 'Python: niente righe «più o meno» giuste'], ['pen-line', 'Formalizzare: tradurre una frase in una formula']],
   parafrasi='Non nasce dall’uso, lo progetta qualcuno: ogni frase scritta correttamente si capisce in un modo solo. Formalizzare una frase ambigua obbliga a **scegliere uno dei suoi significati**.'),
 definizione('Che cos’è la logica', 'La **logica** è la disciplina che studia le **condizioni di validità dei ragionamenti**: in quali casi la verità di alcune affermazioni (*proposizioni*, come diremo nel capitolo 2) **garantisce, per la sola forma**, la verità di un’altra.',
   parafrasi='Non si chiede se una cosa è vera, ma se **segue con certezza** da ciò che si dà per vero, chiunque ragioni: una persona o una macchina.',
   nota='Per farlo scrive le affermazioni in un **linguaggio formale**: quello che serve a un sistema di IA simbolica.'),
 flusso('A che cosa serve la logica', [
   nd('Base di conoscenza', 'rappresentare la conoscenza: i fatti e le regole del sistema', 'database'),
   nd('Fatti nuovi', 'ricavare conoscenza nuova', 'sparkles', tono='fine', riga='L’**inferenza** è il passaggio da affermazioni date per vere a un’affermazione che ne segue: è ciò che fa la casa quando una regola scatta.')],
   frecce=['inferenza'], msg='In un sistema di IA simbolica, due compiti'),
 gettoni('Wittgenstein e la frase come immagine', [], [
   ['image', 'Una proposizione è un’immagine dei fatti', 'i suoi elementi stanno tra loro come le cose nel mondo (*Tractatus*, 1921)'],
   ['car', 'Un modellino in tribunale', 'a Parigi un incidente ricostruito con automobiline e pupazzi'],
   ['database', 'Una base di conoscenza fa lo stesso', 'è un’immagine del mondo fatta di simboli'],
   ['quote', '«I limiti del mio linguaggio significano i limiti del mio mondo»', '']],
   foto=c.FOBOX('1.2', 'Ludwig Wittgenstein'), occhiello='Nella storia', msg='Ludwig Wittgenstein (1889–1951)'),

 # ------------------------------------------------ 1.3 · domanda: com'è fatto un ragionamento?
 c.SEZ('1.3', 'Il passaggio da ciò che si sa a ciò che ne segue è un ragionamento: com’è fatto?', 'brain'),
 anatomia('Il ragionamento della casa', 'Se è sera e fuori è buio,\nallora serve la luce.\nÈ sera e fuori è buio.\n―――――――――――――――――――――\nQuindi serve la luce.', [
   ['Se è sera e fuori è buio,\nallora serve la luce.', 'Premessa', 'la regola'],
   ['È sera e fuori è buio.', 'Premessa', 'i fatti'],
   ['Quindi serve la luce.', 'Conclusione', 'l’affermazione ricavata']],
   msg='Quando la regola 1 scatta, la casa parte da due informazioni e ne ricava una terza'),
 definizione('L’argomento', 'Un **argomento** (o ragionamento) è una **sequenza di affermazioni** in cui una, la **conclusione**, è presentata come **conseguenza** delle altre, le **premesse**.',
   [['arrow-down', 'Inferenza: il passaggio dalle premesse alla conclusione']],
   parafrasi='Le premesse sono ciò che si dà per vero, la conclusione è ciò che se ne ricava.',
   nota='In logica «argomento» non vuol dire «tema di cui si parla».',
   msg='Vale per qualunque ragionamento, non solo per quello della casa'),
 anatomia('Le parole-spia', 'Il ladro è entrato dalla finestra, dato che la porta era chiusa a chiave', [
   ['Il ladro è entrato dalla finestra', 'Conclusione', 'qui viene prima'],
   ['dato che', 'Parola-spia', 'introduce una premessa'],
   ['la porta era chiusa a chiave', 'Premessa', '']],
   msg='Nella lingua di tutti i giorni la riga non c’è',
   effetto='«quindi», «perciò», «dunque» → **conclusione** · «perché», «dato che», «poiché» → **premessa**', occhiello='Esempio'),
 dict(c.SC('F1.3.1', 'Tre argomenti, una stessa forma di scrittura'), msg='Temi diversissimi, scritti tutti allo stesso modo'),
 gettoni('Aristotele e il sillogismo', [], [
   ['scroll', 'La forma dei ragionamenti', 'il primo a studiarla in modo sistematico, nell’*Organon* («strumento»)'],
   ['git-merge', 'Il sillogismo', 'un argomento con due premesse e una conclusione'],
   ['quote', '«Socrate è mortale»', 'l’esempio più famoso non è suo, ma dei suoi commentatori'],
   ['hourglass', 'Più di duemila anni', 'la sua logica resta la base dello studio del ragionamento']],
   foto=c.FOBOX('1.3', 'Aristotele'), occhiello='Nella storia', msg='Aristotele (384–322 a.C.)'),

 # ------------------------------------------------ 1.4 · domanda: quando un ragionamento funziona davvero?
 c.SEZ('1.4', 'Scrivere un ragionamento in colonna non lo rende buono: quando funziona davvero?', 'scale'),
 casi('Due modi di sbagliare', [
   caso('no', 'Una premessa è falsa', icona='circle-x', testo='il sensore sbaglia, la notizia è inventata'),
   caso('no', 'La conclusione non segue', icona='unlink', testo='dalle premesse, anche se queste sono vere')],
   msg='Un argomento può andare storto per due motivi molto diversi', aClic=True),
 flusso('*Garbage in, garbage out*', [
   nd('Il sensore sbaglia', 'scambia il gatto per una persona', 'cat'),
   nd('Un fatto falso', '«c’è qualcuno in casa»', 'database', tono='no'),
   nd('Luce accesa', 'in una stanza vuota', 'lightbulb', tono='no', riga='Regole applicate senza errori, premessa falsa: conclusione sbagliata. La logica si occupa dell’altro motivo: **il passaggio** dalle premesse alla conclusione.')],
   msg='Il primo motivo una macchina non lo vede', occhiello='Esempio'),
 definizione('Valido e corretto', 'Un argomento è **valido** quando è **impossibile** che tutte le premesse siano vere e la conclusione falsa.',
   [['circle-check', 'Corretto (o fondato): valido e con tutte le premesse vere']],
   parafrasi='Se le premesse sono vere, la conclusione lo è per forza. La validità non dice se le premesse sono vere: dice che cosa succede alla conclusione se lo sono.'),
 c.DOM(2),
 c.AN('F1.4.1', 'Lo stampo del ragionamento'),
 casi('Conta la forma', [
   caso('si', 'Valido', titolo='Tutti gli A sono B · x è un A · quindi x è un B', testo='vale per **ogni argomento** con questa forma, qualunque cosa ci sia al posto delle lettere'),
   caso('no', 'Non valido', titolo='Tutti gli A sono B · x è un B · quindi x è un A', testo='«Tutti i gatti hanno quattro zampe; Fido ha quattro zampe; quindi Fido è un gatto»: premesse vere, conclusione falsa')],
   msg='La **forma logica** è ciò che resta sostituendo con lettere i termini specifici («tutti», «non», «se… allora» restano): la validità dipende da lei, non dal contenuto',
   riga='Per controllarla non serve sapere niente di uomini, pesci o gatti: per questo **la può controllare anche una macchina**.'),
 c.ERR(1),
]

# occhiello: il paragrafo (numero · titolo) sulle slide che non ne hanno uno proprio
BREVE = {'1.1': 'Macchine che seguono regole', '1.2': 'Che cos’è la logica', '1.3': 'Ragionare', '1.4': 'Validità e verità'}
sez = None
for s in S:
    if s['tipo'] == 'sezione': sez = s['num']; continue
    if sez and s['tipo'] not in ('domanda', 'errore', 'copertina'):
        s['occhiello'] = sez + ' · ' + s.get('occhiello', BREVE[sez])

if __name__ == '__main__':
    c.scrivi(OUT, S, stile='schema')
