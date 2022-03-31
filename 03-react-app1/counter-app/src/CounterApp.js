// Primer componente.
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ( { value } ) => {
    const [ counter, setCounter ] = useState( value ) // Retorna arreglo con dos valores
    console.log (counter)
    
    const handleAdd = (e) => {
        setCounter ( counter + 1 ) // también puede recibir una función.
    }
    const handleSubs = (e) => {
        setCounter ( counter - 1 )
    }
    const handleRes = (e) => {
        setCounter ( 0 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd } >Incrementar</button>
            <button onClick={ handleSubs }>Decrementar</button>
            <button onClick={ handleRes }>Resetear</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
