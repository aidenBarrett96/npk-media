import React from 'react';
import cStyle from './latestProjects.module.scss';
import t from 'prop-types';
import Link  from 'next/link';


const LatestProjects = (props) => {
	const projects = props?.projects
	console.log('project data..', projects)
	return (
		<div className={cStyle.container}>
			<h2>{props.title}</h2>
			<div className={cStyle.inner}>
				{projects.map((project) => (
					<Link href={`/projects/${project.slug}`} >
						<a className={cStyle.project}>
							<div className={cStyle.mediaWrapper}>
								{/* <img src={project.content.featured_media.filename} /> */}
								<span>{project.title}</span>
							</div>
							<span className={cStyle.title}>{project.name}</span>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};
export default LatestProjects