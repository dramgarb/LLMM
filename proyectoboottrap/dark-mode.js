document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    // Verificar si el modo oscuro está activado en LocalStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Alternar modo oscuro al hacer clic en el botón
    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            // Guardar estado en LocalStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});
