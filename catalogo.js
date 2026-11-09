/* =========================================
   SELECCIÓN DE COLORES DEL CATÁLOGO
========================================= */

// BUSCAMOS TODAS LAS TARJETAS DE PRODUCTOS
const tarjetasConColores = document.querySelectorAll(".producto-catalogo");

// RECORREMOS CADA TARJETA DE MANERA INDEPENDIENTE
tarjetasConColores.forEach((tarjeta) => {

    // BUSCAMOS LOS COLORES SOLO DENTRO DE ESTA TARJETA
    const botonesColores = tarjeta.querySelectorAll(".color-opcion");

    // RECORREMOS CADA BOTÓN DE COLOR DEL PRODUCTO
    botonesColores.forEach((boton) => {

        // DETECTAMOS CUANDO EL CLIENTE HACE CLIC
        boton.addEventListener("click", () => {

            // QUITAMOS LA SELECCIÓN ANTERIOR SOLO EN ESTA TARJETA
            botonesColores.forEach((otroBoton) => {
                otroBoton.classList.remove("seleccionado");
                otroBoton.setAttribute("aria-pressed", "false");
            });

            // MARCAMOS EL NUEVO COLOR SELECCIONADO
            boton.classList.add("seleccionado");
            boton.setAttribute("aria-pressed", "true");

            // MOSTRAMOS EL COLOR EN LA CONSOLA
            console.log("Color seleccionado:", boton.dataset.color);

        });

    });

});











/* =========================================
   GALERÍAS INDEPENDIENTES DE LOS PRODUCTOS
========================================= */

// BUSCAMOS TODAS LAS TARJETAS DEL CATÁLOGO
const tarjetasProductos = document.querySelectorAll(".producto-catalogo");

// RECORREMOS CADA TARJETA POR SEPARADO
tarjetasProductos.forEach((tarjeta) => {

    // BUSCAMOS LA FOTOGRAFÍA PRINCIPAL DENTRO DE ESTA TARJETA
    const imagenPrincipal = tarjeta.querySelector("img");

    // Buscamos las miniaturas que utilizan el sistema general de galerías.
// Excluimos las de la chamarrita, que tienen su propia función.
const miniaturas = tarjeta.querySelectorAll(
    ".miniatura-opcion[data-imagen]"
);

    // RECORREMOS LAS MINIATURAS DEL PRODUCTO ACTUAL
    miniaturas.forEach((miniatura) => {

        // DETECTAMOS CUANDO EL CLIENTE SELECCIONA UNA MINIATURA
        miniatura.addEventListener("click", () => {

            // OBTENEMOS LA RUTA Y DESCRIPCIÓN DE LA FOTOGRAFÍA
            const nuevaImagen = miniatura.dataset.imagen;
            const nuevaDescripcion = miniatura.dataset.descripcion;

            // CAMBIAMOS SOLO LA FOTOGRAFÍA DE ESTA TARJETA
            imagenPrincipal.src = nuevaImagen;
            imagenPrincipal.alt = nuevaDescripcion;

            // DESACTIVAMOS LAS MINIATURAS DE ESTA TARJETA
            miniaturas.forEach((otraMiniatura) => {
                otraMiniatura.classList.remove("miniatura-activa");
                otraMiniatura.setAttribute("aria-pressed", "false");
            });

            // ACTIVAMOS LA MINIATURA SELECCIONADA
            miniatura.classList.add("miniatura-activa");
            miniatura.setAttribute("aria-pressed", "true");

            // MOSTRAMOS LA FOTOGRAFÍA SELECCIONADA EN LA CONSOLA
            console.log("Fotografía seleccionada:", nuevaImagen);

        });

    });

});
















/* =========================================
   SELECCIÓN INDEPENDIENTE DE TALLAS
========================================= */

// BUSCAMOS TODAS LAS TARJETAS DEL CATÁLOGO
const tarjetasConTallas = document.querySelectorAll(".producto-catalogo");

