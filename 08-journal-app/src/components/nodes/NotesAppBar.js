// Barra de menús de las notas.

import { useDispatch, useSelector } from "react-redux"
import { startSaveNote, startUploading } from "../../actions/notes"

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const {active:note} = useSelector ( state => state.notes)

    const handleSaveNote = () => {
      dispatch (startSaveNote (note))
    }

    const handlePictureUpload = () => {
      document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if ( file ) {
            dispatch ( startUploading( file ) )
        }
    }


    return (
      <div className = "notes__appbar">
          <span>Nov 16 1973</span>
          <input 
                id = "fileSelector"
                type="file"
                style = { { display: 'none'}}
                onChange = { handleFileChange }
                name="file"
          />
          <div>
              <button 
                className="btn"
                onClick = { handlePictureUpload }
              >
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
