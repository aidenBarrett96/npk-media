import Link from "next/link"
import { useState } from "react"
import BlogIndex from "../../components/utilities/blog/blogIndex"
import Layout from "../../layout/layout"
import { storyblokStory } from "../../types/storyblok"
import { storyblok } from "../../utils/storyblok/storyblok"
import style from './blog.module.scss'

// export async function getServerSideProps() {
//     const testRoute = await storyblok.get(`cdn/stories/?starts_with=blog/`, { version: 'draft' })
//     return {
//       props: {
//         dataaa: testRoute
//       }
//     }
//   }


const BlogPage = ({ data: story}) => {
  const {...rest}: storyblokStory = story
  console.log('testing', rest)


  const [page, setPage] = useState(1)




  return (
    <Layout>      
      <div className={style.pageWrap}>
        {/* <div style={{marginTop: '150px'}}>
          <button>Test</button>
        </div> */}
        <BlogIndex content={rest}/>
      </div>
    </Layout>
  )
}

export default BlogPage


// get all blogs data 
export async function getStaticProps( {} ) {
  const allBlogs = await storyblok.get('cdn/stories/?starts_with=blog/', { version: 'draft' })
  // const testRoute = await storyblok.get(`cdn/stories/?per_page=${page}&page=4&starts_with=blog/`, { version: 'draft' })


  return {
    props: {
      data: allBlogs,
      // testData: testRoute
    }
  }
}
