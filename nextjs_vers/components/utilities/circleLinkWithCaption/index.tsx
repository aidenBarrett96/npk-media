import React from 'react';
import Button from '../button';
import style from './circleLinkWithCaption.module.scss';

const CircleLinkWithCaption = ({title, button_text, link}) => {

	return (
		<div className={style.container}>
			<h2>{title}</h2>
			<Button text={button_text} link={`/${link.cached_url}`} large />
		</div>
	);
};
export default CircleLinkWithCaption



/* Where used:
1. Dynamic pages - components.tsx
2. components/utilities/blog/index and singleBlog
*/