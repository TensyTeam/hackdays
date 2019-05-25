import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect, browserHistory } from "react-router-dom"

import Timeline from './Timeline'
import Map from './Map'
import Services from './Services'
import Tabbar from './Tabbar'
import Header from './Header'
import './style.css'


class App extends Component {
	state = {
		leftMenu: true,
	}

	render() {
		return (
			<BrowserRouter>
				{/* <div className="has-background-white-bis" style={ {minHeight: '100vh'} }>
					<Timeline />
				</div> */}
				<Header />
				<Switch>
					<Route exact path="/">
						<Timeline />
					</Route>
				</Switch>
				<Switch>
					<Route exact path="/services">
						<Services />
					</Route>
				</Switch>
				<Switch>
					<Route exact path="/map">
						<Map />
					</Route>
				</Switch>
				<Switch>
					<Route exact path="/timeline">
						<Timeline />
					</Route>
				</Switch>
				<Tabbar />
			</BrowserRouter>
		)
	}
}

export default App
