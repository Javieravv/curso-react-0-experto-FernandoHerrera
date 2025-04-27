import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth/thunksAuth'
import { useMemo } from 'react'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {
    const {status, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()
    const { email, password, onInputChange } = useForm( formData )

    const isAuthenticating = useMemo( () => status === 'checking', [status])

    const onSubmit = ( event ) => {
        event.preventDefault()
        // dispatch ( checkingAuthentication ( email, password ))
        dispatch ( startLoginWithEmailPassword ({ email, password }) )
        // LÍNEA AGREGADA HOY NOV-10-2022
    }

    const onGoogleSignIn = () => {
        dispatch ( startGoogleSingIn() )
    }

    return (
        <AuthLayout title='Login'>
            <form 
                onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid container>
                <Grid item xs={12} sx={ { mt: 2}} >
                    <TextField 
                        label="Correo"
                        type="email"
                        placeholder="tucorreo@correo.com"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={12} sx={ { mt: 2}} >
                    <TextField 
                        label="Contraseña"
                        type="password"
                        placeholder="Escribe el password"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid 
                    container
                    display= { !!errorMessage ? '' : 'none' }
                    sx={ { mt:1, mb: 1 } }
                >
                    <Grid 
                        item xs={12}
                    >
                        <Alert severity='error' variant = 'filled'>{ errorMessage }</Alert>
                    </Grid>
                </Grid>
                <Grid container spacing = {2} sx={{mb: 2, mt: 1}}>
                    <Grid item xs={12} sm={6}>
                        <Button 
                            disabled={ isAuthenticating }
                            type="submit" 
                            variant='contained' 
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button 
                            disabled={ isAuthenticating }
                            variant='contained' 
                            fullWidth 
                            onClick={onGoogleSignIn}
                        >
                            <Google />
                            <Typography sx={{ml: 1}}></Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Link component= { RouterLink } color='inherit' to="/auth/register">
                        Crear una cuenta
                    </Link>
                </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
