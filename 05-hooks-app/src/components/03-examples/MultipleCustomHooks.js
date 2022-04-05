import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {
    // Debe tenerse en cuenta cómo llegan los resultados y con base en ello se
    // hace desestructuración.
    // Los nombres de variables y demás variarán dependiendo de la composición de la 
    // data que arroje la llamada a la API. O dependiendo de la lógica del hook
    // que se ha hecho.

    const {counter, increment, decrement, reset } = useCounter(1)

    const { loading, data } = useFetch ( `https://www.breakingbadapi.com/api/quotes/${counter}` )
    
    // console.log ('Contador = ', counter)
    
    // Variará, conforme a la lógica.
    // !! data significa que se evalúa si hay data.
    // En ese caso pues sacar el primer valor del arreglo.
    // Si no hay data, no hacer nada.
    // console.log (data)

    const { author, quote } = !!data && data [0] 
        
    // console.table (quote, author)

    return (
        <div>
            <h1>Breakin Bad Quotes</h1>
            <hr />
            { 
                loading
                ? 
                (
                    <div className="alert alert-info text-center">Loading...</div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <p></p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }
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
        </div>
    )
}
