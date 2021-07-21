import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { useBlog } from '../../blogHooks/useBlog'
import { usePagination } from '../../blogHooks/usePagination'
import style from './pagination.module.scss'



interface PageNumbersProps {
  currentPage: number
  totalPages: number
  changePage,
  scrollTop?: () => void,
  previousPage: () => void,
  nextPage: () => void,
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const PageNumbers:FC<PageNumbersProps> = ({
    currentPage,
    totalPages,
    changePage, 
    previousPage,
    nextPage,
  }) => {
  


  const {initialPageNums, updatedPageNums} = usePagination({ currentPage, totalPages })


  return (
    <nav role="navigation" aria-label="Blog pagination" className={style.pagination}>
      <button 
        onClick={() => previousPage()}
        className={`${style.pageBtn} ${style.btnPrevious}`}
      >
        PREVIOUS
      </button>

      <div className={style.btnsWrap}>
        {!updatedPageNums.includes(initialPageNums[0])
            ? <button disabled className={style.ellipses}>&#8230;</button>
            : null
          }
        <ul>
          {updatedPageNums.map(page => (
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

        {initialPageNums.length !> updatedPageNums.length && !updatedPageNums.includes(initialPageNums.length)
          ? <button disabled className={style.ellipses}>&#8230;</button>
          : null
        }
      </div>
          
      <button 
        onClick={() => nextPage()}
        className={`${style.pageBtn} ${style.btnNext}`}
      >
        NEXT
      </button>
    </nav>
  )
}

export default PageNumbers

// totalPages > 3 && newPageNums[1] < lastBlog -1