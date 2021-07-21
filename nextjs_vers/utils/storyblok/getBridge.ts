import { useState, useEffect } from 'react'
import {storyblokStory} from '../../types/storyblok'

const loadStoryblokBridge = (cb: () => void) => {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${process.env.STORYBLOK_API_KEY}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = (val: string) => {
  var result = ''
  var tmp = []

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function(item) {
      tmp = item.split('=')
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

export const useGetBridge = (): storyblokStory  => {
  // Hold the current story in hook state
  const [story, setStory] = useState(null)

  // Function to load a story
  const loadStory = () => {
    // @ts-ignore
    window.storyblok.get(
      {
        slug: getParam('path'),
        version: 'draft',
      },
      (data: any) => {
        setStory(data.story)
      }
    )
  }

  const initStoryblokEvents = () => {
    // Load a story
    loadStory()
    /* @ts-ignore */
    let sb = window.storyblok

    // Reload the page on save if in editor
    sb.on(['change', 'published'], () => {
      loadStory()
    })

    // If in editor enable editor mode
    sb.pingEditor(() => {
      /* @ts-ignore */
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  // Load in a story on mount
  useEffect(() => {
    loadStoryblokBridge(() => {
      initStoryblokEvents()
    })
  }, [])

  return story
}
