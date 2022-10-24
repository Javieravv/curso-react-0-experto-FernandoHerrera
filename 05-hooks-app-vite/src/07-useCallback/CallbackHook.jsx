import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(15)

    const incrementFather = useCallback(
      ( valueIncrement ) => {
        setCounter ( (value) => value  + valueIncrement )
      },
      [],
    )

    return (
        <>
            <h1>Use Callback Hook </h1>
            <hr />
            <h2>Contador: { counter } </h2>
            <ShowIncrement increment = { incrementFather }/>
        </>
    )
}
