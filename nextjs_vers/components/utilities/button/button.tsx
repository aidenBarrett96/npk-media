import React, { FC } from 'react';
import outerSmall from '../../../assets/buttons/button-70px.svg';
import outerLarge from '../../../assets/buttons/button-90px.svg';
import cStyle from './button.module.scss';
import Link from 'next/link';

interface ButtonProps {
  text?: string;
  link?: any;
  onClick?: () => void;
	large: boolean;
	style?: string
} 

const Button: FC<ButtonProps> = ({ text, link, onClick, large, style }) => {

	
	return (
	<>
		{onClick && (
			<button
				className={large ? cStyle.buttonLarge : cStyle.buttonSmall}
				onClick={onClick}
				style={style}>
				<span>{text}</span>
				<img src={large ? outerLarge : outerSmall} alt='button outline' />
			</button>
		)}
		{link && (
			<Link href={link}>
				<a className={large ? cStyle.buttonLarge : cStyle.buttonSmall} style={style}>
					<span className='button-text__primary'>{text}</span>
					<img src={large ? outerLarge : outerSmall} alt='button outline' />
				</a>
			</Link>
		)}
	</>
)};

export default Button;


/* Where used: 

*/