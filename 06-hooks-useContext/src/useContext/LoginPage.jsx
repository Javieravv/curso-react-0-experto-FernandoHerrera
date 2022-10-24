import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user,setUser } = useContext(UserContext)
    
    return (
      <>
          <h1>Login Page</h1>
          <hr />
          <pre>
             { JSON.stringify(user, null, 4)}
          </pre>
          <button
            className="btn btn-danger"
            onClick = { () => setUser ({
                id: 7167634,
                name: 'Javier Armando Vargas Vega',
                age: 49,
                email: 'javo@javo.com'
            }) }
          >
            Establecer Usuario 
          </button>
      </>
    )
}
