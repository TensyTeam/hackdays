import React from 'react'
// import Moment from 'react-moment'
import moment from 'moment'


export default function(props) {
	// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	/////

	// var dateFuture = new Date(new Date().getFullYear() +1, 0, 1);
	// var dateNow = new Date();

	// var seconds = Math.floor((dateFuture - (dateNow))/1000);
	// var minutes = Math.floor(seconds/60);
	// var hours = Math.floor(minutes/60);
	// var days = Math.floor(hours/24);

	/////

	// const time = new Date(props.time * 1000)

	// const month = time.getMonth()
	// const day = time.getDay()

	// const hours = time.getHours()
	// const minutes = time.getMinutes().toString().replace(/^(\d)$/, '0$1') // time.toLocaleString('en-us', { minute: '2-digit' }) //

	/////

	const time = moment(props.time * 1000 - 60 * 60 * 2 * 1000)

	const time1 = time.format('HH:mm')
	const time2 = time.format('D MMMM')

	return (
		<li className="timeline__item" id={ props.time }>
			<div className="timeline__step">
				<div className="timeline__step__marker timeline__step__marker--blue"></div>
			</div>
			<div className="timeline__time">

				{/* { day + ' ' + months[month] }
				<br />
				{ hours + ':' + minutes } */}

				{/* <div className="timeline__title">
					{ hours + ':' + minutes }
				</div>
				<ul className="timeline__points">
					<li>{ day + ' ' + months[month] }</li>
				</ul> */}

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