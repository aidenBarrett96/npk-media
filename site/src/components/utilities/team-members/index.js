import React, { useState } from 'react';
import SbEditable from 'storyblok-react';
import TeamCard from '../teamCard';
import style from './team-members.module.scss';

const TeamMembers = ({ blok }) => {
	console.log('blok :>> ', blok);

	const [focusedMember, setFocusedMember] = useState('');

	const team = blok.members;

	const memberClickHandler = (member) => {
		const alreadyActive = focusedMember === member;
		setFocusedMember(alreadyActive ? '' : member);
	};
	return (
		<SbEditable content={blok}>
			<div className={style.cardGrid}>
				{team.map((member) => (
					<>
						<div
							onClick={() => memberClickHandler(member.name)}
							className={
								focusedMember !== member.name && focusedMember && style.hide
							}>
							<TeamCard blok={member} />
						</div>
						<p
							className={`${style.description} ${focusedMember ===
								member.name && style.active}`}>
							{member.description}
						</p>
					</>
				))}
			</div>
		</SbEditable>
	);
};

export default TeamMembers;
