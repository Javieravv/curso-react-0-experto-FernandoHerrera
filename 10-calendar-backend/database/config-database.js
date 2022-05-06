/**Configuración para la conexión a la base de datos de Mongo */
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.DB_CNN, { 
            useNewUrlParser: true
        });

        console.log ('DB Online...Excelente...')

    } catch (error) {
        console.log (error)
        throw new Error('Se presentó error a la hora de conectarse a la BD')
    }
}

module.exports = {
    dbConnection
}