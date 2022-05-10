/**Controladores para los eventos.
 * 
 */
const { response } = require ('express')
const Evento = require('../models/Evento')

 const getEventos = async (req, res = response) => {
    const eventos = await Evento.find()
            .populate ('user','name')
    return res.json ({
        ok: true,
        msg: 'Mensajes traídos',
        eventos
    })
 }

/**Creamos un nuevo evento. */
 const crearEvento = async (req, res = response) => {
       // verificar que tenga el evento.
    // Aquí hacemos validaciones importantes.
    // El usuario viene en el Token.

    const evento = new Evento ( req.body )

    try {
         evento.user = req.uid  // Para traer el id del usuario.
         const eventoGuardado = await evento.save()
         res.json ({
            ok: true,
            msg: "Evento guardado satisfactoriamente",
            evento: eventoGuardado
         })

    } catch (error) {
       console.log (error)
       res.status(500).json ({
          ok: false,
          msg: "No se pudo grabar el evento. Hable con el administrador"
       })
    }

 }

// Actualizar en Bd un evento
// Tomamos el valor del id que viene por el url
const actualizarEvento = async (req, res = response) => {
   const eventoId = req.params.id
   const uid = req.uid
   try {

      const evento = await Evento.findById( eventoId )
      
      if ( !evento ) {
         return res.status(404).json ({
            ok: false,
            msg: 'Evento no existe por ese Id',
         })      
      }

      // verificamos si el autor del evento es quien quiere modificarlo
      if ( evento.user.toString() !== uid ) { 
         return res.status(401).json ({
            ok: false,
            msg: 'No tiene privilegio de editar este evento.',
         })   
      }

      // Aquí ya se puede editar.
      const nuevoEvento = {
         ...req.body,
         user: uid
      }

      const eventoActualizado = await Evento.findByIdAndUpdate ( eventoId, nuevoEvento, { new: true} )

      return res.json ({
         ok: true,
         msg: 'Evento Actualizado',
         evento: eventoActualizado
     })      

   } catch (error) {
      console.log (error)
      return res.status(500).json ({
         ok: false,
         msg: 'Error al actualizar el evento',
     })   
   }
}

/**Códiogo para eliminar un evento.
 * Lo podrá borrar quien lo creó. Será similar al update.
 * 
 */
const eliminarEvento = async (req, res = response) => {
   const eventoId = req.params.id
   const uid = req.uid
   try {
      const evento = await Evento.findById( eventoId )
      if ( !evento ) {
         return res.status(404).json ({
            ok: false,
            msg: 'Evento no existe por ese Id',
         })      
      }

      // verificamos si el autor del evento es quien quiere eliminarlo
      if ( evento.user.toString() !== uid ) { 
         return res.status(401).json ({
            ok: false,
            msg: 'No tiene privilegio de eliminar este evento.',
         })   
      }

      // Aquí ya se puede eliminar.
      await Evento.findByIdAndDelete ( eventoId )

      return res.json ({
         ok: true,
         msg: 'EVento Eliminado con éxito'
     })      

   } catch (error) {
      console.log (error)
      return res.status(500).json ({
         ok: false,
         msg: 'Error al intentar eliminar el evento',
     })   
   }

}

 module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
 }


 