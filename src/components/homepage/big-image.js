import React from "react"

const BigImage = image => {
  return (
    <div className={`w-full h-screen bg-center bg-cover ${image.image}`}></div>
  )
}

export default BigImage
