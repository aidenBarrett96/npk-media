import React from 'react';
import cStyle from './teamCard.module.scss';
import t from 'prop-types';
// import Img from 'gatsby-image'

const TeamCard = ({ name, role, image }) => (
	<div className={cStyle.container}>
		{/* TODO Gatsby image:: <Img fluid="" */}
		<div className={cStyle.imgWrapper}>
			<img src={image} alt={name + "'s profile image"} />
		</div>
		<h3 className={cStyle.name}>{name}</h3>
		<h4 className={cStyle.role}>{role}</h4>
	</div>
);

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
