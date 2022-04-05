import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './effect.css'

export const FormWitchCustomHook = () => {

    const [formValues, handleInputChange] = useForm ({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues

    useEffect ( () => {
        console.log ('El email ha cambiado....')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log (formValues)
    }

    return (
        <form onSubmit= { handleSubmit }>
            <h1>Form With Custom Hook - Formulario con Hooks</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingrese su nombre"
                    autoComplete='off'
                    value = { name }
                    onChange={handleInputChange}
                />
            </div>
            <div  className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email: miemail@gmail.colm"
                    autoComplete='off'
                    value = { email }
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    autoComplete='off'
                    value = { password }
                    onChange={handleInputChange}
                />
            </div>
            <button
                type="submit"
                className = "btn btn-primary"
            >
                Guardar
            </button>
        </form>
    )
}
