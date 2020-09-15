import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import pStyle from './project.module.scss';
import DynamicZone from '../../components/globals/conversions/dynamicZone';
import Hero from '../../components/utilities/hero';

// Querying the product information from Sanity using GrapQL
/* export const data = graphql`
	query($id: ID!) {
		strapi {
			project(id: $id) {
				name
				description
				hero {
					ext
					url
					alternativeText
				}
				content {
					... on Strapi_ComponentGeneralCircleLink {
						large
						url
						text
					}
					... on Strapi_ComponentGeneralTestimonial {
						testimonial
						author
					}
					... on Strapi_ComponentProjectContentWithEmbed {
						embed
						body
						title
						link {
							text
							url
						}
					}
					... on Strapi_ComponentGeneralRichText {
						body
					}
					... on Strapi_ComponentGeneralCircleLinkWithCaption {
						__typename
						id
						link {
							text
							url
						}
						text
					}
					... on Strapi_ComponentProjectContentWithImages {
						__typename
						body
						title
						images {
							featured_position
							images {
								url
								alternativeText
								ext
							}
						}
						link {
							text
							url
						}
					}
				}
				client
			}
		}
	}
`;
 */
export default () => null;
/* {
	const project = data.strapi.project;
	return (
		<Layout>
			<section className={pStyle.hero}>
				<Hero hero={project.hero} />
			</section>
			<section>
				<h1>{project.name}</h1>
				<p>{project.description}</p>
				<div className={pStyle.categories}>
					<p>categories placeholder</p>
				</div>
			</section>
			{/* Dynamic zone 
			<DynamicZone content={project.content} />
		</Layout>
	);
};
 */
