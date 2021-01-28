import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ContactSection from '../contactSection'
import style from './blogIndex.module.scss'
import PageNumbers from './pageNumbers/index'


/**************************************************************
****** Set back to 10 blogs per page before site is live ******
**************************************************************/


const BlogIndex = ({content}) => {
  const {data} = content
  
  console.log(data)

  // split array of blogs - latest one for the header and the rest to loop through in the body
  const latestBlog = data.stories[0]
  const allOtherBlogs = data.stories.slice(1)

  // Pagination
    // State for pagination. Default page 1 with 10 blogs per page 
    const [currentPage, setCurrentPage] = useState(1)
    const [blogsPerPage] = useState(1)

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
    <section className={style.blogMain}>
      <Link href={`/blog/${latestBlog.slug}`}>
        <a>
          <section className={style.hero}>
            <div className={style.latestBlog}>
              <p>{latestBlog.content.tags}</p>
              <h1>{latestBlog.name}</h1> 
            </div>
          </section>
        </a>
      </Link>
    </section>

   

    <section className={style.allBlogs} id="mainBlogContent" ref={el}>
      <h2>Latest Articles</h2>
      <div className={style.blogsGrid}>
        {currentBlogs.map((blog) => (
          <div key={blog.name} className={style.blog}>
            <p className={style.tags}>{blog.content.tags}</p>
            <Link href={`/blog/${blog.slug}`}>
              <a><h3>{blog.name}</h3></a>
            </Link>
            <p>
              Written by {blog.content.author || 'someone at NPK Media'} on {/* */} 
              {
                new Date(blog.created_at)
                .toDateString()
              }
            </p>
          </div>
        ))}

        <div className={style.pageBtns}>
          <PageNumbers 
            blogsPerPage={blogsPerPage}
            allOtherBlogs={allOtherBlogs.length}
            changePage={changePage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            scrollTop={scrollTop}
          />
        </div>
      </div>
    </section>
    <ContactSection 
        text="Want to work with us?"
      />
    </>
  ) 
}
export default BlogIndex



/* Where used:
1. blog/index
*/