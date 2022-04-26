import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ( { id, date, title, body, url }) => {

    const nodeDate = moment(date)
    const dispatch = useDispatch ()

    const handleEntryClick = () => {
        dispatch ( activeNote ( id, {title, body, url, date}))
    }

    return (
        <div 
            className = "journal__entry pointer animate__animated animate__fadeIn animate_faster"
            onClick = { handleEntryClick }
        >
            {
                url &&
                    <div 
                        className="journal__entry-picture"
                        // style={{
                        //     backgroundSize: 'cover',
                        //     backgroundImage: `url(${url})`
                        // }}
                    >
                        <img 
                            src = { url }
                        />
                    </div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ nodeDate.format ('dddd') }</span>
                <h4>{ nodeDate.format ('Do') }</h4>
            </div>
        </div>
    )
}


