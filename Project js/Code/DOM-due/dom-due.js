//Esempio insertBefore(nodoDaAggiungere, nodoGiàPresente)

let p = document.createElement("p");
p.textContent = "Testo articolo prova";

let contenitore = document.querySelector("#contenitore");

//contenitore.appendChild(p);

let titolo = document.querySelector("#intestazione");

contenitore.insertBefore(p, titolo);


//navigare attraverso il dom grazie a diverse variabili native.

console.log(titolo.parentNode);
console.log(titolo.nextSibling);
console.log(titolo.previousSibling);

console.log(titolo.firstChild);
console.log(contenitore.lastChild);
console.log(contenitore.childNodes[contenitore.childNodes.length - 2])

console.log(contenitore.childNodes)

// for (let n of contenitore.childNodes) {
//     n.style.color = "red";
// }


titolo.addEventListener("mouseover", () => {
    setTimeout(() => {
        titolo.style.color = "red"
        let attenzione = document.createElement("h1");
        attenzione.textContent = "ATTENZIONE!"
    }, 3000);
})

titolo.addEventListener("mouseout", () => {
    setTimeout(() => {
        titolo.style.color = "black"
    }, 3000);
})


let tagP = document.querySelector("p");

tagP.addEventListener("dblclick", () => {
    alert("ciao!");
})