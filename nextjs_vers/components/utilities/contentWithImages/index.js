import React from 'react';
import cStyle from './contentWithImages.module.scss';
import ThreeMediaLayout from '../threeMediaLayout';

const ContentWithImages = ({ title, body, media, featuredPosition, link }) => {
	console.log('images :>> ', media);

	return (
		<div className={cStyle.container}>
			<h2>{title}</h2>
			<p>{body}</p>
			<div className={cStyle.mediaWrapper}>
				<ThreeMediaLayout media={media} featuredPosition={featuredPosition} />
			</div>
			{link && (
				<a className='button-text__secondary' href={link.url}>
					{link.text}
				</a>
			)}
		</div>
	);
};

export default ContentWithImages;
