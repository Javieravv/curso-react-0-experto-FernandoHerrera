import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {
    const inputRef = useRef ()

    const handleClick = (e) => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Screen - Hook useRef</h1>
            <hr />
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre...'
            >
            </input>
        <button 
            className="btn btn-primary mt-5"
            onClick={handleClick}
        >
                Focus
        </button>
        </div>
    )
}
