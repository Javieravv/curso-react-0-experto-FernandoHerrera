import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FirebaseAuth } from "../firebase/configFirebase"
import { login, logout } from "../store/auth/authSlice"
import { startLoadingNotes } from "../store/journal"

export const useCheckAuth = () => {
    const { status } = useSelector ( state => state.auth)
    const dispatch = useDispatch ()

    // Formas para estar pendiente de los cambios en el usuario.
    // Si el usuario está autenticado, entonces controlará la lógica de la aplicación
    useEffect(() => {
        onAuthStateChanged ( FirebaseAuth, async ( user ) => {
        if ( !user ) return dispatch ( logout ())
        const { uid, email, displayName, photoURL } = user 
        dispatch ( login ({ uid, email, displayName, photoURL }))
        dispatch ( startLoadingNotes() ); // traemos las notas del usuario logueado
      })
    }, [])

    return { 
        status
    }
}
