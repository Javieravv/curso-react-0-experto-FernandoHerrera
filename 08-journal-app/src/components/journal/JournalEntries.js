import { useSelector } from "react-redux"
import { JournalEntry } from "./JournalEntry"


export const JournalEntries = () => {

    // Recuperamos del store las notas y las mostramos.
    const { notes } = useSelector ( state => state.notes)


    return (
        <div className = "journal__entries">
            {
                notes.map ( note => (
                    <JournalEntry 
                        key= {note.id} 
                        { ...note }
                    />
                ))
            }
        </div>
    )
}
