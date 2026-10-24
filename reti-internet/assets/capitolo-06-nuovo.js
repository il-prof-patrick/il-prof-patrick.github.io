/* Capitolo 6 (nuova grafica): monta le animazioni illustrate e fa crescere le barre delle generazioni. */
(function () {
  document.querySelectorAll('figure[data-scena]').forEach(function (fig) {
    var cfg = Anim2.scene[fig.getAttribute('data-scena')];
    if (cfg) Anim2.mount(fig, cfg);
  });
  var barre = document.getElementById('gen-barre');
  if (barre) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (e) {
        if (e[0].isIntersecting) { barre.classList.add('vista'); io.disconnect(); }
      }, { threshold: .4 });
      io.observe(barre);
    } else barre.classList.add('vista');
  }
})();
