// Variables y Constantes.
// No se usará Var

console.log ('Arreglos')

const arreglo = new Array ()
console.log (arreglo)
const arreglo1 = [1,2,3,4]

let arreglo2 = arreglo1

// arreglo2.push (5);
arreglo2 = [...arreglo2, 5, 6]

console.log (arreglo1)
console.log (arreglo2)

const arreglo3 = arreglo2.map( (number) => {
    return number * 2
} )

console.log (arreglo3)

