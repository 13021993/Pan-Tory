document.addEventListener("DOMContentLoaded", () => {
    mostrarResumen();
  });
  
  function mostrarResumen() {
    // Datos simulados (estos vendrán de la base de datos en versión real)
    const resumen = [
      { fecha: "2025-04-07", turno: "mañana", ventas: 5, total: 25000 },
      { fecha: "2025-04-07", turno: "tarde", ventas: 3, total: 12000 },
      { fecha: "2025-04-06", turno: "mañana", ventas: 4, total: 18000 }
    ];
  
    renderResumen(resumen);
  }
  
  function filtrarResumen() {
    const fecha = document.getElementById("fecha").value;
    const turno = document.getElementById("turno").value;
  
    // Aquí iría una consulta a la BD, pero simulamos la lógica:
    const datos = [
      { fecha: "2025-04-07", turno: "mañana", ventas: 5, total: 25000 },
      { fecha: "2025-04-07", turno: "tarde", ventas: 3, total: 12000 },
      { fecha: "2025-04-06", turno: "mañana", ventas: 4, total: 18000 }
    ];
  
    const filtrado = datos.filter(d => {
      const coincideFecha = !fecha || d.fecha === fecha;
      const coincideTurno = turno === "todos" || d.turno === turno;
      return coincideFecha && coincideTurno;
    });
  
    renderResumen(filtrado);
  }
  
  function renderResumen(lista) {
    const cuerpo = document.getElementById("resumenBody");
    cuerpo.innerHTML = "";
  
    if (lista.length === 0) {
      cuerpo.innerHTML = `<tr><td colspan="4">No hay datos disponibles.</td></tr>`;
      return;
    }
  
    lista.forEach(item => {
      const fila = `
        <tr>
          <td>${item.fecha}</td>
          <td>${item.turno}</td>
          <td>${item.ventas}</td>
          <td>$${item.total}</td>
        </tr>`;
      cuerpo.innerHTML += fila;
    });
  }
  