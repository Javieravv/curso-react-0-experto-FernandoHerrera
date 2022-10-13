/**Componente reloj */

import { useState } from "react"

const reloj = () => {
    let date = new Date()
    let horaActual = {
        hora: date.getHours(),
        minuto: date.getMinutes(),
        segundo: date.getSeconds()
    }
    const { hora, minuto, segundo } = horaActual    
    const now = `${hora} : ${minuto} : ${segundo}`
    return now
}

export const Reloj = () => {
    const [ hora, setHora ] = useState ( reloj )

    setTimeout(() => {
        setHora ( reloj )
    }, 1000);

    return (
        <>
            <span> { hora } </span>
        </>
    )
}
