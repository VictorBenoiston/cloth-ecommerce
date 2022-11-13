// Here, we have the root-reducer. the place where all the reducers are incorporated 
// into one.

import { combineReducers } from "redux";
import { userReducer } from './user/user.reducer'
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
});
