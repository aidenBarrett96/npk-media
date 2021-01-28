import { storyblok } from '../utils/storyblok/storyblok'
import Layout from '../layout/layout'
import { ComponentArray } from '../components/components'
import style from './slug.module.scss'

const DynamicPage = ({ data: story }) => {
  if(!story) return null
  const { ...rest } = story || {}


  return (
    <Layout>
      <div className={style.pageWrap}>
        <section className={style.dynamicContent}>
          <ComponentArray components={story.content.body} />
        </section>
      </div>
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
  // const animations = await storyblok.get(`cdn/stories/${params.slug}`, 
  // {
  //   version: 'draft',
  //   filter_query:{ 
  //     component: { 
  //       in: 'animations' 
  //      } 
  //    }
  // })

  return {
    props: {
      data: res?.data?.story,
      // animations: animations?.data?.story.content.body
    }
  }
}
