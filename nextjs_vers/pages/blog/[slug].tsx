import Layout from "../../layout/layout"
import { storyblok } from "../../utils/storyblok/storyblok"
import SingleBlog from "../../components/utilities/blog/singleBlog/singleBlog"
import style from './blog.module.scss'
import SeoSingleBlog from "../../components/utilities/seo/seoSingleBlog"


const BlogRoute = ({ data: story, blogsArr }) => {
  if(!story) return null
  const {...rest} = story 

  return (
    <>
      <SeoSingleBlog 
        title={rest.name}
        intro={rest.content.intro}
        image={rest.content.image.filename}
        pubDate={rest.created_at}
        editDate={rest.published_at}   
        slug={rest.slug} 
        author={rest.content.author}
        tags={rest.content.tags}
      />
      <Layout>
        <div className={style.pageWrap}>
          <SingleBlog position={rest.position} content={rest.content} stories={blogsArr.data.stories}/>
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

  const paths = stories.map(({slug}) => (
    {
      params: {
        slug
      }
    }
  ))
console.log('thepaths', paths)
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