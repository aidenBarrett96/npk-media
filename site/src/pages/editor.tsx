import React, { useState, useEffect } from 'react';
import SbEditable from 'storyblok-react';
import { useGetStory } from '../components/hooks/getStory';
import { IBlok } from '../types/storyblok';
import Page from '../components/utilities/page';

const Editor = () => {
	const story = useGetStory();
	const content: IBlok = story?.content;

	return story ? (
		<SbEditable content={content}>
			<Page blok={content} />
		</SbEditable>
	) : null;
};

export default Editor;
