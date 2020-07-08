import React from 'react';
import outerSmall from '../../../assets/buttons/button-70px.svg';
import outerLarge from '../../../assets/buttons/button-90px.svg';
import cStyle from './button.module.scss';
import { Link } from 'gatsby';
import t from 'prop-types';

const Button = ({ text, link, onClick, large, style }) => (
	<>
		{onClick && (
			<button
				className={large ? cStyle.buttonLarge : cStyle.buttonSmall}
				onClick={onClick}
				style={style}>
				<span>{text}</span>
				<img src={large ? outerLarge : outerSmall} alt='button outline' />
			</button>
		)}
		{link && (
			<Link
				to={link}
				className={large ? cStyle.buttonLarge : cStyle.buttonSmall}
				style={style}>
				<span className='button-text__primary'>{text}</span>
				<img src={large ? outerLarge : outerSmall} alt='button outline' />
			</Link>
		)}
	</>
);

Button.propTypes = {
	/**
	 * The text thats shown inside the button
	 */
	text: t.string.isRequired,
	/**
	 * A link to a page
	 */
	link: t.string,
	/**
	 * The callback for a click event
	 */
	onClick: t.func,
	/**
	 * Whether or not to use the large wrapper
	 */
	large: t.bool.isRequired,
};

export default Button;
