module.exports = {
	siteMetadata: {
		title: `NPK Media`,
		description: `Videography, software, social media and branding. All done for you. By us.`,
		author: `NPK Media`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `NPK Media`,
				short_name: `NPK Media`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#DE4A3F`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-polyfill-io`,
			options: {
				features: [`IntersectionObserver`, `fetch`],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: ['gatsby-remark-component'],
			},
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'Strapi',
				fieldName: 'strapi',
				url: 'http://localhost:1337/graphql',
			},
		},
		/* {
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 1000, // Default to 100
				contentTypes: [`projects`, `user`],
				// If using single types place them in this array.
				// singleTypes: [`home-page`, `contact`],
			},
		}, */

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
