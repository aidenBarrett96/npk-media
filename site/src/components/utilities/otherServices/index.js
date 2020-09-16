import React from 'react';
import cStyle from './otherServices.module.scss';
import websitesAndSocialMedia from '../../../assets/page-assets/videos/websites-and-social-media.svg';
import videosAndWebsites from '../../../assets/page-assets/social-media/videos-and-websites.svg';
import videosAndSocialMedia from '../../../assets/page-assets/websites/videos-and-social-media.svg';
import t from 'prop-types';
import OverlayButtonsArea from '../overlayButtonsArea';
import SbEditable from 'storyblok-react';

const OtherServices = ({ blok }) => {
	console.log('blok :>> ', blok);
	return (
		<SbEditable content={blok}>
			<OverlayButtonsArea buttons={blok.buttons}>
				<div className={cStyle.container}>
					<h2>{blok.title}</h2>
					{blok.graphic && (
						<img
							src={blok.graphic.filename}
							alt={
								blok.graphic.alt
									? blok.graphic.alt
									: 'Other services illustration'
							}
						/>
					)}
				</div>
			</OverlayButtonsArea>
		</SbEditable>
	);
};

OtherServices.propTypes = {
	/**
	 * The service page that is currenly loaded
	 */
	current: t.oneOf(['social media', 'videos', 'websites']),
};

export default OtherServices;
