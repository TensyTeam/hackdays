import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import $ from 'jquery'

import Timeline from './Timeline'
import Map from './Map'
import Services from './Services'
import Tabbar from './Tabbar'
import Home from './Home'
import Header from './Header'
import Team from './Team'
import './style.css'
import { check } from './Func/methods'


class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			showTab: false,
			notif: false,
		}
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		if (document.location.pathname === '/') {
			this.setState({ showTab: false });
		} else {
			this.setState({ showTab: true });
		}

		// while (!this.state.notif) {
		// 	setTimeout(check(this), 1000)
		// }

		setInterval(function() {
			check().then((res) => {
				if (res) {
					clearInterval()
					console.log('!!--!!')
					$('body').append('<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99; background: rgba(0, 0, 0, 0.8); color: #fff;"><div>Notification</div></div>')
				}
			})
		}, 1000)
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
