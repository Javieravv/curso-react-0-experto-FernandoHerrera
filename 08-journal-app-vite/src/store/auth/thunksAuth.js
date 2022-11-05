/**Acciones que se pueden disparar.
 * Usualmente son asíncronas.
 */

import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials ())
    }
}

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials ())
    }
}