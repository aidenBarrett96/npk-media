import { useEffect, useLayoutEffect, useState } from 'react'
import { useGetViewportWidth } from '../../../../hooks/viewport'

export const usePagination = ({ currentPage, totalPages }) => {

  const initialPageNums = []
  for (let i=1; i<=totalPages; i++) {
    initialPageNums.push(i)
  }

  const [updatedPageNums, setUpdatedPageNums] = useState(initialPageNums)
  const maxPagesToShow = 4  

  useEffect(() => {
    if (totalPages <= maxPagesToShow) return;
    else {
      let leftBarrierIndex = currentPage - Math.floor((maxPagesToShow - 1) / 2)
      leftBarrierIndex = leftBarrierIndex < 1 ? 1 : leftBarrierIndex
  
      let rightBarrierIndex = leftBarrierIndex + maxPagesToShow
      if( rightBarrierIndex > totalPages + 1) {
        rightBarrierIndex = totalPages + 1
        leftBarrierIndex = rightBarrierIndex - maxPagesToShow
      }
      const currentPagesArray = initialPageNums.slice(leftBarrierIndex - 1, rightBarrierIndex - 1)
      setUpdatedPageNums(currentPagesArray)    
    } 
  }, [currentPage])

  return {
    initialPageNums,
    updatedPageNums
  }
}