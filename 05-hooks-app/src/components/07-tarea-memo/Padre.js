import React, { useCallback } from 'react'
import { useState } from 'react';
import { Hijo } from './Hijo'
import '../02-useEffect/effect.css'

export const Padre = () => {

    const numeros = [2,4,6,8,10,12,14,16,18,20,22,24,26,28];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    const incrementar = useCallback(
        (num) => {
          setValor ( valor => num + valor )
      }, [setValor]
    )
    
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
