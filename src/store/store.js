// The store, is where oyu create the main redux with all the reducers.
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



// The logger works as a logs container. How was the state before and after despatched.

import { rootReducer } from "./root-reducer";

const persistConfig = {
    //Where we want to persist (start). In this case, the root level.
    key: 'root',
    storage,  // storage: storage
    // What we dont want to be stored in the local storage.
    blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// In this case, we will only log the logger, while we are in development mode.
// When we are in production mode, the stirng should be 'production'
const middleWares = [process.env.NODE_ENV != 'production' && logger].filter(
    Boolean
);

const composeEnhancer =
    (process.env != 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        // If it fails, it will run the default compose
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);


export const persistor = persistStore(store);
