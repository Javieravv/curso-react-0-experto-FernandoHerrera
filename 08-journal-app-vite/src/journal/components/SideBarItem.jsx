/**Componente para mostrar las notas. */

import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ( { id, body, title, date, imageUrls = [] } ) => {
    const dispatch = useDispatch ()
    const newTitle = useMemo ( () => {
       return title.length > 17
        ? title.substring (0,17) + '...' 
        : title
    }, [title])

    const onClickNote = () => {
        console.log ('DIMOS CLICK EN LA NOTA: ', id)
        dispatch ( setActiveNote({
            id, 
            body, 
            title, 
            date,
            imageUrls
        }) )
    }

    return (
        <ListItem 
            disablePadding 
        >
            <ListItemButton onClick={ onClickNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle }/>
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

