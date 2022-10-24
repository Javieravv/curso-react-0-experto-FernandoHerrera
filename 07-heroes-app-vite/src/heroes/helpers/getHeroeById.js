import { heroes } from "../data/heroes"

export const getHeroeById = ( heroId ) => {
    return heroes.find ( hero => hero.id === heroId )
}
