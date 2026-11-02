"""Ricostruisce l'intero modulo: ogni capitolo sorgente (01–08) e poi le unioni (unisci.py). Uso: python tutto.py"""
import subprocess, sys, os
QUI = os.path.dirname(os.path.abspath(__file__))
py = sys.executable

def run(*a):
    r = subprocess.run([py, *a], cwd=QUI, capture_output=True, text=True, encoding='utf8')
    print(r.stdout.strip());
    if r.returncode: print(r.stderr.strip()); sys.exit(1)

for n in ('01', '02'):                      # scritti a mano
    run('capitolo_%s.py' % n); run('slide_%s.py' % n)
for n in ('03', '04', '05', '06', '07', '08'):
    run('build.py', n)
run('unisci.py')
