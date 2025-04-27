import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: []
        // }
    },
    reducers: {
        savingNewNote: (state, action ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            // el action es la nota a insertar 
            state.notes.push( action.payload);
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            // todo: mensaje de error
        },
        noteUpdate: ( state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map ( note => {
                if ( note.id === action.payload.id ) {
                    return action.payload
                } 
                return note
            })

            // todo: mostrar mensaje actualización
        },
        deleteNoteById: ( state, action ) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    setNotes,
    setActiveNote,
    setSaving,
    noteUpdate,
    deleteNoteById,
 } = journalSlice.actions;