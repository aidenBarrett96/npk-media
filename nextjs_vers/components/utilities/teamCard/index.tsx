import React, { FC, useState } from 'react';
import style from './teamCard.module.scss';

interface TeamProp {
	members: any,
	name: string,
}


const TeamCard: FC<TeamProp> = ( props) => {
	const team = props?.members

	const [isActive, setIsActive] = useState(false)
	const [focusedMember, setFocusedMember] = useState({});

	const memberClickHandler = (member) => {
		const alreadyActive = focusedMember === member;
		setFocusedMember(alreadyActive ? {} : member);
		setIsActive(true)
	};


	return (
		<div className={style.team}>
			{team.map((member) => (
				<div className={style.member}>
					<img src={`${member.image.filename}` || "/placeholder.png"} alt={`Profile image of ${member.name}`} />
					<button onClick={() => memberClickHandler(member)}>+</button>
					<div className={style.nameRole}>
						<p>{member.name}</p>
						<p>{member.role}</p>
					</div>
				</div>
			))}

			{
				isActive 
				? (
						<div className={style.popup}>
							<div className={style.popupInner}>
								<img src="/placeholder.png" alt={`Profile image of ${focusedMember.name}`}/>
								<p>Need to add description in cms </p>
								<button onClick={() => setIsActive(false)}>+</button>
							</div>
						</div>
					)
				: null
			}
		</div>
	)
};


export default TeamCard;


/* Where used: 
1. 
*/