// RECORREMOS CADA TARJETA POR SEPARADO
tarjetasConTallas.forEach((tarjeta) => {

    // BUSCAMOS LAS TALLAS SOLO DENTRO DE ESTA TARJETA
    const botonesTallas = tarjeta.querySelectorAll(".talla-opcion");

    // RECORREMOS CADA BOTÓN DE TALLA
    botonesTallas.forEach((boton) => {

        // DETECTAMOS CUANDO EL CLIENTE SELECCIONA UNA TALLA
        boton.addEventListener("click", () => {

            // QUITAMOS LA SELECCIÓN ANTERIOR SOLO EN ESTA TARJETA
            botonesTallas.forEach((otraTalla) => {
                otraTalla.classList.remove("seleccionada");
                otraTalla.setAttribute("aria-pressed", "false");
            });

            // ACTIVAMOS LA TALLA ELEGIDA
            boton.classList.add("seleccionada");
            boton.setAttribute("aria-pressed", "true");

            // MOSTRAMOS LA TALLA EN LA CONSOLA
            console.log("Talla seleccionada:", boton.dataset.talla);

        });

    });

});













/* =========================================
   PEDIDOS INDEPENDIENTES POR WHATSAPP
========================================= */

// BUSCAMOS TODAS LAS TARJETAS DEL CATÁLOGO
const tarjetasParaPedidos = document.querySelectorAll(".producto-catalogo");

