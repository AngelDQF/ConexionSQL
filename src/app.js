import express from 'express'; //importamos express
import config from './config'; //importamos el archivo de configuracion
const app = express();//inicializamos express
let port=process.env.PORT; //TODO: esta variable sirve para almacenar el puerto de la app
app.set('port', config.port);//TODO: esta funcion sirve para configurar el puerto de la app

export default app;