// const array = [1, true, "ciao", [1, 2, 3], { nome: "renato", funzione: () => { console.log("sono il metodo") } }];

// for (let elemento of array) {
//     console.log(elemento);
// }


// let oggetto = array[4];


// oggetto.funzione();

//AGGIUNGERE ELEMENTI A UN ARRAY
const colori = ["Rosso", "Blu", "Verde"];

// colori[3] = "Viola";
// colori[colori.length] = "Viola";
//METODO PUSH

colori.push("Viola");
colori.push("Giallo");

//per aggiungere un elemento all'inizio dell'array utilizziamo
//il metodo UNSHIFT

colori.unshift("Rosa");
colori.unshift("Bordeaux");

//RIMUOVERE ELEMENTI DA UN ARRAY

//pop rimuove l'ultimo elemento
colori.pop();

//shift rimuove il primo elemento
colori.shift();

console.log(colori)

//COPIARE UN ARRAY

const coloriDue = colori.slice();

console.log(coloriDue)

//due indirizzi di memoria differenti
//console.log(colori == coloriDue);


//controllare se un valore specifico è pressente all'interno di un array

console.log(colori.includes("Rosso"));

//unire due array

const coloriTre = colori.concat(coloriDue);

console.log(coloriTre)


//controllare se una variabile è un array.
console.log(Array.isArray(colori));


//Spread operator con gli array.

const parole = [colori, coloriDue];

console.log(parole);
console.log(parole[0][1]);

//SE VOLESSI INVECE METTERCI SOLO GLI ELEMENTI!?
//faremmo un doppio ciclo for
//ma viene in soccorso lo spread operator

const paroleDue = [...colori, ...coloriDue];

console.log(paroleDue);


//Destructuring di un array

[rosa, rosso, blu, verde, viola, giallo] = colori;

console.log(rosa);
console.log(blu);
console.log(verde);
console.log(giallo)

//spread operator con metodi e array

function somma(a, b) {
    return a + b;
}

const numeri = [5, 10];

console.log(somma(...numeri));

//array e oggetti con lo spread operator

const oggetto = { ...colori };

console.log(oggetto)


//spread operator solo con gli oggetti

const persona = {
    nome: "Nome",
    cognome: "cognome"
}

const indirizzo = {
    via: "tal dei tali",
    numero: "20",
    città: "trento"
}

const personaCompleta = { ...indirizzo, ...persona };

console.log(personaCompleta);

eliminaElemento(verde, colori);

console.log(colori);

eliminaElemento("nero", colori);

console.log(colori);




//eliminare un elemento specifico dell'array

function eliminaElemento(elemento, collezione) {

    if (!Array.isArray(collezione)) {
        console.log("devi passare come secondo parametro un array valido!")
        return;
    }

    if (collezione.includes(elemento)) {

        //let indiceDaEliminare = collezione.indexOf(elemento);

        for (let i = 0; i < collezione.length - 1; i++) {
            if (collezione[i] == elemento) {
                collezione[i] = collezione[i + 1];
                collezione[i + 1] = elemento;
            }
        }

        collezione.pop();
    } else {
        console.log("elemento non presente!");
    }
}