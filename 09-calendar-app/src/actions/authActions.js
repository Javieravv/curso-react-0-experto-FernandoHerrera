/**Accines para la autenticación  */

import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import { eventLogout } from "./eventsActions"

export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken ( 'auth', { email, password}, 'POST' )
        const body = await resp.json()
        
        // este ok es el que se envía del backend. Puede ser cualquier otra cosa
        // El token durará activo dos horas.
        if ( body.ok ) { 
            localStorage.setItem ('token', body.token)
            localStorage.setItem ('token-init-date', new Date().getTime())
            dispatch ( login ({
                uid: body.uid,
                name: body.name
            }))
        } else {
            // Si se ingresa mal, mostrar error
            Swal.fire ('Error', body.msg, 'error')
        }
    }
}

// ación para el registro. Para actualizar el estado y grabar la bd
export const startRegister = ( email, password, name ) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken ( 'auth/new', { email, password, name }, 'POST' )
        const body = await resp.json()
        
        // este ok es el que se envía del backend. Puede ser cualquier otra cosa
        // El token durará activo dos horas.
        if ( body.ok ) { 
            localStorage.setItem ('token', body.token)
            localStorage.setItem ('token-init-date', new Date().getTime())
            dispatch ( login ({
                uid: body.uid,
                name: body.name
            }))
        } else {
            // Si se ingresa mal, mostrar error
            Swal.fire ('Error', body.msg, 'error')
        }
    }
}

// Para renovar token; verificar si está activo y renovarlo
export const startChecking = () => {
    return async ( dispatch ) => {
        const resp = await fetchConToken ( 'auth/renew' )
        const body = await resp.json()

        // este ok es el que se envía del backend. Puede ser cualquier otra cosa
        // El token durará activo dos horas.
        if ( body.ok ) { 
            localStorage.setItem ('token', body.token)
            localStorage.setItem ('token-init-date', new Date().getTime())
            dispatch ( login ({
                uid: body.uid,
                name: body.name
            }))
        } else {
            // Si se ingresa mal, mostrar error
            dispatch ( checkingFinish ()) 
        }
    }
}

// acción en caso de no serposible renovar el token
const checkingFinish = () => ({ type: types.authCheckingFinish })


// creamos la acción para actualizar el store de redux
const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear()
        dispatch ( eventLogout() )
        dispatch ( logout () )
    }
}

const logout = () => ( { type: types.authLogout })
