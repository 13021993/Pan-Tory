document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formProveedor');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que se recargue la página
  
      // Obtener los valores de los campos
      const nombre = document.getElementById('nombre').value.trim();
      const contacto = document.getElementById('contacto').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
  
      // Obtener la fecha y hora actual
      const fechaRegistro = new Date().toLocaleString();
  
      // Crear un objeto con los datos del proveedor
      const proveedor = {
        nombre,
        contacto,
        telefono,
        direccion,
        fechaRegistro
      };
  
      // Mostrar los datos en consola (puedes enviarlos a una API o almacenarlos localmente)
      console.log('Proveedor registrado:', proveedor);
  
      // Mostrar alerta de éxito
      alert(`Proveedor "${nombre}" registrado exitosamente el ${fechaRegistro}.`);
  
      // Limpiar el formulario
      form.reset();
    });
  });
  