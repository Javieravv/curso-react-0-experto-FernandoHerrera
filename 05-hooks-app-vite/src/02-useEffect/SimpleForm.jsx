import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "",
        email: ""
    })
    const { username, email } = formState

    const onInputChange = ( { target } ) => {
        const { name, value} = target
        setFormState ( { 
            ...formState,
            [ name ] : value
        })
    }

    useEffect ( () => {
        // console.log ( ' Componente montado... ')
    }, [])

    useEffect ( () => {
        // console.log ( ' Form State cambiado... ')
    }, [formState])

    useEffect ( () => {
        // console.log ( ' Email  cambiado... ')
    }, [email])

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="tuemail@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === "javieravv") && <Message />
            }
            
        </>
        
    )
}
