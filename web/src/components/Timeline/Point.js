import React from 'react'
import moment from 'moment'


export default function(props) {
	const time = moment(props.time * 1000 - 60 * 60 * 2 * 1000)

	const time1 = time.format('HH:mm')
	const time2 = time.format('D MMMM')

	return (
		<li className="timeline__item" id={ props.time }>
			<div className="timeline__step">
				<div className="timeline__step__marker timeline__step__marker--blue"></div>
			</div>
			<div className="timeline__time">
				<div className="timeline__title">
					{ time1 }
				</div>
				<ul className="timeline__points">
					<li>{ time2 }</li>
				</ul>
			</div>
			<div className="timeline__content">
				<div className="timeline__title">
					{ props.name }
				</div>
				<ul className="timeline__points">
					<li>{ props.description }</li>
				</ul>
			</div>
		</li>
	)
}