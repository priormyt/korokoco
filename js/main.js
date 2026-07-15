// KOROKOCO — interacciones mínimas. Sin dependencias.

// Menú móvil
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

// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();
