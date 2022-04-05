import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const { x:coordX, y:coordY } = coords

    // const handleChangeCoords = (coordX, coordY) => {
    //     setCoords( {
    //         ...coords,
    //         x: coordX,
    //         y: coordY
    //     })
    // }


    useEffect(() => {
            const mouseMove = (e) => {
                const coords = { x: e.x, y:e.y}
                // handleChangeCoords (coords.x, coords.y)
                setCoords ( coords )
            }
            // Se muestracuando se monta el componente
            console.log ('Montado...')
            window.addEventListener('mousemove', mouseMove )
        return () => {
            // Se ejecuta cuando se desmonta el componente
            console.log ('Componente desmontado...')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    
    return (
        <div>
            <h2>Eres grandioso!!!</h2>
            <h3>Coordenadas {coordX}, {coordY} </h3>
        </div>
    )
}
