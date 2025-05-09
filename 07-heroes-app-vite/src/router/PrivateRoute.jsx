import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ( { children }) => {
    const { authState } = useContext(AuthContext)
    const { logged } = authState
    
    // Guardar la posición en la que se está.
    const { pathname, search } = useLocation ()
    const lastPath = pathname + search
    localStorage.setItem ('lastPath', lastPath )


    return ( logged )
        ? children 
        : <Navigate to="/login" />
}
