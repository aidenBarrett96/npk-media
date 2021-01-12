import { storyblok } from '../utils/storyblok/storyblok'
import Layout from '../components/layout/layout'
import AnimatedStory from '../components/utilities/animatedStory'



const DynamicPage = ({ data: story, animations }) => {
  if(!story) return null
  const { ...rest } = story || {}


  {console.log(story)}
  return (
    <Layout>
      <main>
        {/* <AnimatedStory
          animations={story.content.body.animations}
        /> */}
      </main>
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
  const paths = stories.map(({slug}) => ({
    params: {
      slug
    }
  }))


  return {
    paths,
    fallback: false 
  }
}


// page contents
export async function getStaticProps({ params }) {
  const res = await storyblok.get(`cdn/stories/${params.slug}`, {version: 'draft'})
  const animations = await storyblok.get(`cdn/stories/${params.slug}`, 
  {
    version: 'draft',
    filter_query:{ 
      component: { 
        in: 'animations' 
       } 
     }
  })


  return {
    props: {
      data: res?.data?.story,
      animations: animations?.data?.story.content.body
    }
  }

}