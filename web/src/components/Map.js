import React from 'react'
import { Link } from "react-router-dom"


export default class Map extends React.Component {
	render() {
		return (
			<div className="map">
				<div>
					<Link to="/map/temperature">Temperature</Link>
					<Link to="/map/density">Density</Link>
				</div>
				{document.location.pathname === '/map/temperature' ?
					<img src="../../img/map1.png"/> :
					<img src="../../img/map2.png"/>
				}
			</div>
		)
	}
}
