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
var studente = /** @class */ (function () {
    // costruttore
    function studente(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    Object.defineProperty(studente.prototype, "studente", {
        // metodi
        get: function () {
            return this.nome + " " + this.cognome + " " + this.eta;
        },
        enumerable: false,
        configurable: true
    });
    return studente;
}());
var studente1 = new studente("Serge", "Guea", 24);
var studente2 = new studente("Marco", "Lanciotti", 25);
var studente3 = new studente("Gian", "Mattia", 19);
var studente4 = new studente("Eleonora", "R", 29);
var studente5 = new studente("Rosita", "lanza", 27);
console.log(studente1.studente);
console.log(studente2.studente);
console.log(studente3.studente);
console.log(studente4.studente);
console.log(studente5.studente);
var insegnante = /** @class */ (function () {
    function insegnante(nome, cognome, eta, materia, classe) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.materia = materia;
        this.classe = classe;
    }
    Object.defineProperty(insegnante.prototype, "insegnante", {
        get: function () {
            return this.nome + " " + this.cognome + " " + this.eta + " " + this.materia + " " + this.classe;
        },
        enumerable: false,
        configurable: true
    });
    return insegnante;
}());
var insegnante1 = new insegnante("Serge", "Guea", 24, "Ts", "1a");
var insegnante2 = new insegnante("Marco", "Bosci", 27, "php", "2a");
var insegnante3 = new insegnante("Riccardo", "Gatto", 33, "C++", "3a");
var insegnante4 = new insegnante("Valerio", "amato", 31, "Js", "4a");
console.log(insegnante1.insegnante);
console.log(insegnante2.insegnante);
console.log(insegnante3.insegnante);
console.log(insegnante4.insegnante);
