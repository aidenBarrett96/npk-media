import { useEffect, useState } from "react"

interface viewportWidthReturns {
  width: null | number
  isDesktop: null | boolean
}

export const useGetViewportWidth = (): viewportWidthReturns => {
  // Hold screen size in local state
  const [width, setWidth] = useState<number | null>(null)
  // Logic for whether is desktop
  const isDesktop = width ? width >= 960 : null
  //   Logic for if is client side
  const isClientSide = typeof window !== "undefined"

  //   Function to handle the size
  const handleSize = () => {
    // Guard clause for not client side
    if (!isClientSide) return
    // Set width within state
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    // Guard clause for not client side
    if (!isClientSide) return
    // Run handle size on first render
    handleSize()
    // Run handle size on resize
    window.addEventListener("resize", handleSize)
    // Remove event listener
    return () => window.removeEventListener("resize", handleSize)
  }, [])

  return {
    isDesktop,
    width,
  }
}