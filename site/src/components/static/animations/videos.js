import React from 'react';
import AnimatedStory from '../../utilities/animatedStory';
import animOneBridge from '../../../assets/page-assets/videos/animations/1-bridge-video.json';
import animTwoLoop from '../../../assets/page-assets/videos/animations/2-loop-video.json';

// Put animations into an array
const animationsArray = [animOneBridge, animTwoLoop];

// Pass array to the animated story component
const VideosAnimation = () => <AnimatedStory animations={animationsArray} />;

export default VideosAnimation;
