import express from 'express'; //importamos express
import config from './config'; //importamos el archivo de configuracion
const app = express();//inicializamos express

import productsRoutes from './routes/prueba.routes';//importamos las rutas de productos

app.set('port', config.port);//TODO: esta funcion sirve para configurar el puerto de la app
app.use(express.json());//TODO: esta funcion sirve para que la app pueda entender los datos que le enviamos en formato json
app.use(express.urlencoded({ extended: false }));//TODO: esta funcion sirve para que la app pueda entender los datos que le enviamos en formato urlencoded(es decir, datos de formularios html)
app.use(productsRoutes);//TODO: esta funcion sirve para usar las rutas de productos
export default app;