import React from 'react';
import AnimatedStory from '../../utilities/animatedStory';
import animOneBridge from '../../../assets/page-assets/social-media/animations/1-bridge-social.json';
import animTwoBridge from '../../../assets/page-assets/social-media/animations/2-bridge-social.json';
import animThreeBridge from '../../../assets/page-assets/social-media/animations/3-bridge-social.json';
import animFourLoop from '../../../assets/page-assets/social-media/animations/4-loop-social.json';

// Put animations into an array
const animationsArray = [
	animOneBridge,
	animTwoBridge,
	animThreeBridge,
	animFourLoop,
];

// Pass array to the animated story component
const SocialMediaAnimation = () => (
	<AnimatedStory animations={animationsArray} />
);

export default SocialMediaAnimation;
