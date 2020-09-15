import React, { useState, useEffect } from 'react'

const loadStoryblokBridge = cb => {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${process.env.GATSBY_STORYBLOK_TOKEN}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = val => {
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

export const useGetStory = props => {
  const [story, setStory] = useState(null)

  const loadStory = payload => {
    window.storyblok.get(
      {
        slug: getParam('path'),
        version: 'draft',
      },
      data => {
        setStory(data.story)
      }
    )
  }

  const initStoryblokEvents = () => {
    loadStory({ storyId: getParam('path') })

    let sb = window.storyblok

    sb.on(['change', 'published'], payload => {
      loadStory(payload)
    })

    sb.on('input', payload => {
      if (story && payload.story.id === story.id) {
        setStory(payload.story)
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  useEffect(() => {
    loadStoryblokBridge(() => {
      initStoryblokEvents()
    })
  }, [])

  return story
}
