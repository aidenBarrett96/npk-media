import React from 'react';
import cStyle from './animationButtons.module.scss';
import { useSpring, animated } from 'react-spring';
import Button from '../../button';

const AnimationButtons = ({ buttons, animationProgress, entryStage }) => {
	// entrance animation using react spring, shows the buttons if the animation stage is greater than or equal to the provided button entry stage

	const spring = useSpring({
		opacity: entryStage > animationProgress ? 0 : 1,
		pointerEvents: entryStage > animationProgress ? 'none' : 'all',
	});
	return (
		<div className={cStyle.container}>
			{buttons.map((button) => (
				<animated.span style={spring}>
					<Button
						text={button.text}
						link={button.url && '/' + button.url.cached_url}
						large={button.large}
					/>
				</animated.span>
			))}
		</div>
	);
};

export default AnimationButtons;
