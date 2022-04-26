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
import { fileUpload } from '../helpers/fileUpload'
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"

// Creamos una nueva nota.
export const startNewNote = () => {
    return async ( dispatch, getState) => {
        
        const { uid } = getState().auth
        const newNote = {
            title: '', 
            body: '', 
            date: new Date().getTime()
        }
        // línea para grabar en Firestore
        const doc = await db.collection(`${ uid }/journal/notes`).add ( newNote )
        dispatch ( activeNote ( doc.id, newNote))
        dispatch ( addNewNote ( doc.id, newNote))

    }
}

export const activeNote = ( id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

// Cuando se crea la nueva nota debe poder modificarse
export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
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

// acción para subir la imagen al backend en la number
export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {
        const {  active:activeNote} = getState().notes
        // Mostramos mensaje de uplading...
        Swal.fire ({
            title: 'Uploading...', 
            text: 'Please Wait...',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading ()
            }
        })
        const fileUrl = await fileUpload ( file )
        activeNote.url = fileUrl
        dispatch ( startSaveNote ( activeNote ))
        Swal.close ()
    }
}

// Acción para borrar una nota de una personas determinada.
export const startDeleting = ( id ) => {
    return async ( dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${id}`).delete()
        // Borramos la nota de la memoria y del store, pues ya se borró de la bd
        dispatch ( deleteNote ( id ))
    }
}

// acción que modifica el store luego de borrada la nota
// Es una acción síncrona
export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
})

// acción para el logout.
// El propósito es purgar el store para que se borren los datos que estaban en memoria.
export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})