import React from 'react';
import style from './latestProjects.module.scss';
import ProjectCard from '../projectCard'

const LatestProjects = ({projects}) => {

	return (
		<div className={style.container}>
			<h2>{projects.title}</h2>
			<div className={style.inner}>
				{projects.map((project) => (
					<ProjectCard project={project} key={project.title}/>					
				))}
			</div>
		</div>
	);
};
export default LatestProjects



/* Where used: 
1. Home page - in components.tsx
2. videos, websites and social media - in components.tsx
*/