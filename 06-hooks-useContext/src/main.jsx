import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import { TodoApp } from './TodoApp/TodoApp'
import './index.css'
import { MainApp } from './useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >    
        <React.StrictMode>
            <MainApp />
        </React.StrictMode>
    </BrowserRouter>    
)

