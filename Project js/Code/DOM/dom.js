
//Sintassi con getElementsByTagName per prendere solo il primo elmenento
let logo = document.getElementsByTagName("h1")[0];

logo.style.color = "blue"

//Sintassi per modificare più elementi contemporaneamente

let headings = document.getElementsByTagName("h1");

for (let h1 of headings) {
    h1.style.color = "green"
}


//querySelector

let intestazioni = document.querySelectorAll("h1");

for (let h1 of intestazioni) {
    h1.style.color = "pink"
}

intestazioni[0].style.color = "red";


//selezionare elementi per nome di classe

//let testo = document.querySelectorAll(".testo")
let testo = document.getElementsByClassName("testo");

for (let p of testo) {
    p.style.color = "crimson"
    p.style.fontSize = "25px"
}

testo[0].style.color = "violet";



//CREATE ELEMENT

let sottotitolo = document.createElement("h1");

sottotitolo.textContent = "";
//sottotitolo.innerText = "Ciao"

// let contenuto = document.createTextNode("Sono stato creato da JavaScript");
// sottotitolo.appendChild(contenuto);

document.body.appendChild(sottotitolo);


//AddEventListner Esempio completo con removeChild, createElement, Event.Target
//setAttribute, getAttribute

let btn = document.querySelector("#aggiungi");
let contenitore = document.querySelector("#contenitore")
let contatore = 0;

btn.addEventListener("click", function () {
    contatore++;
    let aggiunto = document.createElement("div");
    aggiunto.setAttribute("id", "div" + contatore);
    let elimina = document.createElement("p");
    elimina.addEventListener("click", prova);
    elimina.setAttribute("id", "elimina")
    elimina.style.color = "red";
    elimina.textContent = "Elimina";
    aggiunto.textContent = "Elemento numero " + contatore;
    aggiunto.appendChild(elimina);
    contenitore.appendChild(aggiunto);

})


function prova(e) {
    let elimina = e.target
    let id = elimina.parentNode.getAttribute("id")
    contenitore.removeChild(document.querySelector("#" + id))
}

