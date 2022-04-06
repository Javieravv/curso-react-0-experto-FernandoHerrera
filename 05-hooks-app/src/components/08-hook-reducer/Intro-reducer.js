// Código para entender reducers.

const initalState = [
    {
        id: 1,
        todo: 'Comprar Leche',
        done: false
    }
]

// Creamos un reducer.
// No usar push nunca.
const todoReducer = ( state = initalState, action ) => {
    // No se pueden ejecutar funciones, ni efectos secundarios.
    if (action?.type === 'agregar') {
        return [ ...state, action.payload ]
    }
    
    // Siempre debe regresar un estado
    return state
}

const newTodo =  {
        id: 2,
        todo: 'Comprar Carne',
        done: false
    }


// Creamos una acción
// Puede ser cualquier nombre
const agregarTodo = {
    type: 'agregar',
    payload: newTodo
}

let todos = todoReducer()
todos = todoReducer( todos, agregarTodo)

console.log (todos)