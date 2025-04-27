// Los thunks se usan cuando hay tareas asíncronas.

import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDb } from "../../firebase/configFirebase"
import { loadNotes } from "../../helpers"
import { addNewEmptyNote, noteUpdate, savingNewNote, setActiveNote, setNotes, setSaving } from "./journalSlice"

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        // Se necesita uid del usuario 
        dispatch( savingNewNote () );
        const { uid } = getState().auth
        console.log ('Start new Note...')

        const newNote = {
            title: 'Nota 1',
            body: 'Esta es la nota 1',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection ( FirebaseDb, `${uid}/journal/notes` ) );
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        // INSERTAR nota en el estado y activarla.
        dispatch ( addNewEmptyNote(newNote));
        dispatch ( setActiveNote (newNote) );
    }
}

/**Cargar las notas del usuario 
 * Se cargan las dle uid del usuario que se autentica. Como ya está en el store
 * no se debería pedir.
*/

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        console.log ('ID USUARIO: ', uid);
        const notes = await ( loadNotes (uid ) );
        dispatch ( setNotes( notes ) );
    }
}

/**Grabamos la nota activa. */

export const startSaveNote = () => {
    return async ( dispatch, getState ) => {
        dispatch ( setSaving())
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        const noteToFirestore = { ...note }
        delete noteToFirestore.id;
        console.log ( noteToFirestore )
        const docRef = doc ( FirebaseDb, `${uid}/journal/notes/${note.id}` );
        await setDoc(  docRef, noteToFirestore, { merge: true } )
        dispatch ( noteUpdate ( note  ) )
    }
}