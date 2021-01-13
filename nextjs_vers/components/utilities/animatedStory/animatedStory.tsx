import React, { useState, useEffect, useRef } from 'react';
import { Lottie } from '@crello/react-lottie';
import t from 'prop-types';
import cStyle from './animatedStory.module.scss';
import AnimationButtons from './animationButtons';
import Button from '../button';

const getAnimationData = (animation: any) => JSON.parse(animation?.content[0]?.content[0]?.text)

const AnimatedStory = (props) => {
	let { animations, buttons, autoplay } = props


	if (animations[0].data) {
		animations = animations.map(({ data }) => data);
	}


	// Hold the current progress within the state of the component
	const [progress, setProgress] = useState(0);
	// Mirror the state in a reference to be able to access from a built component
	const progressRef = useRef(null);
	progressRef.current = progress;

	// Hold the current playing state within the state of component
	const [playing, setPlaying] = useState('stopped');
	// Mirror the state in a reference to be able to access from a built component
	const playingRef = useRef(null);
	playingRef.current = playing;

	// Hold wether the animation can progress within the state of component
	const [readyToProgress, setReadyToProgress] = useState(false);
	// Mirror the state in a reference to be able to access from a built component
	const rtpRef = useRef(null);
	rtpRef.current = readyToProgress;

	// Hold wether the animation is in the looping stage within the component state
	const [looping, setLooping] = useState(false);
	const loopRef = useRef(null);
	loopRef.current = looping;

	const maxProgress = animations.length - 1;

	const currentAnimation = getAnimationData(animations[progress]);

	// Lottie configuration
	const config = {
		animationData: currentAnimation,
		loop: false,
	};

	// Function to allow progression within the animation, triggered when the current animation has fully played out
	const allowProgress = () => {
		if (progressRef.current < maxProgress) {
			if (autoplay) {
				setProgress(progressRef.current + 1);
			} else {
				setReadyToProgress(true);
			}
		} else {
			// if the max progress has been met then set the playing state to stopped, this enables the animation to be started again
			setPlaying('stopped');
			setLooping(true);
		}
	};

	// Attempt to progress through the animation if the state "readyToProgress" is true, triggered on hover on desktop and on touch/ click on mobile
	const attemptProgress = () => {
		if (loopRef.current) {
			if (playingRef.current === 'stopped') {
				setPlaying('playing'); // If the playing state is set to stopped then we know the animation is on the last step and we can restart it
			} else {
				console.log('not ready');
			}
		} else if (rtpRef.current) {
			setProgress(progressRef.current + 1);
		} else {
			console.log('not ready');
		}
	};

	// Give an initial delay to the animation
	useEffect(() => {
		setTimeout(() => setPlaying('playing'), 300);
	}, []);

	// Dont allow progression mid animation
	useEffect(() => {
		setReadyToProgress(false);
	}, [progress]);

	return (
		<div
			onMouseEnter={attemptProgress}
			onClick={attemptProgress}
			className={cStyle.container}>
			<Lottie
				config={config}
				height='350px'
				width='350px'
				playingState={playing}
				className='lottie-container'
				lottieEventListeners={[
					{
						name: 'complete',
						callback: allowProgress,
					},
				]}
			/>
			{/* Render buttons if provided in props */}
			{buttons && (
				<AnimationButtons buttons={buttons} animationProgress={progress} />
			)}
		</div>
	);
};

AnimatedStory.propTypes = {
	/**
	 * An array of JSON animation objects/ files, in the order they are to be played
	 */
	animations: t.arrayOf(t.object).isRequired,
	/**
	 * An array of buttons in the order to appear left to right, these buttons will show overlayed on the animation slightly
	 */
	buttons: t.arrayOf(t.object),
	/**
	 * Boolean to say wether the animation will progress right through automatically or need manual input
	 */
	autoplay: t.bool,
};

export default AnimatedStory;
