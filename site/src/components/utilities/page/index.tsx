import * as React from 'react';
import { IStoryblokComponent } from '../../../types/storyblok';
import Components from '..';

const Page: React.FC<IStoryblokComponent> = ({ blok }) => (
	<div style={{ textAlign: 'center' }}>
		{blok.body.map((innerBlok: any) =>
			React.createElement(Components(innerBlok.component), {
				key: innerBlok.uid,
				blok: innerBlok,
			})
		)}
	</div>
);

export default Page;
