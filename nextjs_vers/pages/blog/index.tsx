import Link from "next/link"
import Layout from "../../components/layout/Layout"
import { storyblok } from "../../utils/storyblok/storyblok"

const BlogPage = ({ data: story }) => {
  if(!story) return null
  const {...rest} = story

  // console.log(rest.data)
  return (
    <Layout>
      <div>
        blog page
        <hr/>

        {rest.data.stories.map((link) => (
          <div key={link.name}>
            <Link href={`/blog/${link.slug}`}><a>{link.name}</a></Link>
          </div>
        ))}

        <hr/>
      </div>
    </Layout>
  )
}

export default BlogPage


// get all blogs
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
    <div>
      <p>test map</p>
      {console.log(rest)}
    </div>
  ) 
}