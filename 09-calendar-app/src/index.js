import React from 'react'
import { createRoot } from 'react-dom/client'
import { CalendarApp } from './CalendarApp';
import './styles.css'

const divRoot = document.querySelector('#root')
const root = createRoot (divRoot)

root.render( <CalendarApp /> );
