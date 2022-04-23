// Barra de menús de las notas.

import { useDispatch, useSelector } from "react-redux"
import { startSaveNote } from "../../actions/notes"

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const {active:note} = useSelector ( state => state.notes)
    const handleSaveNote = () => {
      dispatch (startSaveNote (note))
    }

    return (
      <div className = "notes__appbar">
          <span>Nov 16 1973</span>
          <div>
              <button className="btn">
                  Picture
              </button>
              <button 
                className="btn"
                onClick = {handleSaveNote}
              >
                  Save
              </button>
          </div>
      </div>
    )
}
