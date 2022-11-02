import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDecrementPages, setIncrementPages } from "./store/slices/pokemon/pokemonSlice"
import { getPokemons } from "./store/slices/pokemon/thunksPokemon"

export const PokemonApp = () => {
    const dispatch = useDispatch ()
    const { page, pokemons, isLoading } = useSelector ( state => state.pokemons )

    useEffect (() => {
        dispatch ( getPokemons()  )
        dispatch ( setIncrementPages()  )
    }, [])

    return (
        <>
            <h1>Pokemon App  con Redux Tolkit</h1>
            <hr />
            { (isLoading) && <h2>Cargando...</h2> }
            <div className = "divpokemons">
                { 
                    pokemons.map ( pokemon => (
                        <article className = "articlePokemon" key={pokemon.name}> <h2>{pokemon.name}</h2> </article>
                    ))
                }
            </div>
            <div className="botones">
                <button
                    disabled={ isLoading }
                    onClick={ () => {
                        dispatch ( setIncrementPages ())
                        dispatch ( getPokemons(page) )
                    }}
                >
                    Next
                </button>
                <button
                    disabled={!(isLoading || (page > 1))}
                    onClick={ () => {
                        dispatch ( setDecrementPages() )
                        dispatch ( getPokemons (page - 2))
                    }}
                >
                    Prev
                </button>
            </div>
        </>
    )
}
