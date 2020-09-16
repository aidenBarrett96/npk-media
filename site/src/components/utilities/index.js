import ComponentNotFound from './component-not-found';
import AnimatedStory from './animatedStory';
import RichText from './richText';
import CircleLinkWithCaption from './circleLinkWithCaption';
import OtherServices from './otherServices';
import FeaturedProjects from './featured-projects';
import { FeaturedImage } from './hero';
import TeamMembers from './team-members';

const ComponentList = {
	componentNotFound: ComponentNotFound,
	animated_story: AnimatedStory,
	rich_text: RichText,
	link_section: CircleLinkWithCaption,
	other_services: OtherServices,
	featured_projects: FeaturedProjects,
	featured_image: FeaturedImage,
	team_members: TeamMembers,
};

const Components = (type) => {
	if (typeof ComponentList[type] === 'undefined') {
		return ComponentNotFound;
	}
	return ComponentList[type];
};

export default Components;
