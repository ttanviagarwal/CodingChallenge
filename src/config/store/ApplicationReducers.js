/**
 * Import Reducer methods form individual screens.
 */
import { combineReducers } from 'redux'
import SearchListingReducer from '../../reducers/SearchListingReducer';

/**
 * Create and export an object holding state of all reducers. This object implies the application state.
 */
export default combineReducers({
    SearchListingReducer
});
