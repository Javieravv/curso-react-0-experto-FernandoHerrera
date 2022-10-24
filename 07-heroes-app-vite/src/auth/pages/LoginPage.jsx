import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate()
    const onLoginHeroes = () => {
      navigate ('/', {
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
  