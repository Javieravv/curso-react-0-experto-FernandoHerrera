// import { NothingSelected } from "./NothingSelected"
import { useSelector } from "react-redux"
import { NoteScreen } from "../nodes/NoteScreen"
import { NothingSelected } from "./NothingSelected"
import { Sidebar } from "./Sidebar"

export const JournalScreen = () => {

     const { active } = useSelector ( state => state.notes)
     return (
          <div 
               className = "journal__main-content animate__animated animate__fadeIn animate_faster"
          >
               <Sidebar />
               <main >
                    {
                         (  active ) 
                              ? (<NoteScreen  />)
                              : (<NothingSelected />  )
                    }
               </main>
          </div>
     )
}
