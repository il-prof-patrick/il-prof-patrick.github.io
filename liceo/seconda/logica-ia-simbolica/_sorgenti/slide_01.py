# Slide di Presenta in aula · Capitolo 1 · Macchine che ragionano: che cos’è la logica
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Logica e IA simbolica')
c = Capitolo(1)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Le macchine che decidono con le regole, il ragionamento che c’è dietro e perché serve un linguaggio senza ambiguità.'),
 # 1.1
 c.SEZ('1.1', 'Dietro una casa che «decide» c’è una regola scritta da una persona', 'house'),
 c.DOM(0),
 {'tipo': 'punti', 'titolo': 'Una luce che si accende da sola', 'msg': 'L’app della casa applica una regola scritta da una persona', 'punti': [
   ['moon', 'Entri in casa la sera e la luce **si accende da sola**'],
   ['hand', 'Nessuno ha premuto un interruttore'],
   ['scroll-text', 'La regola: **se è sera e c’è qualcuno in casa, accendi le luci**']]},
 {'tipo': 'punti', 'titolo': 'Una regola in un’app per la casa', 'msg': 'Due condizioni sotto *If*, un’azione sotto *Then*', 'punti': [
   ['clock', '*If*: sono **le 6**'],
   ['droplets', '**e** il terreno ha **meno del 50% di umidità**'],
   ['sprout', '*Then*: **annaffia per 15 minuti**']],
  'foto': dict(c.FO('F1.1.1', 'Una regola in un’app per la casa'), src=c.FO('F1.1.1')['src'] + '#intera')},   # schermata alta: intera, non ritagliata
 {'tipo': 'tessere', 'titolo': 'Regole ovunque', 'msg': 'Condizioni collegate ad azioni', 'tessere': [
   ['house', 'Casa', 'app come IFTTT («se questo allora quello»): luci, riscaldamento, irrigazione'],
   ['credit-card', 'Banca', 'pagamento all’estero pochi minuti dopo uno in Italia: carta bloccata'],
   ['car', 'Auto', 'pressione dell’olio sotto la soglia: si accende la spia'],
   ['gamepad-2', 'Videogiochi', 'i personaggi del computer si muovono seguendo regole']]},
 {'tipo': 'punti', 'titolo': 'I fantasmi di Pac-Man', 'msg': 'Il gioco di squadra nasce da regole semplici', 'punti': [
   ['target', 'Il **rosso** punta alla casella di Pac-Man'],
   ['move-right', 'Il **rosa** punta 4 caselle davanti a lui, per tagliargli la strada'],
   ['calculator', 'L’**azzurro** usa la posizione di Pac-Man e quella del rosso'],
   ['undo-2', 'L’**arancione** insegue da lontano, ma vicino torna nel suo angolo'],
   ['users', 'Nessuno «pensa» né sa degli altri: **la squadra nasce dalle regole**']],
  'foto': c.FOBOX('1.1', 'Pac-Man (1980)')},
 {'tipo': 'tessere', 'titolo': 'Fatti e regole', 'msg': 'I due ingredienti di ogni sistema a regole', 'tessere': [
   ['database', 'Fatti', '**ciò che il sistema sa** ora: sono le 19, fuori è buio, Marco è in casa. Arrivano da sensori, dati o da chi usa il sistema'],
   ['scroll-text', 'Regole', 'frasi **SE condizioni ALLORA conclusione**, scritte da chi conosce il problema: l’esperto di frodi, il programmatore del gioco']]},
 {'tipo': 'punti', 'titolo': 'Il ragionamento a catena', 'msg': 'La conclusione diventa un fatto nuovo', 'punti': [
   ['circle-check', 'Quando **tutte le condizioni sono vere**, la regola «scatta»'],
   ['plus', 'La sua conclusione **si aggiunge ai fatti**'],
   ['link', 'Il fatto nuovo può **far scattare altre regole**'],
   ['circle-x', 'Se manca anche un solo fatto, la regola non scatta: **il sistema non indovina**']]},
 c.AN('F1.1.2', 'La casa che ragiona'),
 c.ERR(0),
 {'tipo': 'punti', 'titolo': 'L’IA simbolica', 'msg': 'Le persone scrivono la conoscenza, la macchina la applica', 'punti': [
   ['pen-line', 'La conoscenza la scrivono le persone, come **fatti e regole**'],
   ['shapes', '**Simboli**: parole o segni che stanno per cose del mondo («buio», «Marco»)'],
   ['history', '**GOFAI**, *Good Old-Fashioned AI*: il primo modo di fare IA, dagli anni Cinquanta'],
   ['scale', 'Per scrivere fatti e regole **senza ambiguità** serve la **logica**']]},
 # 1.2
 c.SEZ('1.2', 'Ricavare una conclusione da premesse date per buone', 'brain'),
 {'tipo': 'punti', 'titolo': 'Il ragionamento della casa', 'msg': 'Scritto per esteso: premesse sopra, conclusione sotto', 'punti': [
   ['scroll-text', 'Se è sera e fuori è buio, allora serve la luce'],
   ['database', 'È sera e fuori è buio'],
   ['arrow-down', '**Quindi serve la luce**']]},
 {'tipo': 'punti', 'titolo': 'Ragionare', 'msg': 'Ricavare una conclusione da informazioni date per buone', 'punti': [
   ['list', 'Le informazioni di partenza sono le **premesse**'],
   ['flag', 'Quella ricavata è la **conclusione**'],
   ['package', 'Insieme formano un **argomento**: non il «tema», ma premesse più conclusione'],
   ['arrow-right', 'Il passaggio dalle premesse alla conclusione è l’**inferenza**']]},
 {'tipo': 'tessere', 'titolo': 'Le parole-spia', 'msg': 'Come si riconoscono premesse e conclusione', 'tessere': [
   ['flag', 'Conclusione', '«quindi», «perciò», «dunque»'],
   ['list', 'Premessa', '«perché», «dato che», «poiché»'],
   ['rows-3', 'In logica', 'premesse sopra, una riga, conclusione sotto']],
  'nota': 'La logica studia quando una conclusione segue davvero dalle premesse, chiunque ragioni: persona o macchina.'},
 c.SC('F1.2.1', 'Tre argomenti, una stessa forma'),
 {'tipo': 'punti', 'titolo': 'Aristotele e il sillogismo', 'msg': 'Il primo a studiare la forma dei ragionamenti (384–322 a.C.)', 'punti': [
   ['scroll', 'Studia per primo **la forma dei ragionamenti** (*Organon*)'],
   ['git-merge', 'Il **sillogismo**: due premesse e una conclusione'],
   ['quote', '«Socrate è mortale» non è suo, ma dei suoi commentatori'],
   ['hourglass', 'La sua logica resta la base **per più di duemila anni**']],
  'foto': c.FOBOX('1.2', 'Aristotele')},
 # 1.3
 c.SEZ('1.3', 'La validità dipende dalla forma, non dal contenuto', 'scale'),
 {'tipo': 'punti', 'titolo': 'Due modi di sbagliare', 'msg': 'Un argomento può andare storto per due motivi', 'punti': [
   ['circle-x', '**Una premessa è falsa**: il sensore sbaglia, la notizia è inventata'],
   ['unlink', '**La conclusione non segue** dalle premesse, anche se sono vere'],
   ['scale', 'La logica si occupa **del secondo**']]},
 {'tipo': 'tessere', 'titolo': 'Valido e corretto', 'msg': 'La verità delle premesse passa per forza alla conclusione', 'tessere': [
   ['shapes', 'Valido', 'è **impossibile** che le premesse siano vere e la conclusione falsa'],
   ['circle-check', 'Corretto (o fondato)', 'è **valido e** ha le premesse **vere**: la conclusione è **sicuramente vera**']]},
 {'tipo': 'punti', 'titolo': 'Conta la forma', 'msg': 'Per questo la validità la controlla anche una macchina', 'punti': [
   ['shapes', '«Tutti gli A sono B; x è un A; quindi x è un B»'],
   ['repeat', 'È valido **qualunque cosa** si metta al posto di A, B e x'],
   ['cpu', 'Non serve sapere niente del mondo: **lo può controllare una macchina**']]},
 c.DOM(1),
 c.AN('F1.3.1', 'Lo stampo del ragionamento'),
 {'tipo': 'punti', 'titolo': '*Garbage in, garbage out*', 'msg': 'Una macchina che ragiona bene non si accorge delle premesse false', 'punti': [
   ['cat', 'Il sensore scambia **il gatto per una persona**'],
   ['lightbulb', 'La casa accende la luce in una stanza vuota'],
   ['trash-2', 'Ragionamento valido, premessa falsa: **conclusione sbagliata**']]},
 c.ERR(1),
 # 1.4
 c.SEZ('1.4', 'Il computer non ha contesto: serve un linguaggio formale', 'languages'),
 c.DOM(2),
 c.SC('F1.4.1', 'Una frase, due significati'),
 {'tipo': 'punti', 'titolo': 'Il linguaggio naturale è ambiguo', 'msg': 'Chi ascolta sceglie il significato giusto grazie al contesto', 'punti': [
   ['message-circle', 'La stessa frase può avere **più significati**'],
   ['map-pin', 'Chi ascolta usa il **contesto** e il buon senso, senza accorgersene'],
   ['cpu', 'Un computer **non ha né l’uno né l’altro**: non può «capire che cosa si intendeva»']]},
 {'tipo': 'tessere', 'titolo': 'Ambiguità nelle parole piccole', 'msg': 'Le ritroveremo nel modulo', 'tessere': [
   ['split', '«o»', 'verifica o interrogazione: una sola, o tutte e due?'],
   ['arrow-right', '«se»', 'se finisci i compiti puoi uscire: e se non li finisci?'],
   ['users', '«tutti… non»', 'nessuno ha fatto i compiti, o non tutti?']]},
 {'tipo': 'punti', 'titolo': 'Il linguaggio formale', 'msg': 'Ogni frase si scrive in modi stabiliti e ha un solo significato', 'punti': [
   ['code', 'Come **Python**, che non accetta una riga «più o meno» giusta'],
   ['book-open', 'La **logica** è il linguaggio formale con cui si scrivono fatti e regole'],
   ['pen-line', '**Formalizzare**: tradurre una frase nella logica'],
   ['database', 'Serve a **rappresentare** la conoscenza e ad **aumentarla** con l’inferenza']]},
 {'tipo': 'punti', 'titolo': 'Wittgenstein e la frase come immagine', 'msg': 'Una proposizione è un’immagine dei fatti (1921)', 'punti': [
   ['book', 'Nel *Tractatus* (1921): la frase **ripete la disposizione delle cose**'],
   ['car', 'L’idea: un incidente ricostruito in tribunale con **automobiline e pupazzi**'],
   ['database', 'Una base di conoscenza fa lo stesso: **un’immagine del mondo fatta di simboli**'],
   ['quote', '«I limiti del mio linguaggio significano i limiti del mio mondo»']],
  'foto': c.FOBOX('1.4', 'Ludwig Wittgenstein')},
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
