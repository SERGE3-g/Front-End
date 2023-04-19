// scriviamo in javascript un codice atto a mostrarmi l'anno attuale in una struttura HTML all'interno di un tag<p>
 
var d :any = new Date();

var anno: number = d.getFullYear();
var mese : number = d.getMonth();

var testo:any =document.getElementById('anno') as HTMLInputElement;
var writein :any = <HTMLElement> document.getElementById('anno');

testo.innerHTML = anno;
writein.innerHTML = mese;

