// RECORREMOS CADA PRODUCTO POR SEPARADO
tarjetasParaPedidos.forEach((tarjeta) => {

    // BUSCAMOS EL BOTÓN DE WHATSAPP DE ESTA TARJETA
    const botonPedido = tarjeta.querySelector(".boton-pedido-catalogo");

    // COMPROBAMOS QUE EL PRODUCTO TENGA BOTÓN
    if (!botonPedido) return;

    // DETECTAMOS CUANDO EL CLIENTE PRESIONA EL BOTÓN
    botonPedido.addEventListener("click", (evento) => {

        // EVITAMOS QUE href="#" MUEVA LA PÁGINA
        evento.preventDefault();

        // OBTENEMOS EL NOMBRE DEL PRODUCTO
        const nombreProducto = tarjeta.querySelector("h3").textContent.trim();

        // BUSCAMOS EL COLOR SELECCIONADO SOLO EN ESTA TARJETA
        const colorSeleccionado = tarjeta.querySelector(".color-opcion.seleccionado");

        // BUSCAMOS LA TALLA SELECCIONADA SOLO EN ESTA TARJETA
        const tallaSeleccionada = tarjeta.querySelector(".talla-opcion.seleccionada");











        /* =========================================
           CREAR EL MENSAJE PERSONALIZADO
        ========================================= */

        // INICIAMOS EL MENSAJE CON EL NOMBRE DEL PRODUCTO
        let mensaje = "¡Hola! Me interesa el producto: " + nombreProducto + ".";

        // AGREGAMOS EL COLOR SI EL CLIENTE LO SELECCIONÓ
        if (colorSeleccionado) {

            // OBTENEMOS EL COLOR GUARDADO EN data-color
            const color = colorSeleccionado.dataset.color;

            // Convertimos el identificador en un nombre legible.
            const nombreColor = (
            tarjeta.classList.contains("producto-dispensador-relieve") &&
            color === "amarillo-anaranjado"
            )
            ? "naranja"
            : color.replaceAll("-", " ");

            

            // COLOCAMOS LA PRIMERA LETRA EN MAYÚSCULA
            // FORMATEAMOS EL COLOR PARA MOSTRARLO EN WHATSAPP
            // CORREGIMOS EL ACENTO DEL COLOR CAFÉ
            const colorFormateado = nombreColor === "cafe"
            ? "Café"
            : nombreColor.charAt(0).toUpperCase() + nombreColor.slice(1);

            // AGREGAMOS EL COLOR AL MENSAJE
            mensaje += "\n\nColor: " + colorFormateado;
        }






        /* =========================================
        COLOR SELECCIONADO DE LA CHAMARRITA
        ========================================= */

// Comprobamos si estamos trabajando con la chamarrita.
if (tarjeta.classList.contains("producto-chamarrita-beisbol")) {

    // Recuperamos el color guardado al seleccionar la miniatura.
    const colorChamarrita = tarjeta.dataset.colorSeleccionado;

    // Agregamos el color únicamente si el cliente lo seleccionó.
    if (colorChamarrita) {

        // Convertimos "azul-marino" en "Azul marino".
        const nombreColor = colorChamarrita.replaceAll("-", " ");

        const colorFormateado =
            nombreColor.charAt(0).toUpperCase() + nombreColor.slice(1);

        // Incorporamos el color al mensaje de WhatsApp.
        mensaje += "\n\nColor: " + colorFormateado;
    }

}











/* =========================================
   PRODUCTO 17: TAZÓN DE ACERO INOXIDABLE
   COLOR SELECCIONADO PARA WHATSAPP
========================================= */

// Comprobamos si el producto es el tazón.
if (tarjeta.classList.contains("producto-tazon-acero")) {

    // Recuperamos el color elegido por el cliente.
    const colorTazon = tarjeta.dataset.colorSeleccionado;

    // Solo agregamos el color si existe una selección.
    if (colorTazon) {

        // Convertimos "azul-marino" en "Azul marino".
        const nombreColor = colorTazon.replaceAll("-", " ");

        const colorFormateado =
            nombreColor.charAt(0).toUpperCase() + nombreColor.slice(1);

        // Agregamos el color al mensaje.
        mensaje += "\n\nColor: " + colorFormateado;
    }
}




















        // AGREGAMOS LA TALLA SI EXISTE UNA SELECCIÓN
        if (tallaSeleccionada) {

            // OBTENEMOS LA TALLA ELEGIDA
            const talla = tallaSeleccionada.dataset.talla;

            // AGREGAMOS LA TALLA AL MENSAJE
            mensaje += "\n\nTalla: " + talla;
        }

        // AGREGAMOS LA TALLA FIJA DEL COLLAR CON HUELLITAS
        if (nombreProducto === "Collar de nailon con huellitas") {
            mensaje += "\n\nTalla: S (ajustable de 17 a 26 cm)";
        }

        
    
/* =========================================
   DATOS DE LA CAMA ACOLCHADA SELECCIONADA
========================================= */

// COMPROBAMOS SI EL PRODUCTO ES LA CAMA ACOLCHADA
if (tarjeta.classList.contains("producto-cama-acolchada")) {

    // BUSCAMOS LA MINIATURA QUE EL CLIENTE SELECCIONÓ
    const camaSeleccionada = tarjeta.querySelector(
        ".miniatura-cama.seleccionada"
    );

    // COMPROBAMOS QUE EXISTA UNA VARIANTE SELECCIONADA
    if (camaSeleccionada) {

        // OBTENEMOS SUS DATOS PERSONALIZADOS
        const color = camaSeleccionada.dataset.color;
        const talla = camaSeleccionada.dataset.talla;
        const medidas = camaSeleccionada.dataset.medidas;

        // AGREGAMOS LOS DATOS AL MENSAJE DE WHATSAPP
        mensaje += "\n\nColor: " + color;
        mensaje += "\nTalla: " + talla;
        mensaje += "\nMedidas: " + medidas;
    }
}




       /* =========================================
       PRECIO DE LA CHAMARRITA DE BÉISBOL
       ========================================= */








       
/* =========================================
   PRODUCTO 17: TAZÓN DE ACERO INOXIDABLE
   PRECIO FIJO PARA WHATSAPP
========================================= */












// =========================================
// AGREGAR EL PRECIO DEL PRODUCTO AL MENSAJE
// =========================================

// Buscamos el precio visible dentro de la tarjeta.
const elementoPrecio = tarjeta.querySelector(
    ".precio-catalogo, .precio-cama"
);

// Si encontramos un precio, lo agregamos al mensaje.
if (elementoPrecio) {
    const precio = elementoPrecio.textContent.trim();

    // Evitamos presentar un precio "Desde" como definitivo.
    if (!precio.startsWith("Desde")) {
        mensaje += "\nPrecio: " + precio;
    }
}




        // CERRAMOS CON UNA PREGUNTA AMABLE
        mensaje += "\n\n¿Me podrían proporcionar más información? ¡Gracias!";

        
        

        /* =========================================
           PREPARAR EL ENLACE DE WHATSAPP
        ========================================= */

        // CODIFICAMOS EL MENSAJE PARA UTILIZARLO EN UNA URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // NÚMERO OFICIAL DE WHATSAPP BUSINESS
        // FORMATO: 52 + 10 DÍGITOS, SIN ESPACIOS NI SIGNOS
        const numeroWhatsApp = "525666386400";

        // CONSTRUIMOS EL ENLACE CON EL MENSAJE
        const enlaceWhatsApp =
            "https://wa.me/" + numeroWhatsApp + "?text=" + mensajeCodificado;

        
        // ABRIMOS WHATSAPP EN UNA PESTAÑA NUEVA
        window.open(enlaceWhatsApp, "_blank", "noopener,noreferrer");

    });

});






