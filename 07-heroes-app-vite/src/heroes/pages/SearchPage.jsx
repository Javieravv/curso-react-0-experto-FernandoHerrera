import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    // extraemos lo que viene del search
    const { q = ''} = queryString.parse (location.search)

    const { searchText, handleInputChange, resetForm } = useForm ({
      searchText: ''
    })

    const onSerchSubmit = (e) => {
      e.preventDefault()
      if ( searchText.trim().length === 0 ) return

      navigate(`?q=${searchText.toLowerCase().trim()}`)



      resetForm()
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
                <div className="alert alert-primary">
                   Buscar un héroe
                </div>
                <div className="alert alert-danger">
                   No hay héroe o héroes en la búsqueda <b> { q }</b>
                </div>
              </div>
          </div>
    )
}
