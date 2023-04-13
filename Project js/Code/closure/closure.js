const Persona = function (nome, nazionalita) {
    this.nome = nome;
    this.nazionalita = nazionalita;
}

const p1 = new Persona("Renato", "Italiana");
const p2 = new Persona("Piere", "Francese");
const p3 = new Persona("Davide", "Italiana");

function generatorePassaporto(nazione) {
    return function (nome) {
        return "il passaporto di " + nome + " è stato rilasciato in " + nazione;
    }
}


const italia = generatorePassaporto("Italia");
const francia = generatorePassaporto("Francia");


const persone = new Array(p1, p2, p3);

for (let p of persone) {
    if (p.nazionalita == "Italiana") {
        console.log(italia(p.nome))
    } else if (p.nazionalita == "Francese") {
        console.log(francia(p.nome))
    }
}

