import PropTypes from "prop-types"

const nombre = 'Javier Armando Vargas Vega!!!!..'
const numeros = [1,2,3,4,5,6,7,8,9]
const objeto = {
    nombre: 'Javier ',
    edad: 43,
    ciudad: 'Tunja'
}

const suma = (n1 = 20, n2 = 20) => {
    return n1 + n2
}

export const FirstApp = ( { title, subTitle } ) => {

    return (
            <>
                <hr />
                <h1>{ title }</h1>
                <h3>{ subTitle }</h3>
                <h2>{ nombre }</h2>
                <h2>{ numeros }</h2>
                <code>{ JSON.stringify (objeto) }</code>
                <h3>El valor de la suma de 25 y 15 es { suma (25, 15) }</h3>
            </>
    )
}

//  configuración PropTypes 
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

// propiedades por defecto.
FirstApp.defaultProps = {
    title: "NO NAY TÍTULO",
    subTitle: "No hay subtítulo"
}
