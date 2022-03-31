import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe ('Pruebas para el archivo 07-Desestructuración', () =>{

    // Primera prueba
    test('Debe retornar un string y un número', () => { 
        // const arr = retornaArreglo()
        // expect( arr ).toEqual( ['ABC', 123] )
        
        const [letras, numeros] = retornaArreglo()
        console.log (typeof numeros)
        expect( letras ).toBe( 'ABC')
        expect( numeros ).toBe( 123 )
     })
})

