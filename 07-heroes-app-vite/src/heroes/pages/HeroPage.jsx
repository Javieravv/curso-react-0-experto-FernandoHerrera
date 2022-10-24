import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById"

export const HeroPage = () => {
    const { heroId } = useParams()
    const navigate = useNavigate()

    const hero = useMemo( () => getHeroeById ( heroId ), [heroId]) 
    
    const onNavigateBack = () => {
      navigate (-1)
    }

    if ( !hero ) {
      return <Navigate to="/marvel"/>
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img 
                  src={`/assets/heroes/${ heroId }.jpg`}
                  alt={ hero.superhero}
                  className="img-thumbnail"
                />
            </div>
            <div className="col-8">
              <h2 className="">{ hero.superhero}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
                <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
                <li className="list-group-item"><b>First Appereance:</b>{hero.first_appearance}</li>
              </ul>
              <h4 className="mt-3"> Characters </h4>
              <p> { hero.characters }</p>
              <button
                className="btn btn-danger"
                onClick= { onNavigateBack}
              >Regresar</button>
            </div>
        </div>
      )
  }