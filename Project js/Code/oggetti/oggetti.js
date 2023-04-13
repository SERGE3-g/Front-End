//Oggetto Literals

const computer = {
    schedaVideo: "nvidia geforce 3060",
    schedaAudio: "boh non lo so",
    ram: 16,
    ssd: 256,
    SO: "Windows",
    CPU: "i7 11th gen",

    accendiComputer: function () {
        console.log(this.SO + " si accende");
    },

    stampaScheda: function (suffisso) {
        if (suffisso != "Video" && suffisso != "Audio") {
            console.log("devi scrivere o Audio o Video!")
            return
        }
        console.log(this["scheda" + suffisso])
    }
}

//mutabilità degli oggetti di javascript
computer.tastiera = "boh";
console.log(computer);

computer.stampaScheda("Audio");
computer.accendiComputer();
//square notation
computer["CPU"];
let C = "C";
let P = "P";
let U = "U";
computer[C + P + U];



//Funzioni costruttrici

function Computer(schedaVideo, ram, ssd, So, cpu) {
    this.schedaVideo = schedaVideo;
    this.ram = ram;
    this.ssd = ssd;
    this.So = So;
    this.cpu = cpu;
}

Computer.prototype.accendiComputer = function () {
    console.log(this.So + " si sta accendendo")
}

const acer = new Computer("AMD Radeon 5503", 16, 256, "Windows", "AMD");
const acer2 = new Computer("AMD Radeon 5503", 16, 256, "Windows", "AMD");

//proprietà mutevole degli oggetti di javascript
acer2.qualcosa = 100;

console.log(acer2.qualcosa); //100
console.log(acer.qualcosa); //undefined
console.log(acer); //non sarà stato aggiunto alcunché all'interno dell'oggetto acer, ma solo nell'oggetto acer2
console.log(acer2)

acer.accendiComputer();

//sintassi ecmaScript 6 per le classi

class NomeClasse {

    constructor(_nome, cognome) {
        this._nome = _nome;
        this.cognome = cognome;
    }

    nomeFunzione() {
        console.log(this.nome + " " + this.cognome);
    }

    get nome() {
        return this._nome;
    }

    set nome(nomeNuovo) {
        if (nomeNuovo == "boh") {
            this.nome = "generico"
            console.log("non puoi impostare il nome a boh");
            return;
        }
        this._nome = nomeNuovo;
    }

    get getCognome() {
        return this.cognome;
    }

    set setCognome(cognome) {
        this.cognome = cognome;
    }
}

//ereditarietà in javascript NB: molto simile a quella di Java
class Seconda extends NomeClasse {

    constructor(nome, cognome, eta) {
        super(nome, cognome);
        this.eta = eta;
    }

    nomeFunzione() {
        console.log(this.nome + " " + this.cognome + " di anni: " + this.eta);
    }
}

const obj = new NomeClasse("Renato", "Pipitò");

obj.nomeFunzione();

const secondo = new Seconda("Pippo", "Baudo", 86);

secondo.nomeFunzione();


//utilizzo dei setter e dei getter creati a partire da rigo 79
secondo.nome = "boh";

console.log(secondo.nome)