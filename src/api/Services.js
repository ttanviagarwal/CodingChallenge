/**
 * Fetch request.
 * @param url URL 
 * @param method method 
 * @param header headers 
 * @param body body 
 */
export function request(URL, method, headers, body) {
    return fetch(
        URL
        , {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        });
}