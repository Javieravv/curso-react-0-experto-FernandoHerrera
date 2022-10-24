
import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, ShowQuote } from "../03-examples"

export const Layout = () => {
    const { counter, incrementCounter, decrementCounter, resetCounter } = useCounter (1)
    // const { data, isLoading, hasError } = useFetch ('https://www.breakingbadapi.com/api/quotes/1')

    const { data, isLoading, hasError } = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]
    console.log ( data )
    
    return (
        <>
            <h1>The Breaking Bad (Layaut)</h1>
            <hr />
            {
                isLoading 
                    ? <LoadingQuote />
                    : <ShowQuote author={author} quote={quote}/>
            }
            <button 
                className="btn btn-primary ms-3"
                onClick={ () => incrementCounter(1) }
                disabled={ isLoading }
            >Next Quote</button>
            <button 
                className="btn btn-primary ms-3"
                onClick={ () => decrementCounter(1) }
                disabled={ isLoading }
            >Previous Quote</button>
            <button 
                className="btn btn-primary ms-3"
                onClick={ () => resetCounter(1) }
                disabled={ isLoading }
            >Reset Quote</button>
            <button 
                className="btn btn-primary ms-3"
                disabled={ isLoading }
            >Random Quote</button>
        </>
    )
}
