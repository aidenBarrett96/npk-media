import React from 'react';
import cStyle from './projectCard.module.scss';
import Link  from 'next/link';


// { hero, title, description, link }
const ProjectCard = ({project}) => {
	const {media, title, description, link} = project
	console.log('this is from component', media)

	return (
	<div className={cStyle.container}>
		<div className={cStyle.hero}>
			{media.filename.ext !== '.mp4' 
			? (
				<img
					src={media.filename}
					alt={media.alt}
					// className={index === 0 ? cStyle.featured : cStyle.image}
				/>
				) 
			: (
					<video
						width='320'
						height='240'
						controls
						// className={index === 0 ? cStyle.featured : cStyle.video}
						>
						<source src={media.filename} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				)}
		</div>
		<h3>{title}</h3>
		<p>{description}</p>
		{/* <Link to={link}>View case study</Link> */}
	</div>
)};

export default ProjectCard;
