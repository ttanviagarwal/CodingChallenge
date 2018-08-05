import * as ActionTypes from '../actions/ActionTypes';

/**
 *  Search screen reducers to maintain state
 */
const INITIAL_STATE = { determineLength: [], loading: false, searchList: [], error: false, pagination: false , searchKeyword:'', page:0};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_LISTING_LOADING_START:
                return { ...state, loading: true , searchList:[], page:0};
        case ActionTypes.GET_SEARCH_LIST:
            { 
                const {photos} = action.payload;
                return { ...state, searchList: photos.photo, loading: false, pagination: false, determineLength: parseInt(photos.total) , page:photos.page}
            }
        case ActionTypes.GET_ERROR:
            return { ...state, loading: false, pagination: false }
        case ActionTypes.CLEAR_DATA:
            return { ...state, searchList: '' }
        case ActionTypes.STOP_LOADING:
            return { ...state, loading: false }
        case ActionTypes.PAGINATING_LOADING_START:
            return { ...state, pagination: true }
        case ActionTypes.GET_PAGINATED_SEARCH_LIST: {
            const {photos} = action.payload;
            { return { ...state, searchList: [...state.searchList, ...photos.photo], loading: false, pagination: false, determineLength: parseInt(photos.total), page:photos.page } }
        }
        case ActionTypes.SET_SEARCH_KEYWORD:
            return { ...state, searchKeyword:action.payload}
        default:
            return state;
    }
}