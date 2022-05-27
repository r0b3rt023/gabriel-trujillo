const imagenesAnalogicasHorizontales = document.getElementById("imagenesAnalogicasHorizontales");
const carouselIndicators = document.getElementById('carouselIndicators');
const gridFotos = document.getElementById("gridFotos");
const numImagenes = 20;

window.onload = function() {
    for (let i = 0; i < numImagenes; i++) {
        createIndicators(i);
        createImg(i);
        createCard(i);
    }
    imagenesAnalogicasHorizontales.classList.remove('placeholder');
}

function createImg(index) {
    //Creamos el contenedor
    const div = document.createElement('div');
    div.classList.add("carousel-item", "w-100");
    //Creamos la imagen
    const img = document.createElement('img');
    img.src = '/img/analogicas/' + index  + '.jpg';
    img.classList.add("d-block", "w-100", "img-carousel");
    //Comprobamos el indice
    if(index == 0) {
        div.classList.add("active");
    }

    div.appendChild(img);
    imagenesAnalogicasHorizontales.appendChild(div);
}

function createIndicators(index) {
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-slide-to', index);
    indicator.setAttribute('data-bs-target', '#carouselAnalogicasHorizontales');
    //Compruebo el indice
    if(index == 0) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', true);
    }

    carouselIndicators.appendChild(indicator);
}

function createCard(index) {
    const src = '/img/analogicas/' + index  + '.jpg';

    const div = 
    `<div class="col main-card">
        <a href=`+src+` target="_blank">
        <div class="card shadow-sm card-polaroid">
            <div class="pushpin"></div>
            <img src=`+src+` class="card-img" height="300px"/>
            <div class="show-img">
                <i class="fa-solid fa-eye fa-5x"></i>
            </div>
        </div>
        </a>
    </div>`;
    gridFotos.innerHTML += div;
}
