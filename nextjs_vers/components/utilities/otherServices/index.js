import React from 'react';
import cStyle from './otherServices.module.scss';
import websitesAndSocialMedia from '../../../assets/page-assets/videos/websites-and-social-media.svg';
import videosAndWebsites from '../../../assets/page-assets/social-media/videos-and-websites.svg';
import videosAndSocialMedia from '../../../assets/page-assets/websites/videos-and-social-media.svg';
import t from 'prop-types';
import OverlayButtonsArea from '../overlayButtonsArea';

const useRelevantImage = (service) => {
	const returnable =
		service === 'Videos'
			? websitesAndSocialMedia
			: service === 'Social Media'
			? videosAndWebsites
			: service === 'Websites' && videosAndSocialMedia;
	return returnable;
};

const buttons = {
	websites: {
		text: 'Websites',
		link: '/websites',
		large: false,
	},
	socialMedia: {
		text: 'Social Media',
		link: '/social-media',
		large: false,
	},
	videos: {
		text: 'Videos',
		link: '/videos',
		large: false,
	},
};

const useRelevantButtons = (service) => {
	if (service === 'Videos') return [buttons.websites, buttons.socialMedia];
	if (service === 'Social Media') return [buttons.videos, buttons.websites];
	if (service === 'Websites') return [buttons.videos, buttons.socialMedia];
};

const OtherServices = ({ current }) => (
	<OverlayButtonsArea buttons={useRelevantButtons(current)}>
		<div className={cStyle.container}>
			<h2>Other things we do</h2>
			<img src={useRelevantImage(current)} alt='Other services illustration' />
		</div>
	</OverlayButtonsArea>
);

OtherServices.propTypes = {
	/**
	 * The service page that is currenly loaded
	 */
	current: t.oneOf(['social media', 'videos', 'websites']),
};

export default OtherServices;
