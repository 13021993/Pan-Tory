// Simular detalles de una venta (más adelante esto vendrá desde la base de datos)
const productosVendidos = [
    { id: '1', nombre: 'Pan', precio: 2000, cantidad: 2 },
    { id: '2', nombre: 'Torta', precio: 5000, cantidad: 1 }
  ];
  
  const tabla = document.getElementById('detalleTabla');
  const totalVenta = document.getElementById('totalVenta');
  
  let total = 0;
  
  productosVendidos.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;
  
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toLocaleString()}</td>
      <td>${producto.cantidad}</td>
      <td>$${subtotal.toLocaleString()}</td>
    `;
    tabla.appendChild(row);
  });
  
  totalVenta.textContent = `$${total.toLocaleString()}`;
  