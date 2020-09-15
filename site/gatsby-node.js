/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const storyblokEntry = path.resolve('src/templates/storyblok-entry.js');

		resolve(
			graphql(
				`
					{
						allStoryblokEntry {
							edges {
								node {
									id
									name
									created_at
									uuid
									slug
									full_slug
									content
									is_startpage
									parent_id
									group_id
								}
							}
						}
					}
				`
			).then((result) => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}

				const sbEntries = result.data.allStoryblokEntry.edges;

				sbEntries.forEach((entry, index) => {
					createPage({
						path: `/sb-${entry.node.full_slug}/`,
						component: storyblokEntry,
						context: {
							story: entry.node,
						},
					});
				});
			})
		);
	});
};
