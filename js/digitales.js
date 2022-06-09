const gridFotos = document.getElementById("gridFotos");
const numImagenesDigitales = 36;

window.onload = function() {
    for (let i = numImagenesDigitales; i >= 1; i--) {
        const imagen = './img/digitales/' + i  + '.jpg';
        if(i === 26 || i === 24) {
            createCard(imagen, "card-img-adjusted");
        } else {
            createCard(imagen, "");    
        }
    }
    imagenesAnalogicasHorizontales.classList.remove('placeholder');
}

function createCard(imagen, adjusted) {
    const card = 
    `<div class="col main-card">
        <a href=`+imagen+` target="_blank">
        <div class="card shadow-sm card-polaroid">
            <img src=`+imagen+` class="card-img `+adjusted+`" height="300px"/>
        </div>
        </a>
    </div>`;
    gridFotos.innerHTML += card;
}
