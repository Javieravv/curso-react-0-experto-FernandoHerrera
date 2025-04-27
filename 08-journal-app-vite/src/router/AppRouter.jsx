/**Rutas principales para la aplicación.  
 * Se definen rutas para login o journal.
 * La idea es que los módules estén separados y se puedan agregar rutas
 * para cada cual
*/

import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {
    // custom hook personalizado para estar pendiente del status 
    const { status } = useCheckAuth()

    if ( status === 'checking') {
      return <CheckingAuth />
    }

    return (
      <Routes>
          {
              ( status === 'authenticated')
                ? <Route path = "/*" element={ <JournalRoutes />} />
                : <Route path = "/auth/*" element={ <AuthRoutes />} />
          }

          {/* Cualquier otra ruta, en caso que no ingrese al anterior*/}
          <Route path="/*" element={ <Navigate to="/auth/login" /> } />

          {/*<Route path = "/auth/*" element={ <AuthRoutes />} />*/}
          {/*<Route path = "/*" element={ <JournalRoutes />} />*/}

          <Route />
      </Routes>
    )
}
