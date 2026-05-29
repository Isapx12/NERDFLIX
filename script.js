// =====================
// DATOS DE TUS PELÍCULAS
// =====================
const peliculas = [
  {
    titulo: "ONE PIECE",
    img: "images/onepiece.png",
    tags: ["2024", "16+", "Serie", "Acción"],
    desc: "Monkey D. Luffy navega los mares buscando el tesoro definitivo."
  },
  {
    titulo: "JAMES",
    img: "images/james.jpg",
    tags: ["2025", "7+", "Documental"],
    desc: "La historia del astro colombiano James Rodríguez."
  },
  {
    titulo: "INTERCAMBIADOS",
    img: "images/intercambiados.jpg",
    tags: ["2026", "10+", "Película", "Comedia", "Fantasía"],
    desc: "Una criatura y un ave intercambian cuerpos y deben sobrevivir juntos."
  }
];

// =====================
// ABRIR MODAL
// =====================
function abrirModal(index) {
  const p = peliculas[index];  // busca la película por número

  // pone los datos en el modal
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-titulo').textContent = p.titulo;
  document.getElementById('modal-desc').textContent = p.desc;

  // crea los tags
  const tags = document.getElementById('modal-tags');
  tags.innerHTML = '';
  p.tags.forEach(tag => {
    tags.innerHTML += `<span>${tag}</span>`;
  });

  // muestra el modal
  document.getElementById('modal').classList.add('activo');
}

// =====================
// CERRAR MODAL
// =====================
function cerrarModal(event) {
  const modal = document.getElementById('modal');
  // cierra si clickeas el fondo oscuro o el botón X
  if (!event || event.target === modal) {
    modal.classList.remove('activo');
  }
}

// =====================
// CARRUSEL
// =====================
let posicion = 0;

function moverCarrusel() {
  const carrusel = document.getElementById('carrusel');
  const anchoCard = 164; // ancho de la card + gap
  const avance = anchoCard * 3; // mueve 3 cards a la vez

  posicion -= avance;

  // si llegó al final, vuelve al inicio
  const limiteMax = -(carrusel.scrollWidth - carrusel.parentElement.offsetWidth);
  if (posicion < limiteMax) {
    posicion = 0;
  }

  carrusel.style.transform = `translateX(${posicion}px)`;
}