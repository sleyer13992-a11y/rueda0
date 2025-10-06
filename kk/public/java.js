// Mostrar carta con animación
function mostrarCarta() {
  const carta = document.getElementById("carta");
  const musica = document.getElementById("musica");

  carta.style.display = "block";

  // Reiniciar música y letra
  indice = 0;
  letra.textContent = "";
  musica.currentTime = 0;
  musica.muted = false;

  // Intentar reproducir música (con control de bloqueo)
  musica.play().then(() => {
    console.log("🎵 Música reproduciéndose correctamente");
  }).catch((err) => {
    console.warn("⚠️ El navegador bloqueó la reproducción automática.");
    alert("Haz clic en la pantalla para activar el sonido 🎶");
    document.body.addEventListener("click", () => musica.play(), { once: true });
  });
}

// Cerrar carta
function cerrarCarta() {
  document.getElementById("carta").style.display = "none";
}

// 🎵 Sincronizar letra con la canción
const musica = document.getElementById("musica");
const letra = document.querySelector(".letra");

// Lista de frases y sus tiempos (en segundos)
const lineas = [
  { tiempo: 15, texto: "feel like sun on my skin" },
  { tiempo: 21, texto: "so this is love I know it is" },
  { tiempo: 24, texto: "I know it sounds super cliché" },
  { tiempo: 26, texto: "but you make me feel some typa way" },
  { tiempo: 29, texto: "this is falling, falling in love" },
  { tiempo: 33, texto: "¿Acaso no te has dado cuenta?" },
  { tiempo: 35, texto: "De lo bien que me complementas" },
  { tiempo: 37, texto: "Si quieres te invito un helado" },
  { tiempo: 40, texto: "y te explico lo chido que haces que me sienta" },
  { tiempo: 42, texto: "Contigo estoy high sin avión" },
  { tiempo: 44, texto: "Me haces perder la razón" },
  { tiempo: 46, texto: "Estoy todo el día pensándote" },
  { tiempo: 47, texto: "con mariposas en el corazón" },
  { tiempo: 49, texto: "Y tú… me pones todo de cabeza" },
  { tiempo: 52, texto: "Tú… eras esa última pieza" },
  { tiempo: 56, texto: "Tú… eres tan diferente" },
  { tiempo: 59, texto: "Y no hay nadie que me vuele así la mente" },
  { tiempo: 61, texto: "como lo haces tú" },
  { tiempo: 66, texto: "feel like sun on my skin" },
  { tiempo: 70, texto: "so this is love I know it is" },
  { tiempo: 74, texto: "I know it sounds super cliché" },
  { tiempo: 78, texto: "but you make me feel some typa way" },
  { tiempo: 80, texto: "this is falling, falling in love" },
  { tiempo: 83, texto: "I know it sounds super cliché" },
  { tiempo: 85, texto: "but you make me feel some typa way" },
  { tiempo: 88, texto: "this is falling, falling in love" }
];

// Controlador del texto
let indice = 0;

musica.addEventListener("timeupdate", () => {
  if (indice < lineas.length && musica.currentTime >= lineas[indice].tiempo) {
    letra.textContent = lineas[indice].texto;
    letra.style.opacity = 0;
    setTimeout(() => (letra.style.opacity = 1), 200);
    indice++;
  }
});
