import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between'>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>16 de noviembre / 1973</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx= {{ padding: 3}}>
                <SaveOutlined sx= {{ fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type="text"
                variant='filled'
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1}}
            />
            <TextField 
                type="text"
                variant='filled'
                fullWidth
                multiline
                placeholder="¿Qué sucedió hoy?"
                minRows={5}
            />
        </Grid>
        <ImageGallery />
    </Grid>
  )
}
