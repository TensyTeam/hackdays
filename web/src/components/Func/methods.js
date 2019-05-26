import api from './api'


// Авторизация

export function auth(that) {
	return new Promise(function(resolve, reject) {
		const handlerSuccess = (other, res) => {
			resolve(res['token'])
		}

		api(that, 'auth', {}, handlerSuccess)
	})
}

// Вызвать

export function call(that) {
	const handlerSuccess = (other, res) => {
		console.log('!')
	}

	api(that, 'call', {}, handlerSuccess)
}

// Проверить

export function check(that) {
	return new Promise(function(resolve, reject) {
		const handlerSuccess = (other, res) => {
			// other.setState({notif: true})
			console.log(res)
			resolve(res['result'])
		}

		api(that, 'check', {}, handlerSuccess)
	})
}