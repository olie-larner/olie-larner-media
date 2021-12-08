import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import SmoothScroll from "../utils/SmoothScroll/SmoothScroll"

const Layout = ({ isHomePage, children }) => {
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
    <SmoothScroll>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}

export default Layout
