// Componente para mostrar lista de ToDos

import React from 'react'

export const TodoListItem = ( { todo, i,handleToggle, handleDelete } ) => {
    return (
        <li
            key={todo.id}
            className = "list-group-item"
        >
            <p 
                className={`text-center ${ todo.done && 'complete'}`}
                onClick = { () => handleToggle (todo.id) }
            >
                {i + 1}.- { todo.desc }
            </p>
            <div>
                <button
                    className='btn btn-danger mr-2'
                    onClick={ () => handleDelete (todo.id) }
                >
                    Borrar
                </button>
                <button
                    className='btn btn-dark'
                >
                    Modificar
                </button>
            </div>
        </li>
    )
}
