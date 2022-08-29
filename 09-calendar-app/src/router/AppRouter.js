/**Componente de las rutas */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { startChecking } from '../actions/authActions';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    // Para conservar el store cuando el navegador se refresque
    const dispatch = useDispatch()
    const { checking, uid } = useSelector( state => state.auth)

    useEffect(() => {
        dispatch ( startChecking() )
    }, [ dispatch ])

    // No mostrar la parte principal hasta que esté el checking listo
    if ( checking ) {
        return ( <h5>Por favor espera...</h5> )
    }

    /**
     *   !!uid es una doble negación. 
     */

    return (
        <Router>
            <div className="divRouter">
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen  } 
                        isAuthenticated = { !!uid}
                    />
                    <PrivateRoute 
                        exact 
                        path="/"
                        component={ CalendarScreen }
                        isAuthenticated = { !!uid } 
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
 