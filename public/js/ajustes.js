document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalUsuario");
    const btnAgregar = document.getElementById("btnAgregarUsuario");
    const btnCancelar = document.getElementById("btnCancelar");
    const btnGuardar = document.getElementById("btnGuardar");

    const tablaUsuarios = document.getElementById("tablaUsuarios").getElementsByTagName("tbody")[0];

    // Evento para abrir el formulario emergente
    btnAgregar.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Cerrar formulario
    btnCancelar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Guardar usuario (ejemplo básico)
    btnGuardar.addEventListener("click", () => {
        const nombre = document.getElementById("nombreUsuario").value;
        const rol = document.getElementById("rolUsuario").value;
        const telefono = document.getElementById("telefonoUsuario").value;
        const correo = document.getElementById("correoUsuario").value;

        const fila = tablaUsuarios.insertRow();
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${rol}</td>
            <td>${telefono}</td>
            <td>${correo}</td>
            <td class="action-buttons">
                <button onclick="editarUsuario(this)">Editar</button>
                <button onclick="eliminarUsuario(this)">Eliminar</button>
                <button onclick="cambiarContrasena(this)">Cambiar Contraseña</button>
            </td>
        `;

        modal.style.display = "none";
        limpiarFormulario();
    });
});

function limpiarFormulario() {
    document.getElementById("nombreUsuario").value = '';
    document.getElementById("rolUsuario").value = 'Empleado';
    document.getElementById("telefonoUsuario").value = '';
    document.getElementById("correoUsuario").value = '';
}

function editarUsuario(btn) {
    alert("Funcionalidad de editar aún en desarrollo");
}

function eliminarUsuario(btn) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        const fila = btn.closest("tr");
        fila.remove();
    }
}

function cambiarContrasena(btn) {
    alert("Funcionalidad de cambio de contraseña aún en desarrollo");
}
