// Código para React +18

import React from 'react';
import { createRoot } from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import './index.css';

const divRoot = document.querySelector('#root')
const root = createRoot(divRoot)

root.render( <GifExpertApp /> );

/**
 * Cópdigo para React -18
 * 
import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp'
import './index.css';


ReactDOM.render(

    <GifExpertApp />,

  document.getElementById('root')
);


 */



