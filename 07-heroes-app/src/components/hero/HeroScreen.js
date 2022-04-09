// Componente para el heroes

import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
import { heroImages } from '../../helpers/heroImages'

/// Otra forma para manejar las imágenes si se movieron a la carpeta src y que react
// pueda controlarlas.

export const HeroScreen = () => {
    // Con este hook recuperamos los parámetrosque tra la url.
    // Serán tantos como se hayan programado y se pueden desestructurar.
    const { heroeId } = useParams ()
    
    // Usamos useMemo para memorizar la función getHeroeById, para que solo se ejecute cuando 
    // el héroe id cambie.

    const hero = useMemo ( () => getHeroById ( heroeId ), [ heroeId ])
    
    const navigate = useNavigate ()

    const handleReturn = () => {
        navigate (-1)
    }

    if (!hero) {
      return <Navigate to='/' />
    }

    const {
      id,
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters
    } = hero

    return (
      <div className = "row mt-5">
        <div className="col-4">
            <img 
              // src={imagePath} 
              src = {heroImages (`./${id}.jpg`)}
              alt={superhero}
              className="img-thumbnail animate__animated animate__fadeInLeft"
            />
        </div>
        <div className="col-8 animate__animated animate__lightSpeedInRight">
          <h3>{superhero}</h3>
          <ul className="list-group">
              <li className="list-group-item">
                <b>Alter Ego: </b> {alter_ego}
              </li>
              <li className="list-group-item">
                <b>Publisher: </b> {publisher}
              </li>
              <li className="list-group-item">
                <b>First Appearance: </b> {first_appearance}
              </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>
          <button
            className="btn btn-outline-info"
            onClick= {handleReturn}
          >
              Regresar
          </button>
        </div>
          
      </div>
    )
}
