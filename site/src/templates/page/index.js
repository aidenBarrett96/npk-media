import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import pStyle from './page.module.scss';
import DynamicZone from '../../components/globals/conversions/dynamicZone';

// Querying the product information from Sanity using GrapQL
export const data = graphql`
	query($id: ID!) {
		strapi {
			page(id: $id) {
				title
				slug
				body {
					... on Strapi_ComponentGeneralCircleLink {
						text
						url
						large
					}
					... on Strapi_ComponentGeneralTestimonial {
						testimonial
						author
					}
					... on Strapi_ComponentGeneralThreeImageLayout {
						featured_position
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
					... on Strapi_ComponentProjectContentWithImages {
						id
						title
						body
						images {
							featured_position
							images {
								alternativeText
								ext
								url
							}
						}
						link {
							text
							url
						}
					}
					... on Strapi_ComponentGeneralOtherServices {
						category {
							name
						}
					}
					... on Strapi_ComponentGeneralAnimatedStory {
						id
						animation {
							data
						}
						buttons {
							entry_stage
							buttons {
								text
								large
								url
							}
						}
					}
					... on Strapi_ComponentGeneralContactSection {
						text
					}
					... on Strapi_ComponentGeneralRichText {
						body
					}
					... on Strapi_ComponentGeneralLatestProjects {
						category {
							name
						}
					}
				}
			}
		}
	}
`;

export default ({ data }) => {
	const page = data.strapi.page;

	console.log('data :>> ', page);

	return (
		<Layout>
			{/* Dynamic zone */}
			<DynamicZone content={page.body} />
		</Layout>
	);
};
