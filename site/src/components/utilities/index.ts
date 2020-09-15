import ComponentNotFound from './component-not-found';
import AnimatedStory from './animatedStory';
import RichText from './richText';
import CircleLinkWithCaption from './circleLinkWithCaption';

const ComponentList = {
	componentNotFound: ComponentNotFound,
	animated_story: AnimatedStory,
	rich_text: RichText,
	link_section: CircleLinkWithCaption,
};

const Components = (type: string) => {
	if (typeof ComponentList[type] === 'undefined') {
		return ComponentNotFound;
	}
	return ComponentList[type];
};

export default Components;
