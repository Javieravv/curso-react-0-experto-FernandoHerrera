import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
            <input 
                type="text"
                placeholder="Coloque algún título"
                className="notes__title-input"
                autoComplete='off'
            />

            <textarea
                placeholder="Qué pasó hoy"
                className="notes__textarea"
            >
            </textarea>

            <div className="notes__img">
                <img 
                    src="https://www.surroundslandscaping.com/wp-content/uploads/01-Whang-backyard-seating-03.jpg"
                    alt="Image Landscape"
                />
            </div>
        </div>
    </div>
  )
}
