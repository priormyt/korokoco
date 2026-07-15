// KOROKOCO — interacciones mínimas. Sin dependencias.

// ----- Menú móvil -----
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Cierra el menú al elegir una sección
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// ----- Carrusel de platillos: botones ← → -----
const track = document.getElementById("carousel-track");
const carousel = track ? track.parentElement : null;

document.querySelectorAll(".carousel-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!carousel) return;
    const card = track.querySelector(".dish");
    // Avanza el ancho de una tarjeta + gap (1.5rem = 24px)
    const step = card ? card.offsetWidth + 24 : carousel.clientWidth * 0.8;
    carousel.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" });
  });
});

// ----- Año dinámico en el footer -----
document.getElementById("year").textContent = new Date().getFullYear();
