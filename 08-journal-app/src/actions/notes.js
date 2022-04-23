/**
 * Acciones para las notas.
 * 
 * Aquí podemos trabajar con otra manera de obtener los datos del store, que es enviando
 * otro parámetro al dispatch, que será una función que traiga el store o el estado.
 * 
 * Como se va a almacenar en Firestore una colección por cada usuario y en ella colocar
 * documentos y subcolecciones, entonces se traerá el uid del usuario para iniciar con ese dato una
 * nueva colección o actualizar una ya existente.
 * 
 * react-journal
 * 
 */
import Swal from 'sweetalert2'
import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"

export const startNewNote = () => {
    return async ( dispatch, getState) => {
        
        const { uid } = getState().auth
        const newNote = {
            title: 'Primera Nota de las notas', 
            body: 'Esta es la primera nota de este usuario', 
            date: new Date().getTime()
        }
        // línea para grabar en Firestore
        const doc = await db.collection(`${ uid }/journal/notes`).add ( newNote )
        dispatch ( activeNote ( doc.id, newNote))
    }
}

export const activeNote = ( id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

// con esta acción recuperamos las notas del usuario
export const startLoadingNotes = (uid) => {
    return async ( dispatch ) => {
        const notes = await loadNotes (uid)
        dispatch ( setNotes ( notes ) )
    }
}


// acción para las notas. Para
export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

// Acción para actualizar en la base de datos.
export const startSaveNote = ( note ) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        if ( !note.url ) {
            delete note.url
        }

        // borramos el id de la nota porque esa no se actualiza.
        const noteToFirestore = {...note}
        delete noteToFirestore.id
        await db.doc(`${ uid }/journal/notes/${note.id}`).update ( noteToFirestore)
        dispatch (  refreshNote ( note.id, noteToFirestore))
        Swal.fire ('Saved!', note.title, 'success')
    }
}

// acción para actualizar solo la nota que cambie en el store
// En este punto no viene el id de la nota en note.
export const refreshNote = (id, note) => ({
      type: types.notesUpdated,
      payload: {
          id,
          note: {
              id,
              ...note
          }
      }
})


