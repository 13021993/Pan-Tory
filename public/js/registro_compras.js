// Simular proveedores (puedes luego cargar desde base de datos)
const proveedores = [
    { id: 1, nombre: "Distribuidora Don Pan" },
    { id: 2, nombre: "Panaderías Unidas S.A." },
    { id: 3, nombre: "Harinas del Valle" }
];

// Inicialización
window.onload = () => {
    const proveedorSelect = document.getElementById('proveedor');
    proveedores.forEach(p => {
        let option = document.createElement("option");
        option.value = p.id;
        option.textContent = p.nombre;
        proveedorSelect.appendChild(option);
    });

    // Colocar fecha y hora actual
    const fecha = new Date();
    document.getElementById('fecha').value = fecha.toLocaleString();
};

let totalCompra = 0;

function agregarProducto() {
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precioUnitario = parseFloat(document.getElementById('precio_unitario').value);

    if (!producto || cantidad <= 0 || precioUnitario <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const subtotal = cantidad * precioUnitario;
    totalCompra += subtotal;

    const tabla = document.querySelector("#tablaDetalle tbody");
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>$${precioUnitario.toFixed(2)}</td>
        <td>$${subtotal.toFixed(2)}</td>
        <td><button onclick="eliminarFila(this, ${subtotal})">❌</button></td>
    `;

    tabla.appendChild(fila);

    document.getElementById("total").textContent = totalCompra.toFixed(2);

    // Limpiar campos
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio_unitario').value = '';
}

function eliminarFila(btn, subtotal) {
    const fila = btn.parentNode.parentNode;
    fila.remove();
    totalCompra -= subtotal;
    document.getElementById("total").textContent = totalCompra.toFixed(2);
}

// Guardar compra
document.getElementById("formCompra").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Compra registrada exitosamente ✅");

    // Aquí podrías enviar la información a un backend usando fetch()
    // limpiar formulario
    this.reset();
    document.querySelector("#tablaDetalle tbody").innerHTML = "";
    document.getElementById("total").textContent = "0.00";

    const fecha = new Date();
    document.getElementById('fecha').value = fecha.toLocaleString();
    totalCompra = 0;
});
