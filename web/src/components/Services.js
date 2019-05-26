import React from 'react'
import { call, check } from './Func/methods';


export default class Services extends React.Component {
	render() {
		const handlerExpert = () => {
			call(this)
		}

		// const handlerCheck = () => {
		// 	check(this).then((res) => console.log(res))
		// }

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
				<div className="service" >
					{/* onClick={ handlerCheck }> */}
					Service
				</div>
				<div className="service active" onClick={ handlerExpert }>
					Call to expert
				</div>
			</div>
		)
	}
}