/* =========================================
   SELECCIÓN DE VARIANTES DE CAMAS ACOLCHADAS
========================================= */

// BUSCAMOS ÚNICAMENTE LA TARJETA DE LAS CAMAS
const tarjetaCamas = document.querySelector(".producto-cama-acolchada");

// COMPROBAMOS QUE LA TARJETA EXISTA
if (tarjetaCamas) {

    // BUSCAMOS LA IMAGEN PRINCIPAL
    const imagenPrincipalCama = tarjetaCamas.querySelector(".imagen-principal-cama");

    // BUSCAMOS LAS CINCO MINIATURAS
    const miniaturasCamas = tarjetaCamas.querySelectorAll(".miniatura-cama");

    // BUSCAMOS LOS ELEMENTOS QUE MUESTRAN LA INFORMACIÓN
    const colorCama = tarjetaCamas.querySelector(".color-cama");
    const tallaCama = tarjetaCamas.querySelector(".talla-cama");
    const medidasCama = tarjetaCamas.querySelector(".medidas-cama");

   // Buscamos el texto que indica si la cama incluye cojín.
   const cojinCama = tarjetaCamas.querySelector(".cojin-cama");

   const precioCama = tarjetaCamas.querySelector(".valor-precio-cama");


    // RECORREMOS CADA MINIATURA
    miniaturasCamas.forEach((miniatura) => {

        // DETECTAMOS CUANDO EL CLIENTE HACE CLIC
        miniatura.addEventListener("click", () => {

            // CAMBIAMOS LA FOTOGRAFÍA PRINCIPAL
            imagenPrincipalCama.src = miniatura.src;
            imagenPrincipalCama.alt = miniatura.alt;

            
           // ACTUALIZAMOS LA INFORMACIÓN DE LA VARIANTE
           colorCama.textContent = miniatura.dataset.color;
           tallaCama.textContent = miniatura.dataset.talla;
           medidasCama.textContent = miniatura.dataset.medidas;

          // Mostramos si la variante seleccionada incluye cojín.
          cojinCama.textContent = miniatura.dataset.cojin;

          precioCama.textContent = miniatura.dataset.precio;





            // QUITAMOS LA SELECCIÓN ANTERIOR
            miniaturasCamas.forEach((otraMiniatura) => {
                otraMiniatura.classList.remove("seleccionada");
            });

            // MARCAMOS LA NUEVA MINIATURA SELECCIONADA
            miniatura.classList.add("seleccionada");

            // MOSTRAMOS LA SELECCIÓN EN LA CONSOLA
            console.log("Cama seleccionada:", {
                color: miniatura.dataset.color,
                talla: miniatura.dataset.talla,
                medidas: miniatura.dataset.medidas,
                precio: miniatura.dataset.precio
            });

        });

    });

}










/* =========================================
   PRODUCTO 16: CHAMARRITA DE BÉISBOL
   CAMBIO DE FOTOGRAFÍA SEGÚN EL COLOR
========================================= */

// Buscamos la tarjeta de la chamarrita.
const tarjetaChamarrita = document.querySelector(
    ".producto-chamarrita-beisbol"
);

