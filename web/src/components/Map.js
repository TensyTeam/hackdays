import React from 'react'
import { Link } from "react-router-dom"


export default class Map extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			path: null
		};
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount() {
		this.setState({ path: document.location.pathname });
	}

	onChange(_path) {
		this.setState({ path: _path });
	}

	render() {
		return (
			<div className="map">
				<div>
					<Link to="/map/temperature" onClick={()=>{this.onChange('/map/temperature')}}>Temperature</Link>
					<Link to="/map/density" onClick={()=>{this.onChange('/map/density')}}>Density</Link>
				</div>
				{this.state.path === '/map/temperature' &&
					<img src="../../img/map1.png"/>
				}
				{this.state.path === '/map/density' &&
					<img src="../../img/map2.png"/>
				}
			</div>
		)
	}
}
