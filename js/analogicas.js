const gridFotos = document.getElementById("gridFotos");
const numImagenesAnalogicas = 29;

window.onload = function() {
    for (let i = numImagenesAnalogicas-1; i >= 0; i--) {
        const imagen = './img/analogicas/' + i  + '.jpg';
        createCard(i, imagen);
    }
    imagenesAnalogicasHorizontales.classList.remove('placeholder');
}

function createCard(index, imagen) {
    const card = 
    `<div class="col main-card">
        <a href=`+imagen+` target="_blank">
        <div class="card-polaroid">
            <img src=`+imagen+` loading="lazy" class="card-img" height="300px"/>
        </div>
        </a>
    </div>`;
    gridFotos.innerHTML += card;
}
