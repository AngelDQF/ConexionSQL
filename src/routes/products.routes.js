import { Router } from "express";// TODO: Importamos Router de express
const router = Router(); //TODO: Creamos una constante router
import { getProducts } from "../controllers/products.controller";

router.get('/products',getProducts);//TODO: Creacion de ruta para el apartado de productos
router.get('/products',);

router.post('/products',);

router.put('/products',);

router.delete('/products',);


export default router; //TODO: Exportamos el router