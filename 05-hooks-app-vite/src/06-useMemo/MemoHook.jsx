import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = ( iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log ('Ahí vamos...')
    }
    return `${iterationNumber} iteracciones hechas. `
}


export const MemoHook = () => {
    const [show, setShow] = useState(true)
    const { counter, incrementCounter } = useCounter (2500)

    const memorizeValue = useMemo( () => heavyStuff(counter), [counter])

    return (
        <>
            <h1> Memorizar componente </h1>
            <hr />
            <h2>Valor del contador: <small>{counter}</small> </h2>
            <br /> 
            <h3> { memorizeValue }</h3>
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
