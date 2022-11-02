import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
// import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp'

/**Configuramos aquí redux y el store que se va a emplear en la aplicación. */

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PokemonApp />
        </Provider>
    </React.StrictMode>
)
