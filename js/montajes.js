const gridFotos = document.getElementById("gridFotos");
const numImagenesMontaje = 24;

window.onload = function() {
    for (let i = numImagenesMontaje; i >= 1; i--) {
        const imagen = './img/montajes/' + i  + '.jpg';
        createCard(i, imagen);
    }
    imagenesAnalogicasHorizontales.classList.remove('placeholder');
}

function createCard(index, imagen) {
    const card = 
    `<div class="col main-card">
        <a href=`+imagen+` target="_blank">
        <div class="card shadow-sm card-polaroid">
            <img src=`+imagen+` class="card-img" height="300px"/>
        </div>
        </a>
    </div>`;
    gridFotos.innerHTML += card;
}
