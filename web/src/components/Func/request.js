import axios from 'axios'
import { auth } from './methods';


const link = 'https://api.disruptive-technologies.com/v2/projects/bjfb7m3httut79sc9hsg/devices?device_types=temperature'


export function listSensors(activeTab) {
	// b8bf896d3cd846d7903ef8796f4acbc6
	return new Promise(function(resolve, reject) {
		auth().then((token) => {
			const headers = {
				'accept': 'application/json',
				'Authorization': 'Bearer  ' + token,
			}
		
			axios.get(link, {headers: headers}).then((res) => resolve(res))
		})
	})
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
