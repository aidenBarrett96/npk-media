import React, {FC} from 'react'
import {useGetBridge} from '../utils/storyblok/getBridge'

const EditorPage: FC = () => {
    // Load the story using the get bridge hook
    const story = useGetBridge()
    return story
}

export default EditorPage