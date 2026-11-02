# Slide di Presenta in aula · Capitolo 4 · Che cos’è l’intelligenza
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Introduzione a informatica ed AI')
c = Capitolo(4)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('Che cosa vuol dire essere intelligenti, e che cosa significa chiamarla «artificiale».'),
 c.DOM(0),
 # 2.1
 c.SEZ('4.1', 'Una definizione, e animali che la mettono alla prova', 'brain'),
 {'tipo': 'punti', 'titolo': 'Definire l’intelligenza', 'msg': 'Non esiste una definizione accettata da tutti', 'punti': [
   ['users', 'Una delle più citate è in una **dichiarazione del 1994 firmata da 52 ricercatori**'],
   ['brain', 'È una **capacità mentale generale**: ragionare, pianificare, risolvere problemi, pensare in modo astratto, imparare dall’esperienza'],
   ['book-open', '**Non si riduce a studiare sui libri**: è la capacità di capire ciò che ci circonda']]},
 {'tipo': 'tabella', 'titolo': 'Le capacità dell’intelligenza', 'msg': 'Che cosa significano e dove le usiamo ogni giorno', 'righe': [
   ['Capacità', 'Che cosa significa', 'Esempio quotidiano'],
   ['Ragionare', 'trarre conclusioni da ciò che si sa', 'capire dall’orario che l’autobus è già passato'],
   ['Pianificare', 'scegliere i passi per arrivare a uno scopo', 'organizzare una gita con trasporti e orari'],
   ['Risolvere problemi', 'trovare una strada quando quella solita è chiusa', 'cambiare percorso per un incidente'],
   ['Pensare in modo astratto', 'lavorare con idee e non solo con cose concrete', 'capire che “giustizia” non è un oggetto'],
   ['Imparare dall’esperienza', 'cambiare comportamento dopo un errore', 'non toccare più una pentola calda']]},
 {'tipo': 'punti', 'titolo': 'Non solo umana', 'msg': 'Anche alcuni animali risolvono problemi', 'punti': [
   ['bird', 'Il **corvo della Nuova Caledonia** si costruisce da solo piccoli ramoscelli adatti a pescare gli insetti nei buchi degli alberi'],
   ['fish', 'Il **polpo**, chiuso in un barattolo, riesce a svitare il tappo dall’interno e a uscire']]},
 {'tipo': 'foto', 'titolo': 'Corvo e polpo', 'msg': 'Osserva lo strumento del corvo e i tentacoli del polpo',
  'foto': [c.FO('F4.1.1', 'Un corvo della Nuova Caledonia con un ramoscello'), c.FO('F4.1.2', 'Un polpo che apre il tappo dall’interno')]},
 {'tipo': 'punti', 'titolo': 'Sembrare intelligenti non è esserlo', 'msg': 'Il cavallo Hans sapeva fare i calcoli?', 'punti': [
   ['calendar', 'Tra la fine dell’Ottocento e l’inizio del Novecento, in **Germania**'],
   ['user', 'L’insegnante **Wilhelm von Osten** poneva a Hans un’operazione'],
   ['hammer', 'Hans rispondeva **battendo lo zoccolo** il numero giusto di volte']],
  'foto': c.FO('F4.1.3', 'Hans con von Osten davanti alla lavagna, 1904')},
 {'tipo': 'punti', 'titolo': 'Hans non contava', 'msg': 'Osservava chi lo interrogava', 'punti': [
   ['calendar', 'Nel **1907** lo psicologo **Oskar Pfungst** scoprì come faceva'],
   ['eye', 'Hans osservava i **minimi movimenti involontari** di chi lo interrogava'],
   ['hand', 'Smetteva di battere quando li vedeva cambiare'],
   ['circle-x', 'Rispondeva giusto **solo se chi chiedeva conosceva la risposta** e Hans poteva vederlo']]},
 {'tipo': 'punti', 'titolo': 'Il pappagallo', 'msg': 'Ripetere una frase non vuol dire capirla', 'punti': [
   ['mic', 'I pappagalli **imitano le parole umane**'],
   ['circle-help', 'Ma ripetere una frase non vuol dire capirla'],
   ['quote', 'Per questo in italiano si dice **«ripetere come un pappagallo»**']],
  'foto': c.FO('F4.1.4', 'Un pappagallo cenerino')},
 {'tipo': 'punti', 'titolo': 'La stessa difficoltà', 'msg': 'Hans e il pappagallo pongono la stessa domanda', 'punti': [
   ['circle-help', 'Pur non essendo intelligenti **a nostro modo di vedere**, possono comunque essere ritenuti tali?'],
   ['bot', 'Ritroveremo la domanda, con le macchine, nel **capitolo 4**']]},
 # 2.2
 c.SEZ('4.2', 'L’intelligenza non è una sola capacità', 'puzzle'),
 c.DOM(1),
 {'tipo': 'punti', 'titolo': 'Le intelligenze multiple', 'msg': 'Secondo Howard Gardner (1983) l’intelligenza ha più forme', 'punti': [
   ['puzzle', 'Non è una sola capacità: ogni forma ha i suoi **punti di forza**'],
   ['calculator', 'Essere bravi in matematica è **una forma**, non l’unica'],
   ['smile', 'Chi va male in matematica **non è per questo stupido**'],
   ['layers', 'Le forme sono **otto**: sette nel 1983, la naturalistica aggiunta più tardi']]},
 {'tipo': 'tabella', 'titolo': 'Le otto intelligenze', 'msg': 'In che cosa si vedono e chi le mostra', 'righe': [
   ['Intelligenza', 'In che cosa si vede', 'Esempio'],
   ['Linguistica', 'usare bene le parole, parlando e scrivendo', 'una scrittrice, un avvocato'],
   ['Logico-matematica', 'ragionare con numeri, schemi e problemi', 'una matematica, un programmatore'],
   ['Spaziale', 'immaginare e orientarsi nello spazio', 'un architetto, una pilota'],
   ['Musicale', 'sentire e produrre ritmi e suoni', 'un musicista, una direttrice d’orchestra'],
   ['Corporeo-cinestetica', 'usare il corpo con precisione', 'un’atleta, una danzatrice, un chirurgo'],
   ['Interpersonale', 'capire gli altri e lavorare con loro', 'un’insegnante, un mediatore'],
   ['Intrapersonale', 'conoscere se stessi e le proprie emozioni', 'chi sa dire che cosa prova e perché'],
   ['Naturalistica', 'riconoscere e distinguere piante, animali e fenomeni naturali', 'un botanico, una guida naturalistica']]},
 c.AN('F4.2.1', 'Chi è più intelligente?'),
 c.ERR(0),
 # 2.3
 c.SEZ('4.3', 'Naturale e artificiale', 'bot'),
 {'tipo': 'confronto', 'titolo': 'Intelligenza naturale e artificiale', 'msg': 'Chi la possiede e come nasce',
  'a': {'icona': 'leaf', 'titolo': 'Naturale', 'righe': ['• è quella dei **viventi**', '• nasce con la vita', '• si sviluppa con l’**esperienza**']},
  'b': {'icona': 'cpu', 'titolo': 'Artificiale (IA)', 'tono': 'buono', 'righe': ['• è quella di **sistemi costruiti dalle persone**', '• si chiama IA un sistema che svolge compiti che, svolti da una persona, **richiederebbero intelligenza**']}},
 {'tipo': 'punti', 'titolo': 'Una definizione operativa', 'msg': 'Guarda che cosa il sistema fa, non che cosa è', 'punti': [
   ['eye', 'Conta **ciò che il sistema fa**'],
   ['circle-help', 'Se sia **davvero intelligente** o si limiti a sembrarlo, come Hans, non lo dice'],
   ['bot', 'È la domanda del **capitolo 4**']]},
 {'tipo': 'punti', 'titolo': 'Un esempio: Face ID', 'msg': 'Lo sblocco del telefono con il volto è IA', 'punti': [
   ['scan-face', '**Face ID** (capitolo 3) riconosce un volto fra tanti, anche con occhiali o barba'],
   ['user', 'Se lo facesse una persona, richiederebbe **percezione e memoria**'],
   ['circle-check', 'Per questo è **IA**, secondo la definizione operativa']]},
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
