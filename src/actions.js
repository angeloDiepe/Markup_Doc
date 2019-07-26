import {CHANGE_LOGGING_BUTTON,CHANGE_SIGNUP_LOGIN,CHANGE_LOGGEDIN, CHANGE_SEARCH_FIELD} from "./constants.js";

export const handleLoggingButton=(bool)=>({
    type:CHANGE_LOGGING_BUTTON,
    payload:bool
})

export const handleSignupLoginButton = (bool) => ({
    type: CHANGE_SIGNUP_LOGIN,
    payload: bool
})

export const setLoggedIn = (bool) => ({
    type: CHANGE_LOGGEDIN,
    payload: bool
})
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})