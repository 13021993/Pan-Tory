let cajaAbierta = false;

document.getElementById('form-caja').addEventListener('submit', function (e) {
  e.preventDefault();

  const montoApertura = parseFloat(document.getElementById('monto_apertura').value);
  const mensajeCaja = document.getElementById('mensaje-caja');

  if (isNaN(montoApertura) || montoApertura <= 0) {
    mensajeCaja.innerText = '⚠️ Por favor, ingresa un monto de apertura válido.';
    mensajeCaja.style.color = 'red';
    return;
  }

  if (!cajaAbierta) {
    cajaAbierta = true;

    document.getElementById('monto_apertura').disabled = true;
    document.getElementById('btn-abrir').disabled = true;

    document.getElementById('monto_cierre').disabled = false;
    document.getElementById('btn-cerrar').disabled = false;

    document.getElementById('estado-caja').innerHTML = 'Estado actual: ✅ <strong>Abierta</strong>';
    mensajeCaja.innerText = '✅ Caja abierta con $' + montoApertura.toFixed(2);
    mensajeCaja.style.color = 'green';
  }
});

document.getElementById('btn-cerrar').addEventListener('click', function () {
  const montoCierre = parseFloat(document.getElementById('monto_cierre').value);
  const mensajeCaja = document.getElementById('mensaje-caja');

  if (!isNaN(montoCierre) && montoCierre > 0) {
    cajaAbierta = false;

    document.getElementById('monto_cierre').disabled = true;
    document.getElementById('btn-cerrar').disabled = true;

    document.getElementById('monto_apertura').disabled = false;
    document.getElementById('btn-abrir').disabled = false;

    document.getElementById('estado-caja').innerHTML = 'Estado actual: ❌ <strong>Cerrada</strong>';
    mensajeCaja.innerText = '✅ Caja cerrada con $' + montoCierre.toFixed(2);
    mensajeCaja.style.color = 'green';

    // Limpia los campos
    document.getElementById('monto_apertura').value = '';
    document.getElementById('monto_cierre').value = '';
  } else {
    mensajeCaja.innerText = '⚠️ Por favor, ingresa un monto de cierre válido.';
    mensajeCaja.style.color = 'red';
  }
});
