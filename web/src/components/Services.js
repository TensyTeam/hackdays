import React from 'react'
import { auth } from './Func/methods';


export default class Services extends React.Component {
	render() {
		const handlerExpert = () => {
			
		}

		return (
			<div className="services-list">
				{/* <div className="shadow">
					Comming soon
				</div> */}
				<div className="service">
					Cleaning
				</div>
				<div className="service">
					Security
				</div>
				<div className="service">
					Catering
				</div>
				<div className="service">
					Service
				</div>
				<div className="service" onClick={ handlerExpert }>
					Call to expert
				</div>
			</div>
		)
	}
}
