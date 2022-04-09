// Manejo de loginScreen

import { Link } from "react-router-dom"

export const LoginScreen = () => {
     return (
          <>
               <h3 className="auth__title">Login </h3>
               <form>
                    <input 
                         type="text"
                         placeholder='Correo Electrónico'
                         name="email"
                         autoComplete='off'
                         className="auth__input"
                    />
                    <input 
                         type="password"
                         placeholder='Clave Acceso'
                         name="password"
                         className="auth__input"
                    />

                    <button
                         type="submit"
                         class="btn btn-primary btn-block mb-5"
                         // disabled= { true }
                    >
                         Ingresar
                    </button>

                    <div className="auth__social-networks">
                         <p>Login con Redes Sociales</p>
                         <div 
                              className="google-btn"
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

