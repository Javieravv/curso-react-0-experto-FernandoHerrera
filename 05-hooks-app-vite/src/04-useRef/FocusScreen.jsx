import { useRef } from "react"

export const FocusScreen = () => {
    const refInput = useRef()
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
                ref={refInput}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={ () => refInput.current.select()}
            >
                Set Focus
            </button>
        </>
    )
}
