/**Rutas para la autenticación */
const { Router } = require ('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const router = Router()
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarJWT } = require('../middlewares/validar-jwt')


router.post(
    '/new', 
    [  // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es  obligatorio o está errado').isEmail(),
        check('password', 'El password debe ser de mínimo 6 carácteres').isLength( { min: 6}),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/',
    [  // middlewares
        check('email', 'El email es  obligatorio o está errado').isEmail(),
        check('password', 'El password debe ser de mínimo 6 carácteres').isLength( { min: 6}),
        validarCampos
    ],
    loginUsuario 
);

router.get('/renew', validarJWT, revalidarToken );

module.exports = router;
