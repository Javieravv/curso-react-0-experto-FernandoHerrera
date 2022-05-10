/**Función para transformar lasfechas que están en strigns a objetos tipo Date.
 * 
 * Esto se hace siguiendo el curso. Sin embargo al correr la aplicación funciona sin
 * esta función.
 * 
 * No obstante se hace por temas de aprendizaje.
 */

import moment from 'moment'

export const prepareEvents = ( events = [] ) => {
        return events.map( e => ({
                ...e,
                end: moment ( e.end ).toDate(),
                start: moment ( e.start ).toDate()
        }))
}

