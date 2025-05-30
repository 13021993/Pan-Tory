// Función para manejar el envío del formulario de recuperación de contraseña
document.getElementById('recover-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario (recargar la página)

    const email = document.getElementById('email').value; // Obtener el valor del campo de correo electrónico

    if (validateEmail(email)) {
        // Simulamos un proceso de envío del correo de recuperación (en un sistema real, esto se conectaría con un backend)
        alert('Se ha enviado un enlace de recuperación al correo: ' + email);

        // Aquí deberías hacer una llamada a la API de tu backend para enviar el enlace de recuperación, por ejemplo:
        // fetch('/enviar-recuperacion', { method: 'POST', body: JSON.stringify({ email }) })

        // Limpiar el formulario después de enviar
        document.getElementById('recover-form').reset();
    } else {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

// Función para validar el correo electrónico
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
