// Esperar a que cargue completamente el DOM
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita el envío del formulario por defecto

        // Capturar datos
        const nombre = document.getElementById("nombre").value;
        const idEmpleado = document.getElementById("idEmpleado").value;
        const rol = document.getElementById("rol").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
     
        // Validación simple
        if (rol === "") {
            alert("Por favor, selecciona un rol.");
            return;
        }

        // Aquí podrías enviar los datos a un servidor o guardarlos localmente
        console.log("Datos del empleado:");
        console.log("Nombre:", nombre);
        console.log("ID:", idEmpleado);
        console.log("Rol:", rol);
        console.log("Correo:", email);
        console.log("Teléfono:", telefono);
   

        alert("Empleado registrado correctamente ✅");

        // Redirigir automáticamente al login
        window.location.href = "login.html";

        // Limpiar formulario
        formulario.reset();
    });
});
