import React from 'react'
import { Link } from "react-router-dom"


export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				Tensy
				<Link className="team_top" to="/team"><i className="fas fa-users"></i></Link>
			</div>
		)
	}
}
