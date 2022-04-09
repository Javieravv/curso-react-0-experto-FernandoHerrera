import { Link } from "react-router-dom"

export const RegisterScreen = () => {
  return (
    <>
          <h3 className="auth__title">Register </h3>
          <form>
              <input 
                    type="text"
                    placeholder='Name'
                    name="name"
                    autoComplete='off'
                    className="auth__input"
              />
              <input 
                    type="text"
                    placeholder='Correo Electrónico'
                    name="email"
                    autoComplete='off'
                    className="auth__input"
              />
              <input 
                    type="password"
                    placeholder='Password'
                    name="password"
                    className="auth__input"
              />
              <input 
                    type="password"
                    placeholder='Confirme password'
                    name="password2"
                    className="auth__input"
              />

              <button
                    type="submit"
                    class="btn btn-primary btn-block mb-5"
                    // disabled= { true }
              >
                    Registrarse
              </button>

              <Link 
                    to="/auth/login"
                    className="link mt-1"
              >
                    ¿Already Registerd?
              </Link>

          </form>
    </>
  )
}
