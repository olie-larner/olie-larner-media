import React from "react"
import Footer from "./footer"
import SmoothScroll from "../utils/SmoothScroll/SmoothScroll"

const Layout = ({ children }) => {
  return (
    <SmoothScroll>
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

export default Layout
