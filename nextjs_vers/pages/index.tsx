import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import StoryblokService from '../utils/storyblok-service'

const HomePage = ({ data }) => {

  const [story, setStory] = useState(data)

  console.log(story)


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
export async function getStaticProps({ query }) {

  StoryblokService.setQuery(query)

  const res = await StoryblokService.get('cdn/stories/home', {})

  return {
    props: {
      data: res
    }
  }
  
}

