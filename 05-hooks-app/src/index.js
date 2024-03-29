import React from 'react';
import ReactDOM from 'react-dom';
// import { MainApp } from './components/09-useContext/MainApp';

// import { TodoApp } from './components/08-hook-reducer/TodoApp';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWitchCustomHook } from './components/02-useEffect/FormWitchCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <LayoutEffect />
  </React.StrictMode>,
  document.getElementById('root')
);

// import './components/08-hook-reducer/Intro-reducer'