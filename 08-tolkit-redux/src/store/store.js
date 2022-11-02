import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

/**Creacion del store.  */

export const store = configureStore ({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
})

