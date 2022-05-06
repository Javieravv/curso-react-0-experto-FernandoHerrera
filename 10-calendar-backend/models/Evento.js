/**Creacioón del modelo para los usuarios */
const { Schema, model  } = require('mongoose')

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, // Es una referencia a otra colección
        ref: 'Usuario',  // El destino de la referencia.
        required: true
    }
})

// Esto es para quitar el guión bajo del id _id y quitar el __v cuando se graba el registro
EventoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model ('Evento', EventoSchema )