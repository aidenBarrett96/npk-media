import React, { useState } from 'react';
import Headings from './headings';
import cStyle from './homeStory.module.scss';
import AnimatedStory from '../../utilities/animatedStory';
import animOne from '../../../assets/page-assets/home/animations/1-bridge-home-split.json';
import animTwo from '../../../assets/page-assets/home/animations/2-bridge-home-split.json';
import animThree from '../../../assets/page-assets/home/animations/3-loop-home.json';

const animations = [animOne, animTwo, animThree];
const animationButtons = {
	entryStage: 1,
	data: [
		{
			text: 'Videos',
			link: '/videos',
			large: false,
		},
		{
			text: 'Websites',
			link: '/websites',
			large: false,
		},
		{
			text: 'Social Media',
			link: '/social-media',
			large: false,
		},
	],
};

const HomeStory = () => {
	const [stage, setStage] = useState(1);
	return (
		<div className={cStyle.container}>
			<div>
				<AnimatedStory
					animations={animations}
					buttons={animationButtons}
					autoplay={true}
				/>
			</div>
		</div>
	);
};

export default HomeStory;
