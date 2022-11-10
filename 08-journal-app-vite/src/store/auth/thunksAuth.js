/**Acciones que se pueden disparar.
 * Usualmente son asíncronas.
 */

import { loginWithEmailPassword, registeruserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials ())
    }
}

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials ())
        const result = await signInWithGoogle ()
        // Si sale error
        if ( !result.ok ) return dispatch ( logout (result.errorMessage) )
        // Si sale todo bien
        dispatch (login ( result ))
    }
}

export const startCreatingUserWithEmailPassword = ( { email, password, displayName }) => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials () )
        const { ok, uid, photoURL, errorMessage } = await registeruserWithEmailPassword( { email, password, displayName } )
        if ( !ok ) return dispatch ( logout ( { errorMessage } ))
        dispatch ( login ( {uid, displayName, email, photoURL }  ))

    }
}

export const startLoginWithEmailPassword = ( { email, password } ) => {
    console.log ('INICIAMOS LOGIN CON EMAIL Y PASSWORD...', email, password)
    return async ( dispatch) => {
        dispatch (checkingCredentials () )
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword ( { email, password } )
        if ( !ok ) return dispatch ( logout ( { errorMessage } ))
        dispatch ( login ( { uid, displayName,  photoURL }  ))
    }
}
