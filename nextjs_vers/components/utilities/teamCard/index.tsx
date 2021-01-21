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
					<img src={member.image.filename} alt={`Profile image of ${member.name}`} />
					<p>{member.name}</p>
					<p>{member.role}</p>
					<button onClick={() => memberClickHandler(member)}>+</button>
				</div>
			))}

			{
				isActive 
				? (
						<div className={style.popup}>
							<img src="" alt={`Profile image of ${focusedMember.name}`}/>
							<p>{focusedMember.name}</p>
							<p>Need to swap name for description. Needs adding in cms </p>
							<button onClick={() => setIsActive(false)}>X</button>
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