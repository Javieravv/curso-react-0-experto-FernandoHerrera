/**Hook personalizado de contador. 
 * Siempre retornan algo, de diferente tipos.
*/

import { useState } from "react"

export const useCounter = ( initialValue  = 20) => {
  
    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = ( value = 1) => {
        setCounter ( counter + value)
    }

    const decrementCounter = ( value = 1) => {
        setCounter ( counter - value )
    }

    const resetCounter = () => {
        setCounter ( initialValue )
    }
    
    
    // Siempre debe retornar algo. Un objeto, un arreglo, funciones, etc.
    return { 
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
}
