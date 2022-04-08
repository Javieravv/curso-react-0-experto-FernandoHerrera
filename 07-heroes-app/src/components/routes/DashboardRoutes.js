// maneja las rutas del enrutador del navbar para

import { Route, Routes } from "react-router-dom"
import { DcScreen } from "../dc/DcScreen"
import { HeroScreen } from "../hero/HeroScreen"
import { MarvelScreen } from "../marvel/MarvelScreen"
import { SearchScreen } from "../search/SearchScreen"
import { NavBar } from "../ui/NavBar"

/* Estas rutas solo deberían ser visibles si se está autenticado.
También dependiendo de privilegios de usuario, etc.*/

export const DashboardRoutes = () => {
  return (
    <>
        <NavBar />
        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroeId" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
