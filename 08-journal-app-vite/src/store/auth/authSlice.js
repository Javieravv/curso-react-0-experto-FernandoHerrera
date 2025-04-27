import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'ch, 'not authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'ch, 'not authenticated', 'authenticated'
            state.uid = payload.uid,
            state.email = payload.email,
            state.displayName = payload.displayName,
            state.photoURL = payload.photoURL,
            state.errorMessage = null
        },
        logout: ( state, { payload } ) => {
            console.log ( 'PAYLOAD...', payload )
            state.status = 'not authenticated', // 'ch, 'not authenticated', 'authenticated'
            state.uid = null,
            state.email = null,
            state.displayName = null,
            state.photoURL = null,
            state.errorMessage = payload?.errorMessage
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;