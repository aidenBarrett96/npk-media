import React from 'react';
import style from './teamCard.module.scss';
import t from 'prop-types';
// import Img from 'gatsby-image'

const TeamCard = ( props) => {
	const team = props?.members

	return (
		<div>
			{team.map((single) => (
				<div>
					<img src={single.image.filename} alt={single.image.alt} />
					<p>{single.name}</p>
					<p>{single.role}</p>
				</div>
			))}
		</div>
	)
};

TeamCard.propTypes = {
	/**
	 * The name of the team member
	 */
	name: t.string.isRequired,
	/**
	 * The job role of the team member
	 */
	role: t.string.isRequired,
	/**
	 * The profile image of the user
	 */
	image: t.string,
};

export default TeamCard;
