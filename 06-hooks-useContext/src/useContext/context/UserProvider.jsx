/**Provider del context */

import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 7167634,
//     name: 'Javier Armando Vargas Vega',
//     age: 49,
//     email: 'javo@javo.com'
// }

export const UserProvider = ( { children } ) => {
    const [user, setUser] = useState()
    return (
      <UserContext.Provider value = { { user,setUser }}>
          { children }
      </UserContext.Provider>
    )
}
