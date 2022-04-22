import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
  
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useEffect, useState } from "react";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    // Almacenar los datos de autenticación para no perderlos cuando el usuario
    // refresca la página

    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect( () => {
        firebase.auth().onAuthStateChanged (  (user) => {
            if (  user?.uid ) {
                dispatch ( login(user.uid, user.displayName) )
                setIsLoggedIn (true)
            } else {
                setIsLoggedIn (false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn])

    if ( checking) {
        // Esto puede cambiarse por algo mejor, para mostrar la espera.
        return (
            <h1>Por favor Espera...Ten paciencia...</h1>
        )
    }
    
    // Protección de rutas para determinar a dónde se dirige el usuario.

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        isAuthenticated = { isLoggedIn }
                        component = { AuthRouter }
                    />

                    <PrivateRoute
                        path="/"
                        isAuthenticated = { isLoggedIn }
                        component = { JournalScreen }
                    />

                    <Redirect 
                        to="/auth/login"
                    />
                </Switch>
            </div>
        </Router>
    )
}
