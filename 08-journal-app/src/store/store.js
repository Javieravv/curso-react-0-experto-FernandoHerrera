import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { authReducer } from '../reducers/authReducer'
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';

/**Creamos el store de la aplicación  
 * 
 * el combineReducers ayuda para combinar varios reducers y enviarlos al createStore, pues
 * este solo recibe un reducer.
*/

// Esta línea facilita tener las extensiones del DevTools y poder aplicar middlewares

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers ({
    auth: authReducer, // un primer reducer
    ui: uiReducer, // un segundo reducer.,
    notes: notesReducer // un tercer reducer
})

export const store = createStore (
    reducers,
    composeEnhancers ( applyMiddleware (thunk))
)
