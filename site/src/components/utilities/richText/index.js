import React from 'react';
import { render, NODE_CODEBLOCK } from 'storyblok-rich-text-react-renderer';
import style from './rich-text.module.scss';
const RichText = ({ blok }) => {
	const { body } = blok;
	return (
		<div className={style.richText}>
			{render(body, {
				nodeResolvers: {
					[NODE_CODEBLOCK]: (children) => (
						<div
							className={style.embed}
							dangerouslySetInnerHTML={{ __html: children }}
						/>
					),
				},
			})}
		</div>
	);
};

export default RichText;
