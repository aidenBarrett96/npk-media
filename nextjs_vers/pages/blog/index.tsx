import Head from "next/head"
import BlogIndex from "../../components/page-specific/blog/index/blogIndex"
import Layout from "../../layout/layout"
import { storyblokStory } from "../../types/storyblok"
import { storyblok } from "../../utils/storyblok/storyblok"
import style from './blog.module.scss'


/* *******************************************************************************************************************
      set per_page in the get request below and components/utilities/blog/blogIndex for the page changes
*********************************************************************************************************************** */


const BlogPage = ({ data: story}) => {
  const {...rest}: storyblokStory = story

  return (
    <>
      <Head>
        <title>NPK Media Blog</title>
      </Head>
      <Layout>      
        <div className={style.pageWrap}>
          <BlogIndex 
            content={story.data.stories}
            perPage={story.perPage}
            total={story.total}
          />
        </div>
      </Layout>
    </>
  )
}
export default BlogPage


// get all blogs data
export async function getStaticProps() {
  // initial array of blogs to show
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/&per_page=3&page=1', { version: 'draft' })
  return {
    props: {
      data: allBlogs,
    }
  }
}
