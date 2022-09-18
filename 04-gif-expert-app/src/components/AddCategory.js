import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // El setCategories tiene el estado anterior y por eso se puede referenciar aquí.
        if (inputValue.trim().length > 2 ) {
            setCategories ( cats => [inputValue, ...cats ])
            setInputValue ( '' )
        }

    }

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <h2>Agregar Categoría</h2>
            <input 
                type="text"
                value={inputValue}
                placeholder='Seleccione una categoría'
                onChange = {handleInputChange}
            />
        </form>
    )
}


// Configuramos propTypes para el componente.

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
