export function sendCoordinates(lat, long) {
    return "https://playground24.ru/hackdays-api/send_coordinates.php?lat=" + lat + '&long=' + long;
}

export function loadCoordinates() {
    return "https://playground24.ru/hackdays-api/load_coordinates.php?status=" + true;
}

export function serverResponse(urlRequest) {
    let request = new XMLHttpRequest();
    request.open('GET', urlRequest, false);
    request.send();
    if (request.status !== 200) {
        console.log(request.status + ': ' + request.statusText);
    } else {
        let response = request.responseText;
        response = JSON.parse(response);
        return response;
    }
}
