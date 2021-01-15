import React from 'react';
import cStyle from './overlayButtonsArea.module.scss';
import Button from '../button';
import t from 'prop-types';

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

OverlayButtonsArea.propTypes = {
	/**
	 * An array of the buttons to be inserted below the body
	 */
	buttons: t.arrayOf(t.object).isRequired,
	/**
	 * The body to be under the buttons
	 */
	children: t.node.isRequired,
};

export default OverlayButtonsArea;
