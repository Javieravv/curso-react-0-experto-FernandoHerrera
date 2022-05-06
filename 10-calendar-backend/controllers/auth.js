/**Controladores para el auth */
const { response } = require ('express')
const bcrypt = require ('bcryptjs')
const Usuario = require('../models/Usuario')
const { generarJWT } = require ('../helpers/jwt-generator')

const crearUsuario = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        // let usuario = await Usuario.findOne ( {email: email})
        let usuario = await Usuario.findOne ( { email })
        
        if ( usuario ) {
            return res.status(400).json ({
                ok: false,
                msg: 'Ya hay un usuario con ese correo electrónico'
            })
        }
        
        usuario = new Usuario ( req.body )
        
        // Encriptar password
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync ( password, salt )


        await usuario.save()

        // Generar el JWT.
        const token = await generarJWT ( usuario.id, usuario.name )

        return res.status(201).json ({
            message: 'Usuario creado',
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
    } catch (error) {
        console.log (error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor comuníquese con el administrador.'
        })
    }

}

/**Login del usuario
 * Verificamos que usuario y contraseña coincidan con la bd.
 * Se usan métidos propios de bcryptjs 
 */
const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne ( { email } )
        
        if ( !usuario ) {
            return res.status(400).json ({
                ok: false,
                msg: 'El usuario o la contraseña no son correctos.'
            })
        }
        // Confirmar passwords 
        const validPassword = bcrypt.compareSync ( password, usuario.password )

        if ( !validPassword ) {
            return res.status(400).json ({
                ok: false,
                msg: 'El password ingresado está errado.'
            })
        }

        // Aquí vamos bien. Listos para generar JWT
        const token = await generarJWT ( usuario.id, usuario.name )

        res.status(200).json ({
            msg: 'Autenticación Ok',
            ok: 'true',
            uid: usuario.id, 
            name: usuario.name,
            token
        })

    } catch (error) {
        console.log (error)
        res.status(500).json ({
            ok: false,
            msg: 'Error al conectar usuario. Verifique usuario y contraseña.'
        })
    }
}

/**Cada cierto tiempo el token se revalida para garantizar que el usuario permanezca
 * logueado
 */
const revalidarToken = async (req, res = response) => {
    // Aquí en el objeto request viene el id y name del usuario, el cual se cargó
    // en el request.
    // const uid = req.uid
    // const name = req.name
    const { uid, name } = req

    // Se genera un nuevo JWT
    const token = await generarJWT ( uid, name )

    res.json ({
        message: 'Haciendo renew token',
        ok: true,
        uid,
        name,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}