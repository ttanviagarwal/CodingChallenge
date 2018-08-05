/**
 * Import statements.
 */
import {AsyncStorage} from 'react-native'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from "./ApplicationReducers";
/**
 * Export the store holding state of whole application.
 */
export const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(thunk), autoRehydrate()));

/**
 * Export the persistor.
 */
export const persistor = ( callback ) => persistStore(store, { storage: AsyncStorage, whitelist: ['SearchListingReducer']}, callback);