import React from 'react';
import style from './projectCard.module.scss';
import Link  from 'next/link';
import Button from '../button';


const ProjectCard = ({project}) => {
	const {media, title} = project

	return (
	<div className={style.container}>

		<div className={style.media}>
			{media.filename.ext !== '.mp4' 
			? (
				<img
					src={media.filename}
					alt={media.alt}
					// className={index === 0 ? style.featured : style.image}
				/>
				) 
			: (
					<video
						width='320'
						height='240'
						controls
						// className={index === 0 ? style.featured : style.video}
						>
						<source src={media.filename} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				)}
		</div>

		<div className={style.btn}>
			<Link href={project.project.cached_url}>
				<a>
					<Button 
						text={title}
						link={project.project.cached_url}
						large
					/>
				</a>
			</Link>
		</div>

	</div>
)};

export default ProjectCard;


/* Where used: 
1. 
*/