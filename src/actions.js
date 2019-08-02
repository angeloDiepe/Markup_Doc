import {CHANGE_LOGGING_BUTTON,CHANGE_SIGNUP_LOGIN,CHANGE_LOGGEDIN, CHANGE_SEARCH_FIELD, CHANGE_NAV, CHANGE_TAB, CHANGE_ROLE, CHANGE_IS_ADDING, ADDED_CONTENT, CHANGE_ADMIN_ROUTE, CHANGE_USER} from "./constants.js";

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
export const setNav = (text) => ({
    type:CHANGE_NAV,
    payload: text
})
export const setTab = (text) => ({
    type: CHANGE_TAB,
    payload: text
})
export const setRole = (text) => ({
    type: CHANGE_ROLE,
    payload: text
})
export const handleAdding = (bool) => ({
    type: CHANGE_IS_ADDING,
    payload: bool
})
export const onAddingContent = (bool) => ({
    type: ADDED_CONTENT,
    payload: bool
})
export const setAdminRoute = (text) => ({
    type: CHANGE_ADMIN_ROUTE,
    payload: text
})
export const loadUser = (user) => ({
    type: CHANGE_USER,
    payload: user
})