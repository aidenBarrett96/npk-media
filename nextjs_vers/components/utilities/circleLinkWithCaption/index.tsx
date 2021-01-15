import React from 'react';
import Button from '../button';
import style from './circleLinkWithCaption.module.scss';

const CircleLinkWithCaption = (props) => {

	return (
		<div className={style.container}>
			<h2>{props.title}</h2>
			<Button text={props.button_text} link={props.link.cached_url} large={props.link.large} />
		</div>
	);
};
export default CircleLinkWithCaption