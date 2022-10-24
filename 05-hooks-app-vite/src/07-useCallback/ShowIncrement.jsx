import { memo } from 'react'

export const ShowIncrement = memo(( { increment }) => {
    console.log('ME VOLVÍ A GENERAR, NO JODAS')
    return (
        <>
            <button
                    className="btn btn-primary"
                    onClick={ () => {
                        increment(5)
                    } 
                }
            >
            Incrementar Contador</button>
        </>
    )
})
