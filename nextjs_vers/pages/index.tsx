import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import {storyblok} from '../utils/storyblok/storyblok'
import {storyblokStory} from '../types/storyblok'

const HomePage = ({ data: story }) => {
// Set the type for the story and extract nessesary data
  const {...rest}: storyblokStory = story

  // Log out the results

  // console.log(rest)
  return (
    <Layout>
      <div> 
        Homepage
        <br/>
      </div>
    </Layout>
  )
}
export default HomePage

// Query to get data from cms
export const getStaticProps = async () => {
  // Query for data
  const res = await storyblok.get('cdn/stories/home', {version: 'draft'})

  return {
    props: {
      data: res.data.story
    }
  }
}

