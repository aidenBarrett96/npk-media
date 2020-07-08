import React from 'react';
import cStyle from './nav.module.scss';
import { Link } from 'gatsby';
import t from 'prop-types';
import socialMediaIcon from '../../../../assets/header/social-media-icon.svg';
import videosIcon from '../../../../assets/header/videos-icon.svg';
import websitesIcon from '../../../../assets/header/websites-icon.svg';

// Nav component
const Nav = ({ open }) => {
	return (
		// Links inside an unordered list
		<nav className={open ? cStyle.navOpen : cStyle.navClosed}>
			<ul className={cStyle.nav}>
				<li className={cStyle.navLink}>
					<Link to='/' activeClassName={cStyle.navLinkActive}>
						Home
						<span />
					</Link>
				</li>
				{/* TODO:: Add state to the link */}
				<li className={cStyle.navLink}>
					<Link to='/videos' activeClassName={cStyle.navLinkActive}>
						<div>
							<img
								src={videosIcon}
								alt='Videos icon'
								className={cStyle.video}
							/>
						</div>
						Videos
						<span />
					</Link>
				</li>
				<li className={cStyle.navLink}>
					<Link to='/websites' activeClassName={cStyle.navLinkActive}>
						<div>
							<img
								src={websitesIcon}
								alt='Websites icon'
								className={cStyle.web}
							/>
						</div>
						Websites
						<span />
					</Link>
				</li>
				<li className={cStyle.navLink}>
					<Link to='/social-media' activeClassName={cStyle.navLinkActive}>
						<div>
							<img
								src={socialMediaIcon}
								alt='Social media icon'
								className={cStyle.socialMedia}
							/>
						</div>
						Social Media
						<span />
					</Link>
				</li>
				<li className={cStyle.navLink}>
					<Link to='/our-team' activeClassName={cStyle.navLinkActive}>
						Our Team
						<span />
					</Link>
				</li>
				<li className={cStyle.navLink}>
					<Link
						to='/contact'
						activeClassName={cStyle.navLinkActive}
						style={{ color: '#DE4A3F' }}>
						Get In Touch
						<span
							style={{
								background: '#DE4A3F',
							}}
						/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

Nav.propTypes = {
	/**
	 * On/ off toggle for the mobile navigation drawer
	 */
	open: t.bool.isRequired,
};

export default Nav;
