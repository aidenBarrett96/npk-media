import React, { Dispatch, FC, SetStateAction } from 'react';
import style from './menuButton.module.scss';
import Lottie  from 'react-lottie';
import animationData from '../../../assets/header/animations/menu-closed-icon.json';

interface MenuButtonProps {
	open: boolean,
	setOpen: Dispatch<SetStateAction<boolean>>
}


// Menu button for header
const MenuButton: FC<MenuButtonProps> = ({ open, setOpen }) => {
	const animConfig = {
		animationData: animationData,
		loop: false,
		autoplay: false,
	};
	return (
		<button
			className={style.wrapper}
			onClick={() => setOpen(open ? false : true)}>
			<Lottie
				className={style.anim}
				height={52}
				width={64}
				options={animConfig}
				direction={open ? 1 : -1}
				speed={2.25}
			/>			
		</button>
	);
};

export default MenuButton;
