import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components/Footer'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp />
        <Footer />
    </React.StrictMode>
)
