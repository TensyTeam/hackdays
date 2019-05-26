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
					$('body').append('<div class="notification"></div>')
					setTimeout(function() {
						$('.notification').append('<div class="text">New request</div>')
						//<div class="chat_block">Ticket created</div><div class="chat_block">Ticket registered</div><div class="chat_block">Ticket approved</div><div className="btn_block"><button class="btn selected">Ok</button></div>
					}, 1000);
					setTimeout(function() {
						$('.notification').append('<div class="chat_block">Ticket created</div>')
					}, 2000);
					setTimeout(function() {
						$('.notification').append('<div class="chat_block">Ticket registered</div>')
					}, 4000);
					setTimeout(function() {
						$('.notification').append('<div class="chat_block">Ticket approved</div>')
					}, 6000);
					setTimeout(function() {
						$('.notification').append('<div className="btn_block"><a href="/services" class="btn selected" >Ok</a></div>')
					}, 8000);
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
