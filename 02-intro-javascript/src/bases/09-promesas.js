// Promesas

import {getHeroeById} from './bases/08-import-export'

console.log ('P R O M E S A S ...')

// const promesa = new Promise ( (resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//        const heroe = getHeroeById (4);
//        resolve(heroe) // Se envía ese argumento
//     //    reject('Héroe no hallado....') // Se envía ese argumento
//     }, 1000);  
// } )

// promesa.then ( (heroe)=> {
//     console.log ('Heroe..:', heroe)
// })
// .catch ( err => console.warn(err))


const getHeroeByIdAsync = ( id ) => {
    return  new Promise ( (resolve, reject) => {
        setTimeout(() => {
           const heroe = getHeroeById ( id );
           if (typeof heroe !== 'undefined') {
               resolve(heroe) // Se envía ese argumento
           } else {
               reject ('ESE TAL HÉROE NO EXISTE!!!"')
           }
        }, 1000);  
    } )
}

getHeroeByIdAsync(3)
    .then (heroe => console.log ('Heroe...', heroe))
    .catch ( err => console.err(err) )

// getHeroeByIdAsync(150)
//     .then (heroe => console.log ('Heroe...', heroe))
//     .catch ( err => console.error(err) )

// De esta manera también se puede imprimir el primer argumento que llega al then
// y también el mensaje de error

getHeroeByIdAsync(2)
    .then (console.log)
    .catch (console.error )


getHeroeByIdAsync(200)
    .then (console.log)
    .catch (console.error )
