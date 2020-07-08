import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
import t from 'prop-types';
import cStyle from './headings.module.scss';

const conditionalTransform = (relevantStage, stage) => {
	const returnable =
		stage > relevantStage
			? '-100%'
			: stage === relevantStage
			? '0'
			: stage < relevantStage && '100%';
	return returnable;
};

const conditionalOpacity = (relevantStage, stage) => {
	const returnable = stage === relevantStage ? 1 : 0;
	return returnable;
};

// Animation hook
const useAnimation = (relevantStage, stage) => {
	const animation = useSpring({
		transform: `translateX(${conditionalTransform(relevantStage, stage)})`,
		opacity: conditionalOpacity(relevantStage, stage),
	});
	return animation;
};

const Headings = ({ stage }) => {
	// Create the spring animation
	const springOne = useAnimation(1, stage);
	const springTwo = useAnimation(3, stage);

	console.log(typeof stage, typeof 1, typeof 3, typeof 0);

	return (
		<div className={cStyle.wrapper}>
			<animated.h2 style={springOne}>
				We help you communicate what you stand for.
			</animated.h2>
			<animated.h2 style={springTwo}>
				With our expertise in <Link>video</Link>, <Link>websites</Link> and{' '}
				<Link>social media</Link>, we elevate your brand.
			</animated.h2>
		</div>
	);
};

Headings.propTypes = {
	/**
	 * The progress stage that the animation/ story is currently in, this changes the content showing
	 */
	stage: t.number.isRequired,
};

export default Headings;
