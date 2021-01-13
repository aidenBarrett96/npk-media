import { storyblok } from '../utils/storyblok/storyblok'
import Layout from '../components/layout/layout'
import AnimatedStory from '../components/utilities/animatedStory/animatedStory'
// import RichText from '../components/utilities/richText'
import { render } from 'storyblok-rich-text-react-renderer'
import useAnimation from '../components/useAnimation/useAnimation'
import {Component, ComponentArray} from '../components/components'
import {storyblokComponent} from '../types/storyblok'


const DynamicPage = ({ data: story }) => {
  if(!story) return null
  const { ...rest } = story || {}
  console.log("story", story)

  // filter story to get arrays of data for each component
  // const animations = story?.content?.body[0]?.animations
  const richText = story?.content?.body[1]?.body 
  const animations = useAnimation({story})
  // console.log(animations)

  return (
    <Layout>
      <main>
        <section className="{style.storySection}">
          {/* comment the animated story out and reload page and the animation will show, but then error on page change */}
          {/* <AnimatedStory
            animations={animations}
            autoplay={true}
          /> */}
          <ComponentArray components={story.content.body} />
        </section>

        <section>
          {render(richText)}
        </section>
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
  //   filter_query:{ 
  //     component: { 
  //       in_array: 'animations' 
  //      } 
  //    }
  // })
  }
}


// // page contents
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
