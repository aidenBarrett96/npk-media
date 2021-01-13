import React, {createElement, FC} from 'react'
import AnimatedStory from './utilities/animatedStory/animatedStory'
import ComponentNotFound from './misc/componentNotFound/componentNotFound'
import {storyblokComponent} from '../types/storyblok'

const componentList = {
    'animated_story': AnimatedStory
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
