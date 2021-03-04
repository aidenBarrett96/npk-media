import Layout from "../../layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"
import SingleBlog from "../../components/page-specific/blog/singleBlog/singleBlog"
import style from './blog.module.scss'
import SeoSingleBlog from "../../components/misc/seo/seoSingleBlog"


const BlogRoute = ({ pageContent, blogsArr }) => {
  if(!pageContent) return null
  
  return (
    <>
      <SeoSingleBlog {...pageContent}/>
      <Layout>
        <div className={style.pageWrap}>
          <SingleBlog {...pageContent} {...blogsArr}/>
        </div>
      </Layout>
    </>
  ) 
}

export default BlogRoute


export async function getStaticPaths() {
  const res = await storyblok.get(`cdn/stories/?starts_with=blog/`, {
    version: 'draft',
    filter_query: {
      component: {
        eq: 'post'
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

export async function getStaticProps({ params }) {
  const pageContent = await storyblok.get(`cdn/stories/blog/${params.slug}`, {version: 'draft'})
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/', { version: 'draft' })

  return {
    props: {
      pageContent: pageContent?.data?.story, // The content of the page
      blogsArr: allBlogs?.data      // An array of all blogs - used to navigate to "next blog" on the page by using the current blogs position
    }
  }

}