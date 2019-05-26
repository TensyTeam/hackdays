import React from 'react'
import { Link } from "react-router-dom"


export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div style={ {width: '20px', height: '20px', display: 'inline-block', cursor: 'pointer'} } onClick={ this.props.handlerService } />
				<div style={ {display: 'inline-block'} }>Tensy{ this.props.yy && 'yy' }</div>
				<Link className="team_top" to="/team"><i className="fas fa-users"></i></Link>
			</div>
		)
	}
}
