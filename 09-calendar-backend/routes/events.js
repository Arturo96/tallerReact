const {Router} = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, editarEvento, borrarEvento } = require('../controllers/events');
const isDate = require('../helpers/isDate');
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');
const router = Router();

/*
    Ruta: /api/events
*/

// Todas las rutas tienen que pasar por la validación del JWT
router.use(validarJWT);

// Obtener eventos

router.get('/', getEventos)

// Crear evento
router.post('/', 
    [
        check('title', 'El titulo del evento es requerido').not().isEmpty(),
        check('start', 'La fecha de inicio es requerida').custom(isDate),
        check('end', 'La fecha final es requerida').custom(isDate),
        validarCampos
    ], crearEvento)

// Actualizar evento
router.put('/:id', editarEvento)

// Borrar evento
router.delete('/:id', borrarEvento)

module.exports = router;