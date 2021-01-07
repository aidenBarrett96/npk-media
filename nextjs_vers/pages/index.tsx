import { useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import StoryblokService from '../utils/storyblok-service'

const HomePage = ({res}) => {

  const [content, setContent] = useState([])

  useEffect(() => {
    async function getContent() {
      const res = await StoryblokService.get('cdn/stories/home', {})
      setContent([res])
    }
    getContent()
  }, [])

  return (
    <Layout>
      <div> 
        Homepage
        <br/>
        {console.log(content)}
      </div>
    </Layout>
  )
}
export default HomePage


// Query to get data from cms
// export async function getInitialProps({ query }) {

//   StoryblokService.setQuery(query)

//   let res = await StoryblokService.get('cdn/stories/home', {})

//   return {
//     res
//   }

  
// }


