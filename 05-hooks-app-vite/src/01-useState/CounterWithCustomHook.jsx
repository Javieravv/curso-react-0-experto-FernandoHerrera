/**Utilizando un hook personalizado. */

import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, incrementCounter, decrementCounter, resetCounter } = useCounter ()
    const value = 6
    return (
        <>
            <h2>Counter with Hook: { counter }</h2>
            <hr />
            <button 
                className="btn btn-primary me-2"
                onClick={ () => incrementCounter ( value )}
            >+{ value }</button>
            <button 
                className="btn btn-primary me-2"
                onClick={ resetCounter}
            >Reset</button>
            <button
                className="btn btn-primary me-2"
                onClick={ () => decrementCounter (value)}
            >-{ value }</button>
            <hr />
        </>
    )
}
