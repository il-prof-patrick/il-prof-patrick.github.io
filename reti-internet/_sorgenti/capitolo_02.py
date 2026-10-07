# Capitolo 2 · Le reti di computer — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Reti e Internet')

ANIM = {
    'F2.3.2': dict(id='f-topologie', titolo='Che cosa succede quando qualcosa si rompe',
                   inizio='Le cinque topologie una accanto all’altra, con tutti i computer accesi in verde.',
                   vb='0 0 720 290', aria='Nel bus e nell’anello un guasto ferma tutti; nella stella si spegne solo un computer, a meno che si guasti lo switch; nell’albero si spegne un ramo; nella maglia i dati trovano altre strade'),
    'F2.4.2': dict(id='f-p2p', titolo='Client-server e peer-to-peer',
                   inizio='A sinistra un server con sei client intorno; a destra sei computer uguali collegati tra loro. Lo stesso file è diviso in sei pezzi colorati.',
                   vb='0 0 720 320', aria='Nel client-server il server invia sei copie intere e se si spegne nessuno riceve più nulla; nel peer-to-peer i computer si scambiano i pezzi e continuano anche se uno si spegne'),
    'F2.5.6': dict(id='f-hub', titolo='Hub e switch: dove va un pacchetto',
                   inizio='Quattro computer, A, B, C e D, collegati a una scatola centrale con scritto «hub».',
                   vb='0 0 720 295', aria='Con l’hub il pacchetto di A per C arriva a tutti e due trasmissioni insieme si scontrano; con lo switch va solo a C e più conversazioni avvengono insieme'),
    'F2.5.8': dict(id='f-router', titolo='Il router come centro di smistamento',
                   inizio='Tre reti locali, casa, scuola e ufficio, collegate da quattro router R1–R4 disposti a rombo; un pacchetto con l’etichetta «→ scuola» esce dalla rete di casa.',
                   vb='0 0 720 270', aria='Un pacchetto diretto alla rete della scuola passa di router in router; quando un collegamento si interrompe prende un’altra strada'),
    'F2.5.11': dict(id='f-modem', titolo='Che cosa vuol dire modulare',
                    inizio='Due computer lontani, ciascuno collegato al suo modem; sulla linea dell’operatore scorre un’onda regolare, la portante, che non trasporta ancora nulla.',
                    vb='0 0 720 225', aria='I bit modificano l’altezza dell’onda nel primo modem, l’onda viaggia sulla linea e il secondo modem la misura e ricostruisce i bit'),
    'F2.6.1': dict(id='f-switchrouter', titolo='Dove finisce lo switch e comincia il router',
                   inizio='Due case vicine, ciascuna con il suo switch e tre dispositivi; in mezzo un router collega le due reti. Un pacchetto è pronto sul telefono della casa A.',
                   vb='0 0 720 300', aria='Dentro la stessa casa lo switch consegna il pacchetto da solo; verso l’altra casa il pacchetto passa dal router, che guarda l’indirizzo IP'),
}
SCHEMI = {
    'F2.2.1': dict(id='s-estensione', titolo='Le reti dalla più piccola alla più grande',
                   svg='      <svg viewBox="0 0 720 300" role="img" aria-label="Cerchi concentrici intorno a una persona: BAN sul corpo, PAN intorno alla persona, LAN la casa, MAN la città, WAN regioni, nazioni e continenti"></svg>'),
    'F2.3.1': dict(id='s-topologie', titolo='Le cinque topologie',
                   svg='      <svg viewBox="0 0 720 260" role="img" aria-label="Gli stessi sei computer collegati a bus, ad anello, a stella, ad albero e a maglia parziale"></svg>'),
    'F2.5.17': dict(id='s-wifi', titolo='Coprire tutta la casa con il Wi-Fi',
                    svg='      <svg viewBox="0 0 720 230" role="img" aria-label="Tre piante della stessa casa: con il solo router metà casa è coperta, con un ripetitore la copertura si estende ma la banda si riduce, con un sistema mesh tutta la casa è coperta"></svg>'),
}
FOTO = {
    'F2.2.2': dict(modo='box', dove='dopo', tit='Smartwatch: BAN e PAN'),
    'F2.4.1': dict(modo='grande'),
    'F2.5.1': dict(modo='coppia'),
    'F2.5.3': dict(modo='coppia'),
    'F2.5.9': dict(tit='Router professionale', ancora='**collega reti diverse tra loro'),
    'F2.5.10': dict(tit='Cisco AGS, 1986', ancora='milioni di router'),
    'F2.5.12': dict(modo='coppia'),
    'F2.5.15': dict(tit='Access point sul soffitto'),
    'F2.5.16': dict(tit='Un’unità di un sistema mesh'),
    'F2.6.3': dict(modo='grande'),
    'F2.6.4': dict(tit='Il modem-router di casa', ancora='tutto-in-uno'),
}
DOPO = {('2.5', 13): widget('switch')}

if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    capitolo(2, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, DOPO=DOPO), OUT)
