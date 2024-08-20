const API_URL = "http://server2.hinoob.xyz:5080/status";

function fetchAPI(endpoint, method) {
    console.log("test");
    return fetch(`${API_URL}${endpoint}`, { method })
        .then(response => response.json())
        .catch(error => console.error(error));
}