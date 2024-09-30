import { agregarCliente, enviarCliente, eliminarCliente, modificarCliente } from "./clienteManager.js";

function mostrarCliente() {
  const tabla = document.getElementById('clientesTableBody');
  tabla.innerHTML = '';

  const cliente = enviarCliente();
  cliente.forEach((cli, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${cli.nombre}</td>
          <td>${cli.dni}</td>
          <td>${cli.correo}</td>
          <td>${cli.direccion}</td>
          <td>
            <button class="btn btn-danger btn-sm my-1" onclick="eliminarClienteLocal(${index})">Eliminar</button>
          </td>`;
    tabla.appendChild(row);
  })
}

function agregarClienteLocal() {
  //Primero tomamos todos los campos que queremos
  const nombre = document.getElementById('nombreInput').value;
  const dni = document.getElementById('dniInput').value;
  const correo = document.getElementById('correoInput').value;
  const direccion = document.getElementById('direccionInput').value;

  if (!nombre || !dni || !correo || !direccion) {
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');

    // Establecer el mensaje de alerta y mostrar el contenedor
    alertMessage.textContent = 'Por favor, rellena todos los campos.'; // Mensaje de alerta
    alertContainer.style.display = 'block'; // Mostrar el contenedor de alerta

    // ocultar la alerta después de 3 segundos
    setTimeout(() => {
      alertContainer.style.display = 'none'; // Ocultar después de 3 segundos
    }, 3000);

    return; // Salir de la función si no se cumple la condición
  }  
  
  //Agregamos los clientes
  agregarCliente({ nombre, dni, correo, direccion });
  // Mostrar la tabla si está oculta
  const clientesTable = document.getElementById('clientesTable');
  clientesTable.style.display = 'table'; // Mostrar la tabla

  //Vaciar los campos para dar sensacion que se envio
  document.getElementById('nombreInput').value = '';
  document.getElementById('dniInput').value = '';
  document.getElementById('correoInput').value = '';
  document.getElementById('direccionInput').value = '';

  mostrarCliente();
}

function eliminarClienteLocal(index) {

  eliminarCliente(index);
  mostrarCliente();

}

// Hacer accesibles las funciones globalmente
window.agregarClienteLocal = agregarClienteLocal;
window.mostrarCliente = mostrarCliente;
window.eliminarClienteLocal = eliminarClienteLocal;
