/**Recibe todo el evento del calendario. 
 * Usado para mostrar un evento del calendario.
*/

import React from 'react'

export const CalendarEvent = ( { event } ) => {
    const { title, user, notes } = event
    const { name } = user
    return (
        <div>
            <span> { title }</span>
            <strong> - { name }</strong>
            <span>- { notes }</span>
        </div>
    )
}

