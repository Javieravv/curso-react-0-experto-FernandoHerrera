// Maneja el Login.
// Graba el usuario

import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { setUser } = useContext (UserContext)

    return (
        <div>
            <h1>Pantalla Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => setUser ({
                    id: 654321,
                    name: 'Xavier Armando',
                    email: 'xavier@yahoo.jav'
                }) }
            >
                Login
            </button>
            <button
                className="btn btn-primary ml-3"
                onClick={ () => setUser ({}) }
            >
                Logout
            </button>
        </div>
    )
}
