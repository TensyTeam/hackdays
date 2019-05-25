import React from 'react'
import { Link } from "react-router-dom"

import MapDens from './MapDens'


export default class Map extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			path: null
		};
		this.onChange = this.onChange.bind(this);
		this.onAnalize = this.onAnalize.bind(this);
	}

	componentWillMount() {
		this.setState({ path: document.location.pathname });
	}

	onChange(_path) {
		this.setState({ path: _path });
	}

	onAnalize() {
		console.log(1);
	}

	render() {
		return (
			<div className="map">
				<div>
					<Link to="/map/density" onClick={()=>{this.onChange('/map/density')}} className={this.state.path === '/map/density' ? 'active' : '' }>Density</Link>
					<Link to="/map/temperature" onClick={()=>{this.onChange('/map/temperature')}} className={this.state.path === '/map/temperature' ? 'active' : '' }>Temperature</Link>
					{/* <Link to="/map/space" onClick={()=>{this.onChange('/map/space')}} className={this.state.path === '/map/space' ? 'active' : '' }>Space</Link> */}
				</div>
				{this.state.path === '/map/temperature' &&
					<React.Fragment>
						<img id="temperature" src="/../img/map1.png"/>
						Comming soon
						<span className="btn_block">
							<button className="btn" onClick={this.onAnalize}>Analize</button>
						</span>
					</React.Fragment>

				}
				{/* {this.state.path === '/map/space' &&
					<img  src="/../img/map1.png"/>
				} */}
				{this.state.path === '/map/density' &&
					<MapDens width="100vw" height="100vh" />
				}
			</div>
		)
	}
}
