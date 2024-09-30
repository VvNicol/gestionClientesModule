import { agregarCliente, enviarCliente, eliminarCliente, modificarCliente } from "./operaciones.js";

function mostrarCliente() {
    const tabla = document.getElementById('clientesTableBody');
    tabla.innerHTML = '';

    const cliente = enviarCliente();
    cliente.forEach((cli, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${cli.nombre}</td>
          <td>${cli.correo}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editClient(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteClientEntry(${index})">Eliminar</button>
          </td>
        `;
        tabla.appendChild(row);
    })
}


function agregarClienteLocal() {
    //Primero tomamos todos los campos que queremos
    const nombre = document.getElementById('nombreInput').value;
    const correo = document.getElementById('correoInput').value;

    //Agregamos los clientes
    agregarCliente({ nombre, correo });

    console.log('Datos a enviar:', { nombre, correo });

    // Mostrar la tabla si está oculta
    const clientesTable = document.getElementById('clientesTable');
    if (clientesTable.style.display === 'none') {
        clientesTable.style.display = 'table';
    }

    //Vaciar los campos para dar sensacion que se envio
    document.getElementById('nombreInput').value = '';
    document.getElementById('correoInput').value = '';
}


// Hacer accesibles las funciones globalmente
window.agregarClienteLocal = agregarClienteLocal;
window.mostrarCliente = mostrarCliente;
