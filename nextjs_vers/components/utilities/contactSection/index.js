import React from 'react';
import cStyle from './contactSection.module.scss';
import Button from '../button';
import types from 'prop-types';

const ContactSection = ({ text }) => (
	<div className={cStyle.container}>
		{text && <h2>{text}</h2>}
		<Button large link='/contact' text='Get in touch' />
	</div>
);

ContactSection.propTypes = {
	/**
	 * Text to show above the link
	 */
	text: types.string,
};

export default ContactSection;
