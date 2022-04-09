import { useContext, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

export const LoginScreen = () => {

    // Recuperamos el contexto
    const { dispatch } = useContext (AuthContext)
    // const [user, dispatch] = useReducer (authReducer)

    const navigate = useNavigate()

    const handleLogin = () => {
      
      const action = {
        type: types.login,
        payload: {name: 'Xaviersillo el Gordillo'}
      }
      dispatch (action)

      const lastPath = localStorage.getItem ('lastPath') || '/marvel'

      navigate (lastPath, {
        replace: true
      })

    }

    return (
      <div className = "container mt-5 mb-3">
          <h1>Login  Screen</h1>
          <hr />
          <button
            className = "btn btn-primary"
            onClick={ handleLogin }
          >
              Login
          </button>
      </div>
    )
}
