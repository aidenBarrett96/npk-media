import { useEffect, useRef, useState } from 'react'
import style from './page-numbers.module.scss'

const PageNumbers = ({
  currentPage,
  setCurrentPage, 
  allOtherBlogs, 
  blogsPerPage, 
  changePage, 
  scrollTop
}) => {
// will put scrollTop function back in (scrolls to top of page when a next/previous or number button is clicked)
  

  // Calculate total pages
  const totalPages = Math.ceil(allOtherBlogs / blogsPerPage)

  // Create array of page numbers
  const pageNums = []
  for ( let i = 1; i <= totalPages; i++ ) {
    pageNums.push(i)
  }


  // Previous / next page buttons
  const previousPage = () => {
    // Don't reduce current page if on the first page
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1)    
  }
  const nextPage = () => {
    // Don't increase current page if on the last page
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1)
  }


// Reduce the page numbers shown if more than 3 pages in array of pageNums
  // Store the last position value in the array of page numbers
  const lastBlog = pageNums.length;

  // Set a new page numbers array in state.
  const [newPageNums, setnewPageNums] = useState(pageNums) 


  // Change page numbers in array. First 3, middle section and last 2 of the array need seperate rules
  useEffect(() => {
    if (pageNums.length > 3) {

      if (currentPage === 1) {
        const truncated = pageNums.slice(currentPage - 1, currentPage + 2)
        setnewPageNums(truncated)
      }

      if (currentPage === 2) {
        const truncated = pageNums.slice(currentPage - 2, currentPage + 1)
        setnewPageNums(truncated)
      }
      
      if (currentPage === 3) {
        const truncated = pageNums.slice(currentPage - 3, currentPage)
        setnewPageNums(truncated)
      }

      if (currentPage < lastBlog && currentPage > 3) {
        const truncated = pageNums.slice(currentPage - 2, currentPage + 1)
        setnewPageNums(truncated)
      }

      if (currentPage === lastBlog - 1) {
        const truncated = pageNums.slice(currentPage - 2, currentPage + 1)
        setnewPageNums(truncated)
      }

      if (currentPage === lastBlog) {
        const truncated = pageNums.slice(currentPage - 3, lastBlog)
        setnewPageNums(truncated)
      }
  }
  }, [currentPage])
  
  console.log('current page & buttons:', currentPage, newPageNums)



  return (
    <nav role="navigation" aria-label="Blog pagination" className={style.pagination}>
      <button 
        onClick={() => previousPage()}
        className={`${style.pageBtn} ${style.previousBtn}`}
      >
        PREVIOUS
      </button>
      <div>
        {totalPages > 3 && newPageNums[0] > 1
          ? <button disabled className={style.ellipses}>&#8230;</button>
          : null
        }
      </div>

      <div>
        <ul>
          {newPageNums.map(page => (
            <button 
              onClick={() => changePage(page)} 
              key={page}
              className={currentPage === page ? `${style.active}` : ''}
              aria-label={`Page number ${page}`}
            >
              {page}
            </button>
          ))} 
        </ul>
      </div>   

      <div>
        {totalPages > 3 && newPageNums[1] < lastBlog -1
          ? <button disabled className={style.ellipses}>&#8230;</button>
          : null
        }
      </div>
          
      <button 
        onClick={() => nextPage()}
        className={`${style.pageBtn} ${style.nextBtn}`}
      >
        NEXT
      </button>
    </nav>
  )
}

export default PageNumbers