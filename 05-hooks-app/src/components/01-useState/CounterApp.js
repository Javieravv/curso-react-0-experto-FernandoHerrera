import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
    // const [counter, setCounter] = useState({
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    const { counter1, counter2} = counter

    const handleCounter = () => {
        setCounter ({
            // el nuevo estado se actualiza aquí
            ...counter,
            counter1: counter1 + 1
        })
    }
    return (
        <>
            <h1>Aprendiendo Hooks</h1>
            <h2>Counter { counter1 }</h2>
            <h2>Counter { counter2 }</h2>
            <hr />
            <button 
                className = "btn btn-primary"
                onClick = { handleCounter }
            >
                +1
            </button>
        </>
    )
}
