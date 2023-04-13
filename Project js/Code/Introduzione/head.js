// window.onload = () => {
//     let titolo = document.querySelector("#titolo");

//     titolo.style.color = "red";
// }

window.addEventListener("load", function () {
    prova();
})



function prova() {
    let titolo = document.getElementById("titolo");
    console.log(titolo);
    titolo.style.color = "red";
    //titolo.getStyle().setColor("red");
    //titolo.textContent = "Ciao!";
    titolo.innerText = "Ciao!";
}

/*
    public class Element {

        ...
        Style style;
    }


    public class Style{
        
        String color;
    }
*/