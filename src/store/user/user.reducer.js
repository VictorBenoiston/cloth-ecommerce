// Here, we have the reducer itself with all the action cases.
import { USER_ACTION_TYPES } from "./user.types";

// It is always important to set the initial state.
const INITIAL_STATE = {
    currentUser: null
}


export const userReducer = (state=INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch(type){
        // For each possible action, we have a case. 
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            // If there is no active cases called (there is no interaction), by default
            // It will return the same state.
            return state;
            // Returning state, it will tell the code that nothing changed.
    }
}; 

