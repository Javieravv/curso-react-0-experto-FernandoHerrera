import { types } from "../types/types";

/** Reducer para manejo de autenticación.
 * 
 * El state será vacío cuando el usuario no se autenique. 
 * 
 * Cuando se autentique quedará:
 * {
 *   uid: 'id del usuario'.
 *   name: 'Xaviersillo el gordillo'
 * }
 */



export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
            case types.logout:
                return { };
        default:
            return state;
    }
}
