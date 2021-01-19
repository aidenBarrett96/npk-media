import SbEditable from "storyblok-react"
import Layout from "../../layout/layout"
import CircleLinkWithCaption from "../../components/utilities/circleLinkWithCaption"
import { storyblok } from "../../utils/storyblok/storyblok"
import SingleBlog from "../../components/utilities/blog/singleBlog"

const BlogRoute = ({ data: story, blok }) => {
  if(!story) return null
  const {...rest} = story



  return (
    <Layout>
      <SingleBlog rest={rest}/>
        {/* <CircleLinkWithCaption props={story.content.link_section}/> */}
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

  return {
    props: {
      data: res?.data?.story
    }
  }

}