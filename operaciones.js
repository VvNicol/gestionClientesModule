let clientesArray = [];

//añadir
export function agregarCliente(cliente) {
    clientesArray.push(cliente);
    //se agrega dentro de los parentesis el cliente que se va a agregar no el array
}
//devolver
export function enviarCliente() {
    return clientesArray;
    //queremos los clientes que actualmente estan
}
//eliminar
export function eliminarCliente(index) {
    clientesArray.splice(index, 1);
    //se tiene que buscar su posicion para eliminar
}
//actualizar
export function modificarCliente(index, updatedClient) {
    clientesArray[index] = updatedClient;
}