// Verificamos que la tarjeta exista.
if (tarjetaChamarrita) {

    // Identificamos la fotografía principal.
    const imagenChamarrita = tarjetaChamarrita.querySelector(
        ".imagen-principal-chamarrita"
    );

    // Obtenemos las tres miniaturas.
    const miniaturasChamarrita = tarjetaChamarrita.querySelectorAll(
        ".miniatura-opcion"
    );

    // Recorremos los botones de las miniaturas.
    miniaturasChamarrita.forEach(function(boton) {

        // Detectamos cuando el cliente hace clic.
        boton.addEventListener("click", function() {

            // Obtenemos la fotografía de la miniatura seleccionada.
            const imagenSeleccionada = boton.querySelector("img");

            // Cambiamos la fotografía principal.
            imagenChamarrita.src = imagenSeleccionada.src;

            // Actualizamos la descripción de la imagen.
            imagenChamarrita.alt = imagenSeleccionada.alt;

            // Quitamos el borde de la miniatura anterior.
            miniaturasChamarrita.forEach(function(miniatura) {
                miniatura.classList.remove("miniatura-activa");
            });

            // Resaltamos la miniatura seleccionada.
            boton.classList.add("miniatura-activa");



            // Guardamos el color seleccionado en la tarjeta.
           // Este dato se utilizará después para el pedido por WhatsApp.
           tarjetaChamarrita.dataset.colorSeleccionado = boton.dataset.color;

          // Mostramos el color en la consola para comprobarlo.
          console.log(
          "Color de chamarrita seleccionado:",
          tarjetaChamarrita.dataset.colorSeleccionado
          );

        });

    });

}







/* =========================================
   PRODUCTO 16: CHAMARRITA DE BÉISBOL
   GUÍA INTERACTIVA DE MEDIDAS
========================================= */

// Verificamos que exista la tarjeta de la chamarrita.
if (tarjetaChamarrita) {

    // Buscamos el título que mostrará la talla seleccionada.
const tituloTalla = tarjetaChamarrita.querySelector(
    ".titulo-talla-chamarrita"
);

// Buscamos el contenedor de las tres medidas.
const detalleMedidas = tarjetaChamarrita.querySelector(
    ".detalle-medidas-chamarrita"
);

// Buscamos los espacios donde aparecerán los valores.
const pesoChamarrita = tarjetaChamarrita.querySelector(
    ".peso-chamarrita"
);

const espaldaChamarrita = tarjetaChamarrita.querySelector(
    ".espalda-chamarrita"
);

const pechoChamarrita = tarjetaChamarrita.querySelector(
    ".pecho-chamarrita"
);

    // Guardamos las medidas proporcionadas por el proveedor.
    const guiaTallas = {
        S:   { peso: "1.5 a 2.5 kg", espalda: 25, pecho: 35 },
        M:   { peso: "2.5 a 4 kg", espalda: 30, pecho: 40 },
        L:   { peso: "4 a 6 kg", espalda: 35, pecho: 45 },
        XL:  { peso: "6 a 7.5 kg", espalda: 38, pecho: 50 },
        "2XL": { peso: "7.5 a 10 kg", espalda: 42, pecho: 55 }
    };

    // Buscamos los botones de tallas de esta chamarrita.
    const botonesGuiaTallas = tarjetaChamarrita.querySelectorAll(
        ".talla-opcion"
    );

    // Recorremos los cinco botones.
    botonesGuiaTallas.forEach(function(boton) {

        // Detectamos cuando el cliente selecciona una talla.
        boton.addEventListener("click", function() {

            // Identificamos la talla seleccionada.
            const tallaSeleccionada = boton.dataset.talla;

            // Consultamos las medidas correspondientes.
            const medidas = guiaTallas[tallaSeleccionada];

            // Verificamos que existan medidas para esa talla.
            if (!medidas) return;

           // Mostramos la talla seleccionada.
           tituloTalla.textContent = "Talla " + tallaSeleccionada;

          // Actualizamos cada medida de forma independiente.
          pesoChamarrita.textContent = medidas.peso;

          espaldaChamarrita.textContent = medidas.espalda + " cm";

          pechoChamarrita.textContent = medidas.pecho + " cm";

         // Mostramos las tres filas de medidas.
         detalleMedidas.hidden = false;

        });

    });

}












