# Slide di Presenta in aula · Capitolo 1 · Che cos'è l'informatica (contenuti dal PDF «Prezi intro info», non dal Word)
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
from capitolo_01 import I, COMPUTER, MODO, modo
configura(modulo='Introduzione a informatica ed AI')
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

def inq(d, m):   # inquadratura nelle slide: frammento #alto, #intera, #cornice… letto dal CSS del capitolo
    if m: d['src'] += '#' + m
    return d
def FO(nome, tit, ext=None, alt=None, m=None): return inq(F(I(nome), tit, alt or tit), m or MODO.get(nome))
def PC(i): f, t, a = COMPUTER[i][:3]; return inq(F(f, t, a), modo(f))

TITOLO = 'Che cos’è l’informatica'
S = [
 {'tipo': 'copertina', 'titolo': TITOLO, 'sotto': 'Prima di parlare di intelligenza artificiale: che cosa studia l’informatica e che cos’è un computer.',
  'indice': [['1.1', 'Che cos’è l’informatica'], ['1.2', 'Dati, informazioni e conoscenza'], ['1.3', 'Che cosa significa elaborare'], ['1.4', 'Che cos’è un computer'],
             ['1.5', 'Breve storia dei computer'], ['1.6', 'Come parlare con un computer']], 'foto': F(COPERTINA, '', '')},
 {'tipo': 'domanda', 'testo': 'Che cosa vi viene in mente se vi dico «informatica»? E che cosa studia, secondo voi, chi studia informatica?',
  'risposta': 'Non solo computer, programmi e internet: l’informatica studia come si trattano le **informazioni**.'},
 # 0.1
 {'tipo': 'sezione', 'num': '1.1', 'titolo': 'Che cos’è l’informatica', 'sotto': 'Informazione automatica: la scienza che elabora le informazioni', 'icona': 'cpu'},
 {'tipo': 'punti', 'titolo': 'Informatica', 'msg': 'Informazione + automatica', 'punti': [
   ['file-text', 'Si occupa della **rappresentazione** delle informazioni'],
   ['folder-tree', 'Della loro **organizzazione**'],
   ['cpu', 'E della loro **elaborazione automatica**'],
   ['puzzle', 'Per **risolvere problemi**'],
   ['list-checks', 'Attraverso la creazione e l’uso di **algoritmi**']]},
 {'tipo': 'punti', 'titolo': 'Dijkstra e il telescopio', 'msg': 'Il computer è lo strumento, l’informatica è la scienza', 'punti': [
   ['quote', '«L’informatica non riguarda i **computer** più di quanto l’**astronomia** riguardi i **telescopi**»'],
   ['telescope', 'Il telescopio serve a **studiare il cielo**: non è la scienza del cielo'],
   ['cpu', 'Il computer serve a **trattare le informazioni**: è lo strumento dell’informatica']],
  'foto': FO('dijkstra', 'Edsger Dijkstra (1930–2002)', 'jpg')},
 {'tipo': 'punti', 'titolo': 'Che cosa non è', 'msg': 'Tante cose utili, ma non sono l’informatica', 'punti': [
   ['wrench', '**Montare o smontare** computer, «smanettare» con i dispositivi'],
   ['package', '**Installare o usare** pacchetti software, navigare su internet'],
   ['code', 'Conoscere tanti **linguaggi** di programmazione'],
   ['wifi', '**Configurare** reti Wi-Fi o router'],
   ['smartphone', 'Essere esperti di **social media** o di piattaforme digitali']],
  'foto': FO('meme', 'Riparare computer? Non è informatica')},
 {'tipo': 'punti', 'titolo': 'Una scienza', 'msg': 'Come la biologia e la fisica', 'punti': [
   ['sigma', '**Teorie, modelli e principi formali** di tipo matematico, utili anche alle altre scienze'],
   ['flask-conical', '**Metodo scientifico**: ipotesi, esperimenti, conclusioni che si possono **ripetere e verificare**'],
   ['layers', '**Progresso cumulativo**: si parte dalle conoscenze esistenti per migliorarle']]},
 {'tipo': 'foto', 'titolo': 'La mappa dell’informatica', 'msg': 'Dalla teoria alle applicazioni di tutti i giorni', 'foto': [FO('mappa', 'Map of Computer Science', 'jpg')]},
 # 0.2
 {'tipo': 'sezione', 'num': '1.2', 'titolo': 'Dati, informazioni e conoscenza', 'sotto': 'Tre livelli da non confondere', 'icona': 'database'},
 {'tipo': 'tessere', 'titolo': 'Tre livelli', 'msg': 'Dai valori grezzi al significato', 'tessere': [
   ['binary', 'Dati', 'Valori alfanumerici **oggettivi**, in forma grezza e non organizzata'],
   ['table', 'Informazioni', 'Dati **elaborati e organizzati**, con un contesto e un significato'],
   ['lightbulb', 'Conoscenza', 'Il **significato** che diamo alle informazioni, secondo le nostre esperienze']]},
 {'tipo': 'foto', 'titolo': 'Dai punti ai collegamenti', 'msg': 'Sparsi, organizzati, collegati', 'foto': [FO('dati', 'Data, information, knowledge')]},
 {'tipo': 'punti', 'titolo': 'Esempio: i voti', 'msg': 'Da un elenco di numeri a una decisione', 'punti': [
   ['list-ordered', '**Dati**: 4, 6, 7, 8, 5. Da soli non dicono molto'],
   ['calculator', '**Informazione**: «il voto medio del quadrimestre è 6»'],
   ['target', '**Conoscenza**: «posso farmi interrogare per ottenere un voto più alto»'],
   ['user', 'La conoscenza è **soggettiva**: per qualcuno 6 è una buona media da mantenere']]},
 {'tipo': 'tabella', 'titolo': 'Esercizio: le temperature', 'msg': 'Che cosa si ricava da questi dati?', 'righe': [
   ['Città', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'],
   ['Milano', '15 °C', '17 °C', '16 °C', '14 °C', '18 °C'],
   ['Torino', '20 °C', '22 °C', '21 °C', '19 °C', '23 °C'],
   ['Roma', '18 °C', '19 °C', '20 °C', '17 °C', '21 °C']]},
 {'tipo': 'domanda', 'testo': 'Informazioni: qual è la temperatura media di ogni città, il giorno più caldo, la città più calda e quella più fredda? Conoscenza: dove andreste la prossima settimana e perché?',
  'risposta': 'Medie: **Milano 16 °C, Torino 21 °C, Roma 19 °C**. Giorno più caldo: il **venerdì** ovunque. Massima: Torino, 23 °C. Minima: Milano, 14 °C (giovedì). Chi vuole il caldo sceglie Torino, chi vuole il fresco Milano: la scelta è **soggettiva**.'},
 {'tipo': 'punti', 'titolo': 'Manipolare le informazioni', 'msg': 'Un’agenzia vuole far sembrare Torino la meta migliore', 'punti': [
   ['megaphone', '«Torino è la meta ideale! Milano ha temperature **bassissime (14 °C)**, Roma un clima **incerto**»'],
   ['zoom-in', '**Esagerazione**: la minima di Milano è un solo giorno, non una media'],
   ['eye-off', '**Omissione**: Torino ha avuto anche una minima di 19 °C, Milano è fresca ma moderata'],
   ['scale', '**Confronto distorto**: si cita la massima di Torino come se fosse sempre così']]},
 {'tipo': 'tessere', 'titolo': 'Oggettivo e soggettivo', 'msg': 'Dove sta l’oggettività', 'tessere': [
   ['binary', 'Dati', '**Oggettivi**: sono rilevazioni di valori grezzi'],
   ['table', 'Informazioni', '**Dovrebbero** esserlo, ma si possono **interpretare in modo manipolativo**'],
   ['lightbulb', 'Conoscenza', '**Soggettiva**: coinvolge le interpretazioni personali']]},
 # 0.3
 {'tipo': 'sezione', 'num': '1.3', 'titolo': 'Che cosa significa elaborare', 'sotto': 'Dati grezzi dentro, informazioni fuori', 'icona': 'arrow-right-left'},
 {'tipo': 'punti', 'titolo': 'Elaborare', 'msg': 'Dai dati grezzi alle informazioni', 'punti': [
   ['download', 'Il computer prende in **input** dati grezzi'],
   ['settings', 'Li **manipola** secondo una serie di istruzioni: un **algoritmo**'],
   ['upload', 'Fornisce in **output** informazioni significative'],
   ['calculator', 'Può essere logica o aritmetica, semplice o molto complessa']]},
 {'tipo': 'schema', 'titolo': 'Input, process, output', 'msg': 'Lo schema di ogni elaborazione', 'sel': '#s-ipo'},
 {'tipo': 'foto', 'titolo': 'Elaborazioni semplici e complesse', 'msg': 'Una somma, un grafico, un rendering 3D', 'aClic': True,
  'foto': [FO('es-somma', 'Somma di due numeri'), FO('es-grafico', 'Un grafico statistico'), FO('es-3d', 'Rendering 3D di una teiera')]},
 {'tipo': 'domanda', 'testo': 'Quando scrivete un messaggio sul telefono e premete «invia», qual è l’input, qual è il processo e qual è l’output?',
  'risposta': 'Input: il testo e il destinatario. Processo: il telefono lo codifica e lo spedisce in rete. Output: il messaggio che compare sullo schermo di chi lo riceve.'},
 # 0.4
 {'tipo': 'sezione', 'num': '1.4', 'titolo': 'Che cos’è un computer', 'sotto': 'Una macchina che elabora informazioni', 'icona': 'laptop'},
 {'tipo': 'punti', 'titolo': 'Computer', 'msg': 'Letteralmente «colui che computa»', 'punti': [
   ['languages', 'In italiano si dice anche **elaboratore** o **calcolatore**'],
   ['cog', 'È una **macchina** in grado di elaborare informazioni'],
   ['bot', 'Lo fa **in modo automatico**, senza intervento dell’uomo'],
   ['calculator', 'Sa eseguire solo **pochi tipi di semplici operazioni** logico-matematiche']],
  'foto': FO('cane', 'Usare un calcolatore')},
 {'tipo': 'tessere', 'titolo': 'Le caratteristiche', 'msg': 'Perché i computer sono così utili', 'tessere': [
   ['zap', 'Velocità', 'Tantissimi dati in pochissimo tempo'],
   ['target', 'Precisione', 'Compiti ripetitivi senza errori né stanchezza'],
   ['shield-check', 'Affidabilità', 'Lo stesso risultato a ogni esecuzione'],
   ['shapes', 'Versatilità', 'Compiti e funzioni di ogni tipo'],
   ['bot', 'Automazione', 'Elaborano senza intervento umano']]},
 {'tipo': 'foto', 'titolo': 'Computer da scrivania e da tasca', 'msg': 'Quelli che conosciamo meglio', 'aClic': True, 'foto': [PC(0), PC(1), PC(2)]},
 {'tipo': 'foto', 'titolo': 'Giochi, telefoni e orologi', 'msg': 'Anche questi sono computer', 'aClic': True, 'foto': [PC(3), PC(4), PC(5)]},
 {'tipo': 'foto', 'titolo': 'In casa e in rete', 'msg': 'Smart TV e server: computer che non sembrano computer', 'aClic': True, 'foto': [PC(6), PC(7)]},
 {'tipo': 'foto', 'titolo': 'I più potenti', 'msg': 'Supercomputer e computer quantistici', 'aClic': True, 'foto': [PC(8), PC(9)]},
 {'tipo': 'domanda', 'testo': 'Quanti computer avete addosso o nello zaino in questo momento? E in casa?',
  'risposta': 'Molti più di quanti ne contiamo: telefono, orologio, cuffie, console, televisore, router, elettrodomestici… **ogni macchina che elabora informazioni è un computer**.'},
 # 0.5
 {'tipo': 'sezione', 'num': '1.5', 'titolo': 'Breve storia dei computer', 'sotto': 'Dall’abaco a ChatGPT', 'icona': 'history'},
 {'tipo': 'storia', 'titolo': 'L’abaco', 'anno': 'Antichità', 'foto': FO('abaco', 'Un abaco', 'png'), 'punti': [
   ['calculator', 'Il bisogno di **contare** è antichissimo: Babilonesi, Greci, Romani, Cinesi'],
   ['grid-3x3', 'Palline su aste: ogni asta è una **cifra** (unità, decine, centinaia)'],
   ['user', 'Il calcolo lo fa ancora la **persona**: l’abaco la aiuta a non perdere il conto']]},
 {'tipo': 'storia', 'titolo': 'La Pascalina', 'anno': '1642', 'foto': FO('pascalina', 'La Pascalina', 'png', m='cornice'), 'punti': [
   ['user', '**Blaise Pascal**, a 19 anni, la costruisce per aiutare il padre con i conti delle tasse'],
   ['cog', 'Dentro ci sono **ruote dentate**, una per ogni cifra'],
   ['repeat', 'Il **riporto automatico**: dopo il 9, la ruota fa avanzare di uno scatto quella accanto']]},
 {'tipo': 'storia', 'titolo': 'Babbage e Ada Lovelace', 'anno': 'Ottocento', 'foto': FO('macchina-analitica', 'La macchina analitica', 'png', m='cornice'), 'punti': [
   ['table', 'Le tabelle di numeri calcolate a mano sono **piene di errori**'],
   ['cog', 'Babbage progetta la macchina **analitica**: segue istruzioni lette da **schede perforate**'],
   ['cpu', 'Un «magazzino» e un «mulino»: **memoria** e **processore**, come oggi'],
   ['code', '**Ada Lovelace** scrive il primo **programma**: è la prima programmatrice']]},
 {'tipo': 'storia', 'titolo': 'Turing e il Colossus', 'anno': '1936–1945', 'foto': FO('colossus', 'Il Colossus', m='cornice'), 'punti': [
   ['book-open', 'Nel **1936** Turing immagina la **macchina di Turing**, modello di ogni computer'],
   ['lock-open', 'In guerra, a Bletchley Park, aiuta a **decifrare Enigma**'],
   ['cpu', 'Tommy Flowers costruisce il **Colossus**, uno dei primi computer **elettronici**']]},
 {'tipo': 'storia', 'titolo': 'I calcolatori umani', 'anno': '’50 – ’60', 'foto': FO('human-computers', 'Human computers', m='cornice'), 'punti': [
   ['building', 'I primi computer occupano **intere stanze**: solo università, governi e grandi aziende'],
   ['users', '«Computer» era un **lavoro**: persone, spesso **donne**, che calcolavano a mano'],
   ['rocket', '**Katherine Johnson** calcola le traiettorie dei voli spaziali («Il diritto di contare»)']]},
 {'tipo': 'storia', 'titolo': 'Il personal computer', 'anno': '’70 – ’80', 'foto': FO('altair', 'IBM PC (1981)', m='cornice'), 'punti': [
   ['microchip', 'Il **transistor** (1947), poi il **microprocessore** (1971): un processore in un chip'],
   ['monitor', 'Nascono i **personal computer**: Apple I (1976) e IBM PC (1981)'],
   ['code', 'Si diffondono i linguaggi ad alto livello: *Fortran*, *COBOL*, *C*']]},
 {'tipo': 'foto', 'titolo': 'Oggi (e domani)', 'msg': 'Computer onnipresenti: la potenza è esplosa e il mondo è connesso', 'aClic': True,
  'foto': [FO('robot', 'Robotica'), FO('cervello', 'Intelligenza artificiale'), FO('cloud', 'Cloud computing')]},
 {'tipo': 'foto', 'titolo': 'Internet of Things', 'msg': 'Dal cloud agli oggetti di casa', 'foto': [FO('iot', 'Internet of Things')]},
 {'tipo': 'domanda', 'testo': 'Che cosa è cambiato di più in questa storia: la dimensione dei computer, la loro potenza o chi li può usare?',
  'risposta': 'Tutte e tre, e insieme: computer più **piccoli**, più **potenti** e **per tutti** hanno portato l’informatica in ogni attività.'},
 # 0.6
 {'tipo': 'sezione', 'num': '1.6', 'titolo': 'Come parlare con un computer', 'sotto': 'Tre linguaggi e quattro elementi', 'icona': 'languages'},
 {'tipo': 'domanda', 'testo': 'Se un computer sa fare solo operazioni semplicissime, in che lingua gli date le istruzioni?',
  'risposta': 'Non in italiano: serve una lingua **senza ambiguità**. Le prossime slide ne confrontano tre.'},
 {'tipo': 'tabella', 'titolo': 'Tre linguaggi', 'msg': 'Dal più umano al più vicino alla macchina', 'righe': [
   ['Linguaggio', 'Che cos’è', 'Caratteristiche'],
   ['Naturale', 'Si è evoluto tra gli esseri umani: italiano, inglese, spagnolo…', 'Ricco ma ambiguo, ridondante, con figure retoriche e ironia'],
   ['Macchina', 'Quello dei programmi che il computer esegue', 'Solo 0 e 1; accesso diretto alla memoria; comandi semplici; legato al calcolatore'],
   ['Di programmazione', 'Linguaggio artificiale e formale per scrivere algoritmi', 'Leggibile per l’uomo, portabile, senza i problemi del naturale']]},
 {'tipo': 'schema', 'titolo': 'Due modi di comunicare', 'msg': 'Parole per noi, sequenze di 0 e 1 per il computer', 'sel': '#s-lingue'},
 {'tipo': 'codice', 'titolo': 'Python', 'msg': 'Un linguaggio di programmazione a metà strada', 'html': evidenzia('\n'.join([
   'def add_two_numbers(num1, num2):', '    return num1 + num2', '', "print('The sum is', add_two_numbers(3, 5))", '# The sum is 8'])),
  'note': [['user', 'Si legge quasi come **inglese**'], ['cpu', 'Il computer lo **traduce in linguaggio macchina** (solo 0 e 1)'], ['check', 'Ogni istruzione ha **un solo significato**']]},
 {'tipo': 'tessere', 'titolo': 'Gli elementi del linguaggio', 'msg': 'Ogni linguaggio ha quattro livelli di regole', 'tessere': [
   ['a-large-small', 'Alfabeto', 'I **simboli** ammessi: a, M, 2, !'],
   ['book-a', 'Lessico', 'Le **parole** ammesse: cane, quadro, twittare'],
   ['workflow', 'Sintassi', 'Le **frasi** ammesse: come si combinano le parole'],
   ['message-circle', 'Semantica', 'Il **significato** di parole e frasi']]},
 {'tipo': 'tabella', 'titolo': 'Alfabeto e lessico', 'msg': 'Prima i simboli, poi le parole', 'righe': [
   ['Elemento', 'Corretti', 'Errati'],
   ['Alfabeto: simboli ammessi', 'a, M, p, !, 2', 'ç, ñ, ∞, #, µ'],
   ['Lessico: vocaboli ammessi', 'cane, quadro, twittare, sottone', 'hello, melpo, streaming, déjà-vu']]},
 {'tipo': 'tabella', 'titolo': 'Sintassi e semantica', 'msg': 'Prima le frasi, poi il significato', 'righe': [
   ['Elemento', 'Corretti', 'Errati'],
   ['Sintassi: frasi ammesse', 'studio informatica; sono andato al mare; zitto!; la mamma mangia un quadro', 'andata mamma mare al; !sono andato al mare!; casa libro mare casa'],
   ['Semantica: significato', 'questa è una mela (indicando una mela); la mamma mangia una mela; adoro la pesca!', 'questa è una mela (indicando una pera); la mamma mangia un quadro; il mio cane pesca']]},
 {'tipo': 'foto', 'titolo': 'I quattro elementi', 'msg': 'Dai simboli al significato', 'aClic': True,
  'foto': [FO('alfabeto', 'Alfabeto'), FO('albero', 'Sintassi: l’albero di «Colorless green ideas sleep furiously»'), FO('semantica', 'Semantica')]},
 {'tipo': 'domanda', 'testo': '«La mamma mangia un quadro»: che cosa funziona in questa frase e che cosa no? Alfabeto, lessico, sintassi o semantica?',
  'risposta': 'Alfabeto, lessico e **sintassi** vanno bene; è sbagliata la **semantica**: un quadro non si mangia. Un computer controlla le regole, non il buon senso: per questo servono linguaggi **formali**.'},
]

if __name__ == '__main__':
    scrivi_aula(os.path.join(OUT, 'assets', 'capitolo-01-aula.js'), '01', TITOLO, fix(S))
