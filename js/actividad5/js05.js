        function cambiarEstilo(fuente) {
            document.getElementById("parrafo").style.fontFamily = fuente;
        }

        function cambiarImagen(src) {
            document.getElementById("imagen").src = src;
        }

        function mostrarMensaje(mensaje) {
            document.getElementById("mensaje").innerHTML = mensaje;
        }