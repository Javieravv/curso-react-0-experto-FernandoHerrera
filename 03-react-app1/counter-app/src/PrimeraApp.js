// Primer componente.
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ( { saludo, subtitulo} ) => {
    // const saludo = 'Hola Mundo. Hola'

    return (
        <>
            <h1>{saludo}</h1>
            <h3>{subtitulo}</h3>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Estamos aprendiendo cosas nuevas...'
}

export default PrimeraApp
