import React from 'react';
import cStyle from './latestProjects.module.scss';
import t from 'prop-types';
// import { filterProjectsByCategory } from '../../globals/projects';
import Link  from 'next/link';


const LatestProjects = ({ projects }) => {


	return (
		<div className={cStyle.container}>
			<h2>Latest Projects</h2>
			<div className={cStyle.inner}>
				{projects.map((project) => (
					<Link href={`/projects/${project.slug}`} >
						<a className={cStyle.project}>
							<div className={cStyle.mediaWrapper}>
								<img src={project.content.featured_media.filename} />
								{/* remove span and un-comment above line */}
								<span>{project.name}</span>
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