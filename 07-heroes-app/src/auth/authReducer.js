/** Creamos un reducer para manejar el login */

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    console.log ('Reducer es', action.type)
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}