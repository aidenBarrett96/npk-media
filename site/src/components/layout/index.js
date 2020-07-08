import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import '../../styles/main.scss';
import './layout.scss';

// Global layout component
const Layout = ({ children, mainClass }) => {
	// Query metadata the site title
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			{/* Header component */}
			<Header siteTitle={data.site.siteMetadata.title} />
			{/* Main content */}
			<main className={mainClass}>{children}</main>
		</>
	);
};

// Proptypes for documentation
Layout.propTypes = {
	/**
	 * Children nodes encapsulated within the layout container
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Main class name to apply to the main element
	 */
	mainClass: PropTypes.string,
};

export default Layout;
