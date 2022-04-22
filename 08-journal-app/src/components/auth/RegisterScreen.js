import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import validator from 'validator'
import { useDispatch, useSelector } from "react-redux"
import { types } from "../../types/types"
import { removeErrorAction, setErrorAction } from "../../actions/ui"
import { startRegisterWithEmailPasswordName } from "../../actions/auth"


export const RegisterScreen = () => {

    const dispatch = useDispatch ()
    // obtenomos datos del Stores
    // const state = useSelector( state => state.ui)
    const {  msgError } = useSelector( state => state.ui)

    const [ formValues, handleInputChange, reset] = useForm ({ 
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        // Aquí se hace un dispatch al store, previo a la validación del formulario

        if ( isFormValid () ) {
            // Si se validó correctamente entonces se creará nuevo usuario en firebase
            // o en el backend que se tenga: Mongo, MySql, archivo plano, etc.
            console.log ('Formulario correcto')
            dispatch ( startRegisterWithEmailPasswordName (email, password, name) )

        }
    }

    // Para validar el formulrio. cambiará conforme a cada app y su lógica.
    // Para verificar si el email es válido puede echarse mano de una librería
    // llamada 
    const isFormValid = () => {
        if (  name.trim().length === 0) {
            dispatch ( setErrorAction ('Name is required') )
            return false
        } else if ( !validator.isEmail (email)) {
            dispatch ( setErrorAction ('Email es not valid') )
            return false
        } else if (password !== password2 || password.length < 5) {
            dispatch ( setErrorAction ('Password is not valid. Password should be at least 6 characters and match each.') )
            return false
        }

        dispatch ( removeErrorAction() )

        return true
    }

    return (
    <>
            <h3 className="auth__title">Register </h3>
            <form onSubmit = { handleRegister }>
                <input 
                    type="text"
                    placeholder='Name'
                    name="name"
                    autoComplete='off'
                    className="auth__input"
                    onChange = { handleInputChange }
                    value = { name }
                />
                <input 
                    type="text"
                    placeholder='Correo Electrónico'
                    name="email"
                    autoComplete='off'
                    className="auth__input"
                    onChange = { handleInputChange }
                    value = { email }
                />
                <input 
                    type="password"
                    placeholder='Password'
                    name="password"
                    className="auth__input"
                    onChange = { handleInputChange }
                    value = { password }
                />
                <input 
                    type="password"
                    placeholder='Confirme password'
                    name="password2"
                    className="auth__input"
                    onChange = { handleInputChange }
                    value = { password2 }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
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
                
                {
                    msgError && 
                    (
                        <div className="auth__alert-error mt-1">
                            { msgError }
                        </div>
                    )
            }
            </form>
    </>
    )
}
