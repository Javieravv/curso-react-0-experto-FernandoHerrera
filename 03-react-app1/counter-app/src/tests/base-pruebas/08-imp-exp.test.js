import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"
import heroes from "../data/heroes"


describe ('Pruebas en funciones de héroes', () => {

    test('Debe de retornar un héroe por id', () => { 
        const id = 55
        const heroe = getHeroeById(id)
        console.log (heroe)

        const heroeData = heroes.find(h => h.id === id)
        expect ( heroe ).toEqual( heroeData )
     })

     // Segunda prueba
     test('Debe de retornar undefined si el héroe no existe', () => { 
        const id = 55
        const heroe = getHeroeById(id)
        expect ( heroe ).toBe ( undefined )
     })

     // Prueba para evaluar héroes de DC y de Márvel.
     test('Debe retornar arreglo con héroes de DC', () => { 
         const owner = 'DC'
         const heroesDc = getHeroesByOwner(owner) 
         console.log (heroesDc)

         const heroesDcData = heroes.filter( (h) => h.owner === owner )
        expect ( heroesDc ).toEqual( heroesDcData )
      })

      // Prueba para los héroes de márvel. Debe retornar solo 2 items
      test('Debe retornar un arreglo con dos elementos', () => { 
        const owner = 'Marvel'
        const heroesMarvel = getHeroesByOwner(owner) 
        expect ( heroesMarvel.length ).toBe( 2 )
     })

})