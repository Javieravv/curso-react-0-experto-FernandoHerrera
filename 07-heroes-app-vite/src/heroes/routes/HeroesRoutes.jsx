import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Nabvar"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
          <Routes>
              <Route
                  path="/" element={ <Navigate to="/marvel" />}
              />
              <Route
                  path="/marvel" element={ <MarvelPage />}
              />
              <Route
                  path="/dc" element={ <DcPage />}
              />
              <Route
                  path="/*" element={ <MarvelPage />}
              />
              <Route
                  path="/search" element={ <SearchPage />}
              />
              <Route
                  path="/hero/:heroId" element={ <HeroPage />}
              />
          </Routes>
        </div>
    </>
  )
}
