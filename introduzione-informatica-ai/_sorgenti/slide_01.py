# Slide di Presenta in aula · Capitolo 1 · L’IA nella vita di tutti i giorni
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Introduzione a informatica ed AI')
c = Capitolo(1)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Dove si incontra l’IA, che cosa sa fare e che cosa non è.'),
 c.DOM(0),
 # 1.1
 c.SEZ('1.1', 'In una giornata normale lavora per te, spesso di nascosto', 'smartphone'),
 c.AN('F1.1.1', 'Una giornata piena di IA'),
 {'tipo': 'foto', 'titolo': 'La mattina', 'msg': 'Tre momenti prima di arrivare a scuola',
  'foto': [c.FO('F1.1.2', 'Face ID: lo sblocco con il volto'), c.FO('F1.1.3', 'Siri: l’assistente vocale'), c.FO('F1.1.4', 'Google Maps: la navigazione')]},
 {'tipo': 'foto', 'titolo': 'A scuola e nel pomeriggio', 'msg': 'Traduzioni, video consigliati e volti riconosciuti',
  'foto': [c.FO('F1.1.5', 'Google Traduttore'), c.FO('F1.1.6', 'YouTube: i video consigliati'), c.FO('F1.1.7', 'La fotocamera dello smartphone')]},
 {'tipo': 'foto', 'titolo': 'La sera', 'msg': 'Il filtro che butta via la posta indesiderata e il chatbot per i compiti',
  'foto': [c.FO('F1.1.8', 'Gmail: la cartella Spam'), c.FO('F1.1.9', 'ChatGPT: una conversazione')]},
 {'tipo': 'foto', 'titolo': 'Roomba, Tesla, qXR', 'msg': 'Tre esempi fuori dalla giornata di uno studente',
  'foto': [c.FO('F1.1.10', 'Roomba: l’aspirapolvere robot'), c.FO('F1.1.11', 'Una Tesla in guida assistita'), c.FO('F1.1.12', 'qXR: una radiografia analizzata')]},
 # 1.2
 c.SEZ('1.2', 'Trasformare ciò che si vede o si sente in un’etichetta o in un testo', 'scan-eye'),
 {'tipo': 'tessere', 'titolo': 'Riconoscere', 'msg': 'L’IA trasforma ciò che vede o sente in un’etichetta o in un testo', 'tessere': [
   ['scan-eye', 'Immagini e volti', 'Google Lens: «è un’orchidea»'], ['music', 'Suoni e musica', 'Shazam: titolo e autore'], ['mic', 'La voce', 'sottotitoli automatici: «la frase è questa»']]},
 {'tipo': 'foto', 'titolo': 'Riconoscere in tre app', 'msg': 'Una pianta, una canzone, una voce',
  'foto': [c.FO('F1.2.1', 'Google Lens: una pianta'), c.FO('F1.2.2', 'Shazam: una canzone'), c.FO('F1.2.3', 'Sottotitoli automatici di YouTube')]},
 # 1.3
 c.SEZ('1.3', 'L’IA non si limita a leggere le parole: le elabora', 'languages'),
 {'tipo': 'punti', 'titolo': 'Capire e produrre linguaggio', 'msg': 'Elabora le parole, non solo le legge', 'punti': [
   ['captions', '**Trascrive** quello che si dice, anche in una videochiamata'], ['languages', '**Traduce** un testo da una lingua all’altra'],
   ['file-text', '**Riassume** una riunione in un testo da rileggere'], ['message-circle', '**Risponde** a una domanda']]},
 {'tipo': 'foto', 'titolo': 'Sottotitoli e trascrizioni', 'msg': 'Il testo compare in tempo reale e una riunione diventa un riassunto',
  'foto': [c.FO('F1.3.1', 'Google Meet: i sottotitoli in tempo reale'), c.FO('F1.3.2', 'Otter.ai: la trascrizione di una riunione')]},
 {'tipo': 'punti', 'titolo': 'Perché il linguaggio è difficile', 'msg': 'Per una macchina il significato dipende dal contesto', 'punti': [
   ['quote', 'Prendi la frase **«Ho visto Marco con il binocolo»**'], ['circle-help', 'Non si capisce **chi abbia il binocolo**'],
   ['brain', 'Una persona lo capisce solo da **ciò che sa della situazione**']]},
 # 1.4
 c.SEZ('1.4', 'Da ciò che è già successo a ciò che succederà', 'trending-up'),
 {'tipo': 'punti', 'titolo': 'Prevedere e consigliare', 'msg': 'È una stima, non una certezza', 'punti': [
   ['history', 'Parte da **ciò che è già successo**: acquisti, video visti, dati del tempo'], ['sparkles', 'Stima **che cosa succederà** o che cosa ti piacerà'],
   ['circle-x', 'Per questo **ogni tanto sbaglia**']],
  'foto': c.FO('F1.4.1', 'Amazon: «Acquistati insieme di frequente»')},
 {'tipo': 'punti', 'titolo': 'Le app meteo', 'msg': 'Funzionano così anche loro', 'punti': [
   ['cloud', 'Usano i **modelli fisici dell’atmosfera**'], ['cpu', 'E in più **modelli di IA** per stimare il tempo delle prossime ore']],
  'foto': c.FO('F1.4.2', 'Un’app meteo sul telefono')},
 c.SC('F1.4.3', 'L’antifrode della carta di pagamento'),
 # 1.5
 c.SEZ('1.5', 'Provare le mosse in anticipo e scegliere la migliore', 'swords'),
 {'tipo': 'punti', 'titolo': 'Giocare e decidere', 'msg': 'L’IA prova le mosse in anticipo e sceglie quella dalle conseguenze migliori', 'punti': [
   ['dices', 'I giochi sono il **banco di prova ideale**: regole chiare e un vincitore'], ['crown', '**Stockfish**, un programma di scacchi, non lo batte più nessun giocatore umano'],
   ['smartphone', 'Si può installare **sul telefono**']],
  'foto': c.FO('F1.5.1', 'Stockfish: una partita analizzata')},
 c.AN('F1.5.2', 'Il computer prova le mosse'),
 {'tipo': 'punti', 'titolo': 'Non solo giochi', 'msg': 'Anche una macchina in strada deve decidere', 'punti': [
   ['car', 'I taxi senza conducente di **Waymo** circolano in diverse città degli Stati Uniti'], ['gauge', 'Decidono di continuo **quando frenare, svoltare e dare la precedenza**']],
  'foto': c.FO('F1.5.3', 'Waymo: un taxi senza conducente')},
 # 1.6
 c.SEZ('1.6', 'Dalla richiesta scritta a un contenuto nuovo', 'wand-sparkles'),
 {'tipo': 'punti', 'titolo': 'Creare', 'msg': 'L’IA generativa produce un contenuto nuovo invece di cercarne uno esistente', 'punti': [
   ['pen-line', 'Parte da una **richiesta scritta**'], ['music', 'Su **Suno** «una canzone jazz sull’annaffiare le piante» diventa una canzone che nessuno aveva mai scritto'],
   ['message-circle', 'Lo stesso vale per i **testi**, come le risposte del chatbot']],
  'foto': c.FO('F1.6.1', 'Suno: la richiesta scritta')},
 {'tipo': 'punti', 'titolo': 'Midjourney', 'msg': 'Immagini a partire da una descrizione', 'punti': [
   ['pen-line', 'Scrivi **che cosa vuoi vedere**'], ['image', 'Il sistema produce **quattro immagini nuove**']],
  'foto': c.FO('F1.6.2', 'Midjourney: richiesta e immagini')},
 # 1.7
 c.SEZ('1.7', 'Che cosa l’IA non è', 'circle-help'),
 c.DOM(1),
 c.WG('iaonon', 'È IA o non è IA?'),
 {'tipo': 'tessere', 'titolo': 'Tre idee sbagliate', 'msg': 'Che cosa l’IA non è', 'tessere': [
   ['bot', 'Non è un robot', 'il robot è una macchina con un corpo; l’IA è un programma'], ['brain', 'Non è un cervello', 'può svolgere i compiti in modo meccanico, seguendo ordini precisi'],
   ['circle-help', 'Non sa tutto', 'è brava in un compito e sbaglia fuori da quello']],
  'nota': 'Face ID non sa tradurre e Stockfish non sa riconoscere un volto.'},
 c.ERR(0),
 c.ERR(1),
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
