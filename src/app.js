import express from 'express'; //importamos express
import config from './config'; //importamos el archivo de configuracion
const app = express();//inicializamos express

import productsRoutes from './routes/products.routes';//importamos las rutas de productos

app.set('port', config.port);//TODO: esta funcion sirve para configurar el puerto de la app
app.use(productsRoutes);//TODO: esta funcion sirve para usar las rutas de productos
export default app;