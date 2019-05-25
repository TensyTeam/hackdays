import React from 'react'

import './style.css'

import { events } from './list'
import Point from './Point'


export default class Timeline extends React.Component {
	render() {
		return (
			<div className="card">
			<ul className="timeline">
				{events.map((point, num) => <Point name={point.name} description={point.description} time={point.time} key={num} />)}
			</ul>
		</div>
		)
	}
}