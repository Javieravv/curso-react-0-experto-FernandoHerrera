// Validamos si algo es una fecha.
const moment = require('moment');

// const isDate = ( value, { req, location, path } ) => {
const isDate = ( value ) => {
    if ( !value ) {
        return false
    }
    // validamos si el value es una fecha
    
    const fecha = moment (value)
    if ( fecha.isValid() ) {
        return true
    } else {
        return false
    }
}

module.exports = { 
    isDate
}