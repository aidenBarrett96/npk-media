import React, { useState } from 'react';
import animationData from '../../../assets/header/animations/typemark-hover-black-to-red.json';
import { Lottie } from '@crello/react-lottie';
import style from './logo.module.scss';

const animConfig = {
	animationData: animationData,
	loop: false,
	autoplay: true,
};

export default () => {
	const [direction, setDirection] = useState(-1);

	return (
		<span
			onPointerOver={() => setDirection(1)}
			onPointerOut={() => setDirection(-1)}
			className={style.container}>
			<Lottie
				height={200}
				width={200}
				speed={0.7}
				config={animConfig}
				direction={direction}
				className={style.anim}
			/>
		</span>
	);
};
