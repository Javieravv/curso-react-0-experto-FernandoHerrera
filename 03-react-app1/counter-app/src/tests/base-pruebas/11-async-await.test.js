
// Pruebas con async-await

import { getImagen } from "../../base-pruebas/11-async-await"

describe ('Pruebas con Async-Await', () => {

    test('Debe retornar el url de la imagen', async () => { 
        const url = await getImagen()
        console.log (url)
        expect ( url.includes ('https://') ).toBe(true)
    })
})

