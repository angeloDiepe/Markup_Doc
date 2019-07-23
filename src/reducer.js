import { CHANGE_LOGGING_BUTTON } from "./constants.js";

const initialState={
    loggingButton:"false"
}

export const handleLogging=(state=initialState,action={})=>{
    switch (action.type) {
        case CHANGE_LOGGING_BUTTON:
            return Object({},state,{loggingButton:action.payload});
    
        default:
            return state;
    }
}