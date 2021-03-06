import SbEditable from "storyblok-react"
import Layout from "../../components/layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"

const BlogRoute = ({ data: story, blok }) => {
  if(!story) return null
  const {...rest} = story

  
  return (
    <Layout>
      {/* <SbEditable content={blok}> */}
        <div>
          <p>A single blog post</p>
          <h1>{rest.content.title}</h1>
          <p>{rest.content.intro}</p>
        </div>
      {/* </SbEditable> */}
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