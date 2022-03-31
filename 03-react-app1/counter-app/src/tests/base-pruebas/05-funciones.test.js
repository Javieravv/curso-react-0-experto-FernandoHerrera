import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe ('Pruebas en 05 - Funciones.js', () => {

    // Primera prueba
    test('getUser debe retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        // Comparamos si son objetos y tienen las mismas propiedades.
        expect(user).toEqual(userTest)
     })

     // Prueba para get usuario activo. 
     // getUsuarioActivo debe retornar un objeto.
    test('getusuarioActivo debe retornar un objeto', () => { 
        const nombre = 'Javier Armando'
         const userActive = {
            uid: 'ABC567',
            username: nombre
         }
        
         const userAct = getUsuarioActivo(nombre)
        // Comparamos si son objetos y tienen las mismas propiedades.
        expect(userAct).toEqual(userActive)
    })

})
