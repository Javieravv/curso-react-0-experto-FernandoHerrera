
/*
Código para React -18

import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

ReactDOM.render(
    <HeroesApp />,
    document.getElementById('root')
);
*/

// Con Reat +18
import React from 'react';
import { createRoot } from 'react-dom/client'
import { HeroesApp } from './HeroesApp';

const divRoot = document.querySelector('#root')
const root = createRoot(divRoot)

root.render( <HeroesApp /> );



