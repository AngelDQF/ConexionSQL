import app from './app'; //TODO: esta funcion sirve para importar el archivo app.js
import './models/conexion'; //TODO: esta funcion sirve para importar el archivo conexion.js
app.listen(app.get('port')); //TODO: esta funcion sirve para iniciar el servidor

console.log('server on port',app.get('port'));//TODO: esta funcion sirve para mostrar un mensaje en la consola del servidor para verificar que el servidor se esta ejecutando en el puerto que se ha configurado