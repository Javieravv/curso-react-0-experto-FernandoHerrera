/**
 * Así lucirá la forma para almacenar el states de notes.
 * 
 {
     notes: [],
     active: null, o
     active: {
         id: 'aaaa',
         titela: '',
         body: '',
         imageUrl: '',
         date: 1555656654
     }
 }
 * 
 */

import { types } from "../types/types";

 const initialState = {
     notes: [],
     active: null
 }

 export const notesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.notesUpdated:
            // solo modificamos una nota
            return {
                ...state,
                notes: state.notes.map (
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }
        case types.notesDelete: 
            // Borramos una nota y para ello usamos función filter
            return {
                ...state, 
                active: null, 
                notes: state.notes.filter ( note => note.id !== action.payload)
            }
        case types.notesLogoutCleaning:
            // purgamos el store
            return {
                ...state,
                active: null, 
                notes: []
            }
        case types.notesAddNew: {
            // añadimos la nueva nota al comienzo
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }
        }
        default:
            return state;
    }
 }