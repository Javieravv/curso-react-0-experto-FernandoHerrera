// para configurar el router de la aplicación

import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
        <>
            <BrowserRouter>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route exact path="/"    element= {<HomeScreen/>} />
                    <Route path="/about"     element= {<AboutScreen/>} />
                    <Route path="/login"    element= {<LoginScreen/>} />
                    <Route path="*"         element= {<Navigate to="/" /> } />
                </Routes>
            </div>
            </BrowserRouter>
        </>
  )
}
