import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const navigate = useNavigate()
    const { onLoginUser } = useContext( AuthContext)

    const onLoginHeroes = () => {
      // Recuperamos la última url.
      const lastPath = localStorage.getItem('lastPath') || '/'
      onLoginUser ( 'Xavier X' )
      navigate (lastPath, {
        replace: true
      })
    }

    return (
      <>
          <h1>Ingresar a la aplicación de Héroes</h1>
          <hr />
          <button 
            className="btn btn-primary"
            onClick={ onLoginHeroes }
          >Login</button>
      </>
    )
  }
  