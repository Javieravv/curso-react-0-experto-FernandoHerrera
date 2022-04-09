// Dashboard para el login. Para colocarle un header 

import { Route, Routes } from "react-router-dom"
import { HeaderLogin } from "../encabezado-pie/HeaderLogin"
import { LoginScreen } from "../login/LoginScreen"

export const DashboardLogin = () => {
    return (
        <>
            <HeaderLogin />
            <div className="container">
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                </Routes>
            </div>
        </>
      )
}
