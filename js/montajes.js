const imagenesAnalogicasHorizontales = document.getElementById("imagenesAnalogicasHorizontales");
const carouselIndicators = document.getElementById('carouselIndicators');
const gridFotos = document.getElementById("gridFotos");
const numImagenesMontaje = 5;

window.onload = function() {
    for (let i = 0; i < numImagenesMontaje; i++) {
        createIndicators(i);
        const imagen = './img/montajes/' + i  + '.jpeg';
        createImg(i, imagen);
        createCard(i, imagen);
    }
    imagenesAnalogicasHorizontales.classList.remove('placeholder');
}

function createImg(index, imagen) {
    //Creamos el contenedor
    const div = document.createElement('div');
    div.classList.add("carousel-item", "w-100");
    //Creamos la imagen
    const img = document.createElement('img');
    img.src = imagen;
    img.classList.add("d-block", "w-100", "img-carousel", "img-carousel-montajes");
    //Comprobamos el indice
    if(index === 0) {
        div.classList.add("active");
    }

    div.appendChild(img);
    imagenesAnalogicasHorizontales.appendChild(div);
}

function createIndicators(index) {
    // const indicator = document.createElement('button');
    // indicator.type = 'button';
    // indicator.setAttribute('data-bs-slide-to', index);
    // indicator.setAttribute('data-bs-target', '#carouselAnalogicasHorizontales');
    //Compruebo el indice
    let isActive = false;
    let active = 'not-active';
    if(index === 0) {
        active = 'active';
        isActive = true;
    }
    const indicator = `<button type='button' data-bs-slide-to=`+index+` data-bs-target='#carouselAnalogicasHorizontales' aria-current=`+isActive+` class=`+active+`></button>`
    carouselIndicators.innerHTML += indicator;
    // carouselIndicators.appendChild(indicator);
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
