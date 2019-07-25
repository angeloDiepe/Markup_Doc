import { CHANGE_LOGGING_BUTTON, CHANGE_SIGNUP_LOGIN, CHANGE_LOGGEDIN } from "./constants.js";

const initialState={
    loggingButton:"false",
    isRegistering:"false",
    isLoggedIn:"true"
}

export const handleLogging=(state=initialState,action={})=>{
  
    switch (action.type) {
        case CHANGE_LOGGING_BUTTON:
            return Object.assign({},state,{loggingButton:action.payload});
        case CHANGE_SIGNUP_LOGIN:
            return Object.assign({}, state, { isRegistering: action.payload });
        case CHANGE_LOGGEDIN:
            return Object.assign({}, state, { isLoggedIn: action.payload });
        default:
            return state;
    }
}