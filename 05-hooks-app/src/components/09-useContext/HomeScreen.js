
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    // Obtenemos la inforamción del contexto de la aplicacion dentro de este 
    // componente. Recordar que todo está envuelto dentro del contexto que fue creado
    // const userContext = useContext (UserContext)
    const { user } = useContext (UserContext)
    console.log (user)

    return (
        <div>
            <h1>Pantalla Principal</h1>
            <hr />
            <pre>
                { JSON.stringify (user, null, 3)}
            </pre>
        </div>
    )
}
