import StoryblokClient from "storyblok-js-client"

// Initialize the client with the oauth token
export const storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
})
