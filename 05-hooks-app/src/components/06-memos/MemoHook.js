import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'

export const MemoHook = () => {
    const { counter, increment} =  useCounter (150)
    const [show, setShow] = useState(true)

    const memoProcesoPesado =  useMemo(() => procesoPesado ( counter ), [counter])

    return (
        <div>
            <h1>Hook useMemo</h1>
            <hr />
            <h2>
              Valor del contador: <small> {counter} </small>
            </h2>
            <hr />
            <p>{ memoProcesoPesado }</p>
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
