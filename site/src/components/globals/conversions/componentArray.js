import Button from '../../utilities/button';
import ContentWithImages from '../../utilities/contentWithImages';
import ContentWithEmbed from '../../utilities/contentWithEmbed';
import AnimatedStory from '../../utilities/animatedStory';
import RichText from '../../utilities/richText';
import LatestProjects from '../../utilities/latestProjects';
import OtherServices from '../../utilities/otherServices';
import ContactSection from '../../utilities/contactSection';
import CircleLinkWithCaption from '../../utilities/circleLinkWithCaption';

export default [
	{
		name: 'button',
		strapi: 'Strapi_ComponentGeneralCircleLink',
		react: Button,
		props: {
			text: 'text',
			link: 'link',
			large: 'large',
		},
	},
	{
		name: 'content with images',
		strapi: 'Strapi_ComponentProjectContentWithImages',
		react: ContentWithImages,
		props: {
			title: 'title',
			body: 'body',
			media: 'images.images',
			featuredPosition: 'images.featured_position',
			link: 'link',
		},
	},
	{
		name: 'content with embed',
		strapi: 'Strapi_ComponentProjectContentWithEmbed',
		react: ContentWithEmbed,
		props: {
			title: 'title',
			body: 'body',
			embed: 'embed',
			link: 'link',
		},
	},
	{
		name: 'Animated Story',
		strapi: 'Strapi_ComponentGeneralAnimatedStory',
		react: AnimatedStory,
		props: {
			animations: 'animation',
			buttons: 'buttons',
			autoplay: 'autoplay',
		},
	},
	{
		name: 'Rich Text',
		strapi: 'Strapi_ComponentGeneralRichText',
		react: RichText,
		props: {
			body: 'body',
		},
	},
	{
		name: 'Latest Projects',
		strapi: 'Strapi_ComponentGeneralLatestProjects',
		react: LatestProjects,
		props: {
			context: 'category.name',
		},
	},
	{
		name: 'Other Services',
		strapi: 'Strapi_ComponentGeneralOtherServices',
		react: OtherServices,
		props: {
			current: 'category.name',
		},
	},
	{
		name: 'Contact Section',
		strapi: 'Strapi_ComponentGeneralContactSection',
		react: ContactSection,
		props: {
			text: 'text',
		},
	},
	{
		name: 'Circle link with caption',
		strapi: 'Strapi_ComponentGeneralCircleLinkWithCaption',
		react: CircleLinkWithCaption,
		props: {
			text: 'text',
			link: 'link',
		},
	},
];
