import React from 'react'
import { Link } from "react-router-dom"

import { serverResponse, getSensors } from './Func/request';

export default class Home extends React.Component {

	componentDidMount() {
		// serverResponse(getSensors());
	}

	render() {
		return (
			<div className="home">
				<img src="/img/logo.png"/>
				<div className="text">
					Welcome to our services
				</div>
				<Link to="/timeline" className="btn" onClick={()=>{this.props.onChange()}}>Get started</Link>
			</div>
		)
	}
}
