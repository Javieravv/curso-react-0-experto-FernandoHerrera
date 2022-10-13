/**Componente contador */
import PropTypes from "prop-types"
import { useState } from "react"

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState ( value )

    const handleAdd = (e) => {
        setCounter(counter + 1)
        // setCounter ( (c) => c + 1)
    }

    const handleSubs = (e) => {
        setCounter(counter - 1)
    }

    const handleReset = (e) => {
        setCounter(value)
    }

    return (
        <>
            <h1>Contador App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubs }>-1</button>
            <button onClick={ handleReset } >Reset</button>
        </>
    )
}

CounterApp.propTypes = { 
    value: PropTypes.number
}

CounterApp.defaultProps = { 
    value: 1 
}
