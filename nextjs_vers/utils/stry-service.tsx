import { useState } from 'react'
import StoryblokClient from 'storyblok-js-client'

const StoryblokService = () => {
  const [devMode] = useState(true)
  const token = process.env.STORYBLOK_API_KEY
  const client = new StoryblokClient({
    accessToken: token,
    cache: {
      clear: 'auto',
      type: 'memory'
    }
  })
  const query = {}


  const getCacheVersion = () => {
    return client.cacheVersion
  }

  




}



