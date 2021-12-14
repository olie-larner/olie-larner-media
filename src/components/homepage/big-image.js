import React from "react"
import { useInViewport } from "ahooks"
import classNames from "classnames"

const BigImage = image => {
  return (
    <div className={`w-full h-screen bg-center bg-cover ${image.image}`}></div>
  )
}

export default BigImage
