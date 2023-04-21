export class Persona {
    nome: string;
    cognome: string;
    eta: number

    constructor(nome:string, cognome: string, eta: number){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    getNomeCompleto(): string {
        return this.nome + this.cognome;
    }
}