document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Agrega la clase 'animate' para iniciar las animaciones
          entry.target.classList.add("animate");
        } else {
          // Remueve la clase 'animate' cuando sale del viewport
          entry.target.classList.remove("animate");
        }
      });
    });
  
    // Selecciona todas las secciones de animación (por ejemplo, las cards)
    const cards = document.querySelectorAll(".card-2");
    cards.forEach((card) => observer.observe(card));
  });
  