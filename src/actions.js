import {CHANGE_LOGGING_BUTTON} from "./constants.js";

export handleLoggingButton=(bool)=>({
    type:CHANGE_LOGGING_BUTTON,
    payload:bool
})