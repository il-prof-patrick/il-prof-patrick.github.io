# Capitolo 4 · Internet — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F4.2.3': dict(id='f-cavi', titolo='Da Roma a New York, sotto il mare',
                   inizio='L’Atlantico con tre cavi sottomarini, A, B e C, tra Europa e America; a Roma un computer, a New York un server.',
                   vb='0 0 720 300', aria='Un pacchetto da Roma a New York attraversa l’oceano nel cavo A; quando un’ancora lo danneggia, il traffico passa dal cavo B'),
    'F4.2.8': dict(id='f-viaggio', titolo='Il viaggio fisico di una richiesta',
                   inizio='Da sinistra a destra: la casa con il telefono, la centrale dell’ISP, un router a Milano, la stazione di approdo in Sicilia, il mare e un data center negli Stati Uniti.',
                   vb='0 0 720 280', aria='La richiesta passa dal Wi-Fi al router di casa, in fibra alla centrale, lungo la dorsale fino a Milano, poi alla stazione di approdo, nel cavo sottomarino e infine nel data center, in meno di un decimo di secondo'),
    'F2.10.2': dict(id='f-vpn', titolo='Che cosa vuol dire «tunnel»',
                    inizio='A sinistra un portatile collegato al Wi-Fi pubblico di un bar, al centro Internet con un curioso che osserva, a destra la sede dell’azienda con il server VPN e il server dei documenti.',
                    vb='0 0 720 300', aria='Senza VPN il curioso legge il pacchetto e l’azienda lo rifiuta; con la VPN il pacchetto viaggia cifrato dentro un altro pacchetto diretto al server VPN, che lo apre e lo consegna come se il portatile fosse in ufficio'),
    'F5.5.1': dict(id='f-http', titolo='Dall’Invio alla pagina',
                   inizio='A sinistra il portatile con la barra degli indirizzi «https://www.wikipedia.org», a destra il server web, in alto il server DNS.',
                   vb='0 0 720 320', aria='Prima il DNS trova l’indirizzo IP, poi il TCP apre la connessione, browser e server si accordano per cifrare la comunicazione, il browser chiede la pagina con GET, il server risponde 200 OK e la pagina si compone a pezzi'),
    'F5.8.1': dict(id='f-cookie', titolo='Come ti segue un cookie di terze parti',
                   inizio='Un browser con il suo barattolo dei cookie, ancora vuoto; tre siti: un negozio di scarpe, un giornale e un social; in alto il server di un’azienda pubblicitaria presente su tutti e tre.',
                   vb='0 0 720 320', aria='La pubblicità del negozio lascia un cookie con un numero; sul giornale il browser lo rimanda alla stessa azienda, che collega le visite e mostra sul social le stesse scarpe; bloccando i cookie di terze parti il collegamento non avviene'),
}
SV = lambda vb, aria: f'      <svg viewBox="{vb}" role="img" aria-label="{aria}"></svg>'
SCHEMI = {
    'F4.7.1': dict(id='s-numeri', titolo='Chi è online nel mondo (ITU, 2025)', svg=SV('0 0 720 270', 'Persone online: 94% nei paesi ad alto reddito, circa 74% nel mondo, 23% nei paesi a basso reddito; 82% dei giovani tra 15 e 24 anni contro il 72% del resto della popolazione')),
    'F2.10.1': dict(id='s-intranet', titolo='Intranet, extranet e Internet', svg=SV('0 0 720 290', 'Tre cerchi concentrici: al centro la intranet per i dipendenti, intorno la extranet per fornitori e clienti con password, all’esterno Internet aperta a tutti')),
    'F5.1.1': dict(id='s-servizi', titolo='Il Web è uno dei servizi sopra Internet', svg=SV('0 0 720 250', 'Sulla base di Internet, fatta di cavi, router e TCP/IP, poggiano tanti servizi: Web, posta, messaggistica, videochiamate, giochi online, streaming')),
    'F5.3.1': dict(id='s-ipertesto', titolo='Lettura lineare e ipertesto', svg=SV('0 0 720 272', 'A sinistra le pagine di un libro lette una dopo l’altra; a destra pagine collegate da molti link in tutte le direzioni, con testo, immagini, video e audio')),
    'F5.10.1': dict(id='s-iceberg', titolo='Surface web, deep web e dark web', svg=SV('0 0 720 330', 'Un iceberg: sopra l’acqua la punta, il surface web; sotto la grande massa del deep web; in fondo una piccola zona scura, il dark web')),
}
PRIMA = {'quote': schema('Un URL letto pezzo per pezzo', SV('0 0 720 156', 'L’indirizzo https://www.istruzione.it/esame_di_stato/index.html?anno=2026#date diviso in protocollo, dominio, percorso, parametri e segnalibro'), 's-url')}
FOTO = {
    'F4.1.1': dict(modo='box', tit='Kleinrock e l’IMP'),
    'F4.1.2': dict(modo='grande'),
    'F4.2.2': dict(dove='dopo', tit='Un cavo sottomarino in sezione'),
    'F4.2.4': dict(modo='grande'),
    'F4.2.6': dict(modo='grande'),
    'F4.2.7': dict(modo='grande'),
    'F5.2.1': dict(tit='Tim Berners-Lee'),
    'F5.2.2': dict(modo='box', tit='«Vague but exciting…»'),
    'F5.2.3': dict(tit='Il NeXT, primo server web'),
    'F5.7.1': dict(modo='box', tit='Mosaic, 1993'),
    'F5.8.2': dict(modo='grande'),
}
DOPO = {('4.9', 5): widget('url'), ('4.11', 1): widget('linguaggi')}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(4, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, DOPO=DOPO, PRIMA=PRIMA), OUT)
