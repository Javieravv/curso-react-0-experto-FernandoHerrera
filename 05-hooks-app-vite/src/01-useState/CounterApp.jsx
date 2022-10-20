import { useState } from "react"

export const CounterApp = () => {
    // const [counter, setCounter] = useState(50)
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = state

    return (
        <>
            <h2>Counter App</h2>
            <hr />
            <h2>Counter 1: { counter1 }</h2>
            <h2>Counter 2: { counter2 }</h2>
            <h2>Counter 3: { counter3 }</h2>
            <button 
                onClick = {() => setCounter ( {
                    ...state,
                    counter1: counter1 + 1
                })}
                className="btn btn-primary me-2"
            >+1</button>
            <button className="btn btn-primary me-2" onClick = {() => setCounter ( {
                ...state,
                counter1: counter1 - 1
            } )}>-1</button>
            <button className="btn btn-primary me-2" onClick = {() => setCounter ({
                counter1: 10,
                counter2: 20,
                counter3: 30
            })}>Reset</button>
            <hr />
        </>
    )
}
