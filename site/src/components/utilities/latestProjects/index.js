import React from 'react';
import cStyle from './latestProjects.module.scss';
import t from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { filterProjectsByCategory } from '../../globals/projects';
import Hero from '../hero';
import { Link } from 'gatsby';

const QueryWrapper = ({ context }) => {
	// Query for projects
	const data = useStaticQuery(graphql`
		{
			strapi {
				projects {
					_id
					slug
					name
					categories {
						name
					}
					hero {
						ext
						url
						alternativeText
					}
				}
			}
		}
	`);

	if (!context)
		return <LatestProjects projects={data.strapi.projects.slice(0, 2)} />;
	else
		return (
			<LatestProjects
				projects={filterProjectsByCategory(data.strapi.projects, context).slice(
					0,
					2
				)}
			/>
		);
};

const LatestProjects = ({ projects }) => (
	<div className={cStyle.container}>
		<h2>Latest Projects</h2>
		<div className={cStyle.inner}>
			{projects.map((project) => (
				<Link to={`/${project.slug}`} className={cStyle.project}>
					<div className={cStyle.mediaWrapper}>
						<Hero hero={project.hero} />
					</div>
					<span className={cStyle.title}>{project.name}</span>
				</Link>
			))}
		</div>
	</div>
);

QueryWrapper.propTypes = {
	/**
	 * The category to filter by
	 */
	context: t.string,
};

export default QueryWrapper;
