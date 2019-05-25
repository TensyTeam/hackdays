import React from 'react'


export default class Team extends React.Component {
	render() {
		return (
			<div className="team">
				<div className="text">
					Our team
				</div>
				<div className="team_block">
					<img src="/img/team1.png"/>
					<div className="team_content">
						<div className="team_name">
							Sergey Aikhel
						</div>
						<div className="team_info">
							Product
						</div>
						<div className="team_contact">
							sergeyaikhel@gmail.com
						</div>
						<div className="team_contact">
							WhatsApp <br/>+79602747628
						</div>
					</div>
				</div>
				<div className="team_block">
					<img src="/img/team2.png"/>
					<div className="team_content">
						<div className="team_name">
							Ekaterina Fedko
						</div>
						<div className="team_info">
							Business
						</div>
					</div>
				</div>
				<div className="team_block">
					<img src="/img/team3.png"/>
					<div className="team_content">
						<div className="team_name">
							Alexey Poloz
						</div>
						<div className="team_info">
							Development
						</div>
					</div>
				</div>
				<div className="team_block">
					<img src="/img/team4.png"/>
					<div className="team_content">
						<div className="team_name">
							Mike Petrov
						</div>
						<div className="team_info">
							Design
						</div>
					</div>
				</div>
			</div>
		)
	}
}
