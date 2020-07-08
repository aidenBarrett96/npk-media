import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import cStyle from './header.module.scss';
import MenuButton from '../../static/menuButton';
import Nav from './nav';
// import logo from '../../../assets/header/npk-media-logo.svg';
import Logo from '../../static/logo';

// Header Component
const Header = () => {
	// Sidebar open logic held within state
	const [open, setOpen] = useState(false);

	return (
		<header className={open ? cStyle.navOpen : 'header'}>
			{/* Home link and logo */}
			<Link to='/' className={cStyle.logo}>
				{/* Logo image */}
				{/* <img src={logo} alt='NPK Media logo' /> */}
				<Logo />
			</Link>

			{/* Menu button shows on small screens */}
			<MenuButton open={open} setOpen={setOpen} />

			{/* Nav */}
			<Nav open={open} setOpen={setOpen} />
		</header>
	);
};

// Acceptable prop types
Header.propTypes = {
	/**
	 * The site title for logo/ SEO component
	 */
	siteTitle: PropTypes.string,
	/**
	 * Add the page title into the header
	 */
	pageTitle: PropTypes.string,
	/**
	 * Toggle the white navigation on/ off (For the time background)
	 */
	whiteNav: PropTypes.bool,
};

// Default props
Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
