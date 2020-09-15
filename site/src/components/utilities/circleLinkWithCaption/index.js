import React from 'react';
import Button from '../button';
import style from './circleLinkWithCaption.module.scss';

const CircleLinkWithCaption = ({ blok }) => {
	const { title, button_text, link } = blok;
	return (
		<div className={style.container}>
			<h2>{title}</h2>
			<Button text={button_text} link={link.cached_url} large={true} />
		</div>
	);
};

export default CircleLinkWithCaption;
