import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext (UserContext)
    return (
      <>
          <h1>Home Page</h1>
          <hr />
          <h2>Usuario Activo: { user?.name }</h2>
      </>
    )
}
