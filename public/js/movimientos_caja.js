document.getElementById('form-movimiento').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const tipo = document.getElementById('tipo').value;
    const monto = parseFloat(document.getElementById('monto').value);
    const descripcion = document.getElementById('descripcion').value;
  
    if (!tipo || isNaN(monto) || !descripcion) {
      document.getElementById('mensaje-movimiento').innerText = '⚠️ Todos los campos son obligatorios.';
      return;
    }
  
    // Agregar fila a la tabla
    const tabla = document.getElementById('tabla-movimientos').querySelector('tbody');
    const fila = document.createElement('tr');
    const fecha = new Date().toLocaleString();
  
    fila.innerHTML = `
      <td>${tipo}</td>
      <td>$${monto.toFixed(2)}</td>
      <td>${descripcion}</td>
      <td>${fecha}</td>
    `;
  
    tabla.appendChild(fila);
    const fechaCampo = document.getElementById('fecha');
const ahora = new Date();
const fechaFormateada = ahora.toLocaleString(); // "7/4/2025, 14:25:34"
fechaCampo.value = fechaFormateada;

  
    // Mensaje de éxito
    document.getElementById('mensaje-movimiento').innerText = '✅ Movimiento registrado correctamente.';
  
    // Limpiar formulario
    this.reset();
  });
  