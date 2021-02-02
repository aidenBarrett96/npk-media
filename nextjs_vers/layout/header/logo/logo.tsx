import React, { useState } from 'react';
import animationData from '../../../assets/header/animations/mainLogoHover.json';
import Lottie from 'react-lottie';
import style from './logo.module.scss';

const animConfig = {
	animationData: animationData,
	loop: false,
	autoplay: false,
};

export default function Logo(){
	const [direction, setDirection] = useState(-1);

	return (
		<span
			onPointerOver={() => setDirection(1)}
			onPointerOut={() => setDirection(-1)}
			className={style.container}>
			<Lottie 
				options={animConfig}
				height={80}
				width={200}
				direction={direction}
				className={style.anim}
      />  
		</span>
	);
};
