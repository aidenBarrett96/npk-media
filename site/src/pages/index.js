import React from 'react';
import Layout from '../components/layout';
import HomeStory from '../components/static/homeStory';
import LatestProjects from '../components/utilities/latestProjects';
import Button from '../components/utilities/button';
import pStyle from './homepage.module.scss';
import { Link } from 'gatsby';
import AnimatedStory from '../components/utilities/animatedStory';
import animOne from '../assets/page-assets/home/animations/1-bridge-home-split.json';
import animTwo from '../assets/page-assets/home/animations/2-bridge-home-split.json';
import animThree from '../assets/page-assets/home/animations/3-loop-home.json';
import ContactSection from '../components/utilities/contactSection';
import CircleLinkWithCaption from '../components/utilities/circleLinkWithCaption';

const animations = [animOne, animTwo, animThree];
const animationButtons = {
	entryStage: 1,
	data: [
		{
			text: 'Videos',
			link: '/videos',
			large: false,
		},
		{
			text: 'Websites',
			link: '/websites',
			large: false,
		},
		{
			text: 'Social Media',
			link: '/social-media',
			large: false,
		},
	],
};

//Home page
export const IndexPage = () => <div>Hello world!</div>;

/* (
	<Layout>
		{/* Main story section 
		<section className={pStyle.storySection}>
			<h1>
				We elevate your brand with our expertise in{' '}
				<Link to='/videos'>video</Link>, <Link to='/websites'>websites</Link>{' '}
				and <Link to='/social-media'>social media</Link>.
			</h1>
			<AnimatedStory
				animations={animations}
				buttons={animationButtons}
				autoplay={true}
			/>
		</section>

		{/* Latest projects section 
		<section>
			<LatestProjects />
		</section>

		{/* Contact us section 
		<section>
			<CircleLinkWithCaption
				text='Know what you want?'
				link={{
					url: '/contact',
					text: 'Get in touch',
					large: true,
				}}
			/>
		</section>
	</Layout>
);
 */
export default IndexPage;
