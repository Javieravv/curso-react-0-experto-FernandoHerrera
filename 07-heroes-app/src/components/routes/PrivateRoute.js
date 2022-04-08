import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"

export const PrivateRoute = ( { children }) => {

    const { user } = useContext(AuthContext)

    // Cual es el path que estamos viendo
    const { pathname, search} = useLocation()
    // guardamos en el local storage para
    
    localStorage.setItem ('lastPath', pathname + search)

    return user.logged 
        ? children
        : <Navigate to="/login" />
}
