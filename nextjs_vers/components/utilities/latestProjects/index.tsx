import React from 'react';
import style from './latestProjects.module.scss';
import ProjectCard from '../projectCard'

const LatestProjects = (props) => {
	const projects = props.projects
	console.log('project data..', projects)

	return (
		<div className={style.container}>
			<h2>{props.title}</h2>
			<div className={style.inner}>
				{projects.map((project) => (
					// <Link href={`${project.project.cached_url}`} >
					// 	<a className={style.project}>
					// 		<div className={style.mediaWrapper}>
					// 			<img src={project.content.featured_media.filename} />
					// 			<span>{project.title}</span>
					// 		</div>
					// 		<span className={style.title}>{project.name}</span>
					// 	</a>
					// </Link>
					<ProjectCard project={project}/>
				))}
			</div>
		</div>
	);
};
export default LatestProjects