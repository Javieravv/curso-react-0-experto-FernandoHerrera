/**Proveedor del Auth Context */

import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = { 
    logged: false
}

const init = () => {
    const user = JSON.parse (localStorage.getItem('user') )
    return { 
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ( { children }) => {
    const [authState, dispatchAuth] = useReducer(authReducer, {}, init)
    
    const onLoginUser = ( name = '') => {
        const user = {
            id: '654321',
            name: name
        }
        const action = {
            type: types.login,
            payload: user
        }
        dispatchAuth ( action )
        localStorage.setItem ('user', JSON.stringify (user))
    }

    const onLogoutUser = () => {
        localStorage.removeItem ('user')
        const action = {
            type: types.logout,
        }
        dispatchAuth ( action )
    }

    return (
        <AuthContext.Provider value = { {
            onLoginUser: onLoginUser,
            onLogoutUser: onLogoutUser,
            authState
        } }>
            { children }
        </AuthContext.Provider>
    )
}
