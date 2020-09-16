import { Link } from 'gatsby';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SbEditable from 'storyblok-react';
import OffsetGrid from '../offset-grid';
import style from './featured-projects.module.scss';

const FeaturedProjects = ({ blok }) => {
	console.log('blok :>> ', blok);
	return (
		<SbEditable content={blok}>
			<div className={style.container}>
				<h2>{blok.title}</h2>
				{blok.projects.length > 0 ? (
					<OffsetGrid>
						{blok.projects.map((project) => (
							<Project>
								<Link
									to={`/${project.project.cached_url}`}
									className={style.project}>
									{/* <div className={style.mediaWrapper}>
								<Hero hero={project.} />
							</div> */}
									<span className={style.title}>{project.title}</span>
								</Link>
							</Project>
						))}
					</OffsetGrid>
				) : (
					<p>Please add in some projects </p>
				)}
			</div>
		</SbEditable>
	);
};

export default FeaturedProjects;

const Project = ({ children }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.7,
	});

	return (
		<div className={`${inView && style.visible}`} ref={ref}>
			{children}
		</div>
	);
};
