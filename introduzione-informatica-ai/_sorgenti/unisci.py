"""Unisce alcuni capitoli di partenza dentro altri, come sezione con le loro sezioni come sottosezioni.
Si lancia dopo aver ricostruito tutti i capitoli (vedi tutto.py): legge pagina, script e slide dell'ospite e dell'ospitato,
scrive la pagina unita al posto di quella dell'ospite e toglie i file dell'ospitato.

Numeri dei file: 01–05 sono i capitoli del sito; 06, 07 e 08 sono sorgenti che finiscono dentro un altro capitolo."""
import json, os, re

QUI = os.path.dirname(os.path.abspath(__file__))
SITO = os.path.join(QUI, '..')

# (capitolo ospite, capitolo ospitato, titolo della nuova sezione, frase sotto il titolo nella slide, icona[, fino])
# fino: quante sezioni dell'ospitato restano sottosezioni della nuova sezione; le successive diventano sezioni a sé del capitolo ospite
UNIONI = [
    (3, 8, 'Un po’ di storia', 'Dagli automi a ChatGPT, tra inverni e primavere dell’IA', 'hourglass'),
    (4, 6, 'Un computer può essere intelligente?', 'Il test di Turing e la stanza cinese danno risposte opposte', 'scale'),
    (5, 7, 'L’IA che impara', 'Quando le istruzioni non bastano e il sistema impara dagli esempi', 'sparkles', 3),
]

INIZIO, FINE = '  <div class="contenuto">\n', '\n  </div>\n  <nav class="fine"'


def leggi(p): return open(os.path.join(SITO, p), encoding='utf8', newline='').read()
def scrivi(p, t): open(os.path.join(SITO, p), 'w', encoding='utf8', newline='').write(t)


def aula(n):
    t = leggi('assets/capitolo-%02d-aula.js' % n)
    return json.loads(t[len('window.AULA = '):].rstrip().rstrip(';'))


def unisci(h, g, titolo, sotto, icona, fino=None):
    # ---- pagina
    H, G = leggi('capitolo-%02d.html' % h), leggi('capitolo-%02d.html' % g)
    k = len(re.findall(r'<h2 id="p\d+"', H)) + 1
    num = '%d.%d' % (h, k)
    corpo = G[G.index(INIZIO) + len(INIZIO):G.index(FINE)]
    resto = ''
    if fino:   # le sezioni dopo «fino» restano sezioni (h2) del capitolo ospite, con il numero che segue la nuova sezione
        i = re.search(r'<!-- =+ \d+\.%d =+ -->' % (fino + 1), corpo).start()
        corpo, resto = corpo[:i].rstrip('\n ') + '\n  </section>', corpo[i:].replace('  </section>\n', '', 1)
        resto = re.sub(r'<h2 id="p(\d+)"><span class="num">\d+\.(\d+)</span>',
                       lambda m: '<h2 id="p%d"><span class="num">%d.%d</span>' % (k + int(m.group(1)) - fino, h, k + int(m.group(2)) - fino), resto)
        resto = re.sub(r'<!-- =+ \d+\.(\d+) =+ -->', lambda m: '<!-- ===================== %d.%d ===================== -->' % (h, k + int(m.group(1)) - fino), resto)
    corpo = re.sub(r'(?m)^  <h3(.*)</h3>$', r'  <h4\1</h4>', corpo)                 # i titoletti dei paragrafi scendono di un livello
    corpo = re.sub(r'<h2 id="p(\d+)"><span class="num">\d+\.(\d+)</span>(.*?)</h2>',
                   lambda m: '<h3 id="p%d-%s"><span class="num">%s.%s</span>%s</h3>' % (k, m.group(1), num, m.group(2), m.group(3)), corpo)
    corpo = re.sub(r'<!-- =+ \d+\.(\d+) =+ -->', lambda m: '<!-- ===================== %s.%s ===================== -->' % (num, m.group(1)), corpo)
    blocco = (f'\n  <!-- ===================== {num} ===================== -->\n  <section class="sez">\n'
              f'  <h2 id="p{k}"><span class="num">{num}</span>{titolo}</h2>\n{corpo.strip(chr(10))}\n  </section>\n')
    if resto: blocco += '\n' + resto.strip('\n') + '\n'
    i = H.index(FINE)
    scrivi('capitolo-%02d.html' % h, H[:i].rstrip('\n') + '\n' + blocco + H[i:])

    # ---- animazioni e widget
    scrivi('assets/capitolo-%02d.js' % h, leggi('assets/capitolo-%02d.js' % h).rstrip('\n') + '\n\n' + leggi('assets/capitolo-%02d.js' % g))

    # ---- slide
    A, B = aula(h), aula(g)
    cop = next(s for s in A['slide'] if s['tipo'] == 'copertina')
    cop['indice'].append([num, titolo])
    A['slide'].append({'tipo': 'sezione', 'num': num, 'titolo': titolo, 'sotto': sotto, 'icona': icona})
    for s in B['slide']:
        if s['tipo'] == 'copertina': continue
        if s['tipo'] == 'sezione':
            j = int(s['num'].split('.')[1])
            if fino and j > fino:
                s['num'] = '%d.%d' % (h, k + j - fino); cop['indice'].append([s['num'], s['titolo']])
            else: s['num'] = '%s.%s' % (num, j)
        A['slide'].append(s)
    scrivi('assets/capitolo-%02d-aula.js' % h, 'window.AULA = ' + json.dumps(A, ensure_ascii=False, indent=1) + ';\n')

    # ---- l'ospitato non è più una pagina a sé
    for p in ('capitolo-%02d.html' % g, 'assets/capitolo-%02d.js' % g, 'assets/capitolo-%02d-aula.js' % g):
        os.remove(os.path.join(SITO, p))
    print('unito il capitolo %d nel %d come %s «%s» (%d slide)' % (g, h, num, titolo, len(A['slide'])))


if __name__ == '__main__':
    for u in UNIONI: unisci(*u)
