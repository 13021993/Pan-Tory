const form = document.getElementById('form-reporte');
const tabla = document.getElementById('tabla-reportes');
const ctx = document.getElementById('grafica-reportes').getContext('2d');

let reportes = [];
let conteo = { Ventas: 0, Inventario: 0, Caja: 0 };

const grafica = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ventas', 'Inventario', 'Caja'],
    datasets: [{
      label: 'Cantidad de Reportes',
      data: [0, 0, 0],
      backgroundColor: ['#28a745', '#ffc107', '#dc3545']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const tipo = document.getElementById('tipo').value;
  const descripcion = document.getElementById('descripcion').value;
  const fecha = new Date().toLocaleString();

  if (tipo && descripcion) {
    reportes.push({ tipo, descripcion, fecha });
    conteo[tipo]++;

    actualizarTabla();
    actualizarGrafica();
    form.reset();
  }
});

function actualizarTabla() {
  tabla.innerHTML = '';
  reportes.forEach(r => {
    const fila = `<tr>
                    <td>${r.tipo}</td>
                    <td>${r.descripcion}</td>
                    <td>${r.fecha}</td>
                  </tr>`;
    tabla.innerHTML += fila;
  });
}

function actualizarGrafica() {
  grafica.data.datasets[0].data = [
    conteo['Ventas'],
    conteo['Inventario'],
    conteo['Caja']
  ];
  grafica.update();
}
