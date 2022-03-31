// Variables y Constantes.
// No se usará Var

// import heroes, { owners } from './data/heroes'
import heroes from '../data/heroes'
// import { heroes } from './data/heroes'

// console.log ('Import, export y funciones con arreglos.')

// console.log (heroes)

// const getHeroeById = (id) => {
//     return heroes.find( heroe => heroe.id === id)
// }

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id)


export const getHeroesByOwner = ( owner ) => {
    return heroes.filter ( (heroe) => heroe.owner === owner)    
}

// console.log (getHeroeById (5))
// console.log (getHeroesByOwner('DC'))
// console.log (getHeroesByOwner('Marvel'))
