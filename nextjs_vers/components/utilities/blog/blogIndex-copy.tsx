import { useRef, useState, FC } from 'react'
import ContactSection from '../contactSection/contactSection'
import BlogCard from './blogCard/blogCard'
import style from './blogIndex.module.scss'
import LatestBlog from './latestBlog/latestBlog'
import PageNumbers from './pageNumbers/pageNumbers'


/**************************************************************
****** Set back to 10 blogs per page before site is live ******
**************************************************************/

interface BlogIndexProps {
  content: any,
  data: object,
}

const BlogIndex:FC<BlogIndexProps> = ({content}) => {
  const {data} = content

  // split array of blogs - latest one for the header and the rest to loop through in the body
  const latestBlog = data.stories[0]
  const allOtherBlogs = data.stories.slice(1)

  // Pagination
    // State for pagination. Default page 1 with 10 blogs per page 
    const [currentPage, setCurrentPage] = useState(1)
    const [blogsPerPage] = useState(3)

    // Set the current page blog posts
    const lastBlogIndex = currentPage * blogsPerPage
    const firstBlogIndex = lastBlogIndex - blogsPerPage
    const currentBlogs = allOtherBlogs.slice(firstBlogIndex, lastBlogIndex)


    // Change page function and scroll to top
    const changePage = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

    // Set reference point of where to scroll up to on page change
    const el = useRef(null)
    // Scroll to ref point el on page button click
    const scrollTop = () => {
      el.current.scrollIntoView({
        behavior: "smooth"
      })
    }
    
  return (
    <>
      <LatestBlog latestBlog={latestBlog}/> 
      <section className={style.allBlogs} id="mainBlogContent" ref={el}>
        <h2>Latest Articles</h2>
        <div className={style.blogsGrid}>
        <BlogCard currentBlogs={currentBlogs}/>
          {/* <div className={style.pageBtns}>
            <PageNumbers 
              blogsPerPage={blogsPerPage}
              allOtherBlogs={allOtherBlogs}
              changePage={changePage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              scrollTop={scrollTop}
            />
          </div> */}
        </div>
      </section>
      <ContactSection text="Want to work with us?"/>
    </>
  ) 
}
export default BlogIndex



/* Where used:
1. blog/index
*/