
import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10,12, 14, 16, 18, 20];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback (
        ( num ) => {
            setValor ( ( valor ) => valor + num)
        },
        []
    )

    return (
        <div>
            <h1>Padre</h1>
            <h2> Total: <small>{ valor }</small> </h2>
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
