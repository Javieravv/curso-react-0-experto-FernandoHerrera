import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect ( () => {
        return () => {
            isMounted.current = false
            console.log ('Desmontando ...')
        }
    }, [])

    // Hacemos la petición dentro de un useEffect
    useEffect( () => {
        // Esta línea es necesaria.
        setState({
            data: null,
            loading: true,
            error: null}
        )

        fetch (url)
            .then ( resp => resp.json ())
            .then (data => {
                if (isMounted.current) {
                    setState ({
                        loading: false,
                        error: null,
                        data: data
                    })
                }
            })
    }, [ url ])

    // Solo regresamos el state.
    return state
}
