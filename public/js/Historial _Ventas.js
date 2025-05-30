
// Simulamos ventas (luego se pueden traer desde la base de datos)
const ventas = [
    {
      id: 1,
      fecha: '2025-04-07',
      hora: '10:45 AM',
      total: 9000
    },
    {
      id: 2,
      fecha: '2025-04-07',
      hora: '11:30 AM',
      total: 7000
    }
  ];
  
  const tablaVentas = document.querySelector("#tablaVentas tbody");
  
  ventas.forEach(venta => {
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${venta.id}</td>
      <td>${venta.fecha}</td>
      <td>${venta.hora}</td>
      <td>$${venta.total.toLocaleString()}</td>
      <td><button class="ver-detalle" onclick="verDetalle(${venta.id})">Ver</button></td>
    `;
  
    tablaVentas.appendChild(fila);
  });
  
  function verDetalle(idVenta) {
    // Aquí podrías redirigir a detalle_venta.html pasando el ID por query
    // por ejemplo: detalle_venta.html?id=1
    window.location.href = `detalle_venta.html?id=${idVenta}`;
  }
 