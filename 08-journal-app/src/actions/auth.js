// Las acciones son simples funciones.

import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { noteLogout } from './notes';
import { finishLoading, startLoading } from "./ui";


// Acción asíncrona que regresa un callback
// En este caso el dispatch se obtiene del callback y lo ofrece thunk 
export const startLoginEmailPassword = ( email, password) => {
    return ( dispatch ) => {
        dispatch (startLoading () )
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then ( ( {user}) => {
                dispatch (login (user.uid, user.displayName))
                dispatch (finishLoading ())
            })
            .catch ( e => {
                dispatch (finishLoading ())
                Swal.fire ('Error encontrado ', e.message, 'error')
            })
    }
}


// Acción para autenciarse con google. Debe ser un nombre significativo.
// Si todo sale bien se devolverá el objeto userCredentials, llamado userCred y de él
// se podrán desestructurar las propiedades que se quieran en la aplicación. 
// Para este caso solo será el user.uid y el user.displayName

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then ( ( { user }) => {
                dispatch ( login (user.uid, user.displayName )
                )
            } )
    }
}

// acción para Registrar el email y el password
// El dispatch se obtiene gracia a thunk, que controla el middleware.

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword (email, password)
            .then ( async ({ user }) => {
                // Con esto actualizamos el nombre del usuario
                await user.updateProfile ( { displayName: name})
                dispatch ( login (user.uid, user.displayName) )
            })
            .catch ( err => {
                Swal.fire ('Error encontrado ', err.message, 'error')
            } )
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const logout = () => ({
    type: types.logout
})


// función asíoncrona porque se usa una funcion de firebase que regresa una promesa.|
export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch ( logout () )
        dispatch ( noteLogout ()  )
    }
}
