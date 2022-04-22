/**
 * Aquí incorporamos el store principal de la aplicacion.
 * Se usa el Provider que viene en react-redux.
 */

import { AppRouter } from "./routers/AppRouter"
import { Provider} from 'react-redux'
import { store } from "./store/store"

export const JournalApp = () => {
  return (
    <Provider store= { store }>
        <AppRouter />
    </Provider>
  )
}
