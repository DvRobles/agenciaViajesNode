import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';
import { 
    guardarTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
//? ES UN COMODIN EL":" ENTONCES MOSTRARÁ UNA PAGINA PARA CADA VIAJE DIGAMOS EN LUGAR DE VIAJE1,2,3...
router.get("/viajes/:slug", paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;