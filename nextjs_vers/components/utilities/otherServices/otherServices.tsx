import React, {FC} from 'react';
import cStyle from './otherServices.module.scss';
import OverlayButtonsArea from '../overlayButtonsArea/overlayButtonsArea';

interface OtherServicesProps {

}

const OtherServices:FC<OtherServicesProps> = ({buttons, graphic}) => {
	return (
		<OverlayButtonsArea buttons={buttons}>
			<div className={cStyle.container}>
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