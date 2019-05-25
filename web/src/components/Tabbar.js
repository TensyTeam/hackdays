import React from 'react'
import { Link } from "react-router-dom"


export default class Tabbar extends React.Component {
	render() {
		return (
			<div className="tabbar">
				<Link to="/timeline"><i className="fas fa-calendar-alt"></i></Link>
				<Link to="/services"><img src="/img/logo.png"/></Link>
				<Link to="/map/temperature"><i className="fas fa-map"></i></Link>
			</div>
		)
	}
}
