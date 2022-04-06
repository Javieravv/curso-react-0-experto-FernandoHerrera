// Aquí va el reducer.

export const todoReducer = ( state = [], action) => {

    switch (action.type) {
        case 'add':
            // Agregamos nuevo todo|
            return [ ...state, action.payload];

        case 'delete' :
            // Filtramos todos los todos distintos al id que venga en el payload.
            // Elñ filter regresa un nuevo arreglo
            return state.filter ( todo => todo.id !== action.payload)
        case 'toggle-viejo' : 
            // Filtramos cuando se ha completado el ToDo.
            return  state.map ( todo => {
                if ( todo.id === action.payload) {
                    return {
                        ...todo, 
                        done: !todo.done
                    } } 
                    else {
                        return todo
                }
            })
        case 'toggle' : 
            // Filtramos cuando se ha completado el ToDo.
            // Forma con menos líneas.
            return state.map ( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo

            )
        default:
            return state
    }
    return state
}
