import React from 'react';
import AnimatedStory from '../../utilities/animatedStory';
import animOneBridge from '../../../assets/page-assets/websites/animations/1-bridge-web.json';
import animTwoBridge from '../../../assets/page-assets/websites/animations/2-bridge-web.json';
import animThreeBridge from '../../../assets/page-assets/websites/animations/3-bridge-web.json';
import animFourBridge from '../../../assets/page-assets/websites/animations/4-bridge-web.json';
import animFiveLoop from '../../../assets/page-assets/websites/animations/5-loop-web.json';

// Put animations into an array
const animationsArray = [
	animOneBridge,
	animTwoBridge,
	animThreeBridge,
	animFourBridge,
	animFiveLoop,
];

// Pass array to the animated story component
const WebsitesAnimation = () => <AnimatedStory animations={animationsArray} />;

export default WebsitesAnimation;
