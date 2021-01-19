import React, {createElement, FC} from 'react'
import AnimatedStory from './utilities/animatedStory/animatedStory'
import ComponentNotFound from './misc/componentNotFound/componentNotFound'
import {storyblokComponent} from '../types/storyblok'
import LatestProjects from './utilities/latestProjects'
import RichText from './utilities/richText/richText'
import CircleLinkWithCaption from './utilities/circleLinkWithCaption'
import OtherServices from './utilities/otherServices'
import TeamCard from './utilities/teamCard'
import FeaturedImage from './utilities/featuredImage/featuredImage'
import Testimonial from './utilities/testimonial'

const componentList = {
    'animated_story': AnimatedStory,
    'featured_projects': LatestProjects,
    'rich_text': RichText,
    'link_section': CircleLinkWithCaption,
    'other_services': OtherServices,
    'team_members': TeamCard,
    'featured_image': FeaturedImage,
    'testimonial': Testimonial
}

const getComponent = (componentName: string) => {
    return componentList[componentName] || ComponentNotFound
}

interface componentProps {
    component: storyblokComponent
}

export const Component: FC<componentProps> = ({component}) => {
    const {component: componentName, ...rest} = component
    console.log('componentName', componentName)
    return createElement(getComponent(componentName), {component: componentName, ...rest})
}

interface componentArrayProps {
    components: storyblokComponent[]
}

export const ComponentArray: FC<componentArrayProps> = ({components}) => {
    return (
        <>
        {components.map((component) => <Component component={component} key={`bodyComponent_${component._uid}`} />)}
        </>
        )
}
