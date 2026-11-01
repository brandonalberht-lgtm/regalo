
// ========================================
// CONFIGURACIÓN PERSONALIZABLE
// ========================================

const razones = [
    "Amo tu sonrisa, porque ilumina mis días. ♡",

    "Amo cómo haces especiales incluso los momentos más simples.",

    "Amo escuchar tu voz y pasar tiempo contigo.",

    "Amo cada pequeño detalle que te hace ser tú.",

    "Te amo porque eres tú, y no cambiaría eso por nada. ♡"
];

// Corazones descubiertos
let descubiertos = new Set();

// ========================================
// CAMBIAR PANTALLA
// ========================================

function mostrarPantalla(id) {

    document.querySelectorAll(".screen").forEach(
        pantalla => {
            pantalla.classList.remove("active");
        }
    );

    const siguiente = document.getElementById(id);

    if (siguiente) {
        siguiente.classList.add("active");
        window.scrollTo(0, 0);
    }
}

// ========================================
// ABRIR CARTA
// ========================================

function abrirCarta() {

    const carta = document.getElementById("contenido-carta");
    const instruccion = document.getElementById("instruccion");

    carta.classList.remove("hidden");
    instruccion.classList.add("hidden");
}

// ========================================
// DESCUBRIR CORAZONES
// ========================================

function mostrarRazon(indice, boton) {

    const mensaje = document.getElementById("mensaje-razon");

    mensaje.textContent = razones[indice];

    descubiertos.add(indice);

    boton.classList.add("descubierto");

    document.getElementById("contador").textContent =
        `${descubiertos.size} / ${razones.length} corazones`;

    if (descubiertos.size === razones.length) {

        document.getElementById("btn-final")
            .classList.remove("hidden");

    }
}

// ========================================
// APAGAR VELA
// ========================================

function apagarVela() {

    document.getElementById("flame")
        .classList.add("hidden");

    document.getElementById("mensaje-final")
        .classList.remove("hidden");

    lanzarConfeti();
}

// ========================================
// CONFETI DE CUMPLEAÑOS
// ========================================

function lanzarConfeti() {

    const colores = [
        "#ff8fab",
        "#cdb4db",
        "#a2d2ff",
        "#ffd166",
        "#b9fbc0"
    ];

    for (let i = 0; i < 100; i++) {

        const confeti = document.createElement("div");

        confeti.classList.add("confetti");

        confeti.style.left = Math.random() * 100 + "vw";

        confeti.style.backgroundColor =
            colores[Math.floor(Math.random() * colores.length)];

        confeti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confeti.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";

        document.body.appendChild(confeti);

        confeti.addEventListener("animationend", () => {
            confeti.remove();
        });

    }
}

// ========================================
// ESTRELLITAS EN EL FONDO
// ========================================

function crearEstrellas() {

    const contenedor = document.getElementById("stars");

    for (let i = 0; i < 45; i++) {

        const estrella = document.createElement("span");

        estrella.classList.add("star");

        estrella.textContent = "✦";

        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";

        estrella.style.fontSize =
            (10 + Math.random() * 15) + "px";

        estrella.style.animationDelay =
            Math.random() * 3 + "s";

        contenedor.appendChild(estrella);
    }
}

// ========================================
// REINICIAR EXPERIENCIA
// ========================================

function reiniciar() {

    descubiertos.clear();

    document.querySelectorAll(".heart-button").forEach(
        boton => boton.classList.remove("descubierto")
    );

    document.getElementById("contador").textContent =
        "0 / 5 corazones";

    document.getElementById("mensaje-razon").textContent =
        "Cada corazón esconde algo especial.";

    document.getElementById("btn-final")
        .classList.add("hidden");

    document.getElementById("flame")
        .classList.remove("hidden");

    document.getElementById("mensaje-final")
        .classList.add("hidden");

    document.getElementById("contenido-carta")
        .classList.add("hidden");

    document.getElementById("instruccion")
        .classList.remove("hidden");

    mostrarPantalla("inicio");
}

// Iniciar efectos del fondo
crearEstrellas();


// REPRODUCTOR DE MÚSICA ♡

const musica = document.getElementById("musica");
const musicBtn = document.getElementById("music-btn");

async function toggleMusica() {
    if (musica.paused) {
        try {
            await musica.play();
            musicBtn.textContent = "❚❚ PAUSA";
        } catch (error) {
            musicBtn.textContent = "▶ PLAY";
            console.error("No se pudo reproducir:", error);
        }
    } else {
        musica.pause();
        musicBtn.textContent = "▶ PLAY";
    }
}


// Mostrar u ocultar reproductor ♡

function toggleReproductor() {
    const reproductor =
        document.getElementById("musicPlayer");

    reproductor.classList.toggle("collapsed");
}
