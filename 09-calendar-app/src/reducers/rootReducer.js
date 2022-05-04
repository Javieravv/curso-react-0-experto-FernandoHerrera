/**Será la combinación de todos los reducrs. */
import { combineReducers } from 'redux'
import { calendarReducer } from './calendarReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers ({
    ui: uiReducer,
    calendar: calendarReducer,
})