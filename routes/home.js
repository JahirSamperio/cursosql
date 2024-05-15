import {Router} from 'express';
// import { formularioAuth, formularioRegistro, leccionesController, cerrarSesion } from '../controllers/home.js';
import { leccionesController} from '../controllers/homeController.js';
const router = Router();

router.get('/', leccionesController)

// router.get('/auth', formularioAuth );

// router.get('/signup', formularioRegistro );

// router.post('/signout', cerrarSesion);

export default router;