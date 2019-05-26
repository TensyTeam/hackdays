import React from 'react'
import { Link } from "react-router-dom"

import { serverResponse, loadCoordinates } from './Func/requestDB';
import { listSensors } from './Func/request';
import MapDens from './MapDens'


export default class Map extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			path: null,
			num1: null,
			num2: null,
			num3: null,
			num4: null
		};
		this.onChange = this.onChange.bind(this);
		this.onAnalize = this.onAnalize.bind(this);
	}

	componentWillMount() {
		this.setState({ path: document.location.pathname });
		let data = serverResponse(loadCoordinates())
		console.log(data);
	}

	onChange(_path) {
		this.setState({ path: _path });
	}

	onAnalize() {
		listSensors().then((_res) => {
			console.log(_res.data);
			console.log(_res.data.devices[0].reported.temperature.value);
			this.setState({ num1: _res.data.devices[0].reported.temperature.value })
			this.setState({ num2: _res.data.devices[1].reported.temperature.value })
			this.setState({ num3: _res.data.devices[2].reported.temperature.value })
			this.setState({ num4: _res.data.devices[28].reported.temperature.value })
		});
	}

	render() {
		return (
			<div className="map">
				<div>
					<Link to="/map/density" onClick={()=>{this.onChange('/map/density')}} className={this.state.path === '/map/density' ? 'active' : '' }>Density</Link>
					<Link to="/map/temperature" onClick={()=>{this.onChange('/map/temperature')}} className={this.state.path === '/map/temperature' ? 'active' : '' }>Temperature</Link>
					<Link to="/map/space" onClick={()=>{this.onChange('/map/space')}} className={this.state.path === '/map/space' ? 'active' : '' }>Space</Link>
				</div>
				{this.state.path === '/map/temperature' &&
					<React.Fragment>
						<span className="map_box">
							<img id="temperature" src="/../img/map1.png"/>
						</span>
						<span className="text"  className="nums">
							<span className="num">
								<img id="num" src="/../img/num1.png"/>
								{this.state.num1}
							</span>
							<span className="num">
								<img id="num" src="/../img/num2.png"/>
								{this.state.num2}
							</span>
							<span className="num">
								<img id="num" src="/../img/num3.png"/>
								{this.state.num3}
							</span>
							<span className="num">
								<img id="num" src="/../img/num4.png"/>
								{this.state.num4}
							</span>
						</span>
						<span className="btn_block">
							<button className="btn" onClick={()=>{this.onAnalize()}}>Analyse</button>
						</span>
					</React.Fragment>
				}
				{this.state.path === '/map/space' &&
					<React.Fragment>
						<span className="map_box">
							<img id="temperature" src="/../img/map2.png"/>
						</span>
						<span className="btn_block">
							<button className="btn disable">Booking</button>
						</span>
					</React.Fragment>
				}
				{this.state.path === '/map/density' &&
					<MapDens width="100vw" height="100vh" />
				}
			</div>
		)
	}
}
