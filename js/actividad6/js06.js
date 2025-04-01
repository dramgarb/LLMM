const citas = [
    { texto: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" },
    { texto: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
    { texto: "No cuentes los días, haz que los días cuenten.", autor: "Muhammad Ali" },
    { texto: "Solo se vive una vez, pero si lo haces bien, una vez es suficiente.", autor: "Mae West" },
    { texto: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.", autor: "Nelson Mandela" }
];

function mostrarCita() {
    const indice = Math.floor(Math.random() * citas.length);
    document.getElementById("quote").innerHTML = `"${citas[indice].texto}"`;
    document.getElementById("author").innerHTML = `- ${citas[indice].autor}`;
}
