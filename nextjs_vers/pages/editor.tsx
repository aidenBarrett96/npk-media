import React, {FC} from 'react'
import {useGetBridge} from '../utils/storyblok/getBridge'
	//@ts-ignore
const EditorPage: FC = () => {
    // Load the story using the get bridge hook
    const story = useGetBridge()
    return story
}

export default EditorPage