# Capitolo 1 · L’IA nella vita di tutti i giorni — scelte della pagina (il testo è quello del Word).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from rendi import *
configura(modulo='Introduzione a informatica ed AI')

PAG_FOTO = 'assets/immagini/'
# foto che il sito d'origine non lascia incorporare: copie locali, con il link alla pagina originale
LOCALI = {'F1.1.7': 'ia-fotocamera-volti.jpg', 'F1.2.1': 'ia-google-lens-pianta.webp'}
TIT = {'F1.1.11': 'Tesla in guida assistita', 'F1.1.7': 'La fotocamera', 'F1.4.2': 'Un’app meteo'}


def foto_capitolo(n):
    """Una voce FOTO per ogni foto del capitolo: «Da guardare nei dettagli» → grande nel flusso; «Di riconoscimento» → a margine."""
    out = {}
    for S in CONT['chapters'][n - 1]['sezioni']:
        for b in S['blocchi']:
            if b['t'] != 'figura' or b['tipo'] != 'foto':
                continue
            x = b['x']; fid = b['id']
            f = dict(alt=x.replace(' Di riconoscimento.', '').replace('*', ''))
            if 'Da guardare nei dettagli' in x:
                f['modo'] = 'grande'; f['did'] = x.replace('Da guardare nei dettagli: osserva', 'Osserva')
            else:
                f['modo'] = 'mg'; f['tit'] = TIT.get(fid) or tit_breve(x)
            if fid in LOCALI:
                f['chiave'] = 'local:' + PAG_FOTO + LOCALI[fid] + '|' + b['foto']['pagina']
            out[fid] = f
    return out


ANIM = {
    'F1.1.1': dict(id='f-giornata', titolo='Una giornata piena di IA',
                   inizio='In alto otto pallini grigi, uno per ora, e il contatore «IA incontrate: 0»; sotto, un riquadro con la scritta «Una giornata come tante».',
                   vb='0 0 720 320', aria='Otto momenti di una giornata, dalle 7:00 alle 21:00: in ognuno un sistema di IA lavora per te. Cinque li noti, tre lavorano di nascosto.'),
    'F1.5.2': dict(id='f-tris', titolo='Come sceglie il computer',
                   inizio='La griglia del tris a metà partita: X in alto a sinistra, O al centro, X in basso a destra. Tocca a O, cioè al computer.',
                   vb='0 0 720 400', aria='Il computer prova due mosse in anticipo: l’angolo in alto a destra lo fa perdere, il lato in alto porta al pareggio, e sceglie quella.'),
}
SCHEMI = {
    'F1.4.3': dict(id='s-antifrode', titolo='L’antifrode della carta di pagamento', svg='''      <svg viewBox="0 0 720 250" role="img" aria-label="Tre passaggi in fila: un pagamento a Milano alle 15:00 è normale; un pagamento a Tokyo alle 15:10 è insolito, perché non si può essere in due posti; la banca blocca la carta e ti avvisa.">
        <defs><marker id="af-fr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink-muted)"/></marker></defs>
        <rect x="14" y="14" width="206" height="170" rx="3" class="nodo evid"/>
        <rect x="257" y="14" width="206" height="170" rx="3" class="nodo guasto"/>
        <rect x="500" y="14" width="206" height="170" rx="3" class="nodo"/>
        <g class="carta"><rect x="74" y="30" width="86" height="54" rx="6" class="nodo"/><rect x="74" y="42" width="86" height="10" style="fill:var(--ink-muted);stroke:none"/><rect x="82" y="62" width="30" height="6" rx="2" style="fill:var(--border-strong);stroke:none"/></g>
        <g class="carta"><rect x="317" y="30" width="86" height="54" rx="6" class="nodo"/><rect x="317" y="42" width="86" height="10" style="fill:var(--ink-muted);stroke:none"/><rect x="325" y="62" width="30" height="6" rx="2" style="fill:var(--border-strong);stroke:none"/></g>
        <g class="carta"><rect x="560" y="30" width="86" height="54" rx="6" class="nodo"/><rect x="560" y="42" width="86" height="10" style="fill:var(--ink-muted);stroke:none"/><rect x="568" y="62" width="30" height="6" rx="2" style="fill:var(--border-strong);stroke:none"/></g>
        <path d="M566 34 L640 80 M640 34 L566 80" class="lin err"/>
        <text x="117" y="112" text-anchor="middle" class="t-b">Pagamento a Milano</text>
        <text x="117" y="132" text-anchor="middle" class="t">alle 15:00</text>
        <text x="117" y="156" text-anchor="middle" class="t-m">normale</text>
        <text x="360" y="112" text-anchor="middle" class="t-e">Pagamento a Tokyo</text>
        <text x="360" y="132" text-anchor="middle" class="t">alle 15:10</text>
        <text x="360" y="156" text-anchor="middle" class="t-e">insolito</text>
        <text x="360" y="174" text-anchor="middle" class="t-m">non si può essere in due posti</text>
        <text x="603" y="112" text-anchor="middle" class="t-b">La banca blocca la carta</text>
        <text x="603" y="132" text-anchor="middle" class="t">e ti avvisa</text>
        <path d="M222 92 H255" class="lin" marker-end="url(#af-fr)"/>
        <path d="M465 92 H498" class="lin" marker-end="url(#af-fr)"/>
        <text x="360" y="214" text-anchor="middle" class="t-m">L’IA non sa che la carta è stata rubata:</text>
        <text x="360" y="234" text-anchor="middle" class="t-m">stima che quel pagamento sia improbabile.</text>
      </svg>'''),
}
FOTO = foto_capitolo(1)
# foto scelte da Patrick al posto di quelle del Word
SOSTITUTE = {
    'F1.1.8': ('https://wips.plug.it/cips/tecnologia/cms/2020/02/gmail.jpg', 'https://www.tecnologia.libero.it/'),
    'F1.4.1': ('https://cdn.prod.website-files.com/663e17fff238bd97b0a022cd/6645d94cef2950a240114cec_amazon-product-recommendations-homepage_600x600.jpeg', 'https://cdn.prod.website-files.com/'),
}
for fid_, (u_, p_) in SOSTITUTE.items():
    FOTO[fid_]['chiave'] = 'web:' + u_ + '|' + p_
