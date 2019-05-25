import React from 'react'
import { Link } from "react-router-dom"

import { serverResponse, sendCoordinates } from './Func/requestDB';

export default class Home extends React.Component {
	componentWillMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log('GEO', position.coords)
				let status = serverResponse(sendCoordinates(position.coords.latitude,position.coords.longitude))
				// console.log(status);
				if(status === 'Success') {
					// alert('Thank you for your data')
				}
			}
		)
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
