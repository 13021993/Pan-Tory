document.addEventListener("DOMContentLoaded", () => {
  console.log("Sistema Pan-Tory cargado correctamente");

  // Animación simple al hacer clic en las tarjetas del menú
  const menuCards = document.querySelectorAll(".menu-card");

  menuCards.forEach(card => {
    card.addEventListener("click", (e) => {
      // Animación de clic (breve escala)
      card.style.transform = "scale(0.97)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 100);

      // Confirmación al cerrar sesión
      if (card.classList.contains("logout")) {
        e.preventDefault(); // Prevenir navegación automática
        const confirmLogout = confirm("¿Estás seguro de que deseas cerrar sesión?");
        if (confirmLogout) {
          window.location.href = card.getAttribute("href");
        }
      }
    });

    // Hover visual opcional (ya manejado en CSS, pero se puede reforzar aquí)
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 8px 12px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
  });
});