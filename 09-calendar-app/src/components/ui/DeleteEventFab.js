/**Botón flotante para borrar  */

import React from 'react'
import { useDispatch } from 'react-redux'
import { eventStartDelete } from '../../actions/eventsActions'

export const DeleteEventFab = () => {
    const dispatch = useDispatch ()

    const handleDeleteEvent = () => {
        dispatch ( eventStartDelete () )
    }
    return (
        <button
            className = "btn btn-danger btn-danger"
            onClick = { handleDeleteEvent } 
        >
            <i className="fas fa-trash"></i>
            <span> Borrar Evento</span>
        </button>
    )
}
