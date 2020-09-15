import * as React from 'react';
import { IStoryblokComponent } from '../../types/storyblok';

const ComponentNotFound: React.FC<IStoryblokComponent> = ({ blok }) => (
	<div style={{ border: '1px solid black', padding: '24px', margin: '40px 0' }}>
		Component {blok.component} is not defined. Add it to components.js
	</div>
);

export default ComponentNotFound;
