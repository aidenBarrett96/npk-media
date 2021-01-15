import React from 'react';
import cStyle from './projectCard.module.scss';
import { Link } from 'gatsby';

const ProjectCard = ({ hero, title, description, link }) => (
	<div className={cStyle.container}>
		<div className={cStyle.hero}>
			{hero.ext !== '.mp4' ? (
				<img
					src={`${node.url}`}
					alt={node.alternativeText}
					className={index === 0 ? cStyle.featured : cStyle.image}
				/>
			) : (
				<video
					width='320'
					height='240'
					controls
					className={index === 0 ? cStyle.featured : cStyle.video}>
					<source src={`${node.url}`} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			)}
		</div>
		<h3>{title}</h3>
		<p>{description}</p>
		<Link to={link}>View case study</Link>
	</div>
);

export default ProjectCard;
