"""Ricostruisce un capitolo: pagina, scene, slide e icone mancanti. Uso: python build.py 04"""
import subprocess, sys, os
QUI = os.path.dirname(os.path.abspath(__file__))
n = sys.argv[1]
py = sys.executable
def run(*a):
    r = subprocess.run([py, *a], cwd=QUI, capture_output=True, text=True, encoding='utf8')
    print(r.stdout.strip()); print(r.stderr.strip()) if r.returncode else None
    if r.returncode: sys.exit(1)
    return r.stdout.strip()
run('capitolo_%s.py' % n)
if os.path.exists(os.path.join(QUI, 'js_cap%s_scene.js' % n)):
    extra = [x for x in sys.argv[2:]]
    run('monta_js.py', n, *extra)
run('slide_%s.py' % n)
mancano = run('controlla_icone.py', n).split()
if mancano:
    print('icone mancanti:', mancano)
    print(run('icone.py', '..', *mancano))
