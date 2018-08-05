import * as Services from './Services';
import { BaseUrl, API_KEY} from './Configs';
import UrlBuilder from './UrlBuilder';

/**
 * Search Listing API.
 * @param searchQuery 
 * @param page 
 */
export function fetchSearchListing(searchQuery, page) {
    let URL = getUrl(searchQuery, page);    
    return Services.request(URL, 'GET');
}

/**
 * Create search url.
 * @param searchQuery 
 * @param page 
 */
function getUrl(searchQuery, page) {
    let urlBuilder = new UrlBuilder(BaseUrl())
        .addQueryParam("api_key",API_KEY)
        .addQueryParam("method", "flickr.photos.search")
        .addQueryParam("format","json")
        .addQueryParam("nojsoncallback","1")
        .addQueryParam("safe_search","1")
        .addQueryParam("text",searchQuery)
        .addQueryParam("page",page);

    return urlBuilder.build();
}