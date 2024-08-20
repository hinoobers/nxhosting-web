const API_URL = "https://api.example.com/api/";

function fetchAPI(endpoint, method) {
    return fetch(`${API_URL}${endpoint}`, { method })
        .then(response => response.json())
        .catch(error => console.error(error));
}