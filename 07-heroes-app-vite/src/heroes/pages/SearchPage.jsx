import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers"
import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    // extraemos lo que viene del search
    const { q = ''} = queryString.parse (location.search)
    const heroes = getHeroesByName ( q )

    const showSearch = (q.trim().length === 0)
    const showError  = (q.trim().length !== 0) && (heroes.length === 0)

    const { searchText, handleInputChange, resetForm } = useForm ({
      searchText: q
    })

    const onSerchSubmit = (e) => {
      e.preventDefault()
      // if ( searchText.trim().length === 0 ) return
      navigate(`?q=${searchText.toLowerCase().trim()}`)
      // resetForm()
    }

    return (
        <div className="row mt-3">
              <div className="col-5">
                  <h4>Buscar</h4>
                  <hr />
                  <form onSubmit = { onSerchSubmit }>
                      <input 
                        type="text"
                        placeholder="Buscar un héroe"
                        className="form-control"
                        name="searchText"
                        value = {searchText}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                      <button
                        className="btn btn-danger mt-1"
                      >
                        Search
                      </button>
                  </form>

              </div>


              <div className="col-7">
                <h4>Results</h4>
                <hr />
                <div 
                  className="alert alert-primary"
                  style = { { display: showSearch ? '': 'none'}}
                >
                   Buscar un héroe
                </div>
                <div
                   className="alert alert-danger"
                  style = { { display: showError ? '': 'none'}}
                >
                   No hay héroe o héroes en la búsqueda <b> { q }</b>
                </div>
                {
                  heroes.map ( hero => (
                    <HeroCard
                      key = { hero.id}
                      { ...hero }
                    />
                  ))
                }
              </div>
          </div>
    )
}
