console.log("JavaScript de Canino & Michi funcionando");

const carrusel = document.querySelector(".contenedor-productos");

console.log(carrusel);

const flechaAnterior = document.querySelector(".flecha-anterior");
const flechaSiguiente = document.querySelector(".flecha-siguiente");

console.log(flechaAnterior);
console.log(flechaSiguiente);

//DURACIÓN DE LA ANIMACIÓN

const duracionAnimacion = 600;

console.log("Duración de animación:", duracionAnimacion);






let tiempoInicio = null;
let posicionInicial = 0;
let animacionActiva = false;
let direccion = 1;

const tarjetaProducto = carrusel.querySelector(".tarjeta-producto");

let anchoTarjeta = tarjetaProducto.getBoundingClientRect().width;

console.log("Ancho real de la tarjeta:", anchoTarjeta);



let separacionTarjetas = parseFloat(getComputedStyle(carrusel).gap);

console.log("Separación entre tarjetas:", separacionTarjetas);



function actualizarFlechas() {

    const posicionActual = carrusel.scrollLeft;

    const desplazamientoMaximo =
        carrusel.scrollWidth - carrusel.clientWidth;

    flechaAnterior.disabled = posicionActual <= 1;

    flechaSiguiente.disabled =
        posicionActual >= desplazamientoMaximo - 1;
}




function animarCarrusel(tiempoActual) {

    if (tiempoInicio === null) {
        tiempoInicio = tiempoActual;
    }

    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    const progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1);

    const progresoSuave = progreso * progreso * (3 -2 * progreso);
    
    const distancia = (anchoTarjeta + separacionTarjetas) * progresoSuave * direccion;
    carrusel.scrollLeft = posicionInicial + distancia;

    console.log("Distancia recorrida:", distancia);
    
    console.log("Progreso:", progreso);


    console.log("Tiempo transcurrido:", tiempoTranscurrido);

    if (tiempoTranscurrido < duracionAnimacion) {
        requestAnimationFrame(animarCarrusel);
    } else {
        animacionActiva = false;
        actualizarFlechas();
    }
}






//FLECHA DERECHA

flechaSiguiente.addEventListener("click", function() {

    if (animacionActiva) {
        return;
    }

    animacionActiva = true;

    anchoTarjeta = tarjetaProducto.getBoundingClientRect().width;
    separacionTarjetas = parseFloat(getComputedStyle(carrusel).gap);

    direccion = 1; // Avanzar hacia la derecha

    tiempoInicio = null;
    posicionInicial = carrusel.scrollLeft;

    requestAnimationFrame(animarCarrusel);
});



//FLECHA IZQUIERDA

flechaAnterior.addEventListener("click", function() {

    if (animacionActiva) {
        return;
    }

    animacionActiva = true;

    anchoTarjeta = tarjetaProducto.getBoundingClientRect().width;
    separacionTarjetas = parseFloat(getComputedStyle(carrusel).gap);

    direccion = -1;
    tiempoInicio = null;
    posicionInicial = carrusel.scrollLeft;

    requestAnimationFrame(animarCarrusel);
});

actualizarFlechas();

//ACTUALIZAR FLECHAS AL CAMBIAR EL TAMAÑO DE LA VENTANA

window.addEventListener("resize", actualizarFlechas);


