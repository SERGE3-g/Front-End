function valida(){
    var cognome = document.form1.cognome.value;
    var nome = document.form1.nome.value;
    var matricola = document.form1.matricola.value;
    var regione = document.form1.regione.value;
    var email = document.form1.email.value;
    var telefono = document.form1.telefono.value;

    if(cognome == ""){
        alert("Inserisci il cognome!")
        return false;
    }
    if(nome == ""){
        alert("Inserisci il nome!")
        return false;
    }
    if(matricola == ""){
        alert("Inserisci la matricola!")
        return false;
    } else {
        var m = parseInt(matricola);
        if(isNaN(m)){
            alert("Inserisci una matricola numerica!");
            return false;
        }
    }
    if(email == "" || telefono == ""){
        alert("Inserisci email o telefono!")
        return false;
    }
    if(regione == "Nessuna"){
        alert("Inserisci la regione!")
        return false;
    }
    alert("Dati inseriti correttamente.");
    return true;
}