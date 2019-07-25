import {CHANGE_LOGGING_BUTTON,CHANGE_SIGNUP_LOGIN,CHANGE_LOGGEDIN} from "./constants.js";

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