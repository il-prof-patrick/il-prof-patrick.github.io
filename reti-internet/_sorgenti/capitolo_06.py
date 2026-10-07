# Capitolo 6 · Il 5G, l'Internet of Things e il Cloud Computing — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F9.1.2': dict(id='f-handover', titolo='Celle e handover',
                   inizio='Una strada attraversa prima la campagna, con celle grandi, poi la città, con celle piccole; ogni cella ha la sua antenna. Un’auto con un telefono è collegata alla prima antenna.',
                   vb='0 0 720 285', aria='L’auto passa da una cella all’altra e il telefono cambia antenna senza interrompere la chiamata; in città le celle sono piccole e ogni antenna serve pochi utenti'),
    'F9.6.2': dict(id='f-iot', titolo='Il ciclo di un oggetto IoT: il termostato smart',
                   inizio='Una stanza con un termostato smart alla parete, una caldaia e una finestra; in alto il cloud del produttore; fuori casa un utente con l’app sul telefono.',
                   vb='0 0 720 320', aria='Il sensore misura 17 gradi, il termostato accende la caldaia, il dato arriva all’app attraverso il cloud; quando si apre la finestra spegne la caldaia da solo e manda una notifica; dal telefono si alza l’obiettivo a 21 gradi'),
    'F4.6.2': dict(id='f-grid', titolo='Un calcolo enorme diviso tra tanti computer',
                   inizio='Al centro un grande blocco, un calcolo da 1000 ore; intorno, su una mappa d’Europa, dieci computer in città diverse.',
                   vb='0 0 720 320', aria='Il calcolo si divide in cento pezzi che vanno a dieci computer; quando uno si spegne i suoi pezzi vengono dati agli altri; i risultati tornano al centro e il calcolo finisce in un giorno'),
    'F9.9.1': dict(id='f-edge', titolo='Elaborare lontano o vicino?',
                   inizio='La stessa videocamera davanti a un cancello, due volte: a sinistra collegata a un data center lontano (cloud), a destra con un piccolo chip accanto (edge). Un cronometro per lato.',
                   vb='0 0 720 320', aria='Nel cloud la videocamera manda tutto il video lontano e il comando di apertura torna dopo parecchi decimi di secondo; nell’edge il chip riconosce l’auto e apre in pochi millisecondi, mandando al cloud solo una riga'),
}
SCHEMI = {'F9.4.1': dict(id='s-ionizzanti', titolo='Radiazioni non ionizzanti e ionizzanti',
                         svg='      <svg viewBox="0 0 720 240" role="img" aria-label="Lo spettro diviso da una linea: a sinistra le onde non ionizzanti (radio, TV, 4G, 5G, Wi-Fi, microonde, luce visibile), a destra quelle ionizzanti (ultravioletti estremi, raggi X, raggi gamma); il 5G resta lontanissimo dalla linea"></svg>')}
FOTO = {
    'F9.1.1': dict(tit='Una stazione radio base'),
    'F9.2.2': dict(tit='Martin Cooper con il DynaTAC', ancora='Le tecnologie mobili si sono evolute'),
    'F9.8.1': dict(tit='Dispositivi della casa intelligente'),
    'F9.8.2': dict(tit='Un sensore di parcheggio'),
    'F4.6.1': dict(modo='box', dove='dopo', tit='Il centro di calcolo del CERN'),
}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(6, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO), OUT)
