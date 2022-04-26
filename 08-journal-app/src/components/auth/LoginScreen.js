// Manejo de loginScreen

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth"
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {

     // Con esto es posible hacer dispatch desde cualquier lugar de la aplicación en donde se esté.
     const dispatch = useDispatch()
     
     // Recuperamos loading
     const {  loading } = useSelector( state => state.ui)

     const [ formValues, handleInputChange, reset] = useForm ({ 
          email: '',
          password: ''
     })

     const { email, password } = formValues

     const handleLogin = (e) => {
          e.preventDefault()
          // Aquí se hace un dispatch al store.
          dispatch ( startLoginEmailPassword (email, password) )
     }

     const handleGoogleLogin = () => {
          dispatch( startGoogleLogin() )
     }

     return (
          <>
               <h3 className="auth__title">Login </h3>
               <form
                    onSubmit={ handleLogin }
                    className="animate__animated animate__fadeIn animate_faster"
               >
                    <input 
                         type="text"
                         placeholder='Correo Electrónico'
                         name="email"
                         autoComplete='off'
                         className="auth__input"
                         onChange={handleInputChange}
                         value={email}
                    />
                    <input 
                         type="password"
                         placeholder='Clave Acceso'
                         name="password"
                         className="auth__input"
                         onChange={handleInputChange}
                         value={password}
                    />

                    <button
                         type="submit"
                         className="btn btn-primary btn-block mb-5"
                         disabled = { loading }
                    >
                         Ingresar
                    </button>

                    <div className="auth__social-networks">
                         <p>Login con Redes Sociales</p>
                         <div 
                              className="google-btn"
                              onClick = { handleGoogleLogin }
                         >
                              <div className="google-icon-wrapper">
                                   <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                              </div>
                              <p className="btn-text">
                                   <b>Sign in with google</b>
                              </p>
                         </div>
                    </div>

                    <Link 
                         to="/auth/register"
                         className="link"
                    >
                         Create New Account
                    </Link>

               </form>
          </>
     )
}

