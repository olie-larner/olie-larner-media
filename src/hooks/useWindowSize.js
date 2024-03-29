import { useState, useEffect } from "react"

const isBrowser = typeof window !== "undefined"

export default function useWindowSize() {
  const getSize = () => {
    if (isBrowser) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
