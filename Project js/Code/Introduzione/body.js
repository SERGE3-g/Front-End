//LINGUAGGIO FORTEMENTE TIPATO. es. Java
// int numero = 100;
// String nome = "Renato";

//public int somma(int a, int b)

//final double PI = 3.14

//In JavaScript abbiamo un approccio non fortemente Tipato

//let e const

let nome = "Renato";
let eta = 30;
let docente = true;


function somma(a, b) {
    if (typeof a == "undefined" || typeof b == "undefined") {
        return "Operazione matematica non possibile!"
    }
    return a + b;
}

const PI = 3.14;