# Slide di Presenta in aula · Capitolo 7 · Dall’algoritmo all’IA che impara
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Introduzione a informatica ed AI')
c = Capitolo(7)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
# le foto delle eccezioni (5.1) stanno dentro l’animazione F7.1.11; il mosaico dei film è la slide con le quattro foto
c.usati['fig'].update(['F7.1.%d' % i for i in range(2, 11)] + ['F7.5.8'])

S = [
 c.COP('Alcuni problemi non si riescono a scrivere come regole: per risolverli si cambia strada e si fa imparare il sistema dagli esempi.'),
 c.DOM(0),
 # 5.1
 c.SEZ('7.1', 'Le regole non bastano mai', 'cat'),
 {'tipo': 'punti', 'titolo': 'Riconoscere un gatto', 'msg': 'Facile per noi, impossibile da descrivere con regole', 'punti': [
   ['eye', 'Per una persona è **facilissimo**'],
   ['list-checks', 'Ma non si riesce a **descriverlo con regole precise**'],
   ['cpu', 'Un computer tradizionale **funziona solo con regole precise** (capitolo 5)'],
   ['triangle-alert', 'Per ogni regola si trovano **eccezioni di due tipi**: animali che sembrano gatti e non lo sono, gatti che non la rispettano']],
  'foto': c.FO('F7.1.1', 'Un gatto')},
 c.AN('F7.1.11', 'Provare con le regole'),
 {'tipo': 'punti', 'titolo': 'Migliaia di regole', 'msg': 'Serve un altro modo', 'punti': [
   ['plus', 'A ogni foto in più c’è **un’altra eccezione**'],
   ['files', 'Servirebbero **migliaia di regole**'],
   ['circle-x', 'E **non basterebbero** lo stesso'],
   ['route', 'Serve **un altro modo** di risolvere il problema']]},
 # 5.2
 c.SEZ('7.2', 'Mostrare tanti esempi invece di scrivere le regole', 'graduation-cap'),
 {'tipo': 'punti', 'titolo': 'Imparare dagli esempi', 'msg': 'Come impara un bambino', 'punti': [
   ['images', 'Si **mostrano al sistema tanti esempi**'],
   ['search', 'Gli si lascia **trovare da solo ciò che li distingue**'],
   ['baby', 'Un bambino impara che cos’è un cane **vedendo tanti cani**, non ascoltando un elenco di caratteristiche']]},
 {'tipo': 'punti', 'titolo': 'Il modello', 'msg': 'Che cosa il sistema ricava dagli esempi', 'punti': [
   ['brain', 'Il **modello** è l’insieme di schemi (*pattern*) con cui giudica i casi nuovi'],
   ['dumbbell', '**Addestrare** un modello vuol dire fargli imparare dagli esempi']]},
 c.AN('F7.2.1', 'Imparare dagli esempi'),
 {'tipo': 'punti', 'titolo': 'Imparare non è capire', 'msg': 'Il sistema trova schemi, non sa che cos’è un gatto', 'punti': [
   ['scan-search', 'Trova **schemi che distinguono** i gatti dai non-gatti'],
   ['circle-help', 'Ma non «sa» che cos’è un gatto'],
   ['door-closed', 'Come la persona nella **stanza cinese** (capitolo 4)']]},
 c.ERR(0),
 # 5.3
 c.SEZ('7.3', 'Regole scritte o regole ricavate dagli esempi', 'scale'),
 c.DOM(1),
 {'tipo': 'confronto', 'titolo': 'Due modi di risolvere lo stesso problema', 'msg': 'Chi scrive le regole', 'a': {'icona': 'user', 'titolo': 'Algoritmi tradizionali', 'righe': ['• **regole scritte da una persona**', '• il programmatore dice come arrivare al risultato']},
  'b': {'icona': 'brain', 'titolo': 'Machine Learning', 'tono': 'buono', 'righe': ['• **regole ricavate dagli esempi**', '• in italiano, apprendimento automatico']}},
 {'tipo': 'tabella', 'titolo': 'Come funzionano', 'msg': 'Algoritmi tradizionali e Machine Learning a confronto', 'righe': [
   ['', 'Algoritmi tradizionali', 'Machine Learning'],
   ['Come si ottiene la soluzione', 'Regole scritte esplicitamente dal programmatore, con una logica ben definita', 'Impara schemi (*pattern*) dai dati di esempio e addestra un modello che sa generalizzare'],
   ['Su che cosa si basano', 'Sulle regole scritte dal programmatore', 'Sui dati. Tanti dati'],
   ['Approccio', '**Imperativo**: le istruzioni dicono come raggiungere l’obiettivo', '**Dichiarativo**: gli esempi descrivono com’è fatto l’obiettivo, il modello impara come raggiungerlo'],
   ['Dopo che sono scritti', 'Istruzioni fisse, salvo modifiche manuali', 'Possono aggiornare il modello da soli con nuovi dati o errori: più adattabili']]},
 {'tipo': 'tabella', 'titolo': 'Che cosa danno', 'msg': 'Risultato, problemi adatti ed esempio', 'righe': [
   ['', 'Algoritmi tradizionali', 'Machine Learning'],
   ['Risultato', '**Deterministico**: stesso ingresso, stesso risultato, fisso e prevedibile', '**Probabilistico**: nessun risultato garantito, ma la stima della soluzione più probabile'],
   ['Problemi adatti', 'Strutture medio-semplici e ben definite: ordinare un elenco, calcolare un’operazione', 'Schemi complessi e relazioni difficili da formalizzare: riconoscere una mela, prevedere l’esito di una partita'],
   ['Esempio: filtro antispam', 'Un elenco di parole vietate scritto da una persona', 'Migliaia di email spam e non spam da cui ricava gli indizi']]},
 c.AN('F7.3.1', 'Il filtro antispam in due modi'),
 # 5.4
 c.SEZ('7.4', 'Quattro termini, uno dentro l’altro', 'target'),
 {'tipo': 'punti', 'titolo': 'Quattro cerchi', 'msg': 'Ognuno è un caso particolare di quello che lo contiene', 'punti': [
   ['sparkles', '**IA**: il cerchio più grande'],
   ['graduation-cap', '**Apprendimento automatico**: dentro l’IA'],
   ['layers', '**Apprendimento profondo**: dentro l’apprendimento automatico'],
   ['image-plus', '**IA generativa**: il più piccolo']]},
 {'tipo': 'punti', 'titolo': 'IA · *Artificial Intelligence*', 'msg': 'Non dice come il sistema ci riesce', 'punti': [
   ['sparkles', 'Qualsiasi sistema che svolge **compiti che, svolti da una persona, richiederebbero intelligenza** (capitolo 4)'],
   ['user', 'Può riuscirci con **regole scritte a mano**, come i primi programmi di conversazione'],
   ['brain', 'Oppure **imparando dagli esempi**: sono tutte IA']]},
 {'tipo': 'punti', 'titolo': 'Apprendimento automatico · *Machine Learning*', 'msg': 'L’IA che impara dagli esempi', 'punti': [
   ['images', 'Si mostrano **molti esempi** e il sistema ne ricava un **modello**'],
   ['percent', 'Sui casi nuovi dà una risposta **probabile**'],
   ['mail', 'Il filtro antispam di Gmail (capitolo 3) funziona così'],
   ['circle-x', '**Non tutta l’IA è machine learning**: un sistema a regole scritte a mano è IA ma non impara']]},
 {'tipo': 'punti', 'titolo': 'Apprendimento profondo · *Deep Learning*', 'msg': 'Per i problemi più difficili, come immagini e voce', 'punti': [
   ['layers', 'Il modello è un sistema **molto grande, organizzato in molti livelli** («strati»)'],
   ['scan-eye', 'In una foto: i primi livelli colgono i **contorni**, poi le **forme**, infine l’**oggetto intero**'],
   ['network', 'Il nome tecnico è **rete neurale artificiale**: ne riparlerete più avanti nel corso'],
   ['flower-2', 'Google Lens (capitolo 3), che riconosce una pianta da una foto, è un esempio']]},
 {'tipo': 'punti', 'titolo': 'IA generativa · *Generative AI*', 'msg': 'Produce contenuti nuovi', 'punti': [
   ['circle-help', 'I sistemi visti finora **rispondono a una domanda**: «è spam?», «che pianta è?»'],
   ['wand-sparkles', 'Un sistema generativo **crea qualcosa**: testi, immagini, musica, programmi'],
   ['images', 'Di solito è deep learning con una grandissima quantità di esempi: ciò che produce **somiglia a ciò che ha visto**, senza essere in genere una copia'],
   ['music', 'Midjourney, Suno (capitolo 3) e i chatbot come ChatGPT sono IA generativa']]},
 {'tipo': 'punti', 'titolo': 'Come stanno insieme', 'msg': 'Vale in un verso solo', 'punti': [
   ['check', 'Un sistema di **IA generativa** è anche deep learning, machine learning e IA'],
   ['x', 'Non vale il contrario: un sistema a regole scritte a mano è IA ma **non machine learning**'],
   ['x', 'Un riconoscitore di immagini è deep learning ma **non genera nulla**']]},
 c.AN('F7.4.1', 'I quattro cerchi'),
 {'tipo': 'tabella', 'titolo': 'In sintesi', 'msg': 'I quattro termini, in italiano e in inglese', 'righe': [
   ['Italiano', 'Inglese', 'Che cos’è', 'Esempio'],
   ['Intelligenza artificiale (IA)', 'Artificial Intelligence (AI)', 'Tutto ciò che svolge compiti che richiederebbero intelligenza, anche con regole scritte a mano', 'I primi programmi di conversazione a regole'],
   ['Apprendimento automatico', 'Machine Learning (ML)', 'L’IA che impara dagli esempi invece di seguire regole scritte da una persona', 'Il filtro antispam di Gmail'],
   ['Apprendimento profondo', 'Deep Learning (DL)', 'Machine learning con sistemi molto grandi, organizzati in molti livelli', 'Google Lens che riconosce una pianta'],
   ['IA generativa', 'Generative AI (GenAI)', 'L’IA che produce contenuti nuovi: testi, immagini, suoni', 'Midjourney, Suno, i chatbot']]},
 # 5.5
 c.SEZ('7.5', 'Una cosa sola o qualsiasi cosa', 'footprints'),
 c.DOM(2),
 {'tipo': 'punti', 'titolo': 'Tre gradini', 'msg': 'Alcune IA fanno una cosa sola, altre, in teoria, qualsiasi cosa', 'punti': [
   ['circle-check', '**IA specializzata**: esiste oggi, secondo la visione più diffusa'],
   ['lightbulb', '**IA generale**: ipotetica'],
   ['rocket', '**Superintelligenza**: ipotetica']]},
 c.AN('F7.5.1', 'Tre gradini'),
 {'tipo': 'punti', 'titolo': 'IA specializzata · *Narrow AI*', 'msg': 'Una cosa sola, anche molto bene', 'punti': [
   ['target', 'In inglese *Narrow AI* (**ANI**), in italiano anche «IA debole»'],
   ['circle-x', 'Fuori dal suo compito **non sa fare nulla**'],
   ['crown', '**Stockfish** gioca a scacchi meglio di qualsiasi persona ma non sa riconoscere un volto'],
   ['scan-face', '**Face ID** riconosce i volti ma non sa tradurre; **Google Lens** riconosce le piante ma non sa giocare a scacchi']]},
 {'tipo': 'punti', 'titolo': 'IA generale · *AGI*', 'msg': 'Ipotetica: oggi non esiste un sistema che tutti riconoscano come tale', 'punti': [
   ['brain', '*Artificial General Intelligence*, in italiano anche «IA forte»'],
   ['list-checks', 'Saprebbe svolgere **qualsiasi compito intellettuale** che sa fare una persona'],
   ['graduation-cap', 'E **imparare compiti nuovi**, come una persona']]},
 {'tipo': 'punti', 'titolo': 'Che cosa se ne dice oggi', 'msg': 'Non c’è una definizione di AGI su cui siano tutti d’accordo', 'punti': [
   ['calendar', 'Nel **2023** alcuni ricercatori di Google DeepMind propongono di classificare i sistemi in **livelli**'],
   ['eye', 'Guardano a **ciò che sanno fare**, non a come lo fanno'],
   ['crown', 'Per loro programmi come Stockfish sono già **superumani** nel loro compito'],
   ['message-circle', 'I chatbot sarebbero soltanto un’AGI **«emergente»**, al primo livello']]},
 {'tipo': 'punti', 'titolo': 'Jensen Huang, marzo 2026', 'msg': 'Il capo di Nvidia pensa che l’AGI sia stata raggiunta', 'punti': [
   ['mic', 'Lo ha detto in un podcast'],
   ['briefcase', 'Per lui AGI vuol dire un sistema capace di **fare il lavoro di una persona**, perfino di avviare un’azienda'],
   ['circle-x', 'Ma ha aggiunto che la probabilità che centomila agenti di IA costruiscano un’azienda come Nvidia è **zero**'],
   ['messages-square', 'Molti esperti hanno contestato sia l’affermazione sia la definizione']],
  'foto': c.FO('F7.5.2', 'Jensen Huang')},
 {'tipo': 'punti', 'titolo': 'Yann LeCun', 'msg': 'Anche l’intelligenza umana è piuttosto specializzata', 'punti': [
   ['award', 'Ricercatore premiato con il **Turing Award**, ex capo della ricerca sull’IA di Meta'],
   ['building-2', 'Ha lasciato l’azienda a fine 2025 e fondato a Parigi **AMI Labs**: a marzo 2026 ha raccolto oltre un miliardo di dollari'],
   ['brain', 'Preferisce parlare di «*Advanced Machine Intelligence*»'],
   ['bot', 'Secondo lui i chatbot di oggi **non sono una strada** verso l’intelligenza umana']],
  'foto': c.FO('F7.5.3', 'Yann LeCun')},
 {'tipo': 'punti', 'titolo': 'Misurare la «generalità»', 'msg': 'Per ora non c’è consenso', 'punti': [
   ['ruler', 'Esistono test per misurare quanto un sistema sia «generale»'],
   ['puzzle', '**ARC-AGI** misura con quanta efficienza un sistema impara compiti che non ha mai visto'],
   ['scale', 'Per ora **non c’è consenso** sul fatto che qualche sistema abbia raggiunto un’intelligenza generale a livello umano']]},
 {'tipo': 'punti', 'titolo': 'ASI', 'msg': 'Superintelligenza: come l’AGI, è ipotetica', 'punti': [
   ['rocket', '*Artificial Super Intelligence*'],
   ['crown', '**Supererebbe le persone in praticamente tutti i campi**'],
   ['circle-x', 'Nessun sistema del genere esiste']]},
 {'tipo': 'punti', 'titolo': 'Nella fantascienza', 'msg': 'IA generali e superintelligenze molto diverse da quelle reali', 'punti': [
   ['skull', '**Terminator** (1984): la rete Skynet decide di combattere gli esseri umani'],
   ['bot', '**Io, Robot** (2004): il sistema VIKI controlla i robot di una città'],
   ['heart', '**WALL·E** (2008): un piccolo robot spazzino prova sentimenti'],
   ['eye', '**2001: Odissea nello spazio** (1968): il computer HAL 9000 gestisce un’astronave e si rifiuta di obbedire']]},
 {'tipo': 'foto', 'titolo': 'Quattro film', 'msg': 'A colpo d’occhio: storie di fantasia', 'foto': [
   c.FO('F7.5.4', 'Terminator'), c.FO('F7.5.5', 'Io, Robot'), c.FO('F7.5.6', 'WALL·E'), c.FO('F7.5.7', '2001: Odissea nello spazio')]},
 {'tipo': 'punti', 'titolo': 'Racconti, non realtà', 'msg': 'Che cosa l’IA di oggi non ha', 'punti': [
   ['bot', 'Un **corpo da robot**'],
   ['target', '**Volontà proprie**'],
   ['heart', '**Sentimenti**'],
   ['book-open', 'Sono **racconti**, non descrizioni della realtà (capitolo 3, «Idee sbagliate sull’IA»)']]},
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
