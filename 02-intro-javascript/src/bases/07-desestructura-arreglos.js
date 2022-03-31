// Variables y Constantes.
// No se usará Var

console.log ('Desestructuración de Objetos')

const personajes = ['Goku', 'Vegete', 'Trunks']
console.table (personajes)
const [p1 ] = personajes
const [, p2 ] = personajes
const [, , p3 ] = personajes

console.log (p1, p2, p3)

const retornaArreglo = () => {
    return ['ABC', 456]
}

const [ letras, numeros ] = retornaArreglo()

console.log (letras, numeros)

// Tarea

const _useStateEjem = ( nombre ) => {
    return [
        nombre,
        () => {
            return `Hola mundo. Mi nombre es ${nombre}`
        }
    ]
}

const [ nombre, setNombre ] = _useStateEjem ( 'Javier Armando' )
console.log (nombre, ' == ', setNombre())
