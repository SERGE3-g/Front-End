let contenitore = document.querySelector("#contenitore");

const fetchFunction = async () => {
    const response =
        await fetch("https://jsonplaceholder.typicode.com/users")
    data = await response.json();
    console.log(data)
    for (let d of data) {
        let user = document.createElement("h1");
        user.textContent = d.name;
        contenitore.appendChild(user)
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", fetchFunction);



//esempio fetch POST method

const persona = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

const fetchFunctionPOST = async () => {
    const response =
        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(persona)
        })
    data = await response.json();
    console.log(data)
}