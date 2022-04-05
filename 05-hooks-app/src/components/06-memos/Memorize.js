import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { SmallComponent } from './SmallComponent'
import '../02-useEffect/effect.css'

export const Memorize = () => {
    const { counter, increment} =  useCounter (10)

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Función Memo de ReactJs</h1>
            <hr />
            <h2>
              Valor del contador: <SmallComponent value={counter} />
            </h2>
            <button
                className = 'btn btn-primary'
                onClick={ increment }
            >
            Incrementar</button>
            <button
                className="btn btn-outline-primary ml-5"
                onClick = { () => {
                    setShow (!show)
                }}
            >
                Mostrar / Ocultar { JSON.stringify (show) }
            </button>
            <hr />
        </div>
    )
}
