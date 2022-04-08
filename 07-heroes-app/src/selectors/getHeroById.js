// recuperamos información por el id del hṕeroe

import { heroes } from "../data/heroes"

export const getHeroById = ( id = '') => {
    // Retornamos un héroe 
    return heroes.find ( hero => hero.id === id )
}
