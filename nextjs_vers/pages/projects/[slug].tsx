import Layout from "../../components/layout/Layout"
import { storyblok } from "../../utils/storyblok/storyblok"

const ProjectsPages = ({ data: story }) => {
  if(!story) return null
  const {...rest} = story

  return (
    <Layout>
      <h1>A single dynamic project page</h1>
      <h2>{rest.name}</h2>
      {/* all relevant data loaded with getStaticProps to build out the page soon */}
    </Layout>
  )
}
export default ProjectsPages



// query cms for all stories in 
export async function getStaticPaths() {
  const res = await storyblok.get('cdn/stories?starts_with=projects/', { 
    version: 'draft',
    filter_query:{ 
     component: { 
       eq: 'page' 
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
    // console.log(paths)
    console.log({stories})
  return {
    paths,
    fallback: false
  }
}

// get project data from cms by slug
export async function getStaticProps({ params }) {
  const res = await storyblok.get(`cdn/stories/projects/${params.slug}`, {version: 'draft'})
  return {
    props: {
      data: res?.data?.story
    }
  }
}