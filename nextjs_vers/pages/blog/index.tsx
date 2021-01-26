import Link from "next/link"
import BlogIndex from "../../components/utilities/blog/blogIndex"
import Layout from "../../layout/layout"
import { storyblokStory } from "../../types/storyblok"
import { storyblok } from "../../utils/storyblok/storyblok"

const BlogPage = ({ data: story }) => {
  const {...rest}: storyblokStory = story

  return (
    <Layout>
      <BlogIndex content={story}/>
    </Layout>
  )
}

export default BlogPage


// get all blogs data 
export async function getStaticProps() {
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/', { version: 'draft' })

  return {
    props: {
      data: allBlogs
    }
  }
}
