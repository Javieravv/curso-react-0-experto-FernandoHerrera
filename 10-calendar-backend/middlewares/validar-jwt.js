/**Validamos el JWT */
const { response } = require ('express')
const jwt = require('jsonwebtoken')

const validarJWT = ( req, res = response, next ) => {
    /**El token vendrá en los headers
     * x-token headers
     */
    const token = req.header ('x-token');   

    if ( !token ) { 
        return res.status(401).json ({ 
            ok: false, 
            msg: 'No hay token en la aplicación.'
        })
    }

    try {
        // const payload = jwt.verify(
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )
        
        // modificamos la reques para que cualquier llamado tenga consigo el uid y name del usuario
        req.uid = uid
        req.name = name

    } catch (error) {
        return res.status(401).json ({ 
            ok: false, 
            msg: 'Token inválido!'
        })
    }

    
    next()
}

module.exports = {
    validarJWT
}

