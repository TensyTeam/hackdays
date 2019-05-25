import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Timeline from './Timeline'
import Map from './Map'
import Services from './Services'
import Tabbar from './Tabbar'
import Home from './Home'
import Header from './Header'
import Team from './Team'
import './style.css'


class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			showTab: false
		}
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		if(document.location.pathname === '/') {
			this.setState({ showTab: false });
		} else {
			this.setState({ showTab: true });
		}
	}

	onChange() {
		this.setState({ showTab: true });
	}

	render() {
		return (
			<BrowserRouter>
				{this.state.showTab &&
					<Header />
				}
				<Switch>
					<Route exact path="/">
						<Home onChange={this.onChange} />
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
				<Switch>
					<Route exact path="/team">
						<Team />
					</Route>
				</Switch>
				{this.state.showTab &&
					<Tabbar />
				}
			</BrowserRouter>
		)
	}
}

export default App
