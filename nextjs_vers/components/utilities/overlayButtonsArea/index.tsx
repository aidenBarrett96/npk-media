import React from 'react';
import cStyle from './overlayButtonsArea.module.scss';
import Button from '../button';

const OverlayButtonsArea = ({ buttons, children }) => {

	console.log('testing button ..//', buttons)

	return (
		<div className={cStyle.container}>
			<div className={cStyle.body}>{children}</div>
			<div className={cStyle.buttonArea}>
				{buttons.map((button) => (
					<Button
						text={button.text}
						link={button.url.cached_url && button.url.cached_url}
						onClick={button.onClick && button.onClick}
						large={button.large}
					/>
				))}
			</div>
		</div>
	);
};

export default OverlayButtonsArea;

/* Where used: 
1. 
*/