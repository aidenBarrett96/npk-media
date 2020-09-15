import React from 'react'
import { IStoryblokComponent } from '../../types/storyblok'

const Teaser: React.FC<IStoryblokComponent> = ({ blok }) => {
  const { headline } = blok

  return <div>{headline}</div>
}

export default Teaser
