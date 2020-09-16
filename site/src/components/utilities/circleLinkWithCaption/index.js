import React from 'react';
import SbEditable from 'storyblok-react';
import Button from '../button';
import style from './circleLinkwithCaption.module.scss';

const CircleLinkWithCaption = ({ blok }) => {
	const { title, button_text, link } = blok;
	return (
		<SbEditable content={blok}>
			<div className={style.container}>
				<h2>{title}</h2>
				<Button text={button_text} link={link.cached_url} large={true} />
			</div>
		</SbEditable>
	);
};

export default CircleLinkWithCaption;
