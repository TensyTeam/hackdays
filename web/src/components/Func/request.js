import axios from 'axios'


const link = 'https://api.disruptive-technologies.com/v2/projects/bjfb7m3httut79sc9hsg/devices/bgutlokc00010i5633u0'


export function getSensors(activeTab) {
	const headers = {
		'accept': 'application/json',
		'Authorization': 'Bearer 4d7ca02419394674a7049568eecbbab6',
	}

	return axios.get(link, {headers: headers})
}

// export function serverResponse(urlRequest) {
//     let request = new XMLHttpRequest();
//     request.open('GET', urlRequest, false);
//     request.send();
//     if (request.status !== 200) {
//         console.log(request.status + ': ' + request.statusText);
//     } else {
//         let response = request.responseText;
//         response = JSON.parse(response);
//         return response;
//     }
// }

