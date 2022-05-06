/**Archivo principal. 
 * Rutas de usuarios / Auth
 * host + /api/auth
*/
// Configuración de express

const express = require('express')
const { dbConnection } = require('./database/config-database')
const cors = require('cors')
require('dotenv').config()

// console.log ( process.env )

// Crea servidor de express
const app = express();

// Conexión Bd
dbConnection ()

// CORS.
app.use ( cors() )

// Directorio público
// EL use es un middleware
app.use( express.static('public') )

// Lectura y parseo del body
app.use ( express.json() )


// Rutas servidor
app.use('/api/auth', require ('./routes/auth')) 
app.use('/api/events', require ('./routes/events-routes')) 
// TODO: CRUD de eventos.

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log (`Servidor corriendo en puerto ${ 4000 }...`);
})

