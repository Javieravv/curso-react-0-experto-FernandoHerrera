import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-useMemo/Memorize'
// import { CallbackHook } from './07-useCallback/CallbackHook'
// import { MemoHook } from './06-useMemo/MemoHook'
// import { HooksApp } from './HooksApp'
// import { Padre } from './08-tarea-memo/Padre'
import './index.css'
import { TodoApp } from './10-todoApp/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
)

