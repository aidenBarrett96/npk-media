import React from 'react';
import cStyle from './otherServices.module.scss';
import t from 'prop-types';
import OverlayButtonsArea from '../overlayButtonsArea';


const OtherServices = (props) => {
	const {buttons, graphic} = props

	return (
		<OverlayButtonsArea buttons={buttons}>
			<div className={cStyle.container}>
				<h2>Other things we do</h2>
				<img src={graphic.filename} alt={graphic.alt} />
			</div>
		</OverlayButtonsArea>
	)
};

OtherServices.propTypes = {
	/**
	 * The service page that is currenly loaded
	 */
	current: t.oneOf(['social media', 'videos', 'websites']),
};

export default OtherServices;
