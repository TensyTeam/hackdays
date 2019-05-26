import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import $ from 'jquery'

import Timeline from './Timeline'
import Map from './Map'
import Services from './Services'
import Services1 from './Services1'
import Tabbar from './Tabbar'
import Home from './Home'
import Header from './Header'
import Team from './Team'
import './style.css'
import { check } from './Func/methods'


function realtimeGet() {
	setInterval(function() {
		check().then((res) => {
			if (res) {
				clearInterval()
				console.log('!!--!!')
				$('body').append('<div class="notification"></div>')
				$('.notification').append('<div class="text">Get to the stage</div>')
			}
		})
	}, 1000)
}

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			showTab: false,
			notif: false,
			service: false,
		}
		this.onChange = this.onChange.bind(this);
		this.handlerService = this.handlerService.bind(this);
	}

	componentDidMount() {
		if (document.location.pathname === '/') {
			this.setState({ showTab: false })
		} else {
			this.setState({ showTab: true })
		}

		// while (!this.state.notif) {
		// 	setTimeout(check(this), 1000)
		// }

		if (this.state.service) {
			realtimeGet()
		}
	}

	onChange() {
		this.setState({ showTab: true })
	}

	handlerService() {
		this.setState({service: true})
		realtimeGet()
	}

	render() {
		return (
			<BrowserRouter>
				{this.state.showTab &&
					<Header handlerService={ this.handlerService } yy={ this.state.service } />
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
					<Route exact path="/service">
						<Services1 />
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
