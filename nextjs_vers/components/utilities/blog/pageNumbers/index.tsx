import { useEffect, useRef, useState } from 'react'
import { useGetViewportWidth } from '../../../../hooks/viewport'
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


// Set new page number array (newPageNums) - max 5 in array for desktop, 3 for mobile.
// On page change, shift the new array forward/backwards.
 
  // Store the last position value in the array of page numbers
  const lastBlog = pageNums.length;

  // Set a new page numbers array in state.
  const [newPageNums, setNewPageNums] = useState(pageNums) 
  const pageBreakPoint = useGetViewportWidth();
  


/* **********************************************************************
Need to create another for 2 per page + elipses for tiny phones
*************************************************************************/
  // Change from showing 3 page buttons on mobile or 5 on desktop
  useEffect(() => {
    if (pageBreakPoint.width && pageBreakPoint.width < 960) {
      setNewPageNums(pageNums.slice(0, 3))
    } else if (pageBreakPoint.width && pageBreakPoint.width > 960) {
      setNewPageNums(pageNums.slice(0, 5))
    } 
  }, [pageBreakPoint.width])
  

  useEffect(() => {
    // Shift through page numbers on mobile. Always only shows 3 numbers in the array
    if (pageBreakPoint.width && pageBreakPoint.width < 960 && pageNums.length > 3) {
      if (currentPage === 1) {
          const truncated = pageNums.slice(currentPage - 1, currentPage + 2)
          setNewPageNums(truncated)
      } else if (currentPage === 3) {
          const truncated = pageNums.slice(currentPage - 3, currentPage)
          setNewPageNums(truncated)
      } else if (currentPage < lastBlog && currentPage > 3) {
          const truncated = pageNums.slice(currentPage - 2, currentPage + 1)
          setNewPageNums(truncated)
      } else if (currentPage === lastBlog - 1) {
          const truncated = pageNums.slice(currentPage - 2, currentPage + 1)
          setNewPageNums(truncated)
      } else if (currentPage === lastBlog) {
          const truncated = pageNums.slice(currentPage - 3, lastBlog)
          setNewPageNums(truncated)
      }
    }

    // Shift through page numbers on desktop. Always only shows 5 numbers in the array
    else if(pageBreakPoint.width && pageBreakPoint.width > 960 && pageNums.length > 5) {
      if (currentPage === 1) {
          const truncated = pageNums.slice(currentPage - 1, currentPage + 4)
          setNewPageNums(truncated)
      } else if (currentPage === 5) {
          const truncated = pageNums.slice(currentPage - 5, currentPage)
          setNewPageNums(truncated)
      } else if (currentPage < lastBlog && currentPage > 5 && currentPage != lastBlog - 1) {
          const truncated = pageNums.slice(currentPage - 3, currentPage + 2)
          setNewPageNums(truncated)
      } else if (currentPage === lastBlog - 1) {
          const truncated = pageNums.slice(currentPage - 4, currentPage + 1)
          setNewPageNums(truncated)
      } else if (currentPage === lastBlog) {
          const truncated = pageNums.slice(currentPage - 5, lastBlog)
          setNewPageNums(truncated)
      }
    }
  }, [currentPage])


  console.log('theres ', pageNums.length, ' pages with ', blogsPerPage, 'per page (- featured)')

  return (
    <nav role="navigation" aria-label="Blog pagination" className={style.pagination}>
      <button 
        onClick={() => previousPage()}
        className={style.pageBtn}
      >
        PREVIOUS
      </button>

      <div className={style.btnsWrap}>
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

        {pageNums.length !> newPageNums.length && !newPageNums.includes(lastBlog)
          ? <button disabled className={style.ellipses}>&#8230;</button>
          : null
        }
      </div>
          
      <button 
        onClick={() => nextPage()}
        className={style.pageBtn}
      >
        NEXT
      </button>
    </nav>
  )
}

export default PageNumbers

// totalPages > 3 && newPageNums[1] < lastBlog -1