// Hook personalizado para un estado

import { useState } from "react"


export const useForm = ( initialState = {}) => {

    const [formValues, setFormValues] = useState( initialState)

    // Cuando cambien los valores del formulario|
    const handleInputChange = ( {target }) => {
        setFormValues( {
            ...formValues,
            [ target.name ] : target.value
        })
    }

    // Lo regresamos como un areglo. También se podría como un objeto.
    return [
        formValues,
        handleInputChange
    ]
}
