let productos = [];
let editandoId = null;

function cargarProductos() {
    const tbody = document.getElementById('product-list');
    tbody.innerHTML = '';

    productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>
                <button class="btn-edit" onclick="editarProducto(${producto.id})">Editar</button>
                <button class="btn-delete" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function agregarProducto(e) {
    e.preventDefault();

    const nombre = document.getElementById('product-name').value;
    const categoria = document.getElementById('product-category').value;
    const precio = parseFloat(document.getElementById('price').value);
    const cantidad = parseInt(document.getElementById('quantity').value);

    if (!nombre || !categoria || isNaN(precio) || isNaN(cantidad)) {
        alert('Completa todos los campos correctamente.');
        return;
    }

    if (editandoId) {
        const producto = productos.find(p => p.id === editandoId);
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.precio = precio;
        producto.cantidad = cantidad;
        editandoId = null;
    } else {
        productos.push({
            id: productos.length + 1,
            nombre,
            categoria,
            precio,
            cantidad
        });
    }

    document.getElementById('product-form').reset();
    cargarProductos();
}

function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById('product-name').value = producto.nombre;
        document.getElementById('product-category').value = producto.categoria;
        document.getElementById('price').value = producto.precio;
        document.getElementById('quantity').value = producto.cantidad;
        editandoId = id;
    }
}

function eliminarProducto(id) {
    productos = productos.filter(p => p.id !== id);
    cargarProductos();
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Inventario - Panadería Coquito', 10, 10);

    const rows = [['ID', 'Nombre', 'Categoría', 'Precio', 'Cantidad']];
    productos.forEach(p => {
        rows.push([p.id, p.nombre, p.categoria, `$${p.precio.toFixed(2)}`, p.cantidad]);
    });

    rows.forEach((row, i) => {
        row.forEach((text, j) => {
            doc.text(String(text), 10 + j * 40, 20 + i * 10);
        });
    });

    doc.save('inventario.pdf');
}

function downloadExcel() {
    const wb = XLSX.utils.book_new();
    const data = [
        ['ID', 'Nombre', 'Categoría', 'Precio', 'Cantidad'],
        ...productos.map(p => [p.id, p.nombre, p.categoria, p.precio, p.cantidad])
    ];
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Inventario');
    XLSX.writeFile(wb, 'inventario.xlsx');
}

document.getElementById('product-form').addEventListener('submit', agregarProducto);
document.getElementById('cancel-btn').addEventListener('click', () => {
    editandoId = null;
    document.getElementById('product-form').reset();
});
window.onload = cargarProductos;
// Asignar fecha y hora al cargar
window.onload = () => {
    actualizarFechaHora();
};

function actualizarFechaHora() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString('es-ES'); // formato dd/mm/aaaa
    const hora = ahora.toLocaleTimeString('es-ES');  // formato hh:mm:ss

    document.getElementById('fecha').value = fecha;
    document.getElementById('hora').value = hora;
}

// Si deseas actualizar al enviar también:
document.getElementById('productoForm').addEventListener('submit', function (e) {
    actualizarFechaHora(); // Actualiza antes de enviar
    // Aquí puedes manejar el envío del formulario...
    e.preventDefault(); // Si deseas prevenir el envío real
    alert("Producto registrado con fecha y hora actual.");
});
