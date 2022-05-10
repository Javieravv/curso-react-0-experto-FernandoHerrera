/**Archivo principal. 
 * Rutas de usuarios / Auth
 * host + /api/auth
*/
// Configuración de express

const express = require('express')
const { dbConnection } = require('./database/config-database')
const cors = require('cors') 
require('dotenv').config()  // manejo de las variables de entorno de node

// Crea servidor de express
const app = express();

// Conexión Bd
dbConnection ()

// CORS.
app.use ( cors() )

// Directorio público. Ahí puede colocarse la aplicación del Frontend.
app.use( express.static('public') )

// Lectura y parseo del body
app.use ( express.json() )


// Rutas servidor
app.use('/api/auth', require ('./routes/auth')) 
app.use('/api/events', require ('./routes/events-routes')) 
// TODO: CRUD de eventos.

// Escuchar peticiones. Levantar el servidor.
// Se emplea una variable de entorno, porque el servidor puede correr nuestra aplicación en un puerto diferente.

app.listen( process.env.PORT, () => {
    console.log (`Servidor corriendo en puerto ${ 4000 }...`);
})

