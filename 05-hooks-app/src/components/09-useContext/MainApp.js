// Aplicación principal
import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'
import './use-context.css'

// El contexto se crea en un archivo aparte y se llama como un componente 
// Que envuelve a los componentes de la aplicación.

export const MainApp = () => {
    
    const [user, setUser] = useState({})

    return (
        <>
            <UserContext.Provider value={ {
                user,
                setUser
            }  }>
                <AppRouter />
            </UserContext.Provider>
        </>
    )
}
