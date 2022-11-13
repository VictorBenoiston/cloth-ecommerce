import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

//Here, we have the possible actions of the reducer.

export const setCurrentUser = (user) => 
        createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
