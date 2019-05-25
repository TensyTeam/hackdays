import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Timeline from './Timeline'
import Map from './Map'
import Services from './Services'
import Tabbar from './Tabbar'
import Home from './Home'
import Header from './Header'
import './style.css'


class App extends Component {
	state = {
		leftMenu: true,
	}

	render() {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
				<Switch>
					<Route exact path="/services">
						<Services />
					</Route>
				</Switch>
				<Switch>
					<Route path="/map">
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
