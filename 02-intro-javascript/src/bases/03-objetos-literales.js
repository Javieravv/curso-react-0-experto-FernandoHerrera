// Variables y Constantes.
// No se usará Var

console.log ('Objetos Literales')
const persona = {
    name: 'Tony',
    apellido: 'Stark',
    edad: 48,
    direccion: {
        ciudad: 'Tunja',
        zip: 150001,
        lat: 14.265,
        long: 4565
    },
    getDireccion: () => {
        console.log('direccion de ubicación')
        console.log(persona.direccion)
    }
}

// console.log (persona.name)
// console.table(persona)
// console.log(persona.getDireccion())

const persona2 = {...persona}
persona2.name = 'Xavier'
persona2.direccion.ciudad = 'New York'
console.table (persona)
console.table(persona2)
console.log(persona2.getDireccion())