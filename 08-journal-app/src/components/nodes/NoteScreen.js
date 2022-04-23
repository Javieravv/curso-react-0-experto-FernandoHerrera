import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { activeNote } from "../../actions/notes"
import { useForm } from "../../hooks/useForm"
import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {

    // Interesa mostrar la nota activa.
    // Se mostrará en el formulario la información de la nota, para ahí poder hacerle cambios.

    const dispatch = useDispatch()
    const { active:note } = useSelector (state => state.notes)
    const [ formValues, handleInputChange, reset ] = useForm(note)
    const { id, body, title } = formValues

    //Para solucionar el problema del no cambio de la nota activa, no obstatne que sí cambia en el store

    const activeId = useRef ( note.id )

    useEffect(() => {
      if ( note.id !== activeId.current) {
        reset ( note )
        activeId.current = note.id
      }
    }, [ note, reset])
    
    // Actualizar el store cada vez que se hagan cambios en el formulario.

    useEffect ( () => {
        dispatch ( activeNote (id, { ...formValues }) )
    }, [ formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Coloque algún título"
                    className="notes__title-input"
                    autoComplete='off'
                    name = "title"
                    value = { title }
                    onChange = { handleInputChange }
                />

                <textarea
                    placeholder="Qué pasó hoy"
                    className="notes__textarea"
                    name = "body"
                    value = { body }
                    onChange = { handleInputChange }
                >
                </textarea>

                {
                    // (url) && 
                    // (
                    //     <div className="notes__img">
                    //         <img 
                    //             src="https://www.surroundslandscaping.com/wp-content/uploads/01-Whang-backyard-seating-03.jpg"
                    //             alt="Image Landscape"
                    //         />
                    //     </div>
                    // )
                }
            </div>
        </div>
    )
}
