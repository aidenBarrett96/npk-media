import * as React from 'react';
import { IStoryblokComponent } from '../../types/storyblok';

const ComponentNotFound: React.FC<IStoryblokComponent> = ({ blok }) => (
	<div>Component {blok.component} is not defined. Add it to components.js</div>
);

export default ComponentNotFound;
