import { Router } from "express";// TODO: Importamos Router de express
const router = Router(); //TODO: Creamos una constante router
import { getPruebas, postPrueba, getPrueba } from "../controllers/prueba.controller";

router.get('/prueba',getPruebas);//TODO: Creacion de ruta para el apartado de productos
router.get('/prueba:id',getPrueba);

router.post('/prueba',postPrueba);

router.put('/prueba',);

router.delete('/prueba',);


export default router; //TODO: Exportamos el router