import { getHeroeByIdAsync} from '../../base-pruebas/09-promesas'
import heroes from '../data/heroes'

describe ('Pruebas con promesas', () => {
    // Primer test
    test('getHeroeByIdAsync debe retornar un Héroe async', ( done ) => { 
        const id = 3
        getHeroeByIdAsync(id)
            .then (heroe => {
                expect ( heroe ).toBe ( heroes[2] )
                done ()
            })
     })

     // SEgundo text
    test('debe retornar un error si el héroe no existe.', ( done ) => { 
         const id = 100
         getHeroeByIdAsync(id)
            .catch ( error => {
                expect ( error ).toBe ('No se pudo encontrar el héroe')
                done()
            })
      })
})


