import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const LayoutEffect = () => {
    // Debe tenerse en cuenta cómo llegan los resultados y con base en ello se
    // hace desestructuración.
    // Los nombres de variables y demás variarán dependiendo de la composición de la 
    // data que arroje la llamada a la API. O dependiendo de la lógica del hook
    // que se ha hecho.

    const {counter, increment, decrement, reset } = useCounter(1)

    const { data } = useFetch ( `https://www.breakingbadapi.com/api/quotes/${counter}` )
    
    // console.log ('Contador = ', counter)
    
    // Variará, conforme a la lógica.
    // !! data significa que se evalúa si hay data.
    // En ese caso pues sacar el primer valor del arreglo.
    // Si no hay data, no hacer nada.
    // console.log (data)

    const { author, quote } = !!data && data [0] 
        
    // console.table (quote, author)
    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect ( () => {
        // console.log ('Hey, Layout...', pTag.current.getBoundingClientRect())
        setBoxSize (pTag.current.getBoundingClientRect())
    }, [quote] )

    return (
        <div>
            <h1>Breakin Bad Quotes</h1>
            <h2>Hook useLayoutEffect</h2>
            <hr />
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}    
                >
                {quote}
                </p>
                <br/>
                
                {/* <footer className="blockquote-footer">{author}</footer> */}
            </blockquote>
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>
            <button 
                className="btn btn-primary"
                onClick={reset}
            >
                Iniciar...
            </button>
            <button 
                className="btn btn-primary"
                onClick={decrement}
            >
                Anterior Quote
            </button>
            <hr />
            <pre>
                    { JSON.stringify (boxSize, null, 3)}
            </pre>
        </div>
    )
}
