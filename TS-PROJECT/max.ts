//var mioMessaggio = { email : "serge@gmail.com", messaggio : "ciao"}
/*Dichiarare e creare un istanza di un interfaccia in ts.
Denominare IceCream e gli diamo due proprietà: gusto e palline. il primo di tipo string e il secondo di tipo number
poi usiamo l'interfaccia con una variabile chiamata myIceCream come tipo IceCream.
Infine creiamo una funzione che se le palline sono più di 4 , ci dice che ce ne sono troppe, altrimenti ci augura buona degustazione.
controlliamo i risultati con il cosole.log
controlliamo il codice ts e js



interface IceCream { 
    gusto : string, palline : number
}

var myIceCream : IceCream = {
     gusto : "fragola", palline : 5
    }

function checkPalline (iceCream : IceCream) {
    if (iceCream.palline > 4) {
        console.log("Ci sono troppe palline")
    } else {
        console.log("Buona degustazione")
    }
}
checkPalline(myIceCream)
*/


// creare una classe
// implementare una classe

/*class user {
    name : string;
    surname: string;
    email : string;
    password : string;
    confirm : string;

    constructor(name : string, surname : string, email : string, password : string, confirm : string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
    }

    // accessi
    get userLogin () : string {
        return this.name + " " + this.surname + " " + this.email + " " + this.password + " " + this.confirm; 
    }
    set userLogin (newPass : string) {
        this.password = newPass;
    }
}

var nuovoUser = new user("Serge", "Guea", "sergeguea@gmail.com", "123456", "123456");
console.log(nuovoUser.userLogin)
nuovoUser.userLogin = 'nuova password'
console.log(nuovoUser.userLogin)*/


// creare una classe con tre proprietà  e accedere ad una sua proprietà
// creare una classe con tre proprietà  di sola lettura
// creare una classe con tre proprietà   di cui due in sola lettura e una in scrittura


// creare una classe con tre proprietà  e accedere ad una sua proprietà
/*class automobile {
    marca : string;
    modello : string;
    colore : string;

    constructor(marca : string, modello : string, colore : string) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    getMarca() {
        return this.marca
    }
    getModello() {
        return this.modello
    }
    getColore() {
        return this.colore
    }
    setColore(colore : string) {
        this.colore = colore
    }

}

var auto1 = new automobile("Audi", "A1", "rosso");
console.log(auto1.getMarca(), auto1.getModello(), auto1.getColore())
auto1.setColore("verde")
console.log(auto1.getMarca(), auto1.getModello(), auto1.getColore())

// creare una classe con tre proprietà  di sola lettura
class automobile2 {
    private marca : string;
    private modello : string;
    private colore : string;
    
    constructor(marca : string, modello : string, colore : string) {
        this.marca = marca;
        this.modello=modello;
        this.colore=colore;
        
    }


    getMarca() {
        return this.marca
    }
    getModello() {
        return this.modello
    }
    getColore() {
        return this.colore
    }
    
}

var auto2 = new automobile2("Fiat", "500", "rosso");
console.log(auto2.getMarca(), auto2.getModello(), auto2.getColore())


// creare una classe con tre proprietà   di cui due in sola lettura e una in scrittura
class automobile3 {

    private colore :string;
    private modello : string;
    private marca : string;

    constructor(marca : string, modello : string, colore : string) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    
    // creo getter e setter
    getMarca() {
        return this.marca
    }
    getModello() {
        return this.modello
    }
    getColore() {
        return this.colore
    }
    setColore(colore : string) {
        this.colore = colore
    }

}

var auto3 = new automobile3("Bmw", "x4", "bianco");
console.log(auto3.getMarca(), auto3.getModello(), auto3.getColore())
auto3.setColore("verde")
console.log(auto3.getMarca(), auto3.getModello(), auto3.getColore())

//
class user {
    name : string;
    surname: string;
    email : string;
    password : string;
    confirm : string;

    constructor(name : string, surname : string, email : string, password : string, confirm : string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
    }

    // accessi
    get userLogin () : string {
        return this.name + " " + this.surname + " " + this.email + " " + this.password + " " + this.confirm; 
    }
    set userLogin (newPass : string) {
        this.password = newPass;
    }
}

var nuovoUser = new user("Serge", "Guea", "sergeguea@gmail.com", "123456", "123456");
console.log(nuovoUser.userLogin)
nuovoUser.userLogin = 'nuova password'
console.log(nuovoUser.userLogin)
*/