/* =========================================
   PRODUCTO 17: TAZÓN DE ACERO INOXIDABLE
   CAMBIO DE FOTOGRAFÍA SEGÚN EL COLOR
========================================= */

// Buscamos únicamente la tarjeta del tazón.
const tarjetaTazon = document.querySelector(".producto-tazon-acero");

// Comprobamos que la tarjeta exista.
if (tarjetaTazon) {

    // Identificamos la fotografía principal.
    const imagenTazon = tarjetaTazon.querySelector(
        ".imagen-principal-tazon"
    );

    // Buscamos las siete miniaturas del tazón.
    const miniaturasTazon = tarjetaTazon.querySelectorAll(
        ".miniatura-opcion"
    );

    // Recorremos cada botón de color.
    miniaturasTazon.forEach(function(boton) {

        // Detectamos cuando el cliente selecciona un color.
        boton.addEventListener("click", function() {

            // Obtenemos la fotografía dentro del botón.
            const imagenSeleccionada = boton.querySelector("img");

            // Cambiamos la fotografía principal.
            imagenTazon.src = imagenSeleccionada.src;
            imagenTazon.alt = imagenSeleccionada.alt;

            // Quitamos la selección anterior.
            miniaturasTazon.forEach(function(miniatura) {
                miniatura.classList.remove("miniatura-activa");
                miniatura.setAttribute("aria-pressed", "false");
            });

            // Resaltamos la miniatura seleccionada.
            boton.classList.add("miniatura-activa");
            boton.setAttribute("aria-pressed", "true");

            // Guardamos el color para utilizarlo en WhatsApp.
            tarjetaTazon.dataset.colorSeleccionado = boton.dataset.color;

            // Mostramos el resultado en la consola.
            console.log(
                "Color del tazón seleccionado:",
                tarjetaTazon.dataset.colorSeleccionado
            );

        });

    });

}







/* =========================================
   PRODUCTO 9: SUDADERAS PARA PERRO
   PRECIO DINÁMICO SEGÚN LA TALLA
========================================= */

// Buscamos únicamente la tarjeta de las sudaderas.
const tarjetaSudaderas = document.querySelector(".producto-sudaderas");

// Verificamos que la tarjeta exista.
if (tarjetaSudaderas) {

    // Buscamos el elemento donde aparecerá el precio.
    const precioSudadera = tarjetaSudaderas.querySelector("#precio-sudadera");

    // Buscamos los botones de tallas de las sudaderas.
    const tallasSudaderas = tarjetaSudaderas.querySelectorAll(".talla-opcion");

    // Definimos el precio correspondiente a cada talla.
    const preciosPorTalla = {
        S: 120,
        M: 140,
        L: 160,
        XL: 180
    };

    // Recorremos los botones de tallas.
    tallasSudaderas.forEach((boton) => {

        // Detectamos cuando el cliente selecciona una talla.
        boton.addEventListener("click", () => {

            // Obtenemos la talla seleccionada.
            const talla = boton.dataset.talla;

            // Consultamos el precio correspondiente.
            const precio = preciosPorTalla[talla];

            // Verificamos que exista un precio para esa talla.
            if (precio === undefined || !precioSudadera) return;

            // Actualizamos únicamente el precio de las sudaderas.
            precioSudadera.textContent =
                "$" + precio.toFixed(2) + " MXN";

        });

    });

}














/* =========================================
   PRODUCTO 14: CAMAS ACOLCHADAS
   VISOR DE FOTOGRAFÍAS REALES
========================================= */

// Buscamos la tarjeta de las camas acolchadas.
const tarjetaFotosCama = document.querySelector(
    ".producto-cama-acolchada"
);

// Buscamos el visor de fotografías reales.
const visorFotosCama = document.querySelector(
    ".visor-fotos-reales-cama"
);

