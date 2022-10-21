import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch ('https://www.breakingbadapi.com/api/quotes/1')
    const { author, quote } = !!data && data[0]
    return (
        <>
            <h1>The Breaking Bad</h1>
            <hr />
            {
                (isLoading) ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1"> { quote } </p>
                        <footer className="blockquote-footer mt-1">{ author }</footer>
                    </blockquote>
                )
            }
            <button className="btn btn-primary">Next Quote</button>
            <button className="btn btn-primary ms-3">Random Quote</button>
        </>
    )
}
