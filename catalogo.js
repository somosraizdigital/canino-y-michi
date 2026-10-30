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

    // BUSCAMOS SOLO LAS MINIATURAS DE ESTA TARJETA
    const miniaturas = tarjeta.querySelectorAll(".miniatura-opcion");

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

            // REEMPLAZAMOS LOS GUIONES POR ESPACIOS
            const nombreColor = color.replaceAll("-", " ");

            // COLOCAMOS LA PRIMERA LETRA EN MAYÚSCULA
            const colorFormateado =
                nombreColor.charAt(0).toUpperCase() + nombreColor.slice(1);

            // AGREGAMOS EL COLOR AL MENSAJE
            mensaje += "\n\nColor: " + colorFormateado;
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

        // CERRAMOS CON UNA PREGUNTA AMABLE
        mensaje += "\n\n¿Me podrían proporcionar más información? ¡Gracias!";

        // MOSTRAMOS EL MENSAJE EN LA CONSOLA PARA COMPROBARLO
        console.log("Mensaje para WhatsApp:", mensaje);

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

