import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {
    const [show, setShow] = useState(true)
    const { counter, incrementCounter } = useCounter (5)

    return (
        <>
            <h1> Memorizar componente </h1>
            <hr />
            <h2>Valor del contador: <Small value ={counter} /></h2>
            <button 
                className="btn btn-primary"
                onClick={ () => incrementCounter (1) }
            >
                Incrementar
            </button>
            <button
                className="btn btn-alert"
                onClick={() => setShow (!show)}
            > Mostrar / Ocultar</button>
            {
                show && <h2><br />Hola. Me estoy mostrando</h2>
            }
        </>
    )
}
