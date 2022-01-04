import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./SmoothScroll.css"
import useWindowSize from "../../hooks/useWindowSize"
import Header from "../../components/header"

const SmoothScroll = ({ children }) => {
  // 1.
  const windowSize = useWindowSize()

  //2.
  const scrollingContainerRef = useRef()

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // 4.

  useEffect(() => {
    setBodyHeight()
  })

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`
  }

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler())
  }, [])

  const smoothScrollingHandler = () => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler())
  }

  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <Header title={title} />
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  )
}

export default SmoothScroll
