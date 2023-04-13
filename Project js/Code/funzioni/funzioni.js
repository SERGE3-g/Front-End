//Sintassi base per le funzioni

//con la sintassi standard è possibile invocare la funzione prima della sua dichiarazione!
//nomeFunzione();

function nomeFunzione() {
    //corpo funzione
    console.log("invocazione nomeFunzione()");
}

//a runtime succede questo -> const nomeFunzione = nomeFunzione;

nomeFunzione();


//function expression

//con la function expression non è possibile invocare la funzione prima della sua dichiarazione
//somma(10, 20); --> error

const somma = function (a, b) {
    return a + b;
}

const somma2 = (a, b) => a + b;

console.log(somma(10, 20));

//NB: se al di là dell'uguale metto la funzione con le parentesi tonde sto invocando la funzione e assegnado
//il risultato della funzione alla variabile a sinistra dell'uguale
let risultato = somma(15, 23); //38

//NB: se non uso le parentesi tonde, sto assegnando l'intera funzione alla variabile a sinistra dell'uguale
//questo significa che da ora in poi sarà possibile invocare la funzione somma con il nome risultato2(a, b);
let risultato2 = somma; //risultato2(15, 18);

console.log(risultato2(1, 1));
//stesso indirizzo in memoria
console.log(risultato2 == somma);


//factory function
//una factory function è una funzione che restituisce una funzione.


const operazioneMatematica = (tipoOperazione) => {
    if (tipoOperazione == "somma") {
        return function (a, b) {
            return a + b;
        }
    } else if (tipoOperazione == "sottrazione") {
        return function (a, b) {
            return a - b;
        }
    }
}


let operazione = operazioneMatematica("sottrazione");

console.log(operazione(10, 5));

operazione = operazioneMatematica("somma");

console.log(operazione(20, 11));


// funzioni anonime con esempio di map();

const prodotti = [{ nome: "carta", venduto: true }, { nome: "penna", venduto: false }, { nome: "gomma", venduto: true }];

const prodottiAggiornata = prodotti.map((elemento) => {
    if (elemento.venduto) {
        return { nome: elemento.nome + " - venduto", venduto: elemento.venduto }
    } else {
        return elemento;
    }
})

console.log(prodottiAggiornata);