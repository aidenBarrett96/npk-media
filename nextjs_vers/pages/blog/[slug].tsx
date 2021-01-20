import Layout from "../../layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"
import SingleBlog from "../../components/utilities/blog/singleBlog"

const BlogRoute = ({ data: story, blogsArr }) => {
  if(!story) return null
  const {...rest} = story

  return (
    <Layout>
      <SingleBlog rest={rest} blogsArr={blogsArr}/>
    </Layout>
  )
}

export default BlogRoute


export async function getStaticPaths() {
  const res = await storyblok.get(`cdn/stories`, {
    version: 'draft',
    filter_query:{
      component: {
        eq: 'post'
      }
    }
  })


  const {data: {stories}} = res

  const paths = stories.map(({slug}) => (
    {
      params: {
        slug
      }
    }
  ))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await storyblok.get(`cdn/stories/blog/${params.slug}`, {version: 'draft'})
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/', { version: 'draft' })

  return {
    props: {
      data: res?.data?.story,
      blogsArr: allBlogs
    }
  }

}