/**Pantalla donde se estará trabajando. */

import { NavBar } from "../ui/NavBar"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es' // Para el idioma en español.
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from "../../helpers/calendar-messages-es"
import { CalendarEvent } from "./CalendarEvent"
import { useEffect, useState } from "react"
import { CalendarModal } from "./CalendarModal"
import { useDispatch, useSelector } from "react-redux"
import { uiOpenModal } from "../../actions/uiActions"
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from "../../actions/eventsActions"
import { AddNewFab } from "../ui/AddNewFab"
import { DeleteEventFab } from "../ui/DeleteEventFab"

moment.locale ('es')  // para los días en español. 
const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {

    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector ( state => state.calendar)
    const { uid } = useSelector ( state => state.auth)
    const [ lastView, setLastView ] = useState( localStorage.getItem ('lastView') || 'month')

    /**Auí cargamos los eventosde la bd cuando cargamos  */
    useEffect(() => {
          dispatch ( eventStartLoading() )
    }, [dispatch])
    
    
    const onDoubleClick = (e) => {
        dispatch ( uiOpenModal() )
    }

    const onSelectEvent = (e) => {
        // Cuando damos click se activa el evento
        dispatch ( eventSetActive (e) )
    }

    const onViewChange = (e) => {
        setLastView (e)
        localStorage.setItem ('lastView', e)
    }

    const eventStyleGetter = ( event, start, end, isSelected) => {
        const style = {
            backgroundColor: (uid === event.user._id) ? '#367cf7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    const onSelectSlot = (e) => {
        // Cuando se dé click por fuera de un evento, borrar la nota activa.
        dispatch ( eventClearActiveEvent() )
    }

    return (
      <div className = "calendar-screen animate__animated animate__bounce animate__fadeIn animate__slow">
          <NavBar />
          <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              messages = { messages }
              eventPropGetter = { eventStyleGetter }
              onDoubleClickEvent = { onDoubleClick }
              onSelectEvent = { onSelectEvent }
              onView = { onViewChange }
              onSelectSlot = { onSelectSlot }
              selectable = { true }
              view = { lastView }              
              components=  { {
                  event: CalendarEvent
              } }
          />
          <CalendarModal />
          <AddNewFab />
          { 
              activeEvent && <DeleteEventFab /> 
          }
      </div>
    )
}
