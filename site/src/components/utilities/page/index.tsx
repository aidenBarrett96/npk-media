import * as React from 'react';
import { IStoryblokComponent } from '../../../types/storyblok';
import Components from '..';

const Page: React.FC<IStoryblokComponent> = ({ blok }) => (
	<div>
		{blok.body.map((innerBlok: any) => (
			<section>
				{React.createElement(Components(innerBlok.component), {
					key: innerBlok.uid,
					blok: innerBlok,
				})}
			</section>
		))}
	</div>
);

export default Page;
