/**ES una función pura de Js. Por eso su extensión no es jsx */

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            // Se envía el id del todo a borrar. También puede hacerse de otra forma.
            return initialState.filter ( todo => todo.id !== action.payload)
        case '[TODO] Toggle Todo':
            // se envía el id.
            return initialState.map ( todo => {
                if ( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            break;
    }

    return initialState

}