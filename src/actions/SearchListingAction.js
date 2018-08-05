import DispatchResponseToReducers from './ActionDispatcher';
import * as ActionTypes from './ActionTypes';
import {fetchSearchListing} from '../api/SearchService';

/**
 * Clear search data.
 */
export const clearData = () => {
    return {
        type: ActionTypes.CLEAR_DATA
    };
};

/**
 * Stop loading.
 */
export const stopLoading = () => {
    return {
        type: ActionTypes.STOP_LOADING
    };
};

/**
 * Pagination loading.
 */
export const paginatingLoadingStart = () => {
    return { type: ActionTypes.PAGINATING_LOADING_START }
}

/**
 * Set search keyword.
 * @param {*} keyword 
 */
export const setSearchKeyword = (keyword) => {
    return { type: ActionTypes.SET_SEARCH_KEYWORD, payload: keyword }
}

/**
 * Call Search API after user presses search icon or done from keyword.
 * @param searchParams 
 * @param page 
 */
export const callSearchApi = (searchParams, page) => {
    return DispatchResponseToReducers(fetchSearchListing.bind(this,searchParams, page),
        ActionTypes.GET_SEARCH_LIST,
        ActionTypes.GET_ERROR,
        ActionTypes.SEARCH_LISTING_LOADING_START);
};

/**
 * Call Search API for pagination.
 * @param searchParams 
 * @param page 
 */
export const callPaginatedSearchApi = (searchParams, page) =>{
    return DispatchResponseToReducers(fetchSearchListing.bind(this,searchParams, page),
        ActionTypes.GET_PAGINATED_SEARCH_LIST,
        ActionTypes.GET_ERROR,
        ActionTypes.PAGINATING_LOADING_START);
}
