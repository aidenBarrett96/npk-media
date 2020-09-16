import React, { useState, useEffect } from 'react';
import SbEditable from 'storyblok-react';
import { useGetStory } from '../components/hooks/getStory';
import Page from '../components/utilities/page';
import Layout from '../components/layout';
import ComponentNotFound from '../components/utilities/component-not-found';

const ComponentList = {
	page: Page,
};

const TopLevelComponents = (type) => {
	if (typeof ComponentList[type] === 'undefined') {
		return ComponentNotFound;
	}
	return ComponentList[type];
};

const Editor = () => {
	const story = useGetStory();

	if (!story) {
		return null;
	} else {
		const content = story?.content;

		return (
			<Layout>
				<SbEditable content={content}>
					{React.createElement(TopLevelComponents(content.component), {
						key: content.uid,
						blok: content,
					})}
				</SbEditable>
			</Layout>
		);
	}
};

export default Editor;
