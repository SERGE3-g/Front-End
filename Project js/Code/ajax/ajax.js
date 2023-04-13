const ajaxFunction = () => {
    httpRequest = new XMLHttpRequest();
    //specifico quale funzione invocare quando bisognerà gestire la response
    httpRequest.onreadystatechange = handler;
    //qui specifico la request (metodo e url)
    httpRequest.open('GET',
        "https://jsonplaceholder.typicode.com/users")

    //qui invio la richiesta
    httpRequest.send();
}

let httpRequest;
let btn = document.querySelector("button");
let contenitore = document.querySelector("#contenitore")

btn.addEventListener("click", ajaxFunction);

const handler = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            const utenti = JSON.parse(httpRequest.responseText)
            console.log(utenti[0].name)

            //stampo il nome di un singolo utente
            // let user = document.createElement("h1");
            // user.textContent = utenti[0].name;
            // contenitore.appendChild(user);

            for (let u of utenti) {
                let user = document.createElement("h1");
                user.textContent = u.name;
                contenitore.appendChild(user);
            }
        } else {
            console.err(httpRequest.status + " Error")
        }
    }
}