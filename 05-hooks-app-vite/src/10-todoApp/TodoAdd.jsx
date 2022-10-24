import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const {description, onInputChange, onResetForm } = useForm ({
        description: "",
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault()
        if ( description.trim().length < 5) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done:false
        }

        onNewTodo( newTodo )
        onResetForm()
    }

    
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value = {description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary mt-2"
                >Agregar Todo</button>
            </form>
        </>
    )
}
