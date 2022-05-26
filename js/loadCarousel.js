const imagenesAnalogicasHorizontales = document.getElementById("imagenesAnalogicasHorizontales");
const carouselIndicators = document.getElementById('carouselIndicators');
const numImagenes = 12;

window.onload = function() {
    for (let i = 0; i < numImagenes; i++) {
        createImg(i);
    }

    for (let i = 0; i < numImagenes; i++) {
        createIndicators(i);
    }

    imagenesAnalogicasHorizontales.classList.remove('placeholder');
}

function createImg(index) {
    //Creamos el contenedor
    const div = document.createElement('div');
    div.classList.add("carousel-item", "w-100");
    //Creamos la imagen
    const img = document.createElement('img');
    img.src = '../img/analogicas/horizontales/' + index  + '.jpg';
    img.classList.add("d-block", "w-100");
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

