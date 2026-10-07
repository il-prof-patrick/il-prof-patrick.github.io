# Slide di Presenta in aula · Capitolo 7 · Reti e intelligenza artificiale
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from slidelib import *
configura(modulo='Reti e Internet')
c = Capitolo(7)
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')

S = [
 c.COP('L’IA vive nei data center, è nata leggendo il Web e oggi lo riempie.'),
 c.DOM(0),
 # 7.1
 c.SEZ('7.1', 'Il telefono è solo il client'),
 {'tipo': 'punti', 'titolo': 'Dove gira un chatbot', 'punti': [['smartphone', 'ChatGPT, Gemini, Claude **non funzionano dentro il telefono**'], ['server', 'Il **modello** gira su server specializzati nei **data center**'], ['lock', 'Domanda e risposta viaggiano con **DNS, TCP, HTTPS**']]},
 {'tipo': 'punti', 'titolo': 'Le GPU', 'punti': [['brain', 'Modelli con **centinaia di miliardi di parametri**'], ['cpu', '**GPU** (*Graphics Processing Unit*): nate per i videogiochi'], ['grid-3x3', '**Migliaia di calcoli semplici in parallelo**: quello che serve alle reti neurali'], ['network', 'Più GPU collegate da **reti velocissime**']], 'foto': c.FO('F10.1.1')},
 c.AN('F10.1.2', 'Il viaggio di una domanda'),
 {'tipo': 'punti', 'titolo': 'I data center dell’IA', 'punti': [['building', 'Data center **giganteschi**, consumano quanto **intere città**'], ['coins', 'Centinaia di miliardi di dollari: edifici, **contratti per l’energia**, centrali riaperte'], ['droplet', 'Il consumo di **elettricità e acqua** è un tema centrale']], 'foto': c.FO('F10.1.3')},
 c.ERR(0),
 # 7.2
 c.SEZ('7.2', 'Vicino o lontano'),
 {'tipo': 'punti', 'titolo': 'L’IA sul dispositivo', 'punti': [['smartphone', 'Modelli che girano **sul telefono**, sul computer, nell’auto'], ['cpu', '**Edge AI** o IA locale (*on-device AI*), con le **NPU** (*Neural Processing Unit*)'], ['shuffle', 'Spesso si **combinano**: semplici e private in locale, complesse nel cloud']]},
 {'tipo': 'tabella', 'titolo': 'IA nel cloud e IA sul dispositivo', 'righe': [['', 'Nel cloud', 'Sul dispositivo'], ['Dove', 'data center', 'telefono, computer, oggetto'], ['Modello', 'enorme, molto capace', 'piccolo, più limitato'], ['Internet?', 'sì', 'no'], ['Latenza', 'andata e ritorno', 'quasi nulla'], ['Privacy', 'i dati escono', 'i dati restano'], ['Esempi', 'chatbot, immagini e video', 'sblocco col volto, foto, dettatura e traduzione offline']]},
 c.DOM(1),
 # 7.3
 c.SEZ('7.3', 'Migliaia di miliardi di parole'),
 {'tipo': 'punti', 'titolo': 'Da dove impara un modello', 'punti': [['book-open', 'Legge **migliaia di miliardi di parole**'], ['globe', 'Soprattutto dal **Web**: pagine, enciclopedie, forum, libri, codice'], ['bug', 'Raccolte con gli stessi **crawler** dei motori di ricerca']]},
 {'tipo': 'punti', 'titolo': 'Il diritto d’autore', 'punti': [['pen-tool', 'Giornalisti, scrittori, artisti chiedono di essere **pagati o consultati**'], ['gavel', '**Cause in tribunale**: *New York Times* contro OpenAI e Microsoft (2023)'],
   ['flag', 'In Europa: estrazione permessa, ma **i titolari possono opporsi** (anche con robots.txt)'], ['file-text', '**AI Act**: riassunto pubblico dei dati di addestramento']]},
 c.ERR(1),
 # 7.4
 c.SEZ('7.4', 'Quanta parte di Internet è umana?'),
 c.DOM(2),
 {'tipo': 'punti', 'titolo': 'La teoria dell’Internet morta (*Dead Internet Theory*)', 'punti': [['bot', 'Gran parte di traffico, account, commenti e contenuti sarebbe fatta da **bot**'], ['users', 'Le persone vere sarebbero una **minoranza**'], ['messages-square', 'Un web di macchine che **parlano tra loro**']], 'foto': c.FO('F10.6.1')},
 {'tipo': 'tessere', 'titolo': 'Perché ci riguarda', 'tessere': [['star', 'Fidarsi è più difficile', 'recensioni, follower e visualizzazioni gonfiati'], ['megaphone', 'Opinione falsata', 'migliaia di account fanno sembrare maggioritaria un’idea'], ['file-x', 'Web di qualità più bassa', 'pagine in serie per i motori di ricerca'], ['repeat', 'L’IA mangia se stessa', '*model collapse* (*Nature*, 2024)']]},
 c.AN('F10.6.2', 'Quando l’IA impara dall’IA'),
 {'tipo': 'tessere', 'titolo': 'Come difendersi', 'tessere': [['search', 'Chi c’è dietro', 'un account o un sito, non i numeri'], ['user-check', 'Autori riconoscibili', 'e comunità reali'], ['copy', 'Diffidare', 'di commenti generici e account senza storia'], ['pen-line', 'Contribuire', 'con contenuti propri, originali e firmati']]},
 c.DOM(3),
]
c.scrivi(OUT, S)
