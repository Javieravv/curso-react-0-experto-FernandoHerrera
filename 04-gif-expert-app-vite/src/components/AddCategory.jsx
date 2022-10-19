/** Input para agregar  */

import { useState } from "react"

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(
            target.value
        )
    }

    const onSubmitGif = (e) => {
        e.preventDefault()
        if ( inputValue.trim().length < 3 ) return
        // setCategories (categories => [ inputValue, ...categories ])
        onNewCategory (inputValue.trim())
        setInputValue ('')
    }

    return (
        <div className="divAddCategory">
            <h1>Gift Expert App</h1>
            <form onSubmit={ onSubmitGif }>
                <input 
                    type = "text"
                    placeholder="Buscar Gifs"
                    value = { inputValue }
                    onChange = { onInputChange }
                />
            </form>
        </div>
    )
}
