const boton = document.getElementById("modoOscuro");

if (boton) {
    boton.addEventListener("click", function () {
        document.body.classList.toggle("oscuro");

        if (document.body.classList.contains("oscuro")) {
            boton.textContent = "☀️ Modo claro";
        } else {
            boton.textContent = "🌙 Modo oscuro";
        }
    });
}

const botonArriba = document.getElementById("volverArriba");

if (botonArriba) {
    botonArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const bienvenida = document.getElementById("bienvenida");

if (bienvenida) {
    setTimeout(function () {
        bienvenida.style.display = "none";
    }, 4000);
}
