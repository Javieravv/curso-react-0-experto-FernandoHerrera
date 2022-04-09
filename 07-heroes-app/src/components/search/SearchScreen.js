// Componente de búsqueda.

import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'


export const SearchScreen = () => {
    // usamos el hookNavigate para leer los parámetros que vienen en la ruta
    const navigate = useNavigate ()
    const location = useLocation()

    // Usamos un paquete que nos permite separar todas las variables de búsqueda que viene en el url
    const { q = ''} = queryString.parse (location.search)

    // Controlamos el formulario
    const [{ searchText }, handleInputChange, reset] = useForm ( { searchText: q })

    const handleSearch = (e) => {
        e.preventDefault(); // Esto evita que se haga el submit.
        // usamos esta línea para enviar en el navegador un  parámetro de búsqueda
        navigate(`?q=${ searchText }`)
    }

    // Como al momento de modificar el cuadro de búsqueda siempre se llama la función getHeroesByName
    // ello genera problemas de rendimiento.
    // La memorizamos y solo se ejecutará cuando el query (q) cambie

    const heroesFiltered = useMemo ( () =>  getHeroesByName(q), [q])
    
    return (
        <>
            <h1>Búsqueda</h1>   
            <hr />
            <div className="row mb-3">
                <div className="col-5">
                    <h4>Buscar Héroes</h4>
                    <hr />
                    <form 
                        onSubmit={ handleSearch }
                        >
                        <input 
                        type="text"
                        placeholder="Buscar un héroe"
                        className="form-control"
                        name="searchText"
                        value= { searchText }
                        onChange= { handleInputChange }
                        />
                        <button 
                        className="btn btn-outline-primary mt-1"
                        type="submit"
                        >
                        Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        ( q === '') 
                            ? <div className = "alert alert-info">Buscar un héroe</div>
                            : ( heroesFiltered.length === 0 )
                                && <div className="alert alert-danger">
                                    No hay resultados para la búsqueda ${q}
                                </div>
                    }
                    {
                        heroesFiltered.map ( hero => (
                            <HeroCard 
                                key={hero.id}
                                { ...hero }
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
