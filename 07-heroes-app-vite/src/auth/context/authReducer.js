/** Reducer para AuthContext */

import { types } from "../types/types";

// const initialState = { 
//     loggued: false,
//     name: ''
// }

export const authReducer = (state = {} , action ) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case types.logout:
            return {
                ...state,
                logged: false,
                user: {}
            }
        default:
            return state;
    }
}