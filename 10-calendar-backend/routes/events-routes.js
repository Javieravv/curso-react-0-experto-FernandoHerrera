/**Se crea todo el CRUD para los eventos del calendario. 
 * Events Routes:
 * 
 * /api/events
 * Las validacioens deben hacerse con un middleware.
 * En este caso con check
*/

// Todas deben pasar por la validacion del JWT
const { Router } = require ('express')
const { check } = require('express-validator')
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events-controller')
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate}  = require ('../helpers/isDate')

const router = Router()
// Aquí podemos colocar el middleware que controla la validez del Token.
// Se puede hacer así, para no ponerlo en todas las llamadas de las rutas.
// Todas las peticiones que se hagan deben pasar por validar el Token.
router.use ( validarJWT )

// Obtener eventos
router.get ( 
    '/', 
    getEventos 
)


// Crear evento nuevo 
// Se hacen validaciones con check. Es un middleware
router.post (
    '/',
    [
        check('title', 'El título debe ser obligatorio.').not().isEmpty(),
        check('start', 'Fecha de inicio debe ser obligatoria.').custom ( isDate),
        check('end', 'Fecha de finalización debe ser obligatoria.').custom ( isDate),
        validarCampos
    ],
    crearEvento
)


// Actualizar Evento 
router.put ( 
    '/:id',
    [
        check('title', 'El título debe ser obligatorio.').not().isEmpty(),
        check('start', 'Fecha de inicio debe ser obligatoria.').custom ( isDate),
        check('end', 'Fecha de finalización debe ser obligatoria.').custom ( isDate),
        validarCampos
    ],
    actualizarEvento
)


// Borrar evento
router.delete ( 
    '/:id',
    eliminarEvento
)

module.exports = router
