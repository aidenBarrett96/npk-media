import React from 'react';
import { render, NODE_CODEBLOCK } from 'storyblok-rich-text-react-renderer';
const RichText = ({ blok }) => {
	const { body } = blok;
	return (
		<div>
			{render(body, {
				nodeResolvers: {
					[NODE_CODEBLOCK]: (children) => (
						<div dangerouslySetInnerHTML={{ __html: children }} />
					),
				},
			})}
		</div>
	);
};

export default RichText;
