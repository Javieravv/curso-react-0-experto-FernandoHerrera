// Código para React +18

import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import { JournalApp } from './JournalApp'
import './styles/styles.scss'

const divRoot = document.querySelector('#root')
const root = createRoot (divRoot)

root.render ( <JournalApp /> )

/**
 * Código para React -18
 * 
import React from 'react'
import ReactDOM from 'react-dom'
import { JournalApp } from './JournalApp'
import './styles/styles.scss'

ReactDOM.render (
    <JournalApp />, 
    document.getElementById('root')
)
 */