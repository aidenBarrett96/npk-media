import React, {FC} from 'react'
import style from './editor.module.scss'
import {useGetBridge} from '../utils/storyblok/getBridge'

const EditorPage: FC = () => {
    // Load the story using the get bridge hook
    const story = useGetBridge()
return (
    <h1>Editor</h1>
)
}

export default EditorPage