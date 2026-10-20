# Compone assets/capitolo-NN.js: scene del capitolo (js_capNN_scene.js) + eventuali widget + chiusura.
import sys, os
QUI = os.path.dirname(os.path.abspath(__file__))
n = sys.argv[1]
parti = [f'js_cap{n}_scene.js'] + sys.argv[2:]
if os.path.exists(os.path.join(QUI, f'js_cap{n}_foto.js')): parti.insert(0, f'js_cap{n}_foto.js')   # indirizzi delle foto usate dalle scene (li scrive capitolo_NN.py)
testo = ''.join(open(os.path.join(QUI, p), encoding='utf8').read().rstrip('\n') + '\n\n' for p in parti) + '})();\n'
open(os.path.join(QUI, '..', 'assets', f'capitolo-{n}.js'), 'w', encoding='utf8', newline='\n').write(testo)
print('scritto assets/capitolo-%s.js' % n, len(testo))
