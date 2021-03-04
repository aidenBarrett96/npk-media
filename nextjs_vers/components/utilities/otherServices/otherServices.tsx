import React, {FC} from 'react';
import style from './otherServices.module.scss';
import OverlayButtonsArea from '../overlayButtonsArea/overlayButtonsArea';

interface OtherServicesProps {
	buttons: Array<any>
	graphic: {
		filename: string,
		alt: string
	}
}

const OtherServices:FC<OtherServicesProps> = ({buttons, graphic}) => {
	return (
		<OverlayButtonsArea buttons={buttons}>
			<div className={style.container}>
				<h2>Other things we do</h2>
				<img src={graphic.filename} alt={graphic.alt} />
			</div>
		</OverlayButtonsArea>
	)
};

export default OtherServices;



/* Where used: 
1. videos, websites and social media - in components.tsx
*/