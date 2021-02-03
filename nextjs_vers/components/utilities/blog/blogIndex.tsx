import { useRef, useState, FC, useEffect } from 'react'
import { storyblok } from '../../../utils/storyblok/storyblok'
import ContactSection from '../contactSection/contactSection'
import BlogCard from './blogCard/blogCard'
import style from './blogIndex.module.scss'
import LatestBlog from './latestBlog/latestBlog'
import PageNumbers from './pageNumbers/pageNumbers'


interface BlogIndexProps {
  content: any,
  perPage: number,
  total: number
}

const BlogIndex:FC<BlogIndexProps> = ({content, perPage, total}) => {

  const [data, setData] = useState(content)             // store content from getStaticProps to state - 'data' gets updated on page change
  const [currentPage, setCurrentPage] = useState(1)     // set state of the current page
  const totalPages = Math.ceil(total / perPage)         // total pages available from the cms
  
  // Change page functions
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1)  
  }
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1)
  }

  // Make a new async request from the cms everytime 'currentPage' is updated
  useEffect(() => {
    const getNewPageData = async () => {
      const newPageData = await storyblok.get(`cdn/stories/?per_page=3&page=${currentPage}&starts_with=blog/`, { version: 'draft' })
      setData(newPageData.data.stories)
    }
    getNewPageData()
  }, [currentPage])

  return (
    <>
      <LatestBlog latestBlog={data[0]}/> 
      <section className={style.allBlogs} id="mainBlogContent">
        <h2>Latest Articles</h2>
        <div className={style.blogsGrid}>
        <BlogCard currentBlogs={data.slice(1)}/>
          <div className={style.pageBtns}>
            <PageNumbers 
              totalPages={totalPages}
              changePage={changePage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </div>
        </div>
      </section>
      <ContactSection text="Want to work with us?"/>
    </>
  ) 
}
export default BlogIndex