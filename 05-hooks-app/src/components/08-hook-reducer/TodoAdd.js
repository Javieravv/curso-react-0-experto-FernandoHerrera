// Componente para el formulario de

import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ( { handleAddToDo }) => {
    // Aquí es donde debe estar la parte del manejo del formulario.
    // No en la aplicación principal

    // Usamos el useForm que creamos en anteriores clases para manejar este formulario.
    // const [formValues, handleInputChange] = useForm ({
    //     description: ''
    // })
    const [{ description }, handleInputChange, resetForm] = useForm ({
        description: ''
    })

    const handleSubmitTodo = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        handleAddToDo ( newTodo )
        resetForm()
    }

    return (
        <>
            <h4>Adicionar Todo</h4>
            <hr />
            <form onSubmit={ handleSubmitTodo }>
                <input 
                    type="text"
                    name="description"
                    placeholder="Agrega nueva tarea..."
                    autoComplete='off'
                    className="form-control"
                    value={ description }
                    onChange = { handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
