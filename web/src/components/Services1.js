import React from 'react'
import $ from 'jquery'

import { call } from './Func/methods';


export default class Services1 extends React.Component {
	render() {
		const handlerExpert = () => {
			call(this)

			$('body').append('<div class="notification"></div>')
			setTimeout(function() {
				$('.notification').append('<div class="text">Get to the stage</div>')
				//<div class="chat_block">Ticket created</div><div class="chat_block">Ticket registered</div><div class="chat_block">Ticket approved</div><div className="btn_block"><button class="btn selected">Ok</button></div>
			}, 1000);
			setTimeout(function() {
				$('.notification').append('<div class="chat_block">Ticket created</div>')
			}, 2000);
			setTimeout(function() {
				$('.notification').append('<div class="chat_block">Ticket registered</div>')
			}, 4000);
			setTimeout(function() {
				$('.notification').append('<div class="chat_block">Ticket approved</div>')
			}, 6000);
			setTimeout(function() {
				$('.notification').append('<div class="btn_block"><a href="/services" class="btn selected">Ok</a></div>')
			}, 8000);
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
				<div className="service">
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
