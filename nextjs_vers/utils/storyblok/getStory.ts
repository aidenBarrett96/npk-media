import { useState, useEffect } from 'react'
import {storyblok} from './storyblok'
import {storyblokStory} from '../../types/storyblok'

// Hook to get a story and manage it within local state
export const useGetStory = (slug: string): storyblokStory | null => {
  // Hold the current story in hook state
  const [story, setStory] = useState(null)

//   Load the story on mount
  useEffect(() => {
    loadStory()
  }, [])

  // Function to load a story
  const loadStory = async () => {
    //   Query for the story
    const res = await storyblok.get(`cdn/stories/${slug}`, {
        version: 'draft'
    }) 

    if(!res || !res?.data?.story) return // Guard clause

    // Set the story within state
    setStory(res.data.story)
    }

    return story
}

