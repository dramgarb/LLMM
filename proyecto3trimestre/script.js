let num = 0;
let score = 0;
let xmlDoc;
let timer = 0;
let intervalo;

// Función para cargar el idioma predeterminado (español)
function cargarIdiomaPredeterminado() {
    document.getElementById("language").value = "preguntas-es.xml"; // Selecciona español por defecto
    cargarIdioma(); // Llama a la función cargarIdioma
}

// Función para cargar el XML según idioma seleccionado
function cargarIdioma() {
    num = 0;
    score = 0;
    timer = 0;
    clearInterval(intervalo);

    document.getElementById("score").innerText = `Puntuación: 0`;
    document.getElementById("timer").innerText = `Tiempo: 0 segundos`;

    const idioma = document.getElementById("language").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        if (this.status === 200) {
            xmlDoc = this.responseXML;
            muestraPregunta();
            intervalo = setInterval(() => {
                timer++;
                document.getElementById("timer").innerText = `Tiempo: ${timer} segundos`;
            }, 1000);
        } else {
            console.error("Error al cargar el archivo XML:", this.status);
        }
    };

    xhttp.onerror = function () {
        console.error("No se pudo cargar el archivo XML.");
    };

    xhttp.open("GET", idioma, true);
    xhttp.send();
}

// Mostrar la pregunta actual
function muestraPregunta() {
    const question = xmlDoc.getElementsByTagName("question")[num];
    if (!question) {
        document.getElementById("quiz-container").innerHTML = "<h2>¡Has completado el cuestionario!</h2>";
        clearInterval(intervalo);
        return;
    }

    const wording = question.getElementsByTagName("wording")[0].textContent;
    const choices = question.getElementsByTagName("choice");

    document.getElementById("question").innerText = wording;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";


    for (let i = 0; i < choices.length; i++) {
        const choice = document.createElement("button");
        choice.innerText = choices[i].textContent;
    
        choice.onclick = function () {
            const allChoices = document.querySelectorAll("#choices button");
    
            // Desactivar todos los botones
            allChoices.forEach(btn => btn.disabled = true);
    
            if (choices[i].getAttribute("correct") === "yes") {
                score++;
                document.getElementById("score").innerText = `Puntuación: ${score}`;
                this.classList.add("correct");
            } else {
                this.classList.add("incorrect");
            }
    
            // Pasar a la siguiente pregunta tras un pequeño retraso
            setTimeout(muestraSiguiente, 800);
        };
    
        choicesContainer.appendChild(choice);
    }
}

// Mostrar la siguiente pregunta
function muestraSiguiente() {
    num++;
    muestraPregunta();
}
