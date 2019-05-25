import React from 'react'
import $ from 'jquery'

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

		let el = $('#' + Math.max.apply(null, time_list))

		console.log(el.offset().top)

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

		// ScrollTo(document.getElementById(Math.max.apply(null, time_list))) // .scrollIntoView()

		// let smoothJumpUp = (top) => {
		// 	if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
		// 		window.scrollBy(0, top);
		// 		setTimeout(smoothJumpUp, 2);
		// 	}
		// }

		// smoothJumpUp(-1000)

		// console.log(document.getElementById(Math.max.apply(null, time_list)))

		// console.log($('#1558789200').offset().top)

		// smoothJumpUp($('#1558789200').offset().top)

		// let modal = $('#1558789200');

		// let suka = (event) => {
		// 	// event.preventDefault();

		// 	console.log('!', modal.scrollTop())
		// 	console.log('!!', modal.offset().top)
			
		// 	modal.animate({
		// 	  scrollTop: -1 * (modal.scrollTop() + modal.offset().top)
		// 	}, 1000);
		// }

		// suka();

		// console.log($('#1558634400').offset().top, $('#1558634400').position().top)

		// console.log(Math.max.apply(null, time_list))

		$('html, body').animate({
			scrollTop: el.offset().top
		}, 'slow');

		// document.getElementById('messages').scrollIntoView({ behavior: 'smooth', block: 'end' });

		// smoothJumpUp(document.getElementById(Math.max.apply(null, time_list)))
		
		// window.onscroll = function() {
		//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		//   if (scrolled > 100) {
		// 	document.getElementById('upbutton').style.display = 'block';
		//   } else {
		// 	document.getElementById('upbutton').style.display = 'none';
		//   }
		// }
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