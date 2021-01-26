import React from 'react';
import Button from '../button';
import style from './circleLinkWithCaption.module.scss';

const CircleLinkWithCaption = ({title, button_text, link, image}) => {

	return (
		<div className={style.container}>
			<h2>{title}</h2>
			{image
				? <img src={image.filename} alt={image.alt} className={style.nextImage}/>
				: null
			}
			<Button text={button_text} link={`/${link.cached_url}`} large />
		</div>
	);
};
export default CircleLinkWithCaption



/* Where used:
1. Dynamic pages - components.tsx
2. components/utilities/blog/index and singleBlog
*/