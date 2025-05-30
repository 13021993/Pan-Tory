// Confirmar el cierre de sesión
function confirmLogout() {
    // Aquí iría la lógica para cerrar sesión real
    // Por ejemplo, borrar token/localStorage, o redireccionar
    alert("Sesión cerrada correctamente.");
    window.location.href = "login.html"; // Redirige al login
  }
  
  // Cancelar el cierre de sesión
  function cancelLogout() {
    window.history.back(); // Regresa a la página anterior
  }
  