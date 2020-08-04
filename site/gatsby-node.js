/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
	const result = await graphql(`
		{
			strapi {
				projects {
					_id
					slug
				}
				pages {
					_id
					slug
				}
			}
		}
	`);

	const projects = result.data.strapi.projects;

	projects.forEach((project) => {
		actions.createPage({
			path: project.slug,
			component: path.resolve('./src/templates/project/index.js'),
			context: {
				id: project._id,
			},
		});
	});

	const pages = result.data.strapi.pages;

	pages.forEach((page) => {
		actions.createPage({
			path: page.slug,
			component: path.resolve('./src/templates/page/index.js'),
			context: {
				id: page._id,
			},
		});
	});
};
