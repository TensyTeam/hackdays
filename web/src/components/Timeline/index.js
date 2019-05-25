import React from 'react'

import './style.css'

import { events } from './list'
import Point from './Point'


export default class Timeline extends React.Component {
	componentDidMount() {
		let time_now = new Date().getTime() / 1000

		let time_list = []
		events.map(point => {
			if (point.time - 2 * 60 * 60 <= time_now) {
				time_list.push(point.time)
			}
		})

		//

		// function ScrollTo(name) {
		// 	ScrollToResolver(document.getElementById(name));
		// }
		  
		// function ScrollToResolver(elem) {
		// 	let jump = parseInt(elem.getBoundingClientRect().top * .2);
		// 	document.body.scrollTop += jump;
		// 	document.documentElement.scrollTop += jump;

		// 	if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
		// 		elem.lastjump = Math.abs(jump);
		// 		setTimeout(function() { ScrollToResolver(elem);}, "100");
		// 	} else {
		// 		elem.lastjump = null;
		// 	}
		// }

		//

		ScrollTo(document.getElementById(Math.max.apply(null, time_list))) // .scrollIntoView()
	}

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