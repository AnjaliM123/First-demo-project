export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response && response.data;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}