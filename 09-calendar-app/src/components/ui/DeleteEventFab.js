/**Botón flotante para borrar  */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eventDeleted } from '../../actions/eventsActions'

export const DeleteEventFab = () => {
    const dispatch = useDispatch ()

    const handleDeleteEvent = () => {
        dispatch ( eventDeleted () )
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
