document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("ventaForm");
  const tablaBody = document.querySelector("#tablaVentas tbody");
  let contadorId = 1;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const precio = parseFloat(document.getElementById("precio_unitario").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (!nombre || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const total = (precio * cantidad).toFixed(2);

    // Obtener fecha y hora del momento del registro
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString("es-CO", {
      year:   "numeric",
      month:  "2-digit",
      day:    "2-digit",
      hour:   "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });

    // Crear y añadir fila
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${contadorId}</td>
      <td>${nombre}</td>
      <td>$${precio.toFixed(2)}</td>
      <td>${cantidad}</td>
      <td>$${total}</td>
      <td>${fechaHora}</td> <!-- Mostramos la hora aquí -->
      <td>
        <button class="btn-eliminar" data-id="${contadorId}">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(fila);
    contadorId++;

    formulario.reset();
    document.getElementById("nombre").focus();
  });

  // Eliminar venta
  tablaBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
      const fila = e.target.closest("tr");
      fila.remove();
      alert("Venta eliminada correctamente ✅");
     
    }
  });

  // Editar venta
  tablaBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-editar")) {
      const fila = e.target.closest("tr");
      const celdas = fila.querySelectorAll("td");
      document.getElementById("id_venta").value = celdas[0].innerText;
      document.getElementById("nombre").value = celdas[1].innerText;
      document.getElementById("precio_unitario").value = celdas[2].innerText.replace("$", "");
      document.getElementById("cantidad").value = celdas[3].innerText;
    }
  });
});
