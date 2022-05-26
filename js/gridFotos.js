const gridFotos = document.getElementById("gridFotos");

function createCard(index) {
    const src = '../img/analogicas/horizontales/' + index  + '.jpg';
    const col = document.createElement("div");
    col.classList.add("col");

    const card = document.createElement("div");
    card.classList.add("card", "shadow-sm");

    const img = document.createElement("img");
    img.src = src;
    img.height = 250;
    img.classList.add("card-img")

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "justify-content-center", "align-items-center");

    const enlace = document.createElement("a");
    enlace.href = src;
    enlace.target = '_blank';
    enlace.classList.add("btn", "btn-secondary");
    enlace.innerText = "Ver";

    cardBody.appendChild(enlace);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);

    gridFotos.appendChild(col);
}

for (let i = 0; i < numImagenes; i++) {
    createCard(i);
}