// Comprobamos que ambos elementos existan.
if (tarjetaFotosCama && visorFotosCama) {

    // Buscamos el botón que abre el visor.
    const botonVerFotosCama = tarjetaFotosCama.querySelector(
        ".boton-foto-real-cama"
    );

    // Buscamos el botón que cierra el visor.
    const botonCerrarFotosCama = visorFotosCama.querySelector(
        ".cerrar-visor-cama"
    );

    // Buscamos las dos imágenes dentro del visor.
    const fotoFrontalCama = visorFotosCama.querySelector(
        ".foto-real-frontal-cama"
    );

    const fotoLateralCama = visorFotosCama.querySelector(
        ".foto-real-lateral-cama"
    );

    // Buscamos las cinco variantes de camas.
    const variantesFotosCama = tarjetaFotosCama.querySelectorAll(
        ".miniatura-cama"
    );

    // Esta función comprueba si la cama tiene fotografías reales.
    function actualizarBotonFotosCama() {

        const camaSeleccionada = tarjetaFotosCama.querySelector(
            ".miniatura-cama.seleccionada"
        );

        const tieneFotos = camaSeleccionada &&
            camaSeleccionada.dataset.fotoRealFrontal &&
            camaSeleccionada.dataset.fotoRealLateral;

        // Solo mostramos el botón cuando existen las dos rutas.
        if (botonVerFotosCama) {
            botonVerFotosCama.hidden = !tieneFotos;
        }
    }

    // Actualizamos el botón cuando cambia la cama.
    variantesFotosCama.forEach((miniatura) => {

        miniatura.addEventListener("click", () => {
            actualizarBotonFotosCama();
        });

    });

    // Comprobamos la cama seleccionada al cargar la página.
    actualizarBotonFotosCama();

    // Programamos la apertura del visor.
    if (botonVerFotosCama && fotoFrontalCama && fotoLateralCama) {

        botonVerFotosCama.addEventListener("click", () => {

            // Identificamos la cama seleccionada.
            const camaSeleccionada = tarjetaFotosCama.querySelector(
                ".miniatura-cama.seleccionada"
            );

            // Evitamos abrir el visor si faltan fotografías.
            if (
                !camaSeleccionada ||
                !camaSeleccionada.dataset.fotoRealFrontal ||
                !camaSeleccionada.dataset.fotoRealLateral
            ) {
                return;
            }

            // Cargamos las fotografías reales correspondientes.
            fotoFrontalCama.src =
                camaSeleccionada.dataset.fotoRealFrontal;

            fotoLateralCama.src =
                camaSeleccionada.dataset.fotoRealLateral;

            // Actualizamos las descripciones.
            const descripcion = camaSeleccionada.alt;

            fotoFrontalCama.alt =
                "Fotografía real frontal: " + descripcion;

            fotoLateralCama.alt =
                "Fotografía real lateral: " + descripcion;

            // Abrimos el visor sobre el catálogo.
            visorFotosCama.showModal();

        });

    }

    // Cerramos el visor mediante el botón ×.
    if (botonCerrarFotosCama) {

        botonCerrarFotosCama.addEventListener("click", () => {
            visorFotosCama.close();
        });

    }

}








/* =========================================
   PRODUCTO 15: CAMA TIPO NIDO KIMPET
   VISOR DE FOTOGRAFÍAS REALES
========================================= */

// Buscamos el botón que abrirá las fotografías.
const botonFotosNido = document.querySelector(
    ".producto-cama-nido .boton-foto-real-nido"
);

// Buscamos el visor exclusivo de la cama tipo nido.
const visorFotosNido = document.querySelector(
    ".visor-fotos-reales-nido"
);

// Buscamos el botón para cerrar el visor.
const cerrarFotosNido = document.querySelector(
    ".cerrar-visor-nido"
);

// Comprobamos que existan los tres elementos.
if (botonFotosNido && visorFotosNido && cerrarFotosNido) {

    // Abrimos el visor cuando el cliente presiona el botón.
    botonFotosNido.addEventListener("click", () => {
        visorFotosNido.showModal();
    });

    // Cerramos el visor cuando presiona la ×.
    cerrarFotosNido.addEventListener("click", () => {
        visorFotosNido.close();
    });

}



