document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-usuario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Capturar datos del formulario
        const documento = document.getElementById("documento").value;
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const contrasena = document.getElementById("contrasena").value;
        const confirmarContrasena = document.getElementById("confirmar_contrasena").value;
        const telefono = document.getElementById("telefono").value;
        const rol = document.getElementById("rol").value;

        // Validación
        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (rol === "") {
            alert("Por favor, selecciona un rol.");
            return;
        }

        // Preparar los datos para enviar
        const datos = {
            documento,
            nombre,
            apellido,
            correo,
            contrasena,
            telefono,
            rol
        };

        // Enviar datos al backend
        fetch('http://localhost/tu_proyecto/backend/controllers/usuario.php', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                alert("Usuario registrado correctamente ✅");
                formulario.reset();
            } else {
                alert("Error: " + data.mensaje);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al registrar el usuario.");
        });
    });
});
