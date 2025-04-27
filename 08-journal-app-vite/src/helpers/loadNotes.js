// Traemos las notas del usuario

import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDb } from "../firebase/configFirebase"

export const loadNotes = async ( uid = '') => {
    if ( !uid ) throw new Error('El ID del usuario es obligatorio')

    const collectionRef = collection(FirebaseDb, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    const notes = []
    docs.forEach(doc => {
        notes.push( {id: doc.id, ...doc.data()} )
    })
    return notes;
}