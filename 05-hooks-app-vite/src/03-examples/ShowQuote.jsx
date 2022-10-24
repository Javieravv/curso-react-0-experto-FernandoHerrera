import { useLayoutEffect, useRef, useState } from "react"

export const ShowQuote = ( {quote, author}) => {

    const [boxsize, setBoxsize] = useState({ width: 0, height: 0})

    const pRef = useRef()
    useLayoutEffect(() => {
      const { width, height } = pRef.current.getBoundingClientRect()
      setBoxsize ( {
        width,
        height
      })
      
    }, [quote])

    return (
      <>
          <blockquote 
            className="blockquote text-end"
            style={{display: 'flex'}}
          >
              <p ref={pRef} className="mb-1"> { quote } </p>
              <footer className="blockquote-footer mt-1">{ author }</footer>
          </blockquote>
          <code>{ JSON.stringify (boxsize) }</code>
          <br />
          <br />
      </>
    )
}
