import React from 'react';
import SbEditable from 'storyblok-react';

const Hero = ({ hero }) => (
	<>
		{hero.ext !== '.mp4' ? (
			<img src={`${hero.url}`} alt={hero.alternativeText} />
		) : (
			<video width='320' height='240' autoPlay loop muted>
				<source src={`${hero.url}`} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		)}
	</>
);

export default Hero;

export const FeaturedImage = ({ blok }) => {
	return (
		<SbEditable content={blok}>
			<img
				src={`${blok.image.filename}`}
				alt={blok.image.alt}
				style={{ width: '100%' }}
			/>
		</SbEditable>
	);
};
