const parallax = document.getElementById('header-parallax');

let imgActual = 1;

const image1 = './img/analogicas/8.jpg';
const image2 = './img/analogicas/10.jpg';
const image3 = './img/analogicas/16.jpg';

setInterval(changeBackground, 3000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeBackground() {
    parallax.classList.remove('fade-in');
    parallax.classList.add('fade-out');
    await sleep(500);
    if(imgActual === 1) {
        parallax.style.cssText = 'background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("' + image1 + '")';
        imgActual++;
    } else if(imgActual === 2) {
        parallax.style.cssText = 'background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("' + image2 + '")';
        imgActual++;
    } else {
        parallax.style.cssText = 'background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url("' + image3 + '")';
        imgActual = 1;
    }

    parallax.classList.add('fade-in');
    parallax.classList.remove('fade-out');
    
    console.log(imgActual);
}

changeBackground();