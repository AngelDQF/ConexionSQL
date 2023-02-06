import {config} from 'dotenv'; //TODO: esta funcion sirve para cargar las variables de entorno del archivo .env
config(); //TODO: Aqui se cargan las variables de entorno
export default{
    port: process.env.PORT || 3000, //TODO: esta funcion sirve para configurar el puerto de la app, si no existe un puerto definido en las variables de entorno, se usará el puerto 3000
}