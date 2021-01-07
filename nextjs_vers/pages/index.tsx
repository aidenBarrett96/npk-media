import Layout from "../components/layout/Layout"
import StoryblokService from '../utils/storyblok-service'

const HomePage = () => {
  return (
    <Layout>
      <div> 
        Homepage
      </div>
    </Layout>
  )
}
export default HomePage


// Query to get data from cms
export async function getInitialProps({ query }) {
  StoryblokService.setQuery(query)

  let res = await StoryblokService.get('cdn/stories/home', {})

  return {
    res
  }
}