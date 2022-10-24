/**Hook personalizado para manejar todos que se almacenan y sacan
 * del localstorage
 * 
 */

import { useEffect, useReducer } from "react"
import { todoReducer } from "../TodoApp"

// Si no hay nada y es nulo, entonces regrese un arreglo vacío.
const init = () => {
    return JSON.parse( localStorage.getItem ('todos') || [])
}

export const useTodos = ( initialState = []) => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

    // cada vez que cambien los todos se guardan en el localsto
    useEffect(() => {
          localStorage.setItem ('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (  todo  ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo (action)
    }

    const hadleDeleteTodo = ( id ) => {
        dispatchTodo ({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodo ({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const todosCount = todos.length
    const pendingTodosCount = todos.filter ( todo => !todo.done).length

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        hadleDeleteTodo,
        handleToggleTodo,
    }
}