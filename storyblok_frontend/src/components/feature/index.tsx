import * as React from 'react'
import { IStoryblokComponent } from '../../types/storyblok'

const Feature: React.FC<IStoryblokComponent> = ({ blok }) => {
  const { name } = blok

  return <div>{name}</div>
}

export default Feature
