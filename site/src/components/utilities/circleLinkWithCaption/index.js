import React from 'react';
import Button from '../button';
import style from './circleLinkWithCaption.module.scss';

export default ({ text, link }) => {
	console.log('text :>> ', text);
	console.log('link :>> ', link);
	return (
		<div className={style.container}>
			<h2>{text}</h2>
			<Button text={link.text} link={link.url} large={link.large} />
		</div>
	);
};
