// Here, we have the reducer itself with all the action cases.
import { USER_ACTION_TYPES } from "./user.types";

// It is always important to set the initial state.
const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}


export const userReducer = (state=INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch(type){
        // For each possible action, we have a case. 
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            // If there is no active cases called (there is no interaction), by default
            // It will return the same state.
            return state;
            // Returning state, it will tell the code that nothing changed.
    }
}; 

