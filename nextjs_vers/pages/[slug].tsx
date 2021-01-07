import { storyblok } from '../utils/storyblok/storyblok'
import Layout from '../components/layout/Layout'

const DynamicPage = ({ data: story }) => {
  if(!story) return null
  const { ...rest } = story || {}

  return (
    <Layout>
      <p>Dynamic page content</p>
      {console.log(rest)}
    </Layout>
  )
}

export default DynamicPage



export async function getStaticPaths() {  
  const res = await storyblok.get('cdn/stories', {
    version: 'draft',
    filter_query: {
      component: {
        in: 'page'
      }
    }
  })



  const {data: {stories}} = res
  console.log({stories})
  const paths = stories.map(({slug}) => ({
    params: {
      slug
    }
  }))

  console.log('paths', paths)

  return {
    paths,
    fallback: false 
  }
}


// page contents
export async function getStaticProps({ params }) {
  const res = await storyblok.get(`cdn/stories/${params.slug}`, {version: 'draft'})

  return {
    props: {
      data: res?.data?.story
    }
  }

}