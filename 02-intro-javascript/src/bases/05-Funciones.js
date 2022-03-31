// Variables y Constantes.
// No se usará Var

console.log ('Funciones')

// No recomendado hacerlo de esta manera.

function saludar (nombre) {
    return `Hola ${nombre}`
}


const saludar1 = function (nombre) {
    return `Hola ${nombre} Versión 1`
}


const saludar2 = (nombre) => {
    return `Hola ${nombre} Versión 2`
}


const saludar3 = (nombre) => `Hola ${nombre} Versión 3`


const getUser = () => ({
    uid: 'ABC14',
    username : 'pepeCortizona'
})


console.log (saludar('Pepe Cortizona'))
console.log (saludar1('Pepe Cortizona'))
console.log (saludar2('Pepe Cortizona'))
console.log (saludar3('Pepe Cortizona'))
console.log (getUser())

// Tarea

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

console.log (getUsuarioActivo('Javo'))