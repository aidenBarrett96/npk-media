import React from 'react';
import cStyle from './contentWithEmbed.module.scss';

const ContentWithEmbed = ({ title, body, embed, link }) => (
	<div className={cStyle.container}>
		<h2>{title}</h2>
		<p>{body}</p>
		<div className={cStyle.embed} dangerouslySetInnerHTML={{ __html: embed }} />
		{link && (
			<a className='button-text__secondary' href={link.url}>
				{link.text}
			</a>
		)}
	</div>
);

export default ContentWithEmbed;
