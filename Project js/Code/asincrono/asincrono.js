//immaginiamo che questa variabile sia l'arrivo di dati da un database
//true significa che i dati sono arrivati correttamente dal database
//false significa che i dati non sono arrivati correttamente dal database


function funzionePromise() {

    return new Promise((resolve, reject) => {
        const dati = false; //interrogazione database
        if (dati) {
            resolve("i dati sono arrivati con successo!")
        } else {
            reject("i dati NON sono arrivati")
        }
    });

}

funzionePromise().then(() => {
    return "è tutto ok"
}).then((x) => {
    console.log("si, " + x);
}).catch(() => {
    console.error("tutto male")
})

console.log(funzionePromise())


//async await

const funzione = async (variabile) => {
    const promise = new Promise((resolve, reject) => {
        if (variabile == "si") {
            setTimeout(() => {
                resolve("OK")
            }, 2000);
        } else {
            setTimeout(() => {
                reject("NO!")
            }, 2000)
        }
    })

    const risultato = await promise;

    console.log(risultato)
}


funzione("dfasdf");
