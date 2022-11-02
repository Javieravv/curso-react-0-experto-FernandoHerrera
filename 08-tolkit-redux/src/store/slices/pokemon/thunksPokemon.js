/**thunks para pokemons */
import { pokemonApi } from "../../../api/pokemonApi"
import { setDecrementPages, setIncrementPages, setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons =  ( page = 0) => {
    const limit = 50
    return async ( dispatch, getState ) => {
        dispatch ( startLoadingPokemons())
        const { data } = await pokemonApi.get (`pokemon?limit=${ limit }&offset=${ (page * limit) }`)
        dispatch ( setPokemons ( { pokemons: data.results }) )
    }
}
