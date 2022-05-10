// Objeto para centralizar todos los tipos de las aciones y así evitar errores

export const types = {
    uiOpenModal:    '[UI] Open Modal',
    uiCloseModal:   '[UI] Close Modal',

    eventSetActive: '[event] Sect Active',
    evetStartAddNew: '[event] Start add new',
    eventAddNew:    '[event] Add New',
    eventClearActiveEvent: '[event] Clear Active Event',
    eventUpdated: '[event] Event Uptdated',
    eventDeleted: '[event] Event Deleted',
    eventLoaded:  '[event] Event Loaded',
    eventLogout:  '[event] Event Logout',

    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start Register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',
}