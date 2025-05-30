document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    if (usuario === "" || contrasena === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Simulación de usuario registrado
    if (usuario === "admin@coquito.com" && contrasena === "admin123") {
      alert("Inicio de sesión exitoso 🎉");
      window.location.href = "menu.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });

  // Validación previa al redireccionamiento a "recuperar contraseña"
  const recuperarLink = document.getElementById("recuperarLink");
  recuperarLink.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();

    if (usuario === "") {
      alert("Por favor, ingresa tu usuario antes de recuperar la contraseña.");
      return;
    }

    // Simulación: solo se permite si el usuario está registrado
    if (usuario === "admin@coquito.com") {
      window.location.href = "recuperar.html";
    } else {
      alert("Este usuario no está registrado. Regístrate primero.");
    }
  });
});
