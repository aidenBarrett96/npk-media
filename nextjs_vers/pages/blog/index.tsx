import Link from "next/link"
import Layout from "../../components/layout/Layout"
import { storyblok } from "../../utils/storyblok/storyblok"

const BlogPage = ({ data: story }) => {
  if(!story) return null

  return (
    <Layout>
      <div>
        blog page
        <hr/>

        <BlogLinks data={story}/>

        <hr/>
      </div>
    </Layout>
  )
}

export default BlogPage


// get all blogs data 
export async function getStaticProps() {
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/', { version: 'draft' })

  return {
    props: {
      data: allBlogs
    }
  }
}


// component to map out the blog urls
const BlogLinks = ({data: story}) => {
  const {...rest} = story

  return (
    <>
        {rest.data.stories.map((link) => (
          <div key={link.name}>
            <Link href={`/blog/${link.slug}`}>
              <a>{link.name}</a>
            </Link>
          </div>
        ))}
    </>
  ) 
}