// ereditarietà in ts
// enum in ts

// creare una classe con tre proprietà  e poi estenderla con altre due proprietà

/*class persona {
    // proprietà
    private nome : string;
    private cognome : string;
    private mensione : number;

    // costruttore
    constructor(nome : string, cognome : string, mensione : number) {
        this.nome = nome;
        this.cognome = cognome;
        this.mensione = mensione;
    }
    // metodi
    get dipendente() : string {
        return this.nome + " " + this.cognome + " " + this.mensione;
    }

}
enum Mensione {
    impiegato = 1,
    dirigente = 2,
    amministratore = 3
}

class impiegato extends persona {
    private stipendio : number;
    private cf : string;
    private eta : number;

    constructor(nome : string, cognome : string, mensione : number, stipendio : number, cf : string, eta : number) {
        super(nome, cognome, mensione);
        this.stipendio = stipendio;
        this.cf = cf;
        this.eta = eta;
    }
    get impiegato() : string {
        return this.dipendente + " " + this.stipendio + " " + this.cf + " " + this.eta;
    }
}

var impiegato1 = new impiegato("Serge", "Guea", Mensione.impiegato, 2500, "123456789", 24);
var impiegato2 = new impiegato("Mario", "Rossi", Mensione.dirigente, 3500, "987654321", 30);
var impiegato3 = new impiegato("Luca", "Bianchi", Mensione.amministratore, 4500, "123456789", 40);

console.log(impiegato1.impiegato)
console.log(impiegato2.impiegato)
console.log(impiegato3.impiegato)

document.getElementById('impiegato').innerHTML = impiegato1.impiegato;
document.getElementById('impiegato').innerHTML = impiegato2.impiegato;
document.getElementById('impiegato').innerHTML = impiegato3.impiegato;
*/

 
// classi e interfaccia

/*interface persona {
    nome : string;
    cognome : string;
    eta : number;
}
class studente implements persona {
    nome : string;
    cognome : string;
    eta : number;
    
    // costruttore
    constructor(nome : string, cognome : string, eta : number) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    // metodi
    get studente() : string {
        return this.nome + " " + this.cognome + " " + this.eta;
    }
}

var studente1 = new studente("Serge", "Guea", 24);
var studente2 = new studente("Marco", "Lanciotti", 25);
var studente3 = new studente("Gian", "Mattia", 19);
var studente4 = new studente("Eleonora", "R", 29);
var studente5 = new studente("Rosita", "lanza", 27)

console.log(studente1.studente)
console.log(studente2.studente)
console.log(studente3.studente)
console.log(studente4.studente)
console.log(studente5.studente)


interface professore extends persona {
    materia : string;
    classe : string;
}

class insegnante implements professore {
    nome : string;
    cognome : string;
    eta : number;
    materia : string;
    classe : string;

    constructor(nome : string, cognome : string, eta : number, materia : string, classe : string) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.materia = materia;
        this.classe = classe;
    }
    get insegnante() : string {
        return this.nome + " " + this.cognome + " " + this.eta + " " + this.materia + " " + this.classe;
    }
}

var insegnante1 = new insegnante("Serge", "Guea", 24, "Ts", "1a");
var insegnante2 = new insegnante("Marco", "Bosci", 27, "php", "2a");
var insegnante3 = new insegnante("Riccardo", "Gatto", 33, "C++", "3a");
var insegnante4 = new insegnante("Valerio", "amato", 31, "Js", "4a");

console.log(insegnante1.insegnante)
console.log(insegnante2.insegnante)
console.log(insegnante3.insegnante)
console.log(insegnante4.insegnante)
*/


// Mixins in ts

// funzioni e tipizzazione

interface FunzioneSuNumeri{
    (x : number, y : number) : number;

}

var somma : FunzioneSuNumeri = function(x : number, y : number) : number {
    return x + y;
}

var somma:(x:number, y:number) => number = function(x:number, y:number) : number {
    return x + y;
}

