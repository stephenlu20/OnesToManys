const API_BASE_URL = "http://localhost:8080/activity";

function fetchActivities() {
    return fetch(`${API_BASE_URL}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        });
}
