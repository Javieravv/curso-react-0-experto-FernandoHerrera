/**Rutas principales para la aplicación.  
 * Se definen rutas para login o journal.
 * La idea es que los módules estén separados y se puedan agregar rutas
 * para cada cual
*/

import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route 
            path = "/auth/*"
            element={ <AuthRoutes />}
        />

        <Route 
            path = "/*"
            element={ <JournalRoutes />}
        />

        <Route />
    </Routes>
  )
}
