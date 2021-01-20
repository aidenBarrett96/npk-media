import React from 'react';
import style from './latestProjects.module.scss';
import ProjectCard from '../projectCard'

const LatestProjects = (props) => {
	const projects = props.projects

	return (
		<div className={style.container}>
			<h2>{props.title}</h2>
			<div className={style.inner}>
				{projects.map((project) => (
					<ProjectCard project={project}/>					
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