// muestra la lista de los héroes de DC

import { useMemo } from "react"
import { HeroCard } from "./HeroCard"
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"

export const HeroList = ( { publisher }) => {
    // usamos useMemo para morizar la función getHeroesByPublisher y su DEPENDENCIA
    // será publisher.

    const heroes = useMemo ( () => getHeroesByPublisher (publisher), [ publisher ] )  

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map ( hero => (
                    <HeroCard 
                        key={hero.id} 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
