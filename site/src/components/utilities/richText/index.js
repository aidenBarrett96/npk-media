import React from 'react';
import { render, NODE_CODEBLOCK } from 'storyblok-rich-text-react-renderer';
import style from './rich-text.module.scss';
import SbEditable from 'storyblok-react';
const RichText = ({ blok }) => {
	const { body } = blok;
	return (
		<SbEditable content={blok}>
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
		</SbEditable>
	);
};

export default RichText;
