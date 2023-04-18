const set = new Set([serge, john, paul, ringo, george]);
console.log(set.size); // 5
console.log(set.has(serge)); // true
console.log(set.has(john)); // true
console.log(set.has(paul)); // true
console.log(set.has(ringo)); // true
console.log(set.has(george)); // true
console.log(set.has('serge')); // false
console.log(set.has('john')); // false

for (const member of set) {
  console.log(member);
}
// function increment è una funzione che prende un numero e lo incrementa di incrementBy
let increment = function(incrementBy) {
  return function(number) {
    return number + incrementBy;
  };
}
// incrementByTwo è una funzione che prende un numero e lo incrementa di 2
let incrementByTwo = increment(2);
console.log(incrementByTwo(1)); // 3
console.log(incrementByTwo(2)); // 4
console.log(incrementByTwo(3)); // 5
console.log(incrementByTwo(4)); // 6

//creo l'oggetto 
let audi = {
    model: 'A3',
    color: 'red',
    year: 2018,
    km: 0,
}
let bmw = {
    model: 'X5',
    color: 'black',
    year: 2019,
    km: 0,
}
let panda = {
    model: '500',
    color: 'white',
    year: 2017,
    km: 0,
}

const cars = [audi, bmw, panda];
console.log(cars);


    //creo un metodo per l'oggetto
    audi.drive = function(km) {
        this.km += km;
    }
    audi.drive(100);
    console.log(audi.km);

    //creo un metodo per l'oggetto
    bmw.drive = function(km) {
        this.km += km;
    }
    bmw.drive(200);
    console.log(bmw.km);

    //creo un metodo per l'oggetto
    panda.drive = function(km) {
        this.km += km;
    }
    panda.drive(300);
    console.log(panda.km);

   // creo oggetto user con proprietà name e surname
    let user = {
        name: 'Serge',
        surname: 'Bouvier',
    }
    // creo oggetto admin con proprietà name e surname
    let admin = {
        name: 'John',
        surname: 'Lennon',
    }

    //arrow function  
    let sum = (a, b) => a + b;
    console.log(sum(1, 2)); // 3

    //arrow function classica
    let  = function(a, b) {
        return a + b;
    }
    console.log(sum(1, 2)); // 3

    //arrow function con un solo parametro
    let eta = prompt('Quanti anni hai?');
    let message = (eta < 18) ? // if
        () => alert('Sei minorenne') : //esle
        () => alert('Sei maggiorenne');
    message();


    // Function callback
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }
    setTimeout(() => {
        ask(
            "Accetti?",
            () => alert("Accettato."),
            () => alert("Rifiutato.")
        );
    }
    , 1000);

    Function

    // Function 