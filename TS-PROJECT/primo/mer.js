// scriviamo in javascript un codice atto a mostrarmi l'anno attuale in una struttura HTML all'interno di un tag<p>
var d = new Date();
var anno = d.getFullYear();
var mese = d.getMonth();
var testo = document.getElementById('anno');
var writein = document.getElementById('anno');
testo.innerHTML = anno;
writein.innerHTML = mese;
