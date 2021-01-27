import Link from "next/link"
import BlogIndex from "../../components/utilities/blog/blogIndex"
import Layout from "../../layout/layout"
import { storyblokStory } from "../../types/storyblok"
import { storyblok } from "../../utils/storyblok/storyblok"

const BlogPage = ({ data: story , testData}) => {
  const {...rest}: storyblokStory = story

  console.log('testing', testData)
  return (
    <Layout>
      <BlogIndex content={story}/>
    </Layout>
  )
}

export default BlogPage


// get all blogs data 
export async function getStaticProps({ params }) {
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/', { version: 'draft' })
  const testRoute = await storyblok.get(`cdn/stories/?per_page=3&page={1}&starts_with=blog/`, { version: 'draft' })


  return {
    props: {
      data: allBlogs,
      testData: testRoute
    }
  }
}
