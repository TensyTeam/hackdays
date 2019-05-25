import React from 'react'

import './style.css'

import { events } from './list'
import Point from './Point'


export default class Timeline extends React.Component {
	render() {
		return (
			<div class="card">
			<ul class="timeline">
				{events.map(point => <Point name={point.name} description={point.description} time={point.time} />)}
			</ul>
		</div>
		)
	}
}