import React, { useState, useEffect } from 'react'
import SbEditable from 'storyblok-react'
import { useGetStory } from '../components/hooks/getStory'

const ArticlePreview = props => {
  const story = useGetStory()

  const content = story && story.content

  return story ? (
    <SbEditable content={content}>
      <div>
        <h5>Type: {content.component}</h5>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
        <img src={content.image.filename} alt={content.image.alt} />
        <p>{content.long_text.content[0].content[0].text}</p>
      </div>
    </SbEditable>
  ) : (
    <div />
  )
}

export default ArticlePreview
