import React, {Component} from 'react'

// import 'bootstrap/dist/css/bootstrap.css'

import Timeline from './Timeline'


class App extends Component {
	state = {
		leftMenu: true,
	}

	render() {
		return (
			<div className="has-background-white-bis" style={ {'min-height': '100vh'} }>
				<Timeline />
			</div>
		)
	}
}

export default App