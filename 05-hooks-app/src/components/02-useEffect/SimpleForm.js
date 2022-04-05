import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState

    // Cuando colocamos en el segundo parámetro un arreglo vacío,
    // el useEffect solo se ejecunta cuando el componente se carga
    useEffect ( () => {
     //    console.log ('Cargamos la aplicacion....')
    }, [])

    // Cuando cambie el email escuchamos algo
    useEffect ( () => {
     //    console.log ('Cambiamos el email....')
    }, [ email ])

    // Esta función recibe un objeto event. Desestructuramos de él target
    const handleInputChange = ( { target }) => {
        setFormState ( {
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1>UseEffect - Forma simple</h1>
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

            { name === "Javier" && <Message/>}
        </>
    )
}
