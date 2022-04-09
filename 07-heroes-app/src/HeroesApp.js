import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { FooterHero } from './components/encabezado-pie/FooterHero'
import { AppRouter } from './components/routes/AppRouter'

// Lo que devuelve el init será el estado inicial.

const init = () => {
    /**Traemos del localstorage la información del usuario. 
     * Es posible que no exista la información
    */
    return JSON.parse(localStorage.getItem ('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer( authReducer, {}, init)

    // Usamos un efecto para guardar en el localStorage la información del usuario.
    // Se activa cuando cambie el objeto user.
    useEffect(() => {
      if (!user) return
      localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    
    
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
            <FooterHero />
        </AuthContext.Provider>
    )
}
