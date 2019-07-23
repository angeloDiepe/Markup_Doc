import {CHANGE_LOGGING_BUTTON} from "./constants.js";

export const handleLoggingButton=(bool)=>({
    type:CHANGE_LOGGING_BUTTON,
    payload:bool
})