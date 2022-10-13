/**Un primer ejercicio básico, que no sigue las mejores prácticas. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp';
import { Reloj } from './Reloj';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp 
            value = { 10 }
        />
        <hr />
        <Reloj />
    </React.StrictMode>
)

