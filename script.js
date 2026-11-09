

const carrusel = document.querySelector(".contenedor-productos");


const flechaAnterior = document.querySelector(".flecha-anterior");
const flechaSiguiente = document.querySelector(".flecha-siguiente");



//DURACIÓN DE LA ANIMACIÓN

const duracionAnimacion = 600;


// DETECTAR SI EL USUARIO PREFIERE REDUCIR LAS ANIMACIONES
const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");







let tiempoInicio = null;
let posicionInicial = 0;
let animacionActiva = false;
let direccion = 1;

const tarjetaProducto = carrusel.querySelector(".tarjeta-producto");

let anchoTarjeta = tarjetaProducto.getBoundingClientRect().width;




let separacionTarjetas = parseFloat(getComputedStyle(carrusel).gap);




function actualizarFlechas() {

    const posicionActual = carrusel.scrollLeft;

    const desplazamientoMaximo =
        carrusel.scrollWidth - carrusel.clientWidth;

    flechaAnterior.disabled = posicionActual <= 1;

    flechaSiguiente.disabled =
        posicionActual >= desplazamientoMaximo - 1;
}




function animarCarrusel(tiempoActual) {

        // RESPETAR LA PREFERENCIA DE MOVIMIENTO REDUCIDO
    if (movimientoReducido.matches) {
        carrusel.scrollLeft = posicionInicial +
            (anchoTarjeta + separacionTarjetas) * direccion;

        animacionActiva = false;
        actualizarFlechas();
        return;
    }

    if (tiempoInicio === null) {
        tiempoInicio = tiempoActual;
    }

    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    const progreso = Math.min(tiempoTranscurrido / duracionAnimacion, 1);

    const progresoSuave = progreso * progreso * (3 -2 * progreso);
    
    const distancia = (anchoTarjeta + separacionTarjetas) * progresoSuave * direccion;
    carrusel.scrollLeft = posicionInicial + distancia;

    



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


