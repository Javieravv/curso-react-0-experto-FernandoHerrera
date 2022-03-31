import '@testing-library/jest-dom'
import { getSaludo } from "../../base-pruebas/02-template-string"

describe ('Pruebas en 02-template strings', () => { 
    
    test('Prueba en el método getSaludo - Debe retornar Hola + nombre', () => { 
        const nombre = 'Javier Armando'
        const saludo = getSaludo( nombre)
        expect (saludo).toBe('Hola ' + nombre)
     })

     // getSaludo debe retornar Hola Extraterestre si no hay argumento para el nombre
     test('getSaludo debe retornar Hola Extraterestre si no hay argumento para el nombre', () => { 
         const saludo = getSaludo()
         expect (saludo).toBe ('Hola Extraterrestre')
      })

})

