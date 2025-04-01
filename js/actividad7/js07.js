const imagenes = [
    "coche1.jpg",
    "coche2.jpg",
    "coche3.jpg",
    "coche4.jpg"
];

let indiceActual = 0;

function cambiarImagen() {
    document.body.style.backgroundImage = `url(${imagenes[indiceActual]})`;
}

function siguienteImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    cambiarImagen();
}

function anteriorImagen() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen();
}

// Establecer la primera imagen al cargar la página
window.onload = cambiarImagen;
