import { FC, useRef } from 'react'
import ContactSection from '../../../utilities/contactSection/contactSection'
import { useBlog } from '../blogHooks/useBlog'
import AllBlogsGrid from './allBlogsGrid/allBlogsGrid'
import style from './blogIndex.module.scss'
import HeroBlog from './heroBlog/heroBlog'
import Pagination from './pagination/pagination'


interface BlogIndexProps {
  content: any,
  perPage: number,
  total: number
}

const BlogIndex:FC<BlogIndexProps> = ({content, perPage, total}) => {
  const totalPages = Math.ceil(total / perPage)         // total pages available from the cms

  const {currentPage, setCurrentPage, currentBlogs, changePage, nextPage, previousPage} = useBlog({content, totalPages})
  
  
  return (
    <>
      <HeroBlog firstBlog={currentBlogs[0]} /> 
      <section className={style.allBlogs} id="mainBlogContent">
        <div className={style.left}>
          <h3>Latest Articles</h3>
        </div>
        <div className={style.blogsGrid}>
        <AllBlogsGrid allBlogs={currentBlogs.slice(1)}/>
          <div className={style.pageBtns}>
            <Pagination 
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