# il Word chiama «blu» i punti da accorgersi; nel sito il colore è un verde acqua, quindi la parola si adegua
for S_ in CONT['chapters'][0]['sezioni']:
    for b_ in S_['blocchi']:
        if b_['t'] == 'figura' and b_.get('id') == 'F1.1.1':
            ANIM['F1.1.1']['passi'] = [html(p.replace('(blu:', '(verde:')) for p in b_['passi']]
# al posto dell'animazione del Word c'è il gioco «È IA o non è IA?», messo dopo la domanda alla classe
TOGLI = ['F1.7.1']
DOPO = {('1.7', 0): widget('iaonon')}

# elenchi di esempi con una foto ciascuno: testo a sinistra e foto a destra in una riga (a margine resterebbero buchi bianchi)
RIGHE = ['F1.1.%d' % i for i in range(2, 13)] + ['F1.5.3']


def prepara_righe(n, ids):
    for S in CONT['chapters'][n - 1]['sezioni']:
        B = S['blocchi']
        for k, b in enumerate(B):
            if b['t'] == 'figura' and b.get('id') in ids and k > 0 and B[k - 1]['t'] == 'p':
                f = FOTO[b['id']]
                B[k - 1] = {'t': 'riga', 'x': B[k - 1]['x'], 'chiave': f.get('chiave') or b['foto']['chiave'],
                            'tit': f['did'] if f['modo'] == 'grande' else f['tit'], 'alt': f['alt']}
                f['modo'] = 'no'


if __name__ == '__main__':
    OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(QUI, '..')
    prepara_righe(1, RIGHE)
    capitolo(1, dict(ANIM=ANIM, SCHEMI=SCHEMI, FOTO=FOTO, DOPO=DOPO, TOGLI=TOGLI), OUT)
