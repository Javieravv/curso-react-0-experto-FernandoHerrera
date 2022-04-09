// import { NothingSelected } from "./NothingSelected"
import { NoteScreen } from "../nodes/NoteScreen"
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {
     return (
          <div className = "journal__main-content">
               <Sidebar />
               <main >
                    {/* <NothingSelected /> */}
                    <NoteScreen />
               </main>
          </div>
     )
}
