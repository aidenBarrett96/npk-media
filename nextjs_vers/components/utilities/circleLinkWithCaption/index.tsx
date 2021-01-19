import React from 'react';
import Button from '../button';
import style from './circleLinkWithCaption.module.scss';

const CircleLinkWithCaption = ({title, button_text, link}) => {

	return (
		<div className={style.container}>
			<h2>{title}</h2>
			<Button text={button_text} link="/contact" large={link.large} />
		</div>
	);
};
export default CircleLinkWithCaption