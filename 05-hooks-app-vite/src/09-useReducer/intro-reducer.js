/**Concepto de reducer
 * 
 * initialState o estado inicial.
 */

const initialState =[{
    id: 1,
    todo: 'Recolectar manzanas',
    done: false
}]

// Creación del reducer. Lleva esos dos argumentos.
// La accion es cómo quiero que el estado cambie
const todoReducer = ( state = initialState, action = {}) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload]
            break;
        default:
            break;
    }
    return state // siempre debe regresar un estado.
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar pan',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction)

console.log (todos)
