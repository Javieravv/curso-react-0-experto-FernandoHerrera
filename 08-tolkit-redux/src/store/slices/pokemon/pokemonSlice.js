import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state ) => {
            // solo actualizamos ese isloading
            state.isLoading = true
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false
            state.pokemons = action.payload.pokemons
        },
        setDecrementPages: (state) => {
            state.page = ( state.page > 1) ? state.page - 1 : 1
            
        },
        setIncrementPages: (state) => {
            state.page = state.page + 1
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, setDecrementPages, setIncrementPages } = pokemonSlice.actions;