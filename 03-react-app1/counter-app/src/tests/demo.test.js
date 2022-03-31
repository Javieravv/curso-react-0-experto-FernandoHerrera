
// Descriptor de las pruebas
describe('Pruebas en el archivo demo.test.js', () => { console

    // Primera prueba
    test('Deben de ser iguales los string', () => { 
        const isActive = true
        // ESto no sería muy lógico. Pero sirve para iniciar.
        // if ( isActive ) {
        //     throw new Error('No está activo')
        // }
    
        // 1. Inicializacion.
        const mensaje = 'Hola Mundo'
    
        // 2. Estímulo
        const mensaje1 = `Hola Mundo`
    
        // 3. Observar comportamiento
        expect( mensaje ).toBe (mensaje1);
    
    
     })
})



