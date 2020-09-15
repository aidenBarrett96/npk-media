import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
const RichText = ({ blok }) => {
	const { body } = blok;
	return <div>{render(body)}</div>;
};

export default RichText;
