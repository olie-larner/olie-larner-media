import React from "react"
import SmoothScroll from "../utils/SmoothScroll/SmoothScroll"

const Layout = ({ children }) => {
  return (
    <SmoothScroll>
      <main>{children}</main>
    </SmoothScroll>
  )
}

export default Layout
