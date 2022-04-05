// Hook personalizado para extraer la lógica de un contador|
// El custom hook deberá retornar el estado y las funciones creada.
// Todo dependerá de la ĺógica que se utilice.

import { useState } from 'react'

export const useCounter = ( initialState ) => {
    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter (counter + 1)
    }

    const decrement = ( ) => {
        setCounter (counter - 1)
    }

    const reset = () => {
        setCounter (initialState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
    
}
