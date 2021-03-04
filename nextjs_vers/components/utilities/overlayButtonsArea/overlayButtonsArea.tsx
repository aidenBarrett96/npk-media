import React, {FC} from 'react';
import style from './overlayButtonsArea.module.scss';
import Button from '../button/button';

interface OverlayButtonsAreaProps {
	buttons: Array<any>
	children: any
}


const OverlayButtonsArea:FC<OverlayButtonsAreaProps> = ({ buttons, children }) => {
	return (
		<div className={style.container}>
			<div className={style.body}>{children}</div>
			<div className={style.buttonArea}>
				{buttons.map((button) => (
					<Button
						text={button.text}
						link={button.url.cached_url && button.url.cached_url}
						onClick={button.onClick && button.onClick}
						large={button.large}
						key={button.text}
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