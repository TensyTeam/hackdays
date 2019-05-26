import api from './api'


// Авторизация

export function auth(that, data={}) {
	return new Promise(function(resolve, reject) {
		const handlerSuccess = (other, res) => {
			resolve(res['token'])
		}

		api(that, 'auth', data, handlerSuccess)
	})
}

// Вызвать