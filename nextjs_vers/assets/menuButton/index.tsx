import React from 'react';
import compStyle from './menuButton.module.scss';
import { Lottie } from '@crello/react-lottie';
import animationData from '../../assets/header/animations/menu-closed-icon.json';

// Menu button for header
const MenuButton = ({ open, setOpen }) => {
	const animConfig = {
		animationData: animationData,
		loop: false,
		autoplay: true,
	};
	return (
		<button
			className={compStyle.wrapper}
			onClick={() => setOpen(open ? false : true)}>
			<Lottie
				className={compStyle.anim}
				height={200}
				width={200}
				config={animConfig}
				direction={open ? 1 : -1}
				speed={2.25}
			/>
		</button>
	);
};

export default MenuButton;
