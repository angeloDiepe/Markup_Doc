import { CHANGE_LOGGING_BUTTON, CHANGE_SIGNUP_LOGIN, CHANGE_LOGGEDIN, CHANGE_SEARCH_FIELD, CHANGE_NAV, CHANGE_TAB, CHANGE_ROLE, CHANGE_IS_ADDING, ADDED_CONTENT, CHANGE_ADMIN_ROUTE, CHANGE_USER} from "./constants.js";

const initialState={
    loggingButton:"false",
    isRegistering:"false",
    isLoggedIn:"false",
    navigation:"home",
    searchField:"",
    tab:"web",
    role:"normal",
    isAdding:false,
    isAddingContent:"false",
    routeAdmin:"",
    loadedUser:{}
}

export const handleLogging=(state=initialState,action={})=>{
    console.log(state);
    switch (action.type) {
        case CHANGE_LOGGING_BUTTON:
            return Object.assign({},state,{loggingButton:action.payload});
        case CHANGE_SIGNUP_LOGIN:
            return Object.assign({}, state, { isRegistering: action.payload });
        case CHANGE_LOGGEDIN:
            if(action.payload==="false"){
            return Object.assign({}, 
                state, 
                { 
                    isLoggedIn: action.payload,
                    loggingButton:"false",
                    navigation:"home",
                    searchField:"",
                    isRegistering:"false",
                    tab: "web",
                    role: "normal",
                    isAdding:false,
                    isAddingContent:"false",
                    routeAdmin:"",
                    loadedUser:{}
                });
            }else{
                return Object.assign({},state,{isLoggedIn:action.payload})
            }
        case CHANGE_NAV:
            return Object.assign({}, state, { navigation: action.payload });
        case CHANGE_TAB:
            return Object.assign({}, state, { tab: action.payload });
        case CHANGE_ROLE:
            return Object.assign({}, state, { role: action.payload });
        case CHANGE_IS_ADDING:
            return Object.assign({}, state, { isAdding: !state.isAdding });
        case ADDED_CONTENT:
            return Object.assign({}, state, { isAddingContent: action.payload });
        case CHANGE_ADMIN_ROUTE:
            return Object.assign({}, state, { routeAdmin: action.payload });
        case CHANGE_USER:
            return Object.assign({}, state, { loadedUser: action.payload });
         default:
            return state;
    }
}
export const handleSearch = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            console.log(state)
            return Object.assign({}, state, { searchField: action.payload }); 
            default:
                return state;
    }
}
