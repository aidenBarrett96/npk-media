import React from 'react';
import cStyle from './contentWithImages.module.scss';
import ThreeMediaLayout from '../threeMediaLayout';

const ContentWithImages = ({props}) => {

	const {project_title,} = props.content
	console.log('project title', project_title)

	return (
		<div className={cStyle.container}>
			<h2>{project_title}</h2>
			{/* <p>{body}</p> */}
			<div className={cStyle.mediaWrapper}>
				{/* <ThreeMediaLayout media={media} featuredPosition={featuredPosition} /> */}
			</div>
			{/* {link && (
				<a className='button-text__secondary' href={link.url}>
					{link.text}
				</a>
			)} */}
		</div>
	);
};

export default ContentWithImages;
