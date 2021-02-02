import React, { FC } from 'react';
import cStyle from './animationButtons.module.scss';
import { useSpring, animated } from 'react-spring';
import Button from '../../button/button';


const AnimationButtons = ({ buttons, animationProgress }) => {
	console.log('buttons', buttons)
	// entrance animation using react spring, shows the buttons if the animation stage is greater than or equal to the provided button entry stage
	const spring = useSpring({
		opacity: buttons.entryStage > animationProgress ? 0 : 1,
		pointerEvents: buttons.entryStage > animationProgress ? 'none' : 'all',
	});
	return (
		<div className={cStyle.container}>
			{buttons.map((button) => (
				<animated.span style={spring} key={button.text}>
					<Button
						text={button.text}
						link={button.url && button.url.cached_url}
						onClick={button.onClick && button.onClick}
						large={button.large}
					/>
				</animated.span>
			))}
		</div>
	);
};

export default AnimationButtons;
