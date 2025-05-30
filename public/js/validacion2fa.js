document.getElementById('validation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;

    // Simulación de validación de código
    if (code === "123456") {
        showMessage("Código validado correctamente.", "success");
    } else {
        showMessage("Código incorrecto. Por favor, inténtalo nuevamente.", "error");
    }
});

document.getElementById('resend-code').addEventListener('click', function() {
    showMessage("Se ha reenviado el código a tu correo.", "info");
});

// Función para mostrar mensajes dinámicos
function showMessage(message, type) {
    const messageArea = document.getElementById('message-area');
    messageArea.textContent = message;

    switch (type) {
        case "success":
            messageArea.style.color = "green";
            break;
        case "error":
            messageArea.style.color = "red";
            break;
        case "info":
            messageArea.style.color = "blue";
            break;
    }
}

