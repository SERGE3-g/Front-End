let btn = document.querySelector("button");

btn.addEventListener("click", handleEvent);


function handleEvent(e) {
    console.log(e.type);
    console.log(e.target.parentNode);
    e.preventDefault();
    console.log(e.screenX);
    console.log(e.screenY);
}

let div = document.querySelector("div");

document.body.addEventListener("click", handleEvent);