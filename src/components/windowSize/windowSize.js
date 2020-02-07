import { useLayoutEffect, useState } from "react"

// useWindowSize to get the size of the client window
export const useWindowSize = () => {
  // Holding the size inside state
  const [size, setSize] = useState([0, 0])

  // Extract the size
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const desktop = size[0] >= 1024

  // Return the size
  return desktop
}
