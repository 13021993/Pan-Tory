document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-reporte-especifico');
    const tablaBody = document.getElementById('tabla-reportes-especificos');
    const graficaCanvas = document.getElementById('grafica-reportes-especificos');
    const btnPDF = document.getElementById('btn-pdf');
    const btnExcel = document.getElementById('btn-excel');
  
    let datosReporte = [];
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Simulación de datos filtrados
      const fechaInicio = document.getElementById('fecha_inicio').value;
      const fechaFin = document.getElementById('fecha_fin').value;
      const empleado = document.getElementById('empleado').value.toLowerCase();
  
      datosReporte = [
        { fecha: '2025-04-01', producto: 'Pan Francés', cantidad: 12, total: 9600, empleado: 'maria' },
        { fecha: '2025-04-02', producto: 'Pan de Bono', cantidad: 8, total: 6400, empleado: 'maria' },
        { fecha: '2025-04-02', producto: 'Croissant', cantidad: 5, total: 8500, empleado: 'juan' },
      ].filter(item => {
        const fechaValida = (!fechaInicio || item.fecha >= fechaInicio) &&
                            (!fechaFin || item.fecha <= fechaFin);
        const empleadoValido = !empleado || item.empleado.toLowerCase().includes(empleado);
        return fechaValida && empleadoValido;
      });
  
      renderTabla();
      renderGrafica();
    });
  
    function renderTabla() {
      tablaBody.innerHTML = "";
      datosReporte.forEach(item => {
        const fila = `
          <tr>
            <td>${item.fecha}</td>
            <td>${item.producto}</td>
            <td>${item.cantidad}</td>
            <td>$${item.total}</td>
            <td>${item.empleado}</td>
          </tr>
        `;
        tablaBody.innerHTML += fila;
      });
    }
  
    function renderGrafica() {
      const datosPorProducto = {};
      datosReporte.forEach(({ producto, total }) => {
        datosPorProducto[producto] = (datosPorProducto[producto] || 0) + total;
      });
  
      const etiquetas = Object.keys(datosPorProducto);
      const valores = Object.values(datosPorProducto);
  
      new Chart(graficaCanvas, {
        type: 'bar',
        data: {
          labels: etiquetas,
          datasets: [{
            label: 'Ventas por Producto',
            data: valores,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  
    // Exportar a PDF
    btnPDF.addEventListener('click', () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      doc.text("Reporte Específico de Ventas - Pan-Tory", 10, 10);
  
      let y = 20;
      datosReporte.forEach(({ fecha, producto, cantidad, total, empleado }) => {
        doc.text(`📅 ${fecha} | 🥖 ${producto} | Qty: ${cantidad} | 💵 $${total} | 👤 ${empleado}`, 10, y);
        y += 8;
      });
  
      doc.save("reporte_ventas.pdf");
    });
  
    // Exportar a Excel
    btnExcel.addEventListener('click', () => {
      const ws = XLSX.utils.json_to_sheet(datosReporte);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "ReporteVentas");
      XLSX.writeFile(wb, "reporte_ventas.xlsx");
    });
  });
  