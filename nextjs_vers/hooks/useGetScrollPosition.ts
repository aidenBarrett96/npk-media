import { useEffect, useState } from "react"

export const useGetScrollPosition = (): number => {
  // Hold scroll position in local state
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  //   Guard clause for client side
  if (typeof window === "undefined") return scrollPosition

  //   Handle scroll function
  const scrollHandler = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    //   Add scroll listener on mount
    window.addEventListener("scroll", scrollHandler)

    // Remove scroll listener on unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return scrollPosition
}
