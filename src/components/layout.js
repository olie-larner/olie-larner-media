import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import SmoothScroll from "../utils/SmoothScroll/SmoothScroll"

const Layout = ({ isHomePage, children }) => {
  return (
    <SmoothScroll>
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

export default Layout
