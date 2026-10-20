# Slide di Presenta in aula · Capitolo 6 · Un po’ di storia
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Introduzione a informatica ed AI')
c = Capitolo(6)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('L’IA ha quasi settant’anni: idee antiche, grandi promesse, delusioni e, da pochi anni, un’esplosione.'),
 c.DOM(0, testo='Quando è nata l’IA? E il primo chatbot? E il primo veicolo a guida autonoma? Quando l’IA è diventata di dominio pubblico?'),
 # 6.1
 c.SEZ('6.1', 'Dagli automi al nome «intelligenza artificiale»', 'hourglass'),
 {'tipo': 'punti', 'titolo': 'Gli automi', 'msg': 'Dal Seicento all’Ottocento, macchine che imitano i gesti di una persona', 'punti': [
   ['cog', 'Per secoli si sono costruiti **automi**'],
   ['hand', 'Imitano i gesti di una persona, di solito **per spettacolo**'],
   ['pen-tool', 'Orologiai e artigiani facevano **scrivere, suonare o disegnare** piccole figure meccaniche']],
  'foto': c.FO('F6.1.1', 'Un automa del Settecento')},
 {'tipo': 'punti', 'titolo': 'Il Turco meccanico', 'msg': 'Non era un’IA: era un inganno', 'punti': [
   ['calendar', 'Mostrato nel **1770** da Wolfgang von Kempelen'],
   ['crown', 'Sembrava **giocare a scacchi da solo**'],
   ['user', 'I pezzi erano mossi da **un maestro di scacchi nascosto dentro la macchina**'],
   ['paw-print', 'Per decenni la gente ci credette, come con il cavallo Hans (capitolo 2); fu distrutto da un incendio nel 1854']],
  'foto': c.FO('F6.1.2', 'Il Turco meccanico')},
 {'tipo': 'storia', 'titolo': 'Il primo neurone artificiale', 'anno': '1943', 'icona': 'brain', 'punti': [
   ['users', 'Il neurofisiologo **Warren McCulloch** e il matematico **Walter Pitts**'],
   ['brain', 'Il **primo modello matematico di neurone artificiale**: riceve segnali, li somma e decide se «accendersi»'],
   ['network', 'È l’**antenato delle reti neurali**'],
   ['sliders-horizontal', 'Il **percettrone**, che regola da solo i propri valori imparando dagli esempi, arriva con Frank Rosenblatt (1957)']]},
 {'tipo': 'foto', 'titolo': 'Il neurone di McCulloch e Pitts', 'msg': 'Osserva gli ingressi a sinistra e l’uscita a destra', 'foto': [c.FO('F6.1.3', 'Gli ingressi, la somma, una soglia e un’uscita')]},
 {'tipo': 'storia', 'titolo': 'Turing', 'anno': '1950', 'icona': 'messages-square', 'punti': [
   ['book-open', '**Alan Turing** pubblica «Computing Machinery and Intelligence»'],
   ['gamepad-2', 'Propone il **gioco dell’imitazione**, poi chiamato test di Turing (capitolo 3)']]},
 {'tipo': 'storia', 'titolo': 'Dartmouth: nasce il nome', 'anno': '1956', 'foto': c.FO('F6.1.4', 'John McCarthy'), 'punti': [
   ['graduation-cap', 'Conferenza estiva al **Dartmouth College**, negli Stati Uniti'],
   ['users', 'Ricercatori come McCarthy, Minsky, Rochester e Shannon decidono di studiare come costruire **macchine che simulino l’intelligenza**'],
   ['quote', '**Il termine «intelligenza artificiale» è di John McCarthy**'],
   ['flag', 'Da quel momento nasce la **disciplina**']]},
 {'tipo': 'foto', 'titolo': 'Alla conferenza di Dartmouth', 'msg': 'Alcuni partecipanti, estate 1956', 'foto': [c.FO('F6.1.5', 'Alcuni partecipanti alla conferenza di Dartmouth')]},
 # 6.2
 c.SEZ('6.2', 'Parole, reti piccole e il primo chatbot', 'message-circle'),
 {'tipo': 'storia', 'titolo': 'Il riconoscimento vocale', 'anno': '1952–1962', 'foto': c.FO('F6.2.1', 'IBM Shoebox'), 'punti': [
   ['mic', '**Audrey** (1952, Bell Labs) capisce solo le **cifre da 0 a 9**, pronunciate da una voce sola'],
   ['package', 'L’**IBM Shoebox** (sviluppato nel 1961, mostrato nel 1962) riconosce **16 parole**: dieci cifre e sei comandi'],
   ['calculator', 'Con i comandi aziona una macchina per **sommare**']]},
 {'tipo': 'storia', 'titolo': 'La prima rete neurale funzionante', 'anno': '1965', 'foto': c.FO('F6.2.2', 'Alexey Ivakhnenko'), 'punti': [
   ['users', 'Il matematico **Alexey Ivakhnenko**, con Valentin Lapa'],
   ['layers', 'Mette a punto il primo metodo funzionante per far imparare una rete a **più livelli**'],
   ['sparkles', 'Per molti è la prima rete di **deep learning**, piccola ma funzionante']]},
 {'tipo': 'storia', 'titolo': 'ELIZA, il primo chatbot', 'anno': '1966', 'foto': c.FO('F6.2.4', 'Joseph Weizenbaum'), 'punti': [
   ['graduation-cap', 'Scritto al **MIT** da **Joseph Weizenbaum**: il primo chatbot della storia'],
   ['replace', 'Sostituisce parole con poche **regole scritte da una persona**'],
   ['message-square', '«Mi sento triste» → «perché ti senti triste?»'],
   ['circle-help', 'Molti erano convinti che capisse davvero: **sembrare intelligente non è esserlo** (capitolo 2)']]},
 {'tipo': 'foto', 'titolo': 'Una conversazione con ELIZA', 'msg': 'Le risposte riprendono le parole dell’utente', 'foto': [c.FO('F6.2.3', 'Una conversazione con ELIZA')]},
 c.WG('eliza', 'Prova: parla con ELIZA'),
 {'tipo': 'punti', 'titolo': 'I sistemi esperti', 'msg': 'Anni Settanta e Ottanta: regole scritte da specialisti', 'punti': [
   ['stethoscope', 'Programmi con le **regole scritte da specialisti**, per esempio medici'],
   ['message-circle', 'Danno consigli **in un campo preciso**'],
   ['route', 'Diventano la **strada principale** dell’IA']]},
 # 6.3
 c.SEZ('6.3', 'Ondate di entusiasmo e inverni', 'trending-up'),
 {'tipo': 'punti', 'titolo': 'Gli inverni dell’IA', 'msg': 'Grandi promesse, poi delusioni, poi nuove speranze', 'punti': [
   ['snowflake', 'Le fasi di delusione: i finanziamenti si **congelano** e l’interesse svanisce'],
   ['calendar', '**Primo inverno (1974–1980)**: le promesse non si realizzano; un rapporto critico in Gran Bretagna (1973) e i tagli negli Stati Uniti'],
   ['trending-up', 'Negli anni Ottanta i **sistemi esperti** riaccendono le speranze'],
   ['calendar', '**Secondo inverno (1987–1993)**: costano troppo da mantenere e il mercato crolla nel 1987']]},
 c.AN('F6.3.1', 'Dal 1950 a oggi'),
 {'tipo': 'punti', 'titolo': 'Le cause', 'msg': 'Perché la storia procede a ondate', 'punti': [
   ['megaphone', '**Promesse esagerate**'],
   ['cpu', 'Computer ancora **poco potenti**'],
   ['database', '**Pochi dati** da cui imparare'],
   ['file-text', 'Per i sistemi esperti, **regole scritte a mano** costose da mantenere (capitolo 5)'],
   ['graduation-cap', 'La svolta: i mezzi per far **imparare i sistemi dagli esempi**']]},
 # 6.4
 c.SEZ('6.4', 'Giochi, quiz e guida autonoma', 'trophy'),
 {'tipo': 'punti', 'titolo': 'Le sfide simbolo', 'msg': 'Prove chiare, con un vincitore', 'punti': [
   ['trophy', 'Giochi e quiz diventano le **sfide simbolo**'],
   ['scale', 'Servono a misurare **quanto una macchina sia brava**']]},
 {'tipo': 'punti', 'titolo': 'Uno dei primi veicoli a guida autonoma', 'msg': '1986 · Un furgone che guida da solo', 'foto': c.FO('F6.4.1', 'Il furgone di Dickmanns (VaMoRs)'), 'punti': [
   ['truck', 'In Germania **Ernst Dickmanns** equipaggia un furgone Mercedes-Benz con telecamere e computer'],
   ['gauge', 'Nel 1986 guida da solo; nel 1987 percorre un tratto di autostrada vuota a **96 km/h**'],
   ['globe', 'Non fu l’unico: nel 1977 in Giappone un veicolo con telecamere andava a circa 30 km/h su un percorso preparato'],
   ['circle-help', '«Il primo» dipende da che cosa si intende; Dickmanns è il **pioniere ad alta velocità**']]},
 {'tipo': 'storia', 'titolo': 'Deep Blue batte Kasparov', 'anno': '1997', 'foto': c.FO('F6.4.2', 'Deep Blue'), 'punti': [
   ['crown', 'Il computer **Deep Blue** di IBM batte il campione del mondo **Garry Kasparov** per 3,5 a 2,5'],
   ['newspaper', 'La prima volta in un match: la notizia fa il giro del mondo'],
   ['cpu', 'Funziona con **regole scritte da programmatori** e un calcolo velocissimo: moltissime mosse al secondo'],
   ['target', 'Più «intelligente» di un uomo, ma **in un compito solo**: è un’IA specializzata (capitolo 5)']]},
 {'tipo': 'punti', 'titolo': 'Watson vince a Jeopardy!', 'msg': '2011 · Un sistema di IBM risponde a domande', 'foto': c.FO('F6.4.3', 'Watson a Jeopardy!'), 'punti': [
   ['message-circle-question', '**Watson**, un sistema di IBM, risponde a domande in linguaggio naturale'],
   ['trophy', 'Batte due campioni del quiz televisivo americano **Jeopardy!**'],
   ['calendar', 'In tre puntate: il 14, 15 e 16 febbraio 2011']]},
 {'tipo': 'punti', 'titolo': 'AlphaGo batte Lee Sedol', 'msg': '2016 · Un programma che ha imparato dagli esempi', 'foto': c.FO('F6.4.4', 'AlphaGo contro Lee Sedol'), 'punti': [
   ['trophy', 'Il programma **AlphaGo** di DeepMind batte il campione di **Go** Lee Sedol per 4 a 1, a Seoul, a marzo'],
   ['graduation-cap', 'A differenza di Deep Blue **ha imparato dagli esempi**'],
   ['swords', 'Ha guardato partite di esperti umani e poi **ne ha giocate milioni contro se stesso**']]},
 {'tipo': 'storia', 'titolo': 'I chatbot per tutti', 'anno': '2022', 'icona': 'message-circle', 'punti': [
   ['calendar', 'Il **30 novembre 2022** esce **ChatGPT**, un chatbot gratuito e facile da usare'],
   ['users', 'In due mesi arriva a circa **100 milioni di utenti** (stima della banca UBS)'],
   ['sparkles', 'Per la prima volta un’**IA generativa** è alla portata di chiunque: basta scrivere una frase']]},
 # 6.5
 c.SEZ('6.5', 'Le condizioni giuste, arrivate insieme', 'rocket'),
 {'tipo': 'punti', 'titolo': 'Perché proprio ora', 'msg': 'Le idee c’erano da decenni: servivano le condizioni giuste', 'punti': [
   ['cpu', '**Più potenza di calcolo**'],
   ['database', '**Esplosione dei Big Data**'],
   ['brain', '**Modelli di machine learning migliori**'],
   ['cloud', '**Archiviazione in cloud** a basso costo'],
   ['banknote', '**Grandi investimenti**'],
   ['users', '**Popolarità crescente**']]},
 {'tipo': 'punti', 'titolo': 'Potenza di calcolo', 'msg': 'Le schede grafiche calcolano moltissime operazioni in parallelo', 'punti': [
   ['gauge', 'I computer sono diventati molto più veloci, soprattutto grazie alle **schede grafiche** (GPU)'],
   ['trophy', 'Nel **2012** la rete **AlexNet** vince la gara ImageNet di riconoscimento delle immagini **con un enorme distacco**'],
   ['gamepad-2', 'Fu addestrata su **due schede grafiche da gioco**']],
  'foto': c.FO('F6.5.1', 'Una scheda grafica GeForce GTX 580')},
 {'tipo': 'punti', 'titolo': 'Dati, modelli e cloud', 'msg': 'Esempi da cui imparare, metodi migliori, spazio per conservarli', 'punti': [
   ['smartphone', '**Big Data**: Internet e smartphone producono ogni giorno foto, testi e voci in quantità immensa; per ImageNet servirono milioni di immagini'],
   ['layers', '**Modelli migliori**: il deep learning è molto più bravo dei metodi precedenti con immagini, voce e linguaggio'],
   ['cloud', '**Cloud**: conservare e condividere enormi quantità di dati costa sempre meno']],
  'foto': c.FO('F6.5.2', 'Un centro dati')},
 {'tipo': 'punti', 'titolo': 'Investimenti e popolarità', 'msg': 'Un circolo vizioso, in senso buono', 'punti': [
   ['banknote', 'Aziende e Stati investono somme enormi, anche nell’IA **aperta** (*open source*), i cui modelli sono condivisi'],
   ['users', 'Più l’IA funziona, più persone la usano e più si investe'],
   ['rocket', '**ChatGPT**, nel 2022, è il punto in cui il circolo diventa visibile a tutti']]},
 {'tipo': 'punti', 'titolo': 'La combinazione', 'msg': 'Nessun fattore da solo basta', 'punti': [
   ['puzzle', 'È **la combinazione** che ha fatto esplodere l’IA'],
   ['trending-up', 'La curva di «Alti e bassi» mostra proprio **questa impennata**']]},
]

if __name__ == '__main__':
    c.scrivi(OUT, S)
