import React, { memo } from 'react'

// Para evitar que el componente vuelva a renderizarse si el estado
// no ha cambiado, se usa la función memo.

export const SmallComponent =  memo ( ( {value} ) => {
    console.log ('Disparamos small component... :( ...')    

    return (
        <small> { value } </small>
    )
} )
