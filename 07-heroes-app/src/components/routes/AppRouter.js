// Router principal

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

/**Podrán programarse tantas rutas como se quiera. Dependerá de la lógica
 * de la aplicacion que se esté manejando.
 */

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/login" 
                element={
                  <PublicRoute>
                      <LoginScreen />
                  </PublicRoute>
                } 
            />

            <Route 
              path="/*" 
              element={
                <PrivateRoute>
                    <DashboardRoutes/>
                </PrivateRoute>
              } 
            />
        </Routes>
    </BrowserRouter>
  )
}
