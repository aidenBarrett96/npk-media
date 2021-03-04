import { useEffect, useState } from "react";
import { storyblok } from "../../../../utils/storyblok/storyblok";

export const useBlog = ({ content, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentBlogs, setCurrentBlogs] = useState(content)

  // Change page functions
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber)
    scrollTo({top: 0, behavior: 'smooth'})
  }
  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1)  
    scrollTo({top: 0, behavior: 'smooth'})
  }
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1)
    scrollTo({top: 0, behavior: 'smooth'})
  }

  // Make a new async request from the cms everytime 'currentPage' is updated
  useEffect(() => {
    const getNewPageData = async () => {
      const newPageData = await storyblok.get(`cdn/stories/?per_page=3&page=${currentPage}&starts_with=blog/`, { version: 'draft' })
      setCurrentBlogs(newPageData.data.stories)
    }
    getNewPageData()
  }, [currentPage])



  return {
    currentPage,
    currentBlogs,
    changePage,
    previousPage,
    nextPage,
    setCurrentPage
  }
}