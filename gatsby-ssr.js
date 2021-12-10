/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"

export function onRenderBody({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) {
  setHeadComponents([
    <link key="0" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="1"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin
    />,
    <link
      key="2"
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />,
  ])
}
