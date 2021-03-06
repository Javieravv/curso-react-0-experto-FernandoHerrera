// Tarjeta para cada héroe

import { Link } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages"

export const HeroCard = ({ 
    id, 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `/assets/img/heroes/${id}.jpg`

    return (
        <div className = "col animate__animated animate__lightSpeedInRight">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img 
                            // src={imagePath} 
                            src={ heroImages (`./${id}.jpg`) } 
                            className="card-img"
                            alt={superhero}
                        />
                    </div>
                    <div className="col-8">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text"> { alter_ego } </p>
                        {
                            ( alter_ego !== characters) && 
                            <p className="text-muted"> {characters} </p>
                        }
                        <p className="card-text">
                            <small className="text-muted" > {first_appearance} </small>
                        </p>
                        <Link 
                            to={`/hero/${id}`}
                        >
                            Mas Información
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    }
