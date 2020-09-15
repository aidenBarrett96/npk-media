import React from 'react';
import { render, NODE_CODEBLOCK } from 'storyblok-rich-text-react-renderer';
const RichText = ({ blok }) => {
	const { body } = blok;
	return (
		<div>
			{render(body, {
				nodeResolvers: {
					[NODE_CODEBLOCK]: (children) => (
						<>
							<h1>CODEBLOK</h1>
							<div dangerouslySetInnerHTML={children} />
						</>
					),
				},
			})}
		</div>
	);
};

export default RichText;
