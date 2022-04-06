import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import './estilos-reducer.css'

// const initialState = [
//     {
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//     },
// ]


// Lo que la función init retorna será lo que se almadene en el initalState
// Buscamos lo que tenemos en el localStorage y lo traemos.
// Si no hay nada entonces será un array vacío.

const init = () => {

    return JSON.parse (localStorage.getItem ('todos')) || []

    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     },
    // ]
}

export const TodoApp = () => {

    // todos contendrá el state de la appendChild
    // dispatch ayudará a usar los reducers 
    const [ todos, dispatch ] = useReducer(todoReducer, [], init)
    

    // Usamos un efecto para grabar todo en el LocalStorage, al que le dejamos como
    // dependencia los todos. Cuando estos cambien se grabará todo en el LocalStorage del 
    // navegador. Guarda cada vez que haya cambios.

    useEffect ( () => {
        localStorage.setItem ('todos', JSON.stringify ( todos ))
    }, [ todos ])

    // Función para borrar un ToDo
    const handleDelete = ( todoId) => {
        // Creamos la acción para borrar
        const action = {
            type: 'delete',
            payload: todoId
        }
        // Ejecutamos Dispatch
        dispatch (action)
    }

    // Para controlar el cumplimiento del todo
    const handleToggle = ( todoId ) => {
        // Otra forma, sin crear actions.
        dispatch ({ 
            type: 'toggle', 
            payload: todoId, 
        })
    }

    // Función para agregar un ToDo usando el reducer
    const handleAddToDo = ( newTodo ) => {
        dispatch ({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>Hook useReducer - App Todos</h1>
            <h3>Cantidad de Todos: {todos.length} </h3>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = { todos }
                        handleToggle = { handleToggle }
                        handleDelete = { handleDelete }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddToDo = { handleAddToDo }
                    />
                </div>
            </div>
        </div>
    )
}


            